import { c as _extends } from '../chunk-039ee305.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-5732a1e2.js';
import '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
import '../chunk-d5372693.js';
import '../chunk-f27d627d.js';
import '../chunk-e9a642ec.js';
import '../chunk-b2974b74.js';
import { g as get } from '../chunk-3472e013.js';
import '../chunk-0fbb0024.js';
import { a as _Row } from '../chunk-86b20e6e.js';
import { _ as _Col } from '../chunk-e6f5ebbe.js';

var SCol = withTheme(_Col);
var SRow = withTheme(_Row);

var MultiColumnLayout = function MultiColumnLayout(props) {
  return React__default.createElement(SRow, _extends({
    type: "flex",
    align: "middle",
    justify: "space-between",
    gutter: 8
  }, get(props, 'rowProps')), get(props, 'columns').map(function (column, index) {
    return React__default.createElement(SCol, _extends({
      key: index
    }, get(column, 'colProps')), get(column, 'component'));
  }));
};

var ColumnPT = PropTypes__default.shape({
  colProps: PropTypes__default.object,
  component: PropTypes__default.element
});
MultiColumnLayout.propTypes = {
  colProps: PropTypes__default.object,
  columns: PropTypes__default.arrayOf(ColumnPT),
  rowProps: PropTypes__default.object
};

export default MultiColumnLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NdWx0aUNvbHVtbkxheW91dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcblxuY29uc3QgU0NvbCA9IHdpdGhUaGVtZShDb2wpXG5jb25zdCBTUm93ID0gd2l0aFRoZW1lKFJvdylcblxuY29uc3QgTXVsdGlDb2x1bW5MYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxTUm93XG4gICAgdHlwZT1cImZsZXhcIlxuICAgIGFsaWduPVwibWlkZGxlXCJcbiAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgZ3V0dGVyPXs4fVxuICAgIHsuLi5nZXQocHJvcHMsICdyb3dQcm9wcycpfVxuICA+XG4gICAge2dldChwcm9wcywgJ2NvbHVtbnMnKS5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IChcbiAgICAgIDxTQ29sIGtleT17aW5kZXh9IHsuLi5nZXQoY29sdW1uLCAnY29sUHJvcHMnKX0+XG4gICAgICAgIHtnZXQoY29sdW1uLCAnY29tcG9uZW50Jyl9XG4gICAgICA8L1NDb2w+XG4gICAgKSl9XG4gIDwvU1Jvdz5cbilcblxuY29uc3QgQ29sdW1uUFQgPSBQVC5zaGFwZSh7XG4gIGNvbFByb3BzOiBQVC5vYmplY3QsXG4gIGNvbXBvbmVudDogUFQuZWxlbWVudFxufSlcblxuTXVsdGlDb2x1bW5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjb2xQcm9wczogUFQub2JqZWN0LFxuICBjb2x1bW5zOiBQVC5hcnJheU9mKENvbHVtblBUKSxcbiAgcm93UHJvcHM6IFBULm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aUNvbHVtbkxheW91dFxuIl0sIm5hbWVzIjpbIlNDb2wiLCJ3aXRoVGhlbWUiLCJTUm93IiwiTXVsdGlDb2x1bW5MYXlvdXQiLCJwcm9wcyIsIlJlYWN0IiwiZ2V0IiwibWFwIiwiY29sdW1uIiwiaW5kZXgiLCJDb2x1bW5QVCIsIlBUIiwic2hhcGUiLCJjb2xQcm9wcyIsIm9iamVjdCIsImNvbXBvbmVudCIsImVsZW1lbnQiLCJwcm9wVHlwZXMiLCJjb2x1bW5zIiwiYXJyYXlPZiIsInJvd1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNQSxJQUFJLEdBQUdDLFNBQVMsTUFBdEI7QUFDQSxJQUFNQyxJQUFJLEdBQUdELFNBQVMsTUFBdEI7O0FBRUEsSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLO1NBQzdCQyw2QkFBQyxJQUFEO0lBQ0UsSUFBSSxFQUFDLE1BRFA7SUFFRSxLQUFLLEVBQUMsUUFGUjtJQUdFLE9BQU8sRUFBQyxlQUhWO0lBSUUsTUFBTSxFQUFFO0tBQ0pDLEdBQUcsQ0FBQ0YsS0FBRCxFQUFRLFVBQVIsQ0FMVCxHQU9HRSxHQUFHLENBQUNGLEtBQUQsRUFBUSxTQUFSLENBQUgsQ0FBc0JHLEdBQXRCLENBQTBCLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtXQUN6QkosNkJBQUMsSUFBRDtNQUFNLEdBQUcsRUFBRUk7T0FBV0gsR0FBRyxDQUFDRSxNQUFELEVBQVMsVUFBVCxDQUF6QixHQUNHRixHQUFHLENBQUNFLE1BQUQsRUFBUyxXQUFULENBRE4sQ0FEeUI7R0FBMUIsQ0FQSCxDQUQ2QjtDQUEvQjs7QUFnQkEsSUFBTUUsUUFBUSxHQUFHQyxrQkFBRSxDQUFDQyxLQUFILENBQVM7RUFDeEJDLFFBQVEsRUFBRUYsa0JBQUUsQ0FBQ0csTUFEVztFQUV4QkMsU0FBUyxFQUFFSixrQkFBRSxDQUFDSztDQUZDLENBQWpCO0FBS0FiLGlCQUFpQixDQUFDYyxTQUFsQixHQUE4QjtFQUM1QkosUUFBUSxFQUFFRixrQkFBRSxDQUFDRyxNQURlO0VBRTVCSSxPQUFPLEVBQUVQLGtCQUFFLENBQUNRLE9BQUgsQ0FBV1QsUUFBWCxDQUZtQjtFQUc1QlUsUUFBUSxFQUFFVCxrQkFBRSxDQUFDRztDQUhmOzs7OyJ9
