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
import SingleLineTextInput from '../SingleLineTextInput/index.js';
import '../chunk-594efdf6.js';
import EmailInput, { emailValidationRules } from '../EmailInput/index.js';
import PasswordInput, { passwordValidationRules } from '../PasswordInput/index.js';

var getFormFields = function getFormFields(props) {
  return [{
    Component: SingleLineTextInput,
    componentProps: {
      autoFocus: true,
      icon: 'user',
      ref: React__default.createRef()
    },
    fieldConfig: {
      rules: [{
        required: true,
        message: 'A value is required'
      }, {
        max: 250,
        message: 'Must be less than 250 characters'
      }]
    },
    label: 'First name',
    name: 'firstName'
  }, {
    Component: SingleLineTextInput,
    componentProps: {
      icon: 'user',
      ref: React__default.createRef()
    },
    fieldConfig: {
      rules: [{
        required: true,
        message: 'A value is required'
      }, {
        max: 250,
        message: 'Must be less than 250 characters'
      }]
    },
    label: 'Last name',
    name: 'lastName'
  }, {
    Component: EmailInput,
    componentProps: {
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

var RegisterForm = function RegisterForm(props) {
  var GenericImplementation = createGenericFormComponent({
    name: 'register_form'
  });
  return React__default.createElement(GenericImplementation, {
    fields: getFormFields(),
    submitButtonContent: "Sign up",
    submitButtonProps: {
      block: true,
      mt: 4
    },
    onSubmit: props.onSubmit
  });
};

RegisterForm.propTypes = {
  onSubmit: PropTypes__default.func.isRequired
};

export default RegisterForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZWdpc3RlckZvcm0vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRW1haWxJbnB1dCwgeyBlbWFpbFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJy4uL0VtYWlsSW5wdXQnXG5pbXBvcnQgUGFzc3dvcmRJbnB1dCwgeyBwYXNzd29yZFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJy4uL1Bhc3N3b3JkSW5wdXQnXG5pbXBvcnQgeyBjcmVhdGVHZW5lcmljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL0dlbmVyaWNGb3JtJ1xuaW1wb3J0IFNpbmdsZUxpbmVUZXh0SW5wdXQgZnJvbSAnLi4vU2luZ2xlTGluZVRleHRJbnB1dCdcblxuY29uc3QgZ2V0Rm9ybUZpZWxkcyA9IHByb3BzID0+IFtcbiAge1xuICAgIENvbXBvbmVudDogU2luZ2xlTGluZVRleHRJbnB1dCxcbiAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgICAgaWNvbjogJ3VzZXInLFxuICAgICAgcmVmOiBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIH0sXG4gICAgZmllbGRDb25maWc6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdBIHZhbHVlIGlzIHJlcXVpcmVkJyB9LFxuICAgICAgICB7IG1heDogMjUwLCBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gMjUwIGNoYXJhY3RlcnMnIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGxhYmVsOiAnRmlyc3QgbmFtZScsXG4gICAgbmFtZTogJ2ZpcnN0TmFtZSdcbiAgfSxcbiAge1xuICAgIENvbXBvbmVudDogU2luZ2xlTGluZVRleHRJbnB1dCxcbiAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgaWNvbjogJ3VzZXInLFxuICAgICAgcmVmOiBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIH0sXG4gICAgZmllbGRDb25maWc6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdBIHZhbHVlIGlzIHJlcXVpcmVkJyB9LFxuICAgICAgICB7IG1heDogMjUwLCBtZXNzYWdlOiAnTXVzdCBiZSBsZXNzIHRoYW4gMjUwIGNoYXJhY3RlcnMnIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGxhYmVsOiAnTGFzdCBuYW1lJyxcbiAgICBuYW1lOiAnbGFzdE5hbWUnXG4gIH0sXG4gIHtcbiAgICBDb21wb25lbnQ6IEVtYWlsSW5wdXQsXG4gICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgIHBsYWNlaG9sZGVyOiAnam9obi5zbWl0aEBlbWFpbC5jb20nXG4gICAgfSxcbiAgICBmaWVsZENvbmZpZzoge1xuICAgICAgcnVsZXM6IGVtYWlsVmFsaWRhdGlvblJ1bGVzXG4gICAgfSxcbiAgICBsYWJlbDogJ0VtYWlsJyxcbiAgICBuYW1lOiAnZW1haWwnXG4gIH0sXG4gIHtcbiAgICBDb21wb25lbnQ6IFBhc3N3b3JkSW5wdXQsXG4gICAgY29tcG9uZW50UHJvcHM6IHt9LFxuICAgIGZpZWxkQ29uZmlnOiB7XG4gICAgICBydWxlczogcGFzc3dvcmRWYWxpZGF0aW9uUnVsZXNcbiAgICB9LFxuICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxuICAgIG5hbWU6ICdwYXNzd29yZCdcbiAgfVxuXVxuXG5jb25zdCBSZWdpc3RlckZvcm0gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IEdlbmVyaWNJbXBsZW1lbnRhdGlvbiA9IGNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50KHtcbiAgICBuYW1lOiAncmVnaXN0ZXJfZm9ybSdcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8R2VuZXJpY0ltcGxlbWVudGF0aW9uXG4gICAgICBmaWVsZHM9e2dldEZvcm1GaWVsZHMocHJvcHMpfVxuICAgICAgc3VibWl0QnV0dG9uQ29udGVudD1cIlNpZ24gdXBcIlxuICAgICAgc3VibWl0QnV0dG9uUHJvcHM9e3sgYmxvY2s6IHRydWUsIG10OiA0IH19XG4gICAgICBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9XG4gICAgLz5cbiAgKVxufVxuXG5SZWdpc3RlckZvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUFQuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybVxuIl0sIm5hbWVzIjpbImdldEZvcm1GaWVsZHMiLCJwcm9wcyIsIkNvbXBvbmVudCIsIlNpbmdsZUxpbmVUZXh0SW5wdXQiLCJjb21wb25lbnRQcm9wcyIsImF1dG9Gb2N1cyIsImljb24iLCJyZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImZpZWxkQ29uZmlnIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJtYXgiLCJsYWJlbCIsIm5hbWUiLCJFbWFpbElucHV0IiwicGxhY2Vob2xkZXIiLCJlbWFpbFZhbGlkYXRpb25SdWxlcyIsIlBhc3N3b3JkSW5wdXQiLCJwYXNzd29yZFZhbGlkYXRpb25SdWxlcyIsIlJlZ2lzdGVyRm9ybSIsIkdlbmVyaWNJbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50IiwiYmxvY2siLCJtdCIsIm9uU3VibWl0IiwicHJvcFR5cGVzIiwiUFQiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLO1NBQUksQ0FDN0I7SUFDRUMsU0FBUyxFQUFFQyxtQkFEYjtJQUVFQyxjQUFjLEVBQUU7TUFDZEMsU0FBUyxFQUFFLElBREc7TUFFZEMsSUFBSSxFQUFFLE1BRlE7TUFHZEMsR0FBRyxFQUFFQyxjQUFLLENBQUNDLFNBQU47S0FMVDtJQU9FQyxXQUFXLEVBQUU7TUFDWEMsS0FBSyxFQUFFLENBQ0w7UUFBRUMsUUFBUSxFQUFFLElBQVo7UUFBa0JDLE9BQU8sRUFBRTtPQUR0QixFQUVMO1FBQUVDLEdBQUcsRUFBRSxHQUFQO1FBQVlELE9BQU8sRUFBRTtPQUZoQjtLQVJYO0lBYUVFLEtBQUssRUFBRSxZQWJUO0lBY0VDLElBQUksRUFBRTtHQWZxQixFQWlCN0I7SUFDRWQsU0FBUyxFQUFFQyxtQkFEYjtJQUVFQyxjQUFjLEVBQUU7TUFDZEUsSUFBSSxFQUFFLE1BRFE7TUFFZEMsR0FBRyxFQUFFQyxjQUFLLENBQUNDLFNBQU47S0FKVDtJQU1FQyxXQUFXLEVBQUU7TUFDWEMsS0FBSyxFQUFFLENBQ0w7UUFBRUMsUUFBUSxFQUFFLElBQVo7UUFBa0JDLE9BQU8sRUFBRTtPQUR0QixFQUVMO1FBQUVDLEdBQUcsRUFBRSxHQUFQO1FBQVlELE9BQU8sRUFBRTtPQUZoQjtLQVBYO0lBWUVFLEtBQUssRUFBRSxXQVpUO0lBYUVDLElBQUksRUFBRTtHQTlCcUIsRUFnQzdCO0lBQ0VkLFNBQVMsRUFBRWUsVUFEYjtJQUVFYixjQUFjLEVBQUU7TUFDZGMsV0FBVyxFQUFFO0tBSGpCO0lBS0VSLFdBQVcsRUFBRTtNQUNYQyxLQUFLLEVBQUVRO0tBTlg7SUFRRUosS0FBSyxFQUFFLE9BUlQ7SUFTRUMsSUFBSSxFQUFFO0dBekNxQixFQTJDN0I7SUFDRWQsU0FBUyxFQUFFa0IsYUFEYjtJQUVFaEIsY0FBYyxFQUFFLEVBRmxCO0lBR0VNLFdBQVcsRUFBRTtNQUNYQyxLQUFLLEVBQUVVO0tBSlg7SUFNRU4sS0FBSyxFQUFFLFVBTlQ7SUFPRUMsSUFBSSxFQUFFO0dBbERxQixDQUFKO0NBQTNCOztBQXNEQSxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBckIsS0FBSyxFQUFJO01BQ3RCc0IscUJBQXFCLEdBQUdDLDBCQUEwQixDQUFDO0lBQ3ZEUixJQUFJLEVBQUU7R0FEZ0QsQ0FBeEQ7U0FJRVIsNkJBQUMscUJBQUQ7SUFDRSxNQUFNLEVBQUVSLGFBQWEsQ0FBQ0MsQUFBRCxDQUR2QjtJQUVFLG1CQUFtQixFQUFDLFNBRnRCO0lBR0UsaUJBQWlCLEVBQUU7TUFBRXdCLEtBQUssRUFBRSxJQUFUO01BQWVDLEVBQUUsRUFBRTtLQUh4QztJQUlFLFFBQVEsRUFBRXpCLEtBQUssQ0FBQzBCO0lBTHBCO0NBSkY7O0FBY0FMLFlBQVksQ0FBQ00sU0FBYixHQUF5QjtFQUN2QkQsUUFBUSxFQUFFRSxrQkFBRSxDQUFDQyxJQUFILENBQVFDO0NBRHBCOzs7OyJ9
