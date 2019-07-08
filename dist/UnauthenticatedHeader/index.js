import { c as _extends, k as _objectWithoutProperties, b as _taggedTemplateLiteral } from '../chunk-039ee305.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-de2160d3.js';
import { _ } from '../chunk-0623ebb0.js';
import styled from '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
import '../chunk-bd0ca170.js';
import '../chunk-ccd1ee83.js';
import '../chunk-5c7b7697.js';
import 'react-dom';
import '../chunk-687a7a24.js';
import '../chunk-8820e6e0.js';
import '../chunk-876b1421.js';
import '../chunk-cdd09aec.js';
import '../chunk-ee2530d1.js';
import '../chunk-73500ad2.js';
import '../chunk-ead10a8b.js';
import CustomButton from '../CustomButton/index.js';
import { _ as _fp } from '../chunk-2706ad5b.js';
import { a as _Row } from '../chunk-ab9ff134.js';
import { _ as _Layout } from '../chunk-2955574f.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VbmF1dGhlbnRpY2F0ZWRIZWFkZXIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgX2ZwIGZyb20gJ2xvZGFzaC9mcCdcbmltcG9ydCB7IExheW91dCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQHhzdHlsZWQvc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi93aXRoVGhlbWUnXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gJy4uL0N1c3RvbUJ1dHRvbidcblxuY29uc3QgeyBIZWFkZXIgfSA9IExheW91dFxuXG5jb25zdCBTSGVhZGVyID0gd2l0aFRoZW1lKEhlYWRlcilcblxuY29uc3QgTWVudUl0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYFxuXG5jb25zdCBTUm93ID0gd2l0aFRoZW1lKFJvdylcblxuY29uc3QgcmVuZGVyQnV0dG9ucyA9IF9mcC5waXBlKFxuICBfZnAuZ2V0KCdidXR0b25zJyksXG4gIF9mcC5tYXAoKHsgYnV0dG9uUHJvcHMsIGNvbnRlbnQgfSkgPT4gKFxuICAgIDxDdXN0b21CdXR0b24ga2V5PXtjb250ZW50fSB7Li4uYnV0dG9uUHJvcHN9IGNvbnRlbnQ9e2NvbnRlbnR9IG14PXsyfSAvPlxuICApKVxuKVxuXG5jb25zdCBVbmF1dGhlbnRpY2F0ZWRIZWFkZXIgPSAoeyBjb250YWluZXJQcm9wcywgLi4ucmVzdCB9KSA9PiAoXG4gIDxTSGVhZGVyXG4gICAgYmFja2dyb3VuZENvbG9yPVwiYmFja2dyb3VuZFwiXG4gICAgYm9yZGVyQm90dG9tPXsyfVxuICAgIGJvcmRlckJvdHRvbUNvbG9yPVwiYm9yZGVyXCJcbiAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gID5cbiAgICA8U1JvdyB0eXBlPVwiZmxleFwiIGFsaWduPVwibWlkZGxlXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICB7Xy5nZXQocmVzdCwgJ0xvZ28nLCBudWxsKX1cbiAgICAgIDxNZW51SXRlbXNDb250YWluZXI+e3JlbmRlckJ1dHRvbnMocmVzdCl9PC9NZW51SXRlbXNDb250YWluZXI+XG4gICAgPC9TUm93PlxuICA8L1NIZWFkZXI+XG4pXG5cbmNvbnN0IEJ1dHRvblBUID0gUFQuc2hhcGUoe1xuICBidXR0b25Qcm9wczogUFQub2JqZWN0LFxuICB0aXRsZTogUFQuc3RyaW5nXG59KVxuXG5VbmF1dGhlbnRpY2F0ZWRIZWFkZXIucHJvcFR5cGVzID0ge1xuICBidXR0b25zOiBQVC5hcnJheU9mKEJ1dHRvblBUKS5pc1JlcXVpcmVkLFxuICBMb2dvOiBQVC5lbGVtZW50LmlzUmVxdWlyZWRcbn1cblxuVW5hdXRoZW50aWNhdGVkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYnV0dG9uczogW10sXG4gIExvZ286IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFVuYXV0aGVudGljYXRlZEhlYWRlcilcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTSGVhZGVyIiwid2l0aFRoZW1lIiwiTWVudUl0ZW1zQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU1JvdyIsInJlbmRlckJ1dHRvbnMiLCJfZnAiLCJwaXBlIiwiZ2V0IiwibWFwIiwiYnV0dG9uUHJvcHMiLCJjb250ZW50IiwiUmVhY3QiLCJVbmF1dGhlbnRpY2F0ZWRIZWFkZXIiLCJjb250YWluZXJQcm9wcyIsInJlc3QiLCJfIiwiQnV0dG9uUFQiLCJQVCIsInNoYXBlIiwib2JqZWN0IiwidGl0bGUiLCJzdHJpbmciLCJwcm9wVHlwZXMiLCJidXR0b25zIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiLCJMb2dvIiwiZWxlbWVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTUUEsaUJBQUFBO0FBRVIsSUFBTUMsT0FBTyxHQUFHQyxTQUFTLENBQUNGLE1BQUQsQ0FBekI7QUFFQSxJQUFNRyxrQkFBa0IsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG1CQUF4QjtBQU1BLElBQU1DLElBQUksR0FBR0osU0FBUyxNQUF0Qjs7QUFFQSxJQUFNSyxhQUFhLEdBQUdDLEdBQUcsQ0FBQ0MsSUFBSixDQUNwQkQsR0FBRyxDQUFDRSxHQUFKLENBQVEsU0FBUixDQURvQixFQUVwQkYsR0FBRyxDQUFDRyxHQUFKLENBQVE7TUFBR0MsV0FBSCxRQUFHQSxXQUFIO01BQWdCQyxPQUFoQixRQUFnQkEsT0FBaEI7U0FDTkMsNkJBQUMsWUFBRDtJQUFjLEdBQUcsRUFBRUQ7S0FBYUQsV0FBaEM7SUFBNkMsT0FBTyxFQUFFQyxPQUF0RDtJQUErRCxFQUFFLEVBQUU7S0FEN0Q7Q0FBUixDQUZvQixDQUF0Qjs7QUFPQSxJQUFNRSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCO01BQUdDLGNBQUgsU0FBR0EsY0FBSDtNQUFzQkMsSUFBdEI7O1NBQzVCSCw2QkFBQyxPQUFEO0lBQ0UsZUFBZSxFQUFDLFlBRGxCO0lBRUUsWUFBWSxFQUFFLENBRmhCO0lBR0UsaUJBQWlCLEVBQUM7S0FDZEUsY0FKTixHQU1FRiw2QkFBQyxJQUFEO0lBQU0sSUFBSSxFQUFDLE1BQVg7SUFBa0IsS0FBSyxFQUFDLFFBQXhCO0lBQWlDLE9BQU8sRUFBQyxlQUF6QztJQUF5RCxNQUFNLEVBQUM7S0FDN0RJLENBQUMsQ0FBQ1IsR0FBRixDQUFNTyxJQUFOLEVBQVksTUFBWixFQUFvQixJQUFwQixDQURILEVBRUVILDZCQUFDLGtCQUFELFFBQXFCUCxhQUFhLENBQUNVLElBQUQsQ0FBbEMsQ0FGRixDQU5GLENBRDRCO0NBQTlCOztBQWNBLElBQU1FLFFBQVEsR0FBR0Msa0JBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ3hCVCxXQUFXLEVBQUVRLGtCQUFFLENBQUNFLE1BRFE7RUFFeEJDLEtBQUssRUFBRUgsa0JBQUUsQ0FBQ0k7Q0FGSyxDQUFqQjtBQUtBVCxxQkFBcUIsQ0FBQ1UsU0FBdEIsR0FBa0M7RUFDaENDLE9BQU8sRUFBRU4sa0JBQUUsQ0FBQ08sT0FBSCxDQUFXUixRQUFYLEVBQXFCUyxVQURFO0VBRWhDQyxJQUFJLEVBQUVULGtCQUFFLENBQUNVLE9BQUgsQ0FBV0Y7Q0FGbkI7QUFLQWIscUJBQXFCLENBQUNnQixZQUF0QixHQUFxQztFQUNuQ0wsT0FBTyxFQUFFLEVBRDBCO0VBRW5DRyxJQUFJLEVBQUU7Q0FGUjtBQUtBLFlBQWUzQixTQUFTLENBQUNhLHFCQUFELENBQXhCOzs7OyJ9
