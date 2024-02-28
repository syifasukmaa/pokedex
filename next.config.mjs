/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
};

export default nextConfig;
