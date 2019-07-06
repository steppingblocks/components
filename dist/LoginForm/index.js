import '../chunk-039ee305.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-5732a1e2.js';
import '@xstyled/styled-components';
import '../withTheme/index.js';
import '../chunk-218dc193.js';
import { createGenericFormComponent } from '../GenericForm/index.js';
import '../chunk-469aa2a1.js';
import '../chunk-55a8f221.js';
import 'react-dom';
import '../chunk-d79569b3.js';
import '../chunk-bbc6af60.js';
import '../chunk-e008480f.js';
import '../chunk-bbdab8a3.js';
import '../chunk-99207a3b.js';
import '../chunk-c27c29c8.js';
import '../chunk-f27d627d.js';
import '../chunk-4c226307.js';
import '../chunk-8820e6e0.js';
import '../chunk-e9a642ec.js';
import '../chunk-d1343d60.js';
import '../chunk-ee2530d1.js';
import '../chunk-c35b7916.js';
import '../chunk-ead10a8b.js';
import '../CustomButton/index.js';
import '../chunk-c30b8a6e.js';
import '../chunk-38979edb.js';
import '../chunk-945c35cc.js';
import '../chunk-5e1f7e4a.js';
import '../SingleLineTextInput/index.js';
import '../chunk-c855a38a.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2dpbkZvcm0vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRW1haWxJbnB1dCwgeyBlbWFpbFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJy4uL0VtYWlsSW5wdXQnXG5pbXBvcnQgUGFzc3dvcmRJbnB1dCwgeyBwYXNzd29yZFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJy4uL1Bhc3N3b3JkSW5wdXQnXG5pbXBvcnQgeyBjcmVhdGVHZW5lcmljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL0dlbmVyaWNGb3JtJ1xuXG5jb25zdCBnZXRGb3JtRmllbGRzID0gcHJvcHMgPT4gW1xuICB7XG4gICAgQ29tcG9uZW50OiBFbWFpbElucHV0LFxuICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgICBwbGFjZWhvbGRlcjogJ2pvaG4uc21pdGhAZW1haWwuY29tJ1xuICAgIH0sXG4gICAgZmllbGRDb25maWc6IHtcbiAgICAgIHJ1bGVzOiBlbWFpbFZhbGlkYXRpb25SdWxlc1xuICAgIH0sXG4gICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgbmFtZTogJ2VtYWlsJ1xuICB9LFxuICB7XG4gICAgQ29tcG9uZW50OiBQYXNzd29yZElucHV0LFxuICAgIGNvbXBvbmVudFByb3BzOiB7fSxcbiAgICBmaWVsZENvbmZpZzoge1xuICAgICAgcnVsZXM6IHBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzXG4gICAgfSxcbiAgICBsYWJlbDogJ1Bhc3N3b3JkJyxcbiAgICBuYW1lOiAncGFzc3dvcmQnXG4gIH1cbl1cblxuY29uc3QgTG9naW5Gb3JtID0gcHJvcHMgPT4ge1xuICBjb25zdCBHZW5lcmljSW1wbGVtZW50YXRpb24gPSBjcmVhdGVHZW5lcmljRm9ybUNvbXBvbmVudCh7XG4gICAgbmFtZTogJ2xvZ2luX2Zvcm0nXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPEdlbmVyaWNJbXBsZW1lbnRhdGlvblxuICAgICAgZmllbGRzPXtnZXRGb3JtRmllbGRzKHByb3BzKX1cbiAgICAgIHN1Ym1pdEJ1dHRvbkNvbnRlbnQ9XCJMb2cgaW5cIlxuICAgICAgc3VibWl0QnV0dG9uUHJvcHM9e3sgYmxvY2s6IHRydWUsIG10OiA0IH19XG4gICAgICBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9XG4gICAgLz5cbiAgKVxufVxuXG5Mb2dpbkZvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUFQuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxuIl0sIm5hbWVzIjpbImdldEZvcm1GaWVsZHMiLCJwcm9wcyIsIkNvbXBvbmVudCIsIkVtYWlsSW5wdXQiLCJjb21wb25lbnRQcm9wcyIsImF1dG9Gb2N1cyIsInBsYWNlaG9sZGVyIiwiZmllbGRDb25maWciLCJydWxlcyIsImVtYWlsVmFsaWRhdGlvblJ1bGVzIiwibGFiZWwiLCJuYW1lIiwiUGFzc3dvcmRJbnB1dCIsInBhc3N3b3JkVmFsaWRhdGlvblJ1bGVzIiwiTG9naW5Gb3JtIiwiR2VuZXJpY0ltcGxlbWVudGF0aW9uIiwiY3JlYXRlR2VuZXJpY0Zvcm1Db21wb25lbnQiLCJSZWFjdCIsImJsb2NrIiwibXQiLCJvblN1Ym1pdCIsInByb3BUeXBlcyIsIlBUIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLO1NBQUksQ0FDN0I7SUFDRUMsU0FBUyxFQUFFQyxVQURiO0lBRUVDLGNBQWMsRUFBRTtNQUNkQyxTQUFTLEVBQUUsSUFERztNQUVkQyxXQUFXLEVBQUU7S0FKakI7SUFNRUMsV0FBVyxFQUFFO01BQ1hDLEtBQUssRUFBRUM7S0FQWDtJQVNFQyxLQUFLLEVBQUUsT0FUVDtJQVVFQyxJQUFJLEVBQUU7R0FYcUIsRUFhN0I7SUFDRVQsU0FBUyxFQUFFVSxhQURiO0lBRUVSLGNBQWMsRUFBRSxFQUZsQjtJQUdFRyxXQUFXLEVBQUU7TUFDWEMsS0FBSyxFQUFFSztLQUpYO0lBTUVILEtBQUssRUFBRSxVQU5UO0lBT0VDLElBQUksRUFBRTtHQXBCcUIsQ0FBSjtDQUEzQjs7QUF3QkEsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQWIsS0FBSyxFQUFJO01BQ25CYyxxQkFBcUIsR0FBR0MsMEJBQTBCLENBQUM7SUFDdkRMLElBQUksRUFBRTtHQURnRCxDQUF4RDtTQUlFTSw2QkFBQyxxQkFBRDtJQUNFLE1BQU0sRUFBRWpCLGFBQWEsQ0FBQ0MsQUFBRCxDQUR2QjtJQUVFLG1CQUFtQixFQUFDLFFBRnRCO0lBR0UsaUJBQWlCLEVBQUU7TUFBRWlCLEtBQUssRUFBRSxJQUFUO01BQWVDLEVBQUUsRUFBRTtLQUh4QztJQUlFLFFBQVEsRUFBRWxCLEtBQUssQ0FBQ21CO0lBTHBCO0NBSkY7O0FBY0FOLFNBQVMsQ0FBQ08sU0FBVixHQUFzQjtFQUNwQkQsUUFBUSxFQUFFRSxrQkFBRSxDQUFDQyxJQUFILENBQVFDO0NBRHBCOzs7OyJ9
