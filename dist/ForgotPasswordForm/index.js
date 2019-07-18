import '../chunk-c69f4c9d.js';
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
import EmailInput, { emailValidationRules } from '../EmailInput/index.js';

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
    email: getError(email, emailValidationRules, 'Invalid Email')
  };
};

var ForgotPasswordForm = function ForgotPasswordForm(props) {
  var formFields = getFormFields();
  return React__default.createElement(GenericForm, {
    fields: formFields,
    formProps: {
      validate: validate,
      onSubmit: props.onSubmit
    },
    submitButtonContent: "Submit",
    submitButtonProps: {
      block: true,
      mt: 4
    }
  });
};

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes__default.func.isRequired
};
ForgotPasswordForm.defaultProps = {
  onSubmit: console.log
};

export default ForgotPasswordForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3Jnb3RQYXNzd29yZEZvcm0vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgRW1haWxJbnB1dCwgeyBlbWFpbFZhbGlkYXRpb25SdWxlcyB9IGZyb20gJy4uL0VtYWlsSW5wdXQnXG5pbXBvcnQgR2VuZXJpY0Zvcm0sIHsgZ2V0RXJyb3IgfSBmcm9tICcuLi9HZW5lcmljRm9ybSdcblxuLyoqXG4gKiBHZXRzIGZvcm0gZmllbGRzXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqL1xuY29uc3QgZ2V0Rm9ybUZpZWxkcyA9IHByb3BzID0+IFtcbiAge1xuICAgIENvbXBvbmVudDogRW1haWxJbnB1dCxcbiAgICBmb3JtSXRlbVByb3BzOiB7XG4gICAgICBsYWJlbDogJ0VtYWlsJ1xuICAgIH0sXG4gICAgaW5wdXRQcm9wczoge1xuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgICAgcGxhY2Vob2xkZXI6ICdqb2huLnNtaXRoQGVtYWlsLmNvbSdcbiAgICB9LFxuICAgIG5hbWU6ICdlbWFpbCdcbiAgfVxuXVxuXG4vKipcbiAqIEZvcm0gdmFsaWRhdGlvbiBmdW5jdGlvblxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtXG4gKi9cbmNvbnN0IHZhbGlkYXRlID0gKHsgZW1haWwsIHBhc3N3b3JkIH0gPSB7fSkgPT4gKHtcbiAgZW1haWw6IGdldEVycm9yKGVtYWlsLCBlbWFpbFZhbGlkYXRpb25SdWxlcywgJ0ludmFsaWQgRW1haWwnKVxufSlcblxuY29uc3QgRm9yZ290UGFzc3dvcmRGb3JtID0gcHJvcHMgPT4ge1xuICBjb25zdCBmb3JtRmllbGRzID0gZ2V0Rm9ybUZpZWxkcyhwcm9wcylcblxuICByZXR1cm4gKFxuICAgIDxHZW5lcmljRm9ybVxuICAgICAgZmllbGRzPXtmb3JtRmllbGRzfVxuICAgICAgZm9ybVByb3BzPXt7XG4gICAgICAgIHZhbGlkYXRlLFxuICAgICAgICBvblN1Ym1pdDogcHJvcHMub25TdWJtaXRcbiAgICAgIH19XG4gICAgICBzdWJtaXRCdXR0b25Db250ZW50PVwiU3VibWl0XCJcbiAgICAgIHN1Ym1pdEJ1dHRvblByb3BzPXt7IGJsb2NrOiB0cnVlLCBtdDogNCB9fVxuICAgIC8+XG4gIClcbn1cblxuRm9yZ290UGFzc3dvcmRGb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFBULmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5Gb3Jnb3RQYXNzd29yZEZvcm0uZGVmYXVsdFByb3BzID0ge1xuICBvblN1Ym1pdDogY29uc29sZS5sb2dcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmRGb3JtXG4iXSwibmFtZXMiOlsiZ2V0Rm9ybUZpZWxkcyIsInByb3BzIiwiQ29tcG9uZW50IiwiRW1haWxJbnB1dCIsImZvcm1JdGVtUHJvcHMiLCJsYWJlbCIsImlucHV0UHJvcHMiLCJhdXRvRm9jdXMiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJ2YWxpZGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJnZXRFcnJvciIsImVtYWlsVmFsaWRhdGlvblJ1bGVzIiwiRm9yZ290UGFzc3dvcmRGb3JtIiwiZm9ybUZpZWxkcyIsIlJlYWN0Iiwib25TdWJtaXQiLCJibG9jayIsIm10IiwicHJvcFR5cGVzIiwiUFQiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7Ozs7O0FBSUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLO1NBQUksQ0FDN0I7SUFDRUMsU0FBUyxFQUFFQyxVQURiO0lBRUVDLGFBQWEsRUFBRTtNQUNiQyxLQUFLLEVBQUU7S0FIWDtJQUtFQyxVQUFVLEVBQUU7TUFDVkMsU0FBUyxFQUFFLElBREQ7TUFFVkMsV0FBVyxFQUFFO0tBUGpCO0lBU0VDLElBQUksRUFBRTtHQVZxQixDQUFKO0NBQTNCOzs7Ozs7O0FBa0JBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO2lGQUF1QixFQUF2QjtNQUFHQyxLQUFILFFBQUdBLEtBQUg7TUFBVUMsUUFBVixRQUFVQSxRQUFWOztTQUErQjtJQUM5Q0QsS0FBSyxFQUFFRSxRQUFRLENBQUNGLEtBQUQsRUFBUUcsb0JBQVIsRUFBOEIsZUFBOUI7R0FEQTtDQUFqQjs7QUFJQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFkLEtBQUssRUFBSTtNQUM1QmUsVUFBVSxHQUFHaEIsYUFBYSxDQUFDQyxBQUFELENBQWhDO1NBR0VnQiw2QkFBQyxXQUFEO0lBQ0UsTUFBTSxFQUFFRCxVQURWO0lBRUUsU0FBUyxFQUFFO01BQ1ROLFFBQVEsRUFBUkEsUUFEUztNQUVUUSxRQUFRLEVBQUVqQixLQUFLLENBQUNpQjtLQUpwQjtJQU1FLG1CQUFtQixFQUFDLFFBTnRCO0lBT0UsaUJBQWlCLEVBQUU7TUFBRUMsS0FBSyxFQUFFLElBQVQ7TUFBZUMsRUFBRSxFQUFFOztJQVIxQztDQUhGOztBQWdCQUwsa0JBQWtCLENBQUNNLFNBQW5CLEdBQStCO0VBQzdCSCxRQUFRLEVBQUVJLGtCQUFFLENBQUNDLElBQUgsQ0FBUUM7Q0FEcEI7QUFJQVQsa0JBQWtCLENBQUNVLFlBQW5CLEdBQWtDO0VBQ2hDUCxRQUFRLEVBQUVRLE9BQU8sQ0FBQ0M7Q0FEcEI7Ozs7In0=
