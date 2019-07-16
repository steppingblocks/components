import React from 'react'
import validator from 'validator'
import SingleLineTextInput from '../SingleLineTextInput'
import { InputProps } from '../proptypes'

const EmailInput = props => {
  return <SingleLineTextInput icon="mail" {...props} />
}

EmailInput.propTypes = {
  ...InputProps
}

export default EmailInput

export const emailValidationRules = [validator.isEmail]
