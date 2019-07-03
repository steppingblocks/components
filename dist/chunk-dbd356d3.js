import 'react';
import 'prop-types';
import { c as createCommonjsModule, a as commonjsGlobal, b as require$$2, u as unwrapExports, r as require$$1 } from './chunk-02ddfd93.js';

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var key = '__global_unique_id__';

var gud = function() {
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

var implementation = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(require$$1);



var _propTypes2 = _interopRequireDefault(require$$2);



var _gud2 = _interopRequireDefault(gud);



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (process.env.NODE_ENV !== 'production') {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(require$$1.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(require$$1.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];
});

unwrapExports(implementation);

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(require$$1);



var _implementation2 = _interopRequireDefault(implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
});

unwrapExports(lib);

var en_US = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Goto',
  jump_to_confirm: 'confirm',
  page: '',

  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
module.exports = exports['default'];
});

unwrapExports(en_US);

var en_US$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports['default'] = {
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
module.exports = exports['default'];
});

unwrapExports(en_US$1);

var en_US$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  placeholder: 'Select time'
};
var _default = locale;
exports["default"] = _default;
});

unwrapExports(en_US$2);

var en_US$3 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(en_US$1);

var _en_US2 = _interopRequireDefault(en_US$2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Merge into a locale object
var locale = {
  lang: _extends({
    placeholder: 'Select date',
    rangePlaceholder: ['Start date', 'End date']
  }, _en_US["default"]),
  timePickerLocale: _extends({}, _en_US2["default"])
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports["default"] = _default;
});

unwrapExports(en_US$3);

var en_US$4 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(en_US$3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _en_US["default"];
exports["default"] = _default;
});

unwrapExports(en_US$4);

var _default_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(en_US);

var _en_US2 = _interopRequireDefault(en_US$3);

var _en_US3 = _interopRequireDefault(en_US$2);

var _en_US4 = _interopRequireDefault(en_US$4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  locale: 'en',
  Pagination: _en_US["default"],
  DatePicker: _en_US2["default"],
  TimePicker: _en_US3["default"],
  Calendar: _en_US4["default"],
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    sortTitle: 'Sort'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'edit',
    copy: 'copy',
    copied: 'copy success',
    expand: 'expand'
  },
  PageHeader: {
    back: 'back'
  }
};
exports["default"] = _default;
});

unwrapExports(_default_1);

var LocaleReceiver_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require$$1);

var PropTypes = _interopRequireWildcard(require$$2);

var _default = _interopRequireDefault(_default_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LocaleReceiver =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LocaleReceiver, _React$Component);

  function LocaleReceiver() {
    _classCallCheck(this, LocaleReceiver);

    return _possibleConstructorReturn(this, _getPrototypeOf(LocaleReceiver).apply(this, arguments));
  }

  _createClass(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || _default["default"][componentName || 'global'];
      var antLocale = this.context.antLocale;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends({}, typeof locale === 'function' ? locale() : locale, localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context.antLocale;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return _default["default"].locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode());
    }
  }]);

  return LocaleReceiver;
}(React.Component);

exports["default"] = LocaleReceiver;
LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextTypes = {
  antLocale: PropTypes.object
};
});

unwrapExports(LocaleReceiver_1);

var empty = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require$$1);

var _classnames = _interopRequireDefault(classnames);



var _LocaleReceiver = _interopRequireDefault(LocaleReceiver_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __rest = function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

/* babel-plugin-inline-import './empty.svg' */
var defaultEmptyImg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg0IiBoZWlnaHQ9IjE1MiIgdmlld0JveD0iMCAwIDE4NCAxNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0IDMxLjY3KSI+CiAgICAgIDxlbGxpcHNlIGZpbGwtb3BhY2l0eT0iLjgiIGZpbGw9IiNGNUY1RjciIGN4PSI2Ny43OTciIGN5PSIxMDYuODkiIHJ4PSI2Ny43OTciIHJ5PSIxMi42NjgiLz4KICAgICAgPHBhdGggZD0iTTEyMi4wMzQgNjkuNjc0TDk4LjEwOSA0MC4yMjljLTEuMTQ4LTEuMzg2LTIuODI2LTIuMjI1LTQuNTkzLTIuMjI1aC01MS40NGMtMS43NjYgMC0zLjQ0NC44MzktNC41OTIgMi4yMjVMMTMuNTYgNjkuNjc0djE1LjM4M2gxMDguNDc1VjY5LjY3NHoiIGZpbGw9IiNBRUI4QzIiLz4KICAgICAgPHBhdGggZD0iTTEwMS41MzcgODYuMjE0TDgwLjYzIDYxLjEwMmMtMS4wMDEtMS4yMDctMi41MDctMS44NjctNC4wNDgtMS44NjdIMzEuNzI0Yy0xLjU0IDAtMy4wNDcuNjYtNC4wNDggMS44NjdMNi43NjkgODYuMjE0djEzLjc5Mmg5NC43NjhWODYuMjE0eiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMuNTYpIi8+CiAgICAgIDxwYXRoIGQ9Ik0zMy44MyAwaDY3LjkzM2E0IDQgMCAwIDEgNCA0djkzLjM0NGE0IDQgMCAwIDEtNCA0SDMzLjgzYTQgNCAwIDAgMS00LTRWNGE0IDQgMCAwIDEgNC00eiIgZmlsbD0iI0Y1RjVGNyIvPgogICAgICA8cGF0aCBkPSJNNDIuNjc4IDkuOTUzaDUwLjIzN2EyIDIgMCAwIDEgMiAyVjM2LjkxYTIgMiAwIDAgMS0yIDJINDIuNjc4YTIgMiAwIDAgMS0yLTJWMTEuOTUzYTIgMiAwIDAgMSAyLTJ6TTQyLjk0IDQ5Ljc2N2g0OS43MTNhMi4yNjIgMi4yNjIgMCAxIDEgMCA0LjUyNEg0Mi45NGEyLjI2MiAyLjI2MiAwIDAgMSAwLTQuNTI0ek00Mi45NCA2MS41M2g0OS43MTNhMi4yNjIgMi4yNjIgMCAxIDEgMCA0LjUyNUg0Mi45NGEyLjI2MiAyLjI2MiAwIDAgMSAwLTQuNTI1ek0xMjEuODEzIDEwNS4wMzJjLS43NzUgMy4wNzEtMy40OTcgNS4zNi02LjczNSA1LjM2SDIwLjUxNWMtMy4yMzggMC01Ljk2LTIuMjktNi43MzQtNS4zNmE3LjMwOSA3LjMwOSAwIDAgMS0uMjIyLTEuNzlWNjkuNjc1aDI2LjMxOGMyLjkwNyAwIDUuMjUgMi40NDggNS4yNSA1LjQydi4wNGMwIDIuOTcxIDIuMzcgNS4zNyA1LjI3NyA1LjM3aDM0Ljc4NWMyLjkwNyAwIDUuMjc3LTIuNDIxIDUuMjc3LTUuMzkzVjc1LjFjMC0yLjk3MiAyLjM0My01LjQyNiA1LjI1LTUuNDI2aDI2LjMxOHYzMy41NjljMCAuNjE3LS4wNzcgMS4yMTYtLjIyMSAxLjc4OXoiIGZpbGw9IiNEQ0UwRTYiLz4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik0xNDkuMTIxIDMzLjI5MmwtNi44MyAyLjY1YTEgMSAwIDAgMS0xLjMxNy0xLjIzbDEuOTM3LTYuMjA3Yy0yLjU4OS0yLjk0NC00LjEwOS02LjUzNC00LjEwOS0xMC40MDhDMTM4LjgwMiA4LjEwMiAxNDguOTIgMCAxNjEuNDAyIDAgMTczLjg4MSAwIDE4NCA4LjEwMiAxODQgMTguMDk3YzAgOS45OTUtMTAuMTE4IDE4LjA5Ny0yMi41OTkgMTguMDk3LTQuNTI4IDAtOC43NDQtMS4wNjYtMTIuMjgtMi45MDJ6IiBmaWxsPSIjRENFMEU2Ii8+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDkuNjUgMTUuMzgzKSIgZmlsbD0iI0ZGRiI+CiAgICAgIDxlbGxpcHNlIGN4PSIyMC42NTQiIGN5PSIzLjE2NyIgcng9IjIuODQ5IiByeT0iMi44MTUiLz4KICAgICAgPHBhdGggZD0iTTUuNjk4IDUuNjNIMEwyLjg5OC43MDR6TTkuMjU5LjcwNGg0Ljk4NVY1LjYzSDkuMjU5eiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==";

/* babel-plugin-inline-import './simple.svg' */
var simpleEmptyImg = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA2NCA0MSIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxlbGxpcHNlIGZpbGw9IiNGNUY1RjUiIGN4PSIzMiIgY3k9IjMzIiByeD0iMzIiIHJ5PSI3Ii8+CiAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0Q5RDlEOSI+CiAgICAgIDxwYXRoIGQ9Ik01NSAxMi43Nkw0NC44NTQgMS4yNThDNDQuMzY3LjQ3NCA0My42NTYgMCA0Mi45MDcgMEgyMS4wOTNjLS43NDkgMC0xLjQ2LjQ3NC0xLjk0NyAxLjI1N0w5IDEyLjc2MVYyMmg0NnYtOS4yNHoiLz4KICAgICAgPHBhdGggZD0iTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6IiBmaWxsPSIjRkFGQUZBIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K";

var OriginEmpty = function OriginEmpty(props) {
  return React.createElement(configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var className = props.className,
        customizePrefixCls = props.prefixCls,
        _props$image = props.image,
        image = _props$image === void 0 ? defaultEmptyImg : _props$image,
        description = props.description,
        children = props.children,
        imageStyle = props.imageStyle,
        restProps = __rest(props, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

    return React.createElement(_LocaleReceiver["default"], {
      componentName: "Empty"
    }, function (locale) {
      var prefixCls = getPrefixCls('empty', customizePrefixCls);
      var des = description || locale.description;
      var alt = typeof des === 'string' ? des : 'empty';
      var imageNode = null;

      if (typeof image === 'string') {
        imageNode = React.createElement("img", {
          alt: alt,
          src: image
        });
      } else {
        imageNode = image;
      }

      return React.createElement("div", _extends({
        className: (0, _classnames["default"])(prefixCls, _defineProperty({}, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), className)
      }, restProps), React.createElement("div", {
        className: "".concat(prefixCls, "-image"),
        style: imageStyle
      }, imageNode), React.createElement("p", {
        className: "".concat(prefixCls, "-description")
      }, des), children && React.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, children));
    });
  });
};

var Empty = OriginEmpty;
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
var _default = Empty;
exports["default"] = _default;
});

unwrapExports(empty);

var renderEmpty_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require$$1);

var _empty = _interopRequireDefault(empty);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var renderEmpty = function renderEmpty(componentName) {
  return React.createElement(configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE
        });

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });

      default:
        return React.createElement(_empty["default"], null);
    }
  });
};

var _default = renderEmpty;
exports["default"] = _default;
});

unwrapExports(renderEmpty_1);

var configProvider = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withConfigConsumer = withConfigConsumer;
exports["default"] = exports.ConfigConsumer = exports.configConsumerProps = void 0;

var React = _interopRequireWildcard(require$$1);

var _createReactContext = _interopRequireDefault(lib);

var _renderEmpty = _interopRequireDefault(renderEmpty_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var configConsumerProps = ['getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton'];
exports.configConsumerProps = configConsumerProps;
var ConfigContext = (0, _createReactContext["default"])({
  // We provide a default function for Context without provider
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return "ant-".concat(suffixCls);
  },
  renderEmpty: _renderEmpty["default"]
});
var ConfigConsumer = ConfigContext.Consumer;
exports.ConfigConsumer = ConfigConsumer;

var ConfigProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfigProvider, _React$Component);

  function ConfigProvider() {
    var _this;

    _classCallCheck(this, ConfigProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConfigProvider).apply(this, arguments));

    _this.getPrefixCls = function (suffixCls, customizePrefixCls) {
      var _this$props$prefixCls = _this.props.prefixCls,
          prefixCls = _this$props$prefixCls === void 0 ? 'ant' : _this$props$prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? "".concat(prefixCls, "-").concat(suffixCls) : prefixCls;
    };

    _this.renderProvider = function (context) {
      var _this$props = _this.props,
          children = _this$props.children,
          getPopupContainer = _this$props.getPopupContainer,
          renderEmpty = _this$props.renderEmpty,
          csp = _this$props.csp,
          autoInsertSpaceInButton = _this$props.autoInsertSpaceInButton;

      var config = _extends({}, context, {
        getPrefixCls: _this.getPrefixCls,
        csp: csp,
        autoInsertSpaceInButton: autoInsertSpaceInButton
      });

      if (getPopupContainer) {
        config.getPopupContainer = getPopupContainer;
      }

      if (renderEmpty) {
        config.renderEmpty = renderEmpty;
      }

      return React.createElement(ConfigContext.Provider, {
        value: config
      }, children);
    };

    return _this;
  }

  _createClass(ConfigProvider, [{
    key: "render",
    value: function render() {
      return React.createElement(ConfigConsumer, null, this.renderProvider);
    }
  }]);

  return ConfigProvider;
}(React.Component);

function withConfigConsumer(config) {
  return function (Component) {
    // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
    var SFC = function SFC(props) {
      return React.createElement(ConfigConsumer, null, function (configProps) {
        var basicPrefixCls = config.prefixCls;
        var getPrefixCls = configProps.getPrefixCls;
        var customizePrefixCls = props.prefixCls;
        var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
        return React.createElement(Component, _extends({}, configProps, props, {
          prefixCls: prefixCls
        }));
      });
    };

    var cons = Component.constructor;
    var name = cons && cons.displayName || Component.name || 'Component';
    SFC.displayName = "withConfigConsumer(".concat(name, ")");
    return SFC;
  };
}

var _default = ConfigProvider;
exports["default"] = _default;
});

unwrapExports(configProvider);
var configProvider_1 = configProvider.withConfigConsumer;
var configProvider_2 = configProvider.ConfigConsumer;
var configProvider_3 = configProvider.configConsumerProps;

export { configProvider as _, warning_1 as a, LocaleReceiver_1 as b, classnames as c, lib as d, _default_1 as e, classnames as r, warning_1 as w };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmstZGJkMzU2ZDMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2d1ZC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vY3JlYXRlLXJlYWN0LWNvbnRleHQvbGliL2ltcGxlbWVudGF0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2NyZWF0ZS1yZWFjdC1jb250ZXh0L2xpYi9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYy1wYWdpbmF0aW9uL2xpYi9sb2NhbGUvZW5fVVMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmMtY2FsZW5kYXIvbGliL2xvY2FsZS9lbl9VUy5qcyIsIi4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVMuanMiLCIuLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NhbGVuZGFyL2xvY2FsZS9lbl9VUy5qcyIsIi4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZGVmYXVsdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyL3JlbmRlckVtcHR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvLyBAZmxvd1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5ID0gJ19fZ2xvYmFsX3VuaXF1ZV9pZF9fJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGdsb2JhbFtrZXldID0gKGdsb2JhbFtrZXldIHx8IDApICsgMTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAxID8gbGVuIC0gMSA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDE7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMV0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2d1ZCA9IHJlcXVpcmUoJ2d1ZCcpO1xuXG52YXIgX2d1ZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ndWQpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTUFYX1NJR05FRF8zMV9CSVRfSU5UID0gMTA3Mzc0MTgyMztcblxuLy8gSW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbmZ1bmN0aW9uIG9iamVjdElzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudEVtaXR0ZXIodmFsdWUpIHtcbiAgdmFyIGhhbmRsZXJzID0gW107XG4gIHJldHVybiB7XG4gICAgb246IGZ1bmN0aW9uIG9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfSxcbiAgICBvZmY6IGZ1bmN0aW9uIG9mZihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVycyA9IGhhbmRsZXJzLmZpbHRlcihmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gaCAhPT0gaGFuZGxlcjtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdWYWx1ZSwgY2hhbmdlZEJpdHMpIHtcbiAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyKHZhbHVlLCBjaGFuZ2VkQml0cyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlblswXSA6IGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWFjdENvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICB2YXIgX1Byb3ZpZGVyJGNoaWxkQ29udGV4LCBfQ29uc3VtZXIkY29udGV4dFR5cGU7XG5cbiAgdmFyIGNvbnRleHRQcm9wID0gJ19fY3JlYXRlLXJlYWN0LWNvbnRleHQtJyArICgwLCBfZ3VkMi5kZWZhdWx0KSgpICsgJ19fJztcblxuICB2YXIgUHJvdmlkZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm92aWRlcik7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5lbWl0dGVyID0gY3JlYXRlRXZlbnRFbWl0dGVyKF90aGlzLnByb3BzLnZhbHVlKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gICAgfVxuXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW2NvbnRleHRQcm9wXSA9IHRoaXMuZW1pdHRlciwgX3JlZjtcbiAgICB9O1xuXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IG5leHRQcm9wcy52YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSBuZXh0UHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBjaGFuZ2VkQml0cyA9IHZvaWQgMDtcblxuICAgICAgICBpZiAob2JqZWN0SXMob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoYW5nZWRCaXRzID0gMDsgLy8gTm8gY2hhbmdlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhbmdlZEJpdHMgPSB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09ICdmdW5jdGlvbicgPyBjYWxjdWxhdGVDaGFuZ2VkQml0cyhvbGRWYWx1ZSwgbmV3VmFsdWUpIDogTUFYX1NJR05FRF8zMV9CSVRfSU5UO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKChjaGFuZ2VkQml0cyAmIE1BWF9TSUdORURfMzFfQklUX0lOVCkgPT09IGNoYW5nZWRCaXRzLCAnY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IEV4cGVjdGVkIHRoZSByZXR1cm4gdmFsdWUgdG8gYmUgYSAnICsgJzMxLWJpdCBpbnRlZ2VyLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNoYW5nZWRCaXRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGFuZ2VkQml0cyB8PSAwO1xuXG4gICAgICAgICAgaWYgKGNoYW5nZWRCaXRzICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuc2V0KG5leHRQcm9wcy52YWx1ZSwgY2hhbmdlZEJpdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBQcm92aWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfTtcblxuICAgIHJldHVybiBQcm92aWRlcjtcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IChfUHJvdmlkZXIkY2hpbGRDb250ZXggPSB7fSwgX1Byb3ZpZGVyJGNoaWxkQ29udGV4W2NvbnRleHRQcm9wXSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsIF9Qcm92aWRlciRjaGlsZENvbnRleCk7XG5cbiAgdmFyIENvbnN1bWVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gICAgX2luaGVyaXRzKENvbnN1bWVyLCBfQ29tcG9uZW50Mik7XG5cbiAgICBmdW5jdGlvbiBDb25zdW1lcigpIHtcbiAgICAgIHZhciBfdGVtcDIsIF90aGlzMiwgX3JldDI7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25zdW1lcik7XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZXQyID0gKF90ZW1wMiA9IChfdGhpczIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50Mi5jYWxsLmFwcGx5KF9Db21wb25lbnQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzMiksIF90aGlzMi5zdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6IF90aGlzMi5nZXRWYWx1ZSgpXG4gICAgICB9LCBfdGhpczIub25VcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGNoYW5nZWRCaXRzKSB7XG4gICAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSBfdGhpczIub2JzZXJ2ZWRCaXRzIHwgMDtcbiAgICAgICAgaWYgKChvYnNlcnZlZEJpdHMgJiBjaGFuZ2VkQml0cykgIT09IDApIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyB2YWx1ZTogX3RoaXMyLmdldFZhbHVlKCkgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIF90ZW1wMiksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzMiwgX3JldDIpO1xuICAgIH1cblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSBuZXh0UHJvcHMub2JzZXJ2ZWRCaXRzO1xuXG4gICAgICB0aGlzLm9ic2VydmVkQml0cyA9IG9ic2VydmVkQml0cyA9PT0gdW5kZWZpbmVkIHx8IG9ic2VydmVkQml0cyA9PT0gbnVsbCA/IE1BWF9TSUdORURfMzFfQklUX0lOVCAvLyBTdWJzY3JpYmUgdG8gYWxsIGNoYW5nZXMgYnkgZGVmYXVsdFxuICAgICAgOiBvYnNlcnZlZEJpdHM7XG4gICAgfTtcblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0pIHtcbiAgICAgICAgdGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXS5vbih0aGlzLm9uVXBkYXRlKTtcbiAgICAgIH1cbiAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSB0aGlzLnByb3BzLm9ic2VydmVkQml0cztcblxuICAgICAgdGhpcy5vYnNlcnZlZEJpdHMgPSBvYnNlcnZlZEJpdHMgPT09IHVuZGVmaW5lZCB8fCBvYnNlcnZlZEJpdHMgPT09IG51bGwgPyBNQVhfU0lHTkVEXzMxX0JJVF9JTlQgLy8gU3Vic2NyaWJlIHRvIGFsbCBjaGFuZ2VzIGJ5IGRlZmF1bHRcbiAgICAgIDogb2JzZXJ2ZWRCaXRzO1xuICAgIH07XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0ub2ZmKHRoaXMub25VcGRhdGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLmdldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBvbmx5Q2hpbGQodGhpcy5wcm9wcy5jaGlsZHJlbikodGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBDb25zdW1lcjtcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBDb25zdW1lci5jb250ZXh0VHlwZXMgPSAoX0NvbnN1bWVyJGNvbnRleHRUeXBlID0ge30sIF9Db25zdW1lciRjb250ZXh0VHlwZVtjb250ZXh0UHJvcF0gPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgX0NvbnN1bWVyJGNvbnRleHRUeXBlKTtcblxuXG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IFByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBDb25zdW1lclxuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZWFjdENvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9pbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIF9pbXBsZW1lbnRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbXBsZW1lbnRhdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDb250ZXh0IHx8IF9pbXBsZW1lbnRhdGlvbjIuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcbiAgLy8gT3B0aW9ucy5qc3hcbiAgaXRlbXNfcGVyX3BhZ2U6ICcvIHBhZ2UnLFxuICBqdW1wX3RvOiAnR290bycsXG4gIGp1bXBfdG9fY29uZmlybTogJ2NvbmZpcm0nLFxuICBwYWdlOiAnJyxcblxuICAvLyBQYWdpbmF0aW9uLmpzeFxuICBwcmV2X3BhZ2U6ICdQcmV2aW91cyBQYWdlJyxcbiAgbmV4dF9wYWdlOiAnTmV4dCBQYWdlJyxcbiAgcHJldl81OiAnUHJldmlvdXMgNSBQYWdlcycsXG4gIG5leHRfNTogJ05leHQgNSBQYWdlcycsXG4gIHByZXZfMzogJ1ByZXZpb3VzIDMgUGFnZXMnLFxuICBuZXh0XzM6ICdOZXh0IDMgUGFnZXMnXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICB0b2RheTogJ1RvZGF5JyxcbiAgbm93OiAnTm93JyxcbiAgYmFja1RvVG9kYXk6ICdCYWNrIHRvIHRvZGF5JyxcbiAgb2s6ICdPaycsXG4gIGNsZWFyOiAnQ2xlYXInLFxuICBtb250aDogJ01vbnRoJyxcbiAgeWVhcjogJ1llYXInLFxuICB0aW1lU2VsZWN0OiAnc2VsZWN0IHRpbWUnLFxuICBkYXRlU2VsZWN0OiAnc2VsZWN0IGRhdGUnLFxuICB3ZWVrU2VsZWN0OiAnQ2hvb3NlIGEgd2VlaycsXG4gIG1vbnRoU2VsZWN0OiAnQ2hvb3NlIGEgbW9udGgnLFxuICB5ZWFyU2VsZWN0OiAnQ2hvb3NlIGEgeWVhcicsXG4gIGRlY2FkZVNlbGVjdDogJ0Nob29zZSBhIGRlY2FkZScsXG4gIHllYXJGb3JtYXQ6ICdZWVlZJyxcbiAgZGF0ZUZvcm1hdDogJ00vRC9ZWVlZJyxcbiAgZGF5Rm9ybWF0OiAnRCcsXG4gIGRhdGVUaW1lRm9ybWF0OiAnTS9EL1lZWVkgSEg6bW06c3MnLFxuICBtb250aEJlZm9yZVllYXI6IHRydWUsXG4gIHByZXZpb3VzTW9udGg6ICdQcmV2aW91cyBtb250aCAoUGFnZVVwKScsXG4gIG5leHRNb250aDogJ05leHQgbW9udGggKFBhZ2VEb3duKScsXG4gIHByZXZpb3VzWWVhcjogJ0xhc3QgeWVhciAoQ29udHJvbCArIGxlZnQpJyxcbiAgbmV4dFllYXI6ICdOZXh0IHllYXIgKENvbnRyb2wgKyByaWdodCknLFxuICBwcmV2aW91c0RlY2FkZTogJ0xhc3QgZGVjYWRlJyxcbiAgbmV4dERlY2FkZTogJ05leHQgZGVjYWRlJyxcbiAgcHJldmlvdXNDZW50dXJ5OiAnTGFzdCBjZW50dXJ5JyxcbiAgbmV4dENlbnR1cnk6ICdOZXh0IGNlbnR1cnknXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcbnZhciBsb2NhbGUgPSB7XG4gIHBsYWNlaG9sZGVyOiAnU2VsZWN0IHRpbWUnXG59O1xudmFyIF9kZWZhdWx0ID0gbG9jYWxlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtY2FsZW5kYXIvbGliL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbi8vIE1lcmdlIGludG8gYSBsb2NhbGUgb2JqZWN0XG52YXIgbG9jYWxlID0ge1xuICBsYW5nOiBfZXh0ZW5kcyh7XG4gICAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgZGF0ZScsXG4gICAgcmFuZ2VQbGFjZWhvbGRlcjogWydTdGFydCBkYXRlJywgJ0VuZCBkYXRlJ11cbiAgfSwgX2VuX1VTW1wiZGVmYXVsdFwiXSksXG4gIHRpbWVQaWNrZXJMb2NhbGU6IF9leHRlbmRzKHt9LCBfZW5fVVMyW1wiZGVmYXVsdFwiXSlcbn07IC8vIEFsbCBzZXR0aW5ncyBhdDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9kYXRlLXBpY2tlci9sb2NhbGUvZXhhbXBsZS5qc29uXG5cbnZhciBfZGVmYXVsdCA9IGxvY2FsZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9lbl9VUyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSBfZW5fVVNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2VuX1VTID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcGFnaW5hdGlvbi9saWIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9lbl9VUzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9kYXRlLXBpY2tlci9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY2FsZW5kYXIvbG9jYWxlL2VuX1VTXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgbG9jYWxlOiAnZW4nLFxuICBQYWdpbmF0aW9uOiBfZW5fVVNbXCJkZWZhdWx0XCJdLFxuICBEYXRlUGlja2VyOiBfZW5fVVMyW1wiZGVmYXVsdFwiXSxcbiAgVGltZVBpY2tlcjogX2VuX1VTM1tcImRlZmF1bHRcIl0sXG4gIENhbGVuZGFyOiBfZW5fVVM0W1wiZGVmYXVsdFwiXSxcbiAgZ2xvYmFsOiB7XG4gICAgcGxhY2Vob2xkZXI6ICdQbGVhc2Ugc2VsZWN0J1xuICB9LFxuICBUYWJsZToge1xuICAgIGZpbHRlclRpdGxlOiAnRmlsdGVyIG1lbnUnLFxuICAgIGZpbHRlckNvbmZpcm06ICdPSycsXG4gICAgZmlsdGVyUmVzZXQ6ICdSZXNldCcsXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGN1cnJlbnQgcGFnZScsXG4gICAgc2VsZWN0SW52ZXJ0OiAnSW52ZXJ0IGN1cnJlbnQgcGFnZScsXG4gICAgc29ydFRpdGxlOiAnU29ydCdcbiAgfSxcbiAgTW9kYWw6IHtcbiAgICBva1RleHQ6ICdPSycsXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gICAganVzdE9rVGV4dDogJ09LJ1xuICB9LFxuICBQb3Bjb25maXJtOiB7XG4gICAgb2tUZXh0OiAnT0snLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnXG4gIH0sXG4gIFRyYW5zZmVyOiB7XG4gICAgdGl0bGVzOiBbJycsICcnXSxcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaCBoZXJlJyxcbiAgICBpdGVtVW5pdDogJ2l0ZW0nLFxuICAgIGl0ZW1zVW5pdDogJ2l0ZW1zJ1xuICB9LFxuICBVcGxvYWQ6IHtcbiAgICB1cGxvYWRpbmc6ICdVcGxvYWRpbmcuLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdSZW1vdmUgZmlsZScsXG4gICAgdXBsb2FkRXJyb3I6ICdVcGxvYWQgZXJyb3InLFxuICAgIHByZXZpZXdGaWxlOiAnUHJldmlldyBmaWxlJ1xuICB9LFxuICBFbXB0eToge1xuICAgIGRlc2NyaXB0aW9uOiAnTm8gRGF0YSdcbiAgfSxcbiAgSWNvbjoge1xuICAgIGljb246ICdpY29uJ1xuICB9LFxuICBUZXh0OiB7XG4gICAgZWRpdDogJ2VkaXQnLFxuICAgIGNvcHk6ICdjb3B5JyxcbiAgICBjb3BpZWQ6ICdjb3B5IHN1Y2Nlc3MnLFxuICAgIGV4cGFuZDogJ2V4cGFuZCdcbiAgfSxcbiAgUGFnZUhlYWRlcjoge1xuICAgIGJhY2s6ICdiYWNrJ1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RlZmF1bHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgTG9jYWxlUmVjZWl2ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKExvY2FsZVJlY2VpdmVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMb2NhbGVSZWNlaXZlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxlUmVjZWl2ZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihMb2NhbGVSZWNlaXZlcikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTG9jYWxlUmVjZWl2ZXIsIFt7XG4gICAga2V5OiBcImdldExvY2FsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb2NhbGUoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbXBvbmVudE5hbWUgPSBfdGhpcyRwcm9wcy5jb21wb25lbnROYW1lLFxuICAgICAgICAgIGRlZmF1bHRMb2NhbGUgPSBfdGhpcyRwcm9wcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgdmFyIGxvY2FsZSA9IGRlZmF1bHRMb2NhbGUgfHwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdW2NvbXBvbmVudE5hbWUgfHwgJ2dsb2JhbCddO1xuICAgICAgdmFyIGFudExvY2FsZSA9IHRoaXMuY29udGV4dC5hbnRMb2NhbGU7XG4gICAgICB2YXIgbG9jYWxlRnJvbUNvbnRleHQgPSBjb21wb25lbnROYW1lICYmIGFudExvY2FsZSA/IGFudExvY2FsZVtjb21wb25lbnROYW1lXSA6IHt9O1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0eXBlb2YgbG9jYWxlID09PSAnZnVuY3Rpb24nID8gbG9jYWxlKCkgOiBsb2NhbGUsIGxvY2FsZUZyb21Db250ZXh0IHx8IHt9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TG9jYWxlQ29kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb2NhbGVDb2RlKCkge1xuICAgICAgdmFyIGFudExvY2FsZSA9IHRoaXMuY29udGV4dC5hbnRMb2NhbGU7XG4gICAgICB2YXIgbG9jYWxlQ29kZSA9IGFudExvY2FsZSAmJiBhbnRMb2NhbGUubG9jYWxlOyAvLyBIYWQgdXNlIExvY2FsZVByb3ZpZGUgYnV0IGRpZG4ndCBzZXQgbG9jYWxlXG5cbiAgICAgIGlmIChhbnRMb2NhbGUgJiYgYW50TG9jYWxlLmV4aXN0ICYmICFsb2NhbGVDb2RlKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdFtcImRlZmF1bHRcIl0ubG9jYWxlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbG9jYWxlQ29kZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHRoaXMuZ2V0TG9jYWxlKCksIHRoaXMuZ2V0TG9jYWxlQ29kZSgpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9jYWxlUmVjZWl2ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTG9jYWxlUmVjZWl2ZXI7XG5Mb2NhbGVSZWNlaXZlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudE5hbWU6ICdnbG9iYWwnXG59O1xuTG9jYWxlUmVjZWl2ZXIuY29udGV4dFR5cGVzID0ge1xuICBhbnRMb2NhbGU6IFByb3BUeXBlcy5vYmplY3Rcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX0xvY2FsZVJlY2VpdmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuLyogYmFiZWwtcGx1Z2luLWlubGluZS1pbXBvcnQgJy4vZW1wdHkuc3ZnJyAqL1xudmFyIGRlZmF1bHRFbXB0eUltZyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRnMElpQm9aV2xuYUhROUlqRTFNaUlnZG1sbGQwSnZlRDBpTUNBd0lERTROQ0F4TlRJaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NpQWdQR2NnWm1sc2JEMGlibTl1WlNJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lqNEtJQ0FnSUR4bklIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLREkwSURNeExqWTNLU0krQ2lBZ0lDQWdJRHhsYkd4cGNITmxJR1pwYkd3dGIzQmhZMmwwZVQwaUxqZ2lJR1pwYkd3OUlpTkdOVVkxUmpjaUlHTjRQU0kyTnk0M09UY2lJR041UFNJeE1EWXVPRGtpSUhKNFBTSTJOeTQzT1RjaUlISjVQU0l4TWk0Mk5qZ2lMejRLSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEV5TWk0d016UWdOamt1TmpjMFREazRMakV3T1NBME1DNHlNamxqTFRFdU1UUTRMVEV1TXpnMkxUSXVPREkyTFRJdU1qSTFMVFF1TlRrekxUSXVNakkxYUMwMU1TNDBOR010TVM0M05qWWdNQzB6TGpRME5DNDRNemt0TkM0MU9USWdNaTR5TWpWTU1UTXVOVFlnTmprdU5qYzBkakUxTGpNNE0yZ3hNRGd1TkRjMVZqWTVMalkzTkhvaUlHWnBiR3c5SWlOQlJVSTRReklpTHo0S0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRFd01TNDFNemNnT0RZdU1qRTBURGd3TGpZeklEWXhMakV3TW1NdE1TNHdNREV0TVM0eU1EY3RNaTQxTURjdE1TNDROamN0TkM0d05EZ3RNUzQ0TmpkSU16RXVOekkwWXkweExqVTBJREF0TXk0d05EY3VOall0TkM0d05EZ2dNUzQ0TmpkTU5pNDNOamtnT0RZdU1qRTBkakV6TGpjNU1tZzVOQzQzTmpoV09EWXVNakUwZWlJZ1ptbHNiRDBpZFhKc0tDTnNhVzVsWVhKSGNtRmthV1Z1ZEMweEtTSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTVRNdU5UWXBJaTgrQ2lBZ0lDQWdJRHh3WVhSb0lHUTlJazB6TXk0NE15QXdhRFkzTGprek0yRTBJRFFnTUNBd0lERWdOQ0EwZGprekxqTTBOR0UwSURRZ01DQXdJREV0TkNBMFNETXpMamd6WVRRZ05DQXdJREFnTVMwMExUUldOR0UwSURRZ01DQXdJREVnTkMwMGVpSWdabWxzYkQwaUkwWTFSalZHTnlJdlBnb2dJQ0FnSUNBOGNHRjBhQ0JrUFNKTk5ESXVOamM0SURrdU9UVXphRFV3TGpJek4yRXlJRElnTUNBd0lERWdNaUF5VmpNMkxqa3hZVElnTWlBd0lEQWdNUzB5SURKSU5ESXVOamM0WVRJZ01pQXdJREFnTVMweUxUSldNVEV1T1RVellUSWdNaUF3SURBZ01TQXlMVEo2VFRReUxqazBJRFE1TGpjMk4yZzBPUzQzTVROaE1pNHlOaklnTWk0eU5qSWdNQ0F4SURFZ01DQTBMalV5TkVnME1pNDVOR0V5TGpJMk1pQXlMakkyTWlBd0lEQWdNU0F3TFRRdU5USTBlazAwTWk0NU5DQTJNUzQxTTJnME9TNDNNVE5oTWk0eU5qSWdNaTR5TmpJZ01DQXhJREVnTUNBMExqVXlOVWcwTWk0NU5HRXlMakkyTWlBeUxqSTJNaUF3SURBZ01TQXdMVFF1TlRJMWVrMHhNakV1T0RFeklERXdOUzR3TXpKakxTNDNOelVnTXk0d056RXRNeTQwT1RjZ05TNHpOaTAyTGpjek5TQTFMak0yU0RJd0xqVXhOV010TXk0eU16Z2dNQzAxTGprMkxUSXVNamt0Tmk0M016UXROUzR6Tm1FM0xqTXdPU0EzTGpNd09TQXdJREFnTVMwdU1qSXlMVEV1TnpsV05qa3VOamMxYURJMkxqTXhPR015TGprd055QXdJRFV1TWpVZ01pNDBORGdnTlM0eU5TQTFMalF5ZGk0d05HTXdJREl1T1RjeElESXVNemNnTlM0ek55QTFMakkzTnlBMUxqTTNhRE0wTGpjNE5XTXlMamt3TnlBd0lEVXVNamMzTFRJdU5ESXhJRFV1TWpjM0xUVXVNemt6VmpjMUxqRmpNQzB5TGprM01pQXlMak0wTXkwMUxqUXlOaUExTGpJMUxUVXVOREkyYURJMkxqTXhPSFl6TXk0MU5qbGpNQ0F1TmpFM0xTNHdOemNnTVM0eU1UWXRMakl5TVNBeExqYzRPWG9pSUdacGJHdzlJaU5FUTBVd1JUWWlMejRLSUNBZ0lEd3ZaejRLSUNBZ0lEeHdZWFJvSUdROUlrMHhORGt1TVRJeElETXpMakk1TW13dE5pNDRNeUF5TGpZMVlURWdNU0F3SURBZ01TMHhMak14TnkweExqSXpiREV1T1RNM0xUWXVNakEzWXkweUxqVTRPUzB5TGprME5DMDBMakV3T1MwMkxqVXpOQzAwTGpFd09TMHhNQzQwTURoRE1UTTRMamd3TWlBNExqRXdNaUF4TkRndU9USWdNQ0F4TmpFdU5EQXlJREFnTVRjekxqZzRNU0F3SURFNE5DQTRMakV3TWlBeE9EUWdNVGd1TURrM1l6QWdPUzQ1T1RVdE1UQXVNVEU0SURFNExqQTVOeTB5TWk0MU9Ua2dNVGd1TURrM0xUUXVOVEk0SURBdE9DNDNORFF0TVM0d05qWXRNVEl1TWpndE1pNDVNREo2SWlCbWFXeHNQU0lqUkVORk1FVTJJaTgrQ2lBZ0lDQThaeUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNneE5Ea3VOalVnTVRVdU16Z3pLU0lnWm1sc2JEMGlJMFpHUmlJK0NpQWdJQ0FnSUR4bGJHeHBjSE5sSUdONFBTSXlNQzQyTlRRaUlHTjVQU0l6TGpFMk55SWdjbmc5SWpJdU9EUTVJaUJ5ZVQwaU1pNDRNVFVpTHo0S0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRVdU5qazRJRFV1TmpOSU1Fd3lMamc1T0M0M01EUjZUVGt1TWpVNUxqY3dOR2cwTGprNE5WWTFMall6U0RrdU1qVTVlaUl2UGdvZ0lDQWdQQzluUGdvZ0lEd3ZaejRLUEM5emRtYytDZz09XCI7XG5cbi8qIGJhYmVsLXBsdWdpbi1pbmxpbmUtaW1wb3J0ICcuL3NpbXBsZS5zdmcnICovXG52YXIgc2ltcGxlRW1wdHlJbWcgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5qUWlJR2hsYVdkb2REMGlOREVpSUhacFpYZENiM2c5SWpBZ01DQTJOQ0EwTVNJZ0lIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NpQWdQR2NnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01DQXhLU0lnWm1sc2JEMGlibTl1WlNJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lqNEtJQ0FnSUR4bGJHeHBjSE5sSUdacGJHdzlJaU5HTlVZMVJqVWlJR040UFNJek1pSWdZM2s5SWpNeklpQnllRDBpTXpJaUlISjVQU0kzSWk4K0NpQWdJQ0E4WnlCbWFXeHNMWEoxYkdVOUltNXZibnBsY204aUlITjBjbTlyWlQwaUkwUTVSRGxFT1NJK0NpQWdJQ0FnSUR4d1lYUm9JR1E5SWswMU5TQXhNaTQzTmt3ME5DNDROVFFnTVM0eU5UaERORFF1TXpZM0xqUTNOQ0EwTXk0Mk5UWWdNQ0EwTWk0NU1EY2dNRWd5TVM0d09UTmpMUzQzTkRrZ01DMHhMalEyTGpRM05DMHhMamswTnlBeExqSTFOMHc1SURFeUxqYzJNVll5TW1nME5uWXRPUzR5TkhvaUx6NEtJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUUXhMall4TXlBeE5TNDVNekZqTUMweExqWXdOUzQ1T1RRdE1pNDVNeUF5TGpJeU55MHlMamt6TVVnMU5YWXhPQzR4TXpkRE5UVWdNek11TWpZZ05UTXVOamdnTXpVZ05USXVNRFVnTXpWb0xUUXdMakZETVRBdU16SWdNelVnT1NBek15NHlOVGtnT1NBek1TNHhNemRXTVROb01URXVNVFpqTVM0eU16TWdNQ0F5TGpJeU55QXhMak15TXlBeUxqSXlOeUF5TGpreU9IWXVNREl5WXpBZ01TNDJNRFVnTVM0d01EVWdNaTQ1TURFZ01pNHlNemNnTWk0NU1ERm9NVFF1TnpVeVl6RXVNak15SURBZ01pNHlNemN0TVM0ek1EZ2dNaTR5TXpjdE1pNDVNVE4yTFM0d01EZDZJaUJtYVd4c1BTSWpSa0ZHUVVaQklpOCtDaUFnSUNBOEwyYytDaUFnUEM5blBnbzhMM04yWno0S1wiO1xuXG52YXIgT3JpZ2luRW1wdHkgPSBmdW5jdGlvbiBPcmlnaW5FbXB0eShwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBfcHJvcHMkaW1hZ2UgPSBwcm9wcy5pbWFnZSxcbiAgICAgICAgaW1hZ2UgPSBfcHJvcHMkaW1hZ2UgPT09IHZvaWQgMCA/IGRlZmF1bHRFbXB0eUltZyA6IF9wcm9wcyRpbWFnZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgaW1hZ2VTdHlsZSA9IHByb3BzLmltYWdlU3R5bGUsXG4gICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChwcm9wcywgW1wiY2xhc3NOYW1lXCIsIFwicHJlZml4Q2xzXCIsIFwiaW1hZ2VcIiwgXCJkZXNjcmlwdGlvblwiLCBcImNoaWxkcmVuXCIsIFwiaW1hZ2VTdHlsZVwiXSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfTG9jYWxlUmVjZWl2ZXJbXCJkZWZhdWx0XCJdLCB7XG4gICAgICBjb21wb25lbnROYW1lOiBcIkVtcHR5XCJcbiAgICB9LCBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdlbXB0eScsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgZGVzID0gZGVzY3JpcHRpb24gfHwgbG9jYWxlLmRlc2NyaXB0aW9uO1xuICAgICAgdmFyIGFsdCA9IHR5cGVvZiBkZXMgPT09ICdzdHJpbmcnID8gZGVzIDogJ2VtcHR5JztcbiAgICAgIHZhciBpbWFnZU5vZGUgPSBudWxsO1xuXG4gICAgICBpZiAodHlwZW9mIGltYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpbWFnZU5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgICBhbHQ6IGFsdCxcbiAgICAgICAgICBzcmM6IGltYWdlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW1hZ2VOb2RlID0gaW1hZ2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ub3JtYWxcIiksIGltYWdlID09PSBzaW1wbGVFbXB0eUltZyksIGNsYXNzTmFtZSlcbiAgICAgIH0sIHJlc3RQcm9wcyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW1hZ2VcIiksXG4gICAgICAgIHN0eWxlOiBpbWFnZVN0eWxlXG4gICAgICB9LCBpbWFnZU5vZGUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kZXNjcmlwdGlvblwiKVxuICAgICAgfSwgZGVzKSwgY2hpbGRyZW4gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1mb290ZXJcIilcbiAgICAgIH0sIGNoaWxkcmVuKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxudmFyIEVtcHR5ID0gT3JpZ2luRW1wdHk7XG5FbXB0eS5QUkVTRU5URURfSU1BR0VfREVGQVVMVCA9IGRlZmF1bHRFbXB0eUltZztcbkVtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEUgPSBzaW1wbGVFbXB0eUltZztcbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2VtcHR5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vZW1wdHlcIikpO1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciByZW5kZXJFbXB0eSA9IGZ1bmN0aW9uIHJlbmRlckVtcHR5KGNvbXBvbmVudE5hbWUpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXy5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG4gICAgdmFyIHByZWZpeCA9IGdldFByZWZpeENscygnZW1wdHknKTtcblxuICAgIHN3aXRjaCAoY29tcG9uZW50TmFtZSkge1xuICAgICAgY2FzZSAnVGFibGUnOlxuICAgICAgY2FzZSAnTGlzdCc6XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICBpbWFnZTogX2VtcHR5W1wiZGVmYXVsdFwiXS5QUkVTRU5URURfSU1BR0VfU0lNUExFXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdTZWxlY3QnOlxuICAgICAgY2FzZSAnVHJlZVNlbGVjdCc6XG4gICAgICBjYXNlICdDYXNjYWRlcic6XG4gICAgICBjYXNlICdUcmFuc2Zlcic6XG4gICAgICBjYXNlICdNZW50aW9ucyc6XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9lbXB0eVtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICBpbWFnZTogX2VtcHR5W1wiZGVmYXVsdFwiXS5QUkVTRU5URURfSU1BR0VfU0lNUExFLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4LCBcIi1zbWFsbFwiKVxuICAgICAgICB9KTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwgbnVsbCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IHJlbmRlckVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMud2l0aENvbmZpZ0NvbnN1bWVyID0gd2l0aENvbmZpZ0NvbnN1bWVyO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLkNvbmZpZ0NvbnN1bWVyID0gZXhwb3J0cy5jb25maWdDb25zdW1lclByb3BzID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVJlYWN0Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2NyZWF0ZS1yZWFjdC1jb250ZXh0XCIpKTtcblxudmFyIF9yZW5kZXJFbXB0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVuZGVyRW1wdHlcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgY29uZmlnQ29uc3VtZXJQcm9wcyA9IFsnZ2V0UG9wdXBDb250YWluZXInLCAncm9vdFByZWZpeENscycsICdnZXRQcmVmaXhDbHMnLCAncmVuZGVyRW1wdHknLCAnY3NwJywgJ2F1dG9JbnNlcnRTcGFjZUluQnV0dG9uJ107XG5leHBvcnRzLmNvbmZpZ0NvbnN1bWVyUHJvcHMgPSBjb25maWdDb25zdW1lclByb3BzO1xudmFyIENvbmZpZ0NvbnRleHQgPSAoMCwgX2NyZWF0ZVJlYWN0Q29udGV4dFtcImRlZmF1bHRcIl0pKHtcbiAgLy8gV2UgcHJvdmlkZSBhIGRlZmF1bHQgZnVuY3Rpb24gZm9yIENvbnRleHQgd2l0aG91dCBwcm92aWRlclxuICBnZXRQcmVmaXhDbHM6IGZ1bmN0aW9uIGdldFByZWZpeENscyhzdWZmaXhDbHMsIGN1c3RvbWl6ZVByZWZpeENscykge1xuICAgIGlmIChjdXN0b21pemVQcmVmaXhDbHMpIHJldHVybiBjdXN0b21pemVQcmVmaXhDbHM7XG4gICAgcmV0dXJuIFwiYW50LVwiLmNvbmNhdChzdWZmaXhDbHMpO1xuICB9LFxuICByZW5kZXJFbXB0eTogX3JlbmRlckVtcHR5W1wiZGVmYXVsdFwiXVxufSk7XG52YXIgQ29uZmlnQ29uc3VtZXIgPSBDb25maWdDb250ZXh0LkNvbnN1bWVyO1xuZXhwb3J0cy5Db25maWdDb25zdW1lciA9IENvbmZpZ0NvbnN1bWVyO1xuXG52YXIgQ29uZmlnUHJvdmlkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbmZpZ1Byb3ZpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb25maWdQcm92aWRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uZmlnUHJvdmlkZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQ29uZmlnUHJvdmlkZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgX3RoaXMuZ2V0UHJlZml4Q2xzID0gZnVuY3Rpb24gKHN1ZmZpeENscywgY3VzdG9taXplUHJlZml4Q2xzKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMkcHJlZml4Q2xzID0gX3RoaXMucHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzJHByZWZpeENscyA9PT0gdm9pZCAwID8gJ2FudCcgOiBfdGhpcyRwcm9wcyRwcmVmaXhDbHM7XG4gICAgICBpZiAoY3VzdG9taXplUHJlZml4Q2xzKSByZXR1cm4gY3VzdG9taXplUHJlZml4Q2xzO1xuICAgICAgcmV0dXJuIHN1ZmZpeENscyA/IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzdWZmaXhDbHMpIDogcHJlZml4Q2xzO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJQcm92aWRlciA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gX3RoaXMkcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgcmVuZGVyRW1wdHkgPSBfdGhpcyRwcm9wcy5yZW5kZXJFbXB0eSxcbiAgICAgICAgICBjc3AgPSBfdGhpcyRwcm9wcy5jc3AsXG4gICAgICAgICAgYXV0b0luc2VydFNwYWNlSW5CdXR0b24gPSBfdGhpcyRwcm9wcy5hdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbjtcblxuICAgICAgdmFyIGNvbmZpZyA9IF9leHRlbmRzKHt9LCBjb250ZXh0LCB7XG4gICAgICAgIGdldFByZWZpeENsczogX3RoaXMuZ2V0UHJlZml4Q2xzLFxuICAgICAgICBjc3A6IGNzcCxcbiAgICAgICAgYXV0b0luc2VydFNwYWNlSW5CdXR0b246IGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKGdldFBvcHVwQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbmZpZy5nZXRQb3B1cENvbnRhaW5lciA9IGdldFBvcHVwQ29udGFpbmVyO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVuZGVyRW1wdHkpIHtcbiAgICAgICAgY29uZmlnLnJlbmRlckVtcHR5ID0gcmVuZGVyRW1wdHk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbmZpZ0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IGNvbmZpZ1xuICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29uZmlnUHJvdmlkZXIsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJQcm92aWRlcik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbmZpZ1Byb3ZpZGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5mdW5jdGlvbiB3aXRoQ29uZmlnQ29uc3VtZXIoY29uZmlnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgLy8gV3JhcCB3aXRoIENvbmZpZ0NvbnN1bWVyLiBTaW5jZSB3ZSBuZWVkIGNvbXBhdGlibGUgd2l0aCByZWFjdCAxNSwgYmUgY2FyZSB3aGVuIHVzaW5nIHJlZiBtZXRob2RzXG4gICAgdmFyIFNGQyA9IGZ1bmN0aW9uIFNGQyhwcm9wcykge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb25maWdQcm9wcykge1xuICAgICAgICB2YXIgYmFzaWNQcmVmaXhDbHMgPSBjb25maWcucHJlZml4Q2xzO1xuICAgICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gY29uZmlnUHJvcHMuZ2V0UHJlZml4Q2xzO1xuICAgICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKGJhc2ljUHJlZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBjb25maWdQcm9wcywgcHJvcHMsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENsc1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIGNvbnMgPSBDb21wb25lbnQuY29uc3RydWN0b3I7XG4gICAgdmFyIG5hbWUgPSBjb25zICYmIGNvbnMuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gICAgU0ZDLmRpc3BsYXlOYW1lID0gXCJ3aXRoQ29uZmlnQ29uc3VtZXIoXCIuY29uY2F0KG5hbWUsIFwiKVwiKTtcbiAgICByZXR1cm4gU0ZDO1xuICB9O1xufVxuXG52YXIgX2RlZmF1bHQgPSBDb25maWdQcm92aWRlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7Il0sIm5hbWVzIjpbImdsb2JhbCIsIl9yZWFjdCIsIl9wcm9wVHlwZXMiLCJfZ3VkIiwiX3dhcm5pbmciLCJfaW1wbGVtZW50YXRpb24iLCJyZXF1aXJlJCQwIiwicmVxdWlyZSQkMSIsInJlcXVpcmUk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LE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUU7O0FBRTNkLFNBQVMsUUFBUSxHQUFHLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRTs7QUFFN1QsU0FBUyxlQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxN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QUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRTs7QUFFM2QsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRSxFQUFFLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLEdBQUcsS0FBSyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O0FBRS9WLFNBQVMsUUFBUSxHQUFHLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRTs7QUFFN1QsU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsRUFBRSxFQUFFOztBQUV6SixTQUFTLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0s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
