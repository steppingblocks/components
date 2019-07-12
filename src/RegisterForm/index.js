import React from 'react'
import PT from 'prop-types'
import EmailInput, { emailValidationRules } from '../EmailInput'
import PasswordInput, { passwordValidationRules } from '../PasswordInput'
import { createGenericFormComponent } from '../GenericForm'
import SingleLineTextInput from '../SingleLineTextInput'

const getFormFields = props => [
  {
    Component: SingleLineTextInput,
    componentProps: {
      autoFocus: true,
      icon: 'user',
      ref: React.createRef()
    },
    fieldConfig: {
      rules: [
        { required: true, message: 'A value is required' },
        { max: 250, message: 'Must be less than 250 characters' }
      ]
    },
    label: 'First name',
    name: 'firstName'
  },
  {
    Component: SingleLineTextInput,
    componentProps: {
      icon: 'user',
      ref: React.createRef()
    },
    fieldConfig: {
      rules: [
        { required: true, message: 'A value is required' },
        { max: 250, message: 'Must be less than 250 characters' }
      ]
    },
    label: 'Last name',
    name: 'lastName'
  },
  {
    Component: EmailInput,
    componentProps: {
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

const RegisterForm = props => {
  const GenericImplementation = createGenericFormComponent({
    name: 'register_form'
  })
  return (
    <GenericImplementation
      fields={getFormFields(props)}
      submitButtonContent="Sign up"
      submitButtonProps={{ block: true, mt: 4 }}
      onSubmit={props.onSubmit}
    />
  )
}

RegisterForm.propTypes = {
  onSubmit: PT.func.isRequired
}

export default RegisterForm
