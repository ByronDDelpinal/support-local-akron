/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
      {
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
    ],
  },
};

module.exports = nextConfig;
