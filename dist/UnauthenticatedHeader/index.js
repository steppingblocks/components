import { j as _extends, b as _taggedTemplateLiteral, k as _objectWithoutProperties } from '../chunk-8ab3b625.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-5732a1e2.js';
import { _ } from '../chunk-11b2c5f7.js';
import styled from 'styled-components';
import { _ as _fp } from '../chunk-69193f69.js';
import withTheme from '../withTheme/index.js';
import '../chunk-218dc193.js';
import '../chunk-469aa2a1.js';
import '../chunk-55a8f221.js';
import 'react-dom';
import '../chunk-99207a3b.js';
import '../chunk-f27d627d.js';
import '../chunk-8820e6e0.js';
import '../chunk-e9a642ec.js';
import '../chunk-d1343d60.js';
import '../chunk-ee2530d1.js';
import '../chunk-c35b7916.js';
import '../chunk-9ded0b9e.js';
import CustomButton from '../CustomButton/index.js';
import { a as _Row } from '../chunk-c6793c52.js';
import { _ as _Layout } from '../chunk-694e03a4.js';

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Header = _Layout.Header;
var SHeader = withTheme(Header);
var MenuItemsContainer = styled.div(_templateObject());
var SRow = withTheme(_Row);

var renderButtons = _fp.pipe(_fp.get('buttons'), _fp.map(function (_ref) {
  var buttonProps = _ref.buttonProps,
      content = _ref.content;
  return React__default.createElement(CustomButton, _extends({
    key: content
  }, buttonProps, {
    content: content,
    mx: 2
  }));
}));

var UnauthenticatedHeader = function UnauthenticatedHeader(_ref2) {
  var containerProps = _ref2.containerProps,
      rest = _objectWithoutProperties(_ref2, ["containerProps"]);

  return React__default.createElement(SHeader, _extends({
    backgroundColor: "background",
    borderBottom: 2,
    borderBottomColor: "border"
  }, containerProps), React__default.createElement(SRow, {
    type: "flex",
    align: "middle",
    justify: "space-between",
    height: "100%"
  }, _.get(rest, 'Logo', null), React__default.createElement(MenuItemsContainer, null, renderButtons(rest))));
};

var ButtonPT = PropTypes__default.shape({
  buttonProps: PropTypes__default.object,
  title: PropTypes__default.string
});
UnauthenticatedHeader.propTypes = {
  buttons: PropTypes__default.arrayOf(ButtonPT).isRequired,
  Logo: PropTypes__default.element.isRequired
};
UnauthenticatedHeader.defaultProps = {
  buttons: [],
  Logo: null
};
var index = withTheme(UnauthenticatedHeader);

export default index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VbmF1dGhlbnRpY2F0ZWRIZWFkZXIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgX2ZwIGZyb20gJ2xvZGFzaC9mcCdcbmltcG9ydCB7IExheW91dCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgd2l0aFRoZW1lIGZyb20gJy4uL3dpdGhUaGVtZSdcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSAnLi4vQ3VzdG9tQnV0dG9uJ1xuXG5jb25zdCB7IEhlYWRlciB9ID0gTGF5b3V0XG5cbmNvbnN0IFNIZWFkZXIgPSB3aXRoVGhlbWUoSGVhZGVyKVxuXG5jb25zdCBNZW51SXRlbXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gXG5cbmNvbnN0IFNSb3cgPSB3aXRoVGhlbWUoUm93KVxuXG5jb25zdCByZW5kZXJCdXR0b25zID0gX2ZwLnBpcGUoXG4gIF9mcC5nZXQoJ2J1dHRvbnMnKSxcbiAgX2ZwLm1hcCgoeyBidXR0b25Qcm9wcywgY29udGVudCB9KSA9PiAoXG4gICAgPEN1c3RvbUJ1dHRvbiBrZXk9e2NvbnRlbnR9IHsuLi5idXR0b25Qcm9wc30gY29udGVudD17Y29udGVudH0gbXg9ezJ9IC8+XG4gICkpXG4pXG5cbmNvbnN0IFVuYXV0aGVudGljYXRlZEhlYWRlciA9ICh7IGNvbnRhaW5lclByb3BzLCAuLi5yZXN0IH0pID0+IChcbiAgPFNIZWFkZXJcbiAgICBiYWNrZ3JvdW5kQ29sb3I9XCJiYWNrZ3JvdW5kXCJcbiAgICBib3JkZXJCb3R0b209ezJ9XG4gICAgYm9yZGVyQm90dG9tQ29sb3I9XCJib3JkZXJcIlxuICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgPlxuICAgIDxTUm93IHR5cGU9XCJmbGV4XCIgYWxpZ249XCJtaWRkbGVcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgIHtfLmdldChyZXN0LCAnTG9nbycsIG51bGwpfVxuICAgICAgPE1lbnVJdGVtc0NvbnRhaW5lcj57cmVuZGVyQnV0dG9ucyhyZXN0KX08L01lbnVJdGVtc0NvbnRhaW5lcj5cbiAgICA8L1NSb3c+XG4gIDwvU0hlYWRlcj5cbilcblxuY29uc3QgQnV0dG9uUFQgPSBQVC5zaGFwZSh7XG4gIGJ1dHRvblByb3BzOiBQVC5vYmplY3QsXG4gIHRpdGxlOiBQVC5zdHJpbmdcbn0pXG5cblVuYXV0aGVudGljYXRlZEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGJ1dHRvbnM6IFBULmFycmF5T2YoQnV0dG9uUFQpLmlzUmVxdWlyZWQsXG4gIExvZ286IFBULmVsZW1lbnQuaXNSZXF1aXJlZFxufVxuXG5VbmF1dGhlbnRpY2F0ZWRIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBidXR0b25zOiBbXSxcbiAgTG9nbzogbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVW5hdXRoZW50aWNhdGVkSGVhZGVyKVxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIlNIZWFkZXIiLCJ3aXRoVGhlbWUiLCJNZW51SXRlbXNDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJTUm93IiwicmVuZGVyQnV0dG9ucyIsIl9mcCIsInBpcGUiLCJnZXQiLCJtYXAiLCJidXR0b25Qcm9wcyIsImNvbnRlbnQiLCJSZWFjdCIsIlVuYXV0aGVudGljYXRlZEhlYWRlciIsImNvbnRhaW5lclByb3BzIiwicmVzdCIsIl8iLCJCdXR0b25QVCIsIlBUIiwic2hhcGUiLCJvYmplY3QiLCJ0aXRsZSIsInN0cmluZyIsInByb3BUeXBlcyIsImJ1dHRvbnMiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCIsIkxvZ28iLCJlbGVtZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTUUEsaUJBQUFBO0FBRVIsSUFBTUMsT0FBTyxHQUFHQyxTQUFTLENBQUNGLE1BQUQsQ0FBekI7QUFFQSxJQUFNRyxrQkFBa0IsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG1CQUF4QjtBQU1BLElBQU1DLElBQUksR0FBR0osU0FBUyxNQUF0Qjs7QUFFQSxJQUFNSyxhQUFhLEdBQUdDLEdBQUcsQ0FBQ0MsSUFBSixDQUNwQkQsR0FBRyxDQUFDRSxHQUFKLENBQVEsU0FBUixDQURvQixFQUVwQkYsR0FBRyxDQUFDRyxHQUFKLENBQVE7TUFBR0MsV0FBSCxRQUFHQSxXQUFIO01BQWdCQyxPQUFoQixRQUFnQkEsT0FBaEI7U0FDTkMsNkJBQUMsWUFBRDtJQUFjLEdBQUcsRUFBRUQ7S0FBYUQsV0FBaEM7SUFBNkMsT0FBTyxFQUFFQyxPQUF0RDtJQUErRCxFQUFFLEVBQUU7S0FEN0Q7Q0FBUixDQUZvQixDQUF0Qjs7QUFPQSxJQUFNRSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCO01BQUdDLGNBQUgsU0FBR0EsY0FBSDtNQUFzQkMsSUFBdEI7O1NBQzVCSCw2QkFBQyxPQUFEO0lBQ0UsZUFBZSxFQUFDLFlBRGxCO0lBRUUsWUFBWSxFQUFFLENBRmhCO0lBR0UsaUJBQWlCLEVBQUM7S0FDZEUsY0FKTixHQU1FRiw2QkFBQyxJQUFEO0lBQU0sSUFBSSxFQUFDLE1BQVg7SUFBa0IsS0FBSyxFQUFDLFFBQXhCO0lBQWlDLE9BQU8sRUFBQyxlQUF6QztJQUF5RCxNQUFNLEVBQUM7S0FDN0RJLENBQUMsQ0FBQ1IsR0FBRixDQUFNTyxJQUFOLEVBQVksTUFBWixFQUFvQixJQUFwQixDQURILEVBRUVILDZCQUFDLGtCQUFELFFBQXFCUCxhQUFhLENBQUNVLElBQUQsQ0FBbEMsQ0FGRixDQU5GLENBRDRCO0NBQTlCOztBQWNBLElBQU1FLFFBQVEsR0FBR0Msa0JBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ3hCVCxXQUFXLEVBQUVRLGtCQUFFLENBQUNFLE1BRFE7RUFFeEJDLEtBQUssRUFBRUgsa0JBQUUsQ0FBQ0k7Q0FGSyxDQUFqQjtBQUtBVCxxQkFBcUIsQ0FBQ1UsU0FBdEIsR0FBa0M7RUFDaENDLE9BQU8sRUFBRU4sa0JBQUUsQ0FBQ08sT0FBSCxDQUFXUixRQUFYLEVBQXFCUyxVQURFO0VBRWhDQyxJQUFJLEVBQUVULGtCQUFFLENBQUNVLE9BQUgsQ0FBV0Y7Q0FGbkI7QUFLQWIscUJBQXFCLENBQUNnQixZQUF0QixHQUFxQztFQUNuQ0wsT0FBTyxFQUFFLEVBRDBCO0VBRW5DRyxJQUFJLEVBQUU7Q0FGUjtBQUtBLFlBQWUzQixTQUFTLENBQUNhLHFCQUFELENBQXhCOzs7OyJ9
