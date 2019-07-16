import React from 'react'
import PT from 'prop-types'
import EmailInput, { emailValidationRules } from '../EmailInput'
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
  }
]

/**
 * Form validation function
 * @param {Object} param
 */
const validate = ({ email, password } = {}) => ({
  email: getError(email, emailValidationRules, 'Invalid Email')
})

const ForgotPasswordForm = props => {
  const formFields = getFormFields(props)

  return (
    <GenericForm
      fields={formFields}
      formProps={{
        validate,
        onSubmit: props.onSubmit
      }}
      submitButtonContent="Submit"
      submitButtonProps={{ block: true, mt: 4 }}
    />
  )
}

ForgotPasswordForm.propTypes = {
  onSubmit: PT.func.isRequired
}

ForgotPasswordForm.defaultProps = {
  onSubmit: console.log
}

export default ForgotPasswordForm
