import { c as _extends } from '../chunk-fee9d9e4.js';
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
    return function (props) {
      return React__default.createElement(ThemeProvider, {
        theme: theme
      }, React__default.createElement(Box, _extends({
        as: BaseComponent
      }, props)));
    };
  };
};

var withTheme = createThemeHOC(sampleTheme);
var withThemeCreator = createThemeHOC;

export { withTheme, withThemeCreator };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93aXRoVGhlbWUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQHhzdHlsZWQvc3R5bGVkLWNvbXBvbmVudHMnXG5cbi8qKlxuICogU2FtcGxlIHRoZW1lIHdpdGggc29tZSBzYW5lIGRlZmF1bHRzc1xuICovXG5jb25zdCBzYW1wbGVUaGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxuICAgIGJsYWNrOiAnIzAwMDAwMCcsXG4gICAgYm9yZGVyOiAnI0Q5RDlEOScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyxcbiAgICBlcnJvcjogJyNEQzJFNDgnLFxuICAgIGhlYWRpbmc6ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgICBsaW5rOiAnIzUwOTlERScsXG4gICAgcHJpbWFyeTogJyMzRkE5RkYnLFxuICAgIGFjY2VudDogJyNGRjk1NTEnLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMCwgMCwgMCwgMC40NSknLFxuICAgIHN1Y2Nlc3M6ICcjMjZmZjc5JyxcbiAgICB0ZXh0OiAncmdiYSgwLCAwLCAwLCAwLjY1KScsXG4gICAgd2FybmluZzogJyM2NjMxMGYnXG4gIH0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgYm9sZDogNjAwLFxuICAgIGJvbGRlcjogODAwLFxuICAgIGxpZ2h0OiAzMDAsXG4gICAgcmVndWxhcjogNTAwXG4gIH0sXG4gIHNoYWRvd3M6IHtcbiAgICBzaGFkb3c6ICcwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpJ1xuICB9XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCB0YWtlcyBhIHNhbXBsZSB0aGVtZSBhbmQgY3JlYXRlcyBhIEhPQ1xuICogdGhhdCBwcm92aWRlcyB0aGUgdGhlbWUgdG8geHN0eWxlZCBjb21wb25lbnRzXG4gKiBAcGFyYW0ge09iamVjdH0gdGhlbWUgU2FtcGxlIHRoZW1lXG4gKi9cbmNvbnN0IGNyZWF0ZVRoZW1lSE9DID0gKHRoZW1lID0gc2FtcGxlVGhlbWUpID0+IEJhc2VDb21wb25lbnQgPT4gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Qm94IGFzPXtCYXNlQ29tcG9uZW50fSB7Li4ucHJvcHN9IC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB3aXRoVGhlbWUgPSBjcmVhdGVUaGVtZUhPQyhzYW1wbGVUaGVtZSlcbmV4cG9ydCBjb25zdCB3aXRoVGhlbWVDcmVhdG9yID0gY3JlYXRlVGhlbWVIT0NcbiJdLCJuYW1lcyI6WyJzYW1wbGVUaGVtZSIsImNvbG9ycyIsImJhY2tncm91bmQiLCJibGFjayIsImJvcmRlciIsImRpc2FibGVkIiwiZXJyb3IiLCJoZWFkaW5nIiwibGluayIsInByaW1hcnkiLCJhY2NlbnQiLCJzZWNvbmRhcnkiLCJzdWNjZXNzIiwidGV4dCIsIndhcm5pbmciLCJmb250V2VpZ2h0cyIsImJvbGQiLCJib2xkZXIiLCJsaWdodCIsInJlZ3VsYXIiLCJzaGFkb3dzIiwic2hhZG93IiwiY3JlYXRlVGhlbWVIT0MiLCJ0aGVtZSIsIkJhc2VDb21wb25lbnQiLCJwcm9wcyIsIlJlYWN0Iiwid2l0aFRoZW1lIiwid2l0aFRoZW1lQ3JlYXRvciJdLCJtYXBwaW5ncyI6Ijs7OztBQUdBOzs7O0FBR0EsSUFBTUEsV0FBVyxHQUFHO0VBQ2xCQyxNQUFNLEVBQUU7SUFDTkMsVUFBVSxFQUFFLFNBRE47SUFFTkMsS0FBSyxFQUFFLFNBRkQ7SUFHTkMsTUFBTSxFQUFFLFNBSEY7SUFJTkMsUUFBUSxFQUFFLHFCQUpKO0lBS05DLEtBQUssRUFBRSxTQUxEO0lBTU5DLE9BQU8sRUFBRSxxQkFOSDtJQU9OQyxJQUFJLEVBQUUsU0FQQTtJQVFOQyxPQUFPLEVBQUUsU0FSSDtJQVNOQyxNQUFNLEVBQUUsU0FURjtJQVVOQyxTQUFTLEVBQUUscUJBVkw7SUFXTkMsT0FBTyxFQUFFLFNBWEg7SUFZTkMsSUFBSSxFQUFFLHFCQVpBO0lBYU5DLE9BQU8sRUFBRTtHQWRPO0VBZ0JsQkMsV0FBVyxFQUFFO0lBQ1hDLElBQUksRUFBRSxHQURLO0lBRVhDLE1BQU0sRUFBRSxHQUZHO0lBR1hDLEtBQUssRUFBRSxHQUhJO0lBSVhDLE9BQU8sRUFBRTtHQXBCTztFQXNCbEJDLE9BQU8sRUFBRTtJQUNQQyxNQUFNLEVBQUU7Ozs7Ozs7O0NBdkJaOztBQWdDQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO01BQUNDLEtBQUQsdUVBQVN2QixXQUFUO1NBQXlCLFVBQUF3QixhQUFhO1dBQUksVUFBQUMsS0FBSyxFQUFJO2FBRXRFQyw2QkFBQyxhQUFEO1FBQWUsS0FBSyxFQUFFSDtTQUNwQkcsNkJBQUMsR0FBRDtRQUFLLEVBQUUsRUFBRUY7U0FBbUJDLEtBQTVCLEVBREYsQ0FERjtLQUQyRDtHQUF0QztDQUF2Qjs7QUFRQSxJQUFhRSxTQUFTLEdBQUdMLGNBQWMsQ0FBQ3RCLFdBQUQsQ0FBaEM7QUFDUCxJQUFhNEIsZ0JBQWdCLEdBQUdOLGNBQXpCOzs7OyJ9
