import { c as _extends } from '../chunk-fee9d9e4.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import { b as get } from '../chunk-c38916c0.js';
import '../chunk-02ddfd93.js';
import '../chunk-1f7082a0.js';
import '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
import '../chunk-dbd356d3.js';
import '../chunk-3a7de8d6.js';
import { R as RowPT } from '../chunk-7a0c966a.js';
import '../chunk-d1cdd45e.js';
import { a as _Row } from '../chunk-0cbe1808.js';
import { _ as _Col } from '../chunk-bd4b9b0e.js';

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
  children: PropTypes__default.element.isRequired,
  colProps: PropTypes__default.object,
  rowProps: RowPT
};

export default CenteredLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DZW50ZXJlZExheW91dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcbmltcG9ydCB7IFJvd1BUIH0gZnJvbSAnLi4vcHJvcHR5cGVzJ1xuXG5jb25zdCBTQ29sID0gd2l0aFRoZW1lKENvbClcbmNvbnN0IFNSb3cgPSB3aXRoVGhlbWUoUm93KVxuXG5jb25zdCBDZW50ZXJlZExheW91dCA9IHByb3BzID0+IChcbiAgPFNSb3dcbiAgICB0eXBlPVwiZmxleFwiXG4gICAgYWxpZ249XCJtaWRkbGVcIlxuICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgIGd1dHRlcj17MTZ9XG4gICAgey4uLmdldChwcm9wcywgJ3Jvd1Byb3BzJyl9XG4gID5cbiAgICA8U0NvbCB7Li4uZ2V0KHByb3BzLCAnY29sUHJvcHMnKX0geHM9e3sgc3BhbjogMjAgfX0gbWQ9e3sgc3BhbjogMTAgfX0+XG4gICAgICB7Z2V0KHByb3BzLCAnY2hpbGRyZW4nKX1cbiAgICA8L1NDb2w+XG4gIDwvU1Jvdz5cbilcblxuQ2VudGVyZWRMYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUFQuZWxlbWVudC5pc1JlcXVpcmVkLFxuICBjb2xQcm9wczogUFQub2JqZWN0LFxuICByb3dQcm9wczogUm93UFRcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2VudGVyZWRMYXlvdXRcbiJdLCJuYW1lcyI6WyJTQ29sIiwid2l0aFRoZW1lIiwiU1JvdyIsIkNlbnRlcmVkTGF5b3V0IiwicHJvcHMiLCJSZWFjdCIsImdldCIsInNwYW4iLCJwcm9wVHlwZXMiLCJjaGlsZHJlbiIsIlBUIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJjb2xQcm9wcyIsIm9iamVjdCIsInJvd1Byb3BzIiwiUm93UFQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQU9BLElBQU1BLElBQUksR0FBR0MsU0FBUyxNQUF0QjtBQUNBLElBQU1DLElBQUksR0FBR0QsU0FBUyxNQUF0Qjs7QUFFQSxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLEtBQUs7U0FDMUJDLDZCQUFDLElBQUQ7SUFDRSxJQUFJLEVBQUMsTUFEUDtJQUVFLEtBQUssRUFBQyxRQUZSO0lBR0UsT0FBTyxFQUFDLFFBSFY7SUFJRSxNQUFNLEVBQUU7S0FDSkMsR0FBRyxDQUFDRixLQUFELEVBQVEsVUFBUixDQUxULEdBT0VDLDZCQUFDLElBQUQsZUFBVUMsR0FBRyxDQUFDRixLQUFELEVBQVEsVUFBUixDQUFiO0lBQWtDLEVBQUUsRUFBRTtNQUFFRyxJQUFJLEVBQUU7S0FBOUM7SUFBb0QsRUFBRSxFQUFFO01BQUVBLElBQUksRUFBRTs7TUFDN0RELEdBQUcsQ0FBQ0YsS0FBRCxFQUFRLFVBQVIsQ0FETixDQVBGLENBRDBCO0NBQTVCOztBQWNBRCxjQUFjLENBQUNLLFNBQWYsR0FBMkI7RUFDekJDLFFBQVEsRUFBRUMsa0JBQUUsQ0FBQ0MsT0FBSCxDQUFXQyxVQURJO0VBRXpCQyxRQUFRLEVBQUVILGtCQUFFLENBQUNJLE1BRlk7RUFHekJDLFFBQVEsRUFBRUM7Q0FIWjs7OzsifQ==
