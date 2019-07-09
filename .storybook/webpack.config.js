const path = require('path')
const theme = require('../theme')

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
          modifyVars: theme.getModifiedVars({
            antdOverrides: {}
          })
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  })

  return config
}
