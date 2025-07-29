# Dexter Landing Page

An AI-powered DeFi agent landing page built with React, TypeScript, and Tailwind CSS.

## 🚀 Deployment to AWS

### Method 1: AWS Amplify (Recommended - Easiest)

AWS Amplify is the fastest way to deploy your React app with built-in CI/CD, custom domains, and global CDN.

#### Prerequisites

-   AWS Account
-   GitHub/GitLab repository with your code

#### Steps:

1. **Push your code to GitHub:**

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/yourusername/dexter-landing.git
    git push -u origin main
    ```

2. **Deploy with AWS Amplify:**

    - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
    - Click "New app" → "Host web app"
    - Connect your GitHub repository
    - Choose your repository and branch (main)
    - Amplify will auto-detect it's a React app
    - Build settings will be auto-configured:
        ```yaml
        version: 1
        frontend:
            phases:
                preBuild:
                    commands:
                        - npm ci
                build:
                    commands:
                        - npm run build
            artifacts:
                baseDirectory: dist
                files:
                    - "**/*"
        ```
    - Click "Save and deploy"

3. **Custom Domain (Optional):**
    - In Amplify console, go to "Domain management"
    - Add your custom domain
    - Amplify will handle SSL certificates automatically

#### Amplify CLI Alternative:

```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

### Method 2: AWS S3 + CloudFront (More Control)

For more control over caching, custom configurations, and cost optimization.

#### Prerequisites

-   AWS CLI installed and configured
-   AWS Account

#### Steps:

1. **Build your app:**

    ```bash
    npm run build
    ```

2. **Create S3 Bucket:**

    ```bash
    aws s3 mb s3://your-dexter-app-bucket --region us-east-1
    ```

3. **Configure bucket for static hosting:**

    ```bash
    aws s3 website s3://your-dexter-app-bucket --index-document index.html --error-document index.html
    ```

4. **Set bucket policy for public access:**

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGetObject",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::your-dexter-app-bucket/*"
            }
        ]
    }
    ```

5. **Upload your build:**

    ```bash
    aws s3 sync dist/ s3://your-dexter-app-bucket --delete
    ```

6. **Create CloudFront Distribution:**
    - Go to CloudFront console
    - Create distribution
    - Origin: your S3 bucket
    - Default root object: index.html
    - Error pages: 404 → /index.html (for SPA routing)

### Method 3: One-Click Deploy Scripts

Create these scripts for easy deployment:

#### For Amplify:

```bash
#!/bin/bash
echo "Building app..."
npm run build

echo "Deploying to Amplify..."
amplify publish
```

#### For S3:

```bash
#!/bin/bash
BUCKET_NAME="your-dexter-app-bucket"

echo "Building app..."
npm run build

echo "Syncing to S3..."
aws s3 sync dist/ s3://$BUCKET_NAME --delete

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "Deployment complete!"
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Build Optimization

The app is optimized for production with:

-   Code splitting for vendor libraries
-   Asset optimization
-   Tree shaking for unused code
-   Minification and compression
-   Modern ES modules for faster loading

## 🌐 Environment Variables

For production deployment, you may need to set environment variables:

```env
VITE_APP_TITLE=Dexter
VITE_TWITTER_URL=https://x.com/dexterOnSui
VITE_DISCORD_URL=https://discord.gg/UtFT9qV2
VITE_DOCS_URL=https://docs.dexterai.xyz/
```

## 📊 Performance

The app is built with performance in mind:

-   Lazy loading for non-critical components
-   Optimized images and SVGs
-   Minimal JavaScript bundle size
-   CDN delivery through AWS CloudFront
-   Gzip compression enabled

## 🛡️ Security

-   Content Security Policy headers
-   HTTPS enforced
-   No sensitive data in client-side code
-   Secure external link handling
