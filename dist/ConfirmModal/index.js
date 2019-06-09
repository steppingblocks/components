import { c as createCommonjsModule, u as unwrapExports, f as require$$0, b as require$$2, g as require$$7, a as require$$1$1, d as require$$1$2, _ as _configProvider } from '../chunk-0afe7056.js';
import { createElement, Component } from 'react';
import 'prop-types';
import '../chunk-987af3b3.js';
import '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
import '../chunk-4e9cb9ad.js';
import { r as require$$4$2 } from '../chunk-22037d1a.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _extends, d as _createClass, r as require$$4$1, e as require$$6 } from '../chunk-378fb839.js';
import * as ReactDOM from 'react-dom';
import require$$1, { findDOMNode } from 'react-dom';
import { r as require$$4, _ as _assign } from '../chunk-64d794c3.js';
import '../chunk-8820e6e0.js';
import '../chunk-462365a0.js';

/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

function contains(root, n) {
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

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
            return createElement(require$$4, { key: "dialog", showProp: "visible", onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, props.visible || !props.destroyOnClose ? dialogElement : null);
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
                    maskElement = createElement(require$$4, { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
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

var ContainerRender = function (_React$Component) {
  _inherits(ContainerRender, _React$Component);

  function ContainerRender() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ContainerRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContainerRender.__proto__ || Object.getPrototypeOf(ContainerRender)).call.apply(_ref, [this].concat(args))), _this), _this.removeContainer = function () {
      if (_this.container) {
        require$$1.unmountComponentAtNode(_this.container);
        _this.container.parentNode.removeChild(_this.container);
        _this.container = null;
      }
    }, _this.renderComponent = function (props, ready) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          getComponent = _this$props.getComponent,
          forceRender = _this$props.forceRender,
          getContainer = _this$props.getContainer,
          parent = _this$props.parent;

      if (visible || parent._component || forceRender) {
        if (!_this.container) {
          _this.container = getContainer();
        }
        require$$1.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
          if (ready) {
            ready.call(this);
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContainerRender, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.autoDestroy) {
        this.removeContainer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        renderComponent: this.renderComponent,
        removeContainer: this.removeContainer
      });
    }
  }]);

  return ContainerRender;
}(require$$1$1.Component);

ContainerRender.propTypes = {
  autoMount: require$$1$2.bool,
  autoDestroy: require$$1$2.bool,
  visible: require$$1$2.bool,
  forceRender: require$$1$2.bool,
  parent: require$$1$2.any,
  getComponent: require$$1$2.func.isRequired,
  getContainer: require$$1$2.func.isRequired,
  children: require$$1$2.func.isRequired
};
ContainerRender.defaultProps = {
  autoMount: true,
  autoDestroy: true,
  forceRender: false
};

var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createContainer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var didUpdate = this.props.didUpdate;

      if (didUpdate) {
        didUpdate(prevProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeContainer();
    }
  }, {
    key: 'createContainer',
    value: function createContainer() {
      this._container = this.props.getContainer();
      this.forceUpdate();
    }
  }, {
    key: 'removeContainer',
    value: function removeContainer() {
      if (this._container) {
        this._container.parentNode.removeChild(this._container);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this._container) {
        return require$$1.createPortal(this.props.children, this._container);
      }
      return null;
    }
  }]);

  return Portal;
}(require$$1$1.Component);

Portal.propTypes = {
  getContainer: require$$1$2.func.isRequired,
  children: require$$1$2.node.isRequired,
  didUpdate: require$$1$2.func
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

var EventBaseObject_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },

  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },

  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },

  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports["default"];
});

unwrapExports(EventBaseObject_1);

var EventObject = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



var _EventBaseObject2 = _interopRequireDefault(EventBaseObject_1);



var _objectAssign2 = _interopRequireDefault(_assign);

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = undefined;
    var deltaY = undefined;
    var delta = undefined;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = undefined;
    var doc = undefined;
    var body = undefined;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2['default'].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = undefined;
  var l = undefined;
  var prop = undefined;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },

  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports['default'] = DomEventObject;
module.exports = exports['default'];
});

unwrapExports(EventObject);

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = addEventListener;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



var _EventObject2 = _interopRequireDefault(EventObject);

function addEventListener(target, eventType, callback, option) {
  function wrapCallback(e) {
    var ne = new _EventObject2['default'](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    var _ret = (function () {
      var useCapture = false;
      if (typeof option === 'object') {
        useCapture = option.capture || false;
      } else if (typeof option === 'boolean') {
        useCapture = option;
      }

      target.addEventListener(eventType, wrapCallback, option || false);

      return {
        v: {
          remove: function remove() {
            target.removeEventListener(eventType, wrapCallback, useCapture);
          }
        }
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}

module.exports = exports['default'];
});

unwrapExports(lib);

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

var React = _interopRequireWildcard(require$$1$1);

var _rcDialog = _interopRequireDefault(DialogWrap);

var PropTypes = _interopRequireWildcard(require$$1$2);

var _classnames = _interopRequireDefault(require$$2);

var _addEventListener = _interopRequireDefault(addEventListener);



var _icon = _interopRequireDefault(require$$4$1);

var _button = _interopRequireDefault(require$$4$2);

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
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
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
  okType: 'primary',
  okButtonDisabled: false,
  cancelButtonDisabled: false
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
  align: PropTypes.object,
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

var React = _interopRequireWildcard(require$$1$1);

var ReactDOM = _interopRequireWildcard(require$$1);

var _button = _interopRequireDefault(require$$4$2);

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

var React = _interopRequireWildcard(require$$1$1);

var ReactDOM = _interopRequireWildcard(require$$1);

var _classnames = _interopRequireDefault(require$$2);

var _icon = _interopRequireDefault(require$$4$1);

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

var React = _interopRequireWildcard(require$$1$1);

var _Modal = _interopRequireWildcard(Modal_1);

var _confirm = _interopRequireDefault(confirm_1);

var _icon = _interopRequireDefault(require$$4$1);

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

var ConfirmModal = function ConfirmModal(props) {
  return require$$1$1.createElement(_Modal, props);
};

var index = withTheme(ConfirmModal);

export default index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0tleUNvZGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Eb20vY29udGFpbnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmMtZGlhbG9nL2VzL0xhenlSZW5kZXJCb3guanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9nZXRTY3JvbGxCYXJTaXplLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JjLWRpYWxvZy9lcy9EaWFsb2cuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Db250YWluZXJSZW5kZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Qb3J0YWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmMtZGlhbG9nL2VzL0RpYWxvZ1dyYXAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvRXZlbnRCYXNlT2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL0V2ZW50T2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvbGliL0RvbS9hZGRFdmVudExpc3RlbmVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21vZGFsL2xvY2FsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tb2RhbC9Nb2RhbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tb2RhbC9BY3Rpb25CdXR0b24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbW9kYWwvY29uZmlybS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tb2RhbC9pbmRleC5qcyIsIi4uLy4uL3NyYy9Db25maXJtTW9kYWwvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAaWdub3JlXG4gKiBzb21lIGtleS1jb2RlcyBkZWZpbml0aW9uIGFuZCB1dGlscyBmcm9tIGNsb3N1cmUtbGlicmFyeVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG52YXIgS2V5Q29kZSA9IHtcbiAgLyoqXG4gICAqIE1BQ19FTlRFUlxuICAgKi9cbiAgTUFDX0VOVEVSOiAzLFxuICAvKipcbiAgICogQkFDS1NQQUNFXG4gICAqL1xuICBCQUNLU1BBQ0U6IDgsXG4gIC8qKlxuICAgKiBUQUJcbiAgICovXG4gIFRBQjogOSxcbiAgLyoqXG4gICAqIE5VTUxPQ0sgb24gRkYvU2FmYXJpIE1hY1xuICAgKi9cbiAgTlVNX0NFTlRFUjogMTIsIC8vIE5VTUxPQ0sgb24gRkYvU2FmYXJpIE1hY1xuICAvKipcbiAgICogRU5URVJcbiAgICovXG4gIEVOVEVSOiAxMyxcbiAgLyoqXG4gICAqIFNISUZUXG4gICAqL1xuICBTSElGVDogMTYsXG4gIC8qKlxuICAgKiBDVFJMXG4gICAqL1xuICBDVFJMOiAxNyxcbiAgLyoqXG4gICAqIEFMVFxuICAgKi9cbiAgQUxUOiAxOCxcbiAgLyoqXG4gICAqIFBBVVNFXG4gICAqL1xuICBQQVVTRTogMTksXG4gIC8qKlxuICAgKiBDQVBTX0xPQ0tcbiAgICovXG4gIENBUFNfTE9DSzogMjAsXG4gIC8qKlxuICAgKiBFU0NcbiAgICovXG4gIEVTQzogMjcsXG4gIC8qKlxuICAgKiBTUEFDRVxuICAgKi9cbiAgU1BBQ0U6IDMyLFxuICAvKipcbiAgICogUEFHRV9VUFxuICAgKi9cbiAgUEFHRV9VUDogMzMsIC8vIGFsc28gTlVNX05PUlRIX0VBU1RcbiAgLyoqXG4gICAqIFBBR0VfRE9XTlxuICAgKi9cbiAgUEFHRV9ET1dOOiAzNCwgLy8gYWxzbyBOVU1fU09VVEhfRUFTVFxuICAvKipcbiAgICogRU5EXG4gICAqL1xuICBFTkQ6IDM1LCAvLyBhbHNvIE5VTV9TT1VUSF9XRVNUXG4gIC8qKlxuICAgKiBIT01FXG4gICAqL1xuICBIT01FOiAzNiwgLy8gYWxzbyBOVU1fTk9SVEhfV0VTVFxuICAvKipcbiAgICogTEVGVFxuICAgKi9cbiAgTEVGVDogMzcsIC8vIGFsc28gTlVNX1dFU1RcbiAgLyoqXG4gICAqIFVQXG4gICAqL1xuICBVUDogMzgsIC8vIGFsc28gTlVNX05PUlRIXG4gIC8qKlxuICAgKiBSSUdIVFxuICAgKi9cbiAgUklHSFQ6IDM5LCAvLyBhbHNvIE5VTV9FQVNUXG4gIC8qKlxuICAgKiBET1dOXG4gICAqL1xuICBET1dOOiA0MCwgLy8gYWxzbyBOVU1fU09VVEhcbiAgLyoqXG4gICAqIFBSSU5UX1NDUkVFTlxuICAgKi9cbiAgUFJJTlRfU0NSRUVOOiA0NCxcbiAgLyoqXG4gICAqIElOU0VSVFxuICAgKi9cbiAgSU5TRVJUOiA0NSwgLy8gYWxzbyBOVU1fSU5TRVJUXG4gIC8qKlxuICAgKiBERUxFVEVcbiAgICovXG4gIERFTEVURTogNDYsIC8vIGFsc28gTlVNX0RFTEVURVxuICAvKipcbiAgICogWkVST1xuICAgKi9cbiAgWkVSTzogNDgsXG4gIC8qKlxuICAgKiBPTkVcbiAgICovXG4gIE9ORTogNDksXG4gIC8qKlxuICAgKiBUV09cbiAgICovXG4gIFRXTzogNTAsXG4gIC8qKlxuICAgKiBUSFJFRVxuICAgKi9cbiAgVEhSRUU6IDUxLFxuICAvKipcbiAgICogRk9VUlxuICAgKi9cbiAgRk9VUjogNTIsXG4gIC8qKlxuICAgKiBGSVZFXG4gICAqL1xuICBGSVZFOiA1MyxcbiAgLyoqXG4gICAqIFNJWFxuICAgKi9cbiAgU0lYOiA1NCxcbiAgLyoqXG4gICAqIFNFVkVOXG4gICAqL1xuICBTRVZFTjogNTUsXG4gIC8qKlxuICAgKiBFSUdIVFxuICAgKi9cbiAgRUlHSFQ6IDU2LFxuICAvKipcbiAgICogTklORVxuICAgKi9cbiAgTklORTogNTcsXG4gIC8qKlxuICAgKiBRVUVTVElPTl9NQVJLXG4gICAqL1xuICBRVUVTVElPTl9NQVJLOiA2MywgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBBXG4gICAqL1xuICBBOiA2NSxcbiAgLyoqXG4gICAqIEJcbiAgICovXG4gIEI6IDY2LFxuICAvKipcbiAgICogQ1xuICAgKi9cbiAgQzogNjcsXG4gIC8qKlxuICAgKiBEXG4gICAqL1xuICBEOiA2OCxcbiAgLyoqXG4gICAqIEVcbiAgICovXG4gIEU6IDY5LFxuICAvKipcbiAgICogRlxuICAgKi9cbiAgRjogNzAsXG4gIC8qKlxuICAgKiBHXG4gICAqL1xuICBHOiA3MSxcbiAgLyoqXG4gICAqIEhcbiAgICovXG4gIEg6IDcyLFxuICAvKipcbiAgICogSVxuICAgKi9cbiAgSTogNzMsXG4gIC8qKlxuICAgKiBKXG4gICAqL1xuICBKOiA3NCxcbiAgLyoqXG4gICAqIEtcbiAgICovXG4gIEs6IDc1LFxuICAvKipcbiAgICogTFxuICAgKi9cbiAgTDogNzYsXG4gIC8qKlxuICAgKiBNXG4gICAqL1xuICBNOiA3NyxcbiAgLyoqXG4gICAqIE5cbiAgICovXG4gIE46IDc4LFxuICAvKipcbiAgICogT1xuICAgKi9cbiAgTzogNzksXG4gIC8qKlxuICAgKiBQXG4gICAqL1xuICBQOiA4MCxcbiAgLyoqXG4gICAqIFFcbiAgICovXG4gIFE6IDgxLFxuICAvKipcbiAgICogUlxuICAgKi9cbiAgUjogODIsXG4gIC8qKlxuICAgKiBTXG4gICAqL1xuICBTOiA4MyxcbiAgLyoqXG4gICAqIFRcbiAgICovXG4gIFQ6IDg0LFxuICAvKipcbiAgICogVVxuICAgKi9cbiAgVTogODUsXG4gIC8qKlxuICAgKiBWXG4gICAqL1xuICBWOiA4NixcbiAgLyoqXG4gICAqIFdcbiAgICovXG4gIFc6IDg3LFxuICAvKipcbiAgICogWFxuICAgKi9cbiAgWDogODgsXG4gIC8qKlxuICAgKiBZXG4gICAqL1xuICBZOiA4OSxcbiAgLyoqXG4gICAqIFpcbiAgICovXG4gIFo6IDkwLFxuICAvKipcbiAgICogTUVUQVxuICAgKi9cbiAgTUVUQTogOTEsIC8vIFdJTl9LRVlfTEVGVFxuICAvKipcbiAgICogV0lOX0tFWV9SSUdIVFxuICAgKi9cbiAgV0lOX0tFWV9SSUdIVDogOTIsXG4gIC8qKlxuICAgKiBDT05URVhUX01FTlVcbiAgICovXG4gIENPTlRFWFRfTUVOVTogOTMsXG4gIC8qKlxuICAgKiBOVU1fWkVST1xuICAgKi9cbiAgTlVNX1pFUk86IDk2LFxuICAvKipcbiAgICogTlVNX09ORVxuICAgKi9cbiAgTlVNX09ORTogOTcsXG4gIC8qKlxuICAgKiBOVU1fVFdPXG4gICAqL1xuICBOVU1fVFdPOiA5OCxcbiAgLyoqXG4gICAqIE5VTV9USFJFRVxuICAgKi9cbiAgTlVNX1RIUkVFOiA5OSxcbiAgLyoqXG4gICAqIE5VTV9GT1VSXG4gICAqL1xuICBOVU1fRk9VUjogMTAwLFxuICAvKipcbiAgICogTlVNX0ZJVkVcbiAgICovXG4gIE5VTV9GSVZFOiAxMDEsXG4gIC8qKlxuICAgKiBOVU1fU0lYXG4gICAqL1xuICBOVU1fU0lYOiAxMDIsXG4gIC8qKlxuICAgKiBOVU1fU0VWRU5cbiAgICovXG4gIE5VTV9TRVZFTjogMTAzLFxuICAvKipcbiAgICogTlVNX0VJR0hUXG4gICAqL1xuICBOVU1fRUlHSFQ6IDEwNCxcbiAgLyoqXG4gICAqIE5VTV9OSU5FXG4gICAqL1xuICBOVU1fTklORTogMTA1LFxuICAvKipcbiAgICogTlVNX01VTFRJUExZXG4gICAqL1xuICBOVU1fTVVMVElQTFk6IDEwNixcbiAgLyoqXG4gICAqIE5VTV9QTFVTXG4gICAqL1xuICBOVU1fUExVUzogMTA3LFxuICAvKipcbiAgICogTlVNX01JTlVTXG4gICAqL1xuICBOVU1fTUlOVVM6IDEwOSxcbiAgLyoqXG4gICAqIE5VTV9QRVJJT0RcbiAgICovXG4gIE5VTV9QRVJJT0Q6IDExMCxcbiAgLyoqXG4gICAqIE5VTV9ESVZJU0lPTlxuICAgKi9cbiAgTlVNX0RJVklTSU9OOiAxMTEsXG4gIC8qKlxuICAgKiBGMVxuICAgKi9cbiAgRjE6IDExMixcbiAgLyoqXG4gICAqIEYyXG4gICAqL1xuICBGMjogMTEzLFxuICAvKipcbiAgICogRjNcbiAgICovXG4gIEYzOiAxMTQsXG4gIC8qKlxuICAgKiBGNFxuICAgKi9cbiAgRjQ6IDExNSxcbiAgLyoqXG4gICAqIEY1XG4gICAqL1xuICBGNTogMTE2LFxuICAvKipcbiAgICogRjZcbiAgICovXG4gIEY2OiAxMTcsXG4gIC8qKlxuICAgKiBGN1xuICAgKi9cbiAgRjc6IDExOCxcbiAgLyoqXG4gICAqIEY4XG4gICAqL1xuICBGODogMTE5LFxuICAvKipcbiAgICogRjlcbiAgICovXG4gIEY5OiAxMjAsXG4gIC8qKlxuICAgKiBGMTBcbiAgICovXG4gIEYxMDogMTIxLFxuICAvKipcbiAgICogRjExXG4gICAqL1xuICBGMTE6IDEyMixcbiAgLyoqXG4gICAqIEYxMlxuICAgKi9cbiAgRjEyOiAxMjMsXG4gIC8qKlxuICAgKiBOVU1MT0NLXG4gICAqL1xuICBOVU1MT0NLOiAxNDQsXG4gIC8qKlxuICAgKiBTRU1JQ09MT05cbiAgICovXG4gIFNFTUlDT0xPTjogMTg2LCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIERBU0hcbiAgICovXG4gIERBU0g6IDE4OSwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBFUVVBTFNcbiAgICovXG4gIEVRVUFMUzogMTg3LCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIENPTU1BXG4gICAqL1xuICBDT01NQTogMTg4LCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIFBFUklPRFxuICAgKi9cbiAgUEVSSU9EOiAxOTAsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogU0xBU0hcbiAgICovXG4gIFNMQVNIOiAxOTEsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogQVBPU1RST1BIRVxuICAgKi9cbiAgQVBPU1RST1BIRTogMTkyLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIFNJTkdMRV9RVU9URVxuICAgKi9cbiAgU0lOR0xFX1FVT1RFOiAyMjIsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogT1BFTl9TUVVBUkVfQlJBQ0tFVFxuICAgKi9cbiAgT1BFTl9TUVVBUkVfQlJBQ0tFVDogMjE5LCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIEJBQ0tTTEFTSFxuICAgKi9cbiAgQkFDS1NMQVNIOiAyMjAsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogQ0xPU0VfU1FVQVJFX0JSQUNLRVRcbiAgICovXG4gIENMT1NFX1NRVUFSRV9CUkFDS0VUOiAyMjEsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogV0lOX0tFWVxuICAgKi9cbiAgV0lOX0tFWTogMjI0LFxuICAvKipcbiAgICogTUFDX0ZGX01FVEFcbiAgICovXG4gIE1BQ19GRl9NRVRBOiAyMjQsIC8vIEZpcmVmb3ggKEdlY2tvKSBmaXJlcyB0aGlzIGZvciB0aGUgbWV0YSBrZXkgaW5zdGVhZCBvZiA5MVxuICAvKipcbiAgICogV0lOX0lNRVxuICAgKi9cbiAgV0lOX0lNRTogMjI5XG59O1xuXG4vKlxuIHdoZXRoZXIgdGV4dCBhbmQgbW9kaWZpZWQga2V5IGlzIGVudGVyZWQgYXQgdGhlIHNhbWUgdGltZS5cbiAqL1xuS2V5Q29kZS5pc1RleHRNb2RpZnlpbmdLZXlFdmVudCA9IGZ1bmN0aW9uIGlzVGV4dE1vZGlmeWluZ0tleUV2ZW50KGUpIHtcbiAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XG4gIGlmIChlLmFsdEtleSAmJiAhZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fFxuICAvLyBGdW5jdGlvbiBrZXlzIGRvbid0IGdlbmVyYXRlIHRleHRcbiAga2V5Q29kZSA+PSBLZXlDb2RlLkYxICYmIGtleUNvZGUgPD0gS2V5Q29kZS5GMTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUaGUgZm9sbG93aW5nIGtleXMgYXJlIHF1aXRlIGhhcm1sZXNzLCBldmVuIGluIGNvbWJpbmF0aW9uIHdpdGhcbiAgLy8gQ1RSTCwgQUxUIG9yIFNISUZULlxuICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICBjYXNlIEtleUNvZGUuQUxUOlxuICAgIGNhc2UgS2V5Q29kZS5DQVBTX0xPQ0s6XG4gICAgY2FzZSBLZXlDb2RlLkNPTlRFWFRfTUVOVTpcbiAgICBjYXNlIEtleUNvZGUuQ1RSTDpcbiAgICBjYXNlIEtleUNvZGUuRE9XTjpcbiAgICBjYXNlIEtleUNvZGUuRU5EOlxuICAgIGNhc2UgS2V5Q29kZS5FU0M6XG4gICAgY2FzZSBLZXlDb2RlLkhPTUU6XG4gICAgY2FzZSBLZXlDb2RlLklOU0VSVDpcbiAgICBjYXNlIEtleUNvZGUuTEVGVDpcbiAgICBjYXNlIEtleUNvZGUuTUFDX0ZGX01FVEE6XG4gICAgY2FzZSBLZXlDb2RlLk1FVEE6XG4gICAgY2FzZSBLZXlDb2RlLk5VTUxPQ0s6XG4gICAgY2FzZSBLZXlDb2RlLk5VTV9DRU5URVI6XG4gICAgY2FzZSBLZXlDb2RlLlBBR0VfRE9XTjpcbiAgICBjYXNlIEtleUNvZGUuUEFHRV9VUDpcbiAgICBjYXNlIEtleUNvZGUuUEFVU0U6XG4gICAgY2FzZSBLZXlDb2RlLlBSSU5UX1NDUkVFTjpcbiAgICBjYXNlIEtleUNvZGUuUklHSFQ6XG4gICAgY2FzZSBLZXlDb2RlLlNISUZUOlxuICAgIGNhc2UgS2V5Q29kZS5VUDpcbiAgICBjYXNlIEtleUNvZGUuV0lOX0tFWTpcbiAgICBjYXNlIEtleUNvZGUuV0lOX0tFWV9SSUdIVDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbi8qXG4gd2hldGhlciBjaGFyYWN0ZXIgaXMgZW50ZXJlZC5cbiAqL1xuS2V5Q29kZS5pc0NoYXJhY3RlcktleSA9IGZ1bmN0aW9uIGlzQ2hhcmFjdGVyS2V5KGtleUNvZGUpIHtcbiAgaWYgKGtleUNvZGUgPj0gS2V5Q29kZS5aRVJPICYmIGtleUNvZGUgPD0gS2V5Q29kZS5OSU5FKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoa2V5Q29kZSA+PSBLZXlDb2RlLk5VTV9aRVJPICYmIGtleUNvZGUgPD0gS2V5Q29kZS5OVU1fTVVMVElQTFkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChrZXlDb2RlID49IEtleUNvZGUuQSAmJiBrZXlDb2RlIDw9IEtleUNvZGUuWikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gU2FmYXJpIHNlbmRzIHplcm8ga2V5IGNvZGUgZm9yIG5vbi1sYXRpbiBjaGFyYWN0ZXJzLlxuICBpZiAod2luZG93Lm5hdmlnYXRpb24udXNlckFnZW50LmluZGV4T2YoJ1dlYktpdCcpICE9PSAtMSAmJiBrZXlDb2RlID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICBjYXNlIEtleUNvZGUuU1BBQ0U6XG4gICAgY2FzZSBLZXlDb2RlLlFVRVNUSU9OX01BUks6XG4gICAgY2FzZSBLZXlDb2RlLk5VTV9QTFVTOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fTUlOVVM6XG4gICAgY2FzZSBLZXlDb2RlLk5VTV9QRVJJT0Q6XG4gICAgY2FzZSBLZXlDb2RlLk5VTV9ESVZJU0lPTjpcbiAgICBjYXNlIEtleUNvZGUuU0VNSUNPTE9OOlxuICAgIGNhc2UgS2V5Q29kZS5EQVNIOlxuICAgIGNhc2UgS2V5Q29kZS5FUVVBTFM6XG4gICAgY2FzZSBLZXlDb2RlLkNPTU1BOlxuICAgIGNhc2UgS2V5Q29kZS5QRVJJT0Q6XG4gICAgY2FzZSBLZXlDb2RlLlNMQVNIOlxuICAgIGNhc2UgS2V5Q29kZS5BUE9TVFJPUEhFOlxuICAgIGNhc2UgS2V5Q29kZS5TSU5HTEVfUVVPVEU6XG4gICAgY2FzZSBLZXlDb2RlLk9QRU5fU1FVQVJFX0JSQUNLRVQ6XG4gICAgY2FzZSBLZXlDb2RlLkJBQ0tTTEFTSDpcbiAgICBjYXNlIEtleUNvZGUuQ0xPU0VfU1FVQVJFX0JSQUNLRVQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLZXlDb2RlOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHJvb3QsIG4pIHtcbiAgdmFyIG5vZGUgPSBuO1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlID09PSByb290KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgTGF6eVJlbmRlckJveCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKExhenlSZW5kZXJCb3gsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gTGF6eVJlbmRlckJveCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExhenlSZW5kZXJCb3gpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIExhenlSZW5kZXJCb3gucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuICEhbmV4dFByb3BzLmhpZGRlbkNsYXNzTmFtZSB8fCAhIW5leHRQcm9wcy52aXNpYmxlO1xuICAgIH07XG5cbiAgICBMYXp5UmVuZGVyQm94LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgaWYgKCEhdGhpcy5wcm9wcy5oaWRkZW5DbGFzc05hbWUgJiYgIXRoaXMucHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIFwiICsgdGhpcy5wcm9wcy5oaWRkZW5DbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuICAgICAgICBkZWxldGUgcHJvcHMuaGlkZGVuQ2xhc3NOYW1lO1xuICAgICAgICBkZWxldGUgcHJvcHMudmlzaWJsZTtcbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgcHJvcHMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIExhenlSZW5kZXJCb3g7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IExhenlSZW5kZXJCb3g7IiwidmFyIGNhY2hlZCA9IHZvaWQgMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsQmFyU2l6ZShmcmVzaCkge1xuICBpZiAoZnJlc2ggfHwgY2FjaGVkID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBpbm5lci5zdHlsZS5oZWlnaHQgPSAnMjAwcHgnO1xuXG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIG91dGVyU3R5bGUgPSBvdXRlci5zdHlsZTtcblxuICAgIG91dGVyU3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG91dGVyU3R5bGUudG9wID0gMDtcbiAgICBvdXRlclN0eWxlLmxlZnQgPSAwO1xuICAgIG91dGVyU3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBvdXRlclN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBvdXRlclN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgICBvdXRlclN0eWxlLmhlaWdodCA9ICcxNTBweCc7XG4gICAgb3V0ZXJTdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG5cbiAgICB2YXIgd2lkdGhDb250YWluZWQgPSBpbm5lci5vZmZzZXRXaWR0aDtcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgIHZhciB3aWR0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xuXG4gICAgaWYgKHdpZHRoQ29udGFpbmVkID09PSB3aWR0aFNjcm9sbCkge1xuICAgICAgd2lkdGhTY3JvbGwgPSBvdXRlci5jbGllbnRXaWR0aDtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICAgIGNhY2hlZCA9IHdpZHRoQ29udGFpbmVkIC0gd2lkdGhTY3JvbGw7XG4gIH1cbiAgcmV0dXJuIGNhY2hlZDtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICdyYy11dGlsL2VzL0tleUNvZGUnO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gJ3JjLXV0aWwvZXMvRG9tL2NvbnRhaW5zJztcbmltcG9ydCBBbmltYXRlIGZyb20gJ3JjLWFuaW1hdGUnO1xuaW1wb3J0IExhenlSZW5kZXJCb3ggZnJvbSAnLi9MYXp5UmVuZGVyQm94JztcbmltcG9ydCBnZXRTY3JvbGxCYXJTaXplIGZyb20gJ3JjLXV0aWwvZXMvZ2V0U2Nyb2xsQmFyU2l6ZSc7XG52YXIgdXVpZCA9IDA7XG52YXIgb3BlbkNvdW50ID0gMDtcbi8qIGVzbGludCByZWFjdC9uby1pcy1tb3VudGVkOjAgKi9cbmZ1bmN0aW9uIGdldFNjcm9sbCh3LCB0b3ApIHtcbiAgICB2YXIgcmV0ID0gd1sncGFnZScgKyAodG9wID8gJ1knIDogJ1gnKSArICdPZmZzZXQnXTtcbiAgICB2YXIgbWV0aG9kID0gJ3Njcm9sbCcgKyAodG9wID8gJ1RvcCcgOiAnTGVmdCcpO1xuICAgIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICB2YXIgZCA9IHcuZG9jdW1lbnQ7XG4gICAgICAgIHJldCA9IGQuZG9jdW1lbnRFbGVtZW50W21ldGhvZF07XG4gICAgICAgIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0ID0gZC5ib2R5W21ldGhvZF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbmZ1bmN0aW9uIHNldFRyYW5zZm9ybU9yaWdpbihub2RlLCB2YWx1ZSkge1xuICAgIHZhciBzdHlsZSA9IG5vZGUuc3R5bGU7XG4gICAgWydXZWJraXQnLCAnTW96JywgJ01zJywgJ21zJ10uZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgIHN0eWxlW3ByZWZpeCArICdUcmFuc2Zvcm1PcmlnaW4nXSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHN0eWxlWyd0cmFuc2Zvcm1PcmlnaW4nXSA9IHZhbHVlO1xufVxuZnVuY3Rpb24gb2Zmc2V0KGVsKSB7XG4gICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgcG9zID0ge1xuICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICAgIHRvcDogcmVjdC50b3BcbiAgICB9O1xuICAgIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuICAgIHZhciB3ID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gICAgcG9zLmxlZnQgKz0gZ2V0U2Nyb2xsKHcpO1xuICAgIHBvcy50b3AgKz0gZ2V0U2Nyb2xsKHcsIHRydWUpO1xuICAgIHJldHVybiBwb3M7XG59XG5cbnZhciBEaWFsb2cgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhEaWFsb2csIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRGlhbG9nKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlhbG9nKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgIF90aGlzLm9uQW5pbWF0ZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFmdGVyQ2xvc2UgPSBfdGhpcy5wcm9wcy5hZnRlckNsb3NlO1xuICAgICAgICAgICAgLy8gbmVlZCBkZW1vP1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9kaWFsb2cvcHVsbC8yOFxuXG4gICAgICAgICAgICBpZiAoX3RoaXMud3JhcCkge1xuICAgICAgICAgICAgICAgIF90aGlzLndyYXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmluVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMucmVtb3ZlU2Nyb2xsaW5nRWZmZWN0KCk7XG4gICAgICAgICAgICBpZiAoYWZ0ZXJDbG9zZSkge1xuICAgICAgICAgICAgICAgIGFmdGVyQ2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25EaWFsb2dNb3VzZURvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5kaWFsb2dNb3VzZURvd24gPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbk1hc2tNb3VzZVVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmRpYWxvZ01vdXNlRG93bikge1xuICAgICAgICAgICAgICAgIF90aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kaWFsb2dNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25NYXNrQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gYW5kcm9pZCB0cmlnZ2VyIGNsaWNrIG9uIG9wZW4gKGZhc3RjbGljaz8/KVxuICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSBfdGhpcy5vcGVuVGltZSA8IDMwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0ICYmICFfdGhpcy5kaWFsb2dNb3VzZURvd24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZShlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgaWYgKHByb3BzLmtleWJvYXJkICYmIGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FU0MpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlKGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGtlZXAgZm9jdXMgaW5zaWRlIGRpYWxvZ1xuICAgICAgICAgICAgaWYgKHByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLlRBQikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZW50aW5lbFN0YXJ0ID0gX3RoaXMuc2VudGluZWxTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBzZW50aW5lbFN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2VudGluZWxFbmQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVFbGVtZW50ID09PSBfdGhpcy5zZW50aW5lbEVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VudGluZWxTdGFydC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXREaWFsb2dFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgY2xvc2FibGUgPSBwcm9wcy5jbG9zYWJsZTtcbiAgICAgICAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHM7XG4gICAgICAgICAgICB2YXIgZGVzdCA9IHt9O1xuICAgICAgICAgICAgaWYgKHByb3BzLndpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZXN0LndpZHRoID0gcHJvcHMud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuaGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZXN0LmhlaWdodCA9IHByb3BzLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmb290ZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAocHJvcHMuZm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgZm9vdGVyID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1mb290ZXInLCByZWY6IF90aGlzLnNhdmVSZWYoJ2Zvb3RlcicpIH0sIHByb3BzLmZvb3Rlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHByb3BzLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1oZWFkZXInLCByZWY6IF90aGlzLnNhdmVSZWYoJ2hlYWRlcicpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctdGl0bGUnLCBpZDogX3RoaXMudGl0bGVJZCB9LCBwcm9wcy50aXRsZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNsb3NlciA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChjbG9zYWJsZSkge1xuICAgICAgICAgICAgICAgIGNsb3NlciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBfdGhpcy5jbG9zZSwgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIiwgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNsb3NlJyB9LCBwcm9wcy5jbG9zZUljb24gfHwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctY2xvc2UteCcgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHN0eWxlID0gX2V4dGVuZHMoe30sIHByb3BzLnN0eWxlLCBkZXN0KTtcbiAgICAgICAgICAgIHZhciBzZW50aW5lbFN0eWxlID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwLCBvdmVyZmxvdzogJ2hpZGRlbicgfTtcbiAgICAgICAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IF90aGlzLmdldFRyYW5zaXRpb25OYW1lKCk7XG4gICAgICAgICAgICB2YXIgZGlhbG9nRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGF6eVJlbmRlckJveCwgeyBrZXk6IFwiZGlhbG9nLWVsZW1lbnRcIiwgcm9sZTogXCJkb2N1bWVudFwiLCByZWY6IF90aGlzLnNhdmVSZWYoJ2RpYWxvZycpLCBzdHlsZTogc3R5bGUsIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJyAnICsgKHByb3BzLmNsYXNzTmFtZSB8fCAnJyksIHZpc2libGU6IHByb3BzLnZpc2libGUsIG9uTW91c2VEb3duOiBfdGhpcy5vbkRpYWxvZ01vdXNlRG93biB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgdGFiSW5kZXg6IDAsIHJlZjogX3RoaXMuc2F2ZVJlZignc2VudGluZWxTdGFydCcpLCBzdHlsZTogc2VudGluZWxTdHlsZSwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1jb250ZW50JyB9LCBjbG9zZXIsIGhlYWRlciwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1ib2R5Jywgc3R5bGU6IHByb3BzLmJvZHlTdHlsZSwgcmVmOiBfdGhpcy5zYXZlUmVmKCdib2R5JykgfSwgcHJvcHMuYm9keVByb3BzKSwgcHJvcHMuY2hpbGRyZW4pLCBmb290ZXIpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgdGFiSW5kZXg6IDAsIHJlZjogX3RoaXMuc2F2ZVJlZignc2VudGluZWxFbmQnKSwgc3R5bGU6IHNlbnRpbmVsU3R5bGUsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW5pbWF0ZSwgeyBrZXk6IFwiZGlhbG9nXCIsIHNob3dQcm9wOiBcInZpc2libGVcIiwgb25MZWF2ZTogX3RoaXMub25BbmltYXRlTGVhdmUsIHRyYW5zaXRpb25OYW1lOiB0cmFuc2l0aW9uTmFtZSwgY29tcG9uZW50OiBcIlwiLCB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlIH0sIHByb3BzLnZpc2libGUgfHwgIXByb3BzLmRlc3Ryb3lPbkNsb3NlID8gZGlhbG9nRWxlbWVudCA6IG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRaSW5kZXhTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHt9O1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICBpZiAocHJvcHMuekluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS56SW5kZXggPSBwcm9wcy56SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldFdyYXBTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX3RoaXMuZ2V0WkluZGV4U3R5bGUoKSwgX3RoaXMucHJvcHMud3JhcFN0eWxlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0TWFza1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfdGhpcy5nZXRaSW5kZXhTdHlsZSgpLCBfdGhpcy5wcm9wcy5tYXNrU3R5bGUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRNYXNrRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIG1hc2tFbGVtZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHByb3BzLm1hc2spIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFza1RyYW5zaXRpb24gPSBfdGhpcy5nZXRNYXNrVHJhbnNpdGlvbk5hbWUoKTtcbiAgICAgICAgICAgICAgICBtYXNrRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGF6eVJlbmRlckJveCwgX2V4dGVuZHMoeyBzdHlsZTogX3RoaXMuZ2V0TWFza1N0eWxlKCksIGtleTogXCJtYXNrXCIsIGNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1tYXNrJywgaGlkZGVuQ2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLW1hc2staGlkZGVuJywgdmlzaWJsZTogcHJvcHMudmlzaWJsZSB9LCBwcm9wcy5tYXNrUHJvcHMpKTtcbiAgICAgICAgICAgICAgICBpZiAobWFza1RyYW5zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWFza0VsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEFuaW1hdGUsIHsga2V5OiBcIm1hc2tcIiwgc2hvd1Byb3A6IFwidmlzaWJsZVwiLCB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLCBjb21wb25lbnQ6IFwiXCIsIHRyYW5zaXRpb25OYW1lOiBtYXNrVHJhbnNpdGlvbiB9LCBtYXNrRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hc2tFbGVtZW50O1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRNYXNrVHJhbnNpdGlvbk5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLm1hc2tUcmFuc2l0aW9uTmFtZTtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBwcm9wcy5tYXNrQW5pbWF0aW9uO1xuICAgICAgICAgICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBhbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnByZWZpeENscyArICctJyArIGFuaW1hdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0VHJhbnNpdGlvbk5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHByb3BzLmFuaW1hdGlvbjtcbiAgICAgICAgICAgIGlmICghdHJhbnNpdGlvbk5hbWUgJiYgYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5wcmVmaXhDbHMgKyAnLScgKyBhbmltYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNldFNjcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5ib2R5SXNPdmVyZmxvd2luZyAmJiBfdGhpcy5zY3JvbGxiYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBfdGhpcy5zY3JvbGxiYXJXaWR0aCArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmFkZFNjcm9sbGluZ0VmZmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9wZW5Db3VudCsrO1xuICAgICAgICAgICAgaWYgKG9wZW5Db3VudCAhPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmNoZWNrU2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICBfdGhpcy5zZXRTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIC8vIHRoaXMuYWRqdXN0RGlhbG9nKCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJlbW92ZVNjcm9sbGluZ0VmZmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9wZW5Db3VudC0tO1xuICAgICAgICAgICAgaWYgKG9wZW5Db3VudCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgICAgIF90aGlzLnJlc2V0U2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICAvLyB0aGlzLnJlc2V0QWRqdXN0bWVudHMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG9uQ2xvc2UgPSBfdGhpcy5wcm9wcy5vbkNsb3NlO1xuXG4gICAgICAgICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICAgICAgICAgIG9uQ2xvc2UoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmNoZWNrU2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZ1bGxXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgaWYgKCFmdWxsV2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAvLyB3b3JrYXJvdW5kIGZvciBtaXNzaW5nIHdpbmRvdy5pbm5lcldpZHRoIGluIElFOFxuICAgICAgICAgICAgICAgIHZhciBkb2N1bWVudEVsZW1lbnRSZWN0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGZ1bGxXaW5kb3dXaWR0aCA9IGRvY3VtZW50RWxlbWVudFJlY3QucmlnaHQgLSBNYXRoLmFicyhkb2N1bWVudEVsZW1lbnRSZWN0LmxlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuYm9keUlzT3ZlcmZsb3dpbmcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgZnVsbFdpbmRvd1dpZHRoO1xuICAgICAgICAgICAgaWYgKF90aGlzLmJvZHlJc092ZXJmbG93aW5nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxCYXJTaXplKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJlc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWRqdXN0RGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLndyYXAgJiYgX3RoaXMuc2Nyb2xsYmFyV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBtb2RhbElzT3ZlcmZsb3dpbmcgPSBfdGhpcy53cmFwLnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgX3RoaXMud3JhcC5zdHlsZS5wYWRkaW5nTGVmdCA9ICghX3RoaXMuYm9keUlzT3ZlcmZsb3dpbmcgJiYgbW9kYWxJc092ZXJmbG93aW5nID8gX3RoaXMuc2Nyb2xsYmFyV2lkdGggOiAnJykgKyAncHgnO1xuICAgICAgICAgICAgICAgIF90aGlzLndyYXAuc3R5bGUucGFkZGluZ1JpZ2h0ID0gKF90aGlzLmJvZHlJc092ZXJmbG93aW5nICYmICFtb2RhbElzT3ZlcmZsb3dpbmcgPyBfdGhpcy5zY3JvbGxiYXJXaWR0aCA6ICcnKSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJlc2V0QWRqdXN0bWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMud3JhcCkge1xuICAgICAgICAgICAgICAgIF90aGlzLndyYXAuc3R5bGUucGFkZGluZ0xlZnQgPSBfdGhpcy53cmFwLnN0eWxlLnBhZGRpbmdMZWZ0ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNhdmVSZWYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXNbbmFtZV0gPSBub2RlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIERpYWxvZy5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLmluVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpdGxlSWQgPSAncmNEaWFsb2dUaXRsZScgKyB1dWlkKys7XG4gICAgfTtcblxuICAgIERpYWxvZy5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoe30pO1xuICAgICAgICAvLyBpZiBmb3JjZVJlbmRlciBpcyB0cnVlLCBzZXQgZWxlbWVudCBzdHlsZSBkaXNwbGF5IHRvIGJlIG5vbmU7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZvcmNlUmVuZGVyICYmIHRoaXMud3JhcCkge1xuICAgICAgICAgICAgdGhpcy53cmFwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRGlhbG9nLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBtb3VzZVBvc2l0aW9uID0gdGhpcy5wcm9wcy5tb3VzZVBvc2l0aW9uO1xuICAgICAgICBpZiAocHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgLy8gZmlyc3Qgc2hvd1xuICAgICAgICAgICAgaWYgKCFwcmV2UHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlblRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU2Nyb2xsaW5nRWZmZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy50cnlGb2N1cygpO1xuICAgICAgICAgICAgICAgIHZhciBkaWFsb2dOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5kaWFsb2cpO1xuICAgICAgICAgICAgICAgIGlmIChtb3VzZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbE9mZnNldCA9IG9mZnNldChkaWFsb2dOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luKGRpYWxvZ05vZGUsIG1vdXNlUG9zaXRpb24ueCAtIGVsT2Zmc2V0LmxlZnQgKyAncHggJyArIChtb3VzZVBvc2l0aW9uLnkgLSBlbE9mZnNldC50b3ApICsgJ3B4Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luKGRpYWxvZ05vZGUsICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocHJldlByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5UcmFuc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9wcy5tYXNrICYmIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RPdXRTaWRlRm9jdXNOb2RlLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RPdXRTaWRlRm9jdXNOb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0T3V0U2lkZUZvY3VzTm9kZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRGlhbG9nLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlIHx8IHRoaXMuaW5UcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNjcm9sbGluZ0VmZmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgfTtcblxuICAgIERpYWxvZy5wcm90b3R5cGUudHJ5Rm9jdXMgPSBmdW5jdGlvbiB0cnlGb2N1cygpIHtcbiAgICAgICAgaWYgKCFjb250YWlucyh0aGlzLndyYXAsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RPdXRTaWRlRm9jdXNOb2RlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuc2VudGluZWxTdGFydC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIERpYWxvZy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgbWFza0Nsb3NhYmxlID0gcHJvcHMubWFza0Nsb3NhYmxlO1xuXG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMuZ2V0V3JhcFN0eWxlKCk7XG4gICAgICAgIC8vIGNsZWFyIGhpZGUgZGlzcGxheVxuICAgICAgICAvLyBhbmQgb25seSBzZXQgZGlzcGxheSBhZnRlciBhc3luYyBhbmltLCBub3QgaGVyZSBmb3IgaGlkZVxuICAgICAgICBpZiAocHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgdGhpcy5nZXRNYXNrRWxlbWVudCgpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHsgdGFiSW5kZXg6IC0xLCBvbktleURvd246IHRoaXMub25LZXlEb3duLCBjbGFzc05hbWU6IHByZWZpeENscyArICctd3JhcCAnICsgKHByb3BzLndyYXBDbGFzc05hbWUgfHwgJycpLCByZWY6IHRoaXMuc2F2ZVJlZignd3JhcCcpLCBvbkNsaWNrOiBtYXNrQ2xvc2FibGUgPyB0aGlzLm9uTWFza0NsaWNrIDogbnVsbCwgb25Nb3VzZVVwOiBtYXNrQ2xvc2FibGUgPyB0aGlzLm9uTWFza01vdXNlVXAgOiBudWxsLCByb2xlOiBcImRpYWxvZ1wiLCBcImFyaWEtbGFiZWxsZWRieVwiOiBwcm9wcy50aXRsZSA/IHRoaXMudGl0bGVJZCA6IG51bGwsIHN0eWxlOiBzdHlsZSB9LCBwcm9wcy53cmFwUHJvcHMpLCB0aGlzLmdldERpYWxvZ0VsZW1lbnQoKSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRGlhbG9nO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XG5cbkRpYWxvZy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBtYXNrOiB0cnVlLFxuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIGNsb3NhYmxlOiB0cnVlLFxuICAgIG1hc2tDbG9zYWJsZTogdHJ1ZSxcbiAgICBkZXN0cm95T25DbG9zZTogZmFsc2UsXG4gICAgcHJlZml4Q2xzOiAncmMtZGlhbG9nJ1xufTsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIENvbnRhaW5lclJlbmRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb250YWluZXJSZW5kZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbnRhaW5lclJlbmRlcigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udGFpbmVyUmVuZGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBDb250YWluZXJSZW5kZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb250YWluZXJSZW5kZXIpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5yZW1vdmVDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuY29udGFpbmVyKSB7XG4gICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoX3RoaXMuY29udGFpbmVyKTtcbiAgICAgICAgX3RoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX3RoaXMuY29udGFpbmVyKTtcbiAgICAgICAgX3RoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5yZW5kZXJDb21wb25lbnQgPSBmdW5jdGlvbiAocHJvcHMsIHJlYWR5KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB2aXNpYmxlID0gX3RoaXMkcHJvcHMudmlzaWJsZSxcbiAgICAgICAgICBnZXRDb21wb25lbnQgPSBfdGhpcyRwcm9wcy5nZXRDb21wb25lbnQsXG4gICAgICAgICAgZm9yY2VSZW5kZXIgPSBfdGhpcyRwcm9wcy5mb3JjZVJlbmRlcixcbiAgICAgICAgICBnZXRDb250YWluZXIgPSBfdGhpcyRwcm9wcy5nZXRDb250YWluZXIsXG4gICAgICAgICAgcGFyZW50ID0gX3RoaXMkcHJvcHMucGFyZW50O1xuXG4gICAgICBpZiAodmlzaWJsZSB8fCBwYXJlbnQuX2NvbXBvbmVudCB8fCBmb3JjZVJlbmRlcikge1xuICAgICAgICBpZiAoIV90aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgIF90aGlzLmNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgICAgICB9XG4gICAgICAgIFJlYWN0RE9NLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKHBhcmVudCwgZ2V0Q29tcG9uZW50KHByb3BzKSwgX3RoaXMuY29udGFpbmVyLCBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICAgICAgICBpZiAocmVhZHkpIHtcbiAgICAgICAgICAgIHJlYWR5LmNhbGwodGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb250YWluZXJSZW5kZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Nb3VudCkge1xuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Nb3VudCkge1xuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvRGVzdHJveSkge1xuICAgICAgICB0aGlzLnJlbW92ZUNvbnRhaW5lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHtcbiAgICAgICAgcmVuZGVyQ29tcG9uZW50OiB0aGlzLnJlbmRlckNvbXBvbmVudCxcbiAgICAgICAgcmVtb3ZlQ29udGFpbmVyOiB0aGlzLnJlbW92ZUNvbnRhaW5lclxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbnRhaW5lclJlbmRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuQ29udGFpbmVyUmVuZGVyLnByb3BUeXBlcyA9IHtcbiAgYXV0b01vdW50OiBQcm9wVHlwZXMuYm9vbCxcbiAgYXV0b0Rlc3Ryb3k6IFByb3BUeXBlcy5ib29sLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZm9yY2VSZW5kZXI6IFByb3BUeXBlcy5ib29sLFxuICBwYXJlbnQ6IFByb3BUeXBlcy5hbnksXG4gIGdldENvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0Q29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbkNvbnRhaW5lclJlbmRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGF1dG9Nb3VudDogdHJ1ZSxcbiAgYXV0b0Rlc3Ryb3k6IHRydWUsXG4gIGZvcmNlUmVuZGVyOiBmYWxzZVxufTtcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lclJlbmRlcjsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIFBvcnRhbCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQb3J0YWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcnRhbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9ydGFsKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUG9ydGFsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUG9ydGFsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUG9ydGFsLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmNyZWF0ZUNvbnRhaW5lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBkaWRVcGRhdGUgPSB0aGlzLnByb3BzLmRpZFVwZGF0ZTtcblxuICAgICAgaWYgKGRpZFVwZGF0ZSkge1xuICAgICAgICBkaWRVcGRhdGUocHJldlByb3BzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5yZW1vdmVDb250YWluZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVDb250YWluZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDb250YWluZXIoKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSB0aGlzLnByb3BzLmdldENvbnRhaW5lcigpO1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUNvbnRhaW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUNvbnRhaW5lcigpIHtcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5fY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQb3J0YWw7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblBvcnRhbC5wcm9wVHlwZXMgPSB7XG4gIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGRpZFVwZGF0ZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5leHBvcnQgZGVmYXVsdCBQb3J0YWw7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZyc7XG5pbXBvcnQgQ29udGFpbmVyUmVuZGVyIGZyb20gJ3JjLXV0aWwvZXMvQ29udGFpbmVyUmVuZGVyJztcbmltcG9ydCBQb3J0YWwgZnJvbSAncmMtdXRpbC9lcy9Qb3J0YWwnO1xudmFyIElTX1JFQUNUXzE2ID0gJ2NyZWF0ZVBvcnRhbCcgaW4gUmVhY3RET007XG5cbnZhciBEaWFsb2dXcmFwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoRGlhbG9nV3JhcCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBEaWFsb2dXcmFwKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGlhbG9nV3JhcCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5zYXZlRGlhbG9nID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzLl9jb21wb25lbnQgPSBub2RlO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZXh0cmEgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChEaWFsb2csIF9leHRlbmRzKHsgcmVmOiBfdGhpcy5zYXZlRGlhbG9nIH0sIF90aGlzLnByb3BzLCBleHRyYSwgeyBrZXk6IFwiZGlhbG9nXCIgfSkpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBmaXggaXNzdWUgIzEwNjU2XG4gICAgICAgIC8qXG4gICAgICAgICogQ3VzdG9tIGNvbnRhaW5lciBzaG91bGQgbm90IGJlIHJldHVybiwgYmVjYXVzZSBpbiB0aGUgUG9ydGFsIGNvbXBvbmVudCwgaXQgd2lsbCByZW1vdmUgdGhlXG4gICAgICAgICogcmV0dXJuIGNvbnRhaW5lciBlbGVtZW50IGhlcmUsIGlmIHRoZSBjdXN0b20gY29udGFpbmVyIGlzIHRoZSBvbmx5IGNoaWxkIG9mIGl0J3MgY29tcG9uZW50LFxuICAgICAgICAqIGxpa2UgaXNzdWUgIzEwNjU2LCBJdCB3aWxsIGhhcyBhIGNvbmZsaWN0IHdpdGggcmVtb3ZlQ2hpbGQgbWV0aG9kIGluIHJlYWN0LWRvbS5cbiAgICAgICAgKiBTbyBoZXJlIHNob3VsZCBhZGQgYSBjaGlsZCAoZGl2IGVsZW1lbnQpIHRvIGN1c3RvbSBjb250YWluZXIuXG4gICAgICAgICogKi9cbiAgICAgICAgX3RoaXMuZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLmdldENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLmdldENvbnRhaW5lcigpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBEaWFsb2dXcmFwLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoX3JlZikge1xuICAgICAgICB2YXIgdmlzaWJsZSA9IF9yZWYudmlzaWJsZSxcbiAgICAgICAgICAgIGZvcmNlUmVuZGVyID0gX3JlZi5mb3JjZVJlbmRlcjtcblxuICAgICAgICByZXR1cm4gISEodGhpcy5wcm9wcy52aXNpYmxlIHx8IHZpc2libGUpIHx8IHRoaXMucHJvcHMuZm9yY2VSZW5kZXIgfHwgZm9yY2VSZW5kZXI7XG4gICAgfTtcblxuICAgIERpYWxvZ1dyYXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmIChJU19SRUFDVF8xNikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KHtcbiAgICAgICAgICAgICAgICBhZnRlckNsb3NlOiB0aGlzLnJlbW92ZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiBvbkNsb3NlKCkge30sXG5cbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNvbnRhaW5lcigpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIERpYWxvZ1dyYXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB2aXNpYmxlID0gX3Byb3BzLnZpc2libGUsXG4gICAgICAgICAgICBmb3JjZVJlbmRlciA9IF9wcm9wcy5mb3JjZVJlbmRlcjtcblxuICAgICAgICB2YXIgcG9ydGFsID0gbnVsbDtcbiAgICAgICAgaWYgKCFJU19SRUFDVF8xNikge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyUmVuZGVyLCB7IHBhcmVudDogdGhpcywgdmlzaWJsZTogdmlzaWJsZSwgYXV0b0Rlc3Ryb3k6IGZhbHNlLCBnZXRDb21wb25lbnQ6IHRoaXMuZ2V0Q29tcG9uZW50LCBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyLCBmb3JjZVJlbmRlcjogZm9yY2VSZW5kZXIgfSwgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlbmRlckNvbXBvbmVudCA9IF9yZWYyLnJlbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ29udGFpbmVyID0gX3JlZjIucmVtb3ZlQ29udGFpbmVyO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMyLnJlbmRlckNvbXBvbmVudCA9IHJlbmRlckNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICBfdGhpczIucmVtb3ZlQ29udGFpbmVyID0gcmVtb3ZlQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGUgfHwgZm9yY2VSZW5kZXIgfHwgdGhpcy5fY29tcG9uZW50KSB7XG4gICAgICAgICAgICBwb3J0YWwgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFBvcnRhbCwgeyBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyIH0sIHRoaXMuZ2V0Q29tcG9uZW50KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3J0YWw7XG4gICAgfTtcblxuICAgIHJldHVybiBEaWFsb2dXcmFwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5EaWFsb2dXcmFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBmb3JjZVJlbmRlcjogZmFsc2Vcbn07XG5leHBvcnQgZGVmYXVsdCBEaWFsb2dXcmFwOyIsIi8qKlxuICogQGlnbm9yZVxuICogYmFzZSBldmVudCBvYmplY3QgZm9yIGN1c3RvbSBhbmQgZG9tIGV2ZW50LlxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEJhc2VPYmplY3QoKSB7XG4gIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY3VycmVudFRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuRXZlbnRCYXNlT2JqZWN0LnByb3RvdHlwZSA9IHtcbiAgaXNFdmVudE9iamVjdDogMSxcblxuICBjb25zdHJ1Y3RvcjogRXZlbnRCYXNlT2JqZWN0LFxuXG4gIGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG5cbiAgaXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXG4gIGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblxuICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuICB9LFxuXG4gIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuICB9LFxuXG4gIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuICAgIC8vIGZpeGVkIDEuMlxuICAgIC8vIGNhbGwgc3RvcFByb3BhZ2F0aW9uIGltcGxpY2l0bHlcbiAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9LFxuXG4gIGhhbHQ6IGZ1bmN0aW9uIGhhbHQoaW1tZWRpYXRlKSB7XG4gICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgdGhpcy5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV2ZW50QmFzZU9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiLyoqXG4gKiBAaWdub3JlXG4gKiBldmVudCBvYmplY3QgZm9yIGRvbVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfRXZlbnRCYXNlT2JqZWN0ID0gcmVxdWlyZSgnLi9FdmVudEJhc2VPYmplY3QnKTtcblxudmFyIF9FdmVudEJhc2VPYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXZlbnRCYXNlT2JqZWN0KTtcblxudmFyIF9vYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfb2JqZWN0QXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFzc2lnbik7XG5cbnZhciBUUlVFID0gdHJ1ZTtcbnZhciBGQUxTRSA9IGZhbHNlO1xudmFyIGNvbW1vblByb3BzID0gWydhbHRLZXknLCAnYnViYmxlcycsICdjYW5jZWxhYmxlJywgJ2N0cmxLZXknLCAnY3VycmVudFRhcmdldCcsICdldmVudFBoYXNlJywgJ21ldGFLZXknLCAnc2hpZnRLZXknLCAndGFyZ2V0JywgJ3RpbWVTdGFtcCcsICd2aWV3JywgJ3R5cGUnXTtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQodykge1xuICByZXR1cm4gdyA9PT0gbnVsbCB8fCB3ID09PSB1bmRlZmluZWQ7XG59XG5cbnZhciBldmVudE5vcm1hbGl6ZXJzID0gW3tcbiAgcmVnOiAvXmtleS8sXG4gIHByb3BzOiBbJ2NoYXInLCAnY2hhckNvZGUnLCAna2V5JywgJ2tleUNvZGUnLCAnd2hpY2gnXSxcbiAgZml4OiBmdW5jdGlvbiBmaXgoZXZlbnQsIG5hdGl2ZUV2ZW50KSB7XG4gICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50LndoaWNoKSkge1xuICAgICAgZXZlbnQud2hpY2ggPSAhaXNOdWxsT3JVbmRlZmluZWQobmF0aXZlRXZlbnQuY2hhckNvZGUpID8gbmF0aXZlRXZlbnQuY2hhckNvZGUgOiBuYXRpdmVFdmVudC5rZXlDb2RlO1xuICAgIH1cblxuICAgIC8vIGFkZCBtZXRhS2V5IHRvIG5vbi1NYWMgYnJvd3NlcnMgKHVzZSBjdHJsIGZvciBQQyAncyBhbmQgTWV0YSBmb3IgTWFjcylcbiAgICBpZiAoZXZlbnQubWV0YUtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudC5tZXRhS2V5ID0gZXZlbnQuY3RybEtleTtcbiAgICB9XG4gIH1cbn0sIHtcbiAgcmVnOiAvXnRvdWNoLyxcbiAgcHJvcHM6IFsndG91Y2hlcycsICdjaGFuZ2VkVG91Y2hlcycsICd0YXJnZXRUb3VjaGVzJ11cbn0sIHtcbiAgcmVnOiAvXmhhc2hjaGFuZ2UkLyxcbiAgcHJvcHM6IFsnbmV3VVJMJywgJ29sZFVSTCddXG59LCB7XG4gIHJlZzogL15nZXN0dXJlY2hhbmdlJC9pLFxuICBwcm9wczogWydyb3RhdGlvbicsICdzY2FsZSddXG59LCB7XG4gIHJlZzogL14obW91c2V3aGVlbHxET01Nb3VzZVNjcm9sbCkkLyxcbiAgcHJvcHM6IFtdLFxuICBmaXg6IGZ1bmN0aW9uIGZpeChldmVudCwgbmF0aXZlRXZlbnQpIHtcbiAgICB2YXIgZGVsdGFYID0gdW5kZWZpbmVkO1xuICAgIHZhciBkZWx0YVkgPSB1bmRlZmluZWQ7XG4gICAgdmFyIGRlbHRhID0gdW5kZWZpbmVkO1xuICAgIHZhciB3aGVlbERlbHRhID0gbmF0aXZlRXZlbnQud2hlZWxEZWx0YTtcbiAgICB2YXIgYXhpcyA9IG5hdGl2ZUV2ZW50LmF4aXM7XG4gICAgdmFyIHdoZWVsRGVsdGFZID0gbmF0aXZlRXZlbnQud2hlZWxEZWx0YVk7XG4gICAgdmFyIHdoZWVsRGVsdGFYID0gbmF0aXZlRXZlbnQud2hlZWxEZWx0YVg7XG4gICAgdmFyIGRldGFpbCA9IG5hdGl2ZUV2ZW50LmRldGFpbDtcblxuICAgIC8vIGllL3dlYmtpdFxuICAgIGlmICh3aGVlbERlbHRhKSB7XG4gICAgICBkZWx0YSA9IHdoZWVsRGVsdGEgLyAxMjA7XG4gICAgfVxuXG4gICAgLy8gZ2Vja29cbiAgICBpZiAoZGV0YWlsKSB7XG4gICAgICAvLyBwcmVzcyBjb250cm9sIGUuZGV0YWlsID09IDEgZWxzZSBlLmRldGFpbCA9PSAzXG4gICAgICBkZWx0YSA9IDAgLSAoZGV0YWlsICUgMyA9PT0gMCA/IGRldGFpbCAvIDMgOiBkZXRhaWwpO1xuICAgIH1cblxuICAgIC8vIEdlY2tvXG4gICAgaWYgKGF4aXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGF4aXMgPT09IGV2ZW50LkhPUklaT05UQUxfQVhJUykge1xuICAgICAgICBkZWx0YVkgPSAwO1xuICAgICAgICBkZWx0YVggPSAwIC0gZGVsdGE7XG4gICAgICB9IGVsc2UgaWYgKGF4aXMgPT09IGV2ZW50LlZFUlRJQ0FMX0FYSVMpIHtcbiAgICAgICAgZGVsdGFYID0gMDtcbiAgICAgICAgZGVsdGFZID0gZGVsdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2Via2l0XG4gICAgaWYgKHdoZWVsRGVsdGFZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbHRhWSA9IHdoZWVsRGVsdGFZIC8gMTIwO1xuICAgIH1cbiAgICBpZiAod2hlZWxEZWx0YVggIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsdGFYID0gLTEgKiB3aGVlbERlbHRhWCAvIDEyMDtcbiAgICB9XG5cbiAgICAvLyDpu5jorqQgZGVsdGFZIChpZSlcbiAgICBpZiAoIWRlbHRhWCAmJiAhZGVsdGFZKSB7XG4gICAgICBkZWx0YVkgPSBkZWx0YTtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGFYICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogZGVsdGFYIG9mIG1vdXNld2hlZWwgZXZlbnRcbiAgICAgICAqIEBwcm9wZXJ0eSBkZWx0YVhcbiAgICAgICAqIEBtZW1iZXIgRXZlbnQuRG9tRXZlbnQuT2JqZWN0XG4gICAgICAgKi9cbiAgICAgIGV2ZW50LmRlbHRhWCA9IGRlbHRhWDtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGFZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogZGVsdGFZIG9mIG1vdXNld2hlZWwgZXZlbnRcbiAgICAgICAqIEBwcm9wZXJ0eSBkZWx0YVlcbiAgICAgICAqIEBtZW1iZXIgRXZlbnQuRG9tRXZlbnQuT2JqZWN0XG4gICAgICAgKi9cbiAgICAgIGV2ZW50LmRlbHRhWSA9IGRlbHRhWTtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLyoqXG4gICAgICAgKiBkZWx0YSBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFcbiAgICAgICAqIEBtZW1iZXIgRXZlbnQuRG9tRXZlbnQuT2JqZWN0XG4gICAgICAgKi9cbiAgICAgIGV2ZW50LmRlbHRhID0gZGVsdGE7XG4gICAgfVxuICB9XG59LCB7XG4gIHJlZzogL15tb3VzZXxjb250ZXh0bWVudXxjbGlja3xtc3BvaW50ZXJ8KF5ET01Nb3VzZVNjcm9sbCQpL2ksXG4gIHByb3BzOiBbJ2J1dHRvbnMnLCAnY2xpZW50WCcsICdjbGllbnRZJywgJ2J1dHRvbicsICdvZmZzZXRYJywgJ3JlbGF0ZWRUYXJnZXQnLCAnd2hpY2gnLCAnZnJvbUVsZW1lbnQnLCAndG9FbGVtZW50JywgJ29mZnNldFknLCAncGFnZVgnLCAncGFnZVknLCAnc2NyZWVuWCcsICdzY3JlZW5ZJ10sXG4gIGZpeDogZnVuY3Rpb24gZml4KGV2ZW50LCBuYXRpdmVFdmVudCkge1xuICAgIHZhciBldmVudERvYyA9IHVuZGVmaW5lZDtcbiAgICB2YXIgZG9jID0gdW5kZWZpbmVkO1xuICAgIHZhciBib2R5ID0gdW5kZWZpbmVkO1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIGJ1dHRvbiA9IG5hdGl2ZUV2ZW50LmJ1dHRvbjtcblxuICAgIC8vIENhbGN1bGF0ZSBwYWdlWC9ZIGlmIG1pc3NpbmcgYW5kIGNsaWVudFgvWSBhdmFpbGFibGVcbiAgICBpZiAodGFyZ2V0ICYmIGlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50LnBhZ2VYKSAmJiAhaXNOdWxsT3JVbmRlZmluZWQobmF0aXZlRXZlbnQuY2xpZW50WCkpIHtcbiAgICAgIGV2ZW50RG9jID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG4gICAgICBkb2MgPSBldmVudERvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBib2R5ID0gZXZlbnREb2MuYm9keTtcbiAgICAgIGV2ZW50LnBhZ2VYID0gbmF0aXZlRXZlbnQuY2xpZW50WCArIChkb2MgJiYgZG9jLnNjcm9sbExlZnQgfHwgYm9keSAmJiBib2R5LnNjcm9sbExlZnQgfHwgMCkgLSAoZG9jICYmIGRvYy5jbGllbnRMZWZ0IHx8IGJvZHkgJiYgYm9keS5jbGllbnRMZWZ0IHx8IDApO1xuICAgICAgZXZlbnQucGFnZVkgPSBuYXRpdmVFdmVudC5jbGllbnRZICsgKGRvYyAmJiBkb2Muc2Nyb2xsVG9wIHx8IGJvZHkgJiYgYm9keS5zY3JvbGxUb3AgfHwgMCkgLSAoZG9jICYmIGRvYy5jbGllbnRUb3AgfHwgYm9keSAmJiBib2R5LmNsaWVudFRvcCB8fCAwKTtcbiAgICB9XG5cbiAgICAvLyB3aGljaCBmb3IgY2xpY2s6IDEgPT09IGxlZnQ7IDIgPT09IG1pZGRsZTsgMyA9PT0gcmlnaHRcbiAgICAvLyBkbyBub3QgdXNlIGJ1dHRvblxuICAgIGlmICghZXZlbnQud2hpY2ggJiYgYnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChidXR0b24gJiAxKSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoYnV0dG9uICYgMikge1xuICAgICAgICBldmVudC53aGljaCA9IDM7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiAmIDQpIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCByZWxhdGVkVGFyZ2V0LCBpZiBuZWNlc3NhcnlcbiAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgJiYgZXZlbnQuZnJvbUVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQgPSBldmVudC5mcm9tRWxlbWVudCA9PT0gdGFyZ2V0ID8gZXZlbnQudG9FbGVtZW50IDogZXZlbnQuZnJvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG59XTtcblxuZnVuY3Rpb24gcmV0VHJ1ZSgpIHtcbiAgcmV0dXJuIFRSVUU7XG59XG5cbmZ1bmN0aW9uIHJldEZhbHNlKCkge1xuICByZXR1cm4gRkFMU0U7XG59XG5cbmZ1bmN0aW9uIERvbUV2ZW50T2JqZWN0KG5hdGl2ZUV2ZW50KSB7XG4gIHZhciB0eXBlID0gbmF0aXZlRXZlbnQudHlwZTtcblxuICB2YXIgaXNOYXRpdmUgPSB0eXBlb2YgbmF0aXZlRXZlbnQuc3RvcFByb3BhZ2F0aW9uID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBuYXRpdmVFdmVudC5jYW5jZWxCdWJibGUgPT09ICdib29sZWFuJztcblxuICBfRXZlbnRCYXNlT2JqZWN0MlsnZGVmYXVsdCddLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5uYXRpdmVFdmVudCA9IG5hdGl2ZUV2ZW50O1xuXG4gIC8vIGluIGNhc2UgZG9tIGV2ZW50IGhhcyBiZWVuIG1hcmsgYXMgZGVmYXVsdCBwcmV2ZW50ZWQgYnkgbG93ZXIgZG9tIG5vZGVcbiAgdmFyIGlzRGVmYXVsdFByZXZlbnRlZCA9IHJldEZhbHNlO1xuICBpZiAoJ2RlZmF1bHRQcmV2ZW50ZWQnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfSBlbHNlIGlmICgnZ2V0UHJldmVudERlZmF1bHQnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjkxMTUxXG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZ2V0UHJldmVudERlZmF1bHQoKSA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfSBlbHNlIGlmICgncmV0dXJuVmFsdWUnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQucmV0dXJuVmFsdWUgPT09IEZBTFNFID8gcmV0VHJ1ZSA6IHJldEZhbHNlO1xuICB9XG5cbiAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSBpc0RlZmF1bHRQcmV2ZW50ZWQ7XG5cbiAgdmFyIGZpeEZucyA9IFtdO1xuICB2YXIgZml4Rm4gPSB1bmRlZmluZWQ7XG4gIHZhciBsID0gdW5kZWZpbmVkO1xuICB2YXIgcHJvcCA9IHVuZGVmaW5lZDtcbiAgdmFyIHByb3BzID0gY29tbW9uUHJvcHMuY29uY2F0KCk7XG5cbiAgZXZlbnROb3JtYWxpemVycy5mb3JFYWNoKGZ1bmN0aW9uIChub3JtYWxpemVyKSB7XG4gICAgaWYgKHR5cGUubWF0Y2gobm9ybWFsaXplci5yZWcpKSB7XG4gICAgICBwcm9wcyA9IHByb3BzLmNvbmNhdChub3JtYWxpemVyLnByb3BzKTtcbiAgICAgIGlmIChub3JtYWxpemVyLmZpeCkge1xuICAgICAgICBmaXhGbnMucHVzaChub3JtYWxpemVyLmZpeCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBsID0gcHJvcHMubGVuZ3RoO1xuXG4gIC8vIGNsb25lIHByb3BlcnRpZXMgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxuICB3aGlsZSAobCkge1xuICAgIHByb3AgPSBwcm9wc1stLWxdO1xuICAgIHRoaXNbcHJvcF0gPSBuYXRpdmVFdmVudFtwcm9wXTtcbiAgfVxuXG4gIC8vIGZpeCB0YXJnZXQgcHJvcGVydHksIGlmIG5lY2Vzc2FyeVxuICBpZiAoIXRoaXMudGFyZ2V0ICYmIGlzTmF0aXZlKSB7XG4gICAgdGhpcy50YXJnZXQgPSBuYXRpdmVFdmVudC5zcmNFbGVtZW50IHx8IGRvY3VtZW50OyAvLyBzcmNFbGVtZW50IG1pZ2h0IG5vdCBiZSBkZWZpbmVkIGVpdGhlclxuICB9XG5cbiAgLy8gY2hlY2sgaWYgdGFyZ2V0IGlzIGEgdGV4dCBub2RlIChzYWZhcmkpXG4gIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5ub2RlVHlwZSA9PT0gMykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGwgPSBmaXhGbnMubGVuZ3RoO1xuXG4gIHdoaWxlIChsKSB7XG4gICAgZml4Rm4gPSBmaXhGbnNbLS1sXTtcbiAgICBmaXhGbih0aGlzLCBuYXRpdmVFdmVudCk7XG4gIH1cblxuICB0aGlzLnRpbWVTdGFtcCA9IG5hdGl2ZUV2ZW50LnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpO1xufVxuXG52YXIgRXZlbnRCYXNlT2JqZWN0UHJvdG8gPSBfRXZlbnRCYXNlT2JqZWN0MlsnZGVmYXVsdCddLnByb3RvdHlwZTtcblxuKDAsIF9vYmplY3RBc3NpZ24yWydkZWZhdWx0J10pKERvbUV2ZW50T2JqZWN0LnByb3RvdHlwZSwgRXZlbnRCYXNlT2JqZWN0UHJvdG8sIHtcbiAgY29uc3RydWN0b3I6IERvbUV2ZW50T2JqZWN0LFxuXG4gIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMubmF0aXZlRXZlbnQ7XG5cbiAgICAvLyBpZiBwcmV2ZW50RGVmYXVsdCBleGlzdHMgcnVuIGl0IG9uIHRoZSBvcmlnaW5hbCBldmVudFxuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG90aGVyd2lzZSBzZXQgdGhlIHJldHVyblZhbHVlIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBldmVudCB0byBGQUxTRSAoSUUpXG4gICAgICBlLnJldHVyblZhbHVlID0gRkFMU0U7XG4gICAgfVxuXG4gICAgRXZlbnRCYXNlT2JqZWN0UHJvdG8ucHJldmVudERlZmF1bHQuY2FsbCh0aGlzKTtcbiAgfSxcblxuICBzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMubmF0aXZlRXZlbnQ7XG5cbiAgICAvLyBpZiBzdG9wUHJvcGFnYXRpb24gZXhpc3RzIHJ1biBpdCBvbiB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG90aGVyd2lzZSBzZXQgdGhlIGNhbmNlbEJ1YmJsZSBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgZXZlbnQgdG8gVFJVRSAoSUUpXG4gICAgICBlLmNhbmNlbEJ1YmJsZSA9IFRSVUU7XG4gICAgfVxuXG4gICAgRXZlbnRCYXNlT2JqZWN0UHJvdG8uc3RvcFByb3BhZ2F0aW9uLmNhbGwodGhpcyk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEb21FdmVudE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBhZGRFdmVudExpc3RlbmVyO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfRXZlbnRPYmplY3QgPSByZXF1aXJlKCcuL0V2ZW50T2JqZWN0Jyk7XG5cbnZhciBfRXZlbnRPYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXZlbnRPYmplY3QpO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjaywgb3B0aW9uKSB7XG4gIGZ1bmN0aW9uIHdyYXBDYWxsYmFjayhlKSB7XG4gICAgdmFyIG5lID0gbmV3IF9FdmVudE9iamVjdDJbJ2RlZmF1bHQnXShlKTtcbiAgICBjYWxsYmFjay5jYWxsKHRhcmdldCwgbmUpO1xuICB9XG5cbiAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgdmFyIF9yZXQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHVzZUNhcHR1cmUgPSBmYWxzZTtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgICB1c2VDYXB0dXJlID0gb3B0aW9uLmNhcHR1cmUgfHwgZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdib29sZWFuJykge1xuICAgICAgICB1c2VDYXB0dXJlID0gb3B0aW9uO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHdyYXBDYWxsYmFjaywgb3B0aW9uIHx8IGZhbHNlKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdjoge1xuICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2ssIHVzZUNhcHR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgaWYgKHR5cGVvZiBfcmV0ID09PSAnb2JqZWN0JykgcmV0dXJuIF9yZXQudjtcbiAgfSBlbHNlIGlmICh0YXJnZXQuYXR0YWNoRXZlbnQpIHtcbiAgICB0YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgd3JhcENhbGxiYWNrKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gYWRkRXZlbnRMaXN0ZW5lcldyYXA7XG5cbnZhciBfYWRkRG9tRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ2FkZC1kb20tZXZlbnQtbGlzdGVuZXInKTtcblxudmFyIF9hZGREb21FdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZERvbUV2ZW50TGlzdGVuZXIpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXcmFwKHRhcmdldCwgZXZlbnRUeXBlLCBjYiwgb3B0aW9uKSB7XG4gIC8qIGVzbGludCBjYW1lbGNhc2U6IDIgKi9cbiAgdmFyIGNhbGxiYWNrID0gX3JlYWN0RG9tMlsnZGVmYXVsdCddLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzID8gZnVuY3Rpb24gcnVuKGUpIHtcbiAgICBfcmVhY3REb20yWydkZWZhdWx0J10udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMoY2IsIGUpO1xuICB9IDogY2I7XG4gIHJldHVybiAoMCwgX2FkZERvbUV2ZW50TGlzdGVuZXIyWydkZWZhdWx0J10pKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjaywgb3B0aW9uKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jaGFuZ2VDb25maXJtTG9jYWxlID0gY2hhbmdlQ29uZmlybUxvY2FsZTtcbmV4cG9ydHMuZ2V0Q29uZmlybUxvY2FsZSA9IGdldENvbmZpcm1Mb2NhbGU7XG5cbnZhciBfZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlci9kZWZhdWx0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBydW50aW1lTG9jYWxlID0gX2V4dGVuZHMoe30sIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5Nb2RhbCk7XG5cbmZ1bmN0aW9uIGNoYW5nZUNvbmZpcm1Mb2NhbGUobmV3TG9jYWxlKSB7XG4gIGlmIChuZXdMb2NhbGUpIHtcbiAgICBydW50aW1lTG9jYWxlID0gX2V4dGVuZHMoe30sIHJ1bnRpbWVMb2NhbGUsIG5ld0xvY2FsZSk7XG4gIH0gZWxzZSB7XG4gICAgcnVudGltZUxvY2FsZSA9IF9leHRlbmRzKHt9LCBfZGVmYXVsdFtcImRlZmF1bHRcIl0uTW9kYWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbmZpcm1Mb2NhbGUoKSB7XG4gIHJldHVybiBydW50aW1lTG9jYWxlO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLmRlc3Ryb3lGbnMgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNEaWFsb2cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1kaWFsb2dcIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9hZGRFdmVudExpc3RlbmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtdXRpbC9saWIvRG9tL2FkZEV2ZW50TGlzdGVuZXJcIikpO1xuXG52YXIgX2xvY2FsZSA9IHJlcXVpcmUoXCIuL2xvY2FsZVwiKTtcblxudmFyIF9pY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vaWNvblwiKSk7XG5cbnZhciBfYnV0dG9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vYnV0dG9uXCIpKTtcblxudmFyIF9Mb2NhbGVSZWNlaXZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlclwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgbW91c2VQb3NpdGlvbjtcbnZhciBkZXN0cm95Rm5zID0gW107IC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTU3OTVcblxuZXhwb3J0cy5kZXN0cm95Rm5zID0gZGVzdHJveUZucztcblxudmFyIGdldENsaWNrUG9zaXRpb24gPSBmdW5jdGlvbiBnZXRDbGlja1Bvc2l0aW9uKGUpIHtcbiAgbW91c2VQb3NpdGlvbiA9IHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbiAgfTsgLy8gMTAwbXMg5YaF5Y+R55Sf6L+H54K55Ye75LqL5Lu277yM5YiZ5LuO54K55Ye75L2N572u5Yqo55S75bGV56S6XG4gIC8vIOWQpuWImeebtOaOpSB6b29tIOWxleekulxuICAvLyDov5nmoLflj6/ku6XlhbzlrrnpnZ7ngrnlh7vmlrnlvI/lsZXlvIBcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbW91c2VQb3NpdGlvbiA9IG51bGw7XG4gIH0sIDEwMCk7XG59OyAvLyDlj6rmnInngrnlh7vkuovku7bmlK/mjIHku47pvKDmoIfkvY3nva7liqjnlLvlsZXlvIBcblxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgKDAsIF9hZGRFdmVudExpc3RlbmVyW1wiZGVmYXVsdFwiXSkoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnY2xpY2snLCBnZXRDbGlja1Bvc2l0aW9uKTtcbn1cblxudmFyIE1vZGFsID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhNb2RhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTW9kYWwoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1vZGFsKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgIF90aGlzLmhhbmRsZUNhbmNlbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25DYW5jZWwgPSBfdGhpcy5wcm9wcy5vbkNhbmNlbDtcblxuICAgICAgaWYgKG9uQ2FuY2VsKSB7XG4gICAgICAgIG9uQ2FuY2VsKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVPayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25PayA9IF90aGlzLnByb3BzLm9uT2s7XG5cbiAgICAgIGlmIChvbk9rKSB7XG4gICAgICAgIG9uT2soZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckZvb3RlciA9IGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9rVGV4dCA9IF90aGlzJHByb3BzLm9rVGV4dCxcbiAgICAgICAgICBva1R5cGUgPSBfdGhpcyRwcm9wcy5va1R5cGUsXG4gICAgICAgICAgY2FuY2VsVGV4dCA9IF90aGlzJHByb3BzLmNhbmNlbFRleHQsXG4gICAgICAgICAgY29uZmlybUxvYWRpbmcgPSBfdGhpcyRwcm9wcy5jb25maXJtTG9hZGluZztcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2J1dHRvbltcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICAgICAgb25DbGljazogX3RoaXMuaGFuZGxlQ2FuY2VsXG4gICAgICB9LCBfdGhpcy5wcm9wcy5jYW5jZWxCdXR0b25Qcm9wcyksIGNhbmNlbFRleHQgfHwgbG9jYWxlLmNhbmNlbFRleHQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KF9idXR0b25bXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgICAgIHR5cGU6IG9rVHlwZSxcbiAgICAgICAgbG9hZGluZzogY29uZmlybUxvYWRpbmcsXG4gICAgICAgIG9uQ2xpY2s6IF90aGlzLmhhbmRsZU9rXG4gICAgICB9LCBfdGhpcy5wcm9wcy5va0J1dHRvblByb3BzKSwgb2tUZXh0IHx8IGxvY2FsZS5va1RleHQpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyTW9kYWwgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuXG4gICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgZm9vdGVyID0gX2EuZm9vdGVyLFxuICAgICAgICAgIHZpc2libGUgPSBfYS52aXNpYmxlLFxuICAgICAgICAgIHdyYXBDbGFzc05hbWUgPSBfYS53cmFwQ2xhc3NOYW1lLFxuICAgICAgICAgIGNlbnRlcmVkID0gX2EuY2VudGVyZWQsXG4gICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJmb290ZXJcIiwgXCJ2aXNpYmxlXCIsIFwid3JhcENsYXNzTmFtZVwiLCBcImNlbnRlcmVkXCJdKTtcblxuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnbW9kYWwnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIGRlZmF1bHRGb290ZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2NhbGVSZWNlaXZlcltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgY29tcG9uZW50TmFtZTogXCJNb2RhbFwiLFxuICAgICAgICBkZWZhdWx0TG9jYWxlOiAoMCwgX2xvY2FsZS5nZXRDb25maXJtTG9jYWxlKSgpXG4gICAgICB9LCBfdGhpcy5yZW5kZXJGb290ZXIpO1xuICAgICAgdmFyIGNsb3NlSWNvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNsb3NlLXhcIilcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jbG9zZS1pY29uXCIpLFxuICAgICAgICB0eXBlOiAnY2xvc2UnXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfcmNEaWFsb2dbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICB3cmFwQ2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2VudGVyZWRcIiksICEhY2VudGVyZWQpLCB3cmFwQ2xhc3NOYW1lKSxcbiAgICAgICAgZm9vdGVyOiBmb290ZXIgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRGb290ZXIgOiBmb290ZXIsXG4gICAgICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgICAgIG1vdXNlUG9zaXRpb246IG1vdXNlUG9zaXRpb24sXG4gICAgICAgIG9uQ2xvc2U6IF90aGlzLmhhbmRsZUNhbmNlbCxcbiAgICAgICAgY2xvc2VJY29uOiBjbG9zZUljb25cbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlck1vZGFsKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWw7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTW9kYWw7XG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHdpZHRoOiA1MjAsXG4gIHRyYW5zaXRpb25OYW1lOiAnem9vbScsXG4gIG1hc2tUcmFuc2l0aW9uTmFtZTogJ2ZhZGUnLFxuICBjb25maXJtTG9hZGluZzogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBva1R5cGU6ICdwcmltYXJ5JyxcbiAgb2tCdXR0b25EaXNhYmxlZDogZmFsc2UsXG4gIGNhbmNlbEJ1dHRvbkRpc2FibGVkOiBmYWxzZVxufTtcbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbk9rOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuICBva1RleHQ6IFByb3BUeXBlcy5ub2RlLFxuICBjYW5jZWxUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgY2VudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb25maXJtTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBhbGlnbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgZm9vdGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICBjbG9zYWJsZTogUHJvcFR5cGVzLmJvb2xcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFJlYWN0RE9NID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cbnZhciBfYnV0dG9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vYnV0dG9uXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIEFjdGlvbkJ1dHRvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQWN0aW9uQnV0dG9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBY3Rpb25CdXR0b24ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uQnV0dG9uKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEFjdGlvbkJ1dHRvbikuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGlvbkZuID0gX3RoaXMkcHJvcHMuYWN0aW9uRm4sXG4gICAgICAgICAgY2xvc2VNb2RhbCA9IF90aGlzJHByb3BzLmNsb3NlTW9kYWw7XG5cbiAgICAgIGlmIChhY3Rpb25Gbikge1xuICAgICAgICB2YXIgcmV0O1xuXG4gICAgICAgIGlmIChhY3Rpb25Gbi5sZW5ndGgpIHtcbiAgICAgICAgICByZXQgPSBhY3Rpb25GbihjbG9zZU1vZGFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQgPSBhY3Rpb25GbigpO1xuXG4gICAgICAgICAgaWYgKCFyZXQpIHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV0ICYmIHJldC50aGVuKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0LnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gSXQncyB1bm5lY2Vzc2FyeSB0byBzZXQgbG9hZGluZz1mYWxzZSwgZm9yIHRoZSBNb2RhbCB3aWxsIGJlIHVubW91bnRlZCBhZnRlciBjbG9zZS5cbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBFbWl0IGVycm9yIHdoZW4gY2F0Y2ggcHJvbWlzZSByZWplY3RcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNjE4M1xuXG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQWN0aW9uQnV0dG9uLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgICB2YXIgJHRoaXMgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gJHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHR5cGUgPSBfdGhpcyRwcm9wczIudHlwZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBidXR0b25Qcm9wcyA9IF90aGlzJHByb3BzMi5idXR0b25Qcm9wcztcbiAgICAgIHZhciBsb2FkaW5nID0gdGhpcy5zdGF0ZS5sb2FkaW5nO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2J1dHRvbltcImRlZmF1bHRcIl0sIF9leHRlbmRzKHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nXG4gICAgICB9LCBidXR0b25Qcm9wcyksIGNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWN0aW9uQnV0dG9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEFjdGlvbkJ1dHRvbjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY29uZmlybTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFJlYWN0RE9NID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxudmFyIF9Nb2RhbCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL01vZGFsXCIpKTtcblxudmFyIF9BY3Rpb25CdXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0FjdGlvbkJ1dHRvblwiKSk7XG5cbnZhciBfbG9jYWxlID0gcmVxdWlyZShcIi4vbG9jYWxlXCIpO1xuXG52YXIgX3dhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC93YXJuaW5nXCIpKTtcblxudmFyIF90aGlzID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBJU19SRUFDVF8xNiA9ICEhUmVhY3RET00uY3JlYXRlUG9ydGFsO1xuXG52YXIgQ29uZmlybURpYWxvZyA9IGZ1bmN0aW9uIENvbmZpcm1EaWFsb2cocHJvcHMpIHtcbiAgdmFyIG9uQ2FuY2VsID0gcHJvcHMub25DYW5jZWwsXG4gICAgICBvbk9rID0gcHJvcHMub25PayxcbiAgICAgIGNsb3NlID0gcHJvcHMuY2xvc2UsXG4gICAgICB6SW5kZXggPSBwcm9wcy56SW5kZXgsXG4gICAgICBhZnRlckNsb3NlID0gcHJvcHMuYWZ0ZXJDbG9zZSxcbiAgICAgIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAga2V5Ym9hcmQgPSBwcm9wcy5rZXlib2FyZCxcbiAgICAgIGNlbnRlcmVkID0gcHJvcHMuY2VudGVyZWQsXG4gICAgICBnZXRDb250YWluZXIgPSBwcm9wcy5nZXRDb250YWluZXIsXG4gICAgICBtYXNrU3R5bGUgPSBwcm9wcy5tYXNrU3R5bGUsXG4gICAgICBva0J1dHRvblByb3BzID0gcHJvcHMub2tCdXR0b25Qcm9wcyxcbiAgICAgIGNhbmNlbEJ1dHRvblByb3BzID0gcHJvcHMuY2FuY2VsQnV0dG9uUHJvcHMsXG4gICAgICBfcHJvcHMkaWNvblR5cGUgPSBwcm9wcy5pY29uVHlwZSxcbiAgICAgIGljb25UeXBlID0gX3Byb3BzJGljb25UeXBlID09PSB2b2lkIDAgPyAncXVlc3Rpb24tY2lyY2xlJyA6IF9wcm9wcyRpY29uVHlwZTtcbiAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkoISgnaWNvblR5cGUnIGluIHByb3BzKSwgJ01vZGFsJywgXCJUaGUgcHJvcGVydHkgJ2ljb25UeXBlJyBpcyBkZXByZWNhdGVkLiBVc2UgdGhlIHByb3BlcnR5ICdpY29uJyBpbnN0ZWFkLlwiKTsgLy8g5pSv5oyB5Lyg5YWleyBpY29uOiBudWxsIH3mnaXpmpDol49gTW9kYWwuY29uZmlybWDpu5jorqTnmoRJY29uXG5cbiAgdmFyIGljb24gPSBwcm9wcy5pY29uID09PSB1bmRlZmluZWQgPyBpY29uVHlwZSA6IHByb3BzLmljb247XG4gIHZhciBva1R5cGUgPSBwcm9wcy5va1R5cGUgfHwgJ3ByaW1hcnknO1xuICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzIHx8ICdhbnQtbW9kYWwnO1xuICB2YXIgY29udGVudFByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29uZmlybVwiKTsgLy8g6buY6K6k5Li6IHRydWXvvIzkv53mjIHlkJHkuIvlhbzlrrlcblxuICB2YXIgb2tDYW5jZWwgPSAnb2tDYW5jZWwnIGluIHByb3BzID8gcHJvcHMub2tDYW5jZWwgOiB0cnVlO1xuICB2YXIgd2lkdGggPSBwcm9wcy53aWR0aCB8fCA0MTY7XG4gIHZhciBzdHlsZSA9IHByb3BzLnN0eWxlIHx8IHt9O1xuICB2YXIgbWFzayA9IHByb3BzLm1hc2sgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBwcm9wcy5tYXNrOyAvLyDpu5jorqTkuLogZmFsc2XvvIzkv53mjIHml6fniYjpu5jorqTooYzkuLpcblxuICB2YXIgbWFza0Nsb3NhYmxlID0gcHJvcHMubWFza0Nsb3NhYmxlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IHByb3BzLm1hc2tDbG9zYWJsZTtcbiAgdmFyIHJ1bnRpbWVMb2NhbGUgPSAoMCwgX2xvY2FsZS5nZXRDb25maXJtTG9jYWxlKSgpO1xuICB2YXIgb2tUZXh0ID0gcHJvcHMub2tUZXh0IHx8IChva0NhbmNlbCA/IHJ1bnRpbWVMb2NhbGUub2tUZXh0IDogcnVudGltZUxvY2FsZS5qdXN0T2tUZXh0KTtcbiAgdmFyIGNhbmNlbFRleHQgPSBwcm9wcy5jYW5jZWxUZXh0IHx8IHJ1bnRpbWVMb2NhbGUuY2FuY2VsVGV4dDtcbiAgdmFyIGF1dG9Gb2N1c0J1dHRvbiA9IHByb3BzLmF1dG9Gb2N1c0J1dHRvbiA9PT0gbnVsbCA/IGZhbHNlIDogcHJvcHMuYXV0b0ZvY3VzQnV0dG9uIHx8ICdvayc7XG4gIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lIHx8ICd6b29tJztcbiAgdmFyIG1hc2tUcmFuc2l0aW9uTmFtZSA9IHByb3BzLm1hc2tUcmFuc2l0aW9uTmFtZSB8fCAnZmFkZSc7XG4gIHZhciBjbGFzc1N0cmluZyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNvbnRlbnRQcmVmaXhDbHMsIFwiXCIuY29uY2F0KGNvbnRlbnRQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQocHJvcHMudHlwZSksIHByb3BzLmNsYXNzTmFtZSk7XG4gIHZhciBjYW5jZWxCdXR0b24gPSBva0NhbmNlbCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KF9BY3Rpb25CdXR0b25bXCJkZWZhdWx0XCJdLCB7XG4gICAgYWN0aW9uRm46IG9uQ2FuY2VsLFxuICAgIGNsb3NlTW9kYWw6IGNsb3NlLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzQnV0dG9uID09PSAnY2FuY2VsJyxcbiAgICBidXR0b25Qcm9wczogY2FuY2VsQnV0dG9uUHJvcHNcbiAgfSwgY2FuY2VsVGV4dCk7XG4gIHZhciBpY29uTm9kZSA9IHR5cGVvZiBpY29uID09PSAnc3RyaW5nJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgdHlwZTogaWNvblxuICB9KSA6IGljb247XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9Nb2RhbFtcImRlZmF1bHRcIl0sIHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBjbGFzc05hbWU6IGNsYXNzU3RyaW5nLFxuICAgIHdyYXBDbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQoY29udGVudFByZWZpeENscywgXCItY2VudGVyZWRcIiksICEhcHJvcHMuY2VudGVyZWQpKSxcbiAgICBvbkNhbmNlbDogY2xvc2UuYmluZChfdGhpcywge1xuICAgICAgdHJpZ2dlckNhbmNlbDogdHJ1ZVxuICAgIH0pLFxuICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgdGl0bGU6IFwiXCIsXG4gICAgdHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLFxuICAgIGZvb3RlcjogXCJcIixcbiAgICBtYXNrVHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICBtYXNrOiBtYXNrLFxuICAgIG1hc2tDbG9zYWJsZTogbWFza0Nsb3NhYmxlLFxuICAgIG1hc2tTdHlsZTogbWFza1N0eWxlLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgekluZGV4OiB6SW5kZXgsXG4gICAgYWZ0ZXJDbG9zZTogYWZ0ZXJDbG9zZSxcbiAgICBrZXlib2FyZDoga2V5Ym9hcmQsXG4gICAgY2VudGVyZWQ6IGNlbnRlcmVkLFxuICAgIGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29udGVudFByZWZpeENscywgXCItYm9keS13cmFwcGVyXCIpXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29udGVudFByZWZpeENscywgXCItYm9keVwiKVxuICB9LCBpY29uTm9kZSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29udGVudFByZWZpeENscywgXCItdGl0bGVcIilcbiAgfSwgcHJvcHMudGl0bGUpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNvbnRlbnRQcmVmaXhDbHMsIFwiLWNvbnRlbnRcIilcbiAgfSwgcHJvcHMuY29udGVudCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNvbnRlbnRQcmVmaXhDbHMsIFwiLWJ0bnNcIilcbiAgfSwgY2FuY2VsQnV0dG9uLCBSZWFjdC5jcmVhdGVFbGVtZW50KF9BY3Rpb25CdXR0b25bXCJkZWZhdWx0XCJdLCB7XG4gICAgdHlwZTogb2tUeXBlLFxuICAgIGFjdGlvbkZuOiBvbk9rLFxuICAgIGNsb3NlTW9kYWw6IGNsb3NlLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzQnV0dG9uID09PSAnb2snLFxuICAgIGJ1dHRvblByb3BzOiBva0J1dHRvblByb3BzXG4gIH0sIG9rVGV4dCkpKSk7XG59O1xuXG5mdW5jdGlvbiBjb25maXJtKGNvbmZpZykge1xuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICB2YXIgY3VycmVudENvbmZpZyA9IF9leHRlbmRzKHt9LCBjb25maWcsIHtcbiAgICBjbG9zZTogY2xvc2UsXG4gICAgdmlzaWJsZTogdHJ1ZVxuICB9KTtcblxuICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgY3VycmVudENvbmZpZyA9IF9leHRlbmRzKHt9LCBjdXJyZW50Q29uZmlnLCB7XG4gICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgIGFmdGVyQ2xvc2U6IGRlc3Ryb3kuYmluZC5hcHBseShkZXN0cm95LCBbdGhpc10uY29uY2F0KGFyZ3MpKVxuICAgIH0pO1xuXG4gICAgaWYgKElTX1JFQUNUXzE2KSB7XG4gICAgICByZW5kZXIoY3VycmVudENvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3Ryb3kuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUobmV3Q29uZmlnKSB7XG4gICAgY3VycmVudENvbmZpZyA9IF9leHRlbmRzKHt9LCBjdXJyZW50Q29uZmlnLCBuZXdDb25maWcpO1xuICAgIHJlbmRlcihjdXJyZW50Q29uZmlnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdmFyIHVubW91bnRSZXN1bHQgPSBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKGRpdik7XG5cbiAgICBpZiAodW5tb3VudFJlc3VsdCAmJiBkaXYucGFyZW50Tm9kZSkge1xuICAgICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgdHJpZ2dlckNhbmNlbCA9IGFyZ3Muc29tZShmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgIHJldHVybiBwYXJhbSAmJiBwYXJhbS50cmlnZ2VyQ2FuY2VsO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5vbkNhbmNlbCAmJiB0cmlnZ2VyQ2FuY2VsKSB7XG4gICAgICBjb25maWcub25DYW5jZWwuYXBwbHkoY29uZmlnLCBhcmdzKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9Nb2RhbC5kZXN0cm95Rm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZm4gPSBfTW9kYWwuZGVzdHJveUZuc1tpXTtcblxuICAgICAgaWYgKGZuID09PSBjbG9zZSkge1xuICAgICAgICBfTW9kYWwuZGVzdHJveUZucy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyKHByb3BzKSB7XG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlybURpYWxvZywgcHJvcHMpLCBkaXYpO1xuICB9XG5cbiAgcmVuZGVyKGN1cnJlbnRDb25maWcpO1xuXG4gIF9Nb2RhbC5kZXN0cm95Rm5zLnB1c2goY2xvc2UpO1xuXG4gIHJldHVybiB7XG4gICAgZGVzdHJveTogY2xvc2UsXG4gICAgdXBkYXRlOiB1cGRhdGVcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX01vZGFsID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vTW9kYWxcIikpO1xuXG52YXIgX2NvbmZpcm0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbmZpcm1cIikpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5fTW9kYWxbXCJkZWZhdWx0XCJdLmluZm8gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgdmFyIGNvbmZpZyA9IF9leHRlbmRzKHtcbiAgICB0eXBlOiAnaW5mbycsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgIHR5cGU6IFwiaW5mby1jaXJjbGVcIlxuICAgIH0pLFxuICAgIG9rQ2FuY2VsOiBmYWxzZVxuICB9LCBwcm9wcyk7XG5cbiAgcmV0dXJuICgwLCBfY29uZmlybVtcImRlZmF1bHRcIl0pKGNvbmZpZyk7XG59O1xuXG5fTW9kYWxbXCJkZWZhdWx0XCJdLnN1Y2Nlc3MgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgdmFyIGNvbmZpZyA9IF9leHRlbmRzKHtcbiAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgIHR5cGU6IFwiY2hlY2stY2lyY2xlXCJcbiAgICB9KSxcbiAgICBva0NhbmNlbDogZmFsc2VcbiAgfSwgcHJvcHMpO1xuXG4gIHJldHVybiAoMCwgX2NvbmZpcm1bXCJkZWZhdWx0XCJdKShjb25maWcpO1xufTtcblxuX01vZGFsW1wiZGVmYXVsdFwiXS5lcnJvciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICB2YXIgY29uZmlnID0gX2V4dGVuZHMoe1xuICAgIHR5cGU6ICdlcnJvcicsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgIHR5cGU6IFwiY2xvc2UtY2lyY2xlXCJcbiAgICB9KSxcbiAgICBva0NhbmNlbDogZmFsc2VcbiAgfSwgcHJvcHMpO1xuXG4gIHJldHVybiAoMCwgX2NvbmZpcm1bXCJkZWZhdWx0XCJdKShjb25maWcpO1xufTtcblxuX01vZGFsW1wiZGVmYXVsdFwiXS53YXJuaW5nID0gX01vZGFsW1wiZGVmYXVsdFwiXS53YXJuID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7XG4gICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgICB0eXBlOiBcImV4Y2xhbWF0aW9uLWNpcmNsZVwiXG4gICAgfSksXG4gICAgb2tDYW5jZWw6IGZhbHNlXG4gIH0sIHByb3BzKTtcblxuICByZXR1cm4gKDAsIF9jb25maXJtW1wiZGVmYXVsdFwiXSkoY29uZmlnKTtcbn07XG5cbl9Nb2RhbFtcImRlZmF1bHRcIl0uY29uZmlybSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICB2YXIgY29uZmlnID0gX2V4dGVuZHMoe1xuICAgIHR5cGU6ICdjb25maXJtJyxcbiAgICBva0NhbmNlbDogdHJ1ZVxuICB9LCBwcm9wcyk7XG5cbiAgcmV0dXJuICgwLCBfY29uZmlybVtcImRlZmF1bHRcIl0pKGNvbmZpZyk7XG59O1xuXG5fTW9kYWxbXCJkZWZhdWx0XCJdLmRlc3Ryb3lBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHdoaWxlIChfTW9kYWwuZGVzdHJveUZucy5sZW5ndGgpIHtcbiAgICB2YXIgY2xvc2UgPSBfTW9kYWwuZGVzdHJveUZucy5wb3AoKTtcblxuICAgIGlmIChjbG9zZSkge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBfZGVmYXVsdCA9IF9Nb2RhbFtcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcblxuY29uc3QgQ29uZmlybU1vZGFsID0gcHJvcHMgPT4gPE1vZGFsIHsuLi5wcm9wc30gLz5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKENvbmZpcm1Nb2RhbClcbiJdLCJuYW1lcyI6WyJSZWFjdC5jcmVhdGVFbGVtZW50IiwiUmVhY3QuQ29tcG9uZW50IiwiQW5pbWF0ZSIsIlJlYWN0RE9NLmZpbmRET01Ob2RlIiwiUmVhY3RET00iLCJSZWFjdCIsIlByb3BUeXBlcyIsIl9FdmVudEJhc2VPYmplY3QiLCJfb2JqZWN0QXNzaWduIiwiX0V2ZW50T2JqZWN0IiwiX2FkZERvbUV2ZW50TGlzdGVuZXIiLCJfcmVhY3REb20iLCJyZXF1aXJlJCQwIiwicmVxdWlyZSQkMSIsInJlcXVpcmUkJDIiLCJyZXF1aXJlJCQzIiwicmVxdWlyZSQkNCIsInJlcXVpcmUkJDUiLCJyZXF1aXJlJCQ2IiwiX2xvY2FsZSIsIkNvbmZpcm1Nb2RhbCIsInByb3BzIiwid2l0aFRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBTUEsSUFBSSxPQUFPLEdBQUc7Ozs7RUFJWixTQUFTLEVBQUUsQ0FBQzs7OztFQUlaLFNBQVMsRUFBRSxDQUFDOzs7O0VBSVosR0FBRyxFQUFFLENBQUM7Ozs7RUFJTixVQUFVLEVBQUUsRUFBRTs7OztFQUlkLEtBQUssRUFBRSxFQUFFOzs7O0VBSVQsS0FBSyxFQUFFLEVBQUU7Ozs7RUFJVCxJQUFJLEVBQUUsRUFBRTs7OztFQUlSLEdBQUcsRUFBRSxFQUFFOzs7O0VBSVAsS0FBSyxFQUFFLEVBQUU7Ozs7RUFJVCxTQUFTLEVBQUUsRUFBRTs7OztFQUliLEdBQUcsRUFBRSxFQUFFOzs7O0VBSVAsS0FBSyxFQUFFLEVBQUU7Ozs7RUFJVCxPQUFPLEVBQUUsRUFBRTs7OztFQUlYLFNBQVMsRUFBRSxFQUFFOzs7O0VBSWIsR0FBRyxFQUFFLEVBQUU7Ozs7RUFJUCxJQUFJLEVBQUUsRUFBRTs7OztFQUlSLElBQUksRUFBRSxFQUFFOzs7O0VBSVIsRUFBRSxFQUFFLEVBQUU7Ozs7RUFJTixLQUFLLEVBQUUsRUFBRTs7OztFQUlULElBQUksRUFBRSxFQUFFOzs7O0VBSVIsWUFBWSxFQUFFLEVBQUU7Ozs7RUFJaEIsTUFBTSxFQUFFLEVBQUU7Ozs7RUFJVixNQUFNLEVBQUUsRUFBRTs7OztFQUlWLElBQUksRUFBRSxFQUFFOzs7O0VBSVIsR0FBRyxFQUFFLEVBQUU7Ozs7RUFJUCxHQUFHLEVBQUUsRUFBRTs7OztFQUlQLEtBQUssRUFBRSxFQUFFOzs7O0VBSVQsSUFBSSxFQUFFLEVBQUU7Ozs7RUFJUixJQUFJLEVBQUUsRUFBRTs7OztFQUlSLEdBQUcsRUFBRSxFQUFFOzs7O0VBSVAsS0FBSyxFQUFFLEVBQUU7Ozs7RUFJVCxLQUFLLEVBQUUsRUFBRTs7OztFQUlULElBQUksRUFBRSxFQUFFOzs7O0VBSVIsYUFBYSxFQUFFLEVBQUU7Ozs7RUFJakIsQ0FBQyxFQUFFLEVBQUU7Ozs7RUFJTCxDQUFDLEVBQUUsRUFBRTs7OztFQUlMLENBQUMsRUFBRSxFQUFFOzs7O0VBSUwsQ0FBQyxFQUFFLEVBQUU7Ozs7RUFJTCxDQUFDLEVBQUUsRUFBRTs7OztFQUlMLENBQUMsRUFBRSxFQUFFOzs7O0VBSUwsQ0FBQyxFQUFFLEVBQUU7Ozs7RUFJTCxDQUFDLEVBQUUsRUFBRTs7OztFQUlMLENBQUMsRUFBRSxFQUFFOzs7O0VBSUwsQ0FBQyxFQUFFLEVBQUU7Ozs7RUFJTCxDQUFDLEVBQUUsRUFBRTs7OztFQUlMLENBQUMsRUFBRSxFQUFFOzs7O0VBSUwsQ0FBQyxFQUFFLEVBQUU7Ozs7RUFJTCxDQUFDLEVBQUUsRUFBRTs7OztFQUlMLENBQUMsRUFBRSxFQUFFOzs7O0VBSUwsQ0FBQyxFQUFFLEVBQUU7Ozs7RUFJTCxDQUFDLEVBQUUsRUFBRTs7OztFQUlMLENBQUMsRUFBRSxFQUFFOzs7O0VBSUwsQ0FBQyxFQUFFLEVBQUU7Ozs7RUFJTCxDQUFDLEVBQUUsRUFBRTs7OztFQUlMLENBQUMsRUFBRSxFQUFFOzs7O0VBSUwsQ0FBQyxFQUFFLEVBQUU7Ozs7RUFJTCxDQUFDLEVBQUUsRUFBRTs7OztFQUlMLENBQUMsRUFBRSxFQUFFOzs7O0VBSUwsQ0FBQyxFQUFFLEVBQUU7Ozs7RUFJTCxDQUFDLEVBQUUsRUFBRTs7OztFQUlMLElBQUksRUFBRSxFQUFFOzs7O0VBSVIsYUFBYSxFQUFFLEVBQUU7Ozs7RUFJakIsWUFBWSxFQUFFLEVBQUU7Ozs7RUFJaEIsUUFBUSxFQUFFLEVBQUU7Ozs7RUFJWixPQUFPLEVBQUUsRUFBRTs7OztFQUlYLE9BQU8sRUFBRSxFQUFFOzs7O0VBSVgsU0FBUyxFQUFFLEVBQUU7Ozs7RUFJYixRQUFRLEVBQUUsR0FBRzs7OztFQUliLFFB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QUUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRTs7QUFFM2QsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRSxFQUFFLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLEdBQUcsS0FBSyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O0FBRS9WLFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FB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QUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUU7O0FBRTNkLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUUsRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFOztBQUUvVixTQUFTLFFBQVEsR0FBRyxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENB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Q0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFOztBQUUzZCxTQUFTLFFBQVEsR0FBRyxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUU7O0FBRTdULE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxLQUFLLEVBQUU7RUFDeEMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ3BCLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO01BQzFDLElBQUksRUFB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
