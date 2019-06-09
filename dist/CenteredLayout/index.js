import '../chunk-0afe7056.js';
import '../chunk-25163efd.js';
import { a as _Row } from '../chunk-2a618d56.js';
import React__default from 'react';
import PropTypes from 'prop-types';
import '../chunk-987af3b3.js';
import { _ as _Col } from '../chunk-7669e6cb.js';
import '../chunk-0299fa98.js';
import { g as get } from '../chunk-6dace7f3.js';
import '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';

var SCol = withTheme(_Col);
var SRow = withTheme(_Row);

var CenteredLayout = function CenteredLayout(props) {
  return React__default.createElement(SRow, babelHelpers["extends"]({
    type: "flex",
    align: "middle",
    justify: "center",
    gutter: 16
  }, get(props, 'rowProps')), React__default.createElement(SCol, babelHelpers["extends"]({}, get(props, 'colProps'), {
    xs: {
      span: 20
    },
    md: {
      span: 10
    }
  }), get(props, 'children')));
};

CenteredLayout.propTypes = {
  colProps: PropTypes.object,
  rowProps: PropTypes.object
};

export default CenteredLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DZW50ZXJlZExheW91dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcblxuY29uc3QgU0NvbCA9IHdpdGhUaGVtZShDb2wpXG5jb25zdCBTUm93ID0gd2l0aFRoZW1lKFJvdylcblxuY29uc3QgQ2VudGVyZWRMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxTUm93XG4gICAgdHlwZT1cImZsZXhcIlxuICAgIGFsaWduPVwibWlkZGxlXCJcbiAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICBndXR0ZXI9ezE2fVxuICAgIHsuLi5nZXQocHJvcHMsICdyb3dQcm9wcycpfVxuICA+XG4gICAgPFNDb2wgey4uLmdldChwcm9wcywgJ2NvbFByb3BzJyl9IHhzPXt7IHNwYW46IDIwIH19IG1kPXt7IHNwYW46IDEwIH19PlxuICAgICAge2dldChwcm9wcywgJ2NoaWxkcmVuJyl9XG4gICAgPC9TQ29sPlxuICA8L1NSb3c+XG4pXG5cbkNlbnRlcmVkTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY29sUHJvcHM6IFBULm9iamVjdCxcbiAgcm93UHJvcHM6IFBULm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBDZW50ZXJlZExheW91dFxuIl0sIm5hbWVzIjpbIlNDb2wiLCJ3aXRoVGhlbWUiLCJTUm93IiwiQ2VudGVyZWRMYXlvdXQiLCJwcm9wcyIsIlJlYWN0IiwiZ2V0Iiwic3BhbiIsInByb3BUeXBlcyIsImNvbFByb3BzIiwiUFQiLCJvYmplY3QiLCJyb3dQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTUEsSUFBSSxHQUFHQyxTQUFTLE1BQXRCO0FBQ0EsSUFBTUMsSUFBSSxHQUFHRCxTQUFTLE1BQXRCOztBQUVBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsS0FBSztTQUMxQkMsNkJBQUMsSUFBRDtJQUNFLElBQUksRUFBQyxNQURQO0lBRUUsS0FBSyxFQUFDLFFBRlI7SUFHRSxPQUFPLEVBQUMsUUFIVjtJQUlFLE1BQU0sRUFBRTtLQUNKQyxHQUFHLENBQUNGLEtBQUQsRUFBUSxVQUFSLENBTFQsR0FPRUMsNkJBQUMsSUFBRCw4QkFBVUMsR0FBRyxDQUFDRixLQUFELEVBQVEsVUFBUixDQUFiO0lBQWtDLEVBQUUsRUFBRTtNQUFFRyxJQUFJLEVBQUU7S0FBOUM7SUFBb0QsRUFBRSxFQUFFO01BQUVBLElBQUksRUFBRTs7TUFDN0RELEdBQUcsQ0FBQ0YsS0FBRCxFQUFRLFVBQVIsQ0FETixDQVBGLENBRDBCO0NBQTVCOztBQWNBRCxjQUFjLENBQUNLLFNBQWYsR0FBMkI7RUFDekJDLFFBQVEsRUFBRUMsU0FBRSxDQUFDQyxNQURZO0VBRXpCQyxRQUFRLEVBQUVGLFNBQUUsQ0FBQ0M7Q0FGZjs7OzsifQ==
