import '../chunk-22f808cd.js';
import React__default, { createElement, Component } from 'react';
import PropTypes__default from 'prop-types';
import { c as createCommonjsModule, u as unwrapExports } from '../chunk-02ddfd93.js';
import '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
import { e as require$$0, r as require$$2, b as require$$7, _ as _configProvider } from '../chunk-dbd356d3.js';
import '../chunk-ee2530d1.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _extends, i as require$$4, r as require$$6 } from '../chunk-f94271b9.js';
import * as ReactDOM from 'react-dom';
import { findDOMNode } from 'react-dom';
import { c as contains, C as ContainerRender, P as Portal, l as lib } from '../chunk-3c626a6d.js';
import { A as Animate } from '../chunk-886bee81.js';
import '../chunk-f200bc50.js';
import '../chunk-a58638a0.js';
import { r as require$$1 } from '../chunk-8820e6e0.js';
import '../chunk-3a7de8d6.js';
import { S as StringOrNodePT, a as ButtonPropsPT, b as StringOrNumberPT } from '../chunk-482f4ef0.js';
import { r as require$$2$1 } from '../chunk-84525609.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9yYy1kaWFsb2cvZXMvTGF6eVJlbmRlckJveC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL2dldFNjcm9sbEJhclNpemUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmMtZGlhbG9nL2VzL0RpYWxvZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yYy1kaWFsb2cvZXMvRGlhbG9nV3JhcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yYy11dGlsL2xpYi9Eb20vYWRkRXZlbnRMaXN0ZW5lci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tb2RhbC9sb2NhbGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbW9kYWwvTW9kYWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbW9kYWwvQWN0aW9uQnV0dG9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21vZGFsL2NvbmZpcm0uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbW9kYWwvaW5kZXguanMiLCIuLi8uLi9zcmMvQ29uZmlybU1vZGFsL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBMYXp5UmVuZGVyQm94ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTGF6eVJlbmRlckJveCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBMYXp5UmVuZGVyQm94KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGF6eVJlbmRlckJveCk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgTGF6eVJlbmRlckJveC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gISFuZXh0UHJvcHMuaGlkZGVuQ2xhc3NOYW1lIHx8ICEhbmV4dFByb3BzLnZpc2libGU7XG4gICAgfTtcblxuICAgIExhenlSZW5kZXJCb3gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICBpZiAoISF0aGlzLnByb3BzLmhpZGRlbkNsYXNzTmFtZSAmJiAhdGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyB0aGlzLnByb3BzLmhpZGRlbkNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5oaWRkZW5DbGFzc05hbWU7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy52aXNpYmxlO1xuICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBwcm9wcykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGF6eVJlbmRlckJveDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgTGF6eVJlbmRlckJveDsiLCJ2YXIgY2FjaGVkID0gdm9pZCAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxCYXJTaXplKGZyZXNoKSB7XG4gIGlmIChmcmVzaCB8fCBjYWNoZWQgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlubmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGlubmVyLnN0eWxlLmhlaWdodCA9ICcyMDBweCc7XG5cbiAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgb3V0ZXJTdHlsZSA9IG91dGVyLnN0eWxlO1xuXG4gICAgb3V0ZXJTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgb3V0ZXJTdHlsZS50b3AgPSAwO1xuICAgIG91dGVyU3R5bGUubGVmdCA9IDA7XG4gICAgb3V0ZXJTdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIG91dGVyU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIG91dGVyU3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICAgIG91dGVyU3R5bGUuaGVpZ2h0ID0gJzE1MHB4JztcbiAgICBvdXRlclN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcblxuICAgIHZhciB3aWR0aENvbnRhaW5lZCA9IGlubmVyLm9mZnNldFdpZHRoO1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdmFyIHdpZHRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAod2lkdGhDb250YWluZWQgPT09IHdpZHRoU2Nyb2xsKSB7XG4gICAgICB3aWR0aFNjcm9sbCA9IG91dGVyLmNsaWVudFdpZHRoO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgY2FjaGVkID0gd2lkdGhDb250YWluZWQgLSB3aWR0aFNjcm9sbDtcbiAgfVxuICByZXR1cm4gY2FjaGVkO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBLZXlDb2RlIGZyb20gJ3JjLXV0aWwvZXMvS2V5Q29kZSc7XG5pbXBvcnQgY29udGFpbnMgZnJvbSAncmMtdXRpbC9lcy9Eb20vY29udGFpbnMnO1xuaW1wb3J0IEFuaW1hdGUgZnJvbSAncmMtYW5pbWF0ZSc7XG5pbXBvcnQgTGF6eVJlbmRlckJveCBmcm9tICcuL0xhenlSZW5kZXJCb3gnO1xuaW1wb3J0IGdldFNjcm9sbEJhclNpemUgZnJvbSAncmMtdXRpbC9lcy9nZXRTY3JvbGxCYXJTaXplJztcbnZhciB1dWlkID0gMDtcbnZhciBvcGVuQ291bnQgPSAwO1xuLyogZXNsaW50IHJlYWN0L25vLWlzLW1vdW50ZWQ6MCAqL1xuZnVuY3Rpb24gZ2V0U2Nyb2xsKHcsIHRvcCkge1xuICAgIHZhciByZXQgPSB3WydwYWdlJyArICh0b3AgPyAnWScgOiAnWCcpICsgJ09mZnNldCddO1xuICAgIHZhciBtZXRob2QgPSAnc2Nyb2xsJyArICh0b3AgPyAnVG9wJyA6ICdMZWZ0Jyk7XG4gICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhciBkID0gdy5kb2N1bWVudDtcbiAgICAgICAgcmV0ID0gZC5kb2N1bWVudEVsZW1lbnRbbWV0aG9kXTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXQgPSBkLmJvZHlbbWV0aG9kXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtT3JpZ2luKG5vZGUsIHZhbHVlKSB7XG4gICAgdmFyIHN0eWxlID0gbm9kZS5zdHlsZTtcbiAgICBbJ1dlYmtpdCcsICdNb3onLCAnTXMnLCAnbXMnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgICAgc3R5bGVbcHJlZml4ICsgJ1RyYW5zZm9ybU9yaWdpbiddID0gdmFsdWU7XG4gICAgfSk7XG4gICAgc3R5bGVbJ3RyYW5zZm9ybU9yaWdpbiddID0gdmFsdWU7XG59XG5mdW5jdGlvbiBvZmZzZXQoZWwpIHtcbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBwb3MgPSB7XG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgdG9wOiByZWN0LnRvcFxuICAgIH07XG4gICAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gICAgdmFyIHcgPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgICBwb3MubGVmdCArPSBnZXRTY3JvbGwodyk7XG4gICAgcG9zLnRvcCArPSBnZXRTY3JvbGwodywgdHJ1ZSk7XG4gICAgcmV0dXJuIHBvcztcbn1cblxudmFyIERpYWxvZyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERpYWxvZywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBEaWFsb2coKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEaWFsb2cpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMub25BbmltYXRlTGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWZ0ZXJDbG9zZSA9IF90aGlzLnByb3BzLmFmdGVyQ2xvc2U7XG4gICAgICAgICAgICAvLyBuZWVkIGRlbW8/XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L2RpYWxvZy9wdWxsLzI4XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy53cmFwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMud3JhcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuaW5UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5yZW1vdmVTY3JvbGxpbmdFZmZlY3QoKTtcbiAgICAgICAgICAgIGlmIChhZnRlckNsb3NlKSB7XG4gICAgICAgICAgICAgICAgYWZ0ZXJDbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbkRpYWxvZ01vdXNlRG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmRpYWxvZ01vdXNlRG93biA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uTWFza01vdXNlVXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuZGlhbG9nTW91c2VEb3duKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRpYWxvZ01vdXNlRG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbk1hc2tDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBhbmRyb2lkIHRyaWdnZXIgY2xpY2sgb24gb3BlbiAoZmFzdGNsaWNrPz8pXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIF90aGlzLm9wZW5UaW1lIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQgJiYgIV90aGlzLmRpYWxvZ01vdXNlRG93bikge1xuICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICBpZiAocHJvcHMua2V5Ym9hcmQgJiYgZS5rZXlDb2RlID09PSBLZXlDb2RlLkVTQykge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2UoZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8ga2VlcCBmb2N1cyBpbnNpZGUgZGlhbG9nXG4gICAgICAgICAgICBpZiAocHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGUuVEFCKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbnRpbmVsU3RhcnQgPSBfdGhpcy5zZW50aW5lbFN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IHNlbnRpbmVsU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZW50aW5lbEVuZC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IF90aGlzLnNlbnRpbmVsRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW50aW5lbFN0YXJ0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldERpYWxvZ0VsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBjbG9zYWJsZSA9IHByb3BzLmNsb3NhYmxlO1xuICAgICAgICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscztcbiAgICAgICAgICAgIHZhciBkZXN0ID0ge307XG4gICAgICAgICAgICBpZiAocHJvcHMud2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRlc3Qud2lkdGggPSBwcm9wcy53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRlc3QuaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZvb3RlciA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChwcm9wcy5mb290ZXIpIHtcbiAgICAgICAgICAgICAgICBmb290ZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWZvb3RlcicsIHJlZjogX3RoaXMuc2F2ZVJlZignZm9vdGVyJykgfSwgcHJvcHMuZm9vdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAocHJvcHMudGl0bGUpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWhlYWRlcicsIHJlZjogX3RoaXMuc2F2ZVJlZignaGVhZGVyJykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy10aXRsZScsIGlkOiBfdGhpcy50aXRsZUlkIH0sIHByb3BzLnRpdGxlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2xvc2VyID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGNsb3NhYmxlKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VyID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IF90aGlzLmNsb3NlLCBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiLCBjbGFzc05hbWU6IHByZWZpeENscyArICctY2xvc2UnIH0sIHByb3BzLmNsb3NlSWNvbiB8fCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1jbG9zZS14JyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgcHJvcHMuc3R5bGUsIGRlc3QpO1xuICAgICAgICAgICAgdmFyIHNlbnRpbmVsU3R5bGUgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAsIG92ZXJmbG93OiAnaGlkZGVuJyB9O1xuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gX3RoaXMuZ2V0VHJhbnNpdGlvbk5hbWUoKTtcbiAgICAgICAgICAgIHZhciBkaWFsb2dFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChMYXp5UmVuZGVyQm94LCB7IGtleTogXCJkaWFsb2ctZWxlbWVudFwiLCByb2xlOiBcImRvY3VtZW50XCIsIHJlZjogX3RoaXMuc2F2ZVJlZignZGlhbG9nJyksIHN0eWxlOiBzdHlsZSwgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnICcgKyAocHJvcHMuY2xhc3NOYW1lIHx8ICcnKSwgdmlzaWJsZTogcHJvcHMudmlzaWJsZSwgb25Nb3VzZURvd246IF90aGlzLm9uRGlhbG9nTW91c2VEb3duIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyB0YWJJbmRleDogMCwgcmVmOiBfdGhpcy5zYXZlUmVmKCdzZW50aW5lbFN0YXJ0JyksIHN0eWxlOiBzZW50aW5lbFN0eWxlLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNvbnRlbnQnIH0sIGNsb3NlciwgaGVhZGVyLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWJvZHknLCBzdHlsZTogcHJvcHMuYm9keVN0eWxlLCByZWY6IF90aGlzLnNhdmVSZWYoJ2JvZHknKSB9LCBwcm9wcy5ib2R5UHJvcHMpLCBwcm9wcy5jaGlsZHJlbiksIGZvb3RlciksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyB0YWJJbmRleDogMCwgcmVmOiBfdGhpcy5zYXZlUmVmKCdzZW50aW5lbEVuZCcpLCBzdHlsZTogc2VudGluZWxTdHlsZSwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBbmltYXRlLCB7IGtleTogXCJkaWFsb2dcIiwgc2hvd1Byb3A6IFwidmlzaWJsZVwiLCBvbkxlYXZlOiBfdGhpcy5vbkFuaW1hdGVMZWF2ZSwgdHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLCBjb21wb25lbnQ6IFwiXCIsIHRyYW5zaXRpb25BcHBlYXI6IHRydWUgfSwgcHJvcHMudmlzaWJsZSB8fCAhcHJvcHMuZGVzdHJveU9uQ2xvc2UgPyBkaWFsb2dFbGVtZW50IDogbnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldFpJbmRleFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGlmIChwcm9wcy56SW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0eWxlLnpJbmRleCA9IHByb3BzLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0V3JhcFN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfdGhpcy5nZXRaSW5kZXhTdHlsZSgpLCBfdGhpcy5wcm9wcy53cmFwU3R5bGUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRNYXNrU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF90aGlzLmdldFpJbmRleFN0eWxlKCksIF90aGlzLnByb3BzLm1hc2tTdHlsZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldE1hc2tFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgbWFza0VsZW1lbnQgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAocHJvcHMubWFzaykge1xuICAgICAgICAgICAgICAgIHZhciBtYXNrVHJhbnNpdGlvbiA9IF90aGlzLmdldE1hc2tUcmFuc2l0aW9uTmFtZSgpO1xuICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChMYXp5UmVuZGVyQm94LCBfZXh0ZW5kcyh7IHN0eWxlOiBfdGhpcy5nZXRNYXNrU3R5bGUoKSwga2V5OiBcIm1hc2tcIiwgY2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLW1hc2snLCBoaWRkZW5DbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctbWFzay1oaWRkZW4nLCB2aXNpYmxlOiBwcm9wcy52aXNpYmxlIH0sIHByb3BzLm1hc2tQcm9wcykpO1xuICAgICAgICAgICAgICAgIGlmIChtYXNrVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBtYXNrRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW5pbWF0ZSwgeyBrZXk6IFwibWFza1wiLCBzaG93UHJvcDogXCJ2aXNpYmxlXCIsIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsIGNvbXBvbmVudDogXCJcIiwgdHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uIH0sIG1hc2tFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWFza0VsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldE1hc2tUcmFuc2l0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMubWFza1RyYW5zaXRpb25OYW1lO1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHByb3BzLm1hc2tBbmltYXRpb247XG4gICAgICAgICAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIGFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMucHJlZml4Q2xzICsgJy0nICsgYW5pbWF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gcHJvcHMuYW5pbWF0aW9uO1xuICAgICAgICAgICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBhbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnByZWZpeENscyArICctJyArIGFuaW1hdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmJvZHlJc092ZXJmbG93aW5nICYmIF90aGlzLnNjcm9sbGJhcldpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IF90aGlzLnNjcm9sbGJhcldpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWRkU2Nyb2xsaW5nRWZmZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb3BlbkNvdW50Kys7XG4gICAgICAgICAgICBpZiAob3BlbkNvdW50ICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuY2hlY2tTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIF90aGlzLnNldFNjcm9sbGJhcigpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgLy8gdGhpcy5hZGp1c3REaWFsb2coKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVtb3ZlU2Nyb2xsaW5nRWZmZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb3BlbkNvdW50LS07XG4gICAgICAgICAgICBpZiAob3BlbkNvdW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICAgICAgX3RoaXMucmVzZXRTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIC8vIHRoaXMucmVzZXRBZGp1c3RtZW50cygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgb25DbG9zZSA9IF90aGlzLnByb3BzLm9uQ2xvc2U7XG5cbiAgICAgICAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgICAgICAgICAgb25DbG9zZShlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuY2hlY2tTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZnVsbFdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICBpZiAoIWZ1bGxXaW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgICAgIC8vIHdvcmthcm91bmQgZm9yIG1pc3Npbmcgd2luZG93LmlubmVyV2lkdGggaW4gSUU4XG4gICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudFJlY3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgZnVsbFdpbmRvd1dpZHRoID0gZG9jdW1lbnRFbGVtZW50UmVjdC5yaWdodCAtIE1hdGguYWJzKGRvY3VtZW50RWxlbWVudFJlY3QubGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5ib2R5SXNPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBmdWxsV2luZG93V2lkdGg7XG4gICAgICAgICAgICBpZiAoX3RoaXMuYm9keUlzT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zY3JvbGxiYXJXaWR0aCA9IGdldFNjcm9sbEJhclNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVzZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hZGp1c3REaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMud3JhcCAmJiBfdGhpcy5zY3JvbGxiYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGFsSXNPdmVyZmxvd2luZyA9IF90aGlzLndyYXAuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICBfdGhpcy53cmFwLnN0eWxlLnBhZGRpbmdMZWZ0ID0gKCFfdGhpcy5ib2R5SXNPdmVyZmxvd2luZyAmJiBtb2RhbElzT3ZlcmZsb3dpbmcgPyBfdGhpcy5zY3JvbGxiYXJXaWR0aCA6ICcnKSArICdweCc7XG4gICAgICAgICAgICAgICAgX3RoaXMud3JhcC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAoX3RoaXMuYm9keUlzT3ZlcmZsb3dpbmcgJiYgIW1vZGFsSXNPdmVyZmxvd2luZyA/IF90aGlzLnNjcm9sbGJhcldpZHRoIDogJycpICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVzZXRBZGp1c3RtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy53cmFwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMud3JhcC5zdHlsZS5wYWRkaW5nTGVmdCA9IF90aGlzLndyYXAuc3R5bGUucGFkZGluZ0xlZnQgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2F2ZVJlZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpc1tuYW1lXSA9IG5vZGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgRGlhbG9nLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaW5UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGl0bGVJZCA9ICdyY0RpYWxvZ1RpdGxlJyArIHV1aWQrKztcbiAgICB9O1xuXG4gICAgRGlhbG9nLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSh7fSk7XG4gICAgICAgIC8vIGlmIGZvcmNlUmVuZGVyIGlzIHRydWUsIHNldCBlbGVtZW50IHN0eWxlIGRpc3BsYXkgdG8gYmUgbm9uZTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZm9yY2VSZW5kZXIgJiYgdGhpcy53cmFwKSB7XG4gICAgICAgICAgICB0aGlzLndyYXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBEaWFsb2cucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgdmFyIG1vdXNlUG9zaXRpb24gPSB0aGlzLnByb3BzLm1vdXNlUG9zaXRpb247XG4gICAgICAgIGlmIChwcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBzaG93XG4gICAgICAgICAgICBpZiAoIXByZXZQcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTY3JvbGxpbmdFZmZlY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyeUZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ05vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLmRpYWxvZyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsT2Zmc2V0ID0gb2Zmc2V0KGRpYWxvZ05vZGUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW4oZGlhbG9nTm9kZSwgbW91c2VQb3NpdGlvbi54IC0gZWxPZmZzZXQubGVmdCArICdweCAnICsgKG1vdXNlUG9zaXRpb24ueSAtIGVsT2Zmc2V0LnRvcCkgKyAncHgnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW4oZGlhbG9nTm9kZSwgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwcmV2UHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5pblRyYW5zaXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb3BzLm1hc2sgJiYgdGhpcy5sYXN0T3V0U2lkZUZvY3VzTm9kZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RPdXRTaWRlRm9jdXNOb2RlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBEaWFsb2cucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgfHwgdGhpcy5pblRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsaW5nRWZmZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICB9O1xuXG4gICAgRGlhbG9nLnByb3RvdHlwZS50cnlGb2N1cyA9IGZ1bmN0aW9uIHRyeUZvY3VzKCkge1xuICAgICAgICBpZiAoIWNvbnRhaW5zKHRoaXMud3JhcCwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5zZW50aW5lbFN0YXJ0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRGlhbG9nLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICBtYXNrQ2xvc2FibGUgPSBwcm9wcy5tYXNrQ2xvc2FibGU7XG5cbiAgICAgICAgdmFyIHN0eWxlID0gdGhpcy5nZXRXcmFwU3R5bGUoKTtcbiAgICAgICAgLy8gY2xlYXIgaGlkZSBkaXNwbGF5XG4gICAgICAgIC8vIGFuZCBvbmx5IHNldCBkaXNwbGF5IGFmdGVyIGFzeW5jIGFuaW0sIG5vdCBoZXJlIGZvciBoaWRlXG4gICAgICAgIGlmIChwcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB0aGlzLmdldE1hc2tFbGVtZW50KCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoeyB0YWJJbmRleDogLTEsIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy13cmFwICcgKyAocHJvcHMud3JhcENsYXNzTmFtZSB8fCAnJyksIHJlZjogdGhpcy5zYXZlUmVmKCd3cmFwJyksIG9uQ2xpY2s6IG1hc2tDbG9zYWJsZSA/IHRoaXMub25NYXNrQ2xpY2sgOiBudWxsLCBvbk1vdXNlVXA6IG1hc2tDbG9zYWJsZSA/IHRoaXMub25NYXNrTW91c2VVcCA6IG51bGwsIHJvbGU6IFwiZGlhbG9nXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHByb3BzLnRpdGxlID8gdGhpcy50aXRsZUlkIDogbnVsbCwgc3R5bGU6IHN0eWxlIH0sIHByb3BzLndyYXBQcm9wcyksIHRoaXMuZ2V0RGlhbG9nRWxlbWVudCgpKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBEaWFsb2c7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcblxuRGlhbG9nLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG1hc2s6IHRydWUsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgY2xvc2FibGU6IHRydWUsXG4gICAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICAgIGRlc3Ryb3lPbkNsb3NlOiBmYWxzZSxcbiAgICBwcmVmaXhDbHM6ICdyYy1kaWFsb2cnXG59OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cnO1xuaW1wb3J0IENvbnRhaW5lclJlbmRlciBmcm9tICdyYy11dGlsL2VzL0NvbnRhaW5lclJlbmRlcic7XG5pbXBvcnQgUG9ydGFsIGZyb20gJ3JjLXV0aWwvZXMvUG9ydGFsJztcbnZhciBJU19SRUFDVF8xNiA9ICdjcmVhdGVQb3J0YWwnIGluIFJlYWN0RE9NO1xuXG52YXIgRGlhbG9nV3JhcCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERpYWxvZ1dyYXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRGlhbG9nV3JhcCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpYWxvZ1dyYXApO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMuc2F2ZURpYWxvZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBfdGhpcy5fY29tcG9uZW50ID0gbm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGV4dHJhID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlhbG9nLCBfZXh0ZW5kcyh7IHJlZjogX3RoaXMuc2F2ZURpYWxvZyB9LCBfdGhpcy5wcm9wcywgZXh0cmEsIHsga2V5OiBcImRpYWxvZ1wiIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZml4IGlzc3VlICMxMDY1NlxuICAgICAgICAvKlxuICAgICAgICAqIEN1c3RvbSBjb250YWluZXIgc2hvdWxkIG5vdCBiZSByZXR1cm4sIGJlY2F1c2UgaW4gdGhlIFBvcnRhbCBjb21wb25lbnQsIGl0IHdpbGwgcmVtb3ZlIHRoZVxuICAgICAgICAqIHJldHVybiBjb250YWluZXIgZWxlbWVudCBoZXJlLCBpZiB0aGUgY3VzdG9tIGNvbnRhaW5lciBpcyB0aGUgb25seSBjaGlsZCBvZiBpdCdzIGNvbXBvbmVudCxcbiAgICAgICAgKiBsaWtlIGlzc3VlICMxMDY1NiwgSXQgd2lsbCBoYXMgYSBjb25mbGljdCB3aXRoIHJlbW92ZUNoaWxkIG1ldGhvZCBpbiByZWFjdC1kb20uXG4gICAgICAgICogU28gaGVyZSBzaG91bGQgYWRkIGEgY2hpbGQgKGRpdiBlbGVtZW50KSB0byBjdXN0b20gY29udGFpbmVyLlxuICAgICAgICAqICovXG4gICAgICAgIF90aGlzLmdldENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5nZXRDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9wcy5nZXRDb250YWluZXIoKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgRGlhbG9nV3JhcC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKF9yZWYpIHtcbiAgICAgICAgdmFyIHZpc2libGUgPSBfcmVmLnZpc2libGUsXG4gICAgICAgICAgICBmb3JjZVJlbmRlciA9IF9yZWYuZm9yY2VSZW5kZXI7XG5cbiAgICAgICAgcmV0dXJuICEhKHRoaXMucHJvcHMudmlzaWJsZSB8fCB2aXNpYmxlKSB8fCB0aGlzLnByb3BzLmZvcmNlUmVuZGVyIHx8IGZvcmNlUmVuZGVyO1xuICAgIH07XG5cbiAgICBEaWFsb2dXcmFwLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAoSVNfUkVBQ1RfMTYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgYWZ0ZXJDbG9zZTogdGhpcy5yZW1vdmVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDb250YWluZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBEaWFsb2dXcmFwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgdmlzaWJsZSA9IF9wcm9wcy52aXNpYmxlLFxuICAgICAgICAgICAgZm9yY2VSZW5kZXIgPSBfcHJvcHMuZm9yY2VSZW5kZXI7XG5cbiAgICAgICAgdmFyIHBvcnRhbCA9IG51bGw7XG4gICAgICAgIGlmICghSVNfUkVBQ1RfMTYpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lclJlbmRlciwgeyBwYXJlbnQ6IHRoaXMsIHZpc2libGU6IHZpc2libGUsIGF1dG9EZXN0cm95OiBmYWxzZSwgZ2V0Q29tcG9uZW50OiB0aGlzLmdldENvbXBvbmVudCwgZ2V0Q29udGFpbmVyOiB0aGlzLmdldENvbnRhaW5lciwgZm9yY2VSZW5kZXI6IGZvcmNlUmVuZGVyIH0sIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgICAgIHZhciByZW5kZXJDb21wb25lbnQgPSBfcmVmMi5yZW5kZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNvbnRhaW5lciA9IF9yZWYyLnJlbW92ZUNvbnRhaW5lcjtcblxuICAgICAgICAgICAgICAgIF90aGlzMi5yZW5kZXJDb21wb25lbnQgPSByZW5kZXJDb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnJlbW92ZUNvbnRhaW5lciA9IHJlbW92ZUNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aXNpYmxlIHx8IGZvcmNlUmVuZGVyIHx8IHRoaXMuX2NvbXBvbmVudCkge1xuICAgICAgICAgICAgcG9ydGFsID0gUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWwsIHsgZ2V0Q29udGFpbmVyOiB0aGlzLmdldENvbnRhaW5lciB9LCB0aGlzLmdldENvbXBvbmVudCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9ydGFsO1xuICAgIH07XG5cbiAgICByZXR1cm4gRGlhbG9nV3JhcDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuRGlhbG9nV3JhcC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAgZm9yY2VSZW5kZXI6IGZhbHNlXG59O1xuZXhwb3J0IGRlZmF1bHQgRGlhbG9nV3JhcDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBhZGRFdmVudExpc3RlbmVyV3JhcDtcblxudmFyIF9hZGREb21FdmVudExpc3RlbmVyID0gcmVxdWlyZSgnYWRkLWRvbS1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX2FkZERvbUV2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkRG9tRXZlbnRMaXN0ZW5lcik7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcldyYXAodGFyZ2V0LCBldmVudFR5cGUsIGNiLCBvcHRpb24pIHtcbiAgLyogZXNsaW50IGNhbWVsY2FzZTogMiAqL1xuICB2YXIgY2FsbGJhY2sgPSBfcmVhY3REb20yWydkZWZhdWx0J10udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgPyBmdW5jdGlvbiBydW4oZSkge1xuICAgIF9yZWFjdERvbTJbJ2RlZmF1bHQnXS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyhjYiwgZSk7XG4gIH0gOiBjYjtcbiAgcmV0dXJuICgwLCBfYWRkRG9tRXZlbnRMaXN0ZW5lcjJbJ2RlZmF1bHQnXSkodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrLCBvcHRpb24pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNoYW5nZUNvbmZpcm1Mb2NhbGUgPSBjaGFuZ2VDb25maXJtTG9jYWxlO1xuZXhwb3J0cy5nZXRDb25maXJtTG9jYWxlID0gZ2V0Q29uZmlybUxvY2FsZTtcblxudmFyIF9kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIHJ1bnRpbWVMb2NhbGUgPSBfZXh0ZW5kcyh7fSwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdLk1vZGFsKTtcblxuZnVuY3Rpb24gY2hhbmdlQ29uZmlybUxvY2FsZShuZXdMb2NhbGUpIHtcbiAgaWYgKG5ld0xvY2FsZSkge1xuICAgIHJ1bnRpbWVMb2NhbGUgPSBfZXh0ZW5kcyh7fSwgcnVudGltZUxvY2FsZSwgbmV3TG9jYWxlKTtcbiAgfSBlbHNlIHtcbiAgICBydW50aW1lTG9jYWxlID0gX2V4dGVuZHMoe30sIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5Nb2RhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q29uZmlybUxvY2FsZSgpIHtcbiAgcmV0dXJuIHJ1bnRpbWVMb2NhbGU7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuZGVzdHJveUZucyA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY0RpYWxvZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLWRpYWxvZ1wiKSk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2FkZEV2ZW50TGlzdGVuZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9Eb20vYWRkRXZlbnRMaXN0ZW5lclwiKSk7XG5cbnZhciBfbG9jYWxlID0gcmVxdWlyZShcIi4vbG9jYWxlXCIpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxudmFyIF9idXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9idXR0b25cIikpO1xuXG52YXIgX0xvY2FsZVJlY2VpdmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgbW91c2VQb3NpdGlvbjtcbnZhciBkZXN0cm95Rm5zID0gW107IC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTU3OTVcblxuZXhwb3J0cy5kZXN0cm95Rm5zID0gZGVzdHJveUZucztcblxudmFyIGdldENsaWNrUG9zaXRpb24gPSBmdW5jdGlvbiBnZXRDbGlja1Bvc2l0aW9uKGUpIHtcbiAgbW91c2VQb3NpdGlvbiA9IHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbiAgfTsgLy8gMTAwbXMg5YaF5Y+R55Sf6L+H54K55Ye75LqL5Lu277yM5YiZ5LuO54K55Ye75L2N572u5Yqo55S75bGV56S6XG4gIC8vIOWQpuWImeebtOaOpSB6b29tIOWxleekulxuICAvLyDov5nmoLflj6/ku6XlhbzlrrnpnZ7ngrnlh7vmlrnlvI/lsZXlvIBcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbW91c2VQb3NpdGlvbiA9IG51bGw7XG4gIH0sIDEwMCk7XG59OyAvLyDlj6rmnInngrnlh7vkuovku7bmlK/mjIHku47pvKDmoIfkvY3nva7liqjnlLvlsZXlvIBcblxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgKDAsIF9hZGRFdmVudExpc3RlbmVyW1wiZGVmYXVsdFwiXSkoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnY2xpY2snLCBnZXRDbGlja1Bvc2l0aW9uKTtcbn1cblxudmFyIE1vZGFsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNb2RhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWwoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1vZGFsKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgIF90aGlzLmhhbmRsZUNhbmNlbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25DYW5jZWwgPSBfdGhpcy5wcm9wcy5vbkNhbmNlbDtcblxuICAgICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICAgIG9uQ2FuY2VsKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVPayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25PayA9IF90aGlzLnByb3BzLm9uT2s7XG5cbiAgICAgIGlmIChvbk9rKSB7XG4gICAgICAgIG9uT2soZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckZvb3RlciA9IGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9rVGV4dCA9IF90aGlzJHByb3BzLm9rVGV4dCxcbiAgICAgICAgICBva1R5cGUgPSBfdGhpcyRwcm9wcy5va1R5cGUsXG4gICAgICAgICAgY2FuY2VsVGV4dCA9IF90aGlzJHByb3BzLmNhbmNlbFRleHQsXG4gICAgICAgICAgY29uZmlybUxvYWRpbmcgPSBfdGhpcyRwcm9wcy5jb25maXJtTG9hZGluZztcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2J1dHRvbltcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICAgICAgb25DbGljazogX3RoaXMuaGFuZGxlQ2FuY2VsXG4gICAgICB9LCBfdGhpcy5wcm9wcy5jYW5jZWxCdXR0b25Qcm9wcyksIGNhbmNlbFRleHQgfHwgbG9jYWxlLmNhbmNlbFRleHQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KF9idXR0b25bXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgICAgIHR5cGU6IG9rVHlwZSxcbiAgICAgICAgbG9hZGluZzogY29uZmlybUxvYWRpbmcsXG4gICAgICAgIG9uQ2xpY2s6IF90aGlzLmhhbmRsZU9rXG4gICAgICB9LCBfdGhpcy5wcm9wcy5va0J1dHRvblByb3BzKSwgb2tUZXh0IHx8IGxvY2FsZS5va1RleHQpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyTW9kYWwgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuXG4gICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgZm9vdGVyID0gX2EuZm9vdGVyLFxuICAgICAgICAgIHZpc2libGUgPSBfYS52aXNpYmxlLFxuICAgICAgICAgIHdyYXBDbGFzc05hbWUgPSBfYS53cmFwQ2xhc3NOYW1lLFxuICAgICAgICAgIGNlbnRlcmVkID0gX2EuY2VudGVyZWQsXG4gICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJmb290ZXJcIiwgXCJ2aXNpYmxlXCIsIFwid3JhcENsYXNzTmFtZVwiLCBcImNlbnRlcmVkXCJdKTtcblxuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnbW9kYWwnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIGRlZmF1bHRGb290ZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2NhbGVSZWNlaXZlcltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgY29tcG9uZW50TmFtZTogXCJNb2RhbFwiLFxuICAgICAgICBkZWZhdWx0TG9jYWxlOiAoMCwgX2xvY2FsZS5nZXRDb25maXJtTG9jYWxlKSgpXG4gICAgICB9LCBfdGhpcy5yZW5kZXJGb290ZXIpO1xuICAgICAgdmFyIGNsb3NlSWNvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNsb3NlLXhcIilcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jbG9zZS1pY29uXCIpLFxuICAgICAgICB0eXBlOiAnY2xvc2UnXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfcmNEaWFsb2dbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICB3cmFwQ2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2VudGVyZWRcIiksICEhY2VudGVyZWQpLCB3cmFwQ2xhc3NOYW1lKSxcbiAgICAgICAgZm9vdGVyOiBmb290ZXIgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRGb290ZXIgOiBmb290ZXIsXG4gICAgICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgICAgIG1vdXNlUG9zaXRpb246IG1vdXNlUG9zaXRpb24sXG4gICAgICAgIG9uQ2xvc2U6IF90aGlzLmhhbmRsZUNhbmNlbCxcbiAgICAgICAgY2xvc2VJY29uOiBjbG9zZUljb25cbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlck1vZGFsKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWw7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTW9kYWw7XG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHdpZHRoOiA1MjAsXG4gIHRyYW5zaXRpb25OYW1lOiAnem9vbScsXG4gIG1hc2tUcmFuc2l0aW9uTmFtZTogJ2ZhZGUnLFxuICBjb25maXJtTG9hZGluZzogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBva1R5cGU6ICdwcmltYXJ5J1xufTtcbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbk9rOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuICBva1RleHQ6IFByb3BUeXBlcy5ub2RlLFxuICBjYW5jZWxUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgY2VudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb25maXJtTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBmb290ZXI6IFByb3BUeXBlcy5ub2RlLFxuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUmVhY3RET00gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9idXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9idXR0b25cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgQWN0aW9uQnV0dG9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBY3Rpb25CdXR0b24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFjdGlvbkJ1dHRvbihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb25CdXR0b24pO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoQWN0aW9uQnV0dG9uKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aW9uRm4gPSBfdGhpcyRwcm9wcy5hY3Rpb25GbixcbiAgICAgICAgICBjbG9zZU1vZGFsID0gX3RoaXMkcHJvcHMuY2xvc2VNb2RhbDtcblxuICAgICAgaWYgKGFjdGlvbkZuKSB7XG4gICAgICAgIHZhciByZXQ7XG5cbiAgICAgICAgaWYgKGFjdGlvbkZuLmxlbmd0aCkge1xuICAgICAgICAgIHJldCA9IGFjdGlvbkZuKGNsb3NlTW9kYWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldCA9IGFjdGlvbkZuKCk7XG5cbiAgICAgICAgICBpZiAoIXJldCkge1xuICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXQgJiYgcmV0LnRoZW4pIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBJdCdzIHVubmVjZXNzYXJ5IHRvIHNldCBsb2FkaW5nPWZhbHNlLCBmb3IgdGhlIE1vZGFsIHdpbGwgYmUgdW5tb3VudGVkIGFmdGVyIGNsb3NlLlxuICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgY2xvc2VNb2RhbC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIEVtaXQgZXJyb3Igd2hlbiBjYXRjaCBwcm9taXNlIHJlamVjdFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy82MTgzXG5cbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBY3Rpb25CdXR0b24sIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAkdGhpcy5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzMi50eXBlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIGJ1dHRvblByb3BzID0gX3RoaXMkcHJvcHMyLmJ1dHRvblByb3BzO1xuICAgICAgdmFyIGxvYWRpbmcgPSB0aGlzLnN0YXRlLmxvYWRpbmc7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfYnV0dG9uW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmdcbiAgICAgIH0sIGJ1dHRvblByb3BzKSwgY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBY3Rpb25CdXR0b247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQWN0aW9uQnV0dG9uOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjb25maXJtO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUmVhY3RET00gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfaWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2ljb25cIikpO1xuXG52YXIgX01vZGFsID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vTW9kYWxcIikpO1xuXG52YXIgX0FjdGlvbkJ1dHRvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQWN0aW9uQnV0dG9uXCIpKTtcblxudmFyIF9sb2NhbGUgPSByZXF1aXJlKFwiLi9sb2NhbGVcIik7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhcm5pbmdcIikpO1xuXG52YXIgX3RoaXMgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIElTX1JFQUNUXzE2ID0gISFSZWFjdERPTS5jcmVhdGVQb3J0YWw7XG5cbnZhciBDb25maXJtRGlhbG9nID0gZnVuY3Rpb24gQ29uZmlybURpYWxvZyhwcm9wcykge1xuICB2YXIgb25DYW5jZWwgPSBwcm9wcy5vbkNhbmNlbCxcbiAgICAgIG9uT2sgPSBwcm9wcy5vbk9rLFxuICAgICAgY2xvc2UgPSBwcm9wcy5jbG9zZSxcbiAgICAgIHpJbmRleCA9IHByb3BzLnpJbmRleCxcbiAgICAgIGFmdGVyQ2xvc2UgPSBwcm9wcy5hZnRlckNsb3NlLFxuICAgICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICBrZXlib2FyZCA9IHByb3BzLmtleWJvYXJkLFxuICAgICAgY2VudGVyZWQgPSBwcm9wcy5jZW50ZXJlZCxcbiAgICAgIGdldENvbnRhaW5lciA9IHByb3BzLmdldENvbnRhaW5lcixcbiAgICAgIG1hc2tTdHlsZSA9IHByb3BzLm1hc2tTdHlsZSxcbiAgICAgIG9rQnV0dG9uUHJvcHMgPSBwcm9wcy5va0J1dHRvblByb3BzLFxuICAgICAgY2FuY2VsQnV0dG9uUHJvcHMgPSBwcm9wcy5jYW5jZWxCdXR0b25Qcm9wcyxcbiAgICAgIF9wcm9wcyRpY29uVHlwZSA9IHByb3BzLmljb25UeXBlLFxuICAgICAgaWNvblR5cGUgPSBfcHJvcHMkaWNvblR5cGUgPT09IHZvaWQgMCA/ICdxdWVzdGlvbi1jaXJjbGUnIDogX3Byb3BzJGljb25UeXBlO1xuICAoMCwgX3dhcm5pbmdbXCJkZWZhdWx0XCJdKSghKCdpY29uVHlwZScgaW4gcHJvcHMpLCAnTW9kYWwnLCBcIlRoZSBwcm9wZXJ0eSAnaWNvblR5cGUnIGlzIGRlcHJlY2F0ZWQuIFVzZSB0aGUgcHJvcGVydHkgJ2ljb24nIGluc3RlYWQuXCIpOyAvLyDmlK/mjIHkvKDlhaV7IGljb246IG51bGwgfeadpemakOiXj2BNb2RhbC5jb25maXJtYOm7mOiupOeahEljb25cblxuICB2YXIgaWNvbiA9IHByb3BzLmljb24gPT09IHVuZGVmaW5lZCA/IGljb25UeXBlIDogcHJvcHMuaWNvbjtcbiAgdmFyIG9rVHlwZSA9IHByb3BzLm9rVHlwZSB8fCAncHJpbWFyeSc7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMgfHwgJ2FudC1tb2RhbCc7XG4gIHZhciBjb250ZW50UHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb25maXJtXCIpOyAvLyDpu5jorqTkuLogdHJ1Ze+8jOS/neaMgeWQkeS4i+WFvOWuuVxuXG4gIHZhciBva0NhbmNlbCA9ICdva0NhbmNlbCcgaW4gcHJvcHMgPyBwcm9wcy5va0NhbmNlbCA6IHRydWU7XG4gIHZhciB3aWR0aCA9IHByb3BzLndpZHRoIHx8IDQxNjtcbiAgdmFyIHN0eWxlID0gcHJvcHMuc3R5bGUgfHwge307XG4gIHZhciBtYXNrID0gcHJvcHMubWFzayA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHByb3BzLm1hc2s7IC8vIOm7mOiupOS4uiBmYWxzZe+8jOS/neaMgeaXp+eJiOm7mOiupOihjOS4ulxuXG4gIHZhciBtYXNrQ2xvc2FibGUgPSBwcm9wcy5tYXNrQ2xvc2FibGUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogcHJvcHMubWFza0Nsb3NhYmxlO1xuICB2YXIgcnVudGltZUxvY2FsZSA9ICgwLCBfbG9jYWxlLmdldENvbmZpcm1Mb2NhbGUpKCk7XG4gIHZhciBva1RleHQgPSBwcm9wcy5va1RleHQgfHwgKG9rQ2FuY2VsID8gcnVudGltZUxvY2FsZS5va1RleHQgOiBydW50aW1lTG9jYWxlLmp1c3RPa1RleHQpO1xuICB2YXIgY2FuY2VsVGV4dCA9IHByb3BzLmNhbmNlbFRleHQgfHwgcnVudGltZUxvY2FsZS5jYW5jZWxUZXh0O1xuICB2YXIgYXV0b0ZvY3VzQnV0dG9uID0gcHJvcHMuYXV0b0ZvY3VzQnV0dG9uID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5hdXRvRm9jdXNCdXR0b24gfHwgJ29rJztcbiAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWUgfHwgJ3pvb20nO1xuICB2YXIgbWFza1RyYW5zaXRpb25OYW1lID0gcHJvcHMubWFza1RyYW5zaXRpb25OYW1lIHx8ICdmYWRlJztcbiAgdmFyIGNsYXNzU3RyaW5nID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY29udGVudFByZWZpeENscywgXCJcIi5jb25jYXQoY29udGVudFByZWZpeENscywgXCItXCIpLmNvbmNhdChwcm9wcy50eXBlKSwgcHJvcHMuY2xhc3NOYW1lKTtcbiAgdmFyIGNhbmNlbEJ1dHRvbiA9IG9rQ2FuY2VsICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0FjdGlvbkJ1dHRvbltcImRlZmF1bHRcIl0sIHtcbiAgICBhY3Rpb25Gbjogb25DYW5jZWwsXG4gICAgY2xvc2VNb2RhbDogY2xvc2UsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXNCdXR0b24gPT09ICdjYW5jZWwnLFxuICAgIGJ1dHRvblByb3BzOiBjYW5jZWxCdXR0b25Qcm9wc1xuICB9LCBjYW5jZWxUZXh0KTtcbiAgdmFyIGljb25Ob2RlID0gdHlwZW9mIGljb24gPT09ICdzdHJpbmcnID8gUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICB0eXBlOiBpY29uXG4gIH0pIDogaWNvbjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX01vZGFsW1wiZGVmYXVsdFwiXSwge1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGNsYXNzTmFtZTogY2xhc3NTdHJpbmcsXG4gICAgd3JhcENsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChjb250ZW50UHJlZml4Q2xzLCBcIi1jZW50ZXJlZFwiKSwgISFwcm9wcy5jZW50ZXJlZCkpLFxuICAgIG9uQ2FuY2VsOiBjbG9zZS5iaW5kKF90aGlzLCB7XG4gICAgICB0cmlnZ2VyQ2FuY2VsOiB0cnVlXG4gICAgfSksXG4gICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICB0aXRsZTogXCJcIixcbiAgICB0cmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgZm9vdGVyOiBcIlwiLFxuICAgIG1hc2tUcmFuc2l0aW9uTmFtZTogbWFza1RyYW5zaXRpb25OYW1lLFxuICAgIG1hc2s6IG1hc2ssXG4gICAgbWFza0Nsb3NhYmxlOiBtYXNrQ2xvc2FibGUsXG4gICAgbWFza1N0eWxlOiBtYXNrU3R5bGUsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICB6SW5kZXg6IHpJbmRleCxcbiAgICBhZnRlckNsb3NlOiBhZnRlckNsb3NlLFxuICAgIGtleWJvYXJkOiBrZXlib2FyZCxcbiAgICBjZW50ZXJlZDogY2VudGVyZWQsXG4gICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXJcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb250ZW50UHJlZml4Q2xzLCBcIi1ib2R5LXdyYXBwZXJcIilcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb250ZW50UHJlZml4Q2xzLCBcIi1ib2R5XCIpXG4gIH0sIGljb25Ob2RlLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb250ZW50UHJlZml4Q2xzLCBcIi10aXRsZVwiKVxuICB9LCBwcm9wcy50aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29udGVudFByZWZpeENscywgXCItY29udGVudFwiKVxuICB9LCBwcm9wcy5jb250ZW50KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29udGVudFByZWZpeENscywgXCItYnRuc1wiKVxuICB9LCBjYW5jZWxCdXR0b24sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0FjdGlvbkJ1dHRvbltcImRlZmF1bHRcIl0sIHtcbiAgICB0eXBlOiBva1R5cGUsXG4gICAgYWN0aW9uRm46IG9uT2ssXG4gICAgY2xvc2VNb2RhbDogY2xvc2UsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXNCdXR0b24gPT09ICdvaycsXG4gICAgYnV0dG9uUHJvcHM6IG9rQnV0dG9uUHJvcHNcbiAgfSwgb2tUZXh0KSkpKTtcbn07XG5cbmZ1bmN0aW9uIGNvbmZpcm0oY29uZmlnKSB7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIHZhciBjdXJyZW50Q29uZmlnID0gX2V4dGVuZHMoe30sIGNvbmZpZywge1xuICAgIGNsb3NlOiBjbG9zZSxcbiAgICB2aXNpYmxlOiB0cnVlXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBjdXJyZW50Q29uZmlnID0gX2V4dGVuZHMoe30sIGN1cnJlbnRDb25maWcsIHtcbiAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgYWZ0ZXJDbG9zZTogZGVzdHJveS5iaW5kLmFwcGx5KGRlc3Ryb3ksIFt0aGlzXS5jb25jYXQoYXJncykpXG4gICAgfSk7XG5cbiAgICBpZiAoSVNfUkVBQ1RfMTYpIHtcbiAgICAgIHJlbmRlcihjdXJyZW50Q29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdHJveS5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShuZXdDb25maWcpIHtcbiAgICBjdXJyZW50Q29uZmlnID0gX2V4dGVuZHMoe30sIGN1cnJlbnRDb25maWcsIG5ld0NvbmZpZyk7XG4gICAgcmVuZGVyKGN1cnJlbnRDb25maWcpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB2YXIgdW5tb3VudFJlc3VsdCA9IFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZGl2KTtcblxuICAgIGlmICh1bm1vdW50UmVzdWx0ICYmIGRpdi5wYXJlbnROb2RlKSB7XG4gICAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciB0cmlnZ2VyQ2FuY2VsID0gYXJncy5zb21lKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcmV0dXJuIHBhcmFtICYmIHBhcmFtLnRyaWdnZXJDYW5jZWw7XG4gICAgfSk7XG5cbiAgICBpZiAoY29uZmlnLm9uQ2FuY2VsICYmIHRyaWdnZXJDYW5jZWwpIHtcbiAgICAgIGNvbmZpZy5vbkNhbmNlbC5hcHBseShjb25maWcsIGFyZ3MpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX01vZGFsLmRlc3Ryb3lGbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBmbiA9IF9Nb2RhbC5kZXN0cm95Rm5zW2ldO1xuXG4gICAgICBpZiAoZm4gPT09IGNsb3NlKSB7XG4gICAgICAgIF9Nb2RhbC5kZXN0cm95Rm5zLnNwbGljZShpLCAxKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChDb25maXJtRGlhbG9nLCBwcm9wcyksIGRpdik7XG4gIH1cblxuICByZW5kZXIoY3VycmVudENvbmZpZyk7XG5cbiAgX01vZGFsLmRlc3Ryb3lGbnMucHVzaChjbG9zZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95OiBjbG9zZSxcbiAgICB1cGRhdGU6IHVwZGF0ZVxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfTW9kYWwgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9Nb2RhbFwiKSk7XG5cbnZhciBfY29uZmlybSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29uZmlybVwiKSk7XG5cbnZhciBfaWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2ljb25cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbl9Nb2RhbFtcImRlZmF1bHRcIl0uaW5mbyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICB2YXIgY29uZmlnID0gX2V4dGVuZHMoe1xuICAgIHR5cGU6ICdpbmZvJyxcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgdHlwZTogXCJpbmZvLWNpcmNsZVwiXG4gICAgfSksXG4gICAgb2tDYW5jZWw6IGZhbHNlXG4gIH0sIHByb3BzKTtcblxuICByZXR1cm4gKDAsIF9jb25maXJtW1wiZGVmYXVsdFwiXSkoY29uZmlnKTtcbn07XG5cbl9Nb2RhbFtcImRlZmF1bHRcIl0uc3VjY2VzcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICB2YXIgY29uZmlnID0gX2V4dGVuZHMoe1xuICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgdHlwZTogXCJjaGVjay1jaXJjbGVcIlxuICAgIH0pLFxuICAgIG9rQ2FuY2VsOiBmYWxzZVxuICB9LCBwcm9wcyk7XG5cbiAgcmV0dXJuICgwLCBfY29uZmlybVtcImRlZmF1bHRcIl0pKGNvbmZpZyk7XG59O1xuXG5fTW9kYWxbXCJkZWZhdWx0XCJdLmVycm9yID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7XG4gICAgdHlwZTogJ2Vycm9yJyxcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgdHlwZTogXCJjbG9zZS1jaXJjbGVcIlxuICAgIH0pLFxuICAgIG9rQ2FuY2VsOiBmYWxzZVxuICB9LCBwcm9wcyk7XG5cbiAgcmV0dXJuICgwLCBfY29uZmlybVtcImRlZmF1bHRcIl0pKGNvbmZpZyk7XG59O1xuXG5fTW9kYWxbXCJkZWZhdWx0XCJdLndhcm5pbmcgPSBfTW9kYWxbXCJkZWZhdWx0XCJdLndhcm4gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgdmFyIGNvbmZpZyA9IF9leHRlbmRzKHtcbiAgICB0eXBlOiAnd2FybmluZycsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgIHR5cGU6IFwiZXhjbGFtYXRpb24tY2lyY2xlXCJcbiAgICB9KSxcbiAgICBva0NhbmNlbDogZmFsc2VcbiAgfSwgcHJvcHMpO1xuXG4gIHJldHVybiAoMCwgX2NvbmZpcm1bXCJkZWZhdWx0XCJdKShjb25maWcpO1xufTtcblxuX01vZGFsW1wiZGVmYXVsdFwiXS5jb25maXJtID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7XG4gICAgdHlwZTogJ2NvbmZpcm0nLFxuICAgIG9rQ2FuY2VsOiB0cnVlXG4gIH0sIHByb3BzKTtcblxuICByZXR1cm4gKDAsIF9jb25maXJtW1wiZGVmYXVsdFwiXSkoY29uZmlnKTtcbn07XG5cbl9Nb2RhbFtcImRlZmF1bHRcIl0uZGVzdHJveUFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgd2hpbGUgKF9Nb2RhbC5kZXN0cm95Rm5zLmxlbmd0aCkge1xuICAgIHZhciBjbG9zZSA9IF9Nb2RhbC5kZXN0cm95Rm5zLnBvcCgpO1xuXG4gICAgaWYgKGNsb3NlKSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIF9kZWZhdWx0ID0gX01vZGFsW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi93aXRoVGhlbWUnXG5pbXBvcnQgeyBCdXR0b25Qcm9wc1BULCBTdHJpbmdPck5vZGVQVCwgU3RyaW5nT3JOdW1iZXJQVCB9IGZyb20gJy4uL3Byb3B0eXBlcydcblxuY29uc3QgQ29uZmlybU1vZGFsID0gd2l0aFRoZW1lKHByb3BzID0+IDxNb2RhbCB7Li4ucHJvcHN9IC8+KVxuXG5Db25maXJtTW9kYWwucHJvcFR5cGVzID0ge1xuICBhZnRlckNsb3NlOiBQVC5mdW5jLFxuICBib2R5U3R5bGU6IFBULm9iamVjdCxcbiAgY2FuY2VsVGV4dDogU3RyaW5nT3JOb2RlUFQsXG4gIGNlbnRlcmVkOiBQVC5ib29sLFxuICBjbG9zYWJsZTogUFQuYm9vbCxcbiAgY29uZmlybUxvYWRpbmc6IFBULmJvb2wsXG4gIGRlc3Ryb3lPbkNsb3NlOiBQVC5ib29sLFxuICBmb290ZXI6IFN0cmluZ09yTm9kZVBULFxuICBmb3JjZVJlbmRlcjogUFQuYm9vbCxcbiAgZ2V0Q29udGFpbmVyOiBQVC5lbGVtZW50LFxuICBtYXNrOiBQVC5ib29sLFxuICBtYXNrQ2xvc2FibGU6IFBULmJvb2wsXG4gIG1hc2tTdHlsZTogUFQub2JqZWN0LFxuICBva1RleHQ6IFN0cmluZ09yTm9kZVBULFxuICBva1R5cGU6IFBULnN0cmluZyxcbiAgb2tCdXR0b25Qcm9wczogQnV0dG9uUHJvcHNQVCxcbiAgY2FuY2VsQnV0dG9uUHJvcHM6IEJ1dHRvblByb3BzUFQsXG4gIHN0eWxlOiBQVC5vYmplY3QsXG4gIHRpdGxlOiBTdHJpbmdPck5vZGVQVCxcbiAgdmlzaWJsZTogUFQuYm9vbCxcbiAgd2lkdGg6IFN0cmluZ09yTnVtYmVyUFQsXG4gIHdyYXBDbGFzc05hbWU6IFBULnN0cmluZyxcbiAgekluZGV4OiBQVC5udW1iZXIsXG4gIG9uQ2FuY2VsOiBQVC5mdW5jLFxuICBvbk9rOiBQVC5mdW5jXG59XG5cbkNvbmZpcm1Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuICBjZW50ZXJlZDogdHJ1ZSxcbiAgY2xvc2FibGU6IHRydWUsXG4gIGRlc3Ryb3lPbkNsb3NlOiB0cnVlLFxuICBtYXNrOiB0cnVlLFxuICBtYXNrQ2xvc2FibGU6IHRydWUsXG4gIG9rVGV4dDogJ09rJ1xufVxuXG5Db25maXJtTW9kYWwuZGlzcGxheU5hbWUgPSAnQ29uZmlybU1vZGFsJ1xuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtTW9kYWxcbiJdLCJuYW1lcyI6WyJSZWFjdC5jcmVhdGVFbGVtZW50IiwiUmVhY3QuQ29tcG9uZW50IiwiUmVhY3RET00uZmluZERPTU5vZGUiLCJfYWRkRG9tRXZlbnRMaXN0ZW5lciIsIl9yZWFjdERvbSIsInJlcXVpcmUkJDAiLCJyZXF1aXJlJCQxIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwicmVxdWlyZSQkNSIsInJlcXVpcmUkJDYiLCJfbG9jYWxlIiwiQ29uZmlybU1vZGFsIiwid2l0aFRoZW1lIiwicHJvcHMiLCJSZWFjdCIsInByb3BUeXBlcyIsImFmdGVyQ2xvc2UiLCJQVCIsImZ1bmMiLCJib2R5U3R5bGUiLCJvYmplY3QiLCJjYW5jZWxUZXh0IiwiU3RyaW5nT3JOb2RlUFQiLCJjZW50ZXJlZCIsImJvb2wiLCJjbG9zYWJsZSIsImNvbmZpcm1Mb2FkaW5nIiwiZGVzdHJveU9uQ2xvc2UiLCJmb290ZXIiLCJmb3JjZVJlbmRlciIsImdldENvbnRhaW5lciIsImVsZW1lbnQiLCJtYXNrIiwibWFza0Nsb3NhYmxlIiwibWFza1N0eWxlIiwib2tUZXh0Iiwib2tUeXBlIiwic3RyaW5nIiwib2tCdXR0b25Qcm9wcyIsIkJ1dHRvblByb3BzUFQiLCJjYW5jZWxCdXR0b25Qcm9wcyIsInN0eWxlIiwidGl0bGUiLCJ2aXNpYmxlIiwid2lkdGgiLCJTdHJpbmdPck51bWJlclBUIiwid3JhcENsYXNzTmFtZSIsInpJbmRleCIsIm51bWJlciIsIm9uQ2FuY2VsIiwib25PayIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFJLGFBQWEsR0FBRyxVQUFVLGdCQUFnQixFQUFFO0lBQzVDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7SUFFM0MsU0FBUyxhQUFhLEdBQUc7UUFDckIsZUFBZSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzs7UUFFckMsT0FBTywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQ3BGOztJQUVELGFBQWEsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEdBQUcsU0FBUyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUU7UUFDdEYsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztLQUM3RCxDQUFDOztJQUVGLGFBQWEsQ0FBQyxTQUFTLENBQUMs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TUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxFQUFFLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFOztBQUUzZCxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFLEVBQUUsT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEdBQUcsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxNQUFNLElBQUksR0FBRyxLQUFLLE1BQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTs7QUFFL1YsU0FBUyxlQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFOztBQUVqTixTQUFTLFFBQVEsR0FBRyxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUU7O0FBRTdULFNBQVMsZUFBZSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxZQUFZLFdBQVcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7QUFFekosU0FBUyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7QUFFN1QsU0FBUyxZQUFZLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxXQUFXLENBQUMsRUFBRTs7QUFFdk4sU0FBUywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7O0FBRWpMLFNBQVMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksY0FBYyxDQUFDLDJEQUEyRCxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7O0FBRXRLLFNBQVMsZUFBZSxDQUFDLENBQUMsRUFBRSxFQUFFLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLEdBQUcsU0FBUyxlQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs7QUFFN00sU0FBUyxTQUFTLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUUsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUUsZUFBZSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFOztBQUVqWSxTQUFTLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLElBQUksU0FBUyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxlQUFlLENBQUMsQ0FBQyxF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QUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFOztBQUU3VCxTQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsWUFBWSxXQUFXLENBQUMsRUFBRSxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxFQUFFLEVBQUU7O0FBRXpKLFNBQVMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLElBQUksVUFBVSxFQUFFLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFB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QUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUU7O0FBRTNkLFNBQVMsUUFBUSxHQUFHLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRTs7QUFFN1QsU0FBUyxlQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVB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RSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRTs7QUFFM2QsU0FBUyxRQUFRLEdBQUcsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFOztBQUU3VCxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxHQUFHLFVBQVUsS0FBSyxFQUFFO0VBQ3hDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtNQUMxQyxJQUFJLEVBQUUsYUFBYTtLQUNwQixDQUFDO0lBQ0YsUUFBUSxFQUFFLEtBQUs7R0FDaEIsRUFBRSxLQUFLLENBQUMsQ0FBQzs7RUFFVixPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDekMsQ0FBQzs7QUFFRixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLFVBQVUsS0FBSyxFQUFFO0VBQzNDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUNwQixJQUFJLEVBQUUsU0FBUztJQUNmLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtNQUMxQyxJQUFJLEVBQUUsY0FBYztLQUNyQixDQUFDO0lBQ0YsUUFBUSxFQUFFLEtBQUs7R0FDaEIsRUFBRSxLQUFLLENBQUMsQ0FBQzs7RUFFVixPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDekMsQ0FBQzs7QUFFRixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsS0FBSyxFQUFFO0VBQ3pDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQztJQUNwQixJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtNQUMxQyxJQUFJLEVBQUUsY0FBYztLQUNyQixDQUFDO0lBQ0YsUUFBUSxFQUFFLEtBQUs7R0FDaEIsRUFBRSxLQUFLLENBQUMsQ0FBQzs7RUFFVixPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDekMsQ0FBQzs7QUFFRixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxLQUFLLEVBQUU7RUFDcEUsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ3BCLElBQUksRUFBRSxTQUFTO0lBQ2YsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO01BQzFDLElBQUksRUFBRSxvQkFBb0I7S0FDM0IsQ0FBQztJQUNGLFFBQVEsRUFBRSxLQUFLO0dBQ2hCLEVBQUUsS0FBSyxDQUFDLENBQUM7O0VBRVYsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ3pDLENBQUM7O0FBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxVQUFVLEtBQUssRUFBRTtFQUMzQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDcEIsSUFBSSxFQUFFLFNBQVM7SUFDZixRQUFRLEVBQUUsSUFBSTtHQUNmLEVBQUUsS0FBSyxDQUFDLENBQUM7O0VBRVYsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ3pDLENBQUM7O0FBRUYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxZQUFZO0VBQ3pDLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7SUFDL0IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7SUFFcEMsSUFBSSxLQUFLLEVBQUU7TUFDVCxLQUFLLEVBQUUsQ0FBQztLQUNUO0dBQ0Y7Q0FDRixDQUFDOztBQUVGLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUTs7Ozs7QUNuRjdCLElBQU1LLFlBQVksR0FBR0MsU0FBUyxDQUFDLFVBQUFDLEtBQUs7U0FBSUMscUNBQVdELEtBQVgsQ0FBSjtDQUFOLENBQTlCO0FBRUFGLFlBQVksQ0FBQ0ksU0FBYixHQUF5QjtFQUN2QkMsVUFBVSxFQUFFQyxrQkFBRSxDQUFDQyxJQURRO0VBRXZCQyxTQUFTLEVBQUVGLGtCQUFFLENBQUNHLE1BRlM7RUFHdkJDLFVBQVUsRUFBRUMsY0FIVztFQUl2QkMsUUFBUSxFQUFFTixrQkFBRSxDQUFDTyxJQUpVO0VBS3ZCQyxRQUFRLEVBQUVSLGtCQUFFLENBQUNPLElBTFU7RUFNdkJFLGNBQWMsRUFBRVQsa0JBQUUsQ0FBQ08sSUFOSTtFQU92QkcsY0FBYyxFQUFFVixrQkFBRSxDQUFDTyxJQVBJO0VBUXZCSSxNQUFNLEVBQUVOLGNBUmU7RUFTdkJPLFdBQVcsRUFBRVosa0JBQUUsQ0FBQ08sSUFUTztFQVV2Qk0sWUFBWSxFQUFFYixrQkFBRSxDQUFDYyxPQVZNO0VBV3ZCQyxJQUFJLEVBQUVmLGtCQUFFLENBQUNPLElBWGM7RUFZdkJTLFlBQVksRUFBRWhCLGtCQUFFLENBQUNPLElBWk07RUFhdkJVLFNBQVMsRUFBRWpCLGtCQUFFLENBQUNHLE1BYlM7RUFjdkJlLE1BQU0sRUFBRWIsY0FkZTtFQWV2QmMsTUFBTSxFQUFFbkIsa0JBQUUsQ0FBQ29CLE1BZlk7RUFnQnZCQyxhQUFhLEVBQUVDLGFBaEJRO0VBaUJ2QkMsaUJBQWlCLEVBQUVELGFBakJJO0VBa0J2QkUsS0FBSyxFQUFFeEIsa0JBQUUsQ0FBQ0csTUFsQmE7RUFtQnZCc0IsS0FBSyxFQUFFcEIsY0FuQmdCO0VBb0J2QnFCLE9BQU8sRUFBRTFCLGtCQUFFLENBQUNPLElBcEJXO0VBcUJ2Qm9CLEtBQUssRUFBRUMsZ0JBckJnQjtFQXNCdkJDLGFBQWEsRUFBRTdCLGtCQUFFLENBQUNvQixNQXRCSztFQXVCdkJVLE1BQU0sRUFBRTlCLGtCQUFFLENBQUMrQixNQXZCWTtFQXdCdkJDLFFBQVEsRUFBRWhDLGtCQUFFLENBQUNDLElBeEJVO0VBeUJ2QmdDLElBQUksRUFBRWpDLGtCQUFFLENBQUNDO0NBekJYO0FBNEJBUCxZQUFZLENBQUN3QyxZQUFiLEdBQTRCO0VBQzFCOUIsVUFBVSxFQUFFLFFBRGM7RUFFMUJFLFFBQVEsRUFBRSxJQUZnQjtFQUcxQkUsUUFBUSxFQUFFLElBSGdCO0VBSTFCRSxjQUFjLEVBQUUsSUFKVTtFQUsxQkssSUFBSSxFQUFFLElBTG9CO0VBTTFCQyxZQUFZLEVBQUUsSUFOWTtFQU8xQkUsTUFBTSxFQUFFO0NBUFY7QUFVQXhCLFlBQVksQ0FBQ3lDLFdBQWIsR0FBMkIsY0FBM0I7Ozs7In0=
