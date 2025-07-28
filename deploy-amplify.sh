#!/bin/bash

# Amplify Deployment Script for Dexter Landing Page
echo "🚀 Starting Amplify deployment for Dexter..."

# Check if Amplify CLI is installed
if ! command -v amplify &> /dev/null; then
    echo "❌ Amplify CLI not found. Installing..."
    npm install -g @aws-amplify/cli
fi

# Build the application
echo "📦 Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

# Check if Amplify is initialized
if [ ! -d "amplify" ]; then
    echo "🔧 Initializing Amplify..."
    amplify init --yes
    amplify add hosting
fi

# Deploy to Amplify
echo "🌐 Deploying to AWS Amplify..."
amplify publish --yes

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🎉 Your Dexter landing page is now live!"
else
    echo "❌ Deployment failed. Please check the logs."
    exit 1
fi