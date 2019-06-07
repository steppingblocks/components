import React from 'react'
import { Button } from 'antd'
import { withTheme } from '../withTheme'

const CustomButton = ({ content, ...rest }) => (
  <Button {...rest}>{content}</Button>
)

export default withTheme(CustomButton)
