import 'react';
import 'prop-types';
import { c as createCommonjsModule, u as unwrapExports, r as require$$1, b as require$$2 } from './chunk-02ddfd93.js';
import { _ as _configProvider, r as require$$2$1 } from './chunk-dbd356d3.js';
import { _ as _reactLifecyclesCompat } from './chunk-ee2530d1.js';
import { h as require$$3, i as require$$4 } from './chunk-f94271b9.js';
import 'react-dom';
import { r as raf_1 } from './chunk-a58638a0.js';
import { r as require$$1$1 } from './chunk-8820e6e0.js';
import { _ as _type } from './chunk-3a7de8d6.js';

var Event = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports['default'] = TransitionEvents;
module.exports = exports['default'];
});

unwrapExports(Event);

var raf = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = wrapperRaf;

var _raf = _interopRequireDefault(raf_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var id = 0;
var ids = {}; // Support call raf with delay specified frame

function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = (0, _raf["default"])(internalCallback);
    }
  }

  ids[myId] = (0, _raf["default"])(internalCallback);
  return myId;
}

wrapperRaf.cancel = function (pid) {
  if (pid === undefined) return;

  _raf["default"].cancel(ids[pid]);

  delete ids[pid];
};

wrapperRaf.ids = ids; // export this for test usage
});

unwrapExports(raf);

var wave = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require$$1);



var _Event = _interopRequireDefault(Event);

var _raf = _interopRequireDefault(raf);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleForPesudo; // Where el is the DOM element you'd like to test for visibility

function isHidden(element) {
  if (process.env.NODE_ENV === 'test') {
    return false;
  }

  return !element || element.offsetParent === null;
}

var Wave =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wave, _React$Component);

  function Wave() {
    var _this;

    _classCallCheck(this, Wave);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wave).apply(this, arguments));
    _this.animationStart = false;
    _this.destroy = false;

    _this.onClick = function (node, waveColor) {
      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }

      var insertExtraNode = _this.props.insertExtraNode;
      _this.extraNode = document.createElement('div');
      var extraNode = _this.extraNode;
      extraNode.className = 'ant-click-animating-node';

      var attributeName = _this.getAttributeName();

      node.setAttribute(attributeName, 'true'); // Not white or transparnt or grey

      styleForPesudo = styleForPesudo || document.createElement('style');

      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && _this.isNotGrey(waveColor) && !/rgba\(\d*, \d*, \d*, 0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        // Add nonce if CSP exist
        if (_this.csp && _this.csp.nonce) {
          styleForPesudo.nonce = _this.csp.nonce;
        }

        extraNode.style.borderColor = waveColor;
        styleForPesudo.innerHTML = "html body { --antd-wave-shadow-color: ".concat(waveColor, "; }");

        if (!document.body.contains(styleForPesudo)) {
          document.body.appendChild(styleForPesudo);
        }
      }

      if (insertExtraNode) {
        node.appendChild(extraNode);
      }

      _Event["default"].addStartEventListener(node, _this.onTransitionStart);

      _Event["default"].addEndEventListener(node, _this.onTransitionEnd);
    };

    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }

      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }

        _this.resetEffect(node); // Get wave color from target


        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);

        _raf["default"].cancel(_this.animationStartId);

        _this.animationStart = true; // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.

        _this.animationStartId = (0, _raf["default"])(function () {
          _this.animationStart = false;
        }, 10);
      };

      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };

    _this.onTransitionStart = function (e) {
      if (_this.destroy) return;
      var node = (0, require$$1$1.findDOMNode)(_assertThisInitialized(_this));

      if (!e || e.target !== node) {
        return;
      }

      if (!_this.animationStart) {
        _this.resetEffect(node);
      }
    };

    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }

      _this.resetEffect(e.target);
    };

    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      return children;
    };

    return _this;
  }

  _createClass(Wave, [{
    key: "isNotGrey",
    value: function isNotGrey(color) {
      var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);

      if (match && match[1] && match[2] && match[3]) {
        return !(match[1] === match[2] && match[2] === match[3]);
      }

      return true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }

      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466

      this.removeExtraStyleNode();

      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }

      _Event["default"].removeStartEventListener(node, this.onTransitionStart);

      _Event["default"].removeEndEventListener(node, this.onTransitionEnd);
    }
  }, {
    key: "removeExtraStyleNode",
    value: function removeExtraStyleNode() {
      if (styleForPesudo) {
        styleForPesudo.innerHTML = '';
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var node = (0, require$$1$1.findDOMNode)(this);

      if (!node || node.nodeType !== 1) {
        return;
      }

      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }

      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }

      this.destroy = true;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderWave);
    }
  }]);

  return Wave;
}(React.Component);

exports["default"] = Wave;
});

unwrapExports(wave);

var button = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require$$1);

var PropTypes = _interopRequireWildcard(require$$2);

var _classnames = _interopRequireDefault(require$$2$1);



var _omit = _interopRequireDefault(require$$3);

var _icon = _interopRequireDefault(require$$4);



var _wave = _interopRequireDefault(wave);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
}

function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  React.Children.forEach(children, function (child) {
    var type = _typeof(child);

    var isCurrentChildPure = type === 'string' || type === 'number';

    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  }); // Pass to React.Children.map to auto fill key

  return React.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {}, child.props.children.split('').join(SPACE));
  }

  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }

    return React.createElement("span", null, child);
  }

  return child;
}

var ButtonTypes = (0, _type.tuple)('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
var ButtonShapes = (0, _type.tuple)('circle', 'circle-outline', 'round');
var ButtonSizes = (0, _type.tuple)('large', 'default', 'small');
var ButtonHTMLTypes = (0, _type.tuple)('submit', 'button', 'reset');

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    _this.saveButtonRef = function (node) {
      _this.buttonNode = node;
    };

    _this.handleClick = function (e) {
      var loading = _this.state.loading;
      var onClick = _this.props.onClick;

      if (!!loading) {
        return;
      }

      if (onClick) {
        onClick(e);
      }
    };

    _this.renderButton = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          autoInsertSpaceInButton = _ref.autoInsertSpaceInButton;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          type = _a.type,
          shape = _a.shape,
          size = _a.size,
          className = _a.className,
          children = _a.children,
          icon = _a.icon,
          ghost = _a.ghost,
          _loadingProp = _a.loading,
          block = _a.block,
          rest = __rest(_a, ["prefixCls", "type", "shape", "size", "className", "children", "icon", "ghost", "loading", "block"]);

      var _this$state = _this.state,
          loading = _this$state.loading,
          hasTwoCNChar = _this$state.hasTwoCNChar;
      var prefixCls = getPrefixCls('btn', customizePrefixCls);
      var autoInsertSpace = autoInsertSpaceInButton !== false; // large => lg
      // small => sm

      var sizeCls = '';

      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;

        case 'small':
          sizeCls = 'sm';
          break;

        default:
          break;
      }

      var classes = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && icon), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames, "".concat(prefixCls, "-background-ghost"), ghost), _defineProperty(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace), _defineProperty(_classNames, "".concat(prefixCls, "-block"), block), _classNames));
      var iconType = loading ? 'loading' : icon;
      var iconNode = iconType ? React.createElement(_icon["default"], {
        type: iconType
      }) : null;
      var kids = children || children === 0 ? spaceChildren(children, _this.isNeedInserted() && autoInsertSpace) : null;
      var linkButtonRestProps = (0, _omit["default"])(rest, ['htmlType']);

      if (linkButtonRestProps.href !== undefined) {
        return React.createElement("a", _extends({}, linkButtonRestProps, {
          className: classes,
          onClick: _this.handleClick,
          ref: _this.saveButtonRef
        }), iconNode, kids);
      } // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.


      var _b = rest,
          htmlType = _b.htmlType,
          otherProps = __rest(_b, ["htmlType"]);

      var buttonNode = React.createElement("button", _extends({}, otherProps, {
        type: htmlType,
        className: classes,
        onClick: _this.handleClick,
        ref: _this.saveButtonRef
      }), iconNode, kids);

      if (type === 'link') {
        return buttonNode;
      }

      return React.createElement(_wave["default"], null, buttonNode);
    };

    _this.state = {
      loading: props.loading,
      hasTwoCNChar: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fixTwoCNChar();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      this.fixTwoCNChar();

      if (prevProps.loading && typeof prevProps.loading !== 'boolean') {
        clearTimeout(this.delayTimeout);
      }

      var loading = this.props.loading;

      if (loading && typeof loading !== 'boolean' && loading.delay) {
        this.delayTimeout = window.setTimeout(function () {
          return _this2.setState({
            loading: loading
          });
        }, loading.delay);
      } else if (prevProps.loading === this.props.loading) {
        return;
      } else {
        this.setState({
          loading: loading
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.delayTimeout) {
        clearTimeout(this.delayTimeout);
      }
    }
  }, {
    key: "fixTwoCNChar",
    value: function fixTwoCNChar() {
      // Fix for HOC usage like <FormatMessage />
      if (!this.buttonNode) {
        return;
      }

      var buttonText = this.buttonNode.textContent || this.buttonNode.innerText;

      if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
        if (!this.state.hasTwoCNChar) {
          this.setState({
            hasTwoCNChar: true
          });
        }
      } else if (this.state.hasTwoCNChar) {
        this.setState({
          hasTwoCNChar: false
        });
      }
    }
  }, {
    key: "isNeedInserted",
    value: function isNeedInserted() {
      var _this$props = this.props,
          icon = _this$props.icon,
          children = _this$props.children;
      return React.Children.count(children) === 1 && !icon;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderButton);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.loading instanceof Boolean) {
        return _extends({}, prevState, {
          loading: nextProps.loading
        });
      }

      return null;
    }
  }]);

  return Button;
}(React.Component);

Button.__ANT_BUTTON = true;
Button.defaultProps = {
  loading: false,
  ghost: false,
  block: false,
  htmlType: 'button'
};
Button.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.oneOf(ButtonShapes),
  size: PropTypes.oneOf(ButtonSizes),
  htmlType: PropTypes.oneOf(ButtonHTMLTypes),
  onClick: PropTypes.func,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  className: PropTypes.string,
  icon: PropTypes.string,
  block: PropTypes.bool
};
(0, _reactLifecyclesCompat.polyfill)(Button);
var _default = Button;
exports["default"] = _default;
});

unwrapExports(button);

var buttonGroup = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require$$1);

var _classnames = _interopRequireDefault(require$$2$1);



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

var ButtonGroup = function ButtonGroup(props) {
  return React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);

    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';

      default:
        break;
    }

    var classes = (0, _classnames["default"])(prefixCls, _defineProperty({}, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), className);
    return React.createElement("div", _extends({}, others, {
      className: classes
    }));
  });
};

var _default = ButtonGroup;
exports["default"] = _default;
});

unwrapExports(buttonGroup);

var button$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _button = _interopRequireDefault(button);

var _buttonGroup = _interopRequireDefault(buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_button["default"].Group = _buttonGroup["default"];
var _default = _button["default"];
exports["default"] = _default;
});

var _Button = unwrapExports(button$1);

export { _Button as _, button$1 as b };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmstZjIwMGJjNTAuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9jc3MtYW5pbWF0aW9uL2xpYi9FdmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9yYWYuanMiLCIuLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvd2F2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9idXR0b24vYnV0dG9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2J1dHRvbi9idXR0b24tZ3JvdXAuanMiLCIuLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnV0dG9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBTVEFSVF9FVkVOVF9OQU1FX01BUCA9IHtcbiAgdHJhbnNpdGlvbnN0YXJ0OiB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25zdGFydCcsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25TdGFydCcsXG4gICAgTW96VHJhbnNpdGlvbjogJ21velRyYW5zaXRpb25TdGFydCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvblN0YXJ0JyxcbiAgICBtc1RyYW5zaXRpb246ICdNU1RyYW5zaXRpb25TdGFydCdcbiAgfSxcblxuICBhbmltYXRpb25zdGFydDoge1xuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25TdGFydCcsXG4gICAgTW96QW5pbWF0aW9uOiAnbW96QW5pbWF0aW9uU3RhcnQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uU3RhcnQnLFxuICAgIG1zQW5pbWF0aW9uOiAnTVNBbmltYXRpb25TdGFydCdcbiAgfVxufTtcblxudmFyIEVORF9FVkVOVF9OQU1FX01BUCA9IHtcbiAgdHJhbnNpdGlvbmVuZDoge1xuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgTW96VHJhbnNpdGlvbjogJ21velRyYW5zaXRpb25FbmQnLFxuICAgIE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgIG1zVHJhbnNpdGlvbjogJ01TVHJhbnNpdGlvbkVuZCdcbiAgfSxcblxuICBhbmltYXRpb25lbmQ6IHtcbiAgICBhbmltYXRpb246ICdhbmltYXRpb25lbmQnLFxuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgTW96QW5pbWF0aW9uOiAnbW96QW5pbWF0aW9uRW5kJyxcbiAgICBPQW5pbWF0aW9uOiAnb0FuaW1hdGlvbkVuZCcsXG4gICAgbXNBbmltYXRpb246ICdNU0FuaW1hdGlvbkVuZCdcbiAgfVxufTtcblxudmFyIHN0YXJ0RXZlbnRzID0gW107XG52YXIgZW5kRXZlbnRzID0gW107XG5cbmZ1bmN0aW9uIGRldGVjdEV2ZW50cygpIHtcbiAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgc3R5bGUgPSB0ZXN0RWwuc3R5bGU7XG5cbiAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIFNUQVJUX0VWRU5UX05BTUVfTUFQLmFuaW1hdGlvbnN0YXJ0LmFuaW1hdGlvbjtcbiAgICBkZWxldGUgRU5EX0VWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gIH1cblxuICBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIFNUQVJUX0VWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25zdGFydC50cmFuc2l0aW9uO1xuICAgIGRlbGV0ZSBFTkRfRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2VzcyhFVkVOVF9OQU1FX01BUCwgZXZlbnRzKSB7XG4gICAgZm9yICh2YXIgYmFzZUV2ZW50TmFtZSBpbiBFVkVOVF9OQU1FX01BUCkge1xuICAgICAgaWYgKEVWRU5UX05BTUVfTUFQLmhhc093blByb3BlcnR5KGJhc2VFdmVudE5hbWUpKSB7XG4gICAgICAgIHZhciBiYXNlRXZlbnRzID0gRVZFTlRfTkFNRV9NQVBbYmFzZUV2ZW50TmFtZV07XG4gICAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBiYXNlRXZlbnRzKSB7XG4gICAgICAgICAgaWYgKHN0eWxlTmFtZSBpbiBzdHlsZSkge1xuICAgICAgICAgICAgZXZlbnRzLnB1c2goYmFzZUV2ZW50c1tzdHlsZU5hbWVdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3MoU1RBUlRfRVZFTlRfTkFNRV9NQVAsIHN0YXJ0RXZlbnRzKTtcbiAgcHJvY2VzcyhFTkRfRVZFTlRfTkFNRV9NQVAsIGVuZEV2ZW50cyk7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRldGVjdEV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxudmFyIFRyYW5zaXRpb25FdmVudHMgPSB7XG4gIC8vIFN0YXJ0IGV2ZW50c1xuICBzdGFydEV2ZW50czogc3RhcnRFdmVudHMsXG5cbiAgYWRkU3RhcnRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRTdGFydEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChzdGFydEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGFydEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzdGFydEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIHN0YXJ0RXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuICByZW1vdmVTdGFydEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKHN0YXJ0RXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGFydEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzdGFydEV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIHN0YXJ0RXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuXG5cbiAgLy8gRW5kIGV2ZW50c1xuICBlbmRFdmVudHM6IGVuZEV2ZW50cyxcblxuICBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFRyYW5zaXRpb25FdmVudHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gd3JhcHBlclJhZjtcblxudmFyIF9yYWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYWZcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIGlkID0gMDtcbnZhciBpZHMgPSB7fTsgLy8gU3VwcG9ydCBjYWxsIHJhZiB3aXRoIGRlbGF5IHNwZWNpZmllZCBmcmFtZVxuXG5mdW5jdGlvbiB3cmFwcGVyUmFmKGNhbGxiYWNrKSB7XG4gIHZhciBkZWxheUZyYW1lcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTtcbiAgdmFyIG15SWQgPSBpZCsrO1xuICB2YXIgcmVzdEZyYW1lcyA9IGRlbGF5RnJhbWVzO1xuXG4gIGZ1bmN0aW9uIGludGVybmFsQ2FsbGJhY2soKSB7XG4gICAgcmVzdEZyYW1lcyAtPSAxO1xuXG4gICAgaWYgKHJlc3RGcmFtZXMgPD0gMCkge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIGRlbGV0ZSBpZHNbbXlJZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkc1tteUlkXSA9ICgwLCBfcmFmW1wiZGVmYXVsdFwiXSkoaW50ZXJuYWxDYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgaWRzW215SWRdID0gKDAsIF9yYWZbXCJkZWZhdWx0XCJdKShpbnRlcm5hbENhbGxiYWNrKTtcbiAgcmV0dXJuIG15SWQ7XG59XG5cbndyYXBwZXJSYWYuY2FuY2VsID0gZnVuY3Rpb24gKHBpZCkge1xuICBpZiAocGlkID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICBfcmFmW1wiZGVmYXVsdFwiXS5jYW5jZWwoaWRzW3BpZF0pO1xuXG4gIGRlbGV0ZSBpZHNbcGlkXTtcbn07XG5cbndyYXBwZXJSYWYuaWRzID0gaWRzOyAvLyBleHBvcnQgdGhpcyBmb3IgdGVzdCB1c2FnZSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY3NzLWFuaW1hdGlvbi9saWIvRXZlbnRcIikpO1xuXG52YXIgX3JhZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3JhZlwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgc3R5bGVGb3JQZXN1ZG87IC8vIFdoZXJlIGVsIGlzIHRoZSBET00gZWxlbWVudCB5b3UnZCBsaWtlIHRvIHRlc3QgZm9yIHZpc2liaWxpdHlcblxuZnVuY3Rpb24gaXNIaWRkZW4oZWxlbWVudCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhZWxlbWVudCB8fCBlbGVtZW50Lm9mZnNldFBhcmVudCA9PT0gbnVsbDtcbn1cblxudmFyIFdhdmUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFdhdmUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFdhdmUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdhdmUpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoV2F2ZSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgX3RoaXMuYW5pbWF0aW9uU3RhcnQgPSBmYWxzZTtcbiAgICBfdGhpcy5kZXN0cm95ID0gZmFsc2U7XG5cbiAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKG5vZGUsIHdhdmVDb2xvcikge1xuICAgICAgaWYgKCFub2RlIHx8IGlzSGlkZGVuKG5vZGUpIHx8IG5vZGUuY2xhc3NOYW1lLmluZGV4T2YoJy1sZWF2ZScpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zZXJ0RXh0cmFOb2RlID0gX3RoaXMucHJvcHMuaW5zZXJ0RXh0cmFOb2RlO1xuICAgICAgX3RoaXMuZXh0cmFOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB2YXIgZXh0cmFOb2RlID0gX3RoaXMuZXh0cmFOb2RlO1xuICAgICAgZXh0cmFOb2RlLmNsYXNzTmFtZSA9ICdhbnQtY2xpY2stYW5pbWF0aW5nLW5vZGUnO1xuXG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IF90aGlzLmdldEF0dHJpYnV0ZU5hbWUoKTtcblxuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgJ3RydWUnKTsgLy8gTm90IHdoaXRlIG9yIHRyYW5zcGFybnQgb3IgZ3JleVxuXG4gICAgICBzdHlsZUZvclBlc3VkbyA9IHN0eWxlRm9yUGVzdWRvIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICAgIGlmICh3YXZlQ29sb3IgJiYgd2F2ZUNvbG9yICE9PSAnI2ZmZmZmZicgJiYgd2F2ZUNvbG9yICE9PSAncmdiKDI1NSwgMjU1LCAyNTUpJyAmJiBfdGhpcy5pc05vdEdyZXkod2F2ZUNvbG9yKSAmJiAhL3JnYmFcXChcXGQqLCBcXGQqLCBcXGQqLCAwXFwpLy50ZXN0KHdhdmVDb2xvcikgJiYgLy8gYW55IHRyYW5zcGFyZW50IHJnYmEgY29sb3JcbiAgICAgIHdhdmVDb2xvciAhPT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICAvLyBBZGQgbm9uY2UgaWYgQ1NQIGV4aXN0XG4gICAgICAgIGlmIChfdGhpcy5jc3AgJiYgX3RoaXMuY3NwLm5vbmNlKSB7XG4gICAgICAgICAgc3R5bGVGb3JQZXN1ZG8ubm9uY2UgPSBfdGhpcy5jc3Aubm9uY2U7XG4gICAgICAgIH1cblxuICAgICAgICBleHRyYU5vZGUuc3R5bGUuYm9yZGVyQ29sb3IgPSB3YXZlQ29sb3I7XG4gICAgICAgIHN0eWxlRm9yUGVzdWRvLmlubmVySFRNTCA9IFwiaHRtbCBib2R5IHsgLS1hbnRkLXdhdmUtc2hhZG93LWNvbG9yOiBcIi5jb25jYXQod2F2ZUNvbG9yLCBcIjsgfVwiKTtcblxuICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3R5bGVGb3JQZXN1ZG8pKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHlsZUZvclBlc3Vkbyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGluc2VydEV4dHJhTm9kZSkge1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGV4dHJhTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIF9FdmVudFtcImRlZmF1bHRcIl0uYWRkU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIF90aGlzLm9uVHJhbnNpdGlvblN0YXJ0KTtcblxuICAgICAgX0V2ZW50W1wiZGVmYXVsdFwiXS5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIF90aGlzLm9uVHJhbnNpdGlvbkVuZCk7XG4gICAgfTtcblxuICAgIF90aGlzLmJpbmRBbmltYXRpb25FdmVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZ2V0QXR0cmlidXRlIHx8IG5vZGUuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IG5vZGUuY2xhc3NOYW1lLmluZGV4T2YoJ2Rpc2FibGVkJykgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIC8vIEZpeCByYWRpbyBidXR0b24gY2xpY2sgdHdpY2VcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgfHwgaXNIaWRkZW4oZS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMucmVzZXRFZmZlY3Qobm9kZSk7IC8vIEdldCB3YXZlIGNvbG9yIGZyb20gdGFyZ2V0XG5cblxuICAgICAgICB2YXIgd2F2ZUNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItdG9wLWNvbG9yJykgfHwgLy8gRmlyZWZveCBDb21wYXRpYmxlXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUobm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLWNvbG9yJykgfHwgZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgICAgIF90aGlzLmNsaWNrV2F2ZVRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMub25DbGljayhub2RlLCB3YXZlQ29sb3IpO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICBfcmFmW1wiZGVmYXVsdFwiXS5jYW5jZWwoX3RoaXMuYW5pbWF0aW9uU3RhcnRJZCk7XG5cbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uU3RhcnQgPSB0cnVlOyAvLyBSZW5kZXIgdG8gdHJpZ2dlciB0cmFuc2l0aW9uIGV2ZW50IGNvc3QgMyBmcmFtZXMuIExldCdzIGRlbGF5IDEwIGZyYW1lcyB0byByZXNldCB0aGlzLlxuXG4gICAgICAgIF90aGlzLmFuaW1hdGlvblN0YXJ0SWQgPSAoMCwgX3JhZltcImRlZmF1bHRcIl0pKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5hbmltYXRpb25TdGFydCA9IGZhbHNlO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9O1xuXG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljaywgdHJ1ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljaywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLm9uVHJhbnNpdGlvblN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfdGhpcy5kZXN0cm95KSByZXR1cm47XG4gICAgICB2YXIgbm9kZSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcblxuICAgICAgaWYgKCFlIHx8IGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFfdGhpcy5hbmltYXRpb25TdGFydCkge1xuICAgICAgICBfdGhpcy5yZXNldEVmZmVjdChub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghZSB8fCBlLmFuaW1hdGlvbk5hbWUgIT09ICdmYWRlRWZmZWN0Jykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnJlc2V0RWZmZWN0KGUudGFyZ2V0KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyV2F2ZSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgY3NwID0gX3JlZi5jc3A7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBfdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgIF90aGlzLmNzcCA9IGNzcDtcbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFdhdmUsIFt7XG4gICAga2V5OiBcImlzTm90R3JleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc05vdEdyZXkoY29sb3IpIHtcbiAgICAgIHZhciBtYXRjaCA9IChjb2xvciB8fCAnJykubWF0Y2goL3JnYmE/XFwoKFxcZCopLCAoXFxkKiksIChcXGQqKSgsIFtcXC5cXGRdKik/XFwpLyk7XG5cbiAgICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSAmJiBtYXRjaFsyXSAmJiBtYXRjaFszXSkge1xuICAgICAgICByZXR1cm4gIShtYXRjaFsxXSA9PT0gbWF0Y2hbMl0gJiYgbWF0Y2hbMl0gPT09IG1hdGNoWzNdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEF0dHJpYnV0ZU5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QXR0cmlidXRlTmFtZSgpIHtcbiAgICAgIHZhciBpbnNlcnRFeHRyYU5vZGUgPSB0aGlzLnByb3BzLmluc2VydEV4dHJhTm9kZTtcbiAgICAgIHJldHVybiBpbnNlcnRFeHRyYU5vZGUgPyAnYW50LWNsaWNrLWFuaW1hdGluZycgOiAnYW50LWNsaWNrLWFuaW1hdGluZy13aXRob3V0LWV4dHJhLW5vZGUnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNldEVmZmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldEVmZmVjdChub2RlKSB7XG4gICAgICBpZiAoIW5vZGUgfHwgbm9kZSA9PT0gdGhpcy5leHRyYU5vZGUgfHwgIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zZXJ0RXh0cmFOb2RlID0gdGhpcy5wcm9wcy5pbnNlcnRFeHRyYU5vZGU7XG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlTmFtZSgpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgJ2ZhbHNlJyk7IC8vIGVkZ2UgaGFzIGJ1ZyBvbiBgcmVtb3ZlQXR0cmlidXRlYCAjMTQ0NjZcblxuICAgICAgdGhpcy5yZW1vdmVFeHRyYVN0eWxlTm9kZSgpO1xuXG4gICAgICBpZiAoaW5zZXJ0RXh0cmFOb2RlICYmIHRoaXMuZXh0cmFOb2RlICYmIG5vZGUuY29udGFpbnModGhpcy5leHRyYU5vZGUpKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQodGhpcy5leHRyYU5vZGUpO1xuICAgICAgfVxuXG4gICAgICBfRXZlbnRbXCJkZWZhdWx0XCJdLnJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcihub2RlLCB0aGlzLm9uVHJhbnNpdGlvblN0YXJ0KTtcblxuICAgICAgX0V2ZW50W1wiZGVmYXVsdFwiXS5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIHRoaXMub25UcmFuc2l0aW9uRW5kKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRXh0cmFTdHlsZU5vZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXh0cmFTdHlsZU5vZGUoKSB7XG4gICAgICBpZiAoc3R5bGVGb3JQZXN1ZG8pIHtcbiAgICAgICAgc3R5bGVGb3JQZXN1ZG8uaW5uZXJIVE1MID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIG5vZGUgPSAoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKSh0aGlzKTtcblxuICAgICAgaWYgKCFub2RlIHx8IG5vZGUubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5iaW5kQW5pbWF0aW9uRXZlbnQobm9kZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5jYW5jZWwoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2xpY2tXYXZlVGltZW91dElkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrV2F2ZVRpbWVvdXRJZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVzdHJveSA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyV2F2ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdhdmU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gV2F2ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfd2F2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhdmVcIikpO1xuXG52YXIgX3R5cGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvdHlwZVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciByeFR3b0NOQ2hhciA9IC9eW1xcdTRlMDAtXFx1OWZhNV17Mn0kLztcbnZhciBpc1R3b0NOQ2hhciA9IHJ4VHdvQ05DaGFyLnRlc3QuYmluZChyeFR3b0NOQ2hhcik7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIHNwYWNlQ2hpbGRyZW4oY2hpbGRyZW4sIG5lZWRJbnNlcnRlZCkge1xuICB2YXIgaXNQcmV2Q2hpbGRQdXJlID0gZmFsc2U7XG4gIHZhciBjaGlsZExpc3QgPSBbXTtcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgdmFyIHR5cGUgPSBfdHlwZW9mKGNoaWxkKTtcblxuICAgIHZhciBpc0N1cnJlbnRDaGlsZFB1cmUgPSB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJztcblxuICAgIGlmIChpc1ByZXZDaGlsZFB1cmUgJiYgaXNDdXJyZW50Q2hpbGRQdXJlKSB7XG4gICAgICB2YXIgbGFzdEluZGV4ID0gY2hpbGRMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICB2YXIgbGFzdENoaWxkID0gY2hpbGRMaXN0W2xhc3RJbmRleF07XG4gICAgICBjaGlsZExpc3RbbGFzdEluZGV4XSA9IFwiXCIuY29uY2F0KGxhc3RDaGlsZCkuY29uY2F0KGNoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRMaXN0LnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGlzUHJldkNoaWxkUHVyZSA9IGlzQ3VycmVudENoaWxkUHVyZTtcbiAgfSk7IC8vIFBhc3MgdG8gUmVhY3QuQ2hpbGRyZW4ubWFwIHRvIGF1dG8gZmlsbCBrZXlcblxuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkTGlzdCwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGluc2VydFNwYWNlKGNoaWxkLCBuZWVkSW5zZXJ0ZWQpO1xuICB9KTtcbn0gLy8gSW5zZXJ0IG9uZSBzcGFjZSBiZXR3ZWVuIHR3byBjaGluZXNlIGNoYXJhY3RlcnMgYXV0b21hdGljYWxseS5cblxuXG5mdW5jdGlvbiBpbnNlcnRTcGFjZShjaGlsZCwgbmVlZEluc2VydGVkKSB7XG4gIC8vIENoZWNrIHRoZSBjaGlsZCBpZiBpcyB1bmRlZmluZWQgb3IgbnVsbC5cbiAgaWYgKGNoaWxkID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgU1BBQ0UgPSBuZWVkSW5zZXJ0ZWQgPyAnICcgOiAnJzsgLy8gc3RyaWN0TnVsbENoZWNrcyBvb3BzLlxuXG4gIGlmICh0eXBlb2YgY2hpbGQgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBjaGlsZCAhPT0gJ251bWJlcicgJiYgaXNTdHJpbmcoY2hpbGQudHlwZSkgJiYgaXNUd29DTkNoYXIoY2hpbGQucHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge30sIGNoaWxkLnByb3BzLmNoaWxkcmVuLnNwbGl0KCcnKS5qb2luKFNQQUNFKSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgIGlmIChpc1R3b0NOQ2hhcihjaGlsZCkpIHtcbiAgICAgIGNoaWxkID0gY2hpbGQuc3BsaXQoJycpLmpvaW4oU1BBQ0UpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBjaGlsZCk7XG4gIH1cblxuICByZXR1cm4gY2hpbGQ7XG59XG5cbnZhciBCdXR0b25UeXBlcyA9ICgwLCBfdHlwZS50dXBsZSkoJ2RlZmF1bHQnLCAncHJpbWFyeScsICdnaG9zdCcsICdkYXNoZWQnLCAnZGFuZ2VyJywgJ2xpbmsnKTtcbnZhciBCdXR0b25TaGFwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdjaXJjbGUnLCAnY2lyY2xlLW91dGxpbmUnLCAncm91bmQnKTtcbnZhciBCdXR0b25TaXplcyA9ICgwLCBfdHlwZS50dXBsZSkoJ2xhcmdlJywgJ2RlZmF1bHQnLCAnc21hbGwnKTtcbnZhciBCdXR0b25IVE1MVHlwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdzdWJtaXQnLCAnYnV0dG9uJywgJ3Jlc2V0Jyk7XG5cbnZhciBCdXR0b24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEJ1dHRvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1dHRvbik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihCdXR0b24pLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnNhdmVCdXR0b25SZWYgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMuYnV0dG9uTm9kZSA9IG5vZGU7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBsb2FkaW5nID0gX3RoaXMuc3RhdGUubG9hZGluZztcbiAgICAgIHZhciBvbkNsaWNrID0gX3RoaXMucHJvcHMub25DbGljaztcblxuICAgICAgaWYgKCEhbG9hZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgIG9uQ2xpY2soZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckJ1dHRvbiA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscyxcbiAgICAgICAgICBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbiA9IF9yZWYuYXV0b0luc2VydFNwYWNlSW5CdXR0b247XG5cbiAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICB0eXBlID0gX2EudHlwZSxcbiAgICAgICAgICBzaGFwZSA9IF9hLnNoYXBlLFxuICAgICAgICAgIHNpemUgPSBfYS5zaXplLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgICAgIGljb24gPSBfYS5pY29uLFxuICAgICAgICAgIGdob3N0ID0gX2EuZ2hvc3QsXG4gICAgICAgICAgX2xvYWRpbmdQcm9wID0gX2EubG9hZGluZyxcbiAgICAgICAgICBibG9jayA9IF9hLmJsb2NrLFxuICAgICAgICAgIHJlc3QgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcInR5cGVcIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcImljb25cIiwgXCJnaG9zdFwiLCBcImxvYWRpbmdcIiwgXCJibG9ja1wiXSk7XG5cbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIGxvYWRpbmcgPSBfdGhpcyRzdGF0ZS5sb2FkaW5nLFxuICAgICAgICAgIGhhc1R3b0NOQ2hhciA9IF90aGlzJHN0YXRlLmhhc1R3b0NOQ2hhcjtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2J0bicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgYXV0b0luc2VydFNwYWNlID0gYXV0b0luc2VydFNwYWNlSW5CdXR0b24gIT09IGZhbHNlOyAvLyBsYXJnZSA9PiBsZ1xuICAgICAgLy8gc21hbGwgPT4gc21cblxuICAgICAgdmFyIHNpemVDbHMgPSAnJztcblxuICAgICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgICBzaXplQ2xzID0gJ2xnJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgICAgc2l6ZUNscyA9ICdzbSc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHR5cGUpLCB0eXBlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2hhcGUpLCBzaGFwZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemVDbHMpLCBzaXplQ2xzKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb24tb25seVwiKSwgIWNoaWxkcmVuICYmIGNoaWxkcmVuICE9PSAwICYmIGljb24pLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZ1wiKSwgbG9hZGluZyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1iYWNrZ3JvdW5kLWdob3N0XCIpLCBnaG9zdCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10d28tY2hpbmVzZS1jaGFyc1wiKSwgaGFzVHdvQ05DaGFyICYmIGF1dG9JbnNlcnRTcGFjZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ibG9ja1wiKSwgYmxvY2spLCBfY2xhc3NOYW1lcykpO1xuICAgICAgdmFyIGljb25UeXBlID0gbG9hZGluZyA/ICdsb2FkaW5nJyA6IGljb247XG4gICAgICB2YXIgaWNvbk5vZGUgPSBpY29uVHlwZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIHR5cGU6IGljb25UeXBlXG4gICAgICB9KSA6IG51bGw7XG4gICAgICB2YXIga2lkcyA9IGNoaWxkcmVuIHx8IGNoaWxkcmVuID09PSAwID8gc3BhY2VDaGlsZHJlbihjaGlsZHJlbiwgX3RoaXMuaXNOZWVkSW5zZXJ0ZWQoKSAmJiBhdXRvSW5zZXJ0U3BhY2UpIDogbnVsbDtcbiAgICAgIHZhciBsaW5rQnV0dG9uUmVzdFByb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkocmVzdCwgWydodG1sVHlwZSddKTtcblxuICAgICAgaWYgKGxpbmtCdXR0b25SZXN0UHJvcHMuaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfZXh0ZW5kcyh7fSwgbGlua0J1dHRvblJlc3RQcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpcy5oYW5kbGVDbGljayxcbiAgICAgICAgICByZWY6IF90aGlzLnNhdmVCdXR0b25SZWZcbiAgICAgICAgfSksIGljb25Ob2RlLCBraWRzKTtcbiAgICAgIH0gLy8gUmVhY3QgZG9lcyBub3QgcmVjb2duaXplIHRoZSBgaHRtbFR5cGVgIHByb3Agb24gYSBET00gZWxlbWVudC4gSGVyZSB3ZSBwaWNrIGl0IG91dCBvZiBgcmVzdGAuXG5cblxuICAgICAgdmFyIF9iID0gcmVzdCxcbiAgICAgICAgICBodG1sVHlwZSA9IF9iLmh0bWxUeXBlLFxuICAgICAgICAgIG90aGVyUHJvcHMgPSBfX3Jlc3QoX2IsIFtcImh0bWxUeXBlXCJdKTtcblxuICAgICAgdmFyIGJ1dHRvbk5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIF9leHRlbmRzKHt9LCBvdGhlclByb3BzLCB7XG4gICAgICAgIHR5cGU6IGh0bWxUeXBlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgIG9uQ2xpY2s6IF90aGlzLmhhbmRsZUNsaWNrLFxuICAgICAgICByZWY6IF90aGlzLnNhdmVCdXR0b25SZWZcbiAgICAgIH0pLCBpY29uTm9kZSwga2lkcyk7XG5cbiAgICAgIGlmICh0eXBlID09PSAnbGluaycpIHtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbk5vZGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF93YXZlW1wiZGVmYXVsdFwiXSwgbnVsbCwgYnV0dG9uTm9kZSk7XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogcHJvcHMubG9hZGluZyxcbiAgICAgIGhhc1R3b0NOQ2hhcjogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCdXR0b24sIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5maXhUd29DTkNoYXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLmZpeFR3b0NOQ2hhcigpO1xuXG4gICAgICBpZiAocHJldlByb3BzLmxvYWRpbmcgJiYgdHlwZW9mIHByZXZQcm9wcy5sb2FkaW5nICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxvYWRpbmcgPSB0aGlzLnByb3BzLmxvYWRpbmc7XG5cbiAgICAgIGlmIChsb2FkaW5nICYmIHR5cGVvZiBsb2FkaW5nICE9PSAnYm9vbGVhbicgJiYgbG9hZGluZy5kZWxheSkge1xuICAgICAgICB0aGlzLmRlbGF5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgbG9hZGluZy5kZWxheSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZQcm9wcy5sb2FkaW5nID09PSB0aGlzLnByb3BzLmxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbG9hZGluZzogbG9hZGluZ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5kZWxheVRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lb3V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZml4VHdvQ05DaGFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpeFR3b0NOQ2hhcigpIHtcbiAgICAgIC8vIEZpeCBmb3IgSE9DIHVzYWdlIGxpa2UgPEZvcm1hdE1lc3NhZ2UgLz5cbiAgICAgIGlmICghdGhpcy5idXR0b25Ob2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGJ1dHRvblRleHQgPSB0aGlzLmJ1dHRvbk5vZGUudGV4dENvbnRlbnQgfHwgdGhpcy5idXR0b25Ob2RlLmlubmVyVGV4dDtcblxuICAgICAgaWYgKHRoaXMuaXNOZWVkSW5zZXJ0ZWQoKSAmJiBpc1R3b0NOQ2hhcihidXR0b25UZXh0KSkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaGFzVHdvQ05DaGFyKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBoYXNUd29DTkNoYXI6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmhhc1R3b0NOQ2hhcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoYXNUd29DTkNoYXI6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc05lZWRJbnNlcnRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc05lZWRJbnNlcnRlZCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaWNvbiA9IF90aGlzJHByb3BzLmljb24sXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbjtcbiAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDEgJiYgIWljb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyQnV0dG9uKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICBpZiAobmV4dFByb3BzLmxvYWRpbmcgaW5zdGFuY2VvZiBCb29sZWFuKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgICAgbG9hZGluZzogbmV4dFByb3BzLmxvYWRpbmdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBCdXR0b247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkJ1dHRvbi5fX0FOVF9CVVRUT04gPSB0cnVlO1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIGdob3N0OiBmYWxzZSxcbiAgYmxvY2s6IGZhbHNlLFxuICBodG1sVHlwZTogJ2J1dHRvbidcbn07XG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaGFwZTogUHJvcFR5cGVzLm9uZU9mKEJ1dHRvblNoYXBlcyksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihCdXR0b25TaXplcyksXG4gIGh0bWxUeXBlOiBQcm9wVHlwZXMub25lT2YoQnV0dG9uSFRNTFR5cGVzKSxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYmxvY2s6IFByb3BUeXBlcy5ib29sXG59O1xuKDAsIF9yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwpKEJ1dHRvbik7XG52YXIgX2RlZmF1bHQgPSBCdXR0b247XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIEJ1dHRvbkdyb3VwID0gZnVuY3Rpb24gQnV0dG9uR3JvdXAocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcblxuICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIG90aGVycyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwic2l6ZVwiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdidG4tZ3JvdXAnLCBjdXN0b21pemVQcmVmaXhDbHMpOyAvLyBsYXJnZSA9PiBsZ1xuICAgIC8vIHNtYWxsID0+IHNtXG5cbiAgICB2YXIgc2l6ZUNscyA9ICcnO1xuXG4gICAgc3dpdGNoIChzaXplKSB7XG4gICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgIHNpemVDbHMgPSAnbGcnO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICBzaXplQ2xzID0gJ3NtJztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemVDbHMpLCBzaXplQ2xzKSwgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSk7XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gQnV0dG9uR3JvdXA7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfYnV0dG9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9idXR0b25cIikpO1xuXG52YXIgX2J1dHRvbkdyb3VwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9idXR0b24tZ3JvdXBcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuX2J1dHRvbltcImRlZmF1bHRcIl0uR3JvdXAgPSBfYnV0dG9uR3JvdXBbXCJkZWZhdWx0XCJdO1xudmFyIF9kZWZhdWx0ID0gX2J1dHRvbltcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyJdLCJuYW1lcyI6WyJyZXF1aXJlJCQwIiwicmVxdWlyZSQkMSIsInJlcXVpcmUkJDIiLCJfcmVhY3REb20iLCJyZXF1aXJlJCQ1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtFQUMzQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQztBQUNILElBQUksb0JBQW9CLEdBQUc7RUFDekIsZUFBZSxFQUFFO0lBQ2YsVUFBVSxFQUFFLGlCQUFpQjtJQUM3QixnQkFBZ0IsRUFBRSx1QkFBdUI7SUFDekMsYUFBYSxFQUFFLG9CQUFvQjtJQUNuQyxXQUFXLEVBQUUsa0JBQWtCO0lBQy9CLFlBQVksRUFBRSxtQkFBbUI7R0FDbEM7O0VBRUQsY0FBYyxFQUFFO0lBQ2QsU0FBUyxFQUFFLGdCQUFnQjtJQUMzQixlQUFlLEVBQUUsc0JBQXNCO0lBQ3ZDLFlBQVksRUFBRSxtQkFBbUI7SUFDakMsVUFBVSxFQUFFLGlCQUFpQjtJQUM3QixXQUFXLEVBQUUsa0JBQWtCO0dBQ2hDO0NBQ0YsQ0FBQzs7QUFFRixJQUFJLGtCQUFrQixHQUFHO0VBQ3ZCLGFBQWEsRUFBRTtJQUNiLFVBQVUsRUFBRSxlQUFlO0lBQzNCLGdCQUFnQixFQUFFLHFCQUFxQjtJQUN2QyxhQUFhLEVBQUUsa0JBQWtCO0lBQ2pDLFdBQVcsRUFBRSxnQkFBZ0I7SUFDN0IsWUFBWSxFQUFFLGlCQUFpQjtHQUNoQzs7RUFFRCxZQUFZLEVBQUU7SUFDWixTQUFTLEVBQUUsY0FBYztJQUN6QixlQUFlLEVBQUUsb0JBQW9CO0lBQ3JDLFlBQVksRUFBRSxpQkFBaUI7SUFDL0IsVUFBVSxFQUFFLGVBQWU7SUFDM0IsV0FBVyxFQUFFLGdCQUFnQjtHQUM5QjtDQUNGLENBQUM7O0FBRUYsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQzs7QUFFbkIsU0FBUyxZQUFZLEdBQUc7RUFDdEIsSUFBSSxNQUFNLEdBQUcsUUFBUSxD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QixDQUFDLENBQUM7Ozs7QUFJdEQsSUFBSSxNQUFNLEdBQUcsc0JBQXNCLENBQUNDLEtBQWtDLENBQUMsQ0FBQzs7QUFFeEUsSUFBSSxJQUFJLEdBQUcsc0JBQXNCLENBQUNDLEdBQXVCLENBQUMsQ0FBQzs7OztBQUkzRCxTQUFTLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7O0FBRWpHLFNBQVMsdUJBQXVCLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxFQUFFLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFOztBQUUz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QUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFOztBQUUzZCxTQUFTLFFBQVEsR0FBRyxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUU7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QUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxlQUFlLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUU7O0FBRWpZLFNBQVMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxTQUFTLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTs7QUFFMUssU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRSxFQUFFLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLEdBQUcsS0FBSyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O0FBRS9WLElBQUksTUFBTSxHQUFHLEFBQTZCLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUN4RCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7O0VB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LE1BQU0sQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRTs7QUFFM2QsU0FBUyxRQUFRLEdBQUcsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFOztBQUU3VCxTQUFTLGVBQWUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7O0FBRWpOLElBQUksTUFBTSxHQUFHLEFBQTZCLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUN4RCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7O0VBRVgsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDZixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUNqRjs7RUFFRCxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxNQUFNLENBQUMscUJBQXFCLEtBQUssVUFBVSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDM0ksSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUNuRztFQUNELE9BQU8sQ0FBQyxDQUFDO0NBQ1YsQ0FBQzs7QUFFRixJQUFJLFdBQVcsR0FBRyxTQUFTLFdBQVcsQ0FBQyxLQUFLLEVBQUU7RUFDNUMsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLFVBQVUsSUFBSSxFQUFFO0lBQy9FLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O0lBRXJDLElBQUksa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFNBQVM7UUFDcEMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJO1FBQ2pCLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUztRQUMzQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQzs7SUFFL0QsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzs7SUFHOUQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOztJQUVqQixRQUFRLElBQUk7TUFDVixLQUFLLE9BQU87UUFDVixPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsTUFBTTs7TUFFUixLQUFLLE9BQU87UUFDVixPQUFPLEdBQUcsSUFBSSxDQUFDOztNQUVqQjtRQUNFLE1BQU07S0FDVDs7SUFFRCxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN6SSxPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFO01BQ3JELFNBQVMsRUFBRSxPQUFPO0tBQ25CLENBQUMsQ0FBQyxDQUFDO0dBQ0wsQ0FBQyxDQUFDO0NBQ0osQ0FBQzs7QUFFRixJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUM7QUFDM0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFFBQVE7Ozs7OztBQ3BFN0I7QUFFQSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7RUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7O0FBRTVCLElBQUksT0FBTyxHQUFHLHNCQUFzQixDQUFDRCxNQUFtQixDQUFDLENBQUM7O0FBRTFELElBQUksWUFBWSxHQUFHLHNCQUFzQixDQUFDQyxXQUF5QixDQUFDLENBQUM7O0FBRXJFLFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTs7QUFFakcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkQsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFROzs7Ozs7OyJ9
