/** @type {import('next').NextConfig} */
const nextConfig = {};

import withOptimizedImages from 'next-export-optimize-images';

export default withOptimizedImages({
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


