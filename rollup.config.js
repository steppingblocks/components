import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import filesize from 'rollup-plugin-filesize'
import less from 'rollup-plugin-less'
import multiInput from 'rollup-plugin-multi-input'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import pkg from './package.json'

const env = process.env.NODE_ENV

export default {
  input: ['src/**/index.js'],
  output: {
    dir: 'dist',
    file: {
      es: pkg.module
    }[env],
    format: env
  },
  external: ['react', '@xstyled/styled-components'],
  plugins: [
    external(),
    postcss({
      modules: true,
      extensions: ['.css', '.less'],
      use: [['less', { javascriptEnabled: true }]]
    }),
    less(),
    url(),
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true,
      plugins: ['@babel/plugin-external-helpers']
    }),
    resolve(),
    commonjs(),
    filesize(),
    multiInput()
  ]
}
