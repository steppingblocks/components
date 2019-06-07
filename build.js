const fs = require('fs')
const path = require('path')
const _fp = require('lodash/fp')
const Bundler = require('parcel-bundler')

const libDirs = fs.readdirSync('./src/lib')

const getEntries = _fp.pipe(
  _fp.map(dir => `${dir}/index.js`),
  _fp.map(entry => path.resolve(__dirname, 'src/lib', entry))
)

const entries = getEntries(libDirs)

console.log(entries)

new Bundler(entries, {
  outDir: 'dist/lib',
  target: 'browser',
  cache: true,
  sourceMaps: false,
  minify: true,
  watch: false
}).bundle()
