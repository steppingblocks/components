import "antd/lib/row/style";
import _Row from "antd/lib/row";
import "antd/lib/layout/style";
import _Layout from "antd/lib/layout";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import _ from 'lodash';
import React from 'react';
import PT from 'prop-types';
import _fp from 'lodash/fp';
import styled from '@xstyled/styled-components';
import { withTheme } from '../withTheme';
import CustomButton from '../CustomButton';
var Header = _Layout.Header;
var SHeader = withTheme(Header);
var MenuItemsContainer = styled.div(_templateObject());
var SRow = withTheme(_Row);

var renderButtons = _fp.pipe(_fp.get('buttons'), _fp.map(function (_ref) {
  var buttonProps = _ref.buttonProps,
      content = _ref.content;
  return React.createElement(CustomButton, _extends({
    key: content
  }, buttonProps, {
    content: content,
    mx: 2
  }));
}));

var UnauthenticatedHeader = function UnauthenticatedHeader(_ref2) {
  var containerProps = _ref2.containerProps,
      rest = _objectWithoutProperties(_ref2, ["containerProps"]);

  return React.createElement(SHeader, _extends({
    backgroundColor: "background",
    borderBottom: 2,
    borderBottomColor: "border"
  }, containerProps), React.createElement(SRow, {
    type: "flex",
    align: "middle",
    justify: "space-between",
    height: "100%"
  }, _.get(rest, 'Logo', null), React.createElement(MenuItemsContainer, null, renderButtons(rest))));
};

var ButtonPT = PT.shape({
  buttonProps: PT.object,
  title: PT.string
});
UnauthenticatedHeader.propTypes = {
  buttons: PT.arrayOf(ButtonPT).isRequired,
  Logo: PT.element.isRequired
};
UnauthenticatedHeader.defaultProps = {
  buttons: [],
  Logo: null
};
export default withTheme(UnauthenticatedHeader);