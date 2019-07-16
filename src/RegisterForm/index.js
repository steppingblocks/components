import React from 'react'
import PT from 'prop-types'
import EmailInput, { emailValidationRules } from '../EmailInput'
import PasswordInput, { passwordValidationRules } from '../PasswordInput'
import GenericForm, { getError } from '../GenericForm'
import SingleLineTextInput, {
  requiredValidationRules
} from '../SingleLineTextInput'

/**
 * Gets form fields
 * @param {Object} props
 */
const getFormFields = props => [
  {
    Component: SingleLineTextInput,
    formItemProps: {
      label: 'First name'
    },
    inputProps: {
      autoFocus: true,
      icon: 'user',
      placeholder: 'John'
    },
    name: 'firstName'
  },
  {
    Component: SingleLineTextInput,
    formItemProps: {
      label: 'Last name'
    },
    inputProps: {
      autoFocus: true,
      icon: 'user',
      placeholder: 'Smith'
    },
    name: 'lastName'
  },
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
 * Validation function
 * @param {Object} param
 */
const validate = ({ email, firstName, lastName, password }) => ({
  email: getError(email, emailValidationRules, 'Invalid Email'),
  firstName: getError(
    firstName,
    requiredValidationRules,
    'First name is required'
  ),
  lastName: getError(
    lastName,
    requiredValidationRules,
    'Last name is required'
  ),
  password: getError(password, passwordValidationRules, 'Invalid Password')
})

const RegisterForm = props => {
  const formFields = getFormFields(props)
  return (
    <GenericForm
      fields={formFields}
      formProps={{
        validate,
        onSubmit: props.onSubmit
      }}
      submitButtonContent="Sign up"
      submitButtonProps={{ block: true, mt: 4 }}
    />
  )
}

RegisterForm.propTypes = {
  onSubmit: PT.func.isRequired
}

RegisterForm.defaultProps = {
  onSubmit: console.log
}

export default RegisterForm
