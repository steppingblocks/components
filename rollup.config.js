import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import filesize from 'rollup-plugin-filesize'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import multiInput from 'rollup-plugin-multi-input'
const theme = require('./theme')

export default {
  input: ['src/**/index.js'],
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: 'inline'
  },
  external: ['react', 'styled-components'],
  plugins: [
    external(),
    postcss({
      modules: true,
      extensions: ['.css', '.less'],
      use: [
        [
          'less',
          { javascriptEnabled: true, modifyVars: theme.getModifiedVars() }
        ]
      ]
    }),
    url(),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    filesize(),
    multiInput()
  ]
}
