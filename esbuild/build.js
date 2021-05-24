const common = require('./common');
require('esbuild').build({
  ...common,
  minify: true,
  outdir: 'public',
  define: {
    'process.env.NODE_ENV': '"production"',
    __DEV__: false,
    global: 'window',
  },
});
