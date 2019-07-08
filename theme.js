const _fp = require('lodash/fp')
const deepRename = require('deep-rename-keys')

const modifyVars = _fp.pipe(
  _fp.get('antdOverrides'),
  obj => deepRename(obj, _fp.kebabCase)
)

const antdTheme = {
  primaryColor: '#DC2E48',
  linkColor: '#1890ff',
  successColor: '#52c41a',
  warningColor: '#faad14',
  errorColor: '#f5222d',
  fontSizeBase: '14px',
  headingColor: 'rgba(0, 0, 0, 0,8)',
  headingColorSecondary: 'rgba(0, 0, 0, 0,5)',
  disabledColor: 'rgba(0, 0, 0, 0.25)',
  borderRadiusBase: '4px',
  borderColorBase: '#d9d9d9',
  boxShadowBase: '0 2px 8px rgba(0, 0, 0, 0.15)'
}

/**
 * Theme
 */
const getTheme = ({ antdOverrides = {} } = {}) => ({
  antdOverrides: Object.assign(antdTheme, antdOverrides)
})
exports.getTheme = getTheme

const getModifedVars = ({ antdOverrides = {} } = {}) =>
  modifyVars(getTheme({ antdOverrides }))
exports.getModifiedVars = getModifedVars
