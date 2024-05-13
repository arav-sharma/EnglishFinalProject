// next.config.js
import withOptimizedImages from 'next-export-optimize-images';

export default withOptimizedImages({
  output: 'export',
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
