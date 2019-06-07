const path = require('path')
const _fp = require('lodash/fp')
const Bundler = require('parcel-bundler')

// const isProduction = process.env.NODE_ENV === 'production'

const paths = [
  'hocs/withTheme',
  'ui/layout/CenteredLayout',
  'ui/layout/ConfirmModal',
  'ui/touchables/CustomButton',
  'ui/forms/inputs/EmailInput',
  'ui/forms/GenericForm',
  'ui/typography/ImportantStatistic',
  'ui/forms/LoginForm',
  'ui/layout/MultiColumnLayout',
  'ui/forms/inputs/PasswordInput',
  'ui/layout/UnauthenticatedHeader',
  'ui/layout/UnauthenticatedLayout'
]

const getEntries = _fp.pipe(
  _fp.map(start => `${start}/index.js`),
  _fp.map(file => path.resolve(__dirname, './src', file))
)

const entries = getEntries(paths)

console.log(entries)

new Bundler(entries, {
  outDir: 'dist',
  target: 'browser',
  cache: true,
  sourceMaps: false,
  minify: true,
  watch: false
}).bundle()
