/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextstore.in',
        pathname: '/nextstore',
      },
    ],
  },
}

module.exports = nextConfig
