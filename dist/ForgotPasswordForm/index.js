import '../chunk-89f1190a.js';
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
import '../SingleLineTextInput/index-1cce88a7.js';
import '../chunk-594efdf6.js';
import EmailInput, { emailValidationRules } from '../EmailInput/index.js';

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
  }];
};

var ForgotPasswordForm = function ForgotPasswordForm(props) {
  var GenericImplementation = createGenericFormComponent({
    name: 'forgot_password_form'
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

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes__default.func.isRequired
};

export default ForgotPasswordForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3Jnb3RQYXNzd29yZEZvcm0vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRW1haWxJbnB1dCwgeyBlbWFpbFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJy4uL0VtYWlsSW5wdXQnXG5pbXBvcnQgeyBjcmVhdGVHZW5lcmljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL0dlbmVyaWNGb3JtJ1xuXG5jb25zdCBnZXRGb3JtRmllbGRzID0gcHJvcHMgPT4gW1xuICB7XG4gICAgQ29tcG9uZW50OiBFbWFpbElucHV0LFxuICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgICBwbGFjZWhvbGRlcjogJ2pvaG4uc21pdGhAZW1haWwuY29tJ1xuICAgIH0sXG4gICAgZmllbGRDb25maWc6IHtcbiAgICAgIHJ1bGVzOiBlbWFpbFZhbGlkYXRpb25SdWxlc1xuICAgIH0sXG4gICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgbmFtZTogJ2VtYWlsJ1xuICB9XG5dXG5cbmNvbnN0IEZvcmdvdFBhc3N3b3JkRm9ybSA9IHByb3BzID0+IHtcbiAgY29uc3QgR2VuZXJpY0ltcGxlbWVudGF0aW9uID0gY3JlYXRlR2VuZXJpY0Zvcm1Db21wb25lbnQoe1xuICAgIG5hbWU6ICdmb3Jnb3RfcGFzc3dvcmRfZm9ybSdcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8R2VuZXJpY0ltcGxlbWVudGF0aW9uXG4gICAgICBmaWVsZHM9e2dldEZvcm1GaWVsZHMocHJvcHMpfVxuICAgICAgc3VibWl0QnV0dG9uQ29udGVudD1cIlN1Ym1pdFwiXG4gICAgICBzdWJtaXRCdXR0b25Qcm9wcz17eyBibG9jazogdHJ1ZSwgbXQ6IDQgfX1cbiAgICAgIG9uU3VibWl0PXtwcm9wcy5vblN1Ym1pdH1cbiAgICAvPlxuICApXG59XG5cbkZvcmdvdFBhc3N3b3JkRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQVC5mdW5jLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmRGb3JtXG4iXSwibmFtZXMiOlsiZ2V0Rm9ybUZpZWxkcyIsInByb3BzIiwiQ29tcG9uZW50IiwiRW1haWxJbnB1dCIsImNvbXBvbmVudFByb3BzIiwiYXV0b0ZvY3VzIiwicGxhY2Vob2xkZXIiLCJmaWVsZENvbmZpZyIsInJ1bGVzIiwiZW1haWxWYWxpZGF0aW9uUnVsZXMiLCJsYWJlbCIsIm5hbWUiLCJGb3Jnb3RQYXNzd29yZEZvcm0iLCJHZW5lcmljSW1wbGVtZW50YXRpb24iLCJjcmVhdGVHZW5lcmljRm9ybUNvbXBvbmVudCIsIlJlYWN0IiwiYmxvY2siLCJtdCIsIm9uU3VibWl0IiwicHJvcFR5cGVzIiwiUFQiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUs7U0FBSSxDQUM3QjtJQUNFQyxTQUFTLEVBQUVDLFVBRGI7SUFFRUMsY0FBYyxFQUFFO01BQ2RDLFNBQVMsRUFBRSxJQURHO01BRWRDLFdBQVcsRUFBRTtLQUpqQjtJQU1FQyxXQUFXLEVBQUU7TUFDWEMsS0FBSyxFQUFFQztLQVBYO0lBU0VDLEtBQUssRUFBRSxPQVRUO0lBVUVDLElBQUksRUFBRTtHQVhxQixDQUFKO0NBQTNCOztBQWVBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQVgsS0FBSyxFQUFJO01BQzVCWSxxQkFBcUIsR0FBR0MsMEJBQTBCLENBQUM7SUFDdkRILElBQUksRUFBRTtHQURnRCxDQUF4RDtTQUlFSSw2QkFBQyxxQkFBRDtJQUNFLE1BQU0sRUFBRWYsYUFBYSxDQUFDQyxBQUFELENBRHZCO0lBRUUsbUJBQW1CLEVBQUMsUUFGdEI7SUFHRSxpQkFBaUIsRUFBRTtNQUFFZSxLQUFLLEVBQUUsSUFBVDtNQUFlQyxFQUFFLEVBQUU7S0FIeEM7SUFJRSxRQUFRLEVBQUVoQixLQUFLLENBQUNpQjtJQUxwQjtDQUpGOztBQWNBTixrQkFBa0IsQ0FBQ08sU0FBbkIsR0FBK0I7RUFDN0JELFFBQVEsRUFBRUUsa0JBQUUsQ0FBQ0MsSUFBSCxDQUFRQztDQURwQjs7OzsifQ==
