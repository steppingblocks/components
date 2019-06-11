import '../chunk-d8a06a3d.js';
import { _ as _extends, w as withTheme } from '../withTheme/index-07393603.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NdWx0aUNvbHVtbkxheW91dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcblxuY29uc3QgU0NvbCA9IHdpdGhUaGVtZShDb2wpXG5jb25zdCBTUm93ID0gd2l0aFRoZW1lKFJvdylcblxuY29uc3QgTXVsdGlDb2x1bW5MYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxTUm93XG4gICAgdHlwZT1cImZsZXhcIlxuICAgIGFsaWduPVwibWlkZGxlXCJcbiAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgZ3V0dGVyPXs4fVxuICAgIHsuLi5nZXQocHJvcHMsICdyb3dQcm9wcycpfVxuICA+XG4gICAge2dldChwcm9wcywgJ2NvbHVtbnMnKS5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IChcbiAgICAgIDxTQ29sIGtleT17aW5kZXh9IHsuLi5nZXQoY29sdW1uLCAnY29sUHJvcHMnKX0+XG4gICAgICAgIHtnZXQoY29sdW1uLCAnY29tcG9uZW50Jyl9XG4gICAgICA8L1NDb2w+XG4gICAgKSl9XG4gIDwvU1Jvdz5cbilcblxuY29uc3QgQ29sdW1uUFQgPSBQVC5zaGFwZSh7XG4gIGNvbFByb3BzOiBQVC5vYmplY3QsXG4gIGNvbXBvbmVudDogUFQuZWxlbWVudFxufSlcblxuTXVsdGlDb2x1bW5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjb2xQcm9wczogUFQub2JqZWN0LFxuICBjb2x1bW5zOiBQVC5hcnJheU9mKENvbHVtblBUKSxcbiAgcm93UHJvcHM6IFBULm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aUNvbHVtbkxheW91dFxuIl0sIm5hbWVzIjpbIlNDb2wiLCJ3aXRoVGhlbWUiLCJTUm93IiwiTXVsdGlDb2x1bW5MYXlvdXQiLCJwcm9wcyIsIlJlYWN0IiwiZ2V0IiwibWFwIiwiY29sdW1uIiwiaW5kZXgiLCJDb2x1bW5QVCIsIlBUIiwic2hhcGUiLCJjb2xQcm9wcyIsIm9iamVjdCIsImNvbXBvbmVudCIsImVsZW1lbnQiLCJwcm9wVHlwZXMiLCJjb2x1bW5zIiwiYXJyYXlPZiIsInJvd1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU1BLElBQU1BLElBQUksR0FBR0MsU0FBUyxNQUF0QjtBQUNBLElBQU1DLElBQUksR0FBR0QsU0FBUyxNQUF0Qjs7QUFFQSxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEtBQUs7U0FDN0JDLDZCQUFDLElBQUQ7SUFDRSxJQUFJLEVBQUMsTUFEUDtJQUVFLEtBQUssRUFBQyxRQUZSO0lBR0UsT0FBTyxFQUFDLGVBSFY7SUFJRSxNQUFNLEVBQUU7S0FDSkMsR0FBRyxDQUFDRixLQUFELEVBQVEsVUFBUixDQUxULEdBT0dFLEdBQUcsQ0FBQ0YsS0FBRCxFQUFRLFNBQVIsQ0FBSCxDQUFzQkcsR0FBdEIsQ0FBMEIsVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO1dBQ3pCSiw2QkFBQyxJQUFEO01BQU0sR0FBRyxFQUFFSTtPQUFXSCxHQUFHLENBQUNFLE1BQUQsRUFBUyxVQUFULENBQXpCLEdBQ0dGLEdBQUcsQ0FBQ0UsTUFBRCxFQUFTLFdBQVQsQ0FETixDQUR5QjtHQUExQixDQVBILENBRDZCO0NBQS9COztBQWdCQSxJQUFNRSxRQUFRLEdBQUdDLFNBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ3hCQyxRQUFRLEVBQUVGLFNBQUUsQ0FBQ0csTUFEVztFQUV4QkMsU0FBUyxFQUFFSixTQUFFLENBQUNLO0NBRkMsQ0FBakI7QUFLQWIsaUJBQWlCLENBQUNjLFNBQWxCLEdBQThCO0VBQzVCSixRQUFRLEVBQUVGLFNBQUUsQ0FBQ0csTUFEZTtFQUU1QkksT0FBTyxFQUFFUCxTQUFFLENBQUNRLE9BQUgsQ0FBV1QsUUFBWCxDQUZtQjtFQUc1QlUsUUFBUSxFQUFFVCxTQUFFLENBQUNHO0NBSGY7Ozs7In0=
