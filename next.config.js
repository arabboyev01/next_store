/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
