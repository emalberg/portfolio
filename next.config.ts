import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Strapi CMS
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/**',
      },
      // Production Strapi (Strapi Cloud CDN)
      {
        protocol: 'https',
        hostname: 'shining-animal-0c08b674e5.media.strapiapp.com',
        pathname: '/**',
      },
    ],
  },
  
  // Security Headers Configuration
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          // Prevent clickjacking attacks
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          
          // Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          
          // Enable XSS protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          
          // Control browser permissions
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
          },
          
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Allow inline scripts for Next.js
              "style-src 'self' 'unsafe-inline'", // Allow inline styles for Tailwind
              "img-src 'self' data: blob: https: http:", // Allow images from various sources
              "font-src 'self' data:", // Allow fonts
              "connect-src 'self' https: http:", // Allow API calls to Strapi
              "frame-ancestors 'none'", // Prevent embedding
              "base-uri 'self'", // Restrict base tag
              "form-action 'self'", // Restrict form submissions
            ].join('; '),
          },
          
          // Additional security headers
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          
          // Prevent information disclosure
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'off',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
