import { f as _toConsumableArray } from '../chunk-c69f4c9d.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-5732a1e2.js';
import '../withTheme/index-d1a984d4.js';
import 'styled-components';
import '../chunk-69193f69.js';
import '../chunk-ad42b34e.js';
import GenericForm, { getError } from '../GenericForm/index.js';
import '../chunk-2baafb0f.js';
import '../chunk-2d7a16f5.js';
import 'react-dom';
import '../chunk-d79569b3.js';
import '../chunk-57ecb02f.js';
import '../chunk-da40365a.js';
import '../chunk-6a42212f.js';
import '../chunk-9cf18510.js';
import '../chunk-59cd9b67.js';
import '../chunk-f27d627d.js';
import '../chunk-22f8ead1.js';
import '../chunk-8820e6e0.js';
import '../chunk-6146e3ae.js';
import '../chunk-a563de6c.js';
import '../chunk-3b023f70.js';
import '../chunk-c35b7916.js';
import '../chunk-4be27f4f.js';
import '../CustomButton/index.js';
import '../chunk-c30b8a6e.js';
import '../chunk-0e7e74d2.js';
import '../chunk-cfec5108.js';
import '../chunk-84e13b6b.js';
import '../SingleLineTextInput/index-412384c4.js';
import '../chunk-d29ca331.js';
import PasswordInput, { passwordValidationRules } from '../PasswordInput/index.js';

/**
 * Gets form fields
 * @param {Object} props
 */

var getFormFields = function getFormFields(props) {
  return [{
    Component: PasswordInput,
    formItemProps: {
      label: 'Password'
    },
    inputProps: {
      autoFocus: true,
      type: 'password'
    },
    name: 'password'
  }, {
    Component: PasswordInput,
    formItemProps: {
      label: 'Confirm Password'
    },
    inputProps: {
      type: 'password'
    },
    name: 'passwordConfirmation'
  }];
};
/**
 * Form validation function
 * @param {Object} param
 */


var validate = function validate() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      password = _ref.password,
      passwordConfirmation = _ref.passwordConfirmation;

  return {
    password: getError(password, passwordValidationRules, 'Invalid Password'),
    passwordConfirmation: getError(passwordConfirmation, [].concat(_toConsumableArray(passwordValidationRules), [function () {
      return password === passwordConfirmation;
    }]), 'Invalid Password Confirmation')
  };
};

var ResetPasswordForm = function ResetPasswordForm(props) {
  var formFields = getFormFields();
  return React__default.createElement(GenericForm, {
    fields: formFields,
    formProps: {
      validate: validate,
      onSubmit: props.onSubmit
    },
    submitButtonContent: "Reset password",
    submitButtonProps: {
      block: true,
      mt: 4
    }
  });
};

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes__default.func.isRequired
};
ResetPasswordForm.defaultProps = {
  onSubmit: console.log
};

export default ResetPasswordForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNldFBhc3N3b3JkRm9ybS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBQYXNzd29yZElucHV0LCB7IHBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzIH0gZnJvbSAnLi4vUGFzc3dvcmRJbnB1dCdcbmltcG9ydCBHZW5lcmljRm9ybSwgeyBnZXRFcnJvciB9IGZyb20gJy4uL0dlbmVyaWNGb3JtJ1xuXG4vKipcbiAqIEdldHMgZm9ybSBmaWVsZHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICovXG5jb25zdCBnZXRGb3JtRmllbGRzID0gcHJvcHMgPT4gW1xuICB7XG4gICAgQ29tcG9uZW50OiBQYXNzd29yZElucHV0LFxuICAgIGZvcm1JdGVtUHJvcHM6IHtcbiAgICAgIGxhYmVsOiAnUGFzc3dvcmQnXG4gICAgfSxcbiAgICBpbnB1dFByb3BzOiB7XG4gICAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgICB0eXBlOiAncGFzc3dvcmQnXG4gICAgfSxcbiAgICBuYW1lOiAncGFzc3dvcmQnXG4gIH0sXG4gIHtcbiAgICBDb21wb25lbnQ6IFBhc3N3b3JkSW5wdXQsXG4gICAgZm9ybUl0ZW1Qcm9wczoge1xuICAgICAgbGFiZWw6ICdDb25maXJtIFBhc3N3b3JkJ1xuICAgIH0sXG4gICAgaW5wdXRQcm9wczoge1xuICAgICAgdHlwZTogJ3Bhc3N3b3JkJ1xuICAgIH0sXG4gICAgbmFtZTogJ3Bhc3N3b3JkQ29uZmlybWF0aW9uJ1xuICB9XG5dXG5cbi8qKlxuICogRm9ybSB2YWxpZGF0aW9uIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1cbiAqL1xuY29uc3QgdmFsaWRhdGUgPSAoeyBwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtYXRpb24gfSA9IHt9KSA9PiAoe1xuICBwYXNzd29yZDogZ2V0RXJyb3IocGFzc3dvcmQsIHBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzLCAnSW52YWxpZCBQYXNzd29yZCcpLFxuICBwYXNzd29yZENvbmZpcm1hdGlvbjogZ2V0RXJyb3IoXG4gICAgcGFzc3dvcmRDb25maXJtYXRpb24sXG4gICAgWy4uLnBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzLCAoKSA9PiBwYXNzd29yZCA9PT0gcGFzc3dvcmRDb25maXJtYXRpb25dLFxuICAgICdJbnZhbGlkIFBhc3N3b3JkIENvbmZpcm1hdGlvbidcbiAgKVxufSlcblxuY29uc3QgUmVzZXRQYXNzd29yZEZvcm0gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGZvcm1GaWVsZHMgPSBnZXRGb3JtRmllbGRzKHByb3BzKVxuXG4gIHJldHVybiAoXG4gICAgPEdlbmVyaWNGb3JtXG4gICAgICBmaWVsZHM9e2Zvcm1GaWVsZHN9XG4gICAgICBmb3JtUHJvcHM9e3tcbiAgICAgICAgdmFsaWRhdGUsXG4gICAgICAgIG9uU3VibWl0OiBwcm9wcy5vblN1Ym1pdFxuICAgICAgfX1cbiAgICAgIHN1Ym1pdEJ1dHRvbkNvbnRlbnQ9XCJSZXNldCBwYXNzd29yZFwiXG4gICAgICBzdWJtaXRCdXR0b25Qcm9wcz17eyBibG9jazogdHJ1ZSwgbXQ6IDQgfX1cbiAgICAvPlxuICApXG59XG5cblJlc2V0UGFzc3dvcmRGb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFBULmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5SZXNldFBhc3N3b3JkRm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uU3VibWl0OiBjb25zb2xlLmxvZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNldFBhc3N3b3JkRm9ybVxuIl0sIm5hbWVzIjpbImdldEZvcm1GaWVsZHMiLCJwcm9wcyIsIkNvbXBvbmVudCIsIlBhc3N3b3JkSW5wdXQiLCJmb3JtSXRlbVByb3BzIiwibGFiZWwiLCJpbnB1dFByb3BzIiwiYXV0b0ZvY3VzIiwidHlwZSIsIm5hbWUiLCJ2YWxpZGF0ZSIsInBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtYXRpb24iLCJnZXRFcnJvciIsInBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzIiwiUmVzZXRQYXNzd29yZEZvcm0iLCJmb3JtRmllbGRzIiwiUmVhY3QiLCJvblN1Ym1pdCIsImJsb2NrIiwibXQiLCJwcm9wVHlwZXMiLCJQVCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7Ozs7QUFJQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUs7U0FBSSxDQUM3QjtJQUNFQyxTQUFTLEVBQUVDLGFBRGI7SUFFRUMsYUFBYSxFQUFFO01BQ2JDLEtBQUssRUFBRTtLQUhYO0lBS0VDLFVBQVUsRUFBRTtNQUNWQyxTQUFTLEVBQUUsSUFERDtNQUVWQyxJQUFJLEVBQUU7S0FQVjtJQVNFQyxJQUFJLEVBQUU7R0FWcUIsRUFZN0I7SUFDRVAsU0FBUyxFQUFFQyxhQURiO0lBRUVDLGFBQWEsRUFBRTtNQUNiQyxLQUFLLEVBQUU7S0FIWDtJQUtFQyxVQUFVLEVBQUU7TUFDVkUsSUFBSSxFQUFFO0tBTlY7SUFRRUMsSUFBSSxFQUFFO0dBcEJxQixDQUFKO0NBQTNCOzs7Ozs7O0FBNEJBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO2lGQUFzQyxFQUF0QztNQUFHQyxRQUFILFFBQUdBLFFBQUg7TUFBYUMsb0JBQWIsUUFBYUEsb0JBQWI7O1NBQThDO0lBQzdERCxRQUFRLEVBQUVFLFFBQVEsQ0FBQ0YsUUFBRCxFQUFXRyx1QkFBWCxFQUFvQyxrQkFBcEMsQ0FEMkM7SUFFN0RGLG9CQUFvQixFQUFFQyxRQUFRLENBQzVCRCxvQkFENEIsK0JBRXhCRSx1QkFGd0IsSUFFQzthQUFNSCxRQUFRLEtBQUtDLG9CQUFuQjtLQUZELElBRzVCLCtCQUg0QjtHQUZmO0NBQWpCOztBQVNBLElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQWQsS0FBSyxFQUFJO01BQzNCZSxVQUFVLEdBQUdoQixhQUFhLENBQUNDLEFBQUQsQ0FBaEM7U0FHRWdCLDZCQUFDLFdBQUQ7SUFDRSxNQUFNLEVBQUVELFVBRFY7SUFFRSxTQUFTLEVBQUU7TUFDVE4sUUFBUSxFQUFSQSxRQURTO01BRVRRLFFBQVEsRUFBRWpCLEtBQUssQ0FBQ2lCO0tBSnBCO0lBTUUsbUJBQW1CLEVBQUMsZ0JBTnRCO0lBT0UsaUJBQWlCLEVBQUU7TUFBRUMsS0FBSyxFQUFFLElBQVQ7TUFBZUMsRUFBRSxFQUFFOztJQVIxQztDQUhGOztBQWdCQUwsaUJBQWlCLENBQUNNLFNBQWxCLEdBQThCO0VBQzVCSCxRQUFRLEVBQUVJLGtCQUFFLENBQUNDLElBQUgsQ0FBUUM7Q0FEcEI7QUFJQVQsaUJBQWlCLENBQUNVLFlBQWxCLEdBQWlDO0VBQy9CUCxRQUFRLEVBQUVRLE9BQU8sQ0FBQ0M7Q0FEcEI7Ozs7In0=
