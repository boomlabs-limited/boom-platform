/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.**',
      },
      {
        protocol: 'ipfs',
        hostname: '**',
      }
    ],
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,
}

module.exports = nextConfig
