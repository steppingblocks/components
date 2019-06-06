const glob = require('glob')
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProduction ? false : 'inline-source-map',
  entry: glob.sync('./src/**/index.js'),
  module: {
    rules: [
      {
        test: /\index.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: {
                hack: 'true; @import "./variables.less";'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CompressionPlugin(),
    new BundleAnalyzerPlugin({ analyzerMode: 'static' })
  ],
  resolve: {
    extensions: ['.less', '.js', '.json']
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/')
  }
}
