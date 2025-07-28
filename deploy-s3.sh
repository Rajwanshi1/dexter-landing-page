#!/bin/bash

# S3 + CloudFront Deployment Script for Dexter Landing Page
# Configure these variables for your setup
BUCKET_NAME="dexter-landing-page-$(date +%s)"
REGION="us-east-1"
DISTRIBUTION_ID=""  # Set this if you have an existing CloudFront distribution

echo "🚀 Starting S3 deployment for Dexter..."

# Build the application
echo "📦 Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

# Create S3 bucket if it doesn't exist
echo "🪣 Creating S3 bucket: $BUCKET_NAME"
aws s3 mb s3://$BUCKET_NAME --region $REGION

if [ $? -ne 0 ]; then
    echo "❌ Failed to create bucket. It might already exist or you may lack permissions."
fi

# Enable static website hosting
echo "🌐 Configuring static website hosting..."
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document index.html

# Set bucket policy for public access
echo "🔓 Setting bucket policy for public access..."
cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json
rm bucket-policy.json

# Upload files to S3
echo "📤 Uploading files to S3..."
aws s3 sync dist/ s3://$BUCKET_NAME --delete --cache-control "public, max-age=31536000" --exclude "*.html" --exclude "*.json"
aws s3 sync dist/ s3://$BUCKET_NAME --delete --cache-control "public, max-age=0, must-revalidate" --include "*.html" --include "*.json"

# Invalidate CloudFront cache if distribution ID is provided
if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
fi

echo "✅ Deployment successful!"
echo "🌐 Website URL: http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo "💡 For production, set up CloudFront distribution for better performance and HTTPS"