/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/Mubassim-Khan/Blogs-MD/master/images/**',
      }
    ]
  }
}

module.exports = nextConfig
