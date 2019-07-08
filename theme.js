const _fp = require('lodash/fp')
const { get } = require('lodash')
const { shade, tint } = require('polished')
const deepRename = require('deep-rename-keys')

const getModifiedVars = _fp.pipe(
  _fp.get('antdOverrides'),
  obj => deepRename(obj, _fp.kebabCase)
)

/**
 * Theme
 */
const THEME = {
  antdOverrides: {
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
}
exports.theme = THEME
exports.modifedVars = getModifiedVars(THEME)

/**
 * Getter for theme props
 * @param {String} prop
 */
const getThemeProperty = prop => get(THEME, prop)

/**
 * Creates a fn that creates a tint of a color of a specific percentage
 * @param {Function} fn
 */
const createTinter = fn => percentage => tint(percentage, fn())
exports.createTinter = createTinter

/**
 * Creates a fn that creates a shade of a color of a specific percentage
 * @param {Function} fn
 */
const createShader = fn => percentage => shade(percentage, fn())
exports.createShader = createShader

exports.getPrimaryColor = () => getThemeProperty('antdOverrides.primaryColor')
exports.getPrimaryColorShade = createShader(exports.getPrimaryColor)
exports.getPrimaryColorTint = createTinter(exports.getPrimaryColor)
exports.getLinkColor = () => getThemeProperty('antdOverrides.linkColor')
exports.getLinkColorShade = createShader(exports.getLinkColor)
exports.getLinkColorTint = createTinter(exports.getLinkColor)
