import "antd/lib/layout/style";
import _Layout from "antd/lib/layout";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PT from 'prop-types';
import get from 'lodash/get';
import { withTheme } from '../withTheme';
var Content = _Layout.Content;
var SContent = withTheme(Content);
var SLayout = withTheme(_Layout);

var UnauthenticatedLayout = function UnauthenticatedLayout(props) {
  return React.createElement(SLayout, _extends({
    minHeight: "100vh"
  }, get(props, 'layoutProps')), get(props, 'Header'), React.createElement(SContent, _extends({
    backgroundColor: "background",
    padding: 30
  }, get(props, 'contentProps')), get(props, 'children')), get(props, 'Footer'));
};

UnauthenticatedLayout.propTypes = {
  children: PT.element.isRequired,
  contentProps: PT.object,
  Footer: PT.element,
  Header: PT.element,
  layoutProps: PT.object
};
export default UnauthenticatedLayout;