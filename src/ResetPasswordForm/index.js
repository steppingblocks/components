import React from 'react'
import PT from 'prop-types'
import PasswordInput, { passwordValidationRules } from '../PasswordInput'
import GenericForm, { getError } from '../GenericForm'

/**
 * Gets form fields
 * @param {Object} props
 */
const getFormFields = props => [
  {
    Component: PasswordInput,
    formItemProps: {
      label: 'Password'
    },
    inputProps: {
      autoFocus: true,
      type: 'password'
    },
    name: 'password'
  },
  {
    Component: PasswordInput,
    formItemProps: {
      label: 'Confirm Password'
    },
    inputProps: {
      type: 'password'
    },
    name: 'passwordConfirmation'
  }
]

/**
 * Form validation function
 * @param {Object} param
 */
const validate = ({ password, passwordConfirmation } = {}) => ({
  password: getError(password, passwordValidationRules, 'Invalid Password'),
  passwordConfirmation: getError(
    passwordConfirmation,
    [...passwordValidationRules, () => password === passwordConfirmation],
    'Invalid Password Confirmation'
  )
})

const ResetPasswordForm = props => {
  const formFields = getFormFields(props)

  return (
    <GenericForm
      fields={formFields}
      formProps={{
        validate,
        onSubmit: props.onSubmit
      }}
      submitButtonContent="Reset password"
      submitButtonProps={{ block: true, mt: 4 }}
    />
  )
}

ResetPasswordForm.propTypes = {
  onSubmit: PT.func.isRequired
}

ResetPasswordForm.defaultProps = {
  onSubmit: console.log
}

export default ResetPasswordForm
