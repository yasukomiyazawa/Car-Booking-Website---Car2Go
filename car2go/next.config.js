/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js

module.exports = {
  // Add the following configuration for static HTML export
  target: 'experimental-serverless-trace', // Enables static HTML export
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Add more route mappings here if needed
    };
  },
  // Other configuration options...
};
