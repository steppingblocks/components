const path = require('path')

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  })

  return config
}
