function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Box, ThemeProvider } from '@xstyled/styled-components';
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
          props = _objectWithoutProperties(_ref, ["wrapperProps"]);

      return React.createElement(ThemeProvider, {
        theme: theme
      }, React.createElement(Box, _extends({
        as: BaseComponent
      }, wrapperProps, props)));
    };
  };
};

export var withTheme = createThemeHOC(sampleTheme);
export var withThemeCreator = createThemeHOC;