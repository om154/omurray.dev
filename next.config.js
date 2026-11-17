const createMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

const withMDX = createMDX();

module.exports = withMDX(nextConfig);
