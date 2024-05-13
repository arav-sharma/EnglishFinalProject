/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.js
const withOptimizedImages = require('next-export-optimize-images');

module.exports = withOptimizedImages({
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      ...defaultPathMap,
    };
  },
});


export default nextConfig;

