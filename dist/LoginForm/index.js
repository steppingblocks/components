import '../chunk-039ee305.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-de2160d3.js';
import '@xstyled/styled-components';
import '../withTheme/index.js';
import '../chunk-bd0ca170.js';
import { createGenericFormComponent } from '../GenericForm/index.js';
import '../chunk-ccd1ee83.js';
import '../chunk-5c7b7697.js';
import 'react-dom';
import '../chunk-d79569b3.js';
import '../chunk-0e41642e.js';
import '../chunk-71fd30e4.js';
import '../chunk-26174fa5.js';
import '../chunk-687a7a24.js';
import '../chunk-26e478fc.js';
import '../chunk-00b923ae.js';
import '../chunk-8820e6e0.js';
import '../chunk-876b1421.js';
import '../chunk-cdd09aec.js';
import '../chunk-ee2530d1.js';
import '../chunk-73500ad2.js';
import '../chunk-ead10a8b.js';
import '../CustomButton/index.js';
import '../chunk-c30b8a6e.js';
import '../chunk-34c22bff.js';
import '../chunk-0caac9f0.js';
import '../chunk-5e1f7e4a.js';
import '../SingleLineTextInput/index.js';
import '../chunk-c0e929ab.js';
import EmailInput, { emailValidationRules } from '../EmailInput/index.js';
import PasswordInput, { passwordValidationRules } from '../PasswordInput/index.js';

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
  return React__default.createElement(GenericImplementation, {
    fields: getFormFields(),
    submitButtonContent: "Log in",
    submitButtonProps: {
      block: true,
      mt: 4
    },
    onSubmit: props.onSubmit
  });
};

LoginForm.propTypes = {
  onSubmit: PropTypes__default.func.isRequired
};

export default LoginForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2dpbkZvcm0vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRW1haWxJbnB1dCwgeyBlbWFpbFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJy4uL0VtYWlsSW5wdXQnXG5pbXBvcnQgUGFzc3dvcmRJbnB1dCwgeyBwYXNzd29yZFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJy4uL1Bhc3N3b3JkSW5wdXQnXG5pbXBvcnQgeyBjcmVhdGVHZW5lcmljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL0dlbmVyaWNGb3JtJ1xuXG5jb25zdCBnZXRGb3JtRmllbGRzID0gcHJvcHMgPT4gW1xuICB7XG4gICAgQ29tcG9uZW50OiBFbWFpbElucHV0LFxuICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgICBwbGFjZWhvbGRlcjogJ2pvaG4uc21pdGhAZW1haWwuY29tJ1xuICAgIH0sXG4gICAgZmllbGRDb25maWc6IHtcbiAgICAgIHJ1bGVzOiBlbWFpbFZhbGlkYXRpb25SdWxlc1xuICAgIH0sXG4gICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgbmFtZTogJ2VtYWlsJ1xuICB9LFxuICB7XG4gICAgQ29tcG9uZW50OiBQYXNzd29yZElucHV0LFxuICAgIGNvbXBvbmVudFByb3BzOiB7fSxcbiAgICBmaWVsZENvbmZpZzoge1xuICAgICAgcnVsZXM6IHBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzXG4gICAgfSxcbiAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcbiAgICBuYW1lOiAncGFzc3dvcmQnXG4gIH1cbl1cblxuY29uc3QgTG9naW5Gb3JtID0gcHJvcHMgPT4ge1xuICBjb25zdCBHZW5lcmljSW1wbGVtZW50YXRpb24gPSBjcmVhdGVHZW5lcmljRm9ybUNvbXBvbmVudCh7XG4gICAgbmFtZTogJ2xvZ2luX2Zvcm0nXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPEdlbmVyaWNJbXBsZW1lbnRhdGlvblxuICAgICAgZmllbGRzPXtnZXRGb3JtRmllbGRzKHByb3BzKX1cbiAgICAgIHN1Ym1pdEJ1dHRvbkNvbnRlbnQ9XCJMb2cgaW5cIlxuICAgICAgc3VibWl0QnV0dG9uUHJvcHM9e3sgYmxvY2s6IHRydWUsIG10OiA0IH19XG4gICAgICBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9XG4gICAgLz5cbiAgKVxufVxuXG5Mb2dpbkZvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUFQuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxuIl0sIm5hbWVzIjpbImdldEZvcm1GaWVsZHMiLCJwcm9wcyIsIkNvbXBvbmVudCIsIkVtYWlsSW5wdXQiLCJjb21wb25lbnRQcm9wcyIsImF1dG9Gb2N1cyIsInBsYWNlaG9sZGVyIiwiZmllbGRDb25maWciLCJydWxlcyIsImVtYWlsVmFsaWRhdGlvblJ1bGVzIiwibGFiZWwiLCJuYW1lIiwiUGFzc3dvcmRJbnB1dCIsInBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzIiwiTG9naW5Gb3JtIiwiR2VuZXJpY0ltcGxlbWVudGF0aW9uIiwiY3JlYXRlR2VuZXJpY0Zvcm1Db21wb25lbnQiLCJSZWFjdCIsImJsb2NrIiwibXQiLCJvblN1Ym1pdCIsInByb3BUeXBlcyIsIlBUIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUs7U0FBSSxDQUM3QjtJQUNFQyxTQUFTLEVBQUVDLFVBRGI7SUFFRUMsY0FBYyxFQUFFO01BQ2RDLFNBQVMsRUFBRSxJQURHO01BRWRDLFdBQVcsRUFBRTtLQUpqQjtJQU1FQyxXQUFXLEVBQUU7TUFDWEMsS0FBSyxFQUFFQztLQVBYO0lBU0VDLEtBQUssRUFBRSxPQVRUO0lBVUVDLElBQUksRUFBRTtHQVhxQixFQWE3QjtJQUNFVCxTQUFTLEVBQUVVLGFBRGI7SUFFRVIsY0FBYyxFQUFFLEVBRmxCO0lBR0VHLFdBQVcsRUFBRTtNQUNYQyxLQUFLLEVBQUVLO0tBSlg7SUFNRUgsS0FBSyxFQUFFLFVBTlQ7SUFPRUMsSUFBSSxFQUFFO0dBcEJxQixDQUFKO0NBQTNCOztBQXdCQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBYixLQUFLLEVBQUk7TUFDbkJjLHFCQUFxQixHQUFHQywwQkFBMEIsQ0FBQztJQUN2REwsSUFBSSxFQUFFO0dBRGdELENBQXhEO1NBSUVNLDZCQUFDLHFCQUFEO0lBQ0UsTUFBTSxFQUFFakIsYUFBYSxDQUFDQyxBQUFELENBRHZCO0lBRUUsbUJBQW1CLEVBQUMsUUFGdEI7SUFHRSxpQkFBaUIsRUFBRTtNQUFFaUIsS0FBSyxFQUFFLElBQVQ7TUFBZUMsRUFBRSxFQUFFO0tBSHhDO0lBSUUsUUFBUSxFQUFFbEIsS0FBSyxDQUFDbUI7SUFMcEI7Q0FKRjs7QUFjQU4sU0FBUyxDQUFDTyxTQUFWLEdBQXNCO0VBQ3BCRCxRQUFRLEVBQUVFLGtCQUFFLENBQUNDLElBQUgsQ0FBUUM7Q0FEcEI7Ozs7In0=
