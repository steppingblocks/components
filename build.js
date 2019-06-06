const Bundler = require('parcel-bundler')

new Bundler('./src/index.js', {
  outDir: 'dist',
  target: 'browser',
  cache: true,
  sourceMaps: true,
  minify: true,
  watch: false
}).bundle()
