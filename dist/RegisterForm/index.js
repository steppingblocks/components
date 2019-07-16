import '../chunk-89f1190a.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-5732a1e2.js';
import '../withTheme/index-d1a984d4.js';
import 'styled-components';
import '../chunk-69193f69.js';
import '../chunk-94c4abeb.js';
import GenericForm, { getError } from '../GenericForm/index.js';
import '../chunk-b9a2ef76.js';
import '../chunk-27ab9880.js';
import 'react-dom';
import '../chunk-d79569b3.js';
import '../chunk-dc6fce77.js';
import '../chunk-ebe821e3.js';
import '../chunk-ef3ac92a.js';
import '../chunk-40ab7835.js';
import '../chunk-def42873.js';
import '../chunk-f27d627d.js';
import '../chunk-71699874.js';
import '../chunk-8820e6e0.js';
import '../chunk-6a997ef0.js';
import '../chunk-263f4733.js';
import '../chunk-a567c850.js';
import '../chunk-c35b7916.js';
import '../chunk-4f6d8eaf.js';
import '../CustomButton/index.js';
import '../chunk-c30b8a6e.js';
import '../chunk-cbb0cfa4.js';
import '../chunk-78db56d9.js';
import '../chunk-a99b813c.js';
import { r as requiredValidationRules, S as SingleLineTextInput } from '../SingleLineTextInput/index-1cce88a7.js';
import '../chunk-594efdf6.js';
import EmailInput, { emailValidationRules } from '../EmailInput/index.js';
import PasswordInput, { passwordValidationRules } from '../PasswordInput/index.js';

/**
 * Gets form fields
 * @param {Object} props
 */

var getFormFields = function getFormFields(props) {
  return [{
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
  }, {
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
  }, {
    Component: EmailInput,
    formItemProps: {
      label: 'Email'
    },
    inputProps: {
      autoFocus: true,
      placeholder: 'john.smith@email.com'
    },
    name: 'email'
  }, {
    Component: PasswordInput,
    formItemProps: {
      label: 'Password'
    },
    inputProps: {},
    name: 'password'
  }];
};
/**
 * Validation function
 * @param {Object} param
 */


var validate = function validate(_ref) {
  var email = _ref.email,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      password = _ref.password;
  return {
    email: getError(email, emailValidationRules, 'Invalid Email'),
    firstName: getError(firstName, requiredValidationRules, 'First name is required'),
    lastName: getError(lastName, requiredValidationRules, 'Last name is required'),
    password: getError(password, passwordValidationRules, 'Invalid Password')
  };
};

var RegisterForm = function RegisterForm(props) {
  var formFields = getFormFields();
  return React__default.createElement(GenericForm, {
    fields: formFields,
    formProps: {
      validate: validate,
      onSubmit: props.onSubmit
    },
    submitButtonContent: "Sign up",
    submitButtonProps: {
      block: true,
      mt: 4
    }
  });
};

RegisterForm.propTypes = {
  onSubmit: PropTypes__default.func.isRequired
};
RegisterForm.defaultProps = {
  onSubmit: console.log
};

export default RegisterForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZWdpc3RlckZvcm0vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRW1haWxJbnB1dCwgeyBlbWFpbFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJy4uL0VtYWlsSW5wdXQnXG5pbXBvcnQgUGFzc3dvcmRJbnB1dCwgeyBwYXNzd29yZFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJy4uL1Bhc3N3b3JkSW5wdXQnXG5pbXBvcnQgR2VuZXJpY0Zvcm0sIHsgZ2V0RXJyb3IgfSBmcm9tICcuLi9HZW5lcmljRm9ybSdcbmltcG9ydCBTaW5nbGVMaW5lVGV4dElucHV0LCB7XG4gIHJlcXVpcmVkVmFsaWRhdGlvblJ1bGVzXG59IGZyb20gJy4uL1NpbmdsZUxpbmVUZXh0SW5wdXQnXG5cbi8qKlxuICogR2V0cyBmb3JtIGZpZWxkc1xuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKi9cbmNvbnN0IGdldEZvcm1GaWVsZHMgPSBwcm9wcyA9PiBbXG4gIHtcbiAgICBDb21wb25lbnQ6IFNpbmdsZUxpbmVUZXh0SW5wdXQsXG4gICAgZm9ybUl0ZW1Qcm9wczoge1xuICAgICAgbGFiZWw6ICdGaXJzdCBuYW1lJ1xuICAgIH0sXG4gICAgaW5wdXRQcm9wczoge1xuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgICAgaWNvbjogJ3VzZXInLFxuICAgICAgcGxhY2Vob2xkZXI6ICdKb2huJ1xuICAgIH0sXG4gICAgbmFtZTogJ2ZpcnN0TmFtZSdcbiAgfSxcbiAge1xuICAgIENvbXBvbmVudDogU2luZ2xlTGluZVRleHRJbnB1dCxcbiAgICBmb3JtSXRlbVByb3BzOiB7XG4gICAgICBsYWJlbDogJ0xhc3QgbmFtZSdcbiAgICB9LFxuICAgIGlucHV0UHJvcHM6IHtcbiAgICAgIGF1dG9Gb2N1czogdHJ1ZSxcbiAgICAgIGljb246ICd1c2VyJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnU21pdGgnXG4gICAgfSxcbiAgICBuYW1lOiAnbGFzdE5hbWUnXG4gIH0sXG4gIHtcbiAgICBDb21wb25lbnQ6IEVtYWlsSW5wdXQsXG4gICAgZm9ybUl0ZW1Qcm9wczoge1xuICAgICAgbGFiZWw6ICdFbWFpbCdcbiAgICB9LFxuICAgIGlucHV0UHJvcHM6IHtcbiAgICAgIGF1dG9Gb2N1czogdHJ1ZSxcbiAgICAgIHBsYWNlaG9sZGVyOiAnam9obi5zbWl0aEBlbWFpbC5jb20nXG4gICAgfSxcbiAgICBuYW1lOiAnZW1haWwnXG4gIH0sXG4gIHtcbiAgICBDb21wb25lbnQ6IFBhc3N3b3JkSW5wdXQsXG4gICAgZm9ybUl0ZW1Qcm9wczoge1xuICAgICAgbGFiZWw6ICdQYXNzd29yZCdcbiAgICB9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIG5hbWU6ICdwYXNzd29yZCdcbiAgfVxuXVxuXG4vKipcbiAqIFZhbGlkYXRpb24gZnVuY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbVxuICovXG5jb25zdCB2YWxpZGF0ZSA9ICh7IGVtYWlsLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBwYXNzd29yZCB9KSA9PiAoe1xuICBlbWFpbDogZ2V0RXJyb3IoZW1haWwsIGVtYWlsVmFsaWRhdGlvblJ1bGVzLCAnSW52YWxpZCBFbWFpbCcpLFxuICBmaXJzdE5hbWU6IGdldEVycm9yKFxuICAgIGZpcnN0TmFtZSxcbiAgICByZXF1aXJlZFZhbGlkYXRpb25SdWxlcyxcbiAgICAnRmlyc3QgbmFtZSBpcyByZXF1aXJlZCdcbiAgKSxcbiAgbGFzdE5hbWU6IGdldEVycm9yKFxuICAgIGxhc3ROYW1lLFxuICAgIHJlcXVpcmVkVmFsaWRhdGlvblJ1bGVzLFxuICAgICdMYXN0IG5hbWUgaXMgcmVxdWlyZWQnXG4gICksXG4gIHBhc3N3b3JkOiBnZXRFcnJvcihwYXNzd29yZCwgcGFzc3dvcmRWYWxpZGF0aW9uUnVsZXMsICdJbnZhbGlkIFBhc3N3b3JkJylcbn0pXG5cbmNvbnN0IFJlZ2lzdGVyRm9ybSA9IHByb3BzID0+IHtcbiAgY29uc3QgZm9ybUZpZWxkcyA9IGdldEZvcm1GaWVsZHMocHJvcHMpXG4gIHJldHVybiAoXG4gICAgPEdlbmVyaWNGb3JtXG4gICAgICBmaWVsZHM9e2Zvcm1GaWVsZHN9XG4gICAgICBmb3JtUHJvcHM9e3tcbiAgICAgICAgdmFsaWRhdGUsXG4gICAgICAgIG9uU3VibWl0OiBwcm9wcy5vblN1Ym1pdFxuICAgICAgfX1cbiAgICAgIHN1Ym1pdEJ1dHRvbkNvbnRlbnQ9XCJTaWduIHVwXCJcbiAgICAgIHN1Ym1pdEJ1dHRvblByb3BzPXt7IGJsb2NrOiB0cnVlLCBtdDogNCB9fVxuICAgIC8+XG4gIClcbn1cblxuUmVnaXN0ZXJGb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFBULmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5SZWdpc3RlckZvcm0uZGVmYXVsdFByb3BzID0ge1xuICBvblN1Ym1pdDogY29uc29sZS5sb2dcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJGb3JtXG4iXSwibmFtZXMiOlsiZ2V0Rm9ybUZpZWxkcyIsInByb3BzIiwiQ29tcG9uZW50IiwiU2luZ2xlTGluZVRleHRJbnB1dCIsImZvcm1JdGVtUHJvcHMiLCJsYWJlbCIsImlucHV0UHJvcHMiLCJhdXRvRm9jdXMiLCJpY29uIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwiRW1haWxJbnB1dCIsIlBhc3N3b3JkSW5wdXQiLCJ2YWxpZGF0ZSIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwYXNzd29yZCIsImdldEVycm9yIiwiZW1haWxWYWxpZGF0aW9uUnVsZXMiLCJyZXF1aXJlZFZhbGlkYXRpb25SdWxlcyIsInBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzIiwiUmVnaXN0ZXJGb3JtIiwiZm9ybUZpZWxkcyIsIlJlYWN0Iiwib25TdWJtaXQiLCJibG9jayIsIm10IiwicHJvcFR5cGVzIiwiUFQiLCJmdW5jIiwiaXNS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
