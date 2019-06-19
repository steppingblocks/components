import '../withTheme/index-adfe7006.js';
import '../chunk-64108897.js';
import '../chunk-c60959bd.js';
import '../chunk-eda5d4be.js';
import React__default from 'react';
import 'prop-types';
import '../chunk-524cc36e.js';
import '../chunk-6606fac3.js';
import '../chunk-2dce8de6.js';
import '@xstyled/styled-components';
import '../chunk-27538004.js';
import '../chunk-616fa0f4.js';
import '../chunk-c0858f5c.js';
import '../chunk-d07bd2ed.js';
import 'react-dom';
import '../chunk-19c3b2b8.js';
import '../chunk-8820e6e0.js';
import '../chunk-cf295d49.js';
import '../CustomButton/index.js';
import '../SingleLineTextInput/index.js';
import '../chunk-8a364bd5.js';
import '../chunk-84e13b6b.js';
import EmailInput, { emailValidationRules } from '../EmailInput/index.js';
import { createGenericFormComponent } from '../GenericForm/index.js';
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
    }
  });
};

export default LoginForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Mb2dpbkZvcm0vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVtYWlsSW5wdXQsIHsgZW1haWxWYWxpZGF0aW9uUnVsZXMgfSBmcm9tICcuLi9FbWFpbElucHV0J1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQsIHsgcGFzc3dvcmRWYWxpZGF0aW9uUnVsZXMgfSBmcm9tICcuLi9QYXNzd29yZElucHV0J1xuaW1wb3J0IHsgY3JlYXRlR2VuZXJpY0Zvcm1Db21wb25lbnQgfSBmcm9tICcuLi9HZW5lcmljRm9ybSdcblxuY29uc3QgZ2V0Rm9ybUZpZWxkcyA9IHByb3BzID0+IFtcbiAge1xuICAgIENvbXBvbmVudDogRW1haWxJbnB1dCxcbiAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgICAgcGxhY2Vob2xkZXI6ICdqb2huLnNtaXRoQGVtYWlsLmNvbSdcbiAgICB9LFxuICAgIGZpZWxkQ29uZmlnOiB7XG4gICAgICBydWxlczogZW1haWxWYWxpZGF0aW9uUnVsZXNcbiAgICB9LFxuICAgIGxhYmVsOiAnRW1haWwnLFxuICAgIG5hbWU6ICdlbWFpbCdcbiAgfSxcbiAge1xuICAgIENvbXBvbmVudDogUGFzc3dvcmRJbnB1dCxcbiAgICBjb21wb25lbnRQcm9wczoge30sXG4gICAgZmllbGRDb25maWc6IHtcbiAgICAgIHJ1bGVzOiBwYXNzd29yZFZhbGlkYXRpb25SdWxlc1xuICAgIH0sXG4gICAgbGFiZWw6ICdQYXNzd29yZCcsXG4gICAgbmFtZTogJ3Bhc3N3b3JkJ1xuICB9XG5dXG5cbmNvbnN0IExvZ2luRm9ybSA9IHByb3BzID0+IHtcbiAgY29uc3QgR2VuZXJpY0ltcGxlbWVudGF0aW9uID0gY3JlYXRlR2VuZXJpY0Zvcm1Db21wb25lbnQoe1xuICAgIG5hbWU6ICdsb2dpbl9mb3JtJ1xuICB9KVxuICByZXR1cm4gKFxuICAgIDxHZW5lcmljSW1wbGVtZW50YXRpb25cbiAgICAgIGZpZWxkcz17Z2V0Rm9ybUZpZWxkcyhwcm9wcyl9XG4gICAgICBzdWJtaXRCdXR0b25Db250ZW50PVwiTG9nIGluXCJcbiAgICAgIHN1Ym1pdEJ1dHRvblByb3BzPXt7IGJsb2NrOiB0cnVlLCBtdDogNCB9fVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtXG4iXSwibmFtZXMiOlsiZ2V0Rm9ybUZpZWxkcyIsInByb3BzIiwiQ29tcG9uZW50IiwiRW1haWxJbnB1dCIsImNvbXBvbmVudFByb3BzIiwiYXV0b0ZvY3VzIiwicGxhY2Vob2xkZXIiLCJmaWVsZENvbmZpZyIsInJ1bGVzIiwiZW1haWxWYWxpZGF0aW9uUnVsZXMiLCJsYWJlbCIsIm5hbWUiLCJQYXNzd29yZElucHV0IiwicGFzc3dvcmRWYWxpZGF0aW9uUnVsZXMiLCJMb2dpbkZvcm0iLCJHZW5lcmljSW1wbGVtZW50YXRpb24iLCJjcmVhdGVHZW5lcmljRm9ybUNvbXBvbmVudCIsIlJlYWN0IiwiYmxvY2siLCJtdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUs7U0FBSSxDQUM3QjtJQUNFQyxTQUFTLEVBQUVDLFVBRGI7SUFFRUMsY0FBYyxFQUFFO01BQ2RDLFNBQVMsRUFBRSxJQURHO01BRWRDLFdBQVcsRUFBRTtLQUpqQjtJQU1FQyxXQUFXLEVBQUU7TUFDWEMsS0FBSyxFQUFFQztLQVBYO0lBU0VDLEtBQUssRUFBRSxPQVRUO0lBVUVDLElBQUksRUFBRTtHQVhxQixFQWE3QjtJQUNFVCxTQUFTLEVBQUVVLGFBRGI7SUFFRVIsY0FBYyxFQUFFLEVBRmxCO0lBR0VHLFdBQVcsRUFBRTtNQUNYQyxLQUFLLEVBQUVLO0tBSlg7SUFNRUgsS0FBSyxFQUFFLFVBTlQ7SUFPRUMsSUFBSSxFQUFFO0dBcEJxQixDQUFKO0NBQTNCOztBQXdCQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBYixLQUFLLEVBQUk7TUFDbkJjLHFCQUFxQixHQUFHQywwQkFBMEIsQ0FBQztJQUN2REwsSUFBSSxFQUFFO0dBRGdELENBQXhEO1NBSUVNLDZCQUFDLHFCQUFEO0lBQ0UsTUFBTSxFQUFFakIsYUFBYSxDQUFDQyxBQUFELENBRHZCO0lBRUUsbUJBQW1CLEVBQUMsUUFGdEI7SUFHRSxpQkFBaUIsRUFBRTtNQUFFaUIsS0FBSyxFQUFFLElBQVQ7TUFBZUMsRUFBRSxFQUFFOztJQUoxQztDQUpGOzs7OyJ9
