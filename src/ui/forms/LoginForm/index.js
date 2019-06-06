import React, { useState } from 'react'
import { Form } from 'antd'
import get from 'lodash/get'
import EmailInput, { emailValidationRules } from '../inputs/EmailInput'
import PasswordInput, { passwordValidationRules } from '../inputs/PasswordInput'
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
    />
  )
}

export default LoginForm
