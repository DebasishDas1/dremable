/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false, // Clean URLs without trailing slash
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"], // Modern image formats
    minimumCacheTTL: 86400, // Cache images for 24 hours
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true, // Enable Gzip or Brotli compression
  i18n: {
    locales: ["en-IN", "hi-IN"], // Support both English and Hindi for Indian audience
    defaultLocale: "en-IN", // English (India) as default locale
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache control for performance
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
