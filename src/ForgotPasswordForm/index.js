import React from 'react'
import PT from 'prop-types'
import EmailInput, { emailValidationRules } from '../EmailInput'
import { createGenericFormComponent } from '../GenericForm'

const getFormFields = props => [
  {
    Component: EmailInput,
    componentProps: {
      autoFocus: true,
      placeholder: 'john.smith@email.com'
    },
    fieldConfig: {
      rules: emailValidationRules
    },
    label: 'Email',
    name: 'email'
  }
]

const ForgotPasswordForm = props => {
  const GenericImplementation = createGenericFormComponent({
    name: 'forgot_password_form'
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

ForgotPasswordForm.propTypes = {
  onSubmit: PT.func.isRequired
}

export default ForgotPasswordForm
