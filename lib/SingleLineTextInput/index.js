import "antd/lib/input/style";
import _Input from "antd/lib/input";
import "antd/lib/icon/style";
import _Icon from "antd/lib/icon";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import get from 'lodash/get';
import omit from 'lodash/omit';
import { withTheme } from '../withTheme';
var SIcon = withTheme(_Icon);
var SInput = withTheme(_Input);
var SingleLineTextInput = React.forwardRef(function (props, ref) {
  var extraProps = {};

  if (get(props, 'icon')) {
    extraProps.prefix = React.createElement(SIcon, {
      type: get(props, 'icon'),
      color: "disabled"
    });
  }

  return React.createElement(SInput, _extends({
    ref: ref
  }, omit(props, 'icon'), extraProps));
});
export default SingleLineTextInput;