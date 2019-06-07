const Bundler = require('parcel-bundler')

// const isProduction = process.env.NODE_ENV === 'production'

new Bundler('./src/index.js', {
  outDir: 'dist',
  target: 'browser',
  cache: true,
  sourceMaps: true,
  minify: true,
  watch: false
}).bundle()
