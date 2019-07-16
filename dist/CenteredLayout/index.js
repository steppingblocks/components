import { c as _extends } from '../chunk-89f1190a.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-5732a1e2.js';
import { w as withTheme } from '../withTheme/index-d1a984d4.js';
import 'styled-components';
import '../chunk-69193f69.js';
import '../chunk-94c4abeb.js';
import '../chunk-b9a2ef76.js';
import '../chunk-dc6fce77.js';
import { b as get } from '../chunk-ebe821e3.js';
import '../chunk-f27d627d.js';
import '../chunk-6a997ef0.js';
import { R as RowPT } from '../chunk-4f6d8eaf.js';
import { a as _Row } from '../chunk-7027181c.js';
import { _ as _Col } from '../chunk-bbc0c6bf.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DZW50ZXJlZExheW91dC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB3aXRoVGhlbWUgZnJvbSAnLi4vd2l0aFRoZW1lJ1xuaW1wb3J0IHsgUm93UFQgfSBmcm9tICcuLi9wcm9wdHlwZXMnXG5cbmNvbnN0IFNDb2wgPSB3aXRoVGhlbWUoQ29sKVxuY29uc3QgU1JvdyA9IHdpdGhUaGVtZShSb3cpXG5cbmNvbnN0IENlbnRlcmVkTGF5b3V0ID0gcHJvcHMgPT4gKFxuICA8U1Jvd1xuICAgIHR5cGU9XCJmbGV4XCJcbiAgICBhbGlnbj1cIm1pZGRsZVwiXG4gICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgZ3V0dGVyPXsxNn1cbiAgICB7Li4uZ2V0KHByb3BzLCAncm93UHJvcHMnKX1cbiAgPlxuICAgIDxTQ29sIHsuLi5nZXQocHJvcHMsICdjb2xQcm9wcycpfSB4cz17eyBzcGFuOiAyMCB9fSBtZD17eyBzcGFuOiAxMCB9fT5cbiAgICAgIHtnZXQocHJvcHMsICdjaGlsZHJlbicpfVxuICAgIDwvU0NvbD5cbiAgPC9TUm93PlxuKVxuXG5DZW50ZXJlZExheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQVC5lbGVtZW50LmlzUmVxdWlyZWQsXG4gIGNvbFByb3BzOiBQVC5vYmplY3QsXG4gIHJvd1Byb3BzOiBSb3dQVFxufVxuXG5leHBvcnQgZGVmYXVsdCBDZW50ZXJlZExheW91dFxuIl0sIm5hbWVzIjpbIlNDb2wiLCJ3aXRoVGhlbWUiLCJTUm93IiwiQ2VudGVyZWRMYXlvdXQiLCJwcm9wcyIsIlJlYWN0IiwiZ2V0Iiwic3BhbiIsInByb3BUeXBlcyIsImNoaWxkcmVuIiwiUFQiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsImNvbFByb3BzIiwib2JqZWN0Iiwicm93UHJvcHMiLCJSb3dQVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNQSxJQUFJLEdBQUdDLFNBQVMsTUFBdEI7QUFDQSxJQUFNQyxJQUFJLEdBQUdELFNBQVMsTUFBdEI7O0FBRUEsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxLQUFLO1NBQzFCQyw2QkFBQyxJQUFEO0lBQ0UsSUFBSSxFQUFDLE1BRFA7SUFFRSxLQUFLLEVBQUMsUUFGUjtJQUdFLE9BQU8sRUFBQyxRQUhWO0lBSUUsTUFBTSxFQUFFO0tBQ0pDLEdBQUcsQ0FBQ0YsS0FBRCxFQUFRLFVBQVIsQ0FMVCxHQU9FQyw2QkFBQyxJQUFELGVBQVVDLEdBQUcsQ0FBQ0YsS0FBRCxFQUFRLFVBQVIsQ0FBYjtJQUFrQyxFQUFFLEVBQUU7TUFBRUcsSUFBSSxFQUFFO0tBQTlDO0lBQW9ELEVBQUUsRUFBRTtNQUFFQSxJQUFJLEVBQUU7O01BQzdERCxHQUFHLENBQUNGLEtBQUQsRUFBUSxVQUFSLENBRE4sQ0FQRixDQUQwQjtDQUE1Qjs7QUFjQUQsY0FBYyxDQUFDSyxTQUFmLEdBQTJCO0VBQ3pCQyxRQUFRLEVBQUVDLGtCQUFFLENBQUNDLE9BQUgsQ0FBV0MsVUFESTtFQUV6QkMsUUFBUSxFQUFFSCxrQkFBRSxDQUFDSSxNQUZZO0VBR3pCQyxRQUFRLEVBQUVDO0NBSFo7Ozs7In0=
