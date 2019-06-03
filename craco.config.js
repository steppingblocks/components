const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            '@link-color': '#FF9551',
            '@success-color': '#26ff79',
            '@warning-color': '#66310f',
            '@error-color': '#DC2E48',
            '@font-size-base': '14px',
            '@heading-color': 'rgba(0, 0, 0, 0.85)',
            '@text-color': 'rgba(0, 0, 0, 0.65)',
            '@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
            '@disabled-color': 'rgba(0, 0, 0, 0.25)',
            '@border-radius-base': '2px',
            '@border-color-base': '#D9D9D9',
            '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)'
          },
          javascriptEnabled: true
        }
      }
    }
  ]
}
