import '../chunk-d8a06a3d.js';
import '../chunk-33557649.js';
import '../chunk-e5261667.js';
import '../chunk-eda5d4be.js';
import { a as _Row } from '../chunk-d09ead65.js';
import React__default from 'react';
import PropTypes from 'prop-types';
import '../chunk-1722f712.js';
import { _ as _Col } from '../chunk-aa78c840.js';
import '../chunk-1c029dd0.js';
import { g as get } from '../chunk-10518c5b.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DZW50ZXJlZExheW91dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcblxuY29uc3QgU0NvbCA9IHdpdGhUaGVtZShDb2wpXG5jb25zdCBTUm93ID0gd2l0aFRoZW1lKFJvdylcblxuY29uc3QgQ2VudGVyZWRMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxTUm93XG4gICAgdHlwZT1cImZsZXhcIlxuICAgIGFsaWduPVwibWlkZGxlXCJcbiAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICBndXR0ZXI9ezE2fVxuICAgIHsuLi5nZXQocHJvcHMsICdyb3dQcm9wcycpfVxuICA+XG4gICAgPFNDb2wgey4uLmdldChwcm9wcywgJ2NvbFByb3BzJyl9IHhzPXt7IHNwYW46IDIwIH19IG1kPXt7IHNwYW46IDEwIH19PlxuICAgICAge2dldChwcm9wcywgJ2NoaWxkcmVuJyl9XG4gICAgPC9TQ29sPlxuICA8L1NSb3c+XG4pXG5cbkNlbnRlcmVkTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY29sUHJvcHM6IFBULm9iamVjdCxcbiAgcm93UHJvcHM6IFBULm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBDZW50ZXJlZExheW91dFxuIl0sIm5hbWVzIjpbIlNDb2wiLCJ3aXRoVGhlbWUiLCJTUm93IiwiQ2VudGVyZWRMYXlvdXQiLCJwcm9wcyIsIlJlYWN0IiwiZ2V0Iiwic3BhbiIsInByb3BUeXBlcyIsImNvbFByb3BzIiwiUFQiLCJvYmplY3QiLCJyb3dQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNQSxJQUFJLEdBQUdDLFNBQVMsTUFBdEI7QUFDQSxJQUFNQyxJQUFJLEdBQUdELFNBQVMsTUFBdEI7O0FBRUEsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxLQUFLO1NBQzFCQyw2QkFBQyxJQUFEO0lBQ0UsSUFBSSxFQUFDLE1BRFA7SUFFRSxLQUFLLEVBQUMsUUFGUjtJQUdFLE9BQU8sRUFBQyxRQUhWO0lBSUUsTUFBTSxFQUFFO0tBQ0pDLEdBQUcsQ0FBQ0YsS0FBRCxFQUFRLFVBQVIsQ0FMVCxHQU9FQyw2QkFBQyxJQUFELDhCQUFVQyxHQUFHLENBQUNGLEtBQUQsRUFBUSxVQUFSLENBQWI7SUFBa0MsRUFBRSxFQUFFO01BQUVHLElBQUksRUFBRTtLQUE5QztJQUFvRCxFQUFFLEVBQUU7TUFBRUEsSUFBSSxFQUFFOztNQUM3REQsR0FBRyxDQUFDRixLQUFELEVBQVEsVUFBUixDQUROLENBUEYsQ0FEMEI7Q0FBNUI7O0FBY0FELGNBQWMsQ0FBQ0ssU0FBZixHQUEyQjtFQUN6QkMsUUFBUSxFQUFFQyxTQUFFLENBQUNDLE1BRFk7RUFFekJDLFFBQVEsRUFBRUYsU0FBRSxDQUFDQztDQUZmOzs7OyJ9
