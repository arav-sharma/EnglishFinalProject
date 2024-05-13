// next.config.mjs
import withOptimizedImages from 'next-export-optimize-images';

export default withOptimizedImages({
  output: 'export',
  trailingSlash: true,
});
