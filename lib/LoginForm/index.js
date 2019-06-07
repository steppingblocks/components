import React from 'react';
import EmailInput, { emailValidationRules } from '../EmailInput';
import PasswordInput, { passwordValidationRules } from '../PasswordInput';
import { createGenericFormComponent } from '../GenericForm';

var getFormFields = function getFormFields(props) {
  return [{
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
  }, {
    Component: PasswordInput,
    componentProps: {},
    fieldConfig: {
      rules: passwordValidationRules
    },
    label: 'Password',
    name: 'password'
  }];
};

var LoginForm = function LoginForm(props) {
  var GenericImplementation = createGenericFormComponent({
    name: 'login_form'
  });
  return React.createElement(GenericImplementation, {
    fields: getFormFields(props),
    submitButtonContent: "Log in",
    submitButtonProps: {
      block: true,
      mt: 4
    }
  });
};

export default LoginForm;