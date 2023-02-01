/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextstore.in',
        port: '',
        pathname: '/nextstore',
      },
    ],
  },
}

module.exports = nextConfig
