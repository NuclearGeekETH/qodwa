/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  optimizeFonts: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  env: {
    JWT_SECRET: 'asdfghjklnbvcxzqwertyuiopmkioprewqasderfgnujm',
    AWS_SES_USER: '<AWS USER>',
    AWS_SES_PASSWORD: '<AWS SES PASSWORD>',
    CLOUD_NAME: 'abdoul95',
    UPLOAD_PRESETS: 'my-uploads',
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/abdoul95/image/upload',
    CLOUDINARY_VIDEO_URL:
      'https://api.cloudinary.com/v1_1/abdoul95/video/upload',
    CLOUDINARY_ZIP_URL: 'https://api.cloudinary.com/v1_1/abdoul95/raw/upload',
    STRIPE_SECRET_KEY: '<STRIPE SECRET KEY>',
    STRIPE_PUBLISHABLE_KEY: '<STRIPE PUBLISHABLE KEY>'
  }
}

module.exports = nextConfig
