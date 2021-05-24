const common = {
  color: true,
  entryPoints: ['index.js'],
  outdir: 'public',
  bundle: true,
  inject: ['esbuild/react-shim.js'],
  loader: {
    '.png': 'file',
    '.ttf': 'file',
    '.svg': 'file',
  },
  sourcemap: true,
  resolveExtensions: [
    '.web.tsx',
    '.web.ts',
    '.web.jsx',
    '.web.js',
    '.tsx',
    '.ts',
    '.jsx',
    '.js',
  ],
};
module.exports = common;
