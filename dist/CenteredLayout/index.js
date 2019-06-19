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
import { R as RowPT } from '../chunk-27538004.js';

var SCol = withTheme(_Col);
var SRow = withTheme(_Row);

var CenteredLayout = function CenteredLayout(props) {
  return React__default.createElement(SRow, _extends({
    type: "flex",
    align: "middle",
    justify: "center",
    gutter: 16
  }, get(props, 'rowProps')), React__default.createElement(SCol, _extends({}, get(props, 'colProps'), {
    xs: {
      span: 20
    },
    md: {
      span: 10
    }
  }), get(props, 'children')));
};

CenteredLayout.propTypes = {
  children: PT.element.isRequired,
  colProps: PT.object,
  rowProps: RowPT
};

export default CenteredLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DZW50ZXJlZExheW91dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcbmltcG9ydCB7IFJvd1BUIH0gZnJvbSAnLi4vcHJvcHR5cGVzJ1xuXG5jb25zdCBTQ29sID0gd2l0aFRoZW1lKENvbClcbmNvbnN0IFNSb3cgPSB3aXRoVGhlbWUoUm93KVxuXG5jb25zdCBDZW50ZXJlZExheW91dCA9IHByb3BzID0+IChcbiAgPFNSb3dcbiAgICB0eXBlPVwiZmxleFwiXG4gICAgYWxpZ249XCJtaWRkbGVcIlxuICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgIGd1dHRlcj17MTZ9XG4gICAgey4uLmdldChwcm9wcywgJ3Jvd1Byb3BzJyl9XG4gID5cbiAgICA8U0NvbCB7Li4uZ2V0KHByb3BzLCAnY29sUHJvcHMnKX0geHM9e3sgc3BhbjogMjAgfX0gbWQ9e3sgc3BhbjogMTAgfX0+XG4gICAgICB7Z2V0KHByb3BzLCAnY2hpbGRyZW4nKX1cbiAgICA8L1NDb2w+XG4gIDwvU1Jvdz5cbilcblxuQ2VudGVyZWRMYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUFQuZWxlbWVudC5pc1JlcXVpcmVkLFxuICBjb2xQcm9wczogUFQub2JqZWN0LFxuICByb3dQcm9wczogUm93UFRcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2VudGVyZWRMYXlvdXRcbiJdLCJuYW1lcyI6WyJTQ29sIiwid2l0aFRoZW1lIiwiU1JvdyIsIkNlbnRlcmVkTGF5b3V0IiwicHJvcHMiLCJSZWFjdCIsImdldCIsInNwYW4iLCJwcm9wVHlwZXMiLCJjaGlsZHJlbiIsIlBUIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJjb2xQcm9wcyIsIm9iamVjdCIsInJvd1Byb3BzIiwiUm93UFQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT0EsSUFBTUEsSUFBSSxHQUFHQyxTQUFTLE1BQXRCO0FBQ0EsSUFBTUMsSUFBSSxHQUFHRCxTQUFTLE1BQXRCOztBQUVBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsS0FBSztTQUMxQkMsNkJBQUMsSUFBRDtJQUNFLElBQUksRUFBQyxNQURQO0lBRUUsS0FBSyxFQUFDLFFBRlI7SUFHRSxPQUFPLEVBQUMsUUFIVjtJQUlFLE1BQU0sRUFBRTtLQUNKQyxHQUFHLENBQUNGLEtBQUQsRUFBUSxVQUFSLENBTFQsR0FPRUMsNkJBQUMsSUFBRCxlQUFVQyxHQUFHLENBQUNGLEtBQUQsRUFBUSxVQUFSLENBQWI7SUFBa0MsRUFBRSxFQUFFO01BQUVHLElBQUksRUFBRTtLQUE5QztJQUFvRCxFQUFFLEVBQUU7TUFBRUEsSUFBSSxFQUFFOztNQUM3REQsR0FBRyxDQUFDRixLQUFELEVBQVEsVUFBUixDQUROLENBUEYsQ0FEMEI7Q0FBNUI7O0FBY0FELGNBQWMsQ0FBQ0ssU0FBZixHQUEyQjtFQUN6QkMsUUFBUSxFQUFFQyxFQUFFLENBQUNDLE9BQUgsQ0FBV0MsVUFESTtFQUV6QkMsUUFBUSxFQUFFSCxFQUFFLENBQUNJLE1BRlk7RUFHekJDLFFBQVEsRUFBRUM7Q0FIWjs7OzsifQ==
