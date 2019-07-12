import '../chunk-05bf3f70.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-5732a1e2.js';
import '../withTheme/index-d1a984d4.js';
import 'styled-components';
import '../chunk-69193f69.js';
import '../chunk-94c4abeb.js';
import { createGenericFormComponent } from '../GenericForm/index.js';
import '../chunk-b9a2ef76.js';
import '../chunk-27ab9880.js';
import 'react-dom';
import '../chunk-d79569b3.js';
import '../chunk-dc6fce77.js';
import '../chunk-767e8fe1.js';
import '../chunk-4a7412b0.js';
import '../chunk-40ab7835.js';
import '../chunk-def42873.js';
import '../chunk-f27d627d.js';
import '../chunk-d28c801e.js';
import '../chunk-8820e6e0.js';
import '../chunk-6a997ef0.js';
import '../chunk-263f4733.js';
import '../chunk-a567c850.js';
import '../chunk-c35b7916.js';
import '../chunk-eb99831d.js';
import '../CustomButton/index.js';
import '../chunk-c30b8a6e.js';
import '../chunk-b6d4feb6.js';
import '../chunk-08d54451.js';
import '../chunk-a99b813c.js';
import '../SingleLineTextInput/index.js';
import '../chunk-594efdf6.js';
import PasswordInput, { passwordValidationRules } from '../PasswordInput/index.js';

var getFormFields = function getFormFields(props) {
  return [{
    Component: PasswordInput,
    componentProps: {},
    fieldConfig: {
      rules: passwordValidationRules
    },
    label: 'Password',
    name: 'password'
  }, {
    Component: PasswordInput,
    componentProps: {},
    fieldConfig: {
      rules: passwordValidationRules
    },
    label: 'Confirm Password',
    name: 'passwordConfirmation'
  }];
};

var ResetPasswordForm = function ResetPasswordForm(props) {
  var GenericImplementation = createGenericFormComponent({
    name: 'reset_password_form'
  });
  return React__default.createElement(GenericImplementation, {
    fields: getFormFields(),
    submitButtonContent: "Submit",
    submitButtonProps: {
      block: true,
      mt: 4
    },
    onSubmit: props.onSubmit
  });
};

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes__default.func.isRequired
};

export default ResetPasswordForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXNldFBhc3N3b3JkRm9ybS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBQYXNzd29yZElucHV0LCB7IHBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzIH0gZnJvbSAnLi4vUGFzc3dvcmRJbnB1dCdcbmltcG9ydCB7IGNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vR2VuZXJpY0Zvcm0nXG5cbmNvbnN0IGdldEZvcm1GaWVsZHMgPSBwcm9wcyA9PiBbXG4gIHtcbiAgICBDb21wb25lbnQ6IFBhc3N3b3JkSW5wdXQsXG4gICAgY29tcG9uZW50UHJvcHM6IHt9LFxuICAgIGZpZWxkQ29uZmlnOiB7XG4gICAgICBydWxlczogcGFzc3dvcmRWYWxpZGF0aW9uUnVsZXNcbiAgICB9LFxuICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxuICAgIG5hbWU6ICdwYXNzd29yZCdcbiAgfSxcbiAge1xuICAgIENvbXBvbmVudDogUGFzc3dvcmRJbnB1dCxcbiAgICBjb21wb25lbnRQcm9wczoge30sXG4gICAgZmllbGRDb25maWc6IHtcbiAgICAgIHJ1bGVzOiBwYXNzd29yZFZhbGlkYXRpb25SdWxlc1xuICAgIH0sXG4gICAgbGFiZWw6ICdDb25maXJtIFBhc3N3b3JkJyxcbiAgICBuYW1lOiAncGFzc3dvcmRDb25maXJtYXRpb24nXG4gIH1cbl1cblxuY29uc3QgUmVzZXRQYXNzd29yZEZvcm0gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IEdlbmVyaWNJbXBsZW1lbnRhdGlvbiA9IGNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50KHtcbiAgICBuYW1lOiAncmVzZXRfcGFzc3dvcmRfZm9ybSdcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8R2VuZXJpY0ltcGxlbWVudGF0aW9uXG4gICAgICBmaWVsZHM9e2dldEZvcm1GaWVsZHMocHJvcHMpfVxuICAgICAgc3VibWl0QnV0dG9uQ29udGVudD1cIlN1Ym1pdFwiXG4gICAgICBzdWJtaXRCdXR0b25Qcm9wcz17eyBibG9jazogdHJ1ZSwgbXQ6IDQgfX1cbiAgICAgIG9uU3VibWl0PXtwcm9wcy5vblN1Ym1pdH1cbiAgICAvPlxuICApXG59XG5cblJlc2V0UGFzc3dvcmRGb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFBULmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNldFBhc3N3b3JkRm9ybVxuIl0sIm5hbWVzIjpbImdldEZvcm1GaWVsZHMiLCJwcm9wcyIsIkNvbXBvbmVudCIsIlBhc3N3b3JkSW5wdXQiLCJjb21wb25lbnRQcm9wcyIsImZpZWxkQ29uZmlnIiwicnVsZXMiLCJwYXNzd29yZFZhbGlkYXRpb25SdWxlcyIsImxhYmVsIiwibmFtZSIsIlJlc2V0UGFzc3dvcmRGb3JtIiwiR2VuZXJpY0ltcGxlbWVudGF0aW9uIiwiY3JlYXRlR2VuZXJpY0Zvcm1Db21wb25lbnQiLCJSZWFjdCIsImJsb2NrIiwibXQiLCJvblN1Ym1pdCIsInByb3BUeXBlcyIsIlBUIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLO1NBQUksQ0FDN0I7SUFDRUMsU0FBUyxFQUFFQyxhQURiO0lBRUVDLGNBQWMsRUFBRSxFQUZsQjtJQUdFQyxXQUFXLEVBQUU7TUFDWEMsS0FBSyxFQUFFQztLQUpYO0lBTUVDLEtBQUssRUFBRSxVQU5UO0lBT0VDLElBQUksRUFBRTtHQVJxQixFQVU3QjtJQUNFUCxTQUFTLEVBQUVDLGFBRGI7SUFFRUMsY0FBYyxFQUFFLEVBRmxCO0lBR0VDLFdBQVcsRUFBRTtNQUNYQyxLQUFLLEVBQUVDO0tBSlg7SUFNRUMsS0FBSyxFQUFFLGtCQU5UO0lBT0VDLElBQUksRUFBRTtHQWpCcUIsQ0FBSjtDQUEzQjs7QUFxQkEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBVCxLQUFLLEVBQUk7TUFDM0JVLHFCQUFxQixHQUFHQywwQkFBMEIsQ0FBQztJQUN2REgsSUFBSSxFQUFFO0dBRGdELENBQXhEO1NBSUVJLDZCQUFDLHFCQUFEO0lBQ0UsTUFBTSxFQUFFYixhQUFhLENBQUNDLEFBQUQsQ0FEdkI7SUFFRSxtQkFBbUIsRUFBQyxRQUZ0QjtJQUdFLGlCQUFpQixFQUFFO01BQUVhLEtBQUssRUFBRSxJQUFUO01BQWVDLEVBQUUsRUFBRTtLQUh4QztJQUlFLFFBQVEsRUFBRWQsS0FBSyxDQUFDZTtJQUxwQjtDQUpGOztBQWNBTixpQkFBaUIsQ0FBQ08sU0FBbEIsR0FBOEI7RUFDNUJELFFBQVEsRUFBRUUsa0JBQUUsQ0FBQ0MsSUFBSCxDQUFRQztDQURwQjs7OzsifQ==
