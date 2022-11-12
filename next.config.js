/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tuk-cdn.s3.amazonaws.com', 'i.ibb.co','cdn.tuk.dev']
  },
  
}

module.exports = nextConfig
