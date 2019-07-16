import '../chunk-c69f4c9d.js';
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
import '../chunk-28019ed9.js';
import '../CustomButton/index.js';
import '../chunk-c30b8a6e.js';
import '../chunk-cbb0cfa4.js';
import '../chunk-78db56d9.js';
import '../chunk-a99b813c.js';
import '../SingleLineTextInput/index-d9f19098.js';
import '../chunk-594efdf6.js';
import EmailInput, { emailValidationRules } from '../EmailInput/index.js';
import PasswordInput, { passwordValidationRules } from '../PasswordInput/index.js';

/**
 * Gets form fields
 * @param {Object} props
 */

var getFormFields = function getFormFields(props) {
  return [{
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
 * Form validation function
 * @param {Object} param
 */


var validate = function validate() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      email = _ref.email,
      password = _ref.password;

  return {
    email: getError(email, emailValidationRules, 'Invalid Email'),
    password: getError(password, passwordValidationRules, 'Invalid Password')
  };
};

var LoginForm = function LoginForm(props) {
  var formFields = getFormFields();
  return React__default.createElement(GenericForm, {
    fields: formFields,
    formProps: {
      validate: validate,
      onSubmit: props.onSubmit
    },
    submitButtonContent: "Log in",
    submitButtonProps: {
      block: true,
      mt: 4
    }
  });
};

LoginForm.propTypes = {
  onSubmit: PropTypes__default.func.isRequired
};
LoginForm.defaultProps = {
  onSubmit: console.log
};

export default LoginForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2dpbkZvcm0vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRW1haWxJbnB1dCwgeyBlbWFpbFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJy4uL0VtYWlsSW5wdXQnXG5pbXBvcnQgUGFzc3dvcmRJbnB1dCwgeyBwYXNzd29yZFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJy4uL1Bhc3N3b3JkSW5wdXQnXG5pbXBvcnQgR2VuZXJpY0Zvcm0sIHsgZ2V0RXJyb3IgfSBmcm9tICcuLi9HZW5lcmljRm9ybSdcblxuLyoqXG4gKiBHZXRzIGZvcm0gZmllbGRzXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqL1xuY29uc3QgZ2V0Rm9ybUZpZWxkcyA9IHByb3BzID0+IFtcbiAge1xuICAgIENvbXBvbmVudDogRW1haWxJbnB1dCxcbiAgICBmb3JtSXRlbVByb3BzOiB7XG4gICAgICBsYWJlbDogJ0VtYWlsJ1xuICAgIH0sXG4gICAgaW5wdXRQcm9wczoge1xuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgICAgcGxhY2Vob2xkZXI6ICdqb2huLnNtaXRoQGVtYWlsLmNvbSdcbiAgICB9LFxuICAgIG5hbWU6ICdlbWFpbCdcbiAgfSxcbiAge1xuICAgIENvbXBvbmVudDogUGFzc3dvcmRJbnB1dCxcbiAgICBmb3JtSXRlbVByb3BzOiB7XG4gICAgICBsYWJlbDogJ1Bhc3N3b3JkJ1xuICAgIH0sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgbmFtZTogJ3Bhc3N3b3JkJ1xuICB9XG5dXG5cbi8qKlxuICogRm9ybSB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1cbiAqL1xuY29uc3QgdmFsaWRhdGUgPSAoeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHt9KSA9PiAoe1xuICBlbWFpbDogZ2V0RXJyb3IoZW1haWwsIGVtYWlsVmFsaWRhdGlvblJ1bGVzLCAnSW52YWxpZCBFbWFpbCcpLFxuICBwYXNzd29yZDogZ2V0RXJyb3IocGFzc3dvcmQsIHBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzLCAnSW52YWxpZCBQYXNzd29yZCcpXG59KVxuXG5jb25zdCBMb2dpbkZvcm0gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGZvcm1GaWVsZHMgPSBnZXRGb3JtRmllbGRzKHByb3BzKVxuXG4gIHJldHVybiAoXG4gICAgPEdlbmVyaWNGb3JtXG4gICAgICBmaWVsZHM9e2Zvcm1GaWVsZHN9XG4gICAgICBmb3JtUHJvcHM9e3tcbiAgICAgICAgdmFsaWRhdGUsXG4gICAgICAgIG9uU3VibWl0OiBwcm9wcy5vblN1Ym1pdFxuICAgICAgfX1cbiAgICAgIHN1Ym1pdEJ1dHRvbkNvbnRlbnQ9XCJMb2cgaW5cIlxuICAgICAgc3VibWl0QnV0dG9uUHJvcHM9e3sgYmxvY2s6IHRydWUsIG10OiA0IH19XG4gICAgLz5cbiAgKVxufVxuXG5Mb2dpbkZvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUFQuZnVuYy5pc1JlcXVpcmVkXG59XG5cbkxvZ2luRm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uU3VibWl0OiBjb25zb2xlLmxvZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1cbiJdLCJuYW1lcyI6WyJnZXRGb3JtRmllbGRzIiwicHJvcHMiLCJDb21wb25lbnQiLCJFbWFpbElucHV0IiwiZm9ybUl0ZW1Qcm9wcyIsImxhYmVsIiwiaW5wdXRQcm9wcyIsImF1dG9Gb2N1cyIsInBsYWNlaG9sZGVyIiwibmFtZSIsIlBhc3N3b3JkSW5wdXQiLCJ2YWxpZGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJnZXRFcnJvciIsImVtYWlsVmFsaWRhdGlvblJ1bGVzIiwicGFzc3dvcmRWYWxpZGF0aW9uUnVsZXMiLCJMb2dpbkZvcm0iLCJmb3JtRmllbGRzIiwiUmVhY3QiLCJvblN1Ym1pdCIsImJsb2NrIiwibXQiLCJwcm9wVHlwZXMiLCJQVCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7Ozs7O0FBSUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLO1NBQUksQ0FDN0I7SUFDRUMsU0FBUyxFQUFFQyxVQURiO0lBRUVDLGFBQWEsRUFBRTtNQUNiQyxLQUFLLEVBQUU7S0FIWDtJQUtFQyxVQUFVLEVBQUU7TUFDVkMsU0FBUyxFQUFFLElBREQ7TUFFVkMsV0FBVyxFQUFFO0tBUGpCO0lBU0VDLElBQUksRUFBRTtHQVZxQixFQVk3QjtJQUNFUCxTQUFTLEVBQUVRLGFBRGI7SUFFRU4sYUFBYSxFQUFFO01BQ2JDLEtBQUssRUFBRTtLQUhYO0lBS0VDLFVBQVUsRUFBRSxFQUxkO0lBTUVHLElBQUksRUFBRTtHQWxCcUIsQ0FBSjtDQUEzQjs7Ozs7OztBQTBCQSxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVztpRkFBdUIsRUFBdkI7TUFBR0MsS0FBSCxRQUFHQSxLQUFIO01BQVVDLFFBQVYsUUFBVUEsUUFBVjs7U0FBK0I7SUFDOUNELEtBQUssRUFBRUUsUUFBUSxDQUFDRixLQUFELEVBQVFHLG9CQUFSLEVBQThCLGVBQTlCLENBRCtCO0lBRTlDRixRQUFRLEVBQUVDLFFBQVEsQ0FBQ0QsUUFBRCxFQUFXRyx1QkFBWCxFQUFvQyxrQkFBcEM7R0FGSDtDQUFqQjs7QUFLQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBaEIsS0FBSyxFQUFJO01BQ25CaUIsVUFBVSxHQUFHbEIsYUFBYSxDQUFDQyxBQUFELENBQWhDO1NBR0VrQiw2QkFBQyxXQUFEO0lBQ0UsTUFBTSxFQUFFRCxVQURWO0lBRUUsU0FBUyxFQUFFO01BQ1RQLFFBQVEsRUFBUkEsUUFEUztNQUVUUyxRQUFRLEVBQUVuQixLQUFLLENBQUNtQjtLQUpwQjtJQU1FLG1CQUFtQixFQUFDLFFBTnRCO0lBT0UsaUJBQWlCLEVBQUU7TUFBRUMsS0FBSyxFQUFFLElBQVQ7TUFBZUMsRUFBRSxFQUFFOztJQVIxQztDQUhGOztBQWdCQUwsU0FBUyxDQUFDTSxTQUFWLEdBQXNCO0VBQ3BCSCxRQUFRLEVBQUVJLGtCQUFFLENBQUNDLElBQUgsQ0FBUUM7Q0FEcEI7QUFJQVQsU0FBUyxDQUFDVSxZQUFWLEdBQXlCO0VBQ3ZCUCxRQUFRLEVBQUVRLE9BQU8sQ0FBQ0M7Q0FEcEI7Ozs7In0=
