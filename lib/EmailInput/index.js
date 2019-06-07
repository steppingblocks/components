function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SingleLineTextInput from '../SingleLineTextInput';

var EmailInput = function EmailInput(props) {
  return React.createElement(SingleLineTextInput, _extends({
    icon: "mail"
  }, props));
};

EmailInput.propTypes = {};
export default EmailInput;
export var emailValidationRules = [{
  required: true,
  message: 'Required'
}, {
  type: 'email',
  message: 'Please provide a valid email'
}, {
  max: 250,
  message: 'Must be less than 250 characters'
}];