/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'drive.google.com',
                port: ''
            },
        ]
    }
}

module.exports = nextConfig
