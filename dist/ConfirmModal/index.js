import '../chunk-fee9d9e4.js';
import React__default, { createElement, Component } from 'react';
import PropTypes__default from 'prop-types';
import { c as createCommonjsModule, u as unwrapExports } from '../chunk-02ddfd93.js';
import '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
import { e as require$$0, r as require$$2, b as require$$7, _ as _configProvider } from '../chunk-dbd356d3.js';
import '../chunk-ee2530d1.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _extends } from '../chunk-bc8b20dc.js';
import * as ReactDOM from 'react-dom';
import { findDOMNode } from 'react-dom';
import { c as contains, C as ContainerRender, P as Portal, l as lib } from '../chunk-8c29e7a2.js';
import { A as Animate } from '../chunk-5d630e90.js';
import { c as require$$4, r as require$$6 } from '../chunk-0880ccca.js';
import '../chunk-fd809749.js';
import '../chunk-a58638a0.js';
import { r as require$$1 } from '../chunk-8820e6e0.js';
import '../chunk-3a7de8d6.js';
import { S as StringOrNodePT, a as ButtonPropsPT, b as StringOrNumberPT } from '../chunk-7a0c966a.js';
import { r as require$$2$1 } from '../chunk-36a4bc51.js';
import { K as KeyCode } from '../chunk-c76ef287.js';

var LazyRenderBox = function (_React$Component) {
    _inherits(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        _classCallCheck(this, LazyRenderBox);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !!nextProps.hiddenClassName || !!nextProps.visible;
    };

    LazyRenderBox.prototype.render = function render() {
        var className = this.props.className;
        if (!!this.props.hiddenClassName && !this.props.visible) {
            className += " " + this.props.hiddenClassName;
        }
        var props = _extends({}, this.props);
        delete props.hiddenClassName;
        delete props.visible;
        props.className = className;
        return createElement("div", _extends({}, props));
    };

    return LazyRenderBox;
}(Component);

var cached = void 0;

function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    var outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}

var uuid = 0;
var openCount = 0;
/* eslint react/no-is-mounted:0 */
function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}
function setTransformOrigin(node, value) {
    var style = node.style;
    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
        style[prefix + 'TransformOrigin'] = value;
    });
    style['transformOrigin'] = value;
}
function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
        left: rect.left,
        top: rect.top
    };
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
}

var Dialog = function (_React$Component) {
    _inherits(Dialog, _React$Component);

    function Dialog() {
        _classCallCheck(this, Dialog);

        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));

        _this.onAnimateLeave = function () {
            var afterClose = _this.props.afterClose;
            // need demo?
            // https://github.com/react-component/dialog/pull/28

            if (_this.wrap) {
                _this.wrap.style.display = 'none';
            }
            _this.inTransition = false;
            _this.removeScrollingEffect();
            if (afterClose) {
                afterClose();
            }
        };
        _this.onDialogMouseDown = function () {
            _this.dialogMouseDown = true;
        };
        _this.onMaskMouseUp = function () {
            if (_this.dialogMouseDown) {
                _this.timeoutId = setTimeout(function () {
                    _this.dialogMouseDown = false;
                }, 0);
            }
        };
        _this.onMaskClick = function (e) {
            // android trigger click on open (fastclick??)
            if (Date.now() - _this.openTime < 300) {
                return;
            }
            if (e.target === e.currentTarget && !_this.dialogMouseDown) {
                _this.close(e);
            }
        };
        _this.onKeyDown = function (e) {
            var props = _this.props;
            if (props.keyboard && e.keyCode === KeyCode.ESC) {
                e.stopPropagation();
                _this.close(e);
                return;
            }
            // keep focus inside dialog
            if (props.visible) {
                if (e.keyCode === KeyCode.TAB) {
                    var activeElement = document.activeElement;
                    var sentinelStart = _this.sentinelStart;
                    if (e.shiftKey) {
                        if (activeElement === sentinelStart) {
                            _this.sentinelEnd.focus();
                        }
                    } else if (activeElement === _this.sentinelEnd) {
                        sentinelStart.focus();
                    }
                }
            }
        };
        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var dest = {};
            if (props.width !== undefined) {
                dest.width = props.width;
            }
            if (props.height !== undefined) {
                dest.height = props.height;
            }
            var footer = void 0;
            if (props.footer) {
                footer = createElement("div", { className: prefixCls + '-footer', ref: _this.saveRef('footer') }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = createElement("div", { className: prefixCls + '-header', ref: _this.saveRef('header') }, createElement("div", { className: prefixCls + '-title', id: _this.titleId }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = createElement("button", { onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, props.closeIcon || createElement("span", { className: prefixCls + '-close-x' }));
            }
            var style = _extends({}, props.style, dest);
            var sentinelStyle = { width: 0, height: 0, overflow: 'hidden' };
            var transitionName = _this.getTransitionName();
            var dialogElement = createElement(LazyRenderBox, { key: "dialog-element", role: "document", ref: _this.saveRef('dialog'), style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible, onMouseDown: _this.onDialogMouseDown }, createElement("div", { tabIndex: 0, ref: _this.saveRef('sentinelStart'), style: sentinelStyle, "aria-hidden": "true" }), createElement("div", { className: prefixCls + '-content' }, closer, header, createElement("div", _extends({ className: prefixCls + '-body', style: props.bodyStyle, ref: _this.saveRef('body') }, props.bodyProps), props.children), footer), createElement("div", { tabIndex: 0, ref: _this.saveRef('sentinelEnd'), style: sentinelStyle, "aria-hidden": "true" }));
            return createElement(Animate, { key: "dialog", showProp: "visible", onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, props.visible || !props.destroyOnClose ? dialogElement : null);
        };
        _this.getZIndexStyle = function () {
            var style = {};
            var props = _this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        };
        _this.getWrapStyle = function () {
            return _extends({}, _this.getZIndexStyle(), _this.props.wrapStyle);
        };
        _this.getMaskStyle = function () {
            return _extends({}, _this.getZIndexStyle(), _this.props.maskStyle);
        };
        _this.getMaskElement = function () {
            var props = _this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = _this.getMaskTransitionName();
                maskElement = createElement(LazyRenderBox, _extends({ style: _this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
                if (maskTransition) {
                    maskElement = createElement(Animate, { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        };
        _this.getMaskTransitionName = function () {
            var props = _this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getTransitionName = function () {
            var props = _this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.setScrollbar = function () {
            if (_this.bodyIsOverflowing && _this.scrollbarWidth !== undefined) {
                document.body.style.paddingRight = _this.scrollbarWidth + 'px';
            }
        };
        _this.addScrollingEffect = function () {
            openCount++;
            if (openCount !== 1) {
                return;
            }
            _this.checkScrollbar();
            _this.setScrollbar();
            document.body.style.overflow = 'hidden';
            // this.adjustDialog();
        };
        _this.removeScrollingEffect = function () {
            openCount--;
            if (openCount !== 0) {
                return;
            }
            document.body.style.overflow = '';
            _this.resetScrollbar();
            // this.resetAdjustments();
        };
        _this.close = function (e) {
            var onClose = _this.props.onClose;

            if (onClose) {
                onClose(e);
            }
        };
        _this.checkScrollbar = function () {
            var fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) {
                // workaround for missing window.innerWidth in IE8
                var documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            _this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            if (_this.bodyIsOverflowing) {
                _this.scrollbarWidth = getScrollBarSize();
            }
        };
        _this.resetScrollbar = function () {
            document.body.style.paddingRight = '';
        };
        _this.adjustDialog = function () {
            if (_this.wrap && _this.scrollbarWidth !== undefined) {
                var modalIsOverflowing = _this.wrap.scrollHeight > document.documentElement.clientHeight;
                _this.wrap.style.paddingLeft = (!_this.bodyIsOverflowing && modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
                _this.wrap.style.paddingRight = (_this.bodyIsOverflowing && !modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
            }
        };
        _this.resetAdjustments = function () {
            if (_this.wrap) {
                _this.wrap.style.paddingLeft = _this.wrap.style.paddingLeft = '';
            }
        };
        _this.saveRef = function (name) {
            return function (node) {
                _this[name] = node;
            };
        };
        return _this;
    }

    Dialog.prototype.componentWillMount = function componentWillMount() {
        this.inTransition = false;
        this.titleId = 'rcDialogTitle' + uuid++;
    };

    Dialog.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({});
        // if forceRender is true, set element style display to be none;
        if (this.props.forceRender && this.wrap) {
            this.wrap.style.display = 'none';
        }
    };

    Dialog.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var props = this.props;
        var mousePosition = this.props.mousePosition;
        if (props.visible) {
            // first show
            if (!prevProps.visible) {
                this.openTime = Date.now();
                this.addScrollingEffect();
                this.tryFocus();
                var dialogNode = findDOMNode(this.dialog);
                if (mousePosition) {
                    var elOffset = offset(dialogNode);
                    setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
                } else {
                    setTransformOrigin(dialogNode, '');
                }
            }
        } else if (prevProps.visible) {
            this.inTransition = true;
            if (props.mask && this.lastOutSideFocusNode) {
                try {
                    this.lastOutSideFocusNode.focus();
                } catch (e) {
                    this.lastOutSideFocusNode = null;
                }
                this.lastOutSideFocusNode = null;
            }
        }
    };

    Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.props.visible || this.inTransition) {
            this.removeScrollingEffect();
        }
        clearTimeout(this.timeoutId);
    };

    Dialog.prototype.tryFocus = function tryFocus() {
        if (!contains(this.wrap, document.activeElement)) {
            this.lastOutSideFocusNode = document.activeElement;
            this.sentinelStart.focus();
        }
    };

    Dialog.prototype.render = function render() {
        var props = this.props;
        var prefixCls = props.prefixCls,
            maskClosable = props.maskClosable;

        var style = this.getWrapStyle();
        // clear hide display
        // and only set display after async anim, not here for hide
        if (props.visible) {
            style.display = null;
        }
        return createElement("div", null, this.getMaskElement(), createElement("div", _extends({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: this.saveRef('wrap'), onClick: maskClosable ? this.onMaskClick : null, onMouseUp: maskClosable ? this.onMaskMouseUp : null, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
    };

    return Dialog;
}(Component);

Dialog.defaultProps = {
    className: '',
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: 'rc-dialog'
};

var IS_REACT_16 = 'createPortal' in ReactDOM;

var DialogWrap = function (_React$Component) {
    _inherits(DialogWrap, _React$Component);

    function DialogWrap() {
        _classCallCheck(this, DialogWrap);

        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));

        _this.saveDialog = function (node) {
            _this._component = node;
        };
        _this.getComponent = function () {
            var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return createElement(Dialog, _extends({ ref: _this.saveDialog }, _this.props, extra, { key: "dialog" }));
        };
        // fix issue #10656
        /*
        * Custom container should not be return, because in the Portal component, it will remove the
        * return container element here, if the custom container is the only child of it's component,
        * like issue #10656, It will has a conflict with removeChild method in react-dom.
        * So here should add a child (div element) to custom container.
        * */
        _this.getContainer = function () {
            var container = document.createElement('div');
            if (_this.props.getContainer) {
                _this.props.getContainer().appendChild(container);
            } else {
                document.body.appendChild(container);
            }
            return container;
        };
        return _this;
    }

    DialogWrap.prototype.shouldComponentUpdate = function shouldComponentUpdate(_ref) {
        var visible = _ref.visible,
            forceRender = _ref.forceRender;

        return !!(this.props.visible || visible) || this.props.forceRender || forceRender;
    };

    DialogWrap.prototype.componentWillUnmount = function componentWillUnmount() {
        if (IS_REACT_16) {
            return;
        }
        if (this.props.visible) {
            this.renderComponent({
                afterClose: this.removeContainer,
                onClose: function onClose() {},

                visible: false
            });
        } else {
            this.removeContainer();
        }
    };

    DialogWrap.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            visible = _props.visible,
            forceRender = _props.forceRender;

        var portal = null;
        if (!IS_REACT_16) {
            return createElement(ContainerRender, { parent: this, visible: visible, autoDestroy: false, getComponent: this.getComponent, getContainer: this.getContainer, forceRender: forceRender }, function (_ref2) {
                var renderComponent = _ref2.renderComponent,
                    removeContainer = _ref2.removeContainer;

                _this2.renderComponent = renderComponent;
                _this2.removeContainer = removeContainer;
                return null;
            });
        }
        if (visible || forceRender || this._component) {
            portal = createElement(Portal, { getContainer: this.getContainer }, this.getComponent());
        }
        return portal;
    };

    return DialogWrap;
}(Component);

DialogWrap.defaultProps = {
    visible: false,
    forceRender: false
};

var addEventListener = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;



var _addDomEventListener2 = _interopRequireDefault(lib);



var _reactDom2 = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback, option);
}
module.exports = exports['default'];
});

unwrapExports(addEventListener);

var locale = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

var _default = _interopRequireDefault(require$$0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var runtimeLocale = _extends({}, _default["default"].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = _extends({}, runtimeLocale, newLocale);
  } else {
    runtimeLocale = _extends({}, _default["default"].Modal);
  }
}

function getConfirmLocale() {
  return runtimeLocale;
}
});

unwrapExports(locale);
var locale_1 = locale.changeConfirmLocale;
var locale_2 = locale.getConfirmLocale;

var Modal_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.destroyFns = void 0;

var React = _interopRequireWildcard(React__default);

var _rcDialog = _interopRequireDefault(DialogWrap);

var PropTypes = _interopRequireWildcard(PropTypes__default);

var _classnames = _interopRequireDefault(require$$2);

var _addEventListener = _interopRequireDefault(addEventListener);



var _icon = _interopRequireDefault(require$$4);

var _button = _interopRequireDefault(require$$2$1);

var _LocaleReceiver = _interopRequireDefault(require$$7);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

var mousePosition;
var destroyFns = []; // ref: https://github.com/ant-design/ant-design/issues/15795

exports.destroyFns = destroyFns;

var getClickPosition = function getClickPosition(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }; // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开

  setTimeout(function () {
    return mousePosition = null;
  }, 100);
}; // 只有点击事件支持从鼠标位置动画展开


if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
  (0, _addEventListener["default"])(document.documentElement, 'click', getClickPosition);
}

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));

    _this.handleCancel = function (e) {
      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel(e);
      }
    };

    _this.handleOk = function (e) {
      var onOk = _this.props.onOk;

      if (onOk) {
        onOk(e);
      }
    };

    _this.renderFooter = function (locale) {
      var _this$props = _this.props,
          okText = _this$props.okText,
          okType = _this$props.okType,
          cancelText = _this$props.cancelText,
          confirmLoading = _this$props.confirmLoading;
      return React.createElement("div", null, React.createElement(_button["default"], _extends({
        onClick: _this.handleCancel
      }, _this.props.cancelButtonProps), cancelText || locale.cancelText), React.createElement(_button["default"], _extends({
        type: okType,
        loading: confirmLoading,
        onClick: _this.handleOk
      }, _this.props.okButtonProps), okText || locale.okText));
    };

    _this.renderModal = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          footer = _a.footer,
          visible = _a.visible,
          wrapClassName = _a.wrapClassName,
          centered = _a.centered,
          restProps = __rest(_a, ["prefixCls", "footer", "visible", "wrapClassName", "centered"]);

      var prefixCls = getPrefixCls('modal', customizePrefixCls);
      var defaultFooter = React.createElement(_LocaleReceiver["default"], {
        componentName: "Modal",
        defaultLocale: (0, locale.getConfirmLocale)()
      }, _this.renderFooter);
      var closeIcon = React.createElement("span", {
        className: "".concat(prefixCls, "-close-x")
      }, React.createElement(_icon["default"], {
        className: "".concat(prefixCls, "-close-icon"),
        type: 'close'
      }));
      return React.createElement(_rcDialog["default"], _extends({}, restProps, {
        prefixCls: prefixCls,
        wrapClassName: (0, _classnames["default"])(_defineProperty({}, "".concat(prefixCls, "-centered"), !!centered), wrapClassName),
        footer: footer === undefined ? defaultFooter : footer,
        visible: visible,
        mousePosition: mousePosition,
        onClose: _this.handleCancel,
        closeIcon: closeIcon
      }));
    };

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderModal);
    }
  }]);

  return Modal;
}(React.Component);

exports["default"] = Modal;
Modal.defaultProps = {
  width: 520,
  transitionName: 'zoom',
  maskTransitionName: 'fade',
  confirmLoading: false,
  visible: false,
  okType: 'primary'
};
Modal.propTypes = {
  prefixCls: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  okText: PropTypes.node,
  cancelText: PropTypes.node,
  centered: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  confirmLoading: PropTypes.bool,
  visible: PropTypes.bool,
  footer: PropTypes.node,
  title: PropTypes.node,
  closable: PropTypes.bool
};
});

unwrapExports(Modal_1);
var Modal_2 = Modal_1.destroyFns;

var ActionButton_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(React__default);

var ReactDOM = _interopRequireWildcard(require$$1);

var _button = _interopRequireDefault(require$$2$1);

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

var ActionButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActionButton, _React$Component);

  function ActionButton(props) {
    var _this;

    _classCallCheck(this, ActionButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActionButton).call(this, props));

    _this.onClick = function () {
      var _this$props = _this.props,
          actionFn = _this$props.actionFn,
          closeModal = _this$props.closeModal;

      if (actionFn) {
        var ret;

        if (actionFn.length) {
          ret = actionFn(closeModal);
        } else {
          ret = actionFn();

          if (!ret) {
            closeModal();
          }
        }

        if (ret && ret.then) {
          _this.setState({
            loading: true
          });

          ret.then(function () {
            // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
            // this.setState({ loading: false });
            closeModal.apply(void 0, arguments);
          }, function (e) {
            // Emit error when catch promise reject
            console.error(e); // See: https://github.com/ant-design/ant-design/issues/6183

            _this.setState({
              loading: false
            });
          });
        }
      } else {
        closeModal();
      }
    };

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(ActionButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        var $this = ReactDOM.findDOMNode(this);
        this.timeoutId = setTimeout(function () {
          return $this.focus();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          children = _this$props2.children,
          buttonProps = _this$props2.buttonProps;
      var loading = this.state.loading;
      return React.createElement(_button["default"], _extends({
        type: type,
        onClick: this.onClick,
        loading: loading
      }, buttonProps), children);
    }
  }]);

  return ActionButton;
}(React.Component);

exports["default"] = ActionButton;
});

unwrapExports(ActionButton_1);

var confirm_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = confirm;

var React = _interopRequireWildcard(React__default);

var ReactDOM = _interopRequireWildcard(require$$1);

var _classnames = _interopRequireDefault(require$$2);

var _icon = _interopRequireDefault(require$$4);

var _Modal = _interopRequireWildcard(Modal_1);

var _ActionButton = _interopRequireDefault(ActionButton_1);



var _warning = _interopRequireDefault(require$$6);

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IS_REACT_16 = !!ReactDOM.createPortal;

var ConfirmDialog = function ConfirmDialog(props) {
  var onCancel = props.onCancel,
      onOk = props.onOk,
      close = props.close,
      zIndex = props.zIndex,
      afterClose = props.afterClose,
      visible = props.visible,
      keyboard = props.keyboard,
      centered = props.centered,
      getContainer = props.getContainer,
      maskStyle = props.maskStyle,
      okButtonProps = props.okButtonProps,
      cancelButtonProps = props.cancelButtonProps,
      _props$iconType = props.iconType,
      iconType = _props$iconType === void 0 ? 'question-circle' : _props$iconType;
  (0, _warning["default"])(!('iconType' in props), 'Modal', "The property 'iconType' is deprecated. Use the property 'icon' instead."); // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon

  var icon = props.icon === undefined ? iconType : props.icon;
  var okType = props.okType || 'primary';
  var prefixCls = props.prefixCls || 'ant-modal';
  var contentPrefixCls = "".concat(prefixCls, "-confirm"); // 默认为 true，保持向下兼容

  var okCancel = 'okCancel' in props ? props.okCancel : true;
  var width = props.width || 416;
  var style = props.style || {};
  var mask = props.mask === undefined ? true : props.mask; // 默认为 false，保持旧版默认行为

  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var runtimeLocale = (0, locale.getConfirmLocale)();
  var okText = props.okText || (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
  var cancelText = props.cancelText || runtimeLocale.cancelText;
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  var transitionName = props.transitionName || 'zoom';
  var maskTransitionName = props.maskTransitionName || 'fade';
  var classString = (0, _classnames["default"])(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(props.type), props.className);
  var cancelButton = okCancel && React.createElement(_ActionButton["default"], {
    actionFn: onCancel,
    closeModal: close,
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps
  }, cancelText);
  var iconNode = typeof icon === 'string' ? React.createElement(_icon["default"], {
    type: icon
  }) : icon;
  return React.createElement(_Modal["default"], {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: (0, _classnames["default"])(_defineProperty({}, "".concat(contentPrefixCls, "-centered"), !!props.centered)),
    onCancel: close.bind(_this, {
      triggerCancel: true
    }),
    visible: visible,
    title: "",
    transitionName: transitionName,
    footer: "",
    maskTransitionName: maskTransitionName,
    mask: mask,
    maskClosable: maskClosable,
    maskStyle: maskStyle,
    style: style,
    width: width,
    zIndex: zIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer
  }, React.createElement("div", {
    className: "".concat(contentPrefixCls, "-body-wrapper")
  }, React.createElement("div", {
    className: "".concat(contentPrefixCls, "-body")
  }, iconNode, React.createElement("span", {
    className: "".concat(contentPrefixCls, "-title")
  }, props.title), React.createElement("div", {
    className: "".concat(contentPrefixCls, "-content")
  }, props.content)), React.createElement("div", {
    className: "".concat(contentPrefixCls, "-btns")
  }, cancelButton, React.createElement(_ActionButton["default"], {
    type: okType,
    actionFn: onOk,
    closeModal: close,
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps
  }, okText))));
};

function confirm(config) {
  var div = document.createElement('div');
  document.body.appendChild(div);

  var currentConfig = _extends({}, config, {
    close: close,
    visible: true
  });

  function close() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    currentConfig = _extends({}, currentConfig, {
      visible: false,
      afterClose: destroy.bind.apply(destroy, [this].concat(args))
    });

    if (IS_REACT_16) {
      render(currentConfig);
    } else {
      destroy.apply(void 0, args);
    }
  }

  function update(newConfig) {
    currentConfig = _extends({}, currentConfig, newConfig);
    render(currentConfig);
  }

  function destroy() {
    var unmountResult = ReactDOM.unmountComponentAtNode(div);

    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }

    for (var i = 0; i < _Modal.destroyFns.length; i++) {
      var fn = _Modal.destroyFns[i];

      if (fn === close) {
        _Modal.destroyFns.splice(i, 1);

        break;
      }
    }
  }

  function render(props) {
    ReactDOM.render(React.createElement(ConfirmDialog, props), div);
  }

  render(currentConfig);

  _Modal.destroyFns.push(close);

  return {
    destroy: close,
    update: update
  };
}
});

unwrapExports(confirm_1);

var modal = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(React__default);

var _Modal = _interopRequireWildcard(Modal_1);

var _confirm = _interopRequireDefault(confirm_1);

var _icon = _interopRequireDefault(require$$4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_Modal["default"].info = function (props) {
  var config = _extends({
    type: 'info',
    icon: React.createElement(_icon["default"], {
      type: "info-circle"
    }),
    okCancel: false
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].success = function (props) {
  var config = _extends({
    type: 'success',
    icon: React.createElement(_icon["default"], {
      type: "check-circle"
    }),
    okCancel: false
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].error = function (props) {
  var config = _extends({
    type: 'error',
    icon: React.createElement(_icon["default"], {
      type: "close-circle"
    }),
    okCancel: false
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].warning = _Modal["default"].warn = function (props) {
  var config = _extends({
    type: 'warning',
    icon: React.createElement(_icon["default"], {
      type: "exclamation-circle"
    }),
    okCancel: false
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].confirm = function (props) {
  var config = _extends({
    type: 'confirm',
    okCancel: true
  }, props);

  return (0, _confirm["default"])(config);
};

_Modal["default"].destroyAll = function () {
  while (_Modal.destroyFns.length) {
    var close = _Modal.destroyFns.pop();

    if (close) {
      close();
    }
  }
};

var _default = _Modal["default"];
exports["default"] = _default;
});

var _Modal = unwrapExports(modal);

var ConfirmModal = withTheme(function (props) {
  return React__default.createElement(_Modal, props);
});
ConfirmModal.propTypes = {
  afterClose: PropTypes__default.func,
  bodyStyle: PropTypes__default.object,
  cancelText: StringOrNodePT,
  centered: PropTypes__default.bool,
  closable: PropTypes__default.bool,
  confirmLoading: PropTypes__default.bool,
  destroyOnClose: PropTypes__default.bool,
  footer: StringOrNodePT,
  forceRender: PropTypes__default.bool,
  getContainer: PropTypes__default.element,
  mask: PropTypes__default.bool,
  maskClosable: PropTypes__default.bool,
  maskStyle: PropTypes__default.object,
  okText: StringOrNodePT,
  okType: PropTypes__default.string,
  okButtonProps: ButtonPropsPT,
  cancelButtonProps: ButtonPropsPT,
  style: PropTypes__default.object,
  title: StringOrNodePT,
  visible: PropTypes__default.bool,
  width: StringOrNumberPT,
  wrapClassName: PropTypes__default.string,
  zIndex: PropTypes__default.number,
  onCancel: PropTypes__default.func,
  onOk: PropTypes__default.func
};
ConfirmModal.defaultProps = {
  cancelText: 'Cancel',
  centered: true,
  closable: true,
  destroyOnClose: true,
  mask: true,
  maskClosable: true,
  okText: 'Ok'
};
ConfirmModal.displayName = 'ConfirmModal';

export default ConfirmModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9yYy1kaWFsb2cvZXMvTGF6eVJlbmRlckJveC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL2dldFNjcm9sbEJhclNpemUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmMtZGlhbG9nL2VzL0RpYWxvZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yYy1kaWFsb2cvZXMvRGlhbG9nV3JhcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yYy11dGlsL2xpYi9Eb20vYWRkRXZlbnRMaXN0ZW5lci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tb2RhbC9sb2NhbGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbW9kYWwvTW9kYWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbW9kYWwvQWN0aW9uQnV0dG9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21vZGFsL2NvbmZpcm0uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbW9kYWwvaW5kZXguanMiLCIuLi8uLi9zcmMvQ29uZmlybU1vZGFsL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBMYXp5UmVuZGVyQm94ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTGF6eVJlbmRlckJveCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBMYXp5UmVuZGVyQm94KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGF6eVJlbmRlckJveCk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgTGF6eVJlbmRlckJveC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gISFuZXh0UHJvcHMuaGlkZGVuQ2xhc3NOYW1lIHx8ICEhbmV4dFByb3BzLnZpc2libGU7XG4gICAgfTtcblxuICAgIExhenlSZW5kZXJCb3gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICBpZiAoISF0aGlzLnByb3BzLmhpZGRlbkNsYXNzTmFtZSAmJiAhdGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLnByb3BzLmhpZGRlbkNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5oaWRkZW5DbGFzc05hbWU7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy52aXNpYmxlO1xuICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBwcm9wcykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGF6eVJlbmRlckJveDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgTGF6eVJlbmRlckJveDsiLCJ2YXIgY2FjaGVkID0gdm9pZCAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxCYXJTaXplKGZyZXNoKSB7XG4gIGlmIChmcmVzaCB8fCBjYWNoZWQgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlubmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGlubmVyLnN0eWxlLmhlaWdodCA9ICcyMDBweCc7XG5cbiAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgb3V0ZXJTdHlsZSA9IG91dGVyLnN0eWxlO1xuXG4gICAgb3V0ZXJTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgb3V0ZXJTdHlsZS50b3AgPSAwO1xuICAgIG91dGVyU3R5bGUubGVmdCA9IDA7XG4gICAgb3V0ZXJTdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIG91dGVyU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIG91dGVyU3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICAgIG91dGVyU3R5bGUuaGVpZ2h0ID0gJzE1MHB4JztcbiAgICBvdXRlclN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcblxuICAgIHZhciB3aWR0aENvbnRhaW5lZCA9IGlubmVyLm9mZnNldFdpZHRoO1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdmFyIHdpZHRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAod2lkdGhDb250YWluZWQgPT09IHdpZHRoU2Nyb2xsKSB7XG4gICAgICB3aWR0aFNjcm9sbCA9IG91dGVyLmNsaWVudFdpZHRoO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgY2FjaGVkID0gd2lkdGhDb250YWluZWQgLSB3aWR0aFNjcm9sbDtcbiAgfVxuICByZXR1cm4gY2FjaGVkO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBLZXlDb2RlIGZyb20gJ3JjLXV0aWwvZXMvS2V5Q29kZSc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSAncmMtdXRpbC9lcy9Eb20vY29udGFpbnMnO1xuaW1wb3J0IEFuaW1hdGUgZnJvbSAncmMtYW5pbWF0ZSc7XG5pbXBvcnQgTGF6eVJlbmRlckJveCBmcm9tICcuL0xhenlSZW5kZXJCb3gnO1xuaW1wb3J0IGdldFNjcm9sbEJhclNpemUgZnJvbSAncmMtdXRpbC9lcy9nZXRTY3JvbGxCYXJTaXplJztcbnZhciB1dWlkID0gMDtcbnZhciBvcGVuQ291bnQgPSAwO1xuLyogZXNsaW50IHJlYWN0L25vLWlzLW1vdW50ZWQ6MCAqL1xuZnVuY3Rpb24gZ2V0U2Nyb2xsKHcsIHRvcCkge1xuICAgIHZhciByZXQgPSB3WydwYWdlJyArICh0b3AgPyAnWScgOiAnWCcpICsgJ09mZnNldCddO1xuICAgIHZhciBtZXRob2QgPSAnc2Nyb2xsJyArICh0b3AgPyAnVG9wJyA6ICdMZWZ0Jyk7XG4gICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhciBkID0gdy5kb2N1bWVudDtcbiAgICAgICAgcmV0ID0gZC5kb2N1bWVudEVsZW1lbnRbbWV0aG9kXTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXQgPSBkLmJvZHlbbWV0aG9kXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtT3JpZ2luKG5vZGUsIHZhbHVlKSB7XG4gICAgdmFyIHN0eWxlID0gbm9kZS5zdHlsZTtcbiAgICBbJ1dlYmtpdCcsICdNb3onLCAnTXMnLCAnbXMnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgICAgc3R5bGVbcHJlZml4ICsgJ1RyYW5zZm9ybU9yaWdpbiddID0gdmFsdWU7XG4gICAgfSk7XG4gICAgc3R5bGVbJ3RyYW5zZm9ybU9yaWdpbiddID0gdmFsdWU7XG59XG5mdW5jdGlvbiBvZmZzZXQoZWwpIHtcbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBwb3MgPSB7XG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgdG9wOiByZWN0LnRvcFxuICAgIH07XG4gICAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gICAgdmFyIHcgPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgICBwb3MubGVmdCArPSBnZXRTY3JvbGwodyk7XG4gICAgcG9zLnRvcCArPSBnZXRTY3JvbGwodywgdHJ1ZSk7XG4gICAgcmV0dXJuIHBvcztcbn1cblxudmFyIERpYWxvZyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERpYWxvZywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBEaWFsb2coKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEaWFsb2cpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMub25BbmltYXRlTGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWZ0ZXJDbG9zZSA9IF90aGlzLnByb3BzLmFmdGVyQ2xvc2U7XG4gICAgICAgICAgICAvLyBuZWVkIGRlbW8/XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L2RpYWxvZy9wdWxsLzI4XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy53cmFwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMud3JhcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuaW5UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5yZW1vdmVTY3JvbGxpbmdFZmZlY3QoKTtcbiAgICAgICAgICAgIGlmIChhZnRlckNsb3NlKSB7XG4gICAgICAgICAgICAgICAgYWZ0ZXJDbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbkRpYWxvZ01vdXNlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmRpYWxvZ01vdXNlRG93biA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uTWFza01vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuZGlhbG9nTW91c2VEb3duKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRpYWxvZ01vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbk1hc2tDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBhbmRyb2lkIHRyaWdnZXIgY2xpY2sgb24gb3BlbiAoZmFzdGNsaWNrPz8pXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIF90aGlzLm9wZW5UaW1lIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQgJiYgIV90aGlzLmRpYWxvZ01vdXNlRG93bikge1xuICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICBpZiAocHJvcHMua2V5Ym9hcmQgJiYgZS5rZXlDb2RlID09PSBLZXlDb2RlLkVTQykge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8ga2VlcCBmb2N1cyBpbnNpZGUgZGlhbG9nXG4gICAgICAgICAgICBpZiAocHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuVEFCKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbnRpbmVsU3RhcnQgPSBfdGhpcy5zZW50aW5lbFN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IHNlbnRpbmVsU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZW50aW5lbEVuZC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLnNlbnRpbmVsRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW50aW5lbFN0YXJ0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldERpYWxvZ0VsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBjbG9zYWJsZSA9IHByb3BzLmNsb3NhYmxlO1xuICAgICAgICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscztcbiAgICAgICAgICAgIHZhciBkZXN0ID0ge307XG4gICAgICAgICAgICBpZiAocHJvcHMud2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRlc3Qud2lkdGggPSBwcm9wcy53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRlc3QuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZvb3RlciA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChwcm9wcy5mb290ZXIpIHtcbiAgICAgICAgICAgICAgICBmb290ZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWZvb3RlcicsIHJlZjogX3RoaXMuc2F2ZVJlZignZm9vdGVyJykgfSwgcHJvcHMuZm9vdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAocHJvcHMudGl0bGUpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWhlYWRlcicsIHJlZjogX3RoaXMuc2F2ZVJlZignaGVhZGVyJykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy10aXRsZScsIGlkOiBfdGhpcy50aXRsZUlkIH0sIHByb3BzLnRpdGxlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2xvc2VyID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGNsb3NhYmxlKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VyID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IF90aGlzLmNsb3NlLCBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiLCBjbGFzc05hbWU6IHByZWZpeENscyArICctY2xvc2UnIH0sIHByb3BzLmNsb3NlSWNvbiB8fCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1jbG9zZS14JyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgcHJvcHMuc3R5bGUsIGRlc3QpO1xuICAgICAgICAgICAgdmFyIHNlbnRpbmVsU3R5bGUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAsIG92ZXJmbG93OiAnaGlkZGVuJyB9O1xuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gX3RoaXMuZ2V0VHJhbnNpdGlvbk5hbWUoKTtcbiAgICAgICAgICAgIHZhciBkaWFsb2dFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChMYXp5UmVuZGVyQm94LCB7IGtleTogXCJkaWFsb2ctZWxlbWVudFwiLCByb2xlOiBcImRvY3VtZW50XCIsIHJlZjogX3RoaXMuc2F2ZVJlZignZGlhbG9nJyksIHN0eWxlOiBzdHlsZSwgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnICcgKyAocHJvcHMuY2xhc3NOYW1lIHx8ICcnKSwgdmlzaWJsZTogcHJvcHMudmlzaWJsZSwgb25Nb3VzZURvd246IF90aGlzLm9uRGlhbG9nTW91c2VEb3duIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyB0YWJJbmRleDogMCwgcmVmOiBfdGhpcy5zYXZlUmVmKCdzZW50aW5lbFN0YXJ0JyksIHN0eWxlOiBzZW50aW5lbFN0eWxlLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNvbnRlbnQnIH0sIGNsb3NlciwgaGVhZGVyLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWJvZHknLCBzdHlsZTogcHJvcHMuYm9keVN0eWxlLCByZWY6IF90aGlzLnNhdmVSZWYoJ2JvZHknKSB9LCBwcm9wcy5ib2R5UHJvcHMpLCBwcm9wcy5jaGlsZHJlbiksIGZvb3RlciksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyB0YWJJbmRleDogMCwgcmVmOiBfdGhpcy5zYXZlUmVmKCdzZW50aW5lbEVuZCcpLCBzdHlsZTogc2VudGluZWxTdHlsZSwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBbmltYXRlLCB7IGtleTogXCJkaWFsb2dcIiwgc2hvd1Byb3A6IFwidmlzaWJsZVwiLCBvbkxlYXZlOiBfdGhpcy5vbkFuaW1hdGVMZWF2ZSwgdHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLCBjb21wb25lbnQ6IFwiXCIsIHRyYW5zaXRpb25BcHBlYXI6IHRydWUgfSwgcHJvcHMudmlzaWJsZSB8fCAhcHJvcHMuZGVzdHJveU9uQ2xvc2UgPyBkaWFsb2dFbGVtZW50IDogbnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldFpJbmRleFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGlmIChwcm9wcy56SW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0eWxlLnpJbmRleCA9IHByb3BzLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0V3JhcFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfdGhpcy5nZXRaSW5kZXhTdHlsZSgpLCBfdGhpcy5wcm9wcy53cmFwU3R5bGUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRNYXNrU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF90aGlzLmdldFpJbmRleFN0eWxlKCksIF90aGlzLnByb3BzLm1hc2tTdHlsZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldE1hc2tFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgbWFza0VsZW1lbnQgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAocHJvcHMubWFzaykge1xuICAgICAgICAgICAgICAgIHZhciBtYXNrVHJhbnNpdGlvbiA9IF90aGlzLmdldE1hc2tUcmFuc2l0aW9uTmFtZSgpO1xuICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChMYXp5UmVuZGVyQm94LCBfZXh0ZW5kcyh7IHN0eWxlOiBfdGhpcy5nZXRNYXNrU3R5bGUoKSwga2V5OiBcIm1hc2tcIiwgY2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLW1hc2snLCBoaWRkZW5DbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctbWFzay1oaWRkZW4nLCB2aXNpYmxlOiBwcm9wcy52aXNpYmxlIH0sIHByb3BzLm1hc2tQcm9wcykpO1xuICAgICAgICAgICAgICAgIGlmIChtYXNrVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtYXNrRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW5pbWF0ZSwgeyBrZXk6IFwibWFza1wiLCBzaG93UHJvcDogXCJ2aXNpYmxlXCIsIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsIGNvbXBvbmVudDogXCJcIiwgdHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uIH0sIG1hc2tFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWFza0VsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldE1hc2tUcmFuc2l0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMubWFza1RyYW5zaXRpb25OYW1lO1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHByb3BzLm1hc2tBbmltYXRpb247XG4gICAgICAgICAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIGFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMucHJlZml4Q2xzICsgJy0nICsgYW5pbWF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gcHJvcHMuYW5pbWF0aW9uO1xuICAgICAgICAgICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBhbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnByZWZpeENscyArICctJyArIGFuaW1hdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmJvZHlJc092ZXJmbG93aW5nICYmIF90aGlzLnNjcm9sbGJhcldpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IF90aGlzLnNjcm9sbGJhcldpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWRkU2Nyb2xsaW5nRWZmZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb3BlbkNvdW50Kys7XG4gICAgICAgICAgICBpZiAob3BlbkNvdW50ICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuY2hlY2tTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIF90aGlzLnNldFNjcm9sbGJhcigpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgLy8gdGhpcy5hZGp1c3REaWFsb2coKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVtb3ZlU2Nyb2xsaW5nRWZmZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb3BlbkNvdW50LS07XG4gICAgICAgICAgICBpZiAob3BlbkNvdW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICAgICAgX3RoaXMucmVzZXRTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIC8vIHRoaXMucmVzZXRBZGp1c3RtZW50cygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgb25DbG9zZSA9IF90aGlzLnByb3BzLm9uQ2xvc2U7XG5cbiAgICAgICAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgICAgICAgICAgb25DbG9zZShlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuY2hlY2tTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZnVsbFdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICBpZiAoIWZ1bGxXaW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgICAgIC8vIHdvcmthcm91bmQgZm9yIG1pc3Npbmcgd2luZG93LmlubmVyV2lkdGggaW4gSUU4XG4gICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudFJlY3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgZnVsbFdpbmRvd1dpZHRoID0gZG9jdW1lbnRFbGVtZW50UmVjdC5yaWdodCAtIE1hdGguYWJzKGRvY3VtZW50RWxlbWVudFJlY3QubGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5ib2R5SXNPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBmdWxsV2luZG93V2lkdGg7XG4gICAgICAgICAgICBpZiAoX3RoaXMuYm9keUlzT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zY3JvbGxiYXJXaWR0aCA9IGdldFNjcm9sbEJhclNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVzZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hZGp1c3REaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMud3JhcCAmJiBfdGhpcy5zY3JvbGxiYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGFsSXNPdmVyZmxvd2luZyA9IF90aGlzLndyYXAuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICBfdGhpcy53cmFwLnN0eWxlLnBhZGRpbmdMZWZ0ID0gKCFfdGhpcy5ib2R5SXNPdmVyZmxvd2luZyAmJiBtb2RhbElzT3ZlcmZsb3dpbmcgPyBfdGhpcy5zY3JvbGxiYXJXaWR0aCA6ICcnKSArICdweCc7XG4gICAgICAgICAgICAgICAgX3RoaXMud3JhcC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAoX3RoaXMuYm9keUlzT3ZlcmZsb3dpbmcgJiYgIW1vZGFsSXNPdmVyZmxvd2luZyA/IF90aGlzLnNjcm9sbGJhcldpZHRoIDogJycpICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVzZXRBZGp1c3RtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy53cmFwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMud3JhcC5zdHlsZS5wYWRkaW5nTGVmdCA9IF90aGlzLndyYXAuc3R5bGUucGFkZGluZ0xlZnQgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2F2ZVJlZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpc1tuYW1lXSA9IG5vZGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgRGlhbG9nLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaW5UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGl0bGVJZCA9ICdyY0RpYWxvZ1RpdGxlJyArIHV1aWQrKztcbiAgICB9O1xuXG4gICAgRGlhbG9nLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSh7fSk7XG4gICAgICAgIC8vIGlmIGZvcmNlUmVuZGVyIGlzIHRydWUsIHNldCBlbGVtZW50IHN0eWxlIGRpc3BsYXkgdG8gYmUgbm9uZTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZm9yY2VSZW5kZXIgJiYgdGhpcy53cmFwKSB7XG4gICAgICAgICAgICB0aGlzLndyYXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBEaWFsb2cucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIG1vdXNlUG9zaXRpb24gPSB0aGlzLnByb3BzLm1vdXNlUG9zaXRpb247XG4gICAgICAgIGlmIChwcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBzaG93XG4gICAgICAgICAgICBpZiAoIXByZXZQcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTY3JvbGxpbmdFZmZlY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyeUZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ05vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLmRpYWxvZyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsT2Zmc2V0ID0gb2Zmc2V0KGRpYWxvZ05vZGUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW4oZGlhbG9nTm9kZSwgbW91c2VQb3NpdGlvbi54IC0gZWxPZmZzZXQubGVmdCArICdweCAnICsgKG1vdXNlUG9zaXRpb24ueSAtIGVsT2Zmc2V0LnRvcCkgKyAncHgnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW4oZGlhbG9nTm9kZSwgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwcmV2UHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5pblRyYW5zaXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb3BzLm1hc2sgJiYgdGhpcy5sYXN0T3V0U2lkZUZvY3VzTm9kZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RPdXRTaWRlRm9jdXNOb2RlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBEaWFsb2cucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgfHwgdGhpcy5pblRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsaW5nRWZmZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICB9O1xuXG4gICAgRGlhbG9nLnByb3RvdHlwZS50cnlGb2N1cyA9IGZ1bmN0aW9uIHRyeUZvY3VzKCkge1xuICAgICAgICBpZiAoIWNvbnRhaW5zKHRoaXMud3JhcCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5zZW50aW5lbFN0YXJ0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRGlhbG9nLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICBtYXNrQ2xvc2FibGUgPSBwcm9wcy5tYXNrQ2xvc2FibGU7XG5cbiAgICAgICAgdmFyIHN0eWxlID0gdGhpcy5nZXRXcmFwU3R5bGUoKTtcbiAgICAgICAgLy8gY2xlYXIgaGlkZSBkaXNwbGF5XG4gICAgICAgIC8vIGFuZCBvbmx5IHNldCBkaXNwbGF5IGFmdGVyIGFzeW5jIGFuaW0sIG5vdCBoZXJlIGZvciBoaWRlXG4gICAgICAgIGlmIChwcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB0aGlzLmdldE1hc2tFbGVtZW50KCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoeyB0YWJJbmRleDogLTEsIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy13cmFwICcgKyAocHJvcHMud3JhcENsYXNzTmFtZSB8fCAnJyksIHJlZjogdGhpcy5zYXZlUmVmKCd3cmFwJyksIG9uQ2xpY2s6IG1hc2tDbG9zYWJsZSA/IHRoaXMub25NYXNrQ2xpY2sgOiBudWxsLCBvbk1vdXNlVXA6IG1hc2tDbG9zYWJsZSA/IHRoaXMub25NYXNrTW91c2VVcCA6IG51bGwsIHJvbGU6IFwiZGlhbG9nXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHByb3BzLnRpdGxlID8gdGhpcy50aXRsZUlkIDogbnVsbCwgc3R5bGU6IHN0eWxlIH0sIHByb3BzLndyYXBQcm9wcyksIHRoaXMuZ2V0RGlhbG9nRWxlbWVudCgpKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBEaWFsb2c7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcblxuRGlhbG9nLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG1hc2s6IHRydWUsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgY2xvc2FibGU6IHRydWUsXG4gICAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICAgIGRlc3Ryb3lPbkNsb3NlOiBmYWxzZSxcbiAgICBwcmVmaXhDbHM6ICdyYy1kaWFsb2cnXG59OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cnO1xuaW1wb3J0IENvbnRhaW5lclJlbmRlciBmcm9tICdyYy11dGlsL2VzL0NvbnRhaW5lclJlbmRlcic7XG5pbXBvcnQgUG9ydGFsIGZyb20gJ3JjLXV0aWwvZXMvUG9ydGFsJztcbnZhciBJU19SRUFDVF8xNiA9ICdjcmVhdGVQb3J0YWwnIGluIFJlYWN0RE9NO1xuXG52YXIgRGlhbG9nV3JhcCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERpYWxvZ1dyYXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRGlhbG9nV3JhcCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpYWxvZ1dyYXApO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMuc2F2ZURpYWxvZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBfdGhpcy5fY29tcG9uZW50ID0gbm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGV4dHJhID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlhbG9nLCBfZXh0ZW5kcyh7IHJlZjogX3RoaXMuc2F2ZURpYWxvZyB9LCBfdGhpcy5wcm9wcywgZXh0cmEsIHsga2V5OiBcImRpYWxvZ1wiIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZml4IGlzc3VlICMxMDY1NlxuICAgICAgICAvKlxuICAgICAgICAqIEN1c3RvbSBjb250YWluZXIgc2hvdWxkIG5vdCBiZSByZXR1cm4sIGJlY2F1c2UgaW4gdGhlIFBvcnRhbCBjb21wb25lbnQsIGl0IHdpbGwgcmVtb3ZlIHRoZVxuICAgICAgICAqIHJldHVybiBjb250YWluZXIgZWxlbWVudCBoZXJlLCBpZiB0aGUgY3VzdG9tIGNvbnRhaW5lciBpcyB0aGUgb25seSBjaGlsZCBvZiBpdCdzIGNvbXBvbmVudCxcbiAgICAgICAgKiBsaWtlIGlzc3VlICMxMDY1NiwgSXQgd2lsbCBoYXMgYSBjb25mbGljdCB3aXRoIHJlbW92ZUNoaWxkIG1ldGhvZCBpbiByZWFjdC1kb20uXG4gICAgICAgICogU28gaGVyZSBzaG91bGQgYWRkIGEgY2hpbGQgKGRpdiBlbGVtZW50KSB0byBjdXN0b20gY29udGFpbmVyLlxuICAgICAgICAqICovXG4gICAgICAgIF90aGlzLmdldENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5nZXRDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9wcy5nZXRDb250YWluZXIoKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgRGlhbG9nV3JhcC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKF9yZWYpIHtcbiAgICAgICAgdmFyIHZpc2libGUgPSBfcmVmLnZpc2libGUsXG4gICAgICAgICAgICBmb3JjZVJlbmRlciA9IF9yZWYuZm9yY2VSZW5kZXI7XG5cbiAgICAgICAgcmV0dXJuICEhKHRoaXMucHJvcHMudmlzaWJsZSB8fCB2aXNpYmxlKSB8fCB0aGlzLnByb3BzLmZvcmNlUmVuZGVyIHx8IGZvcmNlUmVuZGVyO1xuICAgIH07XG5cbiAgICBEaWFsb2dXcmFwLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAoSVNfUkVBQ1RfMTYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgYWZ0ZXJDbG9zZTogdGhpcy5yZW1vdmVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDb250YWluZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBEaWFsb2dXcmFwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgdmlzaWJsZSA9IF9wcm9wcy52aXNpYmxlLFxuICAgICAgICAgICAgZm9yY2VSZW5kZXIgPSBfcHJvcHMuZm9yY2VSZW5kZXI7XG5cbiAgICAgICAgdmFyIHBvcnRhbCA9IG51bGw7XG4gICAgICAgIGlmICghSVNfUkVBQ1RfMTYpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lclJlbmRlciwgeyBwYXJlbnQ6IHRoaXMsIHZpc2libGU6IHZpc2libGUsIGF1dG9EZXN0cm95OiBmYWxzZSwgZ2V0Q29tcG9uZW50OiB0aGlzLmdldENvbXBvbmVudCwgZ2V0Q29udGFpbmVyOiB0aGlzLmdldENvbnRhaW5lciwgZm9yY2VSZW5kZXI6IGZvcmNlUmVuZGVyIH0sIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgICAgIHZhciByZW5kZXJDb21wb25lbnQgPSBfcmVmMi5yZW5kZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNvbnRhaW5lciA9IF9yZWYyLnJlbW92ZUNvbnRhaW5lcjtcblxuICAgICAgICAgICAgICAgIF90aGlzMi5yZW5kZXJDb21wb25lbnQgPSByZW5kZXJDb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnJlbW92ZUNvbnRhaW5lciA9IHJlbW92ZUNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aXNpYmxlIHx8IGZvcmNlUmVuZGVyIHx8IHRoaXMuX2NvbXBvbmVudCkge1xuICAgICAgICAgICAgcG9ydGFsID0gUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWwsIHsgZ2V0Q29udGFpbmVyOiB0aGlzLmdldENvbnRhaW5lciB9LCB0aGlzLmdldENvbXBvbmVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9ydGFsO1xuICAgIH07XG5cbiAgICByZXR1cm4gRGlhbG9nV3JhcDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuRGlhbG9nV3JhcC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAgZm9yY2VSZW5kZXI6IGZhbHNlXG59O1xuZXhwb3J0IGRlZmF1bHQgRGlhbG9nV3JhcDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBhZGRFdmVudExpc3RlbmVyV3JhcDtcblxudmFyIF9hZGREb21FdmVudExpc3RlbmVyID0gcmVxdWlyZSgnYWRkLWRvbS1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX2FkZERvbUV2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkRG9tRXZlbnRMaXN0ZW5lcik7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcldyYXAodGFyZ2V0LCBldmVudFR5cGUsIGNiLCBvcHRpb24pIHtcbiAgLyogZXNsaW50IGNhbWVsY2FzZTogMiAqL1xuICB2YXIgY2FsbGJhY2sgPSBfcmVhY3REb20yWydkZWZhdWx0J10udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgPyBmdW5jdGlvbiBydW4oZSkge1xuICAgIF9yZWFjdERvbTJbJ2RlZmF1bHQnXS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyhjYiwgZSk7XG4gIH0gOiBjYjtcbiAgcmV0dXJuICgwLCBfYWRkRG9tRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXSkodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrLCBvcHRpb24pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNoYW5nZUNvbmZpcm1Mb2NhbGUgPSBjaGFuZ2VDb25maXJtTG9jYWxlO1xuZXhwb3J0cy5nZXRDb25maXJtTG9jYWxlID0gZ2V0Q29uZmlybUxvY2FsZTtcblxudmFyIF9kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIHJ1bnRpbWVMb2NhbGUgPSBfZXh0ZW5kcyh7fSwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdLk1vZGFsKTtcblxuZnVuY3Rpb24gY2hhbmdlQ29uZmlybUxvY2FsZShuZXdMb2NhbGUpIHtcbiAgaWYgKG5ld0xvY2FsZSkge1xuICAgIHJ1bnRpbWVMb2NhbGUgPSBfZXh0ZW5kcyh7fSwgcnVudGltZUxvY2FsZSwgbmV3TG9jYWxlKTtcbiAgfSBlbHNlIHtcbiAgICBydW50aW1lTG9jYWxlID0gX2V4dGVuZHMoe30sIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5Nb2RhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29uZmlybUxvY2FsZSgpIHtcbiAgcmV0dXJuIHJ1bnRpbWVMb2NhbGU7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuZGVzdHJveUZucyA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY0RpYWxvZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLWRpYWxvZ1wiKSk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2FkZEV2ZW50TGlzdGVuZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9Eb20vYWRkRXZlbnRMaXN0ZW5lclwiKSk7XG5cbnZhciBfbG9jYWxlID0gcmVxdWlyZShcIi4vbG9jYWxlXCIpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxudmFyIF9idXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9idXR0b25cIikpO1xuXG52YXIgX0xvY2FsZVJlY2VpdmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgbW91c2VQb3NpdGlvbjtcbnZhciBkZXN0cm95Rm5zID0gW107IC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTU3OTVcblxuZXhwb3J0cy5kZXN0cm95Rm5zID0gZGVzdHJveUZucztcblxudmFyIGdldENsaWNrUG9zaXRpb24gPSBmdW5jdGlvbiBnZXRDbGlja1Bvc2l0aW9uKGUpIHtcbiAgbW91c2VQb3NpdGlvbiA9IHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbiAgfTsgLy8gMTAwbXMg5YaF5Y+R55Sf6L+H54K55Ye75LqL5Lu277yM5YiZ5LuO54K55Ye75L2N572u5Yqo55S75bGV56S6XG4gIC8vIOWQpuWImeebtOaOpSB6b29tIOWxleekulxuICAvLyDov5nmoLflj6/ku6XlhbzlrrnpnZ7ngrnlh7vmlrnlvI/lsZXlvIBcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbW91c2VQb3NpdGlvbiA9IG51bGw7XG4gIH0sIDEwMCk7XG59OyAvLyDlj6rmnInngrnlh7vkuovku7bmlK/mjIHku47pvKDmoIfkvY3nva7liqjnlLvlsZXlvIBcblxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgKDAsIF9hZGRFdmVudExpc3RlbmVyW1wiZGVmYXVsdFwiXSkoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnY2xpY2snLCBnZXRDbGlja1Bvc2l0aW9uKTtcbn1cblxudmFyIE1vZGFsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNb2RhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWwoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1vZGFsKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgIF90aGlzLmhhbmRsZUNhbmNlbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25DYW5jZWwgPSBfdGhpcy5wcm9wcy5vbkNhbmNlbDtcblxuICAgICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICAgIG9uQ2FuY2VsKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVPayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25PayA9IF90aGlzLnByb3BzLm9uT2s7XG5cbiAgICAgIGlmIChvbk9rKSB7XG4gICAgICAgIG9uT2soZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckZvb3RlciA9IGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9rVGV4dCA9IF90aGlzJHByb3BzLm9rVGV4dCxcbiAgICAgICAgICBva1R5cGUgPSBfdGhpcyRwcm9wcy5va1R5cGUsXG4gICAgICAgICAgY2FuY2VsVGV4dCA9IF90aGlzJHByb3BzLmNhbmNlbFRleHQsXG4gICAgICAgICAgY29uZmlybUxvYWRpbmcgPSBfdGhpcyRwcm9wcy5jb25maXJtTG9hZGluZztcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2J1dHRvbltcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICAgICAgb25DbGljazogX3RoaXMuaGFuZGxlQ2FuY2VsXG4gICAgICB9LCBfdGhpcy5wcm9wcy5jYW5jZWxCdXR0b25Qcm9wcyksIGNhbmNlbFRleHQgfHwgbG9jYWxlLmNhbmNlbFRleHQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KF9idXR0b25bXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgICAgIHR5cGU6IG9rVHlwZSxcbiAgICAgICAgbG9hZGluZzogY29uZmlybUxvYWRpbmcsXG4gICAgICAgIG9uQ2xpY2s6IF90aGlzLmhhbmRsZU9rXG4gICAgICB9LCBfdGhpcy5wcm9wcy5va0J1dHRvblByb3BzKSwgb2tUZXh0IHx8IGxvY2FsZS5va1RleHQpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyTW9kYWwgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuXG4gICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgZm9vdGVyID0gX2EuZm9vdGVyLFxuICAgICAgICAgIHZpc2libGUgPSBfYS52aXNpYmxlLFxuICAgICAgICAgIHdyYXBDbGFzc05hbWUgPSBfYS53cmFwQ2xhc3NOYW1lLFxuICAgICAgICAgIGNlbnRlcmVkID0gX2EuY2VudGVyZWQsXG4gICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJmb290ZXJcIiwgXCJ2aXNpYmxlXCIsIFwid3JhcENsYXNzTmFtZVwiLCBcImNlbnRlcmVkXCJdKTtcblxuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnbW9kYWwnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIGRlZmF1bHRGb290ZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2NhbGVSZWNlaXZlcltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgY29tcG9uZW50TmFtZTogXCJNb2RhbFwiLFxuICAgICAgICBkZWZhdWx0TG9jYWxlOiAoMCwgX2xvY2FsZS5nZXRDb25maXJtTG9jYWxlKSgpXG4gICAgICB9LCBfdGhpcy5yZW5kZXJGb290ZXIpO1xuICAgICAgdmFyIGNsb3NlSWNvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNsb3NlLXhcIilcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jbG9zZS1pY29uXCIpLFxuICAgICAgICB0eXBlOiAnY2xvc2UnXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfcmNEaWFsb2dbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICB3cmFwQ2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2VudGVyZWRcIiksICEhY2VudGVyZWQpLCB3cmFwQ2xhc3NOYW1lKSxcbiAgICAgICAgZm9vdGVyOiBmb290ZXIgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRGb290ZXIgOiBmb290ZXIsXG4gICAgICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgICAgIG1vdXNlUG9zaXRpb246IG1vdXNlUG9zaXRpb24sXG4gICAgICAgIG9uQ2xvc2U6IF90aGlzLmhhbmRsZUNhbmNlbCxcbiAgICAgICAgY2xvc2VJY29uOiBjbG9zZUljb25cbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlck1vZGFsKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWw7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTW9kYWw7XG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHdpZHRoOiA1MjAsXG4gIHRyYW5zaXRpb25OYW1lOiAnem9vbScsXG4gIG1hc2tUcmFuc2l0aW9uTmFtZTogJ2ZhZGUnLFxuICBjb25maXJtTG9hZGluZzogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBva1R5cGU6ICdwcmltYXJ5J1xufTtcbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbk9rOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuICBva1RleHQ6IFByb3BUeXBlcy5ub2RlLFxuICBjYW5jZWxUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgY2VudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb25maXJtTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBmb290ZXI6IFByb3BUeXBlcy5ub2RlLFxuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUmVhY3RET00gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9idXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9idXR0b25cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgQWN0aW9uQnV0dG9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBY3Rpb25CdXR0b24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFjdGlvbkJ1dHRvbihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb25CdXR0b24pO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQWN0aW9uQnV0dG9uKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aW9uRm4gPSBfdGhpcyRwcm9wcy5hY3Rpb25GbixcbiAgICAgICAgICBjbG9zZU1vZGFsID0gX3RoaXMkcHJvcHMuY2xvc2VNb2RhbDtcblxuICAgICAgaWYgKGFjdGlvbkZuKSB7XG4gICAgICAgIHZhciByZXQ7XG5cbiAgICAgICAgaWYgKGFjdGlvbkZuLmxlbmd0aCkge1xuICAgICAgICAgIHJldCA9IGFjdGlvbkZuKGNsb3NlTW9kYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldCA9IGFjdGlvbkZuKCk7XG5cbiAgICAgICAgICBpZiAoIXJldCkge1xuICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXQgJiYgcmV0LnRoZW4pIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBJdCdzIHVubmVjZXNzYXJ5IHRvIHNldCBsb2FkaW5nPWZhbHNlLCBmb3IgdGhlIE1vZGFsIHdpbGwgYmUgdW5tb3VudGVkIGFmdGVyIGNsb3NlLlxuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgY2xvc2VNb2RhbC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIEVtaXQgZXJyb3Igd2hlbiBjYXRjaCBwcm9taXNlIHJlamVjdFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy82MTgzXG5cbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBY3Rpb25CdXR0b24sIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAkdGhpcy5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzMi50eXBlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIGJ1dHRvblByb3BzID0gX3RoaXMkcHJvcHMyLmJ1dHRvblByb3BzO1xuICAgICAgdmFyIGxvYWRpbmcgPSB0aGlzLnN0YXRlLmxvYWRpbmc7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfYnV0dG9uW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmdcbiAgICAgIH0sIGJ1dHRvblByb3BzKSwgY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBY3Rpb25CdXR0b247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQWN0aW9uQnV0dG9uOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjb25maXJtO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUmVhY3RET00gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfaWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2ljb25cIikpO1xuXG52YXIgX01vZGFsID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vTW9kYWxcIikpO1xuXG52YXIgX0FjdGlvbkJ1dHRvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQWN0aW9uQnV0dG9uXCIpKTtcblxudmFyIF9sb2NhbGUgPSByZXF1aXJlKFwiLi9sb2NhbGVcIik7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhcm5pbmdcIikpO1xuXG52YXIgX3RoaXMgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIElTX1JFQUNUXzE2ID0gISFSZWFjdERPTS5jcmVhdGVQb3J0YWw7XG5cbnZhciBDb25maXJtRGlhbG9nID0gZnVuY3Rpb24gQ29uZmlybURpYWxvZyhwcm9wcykge1xuICB2YXIgb25DYW5jZWwgPSBwcm9wcy5vbkNhbmNlbCxcbiAgICAgIG9uT2sgPSBwcm9wcy5vbk9rLFxuICAgICAgY2xvc2UgPSBwcm9wcy5jbG9zZSxcbiAgICAgIHpJbmRleCA9IHByb3BzLnpJbmRleCxcbiAgICAgIGFmdGVyQ2xvc2UgPSBwcm9wcy5hZnRlckNsb3NlLFxuICAgICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICBrZXlib2FyZCA9IHByb3BzLmtleWJvYXJkLFxuICAgICAgY2VudGVyZWQgPSBwcm9wcy5jZW50ZXJlZCxcbiAgICAgIGdldENvbnRhaW5lciA9IHByb3BzLmdldENvbnRhaW5lcixcbiAgICAgIG1hc2tTdHlsZSA9IHByb3BzLm1hc2tTdHlsZSxcbiAgICAgIG9rQnV0dG9uUHJvcHMgPSBwcm9wcy5va0J1dHRvblByb3BzLFxuICAgICAgY2FuY2VsQnV0dG9uUHJvcHMgPSBwcm9wcy5jYW5jZWxCdXR0b25Qcm9wcyxcbiAgICAgIF9wcm9wcyRpY29uVHlwZSA9IHByb3BzLmljb25UeXBlLFxuICAgICAgaWNvblR5cGUgPSBfcHJvcHMkaWNvblR5cGUgPT09IHZvaWQgMCA/ICdxdWVzdGlvbi1jaXJjbGUnIDogX3Byb3BzJGljb25UeXBlO1xuICAoMCwgX3dhcm5pbmdbXCJkZWZhdWx0XCJdKSghKCdpY29uVHlwZScgaW4gcHJvcHMpLCAnTW9kYWwnLCBcIlRoZSBwcm9wZXJ0eSAnaWNvblR5cGUnIGlzIGRlcHJlY2F0ZWQuIFVzZSB0aGUgcHJvcGVydHkgJ2ljb24nIGluc3RlYWQuXCIpOyAvLyDmlK/mjIHkvKDlhaV7IGljb246IG51bGwgfeadpemakOiXj2BNb2RhbC5jb25maXJtYOm7mOiupOeahEljb25cblxuICB2YXIgaWNvbiA9IHByb3BzLmljb24gPT09IHVuZGVmaW5lZCA/IGljb25UeXBlIDogcHJvcHMuaWNvbjtcbiAgdmFyIG9rVHlwZSA9IHByb3BzLm9rVHlwZSB8fCAncHJpbWFyeSc7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMgfHwgJ2FudC1tb2RhbCc7XG4gIHZhciBjb250ZW50UHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb25maXJtXCIpOyAvLyDpu5jorqTkuLogdHJ1Ze+8jOS/neaMgeWQkeS4i+WFvOWuuVxuXG4gIHZhciBva0NhbmNlbCA9ICdva0NhbmNlbCcgaW4gcHJvcHMgPyBwcm9wcy5va0NhbmNlbCA6IHRydWU7XG4gIHZhciB3aWR0aCA9IHByb3BzLndpZHRoIHx8IDQxNjtcbiAgdmFyIHN0eWxlID0gcHJvcHMuc3R5bGUgfHwge307XG4gIHZhciBtYXNrID0gcHJvcHMubWFzayA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHByb3BzLm1hc2s7IC8vIOm7mOiupOS4uiBmYWxzZe+8jOS/neaMgeaXp+eJiOm7mOiupOihjOS4ulxuXG4gIHZhciBtYXNrQ2xvc2FibGUgPSBwcm9wcy5tYXNrQ2xvc2FibGUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogcHJvcHMubWFza0Nsb3NhYmxlO1xuICB2YXIgcnVudGltZUxvY2FsZSA9ICgwLCBfbG9jYWxlLmdldENvbmZpcm1Mb2NhbGUpKCk7XG4gIHZhciBva1RleHQgPSBwcm9wcy5va1RleHQgfHwgKG9rQ2FuY2VsID8gcnVudGltZUxvY2FsZS5va1RleHQgOiBydW50aW1lTG9jYWxlLmp1c3RPa1RleHQpO1xuICB2YXIgY2FuY2VsVGV4dCA9IHByb3BzLmNhbmNlbFRleHQgfHwgcnVudGltZUxvY2FsZS5jYW5jZWxUZXh0O1xuICB2YXIgYXV0b0ZvY3VzQnV0dG9uID0gcHJvcHMuYXV0b0ZvY3VzQnV0dG9uID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5hdXRvRm9jdXNCdXR0b24gfHwgJ29rJztcbiAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWUgfHwgJ3pvb20nO1xuICB2YXIgbWFza1RyYW5zaXRpb25OYW1lID0gcHJvcHMubWFza1RyYW5zaXRpb25OYW1lIHx8ICdmYWRlJztcbiAgdmFyIGNsYXNzU3RyaW5nID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY29udGVudFByZWZpeENscywgXCJcIi5jb25jYXQoY29udGVudFByZWZpeENscywgXCItXCIpLmNvbmNhdChwcm9wcy50eXBlKSwgcHJvcHMuY2xhc3NOYW1lKTtcbiAgdmFyIGNhbmNlbEJ1dHRvbiA9IG9rQ2FuY2VsICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0FjdGlvbkJ1dHRvbltcImRlZmF1bHRcIl0sIHtcbiAgICBhY3Rpb25Gbjogb25DYW5jZWwsXG4gICAgY2xvc2VNb2RhbDogY2xvc2UsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXNCdXR0b24gPT09ICdjYW5jZWwnLFxuICAgIGJ1dHRvblByb3BzOiBjYW5jZWxCdXR0b25Qcm9wc1xuICB9LCBjYW5jZWxUZXh0KTtcbiAgdmFyIGljb25Ob2RlID0gdHlwZW9mIGljb24gPT09ICdzdHJpbmcnID8gUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICB0eXBlOiBpY29uXG4gIH0pIDogaWNvbjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX01vZGFsW1wiZGVmYXVsdFwiXSwge1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGNsYXNzTmFtZTogY2xhc3NTdHJpbmcsXG4gICAgd3JhcENsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChjb250ZW50UHJlZml4Q2xzLCBcIi1jZW50ZXJlZFwiKSwgISFwcm9wcy5jZW50ZXJlZCkpLFxuICAgIG9uQ2FuY2VsOiBjbG9zZS5iaW5kKF90aGlzLCB7XG4gICAgICB0cmlnZ2VyQ2FuY2VsOiB0cnVlXG4gICAgfSksXG4gICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICB0aXRsZTogXCJcIixcbiAgICB0cmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgZm9vdGVyOiBcIlwiLFxuICAgIG1hc2tUcmFuc2l0aW9uTmFtZTogbWFza1RyYW5zaXRpb25OYW1lLFxuICAgIG1hc2s6IG1hc2ssXG4gICAgbWFza0Nsb3NhYmxlOiBtYXNrQ2xvc2FibGUsXG4gICAgbWFza1N0eWxlOiBtYXNrU3R5bGUsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICB6SW5kZXg6IHpJbmRleCxcbiAgICBhZnRlckNsb3NlOiBhZnRlckNsb3NlLFxuICAgIGtleWJvYXJkOiBrZXlib2FyZCxcbiAgICBjZW50ZXJlZDogY2VudGVyZWQsXG4gICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb250ZW50UHJlZml4Q2xzLCBcIi1ib2R5LXdyYXBwZXJcIilcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb250ZW50UHJlZml4Q2xzLCBcIi1ib2R5XCIpXG4gIH0sIGljb25Ob2RlLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb250ZW50UHJlZml4Q2xzLCBcIi10aXRsZVwiKVxuICB9LCBwcm9wcy50aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29udGVudFByZWZpeENscywgXCItY29udGVudFwiKVxuICB9LCBwcm9wcy5jb250ZW50KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29udGVudFByZWZpeENscywgXCItYnRuc1wiKVxuICB9LCBjYW5jZWxCdXR0b24sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0FjdGlvbkJ1dHRvbltcImRlZmF1bHRcIl0sIHtcbiAgICB0eXBlOiBva1R5cGUsXG4gICAgYWN0aW9uRm46IG9uT2ssXG4gICAgY2xvc2VNb2RhbDogY2xvc2UsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXNCdXR0b24gPT09ICdvaycsXG4gICAgYnV0dG9uUHJvcHM6IG9rQnV0dG9uUHJvcHNcbiAgfSwgb2tUZXh0KSkpKTtcbn07XG5cbmZ1bmN0aW9uIGNvbmZpcm0oY29uZmlnKSB7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIHZhciBjdXJyZW50Q29uZmlnID0gX2V4dGVuZHMoe30sIGNvbmZpZywge1xuICAgIGNsb3NlOiBjbG9zZSxcbiAgICB2aXNpYmxlOiB0cnVlXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBjdXJyZW50Q29uZmlnID0gX2V4dGVuZHMoe30sIGN1cnJlbnRDb25maWcsIHtcbiAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgYWZ0ZXJDbG9zZTogZGVzdHJveS5iaW5kLmFwcGx5KGRlc3Ryb3ksIFt0aGlzXS5jb25jYXQoYXJncykpXG4gICAgfSk7XG5cbiAgICBpZiAoSVNfUkVBQ1RfMTYpIHtcbiAgICAgIHJlbmRlcihjdXJyZW50Q29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdHJveS5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShuZXdDb25maWcpIHtcbiAgICBjdXJyZW50Q29uZmlnID0gX2V4dGVuZHMoe30sIGN1cnJlbnRDb25maWcsIG5ld0NvbmZpZyk7XG4gICAgcmVuZGVyKGN1cnJlbnRDb25maWcpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB2YXIgdW5tb3VudFJlc3VsdCA9IFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZGl2KTtcblxuICAgIGlmICh1bm1vdW50UmVzdWx0ICYmIGRpdi5wYXJlbnROb2RlKSB7XG4gICAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciB0cmlnZ2VyQ2FuY2VsID0gYXJncy5zb21lKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcmV0dXJuIHBhcmFtICYmIHBhcmFtLnRyaWdnZXJDYW5jZWw7XG4gICAgfSk7XG5cbiAgICBpZiAoY29uZmlnLm9uQ2FuY2VsICYmIHRyaWdnZXJDYW5jZWwpIHtcbiAgICAgIGNvbmZpZy5vbkNhbmNlbC5hcHBseShjb25maWcsIGFyZ3MpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX01vZGFsLmRlc3Ryb3lGbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBmbiA9IF9Nb2RhbC5kZXN0cm95Rm5zW2ldO1xuXG4gICAgICBpZiAoZm4gPT09IGNsb3NlKSB7XG4gICAgICAgIF9Nb2RhbC5kZXN0cm95Rm5zLnNwbGljZShpLCAxKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChDb25maXJtRGlhbG9nLCBwcm9wcyksIGRpdik7XG4gIH1cblxuICByZW5kZXIoY3VycmVudENvbmZpZyk7XG5cbiAgX01vZGFsLmRlc3Ryb3lGbnMucHVzaChjbG9zZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95OiBjbG9zZSxcbiAgICB1cGRhdGU6IHVwZGF0ZVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfTW9kYWwgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9Nb2RhbFwiKSk7XG5cbnZhciBfY29uZmlybSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29uZmlybVwiKSk7XG5cbnZhciBfaWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2ljb25cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbl9Nb2RhbFtcImRlZmF1bHRcIl0uaW5mbyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICB2YXIgY29uZmlnID0gX2V4dGVuZHMoe1xuICAgIHR5cGU6ICdpbmZvJyxcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgdHlwZTogXCJpbmZvLWNpcmNsZVwiXG4gICAgfSksXG4gICAgb2tDYW5jZWw6IGZhbHNlXG4gIH0sIHByb3BzKTtcblxuICByZXR1cm4gKDAsIF9jb25maXJtW1wiZGVmYXVsdFwiXSkoY29uZmlnKTtcbn07XG5cbl9Nb2RhbFtcImRlZmF1bHRcIl0uc3VjY2VzcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICB2YXIgY29uZmlnID0gX2V4dGVuZHMoe1xuICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgdHlwZTogXCJjaGVjay1jaXJjbGVcIlxuICAgIH0pLFxuICAgIG9rQ2FuY2VsOiBmYWxzZVxuICB9LCBwcm9wcyk7XG5cbiAgcmV0dXJuICgwLCBfY29uZmlybVtcImRlZmF1bHRcIl0pKGNvbmZpZyk7XG59O1xuXG5fTW9kYWxbXCJkZWZhdWx0XCJdLmVycm9yID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7XG4gICAgdHlwZTogJ2Vycm9yJyxcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgdHlwZTogXCJjbG9zZS1jaXJjbGVcIlxuICAgIH0pLFxuICAgIG9rQ2FuY2VsOiBmYWxzZVxuICB9LCBwcm9wcyk7XG5cbiAgcmV0dXJuICgwLCBfY29uZmlybVtcImRlZmF1bHRcIl0pKGNvbmZpZyk7XG59O1xuXG5fTW9kYWxbXCJkZWZhdWx0XCJdLndhcm5pbmcgPSBfTW9kYWxbXCJkZWZhdWx0XCJdLndhcm4gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgdmFyIGNvbmZpZyA9IF9leHRlbmRzKHtcbiAgICB0eXBlOiAnd2FybmluZycsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgIHR5cGU6IFwiZXhjbGFtYXRpb24tY2lyY2xlXCJcbiAgICB9KSxcbiAgICBva0NhbmNlbDogZmFsc2VcbiAgfSwgcHJvcHMpO1xuXG4gIHJldHVybiAoMCwgX2NvbmZpcm1bXCJkZWZhdWx0XCJdKShjb25maWcpO1xufTtcblxuX01vZGFsW1wiZGVmYXVsdFwiXS5jb25maXJtID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7XG4gICAgdHlwZTogJ2NvbmZpcm0nLFxuICAgIG9rQ2FuY2VsOiB0cnVlXG4gIH0sIHByb3BzKTtcblxuICByZXR1cm4gKDAsIF9jb25maXJtW1wiZGVmYXVsdFwiXSkoY29uZmlnKTtcbn07XG5cbl9Nb2RhbFtcImRlZmF1bHRcIl0uZGVzdHJveUFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgd2hpbGUgKF9Nb2RhbC5kZXN0cm95Rm5zLmxlbmd0aCkge1xuICAgIHZhciBjbG9zZSA9IF9Nb2RhbC5kZXN0cm95Rm5zLnBvcCgpO1xuXG4gICAgaWYgKGNsb3NlKSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIF9kZWZhdWx0ID0gX01vZGFsW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi93aXRoVGhlbWUnXG5pbXBvcnQgeyBCdXR0b25Qcm9wc1BULCBTdHJpbmdPck5vZGVQVCwgU3RyaW5nT3JOdW1iZXJQVCB9IGZyb20gJy4uL3Byb3B0eXBlcydcblxuY29uc3QgQ29uZmlybU1vZGFsID0gd2l0aFRoZW1lKHByb3BzID0+IDxNb2RhbCB7Li4ucHJvcHN9IC8+KVxuXG5Db25maXJtTW9kYWwucHJvcFR5cGVzID0ge1xuICBhZnRlckNsb3NlOiBQVC5mdW5jLFxuICBib2R5U3R5bGU6IFBULm9iamVjdCxcbiAgY2FuY2VsVGV4dDogU3RyaW5nT3JOb2RlUFQsXG4gIGNlbnRlcmVkOiBQVC5ib29sLFxuICBjbG9zYWJsZTogUFQuYm9vbCxcbiAgY29uZmlybUxvYWRpbmc6IFBULmJvb2wsXG4gIGRlc3Ryb3lPbkNsb3NlOiBQVC5ib29sLFxuICBmb290ZXI6IFN0cmluZ09yTm9kZVBULFxuICBmb3JjZVJlbmRlcjogUFQuYm9vbCxcbiAgZ2V0Q29udGFpbmVyOiBQVC5lbGVtZW50LFxuICBtYXNrOiBQVC5ib29sLFxuICBtYXNrQ2xvc2FibGU6IFBULmJvb2wsXG4gIG1hc2tTdHlsZTogUFQub2JqZWN0LFxuICBva1RleHQ6IFN0cmluZ09yTm9kZVBULFxuICBva1R5cGU6IFBULnN0cmluZyxcbiAgb2tCdXR0b25Qcm9wczogQnV0dG9uUHJvcHNQVCxcbiAgY2FuY2VsQnV0dG9uUHJvcHM6IEJ1dHRvblByb3BzUFQsXG4gIHN0eWxlOiBQVC5vYmplY3QsXG4gIHRpdGxlOiBTdHJpbmdPck5vZGVQVCxcbiAgdmlzaWJsZTogUFQuYm9vbCxcbiAgd2lkdGg6IFN0cmluZ09yTnVtYmVyUFQsXG4gIHdyYXBDbGFzc05hbWU6IFBULnN0cmluZyxcbiAgekluZGV4OiBQVC5udW1iZXIsXG4gIG9uQ2FuY2VsOiBQVC5mdW5jLFxuICBvbk9rOiBQVC5mdW5jXG59XG5cbkNvbmZpcm1Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuICBjZW50ZXJlZDogdHJ1ZSxcbiAgY2xvc2FibGU6IHRydWUsXG4gIGRlc3Ryb3lPbkNsb3NlOiB0cnVlLFxuICBtYXNrOiB0cnVlLFxuICBtYXNrQ2xvc2FibGU6IHRydWUsXG4gIG9rVGV4dDogJ09rJ1xufVxuXG5Db25maXJtTW9kYWwuZGlzcGxheU5hbWUgPSAnQ29uZmlybU1vZGFsJ1xuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtTW9kYWxcbiJdLCJuYW1lcyI6WyJSZWFjdC5jcmVhdGVFbGVtZW50IiwiUmVhY3QuQ29tcG9uZW50IiwiUmVhY3RET00uZmluZERPTU5vZGUiLCJfYWRkRG9tRXZlbnRMaXN0ZW5lciIsIl9yZWFjdERvbSIsInJlcXVpcmUkJDAiLCJyZXF1aXJlJCQxIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwicmVxdWlyZSQkNSIsInJlcXVpcmUkJDYiLCJfbG9jYWxlIiwiQ29uZmlybU1vZGFsIiwid2l0aFRoZW1lIiwicHJvcHMiLCJSZWFjdCIsInByb3BUeXBlcyIsImFmdGVyQ2xvc2UiLCJQVCIsImZ1bmMiLCJib2R5U3R5bGUiLCJvYmplY3QiLCJjYW5jZWxUZXh0IiwiU3RyaW5nT3JOb2RlUFQiLCJjZW50ZXJlZCIsImJvb2wiLCJjbG9zYWJsZSIsImNvbmZpcm1Mb2FkaW5nIiwiZGVzdHJveU9uQ2xvc2UiLCJmb290ZXIiLCJmb3JjZVJlbmRlciIsImdldENvbnRhaW5lciIsImVsZW1lbnQiLCJtYXNrIiwibWFza0Nsb3NhYmxlIiwibWFza1N0eWxlIiwib2tUZXh0Iiwib2tUeXBlIiwic3RyaW5nIiwib2tCdXR0b25Qcm9wcyIsIkJ1dHRvblByb3BzUFQiLCJjYW5jZWxCdXR0b25Qcm9wcyIsInN0eWxlIiwidGl0bGUiLCJ2aXNpYmxlIiwid2lkdGgiLCJTdHJpbmdPck51bWJlclBUIiwid3JhcENsYXNzTmFtZSIsInpJbmRleCIsIm51bWJlciIsIm9uQ2FuY2VsIiwib25PayIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBSSxhQUFhLEdBQUcsVUFBVSxnQkFBZ0IsRUFBRTtJQUM1QyxTQUFTLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7O0lBRTNDLFNBQVMsYUFBYSxHQUFHO1FBQ3JCLGVBQWUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7O1FBRXJDLE9BQU8sMEJBQTBCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztLQUNwRjs7SUFFRCxhQUFhLENBQUMsU0FBUyxDQUFDLHFCQUFxQixHQUFHLFNBQVMscUJBQXFCLENBQUMsU0FBUyxFQUFFO1FBQ3RGLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7S0FDN0QsQ0FBQzs7SUFFRixhQUFhLENBQUMsU0FBUyxDQUFD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LE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRTs7QUFFM2QsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRSxFQUFFLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLEdBQUcsS0FBSyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O0FBRS9WLFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTs7QUFFak4sU0FBUyxRQUFRLEdBQUcsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFOztBQUU3VCxTQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsWUFBWSxXQUFXLENB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SSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRTs7QUFFM2QsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRSxFQUFFLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLEdBQUcsS0FBSyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O0FBRS9WLFNBQVMsUUFBUSxHQUFHLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRTs7QUFFN1QsU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsRUFBRSxFQUFFOztBQUV6SixTQUFTLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVB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SUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFOztBQUUzZCxTQUFTLFFBQVEsR0FBRyxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUU7O0FBRTdULFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxF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QUUsT0FBTyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUU7O0FBRTNkLFNBQVMsUUFBUSxHQUFHLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxD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
