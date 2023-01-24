/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '31.220.60.207',
        port: '',
        pathname: '/nextstore/**',
      },
    ],
  },
}

module.exports = nextConfig
