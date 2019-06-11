import React from 'react'
import PT from 'prop-types'
import SingleLineTextInput from '../SingleLineTextInput'
import { InputProps } from '../proptypes'

const EmailInput = props => <SingleLineTextInput icon="mail" {...props} />

EmailInput.propTypes = {
  ...InputProps
}

export default EmailInput

export const emailValidationRules = [
  { required: true, message: 'Required' },
  { type: 'email', message: 'Please provide a valid email' },
  { max: 250, message: 'Must be less than 250 characters' }
]
