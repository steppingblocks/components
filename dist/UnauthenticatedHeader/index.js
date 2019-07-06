import { c as _extends, k as _objectWithoutProperties, b as _taggedTemplateLiteral } from '../chunk-039ee305.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-5732a1e2.js';
import { _ } from '../chunk-11b2c5f7.js';
import styled from '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
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
import '../chunk-ead10a8b.js';
import CustomButton from '../CustomButton/index.js';
import { _ as _fp } from '../chunk-8aa82724.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9VbmF1dGhlbnRpY2F0ZWRIZWFkZXIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgX2ZwIGZyb20gJ2xvZGFzaC9mcCdcbmltcG9ydCB7IExheW91dCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQHhzdHlsZWQvc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi93aXRoVGhlbWUnXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gJy4uL0N1c3RvbUJ1dHRvbidcblxuY29uc3QgeyBIZWFkZXIgfSA9IExheW91dFxuXG5jb25zdCBTSGVhZGVyID0gd2l0aFRoZW1lKEhlYWRlcilcblxuY29uc3QgTWVudUl0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYFxuXG5jb25zdCBTUm93ID0gd2l0aFRoZW1lKFJvdylcblxuY29uc3QgcmVuZGVyQnV0dG9ucyA9IF9mcC5waXBlKFxuICBfZnAuZ2V0KCdidXR0b25zJyksXG4gIF9mcC5tYXAoKHsgYnV0dG9uUHJvcHMsIGNvbnRlbnQgfSkgPT4gKFxuICAgIDxDdXN0b21CdXR0b24ga2V5PXtjb250ZW50fSB7Li4uYnV0dG9uUHJvcHN9IGNvbnRlbnQ9e2NvbnRlbnR9IG14PXsyfSAvPlxuICApKVxuKVxuXG5jb25zdCBVbmF1dGhlbnRpY2F0ZWRIZWFkZXIgPSAoeyBjb250YWluZXJQcm9wcywgLi4ucmVzdCB9KSA9PiAoXG4gIDxTSGVhZGVyXG4gICAgYmFja2dyb3VuZENvbG9yPVwiYmFja2dyb3VuZFwiXG4gICAgYm9yZGVyQm90dG9tPXsyfVxuICAgIGJvcmRlckJvdHRvbUNvbG9yPVwiYm9yZGVyXCJcbiAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gID5cbiAgICA8U1JvdyB0eXBlPVwiZmxleFwiIGFsaWduPVwibWlkZGxlXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICB7Xy5nZXQocmVzdCwgJ0xvZ28nLCBudWxsKX1cbiAgICAgIDxNZW51SXRlbXNDb250YWluZXI+e3JlbmRlckJ1dHRvbnMocmVzdCl9PC9NZW51SXRlbXNDb250YWluZXI+XG4gICAgPC9TUm93PlxuICA8L1NIZWFkZXI+XG4pXG5cbmNvbnN0IEJ1dHRvblBUID0gUFQuc2hhcGUoe1xuICBidXR0b25Qcm9wczogUFQub2JqZWN0LFxuICB0aXRsZTogUFQuc3RyaW5nXG59KVxuXG5VbmF1dGhlbnRpY2F0ZWRIZWFkZXIucHJvcFR5cGVzID0ge1xuICBidXR0b25zOiBQVC5hcnJheU9mKEJ1dHRvblBUKS5pc1JlcXVpcmVkLFxuICBMb2dvOiBQVC5lbGVtZW50LmlzUmVxdWlyZWRcbn1cblxuVW5hdXRoZW50aWNhdGVkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYnV0dG9uczogW10sXG4gIExvZ286IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFVuYXV0aGVudGljYXRlZEhlYWRlcilcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTSGVhZGVyIiwid2l0aFRoZW1lIiwiTWVudUl0ZW1zQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU1JvdyIsInJlbmRlckJ1dHRvbnMiLCJfZnAiLCJwaXBlIiwiZ2V0IiwibWFwIiwiYnV0dG9uUHJvcHMiLCJjb250ZW50IiwiUmVhY3QiLCJVbmF1dGhlbnRpY2F0ZWRIZWFkZXIiLCJjb250YWluZXJQcm9wcyIsInJlc3QiLCJfIiwiQnV0dG9uUFQiLCJQVCIsInNoYXBlIiwib2JqZWN0IiwidGl0bGUiLCJzdHJpbmciLCJwcm9wVHlwZXMiLCJidXR0b25zIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiLCJMb2dvIiwiZWxlbWVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU1FBLGlCQUFBQTtBQUVSLElBQU1DLE9BQU8sR0FBR0MsU0FBUyxDQUFDRixNQUFELENBQXpCO0FBRUEsSUFBTUcsa0JBQWtCLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBVixtQkFBeEI7QUFNQSxJQUFNQyxJQUFJLEdBQUdKLFNBQVMsTUFBdEI7O0FBRUEsSUFBTUssYUFBYSxHQUFHQyxHQUFHLENBQUNDLElBQUosQ0FDcEJELEdBQUcsQ0FBQ0UsR0FBSixDQUFRLFNBQVIsQ0FEb0IsRUFFcEJGLEdBQUcsQ0FBQ0csR0FBSixDQUFRO01BQUdDLFdBQUgsUUFBR0EsV0FBSDtNQUFnQkMsT0FBaEIsUUFBZ0JBLE9BQWhCO1NBQ05DLDZCQUFDLFlBQUQ7SUFBYyxHQUFHLEVBQUVEO0tBQWFELFdBQWhDO0lBQTZDLE9BQU8sRUFBRUMsT0FBdEQ7SUFBK0QsRUFBRSxFQUFFO0tBRDdEO0NBQVIsQ0FGb0IsQ0FBdEI7O0FBT0EsSUFBTUUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QjtNQUFHQyxjQUFILFNBQUdBLGNBQUg7TUFBc0JDLElBQXRCOztTQUM1QkgsNkJBQUMsT0FBRDtJQUNFLGVBQWUsRUFBQyxZQURsQjtJQUVFLFlBQVksRUFBRSxDQUZoQjtJQUdFLGlCQUFpQixFQUFDO0tBQ2RFLGNBSk4sR0FNRUYsNkJBQUMsSUFBRDtJQUFNLElBQUksRUFBQyxNQUFYO0lBQWtCLEtBQUssRUFBQyxRQUF4QjtJQUFpQyxPQUFPLEVBQUMsZUFBekM7SUFBeUQsTUFBTSxFQUFDO0tBQzdESSxDQUFDLENBQUNSLEdBQUYsQ0FBTU8sSUFBTixFQUFZLE1BQVosRUFBb0IsSUFBcEIsQ0FESCxFQUVFSCw2QkFBQyxrQkFBRCxRQUFxQlAsYUFBYSxDQUFDVSxJQUFELENBQWxDLENBRkYsQ0FORixDQUQ0QjtDQUE5Qjs7QUFjQSxJQUFNRSxRQUFRLEdBQUdDLGtCQUFFLENBQUNDLEtBQUgsQ0FBUztFQUN4QlQsV0FBVyxFQUFFUSxrQkFBRSxDQUFDRSxNQURRO0VBRXhCQyxLQUFLLEVBQUVILGtCQUFFLENBQUNJO0NBRkssQ0FBakI7QUFLQVQscUJBQXFCLENBQUNVLFNBQXRCLEdBQWtDO0VBQ2hDQyxPQUFPLEVBQUVOLGtCQUFFLENBQUNPLE9BQUgsQ0FBV1IsUUFBWCxFQUFxQlMsVUFERTtFQUVoQ0MsSUFBSSxFQUFFVCxrQkFBRSxDQUFDVSxPQUFILENBQVdGO0NBRm5CO0FBS0FiLHFCQUFxQixDQUFDZ0IsWUFBdEIsR0FBcUM7RUFDbkNMLE9BQU8sRUFBRSxFQUQwQjtFQUVuQ0csSUFBSSxFQUFFO0NBRlI7QUFLQSxZQUFlM0IsU0FBUyxDQUFDYSxxQkFBRCxDQUF4Qjs7OzsifQ==
