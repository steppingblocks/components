import React from 'react'
import _ from 'lodash'
import validator from 'validator'
import SingleLineTextInput from '../SingleLineTextInput'

const PasswordInput = props => (
  <SingleLineTextInput icon="lock" type="password" {...props} />
)

PasswordInput.propTypes = {}

export default PasswordInput

export const passwordValidationRules = [
  (val = '') => validator.isLength(val, { min: 6, max: 250 })
]
