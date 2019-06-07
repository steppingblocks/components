import React from 'react'
import SingleLineTextInput from '../SingleLineTextInput'

const PasswordInput = props => (
  <SingleLineTextInput icon="lock" type="password" {...props} />
)

PasswordInput.propTypes = {}

export default PasswordInput

export const passwordValidationRules = [
  { required: true, message: 'Required' },
  { max: 250, message: 'Must be less than 250 characters' }
]
