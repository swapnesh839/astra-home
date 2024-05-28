/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    trailingSlash: true,
    compiler: {
      removeConsole: true,
    },
  };
  
  module.exports = nextConfig;