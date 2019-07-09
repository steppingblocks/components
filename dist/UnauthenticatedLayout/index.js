import { j as _extends } from '../chunk-05bf3f70.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-5732a1e2.js';
import { w as withTheme } from '../withTheme/index-d1a984d4.js';
import 'styled-components';
import '../chunk-69193f69.js';
import '../chunk-218dc193.js';
import '../chunk-55a8f221.js';
import '../chunk-bbc6af60.js';
import { a as get } from '../chunk-e008480f.js';
import '../chunk-99207a3b.js';
import '../chunk-f27d627d.js';
import '../chunk-ee2530d1.js';
import { _ as _Layout } from '../chunk-694e03a4.js';

var Content = _Layout.Content;
var SContent = withTheme(Content);
var SLayout = withTheme(_Layout);

var UnauthenticatedLayout = function UnauthenticatedLayout(props) {
  return React__default.createElement(SLayout, _extends({
    minHeight: "100vh"
  }, get(props, 'layoutProps')), get(props, 'Header'), React__default.createElement(SContent, _extends({
    backgroundColor: "background",
    padding: 30
  }, get(props, 'contentProps')), get(props, 'children')), get(props, 'Footer'));
};

UnauthenticatedLayout.propTypes = {
  children: PropTypes__default.element.isRequired,
  contentProps: PropTypes__default.object,
  Footer: PropTypes__default.element,
  Header: PropTypes__default.element,
  layoutProps: PropTypes__default.object
};

export default UnauthenticatedLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VbmF1dGhlbnRpY2F0ZWRMYXlvdXQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHdpdGhUaGVtZSBmcm9tICcuLi93aXRoVGhlbWUnXG5cbmNvbnN0IHsgQ29udGVudCB9ID0gTGF5b3V0XG5cbmNvbnN0IFNDb250ZW50ID0gd2l0aFRoZW1lKENvbnRlbnQpXG5jb25zdCBTTGF5b3V0ID0gd2l0aFRoZW1lKExheW91dClcblxuY29uc3QgVW5hdXRoZW50aWNhdGVkTGF5b3V0ID0gcHJvcHMgPT4gKFxuICA8U0xheW91dCBtaW5IZWlnaHQ9XCIxMDB2aFwiIHsuLi5nZXQocHJvcHMsICdsYXlvdXRQcm9wcycpfT5cbiAgICB7Z2V0KHByb3BzLCAnSGVhZGVyJyl9XG4gICAgPFNDb250ZW50XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJiYWNrZ3JvdW5kXCJcbiAgICAgIHBhZGRpbmc9ezMwfVxuICAgICAgey4uLmdldChwcm9wcywgJ2NvbnRlbnRQcm9wcycpfVxuICAgID5cbiAgICAgIHtnZXQocHJvcHMsICdjaGlsZHJlbicpfVxuICAgIDwvU0NvbnRlbnQ+XG4gICAge2dldChwcm9wcywgJ0Zvb3RlcicpfVxuICA8L1NMYXlvdXQ+XG4pXG5cblVuYXV0aGVudGljYXRlZExheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQVC5lbGVtZW50LmlzUmVxdWlyZWQsXG4gIGNvbnRlbnRQcm9wczogUFQub2JqZWN0LFxuICBGb290ZXI6IFBULmVsZW1lbnQsXG4gIEhlYWRlcjogUFQuZWxlbWVudCxcbiAgbGF5b3V0UHJvcHM6IFBULm9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBVbmF1dGhlbnRpY2F0ZWRMYXlvdXRcbiJdLCJuYW1lcyI6WyJDb250ZW50IiwiU0NvbnRlbnQiLCJ3aXRoVGhlbWUiLCJTTGF5b3V0IiwiVW5hdXRoZW50aWNhdGVkTGF5b3V0IiwicHJvcHMiLCJSZWFjdCIsImdldCIsInByb3BUeXBlcyIsImNoaWxkcmVuIiwiUFQiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsImNvbnRlbnRQcm9wcyIsIm9iamVjdCIsIkZvb3RlciIsIkhlYWRlciIsImxheW91dFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBTVFBLGtCQUFBQTtBQUVSLElBQU1DLFFBQVEsR0FBR0MsU0FBUyxDQUFDRixPQUFELENBQTFCO0FBQ0EsSUFBTUcsT0FBTyxHQUFHRCxTQUFTLFNBQXpCOztBQUVBLElBQU1FLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQUMsS0FBSztTQUNqQ0MsNkJBQUMsT0FBRDtJQUFTLFNBQVMsRUFBQztLQUFZQyxHQUFHLENBQUNGLEtBQUQsRUFBUSxhQUFSLENBQWxDLEdBQ0dFLEdBQUcsQ0FBQ0YsS0FBRCxFQUFRLFFBQVIsQ0FETixFQUVFQyw2QkFBQyxRQUFEO0lBQ0UsZUFBZSxFQUFDLFlBRGxCO0lBRUUsT0FBTyxFQUFFO0tBQ0xDLEdBQUcsQ0FBQ0YsS0FBRCxFQUFRLGNBQVIsQ0FIVCxHQUtHRSxHQUFHLENBQUNGLEtBQUQsRUFBUSxVQUFSLENBTE4sQ0FGRixFQVNHRSxHQUFHLENBQUNGLEtBQUQsRUFBUSxRQUFSLENBVE4sQ0FEaUM7Q0FBbkM7O0FBY0FELHFCQUFxQixDQUFDSSxTQUF0QixHQUFrQztFQUNoQ0MsUUFBUSxFQUFFQyxrQkFBRSxDQUFDQyxPQUFILENBQVdDLFVBRFc7RUFFaENDLFlBQVksRUFBRUgsa0JBQUUsQ0FBQ0ksTUFGZTtFQUdoQ0MsTUFBTSxFQUFFTCxrQkFBRSxDQUFDQyxPQUhxQjtFQUloQ0ssTUFBTSxFQUFFTixrQkFBRSxDQUFDQyxPQUpxQjtFQUtoQ00sV0FBVyxFQUFFUCxrQkFBRSxDQUFDSTtDQUxsQjs7OzsifQ==
