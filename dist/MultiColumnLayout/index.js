import { b as _extends, w as withTheme } from '../withTheme/index-adfe7006.js';
import '../chunk-64108897.js';
import '../chunk-c60959bd.js';
import '../chunk-eda5d4be.js';
import { a as _Row } from '../chunk-8bace6c4.js';
import React__default from 'react';
import PT from 'prop-types';
import '../chunk-524cc36e.js';
import { _ as _Col } from '../chunk-9258ae69.js';
import '../chunk-6606fac3.js';
import { g as get } from '../chunk-2dce8de6.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9NdWx0aUNvbHVtbkxheW91dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcblxuY29uc3QgU0NvbCA9IHdpdGhUaGVtZShDb2wpXG5jb25zdCBTUm93ID0gd2l0aFRoZW1lKFJvdylcblxuY29uc3QgTXVsdGlDb2x1bW5MYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxTUm93XG4gICAgdHlwZT1cImZsZXhcIlxuICAgIGFsaWduPVwibWlkZGxlXCJcbiAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgZ3V0dGVyPXs4fVxuICAgIHsuLi5nZXQocHJvcHMsICdyb3dQcm9wcycpfVxuICA+XG4gICAge2dldChwcm9wcywgJ2NvbHVtbnMnKS5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IChcbiAgICAgIDxTQ29sIGtleT17aW5kZXh9IHsuLi5nZXQoY29sdW1uLCAnY29sUHJvcHMnKX0+XG4gICAgICAgIHtnZXQoY29sdW1uLCAnY29tcG9uZW50Jyl9XG4gICAgICA8L1NDb2w+XG4gICAgKSl9XG4gIDwvU1Jvdz5cbilcblxuY29uc3QgQ29sdW1uUFQgPSBQVC5zaGFwZSh7XG4gIGNvbFByb3BzOiBQVC5vYmplY3QsXG4gIGNvbXBvbmVudDogUFQuZWxlbWVudFxufSlcblxuTXVsdGlDb2x1bW5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjb2xQcm9wczogUFQub2JqZWN0LFxuICBjb2x1bW5zOiBQVC5hcnJheU9mKENvbHVtblBUKSxcbiAgcm93UHJvcHM6IFBULm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aUNvbHVtbkxheW91dFxuIl0sIm5hbWVzIjpbIlNDb2wiLCJ3aXRoVGhlbWUiLCJTUm93IiwiTXVsdGlDb2x1bW5MYXlvdXQiLCJwcm9wcyIsIlJlYWN0IiwiZ2V0IiwibWFwIiwiY29sdW1uIiwiaW5kZXgiLCJDb2x1bW5QVCIsIlBUIiwic2hhcGUiLCJjb2xQcm9wcyIsIm9iamVjdCIsImNvbXBvbmVudCIsImVsZW1lbnQiLCJwcm9wVHlwZXMiLCJjb2x1bW5zIiwiYXJyYXlPZiIsInJvd1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTUEsSUFBSSxHQUFHQyxTQUFTLE1BQXRCO0FBQ0EsSUFBTUMsSUFBSSxHQUFHRCxTQUFTLE1BQXRCOztBQUVBLElBQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUMsS0FBSztTQUM3QkMsNkJBQUMsSUFBRDtJQUNFLElBQUksRUFBQyxNQURQO0lBRUUsS0FBSyxFQUFDLFFBRlI7SUFHRSxPQUFPLEVBQUMsZUFIVjtJQUlFLE1BQU0sRUFBRTtLQUNKQyxHQUFHLENBQUNGLEtBQUQsRUFBUSxVQUFSLENBTFQsR0FPR0UsR0FBRyxDQUFDRixLQUFELEVBQVEsU0FBUixDQUFILENBQXNCRyxHQUF0QixDQUEwQixVQUFDQyxNQUFELEVBQVNDLEtBQVQ7V0FDekJKLDZCQUFDLElBQUQ7TUFBTSxHQUFHLEVBQUVJO09BQVdILEdBQUcsQ0FBQ0UsTUFBRCxFQUFTLFVBQVQsQ0FBekIsR0FDR0YsR0FBRyxDQUFDRSxNQUFELEVBQVMsV0FBVCxDQUROLENBRHlCO0dBQTFCLENBUEgsQ0FENkI7Q0FBL0I7O0FBZ0JBLElBQU1FLFFBQVEsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDeEJDLFFBQVEsRUFBRUYsRUFBRSxDQUFDRyxNQURXO0VBRXhCQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0s7Q0FGQyxDQUFqQjtBQUtBYixpQkFBaUIsQ0FBQ2MsU0FBbEIsR0FBOEI7RUFDNUJKLFFBQVEsRUFBRUYsRUFBRSxDQUFDRyxNQURlO0VBRTVCSSxPQUFPLEVBQUVQLEVBQUUsQ0FBQ1EsT0FBSCxDQUFXVCxRQUFYLENBRm1CO0VBRzVCVSxRQUFRLEVBQUVULEVBQUUsQ0FBQ0c7Q0FIZjs7OzsifQ==
