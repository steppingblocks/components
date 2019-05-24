import React from 'react'
import { Button } from 'antd'

const CustomButton = ({ content, ...rest }) => (
  <Button {...rest}>{content}</Button>
)

export default CustomButton
