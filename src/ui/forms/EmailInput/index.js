import React from 'react'
import SingleLineTextInput from '../SingleLineTextInput'

const EmailInput = props => (
  <SingleLineTextInput
    icon="mail"
    placeholder="john.smith@email.com"
    {...props}
  />
)

EmailInput.propTypes = {}

export default EmailInput
