import React from 'react'
import { Button } from 'antd'
import withTheme from '../withTheme'
import { ButtonProps } from '../proptypes'

const CustomButton = withTheme(({ content, ...rest }) => (
  <Button {...rest}>{content}</Button>
))

CustomButton.propTypes = ButtonProps

CustomButton.defaultProps = {}

CustomButton.displayName = 'CustomButton'

export default CustomButton
