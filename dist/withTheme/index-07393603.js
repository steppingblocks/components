import React__default from 'react';
import { ThemeProvider, Box } from '@xstyled/styled-components';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

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

export { _extends as _, withThemeCreator as a, _objectWithoutProperties as b, _slicedToArray as c, _inherits as d, _createClass as e, _classCallCheck as f, _possibleConstructorReturn as g, _defineProperty as h, _assertThisInitialized as i, _getPrototypeOf as j, _taggedTemplateLiteral as k, withTheme as w };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtMDczOTM2MDMuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93aXRoVGhlbWUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQHhzdHlsZWQvc3R5bGVkLWNvbXBvbmVudHMnXG5cbi8qKlxuICogU2FtcGxlIHRoZW1lIHdpdGggc29tZSBzYW5lIGRlZmF1bHRzc1xuICovXG5jb25zdCBzYW1wbGVUaGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxuICAgIGJsYWNrOiAnIzAwMDAwMCcsXG4gICAgYm9yZGVyOiAnI0Q5RDlEOScsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyxcbiAgICBlcnJvcjogJyNEQzJFNDgnLFxuICAgIGhlYWRpbmc6ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgICBsaW5rOiAnIzUwOTlERScsXG4gICAgcHJpbWFyeTogJyMzRkE5RkYnLFxuICAgIGFjY2VudDogJyNGRjk1NTEnLFxuICAgIHNlY29uZGFyeTogJ3JnYmEoMCwgMCwgMCwgMC40NSknLFxuICAgIHN1Y2Nlc3M6ICcjMjZmZjc5JyxcbiAgICB0ZXh0OiAncmdiYSgwLCAwLCAwLCAwLjY1KScsXG4gICAgd2FybmluZzogJyM2NjMxMGYnXG4gIH0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgYm9sZDogNjAwLFxuICAgIGJvbGRlcjogODAwLFxuICAgIGxpZ2h0OiAzMDAsXG4gICAgcmVndWxhcjogNTAwXG4gIH0sXG4gIHNoYWRvd3M6IHtcbiAgICBzaGFkb3c6ICcwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpJ1xuICB9XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCB0YWtlcyBhIHNhbXBsZSB0aGVtZSBhbmQgY3JlYXRlcyBhIEhPQ1xuICogdGhhdCBwcm92aWRlcyB0aGUgdGhlbWUgdG8geHN0eWxlZCBjb21wb25lbnRzXG4gKiBAcGFyYW0ge09iamVjdH0gdGhlbWUgU2FtcGxlIHRoZW1lXG4gKi9cbmNvbnN0IGNyZWF0ZVRoZW1lSE9DID0gKHRoZW1lID0gc2FtcGxlVGhlbWUpID0+IEJhc2VDb21wb25lbnQgPT4gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Qm94IGFzPXtCYXNlQ29tcG9uZW50fSB7Li4ucHJvcHN9IC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB3aXRoVGhlbWUgPSBjcmVhdGVUaGVtZUhPQyhzYW1wbGVUaGVtZSlcbmV4cG9ydCBjb25zdCB3aXRoVGhlbWVDcmVhdG9yID0gY3JlYXRlVGhlbWVIT0NcbiJdLCJuYW1lcyI6WyJzYW1wbGVUaGVtZSIsImNvbG9ycyIsImJhY2tncm91bmQiLCJibGFjayIsImJvcmRlciIsImRpc2FibGVkIiwiZXJyb3IiLCJoZWFkaW5nIiwibGluayIsInByaW1hcnkiLCJhY2NlbnQiLCJzZWNvbmRhcnkiLCJzdWNjZXNzIiwidGV4dCIsIndhcm5pbmciLCJmb250V2VpZ2h0cyIsImJvbGQiLCJib2xkZXIiLCJsaWdodCIsInJlZ3VsYXIiLCJzaGFkb3dzIiwic2hhZG93IiwiY3JlYXRlVGhlbWVIT0MiLCJ0aGVtZSIsIkJhc2VDb21wb25lbnQiLCJwcm9wcyIsIlJlYWN0Iiwid2l0aFRoZW1lIiwid2l0aFRoZW1lQ3JlYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7OztBQUdBLElBQU1BLFdBQVcsR0FBRztFQUNsQkMsTUFBTSxFQUFFO0lBQ05DLFVBQVUsRUFBRSxTQUROO0lBRU5DLEtBQUssRUFBRSxTQUZEO0lBR05DLE1BQU0sRUFBRSxTQUhGO0lBSU5DLFFBQVEsRUFBRSxxQkFKSjtJQUtOQyxLQUFLLEVBQUUsU0FMRDtJQU1OQyxPQUFPLEVBQUUscUJBTkg7SUFPTkMsSUFBSSxFQUFFLFNBUEE7SUFRTkMsT0FBTyxFQUFFLFNBUkg7SUFTTkMsTUFBTSxFQUFFLFNBVEY7SUFVTkMsU0FBUyxFQUFFLHFCQVZMO0lBV05DLE9BQU8sRUFBRSxTQVhIO0lBWU5DLElBQUksRUFBRSxxQkFaQTtJQWFOQyxPQUFPLEVBQUU7R0FkTztFQWdCbEJDLFdBQVcsRUFBRTtJQUNYQyxJQUFJLEVBQUUsR0FESztJQUVYQyxNQUFNLEVBQUUsR0FGRztJQUdYQyxLQUFLLEVBQUUsR0FISTtJQUlYQyxPQUFPLEVBQUU7R0FwQk87RUFzQmxCQyxPQUFPLEVBQUU7SUFDUEMsTUFBTSxFQUFFOzs7Ozs7OztDQXZCWjs7QUFnQ0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtNQUFDQyxLQUFELHVFQUFTdkIsV0FBVDtTQUF5QixVQUFBd0IsYUFBYTtXQUFJLFVBQUFDLEtBQUssRUFBSTthQUV0RUMsNkJBQUMsYUFBRDtRQUFlLEtBQUssRUFBRUg7U0FDcEJHLDZCQUFDLEdBQUQ7UUFBSyxFQUFFLEVBQUVGO1NBQW1CQyxLQUE1QixFQURGLENBREY7S0FEMkQ7R0FBdEM7Q0FBdkI7O0FBUUEsSUFBYUUsU0FBUyxHQUFHTCxjQUFjLENBQUN0QixXQUFELENBQWhDO0FBQ1AsSUFBYTRCLGdCQUFnQixHQUFHTixjQUF6Qjs7OzsifQ==
