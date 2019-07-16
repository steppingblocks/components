import React from 'react'
import PT from 'prop-types'
import EmailInput, { emailValidationRules } from '../EmailInput'
import PasswordInput, { passwordValidationRules } from '../PasswordInput'
import GenericForm, { getError } from '../GenericForm'

/**
 * Gets form fields
 * @param {Object} props
 */
const getFormFields = props => [
  {
    Component: EmailInput,
    formItemProps: {
      label: 'Email'
    },
    inputProps: {
      autoFocus: true,
      placeholder: 'john.smith@email.com'
    },
    name: 'email'
  },
  {
    Component: PasswordInput,
    formItemProps: {
      label: 'Password'
    },
    inputProps: {},
    name: 'password'
  }
]

/**
 * Form validation function
 * @param {Object} param
 */
const validate = ({ email, password } = {}) => ({
  email: getError(email, emailValidationRules, 'Invalid Email'),
  password: getError(password, passwordValidationRules, 'Invalid Password')
})

const LoginForm = props => {
  const formFields = getFormFields(props)

  return (
    <GenericForm
      fields={formFields}
      formProps={{
        validate,
        onSubmit: props.onSubmit
      }}
      submitButtonContent="Log in"
      submitButtonProps={{ block: true, mt: 4 }}
    />
  )
}

LoginForm.propTypes = {
  onSubmit: PT.func.isRequired
}

LoginForm.defaultProps = {
  onSubmit: console.log
}

export default LoginForm
