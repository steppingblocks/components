import "antd/lib/row/style";
import _Row from "antd/lib/row";
import "antd/lib/col/style";
import _Col from "antd/lib/col";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PT from 'prop-types';
import get from 'lodash/get';
import { withTheme } from '../withTheme';
var SCol = withTheme(_Col);
var SRow = withTheme(_Row);

var MultiColumnLayout = function MultiColumnLayout(props) {
  return React.createElement(SRow, _extends({
    type: "flex",
    align: "middle",
    justify: "space-between",
    gutter: 8
  }, get(props, 'rowProps')), get(props, 'columns').map(function (column, index) {
    return React.createElement(SCol, _extends({
      key: index
    }, get(column, 'colProps')), get(column, 'component'));
  }));
};

var ColumnPT = PT.shape({
  colProps: PT.object,
  component: PT.element
});
MultiColumnLayout.propTypes = {
  colProps: PT.object,
  columns: PT.arrayOf(ColumnPT),
  rowProps: PT.object
};
export default MultiColumnLayout;