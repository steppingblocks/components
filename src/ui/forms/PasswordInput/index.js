import React from 'react'
import SingleLineTextInput from '../SingleLineTextInput'

const PasswordInput = props => (
  <SingleLineTextInput icon="lock" type="password" {...props} />
)

PasswordInput.propTypes = {}

export default PasswordInput
