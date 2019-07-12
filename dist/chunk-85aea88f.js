import 'react';
import { c as createCommonjsModule, u as unwrapExports } from './chunk-5732a1e2.js';
import { a as require$$0, b as require$$2, _ as _configProvider } from './chunk-94c4abeb.js';
import { b as require$$3, r as require$$4 } from './chunk-40ab7835.js';
import { a as require$$1 } from './chunk-f27d627d.js';
import { _ as _reactLifecyclesCompat } from './chunk-a567c850.js';

var layout = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LayoutContext = void 0;

var React = _interopRequireWildcard(require$$1);

var _classnames = _interopRequireDefault(require$$2);

var _createReactContext = _interopRequireDefault(require$$0);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var LayoutContext = (0, _createReactContext["default"])({
  siderHook: {
    addSider: function addSider() {
      return null;
    },
    removeSider: function removeSider() {
      return null;
    }
  }
});
exports.LayoutContext = LayoutContext;

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName;
  return function (BasicComponent) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        _inherits(Adapter, _React$Component);

        function Adapter() {
          var _this;

          _classCallCheck(this, Adapter);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Adapter).apply(this, arguments));

          _this.renderComponent = function (_ref2) {
            var getPrefixCls = _ref2.getPrefixCls;
            var customizePrefixCls = _this.props.prefixCls;
            var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
            return React.createElement(BasicComponent, _extends({
              prefixCls: prefixCls,
              tagName: tagName
            }, _this.props));
          };

          return _this;
        }

        _createClass(Adapter, [{
          key: "render",
          value: function render() {
            return React.createElement(_configProvider.ConfigConsumer, null, this.renderComponent);
          }
        }]);

        return Adapter;
      }(React.Component)
    );
  };
}

var Basic =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Basic, _React$Component2);

  function Basic() {
    _classCallCheck(this, Basic);

    return _possibleConstructorReturn(this, _getPrototypeOf(Basic).apply(this, arguments));
  }

  _createClass(Basic, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          children = _a.children,
          tagName = _a.tagName,
          others = __rest(_a, ["prefixCls", "className", "children", "tagName"]);

      var classString = (0, _classnames["default"])(className, prefixCls);
      return React.createElement(tagName, _extends({
        className: classString
      }, others), children);
    }
  }]);

  return Basic;
}(React.Component);

var BasicLayout =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(BasicLayout, _React$Component3);

  function BasicLayout() {
    var _this2;

    _classCallCheck(this, BasicLayout);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(BasicLayout).apply(this, arguments));
    _this2.state = {
      siders: []
    };
    return _this2;
  }

  _createClass(BasicLayout, [{
    key: "getSiderHook",
    value: function getSiderHook() {
      var _this3 = this;

      return {
        addSider: function addSider(id) {
          _this3.setState(function (state) {
            return {
              siders: [].concat(_toConsumableArray(state.siders), [id])
            };
          });
        },
        removeSider: function removeSider(id) {
          _this3.setState(function (state) {
            return {
              siders: state.siders.filter(function (currentId) {
                return currentId !== id;
              })
            };
          });
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          children = _a.children,
          hasSider = _a.hasSider,
          Tag = _a.tagName,
          others = __rest(_a, ["prefixCls", "className", "children", "hasSider", "tagName"]);

      var classString = (0, _classnames["default"])(className, prefixCls, _defineProperty({}, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : this.state.siders.length > 0));
      return React.createElement(LayoutContext.Provider, {
        value: {
          siderHook: this.getSiderHook()
        }
      }, React.createElement(Tag, _extends({
        className: classString
      }, others), children));
    }
  }]);

  return BasicLayout;
}(React.Component);

var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer'
})(Basic);
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main'
})(Basic);
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
var _default = Layout;
exports["default"] = _default;
});

unwrapExports(layout);
var layout_1 = layout.LayoutContext;

var isNumeric_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

var _default = isNumeric;
exports["default"] = _default;
});

unwrapExports(isNumeric_1);

var Sider_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SiderContext = void 0;

var _createReactContext = _interopRequireDefault(require$$0);





var React = _interopRequireWildcard(require$$1);



var _classnames = _interopRequireDefault(require$$2);

var _omit = _interopRequireDefault(require$$3);

var _icon = _interopRequireDefault(require$$4);

var _isNumeric = _interopRequireDefault(isNumeric_1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };

  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

var dimensionMap = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px'
};
var SiderContext = (0, _createReactContext["default"])({});
exports.SiderContext = SiderContext;

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

var InternalSider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InternalSider, _React$Component);

  function InternalSider(props) {
    var _this;

    _classCallCheck(this, InternalSider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InternalSider).call(this, props));

    _this.responsiveHandler = function (mql) {
      _this.setState({
        below: mql.matches
      });

      var onBreakpoint = _this.props.onBreakpoint;

      if (onBreakpoint) {
        onBreakpoint(mql.matches);
      }

      if (_this.state.collapsed !== mql.matches) {
        _this.setCollapsed(mql.matches, 'responsive');
      }
    };

    _this.setCollapsed = function (collapsed, type) {
      if (!('collapsed' in _this.props)) {
        _this.setState({
          collapsed: collapsed
        });
      }

      var onCollapse = _this.props.onCollapse;

      if (onCollapse) {
        onCollapse(collapsed, type);
      }
    };

    _this.toggle = function () {
      var collapsed = !_this.state.collapsed;

      _this.setCollapsed(collapsed, 'clickTrigger');
    };

    _this.belowShowChange = function () {
      _this.setState({
        belowShow: !_this.state.belowShow
      });
    };

    _this.renderSider = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          theme = _a.theme,
          collapsible = _a.collapsible,
          reverseArrow = _a.reverseArrow,
          trigger = _a.trigger,
          style = _a.style,
          width = _a.width,
          collapsedWidth = _a.collapsedWidth,
          others = __rest(_a, ["prefixCls", "className", "theme", "collapsible", "reverseArrow", "trigger", "style", "width", "collapsedWidth"]);

      var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
      var divProps = (0, _omit["default"])(others, ['collapsed', 'defaultCollapsed', 'onCollapse', 'breakpoint', 'onBreakpoint', 'siderHook']);
      var rawWidth = _this.state.collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

      var siderWidth = (0, _isNumeric["default"])(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth); // special trigger when collapsedWidth == 0

      var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? React.createElement("span", {
        onClick: _this.toggle,
        className: "".concat(prefixCls, "-zero-width-trigger ").concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')
      }, React.createElement(_icon["default"], {
        type: "bars"
      })) : null;
      var iconObj = {
        expanded: reverseArrow ? React.createElement(_icon["default"], {
          type: "right"
        }) : React.createElement(_icon["default"], {
          type: "left"
        }),
        collapsed: reverseArrow ? React.createElement(_icon["default"], {
          type: "left"
        }) : React.createElement(_icon["default"], {
          type: "right"
        })
      };
      var status = _this.state.collapsed ? 'collapsed' : 'expanded';
      var defaultTrigger = iconObj[status];
      var triggerDom = trigger !== null ? zeroWidthTrigger || React.createElement("div", {
        className: "".concat(prefixCls, "-trigger"),
        onClick: _this.toggle,
        style: {
          width: siderWidth
        }
      }, trigger || defaultTrigger) : null;

      var divStyle = _extends({}, style, {
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        minWidth: siderWidth,
        width: siderWidth
      });

      var siderCls = (0, _classnames["default"])(className, prefixCls, "".concat(prefixCls, "-").concat(theme), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-collapsed"), !!_this.state.collapsed), _defineProperty(_classNames, "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), _defineProperty(_classNames, "".concat(prefixCls, "-below"), !!_this.state.below), _defineProperty(_classNames, "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), _classNames));
      return React.createElement("aside", _extends({
        className: siderCls
      }, divProps, {
        style: divStyle
      }), React.createElement("div", {
        className: "".concat(prefixCls, "-children")
      }, _this.props.children), collapsible || _this.state.below && zeroWidthTrigger ? triggerDom : null);
    };

    _this.uniqueId = generateId('ant-sider-');
    var matchMedia;

    if (typeof window !== 'undefined') {
      matchMedia = window.matchMedia;
    }

    if (matchMedia && props.breakpoint && props.breakpoint in dimensionMap) {
      _this.mql = matchMedia("(max-width: ".concat(dimensionMap[props.breakpoint], ")"));
    }

    var collapsed;

    if ('collapsed' in props) {
      collapsed = props.collapsed;
    } else {
      collapsed = props.defaultCollapsed;
    }

    _this.state = {
      collapsed: collapsed,
      below: false
    };
    return _this;
  }

  _createClass(InternalSider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.mql) {
        this.mql.addListener(this.responsiveHandler);
        this.responsiveHandler(this.mql);
      }

      if (this.props.siderHook) {
        this.props.siderHook.addSider(this.uniqueId);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.mql) {
        this.mql.removeListener(this.responsiveHandler);
      }

      if (this.props.siderHook) {
        this.props.siderHook.removeSider(this.uniqueId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var collapsedWidth = this.props.collapsedWidth;
      return React.createElement(SiderContext.Provider, {
        value: {
          siderCollapsed: collapsed,
          collapsedWidth: collapsedWidth
        }
      }, React.createElement(_configProvider.ConfigConsumer, null, this.renderSider));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('collapsed' in nextProps) {
        return {
          collapsed: nextProps.collapsed
        };
      }

      return null;
    }
  }]);

  return InternalSider;
}(React.Component);

InternalSider.defaultProps = {
  collapsible: false,
  defaultCollapsed: false,
  reverseArrow: false,
  width: 200,
  collapsedWidth: 80,
  style: {},
  theme: 'dark'
};
(0, _reactLifecyclesCompat.polyfill)(InternalSider);

var Sider =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Sider, _React$Component2);

  function Sider() {
    _classCallCheck(this, Sider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sider).apply(this, arguments));
  }

  _createClass(Sider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(layout.LayoutContext.Consumer, null, function (context) {
        return React.createElement(InternalSider, _extends({}, context, _this2.props));
      });
    }
  }]);

  return Sider;
}(React.Component);

exports["default"] = Sider;
});

unwrapExports(Sider_1);
var Sider_2 = Sider_1.SiderContext;

var layout$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _layout = _interopRequireDefault(layout);

var _Sider = _interopRequireDefault(Sider_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_layout["default"].Sider = _Sider["default"];
var _default = _layout["default"];
exports["default"] = _default;
});

var _Layout = unwrapExports(layout$1);

export { _Layout as _ };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmstODVhZWE4OGYuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sYXlvdXQvbGF5b3V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL2lzTnVtZXJpYy5qcyIsIi4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sYXlvdXQvU2lkZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGF5b3V0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLkxheW91dENvbnRleHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NyZWF0ZVJlYWN0Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2NyZWF0ZS1yZWFjdC1jb250ZXh0XCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIExheW91dENvbnRleHQgPSAoMCwgX2NyZWF0ZVJlYWN0Q29udGV4dFtcImRlZmF1bHRcIl0pKHtcbiAgc2lkZXJIb29rOiB7XG4gICAgYWRkU2lkZXI6IGZ1bmN0aW9uIGFkZFNpZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICByZW1vdmVTaWRlcjogZnVuY3Rpb24gcmVtb3ZlU2lkZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn0pO1xuZXhwb3J0cy5MYXlvdXRDb250ZXh0ID0gTGF5b3V0Q29udGV4dDtcblxuZnVuY3Rpb24gZ2VuZXJhdG9yKF9yZWYpIHtcbiAgdmFyIHN1ZmZpeENscyA9IF9yZWYuc3VmZml4Q2xzLFxuICAgICAgdGFnTmFtZSA9IF9yZWYudGFnTmFtZTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNpY0NvbXBvbmVudCkge1xuICAgIHJldHVybiAoXG4gICAgICAvKiNfX1BVUkVfXyovXG4gICAgICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgICBfaW5oZXJpdHMoQWRhcHRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gQWRhcHRlcigpIHtcbiAgICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWRhcHRlcik7XG5cbiAgICAgICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihBZGFwdGVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICAgIF90aGlzLnJlbmRlckNvbXBvbmVudCA9IGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYyLmdldFByZWZpeENscztcbiAgICAgICAgICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBfdGhpcy5wcm9wcy5wcmVmaXhDbHM7XG4gICAgICAgICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKHN1ZmZpeENscywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEJhc2ljQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgICAgICB0YWdOYW1lOiB0YWdOYW1lXG4gICAgICAgICAgICB9LCBfdGhpcy5wcm9wcykpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoQWRhcHRlciwgW3tcbiAgICAgICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJDb21wb25lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBBZGFwdGVyO1xuICAgICAgfShSZWFjdC5Db21wb25lbnQpXG4gICAgKTtcbiAgfTtcbn1cblxudmFyIEJhc2ljID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoQmFzaWMsIF9SZWFjdCRDb21wb25lbnQyKTtcblxuICBmdW5jdGlvbiBCYXNpYygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFzaWMpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihCYXNpYykuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQmFzaWMsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgICAgICB0YWdOYW1lID0gX2EudGFnTmFtZSxcbiAgICAgICAgICBvdGhlcnMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwidGFnTmFtZVwiXSk7XG5cbiAgICAgIHZhciBjbGFzc1N0cmluZyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgcHJlZml4Q2xzKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIF9leHRlbmRzKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZ1xuICAgICAgfSwgb3RoZXJzKSwgY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCYXNpYztcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIEJhc2ljTGF5b3V0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50Mykge1xuICBfaW5oZXJpdHMoQmFzaWNMYXlvdXQsIF9SZWFjdCRDb21wb25lbnQzKTtcblxuICBmdW5jdGlvbiBCYXNpY0xheW91dCgpIHtcbiAgICB2YXIgX3RoaXMyO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJhc2ljTGF5b3V0KTtcblxuICAgIF90aGlzMiA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihCYXNpY0xheW91dCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgX3RoaXMyLnN0YXRlID0ge1xuICAgICAgc2lkZXJzOiBbXVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCYXNpY0xheW91dCwgW3tcbiAgICBrZXk6IFwiZ2V0U2lkZXJIb29rXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNpZGVySG9vaygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBhZGRTaWRlcjogZnVuY3Rpb24gYWRkU2lkZXIoaWQpIHtcbiAgICAgICAgICBfdGhpczMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBzaWRlcnM6IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc3RhdGUuc2lkZXJzKSwgW2lkXSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZVNpZGVyOiBmdW5jdGlvbiByZW1vdmVTaWRlcihpZCkge1xuICAgICAgICAgIF90aGlzMy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHNpZGVyczogc3RhdGUuc2lkZXJzLmZpbHRlcihmdW5jdGlvbiAoY3VycmVudElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRJZCAhPT0gaWQ7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICAgICAgaGFzU2lkZXIgPSBfYS5oYXNTaWRlcixcbiAgICAgICAgICBUYWcgPSBfYS50YWdOYW1lLFxuICAgICAgICAgIG90aGVycyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJoYXNTaWRlclwiLCBcInRhZ05hbWVcIl0pO1xuXG4gICAgICB2YXIgY2xhc3NTdHJpbmcgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShjbGFzc05hbWUsIHByZWZpeENscywgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhhcy1zaWRlclwiKSwgdHlwZW9mIGhhc1NpZGVyID09PSAnYm9vbGVhbicgPyBoYXNTaWRlciA6IHRoaXMuc3RhdGUuc2lkZXJzLmxlbmd0aCA+IDApKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExheW91dENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBzaWRlckhvb2s6IHRoaXMuZ2V0U2lkZXJIb29rKClcbiAgICAgICAgfVxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChUYWcsIF9leHRlbmRzKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZ1xuICAgICAgfSwgb3RoZXJzKSwgY2hpbGRyZW4pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQmFzaWNMYXlvdXQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBMYXlvdXQgPSBnZW5lcmF0b3Ioe1xuICBzdWZmaXhDbHM6ICdsYXlvdXQnLFxuICB0YWdOYW1lOiAnc2VjdGlvbidcbn0pKEJhc2ljTGF5b3V0KTtcbnZhciBIZWFkZXIgPSBnZW5lcmF0b3Ioe1xuICBzdWZmaXhDbHM6ICdsYXlvdXQtaGVhZGVyJyxcbiAgdGFnTmFtZTogJ2hlYWRlcidcbn0pKEJhc2ljKTtcbnZhciBGb290ZXIgPSBnZW5lcmF0b3Ioe1xuICBzdWZmaXhDbHM6ICdsYXlvdXQtZm9vdGVyJyxcbiAgdGFnTmFtZTogJ2Zvb3Rlcidcbn0pKEJhc2ljKTtcbnZhciBDb250ZW50ID0gZ2VuZXJhdG9yKHtcbiAgc3VmZml4Q2xzOiAnbGF5b3V0LWNvbnRlbnQnLFxuICB0YWdOYW1lOiAnbWFpbidcbn0pKEJhc2ljKTtcbkxheW91dC5IZWFkZXIgPSBIZWFkZXI7XG5MYXlvdXQuRm9vdGVyID0gRm9vdGVyO1xuTGF5b3V0LkNvbnRlbnQgPSBDb250ZW50O1xudmFyIF9kZWZhdWx0ID0gTGF5b3V0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgaXNOdW1lcmljID0gZnVuY3Rpb24gaXNOdW1lcmljKHZhbHVlKSB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IGlzTnVtZXJpYztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuU2lkZXJDb250ZXh0ID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZVJlYWN0Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2NyZWF0ZS1yZWFjdC1jb250ZXh0XCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfbGF5b3V0ID0gcmVxdWlyZShcIi4vbGF5b3V0XCIpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdCA9IHJlcXVpcmUoXCJyZWFjdC1saWZlY3ljbGVzLWNvbXBhdFwiKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxudmFyIF9pc051bWVyaWMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9pc051bWVyaWNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuLy8gbWF0Y2hNZWRpYSBwb2x5ZmlsbCBmb3Jcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9XaWNreU5pbGxpYW1zL2VucXVpcmUuanMvaXNzdWVzLzgyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIG1hdGNoTWVkaWFQb2x5ZmlsbCA9IGZ1bmN0aW9uIG1hdGNoTWVkaWFQb2x5ZmlsbChtZWRpYVF1ZXJ5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lZGlhOiBtZWRpYVF1ZXJ5LFxuICAgICAgbWF0Y2hlczogZmFsc2UsXG4gICAgICBhZGRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkTGlzdGVuZXIoKSB7fSxcbiAgICAgIHJlbW92ZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcigpIHt9XG4gICAgfTtcbiAgfTtcblxuICB3aW5kb3cubWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhIHx8IG1hdGNoTWVkaWFQb2x5ZmlsbDtcbn1cblxudmFyIGRpbWVuc2lvbk1hcCA9IHtcbiAgeHM6ICc0ODBweCcsXG4gIHNtOiAnNTc2cHgnLFxuICBtZDogJzc2OHB4JyxcbiAgbGc6ICc5OTJweCcsXG4gIHhsOiAnMTIwMHB4JyxcbiAgeHhsOiAnMTYwMHB4J1xufTtcbnZhciBTaWRlckNvbnRleHQgPSAoMCwgX2NyZWF0ZVJlYWN0Q29udGV4dFtcImRlZmF1bHRcIl0pKHt9KTtcbmV4cG9ydHMuU2lkZXJDb250ZXh0ID0gU2lkZXJDb250ZXh0O1xuXG52YXIgZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGkgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmVmaXggPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgIGkgKz0gMTtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQocHJlZml4KS5jb25jYXQoaSk7XG4gIH07XG59KCk7XG5cbnZhciBJbnRlcm5hbFNpZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhJbnRlcm5hbFNpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbnRlcm5hbFNpZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEludGVybmFsU2lkZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoSW50ZXJuYWxTaWRlcikuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMucmVzcG9uc2l2ZUhhbmRsZXIgPSBmdW5jdGlvbiAobXFsKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGJlbG93OiBtcWwubWF0Y2hlc1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBvbkJyZWFrcG9pbnQgPSBfdGhpcy5wcm9wcy5vbkJyZWFrcG9pbnQ7XG5cbiAgICAgIGlmIChvbkJyZWFrcG9pbnQpIHtcbiAgICAgICAgb25CcmVha3BvaW50KG1xbC5tYXRjaGVzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnN0YXRlLmNvbGxhcHNlZCAhPT0gbXFsLm1hdGNoZXMpIHtcbiAgICAgICAgX3RoaXMuc2V0Q29sbGFwc2VkKG1xbC5tYXRjaGVzLCAncmVzcG9uc2l2ZScpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zZXRDb2xsYXBzZWQgPSBmdW5jdGlvbiAoY29sbGFwc2VkLCB0eXBlKSB7XG4gICAgICBpZiAoISgnY29sbGFwc2VkJyBpbiBfdGhpcy5wcm9wcykpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNvbGxhcHNlZDogY29sbGFwc2VkXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgb25Db2xsYXBzZSA9IF90aGlzLnByb3BzLm9uQ29sbGFwc2U7XG5cbiAgICAgIGlmIChvbkNvbGxhcHNlKSB7XG4gICAgICAgIG9uQ29sbGFwc2UoY29sbGFwc2VkLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbGxhcHNlZCA9ICFfdGhpcy5zdGF0ZS5jb2xsYXBzZWQ7XG5cbiAgICAgIF90aGlzLnNldENvbGxhcHNlZChjb2xsYXBzZWQsICdjbGlja1RyaWdnZXInKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYmVsb3dTaG93Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBiZWxvd1Nob3c6ICFfdGhpcy5zdGF0ZS5iZWxvd1Nob3dcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJTaWRlciA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcblxuICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICB0aGVtZSA9IF9hLnRoZW1lLFxuICAgICAgICAgIGNvbGxhcHNpYmxlID0gX2EuY29sbGFwc2libGUsXG4gICAgICAgICAgcmV2ZXJzZUFycm93ID0gX2EucmV2ZXJzZUFycm93LFxuICAgICAgICAgIHRyaWdnZXIgPSBfYS50cmlnZ2VyLFxuICAgICAgICAgIHN0eWxlID0gX2Euc3R5bGUsXG4gICAgICAgICAgd2lkdGggPSBfYS53aWR0aCxcbiAgICAgICAgICBjb2xsYXBzZWRXaWR0aCA9IF9hLmNvbGxhcHNlZFdpZHRoLFxuICAgICAgICAgIG90aGVycyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwidGhlbWVcIiwgXCJjb2xsYXBzaWJsZVwiLCBcInJldmVyc2VBcnJvd1wiLCBcInRyaWdnZXJcIiwgXCJzdHlsZVwiLCBcIndpZHRoXCIsIFwiY29sbGFwc2VkV2lkdGhcIl0pO1xuXG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdsYXlvdXQtc2lkZXInLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIGRpdlByb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkob3RoZXJzLCBbJ2NvbGxhcHNlZCcsICdkZWZhdWx0Q29sbGFwc2VkJywgJ29uQ29sbGFwc2UnLCAnYnJlYWtwb2ludCcsICdvbkJyZWFrcG9pbnQnLCAnc2lkZXJIb29rJ10pO1xuICAgICAgdmFyIHJhd1dpZHRoID0gX3RoaXMuc3RhdGUuY29sbGFwc2VkID8gY29sbGFwc2VkV2lkdGggOiB3aWR0aDsgLy8gdXNlIFwicHhcIiBhcyBmYWxsYmFjayB1bml0IGZvciB3aWR0aFxuXG4gICAgICB2YXIgc2lkZXJXaWR0aCA9ICgwLCBfaXNOdW1lcmljW1wiZGVmYXVsdFwiXSkocmF3V2lkdGgpID8gXCJcIi5jb25jYXQocmF3V2lkdGgsIFwicHhcIikgOiBTdHJpbmcocmF3V2lkdGgpOyAvLyBzcGVjaWFsIHRyaWdnZXIgd2hlbiBjb2xsYXBzZWRXaWR0aCA9PSAwXG5cbiAgICAgIHZhciB6ZXJvV2lkdGhUcmlnZ2VyID0gcGFyc2VGbG9hdChTdHJpbmcoY29sbGFwc2VkV2lkdGggfHwgMCkpID09PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBvbkNsaWNrOiBfdGhpcy50b2dnbGUsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi16ZXJvLXdpZHRoLXRyaWdnZXIgXCIpLmNvbmNhdChwcmVmaXhDbHMsIFwiLXplcm8td2lkdGgtdHJpZ2dlci1cIikuY29uY2F0KHJldmVyc2VBcnJvdyA/ICdyaWdodCcgOiAnbGVmdCcpXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICB0eXBlOiBcImJhcnNcIlxuICAgICAgfSkpIDogbnVsbDtcbiAgICAgIHZhciBpY29uT2JqID0ge1xuICAgICAgICBleHBhbmRlZDogcmV2ZXJzZUFycm93ID8gUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICB0eXBlOiBcInJpZ2h0XCJcbiAgICAgICAgfSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIHR5cGU6IFwibGVmdFwiXG4gICAgICAgIH0pLFxuICAgICAgICBjb2xsYXBzZWQ6IHJldmVyc2VBcnJvdyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgdHlwZTogXCJsZWZ0XCJcbiAgICAgICAgfSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIHR5cGU6IFwicmlnaHRcIlxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICAgIHZhciBzdGF0dXMgPSBfdGhpcy5zdGF0ZS5jb2xsYXBzZWQgPyAnY29sbGFwc2VkJyA6ICdleHBhbmRlZCc7XG4gICAgICB2YXIgZGVmYXVsdFRyaWdnZXIgPSBpY29uT2JqW3N0YXR1c107XG4gICAgICB2YXIgdHJpZ2dlckRvbSA9IHRyaWdnZXIgIT09IG51bGwgPyB6ZXJvV2lkdGhUcmlnZ2VyIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdHJpZ2dlclwiKSxcbiAgICAgICAgb25DbGljazogX3RoaXMudG9nZ2xlLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiBzaWRlcldpZHRoXG4gICAgICAgIH1cbiAgICAgIH0sIHRyaWdnZXIgfHwgZGVmYXVsdFRyaWdnZXIpIDogbnVsbDtcblxuICAgICAgdmFyIGRpdlN0eWxlID0gX2V4dGVuZHMoe30sIHN0eWxlLCB7XG4gICAgICAgIGZsZXg6IFwiMCAwIFwiLmNvbmNhdChzaWRlcldpZHRoKSxcbiAgICAgICAgbWF4V2lkdGg6IHNpZGVyV2lkdGgsXG4gICAgICAgIG1pbldpZHRoOiBzaWRlcldpZHRoLFxuICAgICAgICB3aWR0aDogc2lkZXJXaWR0aFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBzaWRlckNscyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgcHJlZml4Q2xzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQodGhlbWUpLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvbGxhcHNlZFwiKSwgISFfdGhpcy5zdGF0ZS5jb2xsYXBzZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGFzLXRyaWdnZXJcIiksIGNvbGxhcHNpYmxlICYmIHRyaWdnZXIgIT09IG51bGwgJiYgIXplcm9XaWR0aFRyaWdnZXIpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYmVsb3dcIiksICEhX3RoaXMuc3RhdGUuYmVsb3cpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItemVyby13aWR0aFwiKSwgcGFyc2VGbG9hdChzaWRlcldpZHRoKSA9PT0gMCksIF9jbGFzc05hbWVzKSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFzaWRlXCIsIF9leHRlbmRzKHtcbiAgICAgICAgY2xhc3NOYW1lOiBzaWRlckNsc1xuICAgICAgfSwgZGl2UHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IGRpdlN0eWxlXG4gICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jaGlsZHJlblwiKVxuICAgICAgfSwgX3RoaXMucHJvcHMuY2hpbGRyZW4pLCBjb2xsYXBzaWJsZSB8fCBfdGhpcy5zdGF0ZS5iZWxvdyAmJiB6ZXJvV2lkdGhUcmlnZ2VyID8gdHJpZ2dlckRvbSA6IG51bGwpO1xuICAgIH07XG5cbiAgICBfdGhpcy51bmlxdWVJZCA9IGdlbmVyYXRlSWQoJ2FudC1zaWRlci0nKTtcbiAgICB2YXIgbWF0Y2hNZWRpYTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhO1xuICAgIH1cblxuICAgIGlmIChtYXRjaE1lZGlhICYmIHByb3BzLmJyZWFrcG9pbnQgJiYgcHJvcHMuYnJlYWtwb2ludCBpbiBkaW1lbnNpb25NYXApIHtcbiAgICAgIF90aGlzLm1xbCA9IG1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiBcIi5jb25jYXQoZGltZW5zaW9uTWFwW3Byb3BzLmJyZWFrcG9pbnRdLCBcIilcIikpO1xuICAgIH1cblxuICAgIHZhciBjb2xsYXBzZWQ7XG5cbiAgICBpZiAoJ2NvbGxhcHNlZCcgaW4gcHJvcHMpIHtcbiAgICAgIGNvbGxhcHNlZCA9IHByb3BzLmNvbGxhcHNlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sbGFwc2VkID0gcHJvcHMuZGVmYXVsdENvbGxhcHNlZDtcbiAgICB9XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbGxhcHNlZDogY29sbGFwc2VkLFxuICAgICAgYmVsb3c6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSW50ZXJuYWxTaWRlciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5tcWwpIHtcbiAgICAgICAgdGhpcy5tcWwuYWRkTGlzdGVuZXIodGhpcy5yZXNwb25zaXZlSGFuZGxlcik7XG4gICAgICAgIHRoaXMucmVzcG9uc2l2ZUhhbmRsZXIodGhpcy5tcWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaWRlckhvb2spIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zaWRlckhvb2suYWRkU2lkZXIodGhpcy51bmlxdWVJZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMubXFsKSB7XG4gICAgICAgIHRoaXMubXFsLnJlbW92ZUxpc3RlbmVyKHRoaXMucmVzcG9uc2l2ZUhhbmRsZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaWRlckhvb2spIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zaWRlckhvb2sucmVtb3ZlU2lkZXIodGhpcy51bmlxdWVJZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY29sbGFwc2VkID0gdGhpcy5zdGF0ZS5jb2xsYXBzZWQ7XG4gICAgICB2YXIgY29sbGFwc2VkV2lkdGggPSB0aGlzLnByb3BzLmNvbGxhcHNlZFdpZHRoO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2lkZXJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgc2lkZXJDb2xsYXBzZWQ6IGNvbGxhcHNlZCxcbiAgICAgICAgICBjb2xsYXBzZWRXaWR0aDogY29sbGFwc2VkV2lkdGhcbiAgICAgICAgfVxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyU2lkZXIpKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKCdjb2xsYXBzZWQnIGluIG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbGxhcHNlZDogbmV4dFByb3BzLmNvbGxhcHNlZFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW50ZXJuYWxTaWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuSW50ZXJuYWxTaWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbGxhcHNpYmxlOiBmYWxzZSxcbiAgZGVmYXVsdENvbGxhcHNlZDogZmFsc2UsXG4gIHJldmVyc2VBcnJvdzogZmFsc2UsXG4gIHdpZHRoOiAyMDAsXG4gIGNvbGxhcHNlZFdpZHRoOiA4MCxcbiAgc3R5bGU6IHt9LFxuICB0aGVtZTogJ2RhcmsnXG59O1xuKDAsIF9yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwpKEludGVybmFsU2lkZXIpO1xuXG52YXIgU2lkZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhTaWRlciwgX1JlYWN0JENvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIFNpZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTaWRlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFNpZGVyKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTaWRlciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfbGF5b3V0LkxheW91dENvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEludGVybmFsU2lkZXIsIF9leHRlbmRzKHt9LCBjb250ZXh0LCBfdGhpczIucHJvcHMpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTaWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTaWRlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2xheW91dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGF5b3V0XCIpKTtcblxudmFyIF9TaWRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vU2lkZXJcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuX2xheW91dFtcImRlZmF1bHRcIl0uU2lkZXIgPSBfU2lkZXJbXCJkZWZhdWx0XCJdO1xudmFyIF9kZWZhdWx0ID0gX2xheW91dFtcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyJdLCJuYW1lcyI6WyJyZXF1aXJlJCQwIiwicmVxdWlyZSQkMSIsInJlcXVpcmUkJDIiLCJyZXF1aXJlJCQ1IiwiX2xheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtFQUMzQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsQ0FBQzs7QUFFcEQsSUFBSSxLQUFLLEdBQUcsdUJBQXVCLENBQUNBLFVBQWdCLENBQUMsQ0FBQzs7QUFFdEQsSUFBSSxXQUFXLEdBQUcsc0JBQXNCLENBQUNDLFVBQXFCLENBQUMsQ0FBQzs7QUFFaEUsSUFBSSxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQ0MsVUFBMkMsQ0FBQyxDQUFDOzs7O0FBSTlGLFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTs7QUFFakcsU0FBUyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxJQUFJLEdBQUcsSUFB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LEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUU7O0FBRTNkLFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTs7QUFFakcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRSxFQUFFLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLEdBQUcsS0FBSyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O0FBRS9WLFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTs7QUFFak4sU0FBUyxRQUFRLEdBQUcsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFOztBQUU3VCxTQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsWUFBWSxXQUFXLENBQUMsRUFBRSxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxFQUFFLEVBQUU7O0FBRXpKLFNBQVMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxD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
