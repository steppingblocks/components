import React from 'react'
import PT from 'prop-types'
import PasswordInput, { passwordValidationRules } from '../PasswordInput'
import { createGenericFormComponent } from '../GenericForm'

const getFormFields = props => [
  {
    Component: PasswordInput,
    componentProps: {},
    fieldConfig: {
      rules: passwordValidationRules
    },
    label: 'Password',
    name: 'password'
  },
  {
    Component: PasswordInput,
    componentProps: {},
    fieldConfig: {
      rules: passwordValidationRules
    },
    label: 'Confirm Password',
    name: 'passwordConfirmation'
  }
]

const ResetPasswordForm = props => {
  const GenericImplementation = createGenericFormComponent({
    name: 'reset_password_form'
  })
  return (
    <GenericImplementation
      fields={getFormFields(props)}
      submitButtonContent="Submit"
      submitButtonProps={{ block: true, mt: 4 }}
      onSubmit={props.onSubmit}
    />
  )
}

ResetPasswordForm.propTypes = {
  onSubmit: PT.func.isRequired
}

export default ResetPasswordForm
