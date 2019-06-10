import '../chunk-d8a06a3d.js';
import { d as _warning, r as require$$0$1, a as require$$2$1, _ as _configProvider } from '../chunk-0778d5d4.js';
import { a as require$$5, r as require$$6 } from '../chunk-13e84b1f.js';
import { a as createCommonjsModule, u as unwrapExports, b as React__default, r as require$$1$2 } from '../chunk-eda5d4be.js';
import 'react';
import 'prop-types';
import { _ as _type } from '../chunk-6e44f481.js';
import { a as isObject } from '../chunk-cac7487f.js';
import { e as castPath, c as toKey, _ as _eq, d as baseGet, g as get } from '../chunk-fbb69a11.js';
import '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
import { d as isIndex, a as assignValue, j as flatRest } from '../chunk-63c8ffb1.js';
import { a as hasPath, h as hasIn } from '../chunk-886cf7ac.js';
import '../chunk-1862c33d.js';
import '../chunk-26044e16.js';
import { j as anObject, k as require$$0, I as Iterators, $ as $defineProperty, l as createDesc, m as cof, n as require$$2, o as $export, t as toObject, p as ctx, q as toLength, g as _typeof$1, c as _extends$1, s as _extends$2, u as classCallCheck, v as defineProperty$1, w as createClass, x as objectWithoutProperties, r as require$$4$1, e as require$$6$1, f as require$$3 } from '../chunk-167e2b08.js';
import 'react-dom';
import { _ as _assign, r as require$$4 } from '../chunk-517f8ce4.js';
import { r as require$$1$1 } from '../chunk-8820e6e0.js';
import '../chunk-08f0fb15.js';
import CustomButton from '../CustomButton/index.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

function getClientPosition(elem) {
  var box = undefined;
  var x = undefined;
  var y = undefined;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
function _getComputedStyle(elem, name, computedStyle_) {
  var val = '';
  var d = elem.ownerDocument;
  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

var getComputedStyleX = undefined;
if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = undefined;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = undefined;
  var j = undefined;
  var i = undefined;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = undefined;
        if (prop === 'border') {
          cssProp = prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj != null && obj == obj.window;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, extra) {
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;
  if (borderBoxValue == null || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }
    return cssBoxValue;
  }
  if (borderBoxValueOrIsBorderBox) {
    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which);
    return val + (extra === BORDER_INDEX ? 0 : padding);
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay(elem) {
  var val = undefined;
  var args = arguments;
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

function css(el, name, v) {
  var value = v;
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value += 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, val) {
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

// 设置 elem 相对 elem.ownerDocument 的坐标
function setOffset(elem, offset) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var old = getOffset(elem);
  var ret = {};
  var current = undefined;
  var key = undefined;

  for (key in offset) {
    if (offset.hasOwnProperty(key)) {
      current = parseFloat(css(elem, key)) || 0;
      ret[key] = current + offset[key] - old[key];
    }
  }
  css(elem, ret);
}

var util = _extends({
  getWindow: function getWindow(node) {
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  offset: function offset(el, value) {
    if (typeof value !== 'undefined') {
      setOffset(el, value);
    } else {
      return getOffset(el);
    }
  },

  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var ret = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },
  scrollLeft: function scrollLeft(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollLeft(w);
      }
      window.scrollTo(v, getScrollTop(w));
    } else {
      if (v === undefined) {
        return w.scrollLeft;
      }
      w.scrollLeft = v;
    }
  },
  scrollTop: function scrollTop(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollTop(w);
      }
      window.scrollTo(getScrollLeft(w), v);
    } else {
      if (v === undefined) {
        return w.scrollTop;
      }
      w.scrollTop = v;
    }
  },

  viewportWidth: 0,
  viewportHeight: 0
}, domUtils);

function scrollIntoView(elem, container, config) {
  config = config || {};
  // document 归一化到 window
  if (container.nodeType === 9) {
    container = util.getWindow(container);
  }

  var allowHorizontalScroll = config.allowHorizontalScroll;
  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
  var alignWithTop = config.alignWithTop;
  var alignWithLeft = config.alignWithLeft;
  var offsetTop = config.offsetTop || 0;
  var offsetLeft = config.offsetLeft || 0;
  var offsetBottom = config.offsetBottom || 0;
  var offsetRight = config.offsetRight || 0;

  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;

  var isWin = util.isWindow(container);
  var elemOffset = util.offset(elem);
  var eh = util.outerHeight(elem);
  var ew = util.outerWidth(elem);
  var containerOffset = undefined;
  var ch = undefined;
  var cw = undefined;
  var containerScroll = undefined;
  var diffTop = undefined;
  var diffBottom = undefined;
  var win = undefined;
  var winScroll = undefined;
  var ww = undefined;
  var wh = undefined;

  if (isWin) {
    win = container;
    wh = util.height(win);
    ww = util.width(win);
    winScroll = {
      left: util.scrollLeft(win),
      top: util.scrollTop(win)
    };
    // elem 相对 container 可视视窗的距离
    diffTop = {
      left: elemOffset.left - winScroll.left - offsetLeft,
      top: elemOffset.top - winScroll.top - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
    };
    containerScroll = winScroll;
  } else {
    containerOffset = util.offset(container);
    ch = container.clientHeight;
    cw = container.clientWidth;
    containerScroll = {
      left: container.scrollLeft,
      top: container.scrollTop
    };
    // elem 相对 container 可视视窗的距离
    // 注意边框, offset 是边框到根节点
    diffTop = {
      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
    };
  }

  if (diffTop.top < 0 || diffBottom.top > 0) {
    // 强制向上
    if (alignWithTop === true) {
      util.scrollTop(container, containerScroll.top + diffTop.top);
    } else if (alignWithTop === false) {
      util.scrollTop(container, containerScroll.top + diffBottom.top);
    } else {
      // 自动调整
      if (diffTop.top < 0) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  } else {
    if (!onlyScrollIfNeeded) {
      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
      if (alignWithTop) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  }

  if (allowHorizontalScroll) {
    if (diffTop.left < 0 || diffBottom.left > 0) {
      // 强制向上
      if (alignWithLeft === true) {
        util.scrollLeft(container, containerScroll.left + diffTop.left);
      } else if (alignWithLeft === false) {
        util.scrollLeft(container, containerScroll.left + diffBottom.left);
      } else {
        // 自动调整
        if (diffTop.left < 0) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    } else {
      if (!onlyScrollIfNeeded) {
        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
        if (alignWithLeft) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    }
  }
}

var domScrollIntoView = scrollIntoView;

var lib = domScrollIntoView;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

var _baseHas = baseHas;

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, _baseHas);
}

var has_1 = has;

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR = require$$0('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

var _createProperty = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG = require$$0('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$1 = require$$0('iterator');

var core_getIteratorMethod = require$$2.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$1]
    || it['@@iterator']
    || Iterators[_classof(it)];
};

var ITERATOR$2 = require$$0('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$2]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$2]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$2] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

$export($export.S + $export.F * !_iterDetect(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var from_1 = require$$2.Array.from;

var from_1$1 = createCommonjsModule(function (module) {
module.exports = { "default": from_1, __esModule: true };
});

unwrapExports(from_1$1);

var toConsumableArray = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _from2 = _interopRequireDefault(from_1$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
});

unwrapExports(toConsumableArray);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

var emptyObject_1 = emptyObject;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
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

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

if (process.env.NODE_ENV !== 'production') {
  var warning$1 = warning_1;
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (process.env.NODE_ENV !== 'production') {
          warning$1(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      invariant_1(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      invariant_1(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (process.env.NODE_ENV !== 'production') {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (process.env.NODE_ENV !== 'production') {
          warning$1(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    invariant_1(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    invariant_1(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            invariant_1(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (process.env.NODE_ENV !== 'production') {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      invariant_1(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        invariant_1(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    invariant_1(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        invariant_1(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (process.env.NODE_ENV !== 'production') {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (process.env.NODE_ENV !== 'production') {
            warning$1(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (process.env.NODE_ENV !== 'production') {
            warning$1(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (process.env.NODE_ENV !== 'production') {
        warning$1(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        warning$1(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject_1;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      invariant_1(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    invariant_1(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (process.env.NODE_ENV !== 'production') {
      warning$1(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning$1(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
      warning$1(
        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
          'Did you mean UNSAFE_componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

var factory_1 = factory;

if (typeof React__default === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React__default.Component().updater;

var createReactClass = factory_1(
  React__default.Component,
  React__default.isValidElement,
  ReactNoopUpdateQueue
);

var formatRegExp = /%[sdj%]/g;

var warning$2 = function warning() {};

// don't print warning message when in production env or node runtime
if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning$2 = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += ' ' + arg;
    }
    return str;
  }
  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var flattenArr = flattenObjArr(objArr);
    return asyncSerialArray(flattenArr, func, callback);
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var next = function next(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === objArrLength) {
      callback(results);
    }
  };
  objArrKeys.forEach(function (key) {
    var arr = objArr[key];
    if (firstFields.indexOf(key) !== -1) {
      asyncSerialArray(arr, func, next);
    } else {
      asyncParallelArray(arr, func, next);
    }
  });
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: oe,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof$1(value)) === 'object' && _typeof$1(target[s]) === 'object') {
          target[s] = _extends$1({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  object: function object(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof$1(value)) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};

/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
    // straight typeof check
  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : _typeof$1(value)) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number';
  // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  }
  // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

var ENUM = 'enum';

/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  'enum': enumerable,
  pattern: pattern$1
};

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'string');
    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'array');
    if (!isEmptyValue(value, 'array')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

var ENUM$1 = 'enum';

/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  // console.log('validate on %s value', value);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      var dateObject = void 0;

      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }

      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}

function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof$1(value);
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}

function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

var validators = {
  string: string,
  method: method,
  number: number,
  boolean: boolean,
  regexp: regexp,
  integer: integer,
  float: floatFn,
  array: array,
  object: object,
  'enum': enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1
};

function newMessages() {
  return {
    'default': 'Validation error on field %s',
    required: '%s is required',
    'enum': '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */
function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((typeof rules === 'undefined' ? 'undefined' : _typeof$1(rules)) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z = void 0;
    var item = void 0;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_) {
    var _this = this;

    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var oc = arguments[2];

    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return;
    }
    function complete(results) {
      var i = void 0;
      var field = void 0;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          errors = errors.concat.apply(errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        for (i = 0; i < errors.length; i++) {
          field = errors[i].field;
          fields[field] = fields[field] || [];
          fields[field].push(errors[i]);
        }
      }
      callback(errors, fields);
    }

    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var arr = void 0;
    var value = void 0;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends$1({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends$1({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof$1(rule.fields) === 'object' || _typeof$1(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return _extends$1({}, schema, {
          fullField: rule.fullField + '.' + key
        });
      }

      function cb() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (errors.length) {
          warning$2('async-validator:', errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }

          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = _extends$1({}, fieldsSchema, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            doIt(errs && errs.length ? errors.concat(errs) : errs);
          });
        }
      }

      var res = rule.validator(rule, data.value, cb, data.source, options);
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }
    return validators[this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  validators[type] = validator;
};

Schema.messages = messages;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet;

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : _baseSet(object, path, value);
}

var set_1 = set;

var createFormField_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _extends3 = _interopRequireDefault(_extends$2);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);

exports.isFormField = isFormField;
exports["default"] = createFormField;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Field = function Field(fields) {
  (0, _classCallCheck3["default"])(this, Field);

  (0, _extends3["default"])(this, fields);
};

function isFormField(obj) {
  return obj instanceof Field;
}

function createFormField(field) {
  if (isFormField(field)) {
    return field;
  }
  return new Field(field);
}
});

unwrapExports(createFormField_1);
var createFormField_2 = createFormField_1.isFormField;

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
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

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

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

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _extends3 = _interopRequireDefault(_extends$2);

exports.argumentContainer = argumentContainer;
exports.identity = identity;
exports.flattenArray = flattenArray;
exports.treeTraverse = treeTraverse;
exports.flattenFields = flattenFields;
exports.normalizeValidateRules = normalizeValidateRules;
exports.getValidateTriggers = getValidateTriggers;
exports.getValueFromEvent = getValueFromEvent;
exports.getErrorStrs = getErrorStrs;
exports.getParams = getParams;
exports.isEmptyObject = isEmptyObject;
exports.hasRules = hasRules;
exports.startsWith = startsWith;



var _hoistNonReactStatics2 = _interopRequireDefault(hoistNonReactStatics_cjs);



var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
}

function argumentContainer(Container, WrappedComponent) {
  /* eslint no-param-reassign:0 */
  Container.displayName = 'Form(' + getDisplayName(WrappedComponent) + ')';
  Container.WrappedComponent = WrappedComponent;
  return (0, _hoistNonReactStatics2['default'])(Container, WrappedComponent);
}

function identity(obj) {
  return obj;
}

function flattenArray(arr) {
  return Array.prototype.concat.apply([], arr);
}

function treeTraverse() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var tree = arguments[1];
  var isLeafNode = arguments[2];
  var errorMessage = arguments[3];
  var callback = arguments[4];

  if (isLeafNode(path, tree)) {
    callback(path, tree);
  } else if (tree === undefined || tree === null) ; else if (Array.isArray(tree)) {
    tree.forEach(function (subTree, index) {
      return treeTraverse(path + '[' + index + ']', subTree, isLeafNode, errorMessage, callback);
    });
  } else {
    // It's object and not a leaf node
    if (typeof tree !== 'object') {
      (0, _warning2['default'])(false, errorMessage);
      return;
    }
    Object.keys(tree).forEach(function (subTreeKey) {
      var subTree = tree[subTreeKey];
      treeTraverse('' + path + (path ? '.' : '') + subTreeKey, subTree, isLeafNode, errorMessage, callback);
    });
  }
}

function flattenFields(maybeNestedFields, isLeafNode, errorMessage) {
  var fields = {};
  treeTraverse(undefined, maybeNestedFields, isLeafNode, errorMessage, function (path, node) {
    fields[path] = node;
  });
  return fields;
}

function normalizeValidateRules(validate, rules, validateTrigger) {
  var validateRules = validate.map(function (item) {
    var newItem = (0, _extends3['default'])({}, item, {
      trigger: item.trigger || []
    });
    if (typeof newItem.trigger === 'string') {
      newItem.trigger = [newItem.trigger];
    }
    return newItem;
  });
  if (rules) {
    validateRules.push({
      trigger: validateTrigger ? [].concat(validateTrigger) : [],
      rules: rules
    });
  }
  return validateRules;
}

function getValidateTriggers(validateRules) {
  return validateRules.filter(function (item) {
    return !!item.rules && item.rules.length;
  }).map(function (item) {
    return item.trigger;
  }).reduce(function (pre, curr) {
    return pre.concat(curr);
  }, []);
}

function getValueFromEvent(e) {
  // To support custom element
  if (!e || !e.target) {
    return e;
  }
  var target = e.target;

  return target.type === 'checkbox' ? target.checked : target.value;
}

function getErrorStrs(errors) {
  if (errors) {
    return errors.map(function (e) {
      if (e && e.message) {
        return e.message;
      }
      return e;
    });
  }
  return errors;
}

function getParams(ns, opt, cb) {
  var names = ns;
  var options = opt;
  var callback = cb;
  if (cb === undefined) {
    if (typeof names === 'function') {
      callback = names;
      options = {};
      names = undefined;
    } else if (Array.isArray(names)) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
    } else {
      callback = options;
      options = names || {};
      names = undefined;
    }
  }
  return {
    names: names,
    options: options,
    callback: callback
  };
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function hasRules(validate) {
  if (validate) {
    return validate.some(function (item) {
      return item.rules && item.rules.length;
    });
  }
  return false;
}

function startsWith(str, prefix) {
  return str.lastIndexOf(prefix, 0) === 0;
}
});

unwrapExports(utils);
var utils_1 = utils.argumentContainer;
var utils_2 = utils.identity;
var utils_3 = utils.flattenArray;
var utils_4 = utils.treeTraverse;
var utils_5 = utils.flattenFields;
var utils_6 = utils.normalizeValidateRules;
var utils_7 = utils.getValidateTriggers;
var utils_8 = utils.getValueFromEvent;
var utils_9 = utils.getErrorStrs;
var utils_10 = utils.getParams;
var utils_11 = utils.isEmptyObject;
var utils_12 = utils.hasRules;
var utils_13 = utils.startsWith;

var createFieldsStore_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _defineProperty3 = _interopRequireDefault(defineProperty$1);



var _extends3 = _interopRequireDefault(_extends$2);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);

exports['default'] = createFieldsStore;



var _set2 = _interopRequireDefault(set_1);



var _createFormField2 = _interopRequireDefault(createFormField_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function partOf(a, b) {
  return b.indexOf(a) === 0 && ['.', '['].indexOf(b[a.length]) !== -1;
}

function internalFlattenFields(fields) {
  return (0, utils.flattenFields)(fields, function (_, node) {
    return (0, createFormField_1.isFormField)(node);
  }, 'You must wrap field data with `createFormField`.');
}

var FieldsStore = function () {
  function FieldsStore(fields) {
    (0, _classCallCheck3['default'])(this, FieldsStore);

    _initialiseProps.call(this);

    this.fields = internalFlattenFields(fields);
    this.fieldsMeta = {};
  }

  (0, _createClass3['default'])(FieldsStore, [{
    key: 'updateFields',
    value: function updateFields(fields) {
      this.fields = internalFlattenFields(fields);
    }
  }, {
    key: 'flattenRegisteredFields',
    value: function flattenRegisteredFields(fields) {
      var validFieldsName = this.getAllFieldsName();
      return (0, utils.flattenFields)(fields, function (path) {
        return validFieldsName.indexOf(path) >= 0;
      }, 'You cannot set a form field before rendering a field associated with the value.');
    }
  }, {
    key: 'setFields',
    value: function setFields(fields) {
      var _this = this;

      var fieldsMeta = this.fieldsMeta;
      var nowFields = (0, _extends3['default'])({}, this.fields, fields);
      var nowValues = {};
      Object.keys(fieldsMeta).forEach(function (f) {
        nowValues[f] = _this.getValueFromFields(f, nowFields);
      });
      Object.keys(nowValues).forEach(function (f) {
        var value = nowValues[f];
        var fieldMeta = _this.getFieldMeta(f);
        if (fieldMeta && fieldMeta.normalize) {
          var nowValue = fieldMeta.normalize(value, _this.getValueFromFields(f, _this.fields), nowValues);
          if (nowValue !== value) {
            nowFields[f] = (0, _extends3['default'])({}, nowFields[f], {
              value: nowValue
            });
          }
        }
      });
      this.fields = nowFields;
    }
  }, {
    key: 'resetFields',
    value: function resetFields(ns) {
      var fields = this.fields;

      var names = ns ? this.getValidFieldsFullName(ns) : this.getAllFieldsName();
      return names.reduce(function (acc, name) {
        var field = fields[name];
        if (field && 'value' in field) {
          acc[name] = {};
        }
        return acc;
      }, {});
    }
  }, {
    key: 'setFieldMeta',
    value: function setFieldMeta(name, meta) {
      this.fieldsMeta[name] = meta;
    }
  }, {
    key: 'setFieldsAsDirty',
    value: function setFieldsAsDirty() {
      var _this2 = this;

      Object.keys(this.fields).forEach(function (name) {
        var field = _this2.fields[name];
        var fieldMeta = _this2.fieldsMeta[name];
        if (field && fieldMeta && (0, utils.hasRules)(fieldMeta.validate)) {
          _this2.fields[name] = (0, _extends3['default'])({}, field, {
            dirty: true
          });
        }
      });
    }
  }, {
    key: 'getFieldMeta',
    value: function getFieldMeta(name) {
      this.fieldsMeta[name] = this.fieldsMeta[name] || {};
      return this.fieldsMeta[name];
    }
  }, {
    key: 'getValueFromFields',
    value: function getValueFromFields(name, fields) {
      var field = fields[name];
      if (field && 'value' in field) {
        return field.value;
      }
      var fieldMeta = this.getFieldMeta(name);
      return fieldMeta && fieldMeta.initialValue;
    }
  }, {
    key: 'getValidFieldsName',
    value: function getValidFieldsName() {
      var _this3 = this;

      var fieldsMeta = this.fieldsMeta;

      return fieldsMeta ? Object.keys(fieldsMeta).filter(function (name) {
        return !_this3.getFieldMeta(name).hidden;
      }) : [];
    }
  }, {
    key: 'getAllFieldsName',
    value: function getAllFieldsName() {
      var fieldsMeta = this.fieldsMeta;

      return fieldsMeta ? Object.keys(fieldsMeta) : [];
    }
  }, {
    key: 'getValidFieldsFullName',
    value: function getValidFieldsFullName(maybePartialName) {
      var maybePartialNames = Array.isArray(maybePartialName) ? maybePartialName : [maybePartialName];
      return this.getValidFieldsName().filter(function (fullName) {
        return maybePartialNames.some(function (partialName) {
          return fullName === partialName || (0, utils.startsWith)(fullName, partialName) && ['.', '['].indexOf(fullName[partialName.length]) >= 0;
        });
      });
    }
  }, {
    key: 'getFieldValuePropValue',
    value: function getFieldValuePropValue(fieldMeta) {
      var name = fieldMeta.name,
          getValueProps = fieldMeta.getValueProps,
          valuePropName = fieldMeta.valuePropName;

      var field = this.getField(name);
      var fieldValue = 'value' in field ? field.value : fieldMeta.initialValue;
      if (getValueProps) {
        return getValueProps(fieldValue);
      }
      return (0, _defineProperty3['default'])({}, valuePropName, fieldValue);
    }
  }, {
    key: 'getField',
    value: function getField(name) {
      return (0, _extends3['default'])({}, this.fields[name], {
        name: name
      });
    }
  }, {
    key: 'getNotCollectedFields',
    value: function getNotCollectedFields() {
      var _this4 = this;

      var fieldsName = this.getValidFieldsName();
      return fieldsName.filter(function (name) {
        return !_this4.fields[name];
      }).map(function (name) {
        return {
          name: name,
          dirty: false,
          value: _this4.getFieldMeta(name).initialValue
        };
      }).reduce(function (acc, field) {
        return (0, _set2['default'])(acc, field.name, (0, _createFormField2['default'])(field));
      }, {});
    }
  }, {
    key: 'getNestedAllFields',
    value: function getNestedAllFields() {
      var _this5 = this;

      return Object.keys(this.fields).reduce(function (acc, name) {
        return (0, _set2['default'])(acc, name, (0, _createFormField2['default'])(_this5.fields[name]));
      }, this.getNotCollectedFields());
    }
  }, {
    key: 'getFieldMember',
    value: function getFieldMember(name, member) {
      return this.getField(name)[member];
    }
  }, {
    key: 'getNestedFields',
    value: function getNestedFields(names, getter) {
      var fields = names || this.getValidFieldsName();
      return fields.reduce(function (acc, f) {
        return (0, _set2['default'])(acc, f, getter(f));
      }, {});
    }
  }, {
    key: 'getNestedField',
    value: function getNestedField(name, getter) {
      var fullNames = this.getValidFieldsFullName(name);
      if (fullNames.length === 0 || // Not registered
      fullNames.length === 1 && fullNames[0] === name // Name already is full name.
      ) {
          return getter(name);
        }
      var isArrayValue = fullNames[0][name.length] === '[';
      var suffixNameStartIndex = isArrayValue ? name.length : name.length + 1;
      return fullNames.reduce(function (acc, fullName) {
        return (0, _set2['default'])(acc, fullName.slice(suffixNameStartIndex), getter(fullName));
      }, isArrayValue ? [] : {});
    }
  }, {
    key: 'isValidNestedFieldName',


    // @private
    // BG: `a` and `a.b` cannot be use in the same form
    value: function isValidNestedFieldName(name) {
      var names = this.getAllFieldsName();
      return names.every(function (n) {
        return !partOf(n, name) && !partOf(name, n);
      });
    }
  }, {
    key: 'clearField',
    value: function clearField(name) {
      delete this.fields[name];
      delete this.fieldsMeta[name];
    }
  }]);
  return FieldsStore;
}();

var _initialiseProps = function _initialiseProps() {
  var _this6 = this;

  this.setFieldsInitialValue = function (initialValues) {
    var flattenedInitialValues = _this6.flattenRegisteredFields(initialValues);
    var fieldsMeta = _this6.fieldsMeta;
    Object.keys(flattenedInitialValues).forEach(function (name) {
      if (fieldsMeta[name]) {
        _this6.setFieldMeta(name, (0, _extends3['default'])({}, _this6.getFieldMeta(name), {
          initialValue: flattenedInitialValues[name]
        }));
      }
    });
  };

  this.getAllValues = function () {
    var fieldsMeta = _this6.fieldsMeta,
        fields = _this6.fields;

    return Object.keys(fieldsMeta).reduce(function (acc, name) {
      return (0, _set2['default'])(acc, name, _this6.getValueFromFields(name, fields));
    }, {});
  };

  this.getFieldsValue = function (names) {
    return _this6.getNestedFields(names, _this6.getFieldValue);
  };

  this.getFieldValue = function (name) {
    var fields = _this6.fields;

    return _this6.getNestedField(name, function (fullName) {
      return _this6.getValueFromFields(fullName, fields);
    });
  };

  this.getFieldsError = function (names) {
    return _this6.getNestedFields(names, _this6.getFieldError);
  };

  this.getFieldError = function (name) {
    return _this6.getNestedField(name, function (fullName) {
      return (0, utils.getErrorStrs)(_this6.getFieldMember(fullName, 'errors'));
    });
  };

  this.isFieldValidating = function (name) {
    return _this6.getFieldMember(name, 'validating');
  };

  this.isFieldsValidating = function (ns) {
    var names = ns || _this6.getValidFieldsName();
    return names.some(function (n) {
      return _this6.isFieldValidating(n);
    });
  };

  this.isFieldTouched = function (name) {
    return _this6.getFieldMember(name, 'touched');
  };

  this.isFieldsTouched = function (ns) {
    var names = ns || _this6.getValidFieldsName();
    return names.some(function (n) {
      return _this6.isFieldTouched(n);
    });
  };
};

function createFieldsStore(fields) {
  return new FieldsStore(fields);
}
module.exports = exports['default'];
});

unwrapExports(createFieldsStore_1);

var createBaseForm_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _defineProperty3 = _interopRequireDefault(defineProperty$1);



var _extends6 = _interopRequireDefault(_extends$2);



var _toConsumableArray3 = _interopRequireDefault(toConsumableArray);



var _react2 = _interopRequireDefault(React__default);



var _createReactClass2 = _interopRequireDefault(createReactClass);



var _asyncValidator2 = _interopRequireDefault(Schema);



var _warning2 = _interopRequireDefault(_warning);



var _get2 = _interopRequireDefault(get);



var _set2 = _interopRequireDefault(set_1);



var _eq2 = _interopRequireDefault(_eq);



var _createFieldsStore2 = _interopRequireDefault(createFieldsStore_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DEFAULT_TRIGGER = 'onChange'; /* eslint-disable react/prefer-es6-class */
/* eslint-disable prefer-promise-reject-errors */

function createBaseForm() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mixins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var validateMessages = option.validateMessages,
      onFieldsChange = option.onFieldsChange,
      onValuesChange = option.onValuesChange,
      _option$mapProps = option.mapProps,
      mapProps = _option$mapProps === undefined ? utils.identity : _option$mapProps,
      mapPropsToFields = option.mapPropsToFields,
      fieldNameProp = option.fieldNameProp,
      fieldMetaProp = option.fieldMetaProp,
      fieldDataProp = option.fieldDataProp,
      _option$formPropName = option.formPropName,
      formPropName = _option$formPropName === undefined ? 'form' : _option$formPropName,
      formName = option.name,
      withRef = option.withRef;


  return function decorate(WrappedComponent) {
    var Form = (0, _createReactClass2['default'])({
      displayName: 'Form',

      mixins: mixins,

      getInitialState: function getInitialState() {
        var _this = this;

        var fields = mapPropsToFields && mapPropsToFields(this.props);
        this.fieldsStore = (0, _createFieldsStore2['default'])(fields || {});

        this.instances = {};
        this.cachedBind = {};
        this.clearedFieldMetaCache = {};

        this.renderFields = {};
        this.domFields = {};

        // HACK: https://github.com/ant-design/ant-design/issues/6406
        ['getFieldsValue', 'getFieldValue', 'setFieldsInitialValue', 'getFieldsError', 'getFieldError', 'isFieldValidating', 'isFieldsValidating', 'isFieldsTouched', 'isFieldTouched'].forEach(function (key) {
          _this[key] = function () {
            var _fieldsStore;

            if (process.env.NODE_ENV !== 'production') {
              (0, _warning2['default'])(false, 'you should not use `ref` on enhanced form, please use `wrappedComponentRef`. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
            }
            return (_fieldsStore = _this.fieldsStore)[key].apply(_fieldsStore, arguments);
          };
        });

        return {
          submitting: false
        };
      },
      componentDidMount: function componentDidMount() {
        this.cleanUpUselessFields();
      },
      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (mapPropsToFields) {
          this.fieldsStore.updateFields(mapPropsToFields(nextProps));
        }
      },
      componentDidUpdate: function componentDidUpdate() {
        this.cleanUpUselessFields();
      },
      onCollectCommon: function onCollectCommon(name, action, args) {
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta[action]) {
          fieldMeta[action].apply(fieldMeta, (0, _toConsumableArray3['default'])(args));
        } else if (fieldMeta.originalProps && fieldMeta.originalProps[action]) {
          var _fieldMeta$originalPr;

          (_fieldMeta$originalPr = fieldMeta.originalProps)[action].apply(_fieldMeta$originalPr, (0, _toConsumableArray3['default'])(args));
        }
        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, (0, _toConsumableArray3['default'])(args)) : utils.getValueFromEvent.apply(undefined, (0, _toConsumableArray3['default'])(args));
        if (onValuesChange && value !== this.fieldsStore.getFieldValue(name)) {
          var valuesAll = this.fieldsStore.getAllValues();
          var valuesAllSet = {};
          valuesAll[name] = value;
          Object.keys(valuesAll).forEach(function (key) {
            return (0, _set2['default'])(valuesAllSet, key, valuesAll[key]);
          });
          onValuesChange((0, _extends6['default'])((0, _defineProperty3['default'])({}, formPropName, this.getForm()), this.props), (0, _set2['default'])({}, name, value), valuesAllSet);
        }
        var field = this.fieldsStore.getField(name);
        return { name: name, field: (0, _extends6['default'])({}, field, { value: value, touched: true }), fieldMeta: fieldMeta };
      },
      onCollect: function onCollect(name_, action) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        var _onCollectCommon = this.onCollectCommon(name_, action, args),
            name = _onCollectCommon.name,
            field = _onCollectCommon.field,
            fieldMeta = _onCollectCommon.fieldMeta;

        var validate = fieldMeta.validate;


        this.fieldsStore.setFieldsAsDirty();

        var newField = (0, _extends6['default'])({}, field, {
          dirty: (0, utils.hasRules)(validate)
        });
        this.setFields((0, _defineProperty3['default'])({}, name, newField));
      },
      onCollectValidate: function onCollectValidate(name_, action) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        var _onCollectCommon2 = this.onCollectCommon(name_, action, args),
            field = _onCollectCommon2.field,
            fieldMeta = _onCollectCommon2.fieldMeta;

        var newField = (0, _extends6['default'])({}, field, {
          dirty: true
        });

        this.fieldsStore.setFieldsAsDirty();

        this.validateFieldsInternal([newField], {
          action: action,
          options: {
            firstFields: !!fieldMeta.validateFirst
          }
        });
      },
      getCacheBind: function getCacheBind(name, action, fn) {
        if (!this.cachedBind[name]) {
          this.cachedBind[name] = {};
        }
        var cache = this.cachedBind[name];
        if (!cache[action] || cache[action].oriFn !== fn) {
          cache[action] = {
            fn: fn.bind(this, name, action),
            oriFn: fn
          };
        }
        return cache[action].fn;
      },
      getFieldDecorator: function getFieldDecorator(name, fieldOption) {
        var _this2 = this;

        var props = this.getFieldProps(name, fieldOption);
        return function (fieldElem) {
          // We should put field in record if it is rendered
          _this2.renderFields[name] = true;

          var fieldMeta = _this2.fieldsStore.getFieldMeta(name);
          var originalProps = fieldElem.props;
          if (process.env.NODE_ENV !== 'production') {
            var valuePropName = fieldMeta.valuePropName;
            (0, _warning2['default'])(!(valuePropName in originalProps), '`getFieldDecorator` will override `' + valuePropName + '`, ' + ('so please don\'t set `' + valuePropName + '` directly ') + 'and use `setFieldsValue` to set it.');
            var defaultValuePropName = 'default' + valuePropName[0].toUpperCase() + valuePropName.slice(1);
            (0, _warning2['default'])(!(defaultValuePropName in originalProps), '`' + defaultValuePropName + '` is invalid ' + ('for `getFieldDecorator` will set `' + valuePropName + '`,') + ' please use `option.initialValue` instead.');
          }
          fieldMeta.originalProps = originalProps;
          fieldMeta.ref = fieldElem.ref;
          return _react2['default'].cloneElement(fieldElem, (0, _extends6['default'])({}, props, _this2.fieldsStore.getFieldValuePropValue(fieldMeta)));
        };
      },
      getFieldProps: function getFieldProps(name) {
        var _this3 = this;

        var usersFieldOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!name) {
          throw new Error('Must call `getFieldProps` with valid name string!');
        }
        if (process.env.NODE_ENV !== 'production') {
          (0, _warning2['default'])(this.fieldsStore.isValidNestedFieldName(name), 'One field name cannot be part of another, e.g. `a` and `a.b`. Check field: ' + name);
          (0, _warning2['default'])(!('exclusive' in usersFieldOption), '`option.exclusive` of `getFieldProps`|`getFieldDecorator` had been remove.');
        }

        delete this.clearedFieldMetaCache[name];

        var fieldOption = (0, _extends6['default'])({
          name: name,
          trigger: DEFAULT_TRIGGER,
          valuePropName: 'value',
          validate: []
        }, usersFieldOption);

        var rules = fieldOption.rules,
            trigger = fieldOption.trigger,
            _fieldOption$validate = fieldOption.validateTrigger,
            validateTrigger = _fieldOption$validate === undefined ? trigger : _fieldOption$validate,
            validate = fieldOption.validate;


        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if ('initialValue' in fieldOption) {
          fieldMeta.initialValue = fieldOption.initialValue;
        }

        var inputProps = (0, _extends6['default'])({}, this.fieldsStore.getFieldValuePropValue(fieldOption), {
          ref: this.getCacheBind(name, name + '__ref', this.saveRef)
        });
        if (fieldNameProp) {
          inputProps[fieldNameProp] = formName ? formName + '_' + name : name;
        }

        var validateRules = (0, utils.normalizeValidateRules)(validate, rules, validateTrigger);
        var validateTriggers = (0, utils.getValidateTriggers)(validateRules);
        validateTriggers.forEach(function (action) {
          if (inputProps[action]) return;
          inputProps[action] = _this3.getCacheBind(name, action, _this3.onCollectValidate);
        });

        // make sure that the value will be collect
        if (trigger && validateTriggers.indexOf(trigger) === -1) {
          inputProps[trigger] = this.getCacheBind(name, trigger, this.onCollect);
        }

        var meta = (0, _extends6['default'])({}, fieldMeta, fieldOption, {
          validate: validateRules
        });
        this.fieldsStore.setFieldMeta(name, meta);
        if (fieldMetaProp) {
          inputProps[fieldMetaProp] = meta;
        }

        if (fieldDataProp) {
          inputProps[fieldDataProp] = this.fieldsStore.getField(name);
        }

        // This field is rendered, record it
        this.renderFields[name] = true;

        return inputProps;
      },
      getFieldInstance: function getFieldInstance(name) {
        return this.instances[name];
      },
      getRules: function getRules(fieldMeta, action) {
        var actionRules = fieldMeta.validate.filter(function (item) {
          return !action || item.trigger.indexOf(action) >= 0;
        }).map(function (item) {
          return item.rules;
        });
        return (0, utils.flattenArray)(actionRules);
      },
      setFields: function setFields(maybeNestedFields, callback) {
        var _this4 = this;

        var fields = this.fieldsStore.flattenRegisteredFields(maybeNestedFields);
        this.fieldsStore.setFields(fields);
        if (onFieldsChange) {
          var changedFields = Object.keys(fields).reduce(function (acc, name) {
            return (0, _set2['default'])(acc, name, _this4.fieldsStore.getField(name));
          }, {});
          onFieldsChange((0, _extends6['default'])((0, _defineProperty3['default'])({}, formPropName, this.getForm()), this.props), changedFields, this.fieldsStore.getNestedAllFields());
        }
        this.forceUpdate(callback);
      },
      setFieldsValue: function setFieldsValue(changedValues, callback) {
        var fieldsMeta = this.fieldsStore.fieldsMeta;

        var values = this.fieldsStore.flattenRegisteredFields(changedValues);
        var newFields = Object.keys(values).reduce(function (acc, name) {
          var isRegistered = fieldsMeta[name];
          if (process.env.NODE_ENV !== 'production') {
            (0, _warning2['default'])(isRegistered, 'Cannot use `setFieldsValue` until ' + 'you use `getFieldDecorator` or `getFieldProps` to register it.');
          }
          if (isRegistered) {
            var value = values[name];
            acc[name] = {
              value: value
            };
          }
          return acc;
        }, {});
        this.setFields(newFields, callback);
        if (onValuesChange) {
          var allValues = this.fieldsStore.getAllValues();
          onValuesChange((0, _extends6['default'])((0, _defineProperty3['default'])({}, formPropName, this.getForm()), this.props), changedValues, allValues);
        }
      },
      saveRef: function saveRef(name, _, component) {
        if (!component) {
          var _fieldMeta = this.fieldsStore.getFieldMeta(name);
          if (!_fieldMeta.preserve) {
            // after destroy, delete data
            this.clearedFieldMetaCache[name] = {
              field: this.fieldsStore.getField(name),
              meta: _fieldMeta
            };
            this.clearField(name);
          }
          delete this.domFields[name];
          return;
        }
        this.domFields[name] = true;
        this.recoverClearedField(name);
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta) {
          var ref = fieldMeta.ref;
          if (ref) {
            if (typeof ref === 'string') {
              throw new Error('can not set ref string for ' + name);
            } else if (typeof ref === 'function') {
              ref(component);
            } else if (Object.prototype.hasOwnProperty.call(ref, 'current')) {
              ref.current = component;
            }
          }
        }
        this.instances[name] = component;
      },
      cleanUpUselessFields: function cleanUpUselessFields() {
        var _this5 = this;

        var fieldList = this.fieldsStore.getAllFieldsName();
        var removedList = fieldList.filter(function (field) {
          var fieldMeta = _this5.fieldsStore.getFieldMeta(field);
          return !_this5.renderFields[field] && !_this5.domFields[field] && !fieldMeta.preserve;
        });
        if (removedList.length) {
          removedList.forEach(this.clearField);
        }
        this.renderFields = {};
      },
      clearField: function clearField(name) {
        this.fieldsStore.clearField(name);
        delete this.instances[name];
        delete this.cachedBind[name];
      },
      resetFields: function resetFields(ns) {
        var _this6 = this;

        var newFields = this.fieldsStore.resetFields(ns);
        if (Object.keys(newFields).length > 0) {
          this.setFields(newFields);
        }
        if (ns) {
          var names = Array.isArray(ns) ? ns : [ns];
          names.forEach(function (name) {
            return delete _this6.clearedFieldMetaCache[name];
          });
        } else {
          this.clearedFieldMetaCache = {};
        }
      },
      recoverClearedField: function recoverClearedField(name) {
        if (this.clearedFieldMetaCache[name]) {
          this.fieldsStore.setFields((0, _defineProperty3['default'])({}, name, this.clearedFieldMetaCache[name].field));
          this.fieldsStore.setFieldMeta(name, this.clearedFieldMetaCache[name].meta);
          delete this.clearedFieldMetaCache[name];
        }
      },
      validateFieldsInternal: function validateFieldsInternal(fields, _ref, callback) {
        var _this7 = this;

        var fieldNames = _ref.fieldNames,
            action = _ref.action,
            _ref$options = _ref.options,
            options = _ref$options === undefined ? {} : _ref$options;

        var allRules = {};
        var allValues = {};
        var allFields = {};
        var alreadyErrors = {};
        fields.forEach(function (field) {
          var name = field.name;
          if (options.force !== true && field.dirty === false) {
            if (field.errors) {
              (0, _set2['default'])(alreadyErrors, name, { errors: field.errors });
            }
            return;
          }
          var fieldMeta = _this7.fieldsStore.getFieldMeta(name);
          var newField = (0, _extends6['default'])({}, field);
          newField.errors = undefined;
          newField.validating = true;
          newField.dirty = true;
          allRules[name] = _this7.getRules(fieldMeta, action);
          allValues[name] = newField.value;
          allFields[name] = newField;
        });
        this.setFields(allFields);
        // in case normalize
        Object.keys(allValues).forEach(function (f) {
          allValues[f] = _this7.fieldsStore.getFieldValue(f);
        });
        if (callback && (0, utils.isEmptyObject)(allFields)) {
          callback((0, utils.isEmptyObject)(alreadyErrors) ? null : alreadyErrors, this.fieldsStore.getFieldsValue(fieldNames));
          return;
        }
        var validator = new _asyncValidator2['default'](allRules);
        if (validateMessages) {
          validator.messages(validateMessages);
        }
        validator.validate(allValues, options, function (errors) {
          var errorsGroup = (0, _extends6['default'])({}, alreadyErrors);
          if (errors && errors.length) {
            errors.forEach(function (e) {
              var errorFieldName = e.field;
              var fieldName = errorFieldName;

              // Handle using array validation rule.
              // ref: https://github.com/ant-design/ant-design/issues/14275
              Object.keys(allRules).some(function (ruleFieldName) {
                var rules = allRules[ruleFieldName] || [];

                // Exist if match rule
                if (ruleFieldName === errorFieldName) {
                  fieldName = ruleFieldName;
                  return true;
                }

                // Skip if not match array type
                if (rules.every(function (_ref2) {
                  var type = _ref2.type;
                  return type !== 'array';
                }) && errorFieldName.indexOf(ruleFieldName) !== 0) {
                  return false;
                }

                // Exist if match the field name
                var restPath = errorFieldName.slice(ruleFieldName.length + 1);
                if (/\d+/.test(restPath)) {
                  fieldName = ruleFieldName;
                  return true;
                }

                return false;
              });

              var field = (0, _get2['default'])(errorsGroup, fieldName);
              if (typeof field !== 'object' || Array.isArray(field)) {
                (0, _set2['default'])(errorsGroup, fieldName, { errors: [] });
              }
              var fieldErrors = (0, _get2['default'])(errorsGroup, fieldName.concat('.errors'));
              fieldErrors.push(e);
            });
          }
          var expired = [];
          var nowAllFields = {};
          Object.keys(allRules).forEach(function (name) {
            var fieldErrors = (0, _get2['default'])(errorsGroup, name);
            var nowField = _this7.fieldsStore.getField(name);
            // avoid concurrency problems
            if (!(0, _eq2['default'])(nowField.value, allValues[name])) {
              expired.push({
                name: name
              });
            } else {
              nowField.errors = fieldErrors && fieldErrors.errors;
              nowField.value = allValues[name];
              nowField.validating = false;
              nowField.dirty = false;
              nowAllFields[name] = nowField;
            }
          });
          _this7.setFields(nowAllFields);
          if (callback) {
            if (expired.length) {
              expired.forEach(function (_ref3) {
                var name = _ref3.name;

                var fieldErrors = [{
                  message: name + ' need to revalidate',
                  field: name
                }];
                (0, _set2['default'])(errorsGroup, name, {
                  expired: true,
                  errors: fieldErrors
                });
              });
            }

            callback((0, utils.isEmptyObject)(errorsGroup) ? null : errorsGroup, _this7.fieldsStore.getFieldsValue(fieldNames));
          }
        });
      },
      validateFields: function validateFields(ns, opt, cb) {
        var _this8 = this;

        var pending = new Promise(function (resolve, reject) {
          var _getParams = (0, utils.getParams)(ns, opt, cb),
              names = _getParams.names,
              options = _getParams.options;

          var _getParams2 = (0, utils.getParams)(ns, opt, cb),
              callback = _getParams2.callback;

          if (!callback || typeof callback === 'function') {
            var oldCb = callback;
            callback = function callback(errors, values) {
              if (oldCb) {
                oldCb(errors, values);
              } else if (errors) {
                reject({ errors: errors, values: values });
              } else {
                resolve(values);
              }
            };
          }
          var fieldNames = names ? _this8.fieldsStore.getValidFieldsFullName(names) : _this8.fieldsStore.getValidFieldsName();
          var fields = fieldNames.filter(function (name) {
            var fieldMeta = _this8.fieldsStore.getFieldMeta(name);
            return (0, utils.hasRules)(fieldMeta.validate);
          }).map(function (name) {
            var field = _this8.fieldsStore.getField(name);
            field.value = _this8.fieldsStore.getFieldValue(name);
            return field;
          });
          if (!fields.length) {
            callback(null, _this8.fieldsStore.getFieldsValue(fieldNames));
            return;
          }
          if (!('firstFields' in options)) {
            options.firstFields = fieldNames.filter(function (name) {
              var fieldMeta = _this8.fieldsStore.getFieldMeta(name);
              return !!fieldMeta.validateFirst;
            });
          }
          _this8.validateFieldsInternal(fields, {
            fieldNames: fieldNames,
            options: options
          }, callback);
        });
        pending['catch'](function (e) {
          if (console.error && process.env.NODE_ENV !== 'production') {
            console.error(e);
          }
          return e;
        });
        return pending;
      },
      isSubmitting: function isSubmitting() {
        if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
          (0, _warning2['default'])(false, '`isSubmitting` is deprecated. ' + 'Actually, it\'s more convenient to handle submitting status by yourself.');
        }
        return this.state.submitting;
      },
      submit: function submit(callback) {
        var _this9 = this;

        if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
          (0, _warning2['default'])(false, '`submit` is deprecated. ' + 'Actually, it\'s more convenient to handle submitting status by yourself.');
        }
        var fn = function fn() {
          _this9.setState({
            submitting: false
          });
        };
        this.setState({
          submitting: true
        });
        callback(fn);
      },
      render: function render() {
        var _props = this.props,
            wrappedComponentRef = _props.wrappedComponentRef,
            restProps = (0, _objectWithoutProperties3['default'])(_props, ['wrappedComponentRef']); // eslint-disable-line

        var formProps = (0, _defineProperty3['default'])({}, formPropName, this.getForm());
        if (withRef) {
          if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
            (0, _warning2['default'])(false, '`withRef` is deprecated, please use `wrappedComponentRef` instead. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
          }
          formProps.ref = 'wrappedComponent';
        } else if (wrappedComponentRef) {
          formProps.ref = wrappedComponentRef;
        }
        var props = mapProps.call(this, (0, _extends6['default'])({}, formProps, restProps));
        return _react2['default'].createElement(WrappedComponent, props);
      }
    });

    return (0, utils.argumentContainer)(Form, WrappedComponent);
  };
}

exports['default'] = createBaseForm;
module.exports = exports['default'];
});

unwrapExports(createBaseForm_1);

var createForm_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = undefined;



var _createBaseForm2 = _interopRequireDefault(createBaseForm_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var mixin = exports.mixin = {
  getForm: function getForm() {
    return {
      getFieldsValue: this.fieldsStore.getFieldsValue,
      getFieldValue: this.fieldsStore.getFieldValue,
      getFieldInstance: this.getFieldInstance,
      setFieldsValue: this.setFieldsValue,
      setFields: this.setFields,
      setFieldsInitialValue: this.fieldsStore.setFieldsInitialValue,
      getFieldDecorator: this.getFieldDecorator,
      getFieldProps: this.getFieldProps,
      getFieldsError: this.fieldsStore.getFieldsError,
      getFieldError: this.fieldsStore.getFieldError,
      isFieldValidating: this.fieldsStore.isFieldValidating,
      isFieldsValidating: this.fieldsStore.isFieldsValidating,
      isFieldsTouched: this.fieldsStore.isFieldsTouched,
      isFieldTouched: this.fieldsStore.isFieldTouched,
      isSubmitting: this.isSubmitting,
      submit: this.submit,
      validateFields: this.validateFields,
      resetFields: this.resetFields
    };
  }
};

function createForm(options) {
  return (0, _createBaseForm2['default'])(options, [mixin]);
}

exports['default'] = createForm;
});

unwrapExports(createForm_1);
var createForm_2 = createForm_1.mixin;

var createDOMForm_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _extends3 = _interopRequireDefault(_extends$2);



var _reactDom2 = _interopRequireDefault(require$$1$1);



var _domScrollIntoView2 = _interopRequireDefault(lib);



var _has2 = _interopRequireDefault(has_1);



var _createBaseForm2 = _interopRequireDefault(createBaseForm_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function computedStyle(el, prop) {
  var getComputedStyle = window.getComputedStyle;
  var style =
  // If we have getComputedStyle
  getComputedStyle ?
  // Query it
  // TODO: From CSS-Query notes, we might need (node, null) for FF
  getComputedStyle(el) :

  // Otherwise, we are in IE and use currentStyle
  el.currentStyle;
  if (style) {
    return style[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })];
  }
  return undefined;
}

function getScrollableContainer(n) {
  var node = n;
  var nodeName = void 0;
  /* eslint no-cond-assign:0 */
  while ((nodeName = node.nodeName.toLowerCase()) !== 'body') {
    var overflowY = computedStyle(node, 'overflowY');
    // https://stackoverflow.com/a/36900407/3040605
    if (node !== n && (overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight) {
      return node;
    }
    node = node.parentNode;
  }
  return nodeName === 'body' ? node.ownerDocument : node;
}

var mixin = {
  getForm: function getForm() {
    return (0, _extends3['default'])({}, createForm_1.mixin.getForm.call(this), {
      validateFieldsAndScroll: this.validateFieldsAndScroll
    });
  },
  validateFieldsAndScroll: function validateFieldsAndScroll(ns, opt, cb) {
    var _this = this;

    var _getParams = (0, utils.getParams)(ns, opt, cb),
        names = _getParams.names,
        callback = _getParams.callback,
        options = _getParams.options;

    var newCb = function newCb(error, values) {
      if (error) {
        var validNames = _this.fieldsStore.getValidFieldsName();
        var firstNode = void 0;
        var firstTop = void 0;

        validNames.forEach(function (name) {
          if ((0, _has2['default'])(error, name)) {
            var instance = _this.getFieldInstance(name);
            if (instance) {
              var node = _reactDom2['default'].findDOMNode(instance);
              var top = node.getBoundingClientRect().top;
              if (node.type !== 'hidden' && (firstTop === undefined || firstTop > top)) {
                firstTop = top;
                firstNode = node;
              }
            }
          }
        });

        if (firstNode) {
          var c = options.container || getScrollableContainer(firstNode);
          (0, _domScrollIntoView2['default'])(firstNode, c, (0, _extends3['default'])({
            onlyScrollIfNeeded: true
          }, options.scroll));
        }
      }

      if (typeof callback === 'function') {
        callback(error, values);
      }
    };

    return this.validateFields(names, options, newCb);
  }
};

function createDOMForm(option) {
  return (0, _createBaseForm2['default'])((0, _extends3['default'])({}, option), [mixin]);
}

exports['default'] = createDOMForm;
module.exports = exports['default'];
});

unwrapExports(createDOMForm_1);

var constants = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FIELD_DATA_PROP = exports.FIELD_META_PROP = void 0;
var FIELD_META_PROP = 'data-__meta';
exports.FIELD_META_PROP = FIELD_META_PROP;
var FIELD_DATA_PROP = 'data-__field';
exports.FIELD_DATA_PROP = FIELD_DATA_PROP;
});

unwrapExports(constants);
var constants_1 = constants.FIELD_DATA_PROP;
var constants_2 = constants.FIELD_META_PROP;

var context = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormContext = void 0;

var _createReactContext = _interopRequireDefault(require$$0$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FormContext = (0, _createReactContext["default"])({
  labelAlign: 'right',
  vertical: false
});
exports.FormContext = FormContext;
});

unwrapExports(context);
var context_1 = context.FormContext;

var FormItem_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(React__default);

var ReactDOM = _interopRequireWildcard(require$$1$1);

var PropTypes = _interopRequireWildcard(require$$1$2);

var _classnames = _interopRequireDefault(require$$2$1);

var _rcAnimate = _interopRequireDefault(require$$4);

var _row = _interopRequireDefault(require$$5);

var _col = _interopRequireDefault(require$$6);

var _icon = _interopRequireDefault(require$$4$1);



var _warning = _interopRequireDefault(require$$6$1);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ValidateStatuses = (0, _type.tuple)('success', 'warning', 'error', 'validating', '');

function intersperseSpace(list) {
  return list.reduce(function (current, item) {
    return [].concat(_toConsumableArray(current), [' ', item]);
  }, []).slice(1);
}

var FormItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormItem, _React$Component);

  function FormItem() {
    var _this;

    _classCallCheck(this, FormItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormItem).apply(this, arguments));
    _this.helpShow = false;

    _this.onHelpAnimEnd = function (_key, helpShow) {
      _this.helpShow = helpShow;

      if (!helpShow) {
        _this.setState({});
      }
    }; // Resolve duplicated ids bug between different forms
    // https://github.com/ant-design/ant-design/issues/7351


    _this.onLabelClick = function () {
      var id = _this.props.id || _this.getId();

      if (!id) {
        return;
      }

      var formItemNode = ReactDOM.findDOMNode(_assertThisInitialized(_this));
      var control = formItemNode.querySelector("[id=\"".concat(id, "\"]"));

      if (control && control.focus) {
        control.focus();
      }
    };

    _this.renderFormItem = function (_ref) {
      var _itemClassName;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          style = _this$props.style,
          className = _this$props.className;
      var prefixCls = getPrefixCls('form', customizePrefixCls);

      var children = _this.renderChildren(prefixCls);

      var itemClassName = (_itemClassName = {}, _defineProperty(_itemClassName, "".concat(prefixCls, "-item"), true), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-with-help"), _this.helpShow), _defineProperty(_itemClassName, "".concat(className), !!className), _itemClassName);
      return React.createElement(_row["default"], {
        className: (0, _classnames["default"])(itemClassName),
        style: style,
        key: "row"
      }, children);
    };

    return _this;
  }

  _createClass(FormItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          help = _this$props2.help,
          validateStatus = _this$props2.validateStatus,
          id = _this$props2.id;
      (0, _warning["default"])(this.getControls(children, true).length <= 1 || help !== undefined || validateStatus !== undefined, 'Form.Item', 'Cannot generate `validateStatus` and `help` automatically, ' + 'while there are more than one `getFieldDecorator` in it.');
      (0, _warning["default"])(!id, 'Form.Item', '`id` is deprecated for its label `htmlFor`. Please use `htmlFor` directly.');
    }
  }, {
    key: "getHelpMessage",
    value: function getHelpMessage() {
      var help = this.props.help;

      if (help === undefined && this.getOnlyControl()) {
        var _this$getField = this.getField(),
            errors = _this$getField.errors;

        if (errors) {
          return intersperseSpace(errors.map(function (e, index) {
            var node = null;

            if (React.isValidElement(e)) {
              node = e;
            } else if (React.isValidElement(e.message)) {
              node = e.message;
            }

            return node ? React.cloneElement(node, {
              key: index
            }) : e.message;
          }));
        }

        return '';
      }

      return help;
    }
  }, {
    key: "getControls",
    value: function getControls(children, recursively) {
      var controls = [];
      var childrenArray = React.Children.toArray(children);

      for (var i = 0; i < childrenArray.length; i++) {
        if (!recursively && controls.length > 0) {
          break;
        }

        var child = childrenArray[i];

        if (child.type && (child.type === FormItem || child.type.displayName === 'FormItem')) {
          continue;
        }

        if (!child.props) {
          continue;
        }

        if (constants.FIELD_META_PROP in child.props) {
          // And means FIELD_DATA_PROP in child.props, too.
          controls.push(child);
        } else if (child.props.children) {
          controls = controls.concat(this.getControls(child.props.children, recursively));
        }
      }

      return controls;
    }
  }, {
    key: "getOnlyControl",
    value: function getOnlyControl() {
      var child = this.getControls(this.props.children, false)[0];
      return child !== undefined ? child : null;
    }
  }, {
    key: "getChildProp",
    value: function getChildProp(prop) {
      var child = this.getOnlyControl();
      return child && child.props && child.props[prop];
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.getChildProp('id');
    }
  }, {
    key: "getMeta",
    value: function getMeta() {
      return this.getChildProp(constants.FIELD_META_PROP);
    }
  }, {
    key: "getField",
    value: function getField() {
      return this.getChildProp(constants.FIELD_DATA_PROP);
    }
  }, {
    key: "renderHelp",
    value: function renderHelp(prefixCls) {
      var help = this.getHelpMessage();
      var children = help ? React.createElement("div", {
        className: "".concat(prefixCls, "-explain"),
        key: "help"
      }, help) : null;

      if (children) {
        this.helpShow = !!children;
      }

      return React.createElement(_rcAnimate["default"], {
        transitionName: "show-help",
        component: "",
        transitionAppear: true,
        key: "help",
        onEnd: this.onHelpAnimEnd
      }, children);
    }
  }, {
    key: "renderExtra",
    value: function renderExtra(prefixCls) {
      var extra = this.props.extra;
      return extra ? React.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra) : null;
    }
  }, {
    key: "getValidateStatus",
    value: function getValidateStatus() {
      var onlyControl = this.getOnlyControl();

      if (!onlyControl) {
        return '';
      }

      var field = this.getField();

      if (field.validating) {
        return 'validating';
      }

      if (field.errors) {
        return 'error';
      }

      var fieldValue = 'value' in field ? field.value : this.getMeta().initialValue;

      if (fieldValue !== undefined && fieldValue !== null && fieldValue !== '') {
        return 'success';
      }

      return '';
    }
  }, {
    key: "renderValidateWrapper",
    value: function renderValidateWrapper(prefixCls, c1, c2, c3) {
      var props = this.props;
      var onlyControl = this.getOnlyControl;
      var validateStatus = props.validateStatus === undefined && onlyControl ? this.getValidateStatus() : props.validateStatus;
      var classes = "".concat(prefixCls, "-item-control");

      if (validateStatus) {
        classes = (0, _classnames["default"])("".concat(prefixCls, "-item-control"), {
          'has-feedback': props.hasFeedback || validateStatus === 'validating',
          'has-success': validateStatus === 'success',
          'has-warning': validateStatus === 'warning',
          'has-error': validateStatus === 'error',
          'is-validating': validateStatus === 'validating'
        });
      }

      var iconType = '';

      switch (validateStatus) {
        case 'success':
          iconType = 'check-circle';
          break;

        case 'warning':
          iconType = 'exclamation-circle';
          break;

        case 'error':
          iconType = 'close-circle';
          break;

        case 'validating':
          iconType = 'loading';
          break;

        default:
          iconType = '';
          break;
      }

      var icon = props.hasFeedback && iconType ? React.createElement("span", {
        className: "".concat(prefixCls, "-item-children-icon")
      }, React.createElement(_icon["default"], {
        type: iconType,
        theme: iconType === 'loading' ? 'outlined' : 'filled'
      })) : null;
      return React.createElement("div", {
        className: classes
      }, React.createElement("span", {
        className: "".concat(prefixCls, "-item-children")
      }, c1, icon), c2, c3);
    }
  }, {
    key: "renderWrapper",
    value: function renderWrapper(prefixCls, children) {
      var _this2 = this;

      return React.createElement(context.FormContext.Consumer, {
        key: "wrapper"
      }, function (_ref2) {
        var contextWrapperCol = _ref2.wrapperCol,
            vertical = _ref2.vertical;
        var wrapperCol = _this2.props.wrapperCol;
        var mergedWrapperCol = ('wrapperCol' in _this2.props ? wrapperCol : contextWrapperCol) || {};
        var className = (0, _classnames["default"])("".concat(prefixCls, "-item-control-wrapper"), mergedWrapperCol.className); // No pass FormContext since it's useless

        return React.createElement(context.FormContext.Provider, {
          value: {
            vertical: vertical
          }
        }, React.createElement(_col["default"], _extends({}, mergedWrapperCol, {
          className: className
        }), children));
      });
    }
  }, {
    key: "isRequired",
    value: function isRequired() {
      var required = this.props.required;

      if (required !== undefined) {
        return required;
      }

      if (this.getOnlyControl()) {
        var meta = this.getMeta() || {};
        var validate = meta.validate || [];
        return validate.filter(function (item) {
          return !!item.rules;
        }).some(function (item) {
          return item.rules.some(function (rule) {
            return rule.required;
          });
        });
      }

      return false;
    }
  }, {
    key: "renderLabel",
    value: function renderLabel(prefixCls) {
      var _this3 = this;

      return React.createElement(context.FormContext.Consumer, {
        key: "label"
      }, function (_ref3) {
        var _classNames;

        var vertical = _ref3.vertical,
            contextLabelAlign = _ref3.labelAlign,
            contextLabelCol = _ref3.labelCol,
            contextColon = _ref3.colon;
        var _this3$props = _this3.props,
            label = _this3$props.label,
            labelCol = _this3$props.labelCol,
            labelAlign = _this3$props.labelAlign,
            colon = _this3$props.colon,
            id = _this3$props.id,
            htmlFor = _this3$props.htmlFor;

        var required = _this3.isRequired();

        var mergedLabelCol = ('labelCol' in _this3.props ? labelCol : contextLabelCol) || {};
        var mergedLabelAlign = 'labelAlign' in _this3.props ? labelAlign : contextLabelAlign;
        var labelClsBasic = "".concat(prefixCls, "-item-label");
        var labelColClassName = (0, _classnames["default"])(labelClsBasic, mergedLabelAlign === 'left' && "".concat(labelClsBasic, "-left"), mergedLabelCol.className);
        var labelChildren = label; // Keep label is original where there should have no colon

        var computedColon = colon === true || contextColon !== false && colon !== false;
        var haveColon = computedColon && !vertical; // Remove duplicated user input colon

        if (haveColon && typeof label === 'string' && label.trim() !== '') {
          labelChildren = label.replace(/[：|:]\s*$/, '');
        }

        var labelClassName = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-item-required"), required), _defineProperty(_classNames, "".concat(prefixCls, "-item-no-colon"), !computedColon), _classNames));
        return label ? React.createElement(_col["default"], _extends({}, mergedLabelCol, {
          className: labelColClassName
        }), React.createElement("label", {
          htmlFor: htmlFor || id || _this3.getId(),
          className: labelClassName,
          title: typeof label === 'string' ? label : '',
          onClick: _this3.onLabelClick
        }, labelChildren)) : null;
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(prefixCls) {
      var children = this.props.children;
      return [this.renderLabel(prefixCls), this.renderWrapper(prefixCls, this.renderValidateWrapper(prefixCls, children, this.renderHelp(prefixCls), this.renderExtra(prefixCls)))];
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderFormItem);
    }
  }]);

  return FormItem;
}(React.Component);

exports["default"] = FormItem;
FormItem.defaultProps = {
  hasFeedback: false
};
FormItem.propTypes = {
  prefixCls: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelAlign: PropTypes.string,
  labelCol: PropTypes.object,
  help: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  validateStatus: PropTypes.oneOf(ValidateStatuses),
  hasFeedback: PropTypes.bool,
  wrapperCol: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  colon: PropTypes.bool
};
});

unwrapExports(FormItem_1);

var Form_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(React__default);

var PropTypes = _interopRequireWildcard(require$$1$2);

var _classnames = _interopRequireDefault(require$$2$1);

var _createDOMForm = _interopRequireDefault(createDOMForm_1);

var _createFormField = _interopRequireDefault(createFormField_1);

var _omit = _interopRequireDefault(require$$3);





var _warning = _interopRequireDefault(require$$6$1);

var _FormItem = _interopRequireDefault(FormItem_1);





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

var FormLayouts = (0, _type.tuple)('horizontal', 'inline', 'vertical');

var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));

    _this.renderForm = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          hideRequiredMark = _this$props.hideRequiredMark,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          layout = _this$props.layout;
      var prefixCls = getPrefixCls('form', customizePrefixCls);
      var formClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-horizontal"), layout === 'horizontal'), _defineProperty(_classNames, "".concat(prefixCls, "-vertical"), layout === 'vertical'), _defineProperty(_classNames, "".concat(prefixCls, "-inline"), layout === 'inline'), _defineProperty(_classNames, "".concat(prefixCls, "-hide-required-mark"), hideRequiredMark), _classNames), className);
      var formProps = (0, _omit["default"])(_this.props, ['prefixCls', 'className', 'layout', 'form', 'hideRequiredMark', 'wrapperCol', 'labelAlign', 'labelCol', 'colon']);
      return React.createElement("form", _extends({}, formProps, {
        className: formClassName
      }));
    };

    (0, _warning["default"])(!props.form, 'Form', 'It is unnecessary to pass `form` to `Form` after antd@1.7.0.');
    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          wrapperCol = _this$props2.wrapperCol,
          labelAlign = _this$props2.labelAlign,
          labelCol = _this$props2.labelCol,
          layout = _this$props2.layout,
          colon = _this$props2.colon;
      return React.createElement(context.FormContext.Provider, {
        value: {
          wrapperCol: wrapperCol,
          labelAlign: labelAlign,
          labelCol: labelCol,
          vertical: layout === 'vertical',
          colon: colon
        }
      }, React.createElement(_configProvider.ConfigConsumer, null, this.renderForm));
    }
  }]);

  return Form;
}(React.Component);

exports["default"] = Form;
Form.defaultProps = {
  colon: true,
  layout: 'horizontal',
  hideRequiredMark: false,
  onSubmit: function onSubmit(e) {
    e.preventDefault();
  }
};
Form.propTypes = {
  prefixCls: PropTypes.string,
  layout: PropTypes.oneOf(FormLayouts),
  children: PropTypes.any,
  onSubmit: PropTypes.func,
  hideRequiredMark: PropTypes.bool,
  colon: PropTypes.bool
};
Form.Item = _FormItem["default"];
Form.createFormField = _createFormField["default"];

Form.create = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _createDOMForm["default"])(_extends({
    fieldNameProp: 'id'
  }, options, {
    fieldMetaProp: constants.FIELD_META_PROP,
    fieldDataProp: constants.FIELD_DATA_PROP
  }));
};
});

unwrapExports(Form_1);

var form = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Form = _interopRequireDefault(Form_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _Form["default"];
exports["default"] = _default;
});

var _Form = unwrapExports(form);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      _baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

var _basePickBy = basePickBy;

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return _basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

var _basePick = basePick;

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : _basePick(object, paths);
});

var pick_1 = pick;

/**
 * Themable Form.Item
 */

var SFormItem = withTheme(_Form.Item);
var createGenericFormComponent = function createGenericFormComponent(config) {
  var GenericForm =
  /*#__PURE__*/
  function (_React$Component) {
    babelHelpers.inherits(GenericForm, _React$Component);

    function GenericForm() {
      var _babelHelpers$getProt;

      var _this;

      babelHelpers.classCallCheck(this, GenericForm);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(GenericForm)).call.apply(_babelHelpers$getProt, [this].concat(args)));
      babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "state", {
        submitting: false
      });
      babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "handleSubmit", function (e) {
        e.preventDefault();

        _this.setState({
          submitting: true
        });

        _this.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            console.log('Received values of form: ', values);
          }

          console.group(err);

          _this.setState({
            submitting: false
          });
        });
      });
      return _this;
    }

    babelHelpers.createClass(GenericForm, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            fields = _this$props.fields,
            form = _this$props.form,
            submitButtonContent = _this$props.submitButtonContent,
            submitButtonProps = _this$props.submitButtonProps;
        var submitting = get(this.state, 'submitting');

        var _pick = pick_1(form, ['getFieldDecorator']),
            getFieldDecorator = _pick.getFieldDecorator;

        return React__default.createElement(_Form, {
          hideRequiredMark: true,
          layout: "vertical",
          onSubmit: this.handleSubmit
        }, fields.map(function (_ref) {
          var Component = _ref.Component,
              componentProps = _ref.componentProps,
              fieldConfig = _ref.fieldConfig,
              label = _ref.label,
              name = _ref.name,
              formItemProps = _ref.formItemProps;
          return React__default.createElement(SFormItem, babelHelpers["extends"]({
            key: name,
            label: label,
            htmlFor: name,
            mb: 0
          }, formItemProps), getFieldDecorator(name, fieldConfig)(React__default.createElement(Component, componentProps)));
        }), React__default.createElement(CustomButton, babelHelpers["extends"]({
          content: submitButtonContent,
          disabled: submitting,
          htmlType: "submit",
          type: "primary"
        }, submitButtonProps)));
      }
    }]);
    return GenericForm;
  }(React__default.Component);

  return _Form.create(config)(GenericForm);
};

export { createGenericFormComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9kb20tc2Nyb2xsLWludG8tdmlldy9saWIvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kb20tc2Nyb2xsLWludG8tdmlldy9saWIvZG9tLXNjcm9sbC1pbnRvLXZpZXcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZG9tLXNjcm9sbC1pbnRvLXZpZXcvbGliL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUhhcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaGFzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eU9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1yZWFjdC1jbGFzcy9mYWN0b3J5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1yZWFjdC1jbGFzcy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvcnVsZS9yZXF1aXJlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvcnVsZS93aGl0ZXNwYWNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy9ydWxlL3R5cGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL3J1bGUvcmFuZ2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL3J1bGUvZW51bS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvcnVsZS9wYXR0ZXJuLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy9ydWxlL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy92YWxpZGF0b3Ivc3RyaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy92YWxpZGF0b3IvbWV0aG9kLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy92YWxpZGF0b3IvbnVtYmVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy92YWxpZGF0b3IvYm9vbGVhbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvdmFsaWRhdG9yL3JlZ2V4cC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvdmFsaWRhdG9yL2ludGVnZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL3ZhbGlkYXRvci9mbG9hdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvdmFsaWRhdG9yL2FycmF5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy92YWxpZGF0b3Ivb2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy92YWxpZGF0b3IvZW51bS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvdmFsaWRhdG9yL3BhdHRlcm4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL3ZhbGlkYXRvci9kYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy92YWxpZGF0b3IvcmVxdWlyZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL3ZhbGlkYXRvci90eXBlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy92YWxpZGF0b3IvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL21lc3NhZ2VzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTZXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL3NldC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yYy1mb3JtL2xpYi9jcmVhdGVGb3JtRmllbGQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yYy1mb3JtL2xpYi91dGlscy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yYy1mb3JtL2xpYi9jcmVhdGVGaWVsZHNTdG9yZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yYy1mb3JtL2xpYi9jcmVhdGVCYXNlRm9ybS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yYy1mb3JtL2xpYi9jcmVhdGVGb3JtLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JjLWZvcm0vbGliL2NyZWF0ZURPTUZvcm0uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZm9ybS9jb25zdGFudHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZm9ybS9jb250ZXh0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2Zvcm0vRm9ybUl0ZW0uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZm9ybS9Gb3JtLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2Zvcm0vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUGlja0J5LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVBpY2suanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL3BpY2suanMiLCIuLi8uLi9zcmMvR2VuZXJpY0Zvcm0vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIFJFX05VTSA9IC9bXFwtK10/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bXFwtK10/XFxkK3wpLy5zb3VyY2U7XG5cbmZ1bmN0aW9uIGdldENsaWVudFBvc2l0aW9uKGVsZW0pIHtcbiAgdmFyIGJveCA9IHVuZGVmaW5lZDtcbiAgdmFyIHggPSB1bmRlZmluZWQ7XG4gIHZhciB5ID0gdW5kZWZpbmVkO1xuICB2YXIgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgZG9jRWxlbSA9IGRvYyAmJiBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAvLyDmoLnmja4gR0JTIOacgOaWsOaVsOaNru+8jEEtR3JhZGUgQnJvd3NlcnMg6YO95bey5pSv5oyBIGdldEJvdW5kaW5nQ2xpZW50UmVjdCDmlrnms5XvvIzkuI3nlKjlho3ogIPomZHkvKDnu5/nmoTlrp7njrDmlrnlvI9cbiAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAvLyDms6jvvJpqUXVlcnkg6L+Y6ICD6JmR5YeP5Y67IGRvY0VsZW0uY2xpZW50TGVmdC9jbGllbnRUb3BcbiAgLy8g5L2G5rWL6K+V5Y+R546w77yM6L+Z5qC35Y+N6ICM5Lya5a+86Ie05b2TIGh0bWwg5ZKMIGJvZHkg5pyJ6L656LedL+i+ueahhuagt+W8j+aXtu+8jOiOt+WPlueahOWAvOS4jeato+ehrlxuICAvLyDmraTlpJbvvIxpZTYg5Lya5b+955WlIGh0bWwg55qEIG1hcmdpbiDlgLzvvIzlubjov5DlnLDmmK/msqHmnInosIHkvJrljrvorr7nva4gaHRtbCDnmoQgbWFyZ2luXG5cbiAgeCA9IGJveC5sZWZ0O1xuICB5ID0gYm94LnRvcDtcblxuICAvLyBJbiBJRSwgbW9zdCBvZiB0aGUgdGltZSwgMiBleHRyYSBwaXhlbHMgYXJlIGFkZGVkIHRvIHRoZSB0b3AgYW5kIGxlZnRcbiAgLy8gZHVlIHRvIHRoZSBpbXBsaWNpdCAyLXBpeGVsIGluc2V0IGJvcmRlci4gIEluIElFNi83IHF1aXJrcyBtb2RlIGFuZFxuICAvLyBJRTYgc3RhbmRhcmRzIG1vZGUsIHRoaXMgYm9yZGVyIGNhbiBiZSBvdmVycmlkZGVuIGJ5IHNldHRpbmcgdGhlXG4gIC8vIGRvY3VtZW50IGVsZW1lbnQncyBib3JkZXIgdG8gemVybyAtLSB0aHVzLCB3ZSBjYW5ub3QgcmVseSBvbiB0aGVcbiAgLy8gb2Zmc2V0IGFsd2F5cyBiZWluZyAyIHBpeGVscy5cblxuICAvLyBJbiBxdWlya3MgbW9kZSwgdGhlIG9mZnNldCBjYW4gYmUgZGV0ZXJtaW5lZCBieSBxdWVyeWluZyB0aGUgYm9keSdzXG4gIC8vIGNsaWVudExlZnQvY2xpZW50VG9wLCBidXQgaW4gc3RhbmRhcmRzIG1vZGUsIGl0IGlzIGZvdW5kIGJ5IHF1ZXJ5aW5nXG4gIC8vIHRoZSBkb2N1bWVudCBlbGVtZW50J3MgY2xpZW50TGVmdC9jbGllbnRUb3AuICBTaW5jZSB3ZSBhbHJlYWR5IGNhbGxlZFxuICAvLyBnZXRDbGllbnRCb3VuZGluZ1JlY3Qgd2UgaGF2ZSBhbHJlYWR5IGZvcmNlZCBhIHJlZmxvdywgc28gaXQgaXMgbm90XG4gIC8vIHRvbyBleHBlbnNpdmUganVzdCB0byBxdWVyeSB0aGVtIGFsbC5cblxuICAvLyBpZSDkuIvlupTor6Xlh4/ljrvnqpflj6PnmoTovrnmoYblkKfvvIzmr5Xnq5/pu5jorqQgYWJzb2x1dGUg6YO95piv55u45a+556qX5Y+j5a6a5L2N55qEXG4gIC8vIOeql+WPo+i+ueahhuagh+WHhuaYr+iuviBkb2N1bWVudEVsZW1lbnQgLHF1aXJrcyDml7borr7nva4gYm9keVxuICAvLyDmnIDlpb3npoHmraLlnKggYm9keSDlkowgaHRtbCDkuIrovrnmoYYg77yM5L2GIGllIDwgOSBodG1sIOm7mOiupOaciSAycHgg77yM5YeP5Y67XG4gIC8vIOS9huaYr+mdniBpZSDkuI3lj6/og73orr7nva7nqpflj6PovrnmoYbvvIxib2R5IGh0bWwg5Lmf5LiN5piv56qX5Y+jICxpZSDlj6/ku6XpgJrov4cgaHRtbCxib2R5IOiuvue9rlxuICAvLyDmoIflh4YgaWUg5LiLIGRvY0VsZW0uY2xpZW50VG9wIOWwseaYryBib3JkZXItdG9wXG4gIC8vIGllNyBodG1sIOWNs+eql+WPo+i+ueahhuaUueWPmOS4jeS6huOAguawuOi/nOS4uiAyXG4gIC8vIOS9huagh+WHhiBmaXJlZm94L2Nocm9tZS9pZTkg5LiLIGRvY0VsZW0uY2xpZW50VG9wIOaYr+eql+WPo+i+ueahhu+8jOWNs+S9v+iuvuS6hiBib3JkZXItdG9wIOS5n+S4uiAwXG5cbiAgeCAtPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gIHkgLT0gZG9jRWxlbS5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IHgsXG4gICAgdG9wOiB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbCh3LCB0b3ApIHtcbiAgdmFyIHJldCA9IHdbJ3BhZ2UnICsgKHRvcCA/ICdZJyA6ICdYJykgKyAnT2Zmc2V0J107XG4gIHZhciBtZXRob2QgPSAnc2Nyb2xsJyArICh0b3AgPyAnVG9wJyA6ICdMZWZ0Jyk7XG4gIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgIHZhciBkID0gdy5kb2N1bWVudDtcbiAgICAvLyBpZTYsNyw4IHN0YW5kYXJkIG1vZGVcbiAgICByZXQgPSBkLmRvY3VtZW50RWxlbWVudFttZXRob2RdO1xuICAgIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgLy8gcXVpcmtzIG1vZGVcbiAgICAgIHJldCA9IGQuYm9keVttZXRob2RdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KHcpIHtcbiAgcmV0dXJuIGdldFNjcm9sbCh3KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKHcpIHtcbiAgcmV0dXJuIGdldFNjcm9sbCh3LCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gIHZhciBwb3MgPSBnZXRDbGllbnRQb3NpdGlvbihlbCk7XG4gIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuICB2YXIgdyA9IGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICBwb3MubGVmdCArPSBnZXRTY3JvbGxMZWZ0KHcpO1xuICBwb3MudG9wICs9IGdldFNjcm9sbFRvcCh3KTtcbiAgcmV0dXJuIHBvcztcbn1cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG5hbWUsIGNvbXB1dGVkU3R5bGVfKSB7XG4gIHZhciB2YWwgPSAnJztcbiAgdmFyIGQgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gY29tcHV0ZWRTdHlsZV8gfHwgZC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpO1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzYxXG4gIGlmIChjb21wdXRlZFN0eWxlKSB7XG4gICAgdmFsID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpIHx8IGNvbXB1dGVkU3R5bGVbbmFtZV07XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgX1JFX05VTV9OT19QWCA9IG5ldyBSZWdFeHAoJ14oJyArIFJFX05VTSArICcpKD8hcHgpW2EteiVdKyQnLCAnaScpO1xudmFyIFJFX1BPUyA9IC9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkLztcbnZhciBDVVJSRU5UX1NUWUxFID0gJ2N1cnJlbnRTdHlsZSc7XG52YXIgUlVOVElNRV9TVFlMRSA9ICdydW50aW1lU3R5bGUnO1xudmFyIExFRlQgPSAnbGVmdCc7XG52YXIgUFggPSAncHgnO1xuXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZUlFKGVsZW0sIG5hbWUpIHtcbiAgLy8gY3VycmVudFN0eWxlIG1heWJlIG51bGxcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM1MjMxLmFzcHhcbiAgdmFyIHJldCA9IGVsZW1bQ1VSUkVOVF9TVFlMRV0gJiYgZWxlbVtDVVJSRU5UX1NUWUxFXVtuYW1lXTtcblxuICAvLyDlvZMgd2lkdGgvaGVpZ2h0IOiuvue9ruS4uueZvuWIhuavlOaXtu+8jOmAmui/hyBwaXhlbExlZnQg5pa55byP6L2s5o2i55qEIHdpZHRoL2hlaWdodCDlgLxcbiAgLy8g5LiA5byA5aeL5bCx5aSE55CG5LqGISBDVVNUT01fU1RZTEUuaGVpZ2h0LENVU1RPTV9TVFlMRS53aWR0aCAsY3NzSG9vayDop6PlhrNAMjAxMS0wOC0xOVxuICAvLyDlnKggaWUg5LiL5LiN5a+577yM6ZyA6KaB55u05o6l55SoIG9mZnNldCDmlrnlvI9cbiAgLy8gYm9yZGVyV2lkdGgg562J5YC85Lmf5pyJ6Zeu6aKY77yM5L2G6ICD6JmR5YiwIGJvcmRlcldpZHRoIOiuvuS4uueZvuWIhuavlOeahOamgueOh+W+iOWwj++8jOi/memHjOWwseS4jeiAg+iZkeS6hlxuXG4gIC8vIEZyb20gdGhlIGF3ZXNvbWUgaGFjayBieSBEZWFuIEVkd2FyZHNcbiAgLy8gaHR0cDovL2VyaWsuZWFlLm5ldC9hcmNoaXZlcy8yMDA3LzA3LzI3LzE4LjU0LjE1LyNjb21tZW50LTEwMjI5MVxuICAvLyBJZiB3ZSdyZSBub3QgZGVhbGluZyB3aXRoIGEgcmVndWxhciBwaXhlbCBudW1iZXJcbiAgLy8gYnV0IGEgbnVtYmVyIHRoYXQgaGFzIGEgd2VpcmQgZW5kaW5nLCB3ZSBuZWVkIHRvIGNvbnZlcnQgaXQgdG8gcGl4ZWxzXG4gIC8vIGV4Y2x1ZGUgbGVmdCByaWdodCBmb3IgcmVsYXRpdml0eVxuICBpZiAoX1JFX05VTV9OT19QWC50ZXN0KHJldCkgJiYgIVJFX1BPUy50ZXN0KG5hbWUpKSB7XG4gICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuICAgIHZhciBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgdmFyIGxlZnQgPSBzdHlsZVtMRUZUXTtcbiAgICB2YXIgcnNMZWZ0ID0gZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXTtcblxuICAgIC8vIHByZXZlbnQgZmxhc2hpbmcgb2YgY29udGVudFxuICAgIGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF0gPSBlbGVtW0NVUlJFTlRfU1RZTEVdW0xFRlRdO1xuXG4gICAgLy8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxuICAgIHN0eWxlW0xFRlRdID0gbmFtZSA9PT0gJ2ZvbnRTaXplJyA/ICcxZW0nIDogcmV0IHx8IDA7XG4gICAgcmV0ID0gc3R5bGUucGl4ZWxMZWZ0ICsgUFg7XG5cbiAgICAvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG4gICAgc3R5bGVbTEVGVF0gPSBsZWZ0O1xuXG4gICAgZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXSA9IHJzTGVmdDtcbiAgfVxuICByZXR1cm4gcmV0ID09PSAnJyA/ICdhdXRvJyA6IHJldDtcbn1cblxudmFyIGdldENvbXB1dGVkU3R5bGVYID0gdW5kZWZpbmVkO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGdldENvbXB1dGVkU3R5bGVYID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyBfZ2V0Q29tcHV0ZWRTdHlsZSA6IF9nZXRDb21wdXRlZFN0eWxlSUU7XG59XG5cbmZ1bmN0aW9uIGVhY2goYXJyLCBmbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGZuKGFycltpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNCb3JkZXJCb3hGbihlbGVtKSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlWChlbGVtLCAnYm94U2l6aW5nJykgPT09ICdib3JkZXItYm94Jztcbn1cblxudmFyIEJPWF9NT0RFTFMgPSBbJ21hcmdpbicsICdib3JkZXInLCAncGFkZGluZyddO1xudmFyIENPTlRFTlRfSU5ERVggPSAtMTtcbnZhciBQQURESU5HX0lOREVYID0gMjtcbnZhciBCT1JERVJfSU5ERVggPSAxO1xudmFyIE1BUkdJTl9JTkRFWCA9IDA7XG5cbmZ1bmN0aW9uIHN3YXAoZWxlbSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIG9sZCA9IHt9O1xuICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICB2YXIgbmFtZSA9IHVuZGVmaW5lZDtcblxuICAvLyBSZW1lbWJlciB0aGUgb2xkIHZhbHVlcywgYW5kIGluc2VydCB0aGUgbmV3IG9uZXNcbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgb2xkW25hbWVdID0gc3R5bGVbbmFtZV07XG4gICAgICBzdHlsZVtuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2suY2FsbChlbGVtKTtcblxuICAvLyBSZXZlcnQgdGhlIG9sZCB2YWx1ZXNcbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgc3R5bGVbbmFtZV0gPSBvbGRbbmFtZV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBCTVdpZHRoKGVsZW0sIHByb3BzLCB3aGljaCkge1xuICB2YXIgdmFsdWUgPSAwO1xuICB2YXIgcHJvcCA9IHVuZGVmaW5lZDtcbiAgdmFyIGogPSB1bmRlZmluZWQ7XG4gIHZhciBpID0gdW5kZWZpbmVkO1xuICBmb3IgKGogPSAwOyBqIDwgcHJvcHMubGVuZ3RoOyBqKyspIHtcbiAgICBwcm9wID0gcHJvcHNbal07XG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB3aGljaC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY3NzUHJvcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHByb3AgPT09ICdib3JkZXInKSB7XG4gICAgICAgICAgY3NzUHJvcCA9IHByb3AgKyB3aGljaFtpXSArICdXaWR0aCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3NzUHJvcCA9IHByb3AgKyB3aGljaFtpXTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSArPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGVYKGVsZW0sIGNzc1Byb3ApKSB8fCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogQSBjcnVkZSB3YXkgb2YgZGV0ZXJtaW5pbmcgaWYgYW4gb2JqZWN0IGlzIGEgd2luZG93XG4gKiBAbWVtYmVyIHV0aWxcbiAqL1xuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIC8vIG11c3QgdXNlID09IGZvciBpZThcbiAgLyogZXNsaW50IGVxZXFlcTowICovXG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT0gb2JqLndpbmRvdztcbn1cblxudmFyIGRvbVV0aWxzID0ge307XG5cbmVhY2goWydXaWR0aCcsICdIZWlnaHQnXSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgZG9tVXRpbHNbJ2RvYycgKyBuYW1lXSA9IGZ1bmN0aW9uIChyZWZXaW4pIHtcbiAgICB2YXIgZCA9IHJlZldpbi5kb2N1bWVudDtcbiAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgLy8gZmlyZWZveCBjaHJvbWUgZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDwgYm9keS5zY3JvbGxIZWlnaHRcbiAgICAvLyBpZSBzdGFuZGFyZCBtb2RlIDogZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodD4gYm9keS5zY3JvbGxIZWlnaHRcbiAgICBkLmRvY3VtZW50RWxlbWVudFsnc2Nyb2xsJyArIG5hbWVdLFxuICAgIC8vIHF1aXJrcyA6IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQg5pyA5aSn562J5LqO5Y+v6KeG56qX5Y+j5aSa5LiA54K577yfXG4gICAgZC5ib2R5WydzY3JvbGwnICsgbmFtZV0sIGRvbVV0aWxzWyd2aWV3cG9ydCcgKyBuYW1lXShkKSk7XG4gIH07XG5cbiAgZG9tVXRpbHNbJ3ZpZXdwb3J0JyArIG5hbWVdID0gZnVuY3Rpb24gKHdpbikge1xuICAgIC8vIHBjIGJyb3dzZXIgaW5jbHVkZXMgc2Nyb2xsYmFyIGluIHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdmFyIHByb3AgPSAnY2xpZW50JyArIG5hbWU7XG4gICAgdmFyIGRvYyA9IHdpbi5kb2N1bWVudDtcbiAgICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnRQcm9wID0gZG9jdW1lbnRFbGVtZW50W3Byb3BdO1xuICAgIC8vIOagh+WHhuaooeW8j+WPliBkb2N1bWVudEVsZW1lbnRcbiAgICAvLyBiYWNrY29tcGF0IOWPliBib2R5XG4gICAgcmV0dXJuIGRvYy5jb21wYXRNb2RlID09PSAnQ1NTMUNvbXBhdCcgJiYgZG9jdW1lbnRFbGVtZW50UHJvcCB8fCBib2R5ICYmIGJvZHlbcHJvcF0gfHwgZG9jdW1lbnRFbGVtZW50UHJvcDtcbiAgfTtcbn0pO1xuXG4vKlxuIOW+l+WIsOWFg+e0oOeahOWkp+Wwj+S/oeaBr1xuIEBwYXJhbSBlbGVtXG4gQHBhcmFtIG5hbWVcbiBAcGFyYW0ge1N0cmluZ30gW2V4dHJhXSAgJ3BhZGRpbmcnIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nXG4gJ2JvcmRlcicgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmcgKyBib3JkZXJcbiAnbWFyZ2luJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZyArIGJvcmRlciArIG1hcmdpblxuICovXG5mdW5jdGlvbiBnZXRXSChlbGVtLCBuYW1lLCBleHRyYSkge1xuICBpZiAoaXNXaW5kb3coZWxlbSkpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gJ3dpZHRoJyA/IGRvbVV0aWxzLnZpZXdwb3J0V2lkdGgoZWxlbSkgOiBkb21VdGlscy52aWV3cG9ydEhlaWdodChlbGVtKTtcbiAgfSBlbHNlIGlmIChlbGVtLm5vZGVUeXBlID09PSA5KSB7XG4gICAgcmV0dXJuIG5hbWUgPT09ICd3aWR0aCcgPyBkb21VdGlscy5kb2NXaWR0aChlbGVtKSA6IGRvbVV0aWxzLmRvY0hlaWdodChlbGVtKTtcbiAgfVxuICB2YXIgd2hpY2ggPSBuYW1lID09PSAnd2lkdGgnID8gWydMZWZ0JywgJ1JpZ2h0J10gOiBbJ1RvcCcsICdCb3R0b20nXTtcbiAgdmFyIGJvcmRlckJveFZhbHVlID0gbmFtZSA9PT0gJ3dpZHRoJyA/IGVsZW0ub2Zmc2V0V2lkdGggOiBlbGVtLm9mZnNldEhlaWdodDtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtKTtcbiAgdmFyIGlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3hGbihlbGVtLCBjb21wdXRlZFN0eWxlKTtcbiAgdmFyIGNzc0JveFZhbHVlID0gMDtcbiAgaWYgKGJvcmRlckJveFZhbHVlID09IG51bGwgfHwgYm9yZGVyQm94VmFsdWUgPD0gMCkge1xuICAgIGJvcmRlckJveFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIC8vIEZhbGwgYmFjayB0byBjb21wdXRlZCB0aGVuIHVuIGNvbXB1dGVkIGNzcyBpZiBuZWNlc3NhcnlcbiAgICBjc3NCb3hWYWx1ZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0sIG5hbWUpO1xuICAgIGlmIChjc3NCb3hWYWx1ZSA9PSBudWxsIHx8IE51bWJlcihjc3NCb3hWYWx1ZSkgPCAwKSB7XG4gICAgICBjc3NCb3hWYWx1ZSA9IGVsZW0uc3R5bGVbbmFtZV0gfHwgMDtcbiAgICB9XG4gICAgLy8gTm9ybWFsaXplICcnLCBhdXRvLCBhbmQgcHJlcGFyZSBmb3IgZXh0cmFcbiAgICBjc3NCb3hWYWx1ZSA9IHBhcnNlRmxvYXQoY3NzQm94VmFsdWUpIHx8IDA7XG4gIH1cbiAgaWYgKGV4dHJhID09PSB1bmRlZmluZWQpIHtcbiAgICBleHRyYSA9IGlzQm9yZGVyQm94ID8gQk9SREVSX0lOREVYIDogQ09OVEVOVF9JTkRFWDtcbiAgfVxuICB2YXIgYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94ID0gYm9yZGVyQm94VmFsdWUgIT09IHVuZGVmaW5lZCB8fCBpc0JvcmRlckJveDtcbiAgdmFyIHZhbCA9IGJvcmRlckJveFZhbHVlIHx8IGNzc0JveFZhbHVlO1xuICBpZiAoZXh0cmEgPT09IENPTlRFTlRfSU5ERVgpIHtcbiAgICBpZiAoYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94KSB7XG4gICAgICByZXR1cm4gdmFsIC0gZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInLCAncGFkZGluZyddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBjc3NCb3hWYWx1ZTtcbiAgfVxuICBpZiAoYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94KSB7XG4gICAgdmFyIHBhZGRpbmcgPSBleHRyYSA9PT0gUEFERElOR19JTkRFWCA/IC1nZXRQQk1XaWR0aChlbGVtLCBbJ2JvcmRlciddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSkgOiBnZXRQQk1XaWR0aChlbGVtLCBbJ21hcmdpbiddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSk7XG4gICAgcmV0dXJuIHZhbCArIChleHRyYSA9PT0gQk9SREVSX0lOREVYID8gMCA6IHBhZGRpbmcpO1xuICB9XG4gIHJldHVybiBjc3NCb3hWYWx1ZSArIGdldFBCTVdpZHRoKGVsZW0sIEJPWF9NT0RFTFMuc2xpY2UoZXh0cmEpLCB3aGljaCwgY29tcHV0ZWRTdHlsZSk7XG59XG5cbnZhciBjc3NTaG93ID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gIGRpc3BsYXk6ICdibG9jaydcbn07XG5cbi8vIGZpeCAjMTE5IDogaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvMTE5XG5mdW5jdGlvbiBnZXRXSElnbm9yZURpc3BsYXkoZWxlbSkge1xuICB2YXIgdmFsID0gdW5kZWZpbmVkO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgLy8gaW4gY2FzZSBlbGVtIGlzIHdpbmRvd1xuICAvLyBlbGVtLm9mZnNldFdpZHRoID09PSB1bmRlZmluZWRcbiAgaWYgKGVsZW0ub2Zmc2V0V2lkdGggIT09IDApIHtcbiAgICB2YWwgPSBnZXRXSC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHN3YXAoZWxlbSwgY3NzU2hvdywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFsID0gZ2V0V0guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBjc3MoZWwsIG5hbWUsIHYpIHtcbiAgdmFyIHZhbHVlID0gdjtcbiAgaWYgKCh0eXBlb2YgbmFtZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobmFtZSkpID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIGkgaW4gbmFtZSkge1xuICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgY3NzKGVsLCBpLCBuYW1lW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSArPSAncHgnO1xuICAgIH1cbiAgICBlbC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGVYKGVsLCBuYW1lKTtcbn1cblxuZWFjaChbJ3dpZHRoJywgJ2hlaWdodCddLCBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgZmlyc3QgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcbiAgZG9tVXRpbHNbJ291dGVyJyArIGZpcnN0XSA9IGZ1bmN0aW9uIChlbCwgaW5jbHVkZU1hcmdpbikge1xuICAgIHJldHVybiBlbCAmJiBnZXRXSElnbm9yZURpc3BsYXkoZWwsIG5hbWUsIGluY2x1ZGVNYXJnaW4gPyBNQVJHSU5fSU5ERVggOiBCT1JERVJfSU5ERVgpO1xuICB9O1xuICB2YXIgd2hpY2ggPSBuYW1lID09PSAnd2lkdGgnID8gWydMZWZ0JywgJ1JpZ2h0J10gOiBbJ1RvcCcsICdCb3R0b20nXTtcblxuICBkb21VdGlsc1tuYW1lXSA9IGZ1bmN0aW9uIChlbGVtLCB2YWwpIHtcbiAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSk7XG4gICAgICAgIHZhciBpc0JvcmRlckJveCA9IGlzQm9yZGVyQm94Rm4oZWxlbSk7XG4gICAgICAgIGlmIChpc0JvcmRlckJveCkge1xuICAgICAgICAgIHZhbCArPSBnZXRQQk1XaWR0aChlbGVtLCBbJ3BhZGRpbmcnLCAnYm9yZGVyJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3NzKGVsZW0sIG5hbWUsIHZhbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbSAmJiBnZXRXSElnbm9yZURpc3BsYXkoZWxlbSwgbmFtZSwgQ09OVEVOVF9JTkRFWCk7XG4gIH07XG59KTtcblxuLy8g6K6+572uIGVsZW0g55u45a+5IGVsZW0ub3duZXJEb2N1bWVudCDnmoTlnZDmoIdcbmZ1bmN0aW9uIHNldE9mZnNldChlbGVtLCBvZmZzZXQpIHtcbiAgLy8gc2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuICBpZiAoY3NzKGVsZW0sICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICB9XG5cbiAgdmFyIG9sZCA9IGdldE9mZnNldChlbGVtKTtcbiAgdmFyIHJldCA9IHt9O1xuICB2YXIgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgdmFyIGtleSA9IHVuZGVmaW5lZDtcblxuICBmb3IgKGtleSBpbiBvZmZzZXQpIHtcbiAgICBpZiAob2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGN1cnJlbnQgPSBwYXJzZUZsb2F0KGNzcyhlbGVtLCBrZXkpKSB8fCAwO1xuICAgICAgcmV0W2tleV0gPSBjdXJyZW50ICsgb2Zmc2V0W2tleV0gLSBvbGRba2V5XTtcbiAgICB9XG4gIH1cbiAgY3NzKGVsZW0sIHJldCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMoe1xuICBnZXRXaW5kb3c6IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gICAgdmFyIGRvYyA9IG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlO1xuICAgIHJldHVybiBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgfSxcbiAgb2Zmc2V0OiBmdW5jdGlvbiBvZmZzZXQoZWwsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNldE9mZnNldChlbCwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0T2Zmc2V0KGVsKTtcbiAgICB9XG4gIH0sXG5cbiAgaXNXaW5kb3c6IGlzV2luZG93LFxuICBlYWNoOiBlYWNoLFxuICBjc3M6IGNzcyxcbiAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKG9iaikge1xuICAgIHZhciByZXQgPSB7fTtcbiAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICByZXRbaV0gPSBvYmpbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBvdmVyZmxvdyA9IG9iai5vdmVyZmxvdztcbiAgICBpZiAob3ZlcmZsb3cpIHtcbiAgICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICByZXQub3ZlcmZsb3dbaV0gPSBvYmoub3ZlcmZsb3dbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcbiAgc2Nyb2xsTGVmdDogZnVuY3Rpb24gc2Nyb2xsTGVmdCh3LCB2KSB7XG4gICAgaWYgKGlzV2luZG93KHcpKSB7XG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBnZXRTY3JvbGxMZWZ0KHcpO1xuICAgICAgfVxuICAgICAgd2luZG93LnNjcm9sbFRvKHYsIGdldFNjcm9sbFRvcCh3KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHcuc2Nyb2xsTGVmdDtcbiAgICAgIH1cbiAgICAgIHcuc2Nyb2xsTGVmdCA9IHY7XG4gICAgfVxuICB9LFxuICBzY3JvbGxUb3A6IGZ1bmN0aW9uIHNjcm9sbFRvcCh3LCB2KSB7XG4gICAgaWYgKGlzV2luZG93KHcpKSB7XG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBnZXRTY3JvbGxUb3Aodyk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oZ2V0U2Nyb2xsTGVmdCh3KSwgdik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHcuc2Nyb2xsVG9wO1xuICAgICAgfVxuICAgICAgdy5zY3JvbGxUb3AgPSB2O1xuICAgIH1cbiAgfSxcblxuICB2aWV3cG9ydFdpZHRoOiAwLFxuICB2aWV3cG9ydEhlaWdodDogMFxufSwgZG9tVXRpbHMpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXcoZWxlbSwgY29udGFpbmVyLCBjb25maWcpIHtcbiAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAvLyBkb2N1bWVudCDlvZLkuIDljJbliLAgd2luZG93XG4gIGlmIChjb250YWluZXIubm9kZVR5cGUgPT09IDkpIHtcbiAgICBjb250YWluZXIgPSB1dGlsLmdldFdpbmRvdyhjb250YWluZXIpO1xuICB9XG5cbiAgdmFyIGFsbG93SG9yaXpvbnRhbFNjcm9sbCA9IGNvbmZpZy5hbGxvd0hvcml6b250YWxTY3JvbGw7XG4gIHZhciBvbmx5U2Nyb2xsSWZOZWVkZWQgPSBjb25maWcub25seVNjcm9sbElmTmVlZGVkO1xuICB2YXIgYWxpZ25XaXRoVG9wID0gY29uZmlnLmFsaWduV2l0aFRvcDtcbiAgdmFyIGFsaWduV2l0aExlZnQgPSBjb25maWcuYWxpZ25XaXRoTGVmdDtcbiAgdmFyIG9mZnNldFRvcCA9IGNvbmZpZy5vZmZzZXRUb3AgfHwgMDtcbiAgdmFyIG9mZnNldExlZnQgPSBjb25maWcub2Zmc2V0TGVmdCB8fCAwO1xuICB2YXIgb2Zmc2V0Qm90dG9tID0gY29uZmlnLm9mZnNldEJvdHRvbSB8fCAwO1xuICB2YXIgb2Zmc2V0UmlnaHQgPSBjb25maWcub2Zmc2V0UmlnaHQgfHwgMDtcblxuICBhbGxvd0hvcml6b250YWxTY3JvbGwgPSBhbGxvd0hvcml6b250YWxTY3JvbGwgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhbGxvd0hvcml6b250YWxTY3JvbGw7XG5cbiAgdmFyIGlzV2luID0gdXRpbC5pc1dpbmRvdyhjb250YWluZXIpO1xuICB2YXIgZWxlbU9mZnNldCA9IHV0aWwub2Zmc2V0KGVsZW0pO1xuICB2YXIgZWggPSB1dGlsLm91dGVySGVpZ2h0KGVsZW0pO1xuICB2YXIgZXcgPSB1dGlsLm91dGVyV2lkdGgoZWxlbSk7XG4gIHZhciBjb250YWluZXJPZmZzZXQgPSB1bmRlZmluZWQ7XG4gIHZhciBjaCA9IHVuZGVmaW5lZDtcbiAgdmFyIGN3ID0gdW5kZWZpbmVkO1xuICB2YXIgY29udGFpbmVyU2Nyb2xsID0gdW5kZWZpbmVkO1xuICB2YXIgZGlmZlRvcCA9IHVuZGVmaW5lZDtcbiAgdmFyIGRpZmZCb3R0b20gPSB1bmRlZmluZWQ7XG4gIHZhciB3aW4gPSB1bmRlZmluZWQ7XG4gIHZhciB3aW5TY3JvbGwgPSB1bmRlZmluZWQ7XG4gIHZhciB3dyA9IHVuZGVmaW5lZDtcbiAgdmFyIHdoID0gdW5kZWZpbmVkO1xuXG4gIGlmIChpc1dpbikge1xuICAgIHdpbiA9IGNvbnRhaW5lcjtcbiAgICB3aCA9IHV0aWwuaGVpZ2h0KHdpbik7XG4gICAgd3cgPSB1dGlsLndpZHRoKHdpbik7XG4gICAgd2luU2Nyb2xsID0ge1xuICAgICAgbGVmdDogdXRpbC5zY3JvbGxMZWZ0KHdpbiksXG4gICAgICB0b3A6IHV0aWwuc2Nyb2xsVG9wKHdpbilcbiAgICB9O1xuICAgIC8vIGVsZW0g55u45a+5IGNvbnRhaW5lciDlj6/op4bop4bnqpfnmoTot53nprtcbiAgICBkaWZmVG9wID0ge1xuICAgICAgbGVmdDogZWxlbU9mZnNldC5sZWZ0IC0gd2luU2Nyb2xsLmxlZnQgLSBvZmZzZXRMZWZ0LFxuICAgICAgdG9wOiBlbGVtT2Zmc2V0LnRvcCAtIHdpblNjcm9sbC50b3AgLSBvZmZzZXRUb3BcbiAgICB9O1xuICAgIGRpZmZCb3R0b20gPSB7XG4gICAgICBsZWZ0OiBlbGVtT2Zmc2V0LmxlZnQgKyBldyAtICh3aW5TY3JvbGwubGVmdCArIHd3KSArIG9mZnNldFJpZ2h0LFxuICAgICAgdG9wOiBlbGVtT2Zmc2V0LnRvcCArIGVoIC0gKHdpblNjcm9sbC50b3AgKyB3aCkgKyBvZmZzZXRCb3R0b21cbiAgICB9O1xuICAgIGNvbnRhaW5lclNjcm9sbCA9IHdpblNjcm9sbDtcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXJPZmZzZXQgPSB1dGlsLm9mZnNldChjb250YWluZXIpO1xuICAgIGNoID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICBjdyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICBjb250YWluZXJTY3JvbGwgPSB7XG4gICAgICBsZWZ0OiBjb250YWluZXIuc2Nyb2xsTGVmdCxcbiAgICAgIHRvcDogY29udGFpbmVyLnNjcm9sbFRvcFxuICAgIH07XG4gICAgLy8gZWxlbSDnm7jlr7kgY29udGFpbmVyIOWPr+inhuinhueql+eahOi3neemu1xuICAgIC8vIOazqOaEj+i+ueahhiwgb2Zmc2V0IOaYr+i+ueahhuWIsOagueiKgueCuVxuICAgIGRpZmZUb3AgPSB7XG4gICAgICBsZWZ0OiBlbGVtT2Zmc2V0LmxlZnQgLSAoY29udGFpbmVyT2Zmc2V0LmxlZnQgKyAocGFyc2VGbG9hdCh1dGlsLmNzcyhjb250YWluZXIsICdib3JkZXJMZWZ0V2lkdGgnKSkgfHwgMCkpIC0gb2Zmc2V0TGVmdCxcbiAgICAgIHRvcDogZWxlbU9mZnNldC50b3AgLSAoY29udGFpbmVyT2Zmc2V0LnRvcCArIChwYXJzZUZsb2F0KHV0aWwuY3NzKGNvbnRhaW5lciwgJ2JvcmRlclRvcFdpZHRoJykpIHx8IDApKSAtIG9mZnNldFRvcFxuICAgIH07XG4gICAgZGlmZkJvdHRvbSA9IHtcbiAgICAgIGxlZnQ6IGVsZW1PZmZzZXQubGVmdCArIGV3IC0gKGNvbnRhaW5lck9mZnNldC5sZWZ0ICsgY3cgKyAocGFyc2VGbG9hdCh1dGlsLmNzcyhjb250YWluZXIsICdib3JkZXJSaWdodFdpZHRoJykpIHx8IDApKSArIG9mZnNldFJpZ2h0LFxuICAgICAgdG9wOiBlbGVtT2Zmc2V0LnRvcCArIGVoIC0gKGNvbnRhaW5lck9mZnNldC50b3AgKyBjaCArIChwYXJzZUZsb2F0KHV0aWwuY3NzKGNvbnRhaW5lciwgJ2JvcmRlckJvdHRvbVdpZHRoJykpIHx8IDApKSArIG9mZnNldEJvdHRvbVxuICAgIH07XG4gIH1cblxuICBpZiAoZGlmZlRvcC50b3AgPCAwIHx8IGRpZmZCb3R0b20udG9wID4gMCkge1xuICAgIC8vIOW8uuWItuWQkeS4ilxuICAgIGlmIChhbGlnbldpdGhUb3AgPT09IHRydWUpIHtcbiAgICAgIHV0aWwuc2Nyb2xsVG9wKGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLnRvcCArIGRpZmZUb3AudG9wKTtcbiAgICB9IGVsc2UgaWYgKGFsaWduV2l0aFRvcCA9PT0gZmFsc2UpIHtcbiAgICAgIHV0aWwuc2Nyb2xsVG9wKGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLnRvcCArIGRpZmZCb3R0b20udG9wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g6Ieq5Yqo6LCD5pW0XG4gICAgICBpZiAoZGlmZlRvcC50b3AgPCAwKSB7XG4gICAgICAgIHV0aWwuc2Nyb2xsVG9wKGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLnRvcCArIGRpZmZUb3AudG9wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHV0aWwuc2Nyb2xsVG9wKGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLnRvcCArIGRpZmZCb3R0b20udG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFvbmx5U2Nyb2xsSWZOZWVkZWQpIHtcbiAgICAgIGFsaWduV2l0aFRvcCA9IGFsaWduV2l0aFRvcCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhYWxpZ25XaXRoVG9wO1xuICAgICAgaWYgKGFsaWduV2l0aFRvcCkge1xuICAgICAgICB1dGlsLnNjcm9sbFRvcChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC50b3AgKyBkaWZmVG9wLnRvcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1dGlsLnNjcm9sbFRvcChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC50b3AgKyBkaWZmQm90dG9tLnRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFsbG93SG9yaXpvbnRhbFNjcm9sbCkge1xuICAgIGlmIChkaWZmVG9wLmxlZnQgPCAwIHx8IGRpZmZCb3R0b20ubGVmdCA+IDApIHtcbiAgICAgIC8vIOW8uuWItuWQkeS4ilxuICAgICAgaWYgKGFsaWduV2l0aExlZnQgPT09IHRydWUpIHtcbiAgICAgICAgdXRpbC5zY3JvbGxMZWZ0KGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLmxlZnQgKyBkaWZmVG9wLmxlZnQpO1xuICAgICAgfSBlbHNlIGlmIChhbGlnbldpdGhMZWZ0ID09PSBmYWxzZSkge1xuICAgICAgICB1dGlsLnNjcm9sbExlZnQoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwubGVmdCArIGRpZmZCb3R0b20ubGVmdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDoh6rliqjosIPmlbRcbiAgICAgICAgaWYgKGRpZmZUb3AubGVmdCA8IDApIHtcbiAgICAgICAgICB1dGlsLnNjcm9sbExlZnQoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwubGVmdCArIGRpZmZUb3AubGVmdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXRpbC5zY3JvbGxMZWZ0KGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLmxlZnQgKyBkaWZmQm90dG9tLmxlZnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghb25seVNjcm9sbElmTmVlZGVkKSB7XG4gICAgICAgIGFsaWduV2l0aExlZnQgPSBhbGlnbldpdGhMZWZ0ID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFhbGlnbldpdGhMZWZ0O1xuICAgICAgICBpZiAoYWxpZ25XaXRoTGVmdCkge1xuICAgICAgICAgIHV0aWwuc2Nyb2xsTGVmdChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC5sZWZ0ICsgZGlmZlRvcC5sZWZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1dGlsLnNjcm9sbExlZnQoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwubGVmdCArIGRpZmZCb3R0b20ubGVmdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGxJbnRvVmlldzsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kb20tc2Nyb2xsLWludG8tdmlldycpOyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaGFzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSGFzKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSGFzO1xuIiwidmFyIGJhc2VIYXMgPSByZXF1aXJlKCcuL19iYXNlSGFzJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IHByb3BlcnR5IG9mIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiB7ICdiJzogMiB9IH07XG4gKiB2YXIgb3RoZXIgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXMob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzKG9iamVjdCwgJ2EuYicpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXMob3RoZXIsICdhJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXMob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzO1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eU9iamVjdDsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZzsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgZW1wdHlPYmplY3QgPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eU9iamVjdCcpO1xudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG59XG5cbnZhciBNSVhJTlNfS0VZID0gJ21peGlucyc7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBhbGxvdyB0aGUgY3JlYXRpb24gb2YgYW5vbnltb3VzIGZ1bmN0aW9ucyB3aGljaCBkbyBub3Rcbi8vIGhhdmUgLm5hbWUgc2V0IHRvIHRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSBiZWluZyBhc3NpZ25lZCB0by5cbmZ1bmN0aW9uIGlkZW50aXR5KGZuKSB7XG4gIHJldHVybiBmbjtcbn1cblxudmFyIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMgPSB7XG4gICAgcHJvcDogJ3Byb3AnLFxuICAgIGNvbnRleHQ6ICdjb250ZXh0JyxcbiAgICBjaGlsZENvbnRleHQ6ICdjaGlsZCBjb250ZXh0J1xuICB9O1xufSBlbHNlIHtcbiAgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMgPSB7fTtcbn1cblxuZnVuY3Rpb24gZmFjdG9yeShSZWFjdENvbXBvbmVudCwgaXNWYWxpZEVsZW1lbnQsIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlKSB7XG4gIC8qKlxuICAgKiBQb2xpY2llcyB0aGF0IGRlc2NyaWJlIG1ldGhvZHMgaW4gYFJlYWN0Q2xhc3NJbnRlcmZhY2VgLlxuICAgKi9cblxuICB2YXIgaW5qZWN0ZWRNaXhpbnMgPSBbXTtcblxuICAvKipcbiAgICogQ29tcG9zaXRlIGNvbXBvbmVudHMgYXJlIGhpZ2hlci1sZXZlbCBjb21wb25lbnRzIHRoYXQgY29tcG9zZSBvdGhlciBjb21wb3NpdGVcbiAgICogb3IgaG9zdCBjb21wb25lbnRzLlxuICAgKlxuICAgKiBUbyBjcmVhdGUgYSBuZXcgdHlwZSBvZiBgUmVhY3RDbGFzc2AsIHBhc3MgYSBzcGVjaWZpY2F0aW9uIG9mXG4gICAqIHlvdXIgbmV3IGNsYXNzIHRvIGBSZWFjdC5jcmVhdGVDbGFzc2AuIFRoZSBvbmx5IHJlcXVpcmVtZW50IG9mIHlvdXIgY2xhc3NcbiAgICogc3BlY2lmaWNhdGlvbiBpcyB0aGF0IHlvdSBpbXBsZW1lbnQgYSBgcmVuZGVyYCBtZXRob2QuXG4gICAqXG4gICAqICAgdmFyIE15Q29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICogICAgICAgcmV0dXJuIDxkaXY+SGVsbG8gV29ybGQ8L2Rpdj47XG4gICAqICAgICB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIFRoZSBjbGFzcyBzcGVjaWZpY2F0aW9uIHN1cHBvcnRzIGEgc3BlY2lmaWMgcHJvdG9jb2wgb2YgbWV0aG9kcyB0aGF0IGhhdmVcbiAgICogc3BlY2lhbCBtZWFuaW5nIChlLmcuIGByZW5kZXJgKS4gU2VlIGBSZWFjdENsYXNzSW50ZXJmYWNlYCBmb3JcbiAgICogbW9yZSB0aGUgY29tcHJlaGVuc2l2ZSBwcm90b2NvbC4gQW55IG90aGVyIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgaW4gdGhlXG4gICAqIGNsYXNzIHNwZWNpZmljYXRpb24gd2lsbCBiZSBhdmFpbGFibGUgb24gdGhlIHByb3RvdHlwZS5cbiAgICpcbiAgICogQGludGVyZmFjZSBSZWFjdENsYXNzSW50ZXJmYWNlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgdmFyIFJlYWN0Q2xhc3NJbnRlcmZhY2UgPSB7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgTWl4aW4gb2JqZWN0cyB0byBpbmNsdWRlIHdoZW4gZGVmaW5pbmcgeW91ciBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgbWl4aW5zOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0aGF0IHNob3VsZCBiZSBkZWZpbmVkIG9uXG4gICAgICogdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIGluc3RlYWQgb2YgaXRzIHByb3RvdHlwZSAoc3RhdGljIG1ldGhvZHMpLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBzdGF0aWNzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5pdGlvbiBvZiBwcm9wIHR5cGVzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgcHJvcFR5cGVzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5pdGlvbiBvZiBjb250ZXh0IHR5cGVzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29udGV4dFR5cGVzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5pdGlvbiBvZiBjb250ZXh0IHR5cGVzIHRoaXMgY29tcG9uZW50IHNldHMgZm9yIGl0cyBjaGlsZHJlbi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY2hpbGRDb250ZXh0VHlwZXM6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvLyA9PT09IERlZmluaXRpb24gbWV0aG9kcyA9PT09XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLiBWYWx1ZXMgaW4gdGhlIG1hcHBpbmcgd2lsbCBiZSBzZXQgb25cbiAgICAgKiBgdGhpcy5wcm9wc2AgaWYgdGhhdCBwcm9wIGlzIG5vdCBzcGVjaWZpZWQgKGkuZS4gdXNpbmcgYW4gYGluYCBjaGVjaykuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIGJlZm9yZSBgZ2V0SW5pdGlhbFN0YXRlYCBhbmQgdGhlcmVmb3JlIGNhbm5vdCByZWx5XG4gICAgICogb24gYHRoaXMuc3RhdGVgIG9yIHVzZSBgdGhpcy5zZXRTdGF0ZWAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzOiAnREVGSU5FX01BTllfTUVSR0VEJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb25jZSBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgYmUgdXNlZFxuICAgICAqIGFzIHRoZSBpbml0aWFsIHZhbHVlIG9mIGB0aGlzLnN0YXRlYC5cbiAgICAgKlxuICAgICAqICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgKiAgICAgcmV0dXJuIHtcbiAgICAgKiAgICAgICBpc09uOiBmYWxzZSxcbiAgICAgKiAgICAgICBmb29CYXo6IG5ldyBCYXpGb28oKVxuICAgICAqICAgICB9XG4gICAgICogICB9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiAnREVGSU5FX01BTllfTUVSR0VEJyxcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBnZXRDaGlsZENvbnRleHQ6ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuXG4gICAgLyoqXG4gICAgICogVXNlcyBwcm9wcyBmcm9tIGB0aGlzLnByb3BzYCBhbmQgc3RhdGUgZnJvbSBgdGhpcy5zdGF0ZWAgdG8gcmVuZGVyIHRoZVxuICAgICAqIHN0cnVjdHVyZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogTm8gZ3VhcmFudGVlcyBhcmUgbWFkZSBhYm91dCB3aGVuIG9yIGhvdyBvZnRlbiB0aGlzIG1ldGhvZCBpcyBpbnZva2VkLCBzb1xuICAgICAqIGl0IG11c3Qgbm90IGhhdmUgc2lkZSBlZmZlY3RzLlxuICAgICAqXG4gICAgICogICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAqICAgICB2YXIgbmFtZSA9IHRoaXMucHJvcHMubmFtZTtcbiAgICAgKiAgICAgcmV0dXJuIDxkaXY+SGVsbG8sIHtuYW1lfSE8L2Rpdj47XG4gICAgICogICB9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtSZWFjdENvbXBvbmVudH1cbiAgICAgKiBAcmVxdWlyZWRcbiAgICAgKi9cbiAgICByZW5kZXI6ICdERUZJTkVfT05DRScsXG5cbiAgICAvLyA9PT09IERlbGVnYXRlIG1ldGhvZHMgPT09PVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgaW5pdGlhbGx5IGNyZWF0ZWQgYW5kIGFib3V0IHRvIGJlIG1vdW50ZWQuXG4gICAgICogVGhpcyBtYXkgaGF2ZSBzaWRlIGVmZmVjdHMsIGJ1dCBhbnkgZXh0ZXJuYWwgc3Vic2NyaXB0aW9ucyBvciBkYXRhIGNyZWF0ZWRcbiAgICAgKiBieSB0aGlzIG1ldGhvZCBtdXN0IGJlIGNsZWFuZWQgdXAgaW4gYGNvbXBvbmVudFdpbGxVbm1vdW50YC5cbiAgICAgKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudDogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIG1vdW50ZWQgYW5kIGhhcyBhIERPTSByZXByZXNlbnRhdGlvbi5cbiAgICAgKiBIb3dldmVyLCB0aGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCB0aGUgRE9NIG5vZGUgaXMgaW4gdGhlIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gb3BlcmF0ZSBvbiB0aGUgRE9NIHdoZW4gdGhlIGNvbXBvbmVudCBoYXNcbiAgICAgKiBiZWVuIG1vdW50ZWQgKGluaXRpYWxpemVkIGFuZCByZW5kZXJlZCkgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtET01FbGVtZW50fSByb290Tm9kZSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBjb21wb25lbnREaWRNb3VudDogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgcmVjZWl2ZXMgbmV3IHByb3BzLlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gcmVhY3QgdG8gYSBwcm9wIHRyYW5zaXRpb24gYnkgdXBkYXRpbmcgdGhlXG4gICAgICogc3RhdGUgdXNpbmcgYHRoaXMuc2V0U3RhdGVgLiBDdXJyZW50IHByb3BzIGFyZSBhY2Nlc3NlZCB2aWEgYHRoaXMucHJvcHNgLlxuICAgICAqXG4gICAgICogICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihuZXh0UHJvcHMsIG5leHRDb250ZXh0KSB7XG4gICAgICogICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAqICAgICAgIGxpa2VzSW5jcmVhc2luZzogbmV4dFByb3BzLmxpa2VDb3VudCA+IHRoaXMucHJvcHMubGlrZUNvdW50XG4gICAgICogICAgIH0pO1xuICAgICAqICAgfVxuICAgICAqXG4gICAgICogTk9URTogVGhlcmUgaXMgbm8gZXF1aXZhbGVudCBgY29tcG9uZW50V2lsbFJlY2VpdmVTdGF0ZWAuIEFuIGluY29taW5nIHByb3BcbiAgICAgKiB0cmFuc2l0aW9uIG1heSBjYXVzZSBhIHN0YXRlIGNoYW5nZSwgYnV0IHRoZSBvcHBvc2l0ZSBpcyBub3QgdHJ1ZS4gSWYgeW91XG4gICAgICogbmVlZCBpdCwgeW91IGFyZSBwcm9iYWJseSBsb29raW5nIGZvciBgY29tcG9uZW50V2lsbFVwZGF0ZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbmV4dFByb3BzXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hpbGUgZGVjaWRpbmcgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgdXBkYXRlZCBhcyBhIHJlc3VsdCBvZlxuICAgICAqIHJlY2VpdmluZyBuZXcgcHJvcHMsIHN0YXRlIGFuZC9vciBjb250ZXh0LlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gYHJldHVybiBmYWxzZWAgd2hlbiB5b3UncmUgY2VydGFpbiB0aGF0IHRoZVxuICAgICAqIHRyYW5zaXRpb24gdG8gdGhlIG5ldyBwcm9wcy9zdGF0ZS9jb250ZXh0IHdpbGwgbm90IHJlcXVpcmUgYSBjb21wb25lbnRcbiAgICAgKiB1cGRhdGUuXG4gICAgICpcbiAgICAgKiAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICogICAgIHJldHVybiAhZXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fFxuICAgICAqICAgICAgICFlcXVhbChuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAgICogICAgICAgIWVxdWFsKG5leHRDb250ZXh0LCB0aGlzLmNvbnRleHQpO1xuICAgICAqICAgfVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dFN0YXRlXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0Q29udGV4dFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgdXBkYXRlLlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogJ0RFRklORV9PTkNFJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIHVwZGF0ZSBkdWUgdG8gYSB0cmFuc2l0aW9uIGZyb21cbiAgICAgKiBgdGhpcy5wcm9wc2AsIGB0aGlzLnN0YXRlYCBhbmQgYHRoaXMuY29udGV4dGAgdG8gYG5leHRQcm9wc2AsIGBuZXh0U3RhdGVgXG4gICAgICogYW5kIGBuZXh0Q29udGV4dGAuXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBwZXJmb3JtIHByZXBhcmF0aW9uIGJlZm9yZSBhbiB1cGRhdGUgb2NjdXJzLlxuICAgICAqXG4gICAgICogTk9URTogWW91ICoqY2Fubm90KiogdXNlIGB0aGlzLnNldFN0YXRlKClgIGluIHRoaXMgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dFN0YXRlXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0Q29udGV4dFxuICAgICAqIEBwYXJhbSB7UmVhY3RSZWNvbmNpbGVUcmFuc2FjdGlvbn0gdHJhbnNhY3Rpb25cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQncyBET00gcmVwcmVzZW50YXRpb24gaGFzIGJlZW4gdXBkYXRlZC5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIG9wZXJhdGUgb24gdGhlIERPTSB3aGVuIHRoZSBjb21wb25lbnQgaGFzXG4gICAgICogYmVlbiB1cGRhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByZXZQcm9wc1xuICAgICAqIEBwYXJhbSB7P29iamVjdH0gcHJldlN0YXRlXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBwcmV2Q29udGV4dFxuICAgICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gcm9vdE5vZGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQuXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50RGlkVXBkYXRlOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYWJvdXQgdG8gYmUgcmVtb3ZlZCBmcm9tIGl0cyBwYXJlbnQgYW5kIGhhdmVcbiAgICAgKiBpdHMgRE9NIHJlcHJlc2VudGF0aW9uIGRlc3Ryb3llZC5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIGRlYWxsb2NhdGUgYW55IGV4dGVybmFsIHJlc291cmNlcy5cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoZXJlIGlzIG5vIGBjb21wb25lbnREaWRVbm1vdW50YCBzaW5jZSB5b3VyIGNvbXBvbmVudCB3aWxsIGhhdmUgYmVlblxuICAgICAqIGRlc3Ryb3llZCBieSB0aGF0IHBvaW50LlxuICAgICAqXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlbWVudCBmb3IgKGRlcHJlY2F0ZWQpIGBjb21wb25lbnRXaWxsTW91bnRgLlxuICAgICAqXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudDogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VtZW50IGZvciAoZGVwcmVjYXRlZCkgYGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNgLlxuICAgICAqXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlbWVudCBmb3IgKGRlcHJlY2F0ZWQpIGBjb21wb25lbnRXaWxsVXBkYXRlYC5cbiAgICAgKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlOiAnREVGSU5FX01BTlknLFxuXG4gICAgLy8gPT09PSBBZHZhbmNlZCBtZXRob2RzID09PT1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGNvbXBvbmVudCdzIGN1cnJlbnRseSBtb3VudGVkIERPTSByZXByZXNlbnRhdGlvbi5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgaW1wbGVtZW50cyBSZWFjdCdzIHJlbmRlcmluZyBhbmQgcmVjb25jaWxpYXRpb24gYWxnb3JpdGhtLlxuICAgICAqIFNvcGhpc3RpY2F0ZWQgY2xpZW50cyBtYXkgd2lzaCB0byBvdmVycmlkZSB0aGlzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9ufSB0cmFuc2FjdGlvblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqIEBvdmVycmlkYWJsZVxuICAgICAqL1xuICAgIHVwZGF0ZUNvbXBvbmVudDogJ09WRVJSSURFX0JBU0UnXG4gIH07XG5cbiAgLyoqXG4gICAqIFNpbWlsYXIgdG8gUmVhY3RDbGFzc0ludGVyZmFjZSBidXQgZm9yIHN0YXRpYyBtZXRob2RzLlxuICAgKi9cbiAgdmFyIFJlYWN0Q2xhc3NTdGF0aWNJbnRlcmZhY2UgPSB7XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCBhZnRlciBhIGNvbXBvbmVudCBpcyBpbnN0YW50aWF0ZWQgYW5kIHdoZW4gaXRcbiAgICAgKiByZWNlaXZlcyBuZXcgcHJvcHMuIFJldHVybiBhbiBvYmplY3QgdG8gdXBkYXRlIHN0YXRlIGluIHJlc3BvbnNlIHRvXG4gICAgICogcHJvcCBjaGFuZ2VzLiBSZXR1cm4gbnVsbCB0byBpbmRpY2F0ZSBubyBjaGFuZ2UgdG8gc3RhdGUuXG4gICAgICpcbiAgICAgKiBJZiBhbiBvYmplY3QgaXMgcmV0dXJuZWQsIGl0cyBrZXlzIHdpbGwgYmUgbWVyZ2VkIGludG8gdGhlIGV4aXN0aW5nIHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0IHx8IG51bGx9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiAnREVGSU5FX01BTllfTUVSR0VEJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYXBwaW5nIGZyb20gY2xhc3Mgc3BlY2lmaWNhdGlvbiBrZXlzIHRvIHNwZWNpYWwgcHJvY2Vzc2luZyBmdW5jdGlvbnMuXG4gICAqXG4gICAqIEFsdGhvdWdoIHRoZXNlIGFyZSBkZWNsYXJlZCBsaWtlIGluc3RhbmNlIHByb3BlcnRpZXMgaW4gdGhlIHNwZWNpZmljYXRpb25cbiAgICogd2hlbiBkZWZpbmluZyBjbGFzc2VzIHVzaW5nIGBSZWFjdC5jcmVhdGVDbGFzc2AsIHRoZXkgYXJlIGFjdHVhbGx5IHN0YXRpY1xuICAgKiBhbmQgYXJlIGFjY2Vzc2libGUgb24gdGhlIGNvbnN0cnVjdG9yIGluc3RlYWQgb2YgdGhlIHByb3RvdHlwZS4gRGVzcGl0ZVxuICAgKiBiZWluZyBzdGF0aWMsIHRoZXkgbXVzdCBiZSBkZWZpbmVkIG91dHNpZGUgb2YgdGhlIFwic3RhdGljc1wiIGtleSB1bmRlclxuICAgKiB3aGljaCBhbGwgb3RoZXIgc3RhdGljIG1ldGhvZHMgYXJlIGRlZmluZWQuXG4gICAqL1xuICB2YXIgUkVTRVJWRURfU1BFQ19LRVlTID0ge1xuICAgIGRpc3BsYXlOYW1lOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgZGlzcGxheU5hbWUpIHtcbiAgICAgIENvbnN0cnVjdG9yLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgfSxcbiAgICBtaXhpbnM6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBtaXhpbnMpIHtcbiAgICAgIGlmIChtaXhpbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtaXhpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBtaXhTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3RvciwgbWl4aW5zW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBjaGlsZENvbnRleHRUeXBlcykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFsaWRhdGVUeXBlRGVmKENvbnN0cnVjdG9yLCBjaGlsZENvbnRleHRUeXBlcywgJ2NoaWxkQ29udGV4dCcpO1xuICAgICAgfVxuICAgICAgQ29uc3RydWN0b3IuY2hpbGRDb250ZXh0VHlwZXMgPSBfYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgQ29uc3RydWN0b3IuY2hpbGRDb250ZXh0VHlwZXMsXG4gICAgICAgIGNoaWxkQ29udGV4dFR5cGVzXG4gICAgICApO1xuICAgIH0sXG4gICAgY29udGV4dFR5cGVzOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgY29udGV4dFR5cGVzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIGNvbnRleHRUeXBlcywgJ2NvbnRleHQnKTtcbiAgICAgIH1cbiAgICAgIENvbnN0cnVjdG9yLmNvbnRleHRUeXBlcyA9IF9hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBDb25zdHJ1Y3Rvci5jb250ZXh0VHlwZXMsXG4gICAgICAgIGNvbnRleHRUeXBlc1xuICAgICAgKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFNwZWNpYWwgY2FzZSBnZXREZWZhdWx0UHJvcHMgd2hpY2ggc2hvdWxkIG1vdmUgaW50byBzdGF0aWNzIGJ1dCByZXF1aXJlc1xuICAgICAqIGF1dG9tYXRpYyBtZXJnaW5nLlxuICAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oQ29uc3RydWN0b3IsIGdldERlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcykge1xuICAgICAgICBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMgPSBjcmVhdGVNZXJnZWRSZXN1bHRGdW5jdGlvbihcbiAgICAgICAgICBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMsXG4gICAgICAgICAgZ2V0RGVmYXVsdFByb3BzXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMgPSBnZXREZWZhdWx0UHJvcHM7XG4gICAgICB9XG4gICAgfSxcbiAgICBwcm9wVHlwZXM6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBwcm9wVHlwZXMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhbGlkYXRlVHlwZURlZihDb25zdHJ1Y3RvciwgcHJvcFR5cGVzLCAncHJvcCcpO1xuICAgICAgfVxuICAgICAgQ29uc3RydWN0b3IucHJvcFR5cGVzID0gX2Fzc2lnbih7fSwgQ29uc3RydWN0b3IucHJvcFR5cGVzLCBwcm9wVHlwZXMpO1xuICAgIH0sXG4gICAgc3RhdGljczogZnVuY3Rpb24oQ29uc3RydWN0b3IsIHN0YXRpY3MpIHtcbiAgICAgIG1peFN0YXRpY1NwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBzdGF0aWNzKTtcbiAgICB9LFxuICAgIGF1dG9iaW5kOiBmdW5jdGlvbigpIHt9XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVUeXBlRGVmKENvbnN0cnVjdG9yLCB0eXBlRGVmLCBsb2NhdGlvbikge1xuICAgIGZvciAodmFyIHByb3BOYW1lIGluIHR5cGVEZWYpIHtcbiAgICAgIGlmICh0eXBlRGVmLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAvLyB1c2UgYSB3YXJuaW5nIGluc3RlYWQgb2YgYW4gX2ludmFyaWFudCBzbyBjb21wb25lbnRzXG4gICAgICAgIC8vIGRvbid0IHNob3cgdXAgaW4gcHJvZCBidXQgb25seSBpbiBfX0RFVl9fXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgIHR5cGVvZiB0eXBlRGVmW3Byb3BOYW1lXSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgK1xuICAgICAgICAgICAgICAnUmVhY3QuUHJvcFR5cGVzLicsXG4gICAgICAgICAgICBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCAnUmVhY3RDbGFzcycsXG4gICAgICAgICAgICBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lc1tsb2NhdGlvbl0sXG4gICAgICAgICAgICBwcm9wTmFtZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZU1ldGhvZE92ZXJyaWRlKGlzQWxyZWFkeURlZmluZWQsIG5hbWUpIHtcbiAgICB2YXIgc3BlY1BvbGljeSA9IFJlYWN0Q2xhc3NJbnRlcmZhY2UuaGFzT3duUHJvcGVydHkobmFtZSlcbiAgICAgID8gUmVhY3RDbGFzc0ludGVyZmFjZVtuYW1lXVxuICAgICAgOiBudWxsO1xuXG4gICAgLy8gRGlzYWxsb3cgb3ZlcnJpZGluZyBvZiBiYXNlIGNsYXNzIG1ldGhvZHMgdW5sZXNzIGV4cGxpY2l0bHkgYWxsb3dlZC5cbiAgICBpZiAoUmVhY3RDbGFzc01peGluLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBfaW52YXJpYW50KFxuICAgICAgICBzcGVjUG9saWN5ID09PSAnT1ZFUlJJREVfQkFTRScsXG4gICAgICAgICdSZWFjdENsYXNzSW50ZXJmYWNlOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gb3ZlcnJpZGUgJyArXG4gICAgICAgICAgJ2Alc2AgZnJvbSB5b3VyIGNsYXNzIHNwZWNpZmljYXRpb24uIEVuc3VyZSB0aGF0IHlvdXIgbWV0aG9kIG5hbWVzICcgK1xuICAgICAgICAgICdkbyBub3Qgb3ZlcmxhcCB3aXRoIFJlYWN0IG1ldGhvZHMuJyxcbiAgICAgICAgbmFtZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBEaXNhbGxvdyBkZWZpbmluZyBtZXRob2RzIG1vcmUgdGhhbiBvbmNlIHVubGVzcyBleHBsaWNpdGx5IGFsbG93ZWQuXG4gICAgaWYgKGlzQWxyZWFkeURlZmluZWQpIHtcbiAgICAgIF9pbnZhcmlhbnQoXG4gICAgICAgIHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWScgfHwgc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZX01FUkdFRCcsXG4gICAgICAgICdSZWFjdENsYXNzSW50ZXJmYWNlOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gZGVmaW5lICcgK1xuICAgICAgICAgICdgJXNgIG9uIHlvdXIgY29tcG9uZW50IG1vcmUgdGhhbiBvbmNlLiBUaGlzIGNvbmZsaWN0IG1heSBiZSBkdWUgJyArXG4gICAgICAgICAgJ3RvIGEgbWl4aW4uJyxcbiAgICAgICAgbmFtZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWl4aW4gaGVscGVyIHdoaWNoIGhhbmRsZXMgcG9saWN5IHZhbGlkYXRpb24gYW5kIHJlc2VydmVkXG4gICAqIHNwZWNpZmljYXRpb24ga2V5cyB3aGVuIGJ1aWxkaW5nIFJlYWN0IGNsYXNzZXMuXG4gICAqL1xuICBmdW5jdGlvbiBtaXhTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3BlYykge1xuICAgIGlmICghc3BlYykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIHR5cGVvZlNwZWMgPSB0eXBlb2Ygc3BlYztcbiAgICAgICAgdmFyIGlzTWl4aW5WYWxpZCA9IHR5cGVvZlNwZWMgPT09ICdvYmplY3QnICYmIHNwZWMgIT09IG51bGw7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgaXNNaXhpblZhbGlkLFxuICAgICAgICAgICAgXCIlczogWW91J3JlIGF0dGVtcHRpbmcgdG8gaW5jbHVkZSBhIG1peGluIHRoYXQgaXMgZWl0aGVyIG51bGwgXCIgK1xuICAgICAgICAgICAgICAnb3Igbm90IGFuIG9iamVjdC4gQ2hlY2sgdGhlIG1peGlucyBpbmNsdWRlZCBieSB0aGUgY29tcG9uZW50LCAnICtcbiAgICAgICAgICAgICAgJ2FzIHdlbGwgYXMgYW55IG1peGlucyB0aGV5IGluY2x1ZGUgdGhlbXNlbHZlcy4gJyArXG4gICAgICAgICAgICAgICdFeHBlY3RlZCBvYmplY3QgYnV0IGdvdCAlcy4nLFxuICAgICAgICAgICAgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q2xhc3MnLFxuICAgICAgICAgICAgc3BlYyA9PT0gbnVsbCA/IG51bGwgOiB0eXBlb2ZTcGVjXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgX2ludmFyaWFudChcbiAgICAgIHR5cGVvZiBzcGVjICE9PSAnZnVuY3Rpb24nLFxuICAgICAgXCJSZWFjdENsYXNzOiBZb3UncmUgYXR0ZW1wdGluZyB0byBcIiArXG4gICAgICAgICd1c2UgYSBjb21wb25lbnQgY2xhc3Mgb3IgZnVuY3Rpb24gYXMgYSBtaXhpbi4gSW5zdGVhZCwganVzdCB1c2UgYSAnICtcbiAgICAgICAgJ3JlZ3VsYXIgb2JqZWN0LidcbiAgICApO1xuICAgIF9pbnZhcmlhbnQoXG4gICAgICAhaXNWYWxpZEVsZW1lbnQoc3BlYyksXG4gICAgICBcIlJlYWN0Q2xhc3M6IFlvdSdyZSBhdHRlbXB0aW5nIHRvIFwiICtcbiAgICAgICAgJ3VzZSBhIGNvbXBvbmVudCBhcyBhIG1peGluLiBJbnN0ZWFkLCBqdXN0IHVzZSBhIHJlZ3VsYXIgb2JqZWN0LidcbiAgICApO1xuXG4gICAgdmFyIHByb3RvID0gQ29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIHZhciBhdXRvQmluZFBhaXJzID0gcHJvdG8uX19yZWFjdEF1dG9CaW5kUGFpcnM7XG5cbiAgICAvLyBCeSBoYW5kbGluZyBtaXhpbnMgYmVmb3JlIGFueSBvdGhlciBwcm9wZXJ0aWVzLCB3ZSBlbnN1cmUgdGhlIHNhbWVcbiAgICAvLyBjaGFpbmluZyBvcmRlciBpcyBhcHBsaWVkIHRvIG1ldGhvZHMgd2l0aCBERUZJTkVfTUFOWSBwb2xpY3ksIHdoZXRoZXJcbiAgICAvLyBtaXhpbnMgYXJlIGxpc3RlZCBiZWZvcmUgb3IgYWZ0ZXIgdGhlc2UgbWV0aG9kcyBpbiB0aGUgc3BlYy5cbiAgICBpZiAoc3BlYy5oYXNPd25Qcm9wZXJ0eShNSVhJTlNfS0VZKSkge1xuICAgICAgUkVTRVJWRURfU1BFQ19LRVlTLm1peGlucyhDb25zdHJ1Y3Rvciwgc3BlYy5taXhpbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIG5hbWUgaW4gc3BlYykge1xuICAgICAgaWYgKCFzcGVjLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSA9PT0gTUlYSU5TX0tFWSkge1xuICAgICAgICAvLyBXZSBoYXZlIGFscmVhZHkgaGFuZGxlZCBtaXhpbnMgaW4gYSBzcGVjaWFsIGNhc2UgYWJvdmUuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcGVydHkgPSBzcGVjW25hbWVdO1xuICAgICAgdmFyIGlzQWxyZWFkeURlZmluZWQgPSBwcm90by5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICAgIHZhbGlkYXRlTWV0aG9kT3ZlcnJpZGUoaXNBbHJlYWR5RGVmaW5lZCwgbmFtZSk7XG5cbiAgICAgIGlmIChSRVNFUlZFRF9TUEVDX0tFWVMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgUkVTRVJWRURfU1BFQ19LRVlTW25hbWVdKENvbnN0cnVjdG9yLCBwcm9wZXJ0eSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXR1cCBtZXRob2RzIG9uIHByb3RvdHlwZTpcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBtZW1iZXIgbWV0aG9kcyBzaG91bGQgbm90IGJlIGF1dG9tYXRpY2FsbHkgYm91bmQ6XG4gICAgICAgIC8vIDEuIEV4cGVjdGVkIFJlYWN0Q2xhc3MgbWV0aG9kcyAoaW4gdGhlIFwiaW50ZXJmYWNlXCIpLlxuICAgICAgICAvLyAyLiBPdmVycmlkZGVuIG1ldGhvZHMgKHRoYXQgd2VyZSBtaXhlZCBpbikuXG4gICAgICAgIHZhciBpc1JlYWN0Q2xhc3NNZXRob2QgPSBSZWFjdENsYXNzSW50ZXJmYWNlLmhhc093blByb3BlcnR5KG5hbWUpO1xuICAgICAgICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgdmFyIHNob3VsZEF1dG9CaW5kID1cbiAgICAgICAgICBpc0Z1bmN0aW9uICYmXG4gICAgICAgICAgIWlzUmVhY3RDbGFzc01ldGhvZCAmJlxuICAgICAgICAgICFpc0FscmVhZHlEZWZpbmVkICYmXG4gICAgICAgICAgc3BlYy5hdXRvYmluZCAhPT0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNob3VsZEF1dG9CaW5kKSB7XG4gICAgICAgICAgYXV0b0JpbmRQYWlycy5wdXNoKG5hbWUsIHByb3BlcnR5KTtcbiAgICAgICAgICBwcm90b1tuYW1lXSA9IHByb3BlcnR5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc0FscmVhZHlEZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgc3BlY1BvbGljeSA9IFJlYWN0Q2xhc3NJbnRlcmZhY2VbbmFtZV07XG5cbiAgICAgICAgICAgIC8vIFRoZXNlIGNhc2VzIHNob3VsZCBhbHJlYWR5IGJlIGNhdWdodCBieSB2YWxpZGF0ZU1ldGhvZE92ZXJyaWRlLlxuICAgICAgICAgICAgX2ludmFyaWFudChcbiAgICAgICAgICAgICAgaXNSZWFjdENsYXNzTWV0aG9kICYmXG4gICAgICAgICAgICAgICAgKHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWV9NRVJHRUQnIHx8XG4gICAgICAgICAgICAgICAgICBzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTlknKSxcbiAgICAgICAgICAgICAgJ1JlYWN0Q2xhc3M6IFVuZXhwZWN0ZWQgc3BlYyBwb2xpY3kgJXMgZm9yIGtleSAlcyAnICtcbiAgICAgICAgICAgICAgICAnd2hlbiBtaXhpbmcgaW4gY29tcG9uZW50IHNwZWNzLicsXG4gICAgICAgICAgICAgIHNwZWNQb2xpY3ksXG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIEZvciBtZXRob2RzIHdoaWNoIGFyZSBkZWZpbmVkIG1vcmUgdGhhbiBvbmNlLCBjYWxsIHRoZSBleGlzdGluZ1xuICAgICAgICAgICAgLy8gbWV0aG9kcyBiZWZvcmUgY2FsbGluZyB0aGUgbmV3IHByb3BlcnR5LCBtZXJnaW5nIGlmIGFwcHJvcHJpYXRlLlxuICAgICAgICAgICAgaWYgKHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWV9NRVJHRUQnKSB7XG4gICAgICAgICAgICAgIHByb3RvW25hbWVdID0gY3JlYXRlTWVyZ2VkUmVzdWx0RnVuY3Rpb24ocHJvdG9bbmFtZV0sIHByb3BlcnR5KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZJykge1xuICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihwcm90b1tuYW1lXSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm90b1tuYW1lXSA9IHByb3BlcnR5O1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgLy8gQWRkIHZlcmJvc2UgZGlzcGxheU5hbWUgdG8gdGhlIGZ1bmN0aW9uLCB3aGljaCBoZWxwcyB3aGVuIGxvb2tpbmdcbiAgICAgICAgICAgICAgLy8gYXQgcHJvZmlsaW5nIHRvb2xzLlxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nICYmIHNwZWMuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm90b1tuYW1lXS5kaXNwbGF5TmFtZSA9IHNwZWMuZGlzcGxheU5hbWUgKyAnXycgKyBuYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWl4U3RhdGljU3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIHN0YXRpY3MpIHtcbiAgICBpZiAoIXN0YXRpY3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHN0YXRpY3MpIHtcbiAgICAgIHZhciBwcm9wZXJ0eSA9IHN0YXRpY3NbbmFtZV07XG4gICAgICBpZiAoIXN0YXRpY3MuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc1Jlc2VydmVkID0gbmFtZSBpbiBSRVNFUlZFRF9TUEVDX0tFWVM7XG4gICAgICBfaW52YXJpYW50KFxuICAgICAgICAhaXNSZXNlcnZlZCxcbiAgICAgICAgJ1JlYWN0Q2xhc3M6IFlvdSBhcmUgYXR0ZW1wdGluZyB0byBkZWZpbmUgYSByZXNlcnZlZCAnICtcbiAgICAgICAgICAncHJvcGVydHksIGAlc2AsIHRoYXQgc2hvdWxkblxcJ3QgYmUgb24gdGhlIFwic3RhdGljc1wiIGtleS4gRGVmaW5lIGl0ICcgK1xuICAgICAgICAgICdhcyBhbiBpbnN0YW5jZSBwcm9wZXJ0eSBpbnN0ZWFkOyBpdCB3aWxsIHN0aWxsIGJlIGFjY2Vzc2libGUgb24gdGhlICcgK1xuICAgICAgICAgICdjb25zdHJ1Y3Rvci4nLFxuICAgICAgICBuYW1lXG4gICAgICApO1xuXG4gICAgICB2YXIgaXNBbHJlYWR5RGVmaW5lZCA9IG5hbWUgaW4gQ29uc3RydWN0b3I7XG4gICAgICBpZiAoaXNBbHJlYWR5RGVmaW5lZCkge1xuICAgICAgICB2YXIgc3BlY1BvbGljeSA9IFJlYWN0Q2xhc3NTdGF0aWNJbnRlcmZhY2UuaGFzT3duUHJvcGVydHkobmFtZSlcbiAgICAgICAgICA/IFJlYWN0Q2xhc3NTdGF0aWNJbnRlcmZhY2VbbmFtZV1cbiAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgX2ludmFyaWFudChcbiAgICAgICAgICBzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTllfTUVSR0VEJyxcbiAgICAgICAgICAnUmVhY3RDbGFzczogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSAnICtcbiAgICAgICAgICAgICdgJXNgIG9uIHlvdXIgY29tcG9uZW50IG1vcmUgdGhhbiBvbmNlLiBUaGlzIGNvbmZsaWN0IG1heSBiZSAnICtcbiAgICAgICAgICAgICdkdWUgdG8gYSBtaXhpbi4nLFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgKTtcblxuICAgICAgICBDb25zdHJ1Y3RvcltuYW1lXSA9IGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKENvbnN0cnVjdG9yW25hbWVdLCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBDb25zdHJ1Y3RvcltuYW1lXSA9IHByb3BlcnR5O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSB0d28gb2JqZWN0cywgYnV0IHRocm93IGlmIGJvdGggY29udGFpbiB0aGUgc2FtZSBrZXkuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvbmUgVGhlIGZpcnN0IG9iamVjdCwgd2hpY2ggaXMgbXV0YXRlZC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHR3byBUaGUgc2Vjb25kIG9iamVjdFxuICAgKiBAcmV0dXJuIHtvYmplY3R9IG9uZSBhZnRlciBpdCBoYXMgYmVlbiBtdXRhdGVkIHRvIGNvbnRhaW4gZXZlcnl0aGluZyBpbiB0d28uXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKG9uZSwgdHdvKSB7XG4gICAgX2ludmFyaWFudChcbiAgICAgIG9uZSAmJiB0d28gJiYgdHlwZW9mIG9uZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHR3byA9PT0gJ29iamVjdCcsXG4gICAgICAnbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cygpOiBDYW5ub3QgbWVyZ2Ugbm9uLW9iamVjdHMuJ1xuICAgICk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdHdvKSB7XG4gICAgICBpZiAodHdvLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgX2ludmFyaWFudChcbiAgICAgICAgICBvbmVba2V5XSA9PT0gdW5kZWZpbmVkLFxuICAgICAgICAgICdtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKCk6ICcgK1xuICAgICAgICAgICAgJ1RyaWVkIHRvIG1lcmdlIHR3byBvYmplY3RzIHdpdGggdGhlIHNhbWUga2V5OiBgJXNgLiBUaGlzIGNvbmZsaWN0ICcgK1xuICAgICAgICAgICAgJ21heSBiZSBkdWUgdG8gYSBtaXhpbjsgaW4gcGFydGljdWxhciwgdGhpcyBtYXkgYmUgY2F1c2VkIGJ5IHR3byAnICtcbiAgICAgICAgICAgICdnZXRJbml0aWFsU3RhdGUoKSBvciBnZXREZWZhdWx0UHJvcHMoKSBtZXRob2RzIHJldHVybmluZyBvYmplY3RzICcgK1xuICAgICAgICAgICAgJ3dpdGggY2xhc2hpbmcga2V5cy4nLFxuICAgICAgICAgIGtleVxuICAgICAgICApO1xuICAgICAgICBvbmVba2V5XSA9IHR3b1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb25lO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgdHdvIGZ1bmN0aW9ucyBhbmQgbWVyZ2VzIHRoZWlyIHJldHVybiB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uZSBGdW5jdGlvbiB0byBpbnZva2UgZmlyc3QuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHR3byBGdW5jdGlvbiB0byBpbnZva2Ugc2Vjb25kLlxuICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gRnVuY3Rpb24gdGhhdCBpbnZva2VzIHRoZSB0d28gYXJndW1lbnQgZnVuY3Rpb25zLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlTWVyZ2VkUmVzdWx0RnVuY3Rpb24ob25lLCB0d28pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkUmVzdWx0KCkge1xuICAgICAgdmFyIGEgPSBvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHZhciBiID0gdHdvLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoYSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBiO1xuICAgICAgfSBlbHNlIGlmIChiID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG4gICAgICB2YXIgYyA9IHt9O1xuICAgICAgbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cyhjLCBhKTtcbiAgICAgIG1lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoYywgYik7XG4gICAgICByZXR1cm4gYztcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgdHdvIGZ1bmN0aW9ucyBhbmQgaWdub3JlcyB0aGVpciByZXR1cm4gdmFsZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uZSBGdW5jdGlvbiB0byBpbnZva2UgZmlyc3QuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHR3byBGdW5jdGlvbiB0byBpbnZva2Ugc2Vjb25kLlxuICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gRnVuY3Rpb24gdGhhdCBpbnZva2VzIHRoZSB0d28gYXJndW1lbnQgZnVuY3Rpb25zLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKG9uZSwgdHdvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcbiAgICAgIG9uZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgdHdvLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kcyBhIG1ldGhvZCB0byB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcG9uZW50IENvbXBvbmVudCB3aG9zZSBtZXRob2QgaXMgZ29pbmcgdG8gYmUgYm91bmQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZCBNZXRob2QgdG8gYmUgYm91bmQuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgYm91bmQgbWV0aG9kLlxuICAgKi9cbiAgZnVuY3Rpb24gYmluZEF1dG9CaW5kTWV0aG9kKGNvbXBvbmVudCwgbWV0aG9kKSB7XG4gICAgdmFyIGJvdW5kTWV0aG9kID0gbWV0aG9kLmJpbmQoY29tcG9uZW50KTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYm91bmRNZXRob2QuX19yZWFjdEJvdW5kQ29udGV4dCA9IGNvbXBvbmVudDtcbiAgICAgIGJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZE1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZEFyZ3VtZW50cyA9IG51bGw7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZTtcbiAgICAgIHZhciBfYmluZCA9IGJvdW5kTWV0aG9kLmJpbmQ7XG4gICAgICBib3VuZE1ldGhvZC5iaW5kID0gZnVuY3Rpb24obmV3VGhpcykge1xuICAgICAgICBmb3IgKFxuICAgICAgICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksXG4gICAgICAgICAgICBfa2V5ID0gMTtcbiAgICAgICAgICBfa2V5IDwgX2xlbjtcbiAgICAgICAgICBfa2V5KytcbiAgICAgICAgKSB7XG4gICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVc2VyIGlzIHRyeWluZyB0byBiaW5kKCkgYW4gYXV0b2JvdW5kIG1ldGhvZDsgd2UgZWZmZWN0aXZlbHkgd2lsbFxuICAgICAgICAvLyBpZ25vcmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHRoYXQgdGhlIHVzZXIgaXMgdHJ5aW5nIHRvIHVzZSwgc29cbiAgICAgICAgLy8gbGV0J3Mgd2Fybi5cbiAgICAgICAgaWYgKG5ld1RoaXMgIT09IGNvbXBvbmVudCAmJiBuZXdUaGlzICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnYmluZCgpOiBSZWFjdCBjb21wb25lbnQgbWV0aG9kcyBtYXkgb25seSBiZSBib3VuZCB0byB0aGUgJyArXG4gICAgICAgICAgICAgICAgJ2NvbXBvbmVudCBpbnN0YW5jZS4gU2VlICVzJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWFyZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnYmluZCgpOiBZb3UgYXJlIGJpbmRpbmcgYSBjb21wb25lbnQgbWV0aG9kIHRvIHRoZSBjb21wb25lbnQuICcgK1xuICAgICAgICAgICAgICAgICdSZWFjdCBkb2VzIHRoaXMgZm9yIHlvdSBhdXRvbWF0aWNhbGx5IGluIGEgaGlnaC1wZXJmb3JtYW5jZSAnICtcbiAgICAgICAgICAgICAgICAnd2F5LCBzbyB5b3UgY2FuIHNhZmVseSByZW1vdmUgdGhpcyBjYWxsLiBTZWUgJXMnLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYm91bmRNZXRob2Q7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlYm91bmRNZXRob2QgPSBfYmluZC5hcHBseShib3VuZE1ldGhvZCwgYXJndW1lbnRzKTtcbiAgICAgICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRDb250ZXh0ID0gY29tcG9uZW50O1xuICAgICAgICByZWJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZE1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRBcmd1bWVudHMgPSBhcmdzO1xuICAgICAgICByZXR1cm4gcmVib3VuZE1ldGhvZDtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBib3VuZE1ldGhvZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kcyBhbGwgYXV0by1ib3VuZCBtZXRob2RzIGluIGEgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcG9uZW50IENvbXBvbmVudCB3aG9zZSBtZXRob2QgaXMgZ29pbmcgdG8gYmUgYm91bmQuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kQXV0b0JpbmRNZXRob2RzKGNvbXBvbmVudCkge1xuICAgIHZhciBwYWlycyA9IGNvbXBvbmVudC5fX3JlYWN0QXV0b0JpbmRQYWlycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICB2YXIgYXV0b0JpbmRLZXkgPSBwYWlyc1tpXTtcbiAgICAgIHZhciBtZXRob2QgPSBwYWlyc1tpICsgMV07XG4gICAgICBjb21wb25lbnRbYXV0b0JpbmRLZXldID0gYmluZEF1dG9CaW5kTWV0aG9kKGNvbXBvbmVudCwgbWV0aG9kKTtcbiAgICB9XG4gIH1cblxuICB2YXIgSXNNb3VudGVkUHJlTWl4aW4gPSB7XG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIHZhciBJc01vdW50ZWRQb3N0TWl4aW4gPSB7XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWRkIG1vcmUgdG8gdGhlIFJlYWN0Q2xhc3MgYmFzZSBjbGFzcy4gVGhlc2UgYXJlIGFsbCBsZWdhY3kgZmVhdHVyZXMgYW5kXG4gICAqIHRoZXJlZm9yZSBub3QgYWxyZWFkeSBwYXJ0IG9mIHRoZSBtb2Rlcm4gUmVhY3RDb21wb25lbnQuXG4gICAqL1xuICB2YXIgUmVhY3RDbGFzc01peGluID0ge1xuICAgIC8qKlxuICAgICAqIFRPRE86IFRoaXMgd2lsbCBiZSBkZXByZWNhdGVkIGJlY2F1c2Ugc3RhdGUgc2hvdWxkIGFsd2F5cyBrZWVwIGEgY29uc2lzdGVudFxuICAgICAqIHR5cGUgc2lnbmF0dXJlIGFuZCB0aGUgb25seSB1c2UgY2FzZSBmb3IgdGhpcywgaXMgdG8gYXZvaWQgdGhhdC5cbiAgICAgKi9cbiAgICByZXBsYWNlU3RhdGU6IGZ1bmN0aW9uKG5ld1N0YXRlLCBjYWxsYmFjaykge1xuICAgICAgdGhpcy51cGRhdGVyLmVucXVldWVSZXBsYWNlU3RhdGUodGhpcywgbmV3U3RhdGUsIGNhbGxiYWNrKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAZmluYWxcbiAgICAgKi9cbiAgICBpc01vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybmluZyhcbiAgICAgICAgICB0aGlzLl9fZGlkV2FybklzTW91bnRlZCxcbiAgICAgICAgICAnJXM6IGlzTW91bnRlZCBpcyBkZXByZWNhdGVkLiBJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgJyArXG4gICAgICAgICAgICAnc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiBjb21wb25lbnRXaWxsVW5tb3VudCB0byAnICtcbiAgICAgICAgICAgICdwcmV2ZW50IG1lbW9yeSBsZWFrcy4nLFxuICAgICAgICAgICh0aGlzLmNvbnN0cnVjdG9yICYmIHRoaXMuY29uc3RydWN0b3IuZGlzcGxheU5hbWUpIHx8XG4gICAgICAgICAgICB0aGlzLm5hbWUgfHxcbiAgICAgICAgICAgICdDb21wb25lbnQnXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX19kaWRXYXJuSXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhIXRoaXMuX19pc01vdW50ZWQ7XG4gICAgfVxuICB9O1xuXG4gIHZhciBSZWFjdENsYXNzQ29tcG9uZW50ID0gZnVuY3Rpb24oKSB7fTtcbiAgX2Fzc2lnbihcbiAgICBSZWFjdENsYXNzQ29tcG9uZW50LnByb3RvdHlwZSxcbiAgICBSZWFjdENvbXBvbmVudC5wcm90b3R5cGUsXG4gICAgUmVhY3RDbGFzc01peGluXG4gICk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjb21wb3NpdGUgY29tcG9uZW50IGNsYXNzIGdpdmVuIGEgY2xhc3Mgc3BlY2lmaWNhdGlvbi5cbiAgICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdG9wLWxldmVsLWFwaS5odG1sI3JlYWN0LmNyZWF0ZWNsYXNzXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzcGVjIENsYXNzIHNwZWNpZmljYXRpb24gKHdoaWNoIG11c3QgZGVmaW5lIGByZW5kZXJgKS5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259IENvbXBvbmVudCBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlQ2xhc3Moc3BlYykge1xuICAgIC8vIFRvIGtlZXAgb3VyIHdhcm5pbmdzIG1vcmUgdW5kZXJzdGFuZGFibGUsIHdlJ2xsIHVzZSBhIGxpdHRsZSBoYWNrIGhlcmUgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCBDb25zdHJ1Y3Rvci5uYW1lICE9PSAnQ29uc3RydWN0b3InLiBUaGlzIG1ha2VzIHN1cmUgd2UgZG9uJ3RcbiAgICAvLyB1bm5lY2Vzc2FyaWx5IGlkZW50aWZ5IGEgY2xhc3Mgd2l0aG91dCBkaXNwbGF5TmFtZSBhcyAnQ29uc3RydWN0b3InLlxuICAgIHZhciBDb25zdHJ1Y3RvciA9IGlkZW50aXR5KGZ1bmN0aW9uKHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gICAgICAvLyBUaGlzIGNvbnN0cnVjdG9yIGdldHMgb3ZlcnJpZGRlbiBieSBtb2Nrcy4gVGhlIGFyZ3VtZW50IGlzIHVzZWRcbiAgICAgIC8vIGJ5IG1vY2tzIHRvIGFzc2VydCBvbiB3aGF0IGdldHMgbW91bnRlZC5cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybmluZyhcbiAgICAgICAgICB0aGlzIGluc3RhbmNlb2YgQ29uc3RydWN0b3IsXG4gICAgICAgICAgJ1NvbWV0aGluZyBpcyBjYWxsaW5nIGEgUmVhY3QgY29tcG9uZW50IGRpcmVjdGx5LiBVc2UgYSBmYWN0b3J5IG9yICcgK1xuICAgICAgICAgICAgJ0pTWCBpbnN0ZWFkLiBTZWU6IGh0dHBzOi8vZmIubWUvcmVhY3QtbGVnYWN5ZmFjdG9yeSdcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gV2lyZSB1cCBhdXRvLWJpbmRpbmdcbiAgICAgIGlmICh0aGlzLl9fcmVhY3RBdXRvQmluZFBhaXJzLmxlbmd0aCkge1xuICAgICAgICBiaW5kQXV0b0JpbmRNZXRob2RzKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gICAgICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xuXG4gICAgICB0aGlzLnN0YXRlID0gbnVsbDtcblxuICAgICAgLy8gUmVhY3RDbGFzc2VzIGRvZXNuJ3QgaGF2ZSBjb25zdHJ1Y3RvcnMuIEluc3RlYWQsIHRoZXkgdXNlIHRoZVxuICAgICAgLy8gZ2V0SW5pdGlhbFN0YXRlIGFuZCBjb21wb25lbnRXaWxsTW91bnQgbWV0aG9kcyBmb3IgaW5pdGlhbGl6YXRpb24uXG5cbiAgICAgIHZhciBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSA/IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCkgOiBudWxsO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gV2UgYWxsb3cgYXV0by1tb2NrcyB0byBwcm9jZWVkIGFzIGlmIHRoZXkncmUgcmV0dXJuaW5nIG51bGwuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBpbml0aWFsU3RhdGUgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlLl9pc01vY2tGdW5jdGlvblxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBUaGlzIGlzIHByb2JhYmx5IGJhZCBwcmFjdGljZS4gQ29uc2lkZXIgd2FybmluZyBoZXJlIGFuZFxuICAgICAgICAgIC8vIGRlcHJlY2F0aW5nIHRoaXMgY29udmVuaWVuY2UuXG4gICAgICAgICAgaW5pdGlhbFN0YXRlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX2ludmFyaWFudChcbiAgICAgICAgdHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaW5pdGlhbFN0YXRlKSxcbiAgICAgICAgJyVzLmdldEluaXRpYWxTdGF0ZSgpOiBtdXN0IHJldHVybiBhbiBvYmplY3Qgb3IgbnVsbCcsXG4gICAgICAgIENvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8ICdSZWFjdENvbXBvc2l0ZUNvbXBvbmVudCdcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG4gICAgfSk7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gbmV3IFJlYWN0Q2xhc3NDb21wb25lbnQoKTtcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcjtcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUuX19yZWFjdEF1dG9CaW5kUGFpcnMgPSBbXTtcblxuICAgIGluamVjdGVkTWl4aW5zLmZvckVhY2gobWl4U3BlY0ludG9Db21wb25lbnQuYmluZChudWxsLCBDb25zdHJ1Y3RvcikpO1xuXG4gICAgbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIElzTW91bnRlZFByZU1peGluKTtcbiAgICBtaXhTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3BlYyk7XG4gICAgbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIElzTW91bnRlZFBvc3RNaXhpbik7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBkZWZhdWx0UHJvcHMgcHJvcGVydHkgYWZ0ZXIgYWxsIG1peGlucyBoYXZlIGJlZW4gbWVyZ2VkLlxuICAgIGlmIChDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgIENvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyA9IENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcygpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBUaGlzIGlzIGEgdGFnIHRvIGluZGljYXRlIHRoYXQgdGhlIHVzZSBvZiB0aGVzZSBtZXRob2QgbmFtZXMgaXMgb2ssXG4gICAgICAvLyBzaW5jZSBpdCdzIHVzZWQgd2l0aCBjcmVhdGVDbGFzcy4gSWYgaXQncyBub3QsIHRoZW4gaXQncyBsaWtlbHkgYVxuICAgICAgLy8gbWlzdGFrZSBzbyB3ZSdsbCB3YXJuIHlvdSB0byB1c2UgdGhlIHN0YXRpYyBwcm9wZXJ0eSwgcHJvcGVydHlcbiAgICAgIC8vIGluaXRpYWxpemVyIG9yIGNvbnN0cnVjdG9yIHJlc3BlY3RpdmVseS5cbiAgICAgIGlmIChDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkID0ge307XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IucHJvdG90eXBlLmdldEluaXRpYWxTdGF0ZSkge1xuICAgICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0SW5pdGlhbFN0YXRlLmlzUmVhY3RDbGFzc0FwcHJvdmVkID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2ludmFyaWFudChcbiAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5yZW5kZXIsXG4gICAgICAnY3JlYXRlQ2xhc3MoLi4uKTogQ2xhc3Mgc3BlY2lmaWNhdGlvbiBtdXN0IGltcGxlbWVudCBhIGByZW5kZXJgIG1ldGhvZC4nXG4gICAgKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICAhQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbXBvbmVudFNob3VsZFVwZGF0ZSxcbiAgICAgICAgJyVzIGhhcyBhIG1ldGhvZCBjYWxsZWQgJyArXG4gICAgICAgICAgJ2NvbXBvbmVudFNob3VsZFVwZGF0ZSgpLiBEaWQgeW91IG1lYW4gc2hvdWxkQ29tcG9uZW50VXBkYXRlKCk/ICcgK1xuICAgICAgICAgICdUaGUgbmFtZSBpcyBwaHJhc2VkIGFzIGEgcXVlc3Rpb24gYmVjYXVzZSB0aGUgZnVuY3Rpb24gaXMgJyArXG4gICAgICAgICAgJ2V4cGVjdGVkIHRvIHJldHVybiBhIHZhbHVlLicsXG4gICAgICAgIHNwZWMuZGlzcGxheU5hbWUgfHwgJ0EgY29tcG9uZW50J1xuICAgICAgKTtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgICFDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2lldmVQcm9wcyxcbiAgICAgICAgJyVzIGhhcyBhIG1ldGhvZCBjYWxsZWQgJyArXG4gICAgICAgICAgJ2NvbXBvbmVudFdpbGxSZWNpZXZlUHJvcHMoKS4gRGlkIHlvdSBtZWFuIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKT8nLFxuICAgICAgICBzcGVjLmRpc3BsYXlOYW1lIHx8ICdBIGNvbXBvbmVudCdcbiAgICAgICk7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICAhQ29uc3RydWN0b3IucHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjaWV2ZVByb3BzLFxuICAgICAgICAnJXMgaGFzIGEgbWV0aG9kIGNhbGxlZCBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2lldmVQcm9wcygpLiAnICtcbiAgICAgICAgICAnRGlkIHlvdSBtZWFuIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCk/JyxcbiAgICAgICAgc3BlYy5kaXNwbGF5TmFtZSB8fCAnQSBjb21wb25lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFJlZHVjZSB0aW1lIHNwZW50IGRvaW5nIGxvb2t1cHMgYnkgc2V0dGluZyB0aGVzZSBvbiB0aGUgcHJvdG90eXBlLlxuICAgIGZvciAodmFyIG1ldGhvZE5hbWUgaW4gUmVhY3RDbGFzc0ludGVyZmFjZSkge1xuICAgICAgaWYgKCFDb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlQ2xhc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBmYWN0b3J5ID0gcmVxdWlyZSgnLi9mYWN0b3J5Jyk7XG5cbmlmICh0eXBlb2YgUmVhY3QgPT09ICd1bmRlZmluZWQnKSB7XG4gIHRocm93IEVycm9yKFxuICAgICdjcmVhdGUtcmVhY3QtY2xhc3MgY291bGQgbm90IGZpbmQgdGhlIFJlYWN0IG9iamVjdC4gSWYgeW91IGFyZSB1c2luZyBzY3JpcHQgdGFncywgJyArXG4gICAgICAnbWFrZSBzdXJlIHRoYXQgUmVhY3QgaXMgYmVpbmcgbG9hZGVkIGJlZm9yZSBjcmVhdGUtcmVhY3QtY2xhc3MuJ1xuICApO1xufVxuXG4vLyBIYWNrIHRvIGdyYWIgTm9vcFVwZGF0ZVF1ZXVlIGZyb20gaXNvbW9ycGhpYyBSZWFjdFxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0gbmV3IFJlYWN0LkNvbXBvbmVudCgpLnVwZGF0ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgUmVhY3QuQ29tcG9uZW50LFxuICBSZWFjdC5pc1ZhbGlkRWxlbWVudCxcbiAgUmVhY3ROb29wVXBkYXRlUXVldWVcbik7XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF90eXBlb2YgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcblxuZXhwb3J0IHZhciB3YXJuaW5nID0gZnVuY3Rpb24gd2FybmluZygpIHt9O1xuXG4vLyBkb24ndCBwcmludCB3YXJuaW5nIG1lc3NhZ2Ugd2hlbiBpbiBwcm9kdWN0aW9uIGVudiBvciBub2RlIHJ1bnRpbWVcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcodHlwZSwgZXJyb3JzKSB7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgIGlmIChlcnJvcnMuZXZlcnkoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlID09PSAnc3RyaW5nJztcbiAgICAgIH0pKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybih0eXBlLCBlcnJvcnMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgZiA9IGFyZ3NbMF07XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgaWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGYuYXBwbHkobnVsbCwgYXJncy5zbGljZSgxKSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBmID09PSAnc3RyaW5nJykge1xuICAgIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uICh4KSB7XG4gICAgICBpZiAoeCA9PT0gJyUlJykge1xuICAgICAgICByZXR1cm4gJyUnO1xuICAgICAgfVxuICAgICAgaWYgKGkgPj0gbGVuKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgICAgfVxuICAgICAgc3dpdGNoICh4KSB7XG4gICAgICAgIGNhc2UgJyVzJzpcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICAgIGNhc2UgJyVkJzpcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZm9yICh2YXIgYXJnID0gYXJnc1tpXTsgaSA8IGxlbjsgYXJnID0gYXJnc1srK2ldKSB7XG4gICAgICBzdHIgKz0gJyAnICsgYXJnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIHJldHVybiBmO1xufVxuXG5mdW5jdGlvbiBpc05hdGl2ZVN0cmluZ1R5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ3VybCcgfHwgdHlwZSA9PT0gJ2hleCcgfHwgdHlwZSA9PT0gJ2VtYWlsJyB8fCB0eXBlID09PSAncGF0dGVybic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5VmFsdWUodmFsdWUsIHR5cGUpIHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZSA9PT0gJ2FycmF5JyAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAhdmFsdWUubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGlzTmF0aXZlU3RyaW5nVHlwZSh0eXBlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICF2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlPYmplY3Qob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gYXN5bmNQYXJhbGxlbEFycmF5KGFyciwgZnVuYywgY2FsbGJhY2spIHtcbiAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgdmFyIHRvdGFsID0gMDtcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gY291bnQoZXJyb3JzKSB7XG4gICAgcmVzdWx0cy5wdXNoLmFwcGx5KHJlc3VsdHMsIGVycm9ycyk7XG4gICAgdG90YWwrKztcbiAgICBpZiAodG90YWwgPT09IGFyckxlbmd0aCkge1xuICAgICAgY2FsbGJhY2socmVzdWx0cyk7XG4gICAgfVxuICB9XG5cbiAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGEpIHtcbiAgICBmdW5jKGEsIGNvdW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFzeW5jU2VyaWFsQXJyYXkoYXJyLCBmdW5jLCBjYWxsYmFjaykge1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aDtcblxuICBmdW5jdGlvbiBuZXh0KGVycm9ycykge1xuICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCkge1xuICAgICAgY2FsbGJhY2soZXJyb3JzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG9yaWdpbmFsID0gaW5kZXg7XG4gICAgaW5kZXggPSBpbmRleCArIDE7XG4gICAgaWYgKG9yaWdpbmFsIDwgYXJyTGVuZ3RoKSB7XG4gICAgICBmdW5jKGFycltvcmlnaW5hbF0sIG5leHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhbXSk7XG4gICAgfVxuICB9XG5cbiAgbmV4dChbXSk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5PYmpBcnIob2JqQXJyKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgT2JqZWN0LmtleXMob2JqQXJyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0LnB1c2guYXBwbHkocmV0LCBvYmpBcnJba10pO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jTWFwKG9iakFyciwgb3B0aW9uLCBmdW5jLCBjYWxsYmFjaykge1xuICBpZiAob3B0aW9uLmZpcnN0KSB7XG4gICAgdmFyIGZsYXR0ZW5BcnIgPSBmbGF0dGVuT2JqQXJyKG9iakFycik7XG4gICAgcmV0dXJuIGFzeW5jU2VyaWFsQXJyYXkoZmxhdHRlbkFyciwgZnVuYywgY2FsbGJhY2spO1xuICB9XG4gIHZhciBmaXJzdEZpZWxkcyA9IG9wdGlvbi5maXJzdEZpZWxkcyB8fCBbXTtcbiAgaWYgKGZpcnN0RmllbGRzID09PSB0cnVlKSB7XG4gICAgZmlyc3RGaWVsZHMgPSBPYmplY3Qua2V5cyhvYmpBcnIpO1xuICB9XG4gIHZhciBvYmpBcnJLZXlzID0gT2JqZWN0LmtleXMob2JqQXJyKTtcbiAgdmFyIG9iakFyckxlbmd0aCA9IG9iakFycktleXMubGVuZ3RoO1xuICB2YXIgdG90YWwgPSAwO1xuICB2YXIgcmVzdWx0cyA9IFtdO1xuICB2YXIgbmV4dCA9IGZ1bmN0aW9uIG5leHQoZXJyb3JzKSB7XG4gICAgcmVzdWx0cy5wdXNoLmFwcGx5KHJlc3VsdHMsIGVycm9ycyk7XG4gICAgdG90YWwrKztcbiAgICBpZiAodG90YWwgPT09IG9iakFyckxlbmd0aCkge1xuICAgICAgY2FsbGJhY2socmVzdWx0cyk7XG4gICAgfVxuICB9O1xuICBvYmpBcnJLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBhcnIgPSBvYmpBcnJba2V5XTtcbiAgICBpZiAoZmlyc3RGaWVsZHMuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgYXN5bmNTZXJpYWxBcnJheShhcnIsIGZ1bmMsIG5leHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3luY1BhcmFsbGVsQXJyYXkoYXJyLCBmdW5jLCBuZXh0KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGxlbWVudEVycm9yKHJ1bGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvZSkge1xuICAgIGlmIChvZSAmJiBvZS5tZXNzYWdlKSB7XG4gICAgICBvZS5maWVsZCA9IG9lLmZpZWxkIHx8IHJ1bGUuZnVsbEZpZWxkO1xuICAgICAgcmV0dXJuIG9lO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogb2UsXG4gICAgICBmaWVsZDogb2UuZmllbGQgfHwgcnVsZS5mdWxsRmllbGRcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gIGlmIChzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBzIGluIHNvdXJjZSkge1xuICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShzKSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vbc107XG4gICAgICAgIGlmICgodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyAmJiBfdHlwZW9mKHRhcmdldFtzXSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGFyZ2V0W3NdID0gX2V4dGVuZHMoe30sIHRhcmdldFtzXSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtzXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiAgUnVsZSBmb3IgdmFsaWRhdGluZyByZXF1aXJlZCBmaWVsZHMuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIGVycm9ycyBBbiBhcnJheSBvZiBlcnJvcnMgdGhhdCB0aGlzIHJ1bGUgbWF5IGFkZFxuICogIHZhbGlkYXRpb24gZXJyb3JzIHRvLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cbmZ1bmN0aW9uIHJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucywgdHlwZSkge1xuICBpZiAocnVsZS5yZXF1aXJlZCAmJiAoIXNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKSB8fCB1dGlsLmlzRW1wdHlWYWx1ZSh2YWx1ZSwgdHlwZSB8fCBydWxlLnR5cGUpKSkge1xuICAgIGVycm9ycy5wdXNoKHV0aWwuZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMucmVxdWlyZWQsIHJ1bGUuZnVsbEZpZWxkKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZWQ7IiwiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiAgUnVsZSBmb3IgdmFsaWRhdGluZyB3aGl0ZXNwYWNlLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBlcnJvcnMgQW4gYXJyYXkgb2YgZXJyb3JzIHRoYXQgdGhpcyBydWxlIG1heSBhZGRcbiAqICB2YWxpZGF0aW9uIGVycm9ycyB0by5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5mdW5jdGlvbiB3aGl0ZXNwYWNlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucykge1xuICBpZiAoL15cXHMrJC8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgZXJyb3JzLnB1c2godXRpbC5mb3JtYXQob3B0aW9ucy5tZXNzYWdlcy53aGl0ZXNwYWNlLCBydWxlLmZ1bGxGaWVsZCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdoaXRlc3BhY2U7IiwiaW1wb3J0IF90eXBlb2YgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4vcmVxdWlyZWQnO1xuXG4vKiBlc2xpbnQgbWF4LWxlbjowICovXG5cbnZhciBwYXR0ZXJuID0ge1xuICAvLyBodHRwOi8vZW1haWxyZWdleC5jb20vXG4gIGVtYWlsOiAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxcbiAgdXJsOiBuZXcgUmVnRXhwKCdeKD8hbWFpbHRvOikoPzooPzpodHRwfGh0dHBzfGZ0cCk6Ly98Ly8pKD86XFxcXFMrKD86OlxcXFxTKik/QCk/KD86KD86KD86WzEtOV1cXFxcZD98MVxcXFxkXFxcXGR8MlswMV1cXFxcZHwyMlswLTNdKSg/OlxcXFwuKD86MT9cXFxcZHsxLDJ9fDJbMC00XVxcXFxkfDI1WzAtNV0pKXsyfSg/OlxcXFwuKD86WzAtOV1cXFxcZD98MVxcXFxkXFxcXGR8MlswLTRdXFxcXGR8MjVbMC00XSkpfCg/Oig/OlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSstPykqW2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKykoPzpcXFxcLig/OlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSstPykqW2EtelxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKykqKD86XFxcXC4oPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZl17Mix9KSkpfGxvY2FsaG9zdCkoPzo6XFxcXGR7Miw1fSk/KD86KC98XFxcXD98IylbXlxcXFxzXSopPyQnLCAnaScpLFxuICBoZXg6IC9eIz8oW2EtZjAtOV17Nn18W2EtZjAtOV17M30pJC9pXG59O1xuXG52YXIgdHlwZXMgPSB7XG4gIGludGVnZXI6IGZ1bmN0aW9uIGludGVnZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZXMubnVtYmVyKHZhbHVlKSAmJiBwYXJzZUludCh2YWx1ZSwgMTApID09PSB2YWx1ZTtcbiAgfSxcbiAgZmxvYXQ6IGZ1bmN0aW9uIGZsb2F0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVzLm51bWJlcih2YWx1ZSkgJiYgIXR5cGVzLmludGVnZXIodmFsdWUpO1xuICB9LFxuICBhcnJheTogZnVuY3Rpb24gYXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gIH0sXG4gIHJlZ2V4cDogZnVuY3Rpb24gcmVnZXhwKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAhIW5ldyBSZWdFeHAodmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIGRhdGU6IGZ1bmN0aW9uIGRhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlLmdldFRpbWUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlLmdldE1vbnRoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5nZXRZZWFyID09PSAnZnVuY3Rpb24nO1xuICB9LFxuICBudW1iZXI6IGZ1bmN0aW9uIG51bWJlcih2YWx1ZSkge1xuICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG4gIH0sXG4gIG9iamVjdDogZnVuY3Rpb24gb2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKSkgPT09ICdvYmplY3QnICYmICF0eXBlcy5hcnJheSh2YWx1ZSk7XG4gIH0sXG4gIG1ldGhvZDogZnVuY3Rpb24gbWV0aG9kKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfSxcbiAgZW1haWw6IGZ1bmN0aW9uIGVtYWlsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISF2YWx1ZS5tYXRjaChwYXR0ZXJuLmVtYWlsKSAmJiB2YWx1ZS5sZW5ndGggPCAyNTU7XG4gIH0sXG4gIHVybDogZnVuY3Rpb24gdXJsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISF2YWx1ZS5tYXRjaChwYXR0ZXJuLnVybCk7XG4gIH0sXG4gIGhleDogZnVuY3Rpb24gaGV4KHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISF2YWx1ZS5tYXRjaChwYXR0ZXJuLmhleCk7XG4gIH1cbn07XG5cbi8qKlxuICogIFJ1bGUgZm9yIHZhbGlkYXRpbmcgdGhlIHR5cGUgb2YgYSB2YWx1ZS5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gZXJyb3JzIEFuIGFycmF5IG9mIGVycm9ycyB0aGF0IHRoaXMgcnVsZSBtYXkgYWRkXG4gKiAgdmFsaWRhdGlvbiBlcnJvcnMgdG8uXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuZnVuY3Rpb24gdHlwZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpIHtcbiAgaWYgKHJ1bGUucmVxdWlyZWQgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjdXN0b20gPSBbJ2ludGVnZXInLCAnZmxvYXQnLCAnYXJyYXknLCAncmVnZXhwJywgJ29iamVjdCcsICdtZXRob2QnLCAnZW1haWwnLCAnbnVtYmVyJywgJ2RhdGUnLCAndXJsJywgJ2hleCddO1xuICB2YXIgcnVsZVR5cGUgPSBydWxlLnR5cGU7XG4gIGlmIChjdXN0b20uaW5kZXhPZihydWxlVHlwZSkgPiAtMSkge1xuICAgIGlmICghdHlwZXNbcnVsZVR5cGVdKHZhbHVlKSkge1xuICAgICAgZXJyb3JzLnB1c2godXRpbC5mb3JtYXQob3B0aW9ucy5tZXNzYWdlcy50eXBlc1tydWxlVHlwZV0sIHJ1bGUuZnVsbEZpZWxkLCBydWxlLnR5cGUpKTtcbiAgICB9XG4gICAgLy8gc3RyYWlnaHQgdHlwZW9mIGNoZWNrXG4gIH0gZWxzZSBpZiAocnVsZVR5cGUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSAhPT0gcnVsZS50eXBlKSB7XG4gICAgZXJyb3JzLnB1c2godXRpbC5mb3JtYXQob3B0aW9ucy5tZXNzYWdlcy50eXBlc1tydWxlVHlwZV0sIHJ1bGUuZnVsbEZpZWxkLCBydWxlLnR5cGUpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB0eXBlOyIsImltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbCc7XG5cbi8qKlxuICogIFJ1bGUgZm9yIHZhbGlkYXRpbmcgbWluaW11bSBhbmQgbWF4aW11bSBhbGxvd2VkIHZhbHVlcy5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gZXJyb3JzIEFuIGFycmF5IG9mIGVycm9ycyB0aGF0IHRoaXMgcnVsZSBtYXkgYWRkXG4gKiAgdmFsaWRhdGlvbiBlcnJvcnMgdG8uXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuZnVuY3Rpb24gcmFuZ2UocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKSB7XG4gIHZhciBsZW4gPSB0eXBlb2YgcnVsZS5sZW4gPT09ICdudW1iZXInO1xuICB2YXIgbWluID0gdHlwZW9mIHJ1bGUubWluID09PSAnbnVtYmVyJztcbiAgdmFyIG1heCA9IHR5cGVvZiBydWxlLm1heCA9PT0gJ251bWJlcic7XG4gIC8vIOato+WImeWMuemFjeeggeeCueiMg+WbtOS7jlUrMDEwMDAw5LiA55u05YiwVSsxMEZGRkbnmoTmloflrZfvvIjooaXlhYXlubPpnaJTdXBwbGVtZW50YXJ5IFBsYW5l77yJXG4gIHZhciBzcFJlZ2V4cCA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdL2c7XG4gIHZhciB2YWwgPSB2YWx1ZTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciBudW0gPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB2YXIgc3RyID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgdmFyIGFyciA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICBpZiAobnVtKSB7XG4gICAga2V5ID0gJ251bWJlcic7XG4gIH0gZWxzZSBpZiAoc3RyKSB7XG4gICAga2V5ID0gJ3N0cmluZyc7XG4gIH0gZWxzZSBpZiAoYXJyKSB7XG4gICAga2V5ID0gJ2FycmF5JztcbiAgfVxuICAvLyBpZiB0aGUgdmFsdWUgaXMgbm90IG9mIGEgc3VwcG9ydGVkIHR5cGUgZm9yIHJhbmdlIHZhbGlkYXRpb25cbiAgLy8gdGhlIHZhbGlkYXRpb24gcnVsZSBydWxlIHNob3VsZCB1c2UgdGhlXG4gIC8vIHR5cGUgcHJvcGVydHkgdG8gYWxzbyB0ZXN0IGZvciBhIHBhcnRpY3VsYXIgdHlwZVxuICBpZiAoIWtleSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoYXJyKSB7XG4gICAgdmFsID0gdmFsdWUubGVuZ3RoO1xuICB9XG4gIGlmIChzdHIpIHtcbiAgICAvLyDlpITnkIbnoIHngrnlpKfkuo5VKzAxMDAwMOeahOaWh+Wtl2xlbmd0aOWxnuaAp+S4jeWHhuehrueahGJ1Z++8jOWmglwi8KCut/CgrrfwoK63XCIubGVuZ2h0ICE9PSAzXG4gICAgdmFsID0gdmFsdWUucmVwbGFjZShzcFJlZ2V4cCwgJ18nKS5sZW5ndGg7XG4gIH1cbiAgaWYgKGxlbikge1xuICAgIGlmICh2YWwgIT09IHJ1bGUubGVuKSB7XG4gICAgICBlcnJvcnMucHVzaCh1dGlsLmZvcm1hdChvcHRpb25zLm1lc3NhZ2VzW2tleV0ubGVuLCBydWxlLmZ1bGxGaWVsZCwgcnVsZS5sZW4pKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobWluICYmICFtYXggJiYgdmFsIDwgcnVsZS5taW4pIHtcbiAgICBlcnJvcnMucHVzaCh1dGlsLmZvcm1hdChvcHRpb25zLm1lc3NhZ2VzW2tleV0ubWluLCBydWxlLmZ1bGxGaWVsZCwgcnVsZS5taW4pKTtcbiAgfSBlbHNlIGlmIChtYXggJiYgIW1pbiAmJiB2YWwgPiBydWxlLm1heCkge1xuICAgIGVycm9ycy5wdXNoKHV0aWwuZm9ybWF0KG9wdGlvbnMubWVzc2FnZXNba2V5XS5tYXgsIHJ1bGUuZnVsbEZpZWxkLCBydWxlLm1heCkpO1xuICB9IGVsc2UgaWYgKG1pbiAmJiBtYXggJiYgKHZhbCA8IHJ1bGUubWluIHx8IHZhbCA+IHJ1bGUubWF4KSkge1xuICAgIGVycm9ycy5wdXNoKHV0aWwuZm9ybWF0KG9wdGlvbnMubWVzc2FnZXNba2V5XS5yYW5nZSwgcnVsZS5mdWxsRmllbGQsIHJ1bGUubWluLCBydWxlLm1heCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmdlOyIsImltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbCc7XG52YXIgRU5VTSA9ICdlbnVtJztcblxuLyoqXG4gKiAgUnVsZSBmb3IgdmFsaWRhdGluZyBhIHZhbHVlIGV4aXN0cyBpbiBhbiBlbnVtZXJhYmxlIGxpc3QuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIGVycm9ycyBBbiBhcnJheSBvZiBlcnJvcnMgdGhhdCB0aGlzIHJ1bGUgbWF5IGFkZFxuICogIHZhbGlkYXRpb24gZXJyb3JzIHRvLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cbmZ1bmN0aW9uIGVudW1lcmFibGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKSB7XG4gIHJ1bGVbRU5VTV0gPSBBcnJheS5pc0FycmF5KHJ1bGVbRU5VTV0pID8gcnVsZVtFTlVNXSA6IFtdO1xuICBpZiAocnVsZVtFTlVNXS5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICBlcnJvcnMucHVzaCh1dGlsLmZvcm1hdChvcHRpb25zLm1lc3NhZ2VzW0VOVU1dLCBydWxlLmZ1bGxGaWVsZCwgcnVsZVtFTlVNXS5qb2luKCcsICcpKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZW51bWVyYWJsZTsiLCJpbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3V0aWwnO1xuXG4vKipcbiAqICBSdWxlIGZvciB2YWxpZGF0aW5nIGEgcmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4uXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIGVycm9ycyBBbiBhcnJheSBvZiBlcnJvcnMgdGhhdCB0aGlzIHJ1bGUgbWF5IGFkZFxuICogIHZhbGlkYXRpb24gZXJyb3JzIHRvLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cbmZ1bmN0aW9uIHBhdHRlcm4ocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKSB7XG4gIGlmIChydWxlLnBhdHRlcm4pIHtcbiAgICBpZiAocnVsZS5wYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBpZiBhIFJlZ0V4cCBpbnN0YW5jZSBpcyBwYXNzZWQsIHJlc2V0IGBsYXN0SW5kZXhgIGluIGNhc2UgaXRzIGBnbG9iYWxgXG4gICAgICAvLyBmbGFnIGlzIGFjY2lkZW50YWxseSBzZXQgdG8gYHRydWVgLCB3aGljaCBpbiBhIHZhbGlkYXRpb24gc2NlbmFyaW9cbiAgICAgIC8vIGlzIG5vdCBuZWNlc3NhcnkgYW5kIHRoZSByZXN1bHQgbWlnaHQgYmUgbWlzbGVhZGluZ1xuICAgICAgcnVsZS5wYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG4gICAgICBpZiAoIXJ1bGUucGF0dGVybi50ZXN0KHZhbHVlKSkge1xuICAgICAgICBlcnJvcnMucHVzaCh1dGlsLmZvcm1hdChvcHRpb25zLm1lc3NhZ2VzLnBhdHRlcm4ubWlzbWF0Y2gsIHJ1bGUuZnVsbEZpZWxkLCB2YWx1ZSwgcnVsZS5wYXR0ZXJuKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcnVsZS5wYXR0ZXJuID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIF9wYXR0ZXJuID0gbmV3IFJlZ0V4cChydWxlLnBhdHRlcm4pO1xuICAgICAgaWYgKCFfcGF0dGVybi50ZXN0KHZhbHVlKSkge1xuICAgICAgICBlcnJvcnMucHVzaCh1dGlsLmZvcm1hdChvcHRpb25zLm1lc3NhZ2VzLnBhdHRlcm4ubWlzbWF0Y2gsIHJ1bGUuZnVsbEZpZWxkLCB2YWx1ZSwgcnVsZS5wYXR0ZXJuKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhdHRlcm47IiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4vcmVxdWlyZWQnO1xuaW1wb3J0IHdoaXRlc3BhY2UgZnJvbSAnLi93aGl0ZXNwYWNlJztcbmltcG9ydCB0eXBlIGZyb20gJy4vdHlwZSc7XG5pbXBvcnQgcmFuZ2UgZnJvbSAnLi9yYW5nZSc7XG5pbXBvcnQgZW51bVJ1bGUgZnJvbSAnLi9lbnVtJztcbmltcG9ydCBwYXR0ZXJuIGZyb20gJy4vcGF0dGVybic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICB3aGl0ZXNwYWNlOiB3aGl0ZXNwYWNlLFxuICB0eXBlOiB0eXBlLFxuICByYW5nZTogcmFuZ2UsXG4gICdlbnVtJzogZW51bVJ1bGUsXG4gIHBhdHRlcm46IHBhdHRlcm5cbn07IiwiaW1wb3J0IHJ1bGVzIGZyb20gJy4uL3J1bGUvJztcbmltcG9ydCB7IGlzRW1wdHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuXG4vKipcbiAqICBQZXJmb3JtcyB2YWxpZGF0aW9uIGZvciBzdHJpbmcgdHlwZXMuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5mdW5jdGlvbiBzdHJpbmcocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKGlzRW1wdHlWYWx1ZSh2YWx1ZSwgJ3N0cmluZycpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zLCAnc3RyaW5nJyk7XG4gICAgaWYgKCFpc0VtcHR5VmFsdWUodmFsdWUsICdzdHJpbmcnKSkge1xuICAgICAgcnVsZXMudHlwZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgICAgcnVsZXMucmFuZ2UocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIHJ1bGVzLnBhdHRlcm4ocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIGlmIChydWxlLndoaXRlc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgcnVsZXMud2hpdGVzcGFjZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYWxsYmFjayhlcnJvcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmc7IiwiaW1wb3J0IHJ1bGVzIGZyb20gJy4uL3J1bGUvJztcbmltcG9ydCB7IGlzRW1wdHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuXG4vKipcbiAqICBWYWxpZGF0ZXMgYSBmdW5jdGlvbi5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cbmZ1bmN0aW9uIG1ldGhvZChydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWV0aG9kOyIsImltcG9ydCBydWxlcyBmcm9tICcuLi9ydWxlLyc7XG5pbXBvcnQgeyBpc0VtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiAgVmFsaWRhdGVzIGEgbnVtYmVyLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuZnVuY3Rpb24gbnVtYmVyKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZXMudHlwZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgICAgcnVsZXMucmFuZ2UocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyOyIsImltcG9ydCB7IGlzRW1wdHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHJ1bGVzIGZyb20gJy4uL3J1bGUvJztcblxuLyoqXG4gKiAgVmFsaWRhdGVzIGEgYm9vbGVhbi5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cbmZ1bmN0aW9uIGJvb2xlYW4ocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKGlzRW1wdHlWYWx1ZSh2YWx1ZSkgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlcy50eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJvb2xlYW47IiwiaW1wb3J0IHJ1bGVzIGZyb20gJy4uL3J1bGUvJztcbmltcG9ydCB7IGlzRW1wdHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuXG4vKipcbiAqICBWYWxpZGF0ZXMgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0eXBlLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICBpZiAoIWlzRW1wdHlWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVnZXhwOyIsImltcG9ydCBydWxlcyBmcm9tICcuLi9ydWxlLyc7XG5pbXBvcnQgeyBpc0VtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiAgVmFsaWRhdGVzIGEgbnVtYmVyIGlzIGFuIGludGVnZXIuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5mdW5jdGlvbiBpbnRlZ2VyKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZXMudHlwZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgICAgcnVsZXMucmFuZ2UocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW50ZWdlcjsiLCJpbXBvcnQgcnVsZXMgZnJvbSAnLi4vcnVsZS8nO1xuaW1wb3J0IHsgaXNFbXB0eVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5cbi8qKlxuICogIFZhbGlkYXRlcyBhIG51bWJlciBpcyBhIGZsb2F0aW5nIHBvaW50IG51bWJlci5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cbmZ1bmN0aW9uIGZsb2F0Rm4ocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKGlzRW1wdHlWYWx1ZSh2YWx1ZSkgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlcy50eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgICBydWxlcy5yYW5nZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICBjYWxsYmFjayhlcnJvcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmbG9hdEZuOyIsImltcG9ydCBydWxlcyBmcm9tICcuLi9ydWxlLyc7XG5pbXBvcnQgeyBpc0VtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbi8qKlxuICogIFZhbGlkYXRlcyBhbiBhcnJheS5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5KHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUsICdhcnJheScpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zLCAnYXJyYXknKTtcbiAgICBpZiAoIWlzRW1wdHlWYWx1ZSh2YWx1ZSwgJ2FycmF5JykpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIHJ1bGVzLnJhbmdlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5OyIsImltcG9ydCBydWxlcyBmcm9tICcuLi9ydWxlLyc7XG5pbXBvcnQgeyBpc0VtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiAgVmFsaWRhdGVzIGFuIG9iamVjdC5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdChydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0OyIsImltcG9ydCBydWxlcyBmcm9tICcuLi9ydWxlLyc7XG5pbXBvcnQgeyBpc0VtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbnZhciBFTlVNID0gJ2VudW0nO1xuXG4vKipcbiAqICBWYWxpZGF0ZXMgYW4gZW51bWVyYWJsZSBsaXN0LlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuZnVuY3Rpb24gZW51bWVyYWJsZShydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBydWxlc1tFTlVNXShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICBjYWxsYmFjayhlcnJvcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbnVtZXJhYmxlOyIsImltcG9ydCBydWxlcyBmcm9tICcuLi9ydWxlLyc7XG5pbXBvcnQgeyBpc0VtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiAgVmFsaWRhdGVzIGEgcmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4uXG4gKlxuICogIFBlcmZvcm1zIHZhbGlkYXRpb24gd2hlbiBhIHJ1bGUgb25seSBjb250YWluc1xuICogIGEgcGF0dGVybiBwcm9wZXJ0eSBidXQgaXMgbm90IGRlY2xhcmVkIGFzIGEgc3RyaW5nIHR5cGUuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5mdW5jdGlvbiBwYXR0ZXJuKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUsICdzdHJpbmcnKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgaWYgKCFpc0VtcHR5VmFsdWUodmFsdWUsICdzdHJpbmcnKSkge1xuICAgICAgcnVsZXMucGF0dGVybihydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICBjYWxsYmFjayhlcnJvcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYXR0ZXJuOyIsImltcG9ydCBydWxlcyBmcm9tICcuLi9ydWxlLyc7XG5pbXBvcnQgeyBpc0VtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcblxuZnVuY3Rpb24gZGF0ZShydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICAvLyBjb25zb2xlLmxvZygnaW50ZWdlciBydWxlIGNhbGxlZCAlaicsIHJ1bGUpO1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuICAvLyBjb25zb2xlLmxvZygndmFsaWRhdGUgb24gJXMgdmFsdWUnLCB2YWx1ZSk7XG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICBpZiAoIWlzRW1wdHlWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIHZhciBkYXRlT2JqZWN0ID0gdm9pZCAwO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICBkYXRlT2JqZWN0ID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZU9iamVjdCA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBydWxlcy50eXBlKHJ1bGUsIGRhdGVPYmplY3QsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIGlmIChkYXRlT2JqZWN0KSB7XG4gICAgICAgIHJ1bGVzLnJhbmdlKHJ1bGUsIGRhdGVPYmplY3QuZ2V0VGltZSgpLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGU7IiwiaW1wb3J0IF90eXBlb2YgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgcnVsZXMgZnJvbSAnLi4vcnVsZS8nO1xuXG5mdW5jdGlvbiByZXF1aXJlZChydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB0eXBlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyAnYXJyYXknIDogdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSk7XG4gIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucywgdHlwZSk7XG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmVkOyIsImltcG9ydCBydWxlcyBmcm9tICcuLi9ydWxlLyc7XG5pbXBvcnQgeyBpc0VtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcblxuZnVuY3Rpb24gdHlwZShydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgcnVsZVR5cGUgPSBydWxlLnR5cGU7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUsIHJ1bGVUeXBlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucywgcnVsZVR5cGUpO1xuICAgIGlmICghaXNFbXB0eVZhbHVlKHZhbHVlLCBydWxlVHlwZSkpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHlwZTsiLCJpbXBvcnQgc3RyaW5nIGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCBtZXRob2QgZnJvbSAnLi9tZXRob2QnO1xuaW1wb3J0IG51bWJlciBmcm9tICcuL251bWJlcic7XG5pbXBvcnQgYm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4nO1xuaW1wb3J0IHJlZ2V4cCBmcm9tICcuL3JlZ2V4cCc7XG5pbXBvcnQgaW50ZWdlciBmcm9tICcuL2ludGVnZXInO1xuaW1wb3J0IGZsb2F0IGZyb20gJy4vZmxvYXQnO1xuaW1wb3J0IGFycmF5IGZyb20gJy4vYXJyYXknO1xuaW1wb3J0IG9iamVjdCBmcm9tICcuL29iamVjdCc7XG5pbXBvcnQgZW51bVZhbGlkYXRvciBmcm9tICcuL2VudW0nO1xuaW1wb3J0IHBhdHRlcm4gZnJvbSAnLi9wYXR0ZXJuJztcbmltcG9ydCBkYXRlIGZyb20gJy4vZGF0ZSc7XG5pbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi9yZXF1aXJlZCc7XG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0cmluZzogc3RyaW5nLFxuICBtZXRob2Q6IG1ldGhvZCxcbiAgbnVtYmVyOiBudW1iZXIsXG4gIGJvb2xlYW46IGJvb2xlYW4sXG4gIHJlZ2V4cDogcmVnZXhwLFxuICBpbnRlZ2VyOiBpbnRlZ2VyLFxuICBmbG9hdDogZmxvYXQsXG4gIGFycmF5OiBhcnJheSxcbiAgb2JqZWN0OiBvYmplY3QsXG4gICdlbnVtJzogZW51bVZhbGlkYXRvcixcbiAgcGF0dGVybjogcGF0dGVybixcbiAgZGF0ZTogZGF0ZSxcbiAgdXJsOiB0eXBlLFxuICBoZXg6IHR5cGUsXG4gIGVtYWlsOiB0eXBlLFxuICByZXF1aXJlZDogcmVxdWlyZWRcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIG5ld01lc3NhZ2VzKCkge1xuICByZXR1cm4ge1xuICAgICdkZWZhdWx0JzogJ1ZhbGlkYXRpb24gZXJyb3Igb24gZmllbGQgJXMnLFxuICAgIHJlcXVpcmVkOiAnJXMgaXMgcmVxdWlyZWQnLFxuICAgICdlbnVtJzogJyVzIG11c3QgYmUgb25lIG9mICVzJyxcbiAgICB3aGl0ZXNwYWNlOiAnJXMgY2Fubm90IGJlIGVtcHR5JyxcbiAgICBkYXRlOiB7XG4gICAgICBmb3JtYXQ6ICclcyBkYXRlICVzIGlzIGludmFsaWQgZm9yIGZvcm1hdCAlcycsXG4gICAgICBwYXJzZTogJyVzIGRhdGUgY291bGQgbm90IGJlIHBhcnNlZCwgJXMgaXMgaW52YWxpZCAnLFxuICAgICAgaW52YWxpZDogJyVzIGRhdGUgJXMgaXMgaW52YWxpZCdcbiAgICB9LFxuICAgIHR5cGVzOiB7XG4gICAgICBzdHJpbmc6ICclcyBpcyBub3QgYSAlcycsXG4gICAgICBtZXRob2Q6ICclcyBpcyBub3QgYSAlcyAoZnVuY3Rpb24pJyxcbiAgICAgIGFycmF5OiAnJXMgaXMgbm90IGFuICVzJyxcbiAgICAgIG9iamVjdDogJyVzIGlzIG5vdCBhbiAlcycsXG4gICAgICBudW1iZXI6ICclcyBpcyBub3QgYSAlcycsXG4gICAgICBkYXRlOiAnJXMgaXMgbm90IGEgJXMnLFxuICAgICAgYm9vbGVhbjogJyVzIGlzIG5vdCBhICVzJyxcbiAgICAgIGludGVnZXI6ICclcyBpcyBub3QgYW4gJXMnLFxuICAgICAgZmxvYXQ6ICclcyBpcyBub3QgYSAlcycsXG4gICAgICByZWdleHA6ICclcyBpcyBub3QgYSB2YWxpZCAlcycsXG4gICAgICBlbWFpbDogJyVzIGlzIG5vdCBhIHZhbGlkICVzJyxcbiAgICAgIHVybDogJyVzIGlzIG5vdCBhIHZhbGlkICVzJyxcbiAgICAgIGhleDogJyVzIGlzIG5vdCBhIHZhbGlkICVzJ1xuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBsZW46ICclcyBtdXN0IGJlIGV4YWN0bHkgJXMgY2hhcmFjdGVycycsXG4gICAgICBtaW46ICclcyBtdXN0IGJlIGF0IGxlYXN0ICVzIGNoYXJhY3RlcnMnLFxuICAgICAgbWF4OiAnJXMgY2Fubm90IGJlIGxvbmdlciB0aGFuICVzIGNoYXJhY3RlcnMnLFxuICAgICAgcmFuZ2U6ICclcyBtdXN0IGJlIGJldHdlZW4gJXMgYW5kICVzIGNoYXJhY3RlcnMnXG4gICAgfSxcbiAgICBudW1iZXI6IHtcbiAgICAgIGxlbjogJyVzIG11c3QgZXF1YWwgJXMnLFxuICAgICAgbWluOiAnJXMgY2Fubm90IGJlIGxlc3MgdGhhbiAlcycsXG4gICAgICBtYXg6ICclcyBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuICVzJyxcbiAgICAgIHJhbmdlOiAnJXMgbXVzdCBiZSBiZXR3ZWVuICVzIGFuZCAlcydcbiAgICB9LFxuICAgIGFycmF5OiB7XG4gICAgICBsZW46ICclcyBtdXN0IGJlIGV4YWN0bHkgJXMgaW4gbGVuZ3RoJyxcbiAgICAgIG1pbjogJyVzIGNhbm5vdCBiZSBsZXNzIHRoYW4gJXMgaW4gbGVuZ3RoJyxcbiAgICAgIG1heDogJyVzIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gJXMgaW4gbGVuZ3RoJyxcbiAgICAgIHJhbmdlOiAnJXMgbXVzdCBiZSBiZXR3ZWVuICVzIGFuZCAlcyBpbiBsZW5ndGgnXG4gICAgfSxcbiAgICBwYXR0ZXJuOiB7XG4gICAgICBtaXNtYXRjaDogJyVzIHZhbHVlICVzIGRvZXMgbm90IG1hdGNoIHBhdHRlcm4gJXMnXG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICB2YXIgY2xvbmVkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgICBjbG9uZWQuY2xvbmUgPSB0aGlzLmNsb25lO1xuICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgbWVzc2FnZXMgPSBuZXdNZXNzYWdlcygpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX3R5cGVvZiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJztcbmltcG9ydCB7IGZvcm1hdCwgY29tcGxlbWVudEVycm9yLCBhc3luY01hcCwgd2FybmluZywgZGVlcE1lcmdlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB2YWxpZGF0b3JzIGZyb20gJy4vdmFsaWRhdG9yLyc7XG5pbXBvcnQgeyBtZXNzYWdlcyBhcyBkZWZhdWx0TWVzc2FnZXMsIG5ld01lc3NhZ2VzIH0gZnJvbSAnLi9tZXNzYWdlcyc7XG5cbi8qKlxuICogIEVuY2Fwc3VsYXRlcyBhIHZhbGlkYXRpb24gc2NoZW1hLlxuICpcbiAqICBAcGFyYW0gZGVzY3JpcHRvciBBbiBvYmplY3QgZGVjbGFyaW5nIHZhbGlkYXRpb24gcnVsZXNcbiAqICBmb3IgdGhpcyBzY2hlbWEuXG4gKi9cbmZ1bmN0aW9uIFNjaGVtYShkZXNjcmlwdG9yKSB7XG4gIHRoaXMucnVsZXMgPSBudWxsO1xuICB0aGlzLl9tZXNzYWdlcyA9IGRlZmF1bHRNZXNzYWdlcztcbiAgdGhpcy5kZWZpbmUoZGVzY3JpcHRvcik7XG59XG5cblNjaGVtYS5wcm90b3R5cGUgPSB7XG4gIG1lc3NhZ2VzOiBmdW5jdGlvbiBtZXNzYWdlcyhfbWVzc2FnZXMpIHtcbiAgICBpZiAoX21lc3NhZ2VzKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlcyA9IGRlZXBNZXJnZShuZXdNZXNzYWdlcygpLCBfbWVzc2FnZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZXM7XG4gIH0sXG4gIGRlZmluZTogZnVuY3Rpb24gZGVmaW5lKHJ1bGVzKSB7XG4gICAgaWYgKCFydWxlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY29uZmlndXJlIGEgc2NoZW1hIHdpdGggbm8gcnVsZXMnKTtcbiAgICB9XG4gICAgaWYgKCh0eXBlb2YgcnVsZXMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHJ1bGVzKSkgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkocnVsZXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1J1bGVzIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgfVxuICAgIHRoaXMucnVsZXMgPSB7fTtcbiAgICB2YXIgeiA9IHZvaWQgMDtcbiAgICB2YXIgaXRlbSA9IHZvaWQgMDtcbiAgICBmb3IgKHogaW4gcnVsZXMpIHtcbiAgICAgIGlmIChydWxlcy5oYXNPd25Qcm9wZXJ0eSh6KSkge1xuICAgICAgICBpdGVtID0gcnVsZXNbel07XG4gICAgICAgIHRoaXMucnVsZXNbel0gPSBBcnJheS5pc0FycmF5KGl0ZW0pID8gaXRlbSA6IFtpdGVtXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHZhbGlkYXRlOiBmdW5jdGlvbiB2YWxpZGF0ZShzb3VyY2VfKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBvID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgb2MgPSBhcmd1bWVudHNbMl07XG5cbiAgICB2YXIgc291cmNlID0gc291cmNlXztcbiAgICB2YXIgb3B0aW9ucyA9IG87XG4gICAgdmFyIGNhbGxiYWNrID0gb2M7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIGlmICghdGhpcy5ydWxlcyB8fCBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb21wbGV0ZShyZXN1bHRzKSB7XG4gICAgICB2YXIgaSA9IHZvaWQgMDtcbiAgICAgIHZhciBmaWVsZCA9IHZvaWQgMDtcbiAgICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICAgIHZhciBmaWVsZHMgPSB7fTtcblxuICAgICAgZnVuY3Rpb24gYWRkKGUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcbiAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0LmFwcGx5KGVycm9ycywgZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWRkKHJlc3VsdHNbaV0pO1xuICAgICAgfVxuICAgICAgaWYgKCFlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGVycm9ycyA9IG51bGw7XG4gICAgICAgIGZpZWxkcyA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZmllbGQgPSBlcnJvcnNbaV0uZmllbGQ7XG4gICAgICAgICAgZmllbGRzW2ZpZWxkXSA9IGZpZWxkc1tmaWVsZF0gfHwgW107XG4gICAgICAgICAgZmllbGRzW2ZpZWxkXS5wdXNoKGVycm9yc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKGVycm9ycywgZmllbGRzKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5tZXNzYWdlcykge1xuICAgICAgdmFyIG1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcygpO1xuICAgICAgaWYgKG1lc3NhZ2VzID09PSBkZWZhdWx0TWVzc2FnZXMpIHtcbiAgICAgICAgbWVzc2FnZXMgPSBuZXdNZXNzYWdlcygpO1xuICAgICAgfVxuICAgICAgZGVlcE1lcmdlKG1lc3NhZ2VzLCBvcHRpb25zLm1lc3NhZ2VzKTtcbiAgICAgIG9wdGlvbnMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5tZXNzYWdlcyA9IHRoaXMubWVzc2FnZXMoKTtcbiAgICB9XG4gICAgdmFyIGFyciA9IHZvaWQgMDtcbiAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgdmFyIHNlcmllcyA9IHt9O1xuICAgIHZhciBrZXlzID0gb3B0aW9ucy5rZXlzIHx8IE9iamVjdC5rZXlzKHRoaXMucnVsZXMpO1xuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoeikge1xuICAgICAgYXJyID0gX3RoaXMucnVsZXNbel07XG4gICAgICB2YWx1ZSA9IHNvdXJjZVt6XTtcbiAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHZhciBydWxlID0gcjtcbiAgICAgICAgaWYgKHR5cGVvZiBydWxlLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmIChzb3VyY2UgPT09IHNvdXJjZV8pIHtcbiAgICAgICAgICAgIHNvdXJjZSA9IF9leHRlbmRzKHt9LCBzb3VyY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZSA9IHNvdXJjZVt6XSA9IHJ1bGUudHJhbnNmb3JtKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJ1bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBydWxlID0ge1xuICAgICAgICAgICAgdmFsaWRhdG9yOiBydWxlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBydWxlID0gX2V4dGVuZHMoe30sIHJ1bGUpO1xuICAgICAgICB9XG4gICAgICAgIHJ1bGUudmFsaWRhdG9yID0gX3RoaXMuZ2V0VmFsaWRhdGlvbk1ldGhvZChydWxlKTtcbiAgICAgICAgcnVsZS5maWVsZCA9IHo7XG4gICAgICAgIHJ1bGUuZnVsbEZpZWxkID0gcnVsZS5mdWxsRmllbGQgfHwgejtcbiAgICAgICAgcnVsZS50eXBlID0gX3RoaXMuZ2V0VHlwZShydWxlKTtcbiAgICAgICAgaWYgKCFydWxlLnZhbGlkYXRvcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXJpZXNbel0gPSBzZXJpZXNbel0gfHwgW107XG4gICAgICAgIHNlcmllc1t6XS5wdXNoKHtcbiAgICAgICAgICBydWxlOiBydWxlLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICBmaWVsZDogelxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBlcnJvckZpZWxkcyA9IHt9O1xuICAgIGFzeW5jTWFwKHNlcmllcywgb3B0aW9ucywgZnVuY3Rpb24gKGRhdGEsIGRvSXQpIHtcbiAgICAgIHZhciBydWxlID0gZGF0YS5ydWxlO1xuICAgICAgdmFyIGRlZXAgPSAocnVsZS50eXBlID09PSAnb2JqZWN0JyB8fCBydWxlLnR5cGUgPT09ICdhcnJheScpICYmIChfdHlwZW9mKHJ1bGUuZmllbGRzKSA9PT0gJ29iamVjdCcgfHwgX3R5cGVvZihydWxlLmRlZmF1bHRGaWVsZCkgPT09ICdvYmplY3QnKTtcbiAgICAgIGRlZXAgPSBkZWVwICYmIChydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIGRhdGEudmFsdWUpO1xuICAgICAgcnVsZS5maWVsZCA9IGRhdGEuZmllbGQ7XG4gICAgICBmdW5jdGlvbiBhZGRGdWxsZmllbGQoa2V5LCBzY2hlbWEpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzY2hlbWEsIHtcbiAgICAgICAgICBmdWxsRmllbGQ6IHJ1bGUuZnVsbEZpZWxkICsgJy4nICsga2V5XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjYigpIHtcbiAgICAgICAgdmFyIGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuXG4gICAgICAgIHZhciBlcnJvcnMgPSBlO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXJyb3JzKSkge1xuICAgICAgICAgIGVycm9ycyA9IFtlcnJvcnNdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgd2FybmluZygnYXN5bmMtdmFsaWRhdG9yOicsIGVycm9ycyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9ycy5sZW5ndGggJiYgcnVsZS5tZXNzYWdlKSB7XG4gICAgICAgICAgZXJyb3JzID0gW10uY29uY2F0KHJ1bGUubWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlcnJvcnMgPSBlcnJvcnMubWFwKGNvbXBsZW1lbnRFcnJvcihydWxlKSk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZmlyc3QgJiYgZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIGVycm9yRmllbGRzW3J1bGUuZmllbGRdID0gMTtcbiAgICAgICAgICByZXR1cm4gZG9JdChlcnJvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVlcCkge1xuICAgICAgICAgIGRvSXQoZXJyb3JzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiBydWxlIGlzIHJlcXVpcmVkIGJ1dCB0aGUgdGFyZ2V0IG9iamVjdFxuICAgICAgICAgIC8vIGRvZXMgbm90IGV4aXN0IGZhaWwgYXQgdGhlIHJ1bGUgbGV2ZWwgYW5kIGRvbid0XG4gICAgICAgICAgLy8gZ28gZGVlcGVyXG4gICAgICAgICAgaWYgKHJ1bGUucmVxdWlyZWQgJiYgIWRhdGEudmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChydWxlLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgZXJyb3JzID0gW10uY29uY2F0KHJ1bGUubWVzc2FnZSkubWFwKGNvbXBsZW1lbnRFcnJvcihydWxlKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyb3JzID0gW29wdGlvbnMuZXJyb3IocnVsZSwgZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMucmVxdWlyZWQsIHJ1bGUuZmllbGQpKV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnJvcnMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb0l0KGVycm9ycyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGZpZWxkc1NjaGVtYSA9IHt9O1xuICAgICAgICAgIGlmIChydWxlLmRlZmF1bHRGaWVsZCkge1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBkYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhLnZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAgZmllbGRzU2NoZW1hW2tdID0gcnVsZS5kZWZhdWx0RmllbGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZmllbGRzU2NoZW1hID0gX2V4dGVuZHMoe30sIGZpZWxkc1NjaGVtYSwgZGF0YS5ydWxlLmZpZWxkcyk7XG4gICAgICAgICAgZm9yICh2YXIgZiBpbiBmaWVsZHNTY2hlbWEpIHtcbiAgICAgICAgICAgIGlmIChmaWVsZHNTY2hlbWEuaGFzT3duUHJvcGVydHkoZikpIHtcbiAgICAgICAgICAgICAgdmFyIGZpZWxkU2NoZW1hID0gQXJyYXkuaXNBcnJheShmaWVsZHNTY2hlbWFbZl0pID8gZmllbGRzU2NoZW1hW2ZdIDogW2ZpZWxkc1NjaGVtYVtmXV07XG4gICAgICAgICAgICAgIGZpZWxkc1NjaGVtYVtmXSA9IGZpZWxkU2NoZW1hLm1hcChhZGRGdWxsZmllbGQuYmluZChudWxsLCBmKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBzY2hlbWEgPSBuZXcgU2NoZW1hKGZpZWxkc1NjaGVtYSk7XG4gICAgICAgICAgc2NoZW1hLm1lc3NhZ2VzKG9wdGlvbnMubWVzc2FnZXMpO1xuICAgICAgICAgIGlmIChkYXRhLnJ1bGUub3B0aW9ucykge1xuICAgICAgICAgICAgZGF0YS5ydWxlLm9wdGlvbnMubWVzc2FnZXMgPSBvcHRpb25zLm1lc3NhZ2VzO1xuICAgICAgICAgICAgZGF0YS5ydWxlLm9wdGlvbnMuZXJyb3IgPSBvcHRpb25zLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzY2hlbWEudmFsaWRhdGUoZGF0YS52YWx1ZSwgZGF0YS5ydWxlLm9wdGlvbnMgfHwgb3B0aW9ucywgZnVuY3Rpb24gKGVycnMpIHtcbiAgICAgICAgICAgIGRvSXQoZXJycyAmJiBlcnJzLmxlbmd0aCA/IGVycm9ycy5jb25jYXQoZXJycykgOiBlcnJzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgcmVzID0gcnVsZS52YWxpZGF0b3IocnVsZSwgZGF0YS52YWx1ZSwgY2IsIGRhdGEuc291cmNlLCBvcHRpb25zKTtcbiAgICAgIGlmIChyZXMgJiYgcmVzLnRoZW4pIHtcbiAgICAgICAgcmVzLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjYigpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBjYihlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgIGNvbXBsZXRlKHJlc3VsdHMpO1xuICAgIH0pO1xuICB9LFxuICBnZXRUeXBlOiBmdW5jdGlvbiBnZXRUeXBlKHJ1bGUpIHtcbiAgICBpZiAocnVsZS50eXBlID09PSB1bmRlZmluZWQgJiYgcnVsZS5wYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICBydWxlLnR5cGUgPSAncGF0dGVybic7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcnVsZS52YWxpZGF0b3IgIT09ICdmdW5jdGlvbicgJiYgcnVsZS50eXBlICYmICF2YWxpZGF0b3JzLmhhc093blByb3BlcnR5KHJ1bGUudHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihmb3JtYXQoJ1Vua25vd24gcnVsZSB0eXBlICVzJywgcnVsZS50eXBlKSk7XG4gICAgfVxuICAgIHJldHVybiBydWxlLnR5cGUgfHwgJ3N0cmluZyc7XG4gIH0sXG4gIGdldFZhbGlkYXRpb25NZXRob2Q6IGZ1bmN0aW9uIGdldFZhbGlkYXRpb25NZXRob2QocnVsZSkge1xuICAgIGlmICh0eXBlb2YgcnVsZS52YWxpZGF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBydWxlLnZhbGlkYXRvcjtcbiAgICB9XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhydWxlKTtcbiAgICB2YXIgbWVzc2FnZUluZGV4ID0ga2V5cy5pbmRleE9mKCdtZXNzYWdlJyk7XG4gICAgaWYgKG1lc3NhZ2VJbmRleCAhPT0gLTEpIHtcbiAgICAgIGtleXMuc3BsaWNlKG1lc3NhZ2VJbmRleCwgMSk7XG4gICAgfVxuICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMSAmJiBrZXlzWzBdID09PSAncmVxdWlyZWQnKSB7XG4gICAgICByZXR1cm4gdmFsaWRhdG9ycy5yZXF1aXJlZDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkYXRvcnNbdGhpcy5nZXRUeXBlKHJ1bGUpXSB8fCBmYWxzZTtcbiAgfVxufTtcblxuU2NoZW1hLnJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIodHlwZSwgdmFsaWRhdG9yKSB7XG4gIGlmICh0eXBlb2YgdmFsaWRhdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVnaXN0ZXIgYSB2YWxpZGF0b3IgYnkgdHlwZSwgdmFsaWRhdG9yIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgdmFsaWRhdG9yc1t0eXBlXSA9IHZhbGlkYXRvcjtcbn07XG5cblNjaGVtYS5tZXNzYWdlcyA9IGRlZmF1bHRNZXNzYWdlcztcblxuZXhwb3J0IGRlZmF1bHQgU2NoZW1hOyIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgcGF0aCBjcmVhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSwgY3VzdG9taXplcikge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxLFxuICAgICAgbmVzdGVkID0gb2JqZWN0O1xuXG4gIHdoaWxlIChuZXN0ZWQgIT0gbnVsbCAmJiArK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKSxcbiAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmIChpbmRleCAhPSBsYXN0SW5kZXgpIHtcbiAgICAgIHZhciBvYmpWYWx1ZSA9IG5lc3RlZFtrZXldO1xuICAgICAgbmV3VmFsdWUgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihvYmpWYWx1ZSwga2V5LCBuZXN0ZWQpIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBpc09iamVjdChvYmpWYWx1ZSlcbiAgICAgICAgICA/IG9ialZhbHVlXG4gICAgICAgICAgOiAoaXNJbmRleChwYXRoW2luZGV4ICsgMV0pID8gW10gOiB7fSk7XG4gICAgICB9XG4gICAgfVxuICAgIGFzc2lnblZhbHVlKG5lc3RlZCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgbmVzdGVkID0gbmVzdGVkW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0O1xuIiwidmFyIGJhc2VTZXQgPSByZXF1aXJlKCcuL19iYXNlU2V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiBhIHBvcnRpb24gb2YgYHBhdGhgIGRvZXNuJ3QgZXhpc3QsXG4gKiBpdCdzIGNyZWF0ZWQuIEFycmF5cyBhcmUgY3JlYXRlZCBmb3IgbWlzc2luZyBpbmRleCBwcm9wZXJ0aWVzIHdoaWxlIG9iamVjdHNcbiAqIGFyZSBjcmVhdGVkIGZvciBhbGwgb3RoZXIgbWlzc2luZyBwcm9wZXJ0aWVzLiBVc2UgYF8uc2V0V2l0aGAgdG8gY3VzdG9taXplXG4gKiBgcGF0aGAgY3JlYXRpb24uXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uc2V0KG9iamVjdCwgJ2FbMF0uYi5jJywgNCk7XG4gKiBjb25zb2xlLmxvZyhvYmplY3QuYVswXS5iLmMpO1xuICogLy8gPT4gNFxuICpcbiAqIF8uc2V0KG9iamVjdCwgWyd4JywgJzAnLCAneScsICd6J10sIDUpO1xuICogY29uc29sZS5sb2cob2JqZWN0LnhbMF0ueS56KTtcbiAqIC8vID0+IDVcbiAqL1xuZnVuY3Rpb24gc2V0KG9iamVjdCwgcGF0aCwgdmFsdWUpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gb2JqZWN0IDogYmFzZVNldChvYmplY3QsIHBhdGgsIHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbmV4cG9ydHMuaXNGb3JtRmllbGQgPSBpc0Zvcm1GaWVsZDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlRm9ybUZpZWxkO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIEZpZWxkID0gZnVuY3Rpb24gRmllbGQoZmllbGRzKSB7XG4gICgwLCBfY2xhc3NDYWxsQ2hlY2szW1wiZGVmYXVsdFwiXSkodGhpcywgRmllbGQpO1xuXG4gICgwLCBfZXh0ZW5kczNbXCJkZWZhdWx0XCJdKSh0aGlzLCBmaWVsZHMpO1xufTtcblxuZnVuY3Rpb24gaXNGb3JtRmllbGQob2JqKSB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiBGaWVsZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybUZpZWxkKGZpZWxkKSB7XG4gIGlmIChpc0Zvcm1GaWVsZChmaWVsZCkpIHtcbiAgICByZXR1cm4gZmllbGQ7XG4gIH1cbiAgcmV0dXJuIG5ldyBGaWVsZChmaWVsZCk7XG59IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjZcbiAqIHJlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO1xudmFyIGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixjPWI/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsZD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsZT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxmPWI/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGc9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsaD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxrPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsbD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpOjYwMTExLG09Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLG49Yj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIscD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxxPWI/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6XG42MDExNSxyPWI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTY7ZnVuY3Rpb24gdChhKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXt2YXIgdT1hLiQkdHlwZW9mO3N3aXRjaCh1KXtjYXNlIGM6c3dpdGNoKGE9YS50eXBlLGEpe2Nhc2UgbDpjYXNlIG06Y2FzZSBlOmNhc2UgZzpjYXNlIGY6Y2FzZSBwOnJldHVybiBhO2RlZmF1bHQ6c3dpdGNoKGE9YSYmYS4kJHR5cGVvZixhKXtjYXNlIGs6Y2FzZSBuOmNhc2UgaDpyZXR1cm4gYTtkZWZhdWx0OnJldHVybiB1fX1jYXNlIHI6Y2FzZSBxOmNhc2UgZDpyZXR1cm4gdX19fWZ1bmN0aW9uIHYoYSl7cmV0dXJuIHQoYSk9PT1tfWV4cG9ydHMudHlwZU9mPXQ7ZXhwb3J0cy5Bc3luY01vZGU9bDtleHBvcnRzLkNvbmN1cnJlbnRNb2RlPW07ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9aztleHBvcnRzLkNvbnRleHRQcm92aWRlcj1oO2V4cG9ydHMuRWxlbWVudD1jO2V4cG9ydHMuRm9yd2FyZFJlZj1uO1xuZXhwb3J0cy5GcmFnbWVudD1lO2V4cG9ydHMuTGF6eT1yO2V4cG9ydHMuTWVtbz1xO2V4cG9ydHMuUG9ydGFsPWQ7ZXhwb3J0cy5Qcm9maWxlcj1nO2V4cG9ydHMuU3RyaWN0TW9kZT1mO2V4cG9ydHMuU3VzcGVuc2U9cDtleHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZT1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfHxhPT09ZXx8YT09PW18fGE9PT1nfHxhPT09Znx8YT09PXB8fFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09cnx8YS4kJHR5cGVvZj09PXF8fGEuJCR0eXBlb2Y9PT1ofHxhLiQkdHlwZW9mPT09a3x8YS4kJHR5cGVvZj09PW4pfTtleHBvcnRzLmlzQXN5bmNNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB2KGEpfHx0KGEpPT09bH07ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPXY7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWt9O1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWh9O2V4cG9ydHMuaXNFbGVtZW50PWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1jfTtleHBvcnRzLmlzRm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PW59O2V4cG9ydHMuaXNGcmFnbWVudD1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWV9O2V4cG9ydHMuaXNMYXp5PWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cn07ZXhwb3J0cy5pc01lbW89ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1xfTtleHBvcnRzLmlzUG9ydGFsPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09ZH07ZXhwb3J0cy5pc1Byb2ZpbGVyPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09Z307ZXhwb3J0cy5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1mfTtcbmV4cG9ydHMuaXNTdXNwZW5zZT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjZcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHxcbiAgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFKTtcbn1cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgbG93UHJpb3JpdHlXYXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcblxudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG5cbi8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7XG4gICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gICAgbWl4aW5zOiB0cnVlLFxuICAgIHByb3BUeXBlczogdHJ1ZSxcbiAgICB0eXBlOiB0cnVlXG59O1xuXG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgICBuYW1lOiB0cnVlLFxuICAgIGxlbmd0aDogdHJ1ZSxcbiAgICBwcm90b3R5cGU6IHRydWUsXG4gICAgY2FsbGVyOiB0cnVlLFxuICAgIGNhbGxlZTogdHJ1ZSxcbiAgICBhcmd1bWVudHM6IHRydWUsXG4gICAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAgICckJHR5cGVvZic6IHRydWUsXG4gICAgcmVuZGVyOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWVcbn07XG5cbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgICBjb21wYXJlOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW1JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAgIGlmIChSZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gICAgfVxuICAgIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuXG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG5cbiAgICAgICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbmV4cG9ydHMuYXJndW1lbnRDb250YWluZXIgPSBhcmd1bWVudENvbnRhaW5lcjtcbmV4cG9ydHMuaWRlbnRpdHkgPSBpZGVudGl0eTtcbmV4cG9ydHMuZmxhdHRlbkFycmF5ID0gZmxhdHRlbkFycmF5O1xuZXhwb3J0cy50cmVlVHJhdmVyc2UgPSB0cmVlVHJhdmVyc2U7XG5leHBvcnRzLmZsYXR0ZW5GaWVsZHMgPSBmbGF0dGVuRmllbGRzO1xuZXhwb3J0cy5ub3JtYWxpemVWYWxpZGF0ZVJ1bGVzID0gbm9ybWFsaXplVmFsaWRhdGVSdWxlcztcbmV4cG9ydHMuZ2V0VmFsaWRhdGVUcmlnZ2VycyA9IGdldFZhbGlkYXRlVHJpZ2dlcnM7XG5leHBvcnRzLmdldFZhbHVlRnJvbUV2ZW50ID0gZ2V0VmFsdWVGcm9tRXZlbnQ7XG5leHBvcnRzLmdldEVycm9yU3RycyA9IGdldEVycm9yU3RycztcbmV4cG9ydHMuZ2V0UGFyYW1zID0gZ2V0UGFyYW1zO1xuZXhwb3J0cy5pc0VtcHR5T2JqZWN0ID0gaXNFbXB0eU9iamVjdDtcbmV4cG9ydHMuaGFzUnVsZXMgPSBoYXNSdWxlcztcbmV4cG9ydHMuc3RhcnRzV2l0aCA9IHN0YXJ0c1dpdGg7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MgPSByZXF1aXJlKCdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycpO1xuXG52YXIgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hvaXN0Tm9uUmVhY3RTdGF0aWNzKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICByZXR1cm4gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ1dyYXBwZWRDb21wb25lbnQnO1xufVxuXG5mdW5jdGlvbiBhcmd1bWVudENvbnRhaW5lcihDb250YWluZXIsIFdyYXBwZWRDb21wb25lbnQpIHtcbiAgLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAgKi9cbiAgQ29udGFpbmVyLmRpc3BsYXlOYW1lID0gJ0Zvcm0oJyArIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpICsgJyknO1xuICBDb250YWluZXIuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gIHJldHVybiAoMCwgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzMlsnZGVmYXVsdCddKShDb250YWluZXIsIFdyYXBwZWRDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eShvYmopIHtcbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkFycmF5KGFycikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyKTtcbn1cblxuZnVuY3Rpb24gdHJlZVRyYXZlcnNlKCkge1xuICB2YXIgcGF0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gIHZhciB0cmVlID0gYXJndW1lbnRzWzFdO1xuICB2YXIgaXNMZWFmTm9kZSA9IGFyZ3VtZW50c1syXTtcbiAgdmFyIGVycm9yTWVzc2FnZSA9IGFyZ3VtZW50c1szXTtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzWzRdO1xuXG4gIGlmIChpc0xlYWZOb2RlKHBhdGgsIHRyZWUpKSB7XG4gICAgY2FsbGJhY2socGF0aCwgdHJlZSk7XG4gIH0gZWxzZSBpZiAodHJlZSA9PT0gdW5kZWZpbmVkIHx8IHRyZWUgPT09IG51bGwpIHtcbiAgICAvLyBEbyBub3RoaW5nXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0cmVlKSkge1xuICAgIHRyZWUuZm9yRWFjaChmdW5jdGlvbiAoc3ViVHJlZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiB0cmVlVHJhdmVyc2UocGF0aCArICdbJyArIGluZGV4ICsgJ10nLCBzdWJUcmVlLCBpc0xlYWZOb2RlLCBlcnJvck1lc3NhZ2UsIGNhbGxiYWNrKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJdCdzIG9iamVjdCBhbmQgbm90IGEgbGVhZiBub2RlXG4gICAgaWYgKHR5cGVvZiB0cmVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgKDAsIF93YXJuaW5nMlsnZGVmYXVsdCddKShmYWxzZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgT2JqZWN0LmtleXModHJlZSkuZm9yRWFjaChmdW5jdGlvbiAoc3ViVHJlZUtleSkge1xuICAgICAgdmFyIHN1YlRyZWUgPSB0cmVlW3N1YlRyZWVLZXldO1xuICAgICAgdHJlZVRyYXZlcnNlKCcnICsgcGF0aCArIChwYXRoID8gJy4nIDogJycpICsgc3ViVHJlZUtleSwgc3ViVHJlZSwgaXNMZWFmTm9kZSwgZXJyb3JNZXNzYWdlLCBjYWxsYmFjayk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmxhdHRlbkZpZWxkcyhtYXliZU5lc3RlZEZpZWxkcywgaXNMZWFmTm9kZSwgZXJyb3JNZXNzYWdlKSB7XG4gIHZhciBmaWVsZHMgPSB7fTtcbiAgdHJlZVRyYXZlcnNlKHVuZGVmaW5lZCwgbWF5YmVOZXN0ZWRGaWVsZHMsIGlzTGVhZk5vZGUsIGVycm9yTWVzc2FnZSwgZnVuY3Rpb24gKHBhdGgsIG5vZGUpIHtcbiAgICBmaWVsZHNbcGF0aF0gPSBub2RlO1xuICB9KTtcbiAgcmV0dXJuIGZpZWxkcztcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVmFsaWRhdGVSdWxlcyh2YWxpZGF0ZSwgcnVsZXMsIHZhbGlkYXRlVHJpZ2dlcikge1xuICB2YXIgdmFsaWRhdGVSdWxlcyA9IHZhbGlkYXRlLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBuZXdJdGVtID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgaXRlbSwge1xuICAgICAgdHJpZ2dlcjogaXRlbS50cmlnZ2VyIHx8IFtdXG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBuZXdJdGVtLnRyaWdnZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuZXdJdGVtLnRyaWdnZXIgPSBbbmV3SXRlbS50cmlnZ2VyXTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0l0ZW07XG4gIH0pO1xuICBpZiAocnVsZXMpIHtcbiAgICB2YWxpZGF0ZVJ1bGVzLnB1c2goe1xuICAgICAgdHJpZ2dlcjogdmFsaWRhdGVUcmlnZ2VyID8gW10uY29uY2F0KHZhbGlkYXRlVHJpZ2dlcikgOiBbXSxcbiAgICAgIHJ1bGVzOiBydWxlc1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB2YWxpZGF0ZVJ1bGVzO1xufVxuXG5mdW5jdGlvbiBnZXRWYWxpZGF0ZVRyaWdnZXJzKHZhbGlkYXRlUnVsZXMpIHtcbiAgcmV0dXJuIHZhbGlkYXRlUnVsZXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuICEhaXRlbS5ydWxlcyAmJiBpdGVtLnJ1bGVzLmxlbmd0aDtcbiAgfSkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0udHJpZ2dlcjtcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChwcmUsIGN1cnIpIHtcbiAgICByZXR1cm4gcHJlLmNvbmNhdChjdXJyKTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FdmVudChlKSB7XG4gIC8vIFRvIHN1cHBvcnQgY3VzdG9tIGVsZW1lbnRcbiAgaWYgKCFlIHx8ICFlLnRhcmdldCkge1xuICAgIHJldHVybiBlO1xuICB9XG4gIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcblxuICByZXR1cm4gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyB0YXJnZXQuY2hlY2tlZCA6IHRhcmdldC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0RXJyb3JTdHJzKGVycm9ycykge1xuICBpZiAoZXJyb3JzKSB7XG4gICAgcmV0dXJuIGVycm9ycy5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlICYmIGUubWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gZS5tZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGU7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGVycm9ycztcbn1cblxuZnVuY3Rpb24gZ2V0UGFyYW1zKG5zLCBvcHQsIGNiKSB7XG4gIHZhciBuYW1lcyA9IG5zO1xuICB2YXIgb3B0aW9ucyA9IG9wdDtcbiAgdmFyIGNhbGxiYWNrID0gY2I7XG4gIGlmIChjYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBuYW1lcztcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIG5hbWVzID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShuYW1lcykpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0gbmFtZXMgfHwge307XG4gICAgICBuYW1lcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lczogbmFtZXMsXG4gICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eU9iamVjdChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBoYXNSdWxlcyh2YWxpZGF0ZSkge1xuICBpZiAodmFsaWRhdGUpIHtcbiAgICByZXR1cm4gdmFsaWRhdGUuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0ucnVsZXMgJiYgaXRlbS5ydWxlcy5sZW5ndGg7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzdGFydHNXaXRoKHN0ciwgcHJlZml4KSB7XG4gIHJldHVybiBzdHIubGFzdEluZGV4T2YocHJlZml4LCAwKSA9PT0gMDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkyKTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVGaWVsZHNTdG9yZTtcblxudmFyIF9zZXQgPSByZXF1aXJlKCdsb2Rhc2gvc2V0Jyk7XG5cbnZhciBfc2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldCk7XG5cbnZhciBfY3JlYXRlRm9ybUZpZWxkID0gcmVxdWlyZSgnLi9jcmVhdGVGb3JtRmllbGQnKTtcblxudmFyIF9jcmVhdGVGb3JtRmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRm9ybUZpZWxkKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwYXJ0T2YoYSwgYikge1xuICByZXR1cm4gYi5pbmRleE9mKGEpID09PSAwICYmIFsnLicsICdbJ10uaW5kZXhPZihiW2EubGVuZ3RoXSkgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5hbEZsYXR0ZW5GaWVsZHMoZmllbGRzKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmZsYXR0ZW5GaWVsZHMpKGZpZWxkcywgZnVuY3Rpb24gKF8sIG5vZGUpIHtcbiAgICByZXR1cm4gKDAsIF9jcmVhdGVGb3JtRmllbGQuaXNGb3JtRmllbGQpKG5vZGUpO1xuICB9LCAnWW91IG11c3Qgd3JhcCBmaWVsZCBkYXRhIHdpdGggYGNyZWF0ZUZvcm1GaWVsZGAuJyk7XG59XG5cbnZhciBGaWVsZHNTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRmllbGRzU3RvcmUoZmllbGRzKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazNbJ2RlZmF1bHQnXSkodGhpcywgRmllbGRzU3RvcmUpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5maWVsZHMgPSBpbnRlcm5hbEZsYXR0ZW5GaWVsZHMoZmllbGRzKTtcbiAgICB0aGlzLmZpZWxkc01ldGEgPSB7fTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzWydkZWZhdWx0J10pKEZpZWxkc1N0b3JlLCBbe1xuICAgIGtleTogJ3VwZGF0ZUZpZWxkcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUZpZWxkcyhmaWVsZHMpIHtcbiAgICAgIHRoaXMuZmllbGRzID0gaW50ZXJuYWxGbGF0dGVuRmllbGRzKGZpZWxkcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZmxhdHRlblJlZ2lzdGVyZWRGaWVsZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmbGF0dGVuUmVnaXN0ZXJlZEZpZWxkcyhmaWVsZHMpIHtcbiAgICAgIHZhciB2YWxpZEZpZWxkc05hbWUgPSB0aGlzLmdldEFsbEZpZWxkc05hbWUoKTtcbiAgICAgIHJldHVybiAoMCwgX3V0aWxzLmZsYXR0ZW5GaWVsZHMpKGZpZWxkcywgZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkRmllbGRzTmFtZS5pbmRleE9mKHBhdGgpID49IDA7XG4gICAgICB9LCAnWW91IGNhbm5vdCBzZXQgYSBmb3JtIGZpZWxkIGJlZm9yZSByZW5kZXJpbmcgYSBmaWVsZCBhc3NvY2lhdGVkIHdpdGggdGhlIHZhbHVlLicpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldEZpZWxkcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZpZWxkcyhmaWVsZHMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBmaWVsZHNNZXRhID0gdGhpcy5maWVsZHNNZXRhO1xuICAgICAgdmFyIG5vd0ZpZWxkcyA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIHRoaXMuZmllbGRzLCBmaWVsZHMpO1xuICAgICAgdmFyIG5vd1ZhbHVlcyA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoZmllbGRzTWV0YSkuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgICBub3dWYWx1ZXNbZl0gPSBfdGhpcy5nZXRWYWx1ZUZyb21GaWVsZHMoZiwgbm93RmllbGRzKTtcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmtleXMobm93VmFsdWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IG5vd1ZhbHVlc1tmXTtcbiAgICAgICAgdmFyIGZpZWxkTWV0YSA9IF90aGlzLmdldEZpZWxkTWV0YShmKTtcbiAgICAgICAgaWYgKGZpZWxkTWV0YSAmJiBmaWVsZE1ldGEubm9ybWFsaXplKSB7XG4gICAgICAgICAgdmFyIG5vd1ZhbHVlID0gZmllbGRNZXRhLm5vcm1hbGl6ZSh2YWx1ZSwgX3RoaXMuZ2V0VmFsdWVGcm9tRmllbGRzKGYsIF90aGlzLmZpZWxkcyksIG5vd1ZhbHVlcyk7XG4gICAgICAgICAgaWYgKG5vd1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbm93RmllbGRzW2ZdID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgbm93RmllbGRzW2ZdLCB7XG4gICAgICAgICAgICAgIHZhbHVlOiBub3dWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmllbGRzID0gbm93RmllbGRzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Jlc2V0RmllbGRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXRGaWVsZHMobnMpIHtcbiAgICAgIHZhciBmaWVsZHMgPSB0aGlzLmZpZWxkcztcblxuICAgICAgdmFyIG5hbWVzID0gbnMgPyB0aGlzLmdldFZhbGlkRmllbGRzRnVsbE5hbWUobnMpIDogdGhpcy5nZXRBbGxGaWVsZHNOYW1lKCk7XG4gICAgICByZXR1cm4gbmFtZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgdmFyIGZpZWxkID0gZmllbGRzW25hbWVdO1xuICAgICAgICBpZiAoZmllbGQgJiYgJ3ZhbHVlJyBpbiBmaWVsZCkge1xuICAgICAgICAgIGFjY1tuYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0RmllbGRNZXRhJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RmllbGRNZXRhKG5hbWUsIG1ldGEpIHtcbiAgICAgIHRoaXMuZmllbGRzTWV0YVtuYW1lXSA9IG1ldGE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0RmllbGRzQXNEaXJ0eScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZpZWxkc0FzRGlydHkoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXModGhpcy5maWVsZHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIGZpZWxkID0gX3RoaXMyLmZpZWxkc1tuYW1lXTtcbiAgICAgICAgdmFyIGZpZWxkTWV0YSA9IF90aGlzMi5maWVsZHNNZXRhW25hbWVdO1xuICAgICAgICBpZiAoZmllbGQgJiYgZmllbGRNZXRhICYmICgwLCBfdXRpbHMuaGFzUnVsZXMpKGZpZWxkTWV0YS52YWxpZGF0ZSkpIHtcbiAgICAgICAgICBfdGhpczIuZmllbGRzW25hbWVdID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgZmllbGQsIHtcbiAgICAgICAgICAgIGRpcnR5OiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEZpZWxkTWV0YScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZpZWxkTWV0YShuYW1lKSB7XG4gICAgICB0aGlzLmZpZWxkc01ldGFbbmFtZV0gPSB0aGlzLmZpZWxkc01ldGFbbmFtZV0gfHwge307XG4gICAgICByZXR1cm4gdGhpcy5maWVsZHNNZXRhW25hbWVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlRnJvbUZpZWxkcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlRnJvbUZpZWxkcyhuYW1lLCBmaWVsZHMpIHtcbiAgICAgIHZhciBmaWVsZCA9IGZpZWxkc1tuYW1lXTtcbiAgICAgIGlmIChmaWVsZCAmJiAndmFsdWUnIGluIGZpZWxkKSB7XG4gICAgICAgIHJldHVybiBmaWVsZC52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHZhciBmaWVsZE1ldGEgPSB0aGlzLmdldEZpZWxkTWV0YShuYW1lKTtcbiAgICAgIHJldHVybiBmaWVsZE1ldGEgJiYgZmllbGRNZXRhLmluaXRpYWxWYWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWxpZEZpZWxkc05hbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWxpZEZpZWxkc05hbWUoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGZpZWxkc01ldGEgPSB0aGlzLmZpZWxkc01ldGE7XG5cbiAgICAgIHJldHVybiBmaWVsZHNNZXRhID8gT2JqZWN0LmtleXMoZmllbGRzTWV0YSkuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAhX3RoaXMzLmdldEZpZWxkTWV0YShuYW1lKS5oaWRkZW47XG4gICAgICB9KSA6IFtdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEFsbEZpZWxkc05hbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGxGaWVsZHNOYW1lKCkge1xuICAgICAgdmFyIGZpZWxkc01ldGEgPSB0aGlzLmZpZWxkc01ldGE7XG5cbiAgICAgIHJldHVybiBmaWVsZHNNZXRhID8gT2JqZWN0LmtleXMoZmllbGRzTWV0YSkgOiBbXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWxpZEZpZWxkc0Z1bGxOYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsaWRGaWVsZHNGdWxsTmFtZShtYXliZVBhcnRpYWxOYW1lKSB7XG4gICAgICB2YXIgbWF5YmVQYXJ0aWFsTmFtZXMgPSBBcnJheS5pc0FycmF5KG1heWJlUGFydGlhbE5hbWUpID8gbWF5YmVQYXJ0aWFsTmFtZSA6IFttYXliZVBhcnRpYWxOYW1lXTtcbiAgICAgIHJldHVybiB0aGlzLmdldFZhbGlkRmllbGRzTmFtZSgpLmZpbHRlcihmdW5jdGlvbiAoZnVsbE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG1heWJlUGFydGlhbE5hbWVzLnNvbWUoZnVuY3Rpb24gKHBhcnRpYWxOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bGxOYW1lID09PSBwYXJ0aWFsTmFtZSB8fCAoMCwgX3V0aWxzLnN0YXJ0c1dpdGgpKGZ1bGxOYW1lLCBwYXJ0aWFsTmFtZSkgJiYgWycuJywgJ1snXS5pbmRleE9mKGZ1bGxOYW1lW3BhcnRpYWxOYW1lLmxlbmd0aF0pID49IDA7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RmllbGRWYWx1ZVByb3BWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZpZWxkVmFsdWVQcm9wVmFsdWUoZmllbGRNZXRhKSB7XG4gICAgICB2YXIgbmFtZSA9IGZpZWxkTWV0YS5uYW1lLFxuICAgICAgICAgIGdldFZhbHVlUHJvcHMgPSBmaWVsZE1ldGEuZ2V0VmFsdWVQcm9wcyxcbiAgICAgICAgICB2YWx1ZVByb3BOYW1lID0gZmllbGRNZXRhLnZhbHVlUHJvcE5hbWU7XG5cbiAgICAgIHZhciBmaWVsZCA9IHRoaXMuZ2V0RmllbGQobmFtZSk7XG4gICAgICB2YXIgZmllbGRWYWx1ZSA9ICd2YWx1ZScgaW4gZmllbGQgPyBmaWVsZC52YWx1ZSA6IGZpZWxkTWV0YS5pbml0aWFsVmFsdWU7XG4gICAgICBpZiAoZ2V0VmFsdWVQcm9wcykge1xuICAgICAgICByZXR1cm4gZ2V0VmFsdWVQcm9wcyhmaWVsZFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKSh7fSwgdmFsdWVQcm9wTmFtZSwgZmllbGRWYWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RmllbGQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWVsZChuYW1lKSB7XG4gICAgICByZXR1cm4gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgdGhpcy5maWVsZHNbbmFtZV0sIHtcbiAgICAgICAgbmFtZTogbmFtZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Tm90Q29sbGVjdGVkRmllbGRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Tm90Q29sbGVjdGVkRmllbGRzKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBmaWVsZHNOYW1lID0gdGhpcy5nZXRWYWxpZEZpZWxkc05hbWUoKTtcbiAgICAgIHJldHVybiBmaWVsZHNOYW1lLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gIV90aGlzNC5maWVsZHNbbmFtZV07XG4gICAgICB9KS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogX3RoaXM0LmdldEZpZWxkTWV0YShuYW1lKS5pbml0aWFsVmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmaWVsZCkge1xuICAgICAgICByZXR1cm4gKDAsIF9zZXQyWydkZWZhdWx0J10pKGFjYywgZmllbGQubmFtZSwgKDAsIF9jcmVhdGVGb3JtRmllbGQyWydkZWZhdWx0J10pKGZpZWxkKSk7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TmVzdGVkQWxsRmllbGRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TmVzdGVkQWxsRmllbGRzKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmZpZWxkcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfc2V0MlsnZGVmYXVsdCddKShhY2MsIG5hbWUsICgwLCBfY3JlYXRlRm9ybUZpZWxkMlsnZGVmYXVsdCddKShfdGhpczUuZmllbGRzW25hbWVdKSk7XG4gICAgICB9LCB0aGlzLmdldE5vdENvbGxlY3RlZEZpZWxkcygpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRGaWVsZE1lbWJlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZpZWxkTWVtYmVyKG5hbWUsIG1lbWJlcikge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RmllbGQobmFtZSlbbWVtYmVyXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXROZXN0ZWRGaWVsZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXROZXN0ZWRGaWVsZHMobmFtZXMsIGdldHRlcikge1xuICAgICAgdmFyIGZpZWxkcyA9IG5hbWVzIHx8IHRoaXMuZ2V0VmFsaWRGaWVsZHNOYW1lKCk7XG4gICAgICByZXR1cm4gZmllbGRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3NldDJbJ2RlZmF1bHQnXSkoYWNjLCBmLCBnZXR0ZXIoZikpO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE5lc3RlZEZpZWxkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TmVzdGVkRmllbGQobmFtZSwgZ2V0dGVyKSB7XG4gICAgICB2YXIgZnVsbE5hbWVzID0gdGhpcy5nZXRWYWxpZEZpZWxkc0Z1bGxOYW1lKG5hbWUpO1xuICAgICAgaWYgKGZ1bGxOYW1lcy5sZW5ndGggPT09IDAgfHwgLy8gTm90IHJlZ2lzdGVyZWRcbiAgICAgIGZ1bGxOYW1lcy5sZW5ndGggPT09IDEgJiYgZnVsbE5hbWVzWzBdID09PSBuYW1lIC8vIE5hbWUgYWxyZWFkeSBpcyBmdWxsIG5hbWUuXG4gICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0dGVyKG5hbWUpO1xuICAgICAgICB9XG4gICAgICB2YXIgaXNBcnJheVZhbHVlID0gZnVsbE5hbWVzWzBdW25hbWUubGVuZ3RoXSA9PT0gJ1snO1xuICAgICAgdmFyIHN1ZmZpeE5hbWVTdGFydEluZGV4ID0gaXNBcnJheVZhbHVlID8gbmFtZS5sZW5ndGggOiBuYW1lLmxlbmd0aCArIDE7XG4gICAgICByZXR1cm4gZnVsbE5hbWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmdWxsTmFtZSkge1xuICAgICAgICByZXR1cm4gKDAsIF9zZXQyWydkZWZhdWx0J10pKGFjYywgZnVsbE5hbWUuc2xpY2Uoc3VmZml4TmFtZVN0YXJ0SW5kZXgpLCBnZXR0ZXIoZnVsbE5hbWUpKTtcbiAgICAgIH0sIGlzQXJyYXlWYWx1ZSA/IFtdIDoge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzVmFsaWROZXN0ZWRGaWVsZE5hbWUnLFxuXG5cbiAgICAvLyBAcHJpdmF0ZVxuICAgIC8vIEJHOiBgYWAgYW5kIGBhLmJgIGNhbm5vdCBiZSB1c2UgaW4gdGhlIHNhbWUgZm9ybVxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1ZhbGlkTmVzdGVkRmllbGROYW1lKG5hbWUpIHtcbiAgICAgIHZhciBuYW1lcyA9IHRoaXMuZ2V0QWxsRmllbGRzTmFtZSgpO1xuICAgICAgcmV0dXJuIG5hbWVzLmV2ZXJ5KGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiAhcGFydE9mKG4sIG5hbWUpICYmICFwYXJ0T2YobmFtZSwgbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbGVhckZpZWxkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJGaWVsZChuYW1lKSB7XG4gICAgICBkZWxldGUgdGhpcy5maWVsZHNbbmFtZV07XG4gICAgICBkZWxldGUgdGhpcy5maWVsZHNNZXRhW25hbWVdO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRmllbGRzU3RvcmU7XG59KCk7XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgdGhpcy5zZXRGaWVsZHNJbml0aWFsVmFsdWUgPSBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlcykge1xuICAgIHZhciBmbGF0dGVuZWRJbml0aWFsVmFsdWVzID0gX3RoaXM2LmZsYXR0ZW5SZWdpc3RlcmVkRmllbGRzKGluaXRpYWxWYWx1ZXMpO1xuICAgIHZhciBmaWVsZHNNZXRhID0gX3RoaXM2LmZpZWxkc01ldGE7XG4gICAgT2JqZWN0LmtleXMoZmxhdHRlbmVkSW5pdGlhbFZhbHVlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKGZpZWxkc01ldGFbbmFtZV0pIHtcbiAgICAgICAgX3RoaXM2LnNldEZpZWxkTWV0YShuYW1lLCAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBfdGhpczYuZ2V0RmllbGRNZXRhKG5hbWUpLCB7XG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiBmbGF0dGVuZWRJbml0aWFsVmFsdWVzW25hbWVdXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmdldEFsbFZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmllbGRzTWV0YSA9IF90aGlzNi5maWVsZHNNZXRhLFxuICAgICAgICBmaWVsZHMgPSBfdGhpczYuZmllbGRzO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpZWxkc01ldGEpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICByZXR1cm4gKDAsIF9zZXQyWydkZWZhdWx0J10pKGFjYywgbmFtZSwgX3RoaXM2LmdldFZhbHVlRnJvbUZpZWxkcyhuYW1lLCBmaWVsZHMpKTtcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgdGhpcy5nZXRGaWVsZHNWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lcykge1xuICAgIHJldHVybiBfdGhpczYuZ2V0TmVzdGVkRmllbGRzKG5hbWVzLCBfdGhpczYuZ2V0RmllbGRWYWx1ZSk7XG4gIH07XG5cbiAgdGhpcy5nZXRGaWVsZFZhbHVlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZmllbGRzID0gX3RoaXM2LmZpZWxkcztcblxuICAgIHJldHVybiBfdGhpczYuZ2V0TmVzdGVkRmllbGQobmFtZSwgZnVuY3Rpb24gKGZ1bGxOYW1lKSB7XG4gICAgICByZXR1cm4gX3RoaXM2LmdldFZhbHVlRnJvbUZpZWxkcyhmdWxsTmFtZSwgZmllbGRzKTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkc0Vycm9yID0gZnVuY3Rpb24gKG5hbWVzKSB7XG4gICAgcmV0dXJuIF90aGlzNi5nZXROZXN0ZWRGaWVsZHMobmFtZXMsIF90aGlzNi5nZXRGaWVsZEVycm9yKTtcbiAgfTtcblxuICB0aGlzLmdldEZpZWxkRXJyb3IgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBfdGhpczYuZ2V0TmVzdGVkRmllbGQobmFtZSwgZnVuY3Rpb24gKGZ1bGxOYW1lKSB7XG4gICAgICByZXR1cm4gKDAsIF91dGlscy5nZXRFcnJvclN0cnMpKF90aGlzNi5nZXRGaWVsZE1lbWJlcihmdWxsTmFtZSwgJ2Vycm9ycycpKTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmlzRmllbGRWYWxpZGF0aW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gX3RoaXM2LmdldEZpZWxkTWVtYmVyKG5hbWUsICd2YWxpZGF0aW5nJyk7XG4gIH07XG5cbiAgdGhpcy5pc0ZpZWxkc1ZhbGlkYXRpbmcgPSBmdW5jdGlvbiAobnMpIHtcbiAgICB2YXIgbmFtZXMgPSBucyB8fCBfdGhpczYuZ2V0VmFsaWRGaWVsZHNOYW1lKCk7XG4gICAgcmV0dXJuIG5hbWVzLnNvbWUoZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiBfdGhpczYuaXNGaWVsZFZhbGlkYXRpbmcobik7XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5pc0ZpZWxkVG91Y2hlZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIF90aGlzNi5nZXRGaWVsZE1lbWJlcihuYW1lLCAndG91Y2hlZCcpO1xuICB9O1xuXG4gIHRoaXMuaXNGaWVsZHNUb3VjaGVkID0gZnVuY3Rpb24gKG5zKSB7XG4gICAgdmFyIG5hbWVzID0gbnMgfHwgX3RoaXM2LmdldFZhbGlkRmllbGRzTmFtZSgpO1xuICAgIHJldHVybiBuYW1lcy5zb21lKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gX3RoaXM2LmlzRmllbGRUb3VjaGVkKG4pO1xuICAgIH0pO1xuICB9O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRmllbGRzU3RvcmUoZmllbGRzKSB7XG4gIHJldHVybiBuZXcgRmllbGRzU3RvcmUoZmllbGRzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfZXh0ZW5kczUgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHM2ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczUpO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheScpO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvQ29uc3VtYWJsZUFycmF5Mik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jcmVhdGVSZWFjdENsYXNzID0gcmVxdWlyZSgnY3JlYXRlLXJlYWN0LWNsYXNzJyk7XG5cbnZhciBfY3JlYXRlUmVhY3RDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZWFjdENsYXNzKTtcblxudmFyIF9hc3luY1ZhbGlkYXRvciA9IHJlcXVpcmUoJ2FzeW5jLXZhbGlkYXRvcicpO1xuXG52YXIgX2FzeW5jVmFsaWRhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FzeW5jVmFsaWRhdG9yKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfZ2V0ID0gcmVxdWlyZSgnbG9kYXNoL2dldCcpO1xuXG52YXIgX2dldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXQpO1xuXG52YXIgX3NldCA9IHJlcXVpcmUoJ2xvZGFzaC9zZXQnKTtcblxudmFyIF9zZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0KTtcblxudmFyIF9lcSA9IHJlcXVpcmUoJ2xvZGFzaC9lcScpO1xuXG52YXIgX2VxMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VxKTtcblxudmFyIF9jcmVhdGVGaWVsZHNTdG9yZSA9IHJlcXVpcmUoJy4vY3JlYXRlRmllbGRzU3RvcmUnKTtcblxudmFyIF9jcmVhdGVGaWVsZHNTdG9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVGaWVsZHNTdG9yZSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIERFRkFVTFRfVFJJR0dFUiA9ICdvbkNoYW5nZSc7IC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3ByZWZlci1lczYtY2xhc3MgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnMgKi9cblxuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcm0oKSB7XG4gIHZhciBvcHRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgbWl4aW5zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTtcbiAgdmFyIHZhbGlkYXRlTWVzc2FnZXMgPSBvcHRpb24udmFsaWRhdGVNZXNzYWdlcyxcbiAgICAgIG9uRmllbGRzQ2hhbmdlID0gb3B0aW9uLm9uRmllbGRzQ2hhbmdlLFxuICAgICAgb25WYWx1ZXNDaGFuZ2UgPSBvcHRpb24ub25WYWx1ZXNDaGFuZ2UsXG4gICAgICBfb3B0aW9uJG1hcFByb3BzID0gb3B0aW9uLm1hcFByb3BzLFxuICAgICAgbWFwUHJvcHMgPSBfb3B0aW9uJG1hcFByb3BzID09PSB1bmRlZmluZWQgPyBfdXRpbHMuaWRlbnRpdHkgOiBfb3B0aW9uJG1hcFByb3BzLFxuICAgICAgbWFwUHJvcHNUb0ZpZWxkcyA9IG9wdGlvbi5tYXBQcm9wc1RvRmllbGRzLFxuICAgICAgZmllbGROYW1lUHJvcCA9IG9wdGlvbi5maWVsZE5hbWVQcm9wLFxuICAgICAgZmllbGRNZXRhUHJvcCA9IG9wdGlvbi5maWVsZE1ldGFQcm9wLFxuICAgICAgZmllbGREYXRhUHJvcCA9IG9wdGlvbi5maWVsZERhdGFQcm9wLFxuICAgICAgX29wdGlvbiRmb3JtUHJvcE5hbWUgPSBvcHRpb24uZm9ybVByb3BOYW1lLFxuICAgICAgZm9ybVByb3BOYW1lID0gX29wdGlvbiRmb3JtUHJvcE5hbWUgPT09IHVuZGVmaW5lZCA/ICdmb3JtJyA6IF9vcHRpb24kZm9ybVByb3BOYW1lLFxuICAgICAgZm9ybU5hbWUgPSBvcHRpb24ubmFtZSxcbiAgICAgIHdpdGhSZWYgPSBvcHRpb24ud2l0aFJlZjtcblxuXG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0ZShXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgdmFyIEZvcm0gPSAoMCwgX2NyZWF0ZVJlYWN0Q2xhc3MyWydkZWZhdWx0J10pKHtcbiAgICAgIGRpc3BsYXlOYW1lOiAnRm9ybScsXG5cbiAgICAgIG1peGluczogbWl4aW5zLFxuXG4gICAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB2YXIgZmllbGRzID0gbWFwUHJvcHNUb0ZpZWxkcyAmJiBtYXBQcm9wc1RvRmllbGRzKHRoaXMucHJvcHMpO1xuICAgICAgICB0aGlzLmZpZWxkc1N0b3JlID0gKDAsIF9jcmVhdGVGaWVsZHNTdG9yZTJbJ2RlZmF1bHQnXSkoZmllbGRzIHx8IHt9KTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IHt9O1xuICAgICAgICB0aGlzLmNhY2hlZEJpbmQgPSB7fTtcbiAgICAgICAgdGhpcy5jbGVhcmVkRmllbGRNZXRhQ2FjaGUgPSB7fTtcblxuICAgICAgICB0aGlzLnJlbmRlckZpZWxkcyA9IHt9O1xuICAgICAgICB0aGlzLmRvbUZpZWxkcyA9IHt9O1xuXG4gICAgICAgIC8vIEhBQ0s6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzY0MDZcbiAgICAgICAgWydnZXRGaWVsZHNWYWx1ZScsICdnZXRGaWVsZFZhbHVlJywgJ3NldEZpZWxkc0luaXRpYWxWYWx1ZScsICdnZXRGaWVsZHNFcnJvcicsICdnZXRGaWVsZEVycm9yJywgJ2lzRmllbGRWYWxpZGF0aW5nJywgJ2lzRmllbGRzVmFsaWRhdGluZycsICdpc0ZpZWxkc1RvdWNoZWQnLCAnaXNGaWVsZFRvdWNoZWQnXS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBfdGhpc1trZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9maWVsZHNTdG9yZTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgKDAsIF93YXJuaW5nMlsnZGVmYXVsdCddKShmYWxzZSwgJ3lvdSBzaG91bGQgbm90IHVzZSBgcmVmYCBvbiBlbmhhbmNlZCBmb3JtLCBwbGVhc2UgdXNlIGB3cmFwcGVkQ29tcG9uZW50UmVmYC4gJyArICdTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvZm9ybSNub3RlLXVzZS13cmFwcGVkY29tcG9uZW50cmVmLWluc3RlYWQtb2Ytd2l0aHJlZi1hZnRlci1yYy1mb3JtMTQwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKF9maWVsZHNTdG9yZSA9IF90aGlzLmZpZWxkc1N0b3JlKVtrZXldLmFwcGx5KF9maWVsZHNTdG9yZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBVc2VsZXNzRmllbGRzKCk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG1hcFByb3BzVG9GaWVsZHMpIHtcbiAgICAgICAgICB0aGlzLmZpZWxkc1N0b3JlLnVwZGF0ZUZpZWxkcyhtYXBQcm9wc1RvRmllbGRzKG5leHRQcm9wcykpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcFVzZWxlc3NGaWVsZHMoKTtcbiAgICAgIH0sXG4gICAgICBvbkNvbGxlY3RDb21tb246IGZ1bmN0aW9uIG9uQ29sbGVjdENvbW1vbihuYW1lLCBhY3Rpb24sIGFyZ3MpIHtcbiAgICAgICAgdmFyIGZpZWxkTWV0YSA9IHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICAgICAgICBpZiAoZmllbGRNZXRhW2FjdGlvbl0pIHtcbiAgICAgICAgICBmaWVsZE1ldGFbYWN0aW9uXS5hcHBseShmaWVsZE1ldGEsICgwLCBfdG9Db25zdW1hYmxlQXJyYXkzWydkZWZhdWx0J10pKGFyZ3MpKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZE1ldGEub3JpZ2luYWxQcm9wcyAmJiBmaWVsZE1ldGEub3JpZ2luYWxQcm9wc1thY3Rpb25dKSB7XG4gICAgICAgICAgdmFyIF9maWVsZE1ldGEkb3JpZ2luYWxQcjtcblxuICAgICAgICAgIChfZmllbGRNZXRhJG9yaWdpbmFsUHIgPSBmaWVsZE1ldGEub3JpZ2luYWxQcm9wcylbYWN0aW9uXS5hcHBseShfZmllbGRNZXRhJG9yaWdpbmFsUHIsICgwLCBfdG9Db25zdW1hYmxlQXJyYXkzWydkZWZhdWx0J10pKGFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBmaWVsZE1ldGEuZ2V0VmFsdWVGcm9tRXZlbnQgPyBmaWVsZE1ldGEuZ2V0VmFsdWVGcm9tRXZlbnQuYXBwbHkoZmllbGRNZXRhLCAoMCwgX3RvQ29uc3VtYWJsZUFycmF5M1snZGVmYXVsdCddKShhcmdzKSkgOiBfdXRpbHMuZ2V0VmFsdWVGcm9tRXZlbnQuYXBwbHkodW5kZWZpbmVkLCAoMCwgX3RvQ29uc3VtYWJsZUFycmF5M1snZGVmYXVsdCddKShhcmdzKSk7XG4gICAgICAgIGlmIChvblZhbHVlc0NoYW5nZSAmJiB2YWx1ZSAhPT0gdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZFZhbHVlKG5hbWUpKSB7XG4gICAgICAgICAgdmFyIHZhbHVlc0FsbCA9IHRoaXMuZmllbGRzU3RvcmUuZ2V0QWxsVmFsdWVzKCk7XG4gICAgICAgICAgdmFyIHZhbHVlc0FsbFNldCA9IHt9O1xuICAgICAgICAgIHZhbHVlc0FsbFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlc0FsbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9zZXQyWydkZWZhdWx0J10pKHZhbHVlc0FsbFNldCwga2V5LCB2YWx1ZXNBbGxba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgb25WYWx1ZXNDaGFuZ2UoKDAsIF9leHRlbmRzNlsnZGVmYXVsdCddKSgoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKSh7fSwgZm9ybVByb3BOYW1lLCB0aGlzLmdldEZvcm0oKSksIHRoaXMucHJvcHMpLCAoMCwgX3NldDJbJ2RlZmF1bHQnXSkoe30sIG5hbWUsIHZhbHVlKSwgdmFsdWVzQWxsU2V0KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmllbGQgPSB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkKG5hbWUpO1xuICAgICAgICByZXR1cm4geyBuYW1lOiBuYW1lLCBmaWVsZDogKDAsIF9leHRlbmRzNlsnZGVmYXVsdCddKSh7fSwgZmllbGQsIHsgdmFsdWU6IHZhbHVlLCB0b3VjaGVkOiB0cnVlIH0pLCBmaWVsZE1ldGE6IGZpZWxkTWV0YSB9O1xuICAgICAgfSxcbiAgICAgIG9uQ29sbGVjdDogZnVuY3Rpb24gb25Db2xsZWN0KG5hbWVfLCBhY3Rpb24pIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX29uQ29sbGVjdENvbW1vbiA9IHRoaXMub25Db2xsZWN0Q29tbW9uKG5hbWVfLCBhY3Rpb24sIGFyZ3MpLFxuICAgICAgICAgICAgbmFtZSA9IF9vbkNvbGxlY3RDb21tb24ubmFtZSxcbiAgICAgICAgICAgIGZpZWxkID0gX29uQ29sbGVjdENvbW1vbi5maWVsZCxcbiAgICAgICAgICAgIGZpZWxkTWV0YSA9IF9vbkNvbGxlY3RDb21tb24uZmllbGRNZXRhO1xuXG4gICAgICAgIHZhciB2YWxpZGF0ZSA9IGZpZWxkTWV0YS52YWxpZGF0ZTtcblxuXG4gICAgICAgIHRoaXMuZmllbGRzU3RvcmUuc2V0RmllbGRzQXNEaXJ0eSgpO1xuXG4gICAgICAgIHZhciBuZXdGaWVsZCA9ICgwLCBfZXh0ZW5kczZbJ2RlZmF1bHQnXSkoe30sIGZpZWxkLCB7XG4gICAgICAgICAgZGlydHk6ICgwLCBfdXRpbHMuaGFzUnVsZXMpKHZhbGlkYXRlKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRGaWVsZHMoKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoe30sIG5hbWUsIG5ld0ZpZWxkKSk7XG4gICAgICB9LFxuICAgICAgb25Db2xsZWN0VmFsaWRhdGU6IGZ1bmN0aW9uIG9uQ29sbGVjdFZhbGlkYXRlKG5hbWVfLCBhY3Rpb24pIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX29uQ29sbGVjdENvbW1vbjIgPSB0aGlzLm9uQ29sbGVjdENvbW1vbihuYW1lXywgYWN0aW9uLCBhcmdzKSxcbiAgICAgICAgICAgIGZpZWxkID0gX29uQ29sbGVjdENvbW1vbjIuZmllbGQsXG4gICAgICAgICAgICBmaWVsZE1ldGEgPSBfb25Db2xsZWN0Q29tbW9uMi5maWVsZE1ldGE7XG5cbiAgICAgICAgdmFyIG5ld0ZpZWxkID0gKDAsIF9leHRlbmRzNlsnZGVmYXVsdCddKSh7fSwgZmllbGQsIHtcbiAgICAgICAgICBkaXJ0eTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZpZWxkc1N0b3JlLnNldEZpZWxkc0FzRGlydHkoKTtcblxuICAgICAgICB0aGlzLnZhbGlkYXRlRmllbGRzSW50ZXJuYWwoW25ld0ZpZWxkXSwge1xuICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGZpcnN0RmllbGRzOiAhIWZpZWxkTWV0YS52YWxpZGF0ZUZpcnN0XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBnZXRDYWNoZUJpbmQ6IGZ1bmN0aW9uIGdldENhY2hlQmluZChuYW1lLCBhY3Rpb24sIGZuKSB7XG4gICAgICAgIGlmICghdGhpcy5jYWNoZWRCaW5kW25hbWVdKSB7XG4gICAgICAgICAgdGhpcy5jYWNoZWRCaW5kW25hbWVdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZWRCaW5kW25hbWVdO1xuICAgICAgICBpZiAoIWNhY2hlW2FjdGlvbl0gfHwgY2FjaGVbYWN0aW9uXS5vcmlGbiAhPT0gZm4pIHtcbiAgICAgICAgICBjYWNoZVthY3Rpb25dID0ge1xuICAgICAgICAgICAgZm46IGZuLmJpbmQodGhpcywgbmFtZSwgYWN0aW9uKSxcbiAgICAgICAgICAgIG9yaUZuOiBmblxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhY2hlW2FjdGlvbl0uZm47XG4gICAgICB9LFxuICAgICAgZ2V0RmllbGREZWNvcmF0b3I6IGZ1bmN0aW9uIGdldEZpZWxkRGVjb3JhdG9yKG5hbWUsIGZpZWxkT3B0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMuZ2V0RmllbGRQcm9wcyhuYW1lLCBmaWVsZE9wdGlvbik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZmllbGRFbGVtKSB7XG4gICAgICAgICAgLy8gV2Ugc2hvdWxkIHB1dCBmaWVsZCBpbiByZWNvcmQgaWYgaXQgaXMgcmVuZGVyZWRcbiAgICAgICAgICBfdGhpczIucmVuZGVyRmllbGRzW25hbWVdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBmaWVsZE1ldGEgPSBfdGhpczIuZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICAgICAgICAgIHZhciBvcmlnaW5hbFByb3BzID0gZmllbGRFbGVtLnByb3BzO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVQcm9wTmFtZSA9IGZpZWxkTWV0YS52YWx1ZVByb3BOYW1lO1xuICAgICAgICAgICAgKDAsIF93YXJuaW5nMlsnZGVmYXVsdCddKSghKHZhbHVlUHJvcE5hbWUgaW4gb3JpZ2luYWxQcm9wcyksICdgZ2V0RmllbGREZWNvcmF0b3JgIHdpbGwgb3ZlcnJpZGUgYCcgKyB2YWx1ZVByb3BOYW1lICsgJ2AsICcgKyAoJ3NvIHBsZWFzZSBkb25cXCd0IHNldCBgJyArIHZhbHVlUHJvcE5hbWUgKyAnYCBkaXJlY3RseSAnKSArICdhbmQgdXNlIGBzZXRGaWVsZHNWYWx1ZWAgdG8gc2V0IGl0LicpO1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZVByb3BOYW1lID0gJ2RlZmF1bHQnICsgdmFsdWVQcm9wTmFtZVswXS50b1VwcGVyQ2FzZSgpICsgdmFsdWVQcm9wTmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoIShkZWZhdWx0VmFsdWVQcm9wTmFtZSBpbiBvcmlnaW5hbFByb3BzKSwgJ2AnICsgZGVmYXVsdFZhbHVlUHJvcE5hbWUgKyAnYCBpcyBpbnZhbGlkICcgKyAoJ2ZvciBgZ2V0RmllbGREZWNvcmF0b3JgIHdpbGwgc2V0IGAnICsgdmFsdWVQcm9wTmFtZSArICdgLCcpICsgJyBwbGVhc2UgdXNlIGBvcHRpb24uaW5pdGlhbFZhbHVlYCBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWVsZE1ldGEub3JpZ2luYWxQcm9wcyA9IG9yaWdpbmFsUHJvcHM7XG4gICAgICAgICAgZmllbGRNZXRhLnJlZiA9IGZpZWxkRWxlbS5yZWY7XG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jbG9uZUVsZW1lbnQoZmllbGRFbGVtLCAoMCwgX2V4dGVuZHM2WydkZWZhdWx0J10pKHt9LCBwcm9wcywgX3RoaXMyLmZpZWxkc1N0b3JlLmdldEZpZWxkVmFsdWVQcm9wVmFsdWUoZmllbGRNZXRhKSkpO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGdldEZpZWxkUHJvcHM6IGZ1bmN0aW9uIGdldEZpZWxkUHJvcHMobmFtZSkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgdXNlcnNGaWVsZE9wdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGNhbGwgYGdldEZpZWxkUHJvcHNgIHdpdGggdmFsaWQgbmFtZSBzdHJpbmchJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKHRoaXMuZmllbGRzU3RvcmUuaXNWYWxpZE5lc3RlZEZpZWxkTmFtZShuYW1lKSwgJ09uZSBmaWVsZCBuYW1lIGNhbm5vdCBiZSBwYXJ0IG9mIGFub3RoZXIsIGUuZy4gYGFgIGFuZCBgYS5iYC4gQ2hlY2sgZmllbGQ6ICcgKyBuYW1lKTtcbiAgICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKCEoJ2V4Y2x1c2l2ZScgaW4gdXNlcnNGaWVsZE9wdGlvbiksICdgb3B0aW9uLmV4Y2x1c2l2ZWAgb2YgYGdldEZpZWxkUHJvcHNgfGBnZXRGaWVsZERlY29yYXRvcmAgaGFkIGJlZW4gcmVtb3ZlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuY2xlYXJlZEZpZWxkTWV0YUNhY2hlW25hbWVdO1xuXG4gICAgICAgIHZhciBmaWVsZE9wdGlvbiA9ICgwLCBfZXh0ZW5kczZbJ2RlZmF1bHQnXSkoe1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHJpZ2dlcjogREVGQVVMVF9UUklHR0VSLFxuICAgICAgICAgIHZhbHVlUHJvcE5hbWU6ICd2YWx1ZScsXG4gICAgICAgICAgdmFsaWRhdGU6IFtdXG4gICAgICAgIH0sIHVzZXJzRmllbGRPcHRpb24pO1xuXG4gICAgICAgIHZhciBydWxlcyA9IGZpZWxkT3B0aW9uLnJ1bGVzLFxuICAgICAgICAgICAgdHJpZ2dlciA9IGZpZWxkT3B0aW9uLnRyaWdnZXIsXG4gICAgICAgICAgICBfZmllbGRPcHRpb24kdmFsaWRhdGUgPSBmaWVsZE9wdGlvbi52YWxpZGF0ZVRyaWdnZXIsXG4gICAgICAgICAgICB2YWxpZGF0ZVRyaWdnZXIgPSBfZmllbGRPcHRpb24kdmFsaWRhdGUgPT09IHVuZGVmaW5lZCA/IHRyaWdnZXIgOiBfZmllbGRPcHRpb24kdmFsaWRhdGUsXG4gICAgICAgICAgICB2YWxpZGF0ZSA9IGZpZWxkT3B0aW9uLnZhbGlkYXRlO1xuXG5cbiAgICAgICAgdmFyIGZpZWxkTWV0YSA9IHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICAgICAgICBpZiAoJ2luaXRpYWxWYWx1ZScgaW4gZmllbGRPcHRpb24pIHtcbiAgICAgICAgICBmaWVsZE1ldGEuaW5pdGlhbFZhbHVlID0gZmllbGRPcHRpb24uaW5pdGlhbFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlucHV0UHJvcHMgPSAoMCwgX2V4dGVuZHM2WydkZWZhdWx0J10pKHt9LCB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkVmFsdWVQcm9wVmFsdWUoZmllbGRPcHRpb24pLCB7XG4gICAgICAgICAgcmVmOiB0aGlzLmdldENhY2hlQmluZChuYW1lLCBuYW1lICsgJ19fcmVmJywgdGhpcy5zYXZlUmVmKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGZpZWxkTmFtZVByb3ApIHtcbiAgICAgICAgICBpbnB1dFByb3BzW2ZpZWxkTmFtZVByb3BdID0gZm9ybU5hbWUgPyBmb3JtTmFtZSArICdfJyArIG5hbWUgOiBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbGlkYXRlUnVsZXMgPSAoMCwgX3V0aWxzLm5vcm1hbGl6ZVZhbGlkYXRlUnVsZXMpKHZhbGlkYXRlLCBydWxlcywgdmFsaWRhdGVUcmlnZ2VyKTtcbiAgICAgICAgdmFyIHZhbGlkYXRlVHJpZ2dlcnMgPSAoMCwgX3V0aWxzLmdldFZhbGlkYXRlVHJpZ2dlcnMpKHZhbGlkYXRlUnVsZXMpO1xuICAgICAgICB2YWxpZGF0ZVRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgIGlmIChpbnB1dFByb3BzW2FjdGlvbl0pIHJldHVybjtcbiAgICAgICAgICBpbnB1dFByb3BzW2FjdGlvbl0gPSBfdGhpczMuZ2V0Q2FjaGVCaW5kKG5hbWUsIGFjdGlvbiwgX3RoaXMzLm9uQ29sbGVjdFZhbGlkYXRlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIHdpbGwgYmUgY29sbGVjdFxuICAgICAgICBpZiAodHJpZ2dlciAmJiB2YWxpZGF0ZVRyaWdnZXJzLmluZGV4T2YodHJpZ2dlcikgPT09IC0xKSB7XG4gICAgICAgICAgaW5wdXRQcm9wc1t0cmlnZ2VyXSA9IHRoaXMuZ2V0Q2FjaGVCaW5kKG5hbWUsIHRyaWdnZXIsIHRoaXMub25Db2xsZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtZXRhID0gKDAsIF9leHRlbmRzNlsnZGVmYXVsdCddKSh7fSwgZmllbGRNZXRhLCBmaWVsZE9wdGlvbiwge1xuICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZVJ1bGVzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpZWxkc1N0b3JlLnNldEZpZWxkTWV0YShuYW1lLCBtZXRhKTtcbiAgICAgICAgaWYgKGZpZWxkTWV0YVByb3ApIHtcbiAgICAgICAgICBpbnB1dFByb3BzW2ZpZWxkTWV0YVByb3BdID0gbWV0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWVsZERhdGFQcm9wKSB7XG4gICAgICAgICAgaW5wdXRQcm9wc1tmaWVsZERhdGFQcm9wXSA9IHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGQobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIGZpZWxkIGlzIHJlbmRlcmVkLCByZWNvcmQgaXRcbiAgICAgICAgdGhpcy5yZW5kZXJGaWVsZHNbbmFtZV0gPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBpbnB1dFByb3BzO1xuICAgICAgfSxcbiAgICAgIGdldEZpZWxkSW5zdGFuY2U6IGZ1bmN0aW9uIGdldEZpZWxkSW5zdGFuY2UobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbbmFtZV07XG4gICAgICB9LFxuICAgICAgZ2V0UnVsZXM6IGZ1bmN0aW9uIGdldFJ1bGVzKGZpZWxkTWV0YSwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBhY3Rpb25SdWxlcyA9IGZpZWxkTWV0YS52YWxpZGF0ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gIWFjdGlvbiB8fCBpdGVtLnRyaWdnZXIuaW5kZXhPZihhY3Rpb24pID49IDA7XG4gICAgICAgIH0pLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtLnJ1bGVzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuZmxhdHRlbkFycmF5KShhY3Rpb25SdWxlcyk7XG4gICAgICB9LFxuICAgICAgc2V0RmllbGRzOiBmdW5jdGlvbiBzZXRGaWVsZHMobWF5YmVOZXN0ZWRGaWVsZHMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgIHZhciBmaWVsZHMgPSB0aGlzLmZpZWxkc1N0b3JlLmZsYXR0ZW5SZWdpc3RlcmVkRmllbGRzKG1heWJlTmVzdGVkRmllbGRzKTtcbiAgICAgICAgdGhpcy5maWVsZHNTdG9yZS5zZXRGaWVsZHMoZmllbGRzKTtcbiAgICAgICAgaWYgKG9uRmllbGRzQ2hhbmdlKSB7XG4gICAgICAgICAgdmFyIGNoYW5nZWRGaWVsZHMgPSBPYmplY3Qua2V5cyhmaWVsZHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9zZXQyWydkZWZhdWx0J10pKGFjYywgbmFtZSwgX3RoaXM0LmZpZWxkc1N0b3JlLmdldEZpZWxkKG5hbWUpKTtcbiAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgb25GaWVsZHNDaGFuZ2UoKDAsIF9leHRlbmRzNlsnZGVmYXVsdCddKSgoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKSh7fSwgZm9ybVByb3BOYW1lLCB0aGlzLmdldEZvcm0oKSksIHRoaXMucHJvcHMpLCBjaGFuZ2VkRmllbGRzLCB0aGlzLmZpZWxkc1N0b3JlLmdldE5lc3RlZEFsbEZpZWxkcygpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKGNhbGxiYWNrKTtcbiAgICAgIH0sXG4gICAgICBzZXRGaWVsZHNWYWx1ZTogZnVuY3Rpb24gc2V0RmllbGRzVmFsdWUoY2hhbmdlZFZhbHVlcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGZpZWxkc01ldGEgPSB0aGlzLmZpZWxkc1N0b3JlLmZpZWxkc01ldGE7XG5cbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMuZmllbGRzU3RvcmUuZmxhdHRlblJlZ2lzdGVyZWRGaWVsZHMoY2hhbmdlZFZhbHVlcyk7XG4gICAgICAgIHZhciBuZXdGaWVsZHMgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICAgICAgdmFyIGlzUmVnaXN0ZXJlZCA9IGZpZWxkc01ldGFbbmFtZV07XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoaXNSZWdpc3RlcmVkLCAnQ2Fubm90IHVzZSBgc2V0RmllbGRzVmFsdWVgIHVudGlsICcgKyAneW91IHVzZSBgZ2V0RmllbGREZWNvcmF0b3JgIG9yIGBnZXRGaWVsZFByb3BzYCB0byByZWdpc3RlciBpdC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzUmVnaXN0ZXJlZCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW25hbWVdO1xuICAgICAgICAgICAgYWNjW25hbWVdID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgdGhpcy5zZXRGaWVsZHMobmV3RmllbGRzLCBjYWxsYmFjayk7XG4gICAgICAgIGlmIChvblZhbHVlc0NoYW5nZSkge1xuICAgICAgICAgIHZhciBhbGxWYWx1ZXMgPSB0aGlzLmZpZWxkc1N0b3JlLmdldEFsbFZhbHVlcygpO1xuICAgICAgICAgIG9uVmFsdWVzQ2hhbmdlKCgwLCBfZXh0ZW5kczZbJ2RlZmF1bHQnXSkoKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoe30sIGZvcm1Qcm9wTmFtZSwgdGhpcy5nZXRGb3JtKCkpLCB0aGlzLnByb3BzKSwgY2hhbmdlZFZhbHVlcywgYWxsVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNhdmVSZWY6IGZ1bmN0aW9uIHNhdmVSZWYobmFtZSwgXywgY29tcG9uZW50KSB7XG4gICAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgICAgdmFyIF9maWVsZE1ldGEgPSB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkTWV0YShuYW1lKTtcbiAgICAgICAgICBpZiAoIV9maWVsZE1ldGEucHJlc2VydmUpIHtcbiAgICAgICAgICAgIC8vIGFmdGVyIGRlc3Ryb3ksIGRlbGV0ZSBkYXRhXG4gICAgICAgICAgICB0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZVtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgZmllbGQ6IHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGQobmFtZSksXG4gICAgICAgICAgICAgIG1ldGE6IF9maWVsZE1ldGFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNsZWFyRmllbGQobmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSB0aGlzLmRvbUZpZWxkc1tuYW1lXTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb21GaWVsZHNbbmFtZV0gPSB0cnVlO1xuICAgICAgICB0aGlzLnJlY292ZXJDbGVhcmVkRmllbGQobmFtZSk7XG4gICAgICAgIHZhciBmaWVsZE1ldGEgPSB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkTWV0YShuYW1lKTtcbiAgICAgICAgaWYgKGZpZWxkTWV0YSkge1xuICAgICAgICAgIHZhciByZWYgPSBmaWVsZE1ldGEucmVmO1xuICAgICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVmID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbiBub3Qgc2V0IHJlZiBzdHJpbmcgZm9yICcgKyBuYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICByZWYoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlZiwgJ2N1cnJlbnQnKSkge1xuICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnN0YW5jZXNbbmFtZV0gPSBjb21wb25lbnQ7XG4gICAgICB9LFxuICAgICAgY2xlYW5VcFVzZWxlc3NGaWVsZHM6IGZ1bmN0aW9uIGNsZWFuVXBVc2VsZXNzRmllbGRzKCkge1xuICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICB2YXIgZmllbGRMaXN0ID0gdGhpcy5maWVsZHNTdG9yZS5nZXRBbGxGaWVsZHNOYW1lKCk7XG4gICAgICAgIHZhciByZW1vdmVkTGlzdCA9IGZpZWxkTGlzdC5maWx0ZXIoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgdmFyIGZpZWxkTWV0YSA9IF90aGlzNS5maWVsZHNTdG9yZS5nZXRGaWVsZE1ldGEoZmllbGQpO1xuICAgICAgICAgIHJldHVybiAhX3RoaXM1LnJlbmRlckZpZWxkc1tmaWVsZF0gJiYgIV90aGlzNS5kb21GaWVsZHNbZmllbGRdICYmICFmaWVsZE1ldGEucHJlc2VydmU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVtb3ZlZExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgcmVtb3ZlZExpc3QuZm9yRWFjaCh0aGlzLmNsZWFyRmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyRmllbGRzID0ge307XG4gICAgICB9LFxuICAgICAgY2xlYXJGaWVsZDogZnVuY3Rpb24gY2xlYXJGaWVsZChuYW1lKSB7XG4gICAgICAgIHRoaXMuZmllbGRzU3RvcmUuY2xlYXJGaWVsZChuYW1lKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaW5zdGFuY2VzW25hbWVdO1xuICAgICAgICBkZWxldGUgdGhpcy5jYWNoZWRCaW5kW25hbWVdO1xuICAgICAgfSxcbiAgICAgIHJlc2V0RmllbGRzOiBmdW5jdGlvbiByZXNldEZpZWxkcyhucykge1xuICAgICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgICB2YXIgbmV3RmllbGRzID0gdGhpcy5maWVsZHNTdG9yZS5yZXNldEZpZWxkcyhucyk7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhuZXdGaWVsZHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLnNldEZpZWxkcyhuZXdGaWVsZHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChucykge1xuICAgICAgICAgIHZhciBuYW1lcyA9IEFycmF5LmlzQXJyYXkobnMpID8gbnMgOiBbbnNdO1xuICAgICAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWxldGUgX3RoaXM2LmNsZWFyZWRGaWVsZE1ldGFDYWNoZVtuYW1lXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVjb3ZlckNsZWFyZWRGaWVsZDogZnVuY3Rpb24gcmVjb3ZlckNsZWFyZWRGaWVsZChuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZVtuYW1lXSkge1xuICAgICAgICAgIHRoaXMuZmllbGRzU3RvcmUuc2V0RmllbGRzKCgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKHt9LCBuYW1lLCB0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZVtuYW1lXS5maWVsZCkpO1xuICAgICAgICAgIHRoaXMuZmllbGRzU3RvcmUuc2V0RmllbGRNZXRhKG5hbWUsIHRoaXMuY2xlYXJlZEZpZWxkTWV0YUNhY2hlW25hbWVdLm1ldGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHZhbGlkYXRlRmllbGRzSW50ZXJuYWw6IGZ1bmN0aW9uIHZhbGlkYXRlRmllbGRzSW50ZXJuYWwoZmllbGRzLCBfcmVmLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgICB2YXIgZmllbGROYW1lcyA9IF9yZWYuZmllbGROYW1lcyxcbiAgICAgICAgICAgIGFjdGlvbiA9IF9yZWYuYWN0aW9uLFxuICAgICAgICAgICAgX3JlZiRvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYkb3B0aW9ucyA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmJG9wdGlvbnM7XG5cbiAgICAgICAgdmFyIGFsbFJ1bGVzID0ge307XG4gICAgICAgIHZhciBhbGxWYWx1ZXMgPSB7fTtcbiAgICAgICAgdmFyIGFsbEZpZWxkcyA9IHt9O1xuICAgICAgICB2YXIgYWxyZWFkeUVycm9ycyA9IHt9O1xuICAgICAgICBmaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICB2YXIgbmFtZSA9IGZpZWxkLm5hbWU7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuZm9yY2UgIT09IHRydWUgJiYgZmllbGQuZGlydHkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoZmllbGQuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICgwLCBfc2V0MlsnZGVmYXVsdCddKShhbHJlYWR5RXJyb3JzLCBuYW1lLCB7IGVycm9yczogZmllbGQuZXJyb3JzIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZmllbGRNZXRhID0gX3RoaXM3LmZpZWxkc1N0b3JlLmdldEZpZWxkTWV0YShuYW1lKTtcbiAgICAgICAgICB2YXIgbmV3RmllbGQgPSAoMCwgX2V4dGVuZHM2WydkZWZhdWx0J10pKHt9LCBmaWVsZCk7XG4gICAgICAgICAgbmV3RmllbGQuZXJyb3JzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5ld0ZpZWxkLnZhbGlkYXRpbmcgPSB0cnVlO1xuICAgICAgICAgIG5ld0ZpZWxkLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICBhbGxSdWxlc1tuYW1lXSA9IF90aGlzNy5nZXRSdWxlcyhmaWVsZE1ldGEsIGFjdGlvbik7XG4gICAgICAgICAgYWxsVmFsdWVzW25hbWVdID0gbmV3RmllbGQudmFsdWU7XG4gICAgICAgICAgYWxsRmllbGRzW25hbWVdID0gbmV3RmllbGQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldEZpZWxkcyhhbGxGaWVsZHMpO1xuICAgICAgICAvLyBpbiBjYXNlIG5vcm1hbGl6ZVxuICAgICAgICBPYmplY3Qua2V5cyhhbGxWYWx1ZXMpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICBhbGxWYWx1ZXNbZl0gPSBfdGhpczcuZmllbGRzU3RvcmUuZ2V0RmllbGRWYWx1ZShmKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjYWxsYmFjayAmJiAoMCwgX3V0aWxzLmlzRW1wdHlPYmplY3QpKGFsbEZpZWxkcykpIHtcbiAgICAgICAgICBjYWxsYmFjaygoMCwgX3V0aWxzLmlzRW1wdHlPYmplY3QpKGFscmVhZHlFcnJvcnMpID8gbnVsbCA6IGFscmVhZHlFcnJvcnMsIHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRzVmFsdWUoZmllbGROYW1lcykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsaWRhdG9yID0gbmV3IF9hc3luY1ZhbGlkYXRvcjJbJ2RlZmF1bHQnXShhbGxSdWxlcyk7XG4gICAgICAgIGlmICh2YWxpZGF0ZU1lc3NhZ2VzKSB7XG4gICAgICAgICAgdmFsaWRhdG9yLm1lc3NhZ2VzKHZhbGlkYXRlTWVzc2FnZXMpO1xuICAgICAgICB9XG4gICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZShhbGxWYWx1ZXMsIG9wdGlvbnMsIGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICAgICB2YXIgZXJyb3JzR3JvdXAgPSAoMCwgX2V4dGVuZHM2WydkZWZhdWx0J10pKHt9LCBhbHJlYWR5RXJyb3JzKTtcbiAgICAgICAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHZhciBlcnJvckZpZWxkTmFtZSA9IGUuZmllbGQ7XG4gICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBlcnJvckZpZWxkTmFtZTtcblxuICAgICAgICAgICAgICAvLyBIYW5kbGUgdXNpbmcgYXJyYXkgdmFsaWRhdGlvbiBydWxlLlxuICAgICAgICAgICAgICAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE0Mjc1XG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKGFsbFJ1bGVzKS5zb21lKGZ1bmN0aW9uIChydWxlRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJ1bGVzID0gYWxsUnVsZXNbcnVsZUZpZWxkTmFtZV0gfHwgW107XG5cbiAgICAgICAgICAgICAgICAvLyBFeGlzdCBpZiBtYXRjaCBydWxlXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGVGaWVsZE5hbWUgPT09IGVycm9yRmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSBydWxlRmllbGROYW1lO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU2tpcCBpZiBub3QgbWF0Y2ggYXJyYXkgdHlwZVxuICAgICAgICAgICAgICAgIGlmIChydWxlcy5ldmVyeShmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB0eXBlID0gX3JlZjIudHlwZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlICE9PSAnYXJyYXknO1xuICAgICAgICAgICAgICAgIH0pICYmIGVycm9yRmllbGROYW1lLmluZGV4T2YocnVsZUZpZWxkTmFtZSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBFeGlzdCBpZiBtYXRjaCB0aGUgZmllbGQgbmFtZVxuICAgICAgICAgICAgICAgIHZhciByZXN0UGF0aCA9IGVycm9yRmllbGROYW1lLnNsaWNlKHJ1bGVGaWVsZE5hbWUubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICAgICAgaWYgKC9cXGQrLy50ZXN0KHJlc3RQYXRoKSkge1xuICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gcnVsZUZpZWxkTmFtZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgdmFyIGZpZWxkID0gKDAsIF9nZXQyWydkZWZhdWx0J10pKGVycm9yc0dyb3VwLCBmaWVsZE5hbWUpO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgICAgICAgICgwLCBfc2V0MlsnZGVmYXVsdCddKShlcnJvcnNHcm91cCwgZmllbGROYW1lLCB7IGVycm9yczogW10gfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGZpZWxkRXJyb3JzID0gKDAsIF9nZXQyWydkZWZhdWx0J10pKGVycm9yc0dyb3VwLCBmaWVsZE5hbWUuY29uY2F0KCcuZXJyb3JzJykpO1xuICAgICAgICAgICAgICBmaWVsZEVycm9ycy5wdXNoKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBleHBpcmVkID0gW107XG4gICAgICAgICAgdmFyIG5vd0FsbEZpZWxkcyA9IHt9O1xuICAgICAgICAgIE9iamVjdC5rZXlzKGFsbFJ1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRFcnJvcnMgPSAoMCwgX2dldDJbJ2RlZmF1bHQnXSkoZXJyb3JzR3JvdXAsIG5hbWUpO1xuICAgICAgICAgICAgdmFyIG5vd0ZpZWxkID0gX3RoaXM3LmZpZWxkc1N0b3JlLmdldEZpZWxkKG5hbWUpO1xuICAgICAgICAgICAgLy8gYXZvaWQgY29uY3VycmVuY3kgcHJvYmxlbXNcbiAgICAgICAgICAgIGlmICghKDAsIF9lcTJbJ2RlZmF1bHQnXSkobm93RmllbGQudmFsdWUsIGFsbFZhbHVlc1tuYW1lXSkpIHtcbiAgICAgICAgICAgICAgZXhwaXJlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbm93RmllbGQuZXJyb3JzID0gZmllbGRFcnJvcnMgJiYgZmllbGRFcnJvcnMuZXJyb3JzO1xuICAgICAgICAgICAgICBub3dGaWVsZC52YWx1ZSA9IGFsbFZhbHVlc1tuYW1lXTtcbiAgICAgICAgICAgICAgbm93RmllbGQudmFsaWRhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICBub3dGaWVsZC5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICBub3dBbGxGaWVsZHNbbmFtZV0gPSBub3dGaWVsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpczcuc2V0RmllbGRzKG5vd0FsbEZpZWxkcyk7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoZXhwaXJlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZXhwaXJlZC5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZTtcblxuICAgICAgICAgICAgICAgIHZhciBmaWVsZEVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBuYW1lICsgJyBuZWVkIHRvIHJldmFsaWRhdGUnLFxuICAgICAgICAgICAgICAgICAgZmllbGQ6IG5hbWVcbiAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAoMCwgX3NldDJbJ2RlZmF1bHQnXSkoZXJyb3JzR3JvdXAsIG5hbWUsIHtcbiAgICAgICAgICAgICAgICAgIGV4cGlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBlcnJvcnM6IGZpZWxkRXJyb3JzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjaygoMCwgX3V0aWxzLmlzRW1wdHlPYmplY3QpKGVycm9yc0dyb3VwKSA/IG51bGwgOiBlcnJvcnNHcm91cCwgX3RoaXM3LmZpZWxkc1N0b3JlLmdldEZpZWxkc1ZhbHVlKGZpZWxkTmFtZXMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHZhbGlkYXRlRmllbGRzOiBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkcyhucywgb3B0LCBjYikge1xuICAgICAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgICAgICB2YXIgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB2YXIgX2dldFBhcmFtcyA9ICgwLCBfdXRpbHMuZ2V0UGFyYW1zKShucywgb3B0LCBjYiksXG4gICAgICAgICAgICAgIG5hbWVzID0gX2dldFBhcmFtcy5uYW1lcyxcbiAgICAgICAgICAgICAgb3B0aW9ucyA9IF9nZXRQYXJhbXMub3B0aW9ucztcblxuICAgICAgICAgIHZhciBfZ2V0UGFyYW1zMiA9ICgwLCBfdXRpbHMuZ2V0UGFyYW1zKShucywgb3B0LCBjYiksXG4gICAgICAgICAgICAgIGNhbGxiYWNrID0gX2dldFBhcmFtczIuY2FsbGJhY2s7XG5cbiAgICAgICAgICBpZiAoIWNhbGxiYWNrIHx8IHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIG9sZENiID0gY2FsbGJhY2s7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKGVycm9ycywgdmFsdWVzKSB7XG4gICAgICAgICAgICAgIGlmIChvbGRDYikge1xuICAgICAgICAgICAgICAgIG9sZENiKGVycm9ycywgdmFsdWVzKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoeyBlcnJvcnM6IGVycm9ycywgdmFsdWVzOiB2YWx1ZXMgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZmllbGROYW1lcyA9IG5hbWVzID8gX3RoaXM4LmZpZWxkc1N0b3JlLmdldFZhbGlkRmllbGRzRnVsbE5hbWUobmFtZXMpIDogX3RoaXM4LmZpZWxkc1N0b3JlLmdldFZhbGlkRmllbGRzTmFtZSgpO1xuICAgICAgICAgIHZhciBmaWVsZHMgPSBmaWVsZE5hbWVzLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIGZpZWxkTWV0YSA9IF90aGlzOC5maWVsZHNTdG9yZS5nZXRGaWVsZE1ldGEobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF91dGlscy5oYXNSdWxlcykoZmllbGRNZXRhLnZhbGlkYXRlKTtcbiAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IF90aGlzOC5maWVsZHNTdG9yZS5nZXRGaWVsZChuYW1lKTtcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlID0gX3RoaXM4LmZpZWxkc1N0b3JlLmdldEZpZWxkVmFsdWUobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCFmaWVsZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBfdGhpczguZmllbGRzU3RvcmUuZ2V0RmllbGRzVmFsdWUoZmllbGROYW1lcykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoISgnZmlyc3RGaWVsZHMnIGluIG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zLmZpcnN0RmllbGRzID0gZmllbGROYW1lcy5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgdmFyIGZpZWxkTWV0YSA9IF90aGlzOC5maWVsZHNTdG9yZS5nZXRGaWVsZE1ldGEobmFtZSk7XG4gICAgICAgICAgICAgIHJldHVybiAhIWZpZWxkTWV0YS52YWxpZGF0ZUZpcnN0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIF90aGlzOC52YWxpZGF0ZUZpZWxkc0ludGVybmFsKGZpZWxkcywge1xuICAgICAgICAgICAgZmllbGROYW1lczogZmllbGROYW1lcyxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICBwZW5kaW5nWydjYXRjaCddKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGNvbnNvbGUuZXJyb3IgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGVuZGluZztcbiAgICAgIH0sXG4gICAgICBpc1N1Ym1pdHRpbmc6IGZ1bmN0aW9uIGlzU3VibWl0dGluZygpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoZmFsc2UsICdgaXNTdWJtaXR0aW5nYCBpcyBkZXByZWNhdGVkLiAnICsgJ0FjdHVhbGx5LCBpdFxcJ3MgbW9yZSBjb252ZW5pZW50IHRvIGhhbmRsZSBzdWJtaXR0aW5nIHN0YXR1cyBieSB5b3Vyc2VsZi4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zdWJtaXR0aW5nO1xuICAgICAgfSxcbiAgICAgIHN1Ym1pdDogZnVuY3Rpb24gc3VibWl0KGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKGZhbHNlLCAnYHN1Ym1pdGAgaXMgZGVwcmVjYXRlZC4gJyArICdBY3R1YWxseSwgaXRcXCdzIG1vcmUgY29udmVuaWVudCB0byBoYW5kbGUgc3VibWl0dGluZyBzdGF0dXMgYnkgeW91cnNlbGYuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZuID0gZnVuY3Rpb24gZm4oKSB7XG4gICAgICAgICAgX3RoaXM5LnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN1Ym1pdHRpbmc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGNhbGxiYWNrKGZuKTtcbiAgICAgIH0sXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB3cmFwcGVkQ29tcG9uZW50UmVmID0gX3Byb3BzLndyYXBwZWRDb21wb25lbnRSZWYsXG4gICAgICAgICAgICByZXN0UHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzM1snZGVmYXVsdCddKShfcHJvcHMsIFsnd3JhcHBlZENvbXBvbmVudFJlZiddKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgICAgIHZhciBmb3JtUHJvcHMgPSAoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKSh7fSwgZm9ybVByb3BOYW1lLCB0aGlzLmdldEZvcm0oKSk7XG4gICAgICAgIGlmICh3aXRoUmVmKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgICAgICAgKDAsIF93YXJuaW5nMlsnZGVmYXVsdCddKShmYWxzZSwgJ2B3aXRoUmVmYCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB3cmFwcGVkQ29tcG9uZW50UmVmYCBpbnN0ZWFkLiAnICsgJ1NlZTogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9mb3JtI25vdGUtdXNlLXdyYXBwZWRjb21wb25lbnRyZWYtaW5zdGVhZC1vZi13aXRocmVmLWFmdGVyLXJjLWZvcm0xNDAnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybVByb3BzLnJlZiA9ICd3cmFwcGVkQ29tcG9uZW50JztcbiAgICAgICAgfSBlbHNlIGlmICh3cmFwcGVkQ29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgZm9ybVByb3BzLnJlZiA9IHdyYXBwZWRDb21wb25lbnRSZWY7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3BzID0gbWFwUHJvcHMuY2FsbCh0aGlzLCAoMCwgX2V4dGVuZHM2WydkZWZhdWx0J10pKHt9LCBmb3JtUHJvcHMsIHJlc3RQcm9wcykpO1xuICAgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgcHJvcHMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgwLCBfdXRpbHMuYXJndW1lbnRDb250YWluZXIpKEZvcm0sIFdyYXBwZWRDb21wb25lbnQpO1xuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVCYXNlRm9ybTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWl4aW4gPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQmFzZUZvcm0gPSByZXF1aXJlKCcuL2NyZWF0ZUJhc2VGb3JtJyk7XG5cbnZhciBfY3JlYXRlQmFzZUZvcm0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQmFzZUZvcm0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBtaXhpbiA9IGV4cG9ydHMubWl4aW4gPSB7XG4gIGdldEZvcm06IGZ1bmN0aW9uIGdldEZvcm0oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldEZpZWxkc1ZhbHVlOiB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkc1ZhbHVlLFxuICAgICAgZ2V0RmllbGRWYWx1ZTogdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZFZhbHVlLFxuICAgICAgZ2V0RmllbGRJbnN0YW5jZTogdGhpcy5nZXRGaWVsZEluc3RhbmNlLFxuICAgICAgc2V0RmllbGRzVmFsdWU6IHRoaXMuc2V0RmllbGRzVmFsdWUsXG4gICAgICBzZXRGaWVsZHM6IHRoaXMuc2V0RmllbGRzLFxuICAgICAgc2V0RmllbGRzSW5pdGlhbFZhbHVlOiB0aGlzLmZpZWxkc1N0b3JlLnNldEZpZWxkc0luaXRpYWxWYWx1ZSxcbiAgICAgIGdldEZpZWxkRGVjb3JhdG9yOiB0aGlzLmdldEZpZWxkRGVjb3JhdG9yLFxuICAgICAgZ2V0RmllbGRQcm9wczogdGhpcy5nZXRGaWVsZFByb3BzLFxuICAgICAgZ2V0RmllbGRzRXJyb3I6IHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRzRXJyb3IsXG4gICAgICBnZXRGaWVsZEVycm9yOiB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkRXJyb3IsXG4gICAgICBpc0ZpZWxkVmFsaWRhdGluZzogdGhpcy5maWVsZHNTdG9yZS5pc0ZpZWxkVmFsaWRhdGluZyxcbiAgICAgIGlzRmllbGRzVmFsaWRhdGluZzogdGhpcy5maWVsZHNTdG9yZS5pc0ZpZWxkc1ZhbGlkYXRpbmcsXG4gICAgICBpc0ZpZWxkc1RvdWNoZWQ6IHRoaXMuZmllbGRzU3RvcmUuaXNGaWVsZHNUb3VjaGVkLFxuICAgICAgaXNGaWVsZFRvdWNoZWQ6IHRoaXMuZmllbGRzU3RvcmUuaXNGaWVsZFRvdWNoZWQsXG4gICAgICBpc1N1Ym1pdHRpbmc6IHRoaXMuaXNTdWJtaXR0aW5nLFxuICAgICAgc3VibWl0OiB0aGlzLnN1Ym1pdCxcbiAgICAgIHZhbGlkYXRlRmllbGRzOiB0aGlzLnZhbGlkYXRlRmllbGRzLFxuICAgICAgcmVzZXRGaWVsZHM6IHRoaXMucmVzZXRGaWVsZHNcbiAgICB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKG9wdGlvbnMpIHtcbiAgcmV0dXJuICgwLCBfY3JlYXRlQmFzZUZvcm0yWydkZWZhdWx0J10pKG9wdGlvbnMsIFttaXhpbl0pO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVGb3JtOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfZG9tU2Nyb2xsSW50b1ZpZXcgPSByZXF1aXJlKCdkb20tc2Nyb2xsLWludG8tdmlldycpO1xuXG52YXIgX2RvbVNjcm9sbEludG9WaWV3MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RvbVNjcm9sbEludG9WaWV3KTtcblxudmFyIF9oYXMgPSByZXF1aXJlKCdsb2Rhc2gvaGFzJyk7XG5cbnZhciBfaGFzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhcyk7XG5cbnZhciBfY3JlYXRlQmFzZUZvcm0gPSByZXF1aXJlKCcuL2NyZWF0ZUJhc2VGb3JtJyk7XG5cbnZhciBfY3JlYXRlQmFzZUZvcm0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQmFzZUZvcm0pO1xuXG52YXIgX2NyZWF0ZUZvcm0gPSByZXF1aXJlKCcuL2NyZWF0ZUZvcm0nKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjb21wdXRlZFN0eWxlKGVsLCBwcm9wKSB7XG4gIHZhciBnZXRDb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGU7XG4gIHZhciBzdHlsZSA9XG4gIC8vIElmIHdlIGhhdmUgZ2V0Q29tcHV0ZWRTdHlsZVxuICBnZXRDb21wdXRlZFN0eWxlID9cbiAgLy8gUXVlcnkgaXRcbiAgLy8gVE9ETzogRnJvbSBDU1MtUXVlcnkgbm90ZXMsIHdlIG1pZ2h0IG5lZWQgKG5vZGUsIG51bGwpIGZvciBGRlxuICBnZXRDb21wdXRlZFN0eWxlKGVsKSA6XG5cbiAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgaW4gSUUgYW5kIHVzZSBjdXJyZW50U3R5bGVcbiAgZWwuY3VycmVudFN0eWxlO1xuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gc3R5bGVbXG4gICAgLy8gU3dpdGNoIHRvIGNhbWVsQ2FzZSBmb3IgQ1NTT01cbiAgICAvLyBERVY6IEdyYWJiZWQgZnJvbSBqUXVlcnlcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iLzEuOS1zdGFibGUvc3JjL2Nzcy5qcyNMMTkxLUwxOTRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9ibG9iLzEuOS1zdGFibGUvc3JjL2NvcmUuanMjTDU5My1MNTk3XG4gICAgcHJvcC5yZXBsYWNlKC8tKFxcdykvZ2ksIGZ1bmN0aW9uICh3b3JkLCBsZXR0ZXIpIHtcbiAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICB9KV07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsYWJsZUNvbnRhaW5lcihuKSB7XG4gIHZhciBub2RlID0gbjtcbiAgdmFyIG5vZGVOYW1lID0gdm9pZCAwO1xuICAvKiBlc2xpbnQgbm8tY29uZC1hc3NpZ246MCAqL1xuICB3aGlsZSAoKG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSAhPT0gJ2JvZHknKSB7XG4gICAgdmFyIG92ZXJmbG93WSA9IGNvbXB1dGVkU3R5bGUobm9kZSwgJ292ZXJmbG93WScpO1xuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNjkwMDQwNy8zMDQwNjA1XG4gICAgaWYgKG5vZGUgIT09IG4gJiYgKG92ZXJmbG93WSA9PT0gJ2F1dG8nIHx8IG92ZXJmbG93WSA9PT0gJ3Njcm9sbCcpICYmIG5vZGUuc2Nyb2xsSGVpZ2h0ID4gbm9kZS5jbGllbnRIZWlnaHQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBub2RlTmFtZSA9PT0gJ2JvZHknID8gbm9kZS5vd25lckRvY3VtZW50IDogbm9kZTtcbn1cblxudmFyIG1peGluID0ge1xuICBnZXRGb3JtOiBmdW5jdGlvbiBnZXRGb3JtKCkge1xuICAgIHJldHVybiAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBfY3JlYXRlRm9ybS5taXhpbi5nZXRGb3JtLmNhbGwodGhpcyksIHtcbiAgICAgIHZhbGlkYXRlRmllbGRzQW5kU2Nyb2xsOiB0aGlzLnZhbGlkYXRlRmllbGRzQW5kU2Nyb2xsXG4gICAgfSk7XG4gIH0sXG4gIHZhbGlkYXRlRmllbGRzQW5kU2Nyb2xsOiBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkc0FuZFNjcm9sbChucywgb3B0LCBjYikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX2dldFBhcmFtcyA9ICgwLCBfdXRpbHMuZ2V0UGFyYW1zKShucywgb3B0LCBjYiksXG4gICAgICAgIG5hbWVzID0gX2dldFBhcmFtcy5uYW1lcyxcbiAgICAgICAgY2FsbGJhY2sgPSBfZ2V0UGFyYW1zLmNhbGxiYWNrLFxuICAgICAgICBvcHRpb25zID0gX2dldFBhcmFtcy5vcHRpb25zO1xuXG4gICAgdmFyIG5ld0NiID0gZnVuY3Rpb24gbmV3Q2IoZXJyb3IsIHZhbHVlcykge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHZhciB2YWxpZE5hbWVzID0gX3RoaXMuZmllbGRzU3RvcmUuZ2V0VmFsaWRGaWVsZHNOYW1lKCk7XG4gICAgICAgIHZhciBmaXJzdE5vZGUgPSB2b2lkIDA7XG4gICAgICAgIHZhciBmaXJzdFRvcCA9IHZvaWQgMDtcblxuICAgICAgICB2YWxpZE5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICBpZiAoKDAsIF9oYXMyWydkZWZhdWx0J10pKGVycm9yLCBuYW1lKSkge1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gX3RoaXMuZ2V0RmllbGRJbnN0YW5jZShuYW1lKTtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgICB2YXIgbm9kZSA9IF9yZWFjdERvbTJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZShpbnN0YW5jZSk7XG4gICAgICAgICAgICAgIHZhciB0b3AgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgICAgICAgaWYgKG5vZGUudHlwZSAhPT0gJ2hpZGRlbicgJiYgKGZpcnN0VG9wID09PSB1bmRlZmluZWQgfHwgZmlyc3RUb3AgPiB0b3ApKSB7XG4gICAgICAgICAgICAgICAgZmlyc3RUb3AgPSB0b3A7XG4gICAgICAgICAgICAgICAgZmlyc3ROb2RlID0gbm9kZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpcnN0Tm9kZSkge1xuICAgICAgICAgIHZhciBjID0gb3B0aW9ucy5jb250YWluZXIgfHwgZ2V0U2Nyb2xsYWJsZUNvbnRhaW5lcihmaXJzdE5vZGUpO1xuICAgICAgICAgICgwLCBfZG9tU2Nyb2xsSW50b1ZpZXcyWydkZWZhdWx0J10pKGZpcnN0Tm9kZSwgYywgKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7XG4gICAgICAgICAgICBvbmx5U2Nyb2xsSWZOZWVkZWQ6IHRydWVcbiAgICAgICAgICB9LCBvcHRpb25zLnNjcm9sbCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlRmllbGRzKG5hbWVzLCBvcHRpb25zLCBuZXdDYik7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTUZvcm0ob3B0aW9uKSB7XG4gIHJldHVybiAoMCwgX2NyZWF0ZUJhc2VGb3JtMlsnZGVmYXVsdCddKSgoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBvcHRpb24pLCBbbWl4aW5dKTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlRE9NRm9ybTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5GSUVMRF9EQVRBX1BST1AgPSBleHBvcnRzLkZJRUxEX01FVEFfUFJPUCA9IHZvaWQgMDtcbnZhciBGSUVMRF9NRVRBX1BST1AgPSAnZGF0YS1fX21ldGEnO1xuZXhwb3J0cy5GSUVMRF9NRVRBX1BST1AgPSBGSUVMRF9NRVRBX1BST1A7XG52YXIgRklFTERfREFUQV9QUk9QID0gJ2RhdGEtX19maWVsZCc7XG5leHBvcnRzLkZJRUxEX0RBVEFfUFJPUCA9IEZJRUxEX0RBVEFfUFJPUDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRm9ybUNvbnRleHQgPSB2b2lkIDA7XG5cbnZhciBfY3JlYXRlUmVhY3RDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vY3JlYXRlLXJlYWN0LWNvbnRleHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIEZvcm1Db250ZXh0ID0gKDAsIF9jcmVhdGVSZWFjdENvbnRleHRbXCJkZWZhdWx0XCJdKSh7XG4gIGxhYmVsQWxpZ246ICdyaWdodCcsXG4gIHZlcnRpY2FsOiBmYWxzZVxufSk7XG5leHBvcnRzLkZvcm1Db250ZXh0ID0gRm9ybUNvbnRleHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFJlYWN0RE9NID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JjQW5pbWF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLWFuaW1hdGVcIikpO1xuXG52YXIgX3JvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2dyaWQvcm93XCIpKTtcblxudmFyIF9jb2wgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9ncmlkL2NvbFwiKSk7XG5cbnZhciBfaWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2ljb25cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF93YXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvd2FybmluZ1wiKSk7XG5cbnZhciBfdHlwZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC90eXBlXCIpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcblxudmFyIF9jb250ZXh0ID0gcmVxdWlyZShcIi4vY29udGV4dFwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxudmFyIFZhbGlkYXRlU3RhdHVzZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InLCAndmFsaWRhdGluZycsICcnKTtcblxuZnVuY3Rpb24gaW50ZXJzcGVyc2VTcGFjZShsaXN0KSB7XG4gIHJldHVybiBsaXN0LnJlZHVjZShmdW5jdGlvbiAoY3VycmVudCwgaXRlbSkge1xuICAgIHJldHVybiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGN1cnJlbnQpLCBbJyAnLCBpdGVtXSk7XG4gIH0sIFtdKS5zbGljZSgxKTtcbn1cblxudmFyIEZvcm1JdGVtID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGb3JtSXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRm9ybUl0ZW0oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcm1JdGVtKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEZvcm1JdGVtKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICBfdGhpcy5oZWxwU2hvdyA9IGZhbHNlO1xuXG4gICAgX3RoaXMub25IZWxwQW5pbUVuZCA9IGZ1bmN0aW9uIChfa2V5LCBoZWxwU2hvdykge1xuICAgICAgX3RoaXMuaGVscFNob3cgPSBoZWxwU2hvdztcblxuICAgICAgaWYgKCFoZWxwU2hvdykge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgICB9XG4gICAgfTsgLy8gUmVzb2x2ZSBkdXBsaWNhdGVkIGlkcyBidWcgYmV0d2VlbiBkaWZmZXJlbnQgZm9ybXNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy83MzUxXG5cblxuICAgIF90aGlzLm9uTGFiZWxDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpZCA9IF90aGlzLnByb3BzLmlkIHx8IF90aGlzLmdldElkKCk7XG5cbiAgICAgIGlmICghaWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9ybUl0ZW1Ob2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgICAgdmFyIGNvbnRyb2wgPSBmb3JtSXRlbU5vZGUucXVlcnlTZWxlY3RvcihcIltpZD1cXFwiXCIuY29uY2F0KGlkLCBcIlxcXCJdXCIpKTtcblxuICAgICAgaWYgKGNvbnRyb2wgJiYgY29udHJvbC5mb2N1cykge1xuICAgICAgICBjb250cm9sLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckZvcm1JdGVtID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfaXRlbUNsYXNzTmFtZTtcblxuICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMuc3R5bGUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lO1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZm9ybScsIGN1c3RvbWl6ZVByZWZpeENscyk7XG5cbiAgICAgIHZhciBjaGlsZHJlbiA9IF90aGlzLnJlbmRlckNoaWxkcmVuKHByZWZpeENscyk7XG5cbiAgICAgIHZhciBpdGVtQ2xhc3NOYW1lID0gKF9pdGVtQ2xhc3NOYW1lID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfaXRlbUNsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtXCIpLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9pdGVtQ2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0td2l0aC1oZWxwXCIpLCBfdGhpcy5oZWxwU2hvdyksIF9kZWZpbmVQcm9wZXJ0eShfaXRlbUNsYXNzTmFtZSwgXCJcIi5jb25jYXQoY2xhc3NOYW1lKSwgISFjbGFzc05hbWUpLCBfaXRlbUNsYXNzTmFtZSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfcm93W1wiZGVmYXVsdFwiXSwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGl0ZW1DbGFzc05hbWUpLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGtleTogXCJyb3dcIlxuICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRm9ybUl0ZW0sIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgaGVscCA9IF90aGlzJHByb3BzMi5oZWxwLFxuICAgICAgICAgIHZhbGlkYXRlU3RhdHVzID0gX3RoaXMkcHJvcHMyLnZhbGlkYXRlU3RhdHVzLFxuICAgICAgICAgIGlkID0gX3RoaXMkcHJvcHMyLmlkO1xuICAgICAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkodGhpcy5nZXRDb250cm9scyhjaGlsZHJlbiwgdHJ1ZSkubGVuZ3RoIDw9IDEgfHwgaGVscCAhPT0gdW5kZWZpbmVkIHx8IHZhbGlkYXRlU3RhdHVzICE9PSB1bmRlZmluZWQsICdGb3JtLkl0ZW0nLCAnQ2Fubm90IGdlbmVyYXRlIGB2YWxpZGF0ZVN0YXR1c2AgYW5kIGBoZWxwYCBhdXRvbWF0aWNhbGx5LCAnICsgJ3doaWxlIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lIGBnZXRGaWVsZERlY29yYXRvcmAgaW4gaXQuJyk7XG4gICAgICAoMCwgX3dhcm5pbmdbXCJkZWZhdWx0XCJdKSghaWQsICdGb3JtLkl0ZW0nLCAnYGlkYCBpcyBkZXByZWNhdGVkIGZvciBpdHMgbGFiZWwgYGh0bWxGb3JgLiBQbGVhc2UgdXNlIGBodG1sRm9yYCBkaXJlY3RseS4nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0SGVscE1lc3NhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SGVscE1lc3NhZ2UoKSB7XG4gICAgICB2YXIgaGVscCA9IHRoaXMucHJvcHMuaGVscDtcblxuICAgICAgaWYgKGhlbHAgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmdldE9ubHlDb250cm9sKCkpIHtcbiAgICAgICAgdmFyIF90aGlzJGdldEZpZWxkID0gdGhpcy5nZXRGaWVsZCgpLFxuICAgICAgICAgICAgZXJyb3JzID0gX3RoaXMkZ2V0RmllbGQuZXJyb3JzO1xuXG4gICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICByZXR1cm4gaW50ZXJzcGVyc2VTcGFjZShlcnJvcnMubWFwKGZ1bmN0aW9uIChlLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoZSkpIHtcbiAgICAgICAgICAgICAgbm9kZSA9IGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGUubWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgbm9kZSA9IGUubWVzc2FnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5vZGUgPyBSZWFjdC5jbG9uZUVsZW1lbnQobm9kZSwge1xuICAgICAgICAgICAgICBrZXk6IGluZGV4XG4gICAgICAgICAgICB9KSA6IGUubWVzc2FnZTtcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWxwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDb250cm9sc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250cm9scyhjaGlsZHJlbiwgcmVjdXJzaXZlbHkpIHtcbiAgICAgIHZhciBjb250cm9scyA9IFtdO1xuICAgICAgdmFyIGNoaWxkcmVuQXJyYXkgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghcmVjdXJzaXZlbHkgJiYgY29udHJvbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5BcnJheVtpXTtcblxuICAgICAgICBpZiAoY2hpbGQudHlwZSAmJiAoY2hpbGQudHlwZSA9PT0gRm9ybUl0ZW0gfHwgY2hpbGQudHlwZS5kaXNwbGF5TmFtZSA9PT0gJ0Zvcm1JdGVtJykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2hpbGQucHJvcHMpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfY29uc3RhbnRzLkZJRUxEX01FVEFfUFJPUCBpbiBjaGlsZC5wcm9wcykge1xuICAgICAgICAgIC8vIEFuZCBtZWFucyBGSUVMRF9EQVRBX1BST1AgaW4gY2hpbGQucHJvcHMsIHRvby5cbiAgICAgICAgICBjb250cm9scy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgICAgIGNvbnRyb2xzID0gY29udHJvbHMuY29uY2F0KHRoaXMuZ2V0Q29udHJvbHMoY2hpbGQucHJvcHMuY2hpbGRyZW4sIHJlY3Vyc2l2ZWx5KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRyb2xzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRPbmx5Q29udHJvbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPbmx5Q29udHJvbCgpIHtcbiAgICAgIHZhciBjaGlsZCA9IHRoaXMuZ2V0Q29udHJvbHModGhpcy5wcm9wcy5jaGlsZHJlbiwgZmFsc2UpWzBdO1xuICAgICAgcmV0dXJuIGNoaWxkICE9PSB1bmRlZmluZWQgPyBjaGlsZCA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldENoaWxkUHJvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZFByb3AocHJvcCkge1xuICAgICAgdmFyIGNoaWxkID0gdGhpcy5nZXRPbmx5Q29udHJvbCgpO1xuICAgICAgcmV0dXJuIGNoaWxkICYmIGNoaWxkLnByb3BzICYmIGNoaWxkLnByb3BzW3Byb3BdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRJZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENoaWxkUHJvcCgnaWQnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TWV0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNZXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hpbGRQcm9wKF9jb25zdGFudHMuRklFTERfTUVUQV9QUk9QKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RmllbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RmllbGQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDaGlsZFByb3AoX2NvbnN0YW50cy5GSUVMRF9EQVRBX1BST1ApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJIZWxwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckhlbHAocHJlZml4Q2xzKSB7XG4gICAgICB2YXIgaGVscCA9IHRoaXMuZ2V0SGVscE1lc3NhZ2UoKTtcbiAgICAgIHZhciBjaGlsZHJlbiA9IGhlbHAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWV4cGxhaW5cIiksXG4gICAgICAgIGtleTogXCJoZWxwXCJcbiAgICAgIH0sIGhlbHApIDogbnVsbDtcblxuICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuaGVscFNob3cgPSAhIWNoaWxkcmVuO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfcmNBbmltYXRlW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICB0cmFuc2l0aW9uTmFtZTogXCJzaG93LWhlbHBcIixcbiAgICAgICAgY29tcG9uZW50OiBcIlwiLFxuICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLFxuICAgICAgICBrZXk6IFwiaGVscFwiLFxuICAgICAgICBvbkVuZDogdGhpcy5vbkhlbHBBbmltRW5kXG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckV4dHJhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckV4dHJhKHByZWZpeENscykge1xuICAgICAgdmFyIGV4dHJhID0gdGhpcy5wcm9wcy5leHRyYTtcbiAgICAgIHJldHVybiBleHRyYSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZXh0cmFcIilcbiAgICAgIH0sIGV4dHJhKSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFZhbGlkYXRlU3RhdHVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbGlkYXRlU3RhdHVzKCkge1xuICAgICAgdmFyIG9ubHlDb250cm9sID0gdGhpcy5nZXRPbmx5Q29udHJvbCgpO1xuXG4gICAgICBpZiAoIW9ubHlDb250cm9sKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgdmFyIGZpZWxkID0gdGhpcy5nZXRGaWVsZCgpO1xuXG4gICAgICBpZiAoZmllbGQudmFsaWRhdGluZykge1xuICAgICAgICByZXR1cm4gJ3ZhbGlkYXRpbmcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmllbGQuZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiAnZXJyb3InO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmllbGRWYWx1ZSA9ICd2YWx1ZScgaW4gZmllbGQgPyBmaWVsZC52YWx1ZSA6IHRoaXMuZ2V0TWV0YSgpLmluaXRpYWxWYWx1ZTtcblxuICAgICAgaWYgKGZpZWxkVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBmaWVsZFZhbHVlICE9PSBudWxsICYmIGZpZWxkVmFsdWUgIT09ICcnKSB7XG4gICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyVmFsaWRhdGVXcmFwcGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclZhbGlkYXRlV3JhcHBlcihwcmVmaXhDbHMsIGMxLCBjMiwgYzMpIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgb25seUNvbnRyb2wgPSB0aGlzLmdldE9ubHlDb250cm9sO1xuICAgICAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcHJvcHMudmFsaWRhdGVTdGF0dXMgPT09IHVuZGVmaW5lZCAmJiBvbmx5Q29udHJvbCA/IHRoaXMuZ2V0VmFsaWRhdGVTdGF0dXMoKSA6IHByb3BzLnZhbGlkYXRlU3RhdHVzO1xuICAgICAgdmFyIGNsYXNzZXMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tY29udHJvbFwiKTtcblxuICAgICAgaWYgKHZhbGlkYXRlU3RhdHVzKSB7XG4gICAgICAgIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tY29udHJvbFwiKSwge1xuICAgICAgICAgICdoYXMtZmVlZGJhY2snOiBwcm9wcy5oYXNGZWVkYmFjayB8fCB2YWxpZGF0ZVN0YXR1cyA9PT0gJ3ZhbGlkYXRpbmcnLFxuICAgICAgICAgICdoYXMtc3VjY2Vzcyc6IHZhbGlkYXRlU3RhdHVzID09PSAnc3VjY2VzcycsXG4gICAgICAgICAgJ2hhcy13YXJuaW5nJzogdmFsaWRhdGVTdGF0dXMgPT09ICd3YXJuaW5nJyxcbiAgICAgICAgICAnaGFzLWVycm9yJzogdmFsaWRhdGVTdGF0dXMgPT09ICdlcnJvcicsXG4gICAgICAgICAgJ2lzLXZhbGlkYXRpbmcnOiB2YWxpZGF0ZVN0YXR1cyA9PT0gJ3ZhbGlkYXRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgaWNvblR5cGUgPSAnJztcblxuICAgICAgc3dpdGNoICh2YWxpZGF0ZVN0YXR1cykge1xuICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICBpY29uVHlwZSA9ICdjaGVjay1jaXJjbGUnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICAgIGljb25UeXBlID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZSc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgIGljb25UeXBlID0gJ2Nsb3NlLWNpcmNsZSc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAndmFsaWRhdGluZyc6XG4gICAgICAgICAgaWNvblR5cGUgPSAnbG9hZGluZyc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpY29uVHlwZSA9ICcnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB2YXIgaWNvbiA9IHByb3BzLmhhc0ZlZWRiYWNrICYmIGljb25UeXBlID8gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1jaGlsZHJlbi1pY29uXCIpXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KF9pY29uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICB0eXBlOiBpY29uVHlwZSxcbiAgICAgICAgdGhlbWU6IGljb25UeXBlID09PSAnbG9hZGluZycgPyAnb3V0bGluZWQnIDogJ2ZpbGxlZCdcbiAgICAgIH0pKSA6IG51bGw7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlc1xuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1jaGlsZHJlblwiKVxuICAgICAgfSwgYzEsIGljb24pLCBjMiwgYzMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJXcmFwcGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcldyYXBwZXIocHJlZml4Q2xzLCBjaGlsZHJlbikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0LkZvcm1Db250ZXh0LkNvbnN1bWVyLCB7XG4gICAgICAgIGtleTogXCJ3cmFwcGVyXCJcbiAgICAgIH0sIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgY29udGV4dFdyYXBwZXJDb2wgPSBfcmVmMi53cmFwcGVyQ29sLFxuICAgICAgICAgICAgdmVydGljYWwgPSBfcmVmMi52ZXJ0aWNhbDtcbiAgICAgICAgdmFyIHdyYXBwZXJDb2wgPSBfdGhpczIucHJvcHMud3JhcHBlckNvbDtcbiAgICAgICAgdmFyIG1lcmdlZFdyYXBwZXJDb2wgPSAoJ3dyYXBwZXJDb2wnIGluIF90aGlzMi5wcm9wcyA/IHdyYXBwZXJDb2wgOiBjb250ZXh0V3JhcHBlckNvbCkgfHwge307XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tY29udHJvbC13cmFwcGVyXCIpLCBtZXJnZWRXcmFwcGVyQ29sLmNsYXNzTmFtZSk7IC8vIE5vIHBhc3MgRm9ybUNvbnRleHQgc2luY2UgaXQncyB1c2VsZXNzXG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbnRleHQuRm9ybUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdmVydGljYWw6IHZlcnRpY2FsXG4gICAgICAgICAgfVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb2xbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgbWVyZ2VkV3JhcHBlckNvbCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH0pLCBjaGlsZHJlbikpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzUmVxdWlyZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNSZXF1aXJlZCgpIHtcbiAgICAgIHZhciByZXF1aXJlZCA9IHRoaXMucHJvcHMucmVxdWlyZWQ7XG5cbiAgICAgIGlmIChyZXF1aXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlZDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ2V0T25seUNvbnRyb2woKSkge1xuICAgICAgICB2YXIgbWV0YSA9IHRoaXMuZ2V0TWV0YSgpIHx8IHt9O1xuICAgICAgICB2YXIgdmFsaWRhdGUgPSBtZXRhLnZhbGlkYXRlIHx8IFtdO1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuICEhaXRlbS5ydWxlcztcbiAgICAgICAgfSkuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtLnJ1bGVzLnNvbWUoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBydWxlLnJlcXVpcmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJMYWJlbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMYWJlbChwcmVmaXhDbHMpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dC5Gb3JtQ29udGV4dC5Db25zdW1lciwge1xuICAgICAgICBrZXk6IFwibGFiZWxcIlxuICAgICAgfSwgZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICB2YXIgdmVydGljYWwgPSBfcmVmMy52ZXJ0aWNhbCxcbiAgICAgICAgICAgIGNvbnRleHRMYWJlbEFsaWduID0gX3JlZjMubGFiZWxBbGlnbixcbiAgICAgICAgICAgIGNvbnRleHRMYWJlbENvbCA9IF9yZWYzLmxhYmVsQ29sLFxuICAgICAgICAgICAgY29udGV4dENvbG9uID0gX3JlZjMuY29sb247XG4gICAgICAgIHZhciBfdGhpczMkcHJvcHMgPSBfdGhpczMucHJvcHMsXG4gICAgICAgICAgICBsYWJlbCA9IF90aGlzMyRwcm9wcy5sYWJlbCxcbiAgICAgICAgICAgIGxhYmVsQ29sID0gX3RoaXMzJHByb3BzLmxhYmVsQ29sLFxuICAgICAgICAgICAgbGFiZWxBbGlnbiA9IF90aGlzMyRwcm9wcy5sYWJlbEFsaWduLFxuICAgICAgICAgICAgY29sb24gPSBfdGhpczMkcHJvcHMuY29sb24sXG4gICAgICAgICAgICBpZCA9IF90aGlzMyRwcm9wcy5pZCxcbiAgICAgICAgICAgIGh0bWxGb3IgPSBfdGhpczMkcHJvcHMuaHRtbEZvcjtcblxuICAgICAgICB2YXIgcmVxdWlyZWQgPSBfdGhpczMuaXNSZXF1aXJlZCgpO1xuXG4gICAgICAgIHZhciBtZXJnZWRMYWJlbENvbCA9ICgnbGFiZWxDb2wnIGluIF90aGlzMy5wcm9wcyA/IGxhYmVsQ29sIDogY29udGV4dExhYmVsQ29sKSB8fCB7fTtcbiAgICAgICAgdmFyIG1lcmdlZExhYmVsQWxpZ24gPSAnbGFiZWxBbGlnbicgaW4gX3RoaXMzLnByb3BzID8gbGFiZWxBbGlnbiA6IGNvbnRleHRMYWJlbEFsaWduO1xuICAgICAgICB2YXIgbGFiZWxDbHNCYXNpYyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1sYWJlbFwiKTtcbiAgICAgICAgdmFyIGxhYmVsQ29sQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkobGFiZWxDbHNCYXNpYywgbWVyZ2VkTGFiZWxBbGlnbiA9PT0gJ2xlZnQnICYmIFwiXCIuY29uY2F0KGxhYmVsQ2xzQmFzaWMsIFwiLWxlZnRcIiksIG1lcmdlZExhYmVsQ29sLmNsYXNzTmFtZSk7XG4gICAgICAgIHZhciBsYWJlbENoaWxkcmVuID0gbGFiZWw7IC8vIEtlZXAgbGFiZWwgaXMgb3JpZ2luYWwgd2hlcmUgdGhlcmUgc2hvdWxkIGhhdmUgbm8gY29sb25cblxuICAgICAgICB2YXIgY29tcHV0ZWRDb2xvbiA9IGNvbG9uID09PSB0cnVlIHx8IGNvbnRleHRDb2xvbiAhPT0gZmFsc2UgJiYgY29sb24gIT09IGZhbHNlO1xuICAgICAgICB2YXIgaGF2ZUNvbG9uID0gY29tcHV0ZWRDb2xvbiAmJiAhdmVydGljYWw7IC8vIFJlbW92ZSBkdXBsaWNhdGVkIHVzZXIgaW5wdXQgY29sb25cblxuICAgICAgICBpZiAoaGF2ZUNvbG9uICYmIHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycgJiYgbGFiZWwudHJpbSgpICE9PSAnJykge1xuICAgICAgICAgIGxhYmVsQ2hpbGRyZW4gPSBsYWJlbC5yZXBsYWNlKC9b77yafDpdXFxzKiQvLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGFiZWxDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tcmVxdWlyZWRcIiksIHJlcXVpcmVkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbm8tY29sb25cIiksICFjb21wdXRlZENvbG9uKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgICAgcmV0dXJuIGxhYmVsID8gUmVhY3QuY3JlYXRlRWxlbWVudChfY29sW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe30sIG1lcmdlZExhYmVsQ29sLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBsYWJlbENvbENsYXNzTmFtZVxuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtcbiAgICAgICAgICBodG1sRm9yOiBodG1sRm9yIHx8IGlkIHx8IF90aGlzMy5nZXRJZCgpLFxuICAgICAgICAgIGNsYXNzTmFtZTogbGFiZWxDbGFzc05hbWUsXG4gICAgICAgICAgdGl0bGU6IHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycgPyBsYWJlbCA6ICcnLFxuICAgICAgICAgIG9uQ2xpY2s6IF90aGlzMy5vbkxhYmVsQ2xpY2tcbiAgICAgICAgfSwgbGFiZWxDaGlsZHJlbikpIDogbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJDaGlsZHJlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbihwcmVmaXhDbHMpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICByZXR1cm4gW3RoaXMucmVuZGVyTGFiZWwocHJlZml4Q2xzKSwgdGhpcy5yZW5kZXJXcmFwcGVyKHByZWZpeENscywgdGhpcy5yZW5kZXJWYWxpZGF0ZVdyYXBwZXIocHJlZml4Q2xzLCBjaGlsZHJlbiwgdGhpcy5yZW5kZXJIZWxwKHByZWZpeENscyksIHRoaXMucmVuZGVyRXh0cmEocHJlZml4Q2xzKSkpXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJGb3JtSXRlbSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZvcm1JdGVtO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZvcm1JdGVtO1xuRm9ybUl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBoYXNGZWVkYmFjazogZmFsc2Vcbn07XG5Gb3JtSXRlbS5wcm9wVHlwZXMgPSB7XG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gIGxhYmVsQWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsQ29sOiBQcm9wVHlwZXMub2JqZWN0LFxuICBoZWxwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmJvb2xdKSxcbiAgdmFsaWRhdGVTdGF0dXM6IFByb3BUeXBlcy5vbmVPZihWYWxpZGF0ZVN0YXR1c2VzKSxcbiAgaGFzRmVlZGJhY2s6IFByb3BUeXBlcy5ib29sLFxuICB3cmFwcGVyQ29sOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNvbG9uOiBQcm9wVHlwZXMuYm9vbFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jcmVhdGVET01Gb3JtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtZm9ybS9saWIvY3JlYXRlRE9NRm9ybVwiKSk7XG5cbnZhciBfY3JlYXRlRm9ybUZpZWxkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtZm9ybS9saWIvY3JlYXRlRm9ybUZpZWxkXCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX3R5cGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvdHlwZVwiKTtcblxudmFyIF93YXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvd2FybmluZ1wiKSk7XG5cbnZhciBfRm9ybUl0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0Zvcm1JdGVtXCIpKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5cbnZhciBfY29udGV4dCA9IHJlcXVpcmUoXCIuL2NvbnRleHRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBGb3JtTGF5b3V0cyA9ICgwLCBfdHlwZS50dXBsZSkoJ2hvcml6b250YWwnLCAnaW5saW5lJywgJ3ZlcnRpY2FsJyk7XG5cbnZhciBGb3JtID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGb3JtLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBGb3JtKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcm0pO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoRm9ybSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMucmVuZGVyRm9ybSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF90aGlzJHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICBoaWRlUmVxdWlyZWRNYXJrID0gX3RoaXMkcHJvcHMuaGlkZVJlcXVpcmVkTWFyayxcbiAgICAgICAgICBfdGhpcyRwcm9wcyRjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMkY2xhc3NOYW1lID09PSB2b2lkIDAgPyAnJyA6IF90aGlzJHByb3BzJGNsYXNzTmFtZSxcbiAgICAgICAgICBsYXlvdXQgPSBfdGhpcyRwcm9wcy5sYXlvdXQ7XG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdmb3JtJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciBmb3JtQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhvcml6b250YWxcIiksIGxheW91dCA9PT0gJ2hvcml6b250YWwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXZlcnRpY2FsXCIpLCBsYXlvdXQgPT09ICd2ZXJ0aWNhbCcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5saW5lXCIpLCBsYXlvdXQgPT09ICdpbmxpbmUnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhpZGUtcmVxdWlyZWQtbWFya1wiKSwgaGlkZVJlcXVpcmVkTWFyayksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgICAgIHZhciBmb3JtUHJvcHMgPSAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShfdGhpcy5wcm9wcywgWydwcmVmaXhDbHMnLCAnY2xhc3NOYW1lJywgJ2xheW91dCcsICdmb3JtJywgJ2hpZGVSZXF1aXJlZE1hcmsnLCAnd3JhcHBlckNvbCcsICdsYWJlbEFsaWduJywgJ2xhYmVsQ29sJywgJ2NvbG9uJ10pO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIF9leHRlbmRzKHt9LCBmb3JtUHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBmb3JtQ2xhc3NOYW1lXG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgICgwLCBfd2FybmluZ1tcImRlZmF1bHRcIl0pKCFwcm9wcy5mb3JtLCAnRm9ybScsICdJdCBpcyB1bm5lY2Vzc2FyeSB0byBwYXNzIGBmb3JtYCB0byBgRm9ybWAgYWZ0ZXIgYW50ZEAxLjcuMC4nKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRm9ybSwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHdyYXBwZXJDb2wgPSBfdGhpcyRwcm9wczIud3JhcHBlckNvbCxcbiAgICAgICAgICBsYWJlbEFsaWduID0gX3RoaXMkcHJvcHMyLmxhYmVsQWxpZ24sXG4gICAgICAgICAgbGFiZWxDb2wgPSBfdGhpcyRwcm9wczIubGFiZWxDb2wsXG4gICAgICAgICAgbGF5b3V0ID0gX3RoaXMkcHJvcHMyLmxheW91dCxcbiAgICAgICAgICBjb2xvbiA9IF90aGlzJHByb3BzMi5jb2xvbjtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0LkZvcm1Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgd3JhcHBlckNvbDogd3JhcHBlckNvbCxcbiAgICAgICAgICBsYWJlbEFsaWduOiBsYWJlbEFsaWduLFxuICAgICAgICAgIGxhYmVsQ29sOiBsYWJlbENvbCxcbiAgICAgICAgICB2ZXJ0aWNhbDogbGF5b3V0ID09PSAndmVydGljYWwnLFxuICAgICAgICAgIGNvbG9uOiBjb2xvblxuICAgICAgICB9XG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJGb3JtKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZvcm07XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRm9ybTtcbkZvcm0uZGVmYXVsdFByb3BzID0ge1xuICBjb2xvbjogdHJ1ZSxcbiAgbGF5b3V0OiAnaG9yaXpvbnRhbCcsXG4gIGhpZGVSZXF1aXJlZE1hcms6IGZhbHNlLFxuICBvblN1Ym1pdDogZnVuY3Rpb24gb25TdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxufTtcbkZvcm0ucHJvcFR5cGVzID0ge1xuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxheW91dDogUHJvcFR5cGVzLm9uZU9mKEZvcm1MYXlvdXRzKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgaGlkZVJlcXVpcmVkTWFyazogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbG9uOiBQcm9wVHlwZXMuYm9vbFxufTtcbkZvcm0uSXRlbSA9IF9Gb3JtSXRlbVtcImRlZmF1bHRcIl07XG5Gb3JtLmNyZWF0ZUZvcm1GaWVsZCA9IF9jcmVhdGVGb3JtRmllbGRbXCJkZWZhdWx0XCJdO1xuXG5Gb3JtLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICByZXR1cm4gKDAsIF9jcmVhdGVET01Gb3JtW1wiZGVmYXVsdFwiXSkoX2V4dGVuZHMoe1xuICAgIGZpZWxkTmFtZVByb3A6ICdpZCdcbiAgfSwgb3B0aW9ucywge1xuICAgIGZpZWxkTWV0YVByb3A6IF9jb25zdGFudHMuRklFTERfTUVUQV9QUk9QLFxuICAgIGZpZWxkRGF0YVByb3A6IF9jb25zdGFudHMuRklFTERfREFUQV9QUk9QXG4gIH0pKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9Gb3JtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IF9Gb3JtW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0JyksXG4gICAgYmFzZVNldCA9IHJlcXVpcmUoJy4vX2Jhc2VTZXQnKSxcbiAgICBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgIGBfLnBpY2tCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aHMgVGhlIHByb3BlcnR5IHBhdGhzIHRvIHBpY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIHByb3BlcnR5LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gYmFzZVBpY2tCeShvYmplY3QsIHBhdGhzLCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRocy5sZW5ndGgsXG4gICAgICByZXN1bHQgPSB7fTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBwYXRoID0gcGF0aHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZSA9IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcblxuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIHBhdGgpKSB7XG4gICAgICBiYXNlU2V0KHJlc3VsdCwgY2FzdFBhdGgocGF0aCwgb2JqZWN0KSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQaWNrQnk7XG4iLCJ2YXIgYmFzZVBpY2tCeSA9IHJlcXVpcmUoJy4vX2Jhc2VQaWNrQnknKSxcbiAgICBoYXNJbiA9IHJlcXVpcmUoJy4vaGFzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5waWNrYCB3aXRob3V0IHN1cHBvcnQgZm9yIGluZGl2aWR1YWxcbiAqIHByb3BlcnR5IGlkZW50aWZpZXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aHMgVGhlIHByb3BlcnR5IHBhdGhzIHRvIHBpY2suXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBiYXNlUGljayhvYmplY3QsIHBhdGhzKSB7XG4gIHJldHVybiBiYXNlUGlja0J5KG9iamVjdCwgcGF0aHMsIGZ1bmN0aW9uKHZhbHVlLCBwYXRoKSB7XG4gICAgcmV0dXJuIGhhc0luKG9iamVjdCwgcGF0aCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQaWNrO1xuIiwidmFyIGJhc2VQaWNrID0gcmVxdWlyZSgnLi9fYmFzZVBpY2snKSxcbiAgICBmbGF0UmVzdCA9IHJlcXVpcmUoJy4vX2ZsYXRSZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgY29tcG9zZWQgb2YgdGhlIHBpY2tlZCBgb2JqZWN0YCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0gey4uLihzdHJpbmd8c3RyaW5nW10pfSBbcGF0aHNdIFRoZSBwcm9wZXJ0eSBwYXRocyB0byBwaWNrLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6ICcyJywgJ2MnOiAzIH07XG4gKlxuICogXy5waWNrKG9iamVjdCwgWydhJywgJ2MnXSk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2MnOiAzIH1cbiAqL1xudmFyIHBpY2sgPSBmbGF0UmVzdChmdW5jdGlvbihvYmplY3QsIHBhdGhzKSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHt9IDogYmFzZVBpY2sob2JqZWN0LCBwYXRocyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBwaWNrO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ2FudGQnXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnXG5pbXBvcnQgcGljayBmcm9tICdsb2Rhc2gvcGljaydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSAnLi4vQ3VzdG9tQnV0dG9uJ1xuXG4vKipcbiAqIFRoZW1hYmxlIEZvcm0uSXRlbVxuICovXG5jb25zdCBTRm9ybUl0ZW0gPSB3aXRoVGhlbWUoRm9ybS5JdGVtKVxuXG5leHBvcnQgY29uc3QgY3JlYXRlR2VuZXJpY0Zvcm1Db21wb25lbnQgPSBjb25maWcgPT4ge1xuICBjbGFzcyBHZW5lcmljRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0dGluZzogdHJ1ZSB9KVxuICAgICAgdGhpcy5wcm9wcy5mb3JtLnZhbGlkYXRlRmllbGRzQW5kU2Nyb2xsKChlcnIsIHZhbHVlcykgPT4ge1xuICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCB2YWx1ZXMgb2YgZm9ybTogJywgdmFsdWVzKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZ3JvdXAoZXJyKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0dGluZzogZmFsc2UgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBmaWVsZHMsXG4gICAgICAgIGZvcm0sXG4gICAgICAgIHN1Ym1pdEJ1dHRvbkNvbnRlbnQsXG4gICAgICAgIHN1Ym1pdEJ1dHRvblByb3BzXG4gICAgICB9ID0gdGhpcy5wcm9wc1xuICAgICAgY29uc3Qgc3VibWl0dGluZyA9IGdldCh0aGlzLnN0YXRlLCAnc3VibWl0dGluZycpXG4gICAgICBjb25zdCB7IGdldEZpZWxkRGVjb3JhdG9yIH0gPSBwaWNrKGZvcm0sIFsnZ2V0RmllbGREZWNvcmF0b3InXSlcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0gaGlkZVJlcXVpcmVkTWFyayBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAge2ZpZWxkcy5tYXAoXG4gICAgICAgICAgICAoe1xuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIGNvbXBvbmVudFByb3BzLFxuICAgICAgICAgICAgICBmaWVsZENvbmZpZyxcbiAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGZvcm1JdGVtUHJvcHNcbiAgICAgICAgICAgIH0pID0+IChcbiAgICAgICAgICAgICAgPFNGb3JtSXRlbVxuICAgICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAgICAgaHRtbEZvcj17bmFtZX1cbiAgICAgICAgICAgICAgICBtYj17MH1cbiAgICAgICAgICAgICAgICB7Li4uZm9ybUl0ZW1Qcm9wc31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcihuYW1lLCBmaWVsZENvbmZpZykoXG4gICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5jb21wb25lbnRQcm9wc30gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1NGb3JtSXRlbT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICAgIDxDdXN0b21CdXR0b25cbiAgICAgICAgICAgIGNvbnRlbnQ9e3N1Ym1pdEJ1dHRvbkNvbnRlbnR9XG4gICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZ31cbiAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHsuLi5zdWJtaXRCdXR0b25Qcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEZvcm0uY3JlYXRlKGNvbmZpZykoR2VuZXJpY0Zvcm0pXG59XG4iXSwibmFtZXMiOlsicmVxdWlyZSQkMCIsImJhc2VIYXMiLCJJVEVSQVRPUiIsInJlcXVpcmUkJDEiLCJjbGFzc29mIiwiZ2V0SXRlckZuIiwiaXNBcnJheUl0ZXIiLCJjcmVhdGVQcm9wZXJ0eSIsImNhbGwiLCJfZnJvbSIsImVtcHR5RnVuY3Rpb24iLCJ3YXJuaW5nIiwiX2ludmFyaWFudCIsImVtcHR5T2JqZWN0IiwiUmVhY3QiLCJmYWN0b3J5IiwiX3R5cGVvZiIsIl9leHRlbmRzIiwidXRpbC5pc0VtcHR5VmFsdWUiLCJ1dGlsLmZvcm1hdCIsInBhdHRlcm4iLCJlbnVtUnVsZSIsIkVOVU0iLCJlbnVtZXJhYmxlIiwicmVxdWlyZWQiLCJ0eXBlIiwiZmxvYXQiLCJlbnVtVmFsaWRhdG9yIiwiZGVmYXVsdE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJiYXNlU2V0IiwiX2V4dGVuZHMyIiwiX2NsYXNzQ2FsbENoZWNrMiIsIlJlYWN0SXMiLCJfaG9pc3ROb25SZWFjdFN0YXRpY3MiLCJfZGVmaW5lUHJvcGVydHkyIiwiX2NyZWF0ZUNsYXNzMiIsIl9zZXQiLCJfY3JlYXRlRm9ybUZpZWxkIiwiX3V0aWxzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiIsIl9leHRlbmRzNSIsIl90b0NvbnN1bWFibGVBcnJheTIiLCJfcmVhY3QiLCJfY3JlYXRlUmVhY3RDbGFzcyIsIl9hc3luY1ZhbGlkYXRvciIsIl9nZXQiLCJfY3JlYXRlRmllbGRzU3RvcmUiLCJfY3JlYXRlQmFzZUZvcm0iLCJfcmVhY3REb20iLCJfZG9tU2Nyb2xsSW50b1ZpZXciLCJfaGFzIiwiX2NyZWF0ZUZvcm0iLCJyZXF1aXJlJCQyIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDciLCJyZXF1aXJlJCQ4IiwiX2NvbnN0YW50cyIsIl9jb250ZXh0IiwicmVxdWlyZSQkNCIsInJlcXVpcmUkJDUiLCJyZXF1aXJlJCQ2IiwiYmFzZVBpY2tCeSIsImJhc2VQaWNrIiwiU0Zvcm1JdGVtIiwid2l0aFRoZW1lIiwiSXRlbSIsImNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50IiwiY29uZmlnIiwiR2VuZXJpY0Zvcm0iLCJzdWJtaXR0aW5nIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJwcm9wcyIsImZvcm0iLCJ2YWxpZGF0ZUZpZWxkc0FuZFNjcm9sbCIsImVyciIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJncm91cCIsImZpZWxkcyIsInN1Ym1pdEJ1dHRvbkNvbnRlbnQiLCJzdWJtaXRCdXR0b25Qcm9wcyIsImdldCIsInN0YXRlIiwicGljayIsImdldEZpZWxkRGVjb3JhdG9yIiwiaGFuZGxlU3VibWl0IiwibWFwIiwiQ29tcG9uZW50IiwiY29tcG9uZW50UHJvcHMiLCJmaWVsZENvbmZpZyIsImxhYmVsIiwibmFtZSIsImZvcm1JdGVtUHJvcHMiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNB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QUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztBQUNqZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFD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QUssSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7VUFDdEcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7O1FBRUQsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDO1lBQzVELElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJO1lBQzVCLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLO1lBQzlCLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7O1FBRTNDLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7OztRQUdsQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7O1FBRXBDLElBQUksUUFBUSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtVQUNsRCxLQUFLLEVBQUUsQ0FBQyxHQUFHQSxLQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7T0FDdEU7TUFDRCxpQkFBaUIsRUFBRSxTQUFTLGlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7UUFDM0QsS0FBSyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsR0FB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QVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUU7O0FBRTdULFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTs7QUFFak4sU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsRUFBRSxFQUFFOztBQUV6SixTQUFTLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLElB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RyxzQkFBc0IsQ0FBQ0MsVUFBa0IsQ0FBQyxDQUFDOzs7Ozs7QUFNdkQsSUFBSSxRQUFRLEdBQUcsc0JBQXNCLENBQUNDLFlBQTJCLENBQUMsQ0FBQzs7QUFFbkUsSUFBSSxTQUFTLEdBQUcsc0JBQXNCLENBQUNOLFVBQXFCLENBQUMsQ0FBQzs7Ozs7O0FBTTlELFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTs7QUFFakcsU0FBUyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUU7O0FBRTNkLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUUsRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFOztBQUUvVixTQUFTLFFBQVEsR0FBRyxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUU7O0FB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
