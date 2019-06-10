import 'antd/dist/antd.less'
import '../src/vendorStyles'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
addDecorator(withInfo)
