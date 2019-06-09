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

var MultiColumnLayout = function MultiColumnLayout(props) {
  return React__default.createElement(SRow, babelHelpers["extends"]({
    type: "flex",
    align: "middle",
    justify: "space-between",
    gutter: 8
  }, get(props, 'rowProps')), get(props, 'columns').map(function (column, index) {
    return React__default.createElement(SCol, babelHelpers["extends"]({
      key: index
    }, get(column, 'colProps')), get(column, 'component'));
  }));
};

var ColumnPT = PropTypes.shape({
  colProps: PropTypes.object,
  component: PropTypes.element
});
MultiColumnLayout.propTypes = {
  colProps: PropTypes.object,
  columns: PropTypes.arrayOf(ColumnPT),
  rowProps: PropTypes.object
};

export default MultiColumnLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NdWx0aUNvbHVtbkxheW91dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcblxuY29uc3QgU0NvbCA9IHdpdGhUaGVtZShDb2wpXG5jb25zdCBTUm93ID0gd2l0aFRoZW1lKFJvdylcblxuY29uc3QgTXVsdGlDb2x1bW5MYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxTUm93XG4gICAgdHlwZT1cImZsZXhcIlxuICAgIGFsaWduPVwibWlkZGxlXCJcbiAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgZ3V0dGVyPXs4fVxuICAgIHsuLi5nZXQocHJvcHMsICdyb3dQcm9wcycpfVxuICA+XG4gICAge2dldChwcm9wcywgJ2NvbHVtbnMnKS5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IChcbiAgICAgIDxTQ29sIGtleT17aW5kZXh9IHsuLi5nZXQoY29sdW1uLCAnY29sUHJvcHMnKX0+XG4gICAgICAgIHtnZXQoY29sdW1uLCAnY29tcG9uZW50Jyl9XG4gICAgICA8L1NDb2w+XG4gICAgKSl9XG4gIDwvU1Jvdz5cbilcblxuY29uc3QgQ29sdW1uUFQgPSBQVC5zaGFwZSh7XG4gIGNvbFByb3BzOiBQVC5vYmplY3QsXG4gIGNvbXBvbmVudDogUFQuZWxlbWVudFxufSlcblxuTXVsdGlDb2x1bW5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjb2xQcm9wczogUFQub2JqZWN0LFxuICBjb2x1bW5zOiBQVC5hcnJheU9mKENvbHVtblBUKSxcbiAgcm93UHJvcHM6IFBULm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aUNvbHVtbkxheW91dFxuIl0sIm5hbWVzIjpbIlNDb2wiLCJ3aXRoVGhlbWUiLCJTUm93IiwiTXVsdGlDb2x1bW5MYXlvdXQiLCJwcm9wcyIsIlJlYWN0IiwiZ2V0IiwibWFwIiwiY29sdW1uIiwiaW5kZXgiLCJDb2x1bW5QVCIsIlBUIiwic2hhcGUiLCJjb2xQcm9wcyIsIm9iamVjdCIsImNvbXBvbmVudCIsImVsZW1lbnQiLCJwcm9wVHlwZXMiLCJjb2x1bW5zIiwiYXJyYXlPZiIsInJvd1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFNQSxJQUFNQSxJQUFJLEdBQUdDLFNBQVMsTUFBdEI7QUFDQSxJQUFNQyxJQUFJLEdBQUdELFNBQVMsTUFBdEI7O0FBRUEsSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLO1NBQzdCQyw2QkFBQyxJQUFEO0lBQ0UsSUFBSSxFQUFDLE1BRFA7SUFFRSxLQUFLLEVBQUMsUUFGUjtJQUdFLE9BQU8sRUFBQyxlQUhWO0lBSUUsTUFBTSxFQUFFO0tBQ0pDLEdBQUcsQ0FBQ0YsS0FBRCxFQUFRLFVBQVIsQ0FMVCxHQU9HRSxHQUFHLENBQUNGLEtBQUQsRUFBUSxTQUFSLENBQUgsQ0FBc0JHLEdBQXRCLENBQTBCLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtXQUN6QkosNkJBQUMsSUFBRDtNQUFNLEdBQUcsRUFBRUk7T0FBV0gsR0FBRyxDQUFDRSxNQUFELEVBQVMsVUFBVCxDQUF6QixHQUNHRixHQUFHLENBQUNFLE1BQUQsRUFBUyxXQUFULENBRE4sQ0FEeUI7R0FBMUIsQ0FQSCxDQUQ2QjtDQUEvQjs7QUFnQkEsSUFBTUUsUUFBUSxHQUFHQyxTQUFFLENBQUNDLEtBQUgsQ0FBUztFQUN4QkMsUUFBUSxFQUFFRixTQUFFLENBQUNHLE1BRFc7RUFFeEJDLFNBQVMsRUFBRUosU0FBRSxDQUFDSztDQUZDLENBQWpCO0FBS0FiLGlCQUFpQixDQUFDYyxTQUFsQixHQUE4QjtFQUM1QkosUUFBUSxFQUFFRixTQUFFLENBQUNHLE1BRGU7RUFFNUJJLE9BQU8sRUFBRVAsU0FBRSxDQUFDUSxPQUFILENBQVdULFFBQVgsQ0FGbUI7RUFHNUJVLFFBQVEsRUFBRVQsU0FBRSxDQUFDRztDQUhmOzs7OyJ9
