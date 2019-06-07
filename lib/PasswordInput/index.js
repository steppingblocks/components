function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import SingleLineTextInput from '../SingleLineTextInput';

var PasswordInput = function PasswordInput(props) {
  return React.createElement(SingleLineTextInput, _extends({
    icon: "lock",
    type: "password"
  }, props));
};

PasswordInput.propTypes = {};
export default PasswordInput;
export var passwordValidationRules = [{
  required: true,
  message: 'Required'
}, {
  max: 250,
  message: 'Must be less than 250 characters'
}];