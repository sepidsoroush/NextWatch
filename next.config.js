/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ["m.media-amazon.com", "upload.wikimedia.org"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
