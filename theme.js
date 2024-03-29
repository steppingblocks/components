const _ = require('lodash')
const _fp = require('lodash/fp')
const deepRename = require('deep-rename-keys')

const modifyVars = _fp.pipe(
  _fp.get('antdOverrides'),
  obj => deepRename(obj, _fp.kebabCase)
)

const antdTheme = {
  primaryColor: '#5099DE',
  linkColor: '5099DE',
  successColor: '#30BC9D',
  warningColor: '#FF9552',
  errorColor: '#EE6352',
  fontSizeBase: '14px',
  headingColor: 'rgba(0, 0, 0, 0.8)',
  headingColorSecondary: 'rgba(0, 0, 0, 0.5)',
  disabledColor: 'rgba(0, 0, 0, 0.25)',
  borderRadiusBase: '4px',
  borderColorBase: '#d9d9d9',
  boxShadowBase: '0 2px 8px rgba(0, 0, 0, 0.15)'
}

/**
 * Theme
 */
const getTheme = (params = {}) => {
  const antdOverrides = Object.assign(
    antdTheme,
    _.get(params, 'antdOverrides', {})
  )
  return _.merge(params, { antdOverrides })
}
exports.getTheme = getTheme

const getModifedVars = (params = {}) => modifyVars(getTheme(params))
exports.getModifiedVars = getModifedVars
