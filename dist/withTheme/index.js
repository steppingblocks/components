import React__default from 'react';
import { ThemeProvider, Box } from '@xstyled/styled-components';

/**
 * Sample theme with some sane defaultss
 */

var sampleTheme = {
  colors: {
    background: '#FFFFFF',
    black: '#000000',
    border: '#D9D9D9',
    disabled: 'rgba(0, 0, 0, 0.25)',
    error: '#DC2E48',
    heading: 'rgba(0, 0, 0, 0.85)',
    link: '#5099DE',
    primary: '#3FA9FF',
    accent: '#FF9551',
    secondary: 'rgba(0, 0, 0, 0.45)',
    success: '#26ff79',
    text: 'rgba(0, 0, 0, 0.65)',
    warning: '#66310f'
  },
  fontWeights: {
    bold: 600,
    bolder: 800,
    light: 300,
    regular: 500
  },
  shadows: {
    shadow: '0px 0px 4px rgba(0, 0, 0, 0.15)'
  }
  /**
   * Function that takes a sample theme and creates a HOC
   * that provides the theme to xstyled components
   * @param {Object} theme Sample theme
   */

};

var createThemeHOC = function createThemeHOC() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : sampleTheme;
  return function (BaseComponent) {
    return function (_ref) {
      var wrapperProps = _ref.wrapperProps,
          props = babelHelpers.objectWithoutProperties(_ref, ["wrapperProps"]);
      return React__default.createElement(ThemeProvider, {
        theme: theme
      }, React__default.createElement(Box, babelHelpers["extends"]({
        as: BaseComponent
      }, wrapperProps, props)));
    };
  };
};

var withTheme = createThemeHOC(sampleTheme);
var withThemeCreator = createThemeHOC;

export { withTheme, withThemeCreator };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93aXRoVGhlbWUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQHhzdHlsZWQvc3R5bGVkLWNvbXBvbmVudHMnXG5cbi8qKlxuICogU2FtcGxlIHRoZW1lIHdpdGggc29tZSBzYW5lIGRlZmF1bHRzc1xuICovXG5jb25zdCBzYW1wbGVUaGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxuICAgIGJsYWNrOiAnIzAwMDAwMCcsXG4gICAgYm9yZGVyOiAnI0Q5RDlEOScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyxcbiAgICBlcnJvcjogJyNEQzJFNDgnLFxuICAgIGhlYWRpbmc6ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgICBsaW5rOiAnIzUwOTlERScsXG4gICAgcHJpbWFyeTogJyMzRkE5RkYnLFxuICAgIGFjY2VudDogJyNGRjk1NTEnLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMCwgMCwgMCwgMC40NSknLFxuICAgIHN1Y2Nlc3M6ICcjMjZmZjc5JyxcbiAgICB0ZXh0OiAncmdiYSgwLCAwLCAwLCAwLjY1KScsXG4gICAgd2FybmluZzogJyM2NjMxMGYnXG4gIH0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgYm9sZDogNjAwLFxuICAgIGJvbGRlcjogODAwLFxuICAgIGxpZ2h0OiAzMDAsXG4gICAgcmVndWxhcjogNTAwXG4gIH0sXG4gIHNoYWRvd3M6IHtcbiAgICBzaGFkb3c6ICcwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpJ1xuICB9XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCB0YWtlcyBhIHNhbXBsZSB0aGVtZSBhbmQgY3JlYXRlcyBhIEhPQ1xuICogdGhhdCBwcm92aWRlcyB0aGUgdGhlbWUgdG8geHN0eWxlZCBjb21wb25lbnRzXG4gKiBAcGFyYW0ge09iamVjdH0gdGhlbWUgU2FtcGxlIHRoZW1lXG4gKi9cbmNvbnN0IGNyZWF0ZVRoZW1lSE9DID0gKHRoZW1lID0gc2FtcGxlVGhlbWUpID0+IEJhc2VDb21wb25lbnQgPT4gKHtcbiAgd3JhcHBlclByb3BzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Qm94IGFzPXtCYXNlQ29tcG9uZW50fSB7Li4ud3JhcHBlclByb3BzfSB7Li4ucHJvcHN9IC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB3aXRoVGhlbWUgPSBjcmVhdGVUaGVtZUhPQyhzYW1wbGVUaGVtZSlcbmV4cG9ydCBjb25zdCB3aXRoVGhlbWVDcmVhdG9yID0gY3JlYXRlVGhlbWVIT0NcbiJdLCJuYW1lcyI6WyJzYW1wbGVUaGVtZSIsImNvbG9ycyIsImJhY2tncm91bmQiLCJibGFjayIsImJvcmRlciIsImRpc2FibGVkIiwiZXJyb3IiLCJoZWFkaW5nIiwibGluayIsInByaW1hcnkiLCJhY2NlbnQiLCJzZWNvbmRhcnkiLCJzdWNjZXNzIiwidGV4dCIsIndhcm5pbmciLCJmb250V2VpZ2h0cyIsImJvbGQiLCJib2xkZXIiLCJsaWdodCIsInJlZ3VsYXIiLCJzaGFkb3dzIiwic2hhZG93IiwiY3JlYXRlVGhlbWVIT0MiLCJ0aGVtZSIsIkJhc2VDb21wb25lbnQiLCJ3cmFwcGVyUHJvcHMiLCJwcm9wcyIsIlJlYWN0Iiwid2l0aFRoZW1lIiwid2l0aFRoZW1lQ3JlYXRvciJdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7Ozs7QUFHQSxJQUFNQSxXQUFXLEdBQUc7RUFDbEJDLE1BQU0sRUFBRTtJQUNOQyxVQUFVLEVBQUUsU0FETjtJQUVOQyxLQUFLLEVBQUUsU0FGRDtJQUdOQyxNQUFNLEVBQUUsU0FIRjtJQUlOQyxRQUFRLEVBQUUscUJBSko7SUFLTkMsS0FBSyxFQUFFLFNBTEQ7SUFNTkMsT0FBTyxFQUFFLHFCQU5IO0lBT05DLElBQUksRUFBRSxTQVBBO0lBUU5DLE9BQU8sRUFBRSxTQVJIO0lBU05DLE1BQU0sRUFBRSxTQVRGO0lBVU5DLFNBQVMsRUFBRSxxQkFWTDtJQVdOQyxPQUFPLEVBQUUsU0FYSDtJQVlOQyxJQUFJLEVBQUUscUJBWkE7SUFhTkMsT0FBTyxFQUFFO0dBZE87RUFnQmxCQyxXQUFXLEVBQUU7SUFDWEMsSUFBSSxFQUFFLEdBREs7SUFFWEMsTUFBTSxFQUFFLEdBRkc7SUFHWEMsS0FBSyxFQUFFLEdBSEk7SUFJWEMsT0FBTyxFQUFFO0dBcEJPO0VBc0JsQkMsT0FBTyxFQUFFO0lBQ1BDLE1BQU0sRUFBRTs7Ozs7Ozs7Q0F2Qlo7O0FBZ0NBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7TUFBQ0MsS0FBRCx1RUFBU3ZCLFdBQVQ7U0FBeUIsVUFBQXdCLGFBQWE7V0FBSSxnQkFHM0Q7VUFGSkMsWUFFSSxRQUZKQSxZQUVJO1VBRERDLEtBQ0M7YUFFRkMsNkJBQUMsYUFBRDtRQUFlLEtBQUssRUFBRUo7U0FDcEJJLDZCQUFDLEdBQUQ7UUFBSyxFQUFFLEVBQUVIO1NBQW1CQyxZQUE1QixFQUE4Q0MsS0FBOUMsRUFERixDQURGO0tBSjJEO0dBQXRDO0NBQXZCOztBQVdBLElBQWFFLFNBQVMsR0FBR04sY0FBYyxDQUFDdEIsV0FBRCxDQUFoQztBQUNQLElBQWE2QixnQkFBZ0IsR0FBR1AsY0FBekI7Ozs7In0=
