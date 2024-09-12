// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**", // Allow all paths for images
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**", // Allow all paths for images
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/**", // Allow all paths for images
      },
    ],
    minimumCacheTTL: 60, // Cache images for at least 60 seconds
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Adjust image sizes
  },
};

module.exports = nextConfig;
