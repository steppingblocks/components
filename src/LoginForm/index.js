import React from 'react'
import PT from 'prop-types'
import EmailInput, { emailValidationRules } from '../EmailInput'
import PasswordInput, { passwordValidationRules } from '../PasswordInput'
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
  },
  {
    Component: PasswordInput,
    componentProps: {},
    fieldConfig: {
      rules: passwordValidationRules
    },
    label: 'Password',
    name: 'password'
  }
]

const LoginForm = props => {
  const GenericImplementation = createGenericFormComponent({
    name: 'login_form'
  })
  return (
    <GenericImplementation
      fields={getFormFields(props)}
      submitButtonContent="Log in"
      submitButtonProps={{ block: true, mt: 4 }}
      onSubmit={props.onSubmit}
    />
  )
}

LoginForm.propTypes = {
  onSubmit: PT.func.isRequired
}

export default LoginForm
