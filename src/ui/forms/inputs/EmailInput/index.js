import React from 'react'
import SingleLineTextInput from '../SingleLineTextInput'

const EmailInput = props => <SingleLineTextInput icon="mail" {...props} />

EmailInput.propTypes = {}

export default EmailInput

export const emailValidationRules = [
  { required: true, message: 'Required' },
  { type: 'email', message: 'Please provide a valid email' },
  { max: 250, message: 'Must be less than 250 characters' }
]
