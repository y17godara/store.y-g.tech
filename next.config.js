/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
