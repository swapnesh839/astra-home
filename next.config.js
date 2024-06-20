/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // compiler: {
  //   removeConsole: false,
  // },
  basePath: '/newstarlly',
  assetPrefix: '/newstarlly/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
