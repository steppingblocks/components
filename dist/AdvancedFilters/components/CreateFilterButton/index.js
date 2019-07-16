import { _ as _slicedToArray, b as _objectSpread$1, a as _taggedTemplateLiteral } from '../../../chunk-89f1190a.js';
import React__default, { Component, cloneElement, createElement, Children, useState } from 'react';
import PropTypes__default, { oneOfType, string, number, bool, any, func, object, node, arrayOf, shape } from 'prop-types';
import { c as createCommonjsModule, u as unwrapExports } from '../../../chunk-5732a1e2.js';
import { w as withTheme } from '../../../withTheme/index-d1a984d4.js';
import styled from 'styled-components';
import { _ as _fp } from '../../../chunk-69193f69.js';
import { d as require$$2$1, w as warning, _ as _configProvider } from '../../../chunk-94c4abeb.js';
import { k as _inherits$5, j as _classCallCheck$5, l as _possibleConstructorReturn$5, g as _extends$3, m as _objectWithoutProperties } from '../../../chunk-27ab9880.js';
import ReactDOM__default, { findDOMNode, unmountComponentAtNode } from 'react-dom';
import { s as scrollIntoView } from '../../../chunk-d79569b3.js';
import '../../../chunk-dc6fce77.js';
import { b as get } from '../../../chunk-ebe821e3.js';
import { b as require$$3$1, a as require$$6, r as require$$4 } from '../../../chunk-40ab7835.js';
import { A as Animate, c as classes } from '../../../chunk-def42873.js';
import '../../../chunk-f27d627d.js';
import { _ as _type } from '../../../chunk-6a997ef0.js';
import { _ as _reactLifecyclesCompat, p as polyfill } from '../../../chunk-a567c850.js';
import { a as raf } from '../../../chunk-c35b7916.js';
import { r as require$$3 } from '../../../chunk-978db12d.js';
import { K as KeyCode } from '../../../chunk-c76ef287.js';
import { r as require$$1$1 } from '../../../chunk-c30b8a6e.js';
import '../../../chunk-ec4a5109.js';
import { T as Trigger } from '../../../chunk-da442227.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OptGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(OptGroup, _Component);

  function OptGroup() {
    _classCallCheck(this, OptGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(OptGroup).apply(this, arguments));
  }

  return OptGroup;
}(Component);
OptGroup.isSelectOptGroup = true;

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

var Option =
/*#__PURE__*/
function (_Component) {
  _inherits$1(Option, _Component);

  function Option() {
    _classCallCheck$1(this, Option);

    return _possibleConstructorReturn$1(this, _getPrototypeOf$1(Option).apply(this, arguments));
  }

  return Option;
}(Component);
Option.propTypes = {
  value: oneOfType([string, number])
};
Option.isSelectOption = true;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function propsValueType() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var props = args[0],
      propName = args[1],
      componentName = args[2],
      rest = args.slice(3);
  var basicType = oneOfType([string, number]);
  var labelInValueShape = shape({
    key: basicType.isRequired,
    label: node
  });

  if (props.labelInValue) {
    var validate = oneOfType([arrayOf(labelInValueShape), labelInValueShape]);
    var error = validate.apply(void 0, [props, propName, componentName].concat(_toConsumableArray(rest)));

    if (error) {
      return new Error("Invalid prop `".concat(propName, "` supplied to `").concat(componentName, "`, ") + "when you set `labelInValue` to `true`, `".concat(propName, "` should in ") + "shape of `{ key: string | number, label?: ReactNode }`.");
    }
  } else if ((props.mode === 'multiple' || props.mode === 'tags' || props.multiple || props.tags) && props[propName] === '') {
    return new Error("Invalid prop `".concat(propName, "` of type `string` supplied to `").concat(componentName, "`, ") + "expected `array` when `multiple` or `tags` is `true`.");
  } else {
    var _validate = oneOfType([arrayOf(basicType), basicType]);

    return _validate.apply(void 0, [props, propName, componentName].concat(_toConsumableArray(rest)));
  }

  return null;
}

var SelectPropTypes = {
  id: string,
  defaultActiveFirstOption: bool,
  multiple: bool,
  filterOption: any,
  children: any,
  showSearch: bool,
  disabled: bool,
  allowClear: bool,
  showArrow: bool,
  tags: bool,
  prefixCls: string,
  className: string,
  transitionName: string,
  optionLabelProp: string,
  optionFilterProp: string,
  animation: string,
  choiceTransitionName: string,
  open: bool,
  defaultOpen: bool,
  onChange: func,
  onBlur: func,
  onFocus: func,
  onSelect: func,
  onSearch: func,
  onPopupScroll: func,
  onMouseEnter: func,
  onMouseLeave: func,
  onInputKeyDown: func,
  placeholder: any,
  onDeselect: func,
  labelInValue: bool,
  loading: bool,
  value: propsValueType,
  defaultValue: propsValueType,
  dropdownStyle: object,
  maxTagTextLength: number,
  maxTagCount: number,
  maxTagPlaceholder: oneOfType([node, func]),
  tokenSeparators: arrayOf(string),
  getInputElement: func,
  showAction: arrayOf(string),
  clearIcon: node,
  inputIcon: node,
  removeIcon: node,
  menuItemSelectedIcon: oneOfType([func, node]),
  dropdownRender: func
};

var PropTypes = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeShape = undefined;



var _propTypes2 = _interopRequireDefault(PropTypes__default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeShape = exports.storeShape = _propTypes2.default.shape({
  subscribe: _propTypes2.default.func.isRequired,
  setState: _propTypes2.default.func.isRequired,
  getState: _propTypes2.default.func.isRequired
});
});

unwrapExports(PropTypes);
var PropTypes_1 = PropTypes.storeShape;

var Provider_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        miniStore: this.props.store
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.Children.only(this.props.children);
    }
  }]);

  return Provider;
}(React__default.Component);

Provider.propTypes = {
  store: PropTypes.storeShape.isRequired
};
Provider.childContextTypes = {
  miniStore: PropTypes.storeShape.isRequired
};
exports.default = Provider;
});

unwrapExports(Provider_1);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

var connect_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = connect;



var _react2 = _interopRequireDefault(React__default);



var _shallowequal2 = _interopRequireDefault(require$$3);



var _hoistNonReactStatics2 = _interopRequireDefault(hoistNonReactStatics_cjs);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function isStateless(Component) {
  return !Component.prototype.render;
}

var defaultMapStateToProps = function defaultMapStateToProps() {
  return {};
};

function connect(mapStateToProps) {
  var shouldSubscribe = !!mapStateToProps;
  var finnalMapStateToProps = mapStateToProps || defaultMapStateToProps;

  return function wrapWithConnect(WrappedComponent) {
    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      _createClass(Connect, null, [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props, prevState) {
          // using ownProps
          if (mapStateToProps && mapStateToProps.length === 2 && props !== prevState.props) {
            return {
              subscribed: finnalMapStateToProps(prevState.store.getState(), props),
              props: props
            };
          }
          return { props: props };
        }
      }]);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, (Connect.__proto__ || Object.getPrototypeOf(Connect)).call(this, props, context));

        _this.handleChange = function () {
          if (!_this.unsubscribe) {
            return;
          }
          var nextState = finnalMapStateToProps(_this.store.getState(), _this.props);
          _this.setState({ subscribed: nextState });
        };

        _this.store = context.miniStore;
        _this.state = {
          subscribed: finnalMapStateToProps(_this.store.getState(), props),
          store: _this.store,
          props: props
        };
        return _this;
      }

      _createClass(Connect, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.trySubscribe();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.tryUnsubscribe();
        }
      }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
          return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state.subscribed, nextState.subscribed);
        }
      }, {
        key: 'trySubscribe',
        value: function trySubscribe() {
          if (shouldSubscribe) {
            this.unsubscribe = this.store.subscribe(this.handleChange);
            this.handleChange();
          }
        }
      }, {
        key: 'tryUnsubscribe',
        value: function tryUnsubscribe() {
          if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
          }
        }
      }, {
        key: 'getWrappedInstance',
        value: function getWrappedInstance() {
          return this.wrappedInstance;
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var props = _extends({}, this.props, this.state.subscribed, {
            store: this.store
          });

          if (!isStateless(WrappedComponent)) {
            props = _extends({}, props, {
              ref: function ref(c) {
                return _this2.wrappedInstance = c;
              }
            });
          }

          return _react2.default.createElement(WrappedComponent, props);
        }
      }]);

      return Connect;
    }(React__default.Component);

    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
    Connect.contextTypes = {
      miniStore: PropTypes.storeShape.isRequired
    };


    (0, _reactLifecyclesCompat.polyfill)(Connect);

    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
  };
}
});

unwrapExports(connect_1);

var create_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = create;
function create(initialState) {
  var state = initialState;
  var listeners = [];

  function setState(partial) {
    state = _extends({}, state, partial);
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);

    return function unsubscribe() {
      var index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  return {
    setState: setState,
    getState: getState,
    subscribe: subscribe
  };
}
});

unwrapExports(create_1);

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.connect = exports.Provider = undefined;



var _Provider3 = _interopRequireDefault(Provider_1);



var _connect3 = _interopRequireDefault(connect_1);



var _create3 = _interopRequireDefault(create_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Provider = _Provider3.default;
exports.connect = _connect3.default;
exports.create = _create3.default;
});

unwrapExports(lib);
var lib_1 = lib.create;
var lib_2 = lib.connect;
var lib_3 = lib.Provider;

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @returns {function|null}
 */
function createChainedFunction() {
  var args = [].slice.call(arguments, 0);
  if (args.length === 1) {
    return args[0];
  }

  return function chainedFunction() {
    for (var i = 0; i < args.length; i++) {
      if (args[i] && args[i].apply) {
        args[i].apply(this, arguments);
      }
    }
  };
}

var isMobile = require('ismobilejs');

function noop() {}

function getKeyFromChildrenIndex(child, menuEventKey, index) {
  var prefix = menuEventKey || '';
  return child.key || prefix + 'item_' + index;
}

function getMenuIdFromSubMenuEventKey(eventKey) {
  return eventKey + '-menu-';
}

function loopMenuItem(children, cb) {
  var index = -1;
  React__default.Children.forEach(children, function (c) {
    index++;
    if (c && c.type && c.type.isMenuItemGroup) {
      React__default.Children.forEach(c.props.children, function (c2) {
        index++;
        cb(c2, index);
      });
    } else {
      cb(c, index);
    }
  });
}

function loopMenuItemRecursively(children, keys, ret) {
  /* istanbul ignore if */
  if (!children || ret.find) {
    return;
  }
  React__default.Children.forEach(children, function (c) {
    if (c) {
      var construct = c.type;
      if (!construct || !(construct.isSubMenu || construct.isMenuItem || construct.isMenuItemGroup)) {
        return;
      }
      if (keys.indexOf(c.key) !== -1) {
        ret.find = true;
      } else if (c.props.children) {
        loopMenuItemRecursively(c.props.children, keys, ret);
      }
    }
  });
}

var menuAllProps = ['defaultSelectedKeys', 'selectedKeys', 'defaultOpenKeys', 'openKeys', 'mode', 'getPopupContainer', 'onSelect', 'onDeselect', 'onDestroy', 'openTransitionName', 'openAnimation', 'subMenuOpenDelay', 'subMenuCloseDelay', 'forceSubMenuRender', 'triggerSubMenuAction', 'level', 'selectable', 'multiple', 'onOpenChange', 'visible', 'focusable', 'defaultActiveFirst', 'prefixCls', 'inlineIndent', 'parentMenu', 'title', 'rootPrefixCls', 'eventKey', 'active', 'onItemHover', 'onTitleMouseEnter', 'onTitleMouseLeave', 'onTitleClick', 'popupAlign', 'popupOffset', 'isOpen', 'renderMenuItem', 'manualRef', 'subMenuKey', 'disabled', 'index', 'isSelected', 'store', 'activeKey', 'builtinPlacements', 'overflowedIndicator',

// the following keys found need to be removed from test regression
'attribute', 'value', 'popupClassName', 'inlineCollapsed', 'menu', 'theme', 'itemIcon', 'expandIcon'];

// ref: https://github.com/ant-design/ant-design/issues/14007
// ref: https://bugs.chromium.org/p/chromium/issues/detail?id=360889
// getBoundingClientRect return the full precision value, which is
// not the same behavior as on chrome. Set the precision to 6 to
// unify their behavior
var getWidth = function getWidth(elem) {
  var width = elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width;
  if (width) {
    width = +width.toFixed(6);
  }
  return width || 0;
};

var setStyle = function setStyle(elem, styleProperty, value) {
  if (elem && typeof elem.style === 'object') {
    elem.style[styleProperty] = value;
  }
};

var isMobileDevice = function isMobileDevice() {
  return isMobile.any;
};

var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};

var guid = 0;

var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};

var updateDefaultActiveFirst = function updateDefaultActiveFirst(store, eventKey, defaultActiveFirst) {
  var _extends2;

  var menuId = getMenuIdFromSubMenuEventKey(eventKey);
  var state = store.getState();
  store.setState({
    defaultActiveFirst: _extends$3({}, state.defaultActiveFirst, (_extends2 = {}, _extends2[menuId] = defaultActiveFirst, _extends2))
  });
};

var SubMenu = function (_React$Component) {
  _inherits$5(SubMenu, _React$Component);

  function SubMenu(props) {
    _classCallCheck$5(this, SubMenu);

    var _this = _possibleConstructorReturn$5(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var store = props.store;
    var eventKey = props.eventKey;
    var defaultActiveFirst = store.getState().defaultActiveFirst;

    _this.isRootMenu = false;

    var value = false;

    if (defaultActiveFirst) {
      value = defaultActiveFirst[eventKey];
    }

    updateDefaultActiveFirst(store, eventKey, value);
    return _this;
  }

  SubMenu.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate();
  };

  SubMenu.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var _props = this.props,
        mode = _props.mode,
        parentMenu = _props.parentMenu,
        manualRef = _props.manualRef;

    // invoke customized ref to expose component to mixin

    if (manualRef) {
      manualRef(this);
    }

    if (mode !== 'horizontal' || !parentMenu.isRootMenu || !this.props.isOpen) {
      return;
    }

    this.minWidthTimeout = setTimeout(function () {
      return _this2.adjustWidth();
    }, 0);
  };

  SubMenu.prototype.componentWillUnmount = function componentWillUnmount() {
    var _props2 = this.props,
        onDestroy = _props2.onDestroy,
        eventKey = _props2.eventKey;

    if (onDestroy) {
      onDestroy(eventKey);
    }

    /* istanbul ignore if */
    if (this.minWidthTimeout) {
      clearTimeout(this.minWidthTimeout);
    }

    /* istanbul ignore if */
    if (this.mouseenterTimeout) {
      clearTimeout(this.mouseenterTimeout);
    }
  };

  SubMenu.prototype.renderChildren = function renderChildren(children) {
    var props = this.props;
    var baseProps = {
      mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
      visible: this.props.isOpen,
      level: props.level + 1,
      inlineIndent: props.inlineIndent,
      focusable: false,
      onClick: this.onSubMenuClick,
      onSelect: this.onSelect,
      onDeselect: this.onDeselect,
      onDestroy: this.onDestroy,
      selectedKeys: props.selectedKeys,
      eventKey: props.eventKey + '-menu-',
      openKeys: props.openKeys,
      openTransitionName: props.openTransitionName,
      openAnimation: props.openAnimation,
      onOpenChange: this.onOpenChange,
      subMenuOpenDelay: props.subMenuOpenDelay,
      parentMenu: this,
      subMenuCloseDelay: props.subMenuCloseDelay,
      forceSubMenuRender: props.forceSubMenuRender,
      triggerSubMenuAction: props.triggerSubMenuAction,
      builtinPlacements: props.builtinPlacements,
      defaultActiveFirst: props.store.getState().defaultActiveFirst[getMenuIdFromSubMenuEventKey(props.eventKey)],
      multiple: props.multiple,
      prefixCls: props.rootPrefixCls,
      id: this._menuId,
      manualRef: this.saveMenuInstance,
      itemIcon: props.itemIcon,
      expandIcon: props.expandIcon
    };

    var haveRendered = this.haveRendered;
    this.haveRendered = true;

    this.haveOpened = this.haveOpened || baseProps.visible || baseProps.forceSubMenuRender;
    // never rendered not planning to, don't render
    if (!this.haveOpened) {
      return React__default.createElement('div', null);
    }

    // don't show transition on first rendering (no animation for opened menu)
    // show appear transition if it's not visible (not sure why)
    // show appear transition if it's not inline mode
    var transitionAppear = haveRendered || !baseProps.visible || baseProps.mode !== 'inline';

    baseProps.className = ' ' + baseProps.prefixCls + '-sub';
    var animProps = {};

    if (baseProps.openTransitionName) {
      animProps.transitionName = baseProps.openTransitionName;
    } else if (typeof baseProps.openAnimation === 'object') {
      animProps.animation = _extends$3({}, baseProps.openAnimation);
      if (!transitionAppear) {
        delete animProps.animation.appear;
      }
    }

    return React__default.createElement(
      Animate,
      _extends$3({}, animProps, {
        showProp: 'visible',
        component: '',
        transitionAppear: transitionAppear
      }),
      React__default.createElement(
        connected$1,
        _extends$3({}, baseProps, { id: this._menuId }),
        children
      )
    );
  };

  SubMenu.prototype.render = function render() {
    var _classNames;

    var props = _extends$3({}, this.props);
    var isOpen = props.isOpen;
    var prefixCls = this.getPrefixCls();
    var isInlineMode = props.mode === 'inline';
    var className = require$$2$1(prefixCls, prefixCls + '-' + props.mode, (_classNames = {}, _classNames[props.className] = !!props.className, _classNames[this.getOpenClassName()] = isOpen, _classNames[this.getActiveClassName()] = props.active || isOpen && !isInlineMode, _classNames[this.getDisabledClassName()] = props.disabled, _classNames[this.getSelectedClassName()] = this.isChildrenSelected(), _classNames));

    if (!this._menuId) {
      if (props.eventKey) {
        this._menuId = props.eventKey + '$Menu';
      } else {
        this._menuId = '$__$' + ++guid + '$Menu';
      }
    }

    var mouseEvents = {};
    var titleClickEvents = {};
    var titleMouseEvents = {};
    if (!props.disabled) {
      mouseEvents = {
        onMouseLeave: this.onMouseLeave,
        onMouseEnter: this.onMouseEnter
      };

      // only works in title, not outer li
      titleClickEvents = {
        onClick: this.onTitleClick
      };
      titleMouseEvents = {
        onMouseEnter: this.onTitleMouseEnter,
        onMouseLeave: this.onTitleMouseLeave
      };
    }

    var style = {};
    if (isInlineMode) {
      style.paddingLeft = props.inlineIndent * props.level;
    }

    var ariaOwns = {};
    // only set aria-owns when menu is open
    // otherwise it would be an invalid aria-owns value
    // since corresponding node cannot be found
    if (this.props.isOpen) {
      ariaOwns = {
        'aria-owns': this._menuId
      };
    }

    // expand custom icon should NOT be displayed in menu with horizontal mode.
    var icon = null;
    if (props.mode !== 'horizontal') {
      icon = this.props.expandIcon; // ReactNode
      if (typeof this.props.expandIcon === 'function') {
        icon = React__default.createElement(this.props.expandIcon, _extends$3({}, this.props));
      }
    }

    var title = React__default.createElement(
      'div',
      _extends$3({
        ref: this.saveSubMenuTitle,
        style: style,
        className: prefixCls + '-title'
      }, titleMouseEvents, titleClickEvents, {
        'aria-expanded': isOpen
      }, ariaOwns, {
        'aria-haspopup': 'true',
        title: typeof props.title === 'string' ? props.title : undefined
      }),
      props.title,
      icon || React__default.createElement('i', { className: prefixCls + '-arrow' })
    );
    var children = this.renderChildren(props.children);

    var getPopupContainer = props.parentMenu.isRootMenu ? props.parentMenu.props.getPopupContainer : function (triggerNode) {
      return triggerNode.parentNode;
    };
    var popupPlacement = popupPlacementMap[props.mode];
    var popupAlign = props.popupOffset ? { offset: props.popupOffset } : {};
    var popupClassName = props.mode === 'inline' ? '' : props.popupClassName;
    var disabled = props.disabled,
        triggerSubMenuAction = props.triggerSubMenuAction,
        subMenuOpenDelay = props.subMenuOpenDelay,
        forceSubMenuRender = props.forceSubMenuRender,
        subMenuCloseDelay = props.subMenuCloseDelay,
        builtinPlacements = props.builtinPlacements;

    menuAllProps.forEach(function (key) {
      return delete props[key];
    });
    // Set onClick to null, to ignore propagated onClick event
    delete props.onClick;

    return React__default.createElement(
      'li',
      _extends$3({}, props, mouseEvents, {
        className: className,
        role: 'menuitem'
      }),
      isInlineMode && title,
      isInlineMode && children,
      !isInlineMode && React__default.createElement(
        Trigger,
        {
          prefixCls: prefixCls,
          popupClassName: prefixCls + '-popup ' + popupClassName,
          getPopupContainer: getPopupContainer,
          builtinPlacements: _extends$3({}, placements, builtinPlacements),
          popupPlacement: popupPlacement,
          popupVisible: isOpen,
          popupAlign: popupAlign,
          popup: children,
          action: disabled ? [] : [triggerSubMenuAction],
          mouseEnterDelay: subMenuOpenDelay,
          mouseLeaveDelay: subMenuCloseDelay,
          onPopupVisibleChange: this.onPopupVisibleChange,
          forceRender: forceSubMenuRender
        },
        title
      )
    );
  };

  return SubMenu;
}(React__default.Component);

SubMenu.propTypes = {
  parentMenu: PropTypes__default.object,
  title: PropTypes__default.node,
  children: PropTypes__default.any,
  selectedKeys: PropTypes__default.array,
  openKeys: PropTypes__default.array,
  onClick: PropTypes__default.func,
  onOpenChange: PropTypes__default.func,
  rootPrefixCls: PropTypes__default.string,
  eventKey: PropTypes__default.string,
  multiple: PropTypes__default.bool,
  active: PropTypes__default.bool, // TODO: remove
  onItemHover: PropTypes__default.func,
  onSelect: PropTypes__default.func,
  triggerSubMenuAction: PropTypes__default.string,
  onDeselect: PropTypes__default.func,
  onDestroy: PropTypes__default.func,
  onMouseEnter: PropTypes__default.func,
  onMouseLeave: PropTypes__default.func,
  onTitleMouseEnter: PropTypes__default.func,
  onTitleMouseLeave: PropTypes__default.func,
  onTitleClick: PropTypes__default.func,
  popupOffset: PropTypes__default.array,
  isOpen: PropTypes__default.bool,
  store: PropTypes__default.object,
  mode: PropTypes__default.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
  manualRef: PropTypes__default.func,
  itemIcon: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.node]),
  expandIcon: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.node])
};
SubMenu.defaultProps = {
  onMouseEnter: noop,
  onMouseLeave: noop,
  onTitleMouseEnter: noop,
  onTitleMouseLeave: noop,
  onTitleClick: noop,
  manualRef: noop,
  mode: 'vertical',
  title: ''
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onDestroy = function (key) {
    _this3.props.onDestroy(key);
  };

  this.onKeyDown = function (e) {
    var keyCode = e.keyCode;
    var menu = _this3.menuInstance;
    var _props3 = _this3.props,
        isOpen = _props3.isOpen,
        store = _props3.store;


    if (keyCode === KeyCode.ENTER) {
      _this3.onTitleClick(e);
      updateDefaultActiveFirst(store, _this3.props.eventKey, true);
      return true;
    }

    if (keyCode === KeyCode.RIGHT) {
      if (isOpen) {
        menu.onKeyDown(e);
      } else {
        _this3.triggerOpenChange(true);
        // need to update current menu's defaultActiveFirst value
        updateDefaultActiveFirst(store, _this3.props.eventKey, true);
      }
      return true;
    }
    if (keyCode === KeyCode.LEFT) {
      var handled = void 0;
      if (isOpen) {
        handled = menu.onKeyDown(e);
      } else {
        return undefined;
      }
      if (!handled) {
        _this3.triggerOpenChange(false);
        handled = true;
      }
      return handled;
    }

    if (isOpen && (keyCode === KeyCode.UP || keyCode === KeyCode.DOWN)) {
      return menu.onKeyDown(e);
    }
  };

  this.onOpenChange = function (e) {
    _this3.props.onOpenChange(e);
  };

  this.onPopupVisibleChange = function (visible) {
    _this3.triggerOpenChange(visible, visible ? 'mouseenter' : 'mouseleave');
  };

  this.onMouseEnter = function (e) {
    var _props4 = _this3.props,
        key = _props4.eventKey,
        onMouseEnter = _props4.onMouseEnter,
        store = _props4.store;

    updateDefaultActiveFirst(store, _this3.props.eventKey, false);
    onMouseEnter({
      key: key,
      domEvent: e
    });
  };

  this.onMouseLeave = function (e) {
    var _props5 = _this3.props,
        parentMenu = _props5.parentMenu,
        eventKey = _props5.eventKey,
        onMouseLeave = _props5.onMouseLeave;

    parentMenu.subMenuInstance = _this3;
    onMouseLeave({
      key: eventKey,
      domEvent: e
    });
  };

  this.onTitleMouseEnter = function (domEvent) {
    var _props6 = _this3.props,
        key = _props6.eventKey,
        onItemHover = _props6.onItemHover,
        onTitleMouseEnter = _props6.onTitleMouseEnter;

    onItemHover({
      key: key,
      hover: true
    });
    onTitleMouseEnter({
      key: key,
      domEvent: domEvent
    });
  };

  this.onTitleMouseLeave = function (e) {
    var _props7 = _this3.props,
        parentMenu = _props7.parentMenu,
        eventKey = _props7.eventKey,
        onItemHover = _props7.onItemHover,
        onTitleMouseLeave = _props7.onTitleMouseLeave;

    parentMenu.subMenuInstance = _this3;
    onItemHover({
      key: eventKey,
      hover: false
    });
    onTitleMouseLeave({
      key: eventKey,
      domEvent: e
    });
  };

  this.onTitleClick = function (e) {
    var props = _this3.props;

    props.onTitleClick({
      key: props.eventKey,
      domEvent: e
    });
    if (props.triggerSubMenuAction === 'hover') {
      return;
    }
    _this3.triggerOpenChange(!props.isOpen, 'click');
    updateDefaultActiveFirst(props.store, _this3.props.eventKey, false);
  };

  this.onSubMenuClick = function (info) {
    // in the case of overflowed submenu
    // onClick is not copied over
    if (typeof _this3.props.onClick === 'function') {
      _this3.props.onClick(_this3.addKeyPath(info));
    }
  };

  this.onSelect = function (info) {
    _this3.props.onSelect(info);
  };

  this.onDeselect = function (info) {
    _this3.props.onDeselect(info);
  };

  this.getPrefixCls = function () {
    return _this3.props.rootPrefixCls + '-submenu';
  };

  this.getActiveClassName = function () {
    return _this3.getPrefixCls() + '-active';
  };

  this.getDisabledClassName = function () {
    return _this3.getPrefixCls() + '-disabled';
  };

  this.getSelectedClassName = function () {
    return _this3.getPrefixCls() + '-selected';
  };

  this.getOpenClassName = function () {
    return _this3.props.rootPrefixCls + '-submenu-open';
  };

  this.saveMenuInstance = function (c) {
    // children menu instance
    _this3.menuInstance = c;
  };

  this.addKeyPath = function (info) {
    return _extends$3({}, info, {
      keyPath: (info.keyPath || []).concat(_this3.props.eventKey)
    });
  };

  this.triggerOpenChange = function (open, type) {
    var key = _this3.props.eventKey;
    var openChange = function openChange() {
      _this3.onOpenChange({
        key: key,
        item: _this3,
        trigger: type,
        open: open
      });
    };
    if (type === 'mouseenter') {
      // make sure mouseenter happen after other menu item's mouseleave
      _this3.mouseenterTimeout = setTimeout(function () {
        openChange();
      }, 0);
    } else {
      openChange();
    }
  };

  this.isChildrenSelected = function () {
    var ret = { find: false };
    loopMenuItemRecursively(_this3.props.children, _this3.props.selectedKeys, ret);
    return ret.find;
  };

  this.isOpen = function () {
    return _this3.props.openKeys.indexOf(_this3.props.eventKey) !== -1;
  };

  this.adjustWidth = function () {
    /* istanbul ignore if */
    if (!_this3.subMenuTitle || !_this3.menuInstance) {
      return;
    }
    var popupMenu = ReactDOM__default.findDOMNode(_this3.menuInstance);
    if (popupMenu.offsetWidth >= _this3.subMenuTitle.offsetWidth) {
      return;
    }

    /* istanbul ignore next */
    popupMenu.style.minWidth = _this3.subMenuTitle.offsetWidth + 'px';
  };

  this.saveSubMenuTitle = function (subMenuTitle) {
    _this3.subMenuTitle = subMenuTitle;
  };
};

var connected = lib_2(function (_ref, _ref2) {
  var openKeys = _ref.openKeys,
      activeKey = _ref.activeKey,
      selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    isOpen: openKeys.indexOf(eventKey) > -1,
    active: activeKey[subMenuKey] === eventKey,
    selectedKeys: selectedKeys
  };
})(SubMenu);

connected.isSubMenu = true;

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var MENUITEM_OVERFLOWED_CLASSNAME = 'menuitem-overflowed';
var FLOAT_PRECISION_ADJUST = 0.5;

// Fix ssr
if (canUseDOM) {
  require('mutationobserver-shim');
}

var DOMWrap = function (_React$Component) {
  _inherits$5(DOMWrap, _React$Component);

  function DOMWrap() {
    var _temp, _this, _ret;

    _classCallCheck$5(this, DOMWrap);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      lastVisibleIndex: undefined
    }, _this.getMenuItemNodes = function () {
      var prefixCls = _this.props.prefixCls;

      var ul = ReactDOM__default.findDOMNode(_this);
      if (!ul) {
        return [];
      }

      // filter out all overflowed indicator placeholder
      return [].slice.call(ul.children).filter(function (node) {
        return node.className.split(' ').indexOf(prefixCls + '-overflowed-submenu') < 0;
      });
    }, _this.getOverflowedSubMenuItem = function (keyPrefix, overflowedItems, renderPlaceholder) {
      var _this$props = _this.props,
          overflowedIndicator = _this$props.overflowedIndicator,
          level = _this$props.level,
          mode = _this$props.mode,
          prefixCls = _this$props.prefixCls,
          theme = _this$props.theme;

      if (level !== 1 || mode !== 'horizontal') {
        return null;
      }
      // put all the overflowed item inside a submenu
      // with a title of overflow indicator ('...')
      var copy = _this.props.children[0];

      var _copy$props = copy.props,
          throwAway = _copy$props.children,
          title = _copy$props.title,
          propStyle = _copy$props.style,
          rest = _objectWithoutProperties(_copy$props, ['children', 'title', 'style']);

      var style = _extends$3({}, propStyle);
      var key = keyPrefix + '-overflowed-indicator';
      var eventKey = keyPrefix + '-overflowed-indicator';

      if (overflowedItems.length === 0 && renderPlaceholder !== true) {
        style = _extends$3({}, style, {
          display: 'none'
        });
      } else if (renderPlaceholder) {
        style = _extends$3({}, style, {
          visibility: 'hidden',
          // prevent from taking normal dom space
          position: 'absolute'
        });
        key = key + '-placeholder';
        eventKey = eventKey + '-placeholder';
      }

      var popupClassName = theme ? prefixCls + '-' + theme : '';
      var props = {};
      menuAllProps.forEach(function (k) {
        if (rest[k] !== undefined) {
          props[k] = rest[k];
        }
      });

      return React__default.createElement(
        connected,
        _extends$3({
          title: overflowedIndicator,
          className: prefixCls + '-overflowed-submenu',
          popupClassName: popupClassName
        }, props, {
          key: key,
          eventKey: eventKey,
          disabled: false,
          style: style
        }),
        overflowedItems
      );
    }, _this.setChildrenWidthAndResize = function () {
      if (_this.props.mode !== 'horizontal') {
        return;
      }
      var ul = ReactDOM__default.findDOMNode(_this);

      if (!ul) {
        return;
      }

      var ulChildrenNodes = ul.children;

      if (!ulChildrenNodes || ulChildrenNodes.length === 0) {
        return;
      }

      var lastOverflowedIndicatorPlaceholder = ul.children[ulChildrenNodes.length - 1];

      // need last overflowed indicator for calculating length;
      setStyle(lastOverflowedIndicatorPlaceholder, 'display', 'inline-block');

      var menuItemNodes = _this.getMenuItemNodes();

      // reset display attribute for all hidden elements caused by overflow to calculate updated width
      // and then reset to original state after width calculation

      var overflowedItems = menuItemNodes.filter(function (c) {
        return c.className.split(' ').indexOf(MENUITEM_OVERFLOWED_CLASSNAME) >= 0;
      });

      overflowedItems.forEach(function (c) {
        setStyle(c, 'display', 'inline-block');
      });

      _this.menuItemSizes = menuItemNodes.map(function (c) {
        return getWidth(c);
      });

      overflowedItems.forEach(function (c) {
        setStyle(c, 'display', 'none');
      });
      _this.overflowedIndicatorWidth = getWidth(ul.children[ul.children.length - 1]);
      _this.originalTotalWidth = _this.menuItemSizes.reduce(function (acc, cur) {
        return acc + cur;
      }, 0);
      _this.handleResize();
      // prevent the overflowed indicator from taking space;
      setStyle(lastOverflowedIndicatorPlaceholder, 'display', 'none');
    }, _this.resizeObserver = null, _this.mutationObserver = null, _this.originalTotalWidth = 0, _this.overflowedItems = [], _this.menuItemSizes = [], _this.handleResize = function () {
      if (_this.props.mode !== 'horizontal') {
        return;
      }

      var ul = ReactDOM__default.findDOMNode(_this);
      if (!ul) {
        return;
      }
      var width = getWidth(ul);

      _this.overflowedItems = [];
      var currentSumWidth = 0;

      // index for last visible child in horizontal mode
      var lastVisibleIndex = undefined;

      // float number comparison could be problematic
      // e.g. 0.1 + 0.2 > 0.3 =====> true
      // thus using FLOAT_PRECISION_ADJUST as buffer to help the situation
      if (_this.originalTotalWidth > width + FLOAT_PRECISION_ADJUST) {
        lastVisibleIndex = -1;

        _this.menuItemSizes.forEach(function (liWidth) {
          currentSumWidth += liWidth;
          if (currentSumWidth + _this.overflowedIndicatorWidth <= width) {
            lastVisibleIndex++;
          }
        });
      }

      _this.setState({ lastVisibleIndex: lastVisibleIndex });
    }, _temp), _possibleConstructorReturn$5(_this, _ret);
  }

  DOMWrap.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.setChildrenWidthAndResize();
    if (this.props.level === 1 && this.props.mode === 'horizontal') {
      var menuUl = ReactDOM__default.findDOMNode(this);
      if (!menuUl) {
        return;
      }
      this.resizeObserver = new require$$1$1(function (entries) {
        entries.forEach(_this2.setChildrenWidthAndResize);
      });

      [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
        _this2.resizeObserver.observe(el);
      });

      if (typeof MutationObserver !== 'undefined') {
        this.mutationObserver = new MutationObserver(function () {
          _this2.resizeObserver.disconnect();
          [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
            _this2.resizeObserver.observe(el);
          });
          _this2.setChildrenWidthAndResize();
        });
        this.mutationObserver.observe(menuUl, { attributes: false, childList: true, subTree: false });
      }
    }
  };

  DOMWrap.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.mutationObserver) {
      this.resizeObserver.disconnect();
    }
  };

  // get all valid menuItem nodes


  // memorize rendered menuSize


  // original scroll size of the list


  // copy of overflowed items


  // cache item of the original items (so we can track the size and order)


  DOMWrap.prototype.renderChildren = function renderChildren(children) {
    var _this3 = this;

    // need to take care of overflowed items in horizontal mode
    var lastVisibleIndex = this.state.lastVisibleIndex;

    return (children || []).reduce(function (acc, childNode, index) {
      var item = childNode;
      if (_this3.props.mode === 'horizontal') {
        var overflowed = _this3.getOverflowedSubMenuItem(childNode.props.eventKey, []);
        if (lastVisibleIndex !== undefined && _this3.props.className.indexOf(_this3.props.prefixCls + '-root') !== -1) {
          if (index > lastVisibleIndex) {
            item = React__default.cloneElement(childNode,
            // 这里修改 eventKey 是为了防止隐藏状态下还会触发 openkeys 事件
            {
              style: { display: 'none' },
              eventKey: childNode.props.eventKey + '-hidden',
              className: childNode.className + ' ' + MENUITEM_OVERFLOWED_CLASSNAME
            });
          }
          if (index === lastVisibleIndex + 1) {
            _this3.overflowedItems = children.slice(lastVisibleIndex + 1).map(function (c) {
              return React__default.cloneElement(c,
              // children[index].key will become '.$key' in clone by default,
              // we have to overwrite with the correct key explicitly
              { key: c.props.eventKey, mode: 'vertical-left' });
            });

            overflowed = _this3.getOverflowedSubMenuItem(childNode.props.eventKey, _this3.overflowedItems);
          }
        }

        var ret = [].concat(acc, [overflowed, item]);

        if (index === children.length - 1) {
          // need a placeholder for calculating overflowed indicator width
          ret.push(_this3.getOverflowedSubMenuItem(childNode.props.eventKey, [], true));
        }
        return ret;
      }
      return [].concat(acc, [item]);
    }, []);
  };

  DOMWrap.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        prefixCls = _props.prefixCls,
        overflowedIndicator = _props.overflowedIndicator,
        mode = _props.mode,
        level = _props.level,
        Tag = _props.tag,
        children = _props.children,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['hiddenClassName', 'visible', 'prefixCls', 'overflowedIndicator', 'mode', 'level', 'tag', 'children', 'theme']);

    if (!visible) {
      rest.className += ' ' + hiddenClassName;
    }

    return React__default.createElement(
      Tag,
      rest,
      this.renderChildren(this.props.children)
    );
  };

  return DOMWrap;
}(React__default.Component);

DOMWrap.propTypes = {
  className: PropTypes__default.string,
  children: PropTypes__default.node,
  mode: PropTypes__default.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
  prefixCls: PropTypes__default.string,
  level: PropTypes__default.number,
  theme: PropTypes__default.string,
  overflowedIndicator: PropTypes__default.node,
  visible: PropTypes__default.bool,
  hiddenClassName: PropTypes__default.string,
  tag: PropTypes__default.string,
  style: PropTypes__default.object
};

DOMWrap.defaultProps = {
  tag: 'div',
  className: ''
};

function allDisabled(arr) {
  if (!arr.length) {
    return true;
  }
  return arr.every(function (c) {
    return !!c.props.disabled;
  });
}

function updateActiveKey(store, menuId, activeKey) {
  var _extends2;

  var state = store.getState();
  store.setState({
    activeKey: _extends$3({}, state.activeKey, (_extends2 = {}, _extends2[menuId] = activeKey, _extends2))
  });
}

function getEventKey(props) {
  // when eventKey not available ,it's menu and return menu id '0-menu-'
  return props.eventKey || '0-menu-';
}

function getActiveKey(props, originalActiveKey) {
  var activeKey = originalActiveKey;
  var children = props.children,
      eventKey = props.eventKey;

  if (activeKey) {
    var found = void 0;
    loopMenuItem(children, function (c, i) {
      if (c && c.props && !c.props.disabled && activeKey === getKeyFromChildrenIndex(c, eventKey, i)) {
        found = true;
      }
    });
    if (found) {
      return activeKey;
    }
  }
  activeKey = null;
  if (props.defaultActiveFirst) {
    loopMenuItem(children, function (c, i) {
      if (!activeKey && c && !c.props.disabled) {
        activeKey = getKeyFromChildrenIndex(c, eventKey, i);
      }
    });
    return activeKey;
  }
  return activeKey;
}

function saveRef(c) {
  if (c) {
    var index = this.instanceArray.indexOf(c);
    if (index !== -1) {
      // update component if it's already inside instanceArray
      this.instanceArray[index] = c;
    } else {
      // add component if it's not in instanceArray yet;
      this.instanceArray.push(c);
    }
  }
}

var SubPopupMenu = function (_React$Component) {
  _inherits$5(SubPopupMenu, _React$Component);

  function SubPopupMenu(props) {
    var _extends3;

    _classCallCheck$5(this, SubPopupMenu);

    var _this = _possibleConstructorReturn$5(this, _React$Component.call(this, props));

    _initialiseProps$1.call(_this);

    props.store.setState({
      activeKey: _extends$3({}, props.store.getState().activeKey, (_extends3 = {}, _extends3[props.eventKey] = getActiveKey(props, props.activeKey), _extends3))
    });

    _this.instanceArray = [];
    return _this;
  }

  SubPopupMenu.prototype.componentDidMount = function componentDidMount() {
    // invoke customized ref to expose component to mixin
    if (this.props.manualRef) {
      this.props.manualRef(this);
    }
  };

  SubPopupMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.visible || nextProps.visible;
  };

  SubPopupMenu.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var props = this.props;
    var originalActiveKey = 'activeKey' in props ? props.activeKey : props.store.getState().activeKey[getEventKey(props)];
    var activeKey = getActiveKey(props, originalActiveKey);
    if (activeKey !== originalActiveKey) {
      updateActiveKey(props.store, getEventKey(props), activeKey);
    } else if ('activeKey' in prevProps) {
      // If prev activeKey is not same as current activeKey,
      // we should set it.
      var prevActiveKey = getActiveKey(prevProps, prevProps.activeKey);
      if (activeKey !== prevActiveKey) {
        updateActiveKey(props.store, getEventKey(props), activeKey);
      }
    }
  };

  // all keyboard events callbacks run from here at first


  SubPopupMenu.prototype.render = function render() {
    var _this2 = this;

    var props = _objectWithoutProperties(this.props, []);

    this.instanceArray = [];
    var className = require$$2$1(props.prefixCls, props.className, props.prefixCls + '-' + props.mode);
    var domProps = {
      className: className,
      // role could be 'select' and by default set to menu
      role: props.role || 'menu'
    };
    if (props.id) {
      domProps.id = props.id;
    }
    if (props.focusable) {
      domProps.tabIndex = '0';
      domProps.onKeyDown = this.onKeyDown;
    }
    var prefixCls = props.prefixCls,
        eventKey = props.eventKey,
        visible = props.visible,
        level = props.level,
        mode = props.mode,
        overflowedIndicator = props.overflowedIndicator,
        theme = props.theme;

    menuAllProps.forEach(function (key) {
      return delete props[key];
    });

    // Otherwise, the propagated click event will trigger another onClick
    delete props.onClick;

    return React__default.createElement(
      DOMWrap,
      _extends$3({}, props, {
        prefixCls: prefixCls,
        mode: mode,
        tag: 'ul',
        level: level,
        theme: theme,
        hiddenClassName: prefixCls + '-hidden',
        visible: visible,
        overflowedIndicator: overflowedIndicator
      }, domProps),
      React__default.Children.map(props.children, function (c, i) {
        return _this2.renderMenuItem(c, i, eventKey || '0-menu-');
      })
    );
  };

  return SubPopupMenu;
}(React__default.Component);
SubPopupMenu.propTypes = {
  onSelect: PropTypes__default.func,
  onClick: PropTypes__default.func,
  onDeselect: PropTypes__default.func,
  onOpenChange: PropTypes__default.func,
  onDestroy: PropTypes__default.func,
  openTransitionName: PropTypes__default.string,
  openAnimation: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.object]),
  openKeys: PropTypes__default.arrayOf(PropTypes__default.string),
  visible: PropTypes__default.bool,
  children: PropTypes__default.any,
  parentMenu: PropTypes__default.object,
  eventKey: PropTypes__default.string,
  store: PropTypes__default.shape({
    getState: PropTypes__default.func,
    setState: PropTypes__default.func
  }),

  // adding in refactor
  focusable: PropTypes__default.bool,
  multiple: PropTypes__default.bool,
  style: PropTypes__default.object,
  defaultActiveFirst: PropTypes__default.bool,
  activeKey: PropTypes__default.string,
  selectedKeys: PropTypes__default.arrayOf(PropTypes__default.string),
  defaultSelectedKeys: PropTypes__default.arrayOf(PropTypes__default.string),
  defaultOpenKeys: PropTypes__default.arrayOf(PropTypes__default.string),
  level: PropTypes__default.number,
  mode: PropTypes__default.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
  triggerSubMenuAction: PropTypes__default.oneOf(['click', 'hover']),
  inlineIndent: PropTypes__default.oneOfType([PropTypes__default.number, PropTypes__default.string]),
  manualRef: PropTypes__default.func,
  itemIcon: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.node]),
  expandIcon: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.node])
};
SubPopupMenu.defaultProps = {
  prefixCls: 'rc-menu',
  className: '',
  mode: 'vertical',
  level: 1,
  inlineIndent: 24,
  visible: true,
  focusable: true,
  style: {},
  manualRef: noop
};

var _initialiseProps$1 = function _initialiseProps() {
  var _this3 = this;

  this.onKeyDown = function (e, callback) {
    var keyCode = e.keyCode;
    var handled = void 0;
    _this3.getFlatInstanceArray().forEach(function (obj) {
      if (obj && obj.props.active && obj.onKeyDown) {
        handled = obj.onKeyDown(e);
      }
    });
    if (handled) {
      return 1;
    }
    var activeItem = null;
    if (keyCode === KeyCode.UP || keyCode === KeyCode.DOWN) {
      activeItem = _this3.step(keyCode === KeyCode.UP ? -1 : 1);
    }
    if (activeItem) {
      e.preventDefault();
      updateActiveKey(_this3.props.store, getEventKey(_this3.props), activeItem.props.eventKey);

      if (typeof callback === 'function') {
        callback(activeItem);
      }

      return 1;
    }
  };

  this.onItemHover = function (e) {
    var key = e.key,
        hover = e.hover;

    updateActiveKey(_this3.props.store, getEventKey(_this3.props), hover ? key : null);
  };

  this.onDeselect = function (selectInfo) {
    _this3.props.onDeselect(selectInfo);
  };

  this.onSelect = function (selectInfo) {
    _this3.props.onSelect(selectInfo);
  };

  this.onClick = function (e) {
    _this3.props.onClick(e);
  };

  this.onOpenChange = function (e) {
    _this3.props.onOpenChange(e);
  };

  this.onDestroy = function (key) {
    /* istanbul ignore next */
    _this3.props.onDestroy(key);
  };

  this.getFlatInstanceArray = function () {
    return _this3.instanceArray;
  };

  this.getOpenTransitionName = function () {
    return _this3.props.openTransitionName;
  };

  this.step = function (direction) {
    var children = _this3.getFlatInstanceArray();
    var activeKey = _this3.props.store.getState().activeKey[getEventKey(_this3.props)];
    var len = children.length;
    if (!len) {
      return null;
    }
    if (direction < 0) {
      children = children.concat().reverse();
    }
    // find current activeIndex
    var activeIndex = -1;
    children.every(function (c, ci) {
      if (c && c.props.eventKey === activeKey) {
        activeIndex = ci;
        return false;
      }
      return true;
    });
    if (!_this3.props.defaultActiveFirst && activeIndex !== -1 && allDisabled(children.slice(activeIndex, len - 1))) {
      return undefined;
    }
    var start = (activeIndex + 1) % len;
    var i = start;

    do {
      var child = children[i];
      if (!child || child.props.disabled) {
        i = (i + 1) % len;
      } else {
        return child;
      }
    } while (i !== start);

    return null;
  };

  this.renderCommonMenuItem = function (child, i, extraProps) {
    var state = _this3.props.store.getState();
    var props = _this3.props;
    var key = getKeyFromChildrenIndex(child, props.eventKey, i);
    var childProps = child.props;
    // https://github.com/ant-design/ant-design/issues/11517#issuecomment-477403055
    if (!childProps || typeof child.type === 'string') {
      return child;
    }
    var isActive = key === state.activeKey;
    var newChildProps = _extends$3({
      mode: childProps.mode || props.mode,
      level: props.level,
      inlineIndent: props.inlineIndent,
      renderMenuItem: _this3.renderMenuItem,
      rootPrefixCls: props.prefixCls,
      index: i,
      parentMenu: props.parentMenu,
      // customized ref function, need to be invoked manually in child's componentDidMount
      manualRef: childProps.disabled ? undefined : createChainedFunction(child.ref, saveRef.bind(_this3)),
      eventKey: key,
      active: !childProps.disabled && isActive,
      multiple: props.multiple,
      onClick: function onClick(e) {
        (childProps.onClick || noop)(e);
        _this3.onClick(e);
      },
      onItemHover: _this3.onItemHover,
      openTransitionName: _this3.getOpenTransitionName(),
      openAnimation: props.openAnimation,
      subMenuOpenDelay: props.subMenuOpenDelay,
      subMenuCloseDelay: props.subMenuCloseDelay,
      forceSubMenuRender: props.forceSubMenuRender,
      onOpenChange: _this3.onOpenChange,
      onDeselect: _this3.onDeselect,
      onSelect: _this3.onSelect,
      builtinPlacements: props.builtinPlacements,
      itemIcon: childProps.itemIcon || _this3.props.itemIcon,
      expandIcon: childProps.expandIcon || _this3.props.expandIcon
    }, extraProps);
    // ref: https://github.com/ant-design/ant-design/issues/13943
    if (props.mode === 'inline' || isMobileDevice()) {
      newChildProps.triggerSubMenuAction = 'click';
    }
    return React__default.cloneElement(child, newChildProps);
  };

  this.renderMenuItem = function (c, i, subMenuKey) {
    /* istanbul ignore if */
    if (!c) {
      return null;
    }
    var state = _this3.props.store.getState();
    var extraProps = {
      openKeys: state.openKeys,
      selectedKeys: state.selectedKeys,
      triggerSubMenuAction: _this3.props.triggerSubMenuAction,
      subMenuKey: subMenuKey
    };
    return _this3.renderCommonMenuItem(c, i, extraProps);
  };
};

var connected$1 = lib_2()(SubPopupMenu);

var Menu = function (_React$Component) {
  _inherits$5(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck$5(this, Menu);

    var _this = _possibleConstructorReturn$5(this, _React$Component.call(this, props));

    _initialiseProps$2.call(_this);

    _this.isRootMenu = true;

    var selectedKeys = props.defaultSelectedKeys;
    var openKeys = props.defaultOpenKeys;
    if ('selectedKeys' in props) {
      selectedKeys = props.selectedKeys || [];
    }
    if ('openKeys' in props) {
      openKeys = props.openKeys || [];
    }

    _this.store = lib_1({
      selectedKeys: selectedKeys,
      openKeys: openKeys,
      activeKey: { '0-menu-': getActiveKey(props, props.activeKey) }
    });
    return _this;
  }

  Menu.prototype.componentDidMount = function componentDidMount() {
    this.updateMiniStore();
  };

  Menu.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateMiniStore();
  };

  // onKeyDown needs to be exposed as a instance method
  // e.g., in rc-select, we need to navigate menu item while
  // current active item is rc-select input box rather than the menu itself


  Menu.prototype.updateMiniStore = function updateMiniStore() {
    if ('selectedKeys' in this.props) {
      this.store.setState({
        selectedKeys: this.props.selectedKeys || []
      });
    }
    if ('openKeys' in this.props) {
      this.store.setState({
        openKeys: this.props.openKeys || []
      });
    }
  };

  Menu.prototype.render = function render() {
    var _this2 = this;

    var props = _objectWithoutProperties(this.props, []);

    props.className += ' ' + props.prefixCls + '-root';
    props = _extends$3({}, props, {
      onClick: this.onClick,
      onOpenChange: this.onOpenChange,
      onDeselect: this.onDeselect,
      onSelect: this.onSelect,
      openTransitionName: this.getOpenTransitionName(),
      parentMenu: this
    });
    return React__default.createElement(
      lib_3,
      { store: this.store },
      React__default.createElement(
        connected$1,
        _extends$3({}, props, { ref: function ref(c) {
            return _this2.innerMenu = c;
          } }),
        this.props.children
      )
    );
  };

  return Menu;
}(React__default.Component);

Menu.propTypes = {
  defaultSelectedKeys: PropTypes__default.arrayOf(PropTypes__default.string),
  defaultActiveFirst: PropTypes__default.bool,
  selectedKeys: PropTypes__default.arrayOf(PropTypes__default.string),
  defaultOpenKeys: PropTypes__default.arrayOf(PropTypes__default.string),
  openKeys: PropTypes__default.arrayOf(PropTypes__default.string),
  mode: PropTypes__default.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
  getPopupContainer: PropTypes__default.func,
  onClick: PropTypes__default.func,
  onSelect: PropTypes__default.func,
  onDeselect: PropTypes__default.func,
  onDestroy: PropTypes__default.func,
  openTransitionName: PropTypes__default.string,
  openAnimation: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.object]),
  subMenuOpenDelay: PropTypes__default.number,
  subMenuCloseDelay: PropTypes__default.number,
  forceSubMenuRender: PropTypes__default.bool,
  triggerSubMenuAction: PropTypes__default.string,
  level: PropTypes__default.number,
  selectable: PropTypes__default.bool,
  multiple: PropTypes__default.bool,
  children: PropTypes__default.any,
  className: PropTypes__default.string,
  style: PropTypes__default.object,
  activeKey: PropTypes__default.string,
  prefixCls: PropTypes__default.string,
  builtinPlacements: PropTypes__default.object,
  itemIcon: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.node]),
  expandIcon: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.node]),
  overflowedIndicator: PropTypes__default.node
};
Menu.defaultProps = {
  selectable: true,
  onClick: noop,
  onSelect: noop,
  onOpenChange: noop,
  onDeselect: noop,
  defaultSelectedKeys: [],
  defaultOpenKeys: [],
  subMenuOpenDelay: 0.1,
  subMenuCloseDelay: 0.1,
  triggerSubMenuAction: 'hover',
  prefixCls: 'rc-menu',
  className: '',
  mode: 'vertical',
  style: {},
  builtinPlacements: {},
  overflowedIndicator: React__default.createElement(
    'span',
    null,
    '\xB7\xB7\xB7'
  )
};

var _initialiseProps$2 = function _initialiseProps() {
  var _this3 = this;

  this.onSelect = function (selectInfo) {
    var props = _this3.props;
    if (props.selectable) {
      // root menu
      var selectedKeys = _this3.store.getState().selectedKeys;
      var selectedKey = selectInfo.key;
      if (props.multiple) {
        selectedKeys = selectedKeys.concat([selectedKey]);
      } else {
        selectedKeys = [selectedKey];
      }
      if (!('selectedKeys' in props)) {
        _this3.store.setState({
          selectedKeys: selectedKeys
        });
      }
      props.onSelect(_extends$3({}, selectInfo, {
        selectedKeys: selectedKeys
      }));
    }
  };

  this.onClick = function (e) {
    _this3.props.onClick(e);
  };

  this.onKeyDown = function (e, callback) {
    _this3.innerMenu.getWrappedInstance().onKeyDown(e, callback);
  };

  this.onOpenChange = function (event) {
    var props = _this3.props;
    var openKeys = _this3.store.getState().openKeys.concat();
    var changed = false;
    var processSingle = function processSingle(e) {
      var oneChanged = false;
      if (e.open) {
        oneChanged = openKeys.indexOf(e.key) === -1;
        if (oneChanged) {
          openKeys.push(e.key);
        }
      } else {
        var index = openKeys.indexOf(e.key);
        oneChanged = index !== -1;
        if (oneChanged) {
          openKeys.splice(index, 1);
        }
      }
      changed = changed || oneChanged;
    };
    if (Array.isArray(event)) {
      // batch change call
      event.forEach(processSingle);
    } else {
      processSingle(event);
    }
    if (changed) {
      if (!('openKeys' in _this3.props)) {
        _this3.store.setState({ openKeys: openKeys });
      }
      props.onOpenChange(openKeys);
    }
  };

  this.onDeselect = function (selectInfo) {
    var props = _this3.props;
    if (props.selectable) {
      var selectedKeys = _this3.store.getState().selectedKeys.concat();
      var selectedKey = selectInfo.key;
      var index = selectedKeys.indexOf(selectedKey);
      if (index !== -1) {
        selectedKeys.splice(index, 1);
      }
      if (!('selectedKeys' in props)) {
        _this3.store.setState({
          selectedKeys: selectedKeys
        });
      }
      props.onDeselect(_extends$3({}, selectInfo, {
        selectedKeys: selectedKeys
      }));
    }
  };

  this.getOpenTransitionName = function () {
    var props = _this3.props;
    var transitionName = props.openTransitionName;
    var animationName = props.openAnimation;
    if (!transitionName && typeof animationName === 'string') {
      transitionName = props.prefixCls + '-open-' + animationName;
    }
    return transitionName;
  };
};

/* eslint react/no-is-mounted:0 */

var MenuItem = function (_React$Component) {
  _inherits$5(MenuItem, _React$Component);

  function MenuItem(props) {
    _classCallCheck$5(this, MenuItem);

    var _this = _possibleConstructorReturn$5(this, _React$Component.call(this, props));

    _this.onKeyDown = function (e) {
      var keyCode = e.keyCode;
      if (keyCode === KeyCode.ENTER) {
        _this.onClick(e);
        return true;
      }
    };

    _this.onMouseLeave = function (e) {
      var _this$props = _this.props,
          eventKey = _this$props.eventKey,
          onItemHover = _this$props.onItemHover,
          onMouseLeave = _this$props.onMouseLeave;

      onItemHover({
        key: eventKey,
        hover: false
      });
      onMouseLeave({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onMouseEnter = function (e) {
      var _this$props2 = _this.props,
          eventKey = _this$props2.eventKey,
          onItemHover = _this$props2.onItemHover,
          onMouseEnter = _this$props2.onMouseEnter;

      onItemHover({
        key: eventKey,
        hover: true
      });
      onMouseEnter({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onClick = function (e) {
      var _this$props3 = _this.props,
          eventKey = _this$props3.eventKey,
          multiple = _this$props3.multiple,
          onClick = _this$props3.onClick,
          onSelect = _this$props3.onSelect,
          onDeselect = _this$props3.onDeselect,
          isSelected = _this$props3.isSelected;

      var info = {
        key: eventKey,
        keyPath: [eventKey],
        item: _this,
        domEvent: e
      };
      onClick(info);
      if (multiple) {
        if (isSelected) {
          onDeselect(info);
        } else {
          onSelect(info);
        }
      } else if (!isSelected) {
        onSelect(info);
      }
    };

    return _this;
  }

  MenuItem.prototype.componentDidMount = function componentDidMount() {
    // invoke customized ref to expose component to mixin
    this.callRef();
  };

  MenuItem.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.active) {
      scrollIntoView(ReactDOM__default.findDOMNode(this), ReactDOM__default.findDOMNode(this.props.parentMenu), {
        onlyScrollIfNeeded: true
      });
    }
    this.callRef();
  };

  MenuItem.prototype.componentWillUnmount = function componentWillUnmount() {
    var props = this.props;
    if (props.onDestroy) {
      props.onDestroy(props.eventKey);
    }
  };

  MenuItem.prototype.getPrefixCls = function getPrefixCls() {
    return this.props.rootPrefixCls + '-item';
  };

  MenuItem.prototype.getActiveClassName = function getActiveClassName() {
    return this.getPrefixCls() + '-active';
  };

  MenuItem.prototype.getSelectedClassName = function getSelectedClassName() {
    return this.getPrefixCls() + '-selected';
  };

  MenuItem.prototype.getDisabledClassName = function getDisabledClassName() {
    return this.getPrefixCls() + '-disabled';
  };

  MenuItem.prototype.callRef = function callRef() {
    if (this.props.manualRef) {
      this.props.manualRef(this);
    }
  };

  MenuItem.prototype.render = function render() {
    var _classNames;

    var props = _extends$3({}, this.props);
    var className = require$$2$1(this.getPrefixCls(), props.className, (_classNames = {}, _classNames[this.getActiveClassName()] = !props.disabled && props.active, _classNames[this.getSelectedClassName()] = props.isSelected, _classNames[this.getDisabledClassName()] = props.disabled, _classNames));
    var attrs = _extends$3({}, props.attribute, {
      title: props.title,
      className: className,
      // set to menuitem by default
      role: props.role || 'menuitem',
      'aria-disabled': props.disabled
    });

    if (props.role === 'option') {
      // overwrite to option
      attrs = _extends$3({}, attrs, {
        role: 'option',
        'aria-selected': props.isSelected
      });
    } else if (props.role === null || props.role === 'none') {
      // sometimes we want to specify role inside <li/> element
      // <li><a role='menuitem'>Link</a></li> would be a good example
      // in this case the role on <li/> should be "none" to
      // remove the implied listitem role.
      // https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html
      attrs.role = 'none';
    }
    // In case that onClick/onMouseLeave/onMouseEnter is passed down from owner
    var mouseEvent = {
      onClick: props.disabled ? null : this.onClick,
      onMouseLeave: props.disabled ? null : this.onMouseLeave,
      onMouseEnter: props.disabled ? null : this.onMouseEnter
    };
    var style = _extends$3({}, props.style);
    if (props.mode === 'inline') {
      style.paddingLeft = props.inlineIndent * props.level;
    }
    menuAllProps.forEach(function (key) {
      return delete props[key];
    });
    var icon = this.props.itemIcon;
    if (typeof this.props.itemIcon === 'function') {
      icon = React__default.createElement(this.props.itemIcon, this.props);
    }
    return React__default.createElement(
      'li',
      _extends$3({}, props, attrs, mouseEvent, {
        style: style
      }),
      props.children,
      icon
    );
  };

  return MenuItem;
}(React__default.Component);

MenuItem.propTypes = {
  attribute: PropTypes__default.object,
  rootPrefixCls: PropTypes__default.string,
  eventKey: PropTypes__default.string,
  active: PropTypes__default.bool,
  children: PropTypes__default.any,
  selectedKeys: PropTypes__default.array,
  disabled: PropTypes__default.bool,
  title: PropTypes__default.string,
  onItemHover: PropTypes__default.func,
  onSelect: PropTypes__default.func,
  onClick: PropTypes__default.func,
  onDeselect: PropTypes__default.func,
  parentMenu: PropTypes__default.object,
  onDestroy: PropTypes__default.func,
  onMouseEnter: PropTypes__default.func,
  onMouseLeave: PropTypes__default.func,
  multiple: PropTypes__default.bool,
  isSelected: PropTypes__default.bool,
  manualRef: PropTypes__default.func,
  itemIcon: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.node])
};
MenuItem.defaultProps = {
  onSelect: noop,
  onMouseEnter: noop,
  onMouseLeave: noop,
  manualRef: noop
};
MenuItem.isMenuItem = true;

var connected$2 = lib_2(function (_ref, _ref2) {
  var activeKey = _ref.activeKey,
      selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    active: activeKey[subMenuKey] === eventKey,
    isSelected: selectedKeys.indexOf(eventKey) !== -1
  };
})(MenuItem);

var MenuItemGroup = function (_React$Component) {
  _inherits$5(MenuItemGroup, _React$Component);

  function MenuItemGroup() {
    var _temp, _this, _ret;

    _classCallCheck$5(this, MenuItemGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderInnerMenuItem = function (item) {
      var _this$props = _this.props,
          renderMenuItem = _this$props.renderMenuItem,
          index = _this$props.index;

      return renderMenuItem(item, index, _this.props.subMenuKey);
    }, _temp), _possibleConstructorReturn$5(_this, _ret);
  }

  MenuItemGroup.prototype.render = function render() {
    var props = _objectWithoutProperties(this.props, []);

    var _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        rootPrefixCls = props.rootPrefixCls;

    var titleClassName = rootPrefixCls + '-item-group-title';
    var listClassName = rootPrefixCls + '-item-group-list';
    var title = props.title,
        children = props.children;

    menuAllProps.forEach(function (key) {
      return delete props[key];
    });

    // Set onClick to null, to ignore propagated onClick event
    delete props.onClick;

    return React__default.createElement(
      'li',
      _extends$3({}, props, { className: className + ' ' + rootPrefixCls + '-item-group' }),
      React__default.createElement(
        'div',
        {
          className: titleClassName,
          title: typeof title === 'string' ? title : undefined
        },
        title
      ),
      React__default.createElement(
        'ul',
        { className: listClassName },
        React__default.Children.map(children, this.renderInnerMenuItem)
      )
    );
  };

  return MenuItemGroup;
}(React__default.Component);

MenuItemGroup.propTypes = {
  renderMenuItem: PropTypes__default.func,
  index: PropTypes__default.number,
  className: PropTypes__default.string,
  subMenuKey: PropTypes__default.string,
  rootPrefixCls: PropTypes__default.string
};
MenuItemGroup.defaultProps = {
  disabled: true
};


MenuItemGroup.isMenuItemGroup = true;

var Divider = function (_React$Component) {
  _inherits$5(Divider, _React$Component);

  function Divider() {
    _classCallCheck$5(this, Divider);

    return _possibleConstructorReturn$5(this, _React$Component.apply(this, arguments));
  }

  Divider.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        rootPrefixCls = _props.rootPrefixCls,
        style = _props.style;

    return React__default.createElement('li', {
      className: className + ' ' + rootPrefixCls + '-item-divider',
      style: style
    });
  };

  return Divider;
}(React__default.Component);

Divider.propTypes = {
  className: PropTypes__default.string,
  rootPrefixCls: PropTypes__default.string,
  style: PropTypes__default.object
};
Divider.defaultProps = {
  // To fix keyboard UX.
  disabled: true,
  className: '',
  style: {}
};

function toArray(children) {
  var ret = [];
  React__default.Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

function toTitle(title) {
  if (typeof title === 'string') {
    return title;
  }

  return '';
}
function getValuePropValue(child) {
  if (!child) {
    return null;
  }

  var props = child.props;

  if ('value' in props) {
    return props.value;
  }

  if (child.key) {
    return child.key;
  }

  if (child.type && child.type.isSelectOptGroup && props.label) {
    return props.label;
  }

  throw new Error("Need at least a key or a value or a label (only for OptGroup) for ".concat(child));
}
function getPropValue(child, prop) {
  if (prop === 'value') {
    return getValuePropValue(child);
  }

  return child.props[prop];
}
function isMultiple(props) {
  return props.multiple;
}
function isCombobox(props) {
  return props.combobox;
}
function isMultipleOrTags(props) {
  return props.multiple || props.tags;
}
function isMultipleOrTagsOrCombobox(props) {
  return isMultipleOrTags(props) || isCombobox(props);
}
function isSingleMode(props) {
  return !isMultipleOrTagsOrCombobox(props);
}
function toArray$1(value) {
  var ret = value;

  if (value === undefined) {
    ret = [];
  } else if (!Array.isArray(value)) {
    ret = [value];
  }

  return ret;
}
function getMapKey(value) {
  return "".concat(typeof value, "-").concat(value);
}
function preventDefaultEvent(e) {
  e.preventDefault();
}
function findIndexInValueBySingleValue(value, singleValue) {
  var index = -1;

  if (value) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === singleValue) {
        index = i;
        break;
      }
    }
  }

  return index;
}
function getLabelFromPropsValue(value, key) {
  var label;
  value = toArray$1(value);

  if (value) {
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < value.length; i++) {
      if (value[i].key === key) {
        label = value[i].label;
        break;
      }
    }
  }

  return label;
}
function getSelectKeys(menuItems, value) {
  if (value === null || value === undefined) {
    return [];
  }

  var selectedKeys = [];
  React__default.Children.forEach(menuItems, function (item) {
    var type = item.type;

    if (type.isMenuItemGroup) {
      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
    } else {
      var itemValue = getValuePropValue(item);
      var itemKey = item.key;

      if (findIndexInValueBySingleValue(value, itemValue) !== -1 && itemKey) {
        selectedKeys.push(itemKey);
      }
    }
  });
  return selectedKeys;
}
var UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};
var UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'on'
};
function findFirstMenuItem(children) {
  // tslint:disable-next-line:prefer-for-of
  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (child.type.isMenuItemGroup) {
      var found = findFirstMenuItem(child.props.children);

      if (found) {
        return found;
      }
    } else if (!child.props.disabled) {
      return child;
    }
  }

  return null;
}
function includesSeparators(str, separators) {
  // tslint:disable-next-line:prefer-for-of
  for (var i = 0; i < separators.length; ++i) {
    if (str.lastIndexOf(separators[i]) > 0) {
      return true;
    }
  }

  return false;
}
function splitBySeparators(str, separators) {
  var reg = new RegExp("[".concat(separators.join(), "]"));
  return str.split(reg).filter(function (token) {
    return token;
  });
}
function defaultFilterFn(input, child) {
  if (child.props.disabled) {
    return false;
  }

  var value = toArray$1(getPropValue(child, this.props.optionFilterProp)).join('');
  return value.toLowerCase().indexOf(input.toLowerCase()) > -1;
}
function validateOptionValue(value, props) {
  if (isSingleMode(props) || isMultiple(props)) {
    return;
  }

  if (typeof value !== 'string') {
    throw new Error("Invalid `value` of type `".concat(typeof value, "` supplied to Option, ") + "expected `string` when `tags/combobox` is `true`.");
  }
}
function saveRef$1(instance, name) {
  return function (node) {
    instance[name] = node;
  };
}
function generateUUID() {
  if (process.env.NODE_ENV === 'test') {
    return 'test-uuid';
  }

  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // tslint:disable-next-line:no-bitwise
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16); // tslint:disable-next-line:no-bitwise

    return (c === 'x' ? r : r & 0x7 | 0x8).toString(16);
  });
  return uuid;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$2(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits$2(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    var _this;

    _classCallCheck$2(this, DropdownMenu);

    _this = _possibleConstructorReturn$2(this, _getPrototypeOf$2(DropdownMenu).call(this, props));
    _this.rafInstance = {
      cancel: function cancel() {
        return null;
      }
    };
    _this.lastVisible = false;

    _this.scrollActiveItemToView = function () {
      // scroll into view
      var itemComponent = findDOMNode(_this.firstActiveItem);
      var _this$props = _this.props,
          visible = _this$props.visible,
          firstActiveValue = _this$props.firstActiveValue;
      var value = _this.props.value;

      if (!itemComponent || !visible) {
        return;
      }

      var scrollIntoViewOpts = {
        onlyScrollIfNeeded: true
      };

      if ((!value || value.length === 0) && firstActiveValue) {
        scrollIntoViewOpts.alignWithTop = true;
      } // Delay to scroll since current frame item position is not ready when pre view is by filter
      // https://github.com/ant-design/ant-design/issues/11268#issuecomment-406634462


      _this.rafInstance = raf(function () {
        scrollIntoView(itemComponent, findDOMNode(_this.menuRef), scrollIntoViewOpts);
      });
    };

    _this.renderMenu = function () {
      var _this$props2 = _this.props,
          menuItems = _this$props2.menuItems,
          menuItemSelectedIcon = _this$props2.menuItemSelectedIcon,
          defaultActiveFirstOption = _this$props2.defaultActiveFirstOption,
          prefixCls = _this$props2.prefixCls,
          multiple = _this$props2.multiple,
          onMenuSelect = _this$props2.onMenuSelect,
          inputValue = _this$props2.inputValue,
          backfillValue = _this$props2.backfillValue,
          onMenuDeselect = _this$props2.onMenuDeselect,
          visible = _this$props2.visible;
      var firstActiveValue = _this.props.firstActiveValue;

      if (menuItems && menuItems.length) {
        var menuProps = {};

        if (multiple) {
          menuProps.onDeselect = onMenuDeselect;
          menuProps.onSelect = onMenuSelect;
        } else {
          menuProps.onClick = onMenuSelect;
        }

        var value = _this.props.value;
        var selectedKeys = getSelectKeys(menuItems, value);
        var activeKeyProps = {};
        var defaultActiveFirst = defaultActiveFirstOption;
        var clonedMenuItems = menuItems;

        if (selectedKeys.length || firstActiveValue) {
          if (visible && !_this.lastVisible) {
            activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
          } else if (!visible) {
            // Do not trigger auto active since we already have selectedKeys
            if (selectedKeys[0]) {
              defaultActiveFirst = false;
            }

            activeKeyProps.activeKey = undefined;
          }

          var foundFirst = false; // set firstActiveItem via cloning menus
          // for scroll into view

          var clone = function clone(item) {
            var key = item.key;

            if (!foundFirst && selectedKeys.indexOf(key) !== -1 || !foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1) {
              foundFirst = true;
              return cloneElement(item, {
                ref: function ref(_ref) {
                  _this.firstActiveItem = _ref;
                }
              });
            }

            return item;
          };

          clonedMenuItems = menuItems.map(function (item) {
            if (item.type.isMenuItemGroup) {
              var children = toArray(item.props.children).map(clone);
              return cloneElement(item, {}, children);
            }

            return clone(item);
          });
        } else {
          // Clear firstActiveItem when dropdown menu items was empty
          // Avoid `Unable to find node on an unmounted component`
          // https://github.com/ant-design/ant-design/issues/10774
          _this.firstActiveItem = null;
        } // clear activeKey when inputValue change


        var lastValue = value && value[value.length - 1];

        if (inputValue !== _this.lastInputValue && (!lastValue || lastValue !== backfillValue)) {
          activeKeyProps.activeKey = '';
        }

        return createElement(Menu, _extends({
          ref: _this.saveMenuRef,
          style: _this.props.dropdownMenuStyle,
          defaultActiveFirst: defaultActiveFirst,
          role: "listbox",
          itemIcon: multiple ? menuItemSelectedIcon : null
        }, activeKeyProps, {
          multiple: multiple
        }, menuProps, {
          selectedKeys: selectedKeys,
          prefixCls: "".concat(prefixCls, "-menu")
        }), clonedMenuItems);
      }

      return null;
    };

    _this.lastInputValue = props.inputValue;
    _this.saveMenuRef = saveRef$1(_assertThisInitialized$2(_this), 'menuRef');
    return _this;
  }

  _createClass(DropdownMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollActiveItemToView();
      this.lastVisible = this.props.visible;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (!nextProps.visible) {
        this.lastVisible = false;
      } // freeze when hide


      return this.props.visible && !nextProps.visible || nextProps.visible || nextProps.inputValue !== this.props.inputValue;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props;

      if (!prevProps.visible && props.visible) {
        this.scrollActiveItemToView();
      }

      this.lastVisible = props.visible;
      this.lastInputValue = props.inputValue;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rafInstance && this.rafInstance.cancel) {
        this.rafInstance.cancel();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var renderMenu = this.renderMenu();
      return renderMenu ? createElement("div", {
        style: {
          overflow: 'auto',
          transform: 'translateZ(0)'
        },
        id: this.props.ariaId,
        onFocus: this.props.onPopupFocus,
        onMouseDown: preventDefaultEvent,
        onScroll: this.props.onPopupScroll
      }, renderMenu) : null;
    }
  }]);

  return DropdownMenu;
}(Component);
DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.propTypes = {
  ariaId: string,
  defaultActiveFirstOption: bool,
  value: any,
  dropdownMenuStyle: object,
  multiple: bool,
  onPopupFocus: func,
  onPopupScroll: func,
  onMenuDeSelect: func,
  onMenuSelect: func,
  prefixCls: string,
  menuItems: any,
  inputValue: string,
  visible: bool,
  firstActiveValue: string,
  menuItemSelectedIcon: oneOfType([func, node])
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$3(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};
Trigger.displayName = 'Trigger';
var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var SelectTrigger =
/*#__PURE__*/
function (_React$Component) {
  _inherits$3(SelectTrigger, _React$Component);

  function SelectTrigger(props) {
    var _this;

    _classCallCheck$3(this, SelectTrigger);

    _this = _possibleConstructorReturn$3(this, _getPrototypeOf$3(SelectTrigger).call(this, props));
    _this.dropdownMenuRef = null;

    _this.setDropdownWidth = function () {
      var dom = findDOMNode(_assertThisInitialized$3(_this));
      var width = dom.offsetWidth;

      if (width !== _this.state.dropdownWidth) {
        _this.setState({
          dropdownWidth: width
        });
      }
    };

    _this.getInnerMenu = function () {
      return _this.dropdownMenuRef && _this.dropdownMenuRef.menuRef;
    };

    _this.getPopupDOMNode = function () {
      return _this.triggerRef.getPopupDomNode();
    };

    _this.getDropdownElement = function (newProps) {
      var props = _this.props;
      var dropdownRender = props.dropdownRender,
          ariaId = props.ariaId;
      var menuNode = createElement(DropdownMenu, _extends$1({
        ref: _this.saveDropdownMenuRef
      }, newProps, {
        ariaId: ariaId,
        prefixCls: _this.getDropdownPrefixCls(),
        onMenuSelect: props.onMenuSelect,
        onMenuDeselect: props.onMenuDeselect,
        onPopupScroll: props.onPopupScroll,
        value: props.value,
        backfillValue: props.backfillValue,
        firstActiveValue: props.firstActiveValue,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        menuItemSelectedIcon: props.menuItemSelectedIcon
      }));

      if (dropdownRender) {
        return dropdownRender(menuNode, props);
      }

      return null;
    };

    _this.getDropdownTransitionName = function () {
      var props = _this.props;
      var transitionName = props.transitionName;

      if (!transitionName && props.animation) {
        transitionName = "".concat(_this.getDropdownPrefixCls(), "-").concat(props.animation);
      }

      return transitionName;
    };

    _this.getDropdownPrefixCls = function () {
      return "".concat(_this.props.prefixCls, "-dropdown");
    };

    _this.saveDropdownMenuRef = saveRef$1(_assertThisInitialized$3(_this), 'dropdownMenuRef');
    _this.saveTriggerRef = saveRef$1(_assertThisInitialized$3(_this), 'triggerRef');
    _this.state = {
      dropdownWidth: 0
    };
    return _this;
  }

  _createClass$1(SelectTrigger, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDropdownWidth();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setDropdownWidth();
    }
  }, {
    key: "render",
    value: function render() {
      var _popupClassName;

      var _a = this.props,
          onPopupFocus = _a.onPopupFocus,
          empty = _a.empty,
          props = __rest(_a, ["onPopupFocus", "empty"]);

      var multiple = props.multiple,
          visible = props.visible,
          inputValue = props.inputValue,
          dropdownAlign = props.dropdownAlign,
          disabled = props.disabled,
          showSearch = props.showSearch,
          dropdownClassName = props.dropdownClassName,
          dropdownStyle = props.dropdownStyle,
          dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
      var dropdownPrefixCls = this.getDropdownPrefixCls();
      var popupClassName = (_popupClassName = {}, _defineProperty(_popupClassName, dropdownClassName, !!dropdownClassName), _defineProperty(_popupClassName, "".concat(dropdownPrefixCls, "--").concat(multiple ? 'multiple' : 'single'), 1), _defineProperty(_popupClassName, "".concat(dropdownPrefixCls, "--empty"), empty), _popupClassName);
      var popupElement = this.getDropdownElement({
        menuItems: props.options,
        onPopupFocus: onPopupFocus,
        multiple: multiple,
        inputValue: inputValue,
        visible: visible
      });
      var hideAction;

      if (disabled) {
        hideAction = [];
      } else if (isSingleMode(props) && !showSearch) {
        hideAction = ['click'];
      } else {
        hideAction = ['blur'];
      }

      var popupStyle = _extends$1({}, dropdownStyle);

      var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';

      if (this.state.dropdownWidth) {
        popupStyle[widthProp] = "".concat(this.state.dropdownWidth, "px");
      }

      return createElement(Trigger, _extends$1({}, props, {
        showAction: disabled ? [] : this.props.showAction,
        hideAction: hideAction,
        ref: this.saveTriggerRef,
        popupPlacement: "bottomLeft",
        builtinPlacements: BUILT_IN_PLACEMENTS,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        onPopupVisibleChange: props.onDropdownVisibleChange,
        popup: popupElement,
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: props.getPopupContainer,
        popupClassName: require$$2$1(popupClassName),
        popupStyle: popupStyle
      }), props.children);
    }
  }]);

  return SelectTrigger;
}(Component);
SelectTrigger.defaultProps = {
  dropdownRender: function dropdownRender(menu) {
    return menu;
  }
};
SelectTrigger.propTypes = {
  onPopupFocus: func,
  onPopupScroll: func,
  dropdownMatchSelectWidth: bool,
  dropdownAlign: object,
  visible: bool,
  disabled: bool,
  showSearch: bool,
  dropdownClassName: string,
  multiple: bool,
  inputValue: string,
  filterOption: any,
  options: any,
  prefixCls: string,
  popupClassName: string,
  children: any,
  showAction: arrayOf(string),
  menuItemSelectedIcon: oneOfType([func, node]),
  dropdownRender: func,
  ariaId: string
};
SelectTrigger.displayName = 'SelectTrigger';

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$4(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }
var SELECT_EMPTY_VALUE_KEY = 'RC_SELECT_EMPTY_VALUE_KEY';

var noop$1 = function noop() {
  return null;
};

function chaining() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < fns.length; i++) {
      if (fns[i] && typeof fns[i] === 'function') {
        fns[i].apply(chaining, args);
      }
    }
  };
}

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits$4(Select, _React$Component);

  function Select(props) {
    var _this;

    _classCallCheck$4(this, Select);

    _this = _possibleConstructorReturn$4(this, _getPrototypeOf$4(Select).call(this, props));
    _this.inputRef = null;
    _this.inputMirrorRef = null;
    _this.topCtrlRef = null;
    _this.selectTriggerRef = null;
    _this.rootRef = null;
    _this.selectionRef = null;
    _this.dropdownContainer = null;
    _this.blurTimer = null;
    _this.focusTimer = null;
    _this.comboboxTimer = null; // tslint:disable-next-line:variable-name

    _this._focused = false; // tslint:disable-next-line:variable-name

    _this._mouseDown = false; // tslint:disable-next-line:variable-name

    _this._options = []; // tslint:disable-next-line:variable-name

    _this._empty = false;

    _this.onInputChange = function (event) {
      var tokenSeparators = _this.props.tokenSeparators;
      var val = event.target.value;

      if (isMultipleOrTags(_this.props) && tokenSeparators.length && includesSeparators(val, tokenSeparators)) {
        var nextValue = _this.getValueByInput(val);

        if (nextValue !== undefined) {
          _this.fireChange(nextValue);
        }

        _this.setOpenState(false, {
          needFocus: true
        });

        _this.setInputValue('', false);

        return;
      }

      _this.setInputValue(val);

      _this.setState({
        open: true
      });

      if (isCombobox(_this.props)) {
        _this.fireChange([val]);
      }
    };

    _this.onDropdownVisibleChange = function (open) {
      if (open && !_this._focused) {
        _this.clearBlurTime();

        _this.timeoutFocus();

        _this._focused = true;

        _this.updateFocusClassName();
      }

      _this.setOpenState(open);
    }; // combobox ignore


    _this.onKeyDown = function (event) {
      var open = _this.state.open;
      var disabled = _this.props.disabled;

      if (disabled) {
        return;
      }

      var keyCode = event.keyCode;

      if (open && !_this.getInputDOMNode()) {
        _this.onInputKeyDown(event);
      } else if (keyCode === KeyCode.ENTER || keyCode === KeyCode.DOWN) {
        if (!open) {
          _this.setOpenState(true);
        }

        event.preventDefault();
      } else if (keyCode === KeyCode.SPACE) {
        // Not block space if popup is shown
        if (!open) {
          _this.setOpenState(true);

          event.preventDefault();
        }
      }
    };

    _this.onInputKeyDown = function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          combobox = _this$props.combobox,
          defaultActiveFirstOption = _this$props.defaultActiveFirstOption;

      if (disabled) {
        return;
      }

      var state = _this.state;

      var isRealOpen = _this.getRealOpenState(state); // magic code


      var keyCode = event.keyCode;

      if (isMultipleOrTags(_this.props) && !event.target.value && keyCode === KeyCode.BACKSPACE) {
        event.preventDefault();
        var value = state.value;

        if (value.length) {
          _this.removeSelected(value[value.length - 1]);
        }

        return;
      }

      if (keyCode === KeyCode.DOWN) {
        if (!state.open) {
          _this.openIfHasChildren();

          event.preventDefault();
          event.stopPropagation();
          return;
        }
      } else if (keyCode === KeyCode.ENTER && state.open) {
        // Aviod trigger form submit when select item
        // https://github.com/ant-design/ant-design/issues/10861
        // https://github.com/ant-design/ant-design/issues/14544
        if (isRealOpen || !combobox) {
          event.preventDefault();
        } // Hard close popup to avoid lock of non option in combobox mode


        if (isRealOpen && combobox && defaultActiveFirstOption === false) {
          _this.comboboxTimer = setTimeout(function () {
            _this.setOpenState(false);
          });
        }
      } else if (keyCode === KeyCode.ESC) {
        if (state.open) {
          _this.setOpenState(false);

          event.preventDefault();
          event.stopPropagation();
        }

        return;
      }

      if (isRealOpen && _this.selectTriggerRef) {
        var menu = _this.selectTriggerRef.getInnerMenu();

        if (menu && menu.onKeyDown(event, _this.handleBackfill)) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    };

    _this.onMenuSelect = function (_ref) {
      var item = _ref.item;

      if (!item) {
        return;
      }

      var value = _this.state.value;
      var props = _this.props;
      var selectedValue = getValuePropValue(item);
      var lastValue = value[value.length - 1];

      _this.fireSelect(selectedValue);

      if (isMultipleOrTags(props)) {
        if (findIndexInValueBySingleValue(value, selectedValue) !== -1) {
          return;
        }

        value = value.concat([selectedValue]);
      } else {
        if (!isCombobox(props) && lastValue !== undefined && lastValue === selectedValue && selectedValue !== _this.state.backfillValue) {
          _this.setOpenState(false, {
            needFocus: true,
            fireSearch: false
          });

          return;
        }

        value = [selectedValue];

        _this.setOpenState(false, {
          needFocus: true,
          fireSearch: false
        });
      }

      _this.fireChange(value);

      var inputValue = isCombobox(props) ? getPropValue(item, props.optionLabelProp) : '';

      if (props.autoClearSearchValue) {
        _this.setInputValue(inputValue, false);
      }
    };

    _this.onMenuDeselect = function (_ref2) {
      var item = _ref2.item,
          domEvent = _ref2.domEvent;

      if (domEvent.type === 'keydown' && domEvent.keyCode === KeyCode.ENTER) {
        _this.removeSelected(getValuePropValue(item));

        return;
      }

      if (domEvent.type === 'click') {
        _this.removeSelected(getValuePropValue(item));
      }

      var props = _this.props;

      if (props.autoClearSearchValue) {
        _this.setInputValue('');
      }
    };

    _this.onArrowClick = function (e) {
      e.stopPropagation();
      e.preventDefault();

      if (!_this.props.disabled) {
        _this.setOpenState(!_this.state.open, {
          needFocus: !_this.state.open
        });
      }
    };

    _this.onPlaceholderClick = function () {
      if (_this.getInputDOMNode && _this.getInputDOMNode()) {
        _this.getInputDOMNode().focus();
      }
    };

    _this.onOuterFocus = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      _this.clearBlurTime(); // In IE11, onOuterFocus will be trigger twice when focus input
      // First one: e.target is div
      // Second one: e.target is input
      // other browser only trigger second one
      // https://github.com/ant-design/ant-design/issues/15942
      // Here we ignore the first one when e.target is div


      var inputNode = _this.getInputDOMNode();

      if (inputNode && e.target === _this.rootRef) {
        return;
      }

      if (!isMultipleOrTagsOrCombobox(_this.props) && e.target === inputNode) {
        return;
      }

      if (_this._focused) {
        return;
      }

      _this._focused = true;

      _this.updateFocusClassName(); // only effect multiple or tag mode


      if (!isMultipleOrTags(_this.props) || !_this._mouseDown) {
        _this.timeoutFocus();
      }
    };

    _this.onPopupFocus = function () {
      // fix ie scrollbar, focus element again
      _this.maybeFocus(true, true);
    };

    _this.onOuterBlur = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      _this.blurTimer = window.setTimeout(function () {
        _this._focused = false;

        _this.updateFocusClassName();

        var props = _this.props;
        var value = _this.state.value;
        var inputValue = _this.state.inputValue;

        if (isSingleMode(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
          var options = _this._options || [];

          if (options.length) {
            var firstOption = findFirstMenuItem(options);

            if (firstOption) {
              value = [getValuePropValue(firstOption)];

              _this.fireChange(value);
            }
          }
        } else if (isMultipleOrTags(props) && inputValue) {
          if (_this._mouseDown) {
            // need update dropmenu when not blur
            _this.setInputValue('');
          } else {
            // why not use setState?
            // https://github.com/ant-design/ant-design/issues/14262
            _this.state.inputValue = '';

            if (_this.getInputDOMNode && _this.getInputDOMNode()) {
              _this.getInputDOMNode().value = '';
            }
          }

          var tmpValue = _this.getValueByInput(inputValue);

          if (tmpValue !== undefined) {
            value = tmpValue;

            _this.fireChange(value);
          }
        } // if click the rest space of Select in multiple mode


        if (isMultipleOrTags(props) && _this._mouseDown) {
          _this.maybeFocus(true, true);

          _this._mouseDown = false;
          return;
        }

        _this.setOpenState(false);

        if (props.onBlur) {
          props.onBlur(_this.getVLForOnChange(value));
        }
      }, 10);
    };

    _this.onClearSelection = function (event) {
      var props = _this.props;
      var state = _this.state;

      if (props.disabled) {
        return;
      }

      var inputValue = state.inputValue;
      var value = state.value;
      event.stopPropagation();

      if (inputValue || value.length) {
        if (value.length) {
          _this.fireChange([]);
        }

        _this.setOpenState(false, {
          needFocus: true
        });

        if (inputValue) {
          _this.setInputValue('');
        }
      }
    };

    _this.onChoiceAnimationLeave = function () {
      _this.forcePopupAlign();
    };

    _this.getOptionInfoBySingleValue = function (value, optionsInfo) {
      var info;
      optionsInfo = optionsInfo || _this.state.optionsInfo;

      if (optionsInfo[getMapKey(value)]) {
        info = optionsInfo[getMapKey(value)];
      }

      if (info) {
        return info;
      }

      var defaultLabel = value;

      if (_this.props.labelInValue) {
        var valueLabel = getLabelFromPropsValue(_this.props.value, value);
        var defaultValueLabel = getLabelFromPropsValue(_this.props.defaultValue, value);

        if (valueLabel !== undefined) {
          defaultLabel = valueLabel;
        } else if (defaultValueLabel !== undefined) {
          defaultLabel = defaultValueLabel;
        }
      }

      var defaultInfo = {
        option: createElement(Option, {
          value: value,
          key: value
        }, value),
        value: value,
        label: defaultLabel
      };
      return defaultInfo;
    };

    _this.getOptionBySingleValue = function (value) {
      var _this$getOptionInfoBy = _this.getOptionInfoBySingleValue(value),
          option = _this$getOptionInfoBy.option;

      return option;
    };

    _this.getOptionsBySingleValue = function (values) {
      return values.map(function (value) {
        return _this.getOptionBySingleValue(value);
      });
    };

    _this.getValueByLabel = function (label) {
      if (label === undefined) {
        return null;
      }

      var value = null;
      Object.keys(_this.state.optionsInfo).forEach(function (key) {
        var info = _this.state.optionsInfo[key];
        var disabled = info.disabled;

        if (disabled) {
          return;
        }

        var oldLable = toArray$1(info.label);

        if (oldLable && oldLable.join('') === label) {
          value = info.value;
        }
      });
      return value;
    };

    _this.getVLBySingleValue = function (value) {
      if (_this.props.labelInValue) {
        return {
          key: value,
          label: _this.getLabelBySingleValue(value)
        };
      }

      return value;
    };

    _this.getVLForOnChange = function (vlsS) {
      var vls = vlsS;

      if (vls !== undefined) {
        if (!_this.props.labelInValue) {
          vls = vls.map(function (v) {
            return v;
          });
        } else {
          vls = vls.map(function (vl) {
            return {
              key: vl,
              label: _this.getLabelBySingleValue(vl)
            };
          });
        }

        return isMultipleOrTags(_this.props) ? vls : vls[0];
      }

      return vls;
    };

    _this.getLabelBySingleValue = function (value, optionsInfo) {
      var _this$getOptionInfoBy2 = _this.getOptionInfoBySingleValue(value, optionsInfo),
          label = _this$getOptionInfoBy2.label;

      return label;
    };

    _this.getDropdownContainer = function () {
      if (!_this.dropdownContainer) {
        _this.dropdownContainer = document.createElement('div');
        document.body.appendChild(_this.dropdownContainer);
      }

      return _this.dropdownContainer;
    };

    _this.getPlaceholderElement = function () {
      var props = _this.props;
      var state = _this.state;
      var hidden = false;

      if (state.inputValue) {
        hidden = true;
      }

      var value = state.value;

      if (value.length) {
        hidden = true;
      }

      if (isCombobox(props) && value.length === 1 && state.value && !state.value[0]) {
        hidden = false;
      }

      var placeholder = props.placeholder;

      if (placeholder) {
        return createElement("div", _extends$2({
          onMouseDown: preventDefaultEvent,
          style: _extends$2({
            display: hidden ? 'none' : 'block'
          }, UNSELECTABLE_STYLE)
        }, UNSELECTABLE_ATTRIBUTE, {
          onClick: _this.onPlaceholderClick,
          className: "".concat(props.prefixCls, "-selection__placeholder")
        }), placeholder);
      }

      return null;
    };

    _this.getInputElement = function () {
      var props = _this.props;
      var defaultInput = createElement("input", {
        id: props.id,
        autoComplete: "off"
      }); // tslint:disable-next-line:typedef-whitespace

      var inputElement = props.getInputElement ? props.getInputElement() : defaultInput;
      var inputCls = require$$2$1(inputElement.props.className, _defineProperty$1({}, "".concat(props.prefixCls, "-search__field"), true)); // https://github.com/ant-design/ant-design/issues/4992#issuecomment-281542159
      // Add space to the end of the inputValue as the width measurement tolerance

      return createElement("div", {
        className: "".concat(props.prefixCls, "-search__field__wrap")
      }, cloneElement(inputElement, {
        ref: _this.saveInputRef,
        onChange: _this.onInputChange,
        onKeyDown: chaining(_this.onInputKeyDown, inputElement.props.onKeyDown, _this.props.onInputKeyDown),
        value: _this.state.inputValue,
        disabled: props.disabled,
        className: inputCls
      }), createElement("span", {
        ref: _this.saveInputMirrorRef,
        className: "".concat(props.prefixCls, "-search__field__mirror")
      }, _this.state.inputValue, "\xA0"));
    };

    _this.getInputDOMNode = function () {
      return _this.topCtrlRef ? _this.topCtrlRef.querySelector('input,textarea,div[contentEditable]') : _this.inputRef;
    };

    _this.getInputMirrorDOMNode = function () {
      return _this.inputMirrorRef;
    };

    _this.getPopupDOMNode = function () {
      if (_this.selectTriggerRef) {
        return _this.selectTriggerRef.getPopupDOMNode();
      }
    };

    _this.getPopupMenuComponent = function () {
      if (_this.selectTriggerRef) {
        return _this.selectTriggerRef.getInnerMenu();
      }
    };

    _this.setOpenState = function (open) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var needFocus = config.needFocus,
          fireSearch = config.fireSearch;
      var props = _this.props;
      var state = _this.state;

      if (state.open === open) {
        _this.maybeFocus(open, !!needFocus);

        return;
      }

      if (_this.props.onDropdownVisibleChange) {
        _this.props.onDropdownVisibleChange(open);
      }

      var nextState = {
        open: open,
        backfillValue: ''
      }; // clear search input value when open is false in singleMode.
      // https://github.com/ant-design/ant-design/issues/16572

      if (!open && isSingleMode(props) && props.showSearch) {
        _this.setInputValue('', fireSearch);
      }

      if (!open) {
        _this.maybeFocus(open, !!needFocus);
      }

      _this.setState(_extends$2({
        open: open
      }, nextState), function () {
        if (open) {
          _this.maybeFocus(open, !!needFocus);
        }
      });
    };

    _this.setInputValue = function (inputValue) {
      var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var onSearch = _this.props.onSearch;

      if (inputValue !== _this.state.inputValue) {
        _this.setState(function (prevState) {
          // Additional check if `inputValue` changed in latest state.
          if (fireSearch && inputValue !== prevState.inputValue && onSearch) {
            onSearch(inputValue);
          }

          return {
            inputValue: inputValue
          };
        }, _this.forcePopupAlign);
      }
    };

    _this.getValueByInput = function (str) {
      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          tokenSeparators = _this$props2.tokenSeparators;
      var nextValue = _this.state.value;
      var hasNewValue = false;
      splitBySeparators(str, tokenSeparators).forEach(function (label) {
        var selectedValue = [label];

        if (multiple) {
          var value = _this.getValueByLabel(label);

          if (value && findIndexInValueBySingleValue(nextValue, value) === -1) {
            nextValue = nextValue.concat(value);
            hasNewValue = true;

            _this.fireSelect(value);
          }
        } else if (findIndexInValueBySingleValue(nextValue, label) === -1) {
          nextValue = nextValue.concat(selectedValue);
          hasNewValue = true;

          _this.fireSelect(label);
        }
      });
      return hasNewValue ? nextValue : undefined;
    };

    _this.getRealOpenState = function (state) {
      // tslint:disable-next-line:variable-name
      var _open = _this.props.open;

      if (typeof _open === 'boolean') {
        return _open;
      }

      var open = (state || _this.state).open;
      var options = _this._options || [];

      if (isMultipleOrTagsOrCombobox(_this.props) || !_this.props.showSearch) {
        if (open && !options.length) {
          open = false;
        }
      }

      return open;
    };

    _this.markMouseDown = function () {
      _this._mouseDown = true;
    };

    _this.markMouseLeave = function () {
      _this._mouseDown = false;
    };

    _this.handleBackfill = function (item) {
      if (!_this.props.backfill || !(isSingleMode(_this.props) || isCombobox(_this.props))) {
        return;
      }

      var key = getValuePropValue(item);

      if (isCombobox(_this.props)) {
        _this.setInputValue(key, false);
      }

      _this.setState({
        value: [key],
        backfillValue: key
      });
    };

    _this.filterOption = function (input, child) {
      var defaultFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultFilterFn;
      var value = _this.state.value;
      var lastValue = value[value.length - 1];

      if (!input || lastValue && lastValue === _this.state.backfillValue) {
        return true;
      }

      var filterFn = _this.props.filterOption;

      if ('filterOption' in _this.props) {
        if (filterFn === true) {
          filterFn = defaultFilter.bind(_assertThisInitialized$4(_this));
        }
      } else {
        filterFn = defaultFilter.bind(_assertThisInitialized$4(_this));
      }

      if (!filterFn) {
        return true;
      } else if (typeof filterFn === 'function') {
        return filterFn.call(_assertThisInitialized$4(_this), input, child);
      } else if (child.props.disabled) {
        return false;
      }

      return true;
    };

    _this.timeoutFocus = function () {
      var onFocus = _this.props.onFocus;

      if (_this.focusTimer) {
        _this.clearFocusTime();
      }

      _this.focusTimer = window.setTimeout(function () {
        if (onFocus) {
          onFocus();
        }
      }, 10);
    };

    _this.clearFocusTime = function () {
      if (_this.focusTimer) {
        clearTimeout(_this.focusTimer);
        _this.focusTimer = null;
      }
    };

    _this.clearBlurTime = function () {
      if (_this.blurTimer) {
        clearTimeout(_this.blurTimer);
        _this.blurTimer = null;
      }
    };

    _this.clearComboboxTime = function () {
      if (_this.comboboxTimer) {
        clearTimeout(_this.comboboxTimer);
        _this.comboboxTimer = null;
      }
    };

    _this.updateFocusClassName = function () {
      var rootRef = _this.rootRef;
      var props = _this.props; // avoid setState and its side effect

      if (_this._focused) {
        classes(rootRef).add("".concat(props.prefixCls, "-focused"));
      } else {
        classes(rootRef).remove("".concat(props.prefixCls, "-focused"));
      }
    };

    _this.maybeFocus = function (open, needFocus) {
      if (needFocus || open) {
        var input = _this.getInputDOMNode();

        var _document = document,
            activeElement = _document.activeElement;

        if (input && (open || isMultipleOrTagsOrCombobox(_this.props))) {
          if (activeElement !== input) {
            input.focus();
            _this._focused = true;
          }
        } else if (activeElement !== _this.selectionRef && _this.selectionRef) {
          _this.selectionRef.focus();

          _this._focused = true;
        }
      }
    };

    _this.removeSelected = function (selectedKey, e) {
      var props = _this.props;

      if (props.disabled || _this.isChildDisabled(selectedKey)) {
        return;
      } // Do not trigger Trigger popup


      if (e && e.stopPropagation) {
        e.stopPropagation();
      }

      var oldValue = _this.state.value;
      var value = oldValue.filter(function (singleValue) {
        return singleValue !== selectedKey;
      });
      var canMultiple = isMultipleOrTags(props);

      if (canMultiple) {
        var event = selectedKey;

        if (props.labelInValue) {
          event = {
            key: selectedKey,
            label: _this.getLabelBySingleValue(selectedKey)
          };
        }

        if (props.onDeselect) {
          props.onDeselect(event, _this.getOptionBySingleValue(selectedKey));
        }
      }

      _this.fireChange(value);
    };

    _this.openIfHasChildren = function () {
      var props = _this.props;

      if (Children.count(props.children) || isSingleMode(props)) {
        _this.setOpenState(true);
      }
    };

    _this.fireSelect = function (value) {
      if (_this.props.onSelect) {
        _this.props.onSelect(_this.getVLBySingleValue(value), _this.getOptionBySingleValue(value));
      }
    };

    _this.fireChange = function (value) {
      var props = _this.props;

      if (!('value' in props)) {
        _this.setState({
          value: value
        }, _this.forcePopupAlign);
      }

      var vls = _this.getVLForOnChange(value);

      var options = _this.getOptionsBySingleValue(value);

      if (props.onChange) {
        props.onChange(vls, isMultipleOrTags(_this.props) ? options : options[0]);
      }
    };

    _this.isChildDisabled = function (key) {
      return toArray(_this.props.children).some(function (child) {
        var childValue = getValuePropValue(child);
        return childValue === key && child.props && child.props.disabled;
      });
    };

    _this.forcePopupAlign = function () {
      if (!_this.state.open) {
        return;
      }

      if (_this.selectTriggerRef && _this.selectTriggerRef.triggerRef) {
        _this.selectTriggerRef.triggerRef.forcePopupAlign();
      }
    };

    _this.renderFilterOptions = function () {
      var inputValue = _this.state.inputValue;
      var _this$props3 = _this.props,
          children = _this$props3.children,
          tags = _this$props3.tags,
          notFoundContent = _this$props3.notFoundContent;
      var menuItems = [];
      var childrenKeys = [];
      var empty = false;

      var options = _this.renderFilterOptionsFromChildren(children, childrenKeys, menuItems);

      if (tags) {
        // tags value must be string
        var value = _this.state.value;
        value = value.filter(function (singleValue) {
          return childrenKeys.indexOf(singleValue) === -1 && (!inputValue || String(singleValue).indexOf(String(inputValue)) > -1);
        }); // sort by length

        value.sort(function (val1, val2) {
          return val1.length - val2.length;
        });
        value.forEach(function (singleValue) {
          var key = singleValue;
          var menuItem = createElement(connected$2, {
            style: UNSELECTABLE_STYLE,
            role: "option",
            attribute: UNSELECTABLE_ATTRIBUTE,
            value: key,
            key: key
          }, key);
          options.push(menuItem);
          menuItems.push(menuItem);
        }); // ref: https://github.com/ant-design/ant-design/issues/14090

        if (inputValue && menuItems.every(function (option) {
          return getValuePropValue(option) !== inputValue;
        })) {
          options.unshift(createElement(connected$2, {
            style: UNSELECTABLE_STYLE,
            role: "option",
            attribute: UNSELECTABLE_ATTRIBUTE,
            value: inputValue,
            key: inputValue
          }, inputValue));
        }
      }

      if (!options.length && notFoundContent) {
        empty = true;
        options = [createElement(connected$2, {
          style: UNSELECTABLE_STYLE,
          attribute: UNSELECTABLE_ATTRIBUTE,
          disabled: true,
          role: "option",
          value: "NOT_FOUND",
          key: "NOT_FOUND"
        }, notFoundContent)];
      }

      return {
        empty: empty,
        options: options
      };
    };

    _this.renderFilterOptionsFromChildren = function (children, childrenKeys, menuItems) {
      var sel = [];
      var props = _this.props;
      var inputValue = _this.state.inputValue;
      var tags = props.tags;
      Children.forEach(children, function (child) {
        if (!child) {
          return;
        }

        var type = child.type;

        if (type.isSelectOptGroup) {
          var label = child.props.label;
          var key = child.key;

          if (!key && typeof label === 'string') {
            key = label;
          } else if (!label && key) {
            label = key;
          } // Match option group label


          if (inputValue && _this.filterOption(inputValue, child)) {
            var innerItems = toArray(child.props.children).map(function (subChild) {
              var childValueSub = getValuePropValue(subChild) || subChild.key;
              return createElement(connected$2, _extends$2({
                key: childValueSub,
                value: childValueSub
              }, subChild.props));
            });
            sel.push(createElement(MenuItemGroup, {
              key: key,
              title: label
            }, innerItems)); // Not match
          } else {
            var _innerItems = _this.renderFilterOptionsFromChildren(child.props.children, childrenKeys, menuItems);

            if (_innerItems.length) {
              sel.push(createElement(MenuItemGroup, {
                key: key,
                title: label
              }, _innerItems));
            }
          }

          return;
        }

        warning(type.isSelectOption, 'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' + "instead of `".concat(type.name || type.displayName || child.type, "`."));
        var childValue = getValuePropValue(child);
        validateOptionValue(childValue, _this.props);

        if (_this.filterOption(inputValue, child)) {
          var menuItem = createElement(connected$2, _extends$2({
            style: UNSELECTABLE_STYLE,
            attribute: UNSELECTABLE_ATTRIBUTE,
            value: childValue,
            key: childValue,
            role: "option"
          }, child.props));
          sel.push(menuItem);
          menuItems.push(menuItem);
        }

        if (tags) {
          childrenKeys.push(childValue);
        }
      });
      return sel;
    };

    _this.renderTopControlNode = function () {
      var _this$state = _this.state,
          open = _this$state.open,
          inputValue = _this$state.inputValue;
      var value = _this.state.value;
      var props = _this.props;
      var choiceTransitionName = props.choiceTransitionName,
          prefixCls = props.prefixCls,
          maxTagTextLength = props.maxTagTextLength,
          maxTagCount = props.maxTagCount,
          showSearch = props.showSearch,
          removeIcon = props.removeIcon;
      var maxTagPlaceholder = props.maxTagPlaceholder;
      var className = "".concat(prefixCls, "-selection__rendered"); // search input is inside topControlNode in single, multiple & combobox. 2016/04/13

      var innerNode = null;

      if (isSingleMode(props)) {
        var selectedValue = null;

        if (value.length) {
          var showSelectedValue = false;
          var opacity = 1;

          if (!showSearch) {
            showSelectedValue = true;
          } else if (open) {
            showSelectedValue = !inputValue;

            if (showSelectedValue) {
              opacity = 0.4;
            }
          } else {
            showSelectedValue = true;
          }

          var singleValue = value[0];

          var _this$getOptionInfoBy3 = _this.getOptionInfoBySingleValue(singleValue),
              label = _this$getOptionInfoBy3.label,
              title = _this$getOptionInfoBy3.title;

          selectedValue = createElement("div", {
            key: "value",
            className: "".concat(prefixCls, "-selection-selected-value"),
            title: toTitle(title || label),
            style: {
              display: showSelectedValue ? 'block' : 'none',
              opacity: opacity
            }
          }, label);
        }

        if (!showSearch) {
          innerNode = [selectedValue];
        } else {
          innerNode = [selectedValue, createElement("div", {
            className: "".concat(prefixCls, "-search ").concat(prefixCls, "-search--inline"),
            key: "input",
            style: {
              display: open ? 'block' : 'none'
            }
          }, _this.getInputElement())];
        }
      } else {
        var selectedValueNodes = [];
        var limitedCountValue = value;
        var maxTagPlaceholderEl;

        if (maxTagCount !== undefined && value.length > maxTagCount) {
          limitedCountValue = limitedCountValue.slice(0, maxTagCount);

          var omittedValues = _this.getVLForOnChange(value.slice(maxTagCount, value.length));

          var content = "+ ".concat(value.length - maxTagCount, " ...");

          if (maxTagPlaceholder) {
            content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
          }

          maxTagPlaceholderEl = createElement("li", _extends$2({
            style: UNSELECTABLE_STYLE
          }, UNSELECTABLE_ATTRIBUTE, {
            role: "presentation",
            onMouseDown: preventDefaultEvent,
            className: "".concat(prefixCls, "-selection__choice ").concat(prefixCls, "-selection__choice__disabled"),
            key: "maxTagPlaceholder",
            title: toTitle(content)
          }), createElement("div", {
            className: "".concat(prefixCls, "-selection__choice__content")
          }, content));
        }

        if (isMultipleOrTags(props)) {
          selectedValueNodes = limitedCountValue.map(function (singleValue) {
            var info = _this.getOptionInfoBySingleValue(singleValue);

            var content = info.label;
            var title = info.title || content;

            if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
              content = "".concat(content.slice(0, maxTagTextLength), "...");
            }

            var disabled = _this.isChildDisabled(singleValue);

            var choiceClassName = disabled ? "".concat(prefixCls, "-selection__choice ").concat(prefixCls, "-selection__choice__disabled") : "".concat(prefixCls, "-selection__choice");
            return createElement("li", _extends$2({
              style: UNSELECTABLE_STYLE
            }, UNSELECTABLE_ATTRIBUTE, {
              onMouseDown: preventDefaultEvent,
              className: choiceClassName,
              role: "presentation",
              key: singleValue || SELECT_EMPTY_VALUE_KEY,
              title: toTitle(title)
            }), createElement("div", {
              className: "".concat(prefixCls, "-selection__choice__content")
            }, content), disabled ? null : createElement("span", {
              onClick: function onClick(event) {
                _this.removeSelected(singleValue, event);
              },
              className: "".concat(prefixCls, "-selection__choice__remove")
            }, removeIcon || createElement("i", {
              className: "".concat(prefixCls, "-selection__choice__remove-icon")
            }, "\xD7")));
          });
        }

        if (maxTagPlaceholderEl) {
          selectedValueNodes.push(maxTagPlaceholderEl);
        }

        selectedValueNodes.push(createElement("li", {
          className: "".concat(prefixCls, "-search ").concat(prefixCls, "-search--inline"),
          key: "__input"
        }, _this.getInputElement()));

        if (isMultipleOrTags(props) && choiceTransitionName) {
          innerNode = createElement(Animate, {
            onLeave: _this.onChoiceAnimationLeave,
            component: "ul",
            transitionName: choiceTransitionName
          }, selectedValueNodes);
        } else {
          innerNode = createElement("ul", null, selectedValueNodes);
        }
      }

      return createElement("div", {
        className: className,
        ref: _this.saveTopCtrlRef
      }, _this.getPlaceholderElement(), innerNode);
    };

    var optionsInfo = Select.getOptionsInfoFromProps(props);

    if (props.tags && typeof props.filterOption !== 'function') {
      var isDisabledExist = Object.keys(optionsInfo).some(function (key) {
        return optionsInfo[key].disabled;
      });
      warning(!isDisabledExist, 'Please avoid setting option to disabled in tags mode since user can always type text as tag.');
    }

    _this.state = {
      value: Select.getValueFromProps(props, true),
      inputValue: props.combobox ? Select.getInputValueForCombobox(props, optionsInfo, true) : '',
      open: props.defaultOpen,
      optionsInfo: optionsInfo,
      backfillValue: '',
      // a flag for aviod redundant getOptionsInfoFromProps call
      skipBuildOptionsInfo: true,
      ariaId: ''
    };
    _this.saveInputRef = saveRef$1(_assertThisInitialized$4(_this), 'inputRef');
    _this.saveInputMirrorRef = saveRef$1(_assertThisInitialized$4(_this), 'inputMirrorRef');
    _this.saveTopCtrlRef = saveRef$1(_assertThisInitialized$4(_this), 'topCtrlRef');
    _this.saveSelectTriggerRef = saveRef$1(_assertThisInitialized$4(_this), 'selectTriggerRef');
    _this.saveRootRef = saveRef$1(_assertThisInitialized$4(_this), 'rootRef');
    _this.saveSelectionRef = saveRef$1(_assertThisInitialized$4(_this), 'selectionRef');
    return _this;
  }

  _createClass$2(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // when defaultOpen is true, we should auto focus search input
      // https://github.com/ant-design/ant-design/issues/14254
      if (this.props.autoFocus || this.state.open) {
        this.focus();
      }

      this.setState({
        ariaId: generateUUID()
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (isMultipleOrTags(this.props)) {
        var inputNode = this.getInputDOMNode();
        var mirrorNode = this.getInputMirrorDOMNode();

        if (inputNode && inputNode.value && mirrorNode) {
          inputNode.style.width = '';
          inputNode.style.width = "".concat(mirrorNode.clientWidth, "px");
        } else if (inputNode) {
          inputNode.style.width = '';
        }
      }

      this.forcePopupAlign();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearFocusTime();
      this.clearBlurTime();
      this.clearComboboxTime();

      if (this.dropdownContainer) {
        unmountComponentAtNode(this.dropdownContainer);
        document.body.removeChild(this.dropdownContainer);
        this.dropdownContainer = null;
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (isSingleMode(this.props) && this.selectionRef) {
        this.selectionRef.focus();
      } else if (this.getInputDOMNode()) {
        this.getInputDOMNode().focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (isSingleMode(this.props) && this.selectionRef) {
        this.selectionRef.blur();
      } else if (this.getInputDOMNode()) {
        this.getInputDOMNode().blur();
      }
    }
  }, {
    key: "renderArrow",
    value: function renderArrow(multiple) {
      // showArrow : Set to true if not multiple by default but keep set value.
      var _this$props4 = this.props,
          _this$props4$showArro = _this$props4.showArrow,
          showArrow = _this$props4$showArro === void 0 ? !multiple : _this$props4$showArro,
          loading = _this$props4.loading,
          inputIcon = _this$props4.inputIcon,
          prefixCls = _this$props4.prefixCls;

      if (!showArrow && !loading) {
        return null;
      } // if loading  have loading icon


      var defaultIcon = loading ? createElement("i", {
        className: "".concat(prefixCls, "-arrow-loading")
      }) : createElement("i", {
        className: "".concat(prefixCls, "-arrow-icon")
      });
      return createElement("span", _extends$2({
        key: "arrow",
        className: "".concat(prefixCls, "-arrow"),
        style: UNSELECTABLE_STYLE
      }, UNSELECTABLE_ATTRIBUTE, {
        onClick: this.onArrowClick
      }), inputIcon || defaultIcon);
    }
  }, {
    key: "renderClear",
    value: function renderClear() {
      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          allowClear = _this$props5.allowClear,
          clearIcon = _this$props5.clearIcon;
      var inputValue = this.state.inputValue;
      var value = this.state.value;
      var clear = createElement("span", _extends$2({
        key: "clear",
        className: "".concat(prefixCls, "-selection__clear"),
        onMouseDown: preventDefaultEvent,
        style: UNSELECTABLE_STYLE
      }, UNSELECTABLE_ATTRIBUTE, {
        onClick: this.onClearSelection
      }), clearIcon || createElement("i", {
        className: "".concat(prefixCls, "-selection__clear-icon")
      }, "\xD7"));

      if (!allowClear) {
        return null;
      }

      if (isCombobox(this.props)) {
        if (inputValue) {
          return clear;
        }

        return null;
      }

      if (inputValue || value.length) {
        return clear;
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _rootCls;

      var props = this.props;
      var multiple = isMultipleOrTags(props); // Default set showArrow to true if not set (not set directly in defaultProps to handle multiple case)

      var _props$showArrow = props.showArrow,
          showArrow = _props$showArrow === void 0 ? true : _props$showArrow;
      var state = this.state;
      var className = props.className,
          disabled = props.disabled,
          prefixCls = props.prefixCls,
          loading = props.loading;
      var ctrlNode = this.renderTopControlNode();
      var _this$state2 = this.state,
          open = _this$state2.open,
          ariaId = _this$state2.ariaId;

      if (open) {
        var filterOptions = this.renderFilterOptions();
        this._empty = filterOptions.empty;
        this._options = filterOptions.options;
      }

      var realOpen = this.getRealOpenState();
      var empty = this._empty;
      var options = this._options || [];
      var dataOrAriaAttributeProps = {};
      Object.keys(props).forEach(function (key) {
        if (Object.prototype.hasOwnProperty.call(props, key) && (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role')) {
          dataOrAriaAttributeProps[key] = props[key];
        }
      }); // for (const key in props) {
      //   if (
      //     Object.prototype.hasOwnProperty.call(props, key) &&
      //     (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role')
      //   ) {
      //     dataOrAriaAttributeProps[key] = props[key];
      //   }
      // }

      var extraSelectionProps = _extends$2({}, dataOrAriaAttributeProps);

      if (!isMultipleOrTagsOrCombobox(props)) {
        extraSelectionProps = _extends$2({}, extraSelectionProps, {
          onKeyDown: this.onKeyDown,
          tabIndex: props.disabled ? -1 : props.tabIndex
        });
      }

      var rootCls = (_rootCls = {}, _defineProperty$1(_rootCls, className, !!className), _defineProperty$1(_rootCls, prefixCls, 1), _defineProperty$1(_rootCls, "".concat(prefixCls, "-open"), open), _defineProperty$1(_rootCls, "".concat(prefixCls, "-focused"), open || !!this._focused), _defineProperty$1(_rootCls, "".concat(prefixCls, "-combobox"), isCombobox(props)), _defineProperty$1(_rootCls, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$1(_rootCls, "".concat(prefixCls, "-enabled"), !disabled), _defineProperty$1(_rootCls, "".concat(prefixCls, "-allow-clear"), !!props.allowClear), _defineProperty$1(_rootCls, "".concat(prefixCls, "-no-arrow"), !showArrow), _defineProperty$1(_rootCls, "".concat(prefixCls, "-loading"), !!loading), _rootCls);
      return createElement(SelectTrigger, {
        onPopupFocus: this.onPopupFocus,
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave,
        dropdownAlign: props.dropdownAlign,
        dropdownClassName: props.dropdownClassName,
        dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        transitionName: props.transitionName,
        animation: props.animation,
        prefixCls: props.prefixCls,
        dropdownStyle: props.dropdownStyle,
        combobox: props.combobox,
        showSearch: props.showSearch,
        options: options,
        empty: empty,
        multiple: multiple,
        disabled: disabled,
        visible: realOpen,
        inputValue: state.inputValue,
        value: state.value,
        backfillValue: state.backfillValue,
        firstActiveValue: props.firstActiveValue,
        onDropdownVisibleChange: this.onDropdownVisibleChange,
        getPopupContainer: props.getPopupContainer,
        onMenuSelect: this.onMenuSelect,
        onMenuDeselect: this.onMenuDeselect,
        onPopupScroll: props.onPopupScroll,
        showAction: props.showAction,
        ref: this.saveSelectTriggerRef,
        menuItemSelectedIcon: props.menuItemSelectedIcon,
        dropdownRender: props.dropdownRender,
        ariaId: ariaId
      }, createElement("div", {
        id: props.id,
        style: props.style,
        ref: this.saveRootRef,
        onBlur: this.onOuterBlur,
        onFocus: this.onOuterFocus,
        className: require$$2$1(rootCls),
        onMouseDown: this.markMouseDown,
        onMouseUp: this.markMouseLeave,
        onMouseOut: this.markMouseLeave
      }, createElement("div", _extends$2({
        ref: this.saveSelectionRef,
        key: "selection",
        className: "".concat(prefixCls, "-selection\n            ").concat(prefixCls, "-selection--").concat(multiple ? 'multiple' : 'single'),
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-haspopup": "true",
        "aria-controls": ariaId,
        "aria-expanded": realOpen
      }, extraSelectionProps), ctrlNode, this.renderClear(), this.renderArrow(!!multiple))));
    }
  }]);

  return Select;
}(Component);

Select.propTypes = SelectPropTypes;
Select.defaultProps = {
  prefixCls: 'rc-select',
  defaultOpen: false,
  labelInValue: false,
  defaultActiveFirstOption: true,
  showSearch: true,
  allowClear: false,
  placeholder: '',
  onChange: noop$1,
  onFocus: noop$1,
  onBlur: noop$1,
  onSelect: noop$1,
  onSearch: noop$1,
  onDeselect: noop$1,
  onInputKeyDown: noop$1,
  dropdownMatchSelectWidth: true,
  dropdownStyle: {},
  dropdownMenuStyle: {},
  optionFilterProp: 'value',
  optionLabelProp: 'value',
  notFoundContent: 'Not Found',
  backfill: false,
  showAction: ['click'],
  tokenSeparators: [],
  autoClearSearchValue: true,
  tabIndex: 0,
  dropdownRender: function dropdownRender(menu) {
    return menu;
  }
};

Select.getDerivedStateFromProps = function (nextProps, prevState) {
  var optionsInfo = prevState.skipBuildOptionsInfo ? prevState.optionsInfo : Select.getOptionsInfoFromProps(nextProps, prevState);
  var newState = {
    optionsInfo: optionsInfo,
    skipBuildOptionsInfo: false
  };

  if ('open' in nextProps) {
    newState.open = nextProps.open;
  }

  if ('value' in nextProps) {
    var value = Select.getValueFromProps(nextProps);
    newState.value = value;

    if (nextProps.combobox) {
      newState.inputValue = Select.getInputValueForCombobox(nextProps, optionsInfo);
    }
  }

  return newState;
};

Select.getOptionsFromChildren = function (children) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  Children.forEach(children, function (child) {
    if (!child) {
      return;
    }

    var type = child.type;

    if (type.isSelectOptGroup) {
      Select.getOptionsFromChildren(child.props.children, options);
    } else {
      options.push(child);
    }
  });
  return options;
};

Select.getInputValueForCombobox = function (props, optionsInfo, useDefaultValue) {
  var value = [];

  if ('value' in props && !useDefaultValue) {
    value = toArray$1(props.value);
  }

  if ('defaultValue' in props && useDefaultValue) {
    value = toArray$1(props.defaultValue);
  }

  if (value.length) {
    value = value[0];
  } else {
    return '';
  }

  var label = value;

  if (props.labelInValue) {
    label = value.label;
  } else if (optionsInfo[getMapKey(value)]) {
    label = optionsInfo[getMapKey(value)].label;
  }

  if (label === undefined) {
    label = '';
  }

  return label;
};

Select.getLabelFromOption = function (props, option) {
  return getPropValue(option, props.optionLabelProp);
};

Select.getOptionsInfoFromProps = function (props, preState) {
  var options = Select.getOptionsFromChildren(props.children);
  var optionsInfo = {};
  options.forEach(function (option) {
    var singleValue = getValuePropValue(option);
    optionsInfo[getMapKey(singleValue)] = {
      option: option,
      value: singleValue,
      label: Select.getLabelFromOption(props, option),
      title: option.props.title,
      disabled: option.props.disabled
    };
  });

  if (preState) {
    // keep option info in pre state value.
    var oldOptionsInfo = preState.optionsInfo;
    var value = preState.value;

    if (value) {
      value.forEach(function (v) {
        var key = getMapKey(v);

        if (!optionsInfo[key] && oldOptionsInfo[key] !== undefined) {
          optionsInfo[key] = oldOptionsInfo[key];
        }
      });
    }
  }

  return optionsInfo;
};

Select.getValueFromProps = function (props, useDefaultValue) {
  var value = [];

  if ('value' in props && !useDefaultValue) {
    value = toArray$1(props.value);
  }

  if ('defaultValue' in props && useDefaultValue) {
    value = toArray$1(props.defaultValue);
  }

  if (props.labelInValue) {
    value = value.map(function (v) {
      return v.key;
    });
  }

  return value;
};

Select.displayName = 'Select';
polyfill(Select);

Select.Option = Option;
Select.OptGroup = OptGroup;

var select = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(React__default);

var PropTypes = _interopRequireWildcard(PropTypes__default);

var _rcSelect = _interopRequireWildcard(Select);

var _classnames = _interopRequireDefault(require$$2$1);



var _omit = _interopRequireDefault(require$$3$1);

var _warning = _interopRequireDefault(require$$6);

var _icon = _interopRequireDefault(require$$4);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var SelectSizes = (0, _type.tuple)('default', 'large', 'small');
var SelectPropTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(SelectSizes),
  notFoundContent: PropTypes.any,
  showSearch: PropTypes.bool,
  optionLabelProp: PropTypes.string,
  transitionName: PropTypes.string,
  choiceTransitionName: PropTypes.string,
  id: PropTypes.string
}; // => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };

var Select$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _this.saveSelect = function (node) {
      _this.rcSelect = node;
    };

    _this.renderSelect = function (_ref) {
      var _classNames;

      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          renderEmpty = _ref.renderEmpty;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          _a$className = _a.className,
          className = _a$className === void 0 ? '' : _a$className,
          size = _a.size,
          mode = _a.mode,
          getPopupContainer = _a.getPopupContainer,
          removeIcon = _a.removeIcon,
          clearIcon = _a.clearIcon,
          menuItemSelectedIcon = _a.menuItemSelectedIcon,
          showArrow = _a.showArrow,
          restProps = __rest(_a, ["prefixCls", "className", "size", "mode", "getPopupContainer", "removeIcon", "clearIcon", "menuItemSelectedIcon", "showArrow"]);

      var rest = (0, _omit["default"])(restProps, ['inputIcon']);
      var prefixCls = getPrefixCls('select', customizePrefixCls);
      var cls = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-show-arrow"), showArrow), _classNames), className);
      var optionLabelProp = _this.props.optionLabelProp;

      if (_this.isCombobox()) {
        // children 带 dom 结构时，无法填入输入框
        optionLabelProp = optionLabelProp || 'value';
      }

      var modeConfig = {
        multiple: mode === 'multiple',
        tags: mode === 'tags',
        combobox: _this.isCombobox()
      };
      var finalRemoveIcon = removeIcon && (React.isValidElement(removeIcon) ? React.cloneElement(removeIcon, {
        className: (0, _classnames["default"])(removeIcon.props.className, "".concat(prefixCls, "-remove-icon"))
      }) : removeIcon) || React.createElement(_icon["default"], {
        type: "close",
        className: "".concat(prefixCls, "-remove-icon")
      });
      var finalClearIcon = clearIcon && (React.isValidElement(clearIcon) ? React.cloneElement(clearIcon, {
        className: (0, _classnames["default"])(clearIcon.props.className, "".concat(prefixCls, "-clear-icon"))
      }) : clearIcon) || React.createElement(_icon["default"], {
        type: "close-circle",
        theme: "filled",
        className: "".concat(prefixCls, "-clear-icon")
      });
      var finalMenuItemSelectedIcon = menuItemSelectedIcon && (React.isValidElement(menuItemSelectedIcon) ? React.cloneElement(menuItemSelectedIcon, {
        className: (0, _classnames["default"])(menuItemSelectedIcon.props.className, "".concat(prefixCls, "-selected-icon"))
      }) : menuItemSelectedIcon) || React.createElement(_icon["default"], {
        type: "check",
        className: "".concat(prefixCls, "-selected-icon")
      });
      return React.createElement(_rcSelect["default"], _extends({
        inputIcon: _this.renderSuffixIcon(prefixCls),
        removeIcon: finalRemoveIcon,
        clearIcon: finalClearIcon,
        menuItemSelectedIcon: finalMenuItemSelectedIcon,
        showArrow: showArrow
      }, rest, modeConfig, {
        prefixCls: prefixCls,
        className: cls,
        optionLabelProp: optionLabelProp || 'children',
        notFoundContent: _this.getNotFoundContent(renderEmpty),
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        ref: _this.saveSelect
      }));
    };

    (0, _warning["default"])(props.mode !== 'combobox', 'Select', 'The combobox mode is deprecated, ' + 'it will be removed in next major version, ' + 'please use AutoComplete instead');
    return _this;
  }

  _createClass(Select, [{
    key: "focus",
    value: function focus() {
      this.rcSelect.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcSelect.blur();
    }
  }, {
    key: "getNotFoundContent",
    value: function getNotFoundContent(renderEmpty) {
      var notFoundContent = this.props.notFoundContent;

      if (notFoundContent !== undefined) {
        return notFoundContent;
      }

      if (this.isCombobox()) {
        return null;
      }

      return renderEmpty('Select'); // if (this.isCombobox()) {
      //   // AutoComplete don't have notFoundContent defaultly
      //   return notFoundContent === undefined ? null : notFoundContent;
      // }
      // return renderEmpty('Select');
      // // return notFoundContent === undefined ? locale.notFoundContent : notFoundContent;
    }
  }, {
    key: "isCombobox",
    value: function isCombobox() {
      var mode = this.props.mode;
      return mode === 'combobox' || mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE;
    }
  }, {
    key: "renderSuffixIcon",
    value: function renderSuffixIcon(prefixCls) {
      var _this$props = this.props,
          loading = _this$props.loading,
          suffixIcon = _this$props.suffixIcon;

      if (suffixIcon) {
        return React.isValidElement(suffixIcon) ? React.cloneElement(suffixIcon, {
          className: (0, _classnames["default"])(suffixIcon.props.className, "".concat(prefixCls, "-arrow-icon"))
        }) : suffixIcon;
      }

      if (loading) {
        return React.createElement(_icon["default"], {
          type: "loading"
        });
      }

      return React.createElement(_icon["default"], {
        type: "down",
        className: "".concat(prefixCls, "-arrow-icon")
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderSelect);
    }
  }]);

  return Select;
}(React.Component);

exports["default"] = Select$1;
Select$1.Option = _rcSelect.Option;
Select$1.OptGroup = _rcSelect.OptGroup;
Select$1.SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
Select$1.defaultProps = {
  showSearch: false,
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom'
};
Select$1.propTypes = SelectPropTypes;
});

var _Select = unwrapExports(select);

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 8px;\n  width: 200px !important;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var SSelect = styled(_Select)(_templateObject());
/**
 * Lowercases a string
 */

var toLower = _fp.toLower;
/**
 * Gets the known option as a searchable string
 */

var getKnownOption = _fp.pipe(_fp.get('props.children'), toLower);
/**
 * Determines if a string includes another
 * @param {String} option
 * @param {String} value
 */


var includes = function includes() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return option.includes(value);
};
/**
 * Maps fields into the correct structure
 */


var getFields = _fp.pipe(_fp.get('fields'), _fp.entries, _fp.map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      fieldName = _ref2[0],
      obj = _ref2[1];

  return _objectSpread$1({}, obj, {
    fieldName: fieldName
  });
}));

var CreateFilterButton = withTheme(function (props) {
  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var fields = getFields(props, 'fields');
  /**
   * onChange handler
   * @param {String} value
   */

  var onChange = function onChange(fieldName) {
    props.onSelect(_objectSpread({}, get(props, "fields.".concat(fieldName)), {
      fieldName: fieldName
    }));
    setSearchValue(undefined);
  };
  /**
   * Handles filtering
   * @param {String} input
   * @param {String} option
   */


  var filterOption = function filterOption(input, option) {
    return includes(getKnownOption(option), toLower(input));
  };

  return React__default.createElement(SSelect, {
    showSearch: true,
    value: searchValue,
    placeholder: "Add a New Filter",
    onSearch: setSearchValue,
    onChange: onChange,
    filterOption: filterOption
  }, fields.map(function (field) {
    return React__default.createElement(_Select.Option, {
      key: get(field, 'fieldName'),
      value: get(field, 'fieldName')
    }, get(field, 'label'));
  }));
});
CreateFilterButton.propTypes = {
  onSelect: PropTypes__default.func.isRequired
};
CreateFilterButton.displayName = CreateFilterButton;

export default CreateFilterButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvT3B0R3JvdXAuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL09wdGlvbi5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvUHJvcFR5cGVzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktc3RvcmUvbGliL1Byb3BUeXBlcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLXN0b3JlL2xpYi9Qcm92aWRlci5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLXN0b3JlL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLXN0b3JlL2xpYi9jb25uZWN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktc3RvcmUvbGliL2NyZWF0ZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLXN0b3JlL2xpYi9pbmRleC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL3V0aWwuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9wbGFjZW1lbnRzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvU3ViTWVudS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL0RPTVdyYXAuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9TdWJQb3B1cE1lbnUuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9NZW51LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvTWVudUl0ZW0uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9NZW51SXRlbUdyb3VwLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvRGl2aWRlci5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL3V0aWwuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL0Ryb3Bkb3duTWVudS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvU2VsZWN0VHJpZ2dlci5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvU2VsZWN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9zZWxlY3QvaW5kZXguanMiLCIuLi8uLi8uLi8uLi9zcmMvQWR2YW5jZWRGaWx0ZXJzL2NvbXBvbmVudHMvQ3JlYXRlRmlsdGVyQnV0dG9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxudmFyIE9wdEdyb3VwID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhPcHRHcm91cCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gT3B0R3JvdXAoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9wdEdyb3VwKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoT3B0R3JvdXApLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIE9wdEdyb3VwO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgeyBPcHRHcm91cCBhcyBkZWZhdWx0IH07XG5PcHRHcm91cC5pc1NlbGVjdE9wdEdyb3VwID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBPcHRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE9wdGlvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gT3B0aW9uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPcHRpb24pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihPcHRpb24pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIE9wdGlvbjtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgT3B0aW9uIGFzIGRlZmF1bHQgfTtcbk9wdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbn07XG5PcHRpb24uaXNTZWxlY3RPcHRpb24gPSB0cnVlOyIsImZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XG5cbmltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZnVuY3Rpb24gcHJvcHNWYWx1ZVR5cGUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgcHJvcHMgPSBhcmdzWzBdLFxuICAgICAgcHJvcE5hbWUgPSBhcmdzWzFdLFxuICAgICAgY29tcG9uZW50TmFtZSA9IGFyZ3NbMl0sXG4gICAgICByZXN0ID0gYXJncy5zbGljZSgzKTtcbiAgdmFyIGJhc2ljVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKTtcbiAgdmFyIGxhYmVsSW5WYWx1ZVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBrZXk6IGJhc2ljVHlwZS5pc1JlcXVpcmVkLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZVxuICB9KTtcblxuICBpZiAocHJvcHMubGFiZWxJblZhbHVlKSB7XG4gICAgdmFyIHZhbGlkYXRlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YobGFiZWxJblZhbHVlU2hhcGUpLCBsYWJlbEluVmFsdWVTaGFwZV0pO1xuICAgIHZhciBlcnJvciA9IHZhbGlkYXRlLmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShyZXN0KSkpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIi5jb25jYXQocHJvcE5hbWUsIFwiYCBzdXBwbGllZCB0byBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAsIFwiKSArIFwid2hlbiB5b3Ugc2V0IGBsYWJlbEluVmFsdWVgIHRvIGB0cnVlYCwgYFwiLmNvbmNhdChwcm9wTmFtZSwgXCJgIHNob3VsZCBpbiBcIikgKyBcInNoYXBlIG9mIGB7IGtleTogc3RyaW5nIHwgbnVtYmVyLCBsYWJlbD86IFJlYWN0Tm9kZSB9YC5cIik7XG4gICAgfVxuICB9IGVsc2UgaWYgKChwcm9wcy5tb2RlID09PSAnbXVsdGlwbGUnIHx8IHByb3BzLm1vZGUgPT09ICd0YWdzJyB8fCBwcm9wcy5tdWx0aXBsZSB8fCBwcm9wcy50YWdzKSAmJiBwcm9wc1twcm9wTmFtZV0gPT09ICcnKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgcHJvcCBgXCIuY29uY2F0KHByb3BOYW1lLCBcImAgb2YgdHlwZSBgc3RyaW5nYCBzdXBwbGllZCB0byBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAsIFwiKSArIFwiZXhwZWN0ZWQgYGFycmF5YCB3aGVuIGBtdWx0aXBsZWAgb3IgYHRhZ3NgIGlzIGB0cnVlYC5cIik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF92YWxpZGF0ZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKGJhc2ljVHlwZSksIGJhc2ljVHlwZV0pO1xuXG4gICAgcmV0dXJuIF92YWxpZGF0ZS5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkocmVzdCkpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgU2VsZWN0UHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICBmaWx0ZXJPcHRpb246IFByb3BUeXBlcy5hbnksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBzaG93U2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBhbGxvd0NsZWFyOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0Fycm93OiBQcm9wVHlwZXMuYm9vbCxcbiAgdGFnczogUHJvcFR5cGVzLmJvb2wsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3B0aW9uTGFiZWxQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcHRpb25GaWx0ZXJQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbmltYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNob2ljZVRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Qb3B1cFNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSW5wdXRLZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5hbnksXG4gIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBsYWJlbEluVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFsdWU6IHByb3BzVmFsdWVUeXBlLFxuICBkZWZhdWx0VmFsdWU6IHByb3BzVmFsdWVUeXBlLFxuICBkcm9wZG93blN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBtYXhUYWdUZXh0TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhUYWdDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWF4VGFnUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuICB0b2tlblNlcGFyYXRvcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBnZXRJbnB1dEVsZW1lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBzaG93QWN0aW9uOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgY2xlYXJJY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgaW5wdXRJY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgcmVtb3ZlSWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG1lbnVJdGVtU2VsZWN0ZWRJY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgZHJvcGRvd25SZW5kZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuZXhwb3J0IGRlZmF1bHQgU2VsZWN0UHJvcFR5cGVzOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc3RvcmVTaGFwZSA9IHVuZGVmaW5lZDtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdG9yZVNoYXBlID0gZXhwb3J0cy5zdG9yZVNoYXBlID0gX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gIHN1YnNjcmliZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldFN0YXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0U3RhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkXG59KTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQcm92aWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUHJvdmlkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb3ZpZGVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHJvdmlkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQcm92aWRlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFByb3ZpZGVyLCBbe1xuICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1pbmlTdG9yZTogdGhpcy5wcm9wcy5zdG9yZVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByb3ZpZGVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICBzdG9yZTogX1Byb3BUeXBlcy5zdG9yZVNoYXBlLmlzUmVxdWlyZWRcbn07XG5Qcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgbWluaVN0b3JlOiBfUHJvcFR5cGVzLnN0b3JlU2hhcGUuaXNSZXF1aXJlZFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFByb3ZpZGVyOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gICAgY29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBjYWxsZWU6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZiAmJiBnZXRQcm90b3R5cGVPZihPYmplY3QpO1xuXG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG5cbiAgICAgICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmICghUkVBQ1RfU1RBVElDU1trZXldICYmICFLTk9XTl9TVEFUSUNTW2tleV0gJiYgKCFibGFja2xpc3QgfHwgIWJsYWNrbGlzdFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgICAgICAgICB0cnkgeyAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjb25uZWN0O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfc2hhbGxvd2VxdWFsID0gcmVxdWlyZSgnc2hhbGxvd2VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd2VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dlcXVhbCk7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MgPSByZXF1aXJlKCdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycpO1xuXG52YXIgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hvaXN0Tm9uUmVhY3RTdGF0aWNzKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKCdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCcpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICByZXR1cm4gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG59XG5cbmZ1bmN0aW9uIGlzU3RhdGVsZXNzKENvbXBvbmVudCkge1xuICByZXR1cm4gIUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyO1xufVxuXG52YXIgZGVmYXVsdE1hcFN0YXRlVG9Qcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHMoKSB7XG4gIHJldHVybiB7fTtcbn07XG5cbmZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSB7XG4gIHZhciBzaG91bGRTdWJzY3JpYmUgPSAhIW1hcFN0YXRlVG9Qcm9wcztcbiAgdmFyIGZpbm5hbE1hcFN0YXRlVG9Qcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyB8fCBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzO1xuXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwV2l0aENvbm5lY3QoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHZhciBDb25uZWN0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhDb25uZWN0LCBfQ29tcG9uZW50KTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKENvbm5lY3QsIG51bGwsIFt7XG4gICAgICAgIGtleTogJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICAgIC8vIHVzaW5nIG93blByb3BzXG4gICAgICAgICAgaWYgKG1hcFN0YXRlVG9Qcm9wcyAmJiBtYXBTdGF0ZVRvUHJvcHMubGVuZ3RoID09PSAyICYmIHByb3BzICE9PSBwcmV2U3RhdGUucHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHN1YnNjcmliZWQ6IGZpbm5hbE1hcFN0YXRlVG9Qcm9wcyhwcmV2U3RhdGUuc3RvcmUuZ2V0U3RhdGUoKSwgcHJvcHMpLFxuICAgICAgICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IHByb3BzOiBwcm9wcyB9O1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIGZ1bmN0aW9uIENvbm5lY3QocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbm5lY3QpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb25uZWN0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29ubmVjdCkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFfdGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbmV4dFN0YXRlID0gZmlubmFsTWFwU3RhdGVUb1Byb3BzKF90aGlzLnN0b3JlLmdldFN0YXRlKCksIF90aGlzLnByb3BzKTtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHN1YnNjcmliZWQ6IG5leHRTdGF0ZSB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5zdG9yZSA9IGNvbnRleHQubWluaVN0b3JlO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBzdWJzY3JpYmVkOiBmaW5uYWxNYXBTdGF0ZVRvUHJvcHMoX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKSwgcHJvcHMpLFxuICAgICAgICAgIHN0b3JlOiBfdGhpcy5zdG9yZSxcbiAgICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoQ29ubmVjdCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgdGhpcy50cnlTdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICB0aGlzLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICAgIHJldHVybiAhKDAsIF9zaGFsbG93ZXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgISgwLCBfc2hhbGxvd2VxdWFsMi5kZWZhdWx0KSh0aGlzLnN0YXRlLnN1YnNjcmliZWQsIG5leHRTdGF0ZS5zdWJzY3JpYmVkKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICd0cnlTdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdHJ5U3Vic2NyaWJlKCkge1xuICAgICAgICAgIGlmIChzaG91bGRTdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLnN0b3JlLnN1YnNjcmliZSh0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICd0cnlVbnN1YnNjcmliZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICAgICAgICBpZiAodGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFdyYXBwZWRJbnN0YW5jZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRXcmFwcGVkSW5zdGFuY2UoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMud3JhcHBlZEluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZS5zdWJzY3JpYmVkLCB7XG4gICAgICAgICAgICBzdG9yZTogdGhpcy5zdG9yZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFpc1N0YXRlbGVzcyhXcmFwcGVkQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIud3JhcHBlZEluc3RhbmNlID0gYztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gQ29ubmVjdDtcbiAgICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9ICdDb25uZWN0KCcgKyBnZXREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KSArICcpJztcbiAgICBDb25uZWN0LmNvbnRleHRUeXBlcyA9IHtcbiAgICAgIG1pbmlTdG9yZTogX1Byb3BUeXBlcy5zdG9yZVNoYXBlLmlzUmVxdWlyZWRcbiAgICB9O1xuXG5cbiAgICAoMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoQ29ubmVjdCk7XG5cbiAgICByZXR1cm4gKDAsIF9ob2lzdE5vblJlYWN0U3RhdGljczIuZGVmYXVsdCkoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZTtcbmZ1bmN0aW9uIGNyZWF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICB2YXIgbGlzdGVuZXJzID0gW107XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUocGFydGlhbCkge1xuICAgIHN0YXRlID0gX2V4dGVuZHMoe30sIHN0YXRlLCBwYXJ0aWFsKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZVxuICB9O1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlID0gZXhwb3J0cy5jb25uZWN0ID0gZXhwb3J0cy5Qcm92aWRlciA9IHVuZGVmaW5lZDtcblxudmFyIF9Qcm92aWRlcjIgPSByZXF1aXJlKCcuL1Byb3ZpZGVyJyk7XG5cbnZhciBfUHJvdmlkZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvdmlkZXIyKTtcblxudmFyIF9jb25uZWN0MiA9IHJlcXVpcmUoJy4vY29ubmVjdCcpO1xuXG52YXIgX2Nvbm5lY3QzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29ubmVjdDIpO1xuXG52YXIgX2NyZWF0ZTIgPSByZXF1aXJlKCcuL2NyZWF0ZScpO1xuXG52YXIgX2NyZWF0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5Qcm92aWRlciA9IF9Qcm92aWRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuY29ubmVjdCA9IF9jb25uZWN0My5kZWZhdWx0O1xuZXhwb3J0cy5jcmVhdGUgPSBfY3JlYXRlMy5kZWZhdWx0OyIsIi8qKlxuICogU2FmZSBjaGFpbmVkIGZ1bmN0aW9uXG4gKlxuICogV2lsbCBvbmx5IGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBpZiBuZWVkZWQsXG4gKiBvdGhlcndpc2Ugd2lsbCBwYXNzIGJhY2sgZXhpc3RpbmcgZnVuY3Rpb25zIG9yIG51bGwuXG4gKlxuICogQHJldHVybnMge2Z1bmN0aW9ufG51bGx9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbigpIHtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBhcmdzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcmdzW2ldICYmIGFyZ3NbaV0uYXBwbHkpIHtcbiAgICAgICAgYXJnc1tpXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIGlzTW9iaWxlID0gcmVxdWlyZSgnaXNtb2JpbGVqcycpO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlGcm9tQ2hpbGRyZW5JbmRleChjaGlsZCwgbWVudUV2ZW50S2V5LCBpbmRleCkge1xuICB2YXIgcHJlZml4ID0gbWVudUV2ZW50S2V5IHx8ICcnO1xuICByZXR1cm4gY2hpbGQua2V5IHx8IHByZWZpeCArICdpdGVtXycgKyBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVJZEZyb21TdWJNZW51RXZlbnRLZXkoZXZlbnRLZXkpIHtcbiAgcmV0dXJuIGV2ZW50S2V5ICsgJy1tZW51LSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29wTWVudUl0ZW0oY2hpbGRyZW4sIGNiKSB7XG4gIHZhciBpbmRleCA9IC0xO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIGluZGV4Kys7XG4gICAgaWYgKGMgJiYgYy50eXBlICYmIGMudHlwZS5pc01lbnVJdGVtR3JvdXApIHtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goYy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGMyKSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIGNiKGMyLCBpbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2IoYywgaW5kZXgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29wTWVudUl0ZW1SZWN1cnNpdmVseShjaGlsZHJlbiwga2V5cywgcmV0KSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNoaWxkcmVuIHx8IHJldC5maW5kKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgaWYgKGMpIHtcbiAgICAgIHZhciBjb25zdHJ1Y3QgPSBjLnR5cGU7XG4gICAgICBpZiAoIWNvbnN0cnVjdCB8fCAhKGNvbnN0cnVjdC5pc1N1Yk1lbnUgfHwgY29uc3RydWN0LmlzTWVudUl0ZW0gfHwgY29uc3RydWN0LmlzTWVudUl0ZW1Hcm91cCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleXMuaW5kZXhPZihjLmtleSkgIT09IC0xKSB7XG4gICAgICAgIHJldC5maW5kID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoYy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgICBsb29wTWVudUl0ZW1SZWN1cnNpdmVseShjLnByb3BzLmNoaWxkcmVuLCBrZXlzLCByZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB2YXIgbWVudUFsbFByb3BzID0gWydkZWZhdWx0U2VsZWN0ZWRLZXlzJywgJ3NlbGVjdGVkS2V5cycsICdkZWZhdWx0T3BlbktleXMnLCAnb3BlbktleXMnLCAnbW9kZScsICdnZXRQb3B1cENvbnRhaW5lcicsICdvblNlbGVjdCcsICdvbkRlc2VsZWN0JywgJ29uRGVzdHJveScsICdvcGVuVHJhbnNpdGlvbk5hbWUnLCAnb3BlbkFuaW1hdGlvbicsICdzdWJNZW51T3BlbkRlbGF5JywgJ3N1Yk1lbnVDbG9zZURlbGF5JywgJ2ZvcmNlU3ViTWVudVJlbmRlcicsICd0cmlnZ2VyU3ViTWVudUFjdGlvbicsICdsZXZlbCcsICdzZWxlY3RhYmxlJywgJ211bHRpcGxlJywgJ29uT3BlbkNoYW5nZScsICd2aXNpYmxlJywgJ2ZvY3VzYWJsZScsICdkZWZhdWx0QWN0aXZlRmlyc3QnLCAncHJlZml4Q2xzJywgJ2lubGluZUluZGVudCcsICdwYXJlbnRNZW51JywgJ3RpdGxlJywgJ3Jvb3RQcmVmaXhDbHMnLCAnZXZlbnRLZXknLCAnYWN0aXZlJywgJ29uSXRlbUhvdmVyJywgJ29uVGl0bGVNb3VzZUVudGVyJywgJ29uVGl0bGVNb3VzZUxlYXZlJywgJ29uVGl0bGVDbGljaycsICdwb3B1cEFsaWduJywgJ3BvcHVwT2Zmc2V0JywgJ2lzT3BlbicsICdyZW5kZXJNZW51SXRlbScsICdtYW51YWxSZWYnLCAnc3ViTWVudUtleScsICdkaXNhYmxlZCcsICdpbmRleCcsICdpc1NlbGVjdGVkJywgJ3N0b3JlJywgJ2FjdGl2ZUtleScsICdidWlsdGluUGxhY2VtZW50cycsICdvdmVyZmxvd2VkSW5kaWNhdG9yJyxcblxuLy8gdGhlIGZvbGxvd2luZyBrZXlzIGZvdW5kIG5lZWQgdG8gYmUgcmVtb3ZlZCBmcm9tIHRlc3QgcmVncmVzc2lvblxuJ2F0dHJpYnV0ZScsICd2YWx1ZScsICdwb3B1cENsYXNzTmFtZScsICdpbmxpbmVDb2xsYXBzZWQnLCAnbWVudScsICd0aGVtZScsICdpdGVtSWNvbicsICdleHBhbmRJY29uJ107XG5cbi8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTQwMDdcbi8vIHJlZjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MzYwODg5XG4vLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgcmV0dXJuIHRoZSBmdWxsIHByZWNpc2lvbiB2YWx1ZSwgd2hpY2ggaXNcbi8vIG5vdCB0aGUgc2FtZSBiZWhhdmlvciBhcyBvbiBjaHJvbWUuIFNldCB0aGUgcHJlY2lzaW9uIHRvIDYgdG9cbi8vIHVuaWZ5IHRoZWlyIGJlaGF2aW9yXG5leHBvcnQgdmFyIGdldFdpZHRoID0gZnVuY3Rpb24gZ2V0V2lkdGgoZWxlbSkge1xuICB2YXIgd2lkdGggPSBlbGVtICYmIHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyAmJiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICBpZiAod2lkdGgpIHtcbiAgICB3aWR0aCA9ICt3aWR0aC50b0ZpeGVkKDYpO1xuICB9XG4gIHJldHVybiB3aWR0aCB8fCAwO1xufTtcblxuZXhwb3J0IHZhciBzZXRTdHlsZSA9IGZ1bmN0aW9uIHNldFN0eWxlKGVsZW0sIHN0eWxlUHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChlbGVtICYmIHR5cGVvZiBlbGVtLnN0eWxlID09PSAnb2JqZWN0Jykge1xuICAgIGVsZW0uc3R5bGVbc3R5bGVQcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgfVxufTtcblxuZXhwb3J0IHZhciBpc01vYmlsZURldmljZSA9IGZ1bmN0aW9uIGlzTW9iaWxlRGV2aWNlKCkge1xuICByZXR1cm4gaXNNb2JpbGUuYW55O1xufTsiLCJ2YXIgYXV0b0FkanVzdE92ZXJmbG93ID0ge1xuICBhZGp1c3RYOiAxLFxuICBhZGp1c3RZOiAxXG59O1xuXG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSB7XG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC03XVxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA3XVxuICB9LFxuICBsZWZ0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF1cbiAgfSxcbiAgcmlnaHRUb3A6IHtcbiAgICBwb2ludHM6IFsndGwnLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYWNlbWVudHM7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAncmMtdHJpZ2dlcic7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICdyYy11dGlsL2VzL0tleUNvZGUnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnbWluaS1zdG9yZSc7XG5pbXBvcnQgU3ViUG9wdXBNZW51IGZyb20gJy4vU3ViUG9wdXBNZW51JztcbmltcG9ydCBwbGFjZW1lbnRzIGZyb20gJy4vcGxhY2VtZW50cyc7XG5pbXBvcnQgQW5pbWF0ZSBmcm9tICdyYy1hbmltYXRlJztcbmltcG9ydCB7IG5vb3AsIGxvb3BNZW51SXRlbVJlY3Vyc2l2ZWx5LCBnZXRNZW51SWRGcm9tU3ViTWVudUV2ZW50S2V5LCBtZW51QWxsUHJvcHMgfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgZ3VpZCA9IDA7XG5cbnZhciBwb3B1cFBsYWNlbWVudE1hcCA9IHtcbiAgaG9yaXpvbnRhbDogJ2JvdHRvbUxlZnQnLFxuICB2ZXJ0aWNhbDogJ3JpZ2h0VG9wJyxcbiAgJ3ZlcnRpY2FsLWxlZnQnOiAncmlnaHRUb3AnLFxuICAndmVydGljYWwtcmlnaHQnOiAnbGVmdFRvcCdcbn07XG5cbnZhciB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3QgPSBmdW5jdGlvbiB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3Qoc3RvcmUsIGV2ZW50S2V5LCBkZWZhdWx0QWN0aXZlRmlyc3QpIHtcbiAgdmFyIF9leHRlbmRzMjtcblxuICB2YXIgbWVudUlkID0gZ2V0TWVudUlkRnJvbVN1Yk1lbnVFdmVudEtleShldmVudEtleSk7XG4gIHZhciBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIHN0b3JlLnNldFN0YXRlKHtcbiAgICBkZWZhdWx0QWN0aXZlRmlyc3Q6IF9leHRlbmRzKHt9LCBzdGF0ZS5kZWZhdWx0QWN0aXZlRmlyc3QsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW21lbnVJZF0gPSBkZWZhdWx0QWN0aXZlRmlyc3QsIF9leHRlbmRzMikpXG4gIH0pO1xufTtcblxuZXhwb3J0IHZhciBTdWJNZW51ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN1Yk1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN1Yk1lbnUocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3ViTWVudSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICB2YXIgc3RvcmUgPSBwcm9wcy5zdG9yZTtcbiAgICB2YXIgZXZlbnRLZXkgPSBwcm9wcy5ldmVudEtleTtcbiAgICB2YXIgZGVmYXVsdEFjdGl2ZUZpcnN0ID0gc3RvcmUuZ2V0U3RhdGUoKS5kZWZhdWx0QWN0aXZlRmlyc3Q7XG5cbiAgICBfdGhpcy5pc1Jvb3RNZW51ID0gZmFsc2U7XG5cbiAgICB2YXIgdmFsdWUgPSBmYWxzZTtcblxuICAgIGlmIChkZWZhdWx0QWN0aXZlRmlyc3QpIHtcbiAgICAgIHZhbHVlID0gZGVmYXVsdEFjdGl2ZUZpcnN0W2V2ZW50S2V5XTtcbiAgICB9XG5cbiAgICB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3Qoc3RvcmUsIGV2ZW50S2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU3ViTWVudS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICB9O1xuXG4gIFN1Yk1lbnUucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBtb2RlID0gX3Byb3BzLm1vZGUsXG4gICAgICAgIHBhcmVudE1lbnUgPSBfcHJvcHMucGFyZW50TWVudSxcbiAgICAgICAgbWFudWFsUmVmID0gX3Byb3BzLm1hbnVhbFJlZjtcblxuICAgIC8vIGludm9rZSBjdXN0b21pemVkIHJlZiB0byBleHBvc2UgY29tcG9uZW50IHRvIG1peGluXG5cbiAgICBpZiAobWFudWFsUmVmKSB7XG4gICAgICBtYW51YWxSZWYodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGUgIT09ICdob3Jpem9udGFsJyB8fCAhcGFyZW50TWVudS5pc1Jvb3RNZW51IHx8ICF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubWluV2lkdGhUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmFkanVzdFdpZHRoKCk7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgU3ViTWVudS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uRGVzdHJveSA9IF9wcm9wczIub25EZXN0cm95LFxuICAgICAgICBldmVudEtleSA9IF9wcm9wczIuZXZlbnRLZXk7XG5cbiAgICBpZiAob25EZXN0cm95KSB7XG4gICAgICBvbkRlc3Ryb3koZXZlbnRLZXkpO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0aGlzLm1pbldpZHRoVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWluV2lkdGhUaW1lb3V0KTtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodGhpcy5tb3VzZWVudGVyVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubW91c2VlbnRlclRpbWVvdXQpO1xuICAgIH1cbiAgfTtcblxuICBTdWJNZW51LnByb3RvdHlwZS5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgYmFzZVByb3BzID0ge1xuICAgICAgbW9kZTogcHJvcHMubW9kZSA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6IHByb3BzLm1vZGUsXG4gICAgICB2aXNpYmxlOiB0aGlzLnByb3BzLmlzT3BlbixcbiAgICAgIGxldmVsOiBwcm9wcy5sZXZlbCArIDEsXG4gICAgICBpbmxpbmVJbmRlbnQ6IHByb3BzLmlubGluZUluZGVudCxcbiAgICAgIGZvY3VzYWJsZTogZmFsc2UsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uU3ViTWVudUNsaWNrLFxuICAgICAgb25TZWxlY3Q6IHRoaXMub25TZWxlY3QsXG4gICAgICBvbkRlc2VsZWN0OiB0aGlzLm9uRGVzZWxlY3QsXG4gICAgICBvbkRlc3Ryb3k6IHRoaXMub25EZXN0cm95LFxuICAgICAgc2VsZWN0ZWRLZXlzOiBwcm9wcy5zZWxlY3RlZEtleXMsXG4gICAgICBldmVudEtleTogcHJvcHMuZXZlbnRLZXkgKyAnLW1lbnUtJyxcbiAgICAgIG9wZW5LZXlzOiBwcm9wcy5vcGVuS2V5cyxcbiAgICAgIG9wZW5UcmFuc2l0aW9uTmFtZTogcHJvcHMub3BlblRyYW5zaXRpb25OYW1lLFxuICAgICAgb3BlbkFuaW1hdGlvbjogcHJvcHMub3BlbkFuaW1hdGlvbixcbiAgICAgIG9uT3BlbkNoYW5nZTogdGhpcy5vbk9wZW5DaGFuZ2UsXG4gICAgICBzdWJNZW51T3BlbkRlbGF5OiBwcm9wcy5zdWJNZW51T3BlbkRlbGF5LFxuICAgICAgcGFyZW50TWVudTogdGhpcyxcbiAgICAgIHN1Yk1lbnVDbG9zZURlbGF5OiBwcm9wcy5zdWJNZW51Q2xvc2VEZWxheSxcbiAgICAgIGZvcmNlU3ViTWVudVJlbmRlcjogcHJvcHMuZm9yY2VTdWJNZW51UmVuZGVyLFxuICAgICAgdHJpZ2dlclN1Yk1lbnVBY3Rpb246IHByb3BzLnRyaWdnZXJTdWJNZW51QWN0aW9uLFxuICAgICAgYnVpbHRpblBsYWNlbWVudHM6IHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzLFxuICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0OiBwcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLmRlZmF1bHRBY3RpdmVGaXJzdFtnZXRNZW51SWRGcm9tU3ViTWVudUV2ZW50S2V5KHByb3BzLmV2ZW50S2V5KV0sXG4gICAgICBtdWx0aXBsZTogcHJvcHMubXVsdGlwbGUsXG4gICAgICBwcmVmaXhDbHM6IHByb3BzLnJvb3RQcmVmaXhDbHMsXG4gICAgICBpZDogdGhpcy5fbWVudUlkLFxuICAgICAgbWFudWFsUmVmOiB0aGlzLnNhdmVNZW51SW5zdGFuY2UsXG4gICAgICBpdGVtSWNvbjogcHJvcHMuaXRlbUljb24sXG4gICAgICBleHBhbmRJY29uOiBwcm9wcy5leHBhbmRJY29uXG4gICAgfTtcblxuICAgIHZhciBoYXZlUmVuZGVyZWQgPSB0aGlzLmhhdmVSZW5kZXJlZDtcbiAgICB0aGlzLmhhdmVSZW5kZXJlZCA9IHRydWU7XG5cbiAgICB0aGlzLmhhdmVPcGVuZWQgPSB0aGlzLmhhdmVPcGVuZWQgfHwgYmFzZVByb3BzLnZpc2libGUgfHwgYmFzZVByb3BzLmZvcmNlU3ViTWVudVJlbmRlcjtcbiAgICAvLyBuZXZlciByZW5kZXJlZCBub3QgcGxhbm5pbmcgdG8sIGRvbid0IHJlbmRlclxuICAgIGlmICghdGhpcy5oYXZlT3BlbmVkKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCk7XG4gICAgfVxuXG4gICAgLy8gZG9uJ3Qgc2hvdyB0cmFuc2l0aW9uIG9uIGZpcnN0IHJlbmRlcmluZyAobm8gYW5pbWF0aW9uIGZvciBvcGVuZWQgbWVudSlcbiAgICAvLyBzaG93IGFwcGVhciB0cmFuc2l0aW9uIGlmIGl0J3Mgbm90IHZpc2libGUgKG5vdCBzdXJlIHdoeSlcbiAgICAvLyBzaG93IGFwcGVhciB0cmFuc2l0aW9uIGlmIGl0J3Mgbm90IGlubGluZSBtb2RlXG4gICAgdmFyIHRyYW5zaXRpb25BcHBlYXIgPSBoYXZlUmVuZGVyZWQgfHwgIWJhc2VQcm9wcy52aXNpYmxlIHx8IGJhc2VQcm9wcy5tb2RlICE9PSAnaW5saW5lJztcblxuICAgIGJhc2VQcm9wcy5jbGFzc05hbWUgPSAnICcgKyBiYXNlUHJvcHMucHJlZml4Q2xzICsgJy1zdWInO1xuICAgIHZhciBhbmltUHJvcHMgPSB7fTtcblxuICAgIGlmIChiYXNlUHJvcHMub3BlblRyYW5zaXRpb25OYW1lKSB7XG4gICAgICBhbmltUHJvcHMudHJhbnNpdGlvbk5hbWUgPSBiYXNlUHJvcHMub3BlblRyYW5zaXRpb25OYW1lO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJhc2VQcm9wcy5vcGVuQW5pbWF0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgYW5pbVByb3BzLmFuaW1hdGlvbiA9IF9leHRlbmRzKHt9LCBiYXNlUHJvcHMub3BlbkFuaW1hdGlvbik7XG4gICAgICBpZiAoIXRyYW5zaXRpb25BcHBlYXIpIHtcbiAgICAgICAgZGVsZXRlIGFuaW1Qcm9wcy5hbmltYXRpb24uYXBwZWFyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgQW5pbWF0ZSxcbiAgICAgIF9leHRlbmRzKHt9LCBhbmltUHJvcHMsIHtcbiAgICAgICAgc2hvd1Byb3A6ICd2aXNpYmxlJyxcbiAgICAgICAgY29tcG9uZW50OiAnJyxcbiAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogdHJhbnNpdGlvbkFwcGVhclxuICAgICAgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBTdWJQb3B1cE1lbnUsXG4gICAgICAgIF9leHRlbmRzKHt9LCBiYXNlUHJvcHMsIHsgaWQ6IHRoaXMuX21lbnVJZCB9KSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIFN1Yk1lbnUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgdmFyIGlzT3BlbiA9IHByb3BzLmlzT3BlbjtcbiAgICB2YXIgcHJlZml4Q2xzID0gdGhpcy5nZXRQcmVmaXhDbHMoKTtcbiAgICB2YXIgaXNJbmxpbmVNb2RlID0gcHJvcHMubW9kZSA9PT0gJ2lubGluZSc7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBwcmVmaXhDbHMgKyAnLScgKyBwcm9wcy5tb2RlLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbcHJvcHMuY2xhc3NOYW1lXSA9ICEhcHJvcHMuY2xhc3NOYW1lLCBfY2xhc3NOYW1lc1t0aGlzLmdldE9wZW5DbGFzc05hbWUoKV0gPSBpc09wZW4sIF9jbGFzc05hbWVzW3RoaXMuZ2V0QWN0aXZlQ2xhc3NOYW1lKCldID0gcHJvcHMuYWN0aXZlIHx8IGlzT3BlbiAmJiAhaXNJbmxpbmVNb2RlLCBfY2xhc3NOYW1lc1t0aGlzLmdldERpc2FibGVkQ2xhc3NOYW1lKCldID0gcHJvcHMuZGlzYWJsZWQsIF9jbGFzc05hbWVzW3RoaXMuZ2V0U2VsZWN0ZWRDbGFzc05hbWUoKV0gPSB0aGlzLmlzQ2hpbGRyZW5TZWxlY3RlZCgpLCBfY2xhc3NOYW1lcykpO1xuXG4gICAgaWYgKCF0aGlzLl9tZW51SWQpIHtcbiAgICAgIGlmIChwcm9wcy5ldmVudEtleSkge1xuICAgICAgICB0aGlzLl9tZW51SWQgPSBwcm9wcy5ldmVudEtleSArICckTWVudSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tZW51SWQgPSAnJF9fJCcgKyArK2d1aWQgKyAnJE1lbnUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtb3VzZUV2ZW50cyA9IHt9O1xuICAgIHZhciB0aXRsZUNsaWNrRXZlbnRzID0ge307XG4gICAgdmFyIHRpdGxlTW91c2VFdmVudHMgPSB7fTtcbiAgICBpZiAoIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICBtb3VzZUV2ZW50cyA9IHtcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLm9uTW91c2VFbnRlclxuICAgICAgfTtcblxuICAgICAgLy8gb25seSB3b3JrcyBpbiB0aXRsZSwgbm90IG91dGVyIGxpXG4gICAgICB0aXRsZUNsaWNrRXZlbnRzID0ge1xuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uVGl0bGVDbGlja1xuICAgICAgfTtcbiAgICAgIHRpdGxlTW91c2VFdmVudHMgPSB7XG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5vblRpdGxlTW91c2VFbnRlcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLm9uVGl0bGVNb3VzZUxlYXZlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIGlmIChpc0lubGluZU1vZGUpIHtcbiAgICAgIHN0eWxlLnBhZGRpbmdMZWZ0ID0gcHJvcHMuaW5saW5lSW5kZW50ICogcHJvcHMubGV2ZWw7XG4gICAgfVxuXG4gICAgdmFyIGFyaWFPd25zID0ge307XG4gICAgLy8gb25seSBzZXQgYXJpYS1vd25zIHdoZW4gbWVudSBpcyBvcGVuXG4gICAgLy8gb3RoZXJ3aXNlIGl0IHdvdWxkIGJlIGFuIGludmFsaWQgYXJpYS1vd25zIHZhbHVlXG4gICAgLy8gc2luY2UgY29ycmVzcG9uZGluZyBub2RlIGNhbm5vdCBiZSBmb3VuZFxuICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgYXJpYU93bnMgPSB7XG4gICAgICAgICdhcmlhLW93bnMnOiB0aGlzLl9tZW51SWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZXhwYW5kIGN1c3RvbSBpY29uIHNob3VsZCBOT1QgYmUgZGlzcGxheWVkIGluIG1lbnUgd2l0aCBob3Jpem9udGFsIG1vZGUuXG4gICAgdmFyIGljb24gPSBudWxsO1xuICAgIGlmIChwcm9wcy5tb2RlICE9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGljb24gPSB0aGlzLnByb3BzLmV4cGFuZEljb247IC8vIFJlYWN0Tm9kZVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmV4cGFuZEljb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWNvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5leHBhbmRJY29uLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0aXRsZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiB0aGlzLnNhdmVTdWJNZW51VGl0bGUsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXRpdGxlJ1xuICAgICAgfSwgdGl0bGVNb3VzZUV2ZW50cywgdGl0bGVDbGlja0V2ZW50cywge1xuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IGlzT3BlblxuICAgICAgfSwgYXJpYU93bnMsIHtcbiAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZScsXG4gICAgICAgIHRpdGxlOiB0eXBlb2YgcHJvcHMudGl0bGUgPT09ICdzdHJpbmcnID8gcHJvcHMudGl0bGUgOiB1bmRlZmluZWRcbiAgICAgIH0pLFxuICAgICAgcHJvcHMudGl0bGUsXG4gICAgICBpY29uIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1hcnJvdycgfSlcbiAgICApO1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgdmFyIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMucGFyZW50TWVudS5pc1Jvb3RNZW51ID8gcHJvcHMucGFyZW50TWVudS5wcm9wcy5nZXRQb3B1cENvbnRhaW5lciA6IGZ1bmN0aW9uICh0cmlnZ2VyTm9kZSkge1xuICAgICAgcmV0dXJuIHRyaWdnZXJOb2RlLnBhcmVudE5vZGU7XG4gICAgfTtcbiAgICB2YXIgcG9wdXBQbGFjZW1lbnQgPSBwb3B1cFBsYWNlbWVudE1hcFtwcm9wcy5tb2RlXTtcbiAgICB2YXIgcG9wdXBBbGlnbiA9IHByb3BzLnBvcHVwT2Zmc2V0ID8geyBvZmZzZXQ6IHByb3BzLnBvcHVwT2Zmc2V0IH0gOiB7fTtcbiAgICB2YXIgcG9wdXBDbGFzc05hbWUgPSBwcm9wcy5tb2RlID09PSAnaW5saW5lJyA/ICcnIDogcHJvcHMucG9wdXBDbGFzc05hbWU7XG4gICAgdmFyIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIHRyaWdnZXJTdWJNZW51QWN0aW9uID0gcHJvcHMudHJpZ2dlclN1Yk1lbnVBY3Rpb24sXG4gICAgICAgIHN1Yk1lbnVPcGVuRGVsYXkgPSBwcm9wcy5zdWJNZW51T3BlbkRlbGF5LFxuICAgICAgICBmb3JjZVN1Yk1lbnVSZW5kZXIgPSBwcm9wcy5mb3JjZVN1Yk1lbnVSZW5kZXIsXG4gICAgICAgIHN1Yk1lbnVDbG9zZURlbGF5ID0gcHJvcHMuc3ViTWVudUNsb3NlRGVsYXksXG4gICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzID0gcHJvcHMuYnVpbHRpblBsYWNlbWVudHM7XG5cbiAgICBtZW51QWxsUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gZGVsZXRlIHByb3BzW2tleV07XG4gICAgfSk7XG4gICAgLy8gU2V0IG9uQ2xpY2sgdG8gbnVsbCwgdG8gaWdub3JlIHByb3BhZ2F0ZWQgb25DbGljayBldmVudFxuICAgIGRlbGV0ZSBwcm9wcy5vbkNsaWNrO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCBtb3VzZUV2ZW50cywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcm9sZTogJ21lbnVpdGVtJ1xuICAgICAgfSksXG4gICAgICBpc0lubGluZU1vZGUgJiYgdGl0bGUsXG4gICAgICBpc0lubGluZU1vZGUgJiYgY2hpbGRyZW4sXG4gICAgICAhaXNJbmxpbmVNb2RlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFRyaWdnZXIsXG4gICAgICAgIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBwb3B1cENsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1wb3B1cCAnICsgcG9wdXBDbGFzc05hbWUsXG4gICAgICAgICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBfZXh0ZW5kcyh7fSwgcGxhY2VtZW50cywgYnVpbHRpblBsYWNlbWVudHMpLFxuICAgICAgICAgIHBvcHVwUGxhY2VtZW50OiBwb3B1cFBsYWNlbWVudCxcbiAgICAgICAgICBwb3B1cFZpc2libGU6IGlzT3BlbixcbiAgICAgICAgICBwb3B1cEFsaWduOiBwb3B1cEFsaWduLFxuICAgICAgICAgIHBvcHVwOiBjaGlsZHJlbixcbiAgICAgICAgICBhY3Rpb246IGRpc2FibGVkID8gW10gOiBbdHJpZ2dlclN1Yk1lbnVBY3Rpb25dLFxuICAgICAgICAgIG1vdXNlRW50ZXJEZWxheTogc3ViTWVudU9wZW5EZWxheSxcbiAgICAgICAgICBtb3VzZUxlYXZlRGVsYXk6IHN1Yk1lbnVDbG9zZURlbGF5LFxuICAgICAgICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiB0aGlzLm9uUG9wdXBWaXNpYmxlQ2hhbmdlLFxuICAgICAgICAgIGZvcmNlUmVuZGVyOiBmb3JjZVN1Yk1lbnVSZW5kZXJcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGVcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBTdWJNZW51O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5TdWJNZW51LnByb3BUeXBlcyA9IHtcbiAgcGFyZW50TWVudTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgc2VsZWN0ZWRLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gIG9wZW5LZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbk9wZW5DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICByb290UHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBldmVudEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLCAvLyBUT0RPOiByZW1vdmVcbiAgb25JdGVtSG92ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIHRyaWdnZXJTdWJNZW51QWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkRlc2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25EZXN0cm95OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25UaXRsZU1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblRpdGxlTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGl0bGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHBvcHVwT2Zmc2V0OiBQcm9wVHlwZXMuYXJyYXksXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIHN0b3JlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBtb2RlOiBQcm9wVHlwZXMub25lT2YoWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJywgJ3ZlcnRpY2FsLWxlZnQnLCAndmVydGljYWwtcmlnaHQnLCAnaW5saW5lJ10pLFxuICBtYW51YWxSZWY6IFByb3BUeXBlcy5mdW5jLFxuICBpdGVtSWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG4gIGV4cGFuZEljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pXG59O1xuU3ViTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uTW91c2VFbnRlcjogbm9vcCxcbiAgb25Nb3VzZUxlYXZlOiBub29wLFxuICBvblRpdGxlTW91c2VFbnRlcjogbm9vcCxcbiAgb25UaXRsZU1vdXNlTGVhdmU6IG5vb3AsXG4gIG9uVGl0bGVDbGljazogbm9vcCxcbiAgbWFudWFsUmVmOiBub29wLFxuICBtb2RlOiAndmVydGljYWwnLFxuICB0aXRsZTogJydcbn07XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgdGhpcy5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgX3RoaXMzLnByb3BzLm9uRGVzdHJveShrZXkpO1xuICB9O1xuXG4gIHRoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgICB2YXIgbWVudSA9IF90aGlzMy5tZW51SW5zdGFuY2U7XG4gICAgdmFyIF9wcm9wczMgPSBfdGhpczMucHJvcHMsXG4gICAgICAgIGlzT3BlbiA9IF9wcm9wczMuaXNPcGVuLFxuICAgICAgICBzdG9yZSA9IF9wcm9wczMuc3RvcmU7XG5cblxuICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLkVOVEVSKSB7XG4gICAgICBfdGhpczMub25UaXRsZUNsaWNrKGUpO1xuICAgICAgdXBkYXRlRGVmYXVsdEFjdGl2ZUZpcnN0KHN0b3JlLCBfdGhpczMucHJvcHMuZXZlbnRLZXksIHRydWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuUklHSFQpIHtcbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgbWVudS5vbktleURvd24oZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczMudHJpZ2dlck9wZW5DaGFuZ2UodHJ1ZSk7XG4gICAgICAgIC8vIG5lZWQgdG8gdXBkYXRlIGN1cnJlbnQgbWVudSdzIGRlZmF1bHRBY3RpdmVGaXJzdCB2YWx1ZVxuICAgICAgICB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3Qoc3RvcmUsIF90aGlzMy5wcm9wcy5ldmVudEtleSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuTEVGVCkge1xuICAgICAgdmFyIGhhbmRsZWQgPSB2b2lkIDA7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIGhhbmRsZWQgPSBtZW51Lm9uS2V5RG93bihlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoIWhhbmRsZWQpIHtcbiAgICAgICAgX3RoaXMzLnRyaWdnZXJPcGVuQ2hhbmdlKGZhbHNlKTtcbiAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFuZGxlZDtcbiAgICB9XG5cbiAgICBpZiAoaXNPcGVuICYmIChrZXlDb2RlID09PSBLZXlDb2RlLlVQIHx8IGtleUNvZGUgPT09IEtleUNvZGUuRE9XTikpIHtcbiAgICAgIHJldHVybiBtZW51Lm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbk9wZW5DaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzMy5wcm9wcy5vbk9wZW5DaGFuZ2UoZSk7XG4gIH07XG5cbiAgdGhpcy5vblBvcHVwVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uICh2aXNpYmxlKSB7XG4gICAgX3RoaXMzLnRyaWdnZXJPcGVuQ2hhbmdlKHZpc2libGUsIHZpc2libGUgPyAnbW91c2VlbnRlcicgOiAnbW91c2VsZWF2ZScpO1xuICB9O1xuXG4gIHRoaXMub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgX3Byb3BzNCA9IF90aGlzMy5wcm9wcyxcbiAgICAgICAga2V5ID0gX3Byb3BzNC5ldmVudEtleSxcbiAgICAgICAgb25Nb3VzZUVudGVyID0gX3Byb3BzNC5vbk1vdXNlRW50ZXIsXG4gICAgICAgIHN0b3JlID0gX3Byb3BzNC5zdG9yZTtcblxuICAgIHVwZGF0ZURlZmF1bHRBY3RpdmVGaXJzdChzdG9yZSwgX3RoaXMzLnByb3BzLmV2ZW50S2V5LCBmYWxzZSk7XG4gICAgb25Nb3VzZUVudGVyKHtcbiAgICAgIGtleToga2V5LFxuICAgICAgZG9tRXZlbnQ6IGVcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIF9wcm9wczUgPSBfdGhpczMucHJvcHMsXG4gICAgICAgIHBhcmVudE1lbnUgPSBfcHJvcHM1LnBhcmVudE1lbnUsXG4gICAgICAgIGV2ZW50S2V5ID0gX3Byb3BzNS5ldmVudEtleSxcbiAgICAgICAgb25Nb3VzZUxlYXZlID0gX3Byb3BzNS5vbk1vdXNlTGVhdmU7XG5cbiAgICBwYXJlbnRNZW51LnN1Yk1lbnVJbnN0YW5jZSA9IF90aGlzMztcbiAgICBvbk1vdXNlTGVhdmUoe1xuICAgICAga2V5OiBldmVudEtleSxcbiAgICAgIGRvbUV2ZW50OiBlXG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5vblRpdGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChkb21FdmVudCkge1xuICAgIHZhciBfcHJvcHM2ID0gX3RoaXMzLnByb3BzLFxuICAgICAgICBrZXkgPSBfcHJvcHM2LmV2ZW50S2V5LFxuICAgICAgICBvbkl0ZW1Ib3ZlciA9IF9wcm9wczYub25JdGVtSG92ZXIsXG4gICAgICAgIG9uVGl0bGVNb3VzZUVudGVyID0gX3Byb3BzNi5vblRpdGxlTW91c2VFbnRlcjtcblxuICAgIG9uSXRlbUhvdmVyKHtcbiAgICAgIGtleToga2V5LFxuICAgICAgaG92ZXI6IHRydWVcbiAgICB9KTtcbiAgICBvblRpdGxlTW91c2VFbnRlcih7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGRvbUV2ZW50OiBkb21FdmVudFxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMub25UaXRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBfcHJvcHM3ID0gX3RoaXMzLnByb3BzLFxuICAgICAgICBwYXJlbnRNZW51ID0gX3Byb3BzNy5wYXJlbnRNZW51LFxuICAgICAgICBldmVudEtleSA9IF9wcm9wczcuZXZlbnRLZXksXG4gICAgICAgIG9uSXRlbUhvdmVyID0gX3Byb3BzNy5vbkl0ZW1Ib3ZlcixcbiAgICAgICAgb25UaXRsZU1vdXNlTGVhdmUgPSBfcHJvcHM3Lm9uVGl0bGVNb3VzZUxlYXZlO1xuXG4gICAgcGFyZW50TWVudS5zdWJNZW51SW5zdGFuY2UgPSBfdGhpczM7XG4gICAgb25JdGVtSG92ZXIoe1xuICAgICAga2V5OiBldmVudEtleSxcbiAgICAgIGhvdmVyOiBmYWxzZVxuICAgIH0pO1xuICAgIG9uVGl0bGVNb3VzZUxlYXZlKHtcbiAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICBkb21FdmVudDogZVxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMub25UaXRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczMucHJvcHM7XG5cbiAgICBwcm9wcy5vblRpdGxlQ2xpY2soe1xuICAgICAga2V5OiBwcm9wcy5ldmVudEtleSxcbiAgICAgIGRvbUV2ZW50OiBlXG4gICAgfSk7XG4gICAgaWYgKHByb3BzLnRyaWdnZXJTdWJNZW51QWN0aW9uID09PSAnaG92ZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF90aGlzMy50cmlnZ2VyT3BlbkNoYW5nZSghcHJvcHMuaXNPcGVuLCAnY2xpY2snKTtcbiAgICB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3QocHJvcHMuc3RvcmUsIF90aGlzMy5wcm9wcy5ldmVudEtleSwgZmFsc2UpO1xuICB9O1xuXG4gIHRoaXMub25TdWJNZW51Q2xpY2sgPSBmdW5jdGlvbiAoaW5mbykge1xuICAgIC8vIGluIHRoZSBjYXNlIG9mIG92ZXJmbG93ZWQgc3VibWVudVxuICAgIC8vIG9uQ2xpY2sgaXMgbm90IGNvcGllZCBvdmVyXG4gICAgaWYgKHR5cGVvZiBfdGhpczMucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgX3RoaXMzLnByb3BzLm9uQ2xpY2soX3RoaXMzLmFkZEtleVBhdGgoaW5mbykpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uU2VsZWN0ID0gZnVuY3Rpb24gKGluZm8pIHtcbiAgICBfdGhpczMucHJvcHMub25TZWxlY3QoaW5mbyk7XG4gIH07XG5cbiAgdGhpcy5vbkRlc2VsZWN0ID0gZnVuY3Rpb24gKGluZm8pIHtcbiAgICBfdGhpczMucHJvcHMub25EZXNlbGVjdChpbmZvKTtcbiAgfTtcblxuICB0aGlzLmdldFByZWZpeENscyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMzLnByb3BzLnJvb3RQcmVmaXhDbHMgKyAnLXN1Ym1lbnUnO1xuICB9O1xuXG4gIHRoaXMuZ2V0QWN0aXZlQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczMuZ2V0UHJlZml4Q2xzKCkgKyAnLWFjdGl2ZSc7XG4gIH07XG5cbiAgdGhpcy5nZXREaXNhYmxlZENsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMzLmdldFByZWZpeENscygpICsgJy1kaXNhYmxlZCc7XG4gIH07XG5cbiAgdGhpcy5nZXRTZWxlY3RlZENsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMzLmdldFByZWZpeENscygpICsgJy1zZWxlY3RlZCc7XG4gIH07XG5cbiAgdGhpcy5nZXRPcGVuQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczMucHJvcHMucm9vdFByZWZpeENscyArICctc3VibWVudS1vcGVuJztcbiAgfTtcblxuICB0aGlzLnNhdmVNZW51SW5zdGFuY2UgPSBmdW5jdGlvbiAoYykge1xuICAgIC8vIGNoaWxkcmVuIG1lbnUgaW5zdGFuY2VcbiAgICBfdGhpczMubWVudUluc3RhbmNlID0gYztcbiAgfTtcblxuICB0aGlzLmFkZEtleVBhdGggPSBmdW5jdGlvbiAoaW5mbykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgaW5mbywge1xuICAgICAga2V5UGF0aDogKGluZm8ua2V5UGF0aCB8fCBbXSkuY29uY2F0KF90aGlzMy5wcm9wcy5ldmVudEtleSlcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLnRyaWdnZXJPcGVuQ2hhbmdlID0gZnVuY3Rpb24gKG9wZW4sIHR5cGUpIHtcbiAgICB2YXIga2V5ID0gX3RoaXMzLnByb3BzLmV2ZW50S2V5O1xuICAgIHZhciBvcGVuQ2hhbmdlID0gZnVuY3Rpb24gb3BlbkNoYW5nZSgpIHtcbiAgICAgIF90aGlzMy5vbk9wZW5DaGFuZ2Uoe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgaXRlbTogX3RoaXMzLFxuICAgICAgICB0cmlnZ2VyOiB0eXBlLFxuICAgICAgICBvcGVuOiBvcGVuXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGlmICh0eXBlID09PSAnbW91c2VlbnRlcicpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBtb3VzZWVudGVyIGhhcHBlbiBhZnRlciBvdGhlciBtZW51IGl0ZW0ncyBtb3VzZWxlYXZlXG4gICAgICBfdGhpczMubW91c2VlbnRlclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3BlbkNoYW5nZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZW5DaGFuZ2UoKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5pc0NoaWxkcmVuU2VsZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJldCA9IHsgZmluZDogZmFsc2UgfTtcbiAgICBsb29wTWVudUl0ZW1SZWN1cnNpdmVseShfdGhpczMucHJvcHMuY2hpbGRyZW4sIF90aGlzMy5wcm9wcy5zZWxlY3RlZEtleXMsIHJldCk7XG4gICAgcmV0dXJuIHJldC5maW5kO1xuICB9O1xuXG4gIHRoaXMuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczMucHJvcHMub3BlbktleXMuaW5kZXhPZihfdGhpczMucHJvcHMuZXZlbnRLZXkpICE9PSAtMTtcbiAgfTtcblxuICB0aGlzLmFkanVzdFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghX3RoaXMzLnN1Yk1lbnVUaXRsZSB8fCAhX3RoaXMzLm1lbnVJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcG9wdXBNZW51ID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMzLm1lbnVJbnN0YW5jZSk7XG4gICAgaWYgKHBvcHVwTWVudS5vZmZzZXRXaWR0aCA+PSBfdGhpczMuc3ViTWVudVRpdGxlLm9mZnNldFdpZHRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBwb3B1cE1lbnUuc3R5bGUubWluV2lkdGggPSBfdGhpczMuc3ViTWVudVRpdGxlLm9mZnNldFdpZHRoICsgJ3B4JztcbiAgfTtcblxuICB0aGlzLnNhdmVTdWJNZW51VGl0bGUgPSBmdW5jdGlvbiAoc3ViTWVudVRpdGxlKSB7XG4gICAgX3RoaXMzLnN1Yk1lbnVUaXRsZSA9IHN1Yk1lbnVUaXRsZTtcbiAgfTtcbn07XG5cbnZhciBjb25uZWN0ZWQgPSBjb25uZWN0KGZ1bmN0aW9uIChfcmVmLCBfcmVmMikge1xuICB2YXIgb3BlbktleXMgPSBfcmVmLm9wZW5LZXlzLFxuICAgICAgYWN0aXZlS2V5ID0gX3JlZi5hY3RpdmVLZXksXG4gICAgICBzZWxlY3RlZEtleXMgPSBfcmVmLnNlbGVjdGVkS2V5cztcbiAgdmFyIGV2ZW50S2V5ID0gX3JlZjIuZXZlbnRLZXksXG4gICAgICBzdWJNZW51S2V5ID0gX3JlZjIuc3ViTWVudUtleTtcbiAgcmV0dXJuIHtcbiAgICBpc09wZW46IG9wZW5LZXlzLmluZGV4T2YoZXZlbnRLZXkpID4gLTEsXG4gICAgYWN0aXZlOiBhY3RpdmVLZXlbc3ViTWVudUtleV0gPT09IGV2ZW50S2V5LFxuICAgIHNlbGVjdGVkS2V5czogc2VsZWN0ZWRLZXlzXG4gIH07XG59KShTdWJNZW51KTtcblxuY29ubmVjdGVkLmlzU3ViTWVudSA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RlZDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcbmltcG9ydCBTdWJNZW51IGZyb20gJy4vU3ViTWVudSc7XG5pbXBvcnQgeyBnZXRXaWR0aCwgc2V0U3R5bGUsIG1lbnVBbGxQcm9wcyB9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG52YXIgTUVOVUlURU1fT1ZFUkZMT1dFRF9DTEFTU05BTUUgPSAnbWVudWl0ZW0tb3ZlcmZsb3dlZCc7XG52YXIgRkxPQVRfUFJFQ0lTSU9OX0FESlVTVCA9IDAuNTtcblxuLy8gRml4IHNzclxuaWYgKGNhblVzZURPTSkge1xuICByZXF1aXJlKCdtdXRhdGlvbm9ic2VydmVyLXNoaW0nKTtcbn1cblxudmFyIERPTVdyYXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRE9NV3JhcCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRE9NV3JhcCgpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERPTVdyYXApO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgbGFzdFZpc2libGVJbmRleDogdW5kZWZpbmVkXG4gICAgfSwgX3RoaXMuZ2V0TWVudUl0ZW1Ob2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBfdGhpcy5wcm9wcy5wcmVmaXhDbHM7XG5cbiAgICAgIHZhciB1bCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcbiAgICAgIGlmICghdWwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBmaWx0ZXIgb3V0IGFsbCBvdmVyZmxvd2VkIGluZGljYXRvciBwbGFjZWhvbGRlclxuICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodWwuY2hpbGRyZW4pLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZS5jbGFzc05hbWUuc3BsaXQoJyAnKS5pbmRleE9mKHByZWZpeENscyArICctb3ZlcmZsb3dlZC1zdWJtZW51JykgPCAwO1xuICAgICAgfSk7XG4gICAgfSwgX3RoaXMuZ2V0T3ZlcmZsb3dlZFN1Yk1lbnVJdGVtID0gZnVuY3Rpb24gKGtleVByZWZpeCwgb3ZlcmZsb3dlZEl0ZW1zLCByZW5kZXJQbGFjZWhvbGRlcikge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb3ZlcmZsb3dlZEluZGljYXRvciA9IF90aGlzJHByb3BzLm92ZXJmbG93ZWRJbmRpY2F0b3IsXG4gICAgICAgICAgbGV2ZWwgPSBfdGhpcyRwcm9wcy5sZXZlbCxcbiAgICAgICAgICBtb2RlID0gX3RoaXMkcHJvcHMubW9kZSxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgdGhlbWUgPSBfdGhpcyRwcm9wcy50aGVtZTtcblxuICAgICAgaWYgKGxldmVsICE9PSAxIHx8IG1vZGUgIT09ICdob3Jpem9udGFsJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIHB1dCBhbGwgdGhlIG92ZXJmbG93ZWQgaXRlbSBpbnNpZGUgYSBzdWJtZW51XG4gICAgICAvLyB3aXRoIGEgdGl0bGUgb2Ygb3ZlcmZsb3cgaW5kaWNhdG9yICgnLi4uJylcbiAgICAgIHZhciBjb3B5ID0gX3RoaXMucHJvcHMuY2hpbGRyZW5bMF07XG5cbiAgICAgIHZhciBfY29weSRwcm9wcyA9IGNvcHkucHJvcHMsXG4gICAgICAgICAgdGhyb3dBd2F5ID0gX2NvcHkkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgdGl0bGUgPSBfY29weSRwcm9wcy50aXRsZSxcbiAgICAgICAgICBwcm9wU3R5bGUgPSBfY29weSRwcm9wcy5zdHlsZSxcbiAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9jb3B5JHByb3BzLCBbJ2NoaWxkcmVuJywgJ3RpdGxlJywgJ3N0eWxlJ10pO1xuXG4gICAgICB2YXIgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgcHJvcFN0eWxlKTtcbiAgICAgIHZhciBrZXkgPSBrZXlQcmVmaXggKyAnLW92ZXJmbG93ZWQtaW5kaWNhdG9yJztcbiAgICAgIHZhciBldmVudEtleSA9IGtleVByZWZpeCArICctb3ZlcmZsb3dlZC1pbmRpY2F0b3InO1xuXG4gICAgICBpZiAob3ZlcmZsb3dlZEl0ZW1zLmxlbmd0aCA9PT0gMCAmJiByZW5kZXJQbGFjZWhvbGRlciAhPT0gdHJ1ZSkge1xuICAgICAgICBzdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAocmVuZGVyUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgICAvLyBwcmV2ZW50IGZyb20gdGFraW5nIG5vcm1hbCBkb20gc3BhY2VcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgICB9KTtcbiAgICAgICAga2V5ID0ga2V5ICsgJy1wbGFjZWhvbGRlcic7XG4gICAgICAgIGV2ZW50S2V5ID0gZXZlbnRLZXkgKyAnLXBsYWNlaG9sZGVyJztcbiAgICAgIH1cblxuICAgICAgdmFyIHBvcHVwQ2xhc3NOYW1lID0gdGhlbWUgPyBwcmVmaXhDbHMgKyAnLScgKyB0aGVtZSA6ICcnO1xuICAgICAgdmFyIHByb3BzID0ge307XG4gICAgICBtZW51QWxsUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICBpZiAocmVzdFtrXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNba10gPSByZXN0W2tdO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFN1Yk1lbnUsXG4gICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICB0aXRsZTogb3ZlcmZsb3dlZEluZGljYXRvcixcbiAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctb3ZlcmZsb3dlZC1zdWJtZW51JyxcbiAgICAgICAgICBwb3B1cENsYXNzTmFtZTogcG9wdXBDbGFzc05hbWVcbiAgICAgICAgfSwgcHJvcHMsIHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBldmVudEtleTogZXZlbnRLZXksXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgICB9KSxcbiAgICAgICAgb3ZlcmZsb3dlZEl0ZW1zXG4gICAgICApO1xuICAgIH0sIF90aGlzLnNldENoaWxkcmVuV2lkdGhBbmRSZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMubW9kZSAhPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciB1bCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcblxuICAgICAgaWYgKCF1bCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB1bENoaWxkcmVuTm9kZXMgPSB1bC5jaGlsZHJlbjtcblxuICAgICAgaWYgKCF1bENoaWxkcmVuTm9kZXMgfHwgdWxDaGlsZHJlbk5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBsYXN0T3ZlcmZsb3dlZEluZGljYXRvclBsYWNlaG9sZGVyID0gdWwuY2hpbGRyZW5bdWxDaGlsZHJlbk5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAvLyBuZWVkIGxhc3Qgb3ZlcmZsb3dlZCBpbmRpY2F0b3IgZm9yIGNhbGN1bGF0aW5nIGxlbmd0aDtcbiAgICAgIHNldFN0eWxlKGxhc3RPdmVyZmxvd2VkSW5kaWNhdG9yUGxhY2Vob2xkZXIsICdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuXG4gICAgICB2YXIgbWVudUl0ZW1Ob2RlcyA9IF90aGlzLmdldE1lbnVJdGVtTm9kZXMoKTtcblxuICAgICAgLy8gcmVzZXQgZGlzcGxheSBhdHRyaWJ1dGUgZm9yIGFsbCBoaWRkZW4gZWxlbWVudHMgY2F1c2VkIGJ5IG92ZXJmbG93IHRvIGNhbGN1bGF0ZSB1cGRhdGVkIHdpZHRoXG4gICAgICAvLyBhbmQgdGhlbiByZXNldCB0byBvcmlnaW5hbCBzdGF0ZSBhZnRlciB3aWR0aCBjYWxjdWxhdGlvblxuXG4gICAgICB2YXIgb3ZlcmZsb3dlZEl0ZW1zID0gbWVudUl0ZW1Ob2Rlcy5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGMuY2xhc3NOYW1lLnNwbGl0KCcgJykuaW5kZXhPZihNRU5VSVRFTV9PVkVSRkxPV0VEX0NMQVNTTkFNRSkgPj0gMDtcbiAgICAgIH0pO1xuXG4gICAgICBvdmVyZmxvd2VkSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICBzZXRTdHlsZShjLCAnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5tZW51SXRlbVNpemVzID0gbWVudUl0ZW1Ob2Rlcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGdldFdpZHRoKGMpO1xuICAgICAgfSk7XG5cbiAgICAgIG92ZXJmbG93ZWRJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHNldFN0eWxlKGMsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMub3ZlcmZsb3dlZEluZGljYXRvcldpZHRoID0gZ2V0V2lkdGgodWwuY2hpbGRyZW5bdWwuY2hpbGRyZW4ubGVuZ3RoIC0gMV0pO1xuICAgICAgX3RoaXMub3JpZ2luYWxUb3RhbFdpZHRoID0gX3RoaXMubWVudUl0ZW1TaXplcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VyKSB7XG4gICAgICAgIHJldHVybiBhY2MgKyBjdXI7XG4gICAgICB9LCAwKTtcbiAgICAgIF90aGlzLmhhbmRsZVJlc2l6ZSgpO1xuICAgICAgLy8gcHJldmVudCB0aGUgb3ZlcmZsb3dlZCBpbmRpY2F0b3IgZnJvbSB0YWtpbmcgc3BhY2U7XG4gICAgICBzZXRTdHlsZShsYXN0T3ZlcmZsb3dlZEluZGljYXRvclBsYWNlaG9sZGVyLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfSwgX3RoaXMucmVzaXplT2JzZXJ2ZXIgPSBudWxsLCBfdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbnVsbCwgX3RoaXMub3JpZ2luYWxUb3RhbFdpZHRoID0gMCwgX3RoaXMub3ZlcmZsb3dlZEl0ZW1zID0gW10sIF90aGlzLm1lbnVJdGVtU2l6ZXMgPSBbXSwgX3RoaXMuaGFuZGxlUmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm1vZGUgIT09ICdob3Jpem9udGFsJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB1bCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcbiAgICAgIGlmICghdWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHdpZHRoID0gZ2V0V2lkdGgodWwpO1xuXG4gICAgICBfdGhpcy5vdmVyZmxvd2VkSXRlbXMgPSBbXTtcbiAgICAgIHZhciBjdXJyZW50U3VtV2lkdGggPSAwO1xuXG4gICAgICAvLyBpbmRleCBmb3IgbGFzdCB2aXNpYmxlIGNoaWxkIGluIGhvcml6b250YWwgbW9kZVxuICAgICAgdmFyIGxhc3RWaXNpYmxlSW5kZXggPSB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIGZsb2F0IG51bWJlciBjb21wYXJpc29uIGNvdWxkIGJlIHByb2JsZW1hdGljXG4gICAgICAvLyBlLmcuIDAuMSArIDAuMiA+IDAuMyA9PT09PT4gdHJ1ZVxuICAgICAgLy8gdGh1cyB1c2luZyBGTE9BVF9QUkVDSVNJT05fQURKVVNUIGFzIGJ1ZmZlciB0byBoZWxwIHRoZSBzaXR1YXRpb25cbiAgICAgIGlmIChfdGhpcy5vcmlnaW5hbFRvdGFsV2lkdGggPiB3aWR0aCArIEZMT0FUX1BSRUNJU0lPTl9BREpVU1QpIHtcbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IC0xO1xuXG4gICAgICAgIF90aGlzLm1lbnVJdGVtU2l6ZXMuZm9yRWFjaChmdW5jdGlvbiAobGlXaWR0aCkge1xuICAgICAgICAgIGN1cnJlbnRTdW1XaWR0aCArPSBsaVdpZHRoO1xuICAgICAgICAgIGlmIChjdXJyZW50U3VtV2lkdGggKyBfdGhpcy5vdmVyZmxvd2VkSW5kaWNhdG9yV2lkdGggPD0gd2lkdGgpIHtcbiAgICAgICAgICAgIGxhc3RWaXNpYmxlSW5kZXgrKztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxhc3RWaXNpYmxlSW5kZXg6IGxhc3RWaXNpYmxlSW5kZXggfSk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBET01XcmFwLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy5zZXRDaGlsZHJlbldpZHRoQW5kUmVzaXplKCk7XG4gICAgaWYgKHRoaXMucHJvcHMubGV2ZWwgPT09IDEgJiYgdGhpcy5wcm9wcy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHZhciBtZW51VWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIGlmICghbWVudVVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKF90aGlzMi5zZXRDaGlsZHJlbldpZHRoQW5kUmVzaXplKTtcbiAgICAgIH0pO1xuXG4gICAgICBbXS5zbGljZS5jYWxsKG1lbnVVbC5jaGlsZHJlbikuY29uY2F0KG1lbnVVbCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgX3RoaXMyLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgW10uc2xpY2UuY2FsbChtZW51VWwuY2hpbGRyZW4pLmNvbmNhdChtZW51VWwpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBfdGhpczIucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgX3RoaXMyLnNldENoaWxkcmVuV2lkdGhBbmRSZXNpemUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKG1lbnVVbCwgeyBhdHRyaWJ1dGVzOiBmYWxzZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJUcmVlOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgRE9NV3JhcC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5yZXNpemVPYnNlcnZlcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBnZXQgYWxsIHZhbGlkIG1lbnVJdGVtIG5vZGVzXG5cblxuICAvLyBtZW1vcml6ZSByZW5kZXJlZCBtZW51U2l6ZVxuXG5cbiAgLy8gb3JpZ2luYWwgc2Nyb2xsIHNpemUgb2YgdGhlIGxpc3RcblxuXG4gIC8vIGNvcHkgb2Ygb3ZlcmZsb3dlZCBpdGVtc1xuXG5cbiAgLy8gY2FjaGUgaXRlbSBvZiB0aGUgb3JpZ2luYWwgaXRlbXMgKHNvIHdlIGNhbiB0cmFjayB0aGUgc2l6ZSBhbmQgb3JkZXIpXG5cblxuICBET01XcmFwLnByb3RvdHlwZS5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAvLyBuZWVkIHRvIHRha2UgY2FyZSBvZiBvdmVyZmxvd2VkIGl0ZW1zIGluIGhvcml6b250YWwgbW9kZVxuICAgIHZhciBsYXN0VmlzaWJsZUluZGV4ID0gdGhpcy5zdGF0ZS5sYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgcmV0dXJuIChjaGlsZHJlbiB8fCBbXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNoaWxkTm9kZSwgaW5kZXgpIHtcbiAgICAgIHZhciBpdGVtID0gY2hpbGROb2RlO1xuICAgICAgaWYgKF90aGlzMy5wcm9wcy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgdmFyIG92ZXJmbG93ZWQgPSBfdGhpczMuZ2V0T3ZlcmZsb3dlZFN1Yk1lbnVJdGVtKGNoaWxkTm9kZS5wcm9wcy5ldmVudEtleSwgW10pO1xuICAgICAgICBpZiAobGFzdFZpc2libGVJbmRleCAhPT0gdW5kZWZpbmVkICYmIF90aGlzMy5wcm9wcy5jbGFzc05hbWUuaW5kZXhPZihfdGhpczMucHJvcHMucHJlZml4Q2xzICsgJy1yb290JykgIT09IC0xKSB7XG4gICAgICAgICAgaWYgKGluZGV4ID4gbGFzdFZpc2libGVJbmRleCkge1xuICAgICAgICAgICAgaXRlbSA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZE5vZGUsXG4gICAgICAgICAgICAvLyDov5nph4zkv67mlLkgZXZlbnRLZXkg5piv5Li65LqG6Ziy5q2i6ZqQ6JeP54q25oCB5LiL6L+Y5Lya6Kem5Y+RIG9wZW5rZXlzIOS6i+S7tlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICAgICAgICAgICAgZXZlbnRLZXk6IGNoaWxkTm9kZS5wcm9wcy5ldmVudEtleSArICctaGlkZGVuJyxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjaGlsZE5vZGUuY2xhc3NOYW1lICsgJyAnICsgTUVOVUlURU1fT1ZFUkZMT1dFRF9DTEFTU05BTUVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5kZXggPT09IGxhc3RWaXNpYmxlSW5kZXggKyAxKSB7XG4gICAgICAgICAgICBfdGhpczMub3ZlcmZsb3dlZEl0ZW1zID0gY2hpbGRyZW4uc2xpY2UobGFzdFZpc2libGVJbmRleCArIDEpLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsXG4gICAgICAgICAgICAgIC8vIGNoaWxkcmVuW2luZGV4XS5rZXkgd2lsbCBiZWNvbWUgJy4ka2V5JyBpbiBjbG9uZSBieSBkZWZhdWx0LFxuICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIG92ZXJ3cml0ZSB3aXRoIHRoZSBjb3JyZWN0IGtleSBleHBsaWNpdGx5XG4gICAgICAgICAgICAgIHsga2V5OiBjLnByb3BzLmV2ZW50S2V5LCBtb2RlOiAndmVydGljYWwtbGVmdCcgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgb3ZlcmZsb3dlZCA9IF90aGlzMy5nZXRPdmVyZmxvd2VkU3ViTWVudUl0ZW0oY2hpbGROb2RlLnByb3BzLmV2ZW50S2V5LCBfdGhpczMub3ZlcmZsb3dlZEl0ZW1zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmV0ID0gW10uY29uY2F0KGFjYywgW292ZXJmbG93ZWQsIGl0ZW1dKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAvLyBuZWVkIGEgcGxhY2Vob2xkZXIgZm9yIGNhbGN1bGF0aW5nIG92ZXJmbG93ZWQgaW5kaWNhdG9yIHdpZHRoXG4gICAgICAgICAgcmV0LnB1c2goX3RoaXMzLmdldE92ZXJmbG93ZWRTdWJNZW51SXRlbShjaGlsZE5vZGUucHJvcHMuZXZlbnRLZXksIFtdLCB0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXS5jb25jYXQoYWNjLCBbaXRlbV0pO1xuICAgIH0sIFtdKTtcbiAgfTtcblxuICBET01XcmFwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGhpZGRlbkNsYXNzTmFtZSA9IF9wcm9wcy5oaWRkZW5DbGFzc05hbWUsXG4gICAgICAgIHZpc2libGUgPSBfcHJvcHMudmlzaWJsZSxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgb3ZlcmZsb3dlZEluZGljYXRvciA9IF9wcm9wcy5vdmVyZmxvd2VkSW5kaWNhdG9yLFxuICAgICAgICBtb2RlID0gX3Byb3BzLm1vZGUsXG4gICAgICAgIGxldmVsID0gX3Byb3BzLmxldmVsLFxuICAgICAgICBUYWcgPSBfcHJvcHMudGFnLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgdGhlbWUgPSBfcHJvcHMudGhlbWUsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2hpZGRlbkNsYXNzTmFtZScsICd2aXNpYmxlJywgJ3ByZWZpeENscycsICdvdmVyZmxvd2VkSW5kaWNhdG9yJywgJ21vZGUnLCAnbGV2ZWwnLCAndGFnJywgJ2NoaWxkcmVuJywgJ3RoZW1lJ10pO1xuXG4gICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICByZXN0LmNsYXNzTmFtZSArPSAnICcgKyBoaWRkZW5DbGFzc05hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUYWcsXG4gICAgICByZXN0LFxuICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIERPTVdyYXA7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkRPTVdyYXAucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICd2ZXJ0aWNhbC1sZWZ0JywgJ3ZlcnRpY2FsLXJpZ2h0JywgJ2lubGluZSddKSxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsZXZlbDogUHJvcFR5cGVzLm51bWJlcixcbiAgdGhlbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG92ZXJmbG93ZWRJbmRpY2F0b3I6IFByb3BUeXBlcy5ub2RlLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGlkZGVuQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5ET01XcmFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NV3JhcDsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ21pbmktc3RvcmUnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAncmMtdXRpbC9lcy9LZXlDb2RlJztcbmltcG9ydCBjcmVhdGVDaGFpbmVkRnVuY3Rpb24gZnJvbSAncmMtdXRpbC9lcy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBnZXRLZXlGcm9tQ2hpbGRyZW5JbmRleCwgbG9vcE1lbnVJdGVtLCBub29wLCBtZW51QWxsUHJvcHMsIGlzTW9iaWxlRGV2aWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBET01XcmFwIGZyb20gJy4vRE9NV3JhcCc7XG5cbmZ1bmN0aW9uIGFsbERpc2FibGVkKGFycikge1xuICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gYXJyLmV2ZXJ5KGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICEhYy5wcm9wcy5kaXNhYmxlZDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUtleShzdG9yZSwgbWVudUlkLCBhY3RpdmVLZXkpIHtcbiAgdmFyIF9leHRlbmRzMjtcblxuICB2YXIgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBzdG9yZS5zZXRTdGF0ZSh7XG4gICAgYWN0aXZlS2V5OiBfZXh0ZW5kcyh7fSwgc3RhdGUuYWN0aXZlS2V5LCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMlttZW51SWRdID0gYWN0aXZlS2V5LCBfZXh0ZW5kczIpKVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRLZXkocHJvcHMpIHtcbiAgLy8gd2hlbiBldmVudEtleSBub3QgYXZhaWxhYmxlICxpdCdzIG1lbnUgYW5kIHJldHVybiBtZW51IGlkICcwLW1lbnUtJ1xuICByZXR1cm4gcHJvcHMuZXZlbnRLZXkgfHwgJzAtbWVudS0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlS2V5KHByb3BzLCBvcmlnaW5hbEFjdGl2ZUtleSkge1xuICB2YXIgYWN0aXZlS2V5ID0gb3JpZ2luYWxBY3RpdmVLZXk7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgZXZlbnRLZXkgPSBwcm9wcy5ldmVudEtleTtcblxuICBpZiAoYWN0aXZlS2V5KSB7XG4gICAgdmFyIGZvdW5kID0gdm9pZCAwO1xuICAgIGxvb3BNZW51SXRlbShjaGlsZHJlbiwgZnVuY3Rpb24gKGMsIGkpIHtcbiAgICAgIGlmIChjICYmIGMucHJvcHMgJiYgIWMucHJvcHMuZGlzYWJsZWQgJiYgYWN0aXZlS2V5ID09PSBnZXRLZXlGcm9tQ2hpbGRyZW5JbmRleChjLCBldmVudEtleSwgaSkpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZUtleTtcbiAgICB9XG4gIH1cbiAgYWN0aXZlS2V5ID0gbnVsbDtcbiAgaWYgKHByb3BzLmRlZmF1bHRBY3RpdmVGaXJzdCkge1xuICAgIGxvb3BNZW51SXRlbShjaGlsZHJlbiwgZnVuY3Rpb24gKGMsIGkpIHtcbiAgICAgIGlmICghYWN0aXZlS2V5ICYmIGMgJiYgIWMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgYWN0aXZlS2V5ID0gZ2V0S2V5RnJvbUNoaWxkcmVuSW5kZXgoYywgZXZlbnRLZXksIGkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhY3RpdmVLZXk7XG4gIH1cbiAgcmV0dXJuIGFjdGl2ZUtleTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSZWYoYykge1xuICBpZiAoYykge1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5zdGFuY2VBcnJheS5pbmRleE9mKGMpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIC8vIHVwZGF0ZSBjb21wb25lbnQgaWYgaXQncyBhbHJlYWR5IGluc2lkZSBpbnN0YW5jZUFycmF5XG4gICAgICB0aGlzLmluc3RhbmNlQXJyYXlbaW5kZXhdID0gYztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWRkIGNvbXBvbmVudCBpZiBpdCdzIG5vdCBpbiBpbnN0YW5jZUFycmF5IHlldDtcbiAgICAgIHRoaXMuaW5zdGFuY2VBcnJheS5wdXNoKGMpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgdmFyIFN1YlBvcHVwTWVudSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTdWJQb3B1cE1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN1YlBvcHVwTWVudShwcm9wcykge1xuICAgIHZhciBfZXh0ZW5kczM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3ViUG9wdXBNZW51KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgIHByb3BzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZUtleTogX2V4dGVuZHMoe30sIHByb3BzLnN0b3JlLmdldFN0YXRlKCkuYWN0aXZlS2V5LCAoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1twcm9wcy5ldmVudEtleV0gPSBnZXRBY3RpdmVLZXkocHJvcHMsIHByb3BzLmFjdGl2ZUtleSksIF9leHRlbmRzMykpXG4gICAgfSk7XG5cbiAgICBfdGhpcy5pbnN0YW5jZUFycmF5ID0gW107XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU3ViUG9wdXBNZW51LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGludm9rZSBjdXN0b21pemVkIHJlZiB0byBleHBvc2UgY29tcG9uZW50IHRvIG1peGluXG4gICAgaWYgKHRoaXMucHJvcHMubWFudWFsUmVmKSB7XG4gICAgICB0aGlzLnByb3BzLm1hbnVhbFJlZih0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgU3ViUG9wdXBNZW51LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudmlzaWJsZSB8fCBuZXh0UHJvcHMudmlzaWJsZTtcbiAgfTtcblxuICBTdWJQb3B1cE1lbnUucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvcmlnaW5hbEFjdGl2ZUtleSA9ICdhY3RpdmVLZXknIGluIHByb3BzID8gcHJvcHMuYWN0aXZlS2V5IDogcHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5hY3RpdmVLZXlbZ2V0RXZlbnRLZXkocHJvcHMpXTtcbiAgICB2YXIgYWN0aXZlS2V5ID0gZ2V0QWN0aXZlS2V5KHByb3BzLCBvcmlnaW5hbEFjdGl2ZUtleSk7XG4gICAgaWYgKGFjdGl2ZUtleSAhPT0gb3JpZ2luYWxBY3RpdmVLZXkpIHtcbiAgICAgIHVwZGF0ZUFjdGl2ZUtleShwcm9wcy5zdG9yZSwgZ2V0RXZlbnRLZXkocHJvcHMpLCBhY3RpdmVLZXkpO1xuICAgIH0gZWxzZSBpZiAoJ2FjdGl2ZUtleScgaW4gcHJldlByb3BzKSB7XG4gICAgICAvLyBJZiBwcmV2IGFjdGl2ZUtleSBpcyBub3Qgc2FtZSBhcyBjdXJyZW50IGFjdGl2ZUtleSxcbiAgICAgIC8vIHdlIHNob3VsZCBzZXQgaXQuXG4gICAgICB2YXIgcHJldkFjdGl2ZUtleSA9IGdldEFjdGl2ZUtleShwcmV2UHJvcHMsIHByZXZQcm9wcy5hY3RpdmVLZXkpO1xuICAgICAgaWYgKGFjdGl2ZUtleSAhPT0gcHJldkFjdGl2ZUtleSkge1xuICAgICAgICB1cGRhdGVBY3RpdmVLZXkocHJvcHMuc3RvcmUsIGdldEV2ZW50S2V5KHByb3BzKSwgYWN0aXZlS2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gYWxsIGtleWJvYXJkIGV2ZW50cyBjYWxsYmFja3MgcnVuIGZyb20gaGVyZSBhdCBmaXJzdFxuXG5cbiAgU3ViUG9wdXBNZW51LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcy5wcm9wcywgW10pO1xuXG4gICAgdGhpcy5pbnN0YW5jZUFycmF5ID0gW107XG4gICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJvcHMucHJlZml4Q2xzLCBwcm9wcy5jbGFzc05hbWUsIHByb3BzLnByZWZpeENscyArICctJyArIHByb3BzLm1vZGUpO1xuICAgIHZhciBkb21Qcm9wcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgLy8gcm9sZSBjb3VsZCBiZSAnc2VsZWN0JyBhbmQgYnkgZGVmYXVsdCBzZXQgdG8gbWVudVxuICAgICAgcm9sZTogcHJvcHMucm9sZSB8fCAnbWVudSdcbiAgICB9O1xuICAgIGlmIChwcm9wcy5pZCkge1xuICAgICAgZG9tUHJvcHMuaWQgPSBwcm9wcy5pZDtcbiAgICB9XG4gICAgaWYgKHByb3BzLmZvY3VzYWJsZSkge1xuICAgICAgZG9tUHJvcHMudGFiSW5kZXggPSAnMCc7XG4gICAgICBkb21Qcm9wcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bjtcbiAgICB9XG4gICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgZXZlbnRLZXkgPSBwcm9wcy5ldmVudEtleSxcbiAgICAgICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICAgIGxldmVsID0gcHJvcHMubGV2ZWwsXG4gICAgICAgIG1vZGUgPSBwcm9wcy5tb2RlLFxuICAgICAgICBvdmVyZmxvd2VkSW5kaWNhdG9yID0gcHJvcHMub3ZlcmZsb3dlZEluZGljYXRvcixcbiAgICAgICAgdGhlbWUgPSBwcm9wcy50aGVtZTtcblxuICAgIG1lbnVBbGxQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBkZWxldGUgcHJvcHNba2V5XTtcbiAgICB9KTtcblxuICAgIC8vIE90aGVyd2lzZSwgdGhlIHByb3BhZ2F0ZWQgY2xpY2sgZXZlbnQgd2lsbCB0cmlnZ2VyIGFub3RoZXIgb25DbGlja1xuICAgIGRlbGV0ZSBwcm9wcy5vbkNsaWNrO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBET01XcmFwLFxuICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBtb2RlOiBtb2RlLFxuICAgICAgICB0YWc6ICd1bCcsXG4gICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgICBoaWRkZW5DbGFzc05hbWU6IHByZWZpeENscyArICctaGlkZGVuJyxcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgb3ZlcmZsb3dlZEluZGljYXRvcjogb3ZlcmZsb3dlZEluZGljYXRvclxuICAgICAgfSwgZG9tUHJvcHMpLFxuICAgICAgUmVhY3QuQ2hpbGRyZW4ubWFwKHByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoYywgaSkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnJlbmRlck1lbnVJdGVtKGMsIGksIGV2ZW50S2V5IHx8ICcwLW1lbnUtJyk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFN1YlBvcHVwTWVudTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblN1YlBvcHVwTWVudS5wcm9wVHlwZXMgPSB7XG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbk9wZW5DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRlc3Ryb3k6IFByb3BUeXBlcy5mdW5jLFxuICBvcGVuVHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9wZW5BbmltYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgb3BlbktleXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIHBhcmVudE1lbnU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdG9yZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBnZXRTdGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2V0U3RhdGU6IFByb3BUeXBlcy5mdW5jXG4gIH0pLFxuXG4gIC8vIGFkZGluZyBpbiByZWZhY3RvclxuICBmb2N1c2FibGU6IFByb3BUeXBlcy5ib29sLFxuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkZWZhdWx0QWN0aXZlRmlyc3Q6IFByb3BUeXBlcy5ib29sLFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdGVkS2V5czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIGRlZmF1bHRTZWxlY3RlZEtleXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBkZWZhdWx0T3BlbktleXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBsZXZlbDogUHJvcFR5cGVzLm51bWJlcixcbiAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICd2ZXJ0aWNhbC1sZWZ0JywgJ3ZlcnRpY2FsLXJpZ2h0JywgJ2lubGluZSddKSxcbiAgdHJpZ2dlclN1Yk1lbnVBY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ2NsaWNrJywgJ2hvdmVyJ10pLFxuICBpbmxpbmVJbmRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgbWFudWFsUmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXRlbUljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pLFxuICBleHBhbmRJY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKVxufTtcblN1YlBvcHVwTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHByZWZpeENsczogJ3JjLW1lbnUnLFxuICBjbGFzc05hbWU6ICcnLFxuICBtb2RlOiAndmVydGljYWwnLFxuICBsZXZlbDogMSxcbiAgaW5saW5lSW5kZW50OiAyNCxcbiAgdmlzaWJsZTogdHJ1ZSxcbiAgZm9jdXNhYmxlOiB0cnVlLFxuICBzdHlsZToge30sXG4gIG1hbnVhbFJlZjogbm9vcFxufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXMzID0gdGhpcztcblxuICB0aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlLCBjYWxsYmFjaykge1xuICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgIHZhciBoYW5kbGVkID0gdm9pZCAwO1xuICAgIF90aGlzMy5nZXRGbGF0SW5zdGFuY2VBcnJheSgpLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgaWYgKG9iaiAmJiBvYmoucHJvcHMuYWN0aXZlICYmIG9iai5vbktleURvd24pIHtcbiAgICAgICAgaGFuZGxlZCA9IG9iai5vbktleURvd24oZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICB2YXIgYWN0aXZlSXRlbSA9IG51bGw7XG4gICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuVVAgfHwga2V5Q29kZSA9PT0gS2V5Q29kZS5ET1dOKSB7XG4gICAgICBhY3RpdmVJdGVtID0gX3RoaXMzLnN0ZXAoa2V5Q29kZSA9PT0gS2V5Q29kZS5VUCA/IC0xIDogMSk7XG4gICAgfVxuICAgIGlmIChhY3RpdmVJdGVtKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB1cGRhdGVBY3RpdmVLZXkoX3RoaXMzLnByb3BzLnN0b3JlLCBnZXRFdmVudEtleShfdGhpczMucHJvcHMpLCBhY3RpdmVJdGVtLnByb3BzLmV2ZW50S2V5KTtcblxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayhhY3RpdmVJdGVtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25JdGVtSG92ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBrZXkgPSBlLmtleSxcbiAgICAgICAgaG92ZXIgPSBlLmhvdmVyO1xuXG4gICAgdXBkYXRlQWN0aXZlS2V5KF90aGlzMy5wcm9wcy5zdG9yZSwgZ2V0RXZlbnRLZXkoX3RoaXMzLnByb3BzKSwgaG92ZXIgPyBrZXkgOiBudWxsKTtcbiAgfTtcblxuICB0aGlzLm9uRGVzZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0SW5mbykge1xuICAgIF90aGlzMy5wcm9wcy5vbkRlc2VsZWN0KHNlbGVjdEluZm8pO1xuICB9O1xuXG4gIHRoaXMub25TZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0SW5mbykge1xuICAgIF90aGlzMy5wcm9wcy5vblNlbGVjdChzZWxlY3RJbmZvKTtcbiAgfTtcblxuICB0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzMy5wcm9wcy5vbkNsaWNrKGUpO1xuICB9O1xuXG4gIHRoaXMub25PcGVuQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBfdGhpczMucHJvcHMub25PcGVuQ2hhbmdlKGUpO1xuICB9O1xuXG4gIHRoaXMub25EZXN0cm95ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgX3RoaXMzLnByb3BzLm9uRGVzdHJveShrZXkpO1xuICB9O1xuXG4gIHRoaXMuZ2V0RmxhdEluc3RhbmNlQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMy5pbnN0YW5jZUFycmF5O1xuICB9O1xuXG4gIHRoaXMuZ2V0T3BlblRyYW5zaXRpb25OYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczMucHJvcHMub3BlblRyYW5zaXRpb25OYW1lO1xuICB9O1xuXG4gIHRoaXMuc3RlcCA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfdGhpczMuZ2V0RmxhdEluc3RhbmNlQXJyYXkoKTtcbiAgICB2YXIgYWN0aXZlS2V5ID0gX3RoaXMzLnByb3BzLnN0b3JlLmdldFN0YXRlKCkuYWN0aXZlS2V5W2dldEV2ZW50S2V5KF90aGlzMy5wcm9wcyldO1xuICAgIHZhciBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgaWYgKCFsZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uIDwgMCkge1xuICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoKS5yZXZlcnNlKCk7XG4gICAgfVxuICAgIC8vIGZpbmQgY3VycmVudCBhY3RpdmVJbmRleFxuICAgIHZhciBhY3RpdmVJbmRleCA9IC0xO1xuICAgIGNoaWxkcmVuLmV2ZXJ5KGZ1bmN0aW9uIChjLCBjaSkge1xuICAgICAgaWYgKGMgJiYgYy5wcm9wcy5ldmVudEtleSA9PT0gYWN0aXZlS2V5KSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gY2k7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIGlmICghX3RoaXMzLnByb3BzLmRlZmF1bHRBY3RpdmVGaXJzdCAmJiBhY3RpdmVJbmRleCAhPT0gLTEgJiYgYWxsRGlzYWJsZWQoY2hpbGRyZW4uc2xpY2UoYWN0aXZlSW5kZXgsIGxlbiAtIDEpKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdmFyIHN0YXJ0ID0gKGFjdGl2ZUluZGV4ICsgMSkgJSBsZW47XG4gICAgdmFyIGkgPSBzdGFydDtcblxuICAgIGRvIHtcbiAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKCFjaGlsZCB8fCBjaGlsZC5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICBpID0gKGkgKyAxKSAlIGxlbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChpICE9PSBzdGFydCk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB0aGlzLnJlbmRlckNvbW1vbk1lbnVJdGVtID0gZnVuY3Rpb24gKGNoaWxkLCBpLCBleHRyYVByb3BzKSB7XG4gICAgdmFyIHN0YXRlID0gX3RoaXMzLnByb3BzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgdmFyIHByb3BzID0gX3RoaXMzLnByb3BzO1xuICAgIHZhciBrZXkgPSBnZXRLZXlGcm9tQ2hpbGRyZW5JbmRleChjaGlsZCwgcHJvcHMuZXZlbnRLZXksIGkpO1xuICAgIHZhciBjaGlsZFByb3BzID0gY2hpbGQucHJvcHM7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTE1MTcjaXNzdWVjb21tZW50LTQ3NzQwMzA1NVxuICAgIGlmICghY2hpbGRQcm9wcyB8fCB0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gICAgdmFyIGlzQWN0aXZlID0ga2V5ID09PSBzdGF0ZS5hY3RpdmVLZXk7XG4gICAgdmFyIG5ld0NoaWxkUHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICBtb2RlOiBjaGlsZFByb3BzLm1vZGUgfHwgcHJvcHMubW9kZSxcbiAgICAgIGxldmVsOiBwcm9wcy5sZXZlbCxcbiAgICAgIGlubGluZUluZGVudDogcHJvcHMuaW5saW5lSW5kZW50LFxuICAgICAgcmVuZGVyTWVudUl0ZW06IF90aGlzMy5yZW5kZXJNZW51SXRlbSxcbiAgICAgIHJvb3RQcmVmaXhDbHM6IHByb3BzLnByZWZpeENscyxcbiAgICAgIGluZGV4OiBpLFxuICAgICAgcGFyZW50TWVudTogcHJvcHMucGFyZW50TWVudSxcbiAgICAgIC8vIGN1c3RvbWl6ZWQgcmVmIGZ1bmN0aW9uLCBuZWVkIHRvIGJlIGludm9rZWQgbWFudWFsbHkgaW4gY2hpbGQncyBjb21wb25lbnREaWRNb3VudFxuICAgICAgbWFudWFsUmVmOiBjaGlsZFByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKGNoaWxkLnJlZiwgc2F2ZVJlZi5iaW5kKF90aGlzMykpLFxuICAgICAgZXZlbnRLZXk6IGtleSxcbiAgICAgIGFjdGl2ZTogIWNoaWxkUHJvcHMuZGlzYWJsZWQgJiYgaXNBY3RpdmUsXG4gICAgICBtdWx0aXBsZTogcHJvcHMubXVsdGlwbGUsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgKGNoaWxkUHJvcHMub25DbGljayB8fCBub29wKShlKTtcbiAgICAgICAgX3RoaXMzLm9uQ2xpY2soZSk7XG4gICAgICB9LFxuICAgICAgb25JdGVtSG92ZXI6IF90aGlzMy5vbkl0ZW1Ib3ZlcixcbiAgICAgIG9wZW5UcmFuc2l0aW9uTmFtZTogX3RoaXMzLmdldE9wZW5UcmFuc2l0aW9uTmFtZSgpLFxuICAgICAgb3BlbkFuaW1hdGlvbjogcHJvcHMub3BlbkFuaW1hdGlvbixcbiAgICAgIHN1Yk1lbnVPcGVuRGVsYXk6IHByb3BzLnN1Yk1lbnVPcGVuRGVsYXksXG4gICAgICBzdWJNZW51Q2xvc2VEZWxheTogcHJvcHMuc3ViTWVudUNsb3NlRGVsYXksXG4gICAgICBmb3JjZVN1Yk1lbnVSZW5kZXI6IHByb3BzLmZvcmNlU3ViTWVudVJlbmRlcixcbiAgICAgIG9uT3BlbkNoYW5nZTogX3RoaXMzLm9uT3BlbkNoYW5nZSxcbiAgICAgIG9uRGVzZWxlY3Q6IF90aGlzMy5vbkRlc2VsZWN0LFxuICAgICAgb25TZWxlY3Q6IF90aGlzMy5vblNlbGVjdCxcbiAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwcm9wcy5idWlsdGluUGxhY2VtZW50cyxcbiAgICAgIGl0ZW1JY29uOiBjaGlsZFByb3BzLml0ZW1JY29uIHx8IF90aGlzMy5wcm9wcy5pdGVtSWNvbixcbiAgICAgIGV4cGFuZEljb246IGNoaWxkUHJvcHMuZXhwYW5kSWNvbiB8fCBfdGhpczMucHJvcHMuZXhwYW5kSWNvblxuICAgIH0sIGV4dHJhUHJvcHMpO1xuICAgIC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTM5NDNcbiAgICBpZiAocHJvcHMubW9kZSA9PT0gJ2lubGluZScgfHwgaXNNb2JpbGVEZXZpY2UoKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy50cmlnZ2VyU3ViTWVudUFjdGlvbiA9ICdjbGljayc7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0NoaWxkUHJvcHMpO1xuICB9O1xuXG4gIHRoaXMucmVuZGVyTWVudUl0ZW0gPSBmdW5jdGlvbiAoYywgaSwgc3ViTWVudUtleSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghYykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBzdGF0ZSA9IF90aGlzMy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgIHZhciBleHRyYVByb3BzID0ge1xuICAgICAgb3BlbktleXM6IHN0YXRlLm9wZW5LZXlzLFxuICAgICAgc2VsZWN0ZWRLZXlzOiBzdGF0ZS5zZWxlY3RlZEtleXMsXG4gICAgICB0cmlnZ2VyU3ViTWVudUFjdGlvbjogX3RoaXMzLnByb3BzLnRyaWdnZXJTdWJNZW51QWN0aW9uLFxuICAgICAgc3ViTWVudUtleTogc3ViTWVudUtleVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzMy5yZW5kZXJDb21tb25NZW51SXRlbShjLCBpLCBleHRyYVByb3BzKTtcbiAgfTtcbn07XG5cbnZhciBjb25uZWN0ZWQgPSBjb25uZWN0KCkoU3ViUG9wdXBNZW51KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdGVkOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQcm92aWRlciwgY3JlYXRlIH0gZnJvbSAnbWluaS1zdG9yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFN1YlBvcHVwTWVudSwgZ2V0QWN0aXZlS2V5IH0gZnJvbSAnLi9TdWJQb3B1cE1lbnUnO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBNZW51ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1lbnUocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICBfdGhpcy5pc1Jvb3RNZW51ID0gdHJ1ZTtcblxuICAgIHZhciBzZWxlY3RlZEtleXMgPSBwcm9wcy5kZWZhdWx0U2VsZWN0ZWRLZXlzO1xuICAgIHZhciBvcGVuS2V5cyA9IHByb3BzLmRlZmF1bHRPcGVuS2V5cztcbiAgICBpZiAoJ3NlbGVjdGVkS2V5cycgaW4gcHJvcHMpIHtcbiAgICAgIHNlbGVjdGVkS2V5cyA9IHByb3BzLnNlbGVjdGVkS2V5cyB8fCBbXTtcbiAgICB9XG4gICAgaWYgKCdvcGVuS2V5cycgaW4gcHJvcHMpIHtcbiAgICAgIG9wZW5LZXlzID0gcHJvcHMub3BlbktleXMgfHwgW107XG4gICAgfVxuXG4gICAgX3RoaXMuc3RvcmUgPSBjcmVhdGUoe1xuICAgICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXMsXG4gICAgICBvcGVuS2V5czogb3BlbktleXMsXG4gICAgICBhY3RpdmVLZXk6IHsgJzAtbWVudS0nOiBnZXRBY3RpdmVLZXkocHJvcHMsIHByb3BzLmFjdGl2ZUtleSkgfVxuICAgIH0pO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIE1lbnUucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVNaW5pU3RvcmUoKTtcbiAgfTtcblxuICBNZW51LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVNaW5pU3RvcmUoKTtcbiAgfTtcblxuICAvLyBvbktleURvd24gbmVlZHMgdG8gYmUgZXhwb3NlZCBhcyBhIGluc3RhbmNlIG1ldGhvZFxuICAvLyBlLmcuLCBpbiByYy1zZWxlY3QsIHdlIG5lZWQgdG8gbmF2aWdhdGUgbWVudSBpdGVtIHdoaWxlXG4gIC8vIGN1cnJlbnQgYWN0aXZlIGl0ZW0gaXMgcmMtc2VsZWN0IGlucHV0IGJveCByYXRoZXIgdGhhbiB0aGUgbWVudSBpdHNlbGZcblxuXG4gIE1lbnUucHJvdG90eXBlLnVwZGF0ZU1pbmlTdG9yZSA9IGZ1bmN0aW9uIHVwZGF0ZU1pbmlTdG9yZSgpIHtcbiAgICBpZiAoJ3NlbGVjdGVkS2V5cycgaW4gdGhpcy5wcm9wcykge1xuICAgICAgdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkS2V5czogdGhpcy5wcm9wcy5zZWxlY3RlZEtleXMgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoJ29wZW5LZXlzJyBpbiB0aGlzLnByb3BzKSB7XG4gICAgICB0aGlzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbktleXM6IHRoaXMucHJvcHMub3BlbktleXMgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBNZW51LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcy5wcm9wcywgW10pO1xuXG4gICAgcHJvcHMuY2xhc3NOYW1lICs9ICcgJyArIHByb3BzLnByZWZpeENscyArICctcm9vdCc7XG4gICAgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgIG9uT3BlbkNoYW5nZTogdGhpcy5vbk9wZW5DaGFuZ2UsXG4gICAgICBvbkRlc2VsZWN0OiB0aGlzLm9uRGVzZWxlY3QsXG4gICAgICBvblNlbGVjdDogdGhpcy5vblNlbGVjdCxcbiAgICAgIG9wZW5UcmFuc2l0aW9uTmFtZTogdGhpcy5nZXRPcGVuVHJhbnNpdGlvbk5hbWUoKSxcbiAgICAgIHBhcmVudE1lbnU6IHRoaXNcbiAgICB9KTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFByb3ZpZGVyLFxuICAgICAgeyBzdG9yZTogdGhpcy5zdG9yZSB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgU3ViUG9wdXBNZW51LFxuICAgICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5pbm5lck1lbnUgPSBjO1xuICAgICAgICAgIH0gfSksXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBNZW51O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgZGVmYXVsdFNlbGVjdGVkS2V5czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIGRlZmF1bHRBY3RpdmVGaXJzdDogUHJvcFR5cGVzLmJvb2wsXG4gIHNlbGVjdGVkS2V5czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIGRlZmF1bHRPcGVuS2V5czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIG9wZW5LZXlzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICd2ZXJ0aWNhbC1sZWZ0JywgJ3ZlcnRpY2FsLXJpZ2h0JywgJ2lubGluZSddKSxcbiAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRlc2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25EZXN0cm95OiBQcm9wVHlwZXMuZnVuYyxcbiAgb3BlblRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcGVuQW5pbWF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIHN1Yk1lbnVPcGVuRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIHN1Yk1lbnVDbG9zZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBmb3JjZVN1Yk1lbnVSZW5kZXI6IFByb3BUeXBlcy5ib29sLFxuICB0cmlnZ2VyU3ViTWVudUFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGV2ZWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgYnVpbHRpblBsYWNlbWVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGl0ZW1JY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgZXhwYW5kSWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG4gIG92ZXJmbG93ZWRJbmRpY2F0b3I6IFByb3BUeXBlcy5ub2RlXG59O1xuTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlbGVjdGFibGU6IHRydWUsXG4gIG9uQ2xpY2s6IG5vb3AsXG4gIG9uU2VsZWN0OiBub29wLFxuICBvbk9wZW5DaGFuZ2U6IG5vb3AsXG4gIG9uRGVzZWxlY3Q6IG5vb3AsXG4gIGRlZmF1bHRTZWxlY3RlZEtleXM6IFtdLFxuICBkZWZhdWx0T3BlbktleXM6IFtdLFxuICBzdWJNZW51T3BlbkRlbGF5OiAwLjEsXG4gIHN1Yk1lbnVDbG9zZURlbGF5OiAwLjEsXG4gIHRyaWdnZXJTdWJNZW51QWN0aW9uOiAnaG92ZXInLFxuICBwcmVmaXhDbHM6ICdyYy1tZW51JyxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgbW9kZTogJ3ZlcnRpY2FsJyxcbiAgc3R5bGU6IHt9LFxuICBidWlsdGluUGxhY2VtZW50czoge30sXG4gIG92ZXJmbG93ZWRJbmRpY2F0b3I6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ3NwYW4nLFxuICAgIG51bGwsXG4gICAgJ1xceEI3XFx4QjdcXHhCNydcbiAgKVxufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXMzID0gdGhpcztcblxuICB0aGlzLm9uU2VsZWN0ID0gZnVuY3Rpb24gKHNlbGVjdEluZm8pIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczMucHJvcHM7XG4gICAgaWYgKHByb3BzLnNlbGVjdGFibGUpIHtcbiAgICAgIC8vIHJvb3QgbWVudVxuICAgICAgdmFyIHNlbGVjdGVkS2V5cyA9IF90aGlzMy5zdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGVkS2V5cztcbiAgICAgIHZhciBzZWxlY3RlZEtleSA9IHNlbGVjdEluZm8ua2V5O1xuICAgICAgaWYgKHByb3BzLm11bHRpcGxlKSB7XG4gICAgICAgIHNlbGVjdGVkS2V5cyA9IHNlbGVjdGVkS2V5cy5jb25jYXQoW3NlbGVjdGVkS2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZEtleXMgPSBbc2VsZWN0ZWRLZXldO1xuICAgICAgfVxuICAgICAgaWYgKCEoJ3NlbGVjdGVkS2V5cycgaW4gcHJvcHMpKSB7XG4gICAgICAgIF90aGlzMy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwcm9wcy5vblNlbGVjdChfZXh0ZW5kcyh7fSwgc2VsZWN0SW5mbywge1xuICAgICAgICBzZWxlY3RlZEtleXM6IHNlbGVjdGVkS2V5c1xuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzMy5wcm9wcy5vbkNsaWNrKGUpO1xuICB9O1xuXG4gIHRoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUsIGNhbGxiYWNrKSB7XG4gICAgX3RoaXMzLmlubmVyTWVudS5nZXRXcmFwcGVkSW5zdGFuY2UoKS5vbktleURvd24oZSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIHRoaXMub25PcGVuQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXMzLnByb3BzO1xuICAgIHZhciBvcGVuS2V5cyA9IF90aGlzMy5zdG9yZS5nZXRTdGF0ZSgpLm9wZW5LZXlzLmNvbmNhdCgpO1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIHByb2Nlc3NTaW5nbGUgPSBmdW5jdGlvbiBwcm9jZXNzU2luZ2xlKGUpIHtcbiAgICAgIHZhciBvbmVDaGFuZ2VkID0gZmFsc2U7XG4gICAgICBpZiAoZS5vcGVuKSB7XG4gICAgICAgIG9uZUNoYW5nZWQgPSBvcGVuS2V5cy5pbmRleE9mKGUua2V5KSA9PT0gLTE7XG4gICAgICAgIGlmIChvbmVDaGFuZ2VkKSB7XG4gICAgICAgICAgb3BlbktleXMucHVzaChlLmtleSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpbmRleCA9IG9wZW5LZXlzLmluZGV4T2YoZS5rZXkpO1xuICAgICAgICBvbmVDaGFuZ2VkID0gaW5kZXggIT09IC0xO1xuICAgICAgICBpZiAob25lQ2hhbmdlZCkge1xuICAgICAgICAgIG9wZW5LZXlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZWQgPSBjaGFuZ2VkIHx8IG9uZUNoYW5nZWQ7XG4gICAgfTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIC8vIGJhdGNoIGNoYW5nZSBjYWxsXG4gICAgICBldmVudC5mb3JFYWNoKHByb2Nlc3NTaW5nbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzU2luZ2xlKGV2ZW50KTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIGlmICghKCdvcGVuS2V5cycgaW4gX3RoaXMzLnByb3BzKSkge1xuICAgICAgICBfdGhpczMuc3RvcmUuc2V0U3RhdGUoeyBvcGVuS2V5czogb3BlbktleXMgfSk7XG4gICAgICB9XG4gICAgICBwcm9wcy5vbk9wZW5DaGFuZ2Uob3BlbktleXMpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uRGVzZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0SW5mbykge1xuICAgIHZhciBwcm9wcyA9IF90aGlzMy5wcm9wcztcbiAgICBpZiAocHJvcHMuc2VsZWN0YWJsZSkge1xuICAgICAgdmFyIHNlbGVjdGVkS2V5cyA9IF90aGlzMy5zdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGVkS2V5cy5jb25jYXQoKTtcbiAgICAgIHZhciBzZWxlY3RlZEtleSA9IHNlbGVjdEluZm8ua2V5O1xuICAgICAgdmFyIGluZGV4ID0gc2VsZWN0ZWRLZXlzLmluZGV4T2Yoc2VsZWN0ZWRLZXkpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBzZWxlY3RlZEtleXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGlmICghKCdzZWxlY3RlZEtleXMnIGluIHByb3BzKSkge1xuICAgICAgICBfdGhpczMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICAgIHNlbGVjdGVkS2V5czogc2VsZWN0ZWRLZXlzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcHJvcHMub25EZXNlbGVjdChfZXh0ZW5kcyh7fSwgc2VsZWN0SW5mbywge1xuICAgICAgICBzZWxlY3RlZEtleXM6IHNlbGVjdGVkS2V5c1xuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmdldE9wZW5UcmFuc2l0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczMucHJvcHM7XG4gICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMub3BlblRyYW5zaXRpb25OYW1lO1xuICAgIHZhciBhbmltYXRpb25OYW1lID0gcHJvcHMub3BlbkFuaW1hdGlvbjtcbiAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIHR5cGVvZiBhbmltYXRpb25OYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5wcmVmaXhDbHMgKyAnLW9wZW4tJyArIGFuaW1hdGlvbk5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAncmMtdXRpbC9lcy9LZXlDb2RlJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHNjcm9sbEludG9WaWV3IGZyb20gJ2RvbS1zY3JvbGwtaW50by12aWV3JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdtaW5pLXN0b3JlJztcbmltcG9ydCB7IG5vb3AsIG1lbnVBbGxQcm9wcyB9IGZyb20gJy4vdXRpbCc7XG5cbi8qIGVzbGludCByZWFjdC9uby1pcy1tb3VudGVkOjAgKi9cblxuZXhwb3J0IHZhciBNZW51SXRlbSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNZW51SXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTWVudUl0ZW0ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudUl0ZW0pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5FTlRFUikge1xuICAgICAgICBfdGhpcy5vbkNsaWNrKGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGV2ZW50S2V5ID0gX3RoaXMkcHJvcHMuZXZlbnRLZXksXG4gICAgICAgICAgb25JdGVtSG92ZXIgPSBfdGhpcyRwcm9wcy5vbkl0ZW1Ib3ZlcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfdGhpcyRwcm9wcy5vbk1vdXNlTGVhdmU7XG5cbiAgICAgIG9uSXRlbUhvdmVyKHtcbiAgICAgICAga2V5OiBldmVudEtleSxcbiAgICAgICAgaG92ZXI6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIG9uTW91c2VMZWF2ZSh7XG4gICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgIGRvbUV2ZW50OiBlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBldmVudEtleSA9IF90aGlzJHByb3BzMi5ldmVudEtleSxcbiAgICAgICAgICBvbkl0ZW1Ib3ZlciA9IF90aGlzJHByb3BzMi5vbkl0ZW1Ib3ZlcixcbiAgICAgICAgICBvbk1vdXNlRW50ZXIgPSBfdGhpcyRwcm9wczIub25Nb3VzZUVudGVyO1xuXG4gICAgICBvbkl0ZW1Ib3Zlcih7XG4gICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgIGhvdmVyOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIG9uTW91c2VFbnRlcih7XG4gICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgIGRvbUV2ZW50OiBlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZXZlbnRLZXkgPSBfdGhpcyRwcm9wczMuZXZlbnRLZXksXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczMubXVsdGlwbGUsXG4gICAgICAgICAgb25DbGljayA9IF90aGlzJHByb3BzMy5vbkNsaWNrLFxuICAgICAgICAgIG9uU2VsZWN0ID0gX3RoaXMkcHJvcHMzLm9uU2VsZWN0LFxuICAgICAgICAgIG9uRGVzZWxlY3QgPSBfdGhpcyRwcm9wczMub25EZXNlbGVjdCxcbiAgICAgICAgICBpc1NlbGVjdGVkID0gX3RoaXMkcHJvcHMzLmlzU2VsZWN0ZWQ7XG5cbiAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgICBrZXlQYXRoOiBbZXZlbnRLZXldLFxuICAgICAgICBpdGVtOiBfdGhpcyxcbiAgICAgICAgZG9tRXZlbnQ6IGVcbiAgICAgIH07XG4gICAgICBvbkNsaWNrKGluZm8pO1xuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgb25EZXNlbGVjdChpbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvblNlbGVjdChpbmZvKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghaXNTZWxlY3RlZCkge1xuICAgICAgICBvblNlbGVjdChpbmZvKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgTWVudUl0ZW0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gaW52b2tlIGN1c3RvbWl6ZWQgcmVmIHRvIGV4cG9zZSBjb21wb25lbnQgdG8gbWl4aW5cbiAgICB0aGlzLmNhbGxSZWYoKTtcbiAgfTtcblxuICBNZW51SXRlbS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgc2Nyb2xsSW50b1ZpZXcoUmVhY3RET00uZmluZERPTU5vZGUodGhpcyksIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucHJvcHMucGFyZW50TWVudSksIHtcbiAgICAgICAgb25seVNjcm9sbElmTmVlZGVkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jYWxsUmVmKCk7XG4gIH07XG5cbiAgTWVudUl0ZW0ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJvcHMub25EZXN0cm95KSB7XG4gICAgICBwcm9wcy5vbkRlc3Ryb3kocHJvcHMuZXZlbnRLZXkpO1xuICAgIH1cbiAgfTtcblxuICBNZW51SXRlbS5wcm90b3R5cGUuZ2V0UHJlZml4Q2xzID0gZnVuY3Rpb24gZ2V0UHJlZml4Q2xzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnJvb3RQcmVmaXhDbHMgKyAnLWl0ZW0nO1xuICB9O1xuXG4gIE1lbnVJdGVtLnByb3RvdHlwZS5nZXRBY3RpdmVDbGFzc05hbWUgPSBmdW5jdGlvbiBnZXRBY3RpdmVDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJlZml4Q2xzKCkgKyAnLWFjdGl2ZSc7XG4gIH07XG5cbiAgTWVudUl0ZW0ucHJvdG90eXBlLmdldFNlbGVjdGVkQ2xhc3NOYW1lID0gZnVuY3Rpb24gZ2V0U2VsZWN0ZWRDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJlZml4Q2xzKCkgKyAnLXNlbGVjdGVkJztcbiAgfTtcblxuICBNZW51SXRlbS5wcm90b3R5cGUuZ2V0RGlzYWJsZWRDbGFzc05hbWUgPSBmdW5jdGlvbiBnZXREaXNhYmxlZENsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcmVmaXhDbHMoKSArICctZGlzYWJsZWQnO1xuICB9O1xuXG4gIE1lbnVJdGVtLnByb3RvdHlwZS5jYWxsUmVmID0gZnVuY3Rpb24gY2FsbFJlZigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYW51YWxSZWYpIHtcbiAgICAgIHRoaXMucHJvcHMubWFudWFsUmVmKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBNZW51SXRlbS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyh0aGlzLmdldFByZWZpeENscygpLCBwcm9wcy5jbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfY2xhc3NOYW1lc1t0aGlzLmdldEFjdGl2ZUNsYXNzTmFtZSgpXSA9ICFwcm9wcy5kaXNhYmxlZCAmJiBwcm9wcy5hY3RpdmUsIF9jbGFzc05hbWVzW3RoaXMuZ2V0U2VsZWN0ZWRDbGFzc05hbWUoKV0gPSBwcm9wcy5pc1NlbGVjdGVkLCBfY2xhc3NOYW1lc1t0aGlzLmdldERpc2FibGVkQ2xhc3NOYW1lKCldID0gcHJvcHMuZGlzYWJsZWQsIF9jbGFzc05hbWVzKSk7XG4gICAgdmFyIGF0dHJzID0gX2V4dGVuZHMoe30sIHByb3BzLmF0dHJpYnV0ZSwge1xuICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAvLyBzZXQgdG8gbWVudWl0ZW0gYnkgZGVmYXVsdFxuICAgICAgcm9sZTogcHJvcHMucm9sZSB8fCAnbWVudWl0ZW0nLFxuICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlZFxuICAgIH0pO1xuXG4gICAgaWYgKHByb3BzLnJvbGUgPT09ICdvcHRpb24nKSB7XG4gICAgICAvLyBvdmVyd3JpdGUgdG8gb3B0aW9uXG4gICAgICBhdHRycyA9IF9leHRlbmRzKHt9LCBhdHRycywge1xuICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBwcm9wcy5pc1NlbGVjdGVkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLnJvbGUgPT09IG51bGwgfHwgcHJvcHMucm9sZSA9PT0gJ25vbmUnKSB7XG4gICAgICAvLyBzb21ldGltZXMgd2Ugd2FudCB0byBzcGVjaWZ5IHJvbGUgaW5zaWRlIDxsaS8+IGVsZW1lbnRcbiAgICAgIC8vIDxsaT48YSByb2xlPSdtZW51aXRlbSc+TGluazwvYT48L2xpPiB3b3VsZCBiZSBhIGdvb2QgZXhhbXBsZVxuICAgICAgLy8gaW4gdGhpcyBjYXNlIHRoZSByb2xlIG9uIDxsaS8+IHNob3VsZCBiZSBcIm5vbmVcIiB0b1xuICAgICAgLy8gcmVtb3ZlIHRoZSBpbXBsaWVkIGxpc3RpdGVtIHJvbGUuXG4gICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLTEuMS9leGFtcGxlcy9tZW51YmFyL21lbnViYXItMS9tZW51YmFyLTEuaHRtbFxuICAgICAgYXR0cnMucm9sZSA9ICdub25lJztcbiAgICB9XG4gICAgLy8gSW4gY2FzZSB0aGF0IG9uQ2xpY2svb25Nb3VzZUxlYXZlL29uTW91c2VFbnRlciBpcyBwYXNzZWQgZG93biBmcm9tIG93bmVyXG4gICAgdmFyIG1vdXNlRXZlbnQgPSB7XG4gICAgICBvbkNsaWNrOiBwcm9wcy5kaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBvbk1vdXNlTGVhdmU6IHByb3BzLmRpc2FibGVkID8gbnVsbCA6IHRoaXMub25Nb3VzZUxlYXZlLFxuICAgICAgb25Nb3VzZUVudGVyOiBwcm9wcy5kaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uTW91c2VFbnRlclxuICAgIH07XG4gICAgdmFyIHN0eWxlID0gX2V4dGVuZHMoe30sIHByb3BzLnN0eWxlKTtcbiAgICBpZiAocHJvcHMubW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHN0eWxlLnBhZGRpbmdMZWZ0ID0gcHJvcHMuaW5saW5lSW5kZW50ICogcHJvcHMubGV2ZWw7XG4gICAgfVxuICAgIG1lbnVBbGxQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBkZWxldGUgcHJvcHNba2V5XTtcbiAgICB9KTtcbiAgICB2YXIgaWNvbiA9IHRoaXMucHJvcHMuaXRlbUljb247XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLml0ZW1JY29uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpY29uID0gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLml0ZW1JY29uLCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCBhdHRycywgbW91c2VFdmVudCwge1xuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH0pLFxuICAgICAgcHJvcHMuY2hpbGRyZW4sXG4gICAgICBpY29uXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gTWVudUl0ZW07XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbk1lbnVJdGVtLnByb3BUeXBlcyA9IHtcbiAgYXR0cmlidXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICByb290UHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBldmVudEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIHNlbGVjdGVkS2V5czogUHJvcFR5cGVzLmFycmF5LFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkl0ZW1Ib3ZlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBwYXJlbnRNZW51OiBQcm9wVHlwZXMub2JqZWN0LFxuICBvbkRlc3Ryb3k6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBtYW51YWxSZWY6IFByb3BUeXBlcy5mdW5jLFxuICBpdGVtSWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSlcbn07XG5NZW51SXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uU2VsZWN0OiBub29wLFxuICBvbk1vdXNlRW50ZXI6IG5vb3AsXG4gIG9uTW91c2VMZWF2ZTogbm9vcCxcbiAgbWFudWFsUmVmOiBub29wXG59O1xuTWVudUl0ZW0uaXNNZW51SXRlbSA9IHRydWU7XG5cbnZhciBjb25uZWN0ZWQgPSBjb25uZWN0KGZ1bmN0aW9uIChfcmVmLCBfcmVmMikge1xuICB2YXIgYWN0aXZlS2V5ID0gX3JlZi5hY3RpdmVLZXksXG4gICAgICBzZWxlY3RlZEtleXMgPSBfcmVmLnNlbGVjdGVkS2V5cztcbiAgdmFyIGV2ZW50S2V5ID0gX3JlZjIuZXZlbnRLZXksXG4gICAgICBzdWJNZW51S2V5ID0gX3JlZjIuc3ViTWVudUtleTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmU6IGFjdGl2ZUtleVtzdWJNZW51S2V5XSA9PT0gZXZlbnRLZXksXG4gICAgaXNTZWxlY3RlZDogc2VsZWN0ZWRLZXlzLmluZGV4T2YoZXZlbnRLZXkpICE9PSAtMVxuICB9O1xufSkoTWVudUl0ZW0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0ZWQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1lbnVBbGxQcm9wcyB9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBNZW51SXRlbUdyb3VwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1lbnVJdGVtR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1lbnVJdGVtR3JvdXAoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZW51SXRlbUdyb3VwKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5yZW5kZXJJbm5lck1lbnVJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHJlbmRlck1lbnVJdGVtID0gX3RoaXMkcHJvcHMucmVuZGVyTWVudUl0ZW0sXG4gICAgICAgICAgaW5kZXggPSBfdGhpcyRwcm9wcy5pbmRleDtcblxuICAgICAgcmV0dXJuIHJlbmRlck1lbnVJdGVtKGl0ZW0sIGluZGV4LCBfdGhpcy5wcm9wcy5zdWJNZW51S2V5KTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIE1lbnVJdGVtR3JvdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcy5wcm9wcywgW10pO1xuXG4gICAgdmFyIF9wcm9wcyRjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcyRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3Byb3BzJGNsYXNzTmFtZSxcbiAgICAgICAgcm9vdFByZWZpeENscyA9IHByb3BzLnJvb3RQcmVmaXhDbHM7XG5cbiAgICB2YXIgdGl0bGVDbGFzc05hbWUgPSByb290UHJlZml4Q2xzICsgJy1pdGVtLWdyb3VwLXRpdGxlJztcbiAgICB2YXIgbGlzdENsYXNzTmFtZSA9IHJvb3RQcmVmaXhDbHMgKyAnLWl0ZW0tZ3JvdXAtbGlzdCc7XG4gICAgdmFyIHRpdGxlID0gcHJvcHMudGl0bGUsXG4gICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICBtZW51QWxsUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gZGVsZXRlIHByb3BzW2tleV07XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgb25DbGljayB0byBudWxsLCB0byBpZ25vcmUgcHJvcGFnYXRlZCBvbkNsaWNrIGV2ZW50XG4gICAgZGVsZXRlIHByb3BzLm9uQ2xpY2s7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnICcgKyByb290UHJlZml4Q2xzICsgJy1pdGVtLWdyb3VwJyB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0aXRsZUNsYXNzTmFtZSxcbiAgICAgICAgICB0aXRsZTogdHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyA/IHRpdGxlIDogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlXG4gICAgICApLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGxpc3RDbGFzc05hbWUgfSxcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlcklubmVyTWVudUl0ZW0pXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gTWVudUl0ZW1Hcm91cDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuTWVudUl0ZW1Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIHJlbmRlck1lbnVJdGVtOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3ViTWVudUtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcm9vdFByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZ1xufTtcbk1lbnVJdGVtR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogdHJ1ZVxufTtcblxuXG5NZW51SXRlbUdyb3VwLmlzTWVudUl0ZW1Hcm91cCA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtR3JvdXA7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG52YXIgRGl2aWRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEaXZpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEaXZpZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEaXZpZGVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgRGl2aWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICByb290UHJlZml4Q2xzID0gX3Byb3BzLnJvb3RQcmVmaXhDbHMsXG4gICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnICcgKyByb290UHJlZml4Q2xzICsgJy1pdGVtLWRpdmlkZXInLFxuICAgICAgc3R5bGU6IHN0eWxlXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIERpdmlkZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkRpdmlkZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJvb3RQcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuRGl2aWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIC8vIFRvIGZpeCBrZXlib2FyZCBVWC5cbiAgZGlzYWJsZWQ6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIHN0eWxlOiB7fVxufTtcbmV4cG9ydCBkZWZhdWx0IERpdmlkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmV0ID0gW107XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0LnB1c2goYyk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gdG9UaXRsZSh0aXRsZSkge1xuICBpZiAodHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZVByb3BWYWx1ZShjaGlsZCkge1xuICBpZiAoIWNoaWxkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcHJvcHMgPSBjaGlsZC5wcm9wcztcblxuICBpZiAoJ3ZhbHVlJyBpbiBwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy52YWx1ZTtcbiAgfVxuXG4gIGlmIChjaGlsZC5rZXkpIHtcbiAgICByZXR1cm4gY2hpbGQua2V5O1xuICB9XG5cbiAgaWYgKGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZS5pc1NlbGVjdE9wdEdyb3VwICYmIHByb3BzLmxhYmVsKSB7XG4gICAgcmV0dXJuIHByb3BzLmxhYmVsO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiTmVlZCBhdCBsZWFzdCBhIGtleSBvciBhIHZhbHVlIG9yIGEgbGFiZWwgKG9ubHkgZm9yIE9wdEdyb3VwKSBmb3IgXCIuY29uY2F0KGNoaWxkKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcFZhbHVlKGNoaWxkLCBwcm9wKSB7XG4gIGlmIChwcm9wID09PSAndmFsdWUnKSB7XG4gICAgcmV0dXJuIGdldFZhbHVlUHJvcFZhbHVlKGNoaWxkKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZC5wcm9wc1twcm9wXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc011bHRpcGxlKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5tdWx0aXBsZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbWJvYm94KHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5jb21ib2JveDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc011bHRpcGxlT3JUYWdzKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5tdWx0aXBsZSB8fCBwcm9wcy50YWdzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTXVsdGlwbGVPclRhZ3NPckNvbWJvYm94KHByb3BzKSB7XG4gIHJldHVybiBpc011bHRpcGxlT3JUYWdzKHByb3BzKSB8fCBpc0NvbWJvYm94KHByb3BzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1NpbmdsZU1vZGUocHJvcHMpIHtcbiAgcmV0dXJuICFpc011bHRpcGxlT3JUYWdzT3JDb21ib2JveChwcm9wcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICB2YXIgcmV0ID0gdmFsdWU7XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXQgPSBbXTtcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXQgPSBbdmFsdWVdO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBLZXkodmFsdWUpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHR5cGVvZiB2YWx1ZSwgXCItXCIpLmNvbmNhdCh2YWx1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJldmVudERlZmF1bHRFdmVudChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW5kZXhJblZhbHVlQnlTaW5nbGVWYWx1ZSh2YWx1ZSwgc2luZ2xlVmFsdWUpIHtcbiAgdmFyIGluZGV4ID0gLTE7XG5cbiAgaWYgKHZhbHVlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlW2ldID09PSBzaW5nbGVWYWx1ZSkge1xuICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYWJlbEZyb21Qcm9wc1ZhbHVlKHZhbHVlLCBrZXkpIHtcbiAgdmFyIGxhYmVsO1xuICB2YWx1ZSA9IHRvQXJyYXkodmFsdWUpO1xuXG4gIGlmICh2YWx1ZSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlW2ldLmtleSA9PT0ga2V5KSB7XG4gICAgICAgIGxhYmVsID0gdmFsdWVbaV0ubGFiZWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RLZXlzKG1lbnVJdGVtcywgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgc2VsZWN0ZWRLZXlzID0gW107XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2gobWVudUl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciB0eXBlID0gaXRlbS50eXBlO1xuXG4gICAgaWYgKHR5cGUuaXNNZW51SXRlbUdyb3VwKSB7XG4gICAgICBzZWxlY3RlZEtleXMgPSBzZWxlY3RlZEtleXMuY29uY2F0KGdldFNlbGVjdEtleXMoaXRlbS5wcm9wcy5jaGlsZHJlbiwgdmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGl0ZW1WYWx1ZSA9IGdldFZhbHVlUHJvcFZhbHVlKGl0ZW0pO1xuICAgICAgdmFyIGl0ZW1LZXkgPSBpdGVtLmtleTtcblxuICAgICAgaWYgKGZpbmRJbmRleEluVmFsdWVCeVNpbmdsZVZhbHVlKHZhbHVlLCBpdGVtVmFsdWUpICE9PSAtMSAmJiBpdGVtS2V5KSB7XG4gICAgICAgIHNlbGVjdGVkS2V5cy5wdXNoKGl0ZW1LZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWxlY3RlZEtleXM7XG59XG5leHBvcnQgdmFyIFVOU0VMRUNUQUJMRV9TVFlMRSA9IHtcbiAgdXNlclNlbGVjdDogJ25vbmUnLFxuICBXZWJraXRVc2VyU2VsZWN0OiAnbm9uZSdcbn07XG5leHBvcnQgdmFyIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUgPSB7XG4gIHVuc2VsZWN0YWJsZTogJ29uJ1xufTtcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlyc3RNZW51SXRlbShjaGlsZHJlbikge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICBpZiAoY2hpbGQudHlwZS5pc01lbnVJdGVtR3JvdXApIHtcbiAgICAgIHZhciBmb3VuZCA9IGZpbmRGaXJzdE1lbnVJdGVtKGNoaWxkLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFjaGlsZC5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVzU2VwYXJhdG9ycyhzdHIsIHNlcGFyYXRvcnMpIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXBhcmF0b3JzLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHN0ci5sYXN0SW5kZXhPZihzZXBhcmF0b3JzW2ldKSA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEJ5U2VwYXJhdG9ycyhzdHIsIHNlcGFyYXRvcnMpIHtcbiAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCJbXCIuY29uY2F0KHNlcGFyYXRvcnMuam9pbigpLCBcIl1cIikpO1xuICByZXR1cm4gc3RyLnNwbGl0KHJlZykuZmlsdGVyKGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZpbHRlckZuKGlucHV0LCBjaGlsZCkge1xuICBpZiAoY2hpbGQucHJvcHMuZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgdmFsdWUgPSB0b0FycmF5KGdldFByb3BWYWx1ZShjaGlsZCwgdGhpcy5wcm9wcy5vcHRpb25GaWx0ZXJQcm9wKSkuam9pbignJyk7XG4gIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPiAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU9wdGlvblZhbHVlKHZhbHVlLCBwcm9wcykge1xuICBpZiAoaXNTaW5nbGVNb2RlKHByb3BzKSB8fCBpc011bHRpcGxlKHByb3BzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBgdmFsdWVgIG9mIHR5cGUgYFwiLmNvbmNhdCh0eXBlb2YgdmFsdWUsIFwiYCBzdXBwbGllZCB0byBPcHRpb24sIFwiKSArIFwiZXhwZWN0ZWQgYHN0cmluZ2Agd2hlbiBgdGFncy9jb21ib2JveGAgaXMgYHRydWVgLlwiKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSZWYoaW5zdGFuY2UsIG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaW5zdGFuY2VbbmFtZV0gPSBub2RlO1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgICByZXR1cm4gJ3Rlc3QtdXVpZCc7XG4gIH1cblxuICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG5cbiAgICByZXR1cm4gKGMgPT09ICd4JyA/IHIgOiByICYgMHg3IHwgMHg4KS50b1N0cmluZygxNik7XG4gIH0pO1xuICByZXR1cm4gdXVpZDtcbn0iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmltcG9ydCBzY3JvbGxJbnRvVmlldyBmcm9tICdkb20tc2Nyb2xsLWludG8tdmlldyc7XG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgcmFmIGZyb20gJ3JhZic7XG5pbXBvcnQgTWVudSBmcm9tICdyYy1tZW51JztcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGdldFNlbGVjdEtleXMsIHByZXZlbnREZWZhdWx0RXZlbnQsIHNhdmVSZWYgfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgRHJvcGRvd25NZW51ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEcm9wZG93bk1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duTWVudShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wZG93bk1lbnUpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoRHJvcGRvd25NZW51KS5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgX3RoaXMucmFmSW5zdGFuY2UgPSB7XG4gICAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgICBfdGhpcy5sYXN0VmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgX3RoaXMuc2Nyb2xsQWN0aXZlSXRlbVRvVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHNjcm9sbCBpbnRvIHZpZXdcbiAgICAgIHZhciBpdGVtQ29tcG9uZW50ID0gZmluZERPTU5vZGUoX3RoaXMuZmlyc3RBY3RpdmVJdGVtKTtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHZpc2libGUgPSBfdGhpcyRwcm9wcy52aXNpYmxlLFxuICAgICAgICAgIGZpcnN0QWN0aXZlVmFsdWUgPSBfdGhpcyRwcm9wcy5maXJzdEFjdGl2ZVZhbHVlO1xuICAgICAgdmFyIHZhbHVlID0gX3RoaXMucHJvcHMudmFsdWU7XG5cbiAgICAgIGlmICghaXRlbUNvbXBvbmVudCB8fCAhdmlzaWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzY3JvbGxJbnRvVmlld09wdHMgPSB7XG4gICAgICAgIG9ubHlTY3JvbGxJZk5lZWRlZDogdHJ1ZVxuICAgICAgfTtcblxuICAgICAgaWYgKCghdmFsdWUgfHwgdmFsdWUubGVuZ3RoID09PSAwKSAmJiBmaXJzdEFjdGl2ZVZhbHVlKSB7XG4gICAgICAgIHNjcm9sbEludG9WaWV3T3B0cy5hbGlnbldpdGhUb3AgPSB0cnVlO1xuICAgICAgfSAvLyBEZWxheSB0byBzY3JvbGwgc2luY2UgY3VycmVudCBmcmFtZSBpdGVtIHBvc2l0aW9uIGlzIG5vdCByZWFkeSB3aGVuIHByZSB2aWV3IGlzIGJ5IGZpbHRlclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTEyNjgjaXNzdWVjb21tZW50LTQwNjYzNDQ2MlxuXG5cbiAgICAgIF90aGlzLnJhZkluc3RhbmNlID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXcoaXRlbUNvbXBvbmVudCwgZmluZERPTU5vZGUoX3RoaXMubWVudVJlZiksIHNjcm9sbEludG9WaWV3T3B0cyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyTWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtZW51SXRlbXMgPSBfdGhpcyRwcm9wczIubWVudUl0ZW1zLFxuICAgICAgICAgIG1lbnVJdGVtU2VsZWN0ZWRJY29uID0gX3RoaXMkcHJvcHMyLm1lbnVJdGVtU2VsZWN0ZWRJY29uLFxuICAgICAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiA9IF90aGlzJHByb3BzMi5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzMi5tdWx0aXBsZSxcbiAgICAgICAgICBvbk1lbnVTZWxlY3QgPSBfdGhpcyRwcm9wczIub25NZW51U2VsZWN0LFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczIuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBiYWNrZmlsbFZhbHVlID0gX3RoaXMkcHJvcHMyLmJhY2tmaWxsVmFsdWUsXG4gICAgICAgICAgb25NZW51RGVzZWxlY3QgPSBfdGhpcyRwcm9wczIub25NZW51RGVzZWxlY3QsXG4gICAgICAgICAgdmlzaWJsZSA9IF90aGlzJHByb3BzMi52aXNpYmxlO1xuICAgICAgdmFyIGZpcnN0QWN0aXZlVmFsdWUgPSBfdGhpcy5wcm9wcy5maXJzdEFjdGl2ZVZhbHVlO1xuXG4gICAgICBpZiAobWVudUl0ZW1zICYmIG1lbnVJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG1lbnVQcm9wcyA9IHt9O1xuXG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgIG1lbnVQcm9wcy5vbkRlc2VsZWN0ID0gb25NZW51RGVzZWxlY3Q7XG4gICAgICAgICAgbWVudVByb3BzLm9uU2VsZWN0ID0gb25NZW51U2VsZWN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lbnVQcm9wcy5vbkNsaWNrID0gb25NZW51U2VsZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMucHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBzZWxlY3RlZEtleXMgPSBnZXRTZWxlY3RLZXlzKG1lbnVJdGVtcywgdmFsdWUpO1xuICAgICAgICB2YXIgYWN0aXZlS2V5UHJvcHMgPSB7fTtcbiAgICAgICAgdmFyIGRlZmF1bHRBY3RpdmVGaXJzdCA9IGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjtcbiAgICAgICAgdmFyIGNsb25lZE1lbnVJdGVtcyA9IG1lbnVJdGVtcztcblxuICAgICAgICBpZiAoc2VsZWN0ZWRLZXlzLmxlbmd0aCB8fCBmaXJzdEFjdGl2ZVZhbHVlKSB7XG4gICAgICAgICAgaWYgKHZpc2libGUgJiYgIV90aGlzLmxhc3RWaXNpYmxlKSB7XG4gICAgICAgICAgICBhY3RpdmVLZXlQcm9wcy5hY3RpdmVLZXkgPSBzZWxlY3RlZEtleXNbMF0gfHwgZmlyc3RBY3RpdmVWYWx1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBEbyBub3QgdHJpZ2dlciBhdXRvIGFjdGl2ZSBzaW5jZSB3ZSBhbHJlYWR5IGhhdmUgc2VsZWN0ZWRLZXlzXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRLZXlzWzBdKSB7XG4gICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhY3RpdmVLZXlQcm9wcy5hY3RpdmVLZXkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGZvdW5kRmlyc3QgPSBmYWxzZTsgLy8gc2V0IGZpcnN0QWN0aXZlSXRlbSB2aWEgY2xvbmluZyBtZW51c1xuICAgICAgICAgIC8vIGZvciBzY3JvbGwgaW50byB2aWV3XG5cbiAgICAgICAgICB2YXIgY2xvbmUgPSBmdW5jdGlvbiBjbG9uZShpdGVtKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gaXRlbS5rZXk7XG5cbiAgICAgICAgICAgIGlmICghZm91bmRGaXJzdCAmJiBzZWxlY3RlZEtleXMuaW5kZXhPZihrZXkpICE9PSAtMSB8fCAhZm91bmRGaXJzdCAmJiAhc2VsZWN0ZWRLZXlzLmxlbmd0aCAmJiBmaXJzdEFjdGl2ZVZhbHVlLmluZGV4T2YoaXRlbS5rZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICBmb3VuZEZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuICAgICAgICAgICAgICAgICAgX3RoaXMuZmlyc3RBY3RpdmVJdGVtID0gX3JlZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY2xvbmVkTWVudUl0ZW1zID0gbWVudUl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZS5pc01lbnVJdGVtR3JvdXApIHtcbiAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdG9BcnJheShpdGVtLnByb3BzLmNoaWxkcmVuKS5tYXAoY2xvbmUpO1xuICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGl0ZW0sIHt9LCBjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZShpdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDbGVhciBmaXJzdEFjdGl2ZUl0ZW0gd2hlbiBkcm9wZG93biBtZW51IGl0ZW1zIHdhcyBlbXB0eVxuICAgICAgICAgIC8vIEF2b2lkIGBVbmFibGUgdG8gZmluZCBub2RlIG9uIGFuIHVubW91bnRlZCBjb21wb25lbnRgXG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTA3NzRcbiAgICAgICAgICBfdGhpcy5maXJzdEFjdGl2ZUl0ZW0gPSBudWxsO1xuICAgICAgICB9IC8vIGNsZWFyIGFjdGl2ZUtleSB3aGVuIGlucHV0VmFsdWUgY2hhbmdlXG5cblxuICAgICAgICB2YXIgbGFzdFZhbHVlID0gdmFsdWUgJiYgdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKGlucHV0VmFsdWUgIT09IF90aGlzLmxhc3RJbnB1dFZhbHVlICYmICghbGFzdFZhbHVlIHx8IGxhc3RWYWx1ZSAhPT0gYmFja2ZpbGxWYWx1ZSkpIHtcbiAgICAgICAgICBhY3RpdmVLZXlQcm9wcy5hY3RpdmVLZXkgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnUsIF9leHRlbmRzKHtcbiAgICAgICAgICByZWY6IF90aGlzLnNhdmVNZW51UmVmLFxuICAgICAgICAgIHN0eWxlOiBfdGhpcy5wcm9wcy5kcm9wZG93bk1lbnVTdHlsZSxcbiAgICAgICAgICBkZWZhdWx0QWN0aXZlRmlyc3Q6IGRlZmF1bHRBY3RpdmVGaXJzdCxcbiAgICAgICAgICByb2xlOiBcImxpc3Rib3hcIixcbiAgICAgICAgICBpdGVtSWNvbjogbXVsdGlwbGUgPyBtZW51SXRlbVNlbGVjdGVkSWNvbiA6IG51bGxcbiAgICAgICAgfSwgYWN0aXZlS2V5UHJvcHMsIHtcbiAgICAgICAgICBtdWx0aXBsZTogbXVsdGlwbGVcbiAgICAgICAgfSwgbWVudVByb3BzLCB7XG4gICAgICAgICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXMsXG4gICAgICAgICAgcHJlZml4Q2xzOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1lbnVcIilcbiAgICAgICAgfSksIGNsb25lZE1lbnVJdGVtcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBfdGhpcy5sYXN0SW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWU7XG4gICAgX3RoaXMuc2F2ZU1lbnVSZWYgPSBzYXZlUmVmKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAnbWVudVJlZicpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcm9wZG93bk1lbnUsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zY3JvbGxBY3RpdmVJdGVtVG9WaWV3KCk7XG4gICAgICB0aGlzLmxhc3RWaXNpYmxlID0gdGhpcy5wcm9wcy52aXNpYmxlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaG91bGRDb21wb25lbnRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgaWYgKCFuZXh0UHJvcHMudmlzaWJsZSkge1xuICAgICAgICB0aGlzLmxhc3RWaXNpYmxlID0gZmFsc2U7XG4gICAgICB9IC8vIGZyZWV6ZSB3aGVuIGhpZGVcblxuXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy52aXNpYmxlICYmICFuZXh0UHJvcHMudmlzaWJsZSB8fCBuZXh0UHJvcHMudmlzaWJsZSB8fCBuZXh0UHJvcHMuaW5wdXRWYWx1ZSAhPT0gdGhpcy5wcm9wcy5pbnB1dFZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgaWYgKCFwcmV2UHJvcHMudmlzaWJsZSAmJiBwcm9wcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsQWN0aXZlSXRlbVRvVmlldygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxhc3RWaXNpYmxlID0gcHJvcHMudmlzaWJsZTtcbiAgICAgIHRoaXMubGFzdElucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnJhZkluc3RhbmNlICYmIHRoaXMucmFmSW5zdGFuY2UuY2FuY2VsKSB7XG4gICAgICAgIHRoaXMucmFmSW5zdGFuY2UuY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcmVuZGVyTWVudSA9IHRoaXMucmVuZGVyTWVudSgpO1xuICAgICAgcmV0dXJuIHJlbmRlck1lbnUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMCknXG4gICAgICAgIH0sXG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmFyaWFJZCxcbiAgICAgICAgb25Gb2N1czogdGhpcy5wcm9wcy5vblBvcHVwRm9jdXMsXG4gICAgICAgIG9uTW91c2VEb3duOiBwcmV2ZW50RGVmYXVsdEV2ZW50LFxuICAgICAgICBvblNjcm9sbDogdGhpcy5wcm9wcy5vblBvcHVwU2Nyb2xsXG4gICAgICB9LCByZW5kZXJNZW51KSA6IG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyb3Bkb3duTWVudTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgRHJvcGRvd25NZW51IGFzIGRlZmF1bHQgfTtcbkRyb3Bkb3duTWVudS5kaXNwbGF5TmFtZSA9ICdEcm9wZG93bk1lbnUnO1xuRHJvcGRvd25NZW51LnByb3BUeXBlcyA9IHtcbiAgYXJpYUlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IFByb3BUeXBlcy5ib29sLFxuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgZHJvcGRvd25NZW51U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25Qb3B1cEZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Qb3B1cFNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTWVudURlU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25NZW51U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51SXRlbXM6IFByb3BUeXBlcy5hbnksXG4gIGlucHV0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBmaXJzdEFjdGl2ZVZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51SXRlbVNlbGVjdGVkSWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSlcbn07IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUcmlnZ2VyIGZyb20gJ3JjLXRyaWdnZXInO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IHsgaXNTaW5nbGVNb2RlLCBzYXZlUmVmIH0gZnJvbSAnLi91dGlsJztcblRyaWdnZXIuZGlzcGxheU5hbWUgPSAnVHJpZ2dlcic7XG52YXIgQlVJTFRfSU5fUExBQ0VNRU5UUyA9IHtcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIG92ZXJmbG93OiB7XG4gICAgICBhZGp1c3RYOiAwLFxuICAgICAgYWRqdXN0WTogMVxuICAgIH1cbiAgfSxcbiAgdG9wTGVmdDoge1xuICAgIHBvaW50czogWydibCcsICd0bCddLFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICBvdmVyZmxvdzoge1xuICAgICAgYWRqdXN0WDogMCxcbiAgICAgIGFkanVzdFk6IDFcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTZWxlY3RUcmlnZ2VyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTZWxlY3RUcmlnZ2VyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTZWxlY3RUcmlnZ2VyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlbGVjdFRyaWdnZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU2VsZWN0VHJpZ2dlcikuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIF90aGlzLmRyb3Bkb3duTWVudVJlZiA9IG51bGw7XG5cbiAgICBfdGhpcy5zZXREcm9wZG93bldpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGRvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICAgIHZhciB3aWR0aCA9IGRvbS5vZmZzZXRXaWR0aDtcblxuICAgICAgaWYgKHdpZHRoICE9PSBfdGhpcy5zdGF0ZS5kcm9wZG93bldpZHRoKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkcm9wZG93bldpZHRoOiB3aWR0aFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0SW5uZXJNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmRyb3Bkb3duTWVudVJlZiAmJiBfdGhpcy5kcm9wZG93bk1lbnVSZWYubWVudVJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0UG9wdXBET01Ob2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnRyaWdnZXJSZWYuZ2V0UG9wdXBEb21Ob2RlKCk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldERyb3Bkb3duRWxlbWVudCA9IGZ1bmN0aW9uIChuZXdQcm9wcykge1xuICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICB2YXIgZHJvcGRvd25SZW5kZXIgPSBwcm9wcy5kcm9wZG93blJlbmRlcixcbiAgICAgICAgICBhcmlhSWQgPSBwcm9wcy5hcmlhSWQ7XG4gICAgICB2YXIgbWVudU5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bkb3duTWVudSwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IF90aGlzLnNhdmVEcm9wZG93bk1lbnVSZWZcbiAgICAgIH0sIG5ld1Byb3BzLCB7XG4gICAgICAgIGFyaWFJZDogYXJpYUlkLFxuICAgICAgICBwcmVmaXhDbHM6IF90aGlzLmdldERyb3Bkb3duUHJlZml4Q2xzKCksXG4gICAgICAgIG9uTWVudVNlbGVjdDogcHJvcHMub25NZW51U2VsZWN0LFxuICAgICAgICBvbk1lbnVEZXNlbGVjdDogcHJvcHMub25NZW51RGVzZWxlY3QsXG4gICAgICAgIG9uUG9wdXBTY3JvbGw6IHByb3BzLm9uUG9wdXBTY3JvbGwsXG4gICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgYmFja2ZpbGxWYWx1ZTogcHJvcHMuYmFja2ZpbGxWYWx1ZSxcbiAgICAgICAgZmlyc3RBY3RpdmVWYWx1ZTogcHJvcHMuZmlyc3RBY3RpdmVWYWx1ZSxcbiAgICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiBwcm9wcy5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sXG4gICAgICAgIGRyb3Bkb3duTWVudVN0eWxlOiBwcm9wcy5kcm9wZG93bk1lbnVTdHlsZSxcbiAgICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb246IHByb3BzLm1lbnVJdGVtU2VsZWN0ZWRJY29uXG4gICAgICB9KSk7XG5cbiAgICAgIGlmIChkcm9wZG93blJlbmRlcikge1xuICAgICAgICByZXR1cm4gZHJvcGRvd25SZW5kZXIobWVudU5vZGUsIHByb3BzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIF90aGlzLmdldERyb3Bkb3duVHJhbnNpdGlvbk5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lO1xuXG4gICAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIHByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IFwiXCIuY29uY2F0KF90aGlzLmdldERyb3Bkb3duUHJlZml4Q2xzKCksIFwiLVwiKS5jb25jYXQocHJvcHMuYW5pbWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXREcm9wZG93blByZWZpeENscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfdGhpcy5wcm9wcy5wcmVmaXhDbHMsIFwiLWRyb3Bkb3duXCIpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlRHJvcGRvd25NZW51UmVmID0gc2F2ZVJlZihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgJ2Ryb3Bkb3duTWVudVJlZicpO1xuICAgIF90aGlzLnNhdmVUcmlnZ2VyUmVmID0gc2F2ZVJlZihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgJ3RyaWdnZXJSZWYnKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyb3Bkb3duV2lkdGg6IDBcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTZWxlY3RUcmlnZ2VyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25XaWR0aCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5zZXREcm9wZG93bldpZHRoKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3BvcHVwQ2xhc3NOYW1lO1xuXG4gICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uUG9wdXBGb2N1cyA9IF9hLm9uUG9wdXBGb2N1cyxcbiAgICAgICAgICBlbXB0eSA9IF9hLmVtcHR5LFxuICAgICAgICAgIHByb3BzID0gX19yZXN0KF9hLCBbXCJvblBvcHVwRm9jdXNcIiwgXCJlbXB0eVwiXSk7XG5cbiAgICAgIHZhciBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgICAgIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgICAgIGRyb3Bkb3duQWxpZ24gPSBwcm9wcy5kcm9wZG93bkFsaWduLFxuICAgICAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgc2hvd1NlYXJjaCA9IHByb3BzLnNob3dTZWFyY2gsXG4gICAgICAgICAgZHJvcGRvd25DbGFzc05hbWUgPSBwcm9wcy5kcm9wZG93bkNsYXNzTmFtZSxcbiAgICAgICAgICBkcm9wZG93blN0eWxlID0gcHJvcHMuZHJvcGRvd25TdHlsZSxcbiAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSBwcm9wcy5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg7XG4gICAgICB2YXIgZHJvcGRvd25QcmVmaXhDbHMgPSB0aGlzLmdldERyb3Bkb3duUHJlZml4Q2xzKCk7XG4gICAgICB2YXIgcG9wdXBDbGFzc05hbWUgPSAoX3BvcHVwQ2xhc3NOYW1lID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcG9wdXBDbGFzc05hbWUsIGRyb3Bkb3duQ2xhc3NOYW1lLCAhIWRyb3Bkb3duQ2xhc3NOYW1lKSwgX2RlZmluZVByb3BlcnR5KF9wb3B1cENsYXNzTmFtZSwgXCJcIi5jb25jYXQoZHJvcGRvd25QcmVmaXhDbHMsIFwiLS1cIikuY29uY2F0KG11bHRpcGxlID8gJ211bHRpcGxlJyA6ICdzaW5nbGUnKSwgMSksIF9kZWZpbmVQcm9wZXJ0eShfcG9wdXBDbGFzc05hbWUsIFwiXCIuY29uY2F0KGRyb3Bkb3duUHJlZml4Q2xzLCBcIi0tZW1wdHlcIiksIGVtcHR5KSwgX3BvcHVwQ2xhc3NOYW1lKTtcbiAgICAgIHZhciBwb3B1cEVsZW1lbnQgPSB0aGlzLmdldERyb3Bkb3duRWxlbWVudCh7XG4gICAgICAgIG1lbnVJdGVtczogcHJvcHMub3B0aW9ucyxcbiAgICAgICAgb25Qb3B1cEZvY3VzOiBvblBvcHVwRm9jdXMsXG4gICAgICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcbiAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZVxuICAgICAgfSk7XG4gICAgICB2YXIgaGlkZUFjdGlvbjtcblxuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIGhpZGVBY3Rpb24gPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoaXNTaW5nbGVNb2RlKHByb3BzKSAmJiAhc2hvd1NlYXJjaCkge1xuICAgICAgICBoaWRlQWN0aW9uID0gWydjbGljayddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZUFjdGlvbiA9IFsnYmx1ciddO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG9wdXBTdHlsZSA9IF9leHRlbmRzKHt9LCBkcm9wZG93blN0eWxlKTtcblxuICAgICAgdmFyIHdpZHRoUHJvcCA9IGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA/ICd3aWR0aCcgOiAnbWluV2lkdGgnO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5kcm9wZG93bldpZHRoKSB7XG4gICAgICAgIHBvcHVwU3R5bGVbd2lkdGhQcm9wXSA9IFwiXCIuY29uY2F0KHRoaXMuc3RhdGUuZHJvcGRvd25XaWR0aCwgXCJweFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJpZ2dlciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHNob3dBY3Rpb246IGRpc2FibGVkID8gW10gOiB0aGlzLnByb3BzLnNob3dBY3Rpb24sXG4gICAgICAgIGhpZGVBY3Rpb246IGhpZGVBY3Rpb24sXG4gICAgICAgIHJlZjogdGhpcy5zYXZlVHJpZ2dlclJlZixcbiAgICAgICAgcG9wdXBQbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICAgICAgICBidWlsdGluUGxhY2VtZW50czogQlVJTFRfSU5fUExBQ0VNRU5UUyxcbiAgICAgICAgcHJlZml4Q2xzOiBkcm9wZG93blByZWZpeENscyxcbiAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZTogdGhpcy5nZXREcm9wZG93blRyYW5zaXRpb25OYW1lKCksXG4gICAgICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBwcm9wcy5vbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgcG9wdXA6IHBvcHVwRWxlbWVudCxcbiAgICAgICAgcG9wdXBBbGlnbjogZHJvcGRvd25BbGlnbixcbiAgICAgICAgcG9wdXBWaXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lOiBjbGFzc25hbWVzKHBvcHVwQ2xhc3NOYW1lKSxcbiAgICAgICAgcG9wdXBTdHlsZTogcG9wdXBTdHlsZVxuICAgICAgfSksIHByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2VsZWN0VHJpZ2dlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgU2VsZWN0VHJpZ2dlciBhcyBkZWZhdWx0IH07XG5TZWxlY3RUcmlnZ2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZHJvcGRvd25SZW5kZXI6IGZ1bmN0aW9uIGRyb3Bkb3duUmVuZGVyKG1lbnUpIHtcbiAgICByZXR1cm4gbWVudTtcbiAgfVxufTtcblNlbGVjdFRyaWdnZXIucHJvcFR5cGVzID0ge1xuICBvblBvcHVwRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBvblBvcHVwU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcbiAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcbiAgZHJvcGRvd25BbGlnbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd1NlYXJjaDogUHJvcFR5cGVzLmJvb2wsXG4gIGRyb3Bkb3duQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGlucHV0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpbHRlck9wdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFueSxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwb3B1cENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIHNob3dBY3Rpb246IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBtZW51SXRlbVNlbGVjdGVkSWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG4gIGRyb3Bkb3duUmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgYXJpYUlkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuU2VsZWN0VHJpZ2dlci5kaXNwbGF5TmFtZSA9ICdTZWxlY3RUcmlnZ2VyJzsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnY29tcG9uZW50LWNsYXNzZXMnO1xuaW1wb3J0IEFuaW1hdGUgZnJvbSAncmMtYW5pbWF0ZSc7XG5pbXBvcnQgeyBJdGVtIGFzIE1lbnVJdGVtLCBJdGVtR3JvdXAgYXMgTWVudUl0ZW1Hcm91cCB9IGZyb20gJ3JjLW1lbnUnO1xuaW1wb3J0IGNoaWxkcmVuVG9BcnJheSBmcm9tIFwicmMtdXRpbC9lcy9DaGlsZHJlbi90b0FycmF5XCI7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgcG9seWZpbGwgfSBmcm9tICdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCBPcHRpb24gZnJvbSAnLi9PcHRpb24nO1xuaW1wb3J0IFNlbGVjdFByb3BUeXBlcyBmcm9tICcuL1Byb3BUeXBlcyc7XG5pbXBvcnQgU2VsZWN0VHJpZ2dlciBmcm9tICcuL1NlbGVjdFRyaWdnZXInO1xuaW1wb3J0IHsgZGVmYXVsdEZpbHRlckZuLCBmaW5kRmlyc3RNZW51SXRlbSwgZmluZEluZGV4SW5WYWx1ZUJ5U2luZ2xlVmFsdWUsIGdlbmVyYXRlVVVJRCwgZ2V0TGFiZWxGcm9tUHJvcHNWYWx1ZSwgZ2V0TWFwS2V5LCBnZXRQcm9wVmFsdWUsIGdldFZhbHVlUHJvcFZhbHVlLCBpbmNsdWRlc1NlcGFyYXRvcnMsIGlzQ29tYm9ib3gsIGlzTXVsdGlwbGVPclRhZ3MsIGlzTXVsdGlwbGVPclRhZ3NPckNvbWJvYm94LCBpc1NpbmdsZU1vZGUsIHByZXZlbnREZWZhdWx0RXZlbnQsIHNhdmVSZWYsIHNwbGl0QnlTZXBhcmF0b3JzLCB0b0FycmF5LCB0b1RpdGxlLCBVTlNFTEVDVEFCTEVfQVRUUklCVVRFLCBVTlNFTEVDVEFCTEVfU1RZTEUsIHZhbGlkYXRlT3B0aW9uVmFsdWUgfSBmcm9tICcuL3V0aWwnO1xudmFyIFNFTEVDVF9FTVBUWV9WQUxVRV9LRVkgPSAnUkNfU0VMRUNUX0VNUFRZX1ZBTFVFX0tFWSc7XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiBjaGFpbmluZygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmbnNbaV0gJiYgdHlwZW9mIGZuc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBmbnNbaV0uYXBwbHkoY2hhaW5pbmcsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxudmFyIFNlbGVjdCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2VsZWN0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VsZWN0KTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFNlbGVjdCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIF90aGlzLmlucHV0UmVmID0gbnVsbDtcbiAgICBfdGhpcy5pbnB1dE1pcnJvclJlZiA9IG51bGw7XG4gICAgX3RoaXMudG9wQ3RybFJlZiA9IG51bGw7XG4gICAgX3RoaXMuc2VsZWN0VHJpZ2dlclJlZiA9IG51bGw7XG4gICAgX3RoaXMucm9vdFJlZiA9IG51bGw7XG4gICAgX3RoaXMuc2VsZWN0aW9uUmVmID0gbnVsbDtcbiAgICBfdGhpcy5kcm9wZG93bkNvbnRhaW5lciA9IG51bGw7XG4gICAgX3RoaXMuYmx1clRpbWVyID0gbnVsbDtcbiAgICBfdGhpcy5mb2N1c1RpbWVyID0gbnVsbDtcbiAgICBfdGhpcy5jb21ib2JveFRpbWVyID0gbnVsbDsgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcblxuICAgIF90aGlzLl9mb2N1c2VkID0gZmFsc2U7IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG5cbiAgICBfdGhpcy5fbW91c2VEb3duID0gZmFsc2U7IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG5cbiAgICBfdGhpcy5fb3B0aW9ucyA9IFtdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuXG4gICAgX3RoaXMuX2VtcHR5ID0gZmFsc2U7XG5cbiAgICBfdGhpcy5vbklucHV0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgdG9rZW5TZXBhcmF0b3JzID0gX3RoaXMucHJvcHMudG9rZW5TZXBhcmF0b3JzO1xuICAgICAgdmFyIHZhbCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgaWYgKGlzTXVsdGlwbGVPclRhZ3MoX3RoaXMucHJvcHMpICYmIHRva2VuU2VwYXJhdG9ycy5sZW5ndGggJiYgaW5jbHVkZXNTZXBhcmF0b3JzKHZhbCwgdG9rZW5TZXBhcmF0b3JzKSkge1xuICAgICAgICB2YXIgbmV4dFZhbHVlID0gX3RoaXMuZ2V0VmFsdWVCeUlucHV0KHZhbCk7XG5cbiAgICAgICAgaWYgKG5leHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgX3RoaXMuZmlyZUNoYW5nZShuZXh0VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKGZhbHNlLCB7XG4gICAgICAgICAgbmVlZEZvY3VzOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLnNldElucHV0VmFsdWUoJycsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldElucHV0VmFsdWUodmFsKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzQ29tYm9ib3goX3RoaXMucHJvcHMpKSB7XG4gICAgICAgIF90aGlzLmZpcmVDaGFuZ2UoW3ZhbF0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uIChvcGVuKSB7XG4gICAgICBpZiAob3BlbiAmJiAhX3RoaXMuX2ZvY3VzZWQpIHtcbiAgICAgICAgX3RoaXMuY2xlYXJCbHVyVGltZSgpO1xuXG4gICAgICAgIF90aGlzLnRpbWVvdXRGb2N1cygpO1xuXG4gICAgICAgIF90aGlzLl9mb2N1c2VkID0gdHJ1ZTtcblxuICAgICAgICBfdGhpcy51cGRhdGVGb2N1c0NsYXNzTmFtZSgpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRPcGVuU3RhdGUob3Blbik7XG4gICAgfTsgLy8gY29tYm9ib3ggaWdub3JlXG5cblxuICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIG9wZW4gPSBfdGhpcy5zdGF0ZS5vcGVuO1xuICAgICAgdmFyIGRpc2FibGVkID0gX3RoaXMucHJvcHMuZGlzYWJsZWQ7XG5cbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgICAgaWYgKG9wZW4gJiYgIV90aGlzLmdldElucHV0RE9NTm9kZSgpKSB7XG4gICAgICAgIF90aGlzLm9uSW5wdXRLZXlEb3duKGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5FTlRFUiB8fCBrZXlDb2RlID09PSBLZXlDb2RlLkRPV04pIHtcbiAgICAgICAgaWYgKCFvcGVuKSB7XG4gICAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5TUEFDRSkge1xuICAgICAgICAvLyBOb3QgYmxvY2sgc3BhY2UgaWYgcG9wdXAgaXMgc2hvd25cbiAgICAgICAgaWYgKCFvcGVuKSB7XG4gICAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbklucHV0S2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBjb21ib2JveCA9IF90aGlzJHByb3BzLmNvbWJvYm94LFxuICAgICAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiA9IF90aGlzJHByb3BzLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjtcblxuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0gX3RoaXMuc3RhdGU7XG5cbiAgICAgIHZhciBpc1JlYWxPcGVuID0gX3RoaXMuZ2V0UmVhbE9wZW5TdGF0ZShzdGF0ZSk7IC8vIG1hZ2ljIGNvZGVcblxuXG4gICAgICB2YXIga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgIGlmIChpc011bHRpcGxlT3JUYWdzKF90aGlzLnByb3BzKSAmJiAhZXZlbnQudGFyZ2V0LnZhbHVlICYmIGtleUNvZGUgPT09IEtleUNvZGUuQkFDS1NQQUNFKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICBfdGhpcy5yZW1vdmVTZWxlY3RlZCh2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLkRPV04pIHtcbiAgICAgICAgaWYgKCFzdGF0ZS5vcGVuKSB7XG4gICAgICAgICAgX3RoaXMub3BlbklmSGFzQ2hpbGRyZW4oKTtcblxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuRU5URVIgJiYgc3RhdGUub3Blbikge1xuICAgICAgICAvLyBBdmlvZCB0cmlnZ2VyIGZvcm0gc3VibWl0IHdoZW4gc2VsZWN0IGl0ZW1cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTA4NjFcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTQ1NDRcbiAgICAgICAgaWYgKGlzUmVhbE9wZW4gfHwgIWNvbWJvYm94KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSAvLyBIYXJkIGNsb3NlIHBvcHVwIHRvIGF2b2lkIGxvY2sgb2Ygbm9uIG9wdGlvbiBpbiBjb21ib2JveCBtb2RlXG5cblxuICAgICAgICBpZiAoaXNSZWFsT3BlbiAmJiBjb21ib2JveCAmJiBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgX3RoaXMuY29tYm9ib3hUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLkVTQykge1xuICAgICAgICBpZiAoc3RhdGUub3Blbikge1xuICAgICAgICAgIF90aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNSZWFsT3BlbiAmJiBfdGhpcy5zZWxlY3RUcmlnZ2VyUmVmKSB7XG4gICAgICAgIHZhciBtZW51ID0gX3RoaXMuc2VsZWN0VHJpZ2dlclJlZi5nZXRJbm5lck1lbnUoKTtcblxuICAgICAgICBpZiAobWVudSAmJiBtZW51Lm9uS2V5RG93bihldmVudCwgX3RoaXMuaGFuZGxlQmFja2ZpbGwpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbk1lbnVTZWxlY3QgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGl0ZW0gPSBfcmVmLml0ZW07XG5cbiAgICAgIGlmICghaXRlbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICB2YXIgc2VsZWN0ZWRWYWx1ZSA9IGdldFZhbHVlUHJvcFZhbHVlKGl0ZW0pO1xuICAgICAgdmFyIGxhc3RWYWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuXG4gICAgICBfdGhpcy5maXJlU2VsZWN0KHNlbGVjdGVkVmFsdWUpO1xuXG4gICAgICBpZiAoaXNNdWx0aXBsZU9yVGFncyhwcm9wcykpIHtcbiAgICAgICAgaWYgKGZpbmRJbmRleEluVmFsdWVCeVNpbmdsZVZhbHVlKHZhbHVlLCBzZWxlY3RlZFZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IHZhbHVlLmNvbmNhdChbc2VsZWN0ZWRWYWx1ZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFpc0NvbWJvYm94KHByb3BzKSAmJiBsYXN0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBsYXN0VmFsdWUgPT09IHNlbGVjdGVkVmFsdWUgJiYgc2VsZWN0ZWRWYWx1ZSAhPT0gX3RoaXMuc3RhdGUuYmFja2ZpbGxWYWx1ZSkge1xuICAgICAgICAgIF90aGlzLnNldE9wZW5TdGF0ZShmYWxzZSwge1xuICAgICAgICAgICAgbmVlZEZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgZmlyZVNlYXJjaDogZmFsc2VcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gW3NlbGVjdGVkVmFsdWVdO1xuXG4gICAgICAgIF90aGlzLnNldE9wZW5TdGF0ZShmYWxzZSwge1xuICAgICAgICAgIG5lZWRGb2N1czogdHJ1ZSxcbiAgICAgICAgICBmaXJlU2VhcmNoOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuZmlyZUNoYW5nZSh2YWx1ZSk7XG5cbiAgICAgIHZhciBpbnB1dFZhbHVlID0gaXNDb21ib2JveChwcm9wcykgPyBnZXRQcm9wVmFsdWUoaXRlbSwgcHJvcHMub3B0aW9uTGFiZWxQcm9wKSA6ICcnO1xuXG4gICAgICBpZiAocHJvcHMuYXV0b0NsZWFyU2VhcmNoVmFsdWUpIHtcbiAgICAgICAgX3RoaXMuc2V0SW5wdXRWYWx1ZShpbnB1dFZhbHVlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uTWVudURlc2VsZWN0ID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgaXRlbSA9IF9yZWYyLml0ZW0sXG4gICAgICAgICAgZG9tRXZlbnQgPSBfcmVmMi5kb21FdmVudDtcblxuICAgICAgaWYgKGRvbUV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJiBkb21FdmVudC5rZXlDb2RlID09PSBLZXlDb2RlLkVOVEVSKSB7XG4gICAgICAgIF90aGlzLnJlbW92ZVNlbGVjdGVkKGdldFZhbHVlUHJvcFZhbHVlKGl0ZW0pKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkb21FdmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIF90aGlzLnJlbW92ZVNlbGVjdGVkKGdldFZhbHVlUHJvcFZhbHVlKGl0ZW0pKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG5cbiAgICAgIGlmIChwcm9wcy5hdXRvQ2xlYXJTZWFyY2hWYWx1ZSkge1xuICAgICAgICBfdGhpcy5zZXRJbnB1dFZhbHVlKCcnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25BcnJvd0NsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghX3RoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKCFfdGhpcy5zdGF0ZS5vcGVuLCB7XG4gICAgICAgICAgbmVlZEZvY3VzOiAhX3RoaXMuc3RhdGUub3BlblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25QbGFjZWhvbGRlckNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmdldElucHV0RE9NTm9kZSAmJiBfdGhpcy5nZXRJbnB1dERPTU5vZGUoKSkge1xuICAgICAgICBfdGhpcy5nZXRJbnB1dERPTU5vZGUoKS5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbk91dGVyRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jbGVhckJsdXJUaW1lKCk7IC8vIEluIElFMTEsIG9uT3V0ZXJGb2N1cyB3aWxsIGJlIHRyaWdnZXIgdHdpY2Ugd2hlbiBmb2N1cyBpbnB1dFxuICAgICAgLy8gRmlyc3Qgb25lOiBlLnRhcmdldCBpcyBkaXZcbiAgICAgIC8vIFNlY29uZCBvbmU6IGUudGFyZ2V0IGlzIGlucHV0XG4gICAgICAvLyBvdGhlciBicm93c2VyIG9ubHkgdHJpZ2dlciBzZWNvbmQgb25lXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNTk0MlxuICAgICAgLy8gSGVyZSB3ZSBpZ25vcmUgdGhlIGZpcnN0IG9uZSB3aGVuIGUudGFyZ2V0IGlzIGRpdlxuXG5cbiAgICAgIHZhciBpbnB1dE5vZGUgPSBfdGhpcy5nZXRJbnB1dERPTU5vZGUoKTtcblxuICAgICAgaWYgKGlucHV0Tm9kZSAmJiBlLnRhcmdldCA9PT0gX3RoaXMucm9vdFJlZikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNNdWx0aXBsZU9yVGFnc09yQ29tYm9ib3goX3RoaXMucHJvcHMpICYmIGUudGFyZ2V0ID09PSBpbnB1dE5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuX2ZvY3VzZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5fZm9jdXNlZCA9IHRydWU7XG5cbiAgICAgIF90aGlzLnVwZGF0ZUZvY3VzQ2xhc3NOYW1lKCk7IC8vIG9ubHkgZWZmZWN0IG11bHRpcGxlIG9yIHRhZyBtb2RlXG5cblxuICAgICAgaWYgKCFpc011bHRpcGxlT3JUYWdzKF90aGlzLnByb3BzKSB8fCAhX3RoaXMuX21vdXNlRG93bikge1xuICAgICAgICBfdGhpcy50aW1lb3V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Qb3B1cEZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZml4IGllIHNjcm9sbGJhciwgZm9jdXMgZWxlbWVudCBhZ2FpblxuICAgICAgX3RoaXMubWF5YmVGb2N1cyh0cnVlLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25PdXRlckJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5ibHVyVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLl9mb2N1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgX3RoaXMudXBkYXRlRm9jdXNDbGFzc05hbWUoKTtcblxuICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG4gICAgICAgIHZhciBpbnB1dFZhbHVlID0gX3RoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcblxuICAgICAgICBpZiAoaXNTaW5nbGVNb2RlKHByb3BzKSAmJiBwcm9wcy5zaG93U2VhcmNoICYmIGlucHV0VmFsdWUgJiYgcHJvcHMuZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uKSB7XG4gICAgICAgICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5fb3B0aW9ucyB8fCBbXTtcblxuICAgICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGZpcnN0T3B0aW9uID0gZmluZEZpcnN0TWVudUl0ZW0ob3B0aW9ucyk7XG5cbiAgICAgICAgICAgIGlmIChmaXJzdE9wdGlvbikge1xuICAgICAgICAgICAgICB2YWx1ZSA9IFtnZXRWYWx1ZVByb3BWYWx1ZShmaXJzdE9wdGlvbildO1xuXG4gICAgICAgICAgICAgIF90aGlzLmZpcmVDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpc011bHRpcGxlT3JUYWdzKHByb3BzKSAmJiBpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgaWYgKF90aGlzLl9tb3VzZURvd24pIHtcbiAgICAgICAgICAgIC8vIG5lZWQgdXBkYXRlIGRyb3BtZW51IHdoZW4gbm90IGJsdXJcbiAgICAgICAgICAgIF90aGlzLnNldElucHV0VmFsdWUoJycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB3aHkgbm90IHVzZSBzZXRTdGF0ZT9cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE0MjYyXG4gICAgICAgICAgICBfdGhpcy5zdGF0ZS5pbnB1dFZhbHVlID0gJyc7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5nZXRJbnB1dERPTU5vZGUgJiYgX3RoaXMuZ2V0SW5wdXRET01Ob2RlKCkpIHtcbiAgICAgICAgICAgICAgX3RoaXMuZ2V0SW5wdXRET01Ob2RlKCkudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdG1wVmFsdWUgPSBfdGhpcy5nZXRWYWx1ZUJ5SW5wdXQoaW5wdXRWYWx1ZSk7XG5cbiAgICAgICAgICBpZiAodG1wVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0bXBWYWx1ZTtcblxuICAgICAgICAgICAgX3RoaXMuZmlyZUNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIGlmIGNsaWNrIHRoZSByZXN0IHNwYWNlIG9mIFNlbGVjdCBpbiBtdWx0aXBsZSBtb2RlXG5cblxuICAgICAgICBpZiAoaXNNdWx0aXBsZU9yVGFncyhwcm9wcykgJiYgX3RoaXMuX21vdXNlRG93bikge1xuICAgICAgICAgIF90aGlzLm1heWJlRm9jdXModHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgICBfdGhpcy5fbW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcblxuICAgICAgICBpZiAocHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgcHJvcHMub25CbHVyKF90aGlzLmdldFZMRm9yT25DaGFuZ2UodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTApO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNsZWFyU2VsZWN0aW9uID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0YXRlO1xuXG4gICAgICBpZiAocHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IHN0YXRlLmlucHV0VmFsdWU7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAoaW5wdXRWYWx1ZSB8fCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIF90aGlzLmZpcmVDaGFuZ2UoW10pO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKGZhbHNlLCB7XG4gICAgICAgICAgbmVlZEZvY3VzOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgX3RoaXMuc2V0SW5wdXRWYWx1ZSgnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25DaG9pY2VBbmltYXRpb25MZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmZvcmNlUG9wdXBBbGlnbigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRPcHRpb25JbmZvQnlTaW5nbGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9uc0luZm8pIHtcbiAgICAgIHZhciBpbmZvO1xuICAgICAgb3B0aW9uc0luZm8gPSBvcHRpb25zSW5mbyB8fCBfdGhpcy5zdGF0ZS5vcHRpb25zSW5mbztcblxuICAgICAgaWYgKG9wdGlvbnNJbmZvW2dldE1hcEtleSh2YWx1ZSldKSB7XG4gICAgICAgIGluZm8gPSBvcHRpb25zSW5mb1tnZXRNYXBLZXkodmFsdWUpXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWZhdWx0TGFiZWwgPSB2YWx1ZTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmxhYmVsSW5WYWx1ZSkge1xuICAgICAgICB2YXIgdmFsdWVMYWJlbCA9IGdldExhYmVsRnJvbVByb3BzVmFsdWUoX3RoaXMucHJvcHMudmFsdWUsIHZhbHVlKTtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZUxhYmVsID0gZ2V0TGFiZWxGcm9tUHJvcHNWYWx1ZShfdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsIHZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWVMYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGVmYXVsdExhYmVsID0gdmFsdWVMYWJlbDtcbiAgICAgICAgfSBlbHNlIGlmIChkZWZhdWx0VmFsdWVMYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGVmYXVsdExhYmVsID0gZGVmYXVsdFZhbHVlTGFiZWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGRlZmF1bHRJbmZvID0ge1xuICAgICAgICBvcHRpb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGtleTogdmFsdWVcbiAgICAgICAgfSwgdmFsdWUpLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGxhYmVsOiBkZWZhdWx0TGFiZWxcbiAgICAgIH07XG4gICAgICByZXR1cm4gZGVmYXVsdEluZm87XG4gICAgfTtcblxuICAgIF90aGlzLmdldE9wdGlvbkJ5U2luZ2xlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRPcHRpb25JbmZvQnkgPSBfdGhpcy5nZXRPcHRpb25JbmZvQnlTaW5nbGVWYWx1ZSh2YWx1ZSksXG4gICAgICAgICAgb3B0aW9uID0gX3RoaXMkZ2V0T3B0aW9uSW5mb0J5Lm9wdGlvbjtcblxuICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0T3B0aW9uc0J5U2luZ2xlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdldE9wdGlvbkJ5U2luZ2xlVmFsdWUodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldFZhbHVlQnlMYWJlbCA9IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgaWYgKGxhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IG51bGw7XG4gICAgICBPYmplY3Qua2V5cyhfdGhpcy5zdGF0ZS5vcHRpb25zSW5mbykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBpbmZvID0gX3RoaXMuc3RhdGUub3B0aW9uc0luZm9ba2V5XTtcbiAgICAgICAgdmFyIGRpc2FibGVkID0gaW5mby5kaXNhYmxlZDtcblxuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2xkTGFibGUgPSB0b0FycmF5KGluZm8ubGFiZWwpO1xuXG4gICAgICAgIGlmIChvbGRMYWJsZSAmJiBvbGRMYWJsZS5qb2luKCcnKSA9PT0gbGFiZWwpIHtcbiAgICAgICAgICB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRWTEJ5U2luZ2xlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5sYWJlbEluVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBrZXk6IHZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBfdGhpcy5nZXRMYWJlbEJ5U2luZ2xlVmFsdWUodmFsdWUpXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0VkxGb3JPbkNoYW5nZSA9IGZ1bmN0aW9uICh2bHNTKSB7XG4gICAgICB2YXIgdmxzID0gdmxzUztcblxuICAgICAgaWYgKHZscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghX3RoaXMucHJvcHMubGFiZWxJblZhbHVlKSB7XG4gICAgICAgICAgdmxzID0gdmxzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmxzID0gdmxzLm1hcChmdW5jdGlvbiAodmwpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtleTogdmwsXG4gICAgICAgICAgICAgIGxhYmVsOiBfdGhpcy5nZXRMYWJlbEJ5U2luZ2xlVmFsdWUodmwpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzTXVsdGlwbGVPclRhZ3MoX3RoaXMucHJvcHMpID8gdmxzIDogdmxzWzBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmxzO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRMYWJlbEJ5U2luZ2xlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnNJbmZvKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0T3B0aW9uSW5mb0J5MiA9IF90aGlzLmdldE9wdGlvbkluZm9CeVNpbmdsZVZhbHVlKHZhbHVlLCBvcHRpb25zSW5mbyksXG4gICAgICAgICAgbGFiZWwgPSBfdGhpcyRnZXRPcHRpb25JbmZvQnkyLmxhYmVsO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfTtcblxuICAgIF90aGlzLmdldERyb3Bkb3duQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5kcm9wZG93bkNvbnRhaW5lcikge1xuICAgICAgICBfdGhpcy5kcm9wZG93bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF90aGlzLmRyb3Bkb3duQ29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmRyb3Bkb3duQ29udGFpbmVyO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRQbGFjZWhvbGRlckVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0YXRlO1xuICAgICAgdmFyIGhpZGRlbiA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGUuaW5wdXRWYWx1ZSkge1xuICAgICAgICBoaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcblxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBoaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNDb21ib2JveChwcm9wcykgJiYgdmFsdWUubGVuZ3RoID09PSAxICYmIHN0YXRlLnZhbHVlICYmICFzdGF0ZS52YWx1ZVswXSkge1xuICAgICAgICBoaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBsYWNlaG9sZGVyID0gcHJvcHMucGxhY2Vob2xkZXI7XG5cbiAgICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgb25Nb3VzZURvd246IHByZXZlbnREZWZhdWx0RXZlbnQsXG4gICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGhpZGRlbiA/ICdub25lJyA6ICdibG9jaydcbiAgICAgICAgICB9LCBVTlNFTEVDVEFCTEVfU1RZTEUpXG4gICAgICAgIH0sIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsIHtcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpcy5vblBsYWNlaG9sZGVyQ2xpY2ssXG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcm9wcy5wcmVmaXhDbHMsIFwiLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXJcIilcbiAgICAgICAgfSksIHBsYWNlaG9sZGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIF90aGlzLmdldElucHV0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgdmFyIGRlZmF1bHRJbnB1dCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgICAgYXV0b0NvbXBsZXRlOiBcIm9mZlwiXG4gICAgICB9KTsgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnR5cGVkZWYtd2hpdGVzcGFjZVxuXG4gICAgICB2YXIgaW5wdXRFbGVtZW50ID0gcHJvcHMuZ2V0SW5wdXRFbGVtZW50ID8gcHJvcHMuZ2V0SW5wdXRFbGVtZW50KCkgOiBkZWZhdWx0SW5wdXQ7XG4gICAgICB2YXIgaW5wdXRDbHMgPSBjbGFzc25hbWVzKGlucHV0RWxlbWVudC5wcm9wcy5jbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJvcHMucHJlZml4Q2xzLCBcIi1zZWFyY2hfX2ZpZWxkXCIpLCB0cnVlKSk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzQ5OTIjaXNzdWVjb21tZW50LTI4MTU0MjE1OVxuICAgICAgLy8gQWRkIHNwYWNlIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0VmFsdWUgYXMgdGhlIHdpZHRoIG1lYXN1cmVtZW50IHRvbGVyYW5jZVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJvcHMucHJlZml4Q2xzLCBcIi1zZWFyY2hfX2ZpZWxkX193cmFwXCIpXG4gICAgICB9LCBSZWFjdC5jbG9uZUVsZW1lbnQoaW5wdXRFbGVtZW50LCB7XG4gICAgICAgIHJlZjogX3RoaXMuc2F2ZUlucHV0UmVmLFxuICAgICAgICBvbkNoYW5nZTogX3RoaXMub25JbnB1dENoYW5nZSxcbiAgICAgICAgb25LZXlEb3duOiBjaGFpbmluZyhfdGhpcy5vbklucHV0S2V5RG93biwgaW5wdXRFbGVtZW50LnByb3BzLm9uS2V5RG93biwgX3RoaXMucHJvcHMub25JbnB1dEtleURvd24pLFxuICAgICAgICB2YWx1ZTogX3RoaXMuc3RhdGUuaW5wdXRWYWx1ZSxcbiAgICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgICAgICBjbGFzc05hbWU6IGlucHV0Q2xzXG4gICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICByZWY6IF90aGlzLnNhdmVJbnB1dE1pcnJvclJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcm9wcy5wcmVmaXhDbHMsIFwiLXNlYXJjaF9fZmllbGRfX21pcnJvclwiKVxuICAgICAgfSwgX3RoaXMuc3RhdGUuaW5wdXRWYWx1ZSwgXCJcXHhBMFwiKSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldElucHV0RE9NTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy50b3BDdHJsUmVmID8gX3RoaXMudG9wQ3RybFJlZi5xdWVyeVNlbGVjdG9yKCdpbnB1dCx0ZXh0YXJlYSxkaXZbY29udGVudEVkaXRhYmxlXScpIDogX3RoaXMuaW5wdXRSZWY7XG4gICAgfTtcblxuICAgIF90aGlzLmdldElucHV0TWlycm9yRE9NTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5pbnB1dE1pcnJvclJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0UG9wdXBET01Ob2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnNlbGVjdFRyaWdnZXJSZWYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNlbGVjdFRyaWdnZXJSZWYuZ2V0UG9wdXBET01Ob2RlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldFBvcHVwTWVudUNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zZWxlY3RUcmlnZ2VyUmVmKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zZWxlY3RUcmlnZ2VyUmVmLmdldElubmVyTWVudSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zZXRPcGVuU3RhdGUgPSBmdW5jdGlvbiAob3Blbikge1xuICAgICAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgbmVlZEZvY3VzID0gY29uZmlnLm5lZWRGb2N1cyxcbiAgICAgICAgICBmaXJlU2VhcmNoID0gY29uZmlnLmZpcmVTZWFyY2g7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0YXRlO1xuXG4gICAgICBpZiAoc3RhdGUub3BlbiA9PT0gb3Blbikge1xuICAgICAgICBfdGhpcy5tYXliZUZvY3VzKG9wZW4sICEhbmVlZEZvY3VzKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkRyb3Bkb3duVmlzaWJsZUNoYW5nZShvcGVuKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgb3Blbjogb3BlbixcbiAgICAgICAgYmFja2ZpbGxWYWx1ZTogJydcbiAgICAgIH07IC8vIGNsZWFyIHNlYXJjaCBpbnB1dCB2YWx1ZSB3aGVuIG9wZW4gaXMgZmFsc2UgaW4gc2luZ2xlTW9kZS5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE2NTcyXG5cbiAgICAgIGlmICghb3BlbiAmJiBpc1NpbmdsZU1vZGUocHJvcHMpICYmIHByb3BzLnNob3dTZWFyY2gpIHtcbiAgICAgICAgX3RoaXMuc2V0SW5wdXRWYWx1ZSgnJywgZmlyZVNlYXJjaCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3Blbikge1xuICAgICAgICBfdGhpcy5tYXliZUZvY3VzKG9wZW4sICEhbmVlZEZvY3VzKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoX2V4dGVuZHMoe1xuICAgICAgICBvcGVuOiBvcGVuXG4gICAgICB9LCBuZXh0U3RhdGUpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgX3RoaXMubWF5YmVGb2N1cyhvcGVuLCAhIW5lZWRGb2N1cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gKGlucHV0VmFsdWUpIHtcbiAgICAgIHZhciBmaXJlU2VhcmNoID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuICAgICAgdmFyIG9uU2VhcmNoID0gX3RoaXMucHJvcHMub25TZWFyY2g7XG5cbiAgICAgIGlmIChpbnB1dFZhbHVlICE9PSBfdGhpcy5zdGF0ZS5pbnB1dFZhbHVlKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICAvLyBBZGRpdGlvbmFsIGNoZWNrIGlmIGBpbnB1dFZhbHVlYCBjaGFuZ2VkIGluIGxhdGVzdCBzdGF0ZS5cbiAgICAgICAgICBpZiAoZmlyZVNlYXJjaCAmJiBpbnB1dFZhbHVlICE9PSBwcmV2U3RhdGUuaW5wdXRWYWx1ZSAmJiBvblNlYXJjaCkge1xuICAgICAgICAgICAgb25TZWFyY2goaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICB9LCBfdGhpcy5mb3JjZVBvcHVwQWxpZ24pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRWYWx1ZUJ5SW5wdXQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczIubXVsdGlwbGUsXG4gICAgICAgICAgdG9rZW5TZXBhcmF0b3JzID0gX3RoaXMkcHJvcHMyLnRva2VuU2VwYXJhdG9ycztcbiAgICAgIHZhciBuZXh0VmFsdWUgPSBfdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciBoYXNOZXdWYWx1ZSA9IGZhbHNlO1xuICAgICAgc3BsaXRCeVNlcGFyYXRvcnMoc3RyLCB0b2tlblNlcGFyYXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZFZhbHVlID0gW2xhYmVsXTtcblxuICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBfdGhpcy5nZXRWYWx1ZUJ5TGFiZWwobGFiZWwpO1xuXG4gICAgICAgICAgaWYgKHZhbHVlICYmIGZpbmRJbmRleEluVmFsdWVCeVNpbmdsZVZhbHVlKG5leHRWYWx1ZSwgdmFsdWUpID09PSAtMSkge1xuICAgICAgICAgICAgbmV4dFZhbHVlID0gbmV4dFZhbHVlLmNvbmNhdCh2YWx1ZSk7XG4gICAgICAgICAgICBoYXNOZXdWYWx1ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIF90aGlzLmZpcmVTZWxlY3QodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaW5kSW5kZXhJblZhbHVlQnlTaW5nbGVWYWx1ZShuZXh0VmFsdWUsIGxhYmVsKSA9PT0gLTEpIHtcbiAgICAgICAgICBuZXh0VmFsdWUgPSBuZXh0VmFsdWUuY29uY2F0KHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgIGhhc05ld1ZhbHVlID0gdHJ1ZTtcblxuICAgICAgICAgIF90aGlzLmZpcmVTZWxlY3QobGFiZWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBoYXNOZXdWYWx1ZSA/IG5leHRWYWx1ZSA6IHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0UmVhbE9wZW5TdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgICAgIHZhciBfb3BlbiA9IF90aGlzLnByb3BzLm9wZW47XG5cbiAgICAgIGlmICh0eXBlb2YgX29wZW4gPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gX29wZW47XG4gICAgICB9XG5cbiAgICAgIHZhciBvcGVuID0gKHN0YXRlIHx8IF90aGlzLnN0YXRlKS5vcGVuO1xuICAgICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5fb3B0aW9ucyB8fCBbXTtcblxuICAgICAgaWYgKGlzTXVsdGlwbGVPclRhZ3NPckNvbWJvYm94KF90aGlzLnByb3BzKSB8fCAhX3RoaXMucHJvcHMuc2hvd1NlYXJjaCkge1xuICAgICAgICBpZiAob3BlbiAmJiAhb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICBvcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wZW47XG4gICAgfTtcblxuICAgIF90aGlzLm1hcmtNb3VzZURvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5fbW91c2VEb3duID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMubWFya01vdXNlTGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5fbW91c2VEb3duID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUJhY2tmaWxsID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuYmFja2ZpbGwgfHwgIShpc1NpbmdsZU1vZGUoX3RoaXMucHJvcHMpIHx8IGlzQ29tYm9ib3goX3RoaXMucHJvcHMpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXkgPSBnZXRWYWx1ZVByb3BWYWx1ZShpdGVtKTtcblxuICAgICAgaWYgKGlzQ29tYm9ib3goX3RoaXMucHJvcHMpKSB7XG4gICAgICAgIF90aGlzLnNldElucHV0VmFsdWUoa2V5LCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsdWU6IFtrZXldLFxuICAgICAgICBiYWNrZmlsbFZhbHVlOiBrZXlcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5maWx0ZXJPcHRpb24gPSBmdW5jdGlvbiAoaW5wdXQsIGNoaWxkKSB7XG4gICAgICB2YXIgZGVmYXVsdEZpbHRlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZGVmYXVsdEZpbHRlckZuO1xuICAgICAgdmFyIHZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgbGFzdFZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghaW5wdXQgfHwgbGFzdFZhbHVlICYmIGxhc3RWYWx1ZSA9PT0gX3RoaXMuc3RhdGUuYmFja2ZpbGxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbHRlckZuID0gX3RoaXMucHJvcHMuZmlsdGVyT3B0aW9uO1xuXG4gICAgICBpZiAoJ2ZpbHRlck9wdGlvbicgaW4gX3RoaXMucHJvcHMpIHtcbiAgICAgICAgaWYgKGZpbHRlckZuID09PSB0cnVlKSB7XG4gICAgICAgICAgZmlsdGVyRm4gPSBkZWZhdWx0RmlsdGVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXJGbiA9IGRlZmF1bHRGaWx0ZXIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZmlsdGVyRm4pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXJGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmlsdGVyRm4uY2FsbChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgaW5wdXQsIGNoaWxkKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGQucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMudGltZW91dEZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9uRm9jdXMgPSBfdGhpcy5wcm9wcy5vbkZvY3VzO1xuXG4gICAgICBpZiAoX3RoaXMuZm9jdXNUaW1lcikge1xuICAgICAgICBfdGhpcy5jbGVhckZvY3VzVGltZSgpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5mb2N1c1RpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAob25Gb2N1cykge1xuICAgICAgICAgIG9uRm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTApO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbGVhckZvY3VzVGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5mb2N1c1RpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5mb2N1c1RpbWVyKTtcbiAgICAgICAgX3RoaXMuZm9jdXNUaW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmNsZWFyQmx1clRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuYmx1clRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5ibHVyVGltZXIpO1xuICAgICAgICBfdGhpcy5ibHVyVGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5jbGVhckNvbWJvYm94VGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5jb21ib2JveFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5jb21ib2JveFRpbWVyKTtcbiAgICAgICAgX3RoaXMuY29tYm9ib3hUaW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnVwZGF0ZUZvY3VzQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJvb3RSZWYgPSBfdGhpcy5yb290UmVmO1xuICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7IC8vIGF2b2lkIHNldFN0YXRlIGFuZCBpdHMgc2lkZSBlZmZlY3RcblxuICAgICAgaWYgKF90aGlzLl9mb2N1c2VkKSB7XG4gICAgICAgIGNsYXNzZXMocm9vdFJlZikuYWRkKFwiXCIuY29uY2F0KHByb3BzLnByZWZpeENscywgXCItZm9jdXNlZFwiKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc2VzKHJvb3RSZWYpLnJlbW92ZShcIlwiLmNvbmNhdChwcm9wcy5wcmVmaXhDbHMsIFwiLWZvY3VzZWRcIikpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5tYXliZUZvY3VzID0gZnVuY3Rpb24gKG9wZW4sIG5lZWRGb2N1cykge1xuICAgICAgaWYgKG5lZWRGb2N1cyB8fCBvcGVuKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IF90aGlzLmdldElucHV0RE9NTm9kZSgpO1xuXG4gICAgICAgIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudCxcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBfZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICBpZiAoaW5wdXQgJiYgKG9wZW4gfHwgaXNNdWx0aXBsZU9yVGFnc09yQ29tYm9ib3goX3RoaXMucHJvcHMpKSkge1xuICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ICE9PSBpbnB1dCkge1xuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIF90aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlRWxlbWVudCAhPT0gX3RoaXMuc2VsZWN0aW9uUmVmICYmIF90aGlzLnNlbGVjdGlvblJlZikge1xuICAgICAgICAgIF90aGlzLnNlbGVjdGlvblJlZi5mb2N1cygpO1xuXG4gICAgICAgICAgX3RoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbW92ZVNlbGVjdGVkID0gZnVuY3Rpb24gKHNlbGVjdGVkS2V5LCBlKSB7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcblxuICAgICAgaWYgKHByb3BzLmRpc2FibGVkIHx8IF90aGlzLmlzQ2hpbGREaXNhYmxlZChzZWxlY3RlZEtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBEbyBub3QgdHJpZ2dlciBUcmlnZ2VyIHBvcHVwXG5cblxuICAgICAgaWYgKGUgJiYgZS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9sZFZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgdmFsdWUgPSBvbGRWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKHNpbmdsZVZhbHVlKSB7XG4gICAgICAgIHJldHVybiBzaW5nbGVWYWx1ZSAhPT0gc2VsZWN0ZWRLZXk7XG4gICAgICB9KTtcbiAgICAgIHZhciBjYW5NdWx0aXBsZSA9IGlzTXVsdGlwbGVPclRhZ3MocHJvcHMpO1xuXG4gICAgICBpZiAoY2FuTXVsdGlwbGUpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gc2VsZWN0ZWRLZXk7XG5cbiAgICAgICAgaWYgKHByb3BzLmxhYmVsSW5WYWx1ZSkge1xuICAgICAgICAgIGV2ZW50ID0ge1xuICAgICAgICAgICAga2V5OiBzZWxlY3RlZEtleSxcbiAgICAgICAgICAgIGxhYmVsOiBfdGhpcy5nZXRMYWJlbEJ5U2luZ2xlVmFsdWUoc2VsZWN0ZWRLZXkpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5vbkRlc2VsZWN0KSB7XG4gICAgICAgICAgcHJvcHMub25EZXNlbGVjdChldmVudCwgX3RoaXMuZ2V0T3B0aW9uQnlTaW5nbGVWYWx1ZShzZWxlY3RlZEtleSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmZpcmVDaGFuZ2UodmFsdWUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vcGVuSWZIYXNDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuXG4gICAgICBpZiAoUmVhY3QuQ2hpbGRyZW4uY291bnQocHJvcHMuY2hpbGRyZW4pIHx8IGlzU2luZ2xlTW9kZShwcm9wcykpIHtcbiAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5maXJlU2VsZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25TZWxlY3QoX3RoaXMuZ2V0VkxCeVNpbmdsZVZhbHVlKHZhbHVlKSwgX3RoaXMuZ2V0T3B0aW9uQnlTaW5nbGVWYWx1ZSh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5maXJlQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcblxuICAgICAgaWYgKCEoJ3ZhbHVlJyBpbiBwcm9wcykpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBfdGhpcy5mb3JjZVBvcHVwQWxpZ24pO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmxzID0gX3RoaXMuZ2V0VkxGb3JPbkNoYW5nZSh2YWx1ZSk7XG5cbiAgICAgIHZhciBvcHRpb25zID0gX3RoaXMuZ2V0T3B0aW9uc0J5U2luZ2xlVmFsdWUodmFsdWUpO1xuXG4gICAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UodmxzLCBpc011bHRpcGxlT3JUYWdzKF90aGlzLnByb3BzKSA/IG9wdGlvbnMgOiBvcHRpb25zWzBdKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaXNDaGlsZERpc2FibGVkID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuVG9BcnJheShfdGhpcy5wcm9wcy5jaGlsZHJlbikuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGNoaWxkVmFsdWUgPSBnZXRWYWx1ZVByb3BWYWx1ZShjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZFZhbHVlID09PSBrZXkgJiYgY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMuZGlzYWJsZWQ7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZm9yY2VQb3B1cEFsaWduID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnNlbGVjdFRyaWdnZXJSZWYgJiYgX3RoaXMuc2VsZWN0VHJpZ2dlclJlZi50cmlnZ2VyUmVmKSB7XG4gICAgICAgIF90aGlzLnNlbGVjdFRyaWdnZXJSZWYudHJpZ2dlclJlZi5mb3JjZVBvcHVwQWxpZ24oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyRmlsdGVyT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gX3RoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMy5jaGlsZHJlbixcbiAgICAgICAgICB0YWdzID0gX3RoaXMkcHJvcHMzLnRhZ3MsXG4gICAgICAgICAgbm90Rm91bmRDb250ZW50ID0gX3RoaXMkcHJvcHMzLm5vdEZvdW5kQ29udGVudDtcbiAgICAgIHZhciBtZW51SXRlbXMgPSBbXTtcbiAgICAgIHZhciBjaGlsZHJlbktleXMgPSBbXTtcbiAgICAgIHZhciBlbXB0eSA9IGZhbHNlO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IF90aGlzLnJlbmRlckZpbHRlck9wdGlvbnNGcm9tQ2hpbGRyZW4oY2hpbGRyZW4sIGNoaWxkcmVuS2V5cywgbWVudUl0ZW1zKTtcblxuICAgICAgaWYgKHRhZ3MpIHtcbiAgICAgICAgLy8gdGFncyB2YWx1ZSBtdXN0IGJlIHN0cmluZ1xuICAgICAgICB2YXIgdmFsdWUgPSBfdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5maWx0ZXIoZnVuY3Rpb24gKHNpbmdsZVZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkcmVuS2V5cy5pbmRleE9mKHNpbmdsZVZhbHVlKSA9PT0gLTEgJiYgKCFpbnB1dFZhbHVlIHx8IFN0cmluZyhzaW5nbGVWYWx1ZSkuaW5kZXhPZihTdHJpbmcoaW5wdXRWYWx1ZSkpID4gLTEpO1xuICAgICAgICB9KTsgLy8gc29ydCBieSBsZW5ndGhcblxuICAgICAgICB2YWx1ZS5zb3J0KGZ1bmN0aW9uICh2YWwxLCB2YWwyKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbDEubGVuZ3RoIC0gdmFsMi5sZW5ndGg7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChzaW5nbGVWYWx1ZSkge1xuICAgICAgICAgIHZhciBrZXkgPSBzaW5nbGVWYWx1ZTtcbiAgICAgICAgICB2YXIgbWVudUl0ZW0gPSBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7XG4gICAgICAgICAgICBzdHlsZTogVU5TRUxFQ1RBQkxFX1NUWUxFLFxuICAgICAgICAgICAgcm9sZTogXCJvcHRpb25cIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogVU5TRUxFQ1RBQkxFX0FUVFJJQlVURSxcbiAgICAgICAgICAgIHZhbHVlOiBrZXksXG4gICAgICAgICAgICBrZXk6IGtleVxuICAgICAgICAgIH0sIGtleSk7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKG1lbnVJdGVtKTtcbiAgICAgICAgICBtZW51SXRlbXMucHVzaChtZW51SXRlbSk7XG4gICAgICAgIH0pOyAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE0MDkwXG5cbiAgICAgICAgaWYgKGlucHV0VmFsdWUgJiYgbWVudUl0ZW1zLmV2ZXJ5KGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICByZXR1cm4gZ2V0VmFsdWVQcm9wVmFsdWUob3B0aW9uKSAhPT0gaW5wdXRWYWx1ZTtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBvcHRpb25zLnVuc2hpZnQoUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwge1xuICAgICAgICAgICAgc3R5bGU6IFVOU0VMRUNUQUJMRV9TVFlMRSxcbiAgICAgICAgICAgIHJvbGU6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsXG4gICAgICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIGtleTogaW5wdXRWYWx1ZVxuICAgICAgICAgIH0sIGlucHV0VmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMubGVuZ3RoICYmIG5vdEZvdW5kQ29udGVudCkge1xuICAgICAgICBlbXB0eSA9IHRydWU7XG4gICAgICAgIG9wdGlvbnMgPSBbUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwge1xuICAgICAgICAgIHN0eWxlOiBVTlNFTEVDVEFCTEVfU1RZTEUsXG4gICAgICAgICAgYXR0cmlidXRlOiBVTlNFTEVDVEFCTEVfQVRUUklCVVRFLFxuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgIHJvbGU6IFwib3B0aW9uXCIsXG4gICAgICAgICAgdmFsdWU6IFwiTk9UX0ZPVU5EXCIsXG4gICAgICAgICAga2V5OiBcIk5PVF9GT1VORFwiXG4gICAgICAgIH0sIG5vdEZvdW5kQ29udGVudCldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbXB0eTogZW1wdHksXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckZpbHRlck9wdGlvbnNGcm9tQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY2hpbGRyZW4sIGNoaWxkcmVuS2V5cywgbWVudUl0ZW1zKSB7XG4gICAgICB2YXIgc2VsID0gW107XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gX3RoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICAgIHZhciB0YWdzID0gcHJvcHMudGFncztcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHR5cGUgPSBjaGlsZC50eXBlO1xuXG4gICAgICAgIGlmICh0eXBlLmlzU2VsZWN0T3B0R3JvdXApIHtcbiAgICAgICAgICB2YXIgbGFiZWwgPSBjaGlsZC5wcm9wcy5sYWJlbDtcbiAgICAgICAgICB2YXIga2V5ID0gY2hpbGQua2V5O1xuXG4gICAgICAgICAgaWYgKCFrZXkgJiYgdHlwZW9mIGxhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAga2V5ID0gbGFiZWw7XG4gICAgICAgICAgfSBlbHNlIGlmICghbGFiZWwgJiYga2V5KSB7XG4gICAgICAgICAgICBsYWJlbCA9IGtleTtcbiAgICAgICAgICB9IC8vIE1hdGNoIG9wdGlvbiBncm91cCBsYWJlbFxuXG5cbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSAmJiBfdGhpcy5maWx0ZXJPcHRpb24oaW5wdXRWYWx1ZSwgY2hpbGQpKSB7XG4gICAgICAgICAgICB2YXIgaW5uZXJJdGVtcyA9IGNoaWxkcmVuVG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikubWFwKGZ1bmN0aW9uIChzdWJDaGlsZCkge1xuICAgICAgICAgICAgICB2YXIgY2hpbGRWYWx1ZVN1YiA9IGdldFZhbHVlUHJvcFZhbHVlKHN1YkNoaWxkKSB8fCBzdWJDaGlsZC5rZXk7XG4gICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICAga2V5OiBjaGlsZFZhbHVlU3ViLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBjaGlsZFZhbHVlU3ViXG4gICAgICAgICAgICAgIH0sIHN1YkNoaWxkLnByb3BzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbC5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW1Hcm91cCwge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgdGl0bGU6IGxhYmVsXG4gICAgICAgICAgICB9LCBpbm5lckl0ZW1zKSk7IC8vIE5vdCBtYXRjaFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgX2lubmVySXRlbXMgPSBfdGhpcy5yZW5kZXJGaWx0ZXJPcHRpb25zRnJvbUNoaWxkcmVuKGNoaWxkLnByb3BzLmNoaWxkcmVuLCBjaGlsZHJlbktleXMsIG1lbnVJdGVtcyk7XG5cbiAgICAgICAgICAgIGlmIChfaW5uZXJJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgc2VsLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbUdyb3VwLCB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgdGl0bGU6IGxhYmVsXG4gICAgICAgICAgICAgIH0sIF9pbm5lckl0ZW1zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgd2FybmluZyh0eXBlLmlzU2VsZWN0T3B0aW9uLCAndGhlIGNoaWxkcmVuIG9mIGBTZWxlY3RgIHNob3VsZCBiZSBgU2VsZWN0Lk9wdGlvbmAgb3IgYFNlbGVjdC5PcHRHcm91cGAsICcgKyBcImluc3RlYWQgb2YgYFwiLmNvbmNhdCh0eXBlLm5hbWUgfHwgdHlwZS5kaXNwbGF5TmFtZSB8fCBjaGlsZC50eXBlLCBcImAuXCIpKTtcbiAgICAgICAgdmFyIGNoaWxkVmFsdWUgPSBnZXRWYWx1ZVByb3BWYWx1ZShjaGlsZCk7XG4gICAgICAgIHZhbGlkYXRlT3B0aW9uVmFsdWUoY2hpbGRWYWx1ZSwgX3RoaXMucHJvcHMpO1xuXG4gICAgICAgIGlmIChfdGhpcy5maWx0ZXJPcHRpb24oaW5wdXRWYWx1ZSwgY2hpbGQpKSB7XG4gICAgICAgICAgdmFyIG1lbnVJdGVtID0gUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgX2V4dGVuZHMoe1xuICAgICAgICAgICAgc3R5bGU6IFVOU0VMRUNUQUJMRV9TVFlMRSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogVU5TRUxFQ1RBQkxFX0FUVFJJQlVURSxcbiAgICAgICAgICAgIHZhbHVlOiBjaGlsZFZhbHVlLFxuICAgICAgICAgICAga2V5OiBjaGlsZFZhbHVlLFxuICAgICAgICAgICAgcm9sZTogXCJvcHRpb25cIlxuICAgICAgICAgIH0sIGNoaWxkLnByb3BzKSk7XG4gICAgICAgICAgc2VsLnB1c2gobWVudUl0ZW0pO1xuICAgICAgICAgIG1lbnVJdGVtcy5wdXNoKG1lbnVJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YWdzKSB7XG4gICAgICAgICAgY2hpbGRyZW5LZXlzLnB1c2goY2hpbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNlbDtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyVG9wQ29udHJvbE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBvcGVuID0gX3RoaXMkc3RhdGUub3BlbixcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICB2YXIgY2hvaWNlVHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5jaG9pY2VUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgbWF4VGFnVGV4dExlbmd0aCA9IHByb3BzLm1heFRhZ1RleHRMZW5ndGgsXG4gICAgICAgICAgbWF4VGFnQ291bnQgPSBwcm9wcy5tYXhUYWdDb3VudCxcbiAgICAgICAgICBzaG93U2VhcmNoID0gcHJvcHMuc2hvd1NlYXJjaCxcbiAgICAgICAgICByZW1vdmVJY29uID0gcHJvcHMucmVtb3ZlSWNvbjtcbiAgICAgIHZhciBtYXhUYWdQbGFjZWhvbGRlciA9IHByb3BzLm1heFRhZ1BsYWNlaG9sZGVyO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uX19yZW5kZXJlZFwiKTsgLy8gc2VhcmNoIGlucHV0IGlzIGluc2lkZSB0b3BDb250cm9sTm9kZSBpbiBzaW5nbGUsIG11bHRpcGxlICYgY29tYm9ib3guIDIwMTYvMDQvMTNcblxuICAgICAgdmFyIGlubmVyTm9kZSA9IG51bGw7XG5cbiAgICAgIGlmIChpc1NpbmdsZU1vZGUocHJvcHMpKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZFZhbHVlID0gbnVsbDtcblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgdmFyIG9wYWNpdHkgPSAxO1xuXG4gICAgICAgICAgaWYgKCFzaG93U2VhcmNoKSB7XG4gICAgICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcGVuKSB7XG4gICAgICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICFpbnB1dFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgb3BhY2l0eSA9IDAuNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzaW5nbGVWYWx1ZSA9IHZhbHVlWzBdO1xuXG4gICAgICAgICAgdmFyIF90aGlzJGdldE9wdGlvbkluZm9CeTMgPSBfdGhpcy5nZXRPcHRpb25JbmZvQnlTaW5nbGVWYWx1ZShzaW5nbGVWYWx1ZSksXG4gICAgICAgICAgICAgIGxhYmVsID0gX3RoaXMkZ2V0T3B0aW9uSW5mb0J5My5sYWJlbCxcbiAgICAgICAgICAgICAgdGl0bGUgPSBfdGhpcyRnZXRPcHRpb25JbmZvQnkzLnRpdGxlO1xuXG4gICAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAga2V5OiBcInZhbHVlXCIsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uLXNlbGVjdGVkLXZhbHVlXCIpLFxuICAgICAgICAgICAgdGl0bGU6IHRvVGl0bGUodGl0bGUgfHwgbGFiZWwpLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogc2hvd1NlbGVjdGVkVmFsdWUgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBvcGFjaXR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgbGFiZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaG93U2VhcmNoKSB7XG4gICAgICAgICAgaW5uZXJOb2RlID0gW3NlbGVjdGVkVmFsdWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlubmVyTm9kZSA9IFtzZWxlY3RlZFZhbHVlLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWFyY2ggXCIpLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlYXJjaC0taW5saW5lXCIpLFxuICAgICAgICAgICAga2V5OiBcImlucHV0XCIsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBvcGVuID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF90aGlzLmdldElucHV0RWxlbWVudCgpKV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzZWxlY3RlZFZhbHVlTm9kZXMgPSBbXTtcbiAgICAgICAgdmFyIGxpbWl0ZWRDb3VudFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHZhciBtYXhUYWdQbGFjZWhvbGRlckVsO1xuXG4gICAgICAgIGlmIChtYXhUYWdDb3VudCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLmxlbmd0aCA+IG1heFRhZ0NvdW50KSB7XG4gICAgICAgICAgbGltaXRlZENvdW50VmFsdWUgPSBsaW1pdGVkQ291bnRWYWx1ZS5zbGljZSgwLCBtYXhUYWdDb3VudCk7XG5cbiAgICAgICAgICB2YXIgb21pdHRlZFZhbHVlcyA9IF90aGlzLmdldFZMRm9yT25DaGFuZ2UodmFsdWUuc2xpY2UobWF4VGFnQ291bnQsIHZhbHVlLmxlbmd0aCkpO1xuXG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSBcIisgXCIuY29uY2F0KHZhbHVlLmxlbmd0aCAtIG1heFRhZ0NvdW50LCBcIiAuLi5cIik7XG5cbiAgICAgICAgICBpZiAobWF4VGFnUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgbWF4VGFnUGxhY2Vob2xkZXIgPT09ICdmdW5jdGlvbicgPyBtYXhUYWdQbGFjZWhvbGRlcihvbWl0dGVkVmFsdWVzKSA6IG1heFRhZ1BsYWNlaG9sZGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1heFRhZ1BsYWNlaG9sZGVyRWwgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgX2V4dGVuZHMoe1xuICAgICAgICAgICAgc3R5bGU6IFVOU0VMRUNUQUJMRV9TVFlMRVxuICAgICAgICAgIH0sIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsIHtcbiAgICAgICAgICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsXG4gICAgICAgICAgICBvbk1vdXNlRG93bjogcHJldmVudERlZmF1bHRFdmVudCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb25fX2Nob2ljZSBcIikuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uX19jaG9pY2VfX2Rpc2FibGVkXCIpLFxuICAgICAgICAgICAga2V5OiBcIm1heFRhZ1BsYWNlaG9sZGVyXCIsXG4gICAgICAgICAgICB0aXRsZTogdG9UaXRsZShjb250ZW50KVxuICAgICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb25fX2Nob2ljZV9fY29udGVudFwiKVxuICAgICAgICAgIH0sIGNvbnRlbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc011bHRpcGxlT3JUYWdzKHByb3BzKSkge1xuICAgICAgICAgIHNlbGVjdGVkVmFsdWVOb2RlcyA9IGxpbWl0ZWRDb3VudFZhbHVlLm1hcChmdW5jdGlvbiAoc2luZ2xlVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBpbmZvID0gX3RoaXMuZ2V0T3B0aW9uSW5mb0J5U2luZ2xlVmFsdWUoc2luZ2xlVmFsdWUpO1xuXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGluZm8ubGFiZWw7XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBpbmZvLnRpdGxlIHx8IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmIChtYXhUYWdUZXh0TGVuZ3RoICYmIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyAmJiBjb250ZW50Lmxlbmd0aCA+IG1heFRhZ1RleHRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFwiXCIuY29uY2F0KGNvbnRlbnQuc2xpY2UoMCwgbWF4VGFnVGV4dExlbmd0aCksIFwiLi4uXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGlzYWJsZWQgPSBfdGhpcy5pc0NoaWxkRGlzYWJsZWQoc2luZ2xlVmFsdWUpO1xuXG4gICAgICAgICAgICB2YXIgY2hvaWNlQ2xhc3NOYW1lID0gZGlzYWJsZWQgPyBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvbl9fY2hvaWNlIFwiKS5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb25fX2Nob2ljZV9fZGlzYWJsZWRcIikgOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvbl9fY2hvaWNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgIHN0eWxlOiBVTlNFTEVDVEFCTEVfU1RZTEVcbiAgICAgICAgICAgIH0sIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsIHtcbiAgICAgICAgICAgICAgb25Nb3VzZURvd246IHByZXZlbnREZWZhdWx0RXZlbnQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogY2hvaWNlQ2xhc3NOYW1lLFxuICAgICAgICAgICAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgICAgICAgICAgICBrZXk6IHNpbmdsZVZhbHVlIHx8IFNFTEVDVF9FTVBUWV9WQUxVRV9LRVksXG4gICAgICAgICAgICAgIHRpdGxlOiB0b1RpdGxlKHRpdGxlKVxuICAgICAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uX19jaG9pY2VfX2NvbnRlbnRcIilcbiAgICAgICAgICAgIH0sIGNvbnRlbnQpLCBkaXNhYmxlZCA/IG51bGwgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVTZWxlY3RlZChzaW5nbGVWYWx1ZSwgZXZlbnQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZVwiKVxuICAgICAgICAgICAgfSwgcmVtb3ZlSWNvbiB8fCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlLWljb25cIilcbiAgICAgICAgICAgIH0sIFwiXFx4RDdcIikpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXhUYWdQbGFjZWhvbGRlckVsKSB7XG4gICAgICAgICAgc2VsZWN0ZWRWYWx1ZU5vZGVzLnB1c2gobWF4VGFnUGxhY2Vob2xkZXJFbCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RlZFZhbHVlTm9kZXMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWFyY2ggXCIpLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlYXJjaC0taW5saW5lXCIpLFxuICAgICAgICAgIGtleTogXCJfX2lucHV0XCJcbiAgICAgICAgfSwgX3RoaXMuZ2V0SW5wdXRFbGVtZW50KCkpKTtcblxuICAgICAgICBpZiAoaXNNdWx0aXBsZU9yVGFncyhwcm9wcykgJiYgY2hvaWNlVHJhbnNpdGlvbk5hbWUpIHtcbiAgICAgICAgICBpbm5lck5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEFuaW1hdGUsIHtcbiAgICAgICAgICAgIG9uTGVhdmU6IF90aGlzLm9uQ2hvaWNlQW5pbWF0aW9uTGVhdmUsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFwidWxcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiBjaG9pY2VUcmFuc2l0aW9uTmFtZVxuICAgICAgICAgIH0sIHNlbGVjdGVkVmFsdWVOb2Rlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5uZXJOb2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIHNlbGVjdGVkVmFsdWVOb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiBfdGhpcy5zYXZlVG9wQ3RybFJlZlxuICAgICAgfSwgX3RoaXMuZ2V0UGxhY2Vob2xkZXJFbGVtZW50KCksIGlubmVyTm9kZSk7XG4gICAgfTtcblxuICAgIHZhciBvcHRpb25zSW5mbyA9IFNlbGVjdC5nZXRPcHRpb25zSW5mb0Zyb21Qcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAocHJvcHMudGFncyAmJiB0eXBlb2YgcHJvcHMuZmlsdGVyT3B0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXNEaXNhYmxlZEV4aXN0ID0gT2JqZWN0LmtleXMob3B0aW9uc0luZm8pLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uc0luZm9ba2V5XS5kaXNhYmxlZDtcbiAgICAgIH0pO1xuICAgICAgd2FybmluZyghaXNEaXNhYmxlZEV4aXN0LCAnUGxlYXNlIGF2b2lkIHNldHRpbmcgb3B0aW9uIHRvIGRpc2FibGVkIGluIHRhZ3MgbW9kZSBzaW5jZSB1c2VyIGNhbiBhbHdheXMgdHlwZSB0ZXh0IGFzIHRhZy4nKTtcbiAgICB9XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBTZWxlY3QuZ2V0VmFsdWVGcm9tUHJvcHMocHJvcHMsIHRydWUpLFxuICAgICAgaW5wdXRWYWx1ZTogcHJvcHMuY29tYm9ib3ggPyBTZWxlY3QuZ2V0SW5wdXRWYWx1ZUZvckNvbWJvYm94KHByb3BzLCBvcHRpb25zSW5mbywgdHJ1ZSkgOiAnJyxcbiAgICAgIG9wZW46IHByb3BzLmRlZmF1bHRPcGVuLFxuICAgICAgb3B0aW9uc0luZm86IG9wdGlvbnNJbmZvLFxuICAgICAgYmFja2ZpbGxWYWx1ZTogJycsXG4gICAgICAvLyBhIGZsYWcgZm9yIGF2aW9kIHJlZHVuZGFudCBnZXRPcHRpb25zSW5mb0Zyb21Qcm9wcyBjYWxsXG4gICAgICBza2lwQnVpbGRPcHRpb25zSW5mbzogdHJ1ZSxcbiAgICAgIGFyaWFJZDogJydcbiAgICB9O1xuICAgIF90aGlzLnNhdmVJbnB1dFJlZiA9IHNhdmVSZWYoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICdpbnB1dFJlZicpO1xuICAgIF90aGlzLnNhdmVJbnB1dE1pcnJvclJlZiA9IHNhdmVSZWYoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICdpbnB1dE1pcnJvclJlZicpO1xuICAgIF90aGlzLnNhdmVUb3BDdHJsUmVmID0gc2F2ZVJlZihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgJ3RvcEN0cmxSZWYnKTtcbiAgICBfdGhpcy5zYXZlU2VsZWN0VHJpZ2dlclJlZiA9IHNhdmVSZWYoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICdzZWxlY3RUcmlnZ2VyUmVmJyk7XG4gICAgX3RoaXMuc2F2ZVJvb3RSZWYgPSBzYXZlUmVmKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAncm9vdFJlZicpO1xuICAgIF90aGlzLnNhdmVTZWxlY3Rpb25SZWYgPSBzYXZlUmVmKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAnc2VsZWN0aW9uUmVmJyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNlbGVjdCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAvLyB3aGVuIGRlZmF1bHRPcGVuIGlzIHRydWUsIHdlIHNob3VsZCBhdXRvIGZvY3VzIHNlYXJjaCBpbnB1dFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTQyNTRcbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cyB8fCB0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXJpYUlkOiBnZW5lcmF0ZVVVSUQoKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBpZiAoaXNNdWx0aXBsZU9yVGFncyh0aGlzLnByb3BzKSkge1xuICAgICAgICB2YXIgaW5wdXROb2RlID0gdGhpcy5nZXRJbnB1dERPTU5vZGUoKTtcbiAgICAgICAgdmFyIG1pcnJvck5vZGUgPSB0aGlzLmdldElucHV0TWlycm9yRE9NTm9kZSgpO1xuXG4gICAgICAgIGlmIChpbnB1dE5vZGUgJiYgaW5wdXROb2RlLnZhbHVlICYmIG1pcnJvck5vZGUpIHtcbiAgICAgICAgICBpbnB1dE5vZGUuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICBpbnB1dE5vZGUuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdChtaXJyb3JOb2RlLmNsaWVudFdpZHRoLCBcInB4XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0Tm9kZSkge1xuICAgICAgICAgIGlucHV0Tm9kZS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZm9yY2VQb3B1cEFsaWduKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5jbGVhckZvY3VzVGltZSgpO1xuICAgICAgdGhpcy5jbGVhckJsdXJUaW1lKCk7XG4gICAgICB0aGlzLmNsZWFyQ29tYm9ib3hUaW1lKCk7XG5cbiAgICAgIGlmICh0aGlzLmRyb3Bkb3duQ29udGFpbmVyKSB7XG4gICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5kcm9wZG93bkNvbnRhaW5lcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5kcm9wZG93bkNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuZHJvcGRvd25Db250YWluZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIGlmIChpc1NpbmdsZU1vZGUodGhpcy5wcm9wcykgJiYgdGhpcy5zZWxlY3Rpb25SZWYpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25SZWYuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRJbnB1dERPTU5vZGUoKSkge1xuICAgICAgICB0aGlzLmdldElucHV0RE9NTm9kZSgpLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIGlmIChpc1NpbmdsZU1vZGUodGhpcy5wcm9wcykgJiYgdGhpcy5zZWxlY3Rpb25SZWYpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25SZWYuYmx1cigpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldElucHV0RE9NTm9kZSgpKSB7XG4gICAgICAgIHRoaXMuZ2V0SW5wdXRET01Ob2RlKCkuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJBcnJvd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJBcnJvdyhtdWx0aXBsZSkge1xuICAgICAgLy8gc2hvd0Fycm93IDogU2V0IHRvIHRydWUgaWYgbm90IG11bHRpcGxlIGJ5IGRlZmF1bHQgYnV0IGtlZXAgc2V0IHZhbHVlLlxuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgX3RoaXMkcHJvcHM0JHNob3dBcnJvID0gX3RoaXMkcHJvcHM0LnNob3dBcnJvdyxcbiAgICAgICAgICBzaG93QXJyb3cgPSBfdGhpcyRwcm9wczQkc2hvd0Fycm8gPT09IHZvaWQgMCA/ICFtdWx0aXBsZSA6IF90aGlzJHByb3BzNCRzaG93QXJybyxcbiAgICAgICAgICBsb2FkaW5nID0gX3RoaXMkcHJvcHM0LmxvYWRpbmcsXG4gICAgICAgICAgaW5wdXRJY29uID0gX3RoaXMkcHJvcHM0LmlucHV0SWNvbixcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczQucHJlZml4Q2xzO1xuXG4gICAgICBpZiAoIXNob3dBcnJvdyAmJiAhbG9hZGluZykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gLy8gaWYgbG9hZGluZyAgaGF2ZSBsb2FkaW5nIGljb25cblxuXG4gICAgICB2YXIgZGVmYXVsdEljb24gPSBsb2FkaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXJyb3ctbG9hZGluZ1wiKVxuICAgICAgfSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvdy1pY29uXCIpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogXCJhcnJvd1wiLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXJyb3dcIiksXG4gICAgICAgIHN0eWxlOiBVTlNFTEVDVEFCTEVfU1RZTEVcbiAgICAgIH0sIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsIHtcbiAgICAgICAgb25DbGljazogdGhpcy5vbkFycm93Q2xpY2tcbiAgICAgIH0pLCBpbnB1dEljb24gfHwgZGVmYXVsdEljb24pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDbGVhcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzNS5wcmVmaXhDbHMsXG4gICAgICAgICAgYWxsb3dDbGVhciA9IF90aGlzJHByb3BzNS5hbGxvd0NsZWFyLFxuICAgICAgICAgIGNsZWFySWNvbiA9IF90aGlzJHByb3BzNS5jbGVhckljb247XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgY2xlYXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogXCJjbGVhclwiLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uX19jbGVhclwiKSxcbiAgICAgICAgb25Nb3VzZURvd246IHByZXZlbnREZWZhdWx0RXZlbnQsXG4gICAgICAgIHN0eWxlOiBVTlNFTEVDVEFCTEVfU1RZTEVcbiAgICAgIH0sIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsIHtcbiAgICAgICAgb25DbGljazogdGhpcy5vbkNsZWFyU2VsZWN0aW9uXG4gICAgICB9KSwgY2xlYXJJY29uIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvbl9fY2xlYXItaWNvblwiKVxuICAgICAgfSwgXCJcXHhEN1wiKSk7XG5cbiAgICAgIGlmICghYWxsb3dDbGVhcikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ29tYm9ib3godGhpcy5wcm9wcykpIHtcbiAgICAgICAgaWYgKGlucHV0VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gY2xlYXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlucHV0VmFsdWUgfHwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBjbGVhcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Jvb3RDbHM7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgbXVsdGlwbGUgPSBpc011bHRpcGxlT3JUYWdzKHByb3BzKTsgLy8gRGVmYXVsdCBzZXQgc2hvd0Fycm93IHRvIHRydWUgaWYgbm90IHNldCAobm90IHNldCBkaXJlY3RseSBpbiBkZWZhdWx0UHJvcHMgdG8gaGFuZGxlIG11bHRpcGxlIGNhc2UpXG5cbiAgICAgIHZhciBfcHJvcHMkc2hvd0Fycm93ID0gcHJvcHMuc2hvd0Fycm93LFxuICAgICAgICAgIHNob3dBcnJvdyA9IF9wcm9wcyRzaG93QXJyb3cgPT09IHZvaWQgMCA/IHRydWUgOiBfcHJvcHMkc2hvd0Fycm93O1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgbG9hZGluZyA9IHByb3BzLmxvYWRpbmc7XG4gICAgICB2YXIgY3RybE5vZGUgPSB0aGlzLnJlbmRlclRvcENvbnRyb2xOb2RlKCk7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBvcGVuID0gX3RoaXMkc3RhdGUyLm9wZW4sXG4gICAgICAgICAgYXJpYUlkID0gX3RoaXMkc3RhdGUyLmFyaWFJZDtcblxuICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgdmFyIGZpbHRlck9wdGlvbnMgPSB0aGlzLnJlbmRlckZpbHRlck9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5fZW1wdHkgPSBmaWx0ZXJPcHRpb25zLmVtcHR5O1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gZmlsdGVyT3B0aW9ucy5vcHRpb25zO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVhbE9wZW4gPSB0aGlzLmdldFJlYWxPcGVuU3RhdGUoKTtcbiAgICAgIHZhciBlbXB0eSA9IHRoaXMuX2VtcHR5O1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLl9vcHRpb25zIHx8IFtdO1xuICAgICAgdmFyIGRhdGFPckFyaWFBdHRyaWJ1dGVQcm9wcyA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpICYmIChrZXkuc3Vic3RyKDAsIDUpID09PSAnZGF0YS0nIHx8IGtleS5zdWJzdHIoMCwgNSkgPT09ICdhcmlhLScgfHwga2V5ID09PSAncm9sZScpKSB7XG4gICAgICAgICAgZGF0YU9yQXJpYUF0dHJpYnV0ZVByb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gZm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIC8vICAgaWYgKFxuICAgICAgLy8gICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSAmJlxuICAgICAgLy8gICAgIChrZXkuc3Vic3RyKDAsIDUpID09PSAnZGF0YS0nIHx8IGtleS5zdWJzdHIoMCwgNSkgPT09ICdhcmlhLScgfHwga2V5ID09PSAncm9sZScpXG4gICAgICAvLyAgICkge1xuICAgICAgLy8gICAgIGRhdGFPckFyaWFBdHRyaWJ1dGVQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG4gICAgICB2YXIgZXh0cmFTZWxlY3Rpb25Qcm9wcyA9IF9leHRlbmRzKHt9LCBkYXRhT3JBcmlhQXR0cmlidXRlUHJvcHMpO1xuXG4gICAgICBpZiAoIWlzTXVsdGlwbGVPclRhZ3NPckNvbWJvYm94KHByb3BzKSkge1xuICAgICAgICBleHRyYVNlbGVjdGlvblByb3BzID0gX2V4dGVuZHMoe30sIGV4dHJhU2VsZWN0aW9uUHJvcHMsIHtcbiAgICAgICAgICBvbktleURvd246IHRoaXMub25LZXlEb3duLFxuICAgICAgICAgIHRhYkluZGV4OiBwcm9wcy5kaXNhYmxlZCA/IC0xIDogcHJvcHMudGFiSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByb290Q2xzID0gKF9yb290Q2xzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcm9vdENscywgY2xhc3NOYW1lLCAhIWNsYXNzTmFtZSksIF9kZWZpbmVQcm9wZXJ0eShfcm9vdENscywgcHJlZml4Q2xzLCAxKSwgX2RlZmluZVByb3BlcnR5KF9yb290Q2xzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW9wZW5cIiksIG9wZW4pLCBfZGVmaW5lUHJvcGVydHkoX3Jvb3RDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZm9jdXNlZFwiKSwgb3BlbiB8fCAhIXRoaXMuX2ZvY3VzZWQpLCBfZGVmaW5lUHJvcGVydHkoX3Jvb3RDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29tYm9ib3hcIiksIGlzQ29tYm9ib3gocHJvcHMpKSwgX2RlZmluZVByb3BlcnR5KF9yb290Q2xzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRpc2FibGVkXCIpLCBkaXNhYmxlZCksIF9kZWZpbmVQcm9wZXJ0eShfcm9vdENscywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1lbmFibGVkXCIpLCAhZGlzYWJsZWQpLCBfZGVmaW5lUHJvcGVydHkoX3Jvb3RDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYWxsb3ctY2xlYXJcIiksICEhcHJvcHMuYWxsb3dDbGVhciksIF9kZWZpbmVQcm9wZXJ0eShfcm9vdENscywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uby1hcnJvd1wiKSwgIXNob3dBcnJvdyksIF9kZWZpbmVQcm9wZXJ0eShfcm9vdENscywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sb2FkaW5nXCIpLCAhIWxvYWRpbmcpLCBfcm9vdENscyk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RUcmlnZ2VyLCB7XG4gICAgICAgIG9uUG9wdXBGb2N1czogdGhpcy5vblBvcHVwRm9jdXMsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgIGRyb3Bkb3duQWxpZ246IHByb3BzLmRyb3Bkb3duQWxpZ24sXG4gICAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lOiBwcm9wcy5kcm9wZG93bkNsYXNzTmFtZSxcbiAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiBwcm9wcy5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsXG4gICAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogcHJvcHMuZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLFxuICAgICAgICBkcm9wZG93bk1lbnVTdHlsZTogcHJvcHMuZHJvcGRvd25NZW51U3R5bGUsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiBwcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9wcy5hbmltYXRpb24sXG4gICAgICAgIHByZWZpeENsczogcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBkcm9wZG93blN0eWxlOiBwcm9wcy5kcm9wZG93blN0eWxlLFxuICAgICAgICBjb21ib2JveDogcHJvcHMuY29tYm9ib3gsXG4gICAgICAgIHNob3dTZWFyY2g6IHByb3BzLnNob3dTZWFyY2gsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIGVtcHR5OiBlbXB0eSxcbiAgICAgICAgbXVsdGlwbGU6IG11bHRpcGxlLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIHZpc2libGU6IHJlYWxPcGVuLFxuICAgICAgICBpbnB1dFZhbHVlOiBzdGF0ZS5pbnB1dFZhbHVlLFxuICAgICAgICB2YWx1ZTogc3RhdGUudmFsdWUsXG4gICAgICAgIGJhY2tmaWxsVmFsdWU6IHN0YXRlLmJhY2tmaWxsVmFsdWUsXG4gICAgICAgIGZpcnN0QWN0aXZlVmFsdWU6IHByb3BzLmZpcnN0QWN0aXZlVmFsdWUsXG4gICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiB0aGlzLm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlLFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgIG9uTWVudVNlbGVjdDogdGhpcy5vbk1lbnVTZWxlY3QsXG4gICAgICAgIG9uTWVudURlc2VsZWN0OiB0aGlzLm9uTWVudURlc2VsZWN0LFxuICAgICAgICBvblBvcHVwU2Nyb2xsOiBwcm9wcy5vblBvcHVwU2Nyb2xsLFxuICAgICAgICBzaG93QWN0aW9uOiBwcm9wcy5zaG93QWN0aW9uLFxuICAgICAgICByZWY6IHRoaXMuc2F2ZVNlbGVjdFRyaWdnZXJSZWYsXG4gICAgICAgIG1lbnVJdGVtU2VsZWN0ZWRJY29uOiBwcm9wcy5tZW51SXRlbVNlbGVjdGVkSWNvbixcbiAgICAgICAgZHJvcGRvd25SZW5kZXI6IHByb3BzLmRyb3Bkb3duUmVuZGVyLFxuICAgICAgICBhcmlhSWQ6IGFyaWFJZFxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlLFxuICAgICAgICByZWY6IHRoaXMuc2F2ZVJvb3RSZWYsXG4gICAgICAgIG9uQmx1cjogdGhpcy5vbk91dGVyQmx1cixcbiAgICAgICAgb25Gb2N1czogdGhpcy5vbk91dGVyRm9jdXMsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcyhyb290Q2xzKSxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMubWFya01vdXNlRG93bixcbiAgICAgICAgb25Nb3VzZVVwOiB0aGlzLm1hcmtNb3VzZUxlYXZlLFxuICAgICAgICBvbk1vdXNlT3V0OiB0aGlzLm1hcmtNb3VzZUxlYXZlXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiB0aGlzLnNhdmVTZWxlY3Rpb25SZWYsXG4gICAgICAgIGtleTogXCJzZWxlY3Rpb25cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvblxcbiAgICAgICAgICAgIFwiKS5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb24tLVwiKS5jb25jYXQobXVsdGlwbGUgPyAnbXVsdGlwbGUnIDogJ3NpbmdsZScpLFxuICAgICAgICByb2xlOiBcImNvbWJvYm94XCIsXG4gICAgICAgIFwiYXJpYS1hdXRvY29tcGxldGVcIjogXCJsaXN0XCIsXG4gICAgICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcInRydWVcIixcbiAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IGFyaWFJZCxcbiAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IHJlYWxPcGVuXG4gICAgICB9LCBleHRyYVNlbGVjdGlvblByb3BzKSwgY3RybE5vZGUsIHRoaXMucmVuZGVyQ2xlYXIoKSwgdGhpcy5yZW5kZXJBcnJvdyghIW11bHRpcGxlKSkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2VsZWN0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5TZWxlY3QucHJvcFR5cGVzID0gU2VsZWN0UHJvcFR5cGVzO1xuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJlZml4Q2xzOiAncmMtc2VsZWN0JyxcbiAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICBsYWJlbEluVmFsdWU6IGZhbHNlLFxuICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IHRydWUsXG4gIHNob3dTZWFyY2g6IHRydWUsXG4gIGFsbG93Q2xlYXI6IGZhbHNlLFxuICBwbGFjZWhvbGRlcjogJycsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvbkZvY3VzOiBub29wLFxuICBvbkJsdXI6IG5vb3AsXG4gIG9uU2VsZWN0OiBub29wLFxuICBvblNlYXJjaDogbm9vcCxcbiAgb25EZXNlbGVjdDogbm9vcCxcbiAgb25JbnB1dEtleURvd246IG5vb3AsXG4gIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdHJ1ZSxcbiAgZHJvcGRvd25TdHlsZToge30sXG4gIGRyb3Bkb3duTWVudVN0eWxlOiB7fSxcbiAgb3B0aW9uRmlsdGVyUHJvcDogJ3ZhbHVlJyxcbiAgb3B0aW9uTGFiZWxQcm9wOiAndmFsdWUnLFxuICBub3RGb3VuZENvbnRlbnQ6ICdOb3QgRm91bmQnLFxuICBiYWNrZmlsbDogZmFsc2UsXG4gIHNob3dBY3Rpb246IFsnY2xpY2snXSxcbiAgdG9rZW5TZXBhcmF0b3JzOiBbXSxcbiAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IHRydWUsXG4gIHRhYkluZGV4OiAwLFxuICBkcm9wZG93blJlbmRlcjogZnVuY3Rpb24gZHJvcGRvd25SZW5kZXIobWVudSkge1xuICAgIHJldHVybiBtZW51O1xuICB9XG59O1xuXG5TZWxlY3QuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gIHZhciBvcHRpb25zSW5mbyA9IHByZXZTdGF0ZS5za2lwQnVpbGRPcHRpb25zSW5mbyA/IHByZXZTdGF0ZS5vcHRpb25zSW5mbyA6IFNlbGVjdC5nZXRPcHRpb25zSW5mb0Zyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gIHZhciBuZXdTdGF0ZSA9IHtcbiAgICBvcHRpb25zSW5mbzogb3B0aW9uc0luZm8sXG4gICAgc2tpcEJ1aWxkT3B0aW9uc0luZm86IGZhbHNlXG4gIH07XG5cbiAgaWYgKCdvcGVuJyBpbiBuZXh0UHJvcHMpIHtcbiAgICBuZXdTdGF0ZS5vcGVuID0gbmV4dFByb3BzLm9wZW47XG4gIH1cblxuICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICB2YXIgdmFsdWUgPSBTZWxlY3QuZ2V0VmFsdWVGcm9tUHJvcHMobmV4dFByb3BzKTtcbiAgICBuZXdTdGF0ZS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKG5leHRQcm9wcy5jb21ib2JveCkge1xuICAgICAgbmV3U3RhdGUuaW5wdXRWYWx1ZSA9IFNlbGVjdC5nZXRJbnB1dFZhbHVlRm9yQ29tYm9ib3gobmV4dFByb3BzLCBvcHRpb25zSW5mbyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufTtcblxuU2VsZWN0LmdldE9wdGlvbnNGcm9tQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSBjaGlsZC50eXBlO1xuXG4gICAgaWYgKHR5cGUuaXNTZWxlY3RPcHRHcm91cCkge1xuICAgICAgU2VsZWN0LmdldE9wdGlvbnNGcm9tQ2hpbGRyZW4oY2hpbGQucHJvcHMuY2hpbGRyZW4sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvcHRpb25zO1xufTtcblxuU2VsZWN0LmdldElucHV0VmFsdWVGb3JDb21ib2JveCA9IGZ1bmN0aW9uIChwcm9wcywgb3B0aW9uc0luZm8sIHVzZURlZmF1bHRWYWx1ZSkge1xuICB2YXIgdmFsdWUgPSBbXTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBwcm9wcyAmJiAhdXNlRGVmYXVsdFZhbHVlKSB7XG4gICAgdmFsdWUgPSB0b0FycmF5KHByb3BzLnZhbHVlKTtcbiAgfVxuXG4gIGlmICgnZGVmYXVsdFZhbHVlJyBpbiBwcm9wcyAmJiB1c2VEZWZhdWx0VmFsdWUpIHtcbiAgICB2YWx1ZSA9IHRvQXJyYXkocHJvcHMuZGVmYXVsdFZhbHVlKTtcbiAgfVxuXG4gIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICB2YWx1ZSA9IHZhbHVlWzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHZhciBsYWJlbCA9IHZhbHVlO1xuXG4gIGlmIChwcm9wcy5sYWJlbEluVmFsdWUpIHtcbiAgICBsYWJlbCA9IHZhbHVlLmxhYmVsO1xuICB9IGVsc2UgaWYgKG9wdGlvbnNJbmZvW2dldE1hcEtleSh2YWx1ZSldKSB7XG4gICAgbGFiZWwgPSBvcHRpb25zSW5mb1tnZXRNYXBLZXkodmFsdWUpXS5sYWJlbDtcbiAgfVxuXG4gIGlmIChsYWJlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGFiZWwgPSAnJztcbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn07XG5cblNlbGVjdC5nZXRMYWJlbEZyb21PcHRpb24gPSBmdW5jdGlvbiAocHJvcHMsIG9wdGlvbikge1xuICByZXR1cm4gZ2V0UHJvcFZhbHVlKG9wdGlvbiwgcHJvcHMub3B0aW9uTGFiZWxQcm9wKTtcbn07XG5cblNlbGVjdC5nZXRPcHRpb25zSW5mb0Zyb21Qcm9wcyA9IGZ1bmN0aW9uIChwcm9wcywgcHJlU3RhdGUpIHtcbiAgdmFyIG9wdGlvbnMgPSBTZWxlY3QuZ2V0T3B0aW9uc0Zyb21DaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG4gIHZhciBvcHRpb25zSW5mbyA9IHt9O1xuICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbikge1xuICAgIHZhciBzaW5nbGVWYWx1ZSA9IGdldFZhbHVlUHJvcFZhbHVlKG9wdGlvbik7XG4gICAgb3B0aW9uc0luZm9bZ2V0TWFwS2V5KHNpbmdsZVZhbHVlKV0gPSB7XG4gICAgICBvcHRpb246IG9wdGlvbixcbiAgICAgIHZhbHVlOiBzaW5nbGVWYWx1ZSxcbiAgICAgIGxhYmVsOiBTZWxlY3QuZ2V0TGFiZWxGcm9tT3B0aW9uKHByb3BzLCBvcHRpb24pLFxuICAgICAgdGl0bGU6IG9wdGlvbi5wcm9wcy50aXRsZSxcbiAgICAgIGRpc2FibGVkOiBvcHRpb24ucHJvcHMuZGlzYWJsZWRcbiAgICB9O1xuICB9KTtcblxuICBpZiAocHJlU3RhdGUpIHtcbiAgICAvLyBrZWVwIG9wdGlvbiBpbmZvIGluIHByZSBzdGF0ZSB2YWx1ZS5cbiAgICB2YXIgb2xkT3B0aW9uc0luZm8gPSBwcmVTdGF0ZS5vcHRpb25zSW5mbztcbiAgICB2YXIgdmFsdWUgPSBwcmVTdGF0ZS52YWx1ZTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIga2V5ID0gZ2V0TWFwS2V5KHYpO1xuXG4gICAgICAgIGlmICghb3B0aW9uc0luZm9ba2V5XSAmJiBvbGRPcHRpb25zSW5mb1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvcHRpb25zSW5mb1trZXldID0gb2xkT3B0aW9uc0luZm9ba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnNJbmZvO1xufTtcblxuU2VsZWN0LmdldFZhbHVlRnJvbVByb3BzID0gZnVuY3Rpb24gKHByb3BzLCB1c2VEZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHZhbHVlID0gW107XG5cbiAgaWYgKCd2YWx1ZScgaW4gcHJvcHMgJiYgIXVzZURlZmF1bHRWYWx1ZSkge1xuICAgIHZhbHVlID0gdG9BcnJheShwcm9wcy52YWx1ZSk7XG4gIH1cblxuICBpZiAoJ2RlZmF1bHRWYWx1ZScgaW4gcHJvcHMgJiYgdXNlRGVmYXVsdFZhbHVlKSB7XG4gICAgdmFsdWUgPSB0b0FycmF5KHByb3BzLmRlZmF1bHRWYWx1ZSk7XG4gIH1cblxuICBpZiAocHJvcHMubGFiZWxJblZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiB2LmtleTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblNlbGVjdC5kaXNwbGF5TmFtZSA9ICdTZWxlY3QnO1xucG9seWZpbGwoU2VsZWN0KTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsiLCJpbXBvcnQgT3B0R3JvdXAgZnJvbSAnLi9PcHRHcm91cCc7XG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vT3B0aW9uJztcbmltcG9ydCBTZWxlY3RQcm9wVHlwZXMgZnJvbSAnLi9Qcm9wVHlwZXMnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL1NlbGVjdCc7XG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuU2VsZWN0Lk9wdEdyb3VwID0gT3B0R3JvdXA7XG5leHBvcnQgeyBPcHRpb24sIE9wdEdyb3VwLCBTZWxlY3RQcm9wVHlwZXMgfTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JjU2VsZWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJjLXNlbGVjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhcm5pbmdcIikpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4uL191dGlsL3R5cGVcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgU2VsZWN0U2l6ZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdkZWZhdWx0JywgJ2xhcmdlJywgJ3NtYWxsJyk7XG52YXIgU2VsZWN0UHJvcFR5cGVzID0ge1xuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFNlbGVjdFNpemVzKSxcbiAgbm90Rm91bmRDb250ZW50OiBQcm9wVHlwZXMuYW55LFxuICBzaG93U2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgb3B0aW9uTGFiZWxQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hvaWNlVHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nXG59OyAvLyA9PiBJdCBpcyBuZWVkbGVzcyB0byBleHBvcnQgdGhlIGRlY2xhcmF0aW9uIG9mIGJlbG93IHR3byBpbm5lciBjb21wb25lbnRzLlxuLy8gZXhwb3J0IHsgT3B0aW9uLCBPcHRHcm91cCB9O1xuXG52YXIgU2VsZWN0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTZWxlY3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNlbGVjdChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWxlY3QpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU2VsZWN0KS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zYXZlU2VsZWN0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLnJjU2VsZWN0ID0gbm9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyU2VsZWN0ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIGdldENvbnRleHRQb3B1cENvbnRhaW5lciA9IF9yZWYuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHMsXG4gICAgICAgICAgcmVuZGVyRW1wdHkgPSBfcmVmLnJlbmRlckVtcHR5O1xuXG4gICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgX2EkY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9hJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gJycgOiBfYSRjbGFzc05hbWUsXG4gICAgICAgICAgc2l6ZSA9IF9hLnNpemUsXG4gICAgICAgICAgbW9kZSA9IF9hLm1vZGUsXG4gICAgICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBfYS5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICByZW1vdmVJY29uID0gX2EucmVtb3ZlSWNvbixcbiAgICAgICAgICBjbGVhckljb24gPSBfYS5jbGVhckljb24sXG4gICAgICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb24gPSBfYS5tZW51SXRlbVNlbGVjdGVkSWNvbixcbiAgICAgICAgICBzaG93QXJyb3cgPSBfYS5zaG93QXJyb3csXG4gICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJzaXplXCIsIFwibW9kZVwiLCBcImdldFBvcHVwQ29udGFpbmVyXCIsIFwicmVtb3ZlSWNvblwiLCBcImNsZWFySWNvblwiLCBcIm1lbnVJdGVtU2VsZWN0ZWRJY29uXCIsIFwic2hvd0Fycm93XCJdKTtcblxuICAgICAgdmFyIHJlc3QgPSAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShyZXN0UHJvcHMsIFsnaW5wdXRJY29uJ10pO1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnc2VsZWN0JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciBjbHMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxnXCIpLCBzaXplID09PSAnbGFyZ2UnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNtXCIpLCBzaXplID09PSAnc21hbGwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNob3ctYXJyb3dcIiksIHNob3dBcnJvdyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgICAgIHZhciBvcHRpb25MYWJlbFByb3AgPSBfdGhpcy5wcm9wcy5vcHRpb25MYWJlbFByb3A7XG5cbiAgICAgIGlmIChfdGhpcy5pc0NvbWJvYm94KCkpIHtcbiAgICAgICAgLy8gY2hpbGRyZW4g5bimIGRvbSDnu5PmnoTml7bvvIzml6Dms5XloavlhaXovpPlhaXmoYZcbiAgICAgICAgb3B0aW9uTGFiZWxQcm9wID0gb3B0aW9uTGFiZWxQcm9wIHx8ICd2YWx1ZSc7XG4gICAgICB9XG5cbiAgICAgIHZhciBtb2RlQ29uZmlnID0ge1xuICAgICAgICBtdWx0aXBsZTogbW9kZSA9PT0gJ211bHRpcGxlJyxcbiAgICAgICAgdGFnczogbW9kZSA9PT0gJ3RhZ3MnLFxuICAgICAgICBjb21ib2JveDogX3RoaXMuaXNDb21ib2JveCgpXG4gICAgICB9O1xuICAgICAgdmFyIGZpbmFsUmVtb3ZlSWNvbiA9IHJlbW92ZUljb24gJiYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KHJlbW92ZUljb24pID8gUmVhY3QuY2xvbmVFbGVtZW50KHJlbW92ZUljb24sIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShyZW1vdmVJY29uLnByb3BzLmNsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1yZW1vdmUtaWNvblwiKSlcbiAgICAgIH0pIDogcmVtb3ZlSWNvbikgfHwgUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgdHlwZTogXCJjbG9zZVwiLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcmVtb3ZlLWljb25cIilcbiAgICAgIH0pO1xuICAgICAgdmFyIGZpbmFsQ2xlYXJJY29uID0gY2xlYXJJY29uICYmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjbGVhckljb24pID8gUmVhY3QuY2xvbmVFbGVtZW50KGNsZWFySWNvbiwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNsZWFySWNvbi5wcm9wcy5jbGFzc05hbWUsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2xlYXItaWNvblwiKSlcbiAgICAgIH0pIDogY2xlYXJJY29uKSB8fCBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICB0eXBlOiBcImNsb3NlLWNpcmNsZVwiLFxuICAgICAgICB0aGVtZTogXCJmaWxsZWRcIixcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNsZWFyLWljb25cIilcbiAgICAgIH0pO1xuICAgICAgdmFyIGZpbmFsTWVudUl0ZW1TZWxlY3RlZEljb24gPSBtZW51SXRlbVNlbGVjdGVkSWNvbiAmJiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQobWVudUl0ZW1TZWxlY3RlZEljb24pID8gUmVhY3QuY2xvbmVFbGVtZW50KG1lbnVJdGVtU2VsZWN0ZWRJY29uLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkobWVudUl0ZW1TZWxlY3RlZEljb24ucHJvcHMuY2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGVkLWljb25cIikpXG4gICAgICB9KSA6IG1lbnVJdGVtU2VsZWN0ZWRJY29uKSB8fCBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICB0eXBlOiBcImNoZWNrXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3RlZC1pY29uXCIpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9yY1NlbGVjdFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICAgICAgaW5wdXRJY29uOiBfdGhpcy5yZW5kZXJTdWZmaXhJY29uKHByZWZpeENscyksXG4gICAgICAgIHJlbW92ZUljb246IGZpbmFsUmVtb3ZlSWNvbixcbiAgICAgICAgY2xlYXJJY29uOiBmaW5hbENsZWFySWNvbixcbiAgICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb246IGZpbmFsTWVudUl0ZW1TZWxlY3RlZEljb24sXG4gICAgICAgIHNob3dBcnJvdzogc2hvd0Fycm93XG4gICAgICB9LCByZXN0LCBtb2RlQ29uZmlnLCB7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgICAgb3B0aW9uTGFiZWxQcm9wOiBvcHRpb25MYWJlbFByb3AgfHwgJ2NoaWxkcmVuJyxcbiAgICAgICAgbm90Rm91bmRDb250ZW50OiBfdGhpcy5nZXROb3RGb3VuZENvbnRlbnQocmVuZGVyRW1wdHkpLFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXIgfHwgZ2V0Q29udGV4dFBvcHVwQ29udGFpbmVyLFxuICAgICAgICByZWY6IF90aGlzLnNhdmVTZWxlY3RcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkocHJvcHMubW9kZSAhPT0gJ2NvbWJvYm94JywgJ1NlbGVjdCcsICdUaGUgY29tYm9ib3ggbW9kZSBpcyBkZXByZWNhdGVkLCAnICsgJ2l0IHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24sICcgKyAncGxlYXNlIHVzZSBBdXRvQ29tcGxldGUgaW5zdGVhZCcpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTZWxlY3QsIFt7XG4gICAga2V5OiBcImZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgdGhpcy5yY1NlbGVjdC5mb2N1cygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJibHVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICB0aGlzLnJjU2VsZWN0LmJsdXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Tm90Rm91bmRDb250ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE5vdEZvdW5kQ29udGVudChyZW5kZXJFbXB0eSkge1xuICAgICAgdmFyIG5vdEZvdW5kQ29udGVudCA9IHRoaXMucHJvcHMubm90Rm91bmRDb250ZW50O1xuXG4gICAgICBpZiAobm90Rm91bmRDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG5vdEZvdW5kQ29udGVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNDb21ib2JveCgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVuZGVyRW1wdHkoJ1NlbGVjdCcpOyAvLyBpZiAodGhpcy5pc0NvbWJvYm94KCkpIHtcbiAgICAgIC8vICAgLy8gQXV0b0NvbXBsZXRlIGRvbid0IGhhdmUgbm90Rm91bmRDb250ZW50IGRlZmF1bHRseVxuICAgICAgLy8gICByZXR1cm4gbm90Rm91bmRDb250ZW50ID09PSB1bmRlZmluZWQgPyBudWxsIDogbm90Rm91bmRDb250ZW50O1xuICAgICAgLy8gfVxuICAgICAgLy8gcmV0dXJuIHJlbmRlckVtcHR5KCdTZWxlY3QnKTtcbiAgICAgIC8vIC8vIHJldHVybiBub3RGb3VuZENvbnRlbnQgPT09IHVuZGVmaW5lZCA/IGxvY2FsZS5ub3RGb3VuZENvbnRlbnQgOiBub3RGb3VuZENvbnRlbnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tYm9ib3hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDb21ib2JveCgpIHtcbiAgICAgIHZhciBtb2RlID0gdGhpcy5wcm9wcy5tb2RlO1xuICAgICAgcmV0dXJuIG1vZGUgPT09ICdjb21ib2JveCcgfHwgbW9kZSA9PT0gU2VsZWN0LlNFQ1JFVF9DT01CT0JPWF9NT0RFX0RPX05PVF9VU0U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclN1ZmZpeEljb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3VmZml4SWNvbihwcmVmaXhDbHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbG9hZGluZyA9IF90aGlzJHByb3BzLmxvYWRpbmcsXG4gICAgICAgICAgc3VmZml4SWNvbiA9IF90aGlzJHByb3BzLnN1ZmZpeEljb247XG5cbiAgICAgIGlmIChzdWZmaXhJY29uKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5pc1ZhbGlkRWxlbWVudChzdWZmaXhJY29uKSA/IFJlYWN0LmNsb25lRWxlbWVudChzdWZmaXhJY29uLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShzdWZmaXhJY29uLnByb3BzLmNsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvdy1pY29uXCIpKVxuICAgICAgICB9KSA6IHN1ZmZpeEljb247XG4gICAgICB9XG5cbiAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIHR5cGU6IFwibG9hZGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgdHlwZTogXCJkb3duXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvdy1pY29uXCIpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJTZWxlY3QpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTZWxlY3Q7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU2VsZWN0O1xuU2VsZWN0Lk9wdGlvbiA9IF9yY1NlbGVjdC5PcHRpb247XG5TZWxlY3QuT3B0R3JvdXAgPSBfcmNTZWxlY3QuT3B0R3JvdXA7XG5TZWxlY3QuU0VDUkVUX0NPTUJPQk9YX01PREVfRE9fTk9UX1VTRSA9ICdTRUNSRVRfQ09NQk9CT1hfTU9ERV9ET19OT1RfVVNFJztcblNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3dTZWFyY2g6IGZhbHNlLFxuICB0cmFuc2l0aW9uTmFtZTogJ3NsaWRlLXVwJyxcbiAgY2hvaWNlVHJhbnNpdGlvbk5hbWU6ICd6b29tJ1xufTtcblNlbGVjdC5wcm9wVHlwZXMgPSBTZWxlY3RQcm9wVHlwZXM7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBfZnAgZnJvbSAnbG9kYXNoL2ZwJ1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0J1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgd2l0aFRoZW1lIGZyb20gJy4uLy4uLy4uL3dpdGhUaGVtZSdcblxuY29uc3QgU1NlbGVjdCA9IHN0eWxlZChTZWxlY3QpYFxuICBtYXJnaW46IDhweDtcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG5gXG5cbi8qKlxuICogTG93ZXJjYXNlcyBhIHN0cmluZ1xuICovXG5jb25zdCB0b0xvd2VyID0gX2ZwLnRvTG93ZXJcblxuLyoqXG4gKiBHZXRzIHRoZSBrbm93biBvcHRpb24gYXMgYSBzZWFyY2hhYmxlIHN0cmluZ1xuICovXG5jb25zdCBnZXRLbm93bk9wdGlvbiA9IF9mcC5waXBlKFxuICBfZnAuZ2V0KCdwcm9wcy5jaGlsZHJlbicpLFxuICB0b0xvd2VyXG4pXG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIHN0cmluZyBpbmNsdWRlcyBhbm90aGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqL1xuY29uc3QgaW5jbHVkZXMgPSAob3B0aW9uID0gJycsIHZhbHVlID0gJycpID0+IG9wdGlvbi5pbmNsdWRlcyh2YWx1ZSlcblxuLyoqXG4gKiBNYXBzIGZpZWxkcyBpbnRvIHRoZSBjb3JyZWN0IHN0cnVjdHVyZVxuICovXG5jb25zdCBnZXRGaWVsZHMgPSBfZnAucGlwZShcbiAgX2ZwLmdldCgnZmllbGRzJyksXG4gIF9mcC5lbnRyaWVzLFxuICBfZnAubWFwKChbZmllbGROYW1lLCBvYmpdKSA9PiAoe1xuICAgIC4uLm9iaixcbiAgICBmaWVsZE5hbWVcbiAgfSkpXG4pXG5cbmNvbnN0IENyZWF0ZUZpbHRlckJ1dHRvbiA9IHdpdGhUaGVtZShwcm9wcyA9PiB7XG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICBjb25zdCBmaWVsZHMgPSBnZXRGaWVsZHMocHJvcHMsICdmaWVsZHMnKVxuXG4gIC8qKlxuICAgKiBvbkNoYW5nZSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgY29uc3Qgb25DaGFuZ2UgPSBmaWVsZE5hbWUgPT4ge1xuICAgIHByb3BzLm9uU2VsZWN0KHtcbiAgICAgIC4uLmdldChwcm9wcywgYGZpZWxkcy4ke2ZpZWxkTmFtZX1gKSxcbiAgICAgIGZpZWxkTmFtZVxuICAgIH0pXG4gICAgc2V0U2VhcmNoVmFsdWUodW5kZWZpbmVkKVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZmlsdGVyaW5nXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dFxuICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9uXG4gICAqL1xuICBjb25zdCBmaWx0ZXJPcHRpb24gPSAoaW5wdXQsIG9wdGlvbikgPT5cbiAgICBpbmNsdWRlcyhnZXRLbm93bk9wdGlvbihvcHRpb24pLCB0b0xvd2VyKGlucHV0KSlcblxuICByZXR1cm4gKFxuICAgIDxTU2VsZWN0XG4gICAgICBzaG93U2VhcmNoXG4gICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XG4gICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIE5ldyBGaWx0ZXJcIlxuICAgICAgb25TZWFyY2g9e3NldFNlYXJjaFZhbHVlfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgZmlsdGVyT3B0aW9uPXtmaWx0ZXJPcHRpb259XG4gICAgPlxuICAgICAge2ZpZWxkcy5tYXAoZmllbGQgPT4gKFxuICAgICAgICA8U2VsZWN0Lk9wdGlvblxuICAgICAgICAgIGtleT17Z2V0KGZpZWxkLCAnZmllbGROYW1lJyl9XG4gICAgICAgICAgdmFsdWU9e2dldChmaWVsZCwgJ2ZpZWxkTmFtZScpfVxuICAgICAgICA+XG4gICAgICAgICAge2dldChmaWVsZCwgJ2xhYmVsJyl9XG4gICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICkpfVxuICAgIDwvU1NlbGVjdD5cbiAgKVxufSlcblxuQ3JlYXRlRmlsdGVyQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgb25TZWxlY3Q6IFBULmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5DcmVhdGVGaWx0ZXJCdXR0b24uZGlzcGxheU5hbWUgPSBDcmVhdGVGaWx0ZXJCdXR0b25cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlRmlsdGVyQnV0dG9uXG4iXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX2dldFByb3RvdHlwZU9mIiwiX2luaGVyaXRzIiwiX3NldFByb3RvdHlwZU9mIiwiUHJvcFR5cGVzLm9uZU9mVHlwZSIsIlByb3BUeXBlcy5zdHJpbmciLCJQcm9wVHlwZXMubnVtYmVyIiwiUHJvcFR5cGVzLnNoYXBlIiwiUHJvcFR5cGVzLm5vZGUiLCJQcm9wVHlwZXMuYXJyYXlPZiIsIlByb3BUeXBlcy5ib29sIiwiUHJvcFR5cGVzLmFueSIsIlByb3BUeXBlcy5mdW5jIiwiUHJvcFR5cGVzLm9iamVjdCIsIl9wcm9wVHlwZXMiLCJfcmVhY3QiLCJfUHJvcFR5cGVzIiwiX3NoYWxsb3dlcXVhbCIsIl9ob2lzdE5vblJlYWN0U3RhdGljcyIsIl9Qcm92aWRlcjIiLCJfY29ubmVjdDIiLCJfY3JlYXRlMiIsIlJlYWN0IiwiX2V4dGVuZHMiLCJTdWJQb3B1cE1lbnUiLCJjbGFzc05hbWVzIiwiUHJvcFR5cGVzIiwiUmVhY3RET00iLCJjb25uZWN0IiwiU3ViTWVudSIsIlJlc2l6ZU9ic2VydmVyIiwiX2luaXRpYWxpc2VQcm9wcyIsImNvbm5lY3RlZCIsImNyZWF0ZSIsIlByb3ZpZGVyIiwidG9BcnJheSIsInNhdmVSZWYiLCJSZWFjdC5jbG9uZUVsZW1lbnQiLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiUmVhY3QuQ29tcG9uZW50IiwiX2RlZmluZVByb3BlcnRpZXMiLCJfY3JlYXRlQ2xhc3MiLCJ0aGlzIiwiUmVhY3RET00uZmluZERPTU5vZGUiLCJjbGFzc25hbWVzIiwiX2RlZmluZVByb3BlcnR5Iiwibm9vcCIsIlJlYWN0LkNoaWxkcmVuIiwiY2hpbGRyZW5Ub0FycmF5IiwiTWVudUl0ZW0iLCJSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlIiwicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJyZXF1aXJlJCQyIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDQiLCJyZXF1aXJlJCQ1IiwicmVxdWlyZSQkNiIsIlNlbGVjdCIsIlNTZWxlY3QiLCJzdHlsZWQiLCJ0b0xvd2VyIiwiX2ZwIiwiZ2V0S25vd25PcHRpb24iLCJwaXBlIiwiZ2V0IiwiaW5jbHVkZXMiLCJvcHRpb24iLCJ2YWx1ZSIsImdldEZpZWxkcyIsImVudHJpZXMiLCJtYXAiLCJmaWVsZE5hbWUiLCJvYmoiLCJDcmVhdGVGaWx0ZXJCdXR0b24iLCJ3aXRoVGhlbWUiLCJwcm9wcyIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsImZpZWxkcyIsIm9uQ2hhbmdlIiwib25TZWxlY3QiLCJmaWx0ZXJPcHRpb24iLCJpbnB1dCIsImZpZWxkIiwicHJvcFR5cGVzIiwiUFQiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFN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QyxRQUFRLEtBQUssTUFBTSxFQUFFO0lBQ25DLE9BQU8sV0FBVyxDQUFDO0dBQ3BCOztFQUVELElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7RUFDN0IsSUFBSSxJQUFJLEdBQUcsc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFBRTs7SUFFOUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzs7SUFFdkIsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztHQUNyRCxDQUFDLENBQUM7RUFDSCxPQUFPLElBQUksQ0FBQzs7O0FDcE1kLFNBQVMsUUFBUSxHQUFHLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FB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QUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBT0EsVUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRTs7QUFFN1QsU0FBU3pCLGlCQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsRUFBRSxFQUFFOztBQUV6SixTQUFTMEMsbUJBQWlCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLElBQUksVUFBVSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLEVBQUU7O0FBRTdULFNBQVNDLGNBQVksQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksVUFBVSxFQUFFRCxtQkFBaUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLEVBQUVBLG1CQUFpQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sV0FBVyxDQUFDLEVBQUU7O0FBRXZOLFNBQVN6Qyw0QkFBMEIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU9DLHdCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7O0FBRS9LLFNBQVNDLGlCQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUVBLGlCQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxHQUFHLFNBQVMsZUFBZSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU9BLGlCQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs7QUFFN00sU0FBU0Qsd0JBQXNCLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksY0FBYyxDQUFDLDJEQUEyRCxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7O0FBRXRLLFNBQVNFLFdBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQUUsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLElBQUksVUFBVSxLQUFLLElBQUksRUFBRSxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRUMsaUJBQWUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRTs7QUFFalksU0FBU0EsaUJBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUVBLGlCQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxTQUFTLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPQSxpQkFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFOztBQUUxSyxJQUFJLE1BQU0sR0FBR3VDLFNBQUksSUFBSUEsU0FBSSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7RUFDbEQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOztFQUVYLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ2YsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDakY7O0VBRUQsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLE9BQU8sTUFBTSxDQUFDLHFCQUFxQixLQUFLLFVBQVUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQzNJLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUM1QztFQUNELE9BQU8sQ0FBQyxDQUFDO0NBQ1YsQ0FBQztBQUNGLEFBUUEsT0FBTyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7QUFDaEMsSUFBSSxtQkFBbUIsR0FBRztFQUN4QixVQUFVLEVBQUU7SUFDVixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxRQUFRLEVBQUU7TUFDUixPQUFPLEVBQUUsQ0FBQztNQUNWLE9BQU8sRUFBRSxDQUFDO0tBQ1g7R0FDRjtFQUNELE9BQU8sRUFBRTtJQUNQLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2YsUUFBUSxFQUFFO01BQ1IsT0FBTyxFQUFFLENBQUM7TUFDVixPQUFPLEVBQUUsQ0FBQztLQUNYO0dBQ0Y7Q0FDRixDQUFDOztBQUVGLElBQUksYUFBYTs7QUFFakIsVUFBVSxnQkFBZ0IsRUFBRTtFQUMxQnhDLFdBQVMsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7RUFFM0MsU0FBUyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQzVCLElBQUksS0FBSyxDQUFDOztJQUVWSixpQkFBZSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzs7SUFFckMsS0FBSyxHQUFHQyw0QkFBMEIsQ0FBQyxJQUFJLEVBQUVFLGlCQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNGLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDOztJQUU3QixLQUFLLENBQUMsZ0JBQWdCLEdBQUcsWUFBWTtNQUNuQyxJQUFJLEdBQUcsR0FBRzBDLFdBQW9CLENBQUMzQyx3QkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO01BQzlELElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7O01BRTVCLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO1FBQ3ZDLEtBQUssQ0FBQyxRQUFRLENBQUM7VUFDYixhQUFhLEVBQUUsS0FBSztTQUNyQixDQUFDLENBQUM7T0FDSjtLQUNGLENBQUM7O0lBRUYsS0FBSyxDQUFDLFlBQVksR0FBRyxZQUFZO01BQy9CLE9BQU8sS0FBSyxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztLQUMvRCxDQUFDOztJQUVGLEtBQUssQ0FBQyxlQUFlLEdBQUcsWUFBWTtNQUNsQyxPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDM0MsQ0FBQzs7SUFFRixLQUFLLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxRQUFRLEVBQUU7TUFDN0MsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztNQUN4QixJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYztVQUNyQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztNQUMxQixJQUFJLFFBQVEsR0FBR3NDLGFBQW1CLENBQUMsWUFBWSxFQUFFZixVQUFRLENBQUM7UUFDeEQsR0FBRyxFQUFFLEtBQUssQ0FBQyxtQkFBbUI7T0FDL0IsRUFBRSxRQUFRLEVBQUU7UUFDWCxNQUFNLEVBQUUsTUFBTTtRQUNkLFNBQVMsRUFBRSxLQUFLLENBQUMsb0JBQW9CLEVBQUU7UUFDdkMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1FBQ2hDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztRQUNwQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7UUFDbEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1FBQ2xCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtRQUNsQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1FBQ3hDLHdCQUF3QixFQUFFLEtBQUssQ0FBQyx3QkFBd0I7UUFDeEQsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtRQUMxQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO09BQ2pELENBQUMsQ0FBQyxDQUFDOztNQUVKLElBQUksY0FBYyxFQUFFO1FBQ2xCLE9BQU8sY0FBYyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztPQUN4Qzs7TUFFRCxPQUFPLElBQUksQ0FBQztLQUNiLENBQUM7O0lBRUYsS0FBSyxDQUFDLHlCQUF5QixHQUFHLFlBQVk7TUFDNUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztNQUN4QixJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDOztNQUUxQyxJQUFJLENBQUMsY0FBYyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUU7UUFDdEMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztPQUN2Rjs7TUFFRCxPQUFPLGNBQWMsQ0FBQztLQUN2QixDQUFDOztJQUVGLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxZQUFZO01BQ3ZDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztLQUN0RCxDQUFDOztJQUVGLEtBQUssQ0FBQyxtQkFBbUIsR0FBR2EsU0FBTyxDQUFDcEMsd0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN0RixLQUFLLENBQUMsY0FBYyxHQUFHb0MsU0FBTyxDQUFDcEMsd0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDNUUsS0FBSyxDQUFDLEtBQUssR0FBRztNQUNaLGFBQWEsRUFBRSxDQUFDO0tBQ2pCLENBQUM7SUFDRixPQUFPLEtBQUssQ0FBQztHQUNkOztFQUVEeUMsY0FBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLEdBQUcsRUFBRSxtQkFBbUI7SUFDeEIsS0FBSyxFQUFFLFNBQVMsaUJBQWlCLEdBQUc7TUFDbEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDekI7R0FDRixFQUFFO0lBQ0QsR0FBRyxFQUFFLG9CQUFvQjtJQUN6QixLQUFLLEVBQUUsU0FBUyxrQkFBa0IsR0FBRztNQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6QjtHQUNGLEVBQUU7SUFDRCxHQUFHLEVBQUUsUUFBUTtJQUNiLEtBQUssRUFBRSxTQUFTLE1BQU0sR0FBRztNQUN2QixJQUFJLGVBQWUsQ0FBQzs7TUFFcEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7VUFDZixZQUFZLEdBQUcsRUFBRSxDQUFDLFlBQVk7VUFDOUIsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLO1VBQ2hCLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7O01BRWxELElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRO1VBQ3pCLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTztVQUN2QixVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVU7VUFDN0IsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhO1VBQ25DLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUTtVQUN6QixVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVU7VUFDN0IsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQjtVQUMzQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWE7VUFDbkMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDO01BQzlELElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7TUFDcEQsSUFBSSxjQUFjLElBQUksZUFBZSxHQUFHLEVBQUUsRUFBRSxlQUFlLENBQUMsZUFBZSxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7TUFDM1UsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3pDLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTztRQUN4QixZQUFZLEVBQUUsWUFBWTtRQUMxQixRQUFRLEVBQUUsUUFBUTtRQUNsQixVQUFVLEVBQUUsVUFBVTtRQUN0QixPQUFPLEVBQUUsT0FBTztPQUNqQixDQUFDLENBQUM7TUFDSCxJQUFJLFVBQVUsQ0FBQzs7TUFFZixJQUFJLFFBQVEsRUFBRTtRQUNaLFVBQVUsR0FBRyxFQUFFLENBQUM7T0FDakIsTUFBTSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUM3QyxVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUN4QixNQUFNO1FBQ0wsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7T0FDdkI7O01BRUQsSUFBSSxVQUFVLEdBQUdsQixVQUFRLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDOztNQUU3QyxJQUFJLFNBQVMsR0FBRyx3QkFBd0IsR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFDOztNQUVoRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO1FBQzVCLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO09BQ25FOztNQUVELE9BQU9lLGFBQW1CLENBQUMsT0FBTyxFQUFFZixVQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtRQUN0RCxVQUFVLEVBQUUsUUFBUSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7UUFDakQsVUFBVSxFQUFFLFVBQVU7UUFDdEIsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjO1FBQ3hCLGNBQWMsRUFBRSxZQUFZO1FBQzVCLGlCQUFpQixFQUFFLG1CQUFtQjtRQUN0QyxTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLG1CQUFtQixFQUFFLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtRQUNyRCxvQkFBb0IsRUFBRSxLQUFLLENBQUMsdUJBQXVCO1FBQ25ELEtBQUssRUFBRSxZQUFZO1FBQ25CLFVBQVUsRUFBRSxhQUFhO1FBQ3pCLFlBQVksRUFBRSxPQUFPO1FBQ3JCLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7UUFDMUMsY0FBYyxFQUFFcUIsWUFBVSxDQUFDLGNBQWMsQ0FBQztRQUMxQyxVQUFVLEVBQUUsVUFBVTtPQUN2QixDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3JCO0dBQ0YsQ0FBQyxDQUFDLENBQUM7O0VBRUosT0FBTyxhQUFhLENBQUM7Q0FDdEIsQ0FBQ0wsU0FBZSxDQUFDLENBQUM7QUFDbkIsQUFFQSxhQUFhLENBQUMsWUFBWSxHQUFHO0VBQzNCLGNBQWMsRUFBRSxTQUFTLGNBQWMsQ0FBQyxJQUFJLEVBQUU7SUFDNUMsT0FBTyxJQUFJLENBQUM7R0FDYjtDQUNGLENBQUM7QUFDRixhQUFhLENBQUMsU0FBUyxHQUFHO0VBQ3hCLFlBQVksRUFBRTNCLElBQWM7RUFDNUIsYUFBYSxFQUFFQSxJQUFjO0VBQzdCLHdCQUF3QixFQUFFRixJQUFjO0VBQ3hDLGFBQWEsRUFBRUcsTUFBZ0I7RUFDL0IsT0FBTyxFQUFFSCxJQUFjO0VBQ3ZCLFFBQVEsRUFBRUEsSUFBYztFQUN4QixVQUFVLEVBQUVBLElBQWM7RUFDMUIsaUJBQWlCLEVBQUVMLE1BQWdCO0VBQ25DLFFBQVEsRUFBRUssSUFBYztFQUN4QixVQUFVLEVBQUVMLE1BQWdCO0VBQzVCLFlBQVksRUFBRU0sR0FBYTtFQUMzQixPQUFPLEVBQUVBLEdBQWE7RUFDdEIsU0FBUyxFQUFFTixNQUFnQjtFQUMzQixjQUFjLEVBQUVBLE1BQWdCO0VBQ2hDLFFBQVEsRUFBRU0sR0FBYTtFQUN2QixVQUFVLEVBQUVGLE9BQWlCLENBQUNKLE1BQWdCLENBQUM7RUFDL0Msb0JBQW9CLEVBQUVELFNBQW1CLENBQUMsQ0FBQ1EsSUFBYyxFQUFFSixJQUFjLENBQUMsQ0FBQztFQUMzRSxjQUFjLEVBQUVJLElBQWM7RUFDOUIsTUFBTSxFQUFFUCxNQUFnQjtDQUN6QixDQUFDO0FBQ0YsYUFBYSxDQUFDLFdBQVcsR0FBRyxlQUFlOztBQ3ZQM0MsU0FBU3dDLGlCQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFOztBQUVqTixTQUFTdEIsVUFBUSxHQUFHLEVBQUVBLFVBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPQSxVQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFOztBQUU3VCxTQUFTekIsaUJBQWUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsWUFBWSxXQUFXLENBQUMsRUFBRSxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxFQUFFLEVBQUU7O0FBRXpKLFNBQVMwQyxtQkFBaUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7QUFFN1QsU0FBU0MsY0FBWSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEVBQUUsSUFBSSxVQUFVLEVBQUVELG1CQUFpQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsRUFBRUEsbUJBQWlCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxXQUFXLENBQUMsRUFBRTs7QUFFdk4sU0FBU3pDLDRCQUEwQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBT0Msd0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTs7QUFFL0ssU0FBU0MsaUJBQWUsQ0FBQyxDQUFDLEVBQUUsRUFBRUEsaUJBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLEdBQUcsU0FBUyxlQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBT0EsaUJBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztBQUU3TSxTQUFTRCx3QkFBc0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsMkRBQTJELENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRTs7QUFFdEssU0FBU0UsV0FBUyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsRUFBRSxJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFQyxpQkFBZSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFOztBQUVqWSxTQUFTQSxpQkFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRUEsaUJBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxJQUFJLFNBQVMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU9BLGlCQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDMUssQUFlQSxJQUFJLHNCQUFzQixHQUFHLDJCQUEyQixDQUFDOztBQUV6RCxJQUFJMkMsTUFBSSxHQUFHLFNBQVMsSUFBSSxHQUFHO0VBQ3pCLE9BQU8sSUFBSSxDQUFDO0NBQ2IsQ0FBQzs7QUFFRixTQUFTLFFBQVEsR0FBRztFQUNsQixLQUFLLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUN0RixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzdCOztFQUVELE9BQU8sWUFBWTtJQUNqQixLQUFLLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtNQUM3RixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hDOzs7SUFHRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtNQUNuQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUU7UUFDMUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDOUI7S0FDRjtHQUNGLENBQUM7Q0FDSDs7QUFFRCxJQUFJLE1BQU07O0FBRVYsVUFBVSxnQkFBZ0IsRUFBRTtFQUMxQjVDLFdBQVMsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7RUFFcEMsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ3JCLElBQUksS0FBSyxDQUFDOztJQUVWSixpQkFBZSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzs7SUFFOUIsS0FBSyxHQUFHQyw0QkFBMEIsQ0FBQyxJQUFJLEVBQUVFLGlCQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzVCLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDOUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDMUIsS0FBSyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUMvQixLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN2QixLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN4QixLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzs7SUFFM0IsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7O0lBRXZCLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDOztJQUV6QixLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7SUFFcEIsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7O0lBRXJCLEtBQUssQ0FBQyxhQUFhLEdBQUcsVUFBVSxLQUFLLEVBQUU7TUFDckMsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7TUFDbEQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O01BRTdCLElBQUksZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLGVBQWUsQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxFQUFFO1FBQ3ZHLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBRTNDLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtVQUMzQixLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdCOztRQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO1VBQ3hCLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQzs7UUFFSCxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQzs7UUFFL0IsT0FBTztPQUNSOztNQUVELEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7O01BRXpCLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDYixJQUFJLEVBQUUsSUFBSTtPQUNYLENBQUMsQ0FBQzs7TUFFSCxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDM0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7T0FDekI7S0FDRixDQUFDOztJQUVGLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxVQUFVLElBQUksRUFBRTtNQUM5QyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFDM0IsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDOztRQUV0QixLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBRXJCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOztRQUV0QixLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztPQUM5Qjs7TUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCLENBQUM7OztJQUdGLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxLQUFLLEVBQUU7TUFDakMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7TUFDNUIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7O01BRXBDLElBQUksUUFBUSxFQUFFO1FBQ1osT0FBTztPQUNSOztNQUVELElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7O01BRTVCLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxFQUFFO1FBQ3BDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDN0IsTUFBTSxJQUFJLE9BQU8sS0FBSyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ2hFLElBQUksQ0FBQyxJQUFJLEVBQUU7VUFDVCxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCOztRQUVELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztPQUN4QixNQUFNLElBQUksT0FBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUU7O1FBRXBDLElBQUksQ0FBQyxJQUFJLEVBQUU7VUFDVCxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDOztVQUV6QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7T0FDRjtLQUNGLENBQUM7O0lBRUYsS0FBSyxDQUFDLGNBQWMsR0FBRyxVQUFVLEtBQUssRUFBRTtNQUN0QyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSztVQUN6QixRQUFRLEdBQUcsV0FBVyxDQUFDLFFBQVE7VUFDL0IsUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRO1VBQy9CLHdCQUF3QixHQUFHLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQzs7TUFFcEUsSUFBSSxRQUFRLEVBQUU7UUFDWixPQUFPO09BQ1I7O01BRUQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7TUFFeEIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDOzs7TUFHL0MsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7TUFFNUIsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxPQUFPLEtBQUssT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUN6RixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7UUFFeEIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1VBQ2hCLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvQzs7UUFFRCxPQUFPO09BQ1I7O01BRUQsSUFBSSxPQUFPLEtBQUssT0FBTyxDQUFDLElBQUksRUFBRTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtVQUNmLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDOztVQUUxQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7VUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1VBQ3hCLE9BQU87U0FDUjtPQUNGLE1BQU0sSUFBSSxPQUFPLEtBQUssT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFOzs7O1FBSWxELElBQUksVUFBVSxJQUFJLENBQUMsUUFBUSxFQUFFO1VBQzNCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4Qjs7O1FBR0QsSUFBSSxVQUFVLElBQUksUUFBUSxJQUFJLHdCQUF3QixLQUFLLEtBQUssRUFBRTtVQUNoRSxLQUFLLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxZQUFZO1lBQzNDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7V0FDM0IsQ0FBQyxDQUFDO1NBQ0o7T0FDRixNQUFNLElBQUksT0FBTyxLQUFLLE9BQU8sQ0FBQyxHQUFHLEVBQUU7UUFDbEMsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1VBQ2QsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7VUFFMUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1VBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6Qjs7UUFFRCxPQUFPO09BQ1I7O01BRUQsSUFBSSxVQUFVLElBQUksS0FBSyxDQUFDLGdCQUFnQixFQUFFO1FBQ3hDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFFakQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1VBQ3ZELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztVQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7T0FDRjtLQUNGLENBQUM7O0lBRUYsS0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLElBQUksRUFBRTtNQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOztNQUVyQixJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsT0FBTztPQUNSOztNQUVELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO01BQzlCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7TUFDeEIsSUFBSSxhQUFhLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDNUMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7O01BRXhDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7O01BRWhDLElBQUksZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDM0IsSUFBSSw2QkFBNkIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7VUFDOUQsT0FBTztTQUNSOztRQUVELEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztPQUN2QyxNQUFNO1FBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsS0FBSyxhQUFhLElBQUksYUFBYSxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO1VBQy9ILEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO1lBQ3hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLEtBQUs7V0FDbEIsQ0FBQyxDQUFDOztVQUVILE9BQU87U0FDUjs7UUFFRCxLQUFLLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7UUFFeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7VUFDeEIsU0FBUyxFQUFFLElBQUk7VUFDZixVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7T0FDSjs7TUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOztNQUV4QixJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDOztNQUVwRixJQUFJLEtBQUssQ0FBQyxvQkFBb0IsRUFBRTtRQUM5QixLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztPQUN4QztLQUNGLENBQUM7O0lBRUYsS0FBSyxDQUFDLGNBQWMsR0FBRyxVQUFVLEtBQUssRUFBRTtNQUN0QyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSTtVQUNqQixRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7TUFFOUIsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUU7UUFDckUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztRQUU5QyxPQUFPO09BQ1I7O01BRUQsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUM3QixLQUFLLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7T0FDL0M7O01BRUQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7TUFFeEIsSUFBSSxLQUFLLENBQUMsb0JBQW9CLEVBQUU7UUFDOUIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztPQUN6QjtLQUNGLENBQUM7O0lBRUYsS0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsRUFBRTtNQUNoQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7TUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDOztNQUVuQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFDekIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1VBQ3BDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSTtTQUM3QixDQUFDLENBQUM7T0FDSjtLQUNGLENBQUM7O0lBRUYsS0FBSyxDQUFDLGtCQUFrQixHQUFHLFlBQVk7TUFDckMsSUFBSSxLQUFLLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBRTtRQUNwRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7T0FDakM7S0FDRixDQUFDOztJQUVGLEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLEVBQUU7TUFDaEMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUN4QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsT0FBTztPQUNSOztNQUVELEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Ozs7Ozs7TUFRdEIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztNQUV4QyxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUU7UUFDM0MsT0FBTztPQUNSOztNQUVELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDdEUsT0FBTztPQUNSOztNQUVELElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUNsQixPQUFPO09BQ1I7O01BRUQsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O01BRXRCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFDOzs7TUFHN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDdkQsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO09BQ3RCO0tBQ0YsQ0FBQzs7SUFFRixLQUFLLENBQUMsWUFBWSxHQUFHLFlBQVk7O01BRS9CLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzlCLENBQUM7O0lBRUYsS0FBSyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsRUFBRTtNQUMvQixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQ3hCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixPQUFPO09BQ1I7O01BRUQsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVk7UUFDOUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7O1FBRXZCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFDOztRQUU3QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDOztRQUV4QyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLFVBQVUsSUFBSSxLQUFLLENBQUMsd0JBQXdCLEVBQUU7VUFDM0YsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7O1VBRW5DLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFFN0MsSUFBSSxXQUFXLEVBQUU7Y0FDZixLQUFLLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztjQUV6QyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO1dBQ0Y7U0FDRixNQUFNLElBQUksZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxFQUFFO1VBQ2hELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTs7WUFFcEIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztXQUN6QixNQUFNOzs7WUFHTCxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7O1lBRTVCLElBQUksS0FBSyxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUMsZUFBZSxFQUFFLEVBQUU7Y0FDcEQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDcEM7V0FDRjs7VUFFRCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztVQUVqRCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDMUIsS0FBSyxHQUFHLFFBQVEsQ0FBQzs7WUFFakIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztXQUN6QjtTQUNGOzs7UUFHRCxJQUFJLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7VUFDL0MsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O1VBRTdCLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1VBQ3pCLE9BQU87U0FDUjs7UUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUUxQixJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7VUFDaEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUM3QztPQUNGLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDUixDQUFDOztJQUVGLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLEtBQUssRUFBRTtNQUN4QyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO01BQ3hCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7O01BRXhCLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUNsQixPQUFPO09BQ1I7O01BRUQsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztNQUNsQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO01BQ3hCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7TUFFeEIsSUFBSSxVQUFVLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUM5QixJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7VUFDaEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0Qjs7UUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRTtVQUN4QixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7O1FBRUgsSUFBSSxVQUFVLEVBQUU7VUFDZCxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pCO09BQ0Y7S0FDRixDQUFDOztJQUVGLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxZQUFZO01BQ3pDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN6QixDQUFDOztJQUVGLEtBQUssQ0FBQywwQkFBMEIsR0FBRyxVQUFVLEtBQUssRUFBRSxXQUFXLEVBQUU7TUFDL0QsSUFBSSxJQUFJLENBQUM7TUFDVCxXQUFXLEdBQUcsV0FBVyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDOztNQUVyRCxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNqQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO09BQ3RDOztNQUVELElBQUksSUFBSSxFQUFFO1FBQ1IsT0FBTyxJQUFJLENBQUM7T0FDYjs7TUFFRCxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7O01BRXpCLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7UUFDNUIsSUFBSSxVQUFVLEdBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEUsSUFBSSxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQzs7UUFFaEYsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1VBQzVCLFlBQVksR0FBRyxVQUFVLENBQUM7U0FDM0IsTUFBTSxJQUFJLGlCQUFpQixLQUFLLFNBQVMsRUFBRTtVQUMxQyxZQUFZLEdBQUcsaUJBQWlCLENBQUM7U0FDbEM7T0FDRjs7TUFFRCxJQUFJLFdBQVcsR0FBRztRQUNoQixNQUFNLEVBQUVxQyxhQUFtQixDQUFDLE1BQU0sRUFBRTtVQUNsQyxLQUFLLEVBQUUsS0FBSztVQUNaLEdBQUcsRUFBRSxLQUFLO1NBQ1gsRUFBRSxLQUFLLENBQUM7UUFDVCxLQUFLLEVBQUUsS0FBSztRQUNaLEtBQUssRUFBRSxZQUFZO09BQ3BCLENBQUM7TUFDRixPQUFPLFdBQVcsQ0FBQztLQUNwQixDQUFDOztJQUVGLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxVQUFVLEtBQUssRUFBRTtNQUM5QyxJQUFJLHFCQUFxQixHQUFHLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLENBQUM7VUFDL0QsTUFBTSxHQUFHLHFCQUFxQixDQUFDLE1BQU0sQ0FBQzs7TUFFMUMsT0FBTyxNQUFNLENBQUM7S0FDZixDQUFDOztJQUVGLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxVQUFVLE1BQU0sRUFBRTtNQUNoRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFLLEVBQUU7UUFDakMsT0FBTyxLQUFLLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDNUMsQ0FBQyxDQUFDO0tBQ0osQ0FBQzs7SUFFRixLQUFLLENBQUMsZUFBZSxHQUFHLFVBQVUsS0FBSyxFQUFFO01BQ3ZDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUN2QixPQUFPLElBQUksQ0FBQztPQUNiOztNQUVELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztNQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFO1FBQzFELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7O1FBRTdCLElBQUksUUFBUSxFQUFFO1VBQ1osT0FBTztTQUNSOztRQUVELElBQUksUUFBUSxHQUFHSCxTQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUVuQyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRTtVQUMzQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNwQjtPQUNGLENBQUMsQ0FBQztNQUNILE9BQU8sS0FBSyxDQUFDO0tBQ2QsQ0FBQzs7SUFFRixLQUFLLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxLQUFLLEVBQUU7TUFDMUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtRQUM1QixPQUFPO1VBQ0wsR0FBRyxFQUFFLEtBQUs7VUFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztTQUMxQyxDQUFDO09BQ0g7O01BRUQsT0FBTyxLQUFLLENBQUM7S0FDZCxDQUFDOztJQUVGLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLElBQUksRUFBRTtNQUN2QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7O01BRWYsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtVQUM3QixHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6QixPQUFPLENBQUMsQ0FBQztXQUNWLENBQUMsQ0FBQztTQUNKLE1BQU07VUFDTCxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUMxQixPQUFPO2NBQ0wsR0FBRyxFQUFFLEVBQUU7Y0FDUCxLQUFLLEVBQUUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQzthQUN2QyxDQUFDO1dBQ0gsQ0FBQyxDQUFDO1NBQ0o7O1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUNyRDs7TUFFRCxPQUFPLEdBQUcsQ0FBQztLQUNaLENBQUM7O0lBRUYsS0FBSyxDQUFDLHFCQUFxQixHQUFHLFVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBRTtNQUMxRCxJQUFJLHNCQUFzQixHQUFHLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDO1VBQzdFLEtBQUssR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7O01BRXpDLE9BQU8sS0FBSyxDQUFDO0tBQ2QsQ0FBQzs7SUFFRixLQUFLLENBQUMsb0JBQW9CLEdBQUcsWUFBWTtNQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1FBQzVCLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO09BQ3BEOztNQUVELE9BQU8sS0FBSyxDQUFDLGlCQUFpQixDQUFDO0tBQ2hDLENBQUM7O0lBRUYsS0FBSyxDQUFDLHFCQUFxQixHQUFHLFlBQVk7TUFDeEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztNQUN4QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO01BQ3hCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQzs7TUFFbkIsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1FBQ3BCLE1BQU0sR0FBRyxJQUFJLENBQUM7T0FDZjs7TUFFRCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDOztNQUV4QixJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDaEIsTUFBTSxHQUFHLElBQUksQ0FBQztPQUNmOztNQUVELElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzdFLE1BQU0sR0FBRyxLQUFLLENBQUM7T0FDaEI7O01BRUQsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7TUFFcEMsSUFBSSxXQUFXLEVBQUU7UUFDZixPQUFPRyxhQUFtQixDQUFDLEtBQUssRUFBRWYsVUFBUSxDQUFDO1VBQ3pDLFdBQVcsRUFBRSxtQkFBbUI7VUFDaEMsS0FBSyxFQUFFQSxVQUFRLENBQUM7WUFDZCxPQUFPLEVBQUUsTUFBTSxHQUFHLE1BQU0sR0FBRyxPQUFPO1dBQ25DLEVBQUUsa0JBQWtCLENBQUM7U0FDdkIsRUFBRSxzQkFBc0IsRUFBRTtVQUN6QixPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtVQUNqQyxTQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLHlCQUF5QixDQUFDO1NBQ2pFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztPQUNsQjs7TUFFRCxPQUFPLElBQUksQ0FBQztLQUNiLENBQUM7O0lBRUYsS0FBSyxDQUFDLGVBQWUsR0FBRyxZQUFZO01BQ2xDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7TUFDeEIsSUFBSSxZQUFZLEdBQUdlLGFBQW1CLENBQUMsT0FBTyxFQUFFO1FBQzlDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtRQUNaLFlBQVksRUFBRSxLQUFLO09BQ3BCLENBQUMsQ0FBQzs7TUFFSCxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUUsR0FBRyxZQUFZLENBQUM7TUFDbEYsSUFBSSxRQUFRLEdBQUdNLFlBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRUMsaUJBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7O01BR2pJLE9BQU9QLGFBQW1CLENBQUMsS0FBSyxFQUFFO1FBQ2hDLFNBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUM7T0FDOUQsRUFBRUQsWUFBa0IsQ0FBQyxZQUFZLEVBQUU7UUFDbEMsR0FBRyxFQUFFLEtBQUssQ0FBQyxZQUFZO1FBQ3ZCLFFBQVEsRUFBRSxLQUFLLENBQUMsYUFBYTtRQUM3QixTQUFTLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDbkcsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVTtRQUM3QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7UUFDeEIsU0FBUyxFQUFFLFFBQVE7T0FDcEIsQ0FBQyxFQUFFQyxhQUFtQixDQUFDLE1BQU0sRUFBRTtRQUM5QixHQUFHLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtRQUM3QixTQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLHdCQUF3QixDQUFDO09BQ2hFLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNyQyxDQUFDOztJQUVGLEtBQUssQ0FBQyxlQUFlLEdBQUcsWUFBWTtNQUNsQyxPQUFPLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUNBQXFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO0tBQ2xILENBQUM7O0lBRUYsS0FBSyxDQUFDLHFCQUFxQixHQUFHLFlBQVk7TUFDeEMsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDO0tBQzdCLENBQUM7O0lBRUYsS0FBSyxDQUFDLGVBQWUsR0FBRyxZQUFZO01BQ2xDLElBQUksS0FBSyxDQUFDLGdCQUFnQixFQUFFO1FBQzFCLE9BQU8sS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxDQUFDO09BQ2pEO0tBQ0YsQ0FBQzs7SUFFRixLQUFLLENBQUMscUJBQXFCLEdBQUcsWUFBWTtNQUN4QyxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtRQUMxQixPQUFPLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztPQUM5QztLQUNGLENBQUM7O0lBRUYsS0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLElBQUksRUFBRTtNQUNuQyxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7TUFDcEYsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVM7VUFDNUIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7TUFDbkMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztNQUN4QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDOztNQUV4QixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ3ZCLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7UUFFcEMsT0FBTztPQUNSOztNQUVELElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRTtRQUN2QyxLQUFLLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO09BQzNDOztNQUVELElBQUksU0FBUyxHQUFHO1FBQ2QsSUFBSSxFQUFFLElBQUk7UUFDVixhQUFhLEVBQUUsRUFBRTtPQUNsQixDQUFDOzs7TUFHRixJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1FBQ3BELEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO09BQ3JDOztNQUVELElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDckM7O01BRUQsS0FBSyxDQUFDLFFBQVEsQ0FBQ2YsVUFBUSxDQUFDO1FBQ3RCLElBQUksRUFBRSxJQUFJO09BQ1gsRUFBRSxTQUFTLENBQUMsRUFBRSxZQUFZO1FBQ3pCLElBQUksSUFBSSxFQUFFO1VBQ1IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JDO09BQ0YsQ0FBQyxDQUFDO0tBQ0osQ0FBQzs7SUFFRixLQUFLLENBQUMsYUFBYSxHQUFHLFVBQVUsVUFBVSxFQUFFO01BQzFDLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztNQUMxRixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7TUFFcEMsSUFBSSxVQUFVLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDekMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLFNBQVMsRUFBRTs7VUFFbEMsSUFBSSxVQUFVLElBQUksVUFBVSxLQUFLLFNBQVMsQ0FBQyxVQUFVLElBQUksUUFBUSxFQUFFO1lBQ2pFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztXQUN0Qjs7VUFFRCxPQUFPO1lBQ0wsVUFBVSxFQUFFLFVBQVU7V0FDdkIsQ0FBQztTQUNILEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO09BQzNCO0tBQ0YsQ0FBQzs7SUFFRixLQUFLLENBQUMsZUFBZSxHQUFHLFVBQVUsR0FBRyxFQUFFO01BQ3JDLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLO1VBQzFCLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUTtVQUNoQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztNQUNuRCxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztNQUNsQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7TUFDeEIsaUJBQWlCLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssRUFBRTtRQUMvRCxJQUFJLGFBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUU1QixJQUFJLFFBQVEsRUFBRTtVQUNaLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7O1VBRXpDLElBQUksS0FBSyxJQUFJLDZCQUE2QixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNuRSxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQyxXQUFXLEdBQUcsSUFBSSxDQUFDOztZQUVuQixLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQ3pCO1NBQ0YsTUFBTSxJQUFJLDZCQUE2QixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtVQUNqRSxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztVQUM1QyxXQUFXLEdBQUcsSUFBSSxDQUFDOztVQUVuQixLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO09BQ0YsQ0FBQyxDQUFDO01BQ0gsT0FBTyxXQUFXLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQztLQUM1QyxDQUFDOztJQUVGLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLEtBQUssRUFBRTs7TUFFeEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7O01BRTdCLElBQUksT0FBTyxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQzlCLE9BQU8sS0FBSyxDQUFDO09BQ2Q7O01BRUQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7TUFDdkMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7O01BRW5DLElBQUksMEJBQTBCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDdEUsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1VBQzNCLElBQUksR0FBRyxLQUFLLENBQUM7U0FDZDtPQUNGOztNQUVELE9BQU8sSUFBSSxDQUFDO0tBQ2IsQ0FBQzs7SUFFRixLQUFLLENBQUMsYUFBYSxHQUFHLFlBQVk7TUFDaEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDekIsQ0FBQzs7SUFFRixLQUFLLENBQUMsY0FBYyxHQUFHLFlBQVk7TUFDakMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7S0FDMUIsQ0FBQzs7SUFFRixLQUFLLENBQUMsY0FBYyxHQUFHLFVBQVUsSUFBSSxFQUFFO01BQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3BGLE9BQU87T0FDUjs7TUFFRCxJQUFJLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7TUFFbEMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzNCLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ2pDOztNQUVELEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDYixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDWixhQUFhLEVBQUUsR0FBRztPQUNuQixDQUFDLENBQUM7S0FDSixDQUFDOztJQUVGLEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFO01BQzNDLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLGVBQWUsQ0FBQztNQUN4RyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztNQUM5QixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzs7TUFFeEMsSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLElBQUksU0FBUyxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO1FBQ2xFLE9BQU8sSUFBSSxDQUFDO09BQ2I7O01BRUQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7O01BRXhDLElBQUksY0FBYyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7UUFDakMsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1VBQ3JCLFFBQVEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDdkIsd0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUM5RDtPQUNGLE1BQU07UUFDTCxRQUFRLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQ0Esd0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztPQUM5RDs7TUFFRCxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsT0FBTyxJQUFJLENBQUM7T0FDYixNQUFNLElBQUksT0FBTyxRQUFRLEtBQUssVUFBVSxFQUFFO1FBQ3pDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQ0Esd0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ25FLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUMvQixPQUFPLEtBQUssQ0FBQztPQUNkOztNQUVELE9BQU8sSUFBSSxDQUFDO0tBQ2IsQ0FBQzs7SUFFRixLQUFLLENBQUMsWUFBWSxHQUFHLFlBQVk7TUFDL0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7O01BRWxDLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtRQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7T0FDeEI7O01BRUQsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVk7UUFDL0MsSUFBSSxPQUFPLEVBQUU7VUFDWCxPQUFPLEVBQUUsQ0FBQztTQUNYO09BQ0YsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNSLENBQUM7O0lBRUYsS0FBSyxDQUFDLGNBQWMsR0FBRyxZQUFZO01BQ2pDLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtRQUNwQixZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO09BQ3pCO0tBQ0YsQ0FBQzs7SUFFRixLQUFLLENBQUMsYUFBYSxHQUFHLFlBQVk7TUFDaEMsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFO1FBQ25CLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUIsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7T0FDeEI7S0FDRixDQUFDOztJQUVGLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxZQUFZO01BQ3BDLElBQUksS0FBSyxDQUFDLGFBQWEsRUFBRTtRQUN2QixZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO09BQzVCO0tBQ0YsQ0FBQzs7SUFFRixLQUFLLENBQUMsb0JBQW9CLEdBQUcsWUFBWTtNQUN2QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO01BQzVCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7O01BRXhCLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUNsQixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO09BQzlELE1BQU07UUFDTCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO09BQ2pFO0tBQ0YsQ0FBQzs7SUFFRixLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLFNBQVMsRUFBRTtNQUM1QyxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7UUFDckIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztRQUVwQyxJQUFJLFNBQVMsR0FBRyxRQUFRO1lBQ3BCLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDOztRQUU1QyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksMEJBQTBCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7VUFDOUQsSUFBSSxhQUFhLEtBQUssS0FBSyxFQUFFO1lBQzNCLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNkLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1dBQ3ZCO1NBQ0YsTUFBTSxJQUFJLGFBQWEsS0FBSyxLQUFLLENBQUMsWUFBWSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7VUFDckUsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7VUFFM0IsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdkI7T0FDRjtLQUNGLENBQUM7O0lBRUYsS0FBSyxDQUFDLGNBQWMsR0FBRyxVQUFVLFdBQVcsRUFBRSxDQUFDLEVBQUU7TUFDL0MsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQzs7TUFFeEIsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDeEQsT0FBTztPQUNSOzs7TUFHRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFO1FBQzFCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztPQUNyQjs7TUFFRCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztNQUNqQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsV0FBVyxFQUFFO1FBQ2pELE9BQU8sV0FBVyxLQUFLLFdBQVcsQ0FBQztPQUNwQyxDQUFDLENBQUM7TUFDSCxJQUFJLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7TUFFMUMsSUFBSSxXQUFXLEVBQUU7UUFDZixJQUFJLEtBQUssR0FBRyxXQUFXLENBQUM7O1FBRXhCLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTtVQUN0QixLQUFLLEdBQUc7WUFDTixHQUFHLEVBQUUsV0FBVztZQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztXQUNoRCxDQUFDO1NBQ0g7O1FBRUQsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1VBQ3BCLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO09BQ0Y7O01BRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6QixDQUFDOztJQUVGLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxZQUFZO01BQ3BDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7O01BRXhCLElBQUkrQyxRQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDL0QsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUMxQjtLQUNGLENBQUM7O0lBRUYsS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLEtBQUssRUFBRTtNQUNsQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQ3hCLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztPQUM1RjtLQUNGLENBQUM7O0lBRUYsS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLEtBQUssRUFBRTtNQUNsQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDOztNQUV4QixJQUFJLEVBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLEtBQUssQ0FBQyxRQUFRLENBQUM7VUFDYixLQUFLLEVBQUUsS0FBSztTQUNiLEVBQUUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO09BQzNCOztNQUVELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7TUFFeEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDOztNQUVuRCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFDbEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUMzRTtLQUNGLENBQUM7O0lBRUYsS0FBSyxDQUFDLGVBQWUsR0FBRyxVQUFVLEdBQUcsRUFBRTtNQUNyQyxPQUFPQyxPQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUU7UUFDakUsSUFBSSxVQUFVLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsT0FBTyxVQUFVLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7T0FDbEUsQ0FBQyxDQUFDO0tBQ0osQ0FBQzs7SUFFRixLQUFLLENBQUMsZUFBZSxHQUFHLFlBQVk7TUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ3JCLE9BQU87T0FDUjs7TUFFRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFO1FBQy9ELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7T0FDckQ7S0FDRixDQUFDOztJQUVGLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxZQUFZO01BQ3RDLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO01BQ3hDLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxLQUFLO1VBQzFCLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUTtVQUNoQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUk7VUFDeEIsZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUM7TUFDbkQsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO01BQ25CLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztNQUN0QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7O01BRWxCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDOztNQUV2RixJQUFJLElBQUksRUFBRTs7UUFFUixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM5QixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLFdBQVcsRUFBRTtVQUMxQyxPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFILENBQUMsQ0FBQzs7UUFFSCxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLElBQUksRUFBRTtVQUMvQixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNsQyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsV0FBVyxFQUFFO1VBQ25DLElBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQztVQUN0QixJQUFJLFFBQVEsR0FBR1YsYUFBbUIsQ0FBQ1csV0FBUSxFQUFFO1lBQzNDLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsSUFBSSxFQUFFLFFBQVE7WUFDZCxTQUFTLEVBQUUsc0JBQXNCO1lBQ2pDLEtBQUssRUFBRSxHQUFHO1lBQ1YsR0FBRyxFQUFFLEdBQUc7V0FDVCxFQUFFLEdBQUcsQ0FBQyxDQUFDO1VBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztVQUN2QixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFCLENBQUMsQ0FBQzs7UUFFSCxJQUFJLFVBQVUsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsTUFBTSxFQUFFO1VBQ2xELE9BQU8saUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxDQUFDO1NBQ2pELENBQUMsRUFBRTtVQUNGLE9BQU8sQ0FBQyxPQUFPLENBQUNYLGFBQW1CLENBQUNXLFdBQVEsRUFBRTtZQUM1QyxLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLElBQUksRUFBRSxRQUFRO1lBQ2QsU0FBUyxFQUFFLHNCQUFzQjtZQUNqQyxLQUFLLEVBQUUsVUFBVTtZQUNqQixHQUFHLEVBQUUsVUFBVTtXQUNoQixFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDakI7T0FDRjs7TUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxlQUFlLEVBQUU7UUFDdEMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLE9BQU8sR0FBRyxDQUFDWCxhQUFtQixDQUFDVyxXQUFRLEVBQUU7VUFDdkMsS0FBSyxFQUFFLGtCQUFrQjtVQUN6QixTQUFTLEVBQUUsc0JBQXNCO1VBQ2pDLFFBQVEsRUFBRSxJQUFJO1VBQ2QsSUFBSSxFQUFFLFFBQVE7VUFDZCxLQUFLLEVBQUUsV0FBVztVQUNsQixHQUFHLEVBQUUsV0FBVztTQUNqQixFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7T0FDdEI7O01BRUQsT0FBTztRQUNMLEtBQUssRUFBRSxLQUFLO1FBQ1osT0FBTyxFQUFFLE9BQU87T0FDakIsQ0FBQztLQUNILENBQUM7O0lBRUYsS0FBSyxDQUFDLCtCQUErQixHQUFHLFVBQVUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUU7TUFDbkYsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO01BQ2IsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztNQUN4QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztNQUN4QyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO01BQ3RCRixRQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLEtBQUssRUFBRTtRQUNoRCxJQUFJLENBQUMsS0FBSyxFQUFFO1VBQ1YsT0FBTztTQUNSOztRQUVELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O1FBRXRCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1VBQ3pCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1VBQzlCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7O1VBRXBCLElBQUksQ0FBQyxHQUFHLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ3JDLEdBQUcsR0FBRyxLQUFLLENBQUM7V0FDYixNQUFNLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFO1lBQ3hCLEtBQUssR0FBRyxHQUFHLENBQUM7V0FDYjs7O1VBR0QsSUFBSSxVQUFVLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDdkQsSUFBSSxVQUFVLEdBQUdDLE9BQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLFFBQVEsRUFBRTtjQUM3RSxJQUFJLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDO2NBQ2hFLE9BQU9WLGFBQW1CLENBQUNXLFdBQVEsRUFBRTFCLFVBQVEsQ0FBQztnQkFDNUMsR0FBRyxFQUFFLGFBQWE7Z0JBQ2xCLEtBQUssRUFBRSxhQUFhO2VBQ3JCLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDckIsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQ2UsYUFBbUIsQ0FBQyxhQUFhLEVBQUU7Y0FDMUMsR0FBRyxFQUFFLEdBQUc7Y0FDUixLQUFLLEVBQUUsS0FBSzthQUNiLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztXQUNqQixNQUFNO1lBQ0wsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLCtCQUErQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQzs7WUFFdkcsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO2NBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUNBLGFBQW1CLENBQUMsYUFBYSxFQUFFO2dCQUMxQyxHQUFHLEVBQUUsR0FBRztnQkFDUixLQUFLLEVBQUUsS0FBSztlQUNiLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUNsQjtXQUNGOztVQUVELE9BQU87U0FDUjs7UUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSwyRUFBMkUsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckwsSUFBSSxVQUFVLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFFN0MsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRTtVQUN6QyxJQUFJLFFBQVEsR0FBR0EsYUFBbUIsQ0FBQ1csV0FBUSxFQUFFMUIsVUFBUSxDQUFDO1lBQ3BELEtBQUssRUFBRSxrQkFBa0I7WUFDekIsU0FBUyxFQUFFLHNCQUFzQjtZQUNqQyxLQUFLLEVBQUUsVUFBVTtZQUNqQixHQUFHLEVBQUUsVUFBVTtZQUNmLElBQUksRUFBRSxRQUFRO1dBQ2YsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztVQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1VBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUI7O1FBRUQsSUFBSSxJQUFJLEVBQUU7VUFDUixZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9CO09BQ0YsQ0FBQyxDQUFDO01BQ0gsT0FBTyxHQUFHLENBQUM7S0FDWixDQUFDOztJQUVGLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxZQUFZO01BQ3ZDLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLO1VBQ3pCLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSTtVQUN2QixVQUFVLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQztNQUN4QyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztNQUM5QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO01BQ3hCLElBQUksb0JBQW9CLEdBQUcsS0FBSyxDQUFDLG9CQUFvQjtVQUNqRCxTQUFTLEdBQUcsS0FBSyxDQUFDLFNBQVM7VUFDM0IsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQjtVQUN6QyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVc7VUFDL0IsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVO1VBQzdCLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO01BQ2xDLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO01BQ2hELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLHNCQUFzQixDQUFDLENBQUM7O01BRTdELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQzs7TUFFckIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDOztRQUV6QixJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7VUFDaEIsSUFBSSxpQkFBaUIsR0FBRyxLQUFLLENBQUM7VUFDOUIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDOztVQUVoQixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1dBQzFCLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDZixpQkFBaUIsR0FBRyxDQUFDLFVBQVUsQ0FBQzs7WUFFaEMsSUFBSSxpQkFBaUIsRUFBRTtjQUNyQixPQUFPLEdBQUcsR0FBRyxDQUFDO2FBQ2Y7V0FDRixNQUFNO1lBQ0wsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1dBQzFCOztVQUVELElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7VUFFM0IsSUFBSSxzQkFBc0IsR0FBRyxLQUFLLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDO2NBQ3RFLEtBQUssR0FBRyxzQkFBc0IsQ0FBQyxLQUFLO2NBQ3BDLEtBQUssR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7O1VBRXpDLGFBQWEsR0FBR2UsYUFBbUIsQ0FBQyxLQUFLLEVBQUU7WUFDekMsR0FBRyxFQUFFLE9BQU87WUFDWixTQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsMkJBQTJCLENBQUM7WUFDNUQsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1lBQzlCLEtBQUssRUFBRTtjQUNMLE9BQU8sRUFBRSxpQkFBaUIsR0FBRyxPQUFPLEdBQUcsTUFBTTtjQUM3QyxPQUFPLEVBQUUsT0FBTzthQUNqQjtXQUNGLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDWDs7UUFFRCxJQUFJLENBQUMsVUFBVSxFQUFFO1VBQ2YsU0FBUyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDN0IsTUFBTTtVQUNMLFNBQVMsR0FBRyxDQUFDLGFBQWEsRUFBRUEsYUFBbUIsQ0FBQyxLQUFLLEVBQUU7WUFDckQsU0FBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7WUFDaEYsR0FBRyxFQUFFLE9BQU87WUFDWixLQUFLLEVBQUU7Y0FDTCxPQUFPLEVBQUUsSUFBSSxHQUFHLE9BQU8sR0FBRyxNQUFNO2FBQ2pDO1dBQ0YsRUFBRSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlCO09BQ0YsTUFBTTtRQUNMLElBQUksa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksbUJBQW1CLENBQUM7O1FBRXhCLElBQUksV0FBVyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsRUFBRTtVQUMzRCxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDOztVQUU1RCxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O1VBRW5GLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7O1VBRTlELElBQUksaUJBQWlCLEVBQUU7WUFDckIsT0FBTyxHQUFHLE9BQU8saUJBQWlCLEtBQUssVUFBVSxHQUFHLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxHQUFHLGlCQUFpQixDQUFDO1dBQzFHOztVQUVELG1CQUFtQixHQUFHQSxhQUFtQixDQUFDLElBQUksRUFBRWYsVUFBUSxDQUFDO1lBQ3ZELEtBQUssRUFBRSxrQkFBa0I7V0FDMUIsRUFBRSxzQkFBc0IsRUFBRTtZQUN6QixJQUFJLEVBQUUsY0FBYztZQUNwQixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFNBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsOEJBQThCLENBQUM7WUFDeEcsR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztXQUN4QixDQUFDLEVBQUVlLGFBQW1CLENBQUMsS0FBSyxFQUFFO1lBQzdCLFNBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSw2QkFBNkIsQ0FBQztXQUMvRCxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDZDs7UUFFRCxJQUFJLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFO1VBQzNCLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxVQUFVLFdBQVcsRUFBRTtZQUNoRSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBRXpELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7O1lBRWxDLElBQUksZ0JBQWdCLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUU7Y0FDeEYsT0FBTyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNoRTs7WUFFRCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztZQUVsRCxJQUFJLGVBQWUsR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLDhCQUE4QixDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUM1SyxPQUFPQSxhQUFtQixDQUFDLElBQUksRUFBRWYsVUFBUSxDQUFDO2NBQ3hDLEtBQUssRUFBRSxrQkFBa0I7YUFDMUIsRUFBRSxzQkFBc0IsRUFBRTtjQUN6QixXQUFXLEVBQUUsbUJBQW1CO2NBQ2hDLFNBQVMsRUFBRSxlQUFlO2NBQzFCLElBQUksRUFBRSxjQUFjO2NBQ3BCLEdBQUcsRUFBRSxXQUFXLElBQUksc0JBQXNCO2NBQzFDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3RCLENBQUMsRUFBRWUsYUFBbUIsQ0FBQyxLQUFLLEVBQUU7Y0FDN0IsU0FBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLDZCQUE2QixDQUFDO2FBQy9ELEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxHQUFHLElBQUksR0FBR0EsYUFBbUIsQ0FBQyxNQUFNLEVBQUU7Y0FDekQsT0FBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDL0IsS0FBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7ZUFDMUM7Y0FDRCxTQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUM7YUFDOUQsRUFBRSxVQUFVLElBQUlBLGFBQW1CLENBQUMsR0FBRyxFQUFFO2NBQ3hDLFNBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxpQ0FBaUMsQ0FBQzthQUNuRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztXQUNkLENBQUMsQ0FBQztTQUNKOztRQUVELElBQUksbUJBQW1CLEVBQUU7VUFDdkIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDOUM7O1FBRUQsa0JBQWtCLENBQUMsSUFBSSxDQUFDQSxhQUFtQixDQUFDLElBQUksRUFBRTtVQUNoRCxTQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQztVQUNoRixHQUFHLEVBQUUsU0FBUztTQUNmLEVBQUUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFFN0IsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxvQkFBb0IsRUFBRTtVQUNuRCxTQUFTLEdBQUdBLGFBQW1CLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLE9BQU8sRUFBRSxLQUFLLENBQUMsc0JBQXNCO1lBQ3JDLFNBQVMsRUFBRSxJQUFJO1lBQ2YsY0FBYyxFQUFFLG9CQUFvQjtXQUNyQyxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDeEIsTUFBTTtVQUNMLFNBQVMsR0FBR0EsYUFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDakU7T0FDRjs7TUFFRCxPQUFPQSxhQUFtQixDQUFDLEtBQUssRUFBRTtRQUNoQyxTQUFTLEVBQUUsU0FBUztRQUNwQixHQUFHLEVBQUUsS0FBSyxDQUFDLGNBQWM7T0FDMUIsRUFBRSxLQUFLLENBQUMscUJBQXFCLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztLQUM5QyxDQUFDOztJQUVGLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7SUFFeEQsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLE9BQU8sS0FBSyxDQUFDLFlBQVksS0FBSyxVQUFVLEVBQUU7TUFDMUQsSUFBSSxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUU7UUFDakUsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO09BQ2xDLENBQUMsQ0FBQztNQUNILE9BQU8sQ0FBQyxDQUFDLGVBQWUsRUFBRSw4RkFBOEYsQ0FBQyxDQUFDO0tBQzNIOztJQUVELEtBQUssQ0FBQyxLQUFLLEdBQUc7TUFDWixLQUFLLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7TUFDNUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtNQUMzRixJQUFJLEVBQUUsS0FBSyxDQUFDLFdBQVc7TUFDdkIsV0FBVyxFQUFFLFdBQVc7TUFDeEIsYUFBYSxFQUFFLEVBQUU7O01BRWpCLG9CQUFvQixFQUFFLElBQUk7TUFDMUIsTUFBTSxFQUFFLEVBQUU7S0FDWCxDQUFDO0lBQ0YsS0FBSyxDQUFDLFlBQVksR0FBR0YsU0FBTyxDQUFDcEMsd0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDeEUsS0FBSyxDQUFDLGtCQUFrQixHQUFHb0MsU0FBTyxDQUFDcEMsd0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRixLQUFLLENBQUMsY0FBYyxHQUFHb0MsU0FBTyxDQUFDcEMsd0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDNUUsS0FBSyxDQUFDLG9CQUFvQixHQUFHb0MsU0FBTyxDQUFDcEMsd0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RixLQUFLLENBQUMsV0FBVyxHQUFHb0MsU0FBTyxDQUFDcEMsd0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEUsS0FBSyxDQUFDLGdCQUFnQixHQUFHb0MsU0FBTyxDQUFDcEMsd0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDaEYsT0FBTyxLQUFLLENBQUM7R0FDZDs7RUFFRHlDLGNBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQixHQUFHLEVBQUUsbUJBQW1CO0lBQ3hCLEtBQUssRUFBRSxTQUFTLGlCQUFpQixHQUFHOzs7TUFHbEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtRQUMzQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7T0FDZDs7TUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ1osTUFBTSxFQUFFLFlBQVksRUFBRTtPQUN2QixDQUFDLENBQUM7S0FDSjtHQUNGLEVBQUU7SUFDRCxHQUFHLEVBQUUsb0JBQW9CO0lBQ3pCLEtBQUssRUFBRSxTQUFTLGtCQUFrQixHQUFHO01BQ25DLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7UUFFOUMsSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLEtBQUssSUFBSSxVQUFVLEVBQUU7VUFDOUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1VBQzNCLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNqRSxNQUFNLElBQUksU0FBUyxFQUFFO1VBQ3BCLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUM1QjtPQUNGOztNQUVELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4QjtHQUNGLEVBQUU7SUFDRCxHQUFHLEVBQUUsc0JBQXNCO0lBQzNCLEtBQUssRUFBRSxTQUFTLG9CQUFvQixHQUFHO01BQ3JDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztNQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7TUFDckIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7O01BRXpCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBQzFCUyxzQkFBK0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO09BQy9CO0tBQ0Y7R0FDRixFQUFFO0lBQ0QsR0FBRyxFQUFFLE9BQU87SUFDWixLQUFLLEVBQUUsU0FBUyxLQUFLLEdBQUc7TUFDdEIsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztPQUMzQixNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztPQUNoQztLQUNGO0dBQ0YsRUFBRTtJQUNELEdBQUcsRUFBRSxNQUFNO0lBQ1gsS0FBSyxFQUFFLFNBQVMsSUFBSSxHQUFHO01BQ3JCLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7T0FDMUIsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRTtRQUNqQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7T0FDL0I7S0FDRjtHQUNGLEVBQUU7SUFDRCxHQUFHLEVBQUUsYUFBYTtJQUNsQixLQUFLLEVBQUUsU0FBUyxXQUFXLENBQUMsUUFBUSxFQUFFOztNQUVwQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSztVQUN6QixxQkFBcUIsR0FBRyxZQUFZLENBQUMsU0FBUztVQUM5QyxTQUFTLEdBQUcscUJBQXFCLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcscUJBQXFCO1VBQ2hGLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTztVQUM5QixTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVM7VUFDbEMsU0FBUyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7O01BRXZDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDMUIsT0FBTyxJQUFJLENBQUM7T0FDYjs7O01BR0QsSUFBSSxXQUFXLEdBQUcsT0FBTyxHQUFHWixhQUFtQixDQUFDLEdBQUcsRUFBRTtRQUNuRCxTQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUM7T0FDbEQsQ0FBQyxHQUFHQSxhQUFtQixDQUFDLEdBQUcsRUFBRTtRQUM1QixTQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDO09BQy9DLENBQUMsQ0FBQztNQUNILE9BQU9BLGFBQW1CLENBQUMsTUFBTSxFQUFFZixVQUFRLENBQUM7UUFDMUMsR0FBRyxFQUFFLE9BQU87UUFDWixTQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO1FBQ3pDLEtBQUssRUFBRSxrQkFBa0I7T0FDMUIsRUFBRSxzQkFBc0IsRUFBRTtRQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVk7T0FDM0IsQ0FBQyxFQUFFLFNBQVMsSUFBSSxXQUFXLENBQUMsQ0FBQztLQUMvQjtHQUNGLEVBQUU7SUFDRCxHQUFHLEVBQUUsYUFBYTtJQUNsQixLQUFLLEVBQUUsU0FBUyxXQUFXLEdBQUc7TUFDNUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUs7VUFDekIsU0FBUyxHQUFHLFlBQVksQ0FBQyxTQUFTO1VBQ2xDLFVBQVUsR0FBRyxZQUFZLENBQUMsVUFBVTtVQUNwQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztNQUN2QyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztNQUN2QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztNQUM3QixJQUFJLEtBQUssR0FBR2UsYUFBbUIsQ0FBQyxNQUFNLEVBQUVmLFVBQVEsQ0FBQztRQUMvQyxHQUFHLEVBQUUsT0FBTztRQUNaLFNBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQztRQUNwRCxXQUFXLEVBQUUsbUJBQW1CO1FBQ2hDLEtBQUssRUFBRSxrQkFBa0I7T0FDMUIsRUFBRSxzQkFBc0IsRUFBRTtRQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtPQUMvQixDQUFDLEVBQUUsU0FBUyxJQUFJZSxhQUFtQixDQUFDLEdBQUcsRUFBRTtRQUN4QyxTQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLENBQUM7T0FDMUQsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDOztNQUVaLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDZixPQUFPLElBQUksQ0FBQztPQUNiOztNQUVELElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMxQixJQUFJLFVBQVUsRUFBRTtVQUNkLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1FBRUQsT0FBTyxJQUFJLENBQUM7T0FDYjs7TUFFRCxJQUFJLFVBQVUsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzlCLE9BQU8sS0FBSyxDQUFDO09BQ2Q7O01BRUQsT0FBTyxJQUFJLENBQUM7S0FDYjtHQUNGLEVBQUU7SUFDRCxHQUFHLEVBQUUsUUFBUTtJQUNiLEtBQUssRUFBRSxTQUFTLE1BQU0sR0FBRztNQUN2QixJQUFJLFFBQVEsQ0FBQzs7TUFFYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO01BQ3ZCLElBQUksUUFBUSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDOztNQUV2QyxJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxTQUFTO1VBQ2xDLFNBQVMsR0FBRyxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7TUFDdEUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztNQUN2QixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUztVQUMzQixRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVE7VUFDekIsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTO1VBQzNCLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO01BQzVCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO01BQzNDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLO1VBQ3pCLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSTtVQUN4QixNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQzs7TUFFakMsSUFBSSxJQUFJLEVBQUU7UUFDUixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO09BQ3ZDOztNQUVELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO01BQ3ZDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7TUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7TUFDbEMsSUFBSSx3QkFBd0IsR0FBRyxFQUFFLENBQUM7TUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEVBQUU7UUFDeEMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE9BQU8sSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxPQUFPLElBQUksR0FBRyxLQUFLLE1BQU0sQ0FBQyxFQUFFO1VBQ3hJLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QztPQUNGLENBQUMsQ0FBQzs7Ozs7Ozs7O01BU0gsSUFBSSxtQkFBbUIsR0FBR2YsVUFBUSxDQUFDLEVBQUUsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDOztNQUVqRSxJQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdEMsbUJBQW1CLEdBQUdBLFVBQVEsQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLEVBQUU7VUFDdEQsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1VBQ3pCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRO1NBQy9DLENBQUMsQ0FBQztPQUNKOztNQUVELElBQUksT0FBTyxJQUFJLFFBQVEsR0FBRyxFQUFFLEVBQUVzQixpQkFBZSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFQSxpQkFBZSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUVBLGlCQUFlLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFQSxpQkFBZSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRUEsaUJBQWUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUVBLGlCQUFlLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFQSxpQkFBZSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFQSxpQkFBZSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFQSxpQkFBZSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFQSxpQkFBZSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7TUFDbHVCLE9BQU9QLGFBQW1CLENBQUMsYUFBYSxFQUFFO1FBQ3hDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtRQUMvQixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO1FBQ3JDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVk7UUFDckMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1FBQ2xDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7UUFDMUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLHdCQUF3QjtRQUN4RCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsd0JBQXdCO1FBQ3hELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7UUFDMUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1FBQ3BDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztRQUMxQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDMUIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1FBQ2xDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtRQUN4QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7UUFDNUIsT0FBTyxFQUFFLE9BQU87UUFDaEIsS0FBSyxFQUFFLEtBQUs7UUFDWixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixPQUFPLEVBQUUsUUFBUTtRQUNqQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7UUFDNUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1FBQ2xCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtRQUNsQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1FBQ3hDLHVCQUF1QixFQUFFLElBQUksQ0FBQyx1QkFBdUI7UUFDckQsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtRQUMxQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7UUFDL0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1FBQ25DLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtRQUNsQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7UUFDNUIsR0FBRyxFQUFFLElBQUksQ0FBQyxvQkFBb0I7UUFDOUIsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtRQUNoRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7UUFDcEMsTUFBTSxFQUFFLE1BQU07T0FDZixFQUFFQSxhQUFtQixDQUFDLEtBQUssRUFBRTtRQUM1QixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7UUFDbEIsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXO1FBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVztRQUN4QixPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVk7UUFDMUIsU0FBUyxFQUFFTSxZQUFVLENBQUMsT0FBTyxDQUFDO1FBQzlCLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYTtRQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWM7UUFDOUIsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjO09BQ2hDLEVBQUVOLGFBQW1CLENBQUMsS0FBSyxFQUFFZixVQUFRLENBQUM7UUFDckMsR0FBRyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7UUFDMUIsR0FBRyxFQUFFLFdBQVc7UUFDaEIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLDBCQUEwQixDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDdEksSUFBSSxFQUFFLFVBQVU7UUFDaEIsbUJBQW1CLEVBQUUsTUFBTTtRQUMzQixlQUFlLEVBQUUsTUFBTTtRQUN2QixlQUFlLEVBQUUsTUFBTTtRQUN2QixlQUFlLEVBQUUsUUFBUTtPQUMxQixFQUFFLG1CQUFtQixDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN4RjtHQUNGLENBQUMsQ0FBQyxDQUFDOztFQUVKLE9BQU8sTUFBTSxDQUFDO0NBQ2YsQ0FBQ2dCLFNBQWUsQ0FBQyxDQUFDOztBQUVuQixNQUFNLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztBQUNuQyxNQUFNLENBQUMsWUFBWSxHQUFHO0VBQ3BCLFNBQVMsRUFBRSxXQUFXO0VBQ3RCLFdBQVcsRUFBRSxLQUFLO0VBQ2xCLFlBQVksRUFBRSxLQUFLO0VBQ25CLHdCQUF3QixFQUFFLElBQUk7RUFDOUIsVUFBVSxFQUFFLElBQUk7RUFDaEIsVUFBVSxFQUFFLEtBQUs7RUFDakIsV0FBVyxFQUFFLEVBQUU7RUFDZixRQUFRLEVBQUVPLE1BQUk7RUFDZCxPQUFPLEVBQUVBLE1BQUk7RUFDYixNQUFNLEVBQUVBLE1BQUk7RUFDWixRQUFRLEVBQUVBLE1BQUk7RUFDZCxRQUFRLEVBQUVBLE1BQUk7RUFDZCxVQUFVLEVBQUVBLE1BQUk7RUFDaEIsY0FBYyxFQUFFQSxNQUFJO0VBQ3BCLHdCQUF3QixFQUFFLElBQUk7RUFDOUIsYUFBYSxFQUFFLEVBQUU7RUFDakIsaUJBQWlCLEVBQUUsRUFBRTtFQUNyQixnQkFBZ0IsRUFBRSxPQUFPO0VBQ3pCLGVBQWUsRUFBRSxPQUFPO0VBQ3hCLGVBQWUsRUFBRSxXQUFXO0VBQzVCLFFBQVEsRUFBRSxLQUFLO0VBQ2YsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDO0VBQ3JCLGVBQWUsRUFBRSxFQUFFO0VBQ25CLG9CQUFvQixFQUFFLElBQUk7RUFDMUIsUUFBUSxFQUFFLENBQUM7RUFDWCxjQUFjLEVBQUUsU0FBUyxjQUFjLENBQUMsSUFBSSxFQUFFO0lBQzVDLE9BQU8sSUFBSSxDQUFDO0dBQ2I7Q0FDRixDQUFDOztBQUVGLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxVQUFVLFNBQVMsRUFBRSxTQUFTLEVBQUU7RUFDaEUsSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztFQUNoSSxJQUFJLFFBQVEsR0FBRztJQUNiLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLG9CQUFvQixFQUFFLEtBQUs7R0FDNUIsQ0FBQzs7RUFFRixJQUFJLE1BQU0sSUFBSSxTQUFTLEVBQUU7SUFDdkIsUUFBUSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0dBQ2hDOztFQUVELElBQUksT0FBTyxJQUFJLFNBQVMsRUFBRTtJQUN4QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O0lBRXZCLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtNQUN0QixRQUFRLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDL0U7R0FDRjs7RUFFRCxPQUFPLFFBQVEsQ0FBQztDQUNqQixDQUFDOztBQUVGLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxVQUFVLFFBQVEsRUFBRTtFQUNsRCxJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7RUFDckZDLFFBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQVUsS0FBSyxFQUFFO0lBQ2hELElBQUksQ0FBQyxLQUFLLEVBQUU7TUFDVixPQUFPO0tBQ1I7O0lBRUQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzs7SUFFdEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7TUFDekIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzlELE1BQU07TUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JCO0dBQ0YsQ0FBQyxDQUFDO0VBQ0gsT0FBTyxPQUFPLENBQUM7Q0FDaEIsQ0FBQzs7QUFFRixNQUFNLENBQUMsd0JBQXdCLEdBQUcsVUFBVSxLQUFLLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRTtFQUMvRSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7O0VBRWYsSUFBSSxPQUFPLElBQUksS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFO0lBQ3hDLEtBQUssR0FBR1osU0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUM5Qjs7RUFFRCxJQUFJLGNBQWMsSUFBSSxLQUFLLElBQUksZUFBZSxFQUFFO0lBQzlDLEtBQUssR0FBR0EsU0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztHQUNyQzs7RUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7SUFDaEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUNsQixNQUFNO0lBQ0wsT0FBTyxFQUFFLENBQUM7R0FDWDs7RUFFRCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7O0VBRWxCLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTtJQUN0QixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztHQUNyQixNQUFNLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0lBQ3hDLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0dBQzdDOztFQUVELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtJQUN2QixLQUFLLEdBQUcsRUFBRSxDQUFDO0dBQ1o7O0VBRUQsT0FBTyxLQUFLLENBQUM7Q0FDZCxDQUFDOztBQUVGLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLEtBQUssRUFBRSxNQUFNLEVBQUU7RUFDbkQsT0FBTyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztDQUNwRCxDQUFDOztBQUVGLE1BQU0sQ0FBQyx1QkFBdUIsR0FBRyxVQUFVLEtBQUssRUFBRSxRQUFRLEVBQUU7RUFDMUQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztFQUM1RCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7RUFDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE1BQU0sRUFBRTtJQUNoQyxJQUFJLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxXQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUc7TUFDcEMsTUFBTSxFQUFFLE1BQU07TUFDZCxLQUFLLEVBQUUsV0FBVztNQUNsQixLQUFLLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7TUFDL0MsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSztNQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO0tBQ2hDLENBQUM7R0FDSCxDQUFDLENBQUM7O0VBRUgsSUFBSSxRQUFRLEVBQUU7O0lBRVosSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztJQUMxQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDOztJQUUzQixJQUFJLEtBQUssRUFBRTtNQUNULEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDekIsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUV2QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7VUFDMUQsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QztPQUNGLENBQUMsQ0FBQztLQUNKO0dBQ0Y7O0VBRUQsT0FBTyxXQUFXLENBQUM7Q0FDcEIsQ0FBQzs7QUFFRixNQUFNLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxLQUFLLEVBQUUsZUFBZSxFQUFFO0VBQzNELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQzs7RUFFZixJQUFJLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxlQUFlLEVBQUU7SUFDeEMsS0FBSyxHQUFHQSxTQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQzlCOztFQUVELElBQUksY0FBYyxJQUFJLEtBQUssSUFBSSxlQUFlLEVBQUU7SUFDOUMsS0FBSyxHQUFHQSxTQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0dBQ3JDOztFQUVELElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTtJQUN0QixLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtNQUM3QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FDZCxDQUFDLENBQUM7R0FDSjs7RUFFRCxPQUFPLEtBQUssQ0FBQztDQUNkLENBQUM7O0FBRUYsTUFBTSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQy9wRGpCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3ZCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOzs7QUNMM0I7QUFFQSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7RUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7O0FBRTVCLElBQUksS0FBSyxHQUFHLHVCQUF1QixDQUFDZ0IsY0FBZ0IsQ0FBQyxDQUFDOztBQUV0RCxJQUFJLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQ0Msa0JBQXFCLENBQUMsQ0FBQzs7QUFFL0QsSUFBSSxTQUFTLEdBQUcsdUJBQXVCLENBQUNDLE1BQW9CLENBQUMsQ0FBQzs7QUFFOUQsSUFBSSxXQUFXLEdBQUcsc0JBQXNCLENBQUNDLFlBQXFCLENBQUMsQ0FBQzs7OztBQUloRSxJQUFJLEtBQUssR0FBRyxzQkFBc0IsQ0FBQ0MsWUFBa0IsQ0FBQyxDQUFDOztBQUV2RCxJQUFJLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQ0MsVUFBMkIsQ0FBQyxDQUFDOztBQUVuRSxJQUFJLEtBQUssR0FBRyxzQkFBc0IsQ0FBQ0MsVUFBa0IsQ0FBQyxDQUFDOzs7O0FBSXZELFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTs7QUFFakcsU0FBUyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUU7O0FBRTNkLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUUsRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFOztBQUUvVixTQUFTLFFBQVEsR0FBRyxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUU7O0FBRTdULFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTs7QUFFak4sU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsRUFBRSxFQUFFOztBQUV6SixTQUFTLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUks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
