const common = require('./common');
require('esbuild').serve(
  { servedir: 'public' },
  {
    ...common,
    minify: false,
    define: {
      'process.env.NODE_ENV': '"development"',
      __DEV__: true,
      global: 'window',
    },
  },
);
