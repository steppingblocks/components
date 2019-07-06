import { _ as _slicedToArray, a as _objectSpread, b as _taggedTemplateLiteral } from '../../../chunk-039ee305.js';
import React__default, { Component, cloneElement, createElement, Children, useState } from 'react';
import PropTypes__default, { oneOfType, string, number, bool, any, func, object, node, arrayOf, shape } from 'prop-types';
import { c as createCommonjsModule, u as unwrapExports } from '../../../chunk-5732a1e2.js';
import styled from '@xstyled/styled-components';
import { withTheme } from '../../../withTheme/index.js';
import { d as require$$2$1, w as warning, _ as _configProvider } from '../../../chunk-218dc193.js';
import { k as _inherits$5, j as _classCallCheck$5, l as _possibleConstructorReturn$5, g as _extends$3, m as _objectWithoutProperties } from '../../../chunk-55a8f221.js';
import ReactDOM__default, { findDOMNode, unmountComponentAtNode } from 'react-dom';
import { s as scrollIntoView } from '../../../chunk-d79569b3.js';
import '../../../chunk-bbc6af60.js';
import { a as get } from '../../../chunk-e008480f.js';
import { b as require$$3$1, a as require$$6, r as require$$4 } from '../../../chunk-99207a3b.js';
import { A as Animate, c as classes } from '../../../chunk-c27c29c8.js';
import '../../../chunk-f27d627d.js';
import { _ as _type } from '../../../chunk-e9a642ec.js';
import { _ as _reactLifecyclesCompat, p as polyfill } from '../../../chunk-ee2530d1.js';
import { a as raf } from '../../../chunk-c35b7916.js';
import { _ as _fp } from '../../../chunk-8aa82724.js';
import { r as require$$3 } from '../../../chunk-cc423a95.js';
import { K as KeyCode } from '../../../chunk-c76ef287.js';
import { r as require$$1$1 } from '../../../chunk-c30b8a6e.js';
import '../../../chunk-03805be5.js';
import { T as Trigger } from '../../../chunk-69ee6dc4.js';

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
      key = _ref2[0],
      obj = _ref2[1];

  return _objectSpread({}, obj, {
    key: key
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

  var onChange = function onChange(key) {
    props.onSelect(_objectSpread({}, get(props, "fields.".concat(key)), {
      key: key
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
      key: get(field, 'key'),
      value: get(field, 'key')
    }, get(field, 'label'));
  }));
});
CreateFilterButton.propTypes = {
  onSelect: PropTypes__default.func.isRequired
};
CreateFilterButton.displayName = CreateFilterButton;

export default CreateFilterButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvT3B0R3JvdXAuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL09wdGlvbi5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvUHJvcFR5cGVzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktc3RvcmUvbGliL1Byb3BUeXBlcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLXN0b3JlL2xpYi9Qcm92aWRlci5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLXN0b3JlL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLXN0b3JlL2xpYi9jb25uZWN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktc3RvcmUvbGliL2NyZWF0ZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLXN0b3JlL2xpYi9pbmRleC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL3V0aWwuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9wbGFjZW1lbnRzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvU3ViTWVudS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy1tZW51L2VzL0RPTVdyYXAuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9TdWJQb3B1cE1lbnUuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9NZW51LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvTWVudUl0ZW0uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtbWVudS9lcy9NZW51SXRlbUdyb3VwLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JjLW1lbnUvZXMvRGl2aWRlci5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL3V0aWwuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL0Ryb3Bkb3duTWVudS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvU2VsZWN0VHJpZ2dlci5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvU2VsZWN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9zZWxlY3QvaW5kZXguanMiLCIuLi8uLi8uLi8uLi9zcmMvQWR2YW5jZWRGaWx0ZXJzL2NvbXBvbmVudHMvQ3JlYXRlRmlsdGVyQnV0dG9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxudmFyIE9wdEdyb3VwID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhPcHRHcm91cCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gT3B0R3JvdXAoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9wdEdyb3VwKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoT3B0R3JvdXApLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIE9wdEdyb3VwO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgeyBPcHRHcm91cCBhcyBkZWZhdWx0IH07XG5PcHRHcm91cC5pc1NlbGVjdE9wdEdyb3VwID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBPcHRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE9wdGlvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gT3B0aW9uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPcHRpb24pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihPcHRpb24pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIE9wdGlvbjtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgT3B0aW9uIGFzIGRlZmF1bHQgfTtcbk9wdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbn07XG5PcHRpb24uaXNTZWxlY3RPcHRpb24gPSB0cnVlOyIsImZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XG5cbmltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZnVuY3Rpb24gcHJvcHNWYWx1ZVR5cGUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgcHJvcHMgPSBhcmdzWzBdLFxuICAgICAgcHJvcE5hbWUgPSBhcmdzWzFdLFxuICAgICAgY29tcG9uZW50TmFtZSA9IGFyZ3NbMl0sXG4gICAgICByZXN0ID0gYXJncy5zbGljZSgzKTtcbiAgdmFyIGJhc2ljVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKTtcbiAgdmFyIGxhYmVsSW5WYWx1ZVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBrZXk6IGJhc2ljVHlwZS5pc1JlcXVpcmVkLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZVxuICB9KTtcblxuICBpZiAocHJvcHMubGFiZWxJblZhbHVlKSB7XG4gICAgdmFyIHZhbGlkYXRlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YobGFiZWxJblZhbHVlU2hhcGUpLCBsYWJlbEluVmFsdWVTaGFwZV0pO1xuICAgIHZhciBlcnJvciA9IHZhbGlkYXRlLmFwcGx5KHZvaWQgMCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShyZXN0KSkpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIi5jb25jYXQocHJvcE5hbWUsIFwiYCBzdXBwbGllZCB0byBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAsIFwiKSArIFwid2hlbiB5b3Ugc2V0IGBsYWJlbEluVmFsdWVgIHRvIGB0cnVlYCwgYFwiLmNvbmNhdChwcm9wTmFtZSwgXCJgIHNob3VsZCBpbiBcIikgKyBcInNoYXBlIG9mIGB7IGtleTogc3RyaW5nIHwgbnVtYmVyLCBsYWJlbD86IFJlYWN0Tm9kZSB9YC5cIik7XG4gICAgfVxuICB9IGVsc2UgaWYgKChwcm9wcy5tb2RlID09PSAnbXVsdGlwbGUnIHx8IHByb3BzLm1vZGUgPT09ICd0YWdzJyB8fCBwcm9wcy5tdWx0aXBsZSB8fCBwcm9wcy50YWdzKSAmJiBwcm9wc1twcm9wTmFtZV0gPT09ICcnKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgcHJvcCBgXCIuY29uY2F0KHByb3BOYW1lLCBcImAgb2YgdHlwZSBgc3RyaW5nYCBzdXBwbGllZCB0byBgXCIpLmNvbmNhdChjb21wb25lbnROYW1lLCBcImAsIFwiKSArIFwiZXhwZWN0ZWQgYGFycmF5YCB3aGVuIGBtdWx0aXBsZWAgb3IgYHRhZ3NgIGlzIGB0cnVlYC5cIik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF92YWxpZGF0ZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKGJhc2ljVHlwZSksIGJhc2ljVHlwZV0pO1xuXG4gICAgcmV0dXJuIF92YWxpZGF0ZS5hcHBseSh2b2lkIDAsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWVdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkocmVzdCkpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgU2VsZWN0UHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICBmaWx0ZXJPcHRpb246IFByb3BUeXBlcy5hbnksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBzaG93U2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBhbGxvd0NsZWFyOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0Fycm93OiBQcm9wVHlwZXMuYm9vbCxcbiAgdGFnczogUHJvcFR5cGVzLmJvb2wsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3B0aW9uTGFiZWxQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcHRpb25GaWx0ZXJQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbmltYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNob2ljZVRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VhcmNoOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Qb3B1cFNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSW5wdXRLZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5hbnksXG4gIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBsYWJlbEluVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFsdWU6IHByb3BzVmFsdWVUeXBlLFxuICBkZWZhdWx0VmFsdWU6IHByb3BzVmFsdWVUeXBlLFxuICBkcm9wZG93blN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBtYXhUYWdUZXh0TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhUYWdDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWF4VGFnUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuICB0b2tlblNlcGFyYXRvcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBnZXRJbnB1dEVsZW1lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBzaG93QWN0aW9uOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgY2xlYXJJY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgaW5wdXRJY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgcmVtb3ZlSWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG1lbnVJdGVtU2VsZWN0ZWRJY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgZHJvcGRvd25SZW5kZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuZXhwb3J0IGRlZmF1bHQgU2VsZWN0UHJvcFR5cGVzOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc3RvcmVTaGFwZSA9IHVuZGVmaW5lZDtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdG9yZVNoYXBlID0gZXhwb3J0cy5zdG9yZVNoYXBlID0gX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gIHN1YnNjcmliZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldFN0YXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0U3RhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkXG59KTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQcm92aWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUHJvdmlkZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb3ZpZGVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHJvdmlkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQcm92aWRlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFByb3ZpZGVyLCBbe1xuICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1pbmlTdG9yZTogdGhpcy5wcm9wcy5zdG9yZVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByb3ZpZGVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICBzdG9yZTogX1Byb3BUeXBlcy5zdG9yZVNoYXBlLmlzUmVxdWlyZWRcbn07XG5Qcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgbWluaVN0b3JlOiBfUHJvcFR5cGVzLnN0b3JlU2hhcGUuaXNSZXF1aXJlZFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFByb3ZpZGVyOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gICAgY29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBjYWxsZWU6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZiAmJiBnZXRQcm90b3R5cGVPZihPYmplY3QpO1xuXG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG5cbiAgICAgICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmICghUkVBQ1RfU1RBVElDU1trZXldICYmICFLTk9XTl9TVEFUSUNTW2tleV0gJiYgKCFibGFja2xpc3QgfHwgIWJsYWNrbGlzdFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgICAgICAgICB0cnkgeyAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjb25uZWN0O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfc2hhbGxvd2VxdWFsID0gcmVxdWlyZSgnc2hhbGxvd2VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd2VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dlcXVhbCk7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MgPSByZXF1aXJlKCdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycpO1xuXG52YXIgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hvaXN0Tm9uUmVhY3RTdGF0aWNzKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKCdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCcpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICByZXR1cm4gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG59XG5cbmZ1bmN0aW9uIGlzU3RhdGVsZXNzKENvbXBvbmVudCkge1xuICByZXR1cm4gIUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyO1xufVxuXG52YXIgZGVmYXVsdE1hcFN0YXRlVG9Qcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHMoKSB7XG4gIHJldHVybiB7fTtcbn07XG5cbmZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSB7XG4gIHZhciBzaG91bGRTdWJzY3JpYmUgPSAhIW1hcFN0YXRlVG9Qcm9wcztcbiAgdmFyIGZpbm5hbE1hcFN0YXRlVG9Qcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyB8fCBkZWZhdWx0TWFwU3RhdGVUb1Byb3BzO1xuXG4gIHJldHVybiBmdW5jdGlvbiB3cmFwV2l0aENvbm5lY3QoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHZhciBDb25uZWN0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhDb25uZWN0LCBfQ29tcG9uZW50KTtcblxuICAgICAgX2NyZWF0ZUNsYXNzKENvbm5lY3QsIG51bGwsIFt7XG4gICAgICAgIGtleTogJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICAgIC8vIHVzaW5nIG93blByb3BzXG4gICAgICAgICAgaWYgKG1hcFN0YXRlVG9Qcm9wcyAmJiBtYXBTdGF0ZVRvUHJvcHMubGVuZ3RoID09PSAyICYmIHByb3BzICE9PSBwcmV2U3RhdGUucHJvcHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHN1YnNjcmliZWQ6IGZpbm5hbE1hcFN0YXRlVG9Qcm9wcyhwcmV2U3RhdGUuc3RvcmUuZ2V0U3RhdGUoKSwgcHJvcHMpLFxuICAgICAgICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IHByb3BzOiBwcm9wcyB9O1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIGZ1bmN0aW9uIENvbm5lY3QocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbm5lY3QpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb25uZWN0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29ubmVjdCkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFfdGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbmV4dFN0YXRlID0gZmlubmFsTWFwU3RhdGVUb1Byb3BzKF90aGlzLnN0b3JlLmdldFN0YXRlKCksIF90aGlzLnByb3BzKTtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHN1YnNjcmliZWQ6IG5leHRTdGF0ZSB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5zdG9yZSA9IGNvbnRleHQubWluaVN0b3JlO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBzdWJzY3JpYmVkOiBmaW5uYWxNYXBTdGF0ZVRvUHJvcHMoX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKSwgcHJvcHMpLFxuICAgICAgICAgIHN0b3JlOiBfdGhpcy5zdG9yZSxcbiAgICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoQ29ubmVjdCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgdGhpcy50cnlTdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICB0aGlzLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICAgIHJldHVybiAhKDAsIF9zaGFsbG93ZXF1YWwyLmRlZmF1bHQpKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgISgwLCBfc2hhbGxvd2VxdWFsMi5kZWZhdWx0KSh0aGlzLnN0YXRlLnN1YnNjcmliZWQsIG5leHRTdGF0ZS5zdWJzY3JpYmVkKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICd0cnlTdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdHJ5U3Vic2NyaWJlKCkge1xuICAgICAgICAgIGlmIChzaG91bGRTdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLnN0b3JlLnN1YnNjcmliZSh0aGlzLmhhbmRsZUNoYW5nZSk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICd0cnlVbnN1YnNjcmliZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICAgICAgICBpZiAodGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFdyYXBwZWRJbnN0YW5jZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRXcmFwcGVkSW5zdGFuY2UoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMud3JhcHBlZEluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZS5zdWJzY3JpYmVkLCB7XG4gICAgICAgICAgICBzdG9yZTogdGhpcy5zdG9yZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFpc1N0YXRlbGVzcyhXcmFwcGVkQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIud3JhcHBlZEluc3RhbmNlID0gYztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gQ29ubmVjdDtcbiAgICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9ICdDb25uZWN0KCcgKyBnZXREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KSArICcpJztcbiAgICBDb25uZWN0LmNvbnRleHRUeXBlcyA9IHtcbiAgICAgIG1pbmlTdG9yZTogX1Byb3BUeXBlcy5zdG9yZVNoYXBlLmlzUmVxdWlyZWRcbiAgICB9O1xuXG5cbiAgICAoMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoQ29ubmVjdCk7XG5cbiAgICByZXR1cm4gKDAsIF9ob2lzdE5vblJlYWN0U3RhdGljczIuZGVmYXVsdCkoQ29ubmVjdCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZTtcbmZ1bmN0aW9uIGNyZWF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICB2YXIgbGlzdGVuZXJzID0gW107XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUocGFydGlhbCkge1xuICAgIHN0YXRlID0gX2V4dGVuZHMoe30sIHN0YXRlLCBwYXJ0aWFsKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZVxuICB9O1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlID0gZXhwb3J0cy5jb25uZWN0ID0gZXhwb3J0cy5Qcm92aWRlciA9IHVuZGVmaW5lZDtcblxudmFyIF9Qcm92aWRlcjIgPSByZXF1aXJlKCcuL1Byb3ZpZGVyJyk7XG5cbnZhciBfUHJvdmlkZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvdmlkZXIyKTtcblxudmFyIF9jb25uZWN0MiA9IHJlcXVpcmUoJy4vY29ubmVjdCcpO1xuXG52YXIgX2Nvbm5lY3QzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29ubmVjdDIpO1xuXG52YXIgX2NyZWF0ZTIgPSByZXF1aXJlKCcuL2NyZWF0ZScpO1xuXG52YXIgX2NyZWF0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5Qcm92aWRlciA9IF9Qcm92aWRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuY29ubmVjdCA9IF9jb25uZWN0My5kZWZhdWx0O1xuZXhwb3J0cy5jcmVhdGUgPSBfY3JlYXRlMy5kZWZhdWx0OyIsIi8qKlxuICogU2FmZSBjaGFpbmVkIGZ1bmN0aW9uXG4gKlxuICogV2lsbCBvbmx5IGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBpZiBuZWVkZWQsXG4gKiBvdGhlcndpc2Ugd2lsbCBwYXNzIGJhY2sgZXhpc3RpbmcgZnVuY3Rpb25zIG9yIG51bGwuXG4gKlxuICogQHJldHVybnMge2Z1bmN0aW9ufG51bGx9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbigpIHtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBhcmdzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcmdzW2ldICYmIGFyZ3NbaV0uYXBwbHkpIHtcbiAgICAgICAgYXJnc1tpXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIGlzTW9iaWxlID0gcmVxdWlyZSgnaXNtb2JpbGVqcycpO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlGcm9tQ2hpbGRyZW5JbmRleChjaGlsZCwgbWVudUV2ZW50S2V5LCBpbmRleCkge1xuICB2YXIgcHJlZml4ID0gbWVudUV2ZW50S2V5IHx8ICcnO1xuICByZXR1cm4gY2hpbGQua2V5IHx8IHByZWZpeCArICdpdGVtXycgKyBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVJZEZyb21TdWJNZW51RXZlbnRLZXkoZXZlbnRLZXkpIHtcbiAgcmV0dXJuIGV2ZW50S2V5ICsgJy1tZW51LSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29wTWVudUl0ZW0oY2hpbGRyZW4sIGNiKSB7XG4gIHZhciBpbmRleCA9IC0xO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIGluZGV4Kys7XG4gICAgaWYgKGMgJiYgYy50eXBlICYmIGMudHlwZS5pc01lbnVJdGVtR3JvdXApIHtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goYy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGMyKSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIGNiKGMyLCBpbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2IoYywgaW5kZXgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29wTWVudUl0ZW1SZWN1cnNpdmVseShjaGlsZHJlbiwga2V5cywgcmV0KSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNoaWxkcmVuIHx8IHJldC5maW5kKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgaWYgKGMpIHtcbiAgICAgIHZhciBjb25zdHJ1Y3QgPSBjLnR5cGU7XG4gICAgICBpZiAoIWNvbnN0cnVjdCB8fCAhKGNvbnN0cnVjdC5pc1N1Yk1lbnUgfHwgY29uc3RydWN0LmlzTWVudUl0ZW0gfHwgY29uc3RydWN0LmlzTWVudUl0ZW1Hcm91cCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleXMuaW5kZXhPZihjLmtleSkgIT09IC0xKSB7XG4gICAgICAgIHJldC5maW5kID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoYy5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgICBsb29wTWVudUl0ZW1SZWN1cnNpdmVseShjLnByb3BzLmNoaWxkcmVuLCBrZXlzLCByZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB2YXIgbWVudUFsbFByb3BzID0gWydkZWZhdWx0U2VsZWN0ZWRLZXlzJywgJ3NlbGVjdGVkS2V5cycsICdkZWZhdWx0T3BlbktleXMnLCAnb3BlbktleXMnLCAnbW9kZScsICdnZXRQb3B1cENvbnRhaW5lcicsICdvblNlbGVjdCcsICdvbkRlc2VsZWN0JywgJ29uRGVzdHJveScsICdvcGVuVHJhbnNpdGlvbk5hbWUnLCAnb3BlbkFuaW1hdGlvbicsICdzdWJNZW51T3BlbkRlbGF5JywgJ3N1Yk1lbnVDbG9zZURlbGF5JywgJ2ZvcmNlU3ViTWVudVJlbmRlcicsICd0cmlnZ2VyU3ViTWVudUFjdGlvbicsICdsZXZlbCcsICdzZWxlY3RhYmxlJywgJ211bHRpcGxlJywgJ29uT3BlbkNoYW5nZScsICd2aXNpYmxlJywgJ2ZvY3VzYWJsZScsICdkZWZhdWx0QWN0aXZlRmlyc3QnLCAncHJlZml4Q2xzJywgJ2lubGluZUluZGVudCcsICdwYXJlbnRNZW51JywgJ3RpdGxlJywgJ3Jvb3RQcmVmaXhDbHMnLCAnZXZlbnRLZXknLCAnYWN0aXZlJywgJ29uSXRlbUhvdmVyJywgJ29uVGl0bGVNb3VzZUVudGVyJywgJ29uVGl0bGVNb3VzZUxlYXZlJywgJ29uVGl0bGVDbGljaycsICdwb3B1cEFsaWduJywgJ3BvcHVwT2Zmc2V0JywgJ2lzT3BlbicsICdyZW5kZXJNZW51SXRlbScsICdtYW51YWxSZWYnLCAnc3ViTWVudUtleScsICdkaXNhYmxlZCcsICdpbmRleCcsICdpc1NlbGVjdGVkJywgJ3N0b3JlJywgJ2FjdGl2ZUtleScsICdidWlsdGluUGxhY2VtZW50cycsICdvdmVyZmxvd2VkSW5kaWNhdG9yJyxcblxuLy8gdGhlIGZvbGxvd2luZyBrZXlzIGZvdW5kIG5lZWQgdG8gYmUgcmVtb3ZlZCBmcm9tIHRlc3QgcmVncmVzc2lvblxuJ2F0dHJpYnV0ZScsICd2YWx1ZScsICdwb3B1cENsYXNzTmFtZScsICdpbmxpbmVDb2xsYXBzZWQnLCAnbWVudScsICd0aGVtZScsICdpdGVtSWNvbicsICdleHBhbmRJY29uJ107XG5cbi8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTQwMDdcbi8vIHJlZjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MzYwODg5XG4vLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgcmV0dXJuIHRoZSBmdWxsIHByZWNpc2lvbiB2YWx1ZSwgd2hpY2ggaXNcbi8vIG5vdCB0aGUgc2FtZSBiZWhhdmlvciBhcyBvbiBjaHJvbWUuIFNldCB0aGUgcHJlY2lzaW9uIHRvIDYgdG9cbi8vIHVuaWZ5IHRoZWlyIGJlaGF2aW9yXG5leHBvcnQgdmFyIGdldFdpZHRoID0gZnVuY3Rpb24gZ2V0V2lkdGgoZWxlbSkge1xuICB2YXIgd2lkdGggPSBlbGVtICYmIHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyAmJiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICBpZiAod2lkdGgpIHtcbiAgICB3aWR0aCA9ICt3aWR0aC50b0ZpeGVkKDYpO1xuICB9XG4gIHJldHVybiB3aWR0aCB8fCAwO1xufTtcblxuZXhwb3J0IHZhciBzZXRTdHlsZSA9IGZ1bmN0aW9uIHNldFN0eWxlKGVsZW0sIHN0eWxlUHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChlbGVtICYmIHR5cGVvZiBlbGVtLnN0eWxlID09PSAnb2JqZWN0Jykge1xuICAgIGVsZW0uc3R5bGVbc3R5bGVQcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgfVxufTtcblxuZXhwb3J0IHZhciBpc01vYmlsZURldmljZSA9IGZ1bmN0aW9uIGlzTW9iaWxlRGV2aWNlKCkge1xuICByZXR1cm4gaXNNb2JpbGUuYW55O1xufTsiLCJ2YXIgYXV0b0FkanVzdE92ZXJmbG93ID0ge1xuICBhZGp1c3RYOiAxLFxuICBhZGp1c3RZOiAxXG59O1xuXG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSB7XG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC03XVxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA3XVxuICB9LFxuICBsZWZ0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF1cbiAgfSxcbiAgcmlnaHRUb3A6IHtcbiAgICBwb2ludHM6IFsndGwnLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYWNlbWVudHM7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAncmMtdHJpZ2dlcic7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICdyYy11dGlsL2VzL0tleUNvZGUnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnbWluaS1zdG9yZSc7XG5pbXBvcnQgU3ViUG9wdXBNZW51IGZyb20gJy4vU3ViUG9wdXBNZW51JztcbmltcG9ydCBwbGFjZW1lbnRzIGZyb20gJy4vcGxhY2VtZW50cyc7XG5pbXBvcnQgQW5pbWF0ZSBmcm9tICdyYy1hbmltYXRlJztcbmltcG9ydCB7IG5vb3AsIGxvb3BNZW51SXRlbVJlY3Vyc2l2ZWx5LCBnZXRNZW51SWRGcm9tU3ViTWVudUV2ZW50S2V5LCBtZW51QWxsUHJvcHMgfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgZ3VpZCA9IDA7XG5cbnZhciBwb3B1cFBsYWNlbWVudE1hcCA9IHtcbiAgaG9yaXpvbnRhbDogJ2JvdHRvbUxlZnQnLFxuICB2ZXJ0aWNhbDogJ3JpZ2h0VG9wJyxcbiAgJ3ZlcnRpY2FsLWxlZnQnOiAncmlnaHRUb3AnLFxuICAndmVydGljYWwtcmlnaHQnOiAnbGVmdFRvcCdcbn07XG5cbnZhciB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3QgPSBmdW5jdGlvbiB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3Qoc3RvcmUsIGV2ZW50S2V5LCBkZWZhdWx0QWN0aXZlRmlyc3QpIHtcbiAgdmFyIF9leHRlbmRzMjtcblxuICB2YXIgbWVudUlkID0gZ2V0TWVudUlkRnJvbVN1Yk1lbnVFdmVudEtleShldmVudEtleSk7XG4gIHZhciBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIHN0b3JlLnNldFN0YXRlKHtcbiAgICBkZWZhdWx0QWN0aXZlRmlyc3Q6IF9leHRlbmRzKHt9LCBzdGF0ZS5kZWZhdWx0QWN0aXZlRmlyc3QsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW21lbnVJZF0gPSBkZWZhdWx0QWN0aXZlRmlyc3QsIF9leHRlbmRzMikpXG4gIH0pO1xufTtcblxuZXhwb3J0IHZhciBTdWJNZW51ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN1Yk1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN1Yk1lbnUocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3ViTWVudSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICB2YXIgc3RvcmUgPSBwcm9wcy5zdG9yZTtcbiAgICB2YXIgZXZlbnRLZXkgPSBwcm9wcy5ldmVudEtleTtcbiAgICB2YXIgZGVmYXVsdEFjdGl2ZUZpcnN0ID0gc3RvcmUuZ2V0U3RhdGUoKS5kZWZhdWx0QWN0aXZlRmlyc3Q7XG5cbiAgICBfdGhpcy5pc1Jvb3RNZW51ID0gZmFsc2U7XG5cbiAgICB2YXIgdmFsdWUgPSBmYWxzZTtcblxuICAgIGlmIChkZWZhdWx0QWN0aXZlRmlyc3QpIHtcbiAgICAgIHZhbHVlID0gZGVmYXVsdEFjdGl2ZUZpcnN0W2V2ZW50S2V5XTtcbiAgICB9XG5cbiAgICB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3Qoc3RvcmUsIGV2ZW50S2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU3ViTWVudS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICB9O1xuXG4gIFN1Yk1lbnUucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBtb2RlID0gX3Byb3BzLm1vZGUsXG4gICAgICAgIHBhcmVudE1lbnUgPSBfcHJvcHMucGFyZW50TWVudSxcbiAgICAgICAgbWFudWFsUmVmID0gX3Byb3BzLm1hbnVhbFJlZjtcblxuICAgIC8vIGludm9rZSBjdXN0b21pemVkIHJlZiB0byBleHBvc2UgY29tcG9uZW50IHRvIG1peGluXG5cbiAgICBpZiAobWFudWFsUmVmKSB7XG4gICAgICBtYW51YWxSZWYodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGUgIT09ICdob3Jpem9udGFsJyB8fCAhcGFyZW50TWVudS5pc1Jvb3RNZW51IHx8ICF0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubWluV2lkdGhUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmFkanVzdFdpZHRoKCk7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgU3ViTWVudS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uRGVzdHJveSA9IF9wcm9wczIub25EZXN0cm95LFxuICAgICAgICBldmVudEtleSA9IF9wcm9wczIuZXZlbnRLZXk7XG5cbiAgICBpZiAob25EZXN0cm95KSB7XG4gICAgICBvbkRlc3Ryb3koZXZlbnRLZXkpO1xuICAgIH1cblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0aGlzLm1pbldpZHRoVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWluV2lkdGhUaW1lb3V0KTtcbiAgICB9XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodGhpcy5tb3VzZWVudGVyVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubW91c2VlbnRlclRpbWVvdXQpO1xuICAgIH1cbiAgfTtcblxuICBTdWJNZW51LnByb3RvdHlwZS5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgYmFzZVByb3BzID0ge1xuICAgICAgbW9kZTogcHJvcHMubW9kZSA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6IHByb3BzLm1vZGUsXG4gICAgICB2aXNpYmxlOiB0aGlzLnByb3BzLmlzT3BlbixcbiAgICAgIGxldmVsOiBwcm9wcy5sZXZlbCArIDEsXG4gICAgICBpbmxpbmVJbmRlbnQ6IHByb3BzLmlubGluZUluZGVudCxcbiAgICAgIGZvY3VzYWJsZTogZmFsc2UsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uU3ViTWVudUNsaWNrLFxuICAgICAgb25TZWxlY3Q6IHRoaXMub25TZWxlY3QsXG4gICAgICBvbkRlc2VsZWN0OiB0aGlzLm9uRGVzZWxlY3QsXG4gICAgICBvbkRlc3Ryb3k6IHRoaXMub25EZXN0cm95LFxuICAgICAgc2VsZWN0ZWRLZXlzOiBwcm9wcy5zZWxlY3RlZEtleXMsXG4gICAgICBldmVudEtleTogcHJvcHMuZXZlbnRLZXkgKyAnLW1lbnUtJyxcbiAgICAgIG9wZW5LZXlzOiBwcm9wcy5vcGVuS2V5cyxcbiAgICAgIG9wZW5UcmFuc2l0aW9uTmFtZTogcHJvcHMub3BlblRyYW5zaXRpb25OYW1lLFxuICAgICAgb3BlbkFuaW1hdGlvbjogcHJvcHMub3BlbkFuaW1hdGlvbixcbiAgICAgIG9uT3BlbkNoYW5nZTogdGhpcy5vbk9wZW5DaGFuZ2UsXG4gICAgICBzdWJNZW51T3BlbkRlbGF5OiBwcm9wcy5zdWJNZW51T3BlbkRlbGF5LFxuICAgICAgcGFyZW50TWVudTogdGhpcyxcbiAgICAgIHN1Yk1lbnVDbG9zZURlbGF5OiBwcm9wcy5zdWJNZW51Q2xvc2VEZWxheSxcbiAgICAgIGZvcmNlU3ViTWVudVJlbmRlcjogcHJvcHMuZm9yY2VTdWJNZW51UmVuZGVyLFxuICAgICAgdHJpZ2dlclN1Yk1lbnVBY3Rpb246IHByb3BzLnRyaWdnZXJTdWJNZW51QWN0aW9uLFxuICAgICAgYnVpbHRpblBsYWNlbWVudHM6IHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzLFxuICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0OiBwcm9wcy5zdG9yZS5nZXRTdGF0ZSgpLmRlZmF1bHRBY3RpdmVGaXJzdFtnZXRNZW51SWRGcm9tU3ViTWVudUV2ZW50S2V5KHByb3BzLmV2ZW50S2V5KV0sXG4gICAgICBtdWx0aXBsZTogcHJvcHMubXVsdGlwbGUsXG4gICAgICBwcmVmaXhDbHM6IHByb3BzLnJvb3RQcmVmaXhDbHMsXG4gICAgICBpZDogdGhpcy5fbWVudUlkLFxuICAgICAgbWFudWFsUmVmOiB0aGlzLnNhdmVNZW51SW5zdGFuY2UsXG4gICAgICBpdGVtSWNvbjogcHJvcHMuaXRlbUljb24sXG4gICAgICBleHBhbmRJY29uOiBwcm9wcy5leHBhbmRJY29uXG4gICAgfTtcblxuICAgIHZhciBoYXZlUmVuZGVyZWQgPSB0aGlzLmhhdmVSZW5kZXJlZDtcbiAgICB0aGlzLmhhdmVSZW5kZXJlZCA9IHRydWU7XG5cbiAgICB0aGlzLmhhdmVPcGVuZWQgPSB0aGlzLmhhdmVPcGVuZWQgfHwgYmFzZVByb3BzLnZpc2libGUgfHwgYmFzZVByb3BzLmZvcmNlU3ViTWVudVJlbmRlcjtcbiAgICAvLyBuZXZlciByZW5kZXJlZCBub3QgcGxhbm5pbmcgdG8sIGRvbid0IHJlbmRlclxuICAgIGlmICghdGhpcy5oYXZlT3BlbmVkKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCk7XG4gICAgfVxuXG4gICAgLy8gZG9uJ3Qgc2hvdyB0cmFuc2l0aW9uIG9uIGZpcnN0IHJlbmRlcmluZyAobm8gYW5pbWF0aW9uIGZvciBvcGVuZWQgbWVudSlcbiAgICAvLyBzaG93IGFwcGVhciB0cmFuc2l0aW9uIGlmIGl0J3Mgbm90IHZpc2libGUgKG5vdCBzdXJlIHdoeSlcbiAgICAvLyBzaG93IGFwcGVhciB0cmFuc2l0aW9uIGlmIGl0J3Mgbm90IGlubGluZSBtb2RlXG4gICAgdmFyIHRyYW5zaXRpb25BcHBlYXIgPSBoYXZlUmVuZGVyZWQgfHwgIWJhc2VQcm9wcy52aXNpYmxlIHx8IGJhc2VQcm9wcy5tb2RlICE9PSAnaW5saW5lJztcblxuICAgIGJhc2VQcm9wcy5jbGFzc05hbWUgPSAnICcgKyBiYXNlUHJvcHMucHJlZml4Q2xzICsgJy1zdWInO1xuICAgIHZhciBhbmltUHJvcHMgPSB7fTtcblxuICAgIGlmIChiYXNlUHJvcHMub3BlblRyYW5zaXRpb25OYW1lKSB7XG4gICAgICBhbmltUHJvcHMudHJhbnNpdGlvbk5hbWUgPSBiYXNlUHJvcHMub3BlblRyYW5zaXRpb25OYW1lO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJhc2VQcm9wcy5vcGVuQW5pbWF0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgYW5pbVByb3BzLmFuaW1hdGlvbiA9IF9leHRlbmRzKHt9LCBiYXNlUHJvcHMub3BlbkFuaW1hdGlvbik7XG4gICAgICBpZiAoIXRyYW5zaXRpb25BcHBlYXIpIHtcbiAgICAgICAgZGVsZXRlIGFuaW1Qcm9wcy5hbmltYXRpb24uYXBwZWFyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgQW5pbWF0ZSxcbiAgICAgIF9leHRlbmRzKHt9LCBhbmltUHJvcHMsIHtcbiAgICAgICAgc2hvd1Byb3A6ICd2aXNpYmxlJyxcbiAgICAgICAgY29tcG9uZW50OiAnJyxcbiAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogdHJhbnNpdGlvbkFwcGVhclxuICAgICAgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBTdWJQb3B1cE1lbnUsXG4gICAgICAgIF9leHRlbmRzKHt9LCBiYXNlUHJvcHMsIHsgaWQ6IHRoaXMuX21lbnVJZCB9KSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIFN1Yk1lbnUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgdmFyIGlzT3BlbiA9IHByb3BzLmlzT3BlbjtcbiAgICB2YXIgcHJlZml4Q2xzID0gdGhpcy5nZXRQcmVmaXhDbHMoKTtcbiAgICB2YXIgaXNJbmxpbmVNb2RlID0gcHJvcHMubW9kZSA9PT0gJ2lubGluZSc7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBwcmVmaXhDbHMgKyAnLScgKyBwcm9wcy5tb2RlLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbcHJvcHMuY2xhc3NOYW1lXSA9ICEhcHJvcHMuY2xhc3NOYW1lLCBfY2xhc3NOYW1lc1t0aGlzLmdldE9wZW5DbGFzc05hbWUoKV0gPSBpc09wZW4sIF9jbGFzc05hbWVzW3RoaXMuZ2V0QWN0aXZlQ2xhc3NOYW1lKCldID0gcHJvcHMuYWN0aXZlIHx8IGlzT3BlbiAmJiAhaXNJbmxpbmVNb2RlLCBfY2xhc3NOYW1lc1t0aGlzLmdldERpc2FibGVkQ2xhc3NOYW1lKCldID0gcHJvcHMuZGlzYWJsZWQsIF9jbGFzc05hbWVzW3RoaXMuZ2V0U2VsZWN0ZWRDbGFzc05hbWUoKV0gPSB0aGlzLmlzQ2hpbGRyZW5TZWxlY3RlZCgpLCBfY2xhc3NOYW1lcykpO1xuXG4gICAgaWYgKCF0aGlzLl9tZW51SWQpIHtcbiAgICAgIGlmIChwcm9wcy5ldmVudEtleSkge1xuICAgICAgICB0aGlzLl9tZW51SWQgPSBwcm9wcy5ldmVudEtleSArICckTWVudSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tZW51SWQgPSAnJF9fJCcgKyArK2d1aWQgKyAnJE1lbnUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtb3VzZUV2ZW50cyA9IHt9O1xuICAgIHZhciB0aXRsZUNsaWNrRXZlbnRzID0ge307XG4gICAgdmFyIHRpdGxlTW91c2VFdmVudHMgPSB7fTtcbiAgICBpZiAoIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICBtb3VzZUV2ZW50cyA9IHtcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLm9uTW91c2VFbnRlclxuICAgICAgfTtcblxuICAgICAgLy8gb25seSB3b3JrcyBpbiB0aXRsZSwgbm90IG91dGVyIGxpXG4gICAgICB0aXRsZUNsaWNrRXZlbnRzID0ge1xuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uVGl0bGVDbGlja1xuICAgICAgfTtcbiAgICAgIHRpdGxlTW91c2VFdmVudHMgPSB7XG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5vblRpdGxlTW91c2VFbnRlcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLm9uVGl0bGVNb3VzZUxlYXZlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIGlmIChpc0lubGluZU1vZGUpIHtcbiAgICAgIHN0eWxlLnBhZGRpbmdMZWZ0ID0gcHJvcHMuaW5saW5lSW5kZW50ICogcHJvcHMubGV2ZWw7XG4gICAgfVxuXG4gICAgdmFyIGFyaWFPd25zID0ge307XG4gICAgLy8gb25seSBzZXQgYXJpYS1vd25zIHdoZW4gbWVudSBpcyBvcGVuXG4gICAgLy8gb3RoZXJ3aXNlIGl0IHdvdWxkIGJlIGFuIGludmFsaWQgYXJpYS1vd25zIHZhbHVlXG4gICAgLy8gc2luY2UgY29ycmVzcG9uZGluZyBub2RlIGNhbm5vdCBiZSBmb3VuZFxuICAgIGlmICh0aGlzLnByb3BzLmlzT3Blbikge1xuICAgICAgYXJpYU93bnMgPSB7XG4gICAgICAgICdhcmlhLW93bnMnOiB0aGlzLl9tZW51SWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZXhwYW5kIGN1c3RvbSBpY29uIHNob3VsZCBOT1QgYmUgZGlzcGxheWVkIGluIG1lbnUgd2l0aCBob3Jpem9udGFsIG1vZGUuXG4gICAgdmFyIGljb24gPSBudWxsO1xuICAgIGlmIChwcm9wcy5tb2RlICE9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGljb24gPSB0aGlzLnByb3BzLmV4cGFuZEljb247IC8vIFJlYWN0Tm9kZVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmV4cGFuZEljb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWNvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5leHBhbmRJY29uLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0aXRsZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiB0aGlzLnNhdmVTdWJNZW51VGl0bGUsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXRpdGxlJ1xuICAgICAgfSwgdGl0bGVNb3VzZUV2ZW50cywgdGl0bGVDbGlja0V2ZW50cywge1xuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IGlzT3BlblxuICAgICAgfSwgYXJpYU93bnMsIHtcbiAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZScsXG4gICAgICAgIHRpdGxlOiB0eXBlb2YgcHJvcHMudGl0bGUgPT09ICdzdHJpbmcnID8gcHJvcHMudGl0bGUgOiB1bmRlZmluZWRcbiAgICAgIH0pLFxuICAgICAgcHJvcHMudGl0bGUsXG4gICAgICBpY29uIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1hcnJvdycgfSlcbiAgICApO1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgdmFyIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMucGFyZW50TWVudS5pc1Jvb3RNZW51ID8gcHJvcHMucGFyZW50TWVudS5wcm9wcy5nZXRQb3B1cENvbnRhaW5lciA6IGZ1bmN0aW9uICh0cmlnZ2VyTm9kZSkge1xuICAgICAgcmV0dXJuIHRyaWdnZXJOb2RlLnBhcmVudE5vZGU7XG4gICAgfTtcbiAgICB2YXIgcG9wdXBQbGFjZW1lbnQgPSBwb3B1cFBsYWNlbWVudE1hcFtwcm9wcy5tb2RlXTtcbiAgICB2YXIgcG9wdXBBbGlnbiA9IHByb3BzLnBvcHVwT2Zmc2V0ID8geyBvZmZzZXQ6IHByb3BzLnBvcHVwT2Zmc2V0IH0gOiB7fTtcbiAgICB2YXIgcG9wdXBDbGFzc05hbWUgPSBwcm9wcy5tb2RlID09PSAnaW5saW5lJyA/ICcnIDogcHJvcHMucG9wdXBDbGFzc05hbWU7XG4gICAgdmFyIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIHRyaWdnZXJTdWJNZW51QWN0aW9uID0gcHJvcHMudHJpZ2dlclN1Yk1lbnVBY3Rpb24sXG4gICAgICAgIHN1Yk1lbnVPcGVuRGVsYXkgPSBwcm9wcy5zdWJNZW51T3BlbkRlbGF5LFxuICAgICAgICBmb3JjZVN1Yk1lbnVSZW5kZXIgPSBwcm9wcy5mb3JjZVN1Yk1lbnVSZW5kZXIsXG4gICAgICAgIHN1Yk1lbnVDbG9zZURlbGF5ID0gcHJvcHMuc3ViTWVudUNsb3NlRGVsYXksXG4gICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzID0gcHJvcHMuYnVpbHRpblBsYWNlbWVudHM7XG5cbiAgICBtZW51QWxsUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gZGVsZXRlIHByb3BzW2tleV07XG4gICAgfSk7XG4gICAgLy8gU2V0IG9uQ2xpY2sgdG8gbnVsbCwgdG8gaWdub3JlIHByb3BhZ2F0ZWQgb25DbGljayBldmVudFxuICAgIGRlbGV0ZSBwcm9wcy5vbkNsaWNrO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCBtb3VzZUV2ZW50cywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcm9sZTogJ21lbnVpdGVtJ1xuICAgICAgfSksXG4gICAgICBpc0lubGluZU1vZGUgJiYgdGl0bGUsXG4gICAgICBpc0lubGluZU1vZGUgJiYgY2hpbGRyZW4sXG4gICAgICAhaXNJbmxpbmVNb2RlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFRyaWdnZXIsXG4gICAgICAgIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBwb3B1cENsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1wb3B1cCAnICsgcG9wdXBDbGFzc05hbWUsXG4gICAgICAgICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBfZXh0ZW5kcyh7fSwgcGxhY2VtZW50cywgYnVpbHRpblBsYWNlbWVudHMpLFxuICAgICAgICAgIHBvcHVwUGxhY2VtZW50OiBwb3B1cFBsYWNlbWVudCxcbiAgICAgICAgICBwb3B1cFZpc2libGU6IGlzT3BlbixcbiAgICAgICAgICBwb3B1cEFsaWduOiBwb3B1cEFsaWduLFxuICAgICAgICAgIHBvcHVwOiBjaGlsZHJlbixcbiAgICAgICAgICBhY3Rpb246IGRpc2FibGVkID8gW10gOiBbdHJpZ2dlclN1Yk1lbnVBY3Rpb25dLFxuICAgICAgICAgIG1vdXNlRW50ZXJEZWxheTogc3ViTWVudU9wZW5EZWxheSxcbiAgICAgICAgICBtb3VzZUxlYXZlRGVsYXk6IHN1Yk1lbnVDbG9zZURlbGF5LFxuICAgICAgICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiB0aGlzLm9uUG9wdXBWaXNpYmxlQ2hhbmdlLFxuICAgICAgICAgIGZvcmNlUmVuZGVyOiBmb3JjZVN1Yk1lbnVSZW5kZXJcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGVcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBTdWJNZW51O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5TdWJNZW51LnByb3BUeXBlcyA9IHtcbiAgcGFyZW50TWVudTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgc2VsZWN0ZWRLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gIG9wZW5LZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbk9wZW5DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICByb290UHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBldmVudEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLCAvLyBUT0RPOiByZW1vdmVcbiAgb25JdGVtSG92ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIHRyaWdnZXJTdWJNZW51QWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkRlc2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25EZXN0cm95OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25UaXRsZU1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblRpdGxlTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGl0bGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHBvcHVwT2Zmc2V0OiBQcm9wVHlwZXMuYXJyYXksXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIHN0b3JlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBtb2RlOiBQcm9wVHlwZXMub25lT2YoWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJywgJ3ZlcnRpY2FsLWxlZnQnLCAndmVydGljYWwtcmlnaHQnLCAnaW5saW5lJ10pLFxuICBtYW51YWxSZWY6IFByb3BUeXBlcy5mdW5jLFxuICBpdGVtSWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG4gIGV4cGFuZEljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pXG59O1xuU3ViTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uTW91c2VFbnRlcjogbm9vcCxcbiAgb25Nb3VzZUxlYXZlOiBub29wLFxuICBvblRpdGxlTW91c2VFbnRlcjogbm9vcCxcbiAgb25UaXRsZU1vdXNlTGVhdmU6IG5vb3AsXG4gIG9uVGl0bGVDbGljazogbm9vcCxcbiAgbWFudWFsUmVmOiBub29wLFxuICBtb2RlOiAndmVydGljYWwnLFxuICB0aXRsZTogJydcbn07XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgdGhpcy5vbkRlc3Ryb3kgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgX3RoaXMzLnByb3BzLm9uRGVzdHJveShrZXkpO1xuICB9O1xuXG4gIHRoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgICB2YXIgbWVudSA9IF90aGlzMy5tZW51SW5zdGFuY2U7XG4gICAgdmFyIF9wcm9wczMgPSBfdGhpczMucHJvcHMsXG4gICAgICAgIGlzT3BlbiA9IF9wcm9wczMuaXNPcGVuLFxuICAgICAgICBzdG9yZSA9IF9wcm9wczMuc3RvcmU7XG5cblxuICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLkVOVEVSKSB7XG4gICAgICBfdGhpczMub25UaXRsZUNsaWNrKGUpO1xuICAgICAgdXBkYXRlRGVmYXVsdEFjdGl2ZUZpcnN0KHN0b3JlLCBfdGhpczMucHJvcHMuZXZlbnRLZXksIHRydWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuUklHSFQpIHtcbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgbWVudS5vbktleURvd24oZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczMudHJpZ2dlck9wZW5DaGFuZ2UodHJ1ZSk7XG4gICAgICAgIC8vIG5lZWQgdG8gdXBkYXRlIGN1cnJlbnQgbWVudSdzIGRlZmF1bHRBY3RpdmVGaXJzdCB2YWx1ZVxuICAgICAgICB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3Qoc3RvcmUsIF90aGlzMy5wcm9wcy5ldmVudEtleSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuTEVGVCkge1xuICAgICAgdmFyIGhhbmRsZWQgPSB2b2lkIDA7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIGhhbmRsZWQgPSBtZW51Lm9uS2V5RG93bihlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoIWhhbmRsZWQpIHtcbiAgICAgICAgX3RoaXMzLnRyaWdnZXJPcGVuQ2hhbmdlKGZhbHNlKTtcbiAgICAgICAgaGFuZGxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFuZGxlZDtcbiAgICB9XG5cbiAgICBpZiAoaXNPcGVuICYmIChrZXlDb2RlID09PSBLZXlDb2RlLlVQIHx8IGtleUNvZGUgPT09IEtleUNvZGUuRE9XTikpIHtcbiAgICAgIHJldHVybiBtZW51Lm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbk9wZW5DaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzMy5wcm9wcy5vbk9wZW5DaGFuZ2UoZSk7XG4gIH07XG5cbiAgdGhpcy5vblBvcHVwVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uICh2aXNpYmxlKSB7XG4gICAgX3RoaXMzLnRyaWdnZXJPcGVuQ2hhbmdlKHZpc2libGUsIHZpc2libGUgPyAnbW91c2VlbnRlcicgOiAnbW91c2VsZWF2ZScpO1xuICB9O1xuXG4gIHRoaXMub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgX3Byb3BzNCA9IF90aGlzMy5wcm9wcyxcbiAgICAgICAga2V5ID0gX3Byb3BzNC5ldmVudEtleSxcbiAgICAgICAgb25Nb3VzZUVudGVyID0gX3Byb3BzNC5vbk1vdXNlRW50ZXIsXG4gICAgICAgIHN0b3JlID0gX3Byb3BzNC5zdG9yZTtcblxuICAgIHVwZGF0ZURlZmF1bHRBY3RpdmVGaXJzdChzdG9yZSwgX3RoaXMzLnByb3BzLmV2ZW50S2V5LCBmYWxzZSk7XG4gICAgb25Nb3VzZUVudGVyKHtcbiAgICAgIGtleToga2V5LFxuICAgICAgZG9tRXZlbnQ6IGVcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIF9wcm9wczUgPSBfdGhpczMucHJvcHMsXG4gICAgICAgIHBhcmVudE1lbnUgPSBfcHJvcHM1LnBhcmVudE1lbnUsXG4gICAgICAgIGV2ZW50S2V5ID0gX3Byb3BzNS5ldmVudEtleSxcbiAgICAgICAgb25Nb3VzZUxlYXZlID0gX3Byb3BzNS5vbk1vdXNlTGVhdmU7XG5cbiAgICBwYXJlbnRNZW51LnN1Yk1lbnVJbnN0YW5jZSA9IF90aGlzMztcbiAgICBvbk1vdXNlTGVhdmUoe1xuICAgICAga2V5OiBldmVudEtleSxcbiAgICAgIGRvbUV2ZW50OiBlXG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5vblRpdGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChkb21FdmVudCkge1xuICAgIHZhciBfcHJvcHM2ID0gX3RoaXMzLnByb3BzLFxuICAgICAgICBrZXkgPSBfcHJvcHM2LmV2ZW50S2V5LFxuICAgICAgICBvbkl0ZW1Ib3ZlciA9IF9wcm9wczYub25JdGVtSG92ZXIsXG4gICAgICAgIG9uVGl0bGVNb3VzZUVudGVyID0gX3Byb3BzNi5vblRpdGxlTW91c2VFbnRlcjtcblxuICAgIG9uSXRlbUhvdmVyKHtcbiAgICAgIGtleToga2V5LFxuICAgICAgaG92ZXI6IHRydWVcbiAgICB9KTtcbiAgICBvblRpdGxlTW91c2VFbnRlcih7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGRvbUV2ZW50OiBkb21FdmVudFxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMub25UaXRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBfcHJvcHM3ID0gX3RoaXMzLnByb3BzLFxuICAgICAgICBwYXJlbnRNZW51ID0gX3Byb3BzNy5wYXJlbnRNZW51LFxuICAgICAgICBldmVudEtleSA9IF9wcm9wczcuZXZlbnRLZXksXG4gICAgICAgIG9uSXRlbUhvdmVyID0gX3Byb3BzNy5vbkl0ZW1Ib3ZlcixcbiAgICAgICAgb25UaXRsZU1vdXNlTGVhdmUgPSBfcHJvcHM3Lm9uVGl0bGVNb3VzZUxlYXZlO1xuXG4gICAgcGFyZW50TWVudS5zdWJNZW51SW5zdGFuY2UgPSBfdGhpczM7XG4gICAgb25JdGVtSG92ZXIoe1xuICAgICAga2V5OiBldmVudEtleSxcbiAgICAgIGhvdmVyOiBmYWxzZVxuICAgIH0pO1xuICAgIG9uVGl0bGVNb3VzZUxlYXZlKHtcbiAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICBkb21FdmVudDogZVxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMub25UaXRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczMucHJvcHM7XG5cbiAgICBwcm9wcy5vblRpdGxlQ2xpY2soe1xuICAgICAga2V5OiBwcm9wcy5ldmVudEtleSxcbiAgICAgIGRvbUV2ZW50OiBlXG4gICAgfSk7XG4gICAgaWYgKHByb3BzLnRyaWdnZXJTdWJNZW51QWN0aW9uID09PSAnaG92ZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF90aGlzMy50cmlnZ2VyT3BlbkNoYW5nZSghcHJvcHMuaXNPcGVuLCAnY2xpY2snKTtcbiAgICB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3QocHJvcHMuc3RvcmUsIF90aGlzMy5wcm9wcy5ldmVudEtleSwgZmFsc2UpO1xuICB9O1xuXG4gIHRoaXMub25TdWJNZW51Q2xpY2sgPSBmdW5jdGlvbiAoaW5mbykge1xuICAgIC8vIGluIHRoZSBjYXNlIG9mIG92ZXJmbG93ZWQgc3VibWVudVxuICAgIC8vIG9uQ2xpY2sgaXMgbm90IGNvcGllZCBvdmVyXG4gICAgaWYgKHR5cGVvZiBfdGhpczMucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgX3RoaXMzLnByb3BzLm9uQ2xpY2soX3RoaXMzLmFkZEtleVBhdGgoaW5mbykpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uU2VsZWN0ID0gZnVuY3Rpb24gKGluZm8pIHtcbiAgICBfdGhpczMucHJvcHMub25TZWxlY3QoaW5mbyk7XG4gIH07XG5cbiAgdGhpcy5vbkRlc2VsZWN0ID0gZnVuY3Rpb24gKGluZm8pIHtcbiAgICBfdGhpczMucHJvcHMub25EZXNlbGVjdChpbmZvKTtcbiAgfTtcblxuICB0aGlzLmdldFByZWZpeENscyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMzLnByb3BzLnJvb3RQcmVmaXhDbHMgKyAnLXN1Ym1lbnUnO1xuICB9O1xuXG4gIHRoaXMuZ2V0QWN0aXZlQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczMuZ2V0UHJlZml4Q2xzKCkgKyAnLWFjdGl2ZSc7XG4gIH07XG5cbiAgdGhpcy5nZXREaXNhYmxlZENsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMzLmdldFByZWZpeENscygpICsgJy1kaXNhYmxlZCc7XG4gIH07XG5cbiAgdGhpcy5nZXRTZWxlY3RlZENsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMzLmdldFByZWZpeENscygpICsgJy1zZWxlY3RlZCc7XG4gIH07XG5cbiAgdGhpcy5nZXRPcGVuQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczMucHJvcHMucm9vdFByZWZpeENscyArICctc3VibWVudS1vcGVuJztcbiAgfTtcblxuICB0aGlzLnNhdmVNZW51SW5zdGFuY2UgPSBmdW5jdGlvbiAoYykge1xuICAgIC8vIGNoaWxkcmVuIG1lbnUgaW5zdGFuY2VcbiAgICBfdGhpczMubWVudUluc3RhbmNlID0gYztcbiAgfTtcblxuICB0aGlzLmFkZEtleVBhdGggPSBmdW5jdGlvbiAoaW5mbykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgaW5mbywge1xuICAgICAga2V5UGF0aDogKGluZm8ua2V5UGF0aCB8fCBbXSkuY29uY2F0KF90aGlzMy5wcm9wcy5ldmVudEtleSlcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLnRyaWdnZXJPcGVuQ2hhbmdlID0gZnVuY3Rpb24gKG9wZW4sIHR5cGUpIHtcbiAgICB2YXIga2V5ID0gX3RoaXMzLnByb3BzLmV2ZW50S2V5O1xuICAgIHZhciBvcGVuQ2hhbmdlID0gZnVuY3Rpb24gb3BlbkNoYW5nZSgpIHtcbiAgICAgIF90aGlzMy5vbk9wZW5DaGFuZ2Uoe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgaXRlbTogX3RoaXMzLFxuICAgICAgICB0cmlnZ2VyOiB0eXBlLFxuICAgICAgICBvcGVuOiBvcGVuXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGlmICh0eXBlID09PSAnbW91c2VlbnRlcicpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBtb3VzZWVudGVyIGhhcHBlbiBhZnRlciBvdGhlciBtZW51IGl0ZW0ncyBtb3VzZWxlYXZlXG4gICAgICBfdGhpczMubW91c2VlbnRlclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3BlbkNoYW5nZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZW5DaGFuZ2UoKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5pc0NoaWxkcmVuU2VsZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJldCA9IHsgZmluZDogZmFsc2UgfTtcbiAgICBsb29wTWVudUl0ZW1SZWN1cnNpdmVseShfdGhpczMucHJvcHMuY2hpbGRyZW4sIF90aGlzMy5wcm9wcy5zZWxlY3RlZEtleXMsIHJldCk7XG4gICAgcmV0dXJuIHJldC5maW5kO1xuICB9O1xuXG4gIHRoaXMuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczMucHJvcHMub3BlbktleXMuaW5kZXhPZihfdGhpczMucHJvcHMuZXZlbnRLZXkpICE9PSAtMTtcbiAgfTtcblxuICB0aGlzLmFkanVzdFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghX3RoaXMzLnN1Yk1lbnVUaXRsZSB8fCAhX3RoaXMzLm1lbnVJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcG9wdXBNZW51ID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMzLm1lbnVJbnN0YW5jZSk7XG4gICAgaWYgKHBvcHVwTWVudS5vZmZzZXRXaWR0aCA+PSBfdGhpczMuc3ViTWVudVRpdGxlLm9mZnNldFdpZHRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBwb3B1cE1lbnUuc3R5bGUubWluV2lkdGggPSBfdGhpczMuc3ViTWVudVRpdGxlLm9mZnNldFdpZHRoICsgJ3B4JztcbiAgfTtcblxuICB0aGlzLnNhdmVTdWJNZW51VGl0bGUgPSBmdW5jdGlvbiAoc3ViTWVudVRpdGxlKSB7XG4gICAgX3RoaXMzLnN1Yk1lbnVUaXRsZSA9IHN1Yk1lbnVUaXRsZTtcbiAgfTtcbn07XG5cbnZhciBjb25uZWN0ZWQgPSBjb25uZWN0KGZ1bmN0aW9uIChfcmVmLCBfcmVmMikge1xuICB2YXIgb3BlbktleXMgPSBfcmVmLm9wZW5LZXlzLFxuICAgICAgYWN0aXZlS2V5ID0gX3JlZi5hY3RpdmVLZXksXG4gICAgICBzZWxlY3RlZEtleXMgPSBfcmVmLnNlbGVjdGVkS2V5cztcbiAgdmFyIGV2ZW50S2V5ID0gX3JlZjIuZXZlbnRLZXksXG4gICAgICBzdWJNZW51S2V5ID0gX3JlZjIuc3ViTWVudUtleTtcbiAgcmV0dXJuIHtcbiAgICBpc09wZW46IG9wZW5LZXlzLmluZGV4T2YoZXZlbnRLZXkpID4gLTEsXG4gICAgYWN0aXZlOiBhY3RpdmVLZXlbc3ViTWVudUtleV0gPT09IGV2ZW50S2V5LFxuICAgIHNlbGVjdGVkS2V5czogc2VsZWN0ZWRLZXlzXG4gIH07XG59KShTdWJNZW51KTtcblxuY29ubmVjdGVkLmlzU3ViTWVudSA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RlZDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcbmltcG9ydCBTdWJNZW51IGZyb20gJy4vU3ViTWVudSc7XG5pbXBvcnQgeyBnZXRXaWR0aCwgc2V0U3R5bGUsIG1lbnVBbGxQcm9wcyB9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG52YXIgTUVOVUlURU1fT1ZFUkZMT1dFRF9DTEFTU05BTUUgPSAnbWVudWl0ZW0tb3ZlcmZsb3dlZCc7XG52YXIgRkxPQVRfUFJFQ0lTSU9OX0FESlVTVCA9IDAuNTtcblxuLy8gRml4IHNzclxuaWYgKGNhblVzZURPTSkge1xuICByZXF1aXJlKCdtdXRhdGlvbm9ic2VydmVyLXNoaW0nKTtcbn1cblxudmFyIERPTVdyYXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRE9NV3JhcCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRE9NV3JhcCgpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERPTVdyYXApO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgbGFzdFZpc2libGVJbmRleDogdW5kZWZpbmVkXG4gICAgfSwgX3RoaXMuZ2V0TWVudUl0ZW1Ob2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBfdGhpcy5wcm9wcy5wcmVmaXhDbHM7XG5cbiAgICAgIHZhciB1bCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcbiAgICAgIGlmICghdWwpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBmaWx0ZXIgb3V0IGFsbCBvdmVyZmxvd2VkIGluZGljYXRvciBwbGFjZWhvbGRlclxuICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodWwuY2hpbGRyZW4pLmZpbHRlcihmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZS5jbGFzc05hbWUuc3BsaXQoJyAnKS5pbmRleE9mKHByZWZpeENscyArICctb3ZlcmZsb3dlZC1zdWJtZW51JykgPCAwO1xuICAgICAgfSk7XG4gICAgfSwgX3RoaXMuZ2V0T3ZlcmZsb3dlZFN1Yk1lbnVJdGVtID0gZnVuY3Rpb24gKGtleVByZWZpeCwgb3ZlcmZsb3dlZEl0ZW1zLCByZW5kZXJQbGFjZWhvbGRlcikge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb3ZlcmZsb3dlZEluZGljYXRvciA9IF90aGlzJHByb3BzLm92ZXJmbG93ZWRJbmRpY2F0b3IsXG4gICAgICAgICAgbGV2ZWwgPSBfdGhpcyRwcm9wcy5sZXZlbCxcbiAgICAgICAgICBtb2RlID0gX3RoaXMkcHJvcHMubW9kZSxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgdGhlbWUgPSBfdGhpcyRwcm9wcy50aGVtZTtcblxuICAgICAgaWYgKGxldmVsICE9PSAxIHx8IG1vZGUgIT09ICdob3Jpem9udGFsJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIHB1dCBhbGwgdGhlIG92ZXJmbG93ZWQgaXRlbSBpbnNpZGUgYSBzdWJtZW51XG4gICAgICAvLyB3aXRoIGEgdGl0bGUgb2Ygb3ZlcmZsb3cgaW5kaWNhdG9yICgnLi4uJylcbiAgICAgIHZhciBjb3B5ID0gX3RoaXMucHJvcHMuY2hpbGRyZW5bMF07XG5cbiAgICAgIHZhciBfY29weSRwcm9wcyA9IGNvcHkucHJvcHMsXG4gICAgICAgICAgdGhyb3dBd2F5ID0gX2NvcHkkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgdGl0bGUgPSBfY29weSRwcm9wcy50aXRsZSxcbiAgICAgICAgICBwcm9wU3R5bGUgPSBfY29weSRwcm9wcy5zdHlsZSxcbiAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9jb3B5JHByb3BzLCBbJ2NoaWxkcmVuJywgJ3RpdGxlJywgJ3N0eWxlJ10pO1xuXG4gICAgICB2YXIgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgcHJvcFN0eWxlKTtcbiAgICAgIHZhciBrZXkgPSBrZXlQcmVmaXggKyAnLW92ZXJmbG93ZWQtaW5kaWNhdG9yJztcbiAgICAgIHZhciBldmVudEtleSA9IGtleVByZWZpeCArICctb3ZlcmZsb3dlZC1pbmRpY2F0b3InO1xuXG4gICAgICBpZiAob3ZlcmZsb3dlZEl0ZW1zLmxlbmd0aCA9PT0gMCAmJiByZW5kZXJQbGFjZWhvbGRlciAhPT0gdHJ1ZSkge1xuICAgICAgICBzdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSwge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAocmVuZGVyUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgICAvLyBwcmV2ZW50IGZyb20gdGFraW5nIG5vcm1hbCBkb20gc3BhY2VcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgICB9KTtcbiAgICAgICAga2V5ID0ga2V5ICsgJy1wbGFjZWhvbGRlcic7XG4gICAgICAgIGV2ZW50S2V5ID0gZXZlbnRLZXkgKyAnLXBsYWNlaG9sZGVyJztcbiAgICAgIH1cblxuICAgICAgdmFyIHBvcHVwQ2xhc3NOYW1lID0gdGhlbWUgPyBwcmVmaXhDbHMgKyAnLScgKyB0aGVtZSA6ICcnO1xuICAgICAgdmFyIHByb3BzID0ge307XG4gICAgICBtZW51QWxsUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICBpZiAocmVzdFtrXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNba10gPSByZXN0W2tdO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFN1Yk1lbnUsXG4gICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICB0aXRsZTogb3ZlcmZsb3dlZEluZGljYXRvcixcbiAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctb3ZlcmZsb3dlZC1zdWJtZW51JyxcbiAgICAgICAgICBwb3B1cENsYXNzTmFtZTogcG9wdXBDbGFzc05hbWVcbiAgICAgICAgfSwgcHJvcHMsIHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBldmVudEtleTogZXZlbnRLZXksXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgICB9KSxcbiAgICAgICAgb3ZlcmZsb3dlZEl0ZW1zXG4gICAgICApO1xuICAgIH0sIF90aGlzLnNldENoaWxkcmVuV2lkdGhBbmRSZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMubW9kZSAhPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciB1bCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcblxuICAgICAgaWYgKCF1bCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB1bENoaWxkcmVuTm9kZXMgPSB1bC5jaGlsZHJlbjtcblxuICAgICAgaWYgKCF1bENoaWxkcmVuTm9kZXMgfHwgdWxDaGlsZHJlbk5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBsYXN0T3ZlcmZsb3dlZEluZGljYXRvclBsYWNlaG9sZGVyID0gdWwuY2hpbGRyZW5bdWxDaGlsZHJlbk5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAvLyBuZWVkIGxhc3Qgb3ZlcmZsb3dlZCBpbmRpY2F0b3IgZm9yIGNhbGN1bGF0aW5nIGxlbmd0aDtcbiAgICAgIHNldFN0eWxlKGxhc3RPdmVyZmxvd2VkSW5kaWNhdG9yUGxhY2Vob2xkZXIsICdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuXG4gICAgICB2YXIgbWVudUl0ZW1Ob2RlcyA9IF90aGlzLmdldE1lbnVJdGVtTm9kZXMoKTtcblxuICAgICAgLy8gcmVzZXQgZGlzcGxheSBhdHRyaWJ1dGUgZm9yIGFsbCBoaWRkZW4gZWxlbWVudHMgY2F1c2VkIGJ5IG92ZXJmbG93IHRvIGNhbGN1bGF0ZSB1cGRhdGVkIHdpZHRoXG4gICAgICAvLyBhbmQgdGhlbiByZXNldCB0byBvcmlnaW5hbCBzdGF0ZSBhZnRlciB3aWR0aCBjYWxjdWxhdGlvblxuXG4gICAgICB2YXIgb3ZlcmZsb3dlZEl0ZW1zID0gbWVudUl0ZW1Ob2Rlcy5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGMuY2xhc3NOYW1lLnNwbGl0KCcgJykuaW5kZXhPZihNRU5VSVRFTV9PVkVSRkxPV0VEX0NMQVNTTkFNRSkgPj0gMDtcbiAgICAgIH0pO1xuXG4gICAgICBvdmVyZmxvd2VkSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICBzZXRTdHlsZShjLCAnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5tZW51SXRlbVNpemVzID0gbWVudUl0ZW1Ob2Rlcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGdldFdpZHRoKGMpO1xuICAgICAgfSk7XG5cbiAgICAgIG92ZXJmbG93ZWRJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHNldFN0eWxlKGMsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMub3ZlcmZsb3dlZEluZGljYXRvcldpZHRoID0gZ2V0V2lkdGgodWwuY2hpbGRyZW5bdWwuY2hpbGRyZW4ubGVuZ3RoIC0gMV0pO1xuICAgICAgX3RoaXMub3JpZ2luYWxUb3RhbFdpZHRoID0gX3RoaXMubWVudUl0ZW1TaXplcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VyKSB7XG4gICAgICAgIHJldHVybiBhY2MgKyBjdXI7XG4gICAgICB9LCAwKTtcbiAgICAgIF90aGlzLmhhbmRsZVJlc2l6ZSgpO1xuICAgICAgLy8gcHJldmVudCB0aGUgb3ZlcmZsb3dlZCBpbmRpY2F0b3IgZnJvbSB0YWtpbmcgc3BhY2U7XG4gICAgICBzZXRTdHlsZShsYXN0T3ZlcmZsb3dlZEluZGljYXRvclBsYWNlaG9sZGVyLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfSwgX3RoaXMucmVzaXplT2JzZXJ2ZXIgPSBudWxsLCBfdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbnVsbCwgX3RoaXMub3JpZ2luYWxUb3RhbFdpZHRoID0gMCwgX3RoaXMub3ZlcmZsb3dlZEl0ZW1zID0gW10sIF90aGlzLm1lbnVJdGVtU2l6ZXMgPSBbXSwgX3RoaXMuaGFuZGxlUmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm1vZGUgIT09ICdob3Jpem9udGFsJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB1bCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcbiAgICAgIGlmICghdWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHdpZHRoID0gZ2V0V2lkdGgodWwpO1xuXG4gICAgICBfdGhpcy5vdmVyZmxvd2VkSXRlbXMgPSBbXTtcbiAgICAgIHZhciBjdXJyZW50U3VtV2lkdGggPSAwO1xuXG4gICAgICAvLyBpbmRleCBmb3IgbGFzdCB2aXNpYmxlIGNoaWxkIGluIGhvcml6b250YWwgbW9kZVxuICAgICAgdmFyIGxhc3RWaXNpYmxlSW5kZXggPSB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIGZsb2F0IG51bWJlciBjb21wYXJpc29uIGNvdWxkIGJlIHByb2JsZW1hdGljXG4gICAgICAvLyBlLmcuIDAuMSArIDAuMiA+IDAuMyA9PT09PT4gdHJ1ZVxuICAgICAgLy8gdGh1cyB1c2luZyBGTE9BVF9QUkVDSVNJT05fQURKVVNUIGFzIGJ1ZmZlciB0byBoZWxwIHRoZSBzaXR1YXRpb25cbiAgICAgIGlmIChfdGhpcy5vcmlnaW5hbFRvdGFsV2lkdGggPiB3aWR0aCArIEZMT0FUX1BSRUNJU0lPTl9BREpVU1QpIHtcbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IC0xO1xuXG4gICAgICAgIF90aGlzLm1lbnVJdGVtU2l6ZXMuZm9yRWFjaChmdW5jdGlvbiAobGlXaWR0aCkge1xuICAgICAgICAgIGN1cnJlbnRTdW1XaWR0aCArPSBsaVdpZHRoO1xuICAgICAgICAgIGlmIChjdXJyZW50U3VtV2lkdGggKyBfdGhpcy5vdmVyZmxvd2VkSW5kaWNhdG9yV2lkdGggPD0gd2lkdGgpIHtcbiAgICAgICAgICAgIGxhc3RWaXNpYmxlSW5kZXgrKztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxhc3RWaXNpYmxlSW5kZXg6IGxhc3RWaXNpYmxlSW5kZXggfSk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBET01XcmFwLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy5zZXRDaGlsZHJlbldpZHRoQW5kUmVzaXplKCk7XG4gICAgaWYgKHRoaXMucHJvcHMubGV2ZWwgPT09IDEgJiYgdGhpcy5wcm9wcy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHZhciBtZW51VWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIGlmICghbWVudVVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKF90aGlzMi5zZXRDaGlsZHJlbldpZHRoQW5kUmVzaXplKTtcbiAgICAgIH0pO1xuXG4gICAgICBbXS5zbGljZS5jYWxsKG1lbnVVbC5jaGlsZHJlbikuY29uY2F0KG1lbnVVbCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgX3RoaXMyLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgW10uc2xpY2UuY2FsbChtZW51VWwuY2hpbGRyZW4pLmNvbmNhdChtZW51VWwpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBfdGhpczIucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgX3RoaXMyLnNldENoaWxkcmVuV2lkdGhBbmRSZXNpemUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKG1lbnVVbCwgeyBhdHRyaWJ1dGVzOiBmYWxzZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJUcmVlOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgRE9NV3JhcC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5yZXNpemVPYnNlcnZlcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBnZXQgYWxsIHZhbGlkIG1lbnVJdGVtIG5vZGVzXG5cblxuICAvLyBtZW1vcml6ZSByZW5kZXJlZCBtZW51U2l6ZVxuXG5cbiAgLy8gb3JpZ2luYWwgc2Nyb2xsIHNpemUgb2YgdGhlIGxpc3RcblxuXG4gIC8vIGNvcHkgb2Ygb3ZlcmZsb3dlZCBpdGVtc1xuXG5cbiAgLy8gY2FjaGUgaXRlbSBvZiB0aGUgb3JpZ2luYWwgaXRlbXMgKHNvIHdlIGNhbiB0cmFjayB0aGUgc2l6ZSBhbmQgb3JkZXIpXG5cblxuICBET01XcmFwLnByb3RvdHlwZS5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAvLyBuZWVkIHRvIHRha2UgY2FyZSBvZiBvdmVyZmxvd2VkIGl0ZW1zIGluIGhvcml6b250YWwgbW9kZVxuICAgIHZhciBsYXN0VmlzaWJsZUluZGV4ID0gdGhpcy5zdGF0ZS5sYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgcmV0dXJuIChjaGlsZHJlbiB8fCBbXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNoaWxkTm9kZSwgaW5kZXgpIHtcbiAgICAgIHZhciBpdGVtID0gY2hpbGROb2RlO1xuICAgICAgaWYgKF90aGlzMy5wcm9wcy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgdmFyIG92ZXJmbG93ZWQgPSBfdGhpczMuZ2V0T3ZlcmZsb3dlZFN1Yk1lbnVJdGVtKGNoaWxkTm9kZS5wcm9wcy5ldmVudEtleSwgW10pO1xuICAgICAgICBpZiAobGFzdFZpc2libGVJbmRleCAhPT0gdW5kZWZpbmVkICYmIF90aGlzMy5wcm9wcy5jbGFzc05hbWUuaW5kZXhPZihfdGhpczMucHJvcHMucHJlZml4Q2xzICsgJy1yb290JykgIT09IC0xKSB7XG4gICAgICAgICAgaWYgKGluZGV4ID4gbGFzdFZpc2libGVJbmRleCkge1xuICAgICAgICAgICAgaXRlbSA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZE5vZGUsXG4gICAgICAgICAgICAvLyDov5nph4zkv67mlLkgZXZlbnRLZXkg5piv5Li65LqG6Ziy5q2i6ZqQ6JeP54q25oCB5LiL6L+Y5Lya6Kem5Y+RIG9wZW5rZXlzIOS6i+S7tlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICAgICAgICAgICAgZXZlbnRLZXk6IGNoaWxkTm9kZS5wcm9wcy5ldmVudEtleSArICctaGlkZGVuJyxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjaGlsZE5vZGUuY2xhc3NOYW1lICsgJyAnICsgTUVOVUlURU1fT1ZFUkZMT1dFRF9DTEFTU05BTUVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5kZXggPT09IGxhc3RWaXNpYmxlSW5kZXggKyAxKSB7XG4gICAgICAgICAgICBfdGhpczMub3ZlcmZsb3dlZEl0ZW1zID0gY2hpbGRyZW4uc2xpY2UobGFzdFZpc2libGVJbmRleCArIDEpLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsXG4gICAgICAgICAgICAgIC8vIGNoaWxkcmVuW2luZGV4XS5rZXkgd2lsbCBiZWNvbWUgJy4ka2V5JyBpbiBjbG9uZSBieSBkZWZhdWx0LFxuICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIG92ZXJ3cml0ZSB3aXRoIHRoZSBjb3JyZWN0IGtleSBleHBsaWNpdGx5XG4gICAgICAgICAgICAgIHsga2V5OiBjLnByb3BzLmV2ZW50S2V5LCBtb2RlOiAndmVydGljYWwtbGVmdCcgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgb3ZlcmZsb3dlZCA9IF90aGlzMy5nZXRPdmVyZmxvd2VkU3ViTWVudUl0ZW0oY2hpbGROb2RlLnByb3BzLmV2ZW50S2V5LCBfdGhpczMub3ZlcmZsb3dlZEl0ZW1zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmV0ID0gW10uY29uY2F0KGFjYywgW292ZXJmbG93ZWQsIGl0ZW1dKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAvLyBuZWVkIGEgcGxhY2Vob2xkZXIgZm9yIGNhbGN1bGF0aW5nIG92ZXJmbG93ZWQgaW5kaWNhdG9yIHdpZHRoXG4gICAgICAgICAgcmV0LnB1c2goX3RoaXMzLmdldE92ZXJmbG93ZWRTdWJNZW51SXRlbShjaGlsZE5vZGUucHJvcHMuZXZlbnRLZXksIFtdLCB0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXS5jb25jYXQoYWNjLCBbaXRlbV0pO1xuICAgIH0sIFtdKTtcbiAgfTtcblxuICBET01XcmFwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGhpZGRlbkNsYXNzTmFtZSA9IF9wcm9wcy5oaWRkZW5DbGFzc05hbWUsXG4gICAgICAgIHZpc2libGUgPSBfcHJvcHMudmlzaWJsZSxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgb3ZlcmZsb3dlZEluZGljYXRvciA9IF9wcm9wcy5vdmVyZmxvd2VkSW5kaWNhdG9yLFxuICAgICAgICBtb2RlID0gX3Byb3BzLm1vZGUsXG4gICAgICAgIGxldmVsID0gX3Byb3BzLmxldmVsLFxuICAgICAgICBUYWcgPSBfcHJvcHMudGFnLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgdGhlbWUgPSBfcHJvcHMudGhlbWUsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2hpZGRlbkNsYXNzTmFtZScsICd2aXNpYmxlJywgJ3ByZWZpeENscycsICdvdmVyZmxvd2VkSW5kaWNhdG9yJywgJ21vZGUnLCAnbGV2ZWwnLCAndGFnJywgJ2NoaWxkcmVuJywgJ3RoZW1lJ10pO1xuXG4gICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICByZXN0LmNsYXNzTmFtZSArPSAnICcgKyBoaWRkZW5DbGFzc05hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUYWcsXG4gICAgICByZXN0LFxuICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIERPTVdyYXA7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkRPTVdyYXAucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICd2ZXJ0aWNhbC1sZWZ0JywgJ3ZlcnRpY2FsLXJpZ2h0JywgJ2lubGluZSddKSxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsZXZlbDogUHJvcFR5cGVzLm51bWJlcixcbiAgdGhlbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG92ZXJmbG93ZWRJbmRpY2F0b3I6IFByb3BUeXBlcy5ub2RlLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGlkZGVuQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5ET01XcmFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGFnOiAnZGl2JyxcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NV3JhcDsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ21pbmktc3RvcmUnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAncmMtdXRpbC9lcy9LZXlDb2RlJztcbmltcG9ydCBjcmVhdGVDaGFpbmVkRnVuY3Rpb24gZnJvbSAncmMtdXRpbC9lcy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBnZXRLZXlGcm9tQ2hpbGRyZW5JbmRleCwgbG9vcE1lbnVJdGVtLCBub29wLCBtZW51QWxsUHJvcHMsIGlzTW9iaWxlRGV2aWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBET01XcmFwIGZyb20gJy4vRE9NV3JhcCc7XG5cbmZ1bmN0aW9uIGFsbERpc2FibGVkKGFycikge1xuICBpZiAoIWFyci5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gYXJyLmV2ZXJ5KGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICEhYy5wcm9wcy5kaXNhYmxlZDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUtleShzdG9yZSwgbWVudUlkLCBhY3RpdmVLZXkpIHtcbiAgdmFyIF9leHRlbmRzMjtcblxuICB2YXIgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBzdG9yZS5zZXRTdGF0ZSh7XG4gICAgYWN0aXZlS2V5OiBfZXh0ZW5kcyh7fSwgc3RhdGUuYWN0aXZlS2V5LCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMlttZW51SWRdID0gYWN0aXZlS2V5LCBfZXh0ZW5kczIpKVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRLZXkocHJvcHMpIHtcbiAgLy8gd2hlbiBldmVudEtleSBub3QgYXZhaWxhYmxlICxpdCdzIG1lbnUgYW5kIHJldHVybiBtZW51IGlkICcwLW1lbnUtJ1xuICByZXR1cm4gcHJvcHMuZXZlbnRLZXkgfHwgJzAtbWVudS0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlS2V5KHByb3BzLCBvcmlnaW5hbEFjdGl2ZUtleSkge1xuICB2YXIgYWN0aXZlS2V5ID0gb3JpZ2luYWxBY3RpdmVLZXk7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgZXZlbnRLZXkgPSBwcm9wcy5ldmVudEtleTtcblxuICBpZiAoYWN0aXZlS2V5KSB7XG4gICAgdmFyIGZvdW5kID0gdm9pZCAwO1xuICAgIGxvb3BNZW51SXRlbShjaGlsZHJlbiwgZnVuY3Rpb24gKGMsIGkpIHtcbiAgICAgIGlmIChjICYmIGMucHJvcHMgJiYgIWMucHJvcHMuZGlzYWJsZWQgJiYgYWN0aXZlS2V5ID09PSBnZXRLZXlGcm9tQ2hpbGRyZW5JbmRleChjLCBldmVudEtleSwgaSkpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZUtleTtcbiAgICB9XG4gIH1cbiAgYWN0aXZlS2V5ID0gbnVsbDtcbiAgaWYgKHByb3BzLmRlZmF1bHRBY3RpdmVGaXJzdCkge1xuICAgIGxvb3BNZW51SXRlbShjaGlsZHJlbiwgZnVuY3Rpb24gKGMsIGkpIHtcbiAgICAgIGlmICghYWN0aXZlS2V5ICYmIGMgJiYgIWMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgYWN0aXZlS2V5ID0gZ2V0S2V5RnJvbUNoaWxkcmVuSW5kZXgoYywgZXZlbnRLZXksIGkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhY3RpdmVLZXk7XG4gIH1cbiAgcmV0dXJuIGFjdGl2ZUtleTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSZWYoYykge1xuICBpZiAoYykge1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5zdGFuY2VBcnJheS5pbmRleE9mKGMpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIC8vIHVwZGF0ZSBjb21wb25lbnQgaWYgaXQncyBhbHJlYWR5IGluc2lkZSBpbnN0YW5jZUFycmF5XG4gICAgICB0aGlzLmluc3RhbmNlQXJyYXlbaW5kZXhdID0gYztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWRkIGNvbXBvbmVudCBpZiBpdCdzIG5vdCBpbiBpbnN0YW5jZUFycmF5IHlldDtcbiAgICAgIHRoaXMuaW5zdGFuY2VBcnJheS5wdXNoKGMpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgdmFyIFN1YlBvcHVwTWVudSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTdWJQb3B1cE1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN1YlBvcHVwTWVudShwcm9wcykge1xuICAgIHZhciBfZXh0ZW5kczM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3ViUG9wdXBNZW51KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgIHByb3BzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZUtleTogX2V4dGVuZHMoe30sIHByb3BzLnN0b3JlLmdldFN0YXRlKCkuYWN0aXZlS2V5LCAoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1twcm9wcy5ldmVudEtleV0gPSBnZXRBY3RpdmVLZXkocHJvcHMsIHByb3BzLmFjdGl2ZUtleSksIF9leHRlbmRzMykpXG4gICAgfSk7XG5cbiAgICBfdGhpcy5pbnN0YW5jZUFycmF5ID0gW107XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU3ViUG9wdXBNZW51LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGludm9rZSBjdXN0b21pemVkIHJlZiB0byBleHBvc2UgY29tcG9uZW50IHRvIG1peGluXG4gICAgaWYgKHRoaXMucHJvcHMubWFudWFsUmVmKSB7XG4gICAgICB0aGlzLnByb3BzLm1hbnVhbFJlZih0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgU3ViUG9wdXBNZW51LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudmlzaWJsZSB8fCBuZXh0UHJvcHMudmlzaWJsZTtcbiAgfTtcblxuICBTdWJQb3B1cE1lbnUucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvcmlnaW5hbEFjdGl2ZUtleSA9ICdhY3RpdmVLZXknIGluIHByb3BzID8gcHJvcHMuYWN0aXZlS2V5IDogcHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5hY3RpdmVLZXlbZ2V0RXZlbnRLZXkocHJvcHMpXTtcbiAgICB2YXIgYWN0aXZlS2V5ID0gZ2V0QWN0aXZlS2V5KHByb3BzLCBvcmlnaW5hbEFjdGl2ZUtleSk7XG4gICAgaWYgKGFjdGl2ZUtleSAhPT0gb3JpZ2luYWxBY3RpdmVLZXkpIHtcbiAgICAgIHVwZGF0ZUFjdGl2ZUtleShwcm9wcy5zdG9yZSwgZ2V0RXZlbnRLZXkocHJvcHMpLCBhY3RpdmVLZXkpO1xuICAgIH0gZWxzZSBpZiAoJ2FjdGl2ZUtleScgaW4gcHJldlByb3BzKSB7XG4gICAgICAvLyBJZiBwcmV2IGFjdGl2ZUtleSBpcyBub3Qgc2FtZSBhcyBjdXJyZW50IGFjdGl2ZUtleSxcbiAgICAgIC8vIHdlIHNob3VsZCBzZXQgaXQuXG4gICAgICB2YXIgcHJldkFjdGl2ZUtleSA9IGdldEFjdGl2ZUtleShwcmV2UHJvcHMsIHByZXZQcm9wcy5hY3RpdmVLZXkpO1xuICAgICAgaWYgKGFjdGl2ZUtleSAhPT0gcHJldkFjdGl2ZUtleSkge1xuICAgICAgICB1cGRhdGVBY3RpdmVLZXkocHJvcHMuc3RvcmUsIGdldEV2ZW50S2V5KHByb3BzKSwgYWN0aXZlS2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gYWxsIGtleWJvYXJkIGV2ZW50cyBjYWxsYmFja3MgcnVuIGZyb20gaGVyZSBhdCBmaXJzdFxuXG5cbiAgU3ViUG9wdXBNZW51LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcy5wcm9wcywgW10pO1xuXG4gICAgdGhpcy5pbnN0YW5jZUFycmF5ID0gW107XG4gICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJvcHMucHJlZml4Q2xzLCBwcm9wcy5jbGFzc05hbWUsIHByb3BzLnByZWZpeENscyArICctJyArIHByb3BzLm1vZGUpO1xuICAgIHZhciBkb21Qcm9wcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgLy8gcm9sZSBjb3VsZCBiZSAnc2VsZWN0JyBhbmQgYnkgZGVmYXVsdCBzZXQgdG8gbWVudVxuICAgICAgcm9sZTogcHJvcHMucm9sZSB8fCAnbWVudSdcbiAgICB9O1xuICAgIGlmIChwcm9wcy5pZCkge1xuICAgICAgZG9tUHJvcHMuaWQgPSBwcm9wcy5pZDtcbiAgICB9XG4gICAgaWYgKHByb3BzLmZvY3VzYWJsZSkge1xuICAgICAgZG9tUHJvcHMudGFiSW5kZXggPSAnMCc7XG4gICAgICBkb21Qcm9wcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bjtcbiAgICB9XG4gICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgZXZlbnRLZXkgPSBwcm9wcy5ldmVudEtleSxcbiAgICAgICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICAgIGxldmVsID0gcHJvcHMubGV2ZWwsXG4gICAgICAgIG1vZGUgPSBwcm9wcy5tb2RlLFxuICAgICAgICBvdmVyZmxvd2VkSW5kaWNhdG9yID0gcHJvcHMub3ZlcmZsb3dlZEluZGljYXRvcixcbiAgICAgICAgdGhlbWUgPSBwcm9wcy50aGVtZTtcblxuICAgIG1lbnVBbGxQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBkZWxldGUgcHJvcHNba2V5XTtcbiAgICB9KTtcblxuICAgIC8vIE90aGVyd2lzZSwgdGhlIHByb3BhZ2F0ZWQgY2xpY2sgZXZlbnQgd2lsbCB0cmlnZ2VyIGFub3RoZXIgb25DbGlja1xuICAgIGRlbGV0ZSBwcm9wcy5vbkNsaWNrO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBET01XcmFwLFxuICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBtb2RlOiBtb2RlLFxuICAgICAgICB0YWc6ICd1bCcsXG4gICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgICBoaWRkZW5DbGFzc05hbWU6IHByZWZpeENscyArICctaGlkZGVuJyxcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgb3ZlcmZsb3dlZEluZGljYXRvcjogb3ZlcmZsb3dlZEluZGljYXRvclxuICAgICAgfSwgZG9tUHJvcHMpLFxuICAgICAgUmVhY3QuQ2hpbGRyZW4ubWFwKHByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoYywgaSkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnJlbmRlck1lbnVJdGVtKGMsIGksIGV2ZW50S2V5IHx8ICcwLW1lbnUtJyk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFN1YlBvcHVwTWVudTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblN1YlBvcHVwTWVudS5wcm9wVHlwZXMgPSB7XG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbk9wZW5DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRlc3Ryb3k6IFByb3BUeXBlcy5mdW5jLFxuICBvcGVuVHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9wZW5BbmltYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgb3BlbktleXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIHBhcmVudE1lbnU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdG9yZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBnZXRTdGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2V0U3RhdGU6IFByb3BUeXBlcy5mdW5jXG4gIH0pLFxuXG4gIC8vIGFkZGluZyBpbiByZWZhY3RvclxuICBmb2N1c2FibGU6IFByb3BUeXBlcy5ib29sLFxuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkZWZhdWx0QWN0aXZlRmlyc3Q6IFByb3BUeXBlcy5ib29sLFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdGVkS2V5czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIGRlZmF1bHRTZWxlY3RlZEtleXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBkZWZhdWx0T3BlbktleXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBsZXZlbDogUHJvcFR5cGVzLm51bWJlcixcbiAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICd2ZXJ0aWNhbC1sZWZ0JywgJ3ZlcnRpY2FsLXJpZ2h0JywgJ2lubGluZSddKSxcbiAgdHJpZ2dlclN1Yk1lbnVBY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ2NsaWNrJywgJ2hvdmVyJ10pLFxuICBpbmxpbmVJbmRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgbWFudWFsUmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXRlbUljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pLFxuICBleHBhbmRJY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKVxufTtcblN1YlBvcHVwTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHByZWZpeENsczogJ3JjLW1lbnUnLFxuICBjbGFzc05hbWU6ICcnLFxuICBtb2RlOiAndmVydGljYWwnLFxuICBsZXZlbDogMSxcbiAgaW5saW5lSW5kZW50OiAyNCxcbiAgdmlzaWJsZTogdHJ1ZSxcbiAgZm9jdXNhYmxlOiB0cnVlLFxuICBzdHlsZToge30sXG4gIG1hbnVhbFJlZjogbm9vcFxufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXMzID0gdGhpcztcblxuICB0aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlLCBjYWxsYmFjaykge1xuICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgIHZhciBoYW5kbGVkID0gdm9pZCAwO1xuICAgIF90aGlzMy5nZXRGbGF0SW5zdGFuY2VBcnJheSgpLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgaWYgKG9iaiAmJiBvYmoucHJvcHMuYWN0aXZlICYmIG9iai5vbktleURvd24pIHtcbiAgICAgICAgaGFuZGxlZCA9IG9iai5vbktleURvd24oZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICB2YXIgYWN0aXZlSXRlbSA9IG51bGw7XG4gICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuVVAgfHwga2V5Q29kZSA9PT0gS2V5Q29kZS5ET1dOKSB7XG4gICAgICBhY3RpdmVJdGVtID0gX3RoaXMzLnN0ZXAoa2V5Q29kZSA9PT0gS2V5Q29kZS5VUCA/IC0xIDogMSk7XG4gICAgfVxuICAgIGlmIChhY3RpdmVJdGVtKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB1cGRhdGVBY3RpdmVLZXkoX3RoaXMzLnByb3BzLnN0b3JlLCBnZXRFdmVudEtleShfdGhpczMucHJvcHMpLCBhY3RpdmVJdGVtLnByb3BzLmV2ZW50S2V5KTtcblxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayhhY3RpdmVJdGVtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25JdGVtSG92ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBrZXkgPSBlLmtleSxcbiAgICAgICAgaG92ZXIgPSBlLmhvdmVyO1xuXG4gICAgdXBkYXRlQWN0aXZlS2V5KF90aGlzMy5wcm9wcy5zdG9yZSwgZ2V0RXZlbnRLZXkoX3RoaXMzLnByb3BzKSwgaG92ZXIgPyBrZXkgOiBudWxsKTtcbiAgfTtcblxuICB0aGlzLm9uRGVzZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0SW5mbykge1xuICAgIF90aGlzMy5wcm9wcy5vbkRlc2VsZWN0KHNlbGVjdEluZm8pO1xuICB9O1xuXG4gIHRoaXMub25TZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0SW5mbykge1xuICAgIF90aGlzMy5wcm9wcy5vblNlbGVjdChzZWxlY3RJbmZvKTtcbiAgfTtcblxuICB0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzMy5wcm9wcy5vbkNsaWNrKGUpO1xuICB9O1xuXG4gIHRoaXMub25PcGVuQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBfdGhpczMucHJvcHMub25PcGVuQ2hhbmdlKGUpO1xuICB9O1xuXG4gIHRoaXMub25EZXN0cm95ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgX3RoaXMzLnByb3BzLm9uRGVzdHJveShrZXkpO1xuICB9O1xuXG4gIHRoaXMuZ2V0RmxhdEluc3RhbmNlQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMy5pbnN0YW5jZUFycmF5O1xuICB9O1xuXG4gIHRoaXMuZ2V0T3BlblRyYW5zaXRpb25OYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczMucHJvcHMub3BlblRyYW5zaXRpb25OYW1lO1xuICB9O1xuXG4gIHRoaXMuc3RlcCA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfdGhpczMuZ2V0RmxhdEluc3RhbmNlQXJyYXkoKTtcbiAgICB2YXIgYWN0aXZlS2V5ID0gX3RoaXMzLnByb3BzLnN0b3JlLmdldFN0YXRlKCkuYWN0aXZlS2V5W2dldEV2ZW50S2V5KF90aGlzMy5wcm9wcyldO1xuICAgIHZhciBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgaWYgKCFsZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uIDwgMCkge1xuICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoKS5yZXZlcnNlKCk7XG4gICAgfVxuICAgIC8vIGZpbmQgY3VycmVudCBhY3RpdmVJbmRleFxuICAgIHZhciBhY3RpdmVJbmRleCA9IC0xO1xuICAgIGNoaWxkcmVuLmV2ZXJ5KGZ1bmN0aW9uIChjLCBjaSkge1xuICAgICAgaWYgKGMgJiYgYy5wcm9wcy5ldmVudEtleSA9PT0gYWN0aXZlS2V5KSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gY2k7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIGlmICghX3RoaXMzLnByb3BzLmRlZmF1bHRBY3RpdmVGaXJzdCAmJiBhY3RpdmVJbmRleCAhPT0gLTEgJiYgYWxsRGlzYWJsZWQoY2hpbGRyZW4uc2xpY2UoYWN0aXZlSW5kZXgsIGxlbiAtIDEpKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdmFyIHN0YXJ0ID0gKGFjdGl2ZUluZGV4ICsgMSkgJSBsZW47XG4gICAgdmFyIGkgPSBzdGFydDtcblxuICAgIGRvIHtcbiAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKCFjaGlsZCB8fCBjaGlsZC5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICBpID0gKGkgKyAxKSAlIGxlbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChpICE9PSBzdGFydCk7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB0aGlzLnJlbmRlckNvbW1vbk1lbnVJdGVtID0gZnVuY3Rpb24gKGNoaWxkLCBpLCBleHRyYVByb3BzKSB7XG4gICAgdmFyIHN0YXRlID0gX3RoaXMzLnByb3BzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgdmFyIHByb3BzID0gX3RoaXMzLnByb3BzO1xuICAgIHZhciBrZXkgPSBnZXRLZXlGcm9tQ2hpbGRyZW5JbmRleChjaGlsZCwgcHJvcHMuZXZlbnRLZXksIGkpO1xuICAgIHZhciBjaGlsZFByb3BzID0gY2hpbGQucHJvcHM7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTE1MTcjaXNzdWVjb21tZW50LTQ3NzQwMzA1NVxuICAgIGlmICghY2hpbGRQcm9wcyB8fCB0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gICAgdmFyIGlzQWN0aXZlID0ga2V5ID09PSBzdGF0ZS5hY3RpdmVLZXk7XG4gICAgdmFyIG5ld0NoaWxkUHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICBtb2RlOiBjaGlsZFByb3BzLm1vZGUgfHwgcHJvcHMubW9kZSxcbiAgICAgIGxldmVsOiBwcm9wcy5sZXZlbCxcbiAgICAgIGlubGluZUluZGVudDogcHJvcHMuaW5saW5lSW5kZW50LFxuICAgICAgcmVuZGVyTWVudUl0ZW06IF90aGlzMy5yZW5kZXJNZW51SXRlbSxcbiAgICAgIHJvb3RQcmVmaXhDbHM6IHByb3BzLnByZWZpeENscyxcbiAgICAgIGluZGV4OiBpLFxuICAgICAgcGFyZW50TWVudTogcHJvcHMucGFyZW50TWVudSxcbiAgICAgIC8vIGN1c3RvbWl6ZWQgcmVmIGZ1bmN0aW9uLCBuZWVkIHRvIGJlIGludm9rZWQgbWFudWFsbHkgaW4gY2hpbGQncyBjb21wb25lbnREaWRNb3VudFxuICAgICAgbWFudWFsUmVmOiBjaGlsZFByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKGNoaWxkLnJlZiwgc2F2ZVJlZi5iaW5kKF90aGlzMykpLFxuICAgICAgZXZlbnRLZXk6IGtleSxcbiAgICAgIGFjdGl2ZTogIWNoaWxkUHJvcHMuZGlzYWJsZWQgJiYgaXNBY3RpdmUsXG4gICAgICBtdWx0aXBsZTogcHJvcHMubXVsdGlwbGUsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgKGNoaWxkUHJvcHMub25DbGljayB8fCBub29wKShlKTtcbiAgICAgICAgX3RoaXMzLm9uQ2xpY2soZSk7XG4gICAgICB9LFxuICAgICAgb25JdGVtSG92ZXI6IF90aGlzMy5vbkl0ZW1Ib3ZlcixcbiAgICAgIG9wZW5UcmFuc2l0aW9uTmFtZTogX3RoaXMzLmdldE9wZW5UcmFuc2l0aW9uTmFtZSgpLFxuICAgICAgb3BlbkFuaW1hdGlvbjogcHJvcHMub3BlbkFuaW1hdGlvbixcbiAgICAgIHN1Yk1lbnVPcGVuRGVsYXk6IHByb3BzLnN1Yk1lbnVPcGVuRGVsYXksXG4gICAgICBzdWJNZW51Q2xvc2VEZWxheTogcHJvcHMuc3ViTWVudUNsb3NlRGVsYXksXG4gICAgICBmb3JjZVN1Yk1lbnVSZW5kZXI6IHByb3BzLmZvcmNlU3ViTWVudVJlbmRlcixcbiAgICAgIG9uT3BlbkNoYW5nZTogX3RoaXMzLm9uT3BlbkNoYW5nZSxcbiAgICAgIG9uRGVzZWxlY3Q6IF90aGlzMy5vbkRlc2VsZWN0LFxuICAgICAgb25TZWxlY3Q6IF90aGlzMy5vblNlbGVjdCxcbiAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwcm9wcy5idWlsdGluUGxhY2VtZW50cyxcbiAgICAgIGl0ZW1JY29uOiBjaGlsZFByb3BzLml0ZW1JY29uIHx8IF90aGlzMy5wcm9wcy5pdGVtSWNvbixcbiAgICAgIGV4cGFuZEljb246IGNoaWxkUHJvcHMuZXhwYW5kSWNvbiB8fCBfdGhpczMucHJvcHMuZXhwYW5kSWNvblxuICAgIH0sIGV4dHJhUHJvcHMpO1xuICAgIC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTM5NDNcbiAgICBpZiAocHJvcHMubW9kZSA9PT0gJ2lubGluZScgfHwgaXNNb2JpbGVEZXZpY2UoKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy50cmlnZ2VyU3ViTWVudUFjdGlvbiA9ICdjbGljayc7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0NoaWxkUHJvcHMpO1xuICB9O1xuXG4gIHRoaXMucmVuZGVyTWVudUl0ZW0gPSBmdW5jdGlvbiAoYywgaSwgc3ViTWVudUtleSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghYykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBzdGF0ZSA9IF90aGlzMy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgIHZhciBleHRyYVByb3BzID0ge1xuICAgICAgb3BlbktleXM6IHN0YXRlLm9wZW5LZXlzLFxuICAgICAgc2VsZWN0ZWRLZXlzOiBzdGF0ZS5zZWxlY3RlZEtleXMsXG4gICAgICB0cmlnZ2VyU3ViTWVudUFjdGlvbjogX3RoaXMzLnByb3BzLnRyaWdnZXJTdWJNZW51QWN0aW9uLFxuICAgICAgc3ViTWVudUtleTogc3ViTWVudUtleVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzMy5yZW5kZXJDb21tb25NZW51SXRlbShjLCBpLCBleHRyYVByb3BzKTtcbiAgfTtcbn07XG5cbnZhciBjb25uZWN0ZWQgPSBjb25uZWN0KCkoU3ViUG9wdXBNZW51KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdGVkOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQcm92aWRlciwgY3JlYXRlIH0gZnJvbSAnbWluaS1zdG9yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFN1YlBvcHVwTWVudSwgZ2V0QWN0aXZlS2V5IH0gZnJvbSAnLi9TdWJQb3B1cE1lbnUnO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBNZW51ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1lbnUocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICBfdGhpcy5pc1Jvb3RNZW51ID0gdHJ1ZTtcblxuICAgIHZhciBzZWxlY3RlZEtleXMgPSBwcm9wcy5kZWZhdWx0U2VsZWN0ZWRLZXlzO1xuICAgIHZhciBvcGVuS2V5cyA9IHByb3BzLmRlZmF1bHRPcGVuS2V5cztcbiAgICBpZiAoJ3NlbGVjdGVkS2V5cycgaW4gcHJvcHMpIHtcbiAgICAgIHNlbGVjdGVkS2V5cyA9IHByb3BzLnNlbGVjdGVkS2V5cyB8fCBbXTtcbiAgICB9XG4gICAgaWYgKCdvcGVuS2V5cycgaW4gcHJvcHMpIHtcbiAgICAgIG9wZW5LZXlzID0gcHJvcHMub3BlbktleXMgfHwgW107XG4gICAgfVxuXG4gICAgX3RoaXMuc3RvcmUgPSBjcmVhdGUoe1xuICAgICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXMsXG4gICAgICBvcGVuS2V5czogb3BlbktleXMsXG4gICAgICBhY3RpdmVLZXk6IHsgJzAtbWVudS0nOiBnZXRBY3RpdmVLZXkocHJvcHMsIHByb3BzLmFjdGl2ZUtleSkgfVxuICAgIH0pO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIE1lbnUucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVNaW5pU3RvcmUoKTtcbiAgfTtcblxuICBNZW51LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVNaW5pU3RvcmUoKTtcbiAgfTtcblxuICAvLyBvbktleURvd24gbmVlZHMgdG8gYmUgZXhwb3NlZCBhcyBhIGluc3RhbmNlIG1ldGhvZFxuICAvLyBlLmcuLCBpbiByYy1zZWxlY3QsIHdlIG5lZWQgdG8gbmF2aWdhdGUgbWVudSBpdGVtIHdoaWxlXG4gIC8vIGN1cnJlbnQgYWN0aXZlIGl0ZW0gaXMgcmMtc2VsZWN0IGlucHV0IGJveCByYXRoZXIgdGhhbiB0aGUgbWVudSBpdHNlbGZcblxuXG4gIE1lbnUucHJvdG90eXBlLnVwZGF0ZU1pbmlTdG9yZSA9IGZ1bmN0aW9uIHVwZGF0ZU1pbmlTdG9yZSgpIHtcbiAgICBpZiAoJ3NlbGVjdGVkS2V5cycgaW4gdGhpcy5wcm9wcykge1xuICAgICAgdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkS2V5czogdGhpcy5wcm9wcy5zZWxlY3RlZEtleXMgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoJ29wZW5LZXlzJyBpbiB0aGlzLnByb3BzKSB7XG4gICAgICB0aGlzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbktleXM6IHRoaXMucHJvcHMub3BlbktleXMgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBNZW51LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcy5wcm9wcywgW10pO1xuXG4gICAgcHJvcHMuY2xhc3NOYW1lICs9ICcgJyArIHByb3BzLnByZWZpeENscyArICctcm9vdCc7XG4gICAgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgIG9uT3BlbkNoYW5nZTogdGhpcy5vbk9wZW5DaGFuZ2UsXG4gICAgICBvbkRlc2VsZWN0OiB0aGlzLm9uRGVzZWxlY3QsXG4gICAgICBvblNlbGVjdDogdGhpcy5vblNlbGVjdCxcbiAgICAgIG9wZW5UcmFuc2l0aW9uTmFtZTogdGhpcy5nZXRPcGVuVHJhbnNpdGlvbk5hbWUoKSxcbiAgICAgIHBhcmVudE1lbnU6IHRoaXNcbiAgICB9KTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFByb3ZpZGVyLFxuICAgICAgeyBzdG9yZTogdGhpcy5zdG9yZSB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgU3ViUG9wdXBNZW51LFxuICAgICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5pbm5lck1lbnUgPSBjO1xuICAgICAgICAgIH0gfSksXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBNZW51O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgZGVmYXVsdFNlbGVjdGVkS2V5czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIGRlZmF1bHRBY3RpdmVGaXJzdDogUHJvcFR5cGVzLmJvb2wsXG4gIHNlbGVjdGVkS2V5czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIGRlZmF1bHRPcGVuS2V5czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIG9wZW5LZXlzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgbW9kZTogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICd2ZXJ0aWNhbC1sZWZ0JywgJ3ZlcnRpY2FsLXJpZ2h0JywgJ2lubGluZSddKSxcbiAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkRlc2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25EZXN0cm95OiBQcm9wVHlwZXMuZnVuYyxcbiAgb3BlblRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcGVuQW5pbWF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIHN1Yk1lbnVPcGVuRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIHN1Yk1lbnVDbG9zZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBmb3JjZVN1Yk1lbnVSZW5kZXI6IFByb3BUeXBlcy5ib29sLFxuICB0cmlnZ2VyU3ViTWVudUFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGV2ZWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgYnVpbHRpblBsYWNlbWVudHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGl0ZW1JY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgZXhwYW5kSWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG4gIG92ZXJmbG93ZWRJbmRpY2F0b3I6IFByb3BUeXBlcy5ub2RlXG59O1xuTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlbGVjdGFibGU6IHRydWUsXG4gIG9uQ2xpY2s6IG5vb3AsXG4gIG9uU2VsZWN0OiBub29wLFxuICBvbk9wZW5DaGFuZ2U6IG5vb3AsXG4gIG9uRGVzZWxlY3Q6IG5vb3AsXG4gIGRlZmF1bHRTZWxlY3RlZEtleXM6IFtdLFxuICBkZWZhdWx0T3BlbktleXM6IFtdLFxuICBzdWJNZW51T3BlbkRlbGF5OiAwLjEsXG4gIHN1Yk1lbnVDbG9zZURlbGF5OiAwLjEsXG4gIHRyaWdnZXJTdWJNZW51QWN0aW9uOiAnaG92ZXInLFxuICBwcmVmaXhDbHM6ICdyYy1tZW51JyxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgbW9kZTogJ3ZlcnRpY2FsJyxcbiAgc3R5bGU6IHt9LFxuICBidWlsdGluUGxhY2VtZW50czoge30sXG4gIG92ZXJmbG93ZWRJbmRpY2F0b3I6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ3NwYW4nLFxuICAgIG51bGwsXG4gICAgJ1xceEI3XFx4QjdcXHhCNydcbiAgKVxufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXMzID0gdGhpcztcblxuICB0aGlzLm9uU2VsZWN0ID0gZnVuY3Rpb24gKHNlbGVjdEluZm8pIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczMucHJvcHM7XG4gICAgaWYgKHByb3BzLnNlbGVjdGFibGUpIHtcbiAgICAgIC8vIHJvb3QgbWVudVxuICAgICAgdmFyIHNlbGVjdGVkS2V5cyA9IF90aGlzMy5zdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGVkS2V5cztcbiAgICAgIHZhciBzZWxlY3RlZEtleSA9IHNlbGVjdEluZm8ua2V5O1xuICAgICAgaWYgKHByb3BzLm11bHRpcGxlKSB7XG4gICAgICAgIHNlbGVjdGVkS2V5cyA9IHNlbGVjdGVkS2V5cy5jb25jYXQoW3NlbGVjdGVkS2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZEtleXMgPSBbc2VsZWN0ZWRLZXldO1xuICAgICAgfVxuICAgICAgaWYgKCEoJ3NlbGVjdGVkS2V5cycgaW4gcHJvcHMpKSB7XG4gICAgICAgIF90aGlzMy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwcm9wcy5vblNlbGVjdChfZXh0ZW5kcyh7fSwgc2VsZWN0SW5mbywge1xuICAgICAgICBzZWxlY3RlZEtleXM6IHNlbGVjdGVkS2V5c1xuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzMy5wcm9wcy5vbkNsaWNrKGUpO1xuICB9O1xuXG4gIHRoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUsIGNhbGxiYWNrKSB7XG4gICAgX3RoaXMzLmlubmVyTWVudS5nZXRXcmFwcGVkSW5zdGFuY2UoKS5vbktleURvd24oZSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIHRoaXMub25PcGVuQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXMzLnByb3BzO1xuICAgIHZhciBvcGVuS2V5cyA9IF90aGlzMy5zdG9yZS5nZXRTdGF0ZSgpLm9wZW5LZXlzLmNvbmNhdCgpO1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIHByb2Nlc3NTaW5nbGUgPSBmdW5jdGlvbiBwcm9jZXNzU2luZ2xlKGUpIHtcbiAgICAgIHZhciBvbmVDaGFuZ2VkID0gZmFsc2U7XG4gICAgICBpZiAoZS5vcGVuKSB7XG4gICAgICAgIG9uZUNoYW5nZWQgPSBvcGVuS2V5cy5pbmRleE9mKGUua2V5KSA9PT0gLTE7XG4gICAgICAgIGlmIChvbmVDaGFuZ2VkKSB7XG4gICAgICAgICAgb3BlbktleXMucHVzaChlLmtleSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpbmRleCA9IG9wZW5LZXlzLmluZGV4T2YoZS5rZXkpO1xuICAgICAgICBvbmVDaGFuZ2VkID0gaW5kZXggIT09IC0xO1xuICAgICAgICBpZiAob25lQ2hhbmdlZCkge1xuICAgICAgICAgIG9wZW5LZXlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZWQgPSBjaGFuZ2VkIHx8IG9uZUNoYW5nZWQ7XG4gICAgfTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgIC8vIGJhdGNoIGNoYW5nZSBjYWxsXG4gICAgICBldmVudC5mb3JFYWNoKHByb2Nlc3NTaW5nbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzU2luZ2xlKGV2ZW50KTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIGlmICghKCdvcGVuS2V5cycgaW4gX3RoaXMzLnByb3BzKSkge1xuICAgICAgICBfdGhpczMuc3RvcmUuc2V0U3RhdGUoeyBvcGVuS2V5czogb3BlbktleXMgfSk7XG4gICAgICB9XG4gICAgICBwcm9wcy5vbk9wZW5DaGFuZ2Uob3BlbktleXMpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uRGVzZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0SW5mbykge1xuICAgIHZhciBwcm9wcyA9IF90aGlzMy5wcm9wcztcbiAgICBpZiAocHJvcHMuc2VsZWN0YWJsZSkge1xuICAgICAgdmFyIHNlbGVjdGVkS2V5cyA9IF90aGlzMy5zdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGVkS2V5cy5jb25jYXQoKTtcbiAgICAgIHZhciBzZWxlY3RlZEtleSA9IHNlbGVjdEluZm8ua2V5O1xuICAgICAgdmFyIGluZGV4ID0gc2VsZWN0ZWRLZXlzLmluZGV4T2Yoc2VsZWN0ZWRLZXkpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBzZWxlY3RlZEtleXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGlmICghKCdzZWxlY3RlZEtleXMnIGluIHByb3BzKSkge1xuICAgICAgICBfdGhpczMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICAgIHNlbGVjdGVkS2V5czogc2VsZWN0ZWRLZXlzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcHJvcHMub25EZXNlbGVjdChfZXh0ZW5kcyh7fSwgc2VsZWN0SW5mbywge1xuICAgICAgICBzZWxlY3RlZEtleXM6IHNlbGVjdGVkS2V5c1xuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmdldE9wZW5UcmFuc2l0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczMucHJvcHM7XG4gICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMub3BlblRyYW5zaXRpb25OYW1lO1xuICAgIHZhciBhbmltYXRpb25OYW1lID0gcHJvcHMub3BlbkFuaW1hdGlvbjtcbiAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIHR5cGVvZiBhbmltYXRpb25OYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5wcmVmaXhDbHMgKyAnLW9wZW4tJyArIGFuaW1hdGlvbk5hbWU7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAncmMtdXRpbC9lcy9LZXlDb2RlJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHNjcm9sbEludG9WaWV3IGZyb20gJ2RvbS1zY3JvbGwtaW50by12aWV3JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdtaW5pLXN0b3JlJztcbmltcG9ydCB7IG5vb3AsIG1lbnVBbGxQcm9wcyB9IGZyb20gJy4vdXRpbCc7XG5cbi8qIGVzbGludCByZWFjdC9uby1pcy1tb3VudGVkOjAgKi9cblxuZXhwb3J0IHZhciBNZW51SXRlbSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNZW51SXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTWVudUl0ZW0ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudUl0ZW0pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5FTlRFUikge1xuICAgICAgICBfdGhpcy5vbkNsaWNrKGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGV2ZW50S2V5ID0gX3RoaXMkcHJvcHMuZXZlbnRLZXksXG4gICAgICAgICAgb25JdGVtSG92ZXIgPSBfdGhpcyRwcm9wcy5vbkl0ZW1Ib3ZlcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfdGhpcyRwcm9wcy5vbk1vdXNlTGVhdmU7XG5cbiAgICAgIG9uSXRlbUhvdmVyKHtcbiAgICAgICAga2V5OiBldmVudEtleSxcbiAgICAgICAgaG92ZXI6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIG9uTW91c2VMZWF2ZSh7XG4gICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgIGRvbUV2ZW50OiBlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBldmVudEtleSA9IF90aGlzJHByb3BzMi5ldmVudEtleSxcbiAgICAgICAgICBvbkl0ZW1Ib3ZlciA9IF90aGlzJHByb3BzMi5vbkl0ZW1Ib3ZlcixcbiAgICAgICAgICBvbk1vdXNlRW50ZXIgPSBfdGhpcyRwcm9wczIub25Nb3VzZUVudGVyO1xuXG4gICAgICBvbkl0ZW1Ib3Zlcih7XG4gICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgIGhvdmVyOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIG9uTW91c2VFbnRlcih7XG4gICAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICAgIGRvbUV2ZW50OiBlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZXZlbnRLZXkgPSBfdGhpcyRwcm9wczMuZXZlbnRLZXksXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczMubXVsdGlwbGUsXG4gICAgICAgICAgb25DbGljayA9IF90aGlzJHByb3BzMy5vbkNsaWNrLFxuICAgICAgICAgIG9uU2VsZWN0ID0gX3RoaXMkcHJvcHMzLm9uU2VsZWN0LFxuICAgICAgICAgIG9uRGVzZWxlY3QgPSBfdGhpcyRwcm9wczMub25EZXNlbGVjdCxcbiAgICAgICAgICBpc1NlbGVjdGVkID0gX3RoaXMkcHJvcHMzLmlzU2VsZWN0ZWQ7XG5cbiAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgICBrZXlQYXRoOiBbZXZlbnRLZXldLFxuICAgICAgICBpdGVtOiBfdGhpcyxcbiAgICAgICAgZG9tRXZlbnQ6IGVcbiAgICAgIH07XG4gICAgICBvbkNsaWNrKGluZm8pO1xuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgb25EZXNlbGVjdChpbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvblNlbGVjdChpbmZvKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghaXNTZWxlY3RlZCkge1xuICAgICAgICBvblNlbGVjdChpbmZvKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgTWVudUl0ZW0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gaW52b2tlIGN1c3RvbWl6ZWQgcmVmIHRvIGV4cG9zZSBjb21wb25lbnQgdG8gbWl4aW5cbiAgICB0aGlzLmNhbGxSZWYoKTtcbiAgfTtcblxuICBNZW51SXRlbS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgc2Nyb2xsSW50b1ZpZXcoUmVhY3RET00uZmluZERPTU5vZGUodGhpcyksIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucHJvcHMucGFyZW50TWVudSksIHtcbiAgICAgICAgb25seVNjcm9sbElmTmVlZGVkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jYWxsUmVmKCk7XG4gIH07XG5cbiAgTWVudUl0ZW0ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJvcHMub25EZXN0cm95KSB7XG4gICAgICBwcm9wcy5vbkRlc3Ryb3kocHJvcHMuZXZlbnRLZXkpO1xuICAgIH1cbiAgfTtcblxuICBNZW51SXRlbS5wcm90b3R5cGUuZ2V0UHJlZml4Q2xzID0gZnVuY3Rpb24gZ2V0UHJlZml4Q2xzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnJvb3RQcmVmaXhDbHMgKyAnLWl0ZW0nO1xuICB9O1xuXG4gIE1lbnVJdGVtLnByb3RvdHlwZS5nZXRBY3RpdmVDbGFzc05hbWUgPSBmdW5jdGlvbiBnZXRBY3RpdmVDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJlZml4Q2xzKCkgKyAnLWFjdGl2ZSc7XG4gIH07XG5cbiAgTWVudUl0ZW0ucHJvdG90eXBlLmdldFNlbGVjdGVkQ2xhc3NOYW1lID0gZnVuY3Rpb24gZ2V0U2VsZWN0ZWRDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJlZml4Q2xzKCkgKyAnLXNlbGVjdGVkJztcbiAgfTtcblxuICBNZW51SXRlbS5wcm90b3R5cGUuZ2V0RGlzYWJsZWRDbGFzc05hbWUgPSBmdW5jdGlvbiBnZXREaXNhYmxlZENsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcmVmaXhDbHMoKSArICctZGlzYWJsZWQnO1xuICB9O1xuXG4gIE1lbnVJdGVtLnByb3RvdHlwZS5jYWxsUmVmID0gZnVuY3Rpb24gY2FsbFJlZigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYW51YWxSZWYpIHtcbiAgICAgIHRoaXMucHJvcHMubWFudWFsUmVmKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBNZW51SXRlbS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyh0aGlzLmdldFByZWZpeENscygpLCBwcm9wcy5jbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfY2xhc3NOYW1lc1t0aGlzLmdldEFjdGl2ZUNsYXNzTmFtZSgpXSA9ICFwcm9wcy5kaXNhYmxlZCAmJiBwcm9wcy5hY3RpdmUsIF9jbGFzc05hbWVzW3RoaXMuZ2V0U2VsZWN0ZWRDbGFzc05hbWUoKV0gPSBwcm9wcy5pc1NlbGVjdGVkLCBfY2xhc3NOYW1lc1t0aGlzLmdldERpc2FibGVkQ2xhc3NOYW1lKCldID0gcHJvcHMuZGlzYWJsZWQsIF9jbGFzc05hbWVzKSk7XG4gICAgdmFyIGF0dHJzID0gX2V4dGVuZHMoe30sIHByb3BzLmF0dHJpYnV0ZSwge1xuICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAvLyBzZXQgdG8gbWVudWl0ZW0gYnkgZGVmYXVsdFxuICAgICAgcm9sZTogcHJvcHMucm9sZSB8fCAnbWVudWl0ZW0nLFxuICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlZFxuICAgIH0pO1xuXG4gICAgaWYgKHByb3BzLnJvbGUgPT09ICdvcHRpb24nKSB7XG4gICAgICAvLyBvdmVyd3JpdGUgdG8gb3B0aW9uXG4gICAgICBhdHRycyA9IF9leHRlbmRzKHt9LCBhdHRycywge1xuICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBwcm9wcy5pc1NlbGVjdGVkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLnJvbGUgPT09IG51bGwgfHwgcHJvcHMucm9sZSA9PT0gJ25vbmUnKSB7XG4gICAgICAvLyBzb21ldGltZXMgd2Ugd2FudCB0byBzcGVjaWZ5IHJvbGUgaW5zaWRlIDxsaS8+IGVsZW1lbnRcbiAgICAgIC8vIDxsaT48YSByb2xlPSdtZW51aXRlbSc+TGluazwvYT48L2xpPiB3b3VsZCBiZSBhIGdvb2QgZXhhbXBsZVxuICAgICAgLy8gaW4gdGhpcyBjYXNlIHRoZSByb2xlIG9uIDxsaS8+IHNob3VsZCBiZSBcIm5vbmVcIiB0b1xuICAgICAgLy8gcmVtb3ZlIHRoZSBpbXBsaWVkIGxpc3RpdGVtIHJvbGUuXG4gICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLTEuMS9leGFtcGxlcy9tZW51YmFyL21lbnViYXItMS9tZW51YmFyLTEuaHRtbFxuICAgICAgYXR0cnMucm9sZSA9ICdub25lJztcbiAgICB9XG4gICAgLy8gSW4gY2FzZSB0aGF0IG9uQ2xpY2svb25Nb3VzZUxlYXZlL29uTW91c2VFbnRlciBpcyBwYXNzZWQgZG93biBmcm9tIG93bmVyXG4gICAgdmFyIG1vdXNlRXZlbnQgPSB7XG4gICAgICBvbkNsaWNrOiBwcm9wcy5kaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBvbk1vdXNlTGVhdmU6IHByb3BzLmRpc2FibGVkID8gbnVsbCA6IHRoaXMub25Nb3VzZUxlYXZlLFxuICAgICAgb25Nb3VzZUVudGVyOiBwcm9wcy5kaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uTW91c2VFbnRlclxuICAgIH07XG4gICAgdmFyIHN0eWxlID0gX2V4dGVuZHMoe30sIHByb3BzLnN0eWxlKTtcbiAgICBpZiAocHJvcHMubW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHN0eWxlLnBhZGRpbmdMZWZ0ID0gcHJvcHMuaW5saW5lSW5kZW50ICogcHJvcHMubGV2ZWw7XG4gICAgfVxuICAgIG1lbnVBbGxQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBkZWxldGUgcHJvcHNba2V5XTtcbiAgICB9KTtcbiAgICB2YXIgaWNvbiA9IHRoaXMucHJvcHMuaXRlbUljb247XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLml0ZW1JY29uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpY29uID0gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLml0ZW1JY29uLCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnbGknLFxuICAgICAgX2V4dGVuZHMoe30sIHByb3BzLCBhdHRycywgbW91c2VFdmVudCwge1xuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH0pLFxuICAgICAgcHJvcHMuY2hpbGRyZW4sXG4gICAgICBpY29uXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gTWVudUl0ZW07XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbk1lbnVJdGVtLnByb3BUeXBlcyA9IHtcbiAgYXR0cmlidXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuICByb290UHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBldmVudEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIHNlbGVjdGVkS2V5czogUHJvcFR5cGVzLmFycmF5LFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkl0ZW1Ib3ZlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBwYXJlbnRNZW51OiBQcm9wVHlwZXMub2JqZWN0LFxuICBvbkRlc3Ryb3k6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBtYW51YWxSZWY6IFByb3BUeXBlcy5mdW5jLFxuICBpdGVtSWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSlcbn07XG5NZW51SXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uU2VsZWN0OiBub29wLFxuICBvbk1vdXNlRW50ZXI6IG5vb3AsXG4gIG9uTW91c2VMZWF2ZTogbm9vcCxcbiAgbWFudWFsUmVmOiBub29wXG59O1xuTWVudUl0ZW0uaXNNZW51SXRlbSA9IHRydWU7XG5cbnZhciBjb25uZWN0ZWQgPSBjb25uZWN0KGZ1bmN0aW9uIChfcmVmLCBfcmVmMikge1xuICB2YXIgYWN0aXZlS2V5ID0gX3JlZi5hY3RpdmVLZXksXG4gICAgICBzZWxlY3RlZEtleXMgPSBfcmVmLnNlbGVjdGVkS2V5cztcbiAgdmFyIGV2ZW50S2V5ID0gX3JlZjIuZXZlbnRLZXksXG4gICAgICBzdWJNZW51S2V5ID0gX3JlZjIuc3ViTWVudUtleTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmU6IGFjdGl2ZUtleVtzdWJNZW51S2V5XSA9PT0gZXZlbnRLZXksXG4gICAgaXNTZWxlY3RlZDogc2VsZWN0ZWRLZXlzLmluZGV4T2YoZXZlbnRLZXkpICE9PSAtMVxuICB9O1xufSkoTWVudUl0ZW0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0ZWQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1lbnVBbGxQcm9wcyB9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBNZW51SXRlbUdyb3VwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1lbnVJdGVtR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1lbnVJdGVtR3JvdXAoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZW51SXRlbUdyb3VwKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5yZW5kZXJJbm5lck1lbnVJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHJlbmRlck1lbnVJdGVtID0gX3RoaXMkcHJvcHMucmVuZGVyTWVudUl0ZW0sXG4gICAgICAgICAgaW5kZXggPSBfdGhpcyRwcm9wcy5pbmRleDtcblxuICAgICAgcmV0dXJuIHJlbmRlck1lbnVJdGVtKGl0ZW0sIGluZGV4LCBfdGhpcy5wcm9wcy5zdWJNZW51S2V5KTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIE1lbnVJdGVtR3JvdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcy5wcm9wcywgW10pO1xuXG4gICAgdmFyIF9wcm9wcyRjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcyRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3Byb3BzJGNsYXNzTmFtZSxcbiAgICAgICAgcm9vdFByZWZpeENscyA9IHByb3BzLnJvb3RQcmVmaXhDbHM7XG5cbiAgICB2YXIgdGl0bGVDbGFzc05hbWUgPSByb290UHJlZml4Q2xzICsgJy1pdGVtLWdyb3VwLXRpdGxlJztcbiAgICB2YXIgbGlzdENsYXNzTmFtZSA9IHJvb3RQcmVmaXhDbHMgKyAnLWl0ZW0tZ3JvdXAtbGlzdCc7XG4gICAgdmFyIHRpdGxlID0gcHJvcHMudGl0bGUsXG4gICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICBtZW51QWxsUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gZGVsZXRlIHByb3BzW2tleV07XG4gICAgfSk7XG5cbiAgICAvLyBTZXQgb25DbGljayB0byBudWxsLCB0byBpZ25vcmUgcHJvcGFnYXRlZCBvbkNsaWNrIGV2ZW50XG4gICAgZGVsZXRlIHByb3BzLm9uQ2xpY2s7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnICcgKyByb290UHJlZml4Q2xzICsgJy1pdGVtLWdyb3VwJyB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0aXRsZUNsYXNzTmFtZSxcbiAgICAgICAgICB0aXRsZTogdHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyA/IHRpdGxlIDogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlXG4gICAgICApLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3VsJyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGxpc3RDbGFzc05hbWUgfSxcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlcklubmVyTWVudUl0ZW0pXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gTWVudUl0ZW1Hcm91cDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuTWVudUl0ZW1Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIHJlbmRlck1lbnVJdGVtOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3ViTWVudUtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcm9vdFByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZ1xufTtcbk1lbnVJdGVtR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogdHJ1ZVxufTtcblxuXG5NZW51SXRlbUdyb3VwLmlzTWVudUl0ZW1Hcm91cCA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtR3JvdXA7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG52YXIgRGl2aWRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEaXZpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEaXZpZGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEaXZpZGVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgRGl2aWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICByb290UHJlZml4Q2xzID0gX3Byb3BzLnJvb3RQcmVmaXhDbHMsXG4gICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnICcgKyByb290UHJlZml4Q2xzICsgJy1pdGVtLWRpdmlkZXInLFxuICAgICAgc3R5bGU6IHN0eWxlXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIERpdmlkZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkRpdmlkZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJvb3RQcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuRGl2aWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIC8vIFRvIGZpeCBrZXlib2FyZCBVWC5cbiAgZGlzYWJsZWQ6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIHN0eWxlOiB7fVxufTtcbmV4cG9ydCBkZWZhdWx0IERpdmlkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmV0ID0gW107XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0LnB1c2goYyk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gdG9UaXRsZSh0aXRsZSkge1xuICBpZiAodHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZVByb3BWYWx1ZShjaGlsZCkge1xuICBpZiAoIWNoaWxkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcHJvcHMgPSBjaGlsZC5wcm9wcztcblxuICBpZiAoJ3ZhbHVlJyBpbiBwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy52YWx1ZTtcbiAgfVxuXG4gIGlmIChjaGlsZC5rZXkpIHtcbiAgICByZXR1cm4gY2hpbGQua2V5O1xuICB9XG5cbiAgaWYgKGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZS5pc1NlbGVjdE9wdEdyb3VwICYmIHByb3BzLmxhYmVsKSB7XG4gICAgcmV0dXJuIHByb3BzLmxhYmVsO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiTmVlZCBhdCBsZWFzdCBhIGtleSBvciBhIHZhbHVlIG9yIGEgbGFiZWwgKG9ubHkgZm9yIE9wdEdyb3VwKSBmb3IgXCIuY29uY2F0KGNoaWxkKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcFZhbHVlKGNoaWxkLCBwcm9wKSB7XG4gIGlmIChwcm9wID09PSAndmFsdWUnKSB7XG4gICAgcmV0dXJuIGdldFZhbHVlUHJvcFZhbHVlKGNoaWxkKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZC5wcm9wc1twcm9wXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc011bHRpcGxlKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5tdWx0aXBsZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbWJvYm94KHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5jb21ib2JveDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc011bHRpcGxlT3JUYWdzKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5tdWx0aXBsZSB8fCBwcm9wcy50YWdzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTXVsdGlwbGVPclRhZ3NPckNvbWJvYm94KHByb3BzKSB7XG4gIHJldHVybiBpc011bHRpcGxlT3JUYWdzKHByb3BzKSB8fCBpc0NvbWJvYm94KHByb3BzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1NpbmdsZU1vZGUocHJvcHMpIHtcbiAgcmV0dXJuICFpc011bHRpcGxlT3JUYWdzT3JDb21ib2JveChwcm9wcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICB2YXIgcmV0ID0gdmFsdWU7XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXQgPSBbXTtcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXQgPSBbdmFsdWVdO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBLZXkodmFsdWUpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHR5cGVvZiB2YWx1ZSwgXCItXCIpLmNvbmNhdCh2YWx1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJldmVudERlZmF1bHRFdmVudChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW5kZXhJblZhbHVlQnlTaW5nbGVWYWx1ZSh2YWx1ZSwgc2luZ2xlVmFsdWUpIHtcbiAgdmFyIGluZGV4ID0gLTE7XG5cbiAgaWYgKHZhbHVlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlW2ldID09PSBzaW5nbGVWYWx1ZSkge1xuICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYWJlbEZyb21Qcm9wc1ZhbHVlKHZhbHVlLCBrZXkpIHtcbiAgdmFyIGxhYmVsO1xuICB2YWx1ZSA9IHRvQXJyYXkodmFsdWUpO1xuXG4gIGlmICh2YWx1ZSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlW2ldLmtleSA9PT0ga2V5KSB7XG4gICAgICAgIGxhYmVsID0gdmFsdWVbaV0ubGFiZWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RLZXlzKG1lbnVJdGVtcywgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgc2VsZWN0ZWRLZXlzID0gW107XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2gobWVudUl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciB0eXBlID0gaXRlbS50eXBlO1xuXG4gICAgaWYgKHR5cGUuaXNNZW51SXRlbUdyb3VwKSB7XG4gICAgICBzZWxlY3RlZEtleXMgPSBzZWxlY3RlZEtleXMuY29uY2F0KGdldFNlbGVjdEtleXMoaXRlbS5wcm9wcy5jaGlsZHJlbiwgdmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGl0ZW1WYWx1ZSA9IGdldFZhbHVlUHJvcFZhbHVlKGl0ZW0pO1xuICAgICAgdmFyIGl0ZW1LZXkgPSBpdGVtLmtleTtcblxuICAgICAgaWYgKGZpbmRJbmRleEluVmFsdWVCeVNpbmdsZVZhbHVlKHZhbHVlLCBpdGVtVmFsdWUpICE9PSAtMSAmJiBpdGVtS2V5KSB7XG4gICAgICAgIHNlbGVjdGVkS2V5cy5wdXNoKGl0ZW1LZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWxlY3RlZEtleXM7XG59XG5leHBvcnQgdmFyIFVOU0VMRUNUQUJMRV9TVFlMRSA9IHtcbiAgdXNlclNlbGVjdDogJ25vbmUnLFxuICBXZWJraXRVc2VyU2VsZWN0OiAnbm9uZSdcbn07XG5leHBvcnQgdmFyIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUgPSB7XG4gIHVuc2VsZWN0YWJsZTogJ29uJ1xufTtcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlyc3RNZW51SXRlbShjaGlsZHJlbikge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICBpZiAoY2hpbGQudHlwZS5pc01lbnVJdGVtR3JvdXApIHtcbiAgICAgIHZhciBmb3VuZCA9IGZpbmRGaXJzdE1lbnVJdGVtKGNoaWxkLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFjaGlsZC5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVzU2VwYXJhdG9ycyhzdHIsIHNlcGFyYXRvcnMpIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXBhcmF0b3JzLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHN0ci5sYXN0SW5kZXhPZihzZXBhcmF0b3JzW2ldKSA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEJ5U2VwYXJhdG9ycyhzdHIsIHNlcGFyYXRvcnMpIHtcbiAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCJbXCIuY29uY2F0KHNlcGFyYXRvcnMuam9pbigpLCBcIl1cIikpO1xuICByZXR1cm4gc3RyLnNwbGl0KHJlZykuZmlsdGVyKGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZpbHRlckZuKGlucHV0LCBjaGlsZCkge1xuICBpZiAoY2hpbGQucHJvcHMuZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgdmFsdWUgPSB0b0FycmF5KGdldFByb3BWYWx1ZShjaGlsZCwgdGhpcy5wcm9wcy5vcHRpb25GaWx0ZXJQcm9wKSkuam9pbignJyk7XG4gIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPiAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU9wdGlvblZhbHVlKHZhbHVlLCBwcm9wcykge1xuICBpZiAoaXNTaW5nbGVNb2RlKHByb3BzKSB8fCBpc011bHRpcGxlKHByb3BzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBgdmFsdWVgIG9mIHR5cGUgYFwiLmNvbmNhdCh0eXBlb2YgdmFsdWUsIFwiYCBzdXBwbGllZCB0byBPcHRpb24sIFwiKSArIFwiZXhwZWN0ZWQgYHN0cmluZ2Agd2hlbiBgdGFncy9jb21ib2JveGAgaXMgYHRydWVgLlwiKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSZWYoaW5zdGFuY2UsIG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaW5zdGFuY2VbbmFtZV0gPSBub2RlO1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgICByZXR1cm4gJ3Rlc3QtdXVpZCc7XG4gIH1cblxuICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG5cbiAgICByZXR1cm4gKGMgPT09ICd4JyA/IHIgOiByICYgMHg3IHwgMHg4KS50b1N0cmluZygxNik7XG4gIH0pO1xuICByZXR1cm4gdXVpZDtcbn0iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmltcG9ydCBzY3JvbGxJbnRvVmlldyBmcm9tICdkb20tc2Nyb2xsLWludG8tdmlldyc7XG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgcmFmIGZyb20gJ3JhZic7XG5pbXBvcnQgTWVudSBmcm9tICdyYy1tZW51JztcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGdldFNlbGVjdEtleXMsIHByZXZlbnREZWZhdWx0RXZlbnQsIHNhdmVSZWYgfSBmcm9tICcuL3V0aWwnO1xuXG52YXIgRHJvcGRvd25NZW51ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEcm9wZG93bk1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duTWVudShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wZG93bk1lbnUpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoRHJvcGRvd25NZW51KS5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgX3RoaXMucmFmSW5zdGFuY2UgPSB7XG4gICAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgICBfdGhpcy5sYXN0VmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgX3RoaXMuc2Nyb2xsQWN0aXZlSXRlbVRvVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHNjcm9sbCBpbnRvIHZpZXdcbiAgICAgIHZhciBpdGVtQ29tcG9uZW50ID0gZmluZERPTU5vZGUoX3RoaXMuZmlyc3RBY3RpdmVJdGVtKTtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHZpc2libGUgPSBfdGhpcyRwcm9wcy52aXNpYmxlLFxuICAgICAgICAgIGZpcnN0QWN0aXZlVmFsdWUgPSBfdGhpcyRwcm9wcy5maXJzdEFjdGl2ZVZhbHVlO1xuICAgICAgdmFyIHZhbHVlID0gX3RoaXMucHJvcHMudmFsdWU7XG5cbiAgICAgIGlmICghaXRlbUNvbXBvbmVudCB8fCAhdmlzaWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzY3JvbGxJbnRvVmlld09wdHMgPSB7XG4gICAgICAgIG9ubHlTY3JvbGxJZk5lZWRlZDogdHJ1ZVxuICAgICAgfTtcblxuICAgICAgaWYgKCghdmFsdWUgfHwgdmFsdWUubGVuZ3RoID09PSAwKSAmJiBmaXJzdEFjdGl2ZVZhbHVlKSB7XG4gICAgICAgIHNjcm9sbEludG9WaWV3T3B0cy5hbGlnbldpdGhUb3AgPSB0cnVlO1xuICAgICAgfSAvLyBEZWxheSB0byBzY3JvbGwgc2luY2UgY3VycmVudCBmcmFtZSBpdGVtIHBvc2l0aW9uIGlzIG5vdCByZWFkeSB3aGVuIHByZSB2aWV3IGlzIGJ5IGZpbHRlclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTEyNjgjaXNzdWVjb21tZW50LTQwNjYzNDQ2MlxuXG5cbiAgICAgIF90aGlzLnJhZkluc3RhbmNlID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXcoaXRlbUNvbXBvbmVudCwgZmluZERPTU5vZGUoX3RoaXMubWVudVJlZiksIHNjcm9sbEludG9WaWV3T3B0cyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyTWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtZW51SXRlbXMgPSBfdGhpcyRwcm9wczIubWVudUl0ZW1zLFxuICAgICAgICAgIG1lbnVJdGVtU2VsZWN0ZWRJY29uID0gX3RoaXMkcHJvcHMyLm1lbnVJdGVtU2VsZWN0ZWRJY29uLFxuICAgICAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiA9IF90aGlzJHByb3BzMi5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzMi5tdWx0aXBsZSxcbiAgICAgICAgICBvbk1lbnVTZWxlY3QgPSBfdGhpcyRwcm9wczIub25NZW51U2VsZWN0LFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczIuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBiYWNrZmlsbFZhbHVlID0gX3RoaXMkcHJvcHMyLmJhY2tmaWxsVmFsdWUsXG4gICAgICAgICAgb25NZW51RGVzZWxlY3QgPSBfdGhpcyRwcm9wczIub25NZW51RGVzZWxlY3QsXG4gICAgICAgICAgdmlzaWJsZSA9IF90aGlzJHByb3BzMi52aXNpYmxlO1xuICAgICAgdmFyIGZpcnN0QWN0aXZlVmFsdWUgPSBfdGhpcy5wcm9wcy5maXJzdEFjdGl2ZVZhbHVlO1xuXG4gICAgICBpZiAobWVudUl0ZW1zICYmIG1lbnVJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG1lbnVQcm9wcyA9IHt9O1xuXG4gICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgIG1lbnVQcm9wcy5vbkRlc2VsZWN0ID0gb25NZW51RGVzZWxlY3Q7XG4gICAgICAgICAgbWVudVByb3BzLm9uU2VsZWN0ID0gb25NZW51U2VsZWN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lbnVQcm9wcy5vbkNsaWNrID0gb25NZW51U2VsZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMucHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBzZWxlY3RlZEtleXMgPSBnZXRTZWxlY3RLZXlzKG1lbnVJdGVtcywgdmFsdWUpO1xuICAgICAgICB2YXIgYWN0aXZlS2V5UHJvcHMgPSB7fTtcbiAgICAgICAgdmFyIGRlZmF1bHRBY3RpdmVGaXJzdCA9IGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjtcbiAgICAgICAgdmFyIGNsb25lZE1lbnVJdGVtcyA9IG1lbnVJdGVtcztcblxuICAgICAgICBpZiAoc2VsZWN0ZWRLZXlzLmxlbmd0aCB8fCBmaXJzdEFjdGl2ZVZhbHVlKSB7XG4gICAgICAgICAgaWYgKHZpc2libGUgJiYgIV90aGlzLmxhc3RWaXNpYmxlKSB7XG4gICAgICAgICAgICBhY3RpdmVLZXlQcm9wcy5hY3RpdmVLZXkgPSBzZWxlY3RlZEtleXNbMF0gfHwgZmlyc3RBY3RpdmVWYWx1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBEbyBub3QgdHJpZ2dlciBhdXRvIGFjdGl2ZSBzaW5jZSB3ZSBhbHJlYWR5IGhhdmUgc2VsZWN0ZWRLZXlzXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRLZXlzWzBdKSB7XG4gICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhY3RpdmVLZXlQcm9wcy5hY3RpdmVLZXkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGZvdW5kRmlyc3QgPSBmYWxzZTsgLy8gc2V0IGZpcnN0QWN0aXZlSXRlbSB2aWEgY2xvbmluZyBtZW51c1xuICAgICAgICAgIC8vIGZvciBzY3JvbGwgaW50byB2aWV3XG5cbiAgICAgICAgICB2YXIgY2xvbmUgPSBmdW5jdGlvbiBjbG9uZShpdGVtKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gaXRlbS5rZXk7XG5cbiAgICAgICAgICAgIGlmICghZm91bmRGaXJzdCAmJiBzZWxlY3RlZEtleXMuaW5kZXhPZihrZXkpICE9PSAtMSB8fCAhZm91bmRGaXJzdCAmJiAhc2VsZWN0ZWRLZXlzLmxlbmd0aCAmJiBmaXJzdEFjdGl2ZVZhbHVlLmluZGV4T2YoaXRlbS5rZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICBmb3VuZEZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuICAgICAgICAgICAgICAgICAgX3RoaXMuZmlyc3RBY3RpdmVJdGVtID0gX3JlZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY2xvbmVkTWVudUl0ZW1zID0gbWVudUl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZS5pc01lbnVJdGVtR3JvdXApIHtcbiAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdG9BcnJheShpdGVtLnByb3BzLmNoaWxkcmVuKS5tYXAoY2xvbmUpO1xuICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGl0ZW0sIHt9LCBjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZShpdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDbGVhciBmaXJzdEFjdGl2ZUl0ZW0gd2hlbiBkcm9wZG93biBtZW51IGl0ZW1zIHdhcyBlbXB0eVxuICAgICAgICAgIC8vIEF2b2lkIGBVbmFibGUgdG8gZmluZCBub2RlIG9uIGFuIHVubW91bnRlZCBjb21wb25lbnRgXG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTA3NzRcbiAgICAgICAgICBfdGhpcy5maXJzdEFjdGl2ZUl0ZW0gPSBudWxsO1xuICAgICAgICB9IC8vIGNsZWFyIGFjdGl2ZUtleSB3aGVuIGlucHV0VmFsdWUgY2hhbmdlXG5cblxuICAgICAgICB2YXIgbGFzdFZhbHVlID0gdmFsdWUgJiYgdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKGlucHV0VmFsdWUgIT09IF90aGlzLmxhc3RJbnB1dFZhbHVlICYmICghbGFzdFZhbHVlIHx8IGxhc3RWYWx1ZSAhPT0gYmFja2ZpbGxWYWx1ZSkpIHtcbiAgICAgICAgICBhY3RpdmVLZXlQcm9wcy5hY3RpdmVLZXkgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnUsIF9leHRlbmRzKHtcbiAgICAgICAgICByZWY6IF90aGlzLnNhdmVNZW51UmVmLFxuICAgICAgICAgIHN0eWxlOiBfdGhpcy5wcm9wcy5kcm9wZG93bk1lbnVTdHlsZSxcbiAgICAgICAgICBkZWZhdWx0QWN0aXZlRmlyc3Q6IGRlZmF1bHRBY3RpdmVGaXJzdCxcbiAgICAgICAgICByb2xlOiBcImxpc3Rib3hcIixcbiAgICAgICAgICBpdGVtSWNvbjogbXVsdGlwbGUgPyBtZW51SXRlbVNlbGVjdGVkSWNvbiA6IG51bGxcbiAgICAgICAgfSwgYWN0aXZlS2V5UHJvcHMsIHtcbiAgICAgICAgICBtdWx0aXBsZTogbXVsdGlwbGVcbiAgICAgICAgfSwgbWVudVByb3BzLCB7XG4gICAgICAgICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXMsXG4gICAgICAgICAgcHJlZml4Q2xzOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1lbnVcIilcbiAgICAgICAgfSksIGNsb25lZE1lbnVJdGVtcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBfdGhpcy5sYXN0SW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWU7XG4gICAgX3RoaXMuc2F2ZU1lbnVSZWYgPSBzYXZlUmVmKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAnbWVudVJlZicpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcm9wZG93bk1lbnUsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zY3JvbGxBY3RpdmVJdGVtVG9WaWV3KCk7XG4gICAgICB0aGlzLmxhc3RWaXNpYmxlID0gdGhpcy5wcm9wcy52aXNpYmxlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaG91bGRDb21wb25lbnRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgaWYgKCFuZXh0UHJvcHMudmlzaWJsZSkge1xuICAgICAgICB0aGlzLmxhc3RWaXNpYmxlID0gZmFsc2U7XG4gICAgICB9IC8vIGZyZWV6ZSB3aGVuIGhpZGVcblxuXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy52aXNpYmxlICYmICFuZXh0UHJvcHMudmlzaWJsZSB8fCBuZXh0UHJvcHMudmlzaWJsZSB8fCBuZXh0UHJvcHMuaW5wdXRWYWx1ZSAhPT0gdGhpcy5wcm9wcy5pbnB1dFZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgaWYgKCFwcmV2UHJvcHMudmlzaWJsZSAmJiBwcm9wcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsQWN0aXZlSXRlbVRvVmlldygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxhc3RWaXNpYmxlID0gcHJvcHMudmlzaWJsZTtcbiAgICAgIHRoaXMubGFzdElucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnJhZkluc3RhbmNlICYmIHRoaXMucmFmSW5zdGFuY2UuY2FuY2VsKSB7XG4gICAgICAgIHRoaXMucmFmSW5zdGFuY2UuY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgcmVuZGVyTWVudSA9IHRoaXMucmVuZGVyTWVudSgpO1xuICAgICAgcmV0dXJuIHJlbmRlck1lbnUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMCknXG4gICAgICAgIH0sXG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmFyaWFJZCxcbiAgICAgICAgb25Gb2N1czogdGhpcy5wcm9wcy5vblBvcHVwRm9jdXMsXG4gICAgICAgIG9uTW91c2VEb3duOiBwcmV2ZW50RGVmYXVsdEV2ZW50LFxuICAgICAgICBvblNjcm9sbDogdGhpcy5wcm9wcy5vblBvcHVwU2Nyb2xsXG4gICAgICB9LCByZW5kZXJNZW51KSA6IG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyb3Bkb3duTWVudTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgRHJvcGRvd25NZW51IGFzIGRlZmF1bHQgfTtcbkRyb3Bkb3duTWVudS5kaXNwbGF5TmFtZSA9ICdEcm9wZG93bk1lbnUnO1xuRHJvcGRvd25NZW51LnByb3BUeXBlcyA9IHtcbiAgYXJpYUlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IFByb3BUeXBlcy5ib29sLFxuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgZHJvcGRvd25NZW51U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25Qb3B1cEZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Qb3B1cFNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTWVudURlU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25NZW51U2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51SXRlbXM6IFByb3BUeXBlcy5hbnksXG4gIGlucHV0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBmaXJzdEFjdGl2ZVZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51SXRlbVNlbGVjdGVkSWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSlcbn07IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUcmlnZ2VyIGZyb20gJ3JjLXRyaWdnZXInO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IHsgaXNTaW5nbGVNb2RlLCBzYXZlUmVmIH0gZnJvbSAnLi91dGlsJztcblRyaWdnZXIuZGlzcGxheU5hbWUgPSAnVHJpZ2dlcic7XG52YXIgQlVJTFRfSU5fUExBQ0VNRU5UUyA9IHtcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIG92ZXJmbG93OiB7XG4gICAgICBhZGp1c3RYOiAwLFxuICAgICAgYWRqdXN0WTogMVxuICAgIH1cbiAgfSxcbiAgdG9wTGVmdDoge1xuICAgIHBvaW50czogWydibCcsICd0bCddLFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICBvdmVyZmxvdzoge1xuICAgICAgYWRqdXN0WDogMCxcbiAgICAgIGFkanVzdFk6IDFcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTZWxlY3RUcmlnZ2VyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTZWxlY3RUcmlnZ2VyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTZWxlY3RUcmlnZ2VyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlbGVjdFRyaWdnZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU2VsZWN0VHJpZ2dlcikuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIF90aGlzLmRyb3Bkb3duTWVudVJlZiA9IG51bGw7XG5cbiAgICBfdGhpcy5zZXREcm9wZG93bldpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGRvbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICAgIHZhciB3aWR0aCA9IGRvbS5vZmZzZXRXaWR0aDtcblxuICAgICAgaWYgKHdpZHRoICE9PSBfdGhpcy5zdGF0ZS5kcm9wZG93bldpZHRoKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkcm9wZG93bldpZHRoOiB3aWR0aFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0SW5uZXJNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmRyb3Bkb3duTWVudVJlZiAmJiBfdGhpcy5kcm9wZG93bk1lbnVSZWYubWVudVJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0UG9wdXBET01Ob2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnRyaWdnZXJSZWYuZ2V0UG9wdXBEb21Ob2RlKCk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldERyb3Bkb3duRWxlbWVudCA9IGZ1bmN0aW9uIChuZXdQcm9wcykge1xuICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICB2YXIgZHJvcGRvd25SZW5kZXIgPSBwcm9wcy5kcm9wZG93blJlbmRlcixcbiAgICAgICAgICBhcmlhSWQgPSBwcm9wcy5hcmlhSWQ7XG4gICAgICB2YXIgbWVudU5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bkb3duTWVudSwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IF90aGlzLnNhdmVEcm9wZG93bk1lbnVSZWZcbiAgICAgIH0sIG5ld1Byb3BzLCB7XG4gICAgICAgIGFyaWFJZDogYXJpYUlkLFxuICAgICAgICBwcmVmaXhDbHM6IF90aGlzLmdldERyb3Bkb3duUHJlZml4Q2xzKCksXG4gICAgICAgIG9uTWVudVNlbGVjdDogcHJvcHMub25NZW51U2VsZWN0LFxuICAgICAgICBvbk1lbnVEZXNlbGVjdDogcHJvcHMub25NZW51RGVzZWxlY3QsXG4gICAgICAgIG9uUG9wdXBTY3JvbGw6IHByb3BzLm9uUG9wdXBTY3JvbGwsXG4gICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgYmFja2ZpbGxWYWx1ZTogcHJvcHMuYmFja2ZpbGxWYWx1ZSxcbiAgICAgICAgZmlyc3RBY3RpdmVWYWx1ZTogcHJvcHMuZmlyc3RBY3RpdmVWYWx1ZSxcbiAgICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiBwcm9wcy5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sXG4gICAgICAgIGRyb3Bkb3duTWVudVN0eWxlOiBwcm9wcy5kcm9wZG93bk1lbnVTdHlsZSxcbiAgICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb246IHByb3BzLm1lbnVJdGVtU2VsZWN0ZWRJY29uXG4gICAgICB9KSk7XG5cbiAgICAgIGlmIChkcm9wZG93blJlbmRlcikge1xuICAgICAgICByZXR1cm4gZHJvcGRvd25SZW5kZXIobWVudU5vZGUsIHByb3BzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIF90aGlzLmdldERyb3Bkb3duVHJhbnNpdGlvbk5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lO1xuXG4gICAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIHByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IFwiXCIuY29uY2F0KF90aGlzLmdldERyb3Bkb3duUHJlZml4Q2xzKCksIFwiLVwiKS5jb25jYXQocHJvcHMuYW5pbWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXREcm9wZG93blByZWZpeENscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfdGhpcy5wcm9wcy5wcmVmaXhDbHMsIFwiLWRyb3Bkb3duXCIpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlRHJvcGRvd25NZW51UmVmID0gc2F2ZVJlZihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgJ2Ryb3Bkb3duTWVudVJlZicpO1xuICAgIF90aGlzLnNhdmVUcmlnZ2VyUmVmID0gc2F2ZVJlZihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgJ3RyaWdnZXJSZWYnKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyb3Bkb3duV2lkdGg6IDBcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTZWxlY3RUcmlnZ2VyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25XaWR0aCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5zZXREcm9wZG93bldpZHRoKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3BvcHVwQ2xhc3NOYW1lO1xuXG4gICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uUG9wdXBGb2N1cyA9IF9hLm9uUG9wdXBGb2N1cyxcbiAgICAgICAgICBlbXB0eSA9IF9hLmVtcHR5LFxuICAgICAgICAgIHByb3BzID0gX19yZXN0KF9hLCBbXCJvblBvcHVwRm9jdXNcIiwgXCJlbXB0eVwiXSk7XG5cbiAgICAgIHZhciBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgICAgIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgICAgIGRyb3Bkb3duQWxpZ24gPSBwcm9wcy5kcm9wZG93bkFsaWduLFxuICAgICAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgc2hvd1NlYXJjaCA9IHByb3BzLnNob3dTZWFyY2gsXG4gICAgICAgICAgZHJvcGRvd25DbGFzc05hbWUgPSBwcm9wcy5kcm9wZG93bkNsYXNzTmFtZSxcbiAgICAgICAgICBkcm9wZG93blN0eWxlID0gcHJvcHMuZHJvcGRvd25TdHlsZSxcbiAgICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSBwcm9wcy5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg7XG4gICAgICB2YXIgZHJvcGRvd25QcmVmaXhDbHMgPSB0aGlzLmdldERyb3Bkb3duUHJlZml4Q2xzKCk7XG4gICAgICB2YXIgcG9wdXBDbGFzc05hbWUgPSAoX3BvcHVwQ2xhc3NOYW1lID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcG9wdXBDbGFzc05hbWUsIGRyb3Bkb3duQ2xhc3NOYW1lLCAhIWRyb3Bkb3duQ2xhc3NOYW1lKSwgX2RlZmluZVByb3BlcnR5KF9wb3B1cENsYXNzTmFtZSwgXCJcIi5jb25jYXQoZHJvcGRvd25QcmVmaXhDbHMsIFwiLS1cIikuY29uY2F0KG11bHRpcGxlID8gJ211bHRpcGxlJyA6ICdzaW5nbGUnKSwgMSksIF9kZWZpbmVQcm9wZXJ0eShfcG9wdXBDbGFzc05hbWUsIFwiXCIuY29uY2F0KGRyb3Bkb3duUHJlZml4Q2xzLCBcIi0tZW1wdHlcIiksIGVtcHR5KSwgX3BvcHVwQ2xhc3NOYW1lKTtcbiAgICAgIHZhciBwb3B1cEVsZW1lbnQgPSB0aGlzLmdldERyb3Bkb3duRWxlbWVudCh7XG4gICAgICAgIG1lbnVJdGVtczogcHJvcHMub3B0aW9ucyxcbiAgICAgICAgb25Qb3B1cEZvY3VzOiBvblBvcHVwRm9jdXMsXG4gICAgICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcbiAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZVxuICAgICAgfSk7XG4gICAgICB2YXIgaGlkZUFjdGlvbjtcblxuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIGhpZGVBY3Rpb24gPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoaXNTaW5nbGVNb2RlKHByb3BzKSAmJiAhc2hvd1NlYXJjaCkge1xuICAgICAgICBoaWRlQWN0aW9uID0gWydjbGljayddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlkZUFjdGlvbiA9IFsnYmx1ciddO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG9wdXBTdHlsZSA9IF9leHRlbmRzKHt9LCBkcm9wZG93blN0eWxlKTtcblxuICAgICAgdmFyIHdpZHRoUHJvcCA9IGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA/ICd3aWR0aCcgOiAnbWluV2lkdGgnO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5kcm9wZG93bldpZHRoKSB7XG4gICAgICAgIHBvcHVwU3R5bGVbd2lkdGhQcm9wXSA9IFwiXCIuY29uY2F0KHRoaXMuc3RhdGUuZHJvcGRvd25XaWR0aCwgXCJweFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJpZ2dlciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHNob3dBY3Rpb246IGRpc2FibGVkID8gW10gOiB0aGlzLnByb3BzLnNob3dBY3Rpb24sXG4gICAgICAgIGhpZGVBY3Rpb246IGhpZGVBY3Rpb24sXG4gICAgICAgIHJlZjogdGhpcy5zYXZlVHJpZ2dlclJlZixcbiAgICAgICAgcG9wdXBQbGFjZW1lbnQ6IFwiYm90dG9tTGVmdFwiLFxuICAgICAgICBidWlsdGluUGxhY2VtZW50czogQlVJTFRfSU5fUExBQ0VNRU5UUyxcbiAgICAgICAgcHJlZml4Q2xzOiBkcm9wZG93blByZWZpeENscyxcbiAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZTogdGhpcy5nZXREcm9wZG93blRyYW5zaXRpb25OYW1lKCksXG4gICAgICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBwcm9wcy5vbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgcG9wdXA6IHBvcHVwRWxlbWVudCxcbiAgICAgICAgcG9wdXBBbGlnbjogZHJvcGRvd25BbGlnbixcbiAgICAgICAgcG9wdXBWaXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lOiBjbGFzc25hbWVzKHBvcHVwQ2xhc3NOYW1lKSxcbiAgICAgICAgcG9wdXBTdHlsZTogcG9wdXBTdHlsZVxuICAgICAgfSksIHByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2VsZWN0VHJpZ2dlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgU2VsZWN0VHJpZ2dlciBhcyBkZWZhdWx0IH07XG5TZWxlY3RUcmlnZ2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZHJvcGRvd25SZW5kZXI6IGZ1bmN0aW9uIGRyb3Bkb3duUmVuZGVyKG1lbnUpIHtcbiAgICByZXR1cm4gbWVudTtcbiAgfVxufTtcblNlbGVjdFRyaWdnZXIucHJvcFR5cGVzID0ge1xuICBvblBvcHVwRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBvblBvcHVwU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcbiAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcbiAgZHJvcGRvd25BbGlnbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd1NlYXJjaDogUHJvcFR5cGVzLmJvb2wsXG4gIGRyb3Bkb3duQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGlucHV0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpbHRlck9wdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFueSxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwb3B1cENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIHNob3dBY3Rpb246IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBtZW51SXRlbVNlbGVjdGVkSWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG4gIGRyb3Bkb3duUmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgYXJpYUlkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuU2VsZWN0VHJpZ2dlci5kaXNwbGF5TmFtZSA9ICdTZWxlY3RUcmlnZ2VyJzsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnY29tcG9uZW50LWNsYXNzZXMnO1xuaW1wb3J0IEFuaW1hdGUgZnJvbSAncmMtYW5pbWF0ZSc7XG5pbXBvcnQgeyBJdGVtIGFzIE1lbnVJdGVtLCBJdGVtR3JvdXAgYXMgTWVudUl0ZW1Hcm91cCB9IGZyb20gJ3JjLW1lbnUnO1xuaW1wb3J0IGNoaWxkcmVuVG9BcnJheSBmcm9tIFwicmMtdXRpbC9lcy9DaGlsZHJlbi90b0FycmF5XCI7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgcG9seWZpbGwgfSBmcm9tICdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCBPcHRpb24gZnJvbSAnLi9PcHRpb24nO1xuaW1wb3J0IFNlbGVjdFByb3BUeXBlcyBmcm9tICcuL1Byb3BUeXBlcyc7XG5pbXBvcnQgU2VsZWN0VHJpZ2dlciBmcm9tICcuL1NlbGVjdFRyaWdnZXInO1xuaW1wb3J0IHsgZGVmYXVsdEZpbHRlckZuLCBmaW5kRmlyc3RNZW51SXRlbSwgZmluZEluZGV4SW5WYWx1ZUJ5U2luZ2xlVmFsdWUsIGdlbmVyYXRlVVVJRCwgZ2V0TGFiZWxGcm9tUHJvcHNWYWx1ZSwgZ2V0TWFwS2V5LCBnZXRQcm9wVmFsdWUsIGdldFZhbHVlUHJvcFZhbHVlLCBpbmNsdWRlc1NlcGFyYXRvcnMsIGlzQ29tYm9ib3gsIGlzTXVsdGlwbGVPclRhZ3MsIGlzTXVsdGlwbGVPclRhZ3NPckNvbWJvYm94LCBpc1NpbmdsZU1vZGUsIHByZXZlbnREZWZhdWx0RXZlbnQsIHNhdmVSZWYsIHNwbGl0QnlTZXBhcmF0b3JzLCB0b0FycmF5LCB0b1RpdGxlLCBVTlNFTEVDVEFCTEVfQVRUUklCVVRFLCBVTlNFTEVDVEFCTEVfU1RZTEUsIHZhbGlkYXRlT3B0aW9uVmFsdWUgfSBmcm9tICcuL3V0aWwnO1xudmFyIFNFTEVDVF9FTVBUWV9WQUxVRV9LRVkgPSAnUkNfU0VMRUNUX0VNUFRZX1ZBTFVFX0tFWSc7XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiBjaGFpbmluZygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmbnNbaV0gJiYgdHlwZW9mIGZuc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBmbnNbaV0uYXBwbHkoY2hhaW5pbmcsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxudmFyIFNlbGVjdCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2VsZWN0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VsZWN0KTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFNlbGVjdCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIF90aGlzLmlucHV0UmVmID0gbnVsbDtcbiAgICBfdGhpcy5pbnB1dE1pcnJvclJlZiA9IG51bGw7XG4gICAgX3RoaXMudG9wQ3RybFJlZiA9IG51bGw7XG4gICAgX3RoaXMuc2VsZWN0VHJpZ2dlclJlZiA9IG51bGw7XG4gICAgX3RoaXMucm9vdFJlZiA9IG51bGw7XG4gICAgX3RoaXMuc2VsZWN0aW9uUmVmID0gbnVsbDtcbiAgICBfdGhpcy5kcm9wZG93bkNvbnRhaW5lciA9IG51bGw7XG4gICAgX3RoaXMuYmx1clRpbWVyID0gbnVsbDtcbiAgICBfdGhpcy5mb2N1c1RpbWVyID0gbnVsbDtcbiAgICBfdGhpcy5jb21ib2JveFRpbWVyID0gbnVsbDsgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcblxuICAgIF90aGlzLl9mb2N1c2VkID0gZmFsc2U7IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG5cbiAgICBfdGhpcy5fbW91c2VEb3duID0gZmFsc2U7IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG5cbiAgICBfdGhpcy5fb3B0aW9ucyA9IFtdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuXG4gICAgX3RoaXMuX2VtcHR5ID0gZmFsc2U7XG5cbiAgICBfdGhpcy5vbklucHV0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgdG9rZW5TZXBhcmF0b3JzID0gX3RoaXMucHJvcHMudG9rZW5TZXBhcmF0b3JzO1xuICAgICAgdmFyIHZhbCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgaWYgKGlzTXVsdGlwbGVPclRhZ3MoX3RoaXMucHJvcHMpICYmIHRva2VuU2VwYXJhdG9ycy5sZW5ndGggJiYgaW5jbHVkZXNTZXBhcmF0b3JzKHZhbCwgdG9rZW5TZXBhcmF0b3JzKSkge1xuICAgICAgICB2YXIgbmV4dFZhbHVlID0gX3RoaXMuZ2V0VmFsdWVCeUlucHV0KHZhbCk7XG5cbiAgICAgICAgaWYgKG5leHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgX3RoaXMuZmlyZUNoYW5nZShuZXh0VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKGZhbHNlLCB7XG4gICAgICAgICAgbmVlZEZvY3VzOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLnNldElucHV0VmFsdWUoJycsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldElucHV0VmFsdWUodmFsKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzQ29tYm9ib3goX3RoaXMucHJvcHMpKSB7XG4gICAgICAgIF90aGlzLmZpcmVDaGFuZ2UoW3ZhbF0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uIChvcGVuKSB7XG4gICAgICBpZiAob3BlbiAmJiAhX3RoaXMuX2ZvY3VzZWQpIHtcbiAgICAgICAgX3RoaXMuY2xlYXJCbHVyVGltZSgpO1xuXG4gICAgICAgIF90aGlzLnRpbWVvdXRGb2N1cygpO1xuXG4gICAgICAgIF90aGlzLl9mb2N1c2VkID0gdHJ1ZTtcblxuICAgICAgICBfdGhpcy51cGRhdGVGb2N1c0NsYXNzTmFtZSgpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRPcGVuU3RhdGUob3Blbik7XG4gICAgfTsgLy8gY29tYm9ib3ggaWdub3JlXG5cblxuICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIG9wZW4gPSBfdGhpcy5zdGF0ZS5vcGVuO1xuICAgICAgdmFyIGRpc2FibGVkID0gX3RoaXMucHJvcHMuZGlzYWJsZWQ7XG5cbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgICAgaWYgKG9wZW4gJiYgIV90aGlzLmdldElucHV0RE9NTm9kZSgpKSB7XG4gICAgICAgIF90aGlzLm9uSW5wdXRLZXlEb3duKGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5FTlRFUiB8fCBrZXlDb2RlID09PSBLZXlDb2RlLkRPV04pIHtcbiAgICAgICAgaWYgKCFvcGVuKSB7XG4gICAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5TUEFDRSkge1xuICAgICAgICAvLyBOb3QgYmxvY2sgc3BhY2UgaWYgcG9wdXAgaXMgc2hvd25cbiAgICAgICAgaWYgKCFvcGVuKSB7XG4gICAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbklucHV0S2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBjb21ib2JveCA9IF90aGlzJHByb3BzLmNvbWJvYm94LFxuICAgICAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiA9IF90aGlzJHByb3BzLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjtcblxuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlID0gX3RoaXMuc3RhdGU7XG5cbiAgICAgIHZhciBpc1JlYWxPcGVuID0gX3RoaXMuZ2V0UmVhbE9wZW5TdGF0ZShzdGF0ZSk7IC8vIG1hZ2ljIGNvZGVcblxuXG4gICAgICB2YXIga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgIGlmIChpc011bHRpcGxlT3JUYWdzKF90aGlzLnByb3BzKSAmJiAhZXZlbnQudGFyZ2V0LnZhbHVlICYmIGtleUNvZGUgPT09IEtleUNvZGUuQkFDS1NQQUNFKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICBfdGhpcy5yZW1vdmVTZWxlY3RlZCh2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLkRPV04pIHtcbiAgICAgICAgaWYgKCFzdGF0ZS5vcGVuKSB7XG4gICAgICAgICAgX3RoaXMub3BlbklmSGFzQ2hpbGRyZW4oKTtcblxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuRU5URVIgJiYgc3RhdGUub3Blbikge1xuICAgICAgICAvLyBBdmlvZCB0cmlnZ2VyIGZvcm0gc3VibWl0IHdoZW4gc2VsZWN0IGl0ZW1cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTA4NjFcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTQ1NDRcbiAgICAgICAgaWYgKGlzUmVhbE9wZW4gfHwgIWNvbWJvYm94KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSAvLyBIYXJkIGNsb3NlIHBvcHVwIHRvIGF2b2lkIGxvY2sgb2Ygbm9uIG9wdGlvbiBpbiBjb21ib2JveCBtb2RlXG5cblxuICAgICAgICBpZiAoaXNSZWFsT3BlbiAmJiBjb21ib2JveCAmJiBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgX3RoaXMuY29tYm9ib3hUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLkVTQykge1xuICAgICAgICBpZiAoc3RhdGUub3Blbikge1xuICAgICAgICAgIF90aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XG5cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNSZWFsT3BlbiAmJiBfdGhpcy5zZWxlY3RUcmlnZ2VyUmVmKSB7XG4gICAgICAgIHZhciBtZW51ID0gX3RoaXMuc2VsZWN0VHJpZ2dlclJlZi5nZXRJbm5lck1lbnUoKTtcblxuICAgICAgICBpZiAobWVudSAmJiBtZW51Lm9uS2V5RG93bihldmVudCwgX3RoaXMuaGFuZGxlQmFja2ZpbGwpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbk1lbnVTZWxlY3QgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGl0ZW0gPSBfcmVmLml0ZW07XG5cbiAgICAgIGlmICghaXRlbSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICB2YXIgc2VsZWN0ZWRWYWx1ZSA9IGdldFZhbHVlUHJvcFZhbHVlKGl0ZW0pO1xuICAgICAgdmFyIGxhc3RWYWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuXG4gICAgICBfdGhpcy5maXJlU2VsZWN0KHNlbGVjdGVkVmFsdWUpO1xuXG4gICAgICBpZiAoaXNNdWx0aXBsZU9yVGFncyhwcm9wcykpIHtcbiAgICAgICAgaWYgKGZpbmRJbmRleEluVmFsdWVCeVNpbmdsZVZhbHVlKHZhbHVlLCBzZWxlY3RlZFZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IHZhbHVlLmNvbmNhdChbc2VsZWN0ZWRWYWx1ZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFpc0NvbWJvYm94KHByb3BzKSAmJiBsYXN0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBsYXN0VmFsdWUgPT09IHNlbGVjdGVkVmFsdWUgJiYgc2VsZWN0ZWRWYWx1ZSAhPT0gX3RoaXMuc3RhdGUuYmFja2ZpbGxWYWx1ZSkge1xuICAgICAgICAgIF90aGlzLnNldE9wZW5TdGF0ZShmYWxzZSwge1xuICAgICAgICAgICAgbmVlZEZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgZmlyZVNlYXJjaDogZmFsc2VcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gW3NlbGVjdGVkVmFsdWVdO1xuXG4gICAgICAgIF90aGlzLnNldE9wZW5TdGF0ZShmYWxzZSwge1xuICAgICAgICAgIG5lZWRGb2N1czogdHJ1ZSxcbiAgICAgICAgICBmaXJlU2VhcmNoOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuZmlyZUNoYW5nZSh2YWx1ZSk7XG5cbiAgICAgIHZhciBpbnB1dFZhbHVlID0gaXNDb21ib2JveChwcm9wcykgPyBnZXRQcm9wVmFsdWUoaXRlbSwgcHJvcHMub3B0aW9uTGFiZWxQcm9wKSA6ICcnO1xuXG4gICAgICBpZiAocHJvcHMuYXV0b0NsZWFyU2VhcmNoVmFsdWUpIHtcbiAgICAgICAgX3RoaXMuc2V0SW5wdXRWYWx1ZShpbnB1dFZhbHVlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uTWVudURlc2VsZWN0ID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgaXRlbSA9IF9yZWYyLml0ZW0sXG4gICAgICAgICAgZG9tRXZlbnQgPSBfcmVmMi5kb21FdmVudDtcblxuICAgICAgaWYgKGRvbUV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJiBkb21FdmVudC5rZXlDb2RlID09PSBLZXlDb2RlLkVOVEVSKSB7XG4gICAgICAgIF90aGlzLnJlbW92ZVNlbGVjdGVkKGdldFZhbHVlUHJvcFZhbHVlKGl0ZW0pKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkb21FdmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIF90aGlzLnJlbW92ZVNlbGVjdGVkKGdldFZhbHVlUHJvcFZhbHVlKGl0ZW0pKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG5cbiAgICAgIGlmIChwcm9wcy5hdXRvQ2xlYXJTZWFyY2hWYWx1ZSkge1xuICAgICAgICBfdGhpcy5zZXRJbnB1dFZhbHVlKCcnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25BcnJvd0NsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICghX3RoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKCFfdGhpcy5zdGF0ZS5vcGVuLCB7XG4gICAgICAgICAgbmVlZEZvY3VzOiAhX3RoaXMuc3RhdGUub3BlblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25QbGFjZWhvbGRlckNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmdldElucHV0RE9NTm9kZSAmJiBfdGhpcy5nZXRJbnB1dERPTU5vZGUoKSkge1xuICAgICAgICBfdGhpcy5nZXRJbnB1dERPTU5vZGUoKS5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbk91dGVyRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jbGVhckJsdXJUaW1lKCk7IC8vIEluIElFMTEsIG9uT3V0ZXJGb2N1cyB3aWxsIGJlIHRyaWdnZXIgdHdpY2Ugd2hlbiBmb2N1cyBpbnB1dFxuICAgICAgLy8gRmlyc3Qgb25lOiBlLnRhcmdldCBpcyBkaXZcbiAgICAgIC8vIFNlY29uZCBvbmU6IGUudGFyZ2V0IGlzIGlucHV0XG4gICAgICAvLyBvdGhlciBicm93c2VyIG9ubHkgdHJpZ2dlciBzZWNvbmQgb25lXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNTk0MlxuICAgICAgLy8gSGVyZSB3ZSBpZ25vcmUgdGhlIGZpcnN0IG9uZSB3aGVuIGUudGFyZ2V0IGlzIGRpdlxuXG5cbiAgICAgIHZhciBpbnB1dE5vZGUgPSBfdGhpcy5nZXRJbnB1dERPTU5vZGUoKTtcblxuICAgICAgaWYgKGlucHV0Tm9kZSAmJiBlLnRhcmdldCA9PT0gX3RoaXMucm9vdFJlZikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNNdWx0aXBsZU9yVGFnc09yQ29tYm9ib3goX3RoaXMucHJvcHMpICYmIGUudGFyZ2V0ID09PSBpbnB1dE5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuX2ZvY3VzZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5fZm9jdXNlZCA9IHRydWU7XG5cbiAgICAgIF90aGlzLnVwZGF0ZUZvY3VzQ2xhc3NOYW1lKCk7IC8vIG9ubHkgZWZmZWN0IG11bHRpcGxlIG9yIHRhZyBtb2RlXG5cblxuICAgICAgaWYgKCFpc011bHRpcGxlT3JUYWdzKF90aGlzLnByb3BzKSB8fCAhX3RoaXMuX21vdXNlRG93bikge1xuICAgICAgICBfdGhpcy50aW1lb3V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Qb3B1cEZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZml4IGllIHNjcm9sbGJhciwgZm9jdXMgZWxlbWVudCBhZ2FpblxuICAgICAgX3RoaXMubWF5YmVGb2N1cyh0cnVlLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25PdXRlckJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5ibHVyVGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLl9mb2N1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgX3RoaXMudXBkYXRlRm9jdXNDbGFzc05hbWUoKTtcblxuICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIHZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG4gICAgICAgIHZhciBpbnB1dFZhbHVlID0gX3RoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcblxuICAgICAgICBpZiAoaXNTaW5nbGVNb2RlKHByb3BzKSAmJiBwcm9wcy5zaG93U2VhcmNoICYmIGlucHV0VmFsdWUgJiYgcHJvcHMuZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uKSB7XG4gICAgICAgICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5fb3B0aW9ucyB8fCBbXTtcblxuICAgICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGZpcnN0T3B0aW9uID0gZmluZEZpcnN0TWVudUl0ZW0ob3B0aW9ucyk7XG5cbiAgICAgICAgICAgIGlmIChmaXJzdE9wdGlvbikge1xuICAgICAgICAgICAgICB2YWx1ZSA9IFtnZXRWYWx1ZVByb3BWYWx1ZShmaXJzdE9wdGlvbildO1xuXG4gICAgICAgICAgICAgIF90aGlzLmZpcmVDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpc011bHRpcGxlT3JUYWdzKHByb3BzKSAmJiBpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgaWYgKF90aGlzLl9tb3VzZURvd24pIHtcbiAgICAgICAgICAgIC8vIG5lZWQgdXBkYXRlIGRyb3BtZW51IHdoZW4gbm90IGJsdXJcbiAgICAgICAgICAgIF90aGlzLnNldElucHV0VmFsdWUoJycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB3aHkgbm90IHVzZSBzZXRTdGF0ZT9cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE0MjYyXG4gICAgICAgICAgICBfdGhpcy5zdGF0ZS5pbnB1dFZhbHVlID0gJyc7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5nZXRJbnB1dERPTU5vZGUgJiYgX3RoaXMuZ2V0SW5wdXRET01Ob2RlKCkpIHtcbiAgICAgICAgICAgICAgX3RoaXMuZ2V0SW5wdXRET01Ob2RlKCkudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdG1wVmFsdWUgPSBfdGhpcy5nZXRWYWx1ZUJ5SW5wdXQoaW5wdXRWYWx1ZSk7XG5cbiAgICAgICAgICBpZiAodG1wVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFsdWUgPSB0bXBWYWx1ZTtcblxuICAgICAgICAgICAgX3RoaXMuZmlyZUNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIGlmIGNsaWNrIHRoZSByZXN0IHNwYWNlIG9mIFNlbGVjdCBpbiBtdWx0aXBsZSBtb2RlXG5cblxuICAgICAgICBpZiAoaXNNdWx0aXBsZU9yVGFncyhwcm9wcykgJiYgX3RoaXMuX21vdXNlRG93bikge1xuICAgICAgICAgIF90aGlzLm1heWJlRm9jdXModHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgICBfdGhpcy5fbW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcblxuICAgICAgICBpZiAocHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgcHJvcHMub25CbHVyKF90aGlzLmdldFZMRm9yT25DaGFuZ2UodmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTApO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNsZWFyU2VsZWN0aW9uID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0YXRlO1xuXG4gICAgICBpZiAocHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IHN0YXRlLmlucHV0VmFsdWU7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAoaW5wdXRWYWx1ZSB8fCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIF90aGlzLmZpcmVDaGFuZ2UoW10pO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKGZhbHNlLCB7XG4gICAgICAgICAgbmVlZEZvY3VzOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgX3RoaXMuc2V0SW5wdXRWYWx1ZSgnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25DaG9pY2VBbmltYXRpb25MZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmZvcmNlUG9wdXBBbGlnbigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRPcHRpb25JbmZvQnlTaW5nbGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9uc0luZm8pIHtcbiAgICAgIHZhciBpbmZvO1xuICAgICAgb3B0aW9uc0luZm8gPSBvcHRpb25zSW5mbyB8fCBfdGhpcy5zdGF0ZS5vcHRpb25zSW5mbztcblxuICAgICAgaWYgKG9wdGlvbnNJbmZvW2dldE1hcEtleSh2YWx1ZSldKSB7XG4gICAgICAgIGluZm8gPSBvcHRpb25zSW5mb1tnZXRNYXBLZXkodmFsdWUpXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWZhdWx0TGFiZWwgPSB2YWx1ZTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLmxhYmVsSW5WYWx1ZSkge1xuICAgICAgICB2YXIgdmFsdWVMYWJlbCA9IGdldExhYmVsRnJvbVByb3BzVmFsdWUoX3RoaXMucHJvcHMudmFsdWUsIHZhbHVlKTtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZUxhYmVsID0gZ2V0TGFiZWxGcm9tUHJvcHNWYWx1ZShfdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsIHZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWVMYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGVmYXVsdExhYmVsID0gdmFsdWVMYWJlbDtcbiAgICAgICAgfSBlbHNlIGlmIChkZWZhdWx0VmFsdWVMYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGVmYXVsdExhYmVsID0gZGVmYXVsdFZhbHVlTGFiZWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGRlZmF1bHRJbmZvID0ge1xuICAgICAgICBvcHRpb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGtleTogdmFsdWVcbiAgICAgICAgfSwgdmFsdWUpLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGxhYmVsOiBkZWZhdWx0TGFiZWxcbiAgICAgIH07XG4gICAgICByZXR1cm4gZGVmYXVsdEluZm87XG4gICAgfTtcblxuICAgIF90aGlzLmdldE9wdGlvbkJ5U2luZ2xlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRPcHRpb25JbmZvQnkgPSBfdGhpcy5nZXRPcHRpb25JbmZvQnlTaW5nbGVWYWx1ZSh2YWx1ZSksXG4gICAgICAgICAgb3B0aW9uID0gX3RoaXMkZ2V0T3B0aW9uSW5mb0J5Lm9wdGlvbjtcblxuICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0T3B0aW9uc0J5U2luZ2xlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdldE9wdGlvbkJ5U2luZ2xlVmFsdWUodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldFZhbHVlQnlMYWJlbCA9IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgaWYgKGxhYmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IG51bGw7XG4gICAgICBPYmplY3Qua2V5cyhfdGhpcy5zdGF0ZS5vcHRpb25zSW5mbykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBpbmZvID0gX3RoaXMuc3RhdGUub3B0aW9uc0luZm9ba2V5XTtcbiAgICAgICAgdmFyIGRpc2FibGVkID0gaW5mby5kaXNhYmxlZDtcblxuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2xkTGFibGUgPSB0b0FycmF5KGluZm8ubGFiZWwpO1xuXG4gICAgICAgIGlmIChvbGRMYWJsZSAmJiBvbGRMYWJsZS5qb2luKCcnKSA9PT0gbGFiZWwpIHtcbiAgICAgICAgICB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRWTEJ5U2luZ2xlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5sYWJlbEluVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBrZXk6IHZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBfdGhpcy5nZXRMYWJlbEJ5U2luZ2xlVmFsdWUodmFsdWUpXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0VkxGb3JPbkNoYW5nZSA9IGZ1bmN0aW9uICh2bHNTKSB7XG4gICAgICB2YXIgdmxzID0gdmxzUztcblxuICAgICAgaWYgKHZscyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghX3RoaXMucHJvcHMubGFiZWxJblZhbHVlKSB7XG4gICAgICAgICAgdmxzID0gdmxzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmxzID0gdmxzLm1hcChmdW5jdGlvbiAodmwpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtleTogdmwsXG4gICAgICAgICAgICAgIGxhYmVsOiBfdGhpcy5nZXRMYWJlbEJ5U2luZ2xlVmFsdWUodmwpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzTXVsdGlwbGVPclRhZ3MoX3RoaXMucHJvcHMpID8gdmxzIDogdmxzWzBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmxzO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRMYWJlbEJ5U2luZ2xlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnNJbmZvKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0T3B0aW9uSW5mb0J5MiA9IF90aGlzLmdldE9wdGlvbkluZm9CeVNpbmdsZVZhbHVlKHZhbHVlLCBvcHRpb25zSW5mbyksXG4gICAgICAgICAgbGFiZWwgPSBfdGhpcyRnZXRPcHRpb25JbmZvQnkyLmxhYmVsO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfTtcblxuICAgIF90aGlzLmdldERyb3Bkb3duQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5kcm9wZG93bkNvbnRhaW5lcikge1xuICAgICAgICBfdGhpcy5kcm9wZG93bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF90aGlzLmRyb3Bkb3duQ29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmRyb3Bkb3duQ29udGFpbmVyO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRQbGFjZWhvbGRlckVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0YXRlO1xuICAgICAgdmFyIGhpZGRlbiA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGUuaW5wdXRWYWx1ZSkge1xuICAgICAgICBoaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcblxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBoaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNDb21ib2JveChwcm9wcykgJiYgdmFsdWUubGVuZ3RoID09PSAxICYmIHN0YXRlLnZhbHVlICYmICFzdGF0ZS52YWx1ZVswXSkge1xuICAgICAgICBoaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBsYWNlaG9sZGVyID0gcHJvcHMucGxhY2Vob2xkZXI7XG5cbiAgICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgb25Nb3VzZURvd246IHByZXZlbnREZWZhdWx0RXZlbnQsXG4gICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGhpZGRlbiA/ICdub25lJyA6ICdibG9jaydcbiAgICAgICAgICB9LCBVTlNFTEVDVEFCTEVfU1RZTEUpXG4gICAgICAgIH0sIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsIHtcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpcy5vblBsYWNlaG9sZGVyQ2xpY2ssXG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcm9wcy5wcmVmaXhDbHMsIFwiLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXJcIilcbiAgICAgICAgfSksIHBsYWNlaG9sZGVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIF90aGlzLmdldElucHV0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgdmFyIGRlZmF1bHRJbnB1dCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgICAgYXV0b0NvbXBsZXRlOiBcIm9mZlwiXG4gICAgICB9KTsgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnR5cGVkZWYtd2hpdGVzcGFjZVxuXG4gICAgICB2YXIgaW5wdXRFbGVtZW50ID0gcHJvcHMuZ2V0SW5wdXRFbGVtZW50ID8gcHJvcHMuZ2V0SW5wdXRFbGVtZW50KCkgOiBkZWZhdWx0SW5wdXQ7XG4gICAgICB2YXIgaW5wdXRDbHMgPSBjbGFzc25hbWVzKGlucHV0RWxlbWVudC5wcm9wcy5jbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJvcHMucHJlZml4Q2xzLCBcIi1zZWFyY2hfX2ZpZWxkXCIpLCB0cnVlKSk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzQ5OTIjaXNzdWVjb21tZW50LTI4MTU0MjE1OVxuICAgICAgLy8gQWRkIHNwYWNlIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0VmFsdWUgYXMgdGhlIHdpZHRoIG1lYXN1cmVtZW50IHRvbGVyYW5jZVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJvcHMucHJlZml4Q2xzLCBcIi1zZWFyY2hfX2ZpZWxkX193cmFwXCIpXG4gICAgICB9LCBSZWFjdC5jbG9uZUVsZW1lbnQoaW5wdXRFbGVtZW50LCB7XG4gICAgICAgIHJlZjogX3RoaXMuc2F2ZUlucHV0UmVmLFxuICAgICAgICBvbkNoYW5nZTogX3RoaXMub25JbnB1dENoYW5nZSxcbiAgICAgICAgb25LZXlEb3duOiBjaGFpbmluZyhfdGhpcy5vbklucHV0S2V5RG93biwgaW5wdXRFbGVtZW50LnByb3BzLm9uS2V5RG93biwgX3RoaXMucHJvcHMub25JbnB1dEtleURvd24pLFxuICAgICAgICB2YWx1ZTogX3RoaXMuc3RhdGUuaW5wdXRWYWx1ZSxcbiAgICAgICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgICAgICBjbGFzc05hbWU6IGlucHV0Q2xzXG4gICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICByZWY6IF90aGlzLnNhdmVJbnB1dE1pcnJvclJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcm9wcy5wcmVmaXhDbHMsIFwiLXNlYXJjaF9fZmllbGRfX21pcnJvclwiKVxuICAgICAgfSwgX3RoaXMuc3RhdGUuaW5wdXRWYWx1ZSwgXCJcXHhBMFwiKSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldElucHV0RE9NTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy50b3BDdHJsUmVmID8gX3RoaXMudG9wQ3RybFJlZi5xdWVyeVNlbGVjdG9yKCdpbnB1dCx0ZXh0YXJlYSxkaXZbY29udGVudEVkaXRhYmxlXScpIDogX3RoaXMuaW5wdXRSZWY7XG4gICAgfTtcblxuICAgIF90aGlzLmdldElucHV0TWlycm9yRE9NTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5pbnB1dE1pcnJvclJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0UG9wdXBET01Ob2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnNlbGVjdFRyaWdnZXJSZWYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNlbGVjdFRyaWdnZXJSZWYuZ2V0UG9wdXBET01Ob2RlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldFBvcHVwTWVudUNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zZWxlY3RUcmlnZ2VyUmVmKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zZWxlY3RUcmlnZ2VyUmVmLmdldElubmVyTWVudSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zZXRPcGVuU3RhdGUgPSBmdW5jdGlvbiAob3Blbikge1xuICAgICAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgbmVlZEZvY3VzID0gY29uZmlnLm5lZWRGb2N1cyxcbiAgICAgICAgICBmaXJlU2VhcmNoID0gY29uZmlnLmZpcmVTZWFyY2g7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdGF0ZSA9IF90aGlzLnN0YXRlO1xuXG4gICAgICBpZiAoc3RhdGUub3BlbiA9PT0gb3Blbikge1xuICAgICAgICBfdGhpcy5tYXliZUZvY3VzKG9wZW4sICEhbmVlZEZvY3VzKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkRyb3Bkb3duVmlzaWJsZUNoYW5nZShvcGVuKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgb3Blbjogb3BlbixcbiAgICAgICAgYmFja2ZpbGxWYWx1ZTogJydcbiAgICAgIH07IC8vIGNsZWFyIHNlYXJjaCBpbnB1dCB2YWx1ZSB3aGVuIG9wZW4gaXMgZmFsc2UgaW4gc2luZ2xlTW9kZS5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE2NTcyXG5cbiAgICAgIGlmICghb3BlbiAmJiBpc1NpbmdsZU1vZGUocHJvcHMpICYmIHByb3BzLnNob3dTZWFyY2gpIHtcbiAgICAgICAgX3RoaXMuc2V0SW5wdXRWYWx1ZSgnJywgZmlyZVNlYXJjaCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3Blbikge1xuICAgICAgICBfdGhpcy5tYXliZUZvY3VzKG9wZW4sICEhbmVlZEZvY3VzKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoX2V4dGVuZHMoe1xuICAgICAgICBvcGVuOiBvcGVuXG4gICAgICB9LCBuZXh0U3RhdGUpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgX3RoaXMubWF5YmVGb2N1cyhvcGVuLCAhIW5lZWRGb2N1cyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gKGlucHV0VmFsdWUpIHtcbiAgICAgIHZhciBmaXJlU2VhcmNoID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuICAgICAgdmFyIG9uU2VhcmNoID0gX3RoaXMucHJvcHMub25TZWFyY2g7XG5cbiAgICAgIGlmIChpbnB1dFZhbHVlICE9PSBfdGhpcy5zdGF0ZS5pbnB1dFZhbHVlKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICAvLyBBZGRpdGlvbmFsIGNoZWNrIGlmIGBpbnB1dFZhbHVlYCBjaGFuZ2VkIGluIGxhdGVzdCBzdGF0ZS5cbiAgICAgICAgICBpZiAoZmlyZVNlYXJjaCAmJiBpbnB1dFZhbHVlICE9PSBwcmV2U3RhdGUuaW5wdXRWYWx1ZSAmJiBvblNlYXJjaCkge1xuICAgICAgICAgICAgb25TZWFyY2goaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICB9LCBfdGhpcy5mb3JjZVBvcHVwQWxpZ24pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRWYWx1ZUJ5SW5wdXQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczIubXVsdGlwbGUsXG4gICAgICAgICAgdG9rZW5TZXBhcmF0b3JzID0gX3RoaXMkcHJvcHMyLnRva2VuU2VwYXJhdG9ycztcbiAgICAgIHZhciBuZXh0VmFsdWUgPSBfdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciBoYXNOZXdWYWx1ZSA9IGZhbHNlO1xuICAgICAgc3BsaXRCeVNlcGFyYXRvcnMoc3RyLCB0b2tlblNlcGFyYXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZFZhbHVlID0gW2xhYmVsXTtcblxuICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBfdGhpcy5nZXRWYWx1ZUJ5TGFiZWwobGFiZWwpO1xuXG4gICAgICAgICAgaWYgKHZhbHVlICYmIGZpbmRJbmRleEluVmFsdWVCeVNpbmdsZVZhbHVlKG5leHRWYWx1ZSwgdmFsdWUpID09PSAtMSkge1xuICAgICAgICAgICAgbmV4dFZhbHVlID0gbmV4dFZhbHVlLmNvbmNhdCh2YWx1ZSk7XG4gICAgICAgICAgICBoYXNOZXdWYWx1ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIF90aGlzLmZpcmVTZWxlY3QodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChmaW5kSW5kZXhJblZhbHVlQnlTaW5nbGVWYWx1ZShuZXh0VmFsdWUsIGxhYmVsKSA9PT0gLTEpIHtcbiAgICAgICAgICBuZXh0VmFsdWUgPSBuZXh0VmFsdWUuY29uY2F0KHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgIGhhc05ld1ZhbHVlID0gdHJ1ZTtcblxuICAgICAgICAgIF90aGlzLmZpcmVTZWxlY3QobGFiZWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBoYXNOZXdWYWx1ZSA/IG5leHRWYWx1ZSA6IHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0UmVhbE9wZW5TdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgICAgIHZhciBfb3BlbiA9IF90aGlzLnByb3BzLm9wZW47XG5cbiAgICAgIGlmICh0eXBlb2YgX29wZW4gPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gX29wZW47XG4gICAgICB9XG5cbiAgICAgIHZhciBvcGVuID0gKHN0YXRlIHx8IF90aGlzLnN0YXRlKS5vcGVuO1xuICAgICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5fb3B0aW9ucyB8fCBbXTtcblxuICAgICAgaWYgKGlzTXVsdGlwbGVPclRhZ3NPckNvbWJvYm94KF90aGlzLnByb3BzKSB8fCAhX3RoaXMucHJvcHMuc2hvd1NlYXJjaCkge1xuICAgICAgICBpZiAob3BlbiAmJiAhb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICBvcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wZW47XG4gICAgfTtcblxuICAgIF90aGlzLm1hcmtNb3VzZURvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5fbW91c2VEb3duID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMubWFya01vdXNlTGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5fbW91c2VEb3duID0gZmFsc2U7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUJhY2tmaWxsID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuYmFja2ZpbGwgfHwgIShpc1NpbmdsZU1vZGUoX3RoaXMucHJvcHMpIHx8IGlzQ29tYm9ib3goX3RoaXMucHJvcHMpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXkgPSBnZXRWYWx1ZVByb3BWYWx1ZShpdGVtKTtcblxuICAgICAgaWYgKGlzQ29tYm9ib3goX3RoaXMucHJvcHMpKSB7XG4gICAgICAgIF90aGlzLnNldElucHV0VmFsdWUoa2V5LCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsdWU6IFtrZXldLFxuICAgICAgICBiYWNrZmlsbFZhbHVlOiBrZXlcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5maWx0ZXJPcHRpb24gPSBmdW5jdGlvbiAoaW5wdXQsIGNoaWxkKSB7XG4gICAgICB2YXIgZGVmYXVsdEZpbHRlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZGVmYXVsdEZpbHRlckZuO1xuICAgICAgdmFyIHZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgbGFzdFZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghaW5wdXQgfHwgbGFzdFZhbHVlICYmIGxhc3RWYWx1ZSA9PT0gX3RoaXMuc3RhdGUuYmFja2ZpbGxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbHRlckZuID0gX3RoaXMucHJvcHMuZmlsdGVyT3B0aW9uO1xuXG4gICAgICBpZiAoJ2ZpbHRlck9wdGlvbicgaW4gX3RoaXMucHJvcHMpIHtcbiAgICAgICAgaWYgKGZpbHRlckZuID09PSB0cnVlKSB7XG4gICAgICAgICAgZmlsdGVyRm4gPSBkZWZhdWx0RmlsdGVyLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXJGbiA9IGRlZmF1bHRGaWx0ZXIuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZmlsdGVyRm4pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXJGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmlsdGVyRm4uY2FsbChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgaW5wdXQsIGNoaWxkKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGQucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMudGltZW91dEZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9uRm9jdXMgPSBfdGhpcy5wcm9wcy5vbkZvY3VzO1xuXG4gICAgICBpZiAoX3RoaXMuZm9jdXNUaW1lcikge1xuICAgICAgICBfdGhpcy5jbGVhckZvY3VzVGltZSgpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5mb2N1c1RpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAob25Gb2N1cykge1xuICAgICAgICAgIG9uRm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTApO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbGVhckZvY3VzVGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5mb2N1c1RpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5mb2N1c1RpbWVyKTtcbiAgICAgICAgX3RoaXMuZm9jdXNUaW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmNsZWFyQmx1clRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuYmx1clRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5ibHVyVGltZXIpO1xuICAgICAgICBfdGhpcy5ibHVyVGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5jbGVhckNvbWJvYm94VGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5jb21ib2JveFRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5jb21ib2JveFRpbWVyKTtcbiAgICAgICAgX3RoaXMuY29tYm9ib3hUaW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnVwZGF0ZUZvY3VzQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJvb3RSZWYgPSBfdGhpcy5yb290UmVmO1xuICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7IC8vIGF2b2lkIHNldFN0YXRlIGFuZCBpdHMgc2lkZSBlZmZlY3RcblxuICAgICAgaWYgKF90aGlzLl9mb2N1c2VkKSB7XG4gICAgICAgIGNsYXNzZXMocm9vdFJlZikuYWRkKFwiXCIuY29uY2F0KHByb3BzLnByZWZpeENscywgXCItZm9jdXNlZFwiKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc2VzKHJvb3RSZWYpLnJlbW92ZShcIlwiLmNvbmNhdChwcm9wcy5wcmVmaXhDbHMsIFwiLWZvY3VzZWRcIikpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5tYXliZUZvY3VzID0gZnVuY3Rpb24gKG9wZW4sIG5lZWRGb2N1cykge1xuICAgICAgaWYgKG5lZWRGb2N1cyB8fCBvcGVuKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IF90aGlzLmdldElucHV0RE9NTm9kZSgpO1xuXG4gICAgICAgIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudCxcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBfZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICBpZiAoaW5wdXQgJiYgKG9wZW4gfHwgaXNNdWx0aXBsZU9yVGFnc09yQ29tYm9ib3goX3RoaXMucHJvcHMpKSkge1xuICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ICE9PSBpbnB1dCkge1xuICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIF90aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlRWxlbWVudCAhPT0gX3RoaXMuc2VsZWN0aW9uUmVmICYmIF90aGlzLnNlbGVjdGlvblJlZikge1xuICAgICAgICAgIF90aGlzLnNlbGVjdGlvblJlZi5mb2N1cygpO1xuXG4gICAgICAgICAgX3RoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbW92ZVNlbGVjdGVkID0gZnVuY3Rpb24gKHNlbGVjdGVkS2V5LCBlKSB7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcblxuICAgICAgaWYgKHByb3BzLmRpc2FibGVkIHx8IF90aGlzLmlzQ2hpbGREaXNhYmxlZChzZWxlY3RlZEtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBEbyBub3QgdHJpZ2dlciBUcmlnZ2VyIHBvcHVwXG5cblxuICAgICAgaWYgKGUgJiYgZS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9sZFZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgdmFsdWUgPSBvbGRWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKHNpbmdsZVZhbHVlKSB7XG4gICAgICAgIHJldHVybiBzaW5nbGVWYWx1ZSAhPT0gc2VsZWN0ZWRLZXk7XG4gICAgICB9KTtcbiAgICAgIHZhciBjYW5NdWx0aXBsZSA9IGlzTXVsdGlwbGVPclRhZ3MocHJvcHMpO1xuXG4gICAgICBpZiAoY2FuTXVsdGlwbGUpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gc2VsZWN0ZWRLZXk7XG5cbiAgICAgICAgaWYgKHByb3BzLmxhYmVsSW5WYWx1ZSkge1xuICAgICAgICAgIGV2ZW50ID0ge1xuICAgICAgICAgICAga2V5OiBzZWxlY3RlZEtleSxcbiAgICAgICAgICAgIGxhYmVsOiBfdGhpcy5nZXRMYWJlbEJ5U2luZ2xlVmFsdWUoc2VsZWN0ZWRLZXkpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5vbkRlc2VsZWN0KSB7XG4gICAgICAgICAgcHJvcHMub25EZXNlbGVjdChldmVudCwgX3RoaXMuZ2V0T3B0aW9uQnlTaW5nbGVWYWx1ZShzZWxlY3RlZEtleSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmZpcmVDaGFuZ2UodmFsdWUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vcGVuSWZIYXNDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuXG4gICAgICBpZiAoUmVhY3QuQ2hpbGRyZW4uY291bnQocHJvcHMuY2hpbGRyZW4pIHx8IGlzU2luZ2xlTW9kZShwcm9wcykpIHtcbiAgICAgICAgX3RoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5maXJlU2VsZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25TZWxlY3QoX3RoaXMuZ2V0VkxCeVNpbmdsZVZhbHVlKHZhbHVlKSwgX3RoaXMuZ2V0T3B0aW9uQnlTaW5nbGVWYWx1ZSh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5maXJlQ2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcblxuICAgICAgaWYgKCEoJ3ZhbHVlJyBpbiBwcm9wcykpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBfdGhpcy5mb3JjZVBvcHVwQWxpZ24pO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmxzID0gX3RoaXMuZ2V0VkxGb3JPbkNoYW5nZSh2YWx1ZSk7XG5cbiAgICAgIHZhciBvcHRpb25zID0gX3RoaXMuZ2V0T3B0aW9uc0J5U2luZ2xlVmFsdWUodmFsdWUpO1xuXG4gICAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgcHJvcHMub25DaGFuZ2UodmxzLCBpc011bHRpcGxlT3JUYWdzKF90aGlzLnByb3BzKSA/IG9wdGlvbnMgOiBvcHRpb25zWzBdKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaXNDaGlsZERpc2FibGVkID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuVG9BcnJheShfdGhpcy5wcm9wcy5jaGlsZHJlbikuc29tZShmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGNoaWxkVmFsdWUgPSBnZXRWYWx1ZVByb3BWYWx1ZShjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZFZhbHVlID09PSBrZXkgJiYgY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMuZGlzYWJsZWQ7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZm9yY2VQb3B1cEFsaWduID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnNlbGVjdFRyaWdnZXJSZWYgJiYgX3RoaXMuc2VsZWN0VHJpZ2dlclJlZi50cmlnZ2VyUmVmKSB7XG4gICAgICAgIF90aGlzLnNlbGVjdFRyaWdnZXJSZWYudHJpZ2dlclJlZi5mb3JjZVBvcHVwQWxpZ24oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyRmlsdGVyT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gX3RoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMy5jaGlsZHJlbixcbiAgICAgICAgICB0YWdzID0gX3RoaXMkcHJvcHMzLnRhZ3MsXG4gICAgICAgICAgbm90Rm91bmRDb250ZW50ID0gX3RoaXMkcHJvcHMzLm5vdEZvdW5kQ29udGVudDtcbiAgICAgIHZhciBtZW51SXRlbXMgPSBbXTtcbiAgICAgIHZhciBjaGlsZHJlbktleXMgPSBbXTtcbiAgICAgIHZhciBlbXB0eSA9IGZhbHNlO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IF90aGlzLnJlbmRlckZpbHRlck9wdGlvbnNGcm9tQ2hpbGRyZW4oY2hpbGRyZW4sIGNoaWxkcmVuS2V5cywgbWVudUl0ZW1zKTtcblxuICAgICAgaWYgKHRhZ3MpIHtcbiAgICAgICAgLy8gdGFncyB2YWx1ZSBtdXN0IGJlIHN0cmluZ1xuICAgICAgICB2YXIgdmFsdWUgPSBfdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5maWx0ZXIoZnVuY3Rpb24gKHNpbmdsZVZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkcmVuS2V5cy5pbmRleE9mKHNpbmdsZVZhbHVlKSA9PT0gLTEgJiYgKCFpbnB1dFZhbHVlIHx8IFN0cmluZyhzaW5nbGVWYWx1ZSkuaW5kZXhPZihTdHJpbmcoaW5wdXRWYWx1ZSkpID4gLTEpO1xuICAgICAgICB9KTsgLy8gc29ydCBieSBsZW5ndGhcblxuICAgICAgICB2YWx1ZS5zb3J0KGZ1bmN0aW9uICh2YWwxLCB2YWwyKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbDEubGVuZ3RoIC0gdmFsMi5sZW5ndGg7XG4gICAgICAgIH0pO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChzaW5nbGVWYWx1ZSkge1xuICAgICAgICAgIHZhciBrZXkgPSBzaW5nbGVWYWx1ZTtcbiAgICAgICAgICB2YXIgbWVudUl0ZW0gPSBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7XG4gICAgICAgICAgICBzdHlsZTogVU5TRUxFQ1RBQkxFX1NUWUxFLFxuICAgICAgICAgICAgcm9sZTogXCJvcHRpb25cIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogVU5TRUxFQ1RBQkxFX0FUVFJJQlVURSxcbiAgICAgICAgICAgIHZhbHVlOiBrZXksXG4gICAgICAgICAgICBrZXk6IGtleVxuICAgICAgICAgIH0sIGtleSk7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKG1lbnVJdGVtKTtcbiAgICAgICAgICBtZW51SXRlbXMucHVzaChtZW51SXRlbSk7XG4gICAgICAgIH0pOyAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE0MDkwXG5cbiAgICAgICAgaWYgKGlucHV0VmFsdWUgJiYgbWVudUl0ZW1zLmV2ZXJ5KGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICByZXR1cm4gZ2V0VmFsdWVQcm9wVmFsdWUob3B0aW9uKSAhPT0gaW5wdXRWYWx1ZTtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBvcHRpb25zLnVuc2hpZnQoUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwge1xuICAgICAgICAgICAgc3R5bGU6IFVOU0VMRUNUQUJMRV9TVFlMRSxcbiAgICAgICAgICAgIHJvbGU6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsXG4gICAgICAgICAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgIGtleTogaW5wdXRWYWx1ZVxuICAgICAgICAgIH0sIGlucHV0VmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMubGVuZ3RoICYmIG5vdEZvdW5kQ29udGVudCkge1xuICAgICAgICBlbXB0eSA9IHRydWU7XG4gICAgICAgIG9wdGlvbnMgPSBbUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwge1xuICAgICAgICAgIHN0eWxlOiBVTlNFTEVDVEFCTEVfU1RZTEUsXG4gICAgICAgICAgYXR0cmlidXRlOiBVTlNFTEVDVEFCTEVfQVRUUklCVVRFLFxuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgIHJvbGU6IFwib3B0aW9uXCIsXG4gICAgICAgICAgdmFsdWU6IFwiTk9UX0ZPVU5EXCIsXG4gICAgICAgICAga2V5OiBcIk5PVF9GT1VORFwiXG4gICAgICAgIH0sIG5vdEZvdW5kQ29udGVudCldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbXB0eTogZW1wdHksXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckZpbHRlck9wdGlvbnNGcm9tQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY2hpbGRyZW4sIGNoaWxkcmVuS2V5cywgbWVudUl0ZW1zKSB7XG4gICAgICB2YXIgc2VsID0gW107XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gX3RoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICAgIHZhciB0YWdzID0gcHJvcHMudGFncztcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHR5cGUgPSBjaGlsZC50eXBlO1xuXG4gICAgICAgIGlmICh0eXBlLmlzU2VsZWN0T3B0R3JvdXApIHtcbiAgICAgICAgICB2YXIgbGFiZWwgPSBjaGlsZC5wcm9wcy5sYWJlbDtcbiAgICAgICAgICB2YXIga2V5ID0gY2hpbGQua2V5O1xuXG4gICAgICAgICAgaWYgKCFrZXkgJiYgdHlwZW9mIGxhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAga2V5ID0gbGFiZWw7XG4gICAgICAgICAgfSBlbHNlIGlmICghbGFiZWwgJiYga2V5KSB7XG4gICAgICAgICAgICBsYWJlbCA9IGtleTtcbiAgICAgICAgICB9IC8vIE1hdGNoIG9wdGlvbiBncm91cCBsYWJlbFxuXG5cbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSAmJiBfdGhpcy5maWx0ZXJPcHRpb24oaW5wdXRWYWx1ZSwgY2hpbGQpKSB7XG4gICAgICAgICAgICB2YXIgaW5uZXJJdGVtcyA9IGNoaWxkcmVuVG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikubWFwKGZ1bmN0aW9uIChzdWJDaGlsZCkge1xuICAgICAgICAgICAgICB2YXIgY2hpbGRWYWx1ZVN1YiA9IGdldFZhbHVlUHJvcFZhbHVlKHN1YkNoaWxkKSB8fCBzdWJDaGlsZC5rZXk7XG4gICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICAga2V5OiBjaGlsZFZhbHVlU3ViLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBjaGlsZFZhbHVlU3ViXG4gICAgICAgICAgICAgIH0sIHN1YkNoaWxkLnByb3BzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbC5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW1Hcm91cCwge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgdGl0bGU6IGxhYmVsXG4gICAgICAgICAgICB9LCBpbm5lckl0ZW1zKSk7IC8vIE5vdCBtYXRjaFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgX2lubmVySXRlbXMgPSBfdGhpcy5yZW5kZXJGaWx0ZXJPcHRpb25zRnJvbUNoaWxkcmVuKGNoaWxkLnByb3BzLmNoaWxkcmVuLCBjaGlsZHJlbktleXMsIG1lbnVJdGVtcyk7XG5cbiAgICAgICAgICAgIGlmIChfaW5uZXJJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgc2VsLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbUdyb3VwLCB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgdGl0bGU6IGxhYmVsXG4gICAgICAgICAgICAgIH0sIF9pbm5lckl0ZW1zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgd2FybmluZyh0eXBlLmlzU2VsZWN0T3B0aW9uLCAndGhlIGNoaWxkcmVuIG9mIGBTZWxlY3RgIHNob3VsZCBiZSBgU2VsZWN0Lk9wdGlvbmAgb3IgYFNlbGVjdC5PcHRHcm91cGAsICcgKyBcImluc3RlYWQgb2YgYFwiLmNvbmNhdCh0eXBlLm5hbWUgfHwgdHlwZS5kaXNwbGF5TmFtZSB8fCBjaGlsZC50eXBlLCBcImAuXCIpKTtcbiAgICAgICAgdmFyIGNoaWxkVmFsdWUgPSBnZXRWYWx1ZVByb3BWYWx1ZShjaGlsZCk7XG4gICAgICAgIHZhbGlkYXRlT3B0aW9uVmFsdWUoY2hpbGRWYWx1ZSwgX3RoaXMucHJvcHMpO1xuXG4gICAgICAgIGlmIChfdGhpcy5maWx0ZXJPcHRpb24oaW5wdXRWYWx1ZSwgY2hpbGQpKSB7XG4gICAgICAgICAgdmFyIG1lbnVJdGVtID0gUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgX2V4dGVuZHMoe1xuICAgICAgICAgICAgc3R5bGU6IFVOU0VMRUNUQUJMRV9TVFlMRSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogVU5TRUxFQ1RBQkxFX0FUVFJJQlVURSxcbiAgICAgICAgICAgIHZhbHVlOiBjaGlsZFZhbHVlLFxuICAgICAgICAgICAga2V5OiBjaGlsZFZhbHVlLFxuICAgICAgICAgICAgcm9sZTogXCJvcHRpb25cIlxuICAgICAgICAgIH0sIGNoaWxkLnByb3BzKSk7XG4gICAgICAgICAgc2VsLnB1c2gobWVudUl0ZW0pO1xuICAgICAgICAgIG1lbnVJdGVtcy5wdXNoKG1lbnVJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YWdzKSB7XG4gICAgICAgICAgY2hpbGRyZW5LZXlzLnB1c2goY2hpbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNlbDtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyVG9wQ29udHJvbE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBvcGVuID0gX3RoaXMkc3RhdGUub3BlbixcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICB2YXIgY2hvaWNlVHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5jaG9pY2VUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgbWF4VGFnVGV4dExlbmd0aCA9IHByb3BzLm1heFRhZ1RleHRMZW5ndGgsXG4gICAgICAgICAgbWF4VGFnQ291bnQgPSBwcm9wcy5tYXhUYWdDb3VudCxcbiAgICAgICAgICBzaG93U2VhcmNoID0gcHJvcHMuc2hvd1NlYXJjaCxcbiAgICAgICAgICByZW1vdmVJY29uID0gcHJvcHMucmVtb3ZlSWNvbjtcbiAgICAgIHZhciBtYXhUYWdQbGFjZWhvbGRlciA9IHByb3BzLm1heFRhZ1BsYWNlaG9sZGVyO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uX19yZW5kZXJlZFwiKTsgLy8gc2VhcmNoIGlucHV0IGlzIGluc2lkZSB0b3BDb250cm9sTm9kZSBpbiBzaW5nbGUsIG11bHRpcGxlICYgY29tYm9ib3guIDIwMTYvMDQvMTNcblxuICAgICAgdmFyIGlubmVyTm9kZSA9IG51bGw7XG5cbiAgICAgIGlmIChpc1NpbmdsZU1vZGUocHJvcHMpKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZFZhbHVlID0gbnVsbDtcblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgdmFyIG9wYWNpdHkgPSAxO1xuXG4gICAgICAgICAgaWYgKCFzaG93U2VhcmNoKSB7XG4gICAgICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcGVuKSB7XG4gICAgICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICFpbnB1dFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgb3BhY2l0eSA9IDAuNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzaW5nbGVWYWx1ZSA9IHZhbHVlWzBdO1xuXG4gICAgICAgICAgdmFyIF90aGlzJGdldE9wdGlvbkluZm9CeTMgPSBfdGhpcy5nZXRPcHRpb25JbmZvQnlTaW5nbGVWYWx1ZShzaW5nbGVWYWx1ZSksXG4gICAgICAgICAgICAgIGxhYmVsID0gX3RoaXMkZ2V0T3B0aW9uSW5mb0J5My5sYWJlbCxcbiAgICAgICAgICAgICAgdGl0bGUgPSBfdGhpcyRnZXRPcHRpb25JbmZvQnkzLnRpdGxlO1xuXG4gICAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAga2V5OiBcInZhbHVlXCIsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uLXNlbGVjdGVkLXZhbHVlXCIpLFxuICAgICAgICAgICAgdGl0bGU6IHRvVGl0bGUodGl0bGUgfHwgbGFiZWwpLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogc2hvd1NlbGVjdGVkVmFsdWUgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBvcGFjaXR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgbGFiZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaG93U2VhcmNoKSB7XG4gICAgICAgICAgaW5uZXJOb2RlID0gW3NlbGVjdGVkVmFsdWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlubmVyTm9kZSA9IFtzZWxlY3RlZFZhbHVlLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWFyY2ggXCIpLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlYXJjaC0taW5saW5lXCIpLFxuICAgICAgICAgICAga2V5OiBcImlucHV0XCIsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBvcGVuID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF90aGlzLmdldElucHV0RWxlbWVudCgpKV07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzZWxlY3RlZFZhbHVlTm9kZXMgPSBbXTtcbiAgICAgICAgdmFyIGxpbWl0ZWRDb3VudFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHZhciBtYXhUYWdQbGFjZWhvbGRlckVsO1xuXG4gICAgICAgIGlmIChtYXhUYWdDb3VudCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLmxlbmd0aCA+IG1heFRhZ0NvdW50KSB7XG4gICAgICAgICAgbGltaXRlZENvdW50VmFsdWUgPSBsaW1pdGVkQ291bnRWYWx1ZS5zbGljZSgwLCBtYXhUYWdDb3VudCk7XG5cbiAgICAgICAgICB2YXIgb21pdHRlZFZhbHVlcyA9IF90aGlzLmdldFZMRm9yT25DaGFuZ2UodmFsdWUuc2xpY2UobWF4VGFnQ291bnQsIHZhbHVlLmxlbmd0aCkpO1xuXG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSBcIisgXCIuY29uY2F0KHZhbHVlLmxlbmd0aCAtIG1heFRhZ0NvdW50LCBcIiAuLi5cIik7XG5cbiAgICAgICAgICBpZiAobWF4VGFnUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgbWF4VGFnUGxhY2Vob2xkZXIgPT09ICdmdW5jdGlvbicgPyBtYXhUYWdQbGFjZWhvbGRlcihvbWl0dGVkVmFsdWVzKSA6IG1heFRhZ1BsYWNlaG9sZGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1heFRhZ1BsYWNlaG9sZGVyRWwgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgX2V4dGVuZHMoe1xuICAgICAgICAgICAgc3R5bGU6IFVOU0VMRUNUQUJMRV9TVFlMRVxuICAgICAgICAgIH0sIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsIHtcbiAgICAgICAgICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsXG4gICAgICAgICAgICBvbk1vdXNlRG93bjogcHJldmVudERlZmF1bHRFdmVudCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb25fX2Nob2ljZSBcIikuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uX19jaG9pY2VfX2Rpc2FibGVkXCIpLFxuICAgICAgICAgICAga2V5OiBcIm1heFRhZ1BsYWNlaG9sZGVyXCIsXG4gICAgICAgICAgICB0aXRsZTogdG9UaXRsZShjb250ZW50KVxuICAgICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb25fX2Nob2ljZV9fY29udGVudFwiKVxuICAgICAgICAgIH0sIGNvbnRlbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc011bHRpcGxlT3JUYWdzKHByb3BzKSkge1xuICAgICAgICAgIHNlbGVjdGVkVmFsdWVOb2RlcyA9IGxpbWl0ZWRDb3VudFZhbHVlLm1hcChmdW5jdGlvbiAoc2luZ2xlVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBpbmZvID0gX3RoaXMuZ2V0T3B0aW9uSW5mb0J5U2luZ2xlVmFsdWUoc2luZ2xlVmFsdWUpO1xuXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGluZm8ubGFiZWw7XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBpbmZvLnRpdGxlIHx8IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmIChtYXhUYWdUZXh0TGVuZ3RoICYmIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyAmJiBjb250ZW50Lmxlbmd0aCA+IG1heFRhZ1RleHRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFwiXCIuY29uY2F0KGNvbnRlbnQuc2xpY2UoMCwgbWF4VGFnVGV4dExlbmd0aCksIFwiLi4uXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGlzYWJsZWQgPSBfdGhpcy5pc0NoaWxkRGlzYWJsZWQoc2luZ2xlVmFsdWUpO1xuXG4gICAgICAgICAgICB2YXIgY2hvaWNlQ2xhc3NOYW1lID0gZGlzYWJsZWQgPyBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvbl9fY2hvaWNlIFwiKS5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb25fX2Nob2ljZV9fZGlzYWJsZWRcIikgOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvbl9fY2hvaWNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgIHN0eWxlOiBVTlNFTEVDVEFCTEVfU1RZTEVcbiAgICAgICAgICAgIH0sIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsIHtcbiAgICAgICAgICAgICAgb25Nb3VzZURvd246IHByZXZlbnREZWZhdWx0RXZlbnQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogY2hvaWNlQ2xhc3NOYW1lLFxuICAgICAgICAgICAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgICAgICAgICAgICBrZXk6IHNpbmdsZVZhbHVlIHx8IFNFTEVDVF9FTVBUWV9WQUxVRV9LRVksXG4gICAgICAgICAgICAgIHRpdGxlOiB0b1RpdGxlKHRpdGxlKVxuICAgICAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uX19jaG9pY2VfX2NvbnRlbnRcIilcbiAgICAgICAgICAgIH0sIGNvbnRlbnQpLCBkaXNhYmxlZCA/IG51bGwgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVTZWxlY3RlZChzaW5nbGVWYWx1ZSwgZXZlbnQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZVwiKVxuICAgICAgICAgICAgfSwgcmVtb3ZlSWNvbiB8fCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlLWljb25cIilcbiAgICAgICAgICAgIH0sIFwiXFx4RDdcIikpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXhUYWdQbGFjZWhvbGRlckVsKSB7XG4gICAgICAgICAgc2VsZWN0ZWRWYWx1ZU5vZGVzLnB1c2gobWF4VGFnUGxhY2Vob2xkZXJFbCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RlZFZhbHVlTm9kZXMucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWFyY2ggXCIpLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlYXJjaC0taW5saW5lXCIpLFxuICAgICAgICAgIGtleTogXCJfX2lucHV0XCJcbiAgICAgICAgfSwgX3RoaXMuZ2V0SW5wdXRFbGVtZW50KCkpKTtcblxuICAgICAgICBpZiAoaXNNdWx0aXBsZU9yVGFncyhwcm9wcykgJiYgY2hvaWNlVHJhbnNpdGlvbk5hbWUpIHtcbiAgICAgICAgICBpbm5lck5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEFuaW1hdGUsIHtcbiAgICAgICAgICAgIG9uTGVhdmU6IF90aGlzLm9uQ2hvaWNlQW5pbWF0aW9uTGVhdmUsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFwidWxcIixcbiAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiBjaG9pY2VUcmFuc2l0aW9uTmFtZVxuICAgICAgICAgIH0sIHNlbGVjdGVkVmFsdWVOb2Rlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5uZXJOb2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIHNlbGVjdGVkVmFsdWVOb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiBfdGhpcy5zYXZlVG9wQ3RybFJlZlxuICAgICAgfSwgX3RoaXMuZ2V0UGxhY2Vob2xkZXJFbGVtZW50KCksIGlubmVyTm9kZSk7XG4gICAgfTtcblxuICAgIHZhciBvcHRpb25zSW5mbyA9IFNlbGVjdC5nZXRPcHRpb25zSW5mb0Zyb21Qcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAocHJvcHMudGFncyAmJiB0eXBlb2YgcHJvcHMuZmlsdGVyT3B0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXNEaXNhYmxlZEV4aXN0ID0gT2JqZWN0LmtleXMob3B0aW9uc0luZm8pLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uc0luZm9ba2V5XS5kaXNhYmxlZDtcbiAgICAgIH0pO1xuICAgICAgd2FybmluZyghaXNEaXNhYmxlZEV4aXN0LCAnUGxlYXNlIGF2b2lkIHNldHRpbmcgb3B0aW9uIHRvIGRpc2FibGVkIGluIHRhZ3MgbW9kZSBzaW5jZSB1c2VyIGNhbiBhbHdheXMgdHlwZSB0ZXh0IGFzIHRhZy4nKTtcbiAgICB9XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBTZWxlY3QuZ2V0VmFsdWVGcm9tUHJvcHMocHJvcHMsIHRydWUpLFxuICAgICAgaW5wdXRWYWx1ZTogcHJvcHMuY29tYm9ib3ggPyBTZWxlY3QuZ2V0SW5wdXRWYWx1ZUZvckNvbWJvYm94KHByb3BzLCBvcHRpb25zSW5mbywgdHJ1ZSkgOiAnJyxcbiAgICAgIG9wZW46IHByb3BzLmRlZmF1bHRPcGVuLFxuICAgICAgb3B0aW9uc0luZm86IG9wdGlvbnNJbmZvLFxuICAgICAgYmFja2ZpbGxWYWx1ZTogJycsXG4gICAgICAvLyBhIGZsYWcgZm9yIGF2aW9kIHJlZHVuZGFudCBnZXRPcHRpb25zSW5mb0Zyb21Qcm9wcyBjYWxsXG4gICAgICBza2lwQnVpbGRPcHRpb25zSW5mbzogdHJ1ZSxcbiAgICAgIGFyaWFJZDogJydcbiAgICB9O1xuICAgIF90aGlzLnNhdmVJbnB1dFJlZiA9IHNhdmVSZWYoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICdpbnB1dFJlZicpO1xuICAgIF90aGlzLnNhdmVJbnB1dE1pcnJvclJlZiA9IHNhdmVSZWYoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICdpbnB1dE1pcnJvclJlZicpO1xuICAgIF90aGlzLnNhdmVUb3BDdHJsUmVmID0gc2F2ZVJlZihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgJ3RvcEN0cmxSZWYnKTtcbiAgICBfdGhpcy5zYXZlU2VsZWN0VHJpZ2dlclJlZiA9IHNhdmVSZWYoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksICdzZWxlY3RUcmlnZ2VyUmVmJyk7XG4gICAgX3RoaXMuc2F2ZVJvb3RSZWYgPSBzYXZlUmVmKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAncm9vdFJlZicpO1xuICAgIF90aGlzLnNhdmVTZWxlY3Rpb25SZWYgPSBzYXZlUmVmKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCAnc2VsZWN0aW9uUmVmJyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNlbGVjdCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAvLyB3aGVuIGRlZmF1bHRPcGVuIGlzIHRydWUsIHdlIHNob3VsZCBhdXRvIGZvY3VzIHNlYXJjaCBpbnB1dFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTQyNTRcbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cyB8fCB0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXJpYUlkOiBnZW5lcmF0ZVVVSUQoKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBpZiAoaXNNdWx0aXBsZU9yVGFncyh0aGlzLnByb3BzKSkge1xuICAgICAgICB2YXIgaW5wdXROb2RlID0gdGhpcy5nZXRJbnB1dERPTU5vZGUoKTtcbiAgICAgICAgdmFyIG1pcnJvck5vZGUgPSB0aGlzLmdldElucHV0TWlycm9yRE9NTm9kZSgpO1xuXG4gICAgICAgIGlmIChpbnB1dE5vZGUgJiYgaW5wdXROb2RlLnZhbHVlICYmIG1pcnJvck5vZGUpIHtcbiAgICAgICAgICBpbnB1dE5vZGUuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICBpbnB1dE5vZGUuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdChtaXJyb3JOb2RlLmNsaWVudFdpZHRoLCBcInB4XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0Tm9kZSkge1xuICAgICAgICAgIGlucHV0Tm9kZS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZm9yY2VQb3B1cEFsaWduKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5jbGVhckZvY3VzVGltZSgpO1xuICAgICAgdGhpcy5jbGVhckJsdXJUaW1lKCk7XG4gICAgICB0aGlzLmNsZWFyQ29tYm9ib3hUaW1lKCk7XG5cbiAgICAgIGlmICh0aGlzLmRyb3Bkb3duQ29udGFpbmVyKSB7XG4gICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5kcm9wZG93bkNvbnRhaW5lcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5kcm9wZG93bkNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuZHJvcGRvd25Db250YWluZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIGlmIChpc1NpbmdsZU1vZGUodGhpcy5wcm9wcykgJiYgdGhpcy5zZWxlY3Rpb25SZWYpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25SZWYuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5nZXRJbnB1dERPTU5vZGUoKSkge1xuICAgICAgICB0aGlzLmdldElucHV0RE9NTm9kZSgpLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIGlmIChpc1NpbmdsZU1vZGUodGhpcy5wcm9wcykgJiYgdGhpcy5zZWxlY3Rpb25SZWYpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25SZWYuYmx1cigpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldElucHV0RE9NTm9kZSgpKSB7XG4gICAgICAgIHRoaXMuZ2V0SW5wdXRET01Ob2RlKCkuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJBcnJvd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJBcnJvdyhtdWx0aXBsZSkge1xuICAgICAgLy8gc2hvd0Fycm93IDogU2V0IHRvIHRydWUgaWYgbm90IG11bHRpcGxlIGJ5IGRlZmF1bHQgYnV0IGtlZXAgc2V0IHZhbHVlLlxuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgX3RoaXMkcHJvcHM0JHNob3dBcnJvID0gX3RoaXMkcHJvcHM0LnNob3dBcnJvdyxcbiAgICAgICAgICBzaG93QXJyb3cgPSBfdGhpcyRwcm9wczQkc2hvd0Fycm8gPT09IHZvaWQgMCA/ICFtdWx0aXBsZSA6IF90aGlzJHByb3BzNCRzaG93QXJybyxcbiAgICAgICAgICBsb2FkaW5nID0gX3RoaXMkcHJvcHM0LmxvYWRpbmcsXG4gICAgICAgICAgaW5wdXRJY29uID0gX3RoaXMkcHJvcHM0LmlucHV0SWNvbixcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczQucHJlZml4Q2xzO1xuXG4gICAgICBpZiAoIXNob3dBcnJvdyAmJiAhbG9hZGluZykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gLy8gaWYgbG9hZGluZyAgaGF2ZSBsb2FkaW5nIGljb25cblxuXG4gICAgICB2YXIgZGVmYXVsdEljb24gPSBsb2FkaW5nID8gUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXJyb3ctbG9hZGluZ1wiKVxuICAgICAgfSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvdy1pY29uXCIpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogXCJhcnJvd1wiLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXJyb3dcIiksXG4gICAgICAgIHN0eWxlOiBVTlNFTEVDVEFCTEVfU1RZTEVcbiAgICAgIH0sIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsIHtcbiAgICAgICAgb25DbGljazogdGhpcy5vbkFycm93Q2xpY2tcbiAgICAgIH0pLCBpbnB1dEljb24gfHwgZGVmYXVsdEljb24pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDbGVhcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzNS5wcmVmaXhDbHMsXG4gICAgICAgICAgYWxsb3dDbGVhciA9IF90aGlzJHByb3BzNS5hbGxvd0NsZWFyLFxuICAgICAgICAgIGNsZWFySWNvbiA9IF90aGlzJHByb3BzNS5jbGVhckljb247XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgY2xlYXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogXCJjbGVhclwiLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uX19jbGVhclwiKSxcbiAgICAgICAgb25Nb3VzZURvd246IHByZXZlbnREZWZhdWx0RXZlbnQsXG4gICAgICAgIHN0eWxlOiBVTlNFTEVDVEFCTEVfU1RZTEVcbiAgICAgIH0sIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsIHtcbiAgICAgICAgb25DbGljazogdGhpcy5vbkNsZWFyU2VsZWN0aW9uXG4gICAgICB9KSwgY2xlYXJJY29uIHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvbl9fY2xlYXItaWNvblwiKVxuICAgICAgfSwgXCJcXHhEN1wiKSk7XG5cbiAgICAgIGlmICghYWxsb3dDbGVhcikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ29tYm9ib3godGhpcy5wcm9wcykpIHtcbiAgICAgICAgaWYgKGlucHV0VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gY2xlYXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlucHV0VmFsdWUgfHwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBjbGVhcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Jvb3RDbHM7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgbXVsdGlwbGUgPSBpc011bHRpcGxlT3JUYWdzKHByb3BzKTsgLy8gRGVmYXVsdCBzZXQgc2hvd0Fycm93IHRvIHRydWUgaWYgbm90IHNldCAobm90IHNldCBkaXJlY3RseSBpbiBkZWZhdWx0UHJvcHMgdG8gaGFuZGxlIG11bHRpcGxlIGNhc2UpXG5cbiAgICAgIHZhciBfcHJvcHMkc2hvd0Fycm93ID0gcHJvcHMuc2hvd0Fycm93LFxuICAgICAgICAgIHNob3dBcnJvdyA9IF9wcm9wcyRzaG93QXJyb3cgPT09IHZvaWQgMCA/IHRydWUgOiBfcHJvcHMkc2hvd0Fycm93O1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgbG9hZGluZyA9IHByb3BzLmxvYWRpbmc7XG4gICAgICB2YXIgY3RybE5vZGUgPSB0aGlzLnJlbmRlclRvcENvbnRyb2xOb2RlKCk7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBvcGVuID0gX3RoaXMkc3RhdGUyLm9wZW4sXG4gICAgICAgICAgYXJpYUlkID0gX3RoaXMkc3RhdGUyLmFyaWFJZDtcblxuICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgdmFyIGZpbHRlck9wdGlvbnMgPSB0aGlzLnJlbmRlckZpbHRlck9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5fZW1wdHkgPSBmaWx0ZXJPcHRpb25zLmVtcHR5O1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gZmlsdGVyT3B0aW9ucy5vcHRpb25zO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVhbE9wZW4gPSB0aGlzLmdldFJlYWxPcGVuU3RhdGUoKTtcbiAgICAgIHZhciBlbXB0eSA9IHRoaXMuX2VtcHR5O1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLl9vcHRpb25zIHx8IFtdO1xuICAgICAgdmFyIGRhdGFPckFyaWFBdHRyaWJ1dGVQcm9wcyA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpICYmIChrZXkuc3Vic3RyKDAsIDUpID09PSAnZGF0YS0nIHx8IGtleS5zdWJzdHIoMCwgNSkgPT09ICdhcmlhLScgfHwga2V5ID09PSAncm9sZScpKSB7XG4gICAgICAgICAgZGF0YU9yQXJpYUF0dHJpYnV0ZVByb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gZm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIC8vICAgaWYgKFxuICAgICAgLy8gICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSAmJlxuICAgICAgLy8gICAgIChrZXkuc3Vic3RyKDAsIDUpID09PSAnZGF0YS0nIHx8IGtleS5zdWJzdHIoMCwgNSkgPT09ICdhcmlhLScgfHwga2V5ID09PSAncm9sZScpXG4gICAgICAvLyAgICkge1xuICAgICAgLy8gICAgIGRhdGFPckFyaWFBdHRyaWJ1dGVQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG4gICAgICB2YXIgZXh0cmFTZWxlY3Rpb25Qcm9wcyA9IF9leHRlbmRzKHt9LCBkYXRhT3JBcmlhQXR0cmlidXRlUHJvcHMpO1xuXG4gICAgICBpZiAoIWlzTXVsdGlwbGVPclRhZ3NPckNvbWJvYm94KHByb3BzKSkge1xuICAgICAgICBleHRyYVNlbGVjdGlvblByb3BzID0gX2V4dGVuZHMoe30sIGV4dHJhU2VsZWN0aW9uUHJvcHMsIHtcbiAgICAgICAgICBvbktleURvd246IHRoaXMub25LZXlEb3duLFxuICAgICAgICAgIHRhYkluZGV4OiBwcm9wcy5kaXNhYmxlZCA/IC0xIDogcHJvcHMudGFiSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByb290Q2xzID0gKF9yb290Q2xzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcm9vdENscywgY2xhc3NOYW1lLCAhIWNsYXNzTmFtZSksIF9kZWZpbmVQcm9wZXJ0eShfcm9vdENscywgcHJlZml4Q2xzLCAxKSwgX2RlZmluZVByb3BlcnR5KF9yb290Q2xzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW9wZW5cIiksIG9wZW4pLCBfZGVmaW5lUHJvcGVydHkoX3Jvb3RDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZm9jdXNlZFwiKSwgb3BlbiB8fCAhIXRoaXMuX2ZvY3VzZWQpLCBfZGVmaW5lUHJvcGVydHkoX3Jvb3RDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29tYm9ib3hcIiksIGlzQ29tYm9ib3gocHJvcHMpKSwgX2RlZmluZVByb3BlcnR5KF9yb290Q2xzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRpc2FibGVkXCIpLCBkaXNhYmxlZCksIF9kZWZpbmVQcm9wZXJ0eShfcm9vdENscywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1lbmFibGVkXCIpLCAhZGlzYWJsZWQpLCBfZGVmaW5lUHJvcGVydHkoX3Jvb3RDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYWxsb3ctY2xlYXJcIiksICEhcHJvcHMuYWxsb3dDbGVhciksIF9kZWZpbmVQcm9wZXJ0eShfcm9vdENscywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uby1hcnJvd1wiKSwgIXNob3dBcnJvdyksIF9kZWZpbmVQcm9wZXJ0eShfcm9vdENscywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sb2FkaW5nXCIpLCAhIWxvYWRpbmcpLCBfcm9vdENscyk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RUcmlnZ2VyLCB7XG4gICAgICAgIG9uUG9wdXBGb2N1czogdGhpcy5vblBvcHVwRm9jdXMsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgIGRyb3Bkb3duQWxpZ246IHByb3BzLmRyb3Bkb3duQWxpZ24sXG4gICAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lOiBwcm9wcy5kcm9wZG93bkNsYXNzTmFtZSxcbiAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiBwcm9wcy5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsXG4gICAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogcHJvcHMuZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLFxuICAgICAgICBkcm9wZG93bk1lbnVTdHlsZTogcHJvcHMuZHJvcGRvd25NZW51U3R5bGUsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiBwcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9wcy5hbmltYXRpb24sXG4gICAgICAgIHByZWZpeENsczogcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBkcm9wZG93blN0eWxlOiBwcm9wcy5kcm9wZG93blN0eWxlLFxuICAgICAgICBjb21ib2JveDogcHJvcHMuY29tYm9ib3gsXG4gICAgICAgIHNob3dTZWFyY2g6IHByb3BzLnNob3dTZWFyY2gsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIGVtcHR5OiBlbXB0eSxcbiAgICAgICAgbXVsdGlwbGU6IG11bHRpcGxlLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIHZpc2libGU6IHJlYWxPcGVuLFxuICAgICAgICBpbnB1dFZhbHVlOiBzdGF0ZS5pbnB1dFZhbHVlLFxuICAgICAgICB2YWx1ZTogc3RhdGUudmFsdWUsXG4gICAgICAgIGJhY2tmaWxsVmFsdWU6IHN0YXRlLmJhY2tmaWxsVmFsdWUsXG4gICAgICAgIGZpcnN0QWN0aXZlVmFsdWU6IHByb3BzLmZpcnN0QWN0aXZlVmFsdWUsXG4gICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiB0aGlzLm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlLFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgIG9uTWVudVNlbGVjdDogdGhpcy5vbk1lbnVTZWxlY3QsXG4gICAgICAgIG9uTWVudURlc2VsZWN0OiB0aGlzLm9uTWVudURlc2VsZWN0LFxuICAgICAgICBvblBvcHVwU2Nyb2xsOiBwcm9wcy5vblBvcHVwU2Nyb2xsLFxuICAgICAgICBzaG93QWN0aW9uOiBwcm9wcy5zaG93QWN0aW9uLFxuICAgICAgICByZWY6IHRoaXMuc2F2ZVNlbGVjdFRyaWdnZXJSZWYsXG4gICAgICAgIG1lbnVJdGVtU2VsZWN0ZWRJY29uOiBwcm9wcy5tZW51SXRlbVNlbGVjdGVkSWNvbixcbiAgICAgICAgZHJvcGRvd25SZW5kZXI6IHByb3BzLmRyb3Bkb3duUmVuZGVyLFxuICAgICAgICBhcmlhSWQ6IGFyaWFJZFxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlLFxuICAgICAgICByZWY6IHRoaXMuc2F2ZVJvb3RSZWYsXG4gICAgICAgIG9uQmx1cjogdGhpcy5vbk91dGVyQmx1cixcbiAgICAgICAgb25Gb2N1czogdGhpcy5vbk91dGVyRm9jdXMsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcyhyb290Q2xzKSxcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMubWFya01vdXNlRG93bixcbiAgICAgICAgb25Nb3VzZVVwOiB0aGlzLm1hcmtNb3VzZUxlYXZlLFxuICAgICAgICBvbk1vdXNlT3V0OiB0aGlzLm1hcmtNb3VzZUxlYXZlXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiB0aGlzLnNhdmVTZWxlY3Rpb25SZWYsXG4gICAgICAgIGtleTogXCJzZWxlY3Rpb25cIixcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvblxcbiAgICAgICAgICAgIFwiKS5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb24tLVwiKS5jb25jYXQobXVsdGlwbGUgPyAnbXVsdGlwbGUnIDogJ3NpbmdsZScpLFxuICAgICAgICByb2xlOiBcImNvbWJvYm94XCIsXG4gICAgICAgIFwiYXJpYS1hdXRvY29tcGxldGVcIjogXCJsaXN0XCIsXG4gICAgICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcInRydWVcIixcbiAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IGFyaWFJZCxcbiAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IHJlYWxPcGVuXG4gICAgICB9LCBleHRyYVNlbGVjdGlvblByb3BzKSwgY3RybE5vZGUsIHRoaXMucmVuZGVyQ2xlYXIoKSwgdGhpcy5yZW5kZXJBcnJvdyghIW11bHRpcGxlKSkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2VsZWN0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5TZWxlY3QucHJvcFR5cGVzID0gU2VsZWN0UHJvcFR5cGVzO1xuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJlZml4Q2xzOiAncmMtc2VsZWN0JyxcbiAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICBsYWJlbEluVmFsdWU6IGZhbHNlLFxuICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IHRydWUsXG4gIHNob3dTZWFyY2g6IHRydWUsXG4gIGFsbG93Q2xlYXI6IGZhbHNlLFxuICBwbGFjZWhvbGRlcjogJycsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvbkZvY3VzOiBub29wLFxuICBvbkJsdXI6IG5vb3AsXG4gIG9uU2VsZWN0OiBub29wLFxuICBvblNlYXJjaDogbm9vcCxcbiAgb25EZXNlbGVjdDogbm9vcCxcbiAgb25JbnB1dEtleURvd246IG5vb3AsXG4gIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdHJ1ZSxcbiAgZHJvcGRvd25TdHlsZToge30sXG4gIGRyb3Bkb3duTWVudVN0eWxlOiB7fSxcbiAgb3B0aW9uRmlsdGVyUHJvcDogJ3ZhbHVlJyxcbiAgb3B0aW9uTGFiZWxQcm9wOiAndmFsdWUnLFxuICBub3RGb3VuZENvbnRlbnQ6ICdOb3QgRm91bmQnLFxuICBiYWNrZmlsbDogZmFsc2UsXG4gIHNob3dBY3Rpb246IFsnY2xpY2snXSxcbiAgdG9rZW5TZXBhcmF0b3JzOiBbXSxcbiAgYXV0b0NsZWFyU2VhcmNoVmFsdWU6IHRydWUsXG4gIHRhYkluZGV4OiAwLFxuICBkcm9wZG93blJlbmRlcjogZnVuY3Rpb24gZHJvcGRvd25SZW5kZXIobWVudSkge1xuICAgIHJldHVybiBtZW51O1xuICB9XG59O1xuXG5TZWxlY3QuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gIHZhciBvcHRpb25zSW5mbyA9IHByZXZTdGF0ZS5za2lwQnVpbGRPcHRpb25zSW5mbyA/IHByZXZTdGF0ZS5vcHRpb25zSW5mbyA6IFNlbGVjdC5nZXRPcHRpb25zSW5mb0Zyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gIHZhciBuZXdTdGF0ZSA9IHtcbiAgICBvcHRpb25zSW5mbzogb3B0aW9uc0luZm8sXG4gICAgc2tpcEJ1aWxkT3B0aW9uc0luZm86IGZhbHNlXG4gIH07XG5cbiAgaWYgKCdvcGVuJyBpbiBuZXh0UHJvcHMpIHtcbiAgICBuZXdTdGF0ZS5vcGVuID0gbmV4dFByb3BzLm9wZW47XG4gIH1cblxuICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICB2YXIgdmFsdWUgPSBTZWxlY3QuZ2V0VmFsdWVGcm9tUHJvcHMobmV4dFByb3BzKTtcbiAgICBuZXdTdGF0ZS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKG5leHRQcm9wcy5jb21ib2JveCkge1xuICAgICAgbmV3U3RhdGUuaW5wdXRWYWx1ZSA9IFNlbGVjdC5nZXRJbnB1dFZhbHVlRm9yQ29tYm9ib3gobmV4dFByb3BzLCBvcHRpb25zSW5mbyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufTtcblxuU2VsZWN0LmdldE9wdGlvbnNGcm9tQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSBjaGlsZC50eXBlO1xuXG4gICAgaWYgKHR5cGUuaXNTZWxlY3RPcHRHcm91cCkge1xuICAgICAgU2VsZWN0LmdldE9wdGlvbnNGcm9tQ2hpbGRyZW4oY2hpbGQucHJvcHMuY2hpbGRyZW4sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvcHRpb25zO1xufTtcblxuU2VsZWN0LmdldElucHV0VmFsdWVGb3JDb21ib2JveCA9IGZ1bmN0aW9uIChwcm9wcywgb3B0aW9uc0luZm8sIHVzZURlZmF1bHRWYWx1ZSkge1xuICB2YXIgdmFsdWUgPSBbXTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBwcm9wcyAmJiAhdXNlRGVmYXVsdFZhbHVlKSB7XG4gICAgdmFsdWUgPSB0b0FycmF5KHByb3BzLnZhbHVlKTtcbiAgfVxuXG4gIGlmICgnZGVmYXVsdFZhbHVlJyBpbiBwcm9wcyAmJiB1c2VEZWZhdWx0VmFsdWUpIHtcbiAgICB2YWx1ZSA9IHRvQXJyYXkocHJvcHMuZGVmYXVsdFZhbHVlKTtcbiAgfVxuXG4gIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICB2YWx1ZSA9IHZhbHVlWzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHZhciBsYWJlbCA9IHZhbHVlO1xuXG4gIGlmIChwcm9wcy5sYWJlbEluVmFsdWUpIHtcbiAgICBsYWJlbCA9IHZhbHVlLmxhYmVsO1xuICB9IGVsc2UgaWYgKG9wdGlvbnNJbmZvW2dldE1hcEtleSh2YWx1ZSldKSB7XG4gICAgbGFiZWwgPSBvcHRpb25zSW5mb1tnZXRNYXBLZXkodmFsdWUpXS5sYWJlbDtcbiAgfVxuXG4gIGlmIChsYWJlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGFiZWwgPSAnJztcbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn07XG5cblNlbGVjdC5nZXRMYWJlbEZyb21PcHRpb24gPSBmdW5jdGlvbiAocHJvcHMsIG9wdGlvbikge1xuICByZXR1cm4gZ2V0UHJvcFZhbHVlKG9wdGlvbiwgcHJvcHMub3B0aW9uTGFiZWxQcm9wKTtcbn07XG5cblNlbGVjdC5nZXRPcHRpb25zSW5mb0Zyb21Qcm9wcyA9IGZ1bmN0aW9uIChwcm9wcywgcHJlU3RhdGUpIHtcbiAgdmFyIG9wdGlvbnMgPSBTZWxlY3QuZ2V0T3B0aW9uc0Zyb21DaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG4gIHZhciBvcHRpb25zSW5mbyA9IHt9O1xuICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbikge1xuICAgIHZhciBzaW5nbGVWYWx1ZSA9IGdldFZhbHVlUHJvcFZhbHVlKG9wdGlvbik7XG4gICAgb3B0aW9uc0luZm9bZ2V0TWFwS2V5KHNpbmdsZVZhbHVlKV0gPSB7XG4gICAgICBvcHRpb246IG9wdGlvbixcbiAgICAgIHZhbHVlOiBzaW5nbGVWYWx1ZSxcbiAgICAgIGxhYmVsOiBTZWxlY3QuZ2V0TGFiZWxGcm9tT3B0aW9uKHByb3BzLCBvcHRpb24pLFxuICAgICAgdGl0bGU6IG9wdGlvbi5wcm9wcy50aXRsZSxcbiAgICAgIGRpc2FibGVkOiBvcHRpb24ucHJvcHMuZGlzYWJsZWRcbiAgICB9O1xuICB9KTtcblxuICBpZiAocHJlU3RhdGUpIHtcbiAgICAvLyBrZWVwIG9wdGlvbiBpbmZvIGluIHByZSBzdGF0ZSB2YWx1ZS5cbiAgICB2YXIgb2xkT3B0aW9uc0luZm8gPSBwcmVTdGF0ZS5vcHRpb25zSW5mbztcbiAgICB2YXIgdmFsdWUgPSBwcmVTdGF0ZS52YWx1ZTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIga2V5ID0gZ2V0TWFwS2V5KHYpO1xuXG4gICAgICAgIGlmICghb3B0aW9uc0luZm9ba2V5XSAmJiBvbGRPcHRpb25zSW5mb1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvcHRpb25zSW5mb1trZXldID0gb2xkT3B0aW9uc0luZm9ba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnNJbmZvO1xufTtcblxuU2VsZWN0LmdldFZhbHVlRnJvbVByb3BzID0gZnVuY3Rpb24gKHByb3BzLCB1c2VEZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHZhbHVlID0gW107XG5cbiAgaWYgKCd2YWx1ZScgaW4gcHJvcHMgJiYgIXVzZURlZmF1bHRWYWx1ZSkge1xuICAgIHZhbHVlID0gdG9BcnJheShwcm9wcy52YWx1ZSk7XG4gIH1cblxuICBpZiAoJ2RlZmF1bHRWYWx1ZScgaW4gcHJvcHMgJiYgdXNlRGVmYXVsdFZhbHVlKSB7XG4gICAgdmFsdWUgPSB0b0FycmF5KHByb3BzLmRlZmF1bHRWYWx1ZSk7XG4gIH1cblxuICBpZiAocHJvcHMubGFiZWxJblZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiB2LmtleTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblNlbGVjdC5kaXNwbGF5TmFtZSA9ICdTZWxlY3QnO1xucG9seWZpbGwoU2VsZWN0KTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsiLCJpbXBvcnQgT3B0R3JvdXAgZnJvbSAnLi9PcHRHcm91cCc7XG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vT3B0aW9uJztcbmltcG9ydCBTZWxlY3RQcm9wVHlwZXMgZnJvbSAnLi9Qcm9wVHlwZXMnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL1NlbGVjdCc7XG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuU2VsZWN0Lk9wdEdyb3VwID0gT3B0R3JvdXA7XG5leHBvcnQgeyBPcHRpb24sIE9wdEdyb3VwLCBTZWxlY3RQcm9wVHlwZXMgfTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JjU2VsZWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJjLXNlbGVjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhcm5pbmdcIikpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4uL191dGlsL3R5cGVcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgU2VsZWN0U2l6ZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdkZWZhdWx0JywgJ2xhcmdlJywgJ3NtYWxsJyk7XG52YXIgU2VsZWN0UHJvcFR5cGVzID0ge1xuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFNlbGVjdFNpemVzKSxcbiAgbm90Rm91bmRDb250ZW50OiBQcm9wVHlwZXMuYW55LFxuICBzaG93U2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgb3B0aW9uTGFiZWxQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hvaWNlVHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nXG59OyAvLyA9PiBJdCBpcyBuZWVkbGVzcyB0byBleHBvcnQgdGhlIGRlY2xhcmF0aW9uIG9mIGJlbG93IHR3byBpbm5lciBjb21wb25lbnRzLlxuLy8gZXhwb3J0IHsgT3B0aW9uLCBPcHRHcm91cCB9O1xuXG52YXIgU2VsZWN0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTZWxlY3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNlbGVjdChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWxlY3QpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoU2VsZWN0KS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zYXZlU2VsZWN0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLnJjU2VsZWN0ID0gbm9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyU2VsZWN0ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIGdldENvbnRleHRQb3B1cENvbnRhaW5lciA9IF9yZWYuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHMsXG4gICAgICAgICAgcmVuZGVyRW1wdHkgPSBfcmVmLnJlbmRlckVtcHR5O1xuXG4gICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgX2EkY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9hJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gJycgOiBfYSRjbGFzc05hbWUsXG4gICAgICAgICAgc2l6ZSA9IF9hLnNpemUsXG4gICAgICAgICAgbW9kZSA9IF9hLm1vZGUsXG4gICAgICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBfYS5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICByZW1vdmVJY29uID0gX2EucmVtb3ZlSWNvbixcbiAgICAgICAgICBjbGVhckljb24gPSBfYS5jbGVhckljb24sXG4gICAgICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb24gPSBfYS5tZW51SXRlbVNlbGVjdGVkSWNvbixcbiAgICAgICAgICBzaG93QXJyb3cgPSBfYS5zaG93QXJyb3csXG4gICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJzaXplXCIsIFwibW9kZVwiLCBcImdldFBvcHVwQ29udGFpbmVyXCIsIFwicmVtb3ZlSWNvblwiLCBcImNsZWFySWNvblwiLCBcIm1lbnVJdGVtU2VsZWN0ZWRJY29uXCIsIFwic2hvd0Fycm93XCJdKTtcblxuICAgICAgdmFyIHJlc3QgPSAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShyZXN0UHJvcHMsIFsnaW5wdXRJY29uJ10pO1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnc2VsZWN0JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciBjbHMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxnXCIpLCBzaXplID09PSAnbGFyZ2UnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNtXCIpLCBzaXplID09PSAnc21hbGwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNob3ctYXJyb3dcIiksIHNob3dBcnJvdyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgICAgIHZhciBvcHRpb25MYWJlbFByb3AgPSBfdGhpcy5wcm9wcy5vcHRpb25MYWJlbFByb3A7XG5cbiAgICAgIGlmIChfdGhpcy5pc0NvbWJvYm94KCkpIHtcbiAgICAgICAgLy8gY2hpbGRyZW4g5bimIGRvbSDnu5PmnoTml7bvvIzml6Dms5XloavlhaXovpPlhaXmoYZcbiAgICAgICAgb3B0aW9uTGFiZWxQcm9wID0gb3B0aW9uTGFiZWxQcm9wIHx8ICd2YWx1ZSc7XG4gICAgICB9XG5cbiAgICAgIHZhciBtb2RlQ29uZmlnID0ge1xuICAgICAgICBtdWx0aXBsZTogbW9kZSA9PT0gJ211bHRpcGxlJyxcbiAgICAgICAgdGFnczogbW9kZSA9PT0gJ3RhZ3MnLFxuICAgICAgICBjb21ib2JveDogX3RoaXMuaXNDb21ib2JveCgpXG4gICAgICB9O1xuICAgICAgdmFyIGZpbmFsUmVtb3ZlSWNvbiA9IHJlbW92ZUljb24gJiYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KHJlbW92ZUljb24pID8gUmVhY3QuY2xvbmVFbGVtZW50KHJlbW92ZUljb24sIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShyZW1vdmVJY29uLnByb3BzLmNsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1yZW1vdmUtaWNvblwiKSlcbiAgICAgIH0pIDogcmVtb3ZlSWNvbikgfHwgUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgdHlwZTogXCJjbG9zZVwiLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcmVtb3ZlLWljb25cIilcbiAgICAgIH0pO1xuICAgICAgdmFyIGZpbmFsQ2xlYXJJY29uID0gY2xlYXJJY29uICYmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjbGVhckljb24pID8gUmVhY3QuY2xvbmVFbGVtZW50KGNsZWFySWNvbiwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNsZWFySWNvbi5wcm9wcy5jbGFzc05hbWUsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2xlYXItaWNvblwiKSlcbiAgICAgIH0pIDogY2xlYXJJY29uKSB8fCBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICB0eXBlOiBcImNsb3NlLWNpcmNsZVwiLFxuICAgICAgICB0aGVtZTogXCJmaWxsZWRcIixcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNsZWFyLWljb25cIilcbiAgICAgIH0pO1xuICAgICAgdmFyIGZpbmFsTWVudUl0ZW1TZWxlY3RlZEljb24gPSBtZW51SXRlbVNlbGVjdGVkSWNvbiAmJiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQobWVudUl0ZW1TZWxlY3RlZEljb24pID8gUmVhY3QuY2xvbmVFbGVtZW50KG1lbnVJdGVtU2VsZWN0ZWRJY29uLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkobWVudUl0ZW1TZWxlY3RlZEljb24ucHJvcHMuY2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGVkLWljb25cIikpXG4gICAgICB9KSA6IG1lbnVJdGVtU2VsZWN0ZWRJY29uKSB8fCBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICB0eXBlOiBcImNoZWNrXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3RlZC1pY29uXCIpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9yY1NlbGVjdFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICAgICAgaW5wdXRJY29uOiBfdGhpcy5yZW5kZXJTdWZmaXhJY29uKHByZWZpeENscyksXG4gICAgICAgIHJlbW92ZUljb246IGZpbmFsUmVtb3ZlSWNvbixcbiAgICAgICAgY2xlYXJJY29uOiBmaW5hbENsZWFySWNvbixcbiAgICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb246IGZpbmFsTWVudUl0ZW1TZWxlY3RlZEljb24sXG4gICAgICAgIHNob3dBcnJvdzogc2hvd0Fycm93XG4gICAgICB9LCByZXN0LCBtb2RlQ29uZmlnLCB7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgICAgb3B0aW9uTGFiZWxQcm9wOiBvcHRpb25MYWJlbFByb3AgfHwgJ2NoaWxkcmVuJyxcbiAgICAgICAgbm90Rm91bmRDb250ZW50OiBfdGhpcy5nZXROb3RGb3VuZENvbnRlbnQocmVuZGVyRW1wdHkpLFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXIgfHwgZ2V0Q29udGV4dFBvcHVwQ29udGFpbmVyLFxuICAgICAgICByZWY6IF90aGlzLnNhdmVTZWxlY3RcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkocHJvcHMubW9kZSAhPT0gJ2NvbWJvYm94JywgJ1NlbGVjdCcsICdUaGUgY29tYm9ib3ggbW9kZSBpcyBkZXByZWNhdGVkLCAnICsgJ2l0IHdpbGwgYmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24sICcgKyAncGxlYXNlIHVzZSBBdXRvQ29tcGxldGUgaW5zdGVhZCcpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTZWxlY3QsIFt7XG4gICAga2V5OiBcImZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgdGhpcy5yY1NlbGVjdC5mb2N1cygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJibHVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICB0aGlzLnJjU2VsZWN0LmJsdXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Tm90Rm91bmRDb250ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE5vdEZvdW5kQ29udGVudChyZW5kZXJFbXB0eSkge1xuICAgICAgdmFyIG5vdEZvdW5kQ29udGVudCA9IHRoaXMucHJvcHMubm90Rm91bmRDb250ZW50O1xuXG4gICAgICBpZiAobm90Rm91bmRDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG5vdEZvdW5kQ29udGVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNDb21ib2JveCgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVuZGVyRW1wdHkoJ1NlbGVjdCcpOyAvLyBpZiAodGhpcy5pc0NvbWJvYm94KCkpIHtcbiAgICAgIC8vICAgLy8gQXV0b0NvbXBsZXRlIGRvbid0IGhhdmUgbm90Rm91bmRDb250ZW50IGRlZmF1bHRseVxuICAgICAgLy8gICByZXR1cm4gbm90Rm91bmRDb250ZW50ID09PSB1bmRlZmluZWQgPyBudWxsIDogbm90Rm91bmRDb250ZW50O1xuICAgICAgLy8gfVxuICAgICAgLy8gcmV0dXJuIHJlbmRlckVtcHR5KCdTZWxlY3QnKTtcbiAgICAgIC8vIC8vIHJldHVybiBub3RGb3VuZENvbnRlbnQgPT09IHVuZGVmaW5lZCA/IGxvY2FsZS5ub3RGb3VuZENvbnRlbnQgOiBub3RGb3VuZENvbnRlbnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tYm9ib3hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDb21ib2JveCgpIHtcbiAgICAgIHZhciBtb2RlID0gdGhpcy5wcm9wcy5tb2RlO1xuICAgICAgcmV0dXJuIG1vZGUgPT09ICdjb21ib2JveCcgfHwgbW9kZSA9PT0gU2VsZWN0LlNFQ1JFVF9DT01CT0JPWF9NT0RFX0RPX05PVF9VU0U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclN1ZmZpeEljb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3VmZml4SWNvbihwcmVmaXhDbHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbG9hZGluZyA9IF90aGlzJHByb3BzLmxvYWRpbmcsXG4gICAgICAgICAgc3VmZml4SWNvbiA9IF90aGlzJHByb3BzLnN1ZmZpeEljb247XG5cbiAgICAgIGlmIChzdWZmaXhJY29uKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5pc1ZhbGlkRWxlbWVudChzdWZmaXhJY29uKSA/IFJlYWN0LmNsb25lRWxlbWVudChzdWZmaXhJY29uLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShzdWZmaXhJY29uLnByb3BzLmNsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvdy1pY29uXCIpKVxuICAgICAgICB9KSA6IHN1ZmZpeEljb247XG4gICAgICB9XG5cbiAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIHR5cGU6IFwibG9hZGluZ1wiXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgdHlwZTogXCJkb3duXCIsXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvdy1pY29uXCIpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJTZWxlY3QpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTZWxlY3Q7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU2VsZWN0O1xuU2VsZWN0Lk9wdGlvbiA9IF9yY1NlbGVjdC5PcHRpb247XG5TZWxlY3QuT3B0R3JvdXAgPSBfcmNTZWxlY3QuT3B0R3JvdXA7XG5TZWxlY3QuU0VDUkVUX0NPTUJPQk9YX01PREVfRE9fTk9UX1VTRSA9ICdTRUNSRVRfQ09NQk9CT1hfTU9ERV9ET19OT1RfVVNFJztcblNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3dTZWFyY2g6IGZhbHNlLFxuICB0cmFuc2l0aW9uTmFtZTogJ3NsaWRlLXVwJyxcbiAgY2hvaWNlVHJhbnNpdGlvbk5hbWU6ICd6b29tJ1xufTtcblNlbGVjdC5wcm9wVHlwZXMgPSBTZWxlY3RQcm9wVHlwZXM7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBfZnAgZnJvbSAnbG9kYXNoL2ZwJ1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0J1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnYW50ZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQHhzdHlsZWQvc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi8uLi93aXRoVGhlbWUnXG5cbmNvbnN0IFNTZWxlY3QgPSBzdHlsZWQoU2VsZWN0KWBcbiAgbWFyZ2luOiA4cHg7XG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuYFxuXG4vKipcbiAqIExvd2VyY2FzZXMgYSBzdHJpbmdcbiAqL1xuY29uc3QgdG9Mb3dlciA9IF9mcC50b0xvd2VyXG5cbi8qKlxuICogR2V0cyB0aGUga25vd24gb3B0aW9uIGFzIGEgc2VhcmNoYWJsZSBzdHJpbmdcbiAqL1xuY29uc3QgZ2V0S25vd25PcHRpb24gPSBfZnAucGlwZShcbiAgX2ZwLmdldCgncHJvcHMuY2hpbGRyZW4nKSxcbiAgdG9Mb3dlclxuKVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSBzdHJpbmcgaW5jbHVkZXMgYW5vdGhlclxuICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKi9cbmNvbnN0IGluY2x1ZGVzID0gKG9wdGlvbiA9ICcnLCB2YWx1ZSA9ICcnKSA9PiBvcHRpb24uaW5jbHVkZXModmFsdWUpXG5cbi8qKlxuICogTWFwcyBmaWVsZHMgaW50byB0aGUgY29ycmVjdCBzdHJ1Y3R1cmVcbiAqL1xuY29uc3QgZ2V0RmllbGRzID0gX2ZwLnBpcGUoXG4gIF9mcC5nZXQoJ2ZpZWxkcycpLFxuICBfZnAuZW50cmllcyxcbiAgX2ZwLm1hcCgoW2tleSwgb2JqXSkgPT4gKHtcbiAgICAuLi5vYmosXG4gICAga2V5XG4gIH0pKVxuKVxuXG5jb25zdCBDcmVhdGVGaWx0ZXJCdXR0b24gPSB3aXRoVGhlbWUocHJvcHMgPT4ge1xuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgY29uc3QgZmllbGRzID0gZ2V0RmllbGRzKHByb3BzLCAnZmllbGRzJylcblxuICAvKipcbiAgICogb25DaGFuZ2UgaGFuZGxlclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICovXG4gIGNvbnN0IG9uQ2hhbmdlID0ga2V5ID0+IHtcbiAgICBwcm9wcy5vblNlbGVjdCh7XG4gICAgICAuLi5nZXQocHJvcHMsIGBmaWVsZHMuJHtrZXl9YCksXG4gICAgICBrZXlcbiAgICB9KVxuICAgIHNldFNlYXJjaFZhbHVlKHVuZGVmaW5lZClcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGZpbHRlcmluZ1xuICAgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvblxuICAgKi9cbiAgY29uc3QgZmlsdGVyT3B0aW9uID0gKGlucHV0LCBvcHRpb24pID0+XG4gICAgaW5jbHVkZXMoZ2V0S25vd25PcHRpb24ob3B0aW9uKSwgdG9Mb3dlcihpbnB1dCkpXG5cbiAgcmV0dXJuIChcbiAgICA8U1NlbGVjdFxuICAgICAgc2hvd1NlYXJjaFxuICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBOZXcgRmlsdGVyXCJcbiAgICAgIG9uU2VhcmNoPXtzZXRTZWFyY2hWYWx1ZX1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIGZpbHRlck9wdGlvbj17ZmlsdGVyT3B0aW9ufVxuICAgID5cbiAgICAgIHtmaWVsZHMubWFwKGZpZWxkID0+IChcbiAgICAgICAgPFNlbGVjdC5PcHRpb24ga2V5PXtnZXQoZmllbGQsICdrZXknKX0gdmFsdWU9e2dldChmaWVsZCwgJ2tleScpfT5cbiAgICAgICAgICB7Z2V0KGZpZWxkLCAnbGFiZWwnKX1cbiAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgKSl9XG4gICAgPC9TU2VsZWN0PlxuICApXG59KVxuXG5DcmVhdGVGaWx0ZXJCdXR0b24ucHJvcFR5cGVzID0ge1xuICBvblNlbGVjdDogUFQuZnVuYy5pc1JlcXVpcmVkXG59XG5cbkNyZWF0ZUZpbHRlckJ1dHRvbi5kaXNwbGF5TmFtZSA9IENyZWF0ZUZpbHRlckJ1dHRvblxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVGaWx0ZXJCdXR0b25cbiJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfZ2V0UHJvdG90eXBlT2YiLCJfaW5oZXJpdHMiLCJfc2V0UHJvdG90eXBlT2YiLCJQcm9wVHlwZXMub25lT2ZUeXBlIiwiUHJvcFR5cGVzLnN0cmluZyIsIlByb3BUeXBlcy5udW1iZXIiLCJQcm9wVHlwZXMuc2hhcGUiLCJQcm9wVHlwZXMubm9kZSIsIlByb3BUeXBlcy5hcnJheU9mIiwiUHJvcFR5cGVzLmJvb2wiLCJQcm9wVHlwZXMuYW55IiwiUHJvcFR5cGVzLmZ1bmMiLCJQcm9wVHlwZXMub2JqZWN0IiwiX3Byb3BUeXBlcyIsIl9yZWFjdCIsIl9Qcm9wVHlwZXMiLCJfc2hhbGxvd2VxdWFsIiwiX2hvaXN0Tm9uUmVhY3RTdGF0aWNzIiwiX1Byb3ZpZGVyMiIsIl9jb25uZWN0MiIsIl9jcmVhdGUyIiwiUmVhY3QiLCJfZXh0ZW5kcyIsIlN1YlBvcHVwTWVudSIsImNsYXNzTmFtZXMiLCJQcm9wVHlwZXMiLCJSZWFjdERPTSIsImNvbm5lY3QiLCJTdWJNZW51IiwiUmVzaXplT2JzZXJ2ZXIiLCJfaW5pdGlhbGlzZVByb3BzIiwiY29ubmVjdGVkIiwiY3JlYXRlIiwiUHJvdmlkZXIiLCJ0b0FycmF5Iiwic2F2ZVJlZiIsIlJlYWN0LmNsb25lRWxlbWVudCIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCJSZWFjdC5Db21wb25lbnQiLCJfZGVmaW5lUHJvcGVydGllcyIsIl9jcmVhdGVDbGFzcyIsInRoaXMiLCJSZWFjdERPTS5maW5kRE9NTm9kZSIsImNsYXNzbmFtZXMiLCJfZGVmaW5lUHJvcGVydHkiLCJub29wIiwiUmVhY3QuQ2hpbGRyZW4iLCJjaGlsZHJlblRvQXJyYXkiLCJNZW51SXRlbSIsIlJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUiLCJyZXF1aXJlJCQwIiwicmVxdWlyZSQkMSIsInJlcXVpcmUkJDIiLCJyZXF1aXJlJCQzIiwicmVxdWlyZSQkNCIsInJlcXVpcmUkJDUiLCJyZXF1aXJlJCQ2IiwiU2VsZWN0IiwiU1NlbGVjdCIsInN0eWxlZCIsInRvTG93ZXIiLCJfZnAiLCJnZXRLbm93bk9wdGlvbiIsInBpcGUiLCJnZXQiLCJpbmNsdWRlcyIsIm9wdGlvbiIsInZhbHVlIiwiZ2V0RmllbGRzIiwiZW50cmllcyIsIm1hcCIsImtleSIsIm9iaiIsIkNyZWF0ZUZpbHRlckJ1dHRvbiIsIndpdGhUaGVtZSIsInByb3BzIiwidXNlU3RhdGUiLCJ1bmRlZmluZWQiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwiZmllbGRzIiwib25DaGFuZ2UiLCJvblNlbGVjdCIsImZpbHRlck9wdGlvbiIsImlucHV0IiwiZmllbGQiLCJwcm9wVHlwZXMiLCJQVCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsWUFBWSxXQUFXLENBQUMsRUFBRSxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxFQUFFLEVBQUU7O0FBRXpKLFNBQVMsMEJBQTBCLENBQUMs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UyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsRUFBRSxFQUFFOztBQUV6SixTQUFTLDBCQUEwQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQywyREFBMkQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFOztBQUVoUCxTQUFTLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQUUsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLElBQUksVUFBVSxLQUFLLElBQUksRUFBRSxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsMERBQTBELEdBQUcsT0FBTyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFLE1BQU0sQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRTs7QUFFOWUsSUFBSSxRQUFRLEdBQUcsVUFBVSxVQUFVLEVBQUU7RUFDbkMsU0FBUyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQzs7RUFFaEMsU0FBUyxR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QUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRTs7QUFFM2QsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRSxFQUFFLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLEdBQUcsS0FBSyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O0FBRS9WLFNBQVMsUUFBUSxHQUFHLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtB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
