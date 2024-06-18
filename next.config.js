/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    trailingSlash: true,
    compiler: {
      removeConsole: true,
    },
    // basePath: '/newstarlly',
  };
  
  module.exports = nextConfig;