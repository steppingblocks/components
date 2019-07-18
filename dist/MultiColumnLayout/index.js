import { c as _extends } from '../chunk-c69f4c9d.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-5732a1e2.js';
import { w as withTheme } from '../withTheme/index-d1a984d4.js';
import 'styled-components';
import '../chunk-69193f69.js';
import '../chunk-ad42b34e.js';
import '../chunk-2baafb0f.js';
import '../chunk-57ecb02f.js';
import { b as get } from '../chunk-da40365a.js';
import '../chunk-f27d627d.js';
import '../chunk-6146e3ae.js';
import { a as _Row } from '../chunk-55ba7a69.js';
import { _ as _Col } from '../chunk-1cbda072.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NdWx0aUNvbHVtbkxheW91dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB3aXRoVGhlbWUgZnJvbSAnLi4vd2l0aFRoZW1lJ1xuXG5jb25zdCBTQ29sID0gd2l0aFRoZW1lKENvbClcbmNvbnN0IFNSb3cgPSB3aXRoVGhlbWUoUm93KVxuXG5jb25zdCBNdWx0aUNvbHVtbkxheW91dCA9IHByb3BzID0+IChcbiAgPFNSb3dcbiAgICB0eXBlPVwiZmxleFwiXG4gICAgYWxpZ249XCJtaWRkbGVcIlxuICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICBndXR0ZXI9ezh9XG4gICAgey4uLmdldChwcm9wcywgJ3Jvd1Byb3BzJyl9XG4gID5cbiAgICB7Z2V0KHByb3BzLCAnY29sdW1ucycpLm1hcCgoY29sdW1uLCBpbmRleCkgPT4gKFxuICAgICAgPFNDb2wga2V5PXtpbmRleH0gey4uLmdldChjb2x1bW4sICdjb2xQcm9wcycpfT5cbiAgICAgICAge2dldChjb2x1bW4sICdjb21wb25lbnQnKX1cbiAgICAgIDwvU0NvbD5cbiAgICApKX1cbiAgPC9TUm93PlxuKVxuXG5jb25zdCBDb2x1bW5QVCA9IFBULnNoYXBlKHtcbiAgY29sUHJvcHM6IFBULm9iamVjdCxcbiAgY29tcG9uZW50OiBQVC5lbGVtZW50XG59KVxuXG5NdWx0aUNvbHVtbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNvbFByb3BzOiBQVC5vYmplY3QsXG4gIGNvbHVtbnM6IFBULmFycmF5T2YoQ29sdW1uUFQpLFxuICByb3dQcm9wczogUFQub2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpQ29sdW1uTGF5b3V0XG4iXSwibmFtZXMiOlsiU0NvbCIsIndpdGhUaGVtZSIsIlNSb3ciLCJNdWx0aUNvbHVtbkxheW91dCIsInByb3BzIiwiUmVhY3QiLCJnZXQiLCJtYXAiLCJjb2x1bW4iLCJpbmRleCIsIkNvbHVtblBUIiwiUFQiLCJzaGFwZSIsImNvbFByb3BzIiwib2JqZWN0IiwiY29tcG9uZW50IiwiZWxlbWVudCIsInByb3BUeXBlcyIsImNvbHVtbnMiLCJhcnJheU9mIiwicm93UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNQSxJQUFJLEdBQUdDLFNBQVMsTUFBdEI7QUFDQSxJQUFNQyxJQUFJLEdBQUdELFNBQVMsTUFBdEI7O0FBRUEsSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLO1NBQzdCQyw2QkFBQyxJQUFEO0lBQ0UsSUFBSSxFQUFDLE1BRFA7SUFFRSxLQUFLLEVBQUMsUUFGUjtJQUdFLE9BQU8sRUFBQyxlQUhWO0lBSUUsTUFBTSxFQUFFO0tBQ0pDLEdBQUcsQ0FBQ0YsS0FBRCxFQUFRLFVBQVIsQ0FMVCxHQU9HRSxHQUFHLENBQUNGLEtBQUQsRUFBUSxTQUFSLENBQUgsQ0FBc0JHLEdBQXRCLENBQTBCLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtXQUN6QkosNkJBQUMsSUFBRDtNQUFNLEdBQUcsRUFBRUk7T0FBV0gsR0FBRyxDQUFDRSxNQUFELEVBQVMsVUFBVCxDQUF6QixHQUNHRixHQUFHLENBQUNFLE1BQUQsRUFBUyxXQUFULENBRE4sQ0FEeUI7R0FBMUIsQ0FQSCxDQUQ2QjtDQUEvQjs7QUFnQkEsSUFBTUUsUUFBUSxHQUFHQyxrQkFBRSxDQUFDQyxLQUFILENBQVM7RUFDeEJDLFFBQVEsRUFBRUYsa0JBQUUsQ0FBQ0csTUFEVztFQUV4QkMsU0FBUyxFQUFFSixrQkFBRSxDQUFDSztDQUZDLENBQWpCO0FBS0FiLGlCQUFpQixDQUFDYyxTQUFsQixHQUE4QjtFQUM1QkosUUFBUSxFQUFFRixrQkFBRSxDQUFDRyxNQURlO0VBRTVCSSxPQUFPLEVBQUVQLGtCQUFFLENBQUNRLE9BQUgsQ0FBV1QsUUFBWCxDQUZtQjtFQUc1QlUsUUFBUSxFQUFFVCxrQkFBRSxDQUFDRztDQUhmOzs7OyJ9
