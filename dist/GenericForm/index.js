import { c as createCommonjsModule, u as unwrapExports, a as React__default, h as _warning, r as require$$0$1, d as require$$1$2, b as require$$2$1, _ as _configProvider } from '../chunk-0afe7056.js';
import { a as require$$5, r as require$$6 } from '../chunk-25163efd.js';
import 'react';
import 'prop-types';
import { _ as _type } from '../chunk-987af3b3.js';
import { i as isArray, b as isObject } from '../chunk-0299fa98.js';
import { e as castPath, d as toKey, f as get, _ as _eq, c as baseGet } from '../chunk-6dace7f3.js';
import '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
import '../chunk-4e9cb9ad.js';
import { j as anObject, k as require$$0, I as Iterators, $ as $defineProperty, l as createDesc, m as cof, n as require$$2, o as $export, t as toObject, p as ctx, q as toLength, g as _typeof$1, c as _extends$1, s as _extends$2, u as classCallCheck, v as defineProperty$1, w as createClass, x as objectWithoutProperties, r as require$$4$1, e as require$$6$1, f as require$$3 } from '../chunk-378fb839.js';
import 'react-dom';
import { _ as _assign, r as require$$4 } from '../chunk-64d794c3.js';
import { r as require$$1$1 } from '../chunk-8820e6e0.js';
import '../chunk-462365a0.js';
import CustomButton from '../CustomButton/index.js';
import { i as isLength, d as isIndex, c as isArguments, a as assignValue, f as flatRest } from '../chunk-40527a2d.js';

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
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

var _hasPath = hasPath;

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
  return object != null && _hasPath(object, path, _baseHas);
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
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

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
    return hasIn_1(object, path);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9kb20tc2Nyb2xsLWludG8tdmlldy9saWIvdXRpbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kb20tc2Nyb2xsLWludG8tdmlldy9saWIvZG9tLXNjcm9sbC1pbnRvLXZpZXcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZG9tLXNjcm9sbC1pbnRvLXZpZXcvbGliL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUhhcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1BhdGguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2hhcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlPYmplY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvd2FybmluZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jcmVhdGUtcmVhY3QtY2xhc3MvZmFjdG9yeS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jcmVhdGUtcmVhY3QtY2xhc3MvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL3V0aWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL3J1bGUvcmVxdWlyZWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL3J1bGUvd2hpdGVzcGFjZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvcnVsZS90eXBlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy9ydWxlL3JhbmdlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy9ydWxlL2VudW0uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL3J1bGUvcGF0dGVybi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvcnVsZS9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvdmFsaWRhdG9yL3N0cmluZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvdmFsaWRhdG9yL21ldGhvZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvdmFsaWRhdG9yL251bWJlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvdmFsaWRhdG9yL2Jvb2xlYW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL3ZhbGlkYXRvci9yZWdleHAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL3ZhbGlkYXRvci9pbnRlZ2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy92YWxpZGF0b3IvZmxvYXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL3ZhbGlkYXRvci9hcnJheS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvdmFsaWRhdG9yL29iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvdmFsaWRhdG9yL2VudW0uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvYXN5bmMtdmFsaWRhdG9yL2VzL3ZhbGlkYXRvci9wYXR0ZXJuLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy92YWxpZGF0b3IvZGF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvdmFsaWRhdG9yL3JlcXVpcmVkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy92YWxpZGF0b3IvdHlwZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvdmFsaWRhdG9yL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FzeW5jLXZhbGlkYXRvci9lcy9tZXNzYWdlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hc3luYy12YWxpZGF0b3IvZXMvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2V0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zZXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmMtZm9ybS9saWIvY3JlYXRlRm9ybUZpZWxkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmMtZm9ybS9saWIvdXRpbHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmMtZm9ybS9saWIvY3JlYXRlRmllbGRzU3RvcmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmMtZm9ybS9saWIvY3JlYXRlQmFzZUZvcm0uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmMtZm9ybS9saWIvY3JlYXRlRm9ybS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yYy1mb3JtL2xpYi9jcmVhdGVET01Gb3JtLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2Zvcm0vY29uc3RhbnRzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2Zvcm0vY29udGV4dC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9mb3JtL0Zvcm1JdGVtLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2Zvcm0vRm9ybS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9mb3JtL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVBpY2tCeS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaGFzSW4uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUGljay5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvcGljay5qcyIsIi4uLy4uL3NyYy9HZW5lcmljRm9ybS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgUkVfTlVNID0gL1tcXC0rXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVtcXC0rXT9cXGQrfCkvLnNvdXJjZTtcblxuZnVuY3Rpb24gZ2V0Q2xpZW50UG9zaXRpb24oZWxlbSkge1xuICB2YXIgYm94ID0gdW5kZWZpbmVkO1xuICB2YXIgeCA9IHVuZGVmaW5lZDtcbiAgdmFyIHkgPSB1bmRlZmluZWQ7XG4gIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBkb2NFbGVtID0gZG9jICYmIGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gIC8vIOagueaNriBHQlMg5pyA5paw5pWw5o2u77yMQS1HcmFkZSBCcm93c2VycyDpg73lt7LmlK/mjIEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IOaWueazle+8jOS4jeeUqOWGjeiAg+iZkeS8oOe7n+eahOWunueOsOaWueW8j1xuICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIC8vIOazqO+8mmpRdWVyeSDov5jogIPomZHlh4/ljrsgZG9jRWxlbS5jbGllbnRMZWZ0L2NsaWVudFRvcFxuICAvLyDkvYbmtYvor5Xlj5HnjrDvvIzov5nmoLflj43ogIzkvJrlr7zoh7TlvZMgaHRtbCDlkowgYm9keSDmnInovrnot50v6L655qGG5qC35byP5pe277yM6I635Y+W55qE5YC85LiN5q2j56GuXG4gIC8vIOatpOWklu+8jGllNiDkvJrlv73nlaUgaHRtbCDnmoQgbWFyZ2luIOWAvO+8jOW5uOi/kOWcsOaYr+ayoeacieiwgeS8muWOu+iuvue9riBodG1sIOeahCBtYXJnaW5cblxuICB4ID0gYm94LmxlZnQ7XG4gIHkgPSBib3gudG9wO1xuXG4gIC8vIEluIElFLCBtb3N0IG9mIHRoZSB0aW1lLCAyIGV4dHJhIHBpeGVscyBhcmUgYWRkZWQgdG8gdGhlIHRvcCBhbmQgbGVmdFxuICAvLyBkdWUgdG8gdGhlIGltcGxpY2l0IDItcGl4ZWwgaW5zZXQgYm9yZGVyLiAgSW4gSUU2LzcgcXVpcmtzIG1vZGUgYW5kXG4gIC8vIElFNiBzdGFuZGFyZHMgbW9kZSwgdGhpcyBib3JkZXIgY2FuIGJlIG92ZXJyaWRkZW4gYnkgc2V0dGluZyB0aGVcbiAgLy8gZG9jdW1lbnQgZWxlbWVudCdzIGJvcmRlciB0byB6ZXJvIC0tIHRodXMsIHdlIGNhbm5vdCByZWx5IG9uIHRoZVxuICAvLyBvZmZzZXQgYWx3YXlzIGJlaW5nIDIgcGl4ZWxzLlxuXG4gIC8vIEluIHF1aXJrcyBtb2RlLCB0aGUgb2Zmc2V0IGNhbiBiZSBkZXRlcm1pbmVkIGJ5IHF1ZXJ5aW5nIHRoZSBib2R5J3NcbiAgLy8gY2xpZW50TGVmdC9jbGllbnRUb3AsIGJ1dCBpbiBzdGFuZGFyZHMgbW9kZSwgaXQgaXMgZm91bmQgYnkgcXVlcnlpbmdcbiAgLy8gdGhlIGRvY3VtZW50IGVsZW1lbnQncyBjbGllbnRMZWZ0L2NsaWVudFRvcC4gIFNpbmNlIHdlIGFscmVhZHkgY2FsbGVkXG4gIC8vIGdldENsaWVudEJvdW5kaW5nUmVjdCB3ZSBoYXZlIGFscmVhZHkgZm9yY2VkIGEgcmVmbG93LCBzbyBpdCBpcyBub3RcbiAgLy8gdG9vIGV4cGVuc2l2ZSBqdXN0IHRvIHF1ZXJ5IHRoZW0gYWxsLlxuXG4gIC8vIGllIOS4i+W6lOivpeWHj+WOu+eql+WPo+eahOi+ueahhuWQp++8jOavleern+m7mOiupCBhYnNvbHV0ZSDpg73mmK/nm7jlr7nnqpflj6PlrprkvY3nmoRcbiAgLy8g56qX5Y+j6L655qGG5qCH5YeG5piv6K6+IGRvY3VtZW50RWxlbWVudCAscXVpcmtzIOaXtuiuvue9riBib2R5XG4gIC8vIOacgOWlveemgeatouWcqCBib2R5IOWSjCBodG1sIOS4iui+ueahhiDvvIzkvYYgaWUgPCA5IGh0bWwg6buY6K6k5pyJIDJweCDvvIzlh4/ljrtcbiAgLy8g5L2G5piv6Z2eIGllIOS4jeWPr+iDveiuvue9rueql+WPo+i+ueahhu+8jGJvZHkgaHRtbCDkuZ/kuI3mmK/nqpflj6MgLGllIOWPr+S7pemAmui/hyBodG1sLGJvZHkg6K6+572uXG4gIC8vIOagh+WHhiBpZSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5bCx5pivIGJvcmRlci10b3BcbiAgLy8gaWU3IGh0bWwg5Y2z56qX5Y+j6L655qGG5pS55Y+Y5LiN5LqG44CC5rC46L+c5Li6IDJcbiAgLy8g5L2G5qCH5YeGIGZpcmVmb3gvY2hyb21lL2llOSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5piv56qX5Y+j6L655qGG77yM5Y2z5L2/6K6+5LqGIGJvcmRlci10b3Ag5Lmf5Li6IDBcblxuICB4IC09IGRvY0VsZW0uY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgeSAtPSBkb2NFbGVtLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdDogeCxcbiAgICB0b3A6IHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsKHcsIHRvcCkge1xuICB2YXIgcmV0ID0gd1sncGFnZScgKyAodG9wID8gJ1knIDogJ1gnKSArICdPZmZzZXQnXTtcbiAgdmFyIG1ldGhvZCA9ICdzY3JvbGwnICsgKHRvcCA/ICdUb3AnIDogJ0xlZnQnKTtcbiAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgdmFyIGQgPSB3LmRvY3VtZW50O1xuICAgIC8vIGllNiw3LDggc3RhbmRhcmQgbW9kZVxuICAgIHJldCA9IGQuZG9jdW1lbnRFbGVtZW50W21ldGhvZF07XG4gICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAvLyBxdWlya3MgbW9kZVxuICAgICAgcmV0ID0gZC5ib2R5W21ldGhvZF07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbExlZnQodykge1xuICByZXR1cm4gZ2V0U2Nyb2xsKHcpO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3Aodykge1xuICByZXR1cm4gZ2V0U2Nyb2xsKHcsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgdmFyIHBvcyA9IGdldENsaWVudFBvc2l0aW9uKGVsKTtcbiAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gIHZhciB3ID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHBvcy5sZWZ0ICs9IGdldFNjcm9sbExlZnQodyk7XG4gIHBvcy50b3AgKz0gZ2V0U2Nyb2xsVG9wKHcpO1xuICByZXR1cm4gcG9zO1xufVxuZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGUoZWxlbSwgbmFtZSwgY29tcHV0ZWRTdHlsZV8pIHtcbiAgdmFyIHZhbCA9ICcnO1xuICB2YXIgZCA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBjb21wdXRlZFN0eWxlXyB8fCBkLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWxlbSwgbnVsbCk7XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvNjFcbiAgaWYgKGNvbXB1dGVkU3R5bGUpIHtcbiAgICB2YWwgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSkgfHwgY29tcHV0ZWRTdHlsZVtuYW1lXTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBfUkVfTlVNX05PX1BYID0gbmV3IFJlZ0V4cCgnXignICsgUkVfTlVNICsgJykoPyFweClbYS16JV0rJCcsICdpJyk7XG52YXIgUkVfUE9TID0gL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvO1xudmFyIENVUlJFTlRfU1RZTEUgPSAnY3VycmVudFN0eWxlJztcbnZhciBSVU5USU1FX1NUWUxFID0gJ3J1bnRpbWVTdHlsZSc7XG52YXIgTEVGVCA9ICdsZWZ0JztcbnZhciBQWCA9ICdweCc7XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlSUUoZWxlbSwgbmFtZSkge1xuICAvLyBjdXJyZW50U3R5bGUgbWF5YmUgbnVsbFxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzUyMzEuYXNweFxuICB2YXIgcmV0ID0gZWxlbVtDVVJSRU5UX1NUWUxFXSAmJiBlbGVtW0NVUlJFTlRfU1RZTEVdW25hbWVdO1xuXG4gIC8vIOW9kyB3aWR0aC9oZWlnaHQg6K6+572u5Li655m+5YiG5q+U5pe277yM6YCa6L+HIHBpeGVsTGVmdCDmlrnlvI/ovazmjaLnmoQgd2lkdGgvaGVpZ2h0IOWAvFxuICAvLyDkuIDlvIDlp4vlsLHlpITnkIbkuoYhIENVU1RPTV9TVFlMRS5oZWlnaHQsQ1VTVE9NX1NUWUxFLndpZHRoICxjc3NIb29rIOino+WGs0AyMDExLTA4LTE5XG4gIC8vIOWcqCBpZSDkuIvkuI3lr7nvvIzpnIDopoHnm7TmjqXnlKggb2Zmc2V0IOaWueW8j1xuICAvLyBib3JkZXJXaWR0aCDnrYnlgLzkuZ/mnInpl67popjvvIzkvYbogIPomZHliLAgYm9yZGVyV2lkdGgg6K6+5Li655m+5YiG5q+U55qE5qaC546H5b6I5bCP77yM6L+Z6YeM5bCx5LiN6ICD6JmR5LqGXG5cbiAgLy8gRnJvbSB0aGUgYXdlc29tZSBoYWNrIGJ5IERlYW4gRWR3YXJkc1xuICAvLyBodHRwOi8vZXJpay5lYWUubmV0L2FyY2hpdmVzLzIwMDcvMDcvMjcvMTguNTQuMTUvI2NvbW1lbnQtMTAyMjkxXG4gIC8vIElmIHdlJ3JlIG5vdCBkZWFsaW5nIHdpdGggYSByZWd1bGFyIHBpeGVsIG51bWJlclxuICAvLyBidXQgYSBudW1iZXIgdGhhdCBoYXMgYSB3ZWlyZCBlbmRpbmcsIHdlIG5lZWQgdG8gY29udmVydCBpdCB0byBwaXhlbHNcbiAgLy8gZXhjbHVkZSBsZWZ0IHJpZ2h0IGZvciByZWxhdGl2aXR5XG4gIGlmIChfUkVfTlVNX05PX1BYLnRlc3QocmV0KSAmJiAhUkVfUE9TLnRlc3QobmFtZSkpIHtcbiAgICAvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG4gICAgdmFyIHN0eWxlID0gZWxlbS5zdHlsZTtcbiAgICB2YXIgbGVmdCA9IHN0eWxlW0xFRlRdO1xuICAgIHZhciByc0xlZnQgPSBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdO1xuXG4gICAgLy8gcHJldmVudCBmbGFzaGluZyBvZiBjb250ZW50XG4gICAgZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXSA9IGVsZW1bQ1VSUkVOVF9TVFlMRV1bTEVGVF07XG5cbiAgICAvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG4gICAgc3R5bGVbTEVGVF0gPSBuYW1lID09PSAnZm9udFNpemUnID8gJzFlbScgOiByZXQgfHwgMDtcbiAgICByZXQgPSBzdHlsZS5waXhlbExlZnQgKyBQWDtcblxuICAgIC8vIFJldmVydCB0aGUgY2hhbmdlZCB2YWx1ZXNcbiAgICBzdHlsZVtMRUZUXSA9IGxlZnQ7XG5cbiAgICBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdID0gcnNMZWZ0O1xuICB9XG4gIHJldHVybiByZXQgPT09ICcnID8gJ2F1dG8nIDogcmV0O1xufVxuXG52YXIgZ2V0Q29tcHV0ZWRTdHlsZVggPSB1bmRlZmluZWQ7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZ2V0Q29tcHV0ZWRTdHlsZVggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IF9nZXRDb21wdXRlZFN0eWxlIDogX2dldENvbXB1dGVkU3R5bGVJRTtcbn1cblxuZnVuY3Rpb24gZWFjaChhcnIsIGZuKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgZm4oYXJyW2ldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0JvcmRlckJveEZuKGVsZW0pIHtcbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGVYKGVsZW0sICdib3hTaXppbmcnKSA9PT0gJ2JvcmRlci1ib3gnO1xufVxuXG52YXIgQk9YX01PREVMUyA9IFsnbWFyZ2luJywgJ2JvcmRlcicsICdwYWRkaW5nJ107XG52YXIgQ09OVEVOVF9JTkRFWCA9IC0xO1xudmFyIFBBRERJTkdfSU5ERVggPSAyO1xudmFyIEJPUkRFUl9JTkRFWCA9IDE7XG52YXIgTUFSR0lOX0lOREVYID0gMDtcblxuZnVuY3Rpb24gc3dhcChlbGVtLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgb2xkID0ge307XG4gIHZhciBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gIHZhciBuYW1lID0gdW5kZWZpbmVkO1xuXG4gIC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBvbGRbbmFtZV0gPSBzdHlsZVtuYW1lXTtcbiAgICAgIHN0eWxlW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICBjYWxsYmFjay5jYWxsKGVsZW0pO1xuXG4gIC8vIFJldmVydCB0aGUgb2xkIHZhbHVlc1xuICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBzdHlsZVtuYW1lXSA9IG9sZFtuYW1lXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UEJNV2lkdGgoZWxlbSwgcHJvcHMsIHdoaWNoKSB7XG4gIHZhciB2YWx1ZSA9IDA7XG4gIHZhciBwcm9wID0gdW5kZWZpbmVkO1xuICB2YXIgaiA9IHVuZGVmaW5lZDtcbiAgdmFyIGkgPSB1bmRlZmluZWQ7XG4gIGZvciAoaiA9IDA7IGogPCBwcm9wcy5sZW5ndGg7IGorKykge1xuICAgIHByb3AgPSBwcm9wc1tqXTtcbiAgICBpZiAocHJvcCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHdoaWNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjc3NQcm9wID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2JvcmRlcicpIHtcbiAgICAgICAgICBjc3NQcm9wID0gcHJvcCArIHdoaWNoW2ldICsgJ1dpZHRoJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjc3NQcm9wID0gcHJvcCArIHdoaWNoW2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlICs9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgY3NzUHJvcCkpIHx8IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBBIGNydWRlIHdheSBvZiBkZXRlcm1pbmluZyBpZiBhbiBvYmplY3QgaXMgYSB3aW5kb3dcbiAqIEBtZW1iZXIgdXRpbFxuICovXG5mdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgLy8gbXVzdCB1c2UgPT0gZm9yIGllOFxuICAvKiBlc2xpbnQgZXFlcWVxOjAgKi9cbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PSBvYmoud2luZG93O1xufVxuXG52YXIgZG9tVXRpbHMgPSB7fTtcblxuZWFjaChbJ1dpZHRoJywgJ0hlaWdodCddLCBmdW5jdGlvbiAobmFtZSkge1xuICBkb21VdGlsc1snZG9jJyArIG5hbWVdID0gZnVuY3Rpb24gKHJlZldpbikge1xuICAgIHZhciBkID0gcmVmV2luLmRvY3VtZW50O1xuICAgIHJldHVybiBNYXRoLm1heChcbiAgICAvLyBmaXJlZm94IGNocm9tZSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0PCBib2R5LnNjcm9sbEhlaWdodFxuICAgIC8vIGllIHN0YW5kYXJkIG1vZGUgOiBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0PiBib2R5LnNjcm9sbEhlaWdodFxuICAgIGQuZG9jdW1lbnRFbGVtZW50WydzY3JvbGwnICsgbmFtZV0sXG4gICAgLy8gcXVpcmtzIDogZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCDmnIDlpKfnrYnkuo7lj6/op4bnqpflj6PlpJrkuIDngrnvvJ9cbiAgICBkLmJvZHlbJ3Njcm9sbCcgKyBuYW1lXSwgZG9tVXRpbHNbJ3ZpZXdwb3J0JyArIG5hbWVdKGQpKTtcbiAgfTtcblxuICBkb21VdGlsc1sndmlld3BvcnQnICsgbmFtZV0gPSBmdW5jdGlvbiAod2luKSB7XG4gICAgLy8gcGMgYnJvd3NlciBpbmNsdWRlcyBzY3JvbGxiYXIgaW4gd2luZG93LmlubmVyV2lkdGhcbiAgICB2YXIgcHJvcCA9ICdjbGllbnQnICsgbmFtZTtcbiAgICB2YXIgZG9jID0gd2luLmRvY3VtZW50O1xuICAgIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudFByb3AgPSBkb2N1bWVudEVsZW1lbnRbcHJvcF07XG4gICAgLy8g5qCH5YeG5qih5byP5Y+WIGRvY3VtZW50RWxlbWVudFxuICAgIC8vIGJhY2tjb21wYXQg5Y+WIGJvZHlcbiAgICByZXR1cm4gZG9jLmNvbXBhdE1vZGUgPT09ICdDU1MxQ29tcGF0JyAmJiBkb2N1bWVudEVsZW1lbnRQcm9wIHx8IGJvZHkgJiYgYm9keVtwcm9wXSB8fCBkb2N1bWVudEVsZW1lbnRQcm9wO1xuICB9O1xufSk7XG5cbi8qXG4g5b6X5Yiw5YWD57Sg55qE5aSn5bCP5L+h5oGvXG4gQHBhcmFtIGVsZW1cbiBAcGFyYW0gbmFtZVxuIEBwYXJhbSB7U3RyaW5nfSBbZXh0cmFdICAncGFkZGluZycgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmdcbiAnYm9yZGVyJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZyArIGJvcmRlclxuICdtYXJnaW4nIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nICsgYm9yZGVyICsgbWFyZ2luXG4gKi9cbmZ1bmN0aW9uIGdldFdIKGVsZW0sIG5hbWUsIGV4dHJhKSB7XG4gIGlmIChpc1dpbmRvdyhlbGVtKSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMudmlld3BvcnRXaWR0aChlbGVtKSA6IGRvbVV0aWxzLnZpZXdwb3J0SGVpZ2h0KGVsZW0pO1xuICB9IGVsc2UgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gJ3dpZHRoJyA/IGRvbVV0aWxzLmRvY1dpZHRoKGVsZW0pIDogZG9tVXRpbHMuZG9jSGVpZ2h0KGVsZW0pO1xuICB9XG4gIHZhciB3aGljaCA9IG5hbWUgPT09ICd3aWR0aCcgPyBbJ0xlZnQnLCAnUmlnaHQnXSA6IFsnVG9wJywgJ0JvdHRvbSddO1xuICB2YXIgYm9yZGVyQm94VmFsdWUgPSBuYW1lID09PSAnd2lkdGgnID8gZWxlbS5vZmZzZXRXaWR0aCA6IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0pO1xuICB2YXIgaXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveEZuKGVsZW0sIGNvbXB1dGVkU3R5bGUpO1xuICB2YXIgY3NzQm94VmFsdWUgPSAwO1xuICBpZiAoYm9yZGVyQm94VmFsdWUgPT0gbnVsbCB8fCBib3JkZXJCb3hWYWx1ZSA8PSAwKSB7XG4gICAgYm9yZGVyQm94VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgLy8gRmFsbCBiYWNrIHRvIGNvbXB1dGVkIHRoZW4gdW4gY29tcHV0ZWQgY3NzIGlmIG5lY2Vzc2FyeVxuICAgIGNzc0JveFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgbmFtZSk7XG4gICAgaWYgKGNzc0JveFZhbHVlID09IG51bGwgfHwgTnVtYmVyKGNzc0JveFZhbHVlKSA8IDApIHtcbiAgICAgIGNzc0JveFZhbHVlID0gZWxlbS5zdHlsZVtuYW1lXSB8fCAwO1xuICAgIH1cbiAgICAvLyBOb3JtYWxpemUgJycsIGF1dG8sIGFuZCBwcmVwYXJlIGZvciBleHRyYVxuICAgIGNzc0JveFZhbHVlID0gcGFyc2VGbG9hdChjc3NCb3hWYWx1ZSkgfHwgMDtcbiAgfVxuICBpZiAoZXh0cmEgPT09IHVuZGVmaW5lZCkge1xuICAgIGV4dHJhID0gaXNCb3JkZXJCb3ggPyBCT1JERVJfSU5ERVggOiBDT05URU5UX0lOREVYO1xuICB9XG4gIHZhciBib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3ggPSBib3JkZXJCb3hWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IGlzQm9yZGVyQm94O1xuICB2YXIgdmFsID0gYm9yZGVyQm94VmFsdWUgfHwgY3NzQm94VmFsdWU7XG4gIGlmIChleHRyYSA9PT0gQ09OVEVOVF9JTkRFWCkge1xuICAgIGlmIChib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3gpIHtcbiAgICAgIHJldHVybiB2YWwgLSBnZXRQQk1XaWR0aChlbGVtLCBbJ2JvcmRlcicsICdwYWRkaW5nJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNzc0JveFZhbHVlO1xuICB9XG4gIGlmIChib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3gpIHtcbiAgICB2YXIgcGFkZGluZyA9IGV4dHJhID09PSBQQURESU5HX0lOREVYID8gLWdldFBCTVdpZHRoKGVsZW0sIFsnYm9yZGVyJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKSA6IGdldFBCTVdpZHRoKGVsZW0sIFsnbWFyZ2luJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKTtcbiAgICByZXR1cm4gdmFsICsgKGV4dHJhID09PSBCT1JERVJfSU5ERVggPyAwIDogcGFkZGluZyk7XG4gIH1cbiAgcmV0dXJuIGNzc0JveFZhbHVlICsgZ2V0UEJNV2lkdGgoZWxlbSwgQk9YX01PREVMUy5zbGljZShleHRyYSksIHdoaWNoLCBjb21wdXRlZFN0eWxlKTtcbn1cblxudmFyIGNzc1Nob3cgPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgZGlzcGxheTogJ2Jsb2NrJ1xufTtcblxuLy8gZml4ICMxMTkgOiBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy8xMTlcbmZ1bmN0aW9uIGdldFdISWdub3JlRGlzcGxheShlbGVtKSB7XG4gIHZhciB2YWwgPSB1bmRlZmluZWQ7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAvLyBpbiBjYXNlIGVsZW0gaXMgd2luZG93XG4gIC8vIGVsZW0ub2Zmc2V0V2lkdGggPT09IHVuZGVmaW5lZFxuICBpZiAoZWxlbS5vZmZzZXRXaWR0aCAhPT0gMCkge1xuICAgIHZhbCA9IGdldFdILmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgc3dhcChlbGVtLCBjc3NTaG93LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YWwgPSBnZXRXSC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGNzcyhlbCwgbmFtZSwgdikge1xuICB2YXIgdmFsdWUgPSB2O1xuICBpZiAoKHR5cGVvZiBuYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihuYW1lKSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgaSBpbiBuYW1lKSB7XG4gICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBjc3MoZWwsIGksIG5hbWVbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlICs9ICdweCc7XG4gICAgfVxuICAgIGVsLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZVgoZWwsIG5hbWUpO1xufVxuXG5lYWNoKFsnd2lkdGgnLCAnaGVpZ2h0J10sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBmaXJzdCA9IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuICBkb21VdGlsc1snb3V0ZXInICsgZmlyc3RdID0gZnVuY3Rpb24gKGVsLCBpbmNsdWRlTWFyZ2luKSB7XG4gICAgcmV0dXJuIGVsICYmIGdldFdISWdub3JlRGlzcGxheShlbCwgbmFtZSwgaW5jbHVkZU1hcmdpbiA/IE1BUkdJTl9JTkRFWCA6IEJPUkRFUl9JTkRFWCk7XG4gIH07XG4gIHZhciB3aGljaCA9IG5hbWUgPT09ICd3aWR0aCcgPyBbJ0xlZnQnLCAnUmlnaHQnXSA6IFsnVG9wJywgJ0JvdHRvbSddO1xuXG4gIGRvbVV0aWxzW25hbWVdID0gZnVuY3Rpb24gKGVsZW0sIHZhbCkge1xuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtKTtcbiAgICAgICAgdmFyIGlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3hGbihlbGVtKTtcbiAgICAgICAgaWYgKGlzQm9yZGVyQm94KSB7XG4gICAgICAgICAgdmFsICs9IGdldFBCTVdpZHRoKGVsZW0sIFsncGFkZGluZycsICdib3JkZXInXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjc3MoZWxlbSwgbmFtZSwgdmFsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBlbGVtICYmIGdldFdISWdub3JlRGlzcGxheShlbGVtLCBuYW1lLCBDT05URU5UX0lOREVYKTtcbiAgfTtcbn0pO1xuXG4vLyDorr7nva4gZWxlbSDnm7jlr7kgZWxlbS5vd25lckRvY3VtZW50IOeahOWdkOagh1xuZnVuY3Rpb24gc2V0T2Zmc2V0KGVsZW0sIG9mZnNldCkge1xuICAvLyBzZXQgcG9zaXRpb24gZmlyc3QsIGluLWNhc2UgdG9wL2xlZnQgYXJlIHNldCBldmVuIG9uIHN0YXRpYyBlbGVtXG4gIGlmIChjc3MoZWxlbSwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgZWxlbS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gIH1cblxuICB2YXIgb2xkID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICB2YXIgcmV0ID0ge307XG4gIHZhciBjdXJyZW50ID0gdW5kZWZpbmVkO1xuICB2YXIga2V5ID0gdW5kZWZpbmVkO1xuXG4gIGZvciAoa2V5IGluIG9mZnNldCkge1xuICAgIGlmIChvZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY3VycmVudCA9IHBhcnNlRmxvYXQoY3NzKGVsZW0sIGtleSkpIHx8IDA7XG4gICAgICByZXRba2V5XSA9IGN1cnJlbnQgKyBvZmZzZXRba2V5XSAtIG9sZFtrZXldO1xuICAgIH1cbiAgfVxuICBjc3MoZWxlbSwgcmV0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyh7XG4gIGdldFdpbmRvdzogZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgICB2YXIgZG9jID0gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGU7XG4gICAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICB9LFxuICBvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldChlbCwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2V0T2Zmc2V0KGVsLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXRPZmZzZXQoZWwpO1xuICAgIH1cbiAgfSxcblxuICBpc1dpbmRvdzogaXNXaW5kb3csXG4gIGVhY2g6IGVhY2gsXG4gIGNzczogY3NzLFxuICBjbG9uZTogZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHJldFtpXSA9IG9ialtpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIG92ZXJmbG93ID0gb2JqLm92ZXJmbG93O1xuICAgIGlmIChvdmVyZmxvdykge1xuICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIHJldC5vdmVyZmxvd1tpXSA9IG9iai5vdmVyZmxvd1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuICBzY3JvbGxMZWZ0OiBmdW5jdGlvbiBzY3JvbGxMZWZ0KHcsIHYpIHtcbiAgICBpZiAoaXNXaW5kb3codykpIHtcbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGdldFNjcm9sbExlZnQodyk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8odiwgZ2V0U2Nyb2xsVG9wKHcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdy5zY3JvbGxMZWZ0O1xuICAgICAgfVxuICAgICAgdy5zY3JvbGxMZWZ0ID0gdjtcbiAgICB9XG4gIH0sXG4gIHNjcm9sbFRvcDogZnVuY3Rpb24gc2Nyb2xsVG9wKHcsIHYpIHtcbiAgICBpZiAoaXNXaW5kb3codykpIHtcbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGdldFNjcm9sbFRvcCh3KTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyhnZXRTY3JvbGxMZWZ0KHcpLCB2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdy5zY3JvbGxUb3A7XG4gICAgICB9XG4gICAgICB3LnNjcm9sbFRvcCA9IHY7XG4gICAgfVxuICB9LFxuXG4gIHZpZXdwb3J0V2lkdGg6IDAsXG4gIHZpZXdwb3J0SGVpZ2h0OiAwXG59LCBkb21VdGlscyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhlbGVtLCBjb250YWluZXIsIGNvbmZpZykge1xuICBjb25maWcgPSBjb25maWcgfHwge307XG4gIC8vIGRvY3VtZW50IOW9kuS4gOWMluWIsCB3aW5kb3dcbiAgaWYgKGNvbnRhaW5lci5ub2RlVHlwZSA9PT0gOSkge1xuICAgIGNvbnRhaW5lciA9IHV0aWwuZ2V0V2luZG93KGNvbnRhaW5lcik7XG4gIH1cblxuICB2YXIgYWxsb3dIb3Jpem9udGFsU2Nyb2xsID0gY29uZmlnLmFsbG93SG9yaXpvbnRhbFNjcm9sbDtcbiAgdmFyIG9ubHlTY3JvbGxJZk5lZWRlZCA9IGNvbmZpZy5vbmx5U2Nyb2xsSWZOZWVkZWQ7XG4gIHZhciBhbGlnbldpdGhUb3AgPSBjb25maWcuYWxpZ25XaXRoVG9wO1xuICB2YXIgYWxpZ25XaXRoTGVmdCA9IGNvbmZpZy5hbGlnbldpdGhMZWZ0O1xuICB2YXIgb2Zmc2V0VG9wID0gY29uZmlnLm9mZnNldFRvcCB8fCAwO1xuICB2YXIgb2Zmc2V0TGVmdCA9IGNvbmZpZy5vZmZzZXRMZWZ0IHx8IDA7XG4gIHZhciBvZmZzZXRCb3R0b20gPSBjb25maWcub2Zmc2V0Qm90dG9tIHx8IDA7XG4gIHZhciBvZmZzZXRSaWdodCA9IGNvbmZpZy5vZmZzZXRSaWdodCB8fCAwO1xuXG4gIGFsbG93SG9yaXpvbnRhbFNjcm9sbCA9IGFsbG93SG9yaXpvbnRhbFNjcm9sbCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFsbG93SG9yaXpvbnRhbFNjcm9sbDtcblxuICB2YXIgaXNXaW4gPSB1dGlsLmlzV2luZG93KGNvbnRhaW5lcik7XG4gIHZhciBlbGVtT2Zmc2V0ID0gdXRpbC5vZmZzZXQoZWxlbSk7XG4gIHZhciBlaCA9IHV0aWwub3V0ZXJIZWlnaHQoZWxlbSk7XG4gIHZhciBldyA9IHV0aWwub3V0ZXJXaWR0aChlbGVtKTtcbiAgdmFyIGNvbnRhaW5lck9mZnNldCA9IHVuZGVmaW5lZDtcbiAgdmFyIGNoID0gdW5kZWZpbmVkO1xuICB2YXIgY3cgPSB1bmRlZmluZWQ7XG4gIHZhciBjb250YWluZXJTY3JvbGwgPSB1bmRlZmluZWQ7XG4gIHZhciBkaWZmVG9wID0gdW5kZWZpbmVkO1xuICB2YXIgZGlmZkJvdHRvbSA9IHVuZGVmaW5lZDtcbiAgdmFyIHdpbiA9IHVuZGVmaW5lZDtcbiAgdmFyIHdpblNjcm9sbCA9IHVuZGVmaW5lZDtcbiAgdmFyIHd3ID0gdW5kZWZpbmVkO1xuICB2YXIgd2ggPSB1bmRlZmluZWQ7XG5cbiAgaWYgKGlzV2luKSB7XG4gICAgd2luID0gY29udGFpbmVyO1xuICAgIHdoID0gdXRpbC5oZWlnaHQod2luKTtcbiAgICB3dyA9IHV0aWwud2lkdGgod2luKTtcbiAgICB3aW5TY3JvbGwgPSB7XG4gICAgICBsZWZ0OiB1dGlsLnNjcm9sbExlZnQod2luKSxcbiAgICAgIHRvcDogdXRpbC5zY3JvbGxUb3Aod2luKVxuICAgIH07XG4gICAgLy8gZWxlbSDnm7jlr7kgY29udGFpbmVyIOWPr+inhuinhueql+eahOi3neemu1xuICAgIGRpZmZUb3AgPSB7XG4gICAgICBsZWZ0OiBlbGVtT2Zmc2V0LmxlZnQgLSB3aW5TY3JvbGwubGVmdCAtIG9mZnNldExlZnQsXG4gICAgICB0b3A6IGVsZW1PZmZzZXQudG9wIC0gd2luU2Nyb2xsLnRvcCAtIG9mZnNldFRvcFxuICAgIH07XG4gICAgZGlmZkJvdHRvbSA9IHtcbiAgICAgIGxlZnQ6IGVsZW1PZmZzZXQubGVmdCArIGV3IC0gKHdpblNjcm9sbC5sZWZ0ICsgd3cpICsgb2Zmc2V0UmlnaHQsXG4gICAgICB0b3A6IGVsZW1PZmZzZXQudG9wICsgZWggLSAod2luU2Nyb2xsLnRvcCArIHdoKSArIG9mZnNldEJvdHRvbVxuICAgIH07XG4gICAgY29udGFpbmVyU2Nyb2xsID0gd2luU2Nyb2xsO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lck9mZnNldCA9IHV0aWwub2Zmc2V0KGNvbnRhaW5lcik7XG4gICAgY2ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgIGN3ID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIGNvbnRhaW5lclNjcm9sbCA9IHtcbiAgICAgIGxlZnQ6IGNvbnRhaW5lci5zY3JvbGxMZWZ0LFxuICAgICAgdG9wOiBjb250YWluZXIuc2Nyb2xsVG9wXG4gICAgfTtcbiAgICAvLyBlbGVtIOebuOWvuSBjb250YWluZXIg5Y+v6KeG6KeG56qX55qE6Led56a7XG4gICAgLy8g5rOo5oSP6L655qGGLCBvZmZzZXQg5piv6L655qGG5Yiw5qC56IqC54K5XG4gICAgZGlmZlRvcCA9IHtcbiAgICAgIGxlZnQ6IGVsZW1PZmZzZXQubGVmdCAtIChjb250YWluZXJPZmZzZXQubGVmdCArIChwYXJzZUZsb2F0KHV0aWwuY3NzKGNvbnRhaW5lciwgJ2JvcmRlckxlZnRXaWR0aCcpKSB8fCAwKSkgLSBvZmZzZXRMZWZ0LFxuICAgICAgdG9wOiBlbGVtT2Zmc2V0LnRvcCAtIChjb250YWluZXJPZmZzZXQudG9wICsgKHBhcnNlRmxvYXQodXRpbC5jc3MoY29udGFpbmVyLCAnYm9yZGVyVG9wV2lkdGgnKSkgfHwgMCkpIC0gb2Zmc2V0VG9wXG4gICAgfTtcbiAgICBkaWZmQm90dG9tID0ge1xuICAgICAgbGVmdDogZWxlbU9mZnNldC5sZWZ0ICsgZXcgLSAoY29udGFpbmVyT2Zmc2V0LmxlZnQgKyBjdyArIChwYXJzZUZsb2F0KHV0aWwuY3NzKGNvbnRhaW5lciwgJ2JvcmRlclJpZ2h0V2lkdGgnKSkgfHwgMCkpICsgb2Zmc2V0UmlnaHQsXG4gICAgICB0b3A6IGVsZW1PZmZzZXQudG9wICsgZWggLSAoY29udGFpbmVyT2Zmc2V0LnRvcCArIGNoICsgKHBhcnNlRmxvYXQodXRpbC5jc3MoY29udGFpbmVyLCAnYm9yZGVyQm90dG9tV2lkdGgnKSkgfHwgMCkpICsgb2Zmc2V0Qm90dG9tXG4gICAgfTtcbiAgfVxuXG4gIGlmIChkaWZmVG9wLnRvcCA8IDAgfHwgZGlmZkJvdHRvbS50b3AgPiAwKSB7XG4gICAgLy8g5by65Yi25ZCR5LiKXG4gICAgaWYgKGFsaWduV2l0aFRvcCA9PT0gdHJ1ZSkge1xuICAgICAgdXRpbC5zY3JvbGxUb3AoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwudG9wICsgZGlmZlRvcC50b3ApO1xuICAgIH0gZWxzZSBpZiAoYWxpZ25XaXRoVG9wID09PSBmYWxzZSkge1xuICAgICAgdXRpbC5zY3JvbGxUb3AoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwudG9wICsgZGlmZkJvdHRvbS50b3ApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDoh6rliqjosIPmlbRcbiAgICAgIGlmIChkaWZmVG9wLnRvcCA8IDApIHtcbiAgICAgICAgdXRpbC5zY3JvbGxUb3AoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwudG9wICsgZGlmZlRvcC50b3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXRpbC5zY3JvbGxUb3AoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwudG9wICsgZGlmZkJvdHRvbS50b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoIW9ubHlTY3JvbGxJZk5lZWRlZCkge1xuICAgICAgYWxpZ25XaXRoVG9wID0gYWxpZ25XaXRoVG9wID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFhbGlnbldpdGhUb3A7XG4gICAgICBpZiAoYWxpZ25XaXRoVG9wKSB7XG4gICAgICAgIHV0aWwuc2Nyb2xsVG9wKGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLnRvcCArIGRpZmZUb3AudG9wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHV0aWwuc2Nyb2xsVG9wKGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLnRvcCArIGRpZmZCb3R0b20udG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWxsb3dIb3Jpem9udGFsU2Nyb2xsKSB7XG4gICAgaWYgKGRpZmZUb3AubGVmdCA8IDAgfHwgZGlmZkJvdHRvbS5sZWZ0ID4gMCkge1xuICAgICAgLy8g5by65Yi25ZCR5LiKXG4gICAgICBpZiAoYWxpZ25XaXRoTGVmdCA9PT0gdHJ1ZSkge1xuICAgICAgICB1dGlsLnNjcm9sbExlZnQoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwubGVmdCArIGRpZmZUb3AubGVmdCk7XG4gICAgICB9IGVsc2UgaWYgKGFsaWduV2l0aExlZnQgPT09IGZhbHNlKSB7XG4gICAgICAgIHV0aWwuc2Nyb2xsTGVmdChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC5sZWZ0ICsgZGlmZkJvdHRvbS5sZWZ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOiHquWKqOiwg+aVtFxuICAgICAgICBpZiAoZGlmZlRvcC5sZWZ0IDwgMCkge1xuICAgICAgICAgIHV0aWwuc2Nyb2xsTGVmdChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC5sZWZ0ICsgZGlmZlRvcC5sZWZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1dGlsLnNjcm9sbExlZnQoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwubGVmdCArIGRpZmZCb3R0b20ubGVmdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFvbmx5U2Nyb2xsSWZOZWVkZWQpIHtcbiAgICAgICAgYWxpZ25XaXRoTGVmdCA9IGFsaWduV2l0aExlZnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWFsaWduV2l0aExlZnQ7XG4gICAgICAgIGlmIChhbGlnbldpdGhMZWZ0KSB7XG4gICAgICAgICAgdXRpbC5zY3JvbGxMZWZ0KGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLmxlZnQgKyBkaWZmVG9wLmxlZnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHV0aWwuc2Nyb2xsTGVmdChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC5sZWZ0ICsgZGlmZkJvdHRvbS5sZWZ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbEludG9WaWV3OyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RvbS1zY3JvbGwtaW50by12aWV3Jyk7IiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VIYXMob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VIYXM7XG4iLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGV4aXN0cyBvbiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICBpZiAoIShyZXN1bHQgPSBvYmplY3QgIT0gbnVsbCAmJiBoYXNGdW5jKG9iamVjdCwga2V5KSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgfVxuICBpZiAocmVzdWx0IHx8ICsraW5kZXggIT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBsZW5ndGggPSBvYmplY3QgPT0gbnVsbCA/IDAgOiBvYmplY3QubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUGF0aDtcbiIsInZhciBiYXNlSGFzID0gcmVxdWlyZSgnLi9fYmFzZUhhcycpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogeyAnYic6IDIgfSB9O1xuICogdmFyIG90aGVyID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzKG9iamVjdCwgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhcyhvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhcyhvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzKG90aGVyLCAnYScpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzKG9iamVjdCwgcGF0aCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgaGFzUGF0aChvYmplY3QsIHBhdGgsIGJhc2VIYXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhcztcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlPYmplY3Q7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIGVtcHR5T2JqZWN0ID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlPYmplY3QnKTtcbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xufVxuXG52YXIgTUlYSU5TX0tFWSA9ICdtaXhpbnMnO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gYWxsb3cgdGhlIGNyZWF0aW9uIG9mIGFub255bW91cyBmdW5jdGlvbnMgd2hpY2ggZG8gbm90XG4vLyBoYXZlIC5uYW1lIHNldCB0byB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgYmVpbmcgYXNzaWduZWQgdG8uXG5mdW5jdGlvbiBpZGVudGl0eShmbikge1xuICByZXR1cm4gZm47XG59XG5cbnZhciBSZWFjdFByb3BUeXBlTG9jYXRpb25OYW1lcztcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzID0ge1xuICAgIHByb3A6ICdwcm9wJyxcbiAgICBjb250ZXh0OiAnY29udGV4dCcsXG4gICAgY2hpbGRDb250ZXh0OiAnY2hpbGQgY29udGV4dCdcbiAgfTtcbn0gZWxzZSB7XG4gIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzID0ge307XG59XG5cbmZ1bmN0aW9uIGZhY3RvcnkoUmVhY3RDb21wb25lbnQsIGlzVmFsaWRFbGVtZW50LCBSZWFjdE5vb3BVcGRhdGVRdWV1ZSkge1xuICAvKipcbiAgICogUG9saWNpZXMgdGhhdCBkZXNjcmliZSBtZXRob2RzIGluIGBSZWFjdENsYXNzSW50ZXJmYWNlYC5cbiAgICovXG5cbiAgdmFyIGluamVjdGVkTWl4aW5zID0gW107XG5cbiAgLyoqXG4gICAqIENvbXBvc2l0ZSBjb21wb25lbnRzIGFyZSBoaWdoZXItbGV2ZWwgY29tcG9uZW50cyB0aGF0IGNvbXBvc2Ugb3RoZXIgY29tcG9zaXRlXG4gICAqIG9yIGhvc3QgY29tcG9uZW50cy5cbiAgICpcbiAgICogVG8gY3JlYXRlIGEgbmV3IHR5cGUgb2YgYFJlYWN0Q2xhc3NgLCBwYXNzIGEgc3BlY2lmaWNhdGlvbiBvZlxuICAgKiB5b3VyIG5ldyBjbGFzcyB0byBgUmVhY3QuY3JlYXRlQ2xhc3NgLiBUaGUgb25seSByZXF1aXJlbWVudCBvZiB5b3VyIGNsYXNzXG4gICAqIHNwZWNpZmljYXRpb24gaXMgdGhhdCB5b3UgaW1wbGVtZW50IGEgYHJlbmRlcmAgbWV0aG9kLlxuICAgKlxuICAgKiAgIHZhciBNeUNvbXBvbmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAqICAgICAgIHJldHVybiA8ZGl2PkhlbGxvIFdvcmxkPC9kaXY+O1xuICAgKiAgICAgfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBUaGUgY2xhc3Mgc3BlY2lmaWNhdGlvbiBzdXBwb3J0cyBhIHNwZWNpZmljIHByb3RvY29sIG9mIG1ldGhvZHMgdGhhdCBoYXZlXG4gICAqIHNwZWNpYWwgbWVhbmluZyAoZS5nLiBgcmVuZGVyYCkuIFNlZSBgUmVhY3RDbGFzc0ludGVyZmFjZWAgZm9yXG4gICAqIG1vcmUgdGhlIGNvbXByZWhlbnNpdmUgcHJvdG9jb2wuIEFueSBvdGhlciBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIGluIHRoZVxuICAgKiBjbGFzcyBzcGVjaWZpY2F0aW9uIHdpbGwgYmUgYXZhaWxhYmxlIG9uIHRoZSBwcm90b3R5cGUuXG4gICAqXG4gICAqIEBpbnRlcmZhY2UgUmVhY3RDbGFzc0ludGVyZmFjZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHZhciBSZWFjdENsYXNzSW50ZXJmYWNlID0ge1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIE1peGluIG9iamVjdHMgdG8gaW5jbHVkZSB3aGVuIGRlZmluaW5nIHlvdXIgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIG1peGluczogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgdGhhdCBzaG91bGQgYmUgZGVmaW5lZCBvblxuICAgICAqIHRoZSBjb21wb25lbnQncyBjb25zdHJ1Y3RvciBpbnN0ZWFkIG9mIGl0cyBwcm90b3R5cGUgKHN0YXRpYyBtZXRob2RzKS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgc3RhdGljczogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIERlZmluaXRpb24gb2YgcHJvcCB0eXBlcyBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIHByb3BUeXBlczogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIERlZmluaXRpb24gb2YgY29udGV4dCB0eXBlcyBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNvbnRleHRUeXBlczogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIERlZmluaXRpb24gb2YgY29udGV4dCB0eXBlcyB0aGlzIGNvbXBvbmVudCBzZXRzIGZvciBpdHMgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLy8gPT09PSBEZWZpbml0aW9uIG1ldGhvZHMgPT09PVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC4gVmFsdWVzIGluIHRoZSBtYXBwaW5nIHdpbGwgYmUgc2V0IG9uXG4gICAgICogYHRoaXMucHJvcHNgIGlmIHRoYXQgcHJvcCBpcyBub3Qgc3BlY2lmaWVkIChpLmUuIHVzaW5nIGFuIGBpbmAgY2hlY2spLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCBiZWZvcmUgYGdldEluaXRpYWxTdGF0ZWAgYW5kIHRoZXJlZm9yZSBjYW5ub3QgcmVseVxuICAgICAqIG9uIGB0aGlzLnN0YXRlYCBvciB1c2UgYHRoaXMuc2V0U3RhdGVgLlxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wczogJ0RFRklORV9NQU5ZX01FUkdFRCcsXG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uY2UgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC4gVGhlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHVzZWRcbiAgICAgKiBhcyB0aGUgaW5pdGlhbCB2YWx1ZSBvZiBgdGhpcy5zdGF0ZWAuXG4gICAgICpcbiAgICAgKiAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICogICAgIHJldHVybiB7XG4gICAgICogICAgICAgaXNPbjogZmFsc2UsXG4gICAgICogICAgICAgZm9vQmF6OiBuZXcgQmF6Rm9vKClcbiAgICAgKiAgICAgfVxuICAgICAqICAgfVxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGdldEluaXRpYWxTdGF0ZTogJ0RFRklORV9NQU5ZX01FUkdFRCcsXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgZ2V0Q2hpbGRDb250ZXh0OiAnREVGSU5FX01BTllfTUVSR0VEJyxcblxuICAgIC8qKlxuICAgICAqIFVzZXMgcHJvcHMgZnJvbSBgdGhpcy5wcm9wc2AgYW5kIHN0YXRlIGZyb20gYHRoaXMuc3RhdGVgIHRvIHJlbmRlciB0aGVcbiAgICAgKiBzdHJ1Y3R1cmUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIE5vIGd1YXJhbnRlZXMgYXJlIG1hZGUgYWJvdXQgd2hlbiBvciBob3cgb2Z0ZW4gdGhpcyBtZXRob2QgaXMgaW52b2tlZCwgc29cbiAgICAgKiBpdCBtdXN0IG5vdCBoYXZlIHNpZGUgZWZmZWN0cy5cbiAgICAgKlxuICAgICAqICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgKiAgICAgdmFyIG5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG4gICAgICogICAgIHJldHVybiA8ZGl2PkhlbGxvLCB7bmFtZX0hPC9kaXY+O1xuICAgICAqICAgfVxuICAgICAqXG4gICAgICogQHJldHVybiB7UmVhY3RDb21wb25lbnR9XG4gICAgICogQHJlcXVpcmVkXG4gICAgICovXG4gICAgcmVuZGVyOiAnREVGSU5FX09OQ0UnLFxuXG4gICAgLy8gPT09PSBEZWxlZ2F0ZSBtZXRob2RzID09PT1cblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGluaXRpYWxseSBjcmVhdGVkIGFuZCBhYm91dCB0byBiZSBtb3VudGVkLlxuICAgICAqIFRoaXMgbWF5IGhhdmUgc2lkZSBlZmZlY3RzLCBidXQgYW55IGV4dGVybmFsIHN1YnNjcmlwdGlvbnMgb3IgZGF0YSBjcmVhdGVkXG4gICAgICogYnkgdGhpcyBtZXRob2QgbXVzdCBiZSBjbGVhbmVkIHVwIGluIGBjb21wb25lbnRXaWxsVW5tb3VudGAuXG4gICAgICpcbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBjb21wb25lbnRXaWxsTW91bnQ6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIGFuZCBoYXMgYSBET00gcmVwcmVzZW50YXRpb24uXG4gICAgICogSG93ZXZlciwgdGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgdGhlIERPTSBub2RlIGlzIGluIHRoZSBkb2N1bWVudC5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIG9wZXJhdGUgb24gdGhlIERPTSB3aGVuIHRoZSBjb21wb25lbnQgaGFzXG4gICAgICogYmVlbiBtb3VudGVkIChpbml0aWFsaXplZCBhbmQgcmVuZGVyZWQpIGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gcm9vdE5vZGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQuXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50RGlkTW91bnQ6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIGJlZm9yZSB0aGUgY29tcG9uZW50IHJlY2VpdmVzIG5ldyBwcm9wcy5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIHJlYWN0IHRvIGEgcHJvcCB0cmFuc2l0aW9uIGJ5IHVwZGF0aW5nIHRoZVxuICAgICAqIHN0YXRlIHVzaW5nIGB0aGlzLnNldFN0YXRlYC4gQ3VycmVudCBwcm9wcyBhcmUgYWNjZXNzZWQgdmlhIGB0aGlzLnByb3BzYC5cbiAgICAgKlxuICAgICAqICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0Q29udGV4dCkge1xuICAgICAqICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgKiAgICAgICBsaWtlc0luY3JlYXNpbmc6IG5leHRQcm9wcy5saWtlQ291bnQgPiB0aGlzLnByb3BzLmxpa2VDb3VudFxuICAgICAqICAgICB9KTtcbiAgICAgKiAgIH1cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoZXJlIGlzIG5vIGVxdWl2YWxlbnQgYGNvbXBvbmVudFdpbGxSZWNlaXZlU3RhdGVgLiBBbiBpbmNvbWluZyBwcm9wXG4gICAgICogdHJhbnNpdGlvbiBtYXkgY2F1c2UgYSBzdGF0ZSBjaGFuZ2UsIGJ1dCB0aGUgb3Bwb3NpdGUgaXMgbm90IHRydWUuIElmIHlvdVxuICAgICAqIG5lZWQgaXQsIHlvdSBhcmUgcHJvYmFibHkgbG9va2luZyBmb3IgYGNvbXBvbmVudFdpbGxVcGRhdGVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoaWxlIGRlY2lkaW5nIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIHVwZGF0ZWQgYXMgYSByZXN1bHQgb2ZcbiAgICAgKiByZWNlaXZpbmcgbmV3IHByb3BzLCBzdGF0ZSBhbmQvb3IgY29udGV4dC5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIGByZXR1cm4gZmFsc2VgIHdoZW4geW91J3JlIGNlcnRhaW4gdGhhdCB0aGVcbiAgICAgKiB0cmFuc2l0aW9uIHRvIHRoZSBuZXcgcHJvcHMvc3RhdGUvY29udGV4dCB3aWxsIG5vdCByZXF1aXJlIGEgY29tcG9uZW50XG4gICAgICogdXBkYXRlLlxuICAgICAqXG4gICAgICogICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgICAqICAgICByZXR1cm4gIWVxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcykgfHxcbiAgICAgKiAgICAgICAhZXF1YWwobmV4dFN0YXRlLCB0aGlzLnN0YXRlKSB8fFxuICAgICAqICAgICAgICFlcXVhbChuZXh0Q29udGV4dCwgdGhpcy5jb250ZXh0KTtcbiAgICAgKiAgIH1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0UHJvcHNcbiAgICAgKiBAcGFyYW0gez9vYmplY3R9IG5leHRTdGF0ZVxuICAgICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dENvbnRleHRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIHVwZGF0ZS5cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGU6ICdERUZJTkVfT05DRScsXG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBhYm91dCB0byB1cGRhdGUgZHVlIHRvIGEgdHJhbnNpdGlvbiBmcm9tXG4gICAgICogYHRoaXMucHJvcHNgLCBgdGhpcy5zdGF0ZWAgYW5kIGB0aGlzLmNvbnRleHRgIHRvIGBuZXh0UHJvcHNgLCBgbmV4dFN0YXRlYFxuICAgICAqIGFuZCBgbmV4dENvbnRleHRgLlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gcGVyZm9ybSBwcmVwYXJhdGlvbiBiZWZvcmUgYW4gdXBkYXRlIG9jY3Vycy5cbiAgICAgKlxuICAgICAqIE5PVEU6IFlvdSAqKmNhbm5vdCoqIHVzZSBgdGhpcy5zZXRTdGF0ZSgpYCBpbiB0aGlzIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0UHJvcHNcbiAgICAgKiBAcGFyYW0gez9vYmplY3R9IG5leHRTdGF0ZVxuICAgICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dENvbnRleHRcbiAgICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZTogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50J3MgRE9NIHJlcHJlc2VudGF0aW9uIGhhcyBiZWVuIHVwZGF0ZWQuXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBvcGVyYXRlIG9uIHRoZSBET00gd2hlbiB0aGUgY29tcG9uZW50IGhhc1xuICAgICAqIGJlZW4gdXBkYXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcmV2UHJvcHNcbiAgICAgKiBAcGFyYW0gez9vYmplY3R9IHByZXZTdGF0ZVxuICAgICAqIEBwYXJhbSB7P29iamVjdH0gcHJldkNvbnRleHRcbiAgICAgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IHJvb3ROb2RlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNvbXBvbmVudERpZFVwZGF0ZTogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIGJlIHJlbW92ZWQgZnJvbSBpdHMgcGFyZW50IGFuZCBoYXZlXG4gICAgICogaXRzIERPTSByZXByZXNlbnRhdGlvbiBkZXN0cm95ZWQuXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBkZWFsbG9jYXRlIGFueSBleHRlcm5hbCByZXNvdXJjZXMuXG4gICAgICpcbiAgICAgKiBOT1RFOiBUaGVyZSBpcyBubyBgY29tcG9uZW50RGlkVW5tb3VudGAgc2luY2UgeW91ciBjb21wb25lbnQgd2lsbCBoYXZlIGJlZW5cbiAgICAgKiBkZXN0cm95ZWQgYnkgdGhhdCBwb2ludC5cbiAgICAgKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZW1lbnQgZm9yIChkZXByZWNhdGVkKSBgY29tcG9uZW50V2lsbE1vdW50YC5cbiAgICAgKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQ6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlbWVudCBmb3IgKGRlcHJlY2F0ZWQpIGBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzYC5cbiAgICAgKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZW1lbnQgZm9yIChkZXByZWNhdGVkKSBgY29tcG9uZW50V2lsbFVwZGF0ZWAuXG4gICAgICpcbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZTogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8vID09PT0gQWR2YW5jZWQgbWV0aG9kcyA9PT09XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBjb21wb25lbnQncyBjdXJyZW50bHkgbW91bnRlZCBET00gcmVwcmVzZW50YXRpb24uXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIGltcGxlbWVudHMgUmVhY3QncyByZW5kZXJpbmcgYW5kIHJlY29uY2lsaWF0aW9uIGFsZ29yaXRobS5cbiAgICAgKiBTb3BoaXN0aWNhdGVkIGNsaWVudHMgbWF5IHdpc2ggdG8gb3ZlcnJpZGUgdGhpcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVhY3RSZWNvbmNpbGVUcmFuc2FjdGlvbn0gdHJhbnNhY3Rpb25cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKiBAb3ZlcnJpZGFibGVcbiAgICAgKi9cbiAgICB1cGRhdGVDb21wb25lbnQ6ICdPVkVSUklERV9CQVNFJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaW1pbGFyIHRvIFJlYWN0Q2xhc3NJbnRlcmZhY2UgYnV0IGZvciBzdGF0aWMgbWV0aG9kcy5cbiAgICovXG4gIHZhciBSZWFjdENsYXNzU3RhdGljSW50ZXJmYWNlID0ge1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgYWZ0ZXIgYSBjb21wb25lbnQgaXMgaW5zdGFudGlhdGVkIGFuZCB3aGVuIGl0XG4gICAgICogcmVjZWl2ZXMgbmV3IHByb3BzLiBSZXR1cm4gYW4gb2JqZWN0IHRvIHVwZGF0ZSBzdGF0ZSBpbiByZXNwb25zZSB0b1xuICAgICAqIHByb3AgY2hhbmdlcy4gUmV0dXJuIG51bGwgdG8gaW5kaWNhdGUgbm8gY2hhbmdlIHRvIHN0YXRlLlxuICAgICAqXG4gICAgICogSWYgYW4gb2JqZWN0IGlzIHJldHVybmVkLCBpdHMga2V5cyB3aWxsIGJlIG1lcmdlZCBpbnRvIHRoZSBleGlzdGluZyBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge29iamVjdCB8fCBudWxsfVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogJ0RFRklORV9NQU5ZX01FUkdFRCdcbiAgfTtcblxuICAvKipcbiAgICogTWFwcGluZyBmcm9tIGNsYXNzIHNwZWNpZmljYXRpb24ga2V5cyB0byBzcGVjaWFsIHByb2Nlc3NpbmcgZnVuY3Rpb25zLlxuICAgKlxuICAgKiBBbHRob3VnaCB0aGVzZSBhcmUgZGVjbGFyZWQgbGlrZSBpbnN0YW5jZSBwcm9wZXJ0aWVzIGluIHRoZSBzcGVjaWZpY2F0aW9uXG4gICAqIHdoZW4gZGVmaW5pbmcgY2xhc3NlcyB1c2luZyBgUmVhY3QuY3JlYXRlQ2xhc3NgLCB0aGV5IGFyZSBhY3R1YWxseSBzdGF0aWNcbiAgICogYW5kIGFyZSBhY2Nlc3NpYmxlIG9uIHRoZSBjb25zdHJ1Y3RvciBpbnN0ZWFkIG9mIHRoZSBwcm90b3R5cGUuIERlc3BpdGVcbiAgICogYmVpbmcgc3RhdGljLCB0aGV5IG11c3QgYmUgZGVmaW5lZCBvdXRzaWRlIG9mIHRoZSBcInN0YXRpY3NcIiBrZXkgdW5kZXJcbiAgICogd2hpY2ggYWxsIG90aGVyIHN0YXRpYyBtZXRob2RzIGFyZSBkZWZpbmVkLlxuICAgKi9cbiAgdmFyIFJFU0VSVkVEX1NQRUNfS0VZUyA9IHtcbiAgICBkaXNwbGF5TmFtZTogZnVuY3Rpb24oQ29uc3RydWN0b3IsIGRpc3BsYXlOYW1lKSB7XG4gICAgICBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIH0sXG4gICAgbWl4aW5zOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgbWl4aW5zKSB7XG4gICAgICBpZiAobWl4aW5zKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWl4aW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIG1peGluc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgY2hpbGRDb250ZXh0VHlwZXMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhbGlkYXRlVHlwZURlZihDb25zdHJ1Y3RvciwgY2hpbGRDb250ZXh0VHlwZXMsICdjaGlsZENvbnRleHQnKTtcbiAgICAgIH1cbiAgICAgIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzID0gX2Fzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzLFxuICAgICAgICBjaGlsZENvbnRleHRUeXBlc1xuICAgICAgKTtcbiAgICB9LFxuICAgIGNvbnRleHRUeXBlczogZnVuY3Rpb24oQ29uc3RydWN0b3IsIGNvbnRleHRUeXBlcykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFsaWRhdGVUeXBlRGVmKENvbnN0cnVjdG9yLCBjb250ZXh0VHlwZXMsICdjb250ZXh0Jyk7XG4gICAgICB9XG4gICAgICBDb25zdHJ1Y3Rvci5jb250ZXh0VHlwZXMgPSBfYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgQ29uc3RydWN0b3IuY29udGV4dFR5cGVzLFxuICAgICAgICBjb250ZXh0VHlwZXNcbiAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTcGVjaWFsIGNhc2UgZ2V0RGVmYXVsdFByb3BzIHdoaWNoIHNob3VsZCBtb3ZlIGludG8gc3RhdGljcyBidXQgcmVxdWlyZXNcbiAgICAgKiBhdXRvbWF0aWMgbWVyZ2luZy5cbiAgICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBnZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzID0gY3JlYXRlTWVyZ2VkUmVzdWx0RnVuY3Rpb24oXG4gICAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzLFxuICAgICAgICAgIGdldERlZmF1bHRQcm9wc1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzID0gZ2V0RGVmYXVsdFByb3BzO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJvcFR5cGVzOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgcHJvcFR5cGVzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIHByb3BUeXBlcywgJ3Byb3AnKTtcbiAgICAgIH1cbiAgICAgIENvbnN0cnVjdG9yLnByb3BUeXBlcyA9IF9hc3NpZ24oe30sIENvbnN0cnVjdG9yLnByb3BUeXBlcywgcHJvcFR5cGVzKTtcbiAgICB9LFxuICAgIHN0YXRpY3M6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBzdGF0aWNzKSB7XG4gICAgICBtaXhTdGF0aWNTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3RhdGljcyk7XG4gICAgfSxcbiAgICBhdXRvYmluZDogZnVuY3Rpb24oKSB7fVxuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVHlwZURlZihDb25zdHJ1Y3RvciwgdHlwZURlZiwgbG9jYXRpb24pIHtcbiAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiB0eXBlRGVmKSB7XG4gICAgICBpZiAodHlwZURlZi5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgLy8gdXNlIGEgd2FybmluZyBpbnN0ZWFkIG9mIGFuIF9pbnZhcmlhbnQgc28gY29tcG9uZW50c1xuICAgICAgICAvLyBkb24ndCBzaG93IHVwIGluIHByb2QgYnV0IG9ubHkgaW4gX19ERVZfX1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICB0eXBlb2YgdHlwZURlZltwcm9wTmFtZV0gPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICtcbiAgICAgICAgICAgICAgJ1JlYWN0LlByb3BUeXBlcy4nLFxuICAgICAgICAgICAgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q2xhc3MnLFxuICAgICAgICAgICAgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dLFxuICAgICAgICAgICAgcHJvcE5hbWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVNZXRob2RPdmVycmlkZShpc0FscmVhZHlEZWZpbmVkLCBuYW1lKSB7XG4gICAgdmFyIHNwZWNQb2xpY3kgPSBSZWFjdENsYXNzSW50ZXJmYWNlLmhhc093blByb3BlcnR5KG5hbWUpXG4gICAgICA/IFJlYWN0Q2xhc3NJbnRlcmZhY2VbbmFtZV1cbiAgICAgIDogbnVsbDtcblxuICAgIC8vIERpc2FsbG93IG92ZXJyaWRpbmcgb2YgYmFzZSBjbGFzcyBtZXRob2RzIHVubGVzcyBleHBsaWNpdGx5IGFsbG93ZWQuXG4gICAgaWYgKFJlYWN0Q2xhc3NNaXhpbi5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgX2ludmFyaWFudChcbiAgICAgICAgc3BlY1BvbGljeSA9PT0gJ09WRVJSSURFX0JBU0UnLFxuICAgICAgICAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIG92ZXJyaWRlICcgK1xuICAgICAgICAgICdgJXNgIGZyb20geW91ciBjbGFzcyBzcGVjaWZpY2F0aW9uLiBFbnN1cmUgdGhhdCB5b3VyIG1ldGhvZCBuYW1lcyAnICtcbiAgICAgICAgICAnZG8gbm90IG92ZXJsYXAgd2l0aCBSZWFjdCBtZXRob2RzLicsXG4gICAgICAgIG5hbWVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWxsb3cgZGVmaW5pbmcgbWV0aG9kcyBtb3JlIHRoYW4gb25jZSB1bmxlc3MgZXhwbGljaXRseSBhbGxvd2VkLlxuICAgIGlmIChpc0FscmVhZHlEZWZpbmVkKSB7XG4gICAgICBfaW52YXJpYW50KFxuICAgICAgICBzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTlknIHx8IHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuICAgICAgICAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSAnICtcbiAgICAgICAgICAnYCVzYCBvbiB5b3VyIGNvbXBvbmVudCBtb3JlIHRoYW4gb25jZS4gVGhpcyBjb25mbGljdCBtYXkgYmUgZHVlICcgK1xuICAgICAgICAgICd0byBhIG1peGluLicsXG4gICAgICAgIG5hbWVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1peGluIGhlbHBlciB3aGljaCBoYW5kbGVzIHBvbGljeSB2YWxpZGF0aW9uIGFuZCByZXNlcnZlZFxuICAgKiBzcGVjaWZpY2F0aW9uIGtleXMgd2hlbiBidWlsZGluZyBSZWFjdCBjbGFzc2VzLlxuICAgKi9cbiAgZnVuY3Rpb24gbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIHNwZWMpIHtcbiAgICBpZiAoIXNwZWMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciB0eXBlb2ZTcGVjID0gdHlwZW9mIHNwZWM7XG4gICAgICAgIHZhciBpc01peGluVmFsaWQgPSB0eXBlb2ZTcGVjID09PSAnb2JqZWN0JyAmJiBzcGVjICE9PSBudWxsO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgIGlzTWl4aW5WYWxpZCxcbiAgICAgICAgICAgIFwiJXM6IFlvdSdyZSBhdHRlbXB0aW5nIHRvIGluY2x1ZGUgYSBtaXhpbiB0aGF0IGlzIGVpdGhlciBudWxsIFwiICtcbiAgICAgICAgICAgICAgJ29yIG5vdCBhbiBvYmplY3QuIENoZWNrIHRoZSBtaXhpbnMgaW5jbHVkZWQgYnkgdGhlIGNvbXBvbmVudCwgJyArXG4gICAgICAgICAgICAgICdhcyB3ZWxsIGFzIGFueSBtaXhpbnMgdGhleSBpbmNsdWRlIHRoZW1zZWx2ZXMuICcgK1xuICAgICAgICAgICAgICAnRXhwZWN0ZWQgb2JqZWN0IGJ1dCBnb3QgJXMuJyxcbiAgICAgICAgICAgIENvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8ICdSZWFjdENsYXNzJyxcbiAgICAgICAgICAgIHNwZWMgPT09IG51bGwgPyBudWxsIDogdHlwZW9mU3BlY1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIF9pbnZhcmlhbnQoXG4gICAgICB0eXBlb2Ygc3BlYyAhPT0gJ2Z1bmN0aW9uJyxcbiAgICAgIFwiUmVhY3RDbGFzczogWW91J3JlIGF0dGVtcHRpbmcgdG8gXCIgK1xuICAgICAgICAndXNlIGEgY29tcG9uZW50IGNsYXNzIG9yIGZ1bmN0aW9uIGFzIGEgbWl4aW4uIEluc3RlYWQsIGp1c3QgdXNlIGEgJyArXG4gICAgICAgICdyZWd1bGFyIG9iamVjdC4nXG4gICAgKTtcbiAgICBfaW52YXJpYW50KFxuICAgICAgIWlzVmFsaWRFbGVtZW50KHNwZWMpLFxuICAgICAgXCJSZWFjdENsYXNzOiBZb3UncmUgYXR0ZW1wdGluZyB0byBcIiArXG4gICAgICAgICd1c2UgYSBjb21wb25lbnQgYXMgYSBtaXhpbi4gSW5zdGVhZCwganVzdCB1c2UgYSByZWd1bGFyIG9iamVjdC4nXG4gICAgKTtcblxuICAgIHZhciBwcm90byA9IENvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICB2YXIgYXV0b0JpbmRQYWlycyA9IHByb3RvLl9fcmVhY3RBdXRvQmluZFBhaXJzO1xuXG4gICAgLy8gQnkgaGFuZGxpbmcgbWl4aW5zIGJlZm9yZSBhbnkgb3RoZXIgcHJvcGVydGllcywgd2UgZW5zdXJlIHRoZSBzYW1lXG4gICAgLy8gY2hhaW5pbmcgb3JkZXIgaXMgYXBwbGllZCB0byBtZXRob2RzIHdpdGggREVGSU5FX01BTlkgcG9saWN5LCB3aGV0aGVyXG4gICAgLy8gbWl4aW5zIGFyZSBsaXN0ZWQgYmVmb3JlIG9yIGFmdGVyIHRoZXNlIG1ldGhvZHMgaW4gdGhlIHNwZWMuXG4gICAgaWYgKHNwZWMuaGFzT3duUHJvcGVydHkoTUlYSU5TX0tFWSkpIHtcbiAgICAgIFJFU0VSVkVEX1NQRUNfS0VZUy5taXhpbnMoQ29uc3RydWN0b3IsIHNwZWMubWl4aW5zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHNwZWMpIHtcbiAgICAgIGlmICghc3BlYy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IE1JWElOU19LRVkpIHtcbiAgICAgICAgLy8gV2UgaGF2ZSBhbHJlYWR5IGhhbmRsZWQgbWl4aW5zIGluIGEgc3BlY2lhbCBjYXNlIGFib3ZlLlxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BlcnR5ID0gc3BlY1tuYW1lXTtcbiAgICAgIHZhciBpc0FscmVhZHlEZWZpbmVkID0gcHJvdG8uaGFzT3duUHJvcGVydHkobmFtZSk7XG4gICAgICB2YWxpZGF0ZU1ldGhvZE92ZXJyaWRlKGlzQWxyZWFkeURlZmluZWQsIG5hbWUpO1xuXG4gICAgICBpZiAoUkVTRVJWRURfU1BFQ19LRVlTLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIFJFU0VSVkVEX1NQRUNfS0VZU1tuYW1lXShDb25zdHJ1Y3RvciwgcHJvcGVydHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2V0dXAgbWV0aG9kcyBvbiBwcm90b3R5cGU6XG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbWVtYmVyIG1ldGhvZHMgc2hvdWxkIG5vdCBiZSBhdXRvbWF0aWNhbGx5IGJvdW5kOlxuICAgICAgICAvLyAxLiBFeHBlY3RlZCBSZWFjdENsYXNzIG1ldGhvZHMgKGluIHRoZSBcImludGVyZmFjZVwiKS5cbiAgICAgICAgLy8gMi4gT3ZlcnJpZGRlbiBtZXRob2RzICh0aGF0IHdlcmUgbWl4ZWQgaW4pLlxuICAgICAgICB2YXIgaXNSZWFjdENsYXNzTWV0aG9kID0gUmVhY3RDbGFzc0ludGVyZmFjZS5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICAgICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIHZhciBzaG91bGRBdXRvQmluZCA9XG4gICAgICAgICAgaXNGdW5jdGlvbiAmJlxuICAgICAgICAgICFpc1JlYWN0Q2xhc3NNZXRob2QgJiZcbiAgICAgICAgICAhaXNBbHJlYWR5RGVmaW5lZCAmJlxuICAgICAgICAgIHNwZWMuYXV0b2JpbmQgIT09IGZhbHNlO1xuXG4gICAgICAgIGlmIChzaG91bGRBdXRvQmluZCkge1xuICAgICAgICAgIGF1dG9CaW5kUGFpcnMucHVzaChuYW1lLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgcHJvdG9bbmFtZV0gPSBwcm9wZXJ0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNBbHJlYWR5RGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHNwZWNQb2xpY3kgPSBSZWFjdENsYXNzSW50ZXJmYWNlW25hbWVdO1xuXG4gICAgICAgICAgICAvLyBUaGVzZSBjYXNlcyBzaG91bGQgYWxyZWFkeSBiZSBjYXVnaHQgYnkgdmFsaWRhdGVNZXRob2RPdmVycmlkZS5cbiAgICAgICAgICAgIF9pbnZhcmlhbnQoXG4gICAgICAgICAgICAgIGlzUmVhY3RDbGFzc01ldGhvZCAmJlxuICAgICAgICAgICAgICAgIChzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTllfTUVSR0VEJyB8fFxuICAgICAgICAgICAgICAgICAgc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZJyksXG4gICAgICAgICAgICAgICdSZWFjdENsYXNzOiBVbmV4cGVjdGVkIHNwZWMgcG9saWN5ICVzIGZvciBrZXkgJXMgJyArXG4gICAgICAgICAgICAgICAgJ3doZW4gbWl4aW5nIGluIGNvbXBvbmVudCBzcGVjcy4nLFxuICAgICAgICAgICAgICBzcGVjUG9saWN5LFxuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBGb3IgbWV0aG9kcyB3aGljaCBhcmUgZGVmaW5lZCBtb3JlIHRoYW4gb25jZSwgY2FsbCB0aGUgZXhpc3RpbmdcbiAgICAgICAgICAgIC8vIG1ldGhvZHMgYmVmb3JlIGNhbGxpbmcgdGhlIG5ldyBwcm9wZXJ0eSwgbWVyZ2luZyBpZiBhcHByb3ByaWF0ZS5cbiAgICAgICAgICAgIGlmIChzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTllfTUVSR0VEJykge1xuICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKHByb3RvW25hbWVdLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWScpIHtcbiAgICAgICAgICAgICAgcHJvdG9bbmFtZV0gPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24ocHJvdG9bbmFtZV0sIHByb3BlcnR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvdG9bbmFtZV0gPSBwcm9wZXJ0eTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIC8vIEFkZCB2ZXJib3NlIGRpc3BsYXlOYW1lIHRvIHRoZSBmdW5jdGlvbiwgd2hpY2ggaGVscHMgd2hlbiBsb29raW5nXG4gICAgICAgICAgICAgIC8vIGF0IHByb2ZpbGluZyB0b29scy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJyAmJiBzcGVjLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvdG9bbmFtZV0uZGlzcGxheU5hbWUgPSBzcGVjLmRpc3BsYXlOYW1lICsgJ18nICsgbmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1peFN0YXRpY1NwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBzdGF0aWNzKSB7XG4gICAgaWYgKCFzdGF0aWNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBzdGF0aWNzKSB7XG4gICAgICB2YXIgcHJvcGVydHkgPSBzdGF0aWNzW25hbWVdO1xuICAgICAgaWYgKCFzdGF0aWNzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXNSZXNlcnZlZCA9IG5hbWUgaW4gUkVTRVJWRURfU1BFQ19LRVlTO1xuICAgICAgX2ludmFyaWFudChcbiAgICAgICAgIWlzUmVzZXJ2ZWQsXG4gICAgICAgICdSZWFjdENsYXNzOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gZGVmaW5lIGEgcmVzZXJ2ZWQgJyArXG4gICAgICAgICAgJ3Byb3BlcnR5LCBgJXNgLCB0aGF0IHNob3VsZG5cXCd0IGJlIG9uIHRoZSBcInN0YXRpY3NcIiBrZXkuIERlZmluZSBpdCAnICtcbiAgICAgICAgICAnYXMgYW4gaW5zdGFuY2UgcHJvcGVydHkgaW5zdGVhZDsgaXQgd2lsbCBzdGlsbCBiZSBhY2Nlc3NpYmxlIG9uIHRoZSAnICtcbiAgICAgICAgICAnY29uc3RydWN0b3IuJyxcbiAgICAgICAgbmFtZVxuICAgICAgKTtcblxuICAgICAgdmFyIGlzQWxyZWFkeURlZmluZWQgPSBuYW1lIGluIENvbnN0cnVjdG9yO1xuICAgICAgaWYgKGlzQWxyZWFkeURlZmluZWQpIHtcbiAgICAgICAgdmFyIHNwZWNQb2xpY3kgPSBSZWFjdENsYXNzU3RhdGljSW50ZXJmYWNlLmhhc093blByb3BlcnR5KG5hbWUpXG4gICAgICAgICAgPyBSZWFjdENsYXNzU3RhdGljSW50ZXJmYWNlW25hbWVdXG4gICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgIF9pbnZhcmlhbnQoXG4gICAgICAgICAgc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZX01FUkdFRCcsXG4gICAgICAgICAgJ1JlYWN0Q2xhc3M6IFlvdSBhcmUgYXR0ZW1wdGluZyB0byBkZWZpbmUgJyArXG4gICAgICAgICAgICAnYCVzYCBvbiB5b3VyIGNvbXBvbmVudCBtb3JlIHRoYW4gb25jZS4gVGhpcyBjb25mbGljdCBtYXkgYmUgJyArXG4gICAgICAgICAgICAnZHVlIHRvIGEgbWl4aW4uJyxcbiAgICAgICAgICBuYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgQ29uc3RydWN0b3JbbmFtZV0gPSBjcmVhdGVNZXJnZWRSZXN1bHRGdW5jdGlvbihDb25zdHJ1Y3RvcltuYW1lXSwgcHJvcGVydHkpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgQ29uc3RydWN0b3JbbmFtZV0gPSBwcm9wZXJ0eTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgdHdvIG9iamVjdHMsIGJ1dCB0aHJvdyBpZiBib3RoIGNvbnRhaW4gdGhlIHNhbWUga2V5LlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb25lIFRoZSBmaXJzdCBvYmplY3QsIHdoaWNoIGlzIG11dGF0ZWQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0d28gVGhlIHNlY29uZCBvYmplY3RcbiAgICogQHJldHVybiB7b2JqZWN0fSBvbmUgYWZ0ZXIgaXQgaGFzIGJlZW4gbXV0YXRlZCB0byBjb250YWluIGV2ZXJ5dGhpbmcgaW4gdHdvLlxuICAgKi9cbiAgZnVuY3Rpb24gbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cyhvbmUsIHR3bykge1xuICAgIF9pbnZhcmlhbnQoXG4gICAgICBvbmUgJiYgdHdvICYmIHR5cGVvZiBvbmUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0d28gPT09ICdvYmplY3QnLFxuICAgICAgJ21lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoKTogQ2Fubm90IG1lcmdlIG5vbi1vYmplY3RzLidcbiAgICApO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHR3bykge1xuICAgICAgaWYgKHR3by5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIF9pbnZhcmlhbnQoXG4gICAgICAgICAgb25lW2tleV0gPT09IHVuZGVmaW5lZCxcbiAgICAgICAgICAnbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cygpOiAnICtcbiAgICAgICAgICAgICdUcmllZCB0byBtZXJnZSB0d28gb2JqZWN0cyB3aXRoIHRoZSBzYW1lIGtleTogYCVzYC4gVGhpcyBjb25mbGljdCAnICtcbiAgICAgICAgICAgICdtYXkgYmUgZHVlIHRvIGEgbWl4aW47IGluIHBhcnRpY3VsYXIsIHRoaXMgbWF5IGJlIGNhdXNlZCBieSB0d28gJyArXG4gICAgICAgICAgICAnZ2V0SW5pdGlhbFN0YXRlKCkgb3IgZ2V0RGVmYXVsdFByb3BzKCkgbWV0aG9kcyByZXR1cm5pbmcgb2JqZWN0cyAnICtcbiAgICAgICAgICAgICd3aXRoIGNsYXNoaW5nIGtleXMuJyxcbiAgICAgICAgICBrZXlcbiAgICAgICAgKTtcbiAgICAgICAgb25lW2tleV0gPSB0d29ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIHR3byBmdW5jdGlvbnMgYW5kIG1lcmdlcyB0aGVpciByZXR1cm4gdmFsdWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmUgRnVuY3Rpb24gdG8gaW52b2tlIGZpcnN0LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0d28gRnVuY3Rpb24gdG8gaW52b2tlIHNlY29uZC5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0aGUgdHdvIGFyZ3VtZW50IGZ1bmN0aW9ucy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKG9uZSwgdHdvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZFJlc3VsdCgpIHtcbiAgICAgIHZhciBhID0gb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB2YXIgYiA9IHR3by5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgaWYgKGEgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYjtcbiAgICAgIH0gZWxzZSBpZiAoYiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuICAgICAgdmFyIGMgPSB7fTtcbiAgICAgIG1lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoYywgYSk7XG4gICAgICBtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKGMsIGIpO1xuICAgICAgcmV0dXJuIGM7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIHR3byBmdW5jdGlvbnMgYW5kIGlnbm9yZXMgdGhlaXIgcmV0dXJuIHZhbGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbmUgRnVuY3Rpb24gdG8gaW52b2tlIGZpcnN0LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0d28gRnVuY3Rpb24gdG8gaW52b2tlIHNlY29uZC5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259IEZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0aGUgdHdvIGFyZ3VtZW50IGZ1bmN0aW9ucy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbihvbmUsIHR3bykge1xuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgICBvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHR3by5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgYSBtZXRob2QgdG8gdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBDb21wb25lbnQgd2hvc2UgbWV0aG9kIGlzIGdvaW5nIHRvIGJlIGJvdW5kLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2QgTWV0aG9kIHRvIGJlIGJvdW5kLlxuICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGJvdW5kIG1ldGhvZC5cbiAgICovXG4gIGZ1bmN0aW9uIGJpbmRBdXRvQmluZE1ldGhvZChjb21wb25lbnQsIG1ldGhvZCkge1xuICAgIHZhciBib3VuZE1ldGhvZCA9IG1ldGhvZC5iaW5kKGNvbXBvbmVudCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZENvbnRleHQgPSBjb21wb25lbnQ7XG4gICAgICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRNZXRob2QgPSBtZXRob2Q7XG4gICAgICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRBcmd1bWVudHMgPSBudWxsO1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnQuY29uc3RydWN0b3IuZGlzcGxheU5hbWU7XG4gICAgICB2YXIgX2JpbmQgPSBib3VuZE1ldGhvZC5iaW5kO1xuICAgICAgYm91bmRNZXRob2QuYmluZCA9IGZ1bmN0aW9uKG5ld1RoaXMpIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLFxuICAgICAgICAgICAgX2tleSA9IDE7XG4gICAgICAgICAgX2tleSA8IF9sZW47XG4gICAgICAgICAgX2tleSsrXG4gICAgICAgICkge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXNlciBpcyB0cnlpbmcgdG8gYmluZCgpIGFuIGF1dG9ib3VuZCBtZXRob2Q7IHdlIGVmZmVjdGl2ZWx5IHdpbGxcbiAgICAgICAgLy8gaWdub3JlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB0aGF0IHRoZSB1c2VyIGlzIHRyeWluZyB0byB1c2UsIHNvXG4gICAgICAgIC8vIGxldCdzIHdhcm4uXG4gICAgICAgIGlmIChuZXdUaGlzICE9PSBjb21wb25lbnQgJiYgbmV3VGhpcyAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ2JpbmQoKTogUmVhY3QgY29tcG9uZW50IG1ldGhvZHMgbWF5IG9ubHkgYmUgYm91bmQgdG8gdGhlICcgK1xuICAgICAgICAgICAgICAgICdjb21wb25lbnQgaW5zdGFuY2UuIFNlZSAlcycsXG4gICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFhcmdzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgJ2JpbmQoKTogWW91IGFyZSBiaW5kaW5nIGEgY29tcG9uZW50IG1ldGhvZCB0byB0aGUgY29tcG9uZW50LiAnICtcbiAgICAgICAgICAgICAgICAnUmVhY3QgZG9lcyB0aGlzIGZvciB5b3UgYXV0b21hdGljYWxseSBpbiBhIGhpZ2gtcGVyZm9ybWFuY2UgJyArXG4gICAgICAgICAgICAgICAgJ3dheSwgc28geW91IGNhbiBzYWZlbHkgcmVtb3ZlIHRoaXMgY2FsbC4gU2VlICVzJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGJvdW5kTWV0aG9kO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZWJvdW5kTWV0aG9kID0gX2JpbmQuYXBwbHkoYm91bmRNZXRob2QsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJlYm91bmRNZXRob2QuX19yZWFjdEJvdW5kQ29udGV4dCA9IGNvbXBvbmVudDtcbiAgICAgICAgcmVib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRNZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIHJlYm91bmRNZXRob2QuX19yZWFjdEJvdW5kQXJndW1lbnRzID0gYXJncztcbiAgICAgICAgcmV0dXJuIHJlYm91bmRNZXRob2Q7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gYm91bmRNZXRob2Q7XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgYWxsIGF1dG8tYm91bmQgbWV0aG9kcyBpbiBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBDb21wb25lbnQgd2hvc2UgbWV0aG9kIGlzIGdvaW5nIHRvIGJlIGJvdW5kLlxuICAgKi9cbiAgZnVuY3Rpb24gYmluZEF1dG9CaW5kTWV0aG9kcyhjb21wb25lbnQpIHtcbiAgICB2YXIgcGFpcnMgPSBjb21wb25lbnQuX19yZWFjdEF1dG9CaW5kUGFpcnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgdmFyIGF1dG9CaW5kS2V5ID0gcGFpcnNbaV07XG4gICAgICB2YXIgbWV0aG9kID0gcGFpcnNbaSArIDFdO1xuICAgICAgY29tcG9uZW50W2F1dG9CaW5kS2V5XSA9IGJpbmRBdXRvQmluZE1ldGhvZChjb21wb25lbnQsIG1ldGhvZCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIElzTW91bnRlZFByZU1peGluID0ge1xuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX19pc01vdW50ZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICB2YXIgSXNNb3VudGVkUG9zdE1peGluID0ge1xuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBtb3JlIHRvIHRoZSBSZWFjdENsYXNzIGJhc2UgY2xhc3MuIFRoZXNlIGFyZSBhbGwgbGVnYWN5IGZlYXR1cmVzIGFuZFxuICAgKiB0aGVyZWZvcmUgbm90IGFscmVhZHkgcGFydCBvZiB0aGUgbW9kZXJuIFJlYWN0Q29tcG9uZW50LlxuICAgKi9cbiAgdmFyIFJlYWN0Q2xhc3NNaXhpbiA9IHtcbiAgICAvKipcbiAgICAgKiBUT0RPOiBUaGlzIHdpbGwgYmUgZGVwcmVjYXRlZCBiZWNhdXNlIHN0YXRlIHNob3VsZCBhbHdheXMga2VlcCBhIGNvbnNpc3RlbnRcbiAgICAgKiB0eXBlIHNpZ25hdHVyZSBhbmQgdGhlIG9ubHkgdXNlIGNhc2UgZm9yIHRoaXMsIGlzIHRvIGF2b2lkIHRoYXQuXG4gICAgICovXG4gICAgcmVwbGFjZVN0YXRlOiBmdW5jdGlvbihuZXdTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMudXBkYXRlci5lbnF1ZXVlUmVwbGFjZVN0YXRlKHRoaXMsIG5ld1N0YXRlLCBjYWxsYmFjayk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQGZpbmFsXG4gICAgICovXG4gICAgaXNNb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgdGhpcy5fX2RpZFdhcm5Jc01vdW50ZWQsXG4gICAgICAgICAgJyVzOiBpc01vdW50ZWQgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwICcgK1xuICAgICAgICAgICAgJ3N1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gY29tcG9uZW50V2lsbFVubW91bnQgdG8gJyArXG4gICAgICAgICAgICAncHJldmVudCBtZW1vcnkgbGVha3MuJyxcbiAgICAgICAgICAodGhpcy5jb25zdHJ1Y3RvciAmJiB0aGlzLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lKSB8fFxuICAgICAgICAgICAgdGhpcy5uYW1lIHx8XG4gICAgICAgICAgICAnQ29tcG9uZW50J1xuICAgICAgICApO1xuICAgICAgICB0aGlzLl9fZGlkV2FybklzTW91bnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gISF0aGlzLl9faXNNb3VudGVkO1xuICAgIH1cbiAgfTtcblxuICB2YXIgUmVhY3RDbGFzc0NvbXBvbmVudCA9IGZ1bmN0aW9uKCkge307XG4gIF9hc3NpZ24oXG4gICAgUmVhY3RDbGFzc0NvbXBvbmVudC5wcm90b3R5cGUsXG4gICAgUmVhY3RDb21wb25lbnQucHJvdG90eXBlLFxuICAgIFJlYWN0Q2xhc3NNaXhpblxuICApO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY29tcG9zaXRlIGNvbXBvbmVudCBjbGFzcyBnaXZlbiBhIGNsYXNzIHNwZWNpZmljYXRpb24uXG4gICAqIFNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL3RvcC1sZXZlbC1hcGkuaHRtbCNyZWFjdC5jcmVhdGVjbGFzc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3BlYyBDbGFzcyBzcGVjaWZpY2F0aW9uICh3aGljaCBtdXN0IGRlZmluZSBgcmVuZGVyYCkuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBDb21wb25lbnQgY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUNsYXNzKHNwZWMpIHtcbiAgICAvLyBUbyBrZWVwIG91ciB3YXJuaW5ncyBtb3JlIHVuZGVyc3RhbmRhYmxlLCB3ZSdsbCB1c2UgYSBsaXR0bGUgaGFjayBoZXJlIHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgQ29uc3RydWN0b3IubmFtZSAhPT0gJ0NvbnN0cnVjdG9yJy4gVGhpcyBtYWtlcyBzdXJlIHdlIGRvbid0XG4gICAgLy8gdW5uZWNlc3NhcmlseSBpZGVudGlmeSBhIGNsYXNzIHdpdGhvdXQgZGlzcGxheU5hbWUgYXMgJ0NvbnN0cnVjdG9yJy5cbiAgICB2YXIgQ29uc3RydWN0b3IgPSBpZGVudGl0eShmdW5jdGlvbihwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgICAgLy8gVGhpcyBjb25zdHJ1Y3RvciBnZXRzIG92ZXJyaWRkZW4gYnkgbW9ja3MuIFRoZSBhcmd1bWVudCBpcyB1c2VkXG4gICAgICAvLyBieSBtb2NrcyB0byBhc3NlcnQgb24gd2hhdCBnZXRzIG1vdW50ZWQuXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgdGhpcyBpbnN0YW5jZW9mIENvbnN0cnVjdG9yLFxuICAgICAgICAgICdTb21ldGhpbmcgaXMgY2FsbGluZyBhIFJlYWN0IGNvbXBvbmVudCBkaXJlY3RseS4gVXNlIGEgZmFjdG9yeSBvciAnICtcbiAgICAgICAgICAgICdKU1ggaW5zdGVhZC4gU2VlOiBodHRwczovL2ZiLm1lL3JlYWN0LWxlZ2FjeWZhY3RvcnknXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdpcmUgdXAgYXV0by1iaW5kaW5nXG4gICAgICBpZiAodGhpcy5fX3JlYWN0QXV0b0JpbmRQYWlycy5sZW5ndGgpIHtcbiAgICAgICAgYmluZEF1dG9CaW5kTWV0aG9kcyh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAgICAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcblxuICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XG5cbiAgICAgIC8vIFJlYWN0Q2xhc3NlcyBkb2Vzbid0IGhhdmUgY29uc3RydWN0b3JzLiBJbnN0ZWFkLCB0aGV5IHVzZSB0aGVcbiAgICAgIC8vIGdldEluaXRpYWxTdGF0ZSBhbmQgY29tcG9uZW50V2lsbE1vdW50IG1ldGhvZHMgZm9yIGluaXRpYWxpemF0aW9uLlxuXG4gICAgICB2YXIgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUgPyB0aGlzLmdldEluaXRpYWxTdGF0ZSgpIDogbnVsbDtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIFdlIGFsbG93IGF1dG8tbW9ja3MgdG8gcHJvY2VlZCBhcyBpZiB0aGV5J3JlIHJldHVybmluZyBudWxsLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgaW5pdGlhbFN0YXRlID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICB0aGlzLmdldEluaXRpYWxTdGF0ZS5faXNNb2NrRnVuY3Rpb25cbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBwcm9iYWJseSBiYWQgcHJhY3RpY2UuIENvbnNpZGVyIHdhcm5pbmcgaGVyZSBhbmRcbiAgICAgICAgICAvLyBkZXByZWNhdGluZyB0aGlzIGNvbnZlbmllbmNlLlxuICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9pbnZhcmlhbnQoXG4gICAgICAgIHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGluaXRpYWxTdGF0ZSksXG4gICAgICAgICclcy5nZXRJbml0aWFsU3RhdGUoKTogbXVzdCByZXR1cm4gYW4gb2JqZWN0IG9yIG51bGwnLFxuICAgICAgICBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCAnUmVhY3RDb21wb3NpdGVDb21wb25lbnQnXG4gICAgICApO1xuXG4gICAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgIH0pO1xuICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IG5ldyBSZWFjdENsYXNzQ29tcG9uZW50KCk7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlLl9fcmVhY3RBdXRvQmluZFBhaXJzID0gW107XG5cbiAgICBpbmplY3RlZE1peGlucy5mb3JFYWNoKG1peFNwZWNJbnRvQ29tcG9uZW50LmJpbmQobnVsbCwgQ29uc3RydWN0b3IpKTtcblxuICAgIG1peFNwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBJc01vdW50ZWRQcmVNaXhpbik7XG4gICAgbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIHNwZWMpO1xuICAgIG1peFNwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBJc01vdW50ZWRQb3N0TWl4aW4pO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgZGVmYXVsdFByb3BzIHByb3BlcnR5IGFmdGVyIGFsbCBtaXhpbnMgaGF2ZSBiZWVuIG1lcmdlZC5cbiAgICBpZiAoQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKSB7XG4gICAgICBDb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMgPSBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMoKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gVGhpcyBpcyBhIHRhZyB0byBpbmRpY2F0ZSB0aGF0IHRoZSB1c2Ugb2YgdGhlc2UgbWV0aG9kIG5hbWVzIGlzIG9rLFxuICAgICAgLy8gc2luY2UgaXQncyB1c2VkIHdpdGggY3JlYXRlQ2xhc3MuIElmIGl0J3Mgbm90LCB0aGVuIGl0J3MgbGlrZWx5IGFcbiAgICAgIC8vIG1pc3Rha2Ugc28gd2UnbGwgd2FybiB5b3UgdG8gdXNlIHRoZSBzdGF0aWMgcHJvcGVydHksIHByb3BlcnR5XG4gICAgICAvLyBpbml0aWFsaXplciBvciBjb25zdHJ1Y3RvciByZXNwZWN0aXZlbHkuXG4gICAgICBpZiAoQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKSB7XG4gICAgICAgIENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA9IHt9O1xuICAgICAgfVxuICAgICAgaWYgKENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlLmdldEluaXRpYWxTdGF0ZS5pc1JlYWN0Q2xhc3NBcHByb3ZlZCA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIF9pbnZhcmlhbnQoXG4gICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUucmVuZGVyLFxuICAgICAgJ2NyZWF0ZUNsYXNzKC4uLik6IENsYXNzIHNwZWNpZmljYXRpb24gbXVzdCBpbXBsZW1lbnQgYSBgcmVuZGVyYCBtZXRob2QuJ1xuICAgICk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgIUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb21wb25lbnRTaG91bGRVcGRhdGUsXG4gICAgICAgICclcyBoYXMgYSBtZXRob2QgY2FsbGVkICcgK1xuICAgICAgICAgICdjb21wb25lbnRTaG91bGRVcGRhdGUoKS4gRGlkIHlvdSBtZWFuIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpPyAnICtcbiAgICAgICAgICAnVGhlIG5hbWUgaXMgcGhyYXNlZCBhcyBhIHF1ZXN0aW9uIGJlY2F1c2UgdGhlIGZ1bmN0aW9uIGlzICcgK1xuICAgICAgICAgICdleHBlY3RlZCB0byByZXR1cm4gYSB2YWx1ZS4nLFxuICAgICAgICBzcGVjLmRpc3BsYXlOYW1lIHx8ICdBIGNvbXBvbmVudCdcbiAgICAgICk7XG4gICAgICB3YXJuaW5nKFxuICAgICAgICAhQ29uc3RydWN0b3IucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNpZXZlUHJvcHMsXG4gICAgICAgICclcyBoYXMgYSBtZXRob2QgY2FsbGVkICcgK1xuICAgICAgICAgICdjb21wb25lbnRXaWxsUmVjaWV2ZVByb3BzKCkuIERpZCB5b3UgbWVhbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCk/JyxcbiAgICAgICAgc3BlYy5kaXNwbGF5TmFtZSB8fCAnQSBjb21wb25lbnQnXG4gICAgICApO1xuICAgICAgd2FybmluZyhcbiAgICAgICAgIUNvbnN0cnVjdG9yLnByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2lldmVQcm9wcyxcbiAgICAgICAgJyVzIGhhcyBhIG1ldGhvZCBjYWxsZWQgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNpZXZlUHJvcHMoKS4gJyArXG4gICAgICAgICAgJ0RpZCB5b3UgbWVhbiBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpPycsXG4gICAgICAgIHNwZWMuZGlzcGxheU5hbWUgfHwgJ0EgY29tcG9uZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZWR1Y2UgdGltZSBzcGVudCBkb2luZyBsb29rdXBzIGJ5IHNldHRpbmcgdGhlc2Ugb24gdGhlIHByb3RvdHlwZS5cbiAgICBmb3IgKHZhciBtZXRob2ROYW1lIGluIFJlYWN0Q2xhc3NJbnRlcmZhY2UpIHtcbiAgICAgIGlmICghQ29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUNsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZmFjdG9yeSA9IHJlcXVpcmUoJy4vZmFjdG9yeScpO1xuXG5pZiAodHlwZW9mIFJlYWN0ID09PSAndW5kZWZpbmVkJykge1xuICB0aHJvdyBFcnJvcihcbiAgICAnY3JlYXRlLXJlYWN0LWNsYXNzIGNvdWxkIG5vdCBmaW5kIHRoZSBSZWFjdCBvYmplY3QuIElmIHlvdSBhcmUgdXNpbmcgc2NyaXB0IHRhZ3MsICcgK1xuICAgICAgJ21ha2Ugc3VyZSB0aGF0IFJlYWN0IGlzIGJlaW5nIGxvYWRlZCBiZWZvcmUgY3JlYXRlLXJlYWN0LWNsYXNzLidcbiAgKTtcbn1cblxuLy8gSGFjayB0byBncmFiIE5vb3BVcGRhdGVRdWV1ZSBmcm9tIGlzb21vcnBoaWMgUmVhY3RcbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IG5ldyBSZWFjdC5Db21wb25lbnQoKS51cGRhdGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gIFJlYWN0LkNvbXBvbmVudCxcbiAgUmVhY3QuaXNWYWxpZEVsZW1lbnQsXG4gIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlXG4pO1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfdHlwZW9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnO1xudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5cbmV4cG9ydCB2YXIgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoKSB7fTtcblxuLy8gZG9uJ3QgcHJpbnQgd2FybmluZyBtZXNzYWdlIHdoZW4gaW4gcHJvZHVjdGlvbiBlbnYgb3Igbm9kZSBydW50aW1lXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKHR5cGUsIGVycm9ycykge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICBpZiAoZXJyb3JzLmV2ZXJ5KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZSA9PT0gJ3N0cmluZyc7XG4gICAgICB9KSkge1xuICAgICAgICBjb25zb2xlLndhcm4odHlwZSwgZXJyb3JzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGYgPSBhcmdzWzBdO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmLmFwcGx5KG51bGwsIGFyZ3Muc2xpY2UoMSkpO1xuICB9XG4gIGlmICh0eXBlb2YgZiA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbiAoeCkge1xuICAgICAgaWYgKHggPT09ICclJScpIHtcbiAgICAgICAgcmV0dXJuICclJztcbiAgICAgIH1cbiAgICAgIGlmIChpID49IGxlbikge1xuICAgICAgICByZXR1cm4geDtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoeCkge1xuICAgICAgICBjYXNlICclcyc6XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgICBjYXNlICclZCc6XG4gICAgICAgICAgcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgICBjYXNlICclaic6XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiB4O1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZvciAodmFyIGFyZyA9IGFyZ3NbaV07IGkgPCBsZW47IGFyZyA9IGFyZ3NbKytpXSkge1xuICAgICAgc3RyICs9ICcgJyArIGFyZztcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICByZXR1cm4gZjtcbn1cblxuZnVuY3Rpb24gaXNOYXRpdmVTdHJpbmdUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICd1cmwnIHx8IHR5cGUgPT09ICdoZXgnIHx8IHR5cGUgPT09ICdlbWFpbCcgfHwgdHlwZSA9PT0gJ3BhdHRlcm4nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eVZhbHVlKHZhbHVlLCB0eXBlKSB7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdhcnJheScgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgIXZhbHVlLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChpc05hdGl2ZVN0cmluZ1R5cGUodHlwZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5T2JqZWN0KG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIGFzeW5jUGFyYWxsZWxBcnJheShhcnIsIGZ1bmMsIGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHRzID0gW107XG4gIHZhciB0b3RhbCA9IDA7XG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoO1xuXG4gIGZ1bmN0aW9uIGNvdW50KGVycm9ycykge1xuICAgIHJlc3VsdHMucHVzaC5hcHBseShyZXN1bHRzLCBlcnJvcnMpO1xuICAgIHRvdGFsKys7XG4gICAgaWYgKHRvdGFsID09PSBhcnJMZW5ndGgpIHtcbiAgICAgIGNhbGxiYWNrKHJlc3VsdHMpO1xuICAgIH1cbiAgfVxuXG4gIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7XG4gICAgZnVuYyhhLCBjb3VudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3luY1NlcmlhbEFycmF5KGFyciwgZnVuYywgY2FsbGJhY2spIHtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gbmV4dChlcnJvcnMpIHtcbiAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIGNhbGxiYWNrKGVycm9ycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBvcmlnaW5hbCA9IGluZGV4O1xuICAgIGluZGV4ID0gaW5kZXggKyAxO1xuICAgIGlmIChvcmlnaW5hbCA8IGFyckxlbmd0aCkge1xuICAgICAgZnVuYyhhcnJbb3JpZ2luYWxdLCBuZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soW10pO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoW10pO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuT2JqQXJyKG9iakFycikge1xuICB2YXIgcmV0ID0gW107XG4gIE9iamVjdC5rZXlzKG9iakFycikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIHJldC5wdXNoLmFwcGx5KHJldCwgb2JqQXJyW2tdKTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3luY01hcChvYmpBcnIsIG9wdGlvbiwgZnVuYywgY2FsbGJhY2spIHtcbiAgaWYgKG9wdGlvbi5maXJzdCkge1xuICAgIHZhciBmbGF0dGVuQXJyID0gZmxhdHRlbk9iakFycihvYmpBcnIpO1xuICAgIHJldHVybiBhc3luY1NlcmlhbEFycmF5KGZsYXR0ZW5BcnIsIGZ1bmMsIGNhbGxiYWNrKTtcbiAgfVxuICB2YXIgZmlyc3RGaWVsZHMgPSBvcHRpb24uZmlyc3RGaWVsZHMgfHwgW107XG4gIGlmIChmaXJzdEZpZWxkcyA9PT0gdHJ1ZSkge1xuICAgIGZpcnN0RmllbGRzID0gT2JqZWN0LmtleXMob2JqQXJyKTtcbiAgfVxuICB2YXIgb2JqQXJyS2V5cyA9IE9iamVjdC5rZXlzKG9iakFycik7XG4gIHZhciBvYmpBcnJMZW5ndGggPSBvYmpBcnJLZXlzLmxlbmd0aDtcbiAgdmFyIHRvdGFsID0gMDtcbiAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgdmFyIG5leHQgPSBmdW5jdGlvbiBuZXh0KGVycm9ycykge1xuICAgIHJlc3VsdHMucHVzaC5hcHBseShyZXN1bHRzLCBlcnJvcnMpO1xuICAgIHRvdGFsKys7XG4gICAgaWYgKHRvdGFsID09PSBvYmpBcnJMZW5ndGgpIHtcbiAgICAgIGNhbGxiYWNrKHJlc3VsdHMpO1xuICAgIH1cbiAgfTtcbiAgb2JqQXJyS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgYXJyID0gb2JqQXJyW2tleV07XG4gICAgaWYgKGZpcnN0RmllbGRzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgIGFzeW5jU2VyaWFsQXJyYXkoYXJyLCBmdW5jLCBuZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXN5bmNQYXJhbGxlbEFycmF5KGFyciwgZnVuYywgbmV4dCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBsZW1lbnRFcnJvcihydWxlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAob2UpIHtcbiAgICBpZiAob2UgJiYgb2UubWVzc2FnZSkge1xuICAgICAgb2UuZmllbGQgPSBvZS5maWVsZCB8fCBydWxlLmZ1bGxGaWVsZDtcbiAgICAgIHJldHVybiBvZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IG9lLFxuICAgICAgZmllbGQ6IG9lLmZpZWxkIHx8IHJ1bGUuZnVsbEZpZWxkXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICBpZiAoc291cmNlKSB7XG4gICAgZm9yICh2YXIgcyBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocykpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW3NdO1xuICAgICAgICBpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCcgJiYgX3R5cGVvZih0YXJnZXRbc10pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRhcmdldFtzXSA9IF9leHRlbmRzKHt9LCB0YXJnZXRbc10sIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRbc10gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbCc7XG5cbi8qKlxuICogIFJ1bGUgZm9yIHZhbGlkYXRpbmcgcmVxdWlyZWQgZmllbGRzLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBlcnJvcnMgQW4gYXJyYXkgb2YgZXJyb3JzIHRoYXQgdGhpcyBydWxlIG1heSBhZGRcbiAqICB2YWxpZGF0aW9uIGVycm9ycyB0by5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5mdW5jdGlvbiByZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMsIHR5cGUpIHtcbiAgaWYgKHJ1bGUucmVxdWlyZWQgJiYgKCFzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCkgfHwgdXRpbC5pc0VtcHR5VmFsdWUodmFsdWUsIHR5cGUgfHwgcnVsZS50eXBlKSkpIHtcbiAgICBlcnJvcnMucHVzaCh1dGlsLmZvcm1hdChvcHRpb25zLm1lc3NhZ2VzLnJlcXVpcmVkLCBydWxlLmZ1bGxGaWVsZCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmVkOyIsImltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vdXRpbCc7XG5cbi8qKlxuICogIFJ1bGUgZm9yIHZhbGlkYXRpbmcgd2hpdGVzcGFjZS5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gZXJyb3JzIEFuIGFycmF5IG9mIGVycm9ycyB0aGF0IHRoaXMgcnVsZSBtYXkgYWRkXG4gKiAgdmFsaWRhdGlvbiBlcnJvcnMgdG8uXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuZnVuY3Rpb24gd2hpdGVzcGFjZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpIHtcbiAgaWYgKC9eXFxzKyQvLnRlc3QodmFsdWUpIHx8IHZhbHVlID09PSAnJykge1xuICAgIGVycm9ycy5wdXNoKHV0aWwuZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMud2hpdGVzcGFjZSwgcnVsZS5mdWxsRmllbGQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aGl0ZXNwYWNlOyIsImltcG9ydCBfdHlwZW9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsJztcbmltcG9ydCByZXF1aXJlZCBmcm9tICcuL3JlcXVpcmVkJztcblxuLyogZXNsaW50IG1heC1sZW46MCAqL1xuXG52YXIgcGF0dGVybiA9IHtcbiAgLy8gaHR0cDovL2VtYWlscmVnZXguY29tL1xuICBlbWFpbDogL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8sXG4gIHVybDogbmV3IFJlZ0V4cCgnXig/IW1haWx0bzopKD86KD86aHR0cHxodHRwc3xmdHApOi8vfC8vKSg/OlxcXFxTKyg/OjpcXFxcUyopP0ApPyg/Oig/Oig/OlsxLTldXFxcXGQ/fDFcXFxcZFxcXFxkfDJbMDFdXFxcXGR8MjJbMC0zXSkoPzpcXFxcLig/OjE/XFxcXGR7MSwyfXwyWzAtNF1cXFxcZHwyNVswLTVdKSl7Mn0oPzpcXFxcLig/OlswLTldXFxcXGQ/fDFcXFxcZFxcXFxkfDJbMC00XVxcXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rLT8pKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKD86XFxcXC4oPzpbYS16XFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0rLT8pKlthLXpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspKig/OlxcXFwuKD86W2EtelxcXFx1MDBhMS1cXFxcdWZmZmZdezIsfSkpKXxsb2NhbGhvc3QpKD86OlxcXFxkezIsNX0pPyg/OigvfFxcXFw/fCMpW15cXFxcc10qKT8kJywgJ2knKSxcbiAgaGV4OiAvXiM/KFthLWYwLTldezZ9fFthLWYwLTldezN9KSQvaVxufTtcblxudmFyIHR5cGVzID0ge1xuICBpbnRlZ2VyOiBmdW5jdGlvbiBpbnRlZ2VyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVzLm51bWJlcih2YWx1ZSkgJiYgcGFyc2VJbnQodmFsdWUsIDEwKSA9PT0gdmFsdWU7XG4gIH0sXG4gIGZsb2F0OiBmdW5jdGlvbiBmbG9hdCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlcy5udW1iZXIodmFsdWUpICYmICF0eXBlcy5pbnRlZ2VyKHZhbHVlKTtcbiAgfSxcbiAgYXJyYXk6IGZ1bmN0aW9uIGFycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICB9LFxuICByZWdleHA6IGZ1bmN0aW9uIHJlZ2V4cCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gISFuZXcgUmVnRXhwKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuICBkYXRlOiBmdW5jdGlvbiBkYXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZS5nZXRUaW1lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZS5nZXRNb250aCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUuZ2V0WWVhciA9PT0gJ2Z1bmN0aW9uJztcbiAgfSxcbiAgbnVtYmVyOiBmdW5jdGlvbiBudW1iZXIodmFsdWUpIHtcbiAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB9LFxuICBvYmplY3Q6IGZ1bmN0aW9uIG9iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyAmJiAhdHlwZXMuYXJyYXkodmFsdWUpO1xuICB9LFxuICBtZXRob2Q6IGZ1bmN0aW9uIG1ldGhvZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH0sXG4gIGVtYWlsOiBmdW5jdGlvbiBlbWFpbCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEhdmFsdWUubWF0Y2gocGF0dGVybi5lbWFpbCkgJiYgdmFsdWUubGVuZ3RoIDwgMjU1O1xuICB9LFxuICB1cmw6IGZ1bmN0aW9uIHVybCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEhdmFsdWUubWF0Y2gocGF0dGVybi51cmwpO1xuICB9LFxuICBoZXg6IGZ1bmN0aW9uIGhleCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICEhdmFsdWUubWF0Y2gocGF0dGVybi5oZXgpO1xuICB9XG59O1xuXG4vKipcbiAqICBSdWxlIGZvciB2YWxpZGF0aW5nIHRoZSB0eXBlIG9mIGEgdmFsdWUuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIGVycm9ycyBBbiBhcnJheSBvZiBlcnJvcnMgdGhhdCB0aGlzIHJ1bGUgbWF5IGFkZFxuICogIHZhbGlkYXRpb24gZXJyb3JzIHRvLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cbmZ1bmN0aW9uIHR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKSB7XG4gIGlmIChydWxlLnJlcXVpcmVkICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgY3VzdG9tID0gWydpbnRlZ2VyJywgJ2Zsb2F0JywgJ2FycmF5JywgJ3JlZ2V4cCcsICdvYmplY3QnLCAnbWV0aG9kJywgJ2VtYWlsJywgJ251bWJlcicsICdkYXRlJywgJ3VybCcsICdoZXgnXTtcbiAgdmFyIHJ1bGVUeXBlID0gcnVsZS50eXBlO1xuICBpZiAoY3VzdG9tLmluZGV4T2YocnVsZVR5cGUpID4gLTEpIHtcbiAgICBpZiAoIXR5cGVzW3J1bGVUeXBlXSh2YWx1ZSkpIHtcbiAgICAgIGVycm9ycy5wdXNoKHV0aWwuZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMudHlwZXNbcnVsZVR5cGVdLCBydWxlLmZ1bGxGaWVsZCwgcnVsZS50eXBlKSk7XG4gICAgfVxuICAgIC8vIHN0cmFpZ2h0IHR5cGVvZiBjaGVja1xuICB9IGVsc2UgaWYgKHJ1bGVUeXBlICYmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKSkgIT09IHJ1bGUudHlwZSkge1xuICAgIGVycm9ycy5wdXNoKHV0aWwuZm9ybWF0KG9wdGlvbnMubWVzc2FnZXMudHlwZXNbcnVsZVR5cGVdLCBydWxlLmZ1bGxGaWVsZCwgcnVsZS50eXBlKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdHlwZTsiLCJpbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3V0aWwnO1xuXG4vKipcbiAqICBSdWxlIGZvciB2YWxpZGF0aW5nIG1pbmltdW0gYW5kIG1heGltdW0gYWxsb3dlZCB2YWx1ZXMuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIGVycm9ycyBBbiBhcnJheSBvZiBlcnJvcnMgdGhhdCB0aGlzIHJ1bGUgbWF5IGFkZFxuICogIHZhbGlkYXRpb24gZXJyb3JzIHRvLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cbmZ1bmN0aW9uIHJhbmdlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucykge1xuICB2YXIgbGVuID0gdHlwZW9mIHJ1bGUubGVuID09PSAnbnVtYmVyJztcbiAgdmFyIG1pbiA9IHR5cGVvZiBydWxlLm1pbiA9PT0gJ251bWJlcic7XG4gIHZhciBtYXggPSB0eXBlb2YgcnVsZS5tYXggPT09ICdudW1iZXInO1xuICAvLyDmraPliJnljLnphY3noIHngrnojIPlm7Tku45VKzAxMDAwMOS4gOebtOWIsFUrMTBGRkZG55qE5paH5a2X77yI6KGl5YWF5bmz6Z2iU3VwcGxlbWVudGFyeSBQbGFuZe+8iVxuICB2YXIgc3BSZWdleHAgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXS9nO1xuICB2YXIgdmFsID0gdmFsdWU7XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgbnVtID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbiAgdmFyIHN0ciA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIHZhciBhcnIgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgaWYgKG51bSkge1xuICAgIGtleSA9ICdudW1iZXInO1xuICB9IGVsc2UgaWYgKHN0cikge1xuICAgIGtleSA9ICdzdHJpbmcnO1xuICB9IGVsc2UgaWYgKGFycikge1xuICAgIGtleSA9ICdhcnJheSc7XG4gIH1cbiAgLy8gaWYgdGhlIHZhbHVlIGlzIG5vdCBvZiBhIHN1cHBvcnRlZCB0eXBlIGZvciByYW5nZSB2YWxpZGF0aW9uXG4gIC8vIHRoZSB2YWxpZGF0aW9uIHJ1bGUgcnVsZSBzaG91bGQgdXNlIHRoZVxuICAvLyB0eXBlIHByb3BlcnR5IHRvIGFsc28gdGVzdCBmb3IgYSBwYXJ0aWN1bGFyIHR5cGVcbiAgaWYgKCFrZXkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGFycikge1xuICAgIHZhbCA9IHZhbHVlLmxlbmd0aDtcbiAgfVxuICBpZiAoc3RyKSB7XG4gICAgLy8g5aSE55CG56CB54K55aSn5LqOVSswMTAwMDDnmoTmloflrZdsZW5ndGjlsZ7mgKfkuI3lh4bnoa7nmoRidWfvvIzlpoJcIvCgrrfwoK638KCut1wiLmxlbmdodCAhPT0gM1xuICAgIHZhbCA9IHZhbHVlLnJlcGxhY2Uoc3BSZWdleHAsICdfJykubGVuZ3RoO1xuICB9XG4gIGlmIChsZW4pIHtcbiAgICBpZiAodmFsICE9PSBydWxlLmxlbikge1xuICAgICAgZXJyb3JzLnB1c2godXRpbC5mb3JtYXQob3B0aW9ucy5tZXNzYWdlc1trZXldLmxlbiwgcnVsZS5mdWxsRmllbGQsIHJ1bGUubGVuKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG1pbiAmJiAhbWF4ICYmIHZhbCA8IHJ1bGUubWluKSB7XG4gICAgZXJyb3JzLnB1c2godXRpbC5mb3JtYXQob3B0aW9ucy5tZXNzYWdlc1trZXldLm1pbiwgcnVsZS5mdWxsRmllbGQsIHJ1bGUubWluKSk7XG4gIH0gZWxzZSBpZiAobWF4ICYmICFtaW4gJiYgdmFsID4gcnVsZS5tYXgpIHtcbiAgICBlcnJvcnMucHVzaCh1dGlsLmZvcm1hdChvcHRpb25zLm1lc3NhZ2VzW2tleV0ubWF4LCBydWxlLmZ1bGxGaWVsZCwgcnVsZS5tYXgpKTtcbiAgfSBlbHNlIGlmIChtaW4gJiYgbWF4ICYmICh2YWwgPCBydWxlLm1pbiB8fCB2YWwgPiBydWxlLm1heCkpIHtcbiAgICBlcnJvcnMucHVzaCh1dGlsLmZvcm1hdChvcHRpb25zLm1lc3NhZ2VzW2tleV0ucmFuZ2UsIHJ1bGUuZnVsbEZpZWxkLCBydWxlLm1pbiwgcnVsZS5tYXgpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByYW5nZTsiLCJpbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3V0aWwnO1xudmFyIEVOVU0gPSAnZW51bSc7XG5cbi8qKlxuICogIFJ1bGUgZm9yIHZhbGlkYXRpbmcgYSB2YWx1ZSBleGlzdHMgaW4gYW4gZW51bWVyYWJsZSBsaXN0LlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBlcnJvcnMgQW4gYXJyYXkgb2YgZXJyb3JzIHRoYXQgdGhpcyBydWxlIG1heSBhZGRcbiAqICB2YWxpZGF0aW9uIGVycm9ycyB0by5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5mdW5jdGlvbiBlbnVtZXJhYmxlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucykge1xuICBydWxlW0VOVU1dID0gQXJyYXkuaXNBcnJheShydWxlW0VOVU1dKSA/IHJ1bGVbRU5VTV0gOiBbXTtcbiAgaWYgKHJ1bGVbRU5VTV0uaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XG4gICAgZXJyb3JzLnB1c2godXRpbC5mb3JtYXQob3B0aW9ucy5tZXNzYWdlc1tFTlVNXSwgcnVsZS5mdWxsRmllbGQsIHJ1bGVbRU5VTV0uam9pbignLCAnKSkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVudW1lcmFibGU7IiwiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiAgUnVsZSBmb3IgdmFsaWRhdGluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBwYXR0ZXJuLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBlcnJvcnMgQW4gYXJyYXkgb2YgZXJyb3JzIHRoYXQgdGhpcyBydWxlIG1heSBhZGRcbiAqICB2YWxpZGF0aW9uIGVycm9ycyB0by5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5mdW5jdGlvbiBwYXR0ZXJuKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucykge1xuICBpZiAocnVsZS5wYXR0ZXJuKSB7XG4gICAgaWYgKHJ1bGUucGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gaWYgYSBSZWdFeHAgaW5zdGFuY2UgaXMgcGFzc2VkLCByZXNldCBgbGFzdEluZGV4YCBpbiBjYXNlIGl0cyBgZ2xvYmFsYFxuICAgICAgLy8gZmxhZyBpcyBhY2NpZGVudGFsbHkgc2V0IHRvIGB0cnVlYCwgd2hpY2ggaW4gYSB2YWxpZGF0aW9uIHNjZW5hcmlvXG4gICAgICAvLyBpcyBub3QgbmVjZXNzYXJ5IGFuZCB0aGUgcmVzdWx0IG1pZ2h0IGJlIG1pc2xlYWRpbmdcbiAgICAgIHJ1bGUucGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICAgICAgaWYgKCFydWxlLnBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgZXJyb3JzLnB1c2godXRpbC5mb3JtYXQob3B0aW9ucy5tZXNzYWdlcy5wYXR0ZXJuLm1pc21hdGNoLCBydWxlLmZ1bGxGaWVsZCwgdmFsdWUsIHJ1bGUucGF0dGVybikpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJ1bGUucGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBfcGF0dGVybiA9IG5ldyBSZWdFeHAocnVsZS5wYXR0ZXJuKTtcbiAgICAgIGlmICghX3BhdHRlcm4udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgZXJyb3JzLnB1c2godXRpbC5mb3JtYXQob3B0aW9ucy5tZXNzYWdlcy5wYXR0ZXJuLm1pc21hdGNoLCBydWxlLmZ1bGxGaWVsZCwgdmFsdWUsIHJ1bGUucGF0dGVybikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYXR0ZXJuOyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuL3JlcXVpcmVkJztcbmltcG9ydCB3aGl0ZXNwYWNlIGZyb20gJy4vd2hpdGVzcGFjZSc7XG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnO1xuaW1wb3J0IHJhbmdlIGZyb20gJy4vcmFuZ2UnO1xuaW1wb3J0IGVudW1SdWxlIGZyb20gJy4vZW51bSc7XG5pbXBvcnQgcGF0dGVybiBmcm9tICcuL3BhdHRlcm4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgd2hpdGVzcGFjZTogd2hpdGVzcGFjZSxcbiAgdHlwZTogdHlwZSxcbiAgcmFuZ2U6IHJhbmdlLFxuICAnZW51bSc6IGVudW1SdWxlLFxuICBwYXR0ZXJuOiBwYXR0ZXJuXG59OyIsImltcG9ydCBydWxlcyBmcm9tICcuLi9ydWxlLyc7XG5pbXBvcnQgeyBpc0VtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiAgUGVyZm9ybXMgdmFsaWRhdGlvbiBmb3Igc3RyaW5nIHR5cGVzLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUsICdzdHJpbmcnKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucywgJ3N0cmluZycpO1xuICAgIGlmICghaXNFbXB0eVZhbHVlKHZhbHVlLCAnc3RyaW5nJykpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIHJ1bGVzLnJhbmdlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgICBydWxlcy5wYXR0ZXJuKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgICBpZiAocnVsZS53aGl0ZXNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIHJ1bGVzLndoaXRlc3BhY2UocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5nOyIsImltcG9ydCBydWxlcyBmcm9tICcuLi9ydWxlLyc7XG5pbXBvcnQgeyBpc0VtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiAgVmFsaWRhdGVzIGEgZnVuY3Rpb24uXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5mdW5jdGlvbiBtZXRob2QocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKGlzRW1wdHlWYWx1ZSh2YWx1ZSkgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlcy50eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGhvZDsiLCJpbXBvcnQgcnVsZXMgZnJvbSAnLi4vcnVsZS8nO1xuaW1wb3J0IHsgaXNFbXB0eVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5cbi8qKlxuICogIFZhbGlkYXRlcyBhIG51bWJlci5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cbmZ1bmN0aW9uIG51bWJlcihydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIHJ1bGVzLnJhbmdlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG51bWJlcjsiLCJpbXBvcnQgeyBpc0VtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBydWxlcyBmcm9tICcuLi9ydWxlLyc7XG5cbi8qKlxuICogIFZhbGlkYXRlcyBhIGJvb2xlYW4uXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5mdW5jdGlvbiBib29sZWFuKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZXMudHlwZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICBjYWxsYmFjayhlcnJvcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBib29sZWFuOyIsImltcG9ydCBydWxlcyBmcm9tICcuLi9ydWxlLyc7XG5pbXBvcnQgeyBpc0VtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiAgVmFsaWRhdGVzIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gdHlwZS5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cChydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgaWYgKCFpc0VtcHR5VmFsdWUodmFsdWUpKSB7XG4gICAgICBydWxlcy50eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2V4cDsiLCJpbXBvcnQgcnVsZXMgZnJvbSAnLi4vcnVsZS8nO1xuaW1wb3J0IHsgaXNFbXB0eVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5cbi8qKlxuICogIFZhbGlkYXRlcyBhIG51bWJlciBpcyBhbiBpbnRlZ2VyLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuZnVuY3Rpb24gaW50ZWdlcihydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ1bGVzLnR5cGUocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICAgIHJ1bGVzLnJhbmdlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGludGVnZXI7IiwiaW1wb3J0IHJ1bGVzIGZyb20gJy4uL3J1bGUvJztcbmltcG9ydCB7IGlzRW1wdHlWYWx1ZSB9IGZyb20gJy4uL3V0aWwnO1xuXG4vKipcbiAqICBWYWxpZGF0ZXMgYSBudW1iZXIgaXMgYSBmbG9hdGluZyBwb2ludCBudW1iZXIuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5mdW5jdGlvbiBmbG9hdEZuKHJ1bGUsIHZhbHVlLCBjYWxsYmFjaywgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHZhbGlkYXRlID0gcnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBzb3VyY2UuaGFzT3duUHJvcGVydHkocnVsZS5maWVsZCk7XG4gIGlmICh2YWxpZGF0ZSkge1xuICAgIGlmIChpc0VtcHR5VmFsdWUodmFsdWUpICYmICFydWxlLnJlcXVpcmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcnVsZXMucmVxdWlyZWQocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcnVsZXMudHlwZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgICAgcnVsZXMucmFuZ2UocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmxvYXRGbjsiLCJpbXBvcnQgcnVsZXMgZnJvbSAnLi4vcnVsZS8nO1xuaW1wb3J0IHsgaXNFbXB0eVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG4vKipcbiAqICBWYWxpZGF0ZXMgYW4gYXJyYXkuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5mdW5jdGlvbiBhcnJheShydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlLCAnYXJyYXknKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucywgJ2FycmF5Jyk7XG4gICAgaWYgKCFpc0VtcHR5VmFsdWUodmFsdWUsICdhcnJheScpKSB7XG4gICAgICBydWxlcy50eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgICBydWxlcy5yYW5nZShydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICBjYWxsYmFjayhlcnJvcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheTsiLCJpbXBvcnQgcnVsZXMgZnJvbSAnLi4vcnVsZS8nO1xuaW1wb3J0IHsgaXNFbXB0eVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5cbi8qKlxuICogIFZhbGlkYXRlcyBhbiBvYmplY3QuXG4gKlxuICogIEBwYXJhbSBydWxlIFRoZSB2YWxpZGF0aW9uIHJ1bGUuXG4gKiAgQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgb24gdGhlIHNvdXJjZSBvYmplY3QuXG4gKiAgQHBhcmFtIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqICBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IGJlaW5nIHZhbGlkYXRlZC5cbiAqICBAcGFyYW0gb3B0aW9ucyBUaGUgdmFsaWRhdGlvbiBvcHRpb25zLlxuICogIEBwYXJhbSBvcHRpb25zLm1lc3NhZ2VzIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2VzLlxuICovXG5mdW5jdGlvbiBvYmplY3QocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKGlzRW1wdHlWYWx1ZSh2YWx1ZSkgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBydWxlcy50eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdDsiLCJpbXBvcnQgcnVsZXMgZnJvbSAnLi4vcnVsZS8nO1xuaW1wb3J0IHsgaXNFbXB0eVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG52YXIgRU5VTSA9ICdlbnVtJztcblxuLyoqXG4gKiAgVmFsaWRhdGVzIGFuIGVudW1lcmFibGUgbGlzdC5cbiAqXG4gKiAgQHBhcmFtIHJ1bGUgVGhlIHZhbGlkYXRpb24gcnVsZS5cbiAqICBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBvbiB0aGUgc291cmNlIG9iamVjdC5cbiAqICBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QgYmVpbmcgdmFsaWRhdGVkLlxuICogIEBwYXJhbSBvcHRpb25zIFRoZSB2YWxpZGF0aW9uIG9wdGlvbnMuXG4gKiAgQHBhcmFtIG9wdGlvbnMubWVzc2FnZXMgVGhlIHZhbGlkYXRpb24gbWVzc2FnZXMuXG4gKi9cbmZ1bmN0aW9uIGVudW1lcmFibGUocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgaWYgKGlzRW1wdHlWYWx1ZSh2YWx1ZSkgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcnVsZXNbRU5VTV0ocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZW51bWVyYWJsZTsiLCJpbXBvcnQgcnVsZXMgZnJvbSAnLi4vcnVsZS8nO1xuaW1wb3J0IHsgaXNFbXB0eVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5cbi8qKlxuICogIFZhbGlkYXRlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBwYXR0ZXJuLlxuICpcbiAqICBQZXJmb3JtcyB2YWxpZGF0aW9uIHdoZW4gYSBydWxlIG9ubHkgY29udGFpbnNcbiAqICBhIHBhdHRlcm4gcHJvcGVydHkgYnV0IGlzIG5vdCBkZWNsYXJlZCBhcyBhIHN0cmluZyB0eXBlLlxuICpcbiAqICBAcGFyYW0gcnVsZSBUaGUgdmFsaWRhdGlvbiBydWxlLlxuICogIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkIG9uIHRoZSBzb3VyY2Ugb2JqZWN0LlxuICogIEBwYXJhbSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiAgQHBhcmFtIHNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBiZWluZyB2YWxpZGF0ZWQuXG4gKiAgQHBhcmFtIG9wdGlvbnMgVGhlIHZhbGlkYXRpb24gb3B0aW9ucy5cbiAqICBAcGFyYW0gb3B0aW9ucy5tZXNzYWdlcyBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlcy5cbiAqL1xuZnVuY3Rpb24gcGF0dGVybihydWxlLCB2YWx1ZSwgY2FsbGJhY2ssIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlLCAnc3RyaW5nJykgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgIGlmICghaXNFbXB0eVZhbHVlKHZhbHVlLCAnc3RyaW5nJykpIHtcbiAgICAgIHJ1bGVzLnBhdHRlcm4ocnVsZSwgdmFsdWUsIHNvdXJjZSwgZXJyb3JzLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgY2FsbGJhY2soZXJyb3JzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGF0dGVybjsiLCJpbXBvcnQgcnVsZXMgZnJvbSAnLi4vcnVsZS8nO1xuaW1wb3J0IHsgaXNFbXB0eVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5cbmZ1bmN0aW9uIGRhdGUocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgLy8gY29uc29sZS5sb2coJ2ludGVnZXIgcnVsZSBjYWxsZWQgJWonLCBydWxlKTtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdmFsaWRhdGUgPSBydWxlLnJlcXVpcmVkIHx8ICFydWxlLnJlcXVpcmVkICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShydWxlLmZpZWxkKTtcbiAgLy8gY29uc29sZS5sb2coJ3ZhbGlkYXRlIG9uICVzIHZhbHVlJywgdmFsdWUpO1xuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlKSAmJiAhcnVsZS5yZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJ1bGVzLnJlcXVpcmVkKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgaWYgKCFpc0VtcHR5VmFsdWUodmFsdWUpKSB7XG4gICAgICB2YXIgZGF0ZU9iamVjdCA9IHZvaWQgMDtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGVPYmplY3QgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcnVsZXMudHlwZShydWxlLCBkYXRlT2JqZWN0LCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgICBpZiAoZGF0ZU9iamVjdCkge1xuICAgICAgICBydWxlcy5yYW5nZShydWxlLCBkYXRlT2JqZWN0LmdldFRpbWUoKSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYWxsYmFjayhlcnJvcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYXRlOyIsImltcG9ydCBfdHlwZW9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0IHJ1bGVzIGZyb20gJy4uL3J1bGUvJztcblxuZnVuY3Rpb24gcmVxdWlyZWQocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgdHlwZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gJ2FycmF5JyA6IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpO1xuICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMsIHR5cGUpO1xuICBjYWxsYmFjayhlcnJvcnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlZDsiLCJpbXBvcnQgcnVsZXMgZnJvbSAnLi4vcnVsZS8nO1xuaW1wb3J0IHsgaXNFbXB0eVZhbHVlIH0gZnJvbSAnLi4vdXRpbCc7XG5cbmZ1bmN0aW9uIHR5cGUocnVsZSwgdmFsdWUsIGNhbGxiYWNrLCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIHJ1bGVUeXBlID0gcnVsZS50eXBlO1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB2YWxpZGF0ZSA9IHJ1bGUucmVxdWlyZWQgfHwgIXJ1bGUucmVxdWlyZWQgJiYgc291cmNlLmhhc093blByb3BlcnR5KHJ1bGUuZmllbGQpO1xuICBpZiAodmFsaWRhdGUpIHtcbiAgICBpZiAoaXNFbXB0eVZhbHVlKHZhbHVlLCBydWxlVHlwZSkgJiYgIXJ1bGUucmVxdWlyZWQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH1cbiAgICBydWxlcy5yZXF1aXJlZChydWxlLCB2YWx1ZSwgc291cmNlLCBlcnJvcnMsIG9wdGlvbnMsIHJ1bGVUeXBlKTtcbiAgICBpZiAoIWlzRW1wdHlWYWx1ZSh2YWx1ZSwgcnVsZVR5cGUpKSB7XG4gICAgICBydWxlcy50eXBlKHJ1bGUsIHZhbHVlLCBzb3VyY2UsIGVycm9ycywgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIGNhbGxiYWNrKGVycm9ycyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGU7IiwiaW1wb3J0IHN0cmluZyBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgbWV0aG9kIGZyb20gJy4vbWV0aG9kJztcbmltcG9ydCBudW1iZXIgZnJvbSAnLi9udW1iZXInO1xuaW1wb3J0IGJvb2xlYW4gZnJvbSAnLi9ib29sZWFuJztcbmltcG9ydCByZWdleHAgZnJvbSAnLi9yZWdleHAnO1xuaW1wb3J0IGludGVnZXIgZnJvbSAnLi9pbnRlZ2VyJztcbmltcG9ydCBmbG9hdCBmcm9tICcuL2Zsb2F0JztcbmltcG9ydCBhcnJheSBmcm9tICcuL2FycmF5JztcbmltcG9ydCBvYmplY3QgZnJvbSAnLi9vYmplY3QnO1xuaW1wb3J0IGVudW1WYWxpZGF0b3IgZnJvbSAnLi9lbnVtJztcbmltcG9ydCBwYXR0ZXJuIGZyb20gJy4vcGF0dGVybic7XG5pbXBvcnQgZGF0ZSBmcm9tICcuL2RhdGUnO1xuaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4vcmVxdWlyZWQnO1xuaW1wb3J0IHR5cGUgZnJvbSAnLi90eXBlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdHJpbmc6IHN0cmluZyxcbiAgbWV0aG9kOiBtZXRob2QsXG4gIG51bWJlcjogbnVtYmVyLFxuICBib29sZWFuOiBib29sZWFuLFxuICByZWdleHA6IHJlZ2V4cCxcbiAgaW50ZWdlcjogaW50ZWdlcixcbiAgZmxvYXQ6IGZsb2F0LFxuICBhcnJheTogYXJyYXksXG4gIG9iamVjdDogb2JqZWN0LFxuICAnZW51bSc6IGVudW1WYWxpZGF0b3IsXG4gIHBhdHRlcm46IHBhdHRlcm4sXG4gIGRhdGU6IGRhdGUsXG4gIHVybDogdHlwZSxcbiAgaGV4OiB0eXBlLFxuICBlbWFpbDogdHlwZSxcbiAgcmVxdWlyZWQ6IHJlcXVpcmVkXG59OyIsImV4cG9ydCBmdW5jdGlvbiBuZXdNZXNzYWdlcygpIHtcbiAgcmV0dXJuIHtcbiAgICAnZGVmYXVsdCc6ICdWYWxpZGF0aW9uIGVycm9yIG9uIGZpZWxkICVzJyxcbiAgICByZXF1aXJlZDogJyVzIGlzIHJlcXVpcmVkJyxcbiAgICAnZW51bSc6ICclcyBtdXN0IGJlIG9uZSBvZiAlcycsXG4gICAgd2hpdGVzcGFjZTogJyVzIGNhbm5vdCBiZSBlbXB0eScsXG4gICAgZGF0ZToge1xuICAgICAgZm9ybWF0OiAnJXMgZGF0ZSAlcyBpcyBpbnZhbGlkIGZvciBmb3JtYXQgJXMnLFxuICAgICAgcGFyc2U6ICclcyBkYXRlIGNvdWxkIG5vdCBiZSBwYXJzZWQsICVzIGlzIGludmFsaWQgJyxcbiAgICAgIGludmFsaWQ6ICclcyBkYXRlICVzIGlzIGludmFsaWQnXG4gICAgfSxcbiAgICB0eXBlczoge1xuICAgICAgc3RyaW5nOiAnJXMgaXMgbm90IGEgJXMnLFxuICAgICAgbWV0aG9kOiAnJXMgaXMgbm90IGEgJXMgKGZ1bmN0aW9uKScsXG4gICAgICBhcnJheTogJyVzIGlzIG5vdCBhbiAlcycsXG4gICAgICBvYmplY3Q6ICclcyBpcyBub3QgYW4gJXMnLFxuICAgICAgbnVtYmVyOiAnJXMgaXMgbm90IGEgJXMnLFxuICAgICAgZGF0ZTogJyVzIGlzIG5vdCBhICVzJyxcbiAgICAgIGJvb2xlYW46ICclcyBpcyBub3QgYSAlcycsXG4gICAgICBpbnRlZ2VyOiAnJXMgaXMgbm90IGFuICVzJyxcbiAgICAgIGZsb2F0OiAnJXMgaXMgbm90IGEgJXMnLFxuICAgICAgcmVnZXhwOiAnJXMgaXMgbm90IGEgdmFsaWQgJXMnLFxuICAgICAgZW1haWw6ICclcyBpcyBub3QgYSB2YWxpZCAlcycsXG4gICAgICB1cmw6ICclcyBpcyBub3QgYSB2YWxpZCAlcycsXG4gICAgICBoZXg6ICclcyBpcyBub3QgYSB2YWxpZCAlcydcbiAgICB9LFxuICAgIHN0cmluZzoge1xuICAgICAgbGVuOiAnJXMgbXVzdCBiZSBleGFjdGx5ICVzIGNoYXJhY3RlcnMnLFxuICAgICAgbWluOiAnJXMgbXVzdCBiZSBhdCBsZWFzdCAlcyBjaGFyYWN0ZXJzJyxcbiAgICAgIG1heDogJyVzIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAlcyBjaGFyYWN0ZXJzJyxcbiAgICAgIHJhbmdlOiAnJXMgbXVzdCBiZSBiZXR3ZWVuICVzIGFuZCAlcyBjaGFyYWN0ZXJzJ1xuICAgIH0sXG4gICAgbnVtYmVyOiB7XG4gICAgICBsZW46ICclcyBtdXN0IGVxdWFsICVzJyxcbiAgICAgIG1pbjogJyVzIGNhbm5vdCBiZSBsZXNzIHRoYW4gJXMnLFxuICAgICAgbWF4OiAnJXMgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiAlcycsXG4gICAgICByYW5nZTogJyVzIG11c3QgYmUgYmV0d2VlbiAlcyBhbmQgJXMnXG4gICAgfSxcbiAgICBhcnJheToge1xuICAgICAgbGVuOiAnJXMgbXVzdCBiZSBleGFjdGx5ICVzIGluIGxlbmd0aCcsXG4gICAgICBtaW46ICclcyBjYW5ub3QgYmUgbGVzcyB0aGFuICVzIGluIGxlbmd0aCcsXG4gICAgICBtYXg6ICclcyBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuICVzIGluIGxlbmd0aCcsXG4gICAgICByYW5nZTogJyVzIG11c3QgYmUgYmV0d2VlbiAlcyBhbmQgJXMgaW4gbGVuZ3RoJ1xuICAgIH0sXG4gICAgcGF0dGVybjoge1xuICAgICAgbWlzbWF0Y2g6ICclcyB2YWx1ZSAlcyBkb2VzIG5vdCBtYXRjaCBwYXR0ZXJuICVzJ1xuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgICAgdmFyIGNsb25lZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICAgICAgY2xvbmVkLmNsb25lID0gdGhpcy5jbG9uZTtcbiAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgdmFyIG1lc3NhZ2VzID0gbmV3TWVzc2FnZXMoKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF90eXBlb2YgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgeyBmb3JtYXQsIGNvbXBsZW1lbnRFcnJvciwgYXN5bmNNYXAsIHdhcm5pbmcsIGRlZXBNZXJnZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgdmFsaWRhdG9ycyBmcm9tICcuL3ZhbGlkYXRvci8nO1xuaW1wb3J0IHsgbWVzc2FnZXMgYXMgZGVmYXVsdE1lc3NhZ2VzLCBuZXdNZXNzYWdlcyB9IGZyb20gJy4vbWVzc2FnZXMnO1xuXG4vKipcbiAqICBFbmNhcHN1bGF0ZXMgYSB2YWxpZGF0aW9uIHNjaGVtYS5cbiAqXG4gKiAgQHBhcmFtIGRlc2NyaXB0b3IgQW4gb2JqZWN0IGRlY2xhcmluZyB2YWxpZGF0aW9uIHJ1bGVzXG4gKiAgZm9yIHRoaXMgc2NoZW1hLlxuICovXG5mdW5jdGlvbiBTY2hlbWEoZGVzY3JpcHRvcikge1xuICB0aGlzLnJ1bGVzID0gbnVsbDtcbiAgdGhpcy5fbWVzc2FnZXMgPSBkZWZhdWx0TWVzc2FnZXM7XG4gIHRoaXMuZGVmaW5lKGRlc2NyaXB0b3IpO1xufVxuXG5TY2hlbWEucHJvdG90eXBlID0ge1xuICBtZXNzYWdlczogZnVuY3Rpb24gbWVzc2FnZXMoX21lc3NhZ2VzKSB7XG4gICAgaWYgKF9tZXNzYWdlcykge1xuICAgICAgdGhpcy5fbWVzc2FnZXMgPSBkZWVwTWVyZ2UobmV3TWVzc2FnZXMoKSwgX21lc3NhZ2VzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VzO1xuICB9LFxuICBkZWZpbmU6IGZ1bmN0aW9uIGRlZmluZShydWxlcykge1xuICAgIGlmICghcnVsZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNvbmZpZ3VyZSBhIHNjaGVtYSB3aXRoIG5vIHJ1bGVzJyk7XG4gICAgfVxuICAgIGlmICgodHlwZW9mIHJ1bGVzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihydWxlcykpICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHJ1bGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSdWxlcyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgIH1cbiAgICB0aGlzLnJ1bGVzID0ge307XG4gICAgdmFyIHogPSB2b2lkIDA7XG4gICAgdmFyIGl0ZW0gPSB2b2lkIDA7XG4gICAgZm9yICh6IGluIHJ1bGVzKSB7XG4gICAgICBpZiAocnVsZXMuaGFzT3duUHJvcGVydHkoeikpIHtcbiAgICAgICAgaXRlbSA9IHJ1bGVzW3pdO1xuICAgICAgICB0aGlzLnJ1bGVzW3pdID0gQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW0gOiBbaXRlbV07XG4gICAgICB9XG4gICAgfVxuICB9LFxuICB2YWxpZGF0ZTogZnVuY3Rpb24gdmFsaWRhdGUoc291cmNlXykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgbyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG9jID0gYXJndW1lbnRzWzJdO1xuXG4gICAgdmFyIHNvdXJjZSA9IHNvdXJjZV87XG4gICAgdmFyIG9wdGlvbnMgPSBvO1xuICAgIHZhciBjYWxsYmFjayA9IG9jO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAoIXRoaXMucnVsZXMgfHwgT2JqZWN0LmtleXModGhpcy5ydWxlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcGxldGUocmVzdWx0cykge1xuICAgICAgdmFyIGkgPSB2b2lkIDA7XG4gICAgICB2YXIgZmllbGQgPSB2b2lkIDA7XG4gICAgICB2YXIgZXJyb3JzID0gW107XG4gICAgICB2YXIgZmllbGRzID0ge307XG5cbiAgICAgIGZ1bmN0aW9uIGFkZChlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XG4gICAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdC5hcHBseShlcnJvcnMsIGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVycm9ycy5wdXNoKGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFkZChyZXN1bHRzW2ldKTtcbiAgICAgIH1cbiAgICAgIGlmICghZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBlcnJvcnMgPSBudWxsO1xuICAgICAgICBmaWVsZHMgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZpZWxkID0gZXJyb3JzW2ldLmZpZWxkO1xuICAgICAgICAgIGZpZWxkc1tmaWVsZF0gPSBmaWVsZHNbZmllbGRdIHx8IFtdO1xuICAgICAgICAgIGZpZWxkc1tmaWVsZF0ucHVzaChlcnJvcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYWxsYmFjayhlcnJvcnMsIGZpZWxkcyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubWVzc2FnZXMpIHtcbiAgICAgIHZhciBtZXNzYWdlcyA9IHRoaXMubWVzc2FnZXMoKTtcbiAgICAgIGlmIChtZXNzYWdlcyA9PT0gZGVmYXVsdE1lc3NhZ2VzKSB7XG4gICAgICAgIG1lc3NhZ2VzID0gbmV3TWVzc2FnZXMoKTtcbiAgICAgIH1cbiAgICAgIGRlZXBNZXJnZShtZXNzYWdlcywgb3B0aW9ucy5tZXNzYWdlcyk7XG4gICAgICBvcHRpb25zLm1lc3NhZ2VzID0gbWVzc2FnZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMubWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzKCk7XG4gICAgfVxuICAgIHZhciBhcnIgPSB2b2lkIDA7XG4gICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgIHZhciBzZXJpZXMgPSB7fTtcbiAgICB2YXIga2V5cyA9IG9wdGlvbnMua2V5cyB8fCBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKTtcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKHopIHtcbiAgICAgIGFyciA9IF90aGlzLnJ1bGVzW3pdO1xuICAgICAgdmFsdWUgPSBzb3VyY2Vbel07XG4gICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgICB2YXIgcnVsZSA9IHI7XG4gICAgICAgIGlmICh0eXBlb2YgcnVsZS50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAoc291cmNlID09PSBzb3VyY2VfKSB7XG4gICAgICAgICAgICBzb3VyY2UgPSBfZXh0ZW5kcyh7fSwgc291cmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgPSBzb3VyY2Vbel0gPSBydWxlLnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBydWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcnVsZSA9IHtcbiAgICAgICAgICAgIHZhbGlkYXRvcjogcnVsZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcnVsZSA9IF9leHRlbmRzKHt9LCBydWxlKTtcbiAgICAgICAgfVxuICAgICAgICBydWxlLnZhbGlkYXRvciA9IF90aGlzLmdldFZhbGlkYXRpb25NZXRob2QocnVsZSk7XG4gICAgICAgIHJ1bGUuZmllbGQgPSB6O1xuICAgICAgICBydWxlLmZ1bGxGaWVsZCA9IHJ1bGUuZnVsbEZpZWxkIHx8IHo7XG4gICAgICAgIHJ1bGUudHlwZSA9IF90aGlzLmdldFR5cGUocnVsZSk7XG4gICAgICAgIGlmICghcnVsZS52YWxpZGF0b3IpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2VyaWVzW3pdID0gc2VyaWVzW3pdIHx8IFtdO1xuICAgICAgICBzZXJpZXNbel0ucHVzaCh7XG4gICAgICAgICAgcnVsZTogcnVsZSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgZmllbGQ6IHpcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgZXJyb3JGaWVsZHMgPSB7fTtcbiAgICBhc3luY01hcChzZXJpZXMsIG9wdGlvbnMsIGZ1bmN0aW9uIChkYXRhLCBkb0l0KSB7XG4gICAgICB2YXIgcnVsZSA9IGRhdGEucnVsZTtcbiAgICAgIHZhciBkZWVwID0gKHJ1bGUudHlwZSA9PT0gJ29iamVjdCcgfHwgcnVsZS50eXBlID09PSAnYXJyYXknKSAmJiAoX3R5cGVvZihydWxlLmZpZWxkcykgPT09ICdvYmplY3QnIHx8IF90eXBlb2YocnVsZS5kZWZhdWx0RmllbGQpID09PSAnb2JqZWN0Jyk7XG4gICAgICBkZWVwID0gZGVlcCAmJiAocnVsZS5yZXF1aXJlZCB8fCAhcnVsZS5yZXF1aXJlZCAmJiBkYXRhLnZhbHVlKTtcbiAgICAgIHJ1bGUuZmllbGQgPSBkYXRhLmZpZWxkO1xuICAgICAgZnVuY3Rpb24gYWRkRnVsbGZpZWxkKGtleSwgc2NoZW1hKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc2NoZW1hLCB7XG4gICAgICAgICAgZnVsbEZpZWxkOiBydWxlLmZ1bGxGaWVsZCArICcuJyArIGtleVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2IoKSB7XG4gICAgICAgIHZhciBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcblxuICAgICAgICB2YXIgZXJyb3JzID0gZTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGVycm9ycykpIHtcbiAgICAgICAgICBlcnJvcnMgPSBbZXJyb3JzXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgIHdhcm5pbmcoJ2FzeW5jLXZhbGlkYXRvcjonLCBlcnJvcnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoICYmIHJ1bGUubWVzc2FnZSkge1xuICAgICAgICAgIGVycm9ycyA9IFtdLmNvbmNhdChydWxlLm1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLm1hcChjb21wbGVtZW50RXJyb3IocnVsZSkpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmZpcnN0ICYmIGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBlcnJvckZpZWxkc1tydWxlLmZpZWxkXSA9IDE7XG4gICAgICAgICAgcmV0dXJuIGRvSXQoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlZXApIHtcbiAgICAgICAgICBkb0l0KGVycm9ycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gaWYgcnVsZSBpcyByZXF1aXJlZCBidXQgdGhlIHRhcmdldCBvYmplY3RcbiAgICAgICAgICAvLyBkb2VzIG5vdCBleGlzdCBmYWlsIGF0IHRoZSBydWxlIGxldmVsIGFuZCBkb24ndFxuICAgICAgICAgIC8vIGdvIGRlZXBlclxuICAgICAgICAgIGlmIChydWxlLnJlcXVpcmVkICYmICFkYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocnVsZS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgIGVycm9ycyA9IFtdLmNvbmNhdChydWxlLm1lc3NhZ2UpLm1hcChjb21wbGVtZW50RXJyb3IocnVsZSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9ycyA9IFtvcHRpb25zLmVycm9yKHJ1bGUsIGZvcm1hdChvcHRpb25zLm1lc3NhZ2VzLnJlcXVpcmVkLCBydWxlLmZpZWxkKSldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyb3JzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZG9JdChlcnJvcnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBmaWVsZHNTY2hlbWEgPSB7fTtcbiAgICAgICAgICBpZiAocnVsZS5kZWZhdWx0RmllbGQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gZGF0YS52YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoZGF0YS52YWx1ZS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIGZpZWxkc1NjaGVtYVtrXSA9IHJ1bGUuZGVmYXVsdEZpZWxkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZWxkc1NjaGVtYSA9IF9leHRlbmRzKHt9LCBmaWVsZHNTY2hlbWEsIGRhdGEucnVsZS5maWVsZHMpO1xuICAgICAgICAgIGZvciAodmFyIGYgaW4gZmllbGRzU2NoZW1hKSB7XG4gICAgICAgICAgICBpZiAoZmllbGRzU2NoZW1hLmhhc093blByb3BlcnR5KGYpKSB7XG4gICAgICAgICAgICAgIHZhciBmaWVsZFNjaGVtYSA9IEFycmF5LmlzQXJyYXkoZmllbGRzU2NoZW1hW2ZdKSA/IGZpZWxkc1NjaGVtYVtmXSA6IFtmaWVsZHNTY2hlbWFbZl1dO1xuICAgICAgICAgICAgICBmaWVsZHNTY2hlbWFbZl0gPSBmaWVsZFNjaGVtYS5tYXAoYWRkRnVsbGZpZWxkLmJpbmQobnVsbCwgZikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgc2NoZW1hID0gbmV3IFNjaGVtYShmaWVsZHNTY2hlbWEpO1xuICAgICAgICAgIHNjaGVtYS5tZXNzYWdlcyhvcHRpb25zLm1lc3NhZ2VzKTtcbiAgICAgICAgICBpZiAoZGF0YS5ydWxlLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRhdGEucnVsZS5vcHRpb25zLm1lc3NhZ2VzID0gb3B0aW9ucy5tZXNzYWdlcztcbiAgICAgICAgICAgIGRhdGEucnVsZS5vcHRpb25zLmVycm9yID0gb3B0aW9ucy5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2NoZW1hLnZhbGlkYXRlKGRhdGEudmFsdWUsIGRhdGEucnVsZS5vcHRpb25zIHx8IG9wdGlvbnMsIGZ1bmN0aW9uIChlcnJzKSB7XG4gICAgICAgICAgICBkb0l0KGVycnMgJiYgZXJycy5sZW5ndGggPyBlcnJvcnMuY29uY2F0KGVycnMpIDogZXJycyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHJlcyA9IHJ1bGUudmFsaWRhdG9yKHJ1bGUsIGRhdGEudmFsdWUsIGNiLCBkYXRhLnNvdXJjZSwgb3B0aW9ucyk7XG4gICAgICBpZiAocmVzICYmIHJlcy50aGVuKSB7XG4gICAgICAgIHJlcy50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY2IoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gY2IoZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICBjb21wbGV0ZShyZXN1bHRzKTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0VHlwZTogZnVuY3Rpb24gZ2V0VHlwZShydWxlKSB7XG4gICAgaWYgKHJ1bGUudHlwZSA9PT0gdW5kZWZpbmVkICYmIHJ1bGUucGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgcnVsZS50eXBlID0gJ3BhdHRlcm4nO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJ1bGUudmFsaWRhdG9yICE9PSAnZnVuY3Rpb24nICYmIHJ1bGUudHlwZSAmJiAhdmFsaWRhdG9ycy5oYXNPd25Qcm9wZXJ0eShydWxlLnR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZm9ybWF0KCdVbmtub3duIHJ1bGUgdHlwZSAlcycsIHJ1bGUudHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZS50eXBlIHx8ICdzdHJpbmcnO1xuICB9LFxuICBnZXRWYWxpZGF0aW9uTWV0aG9kOiBmdW5jdGlvbiBnZXRWYWxpZGF0aW9uTWV0aG9kKHJ1bGUpIHtcbiAgICBpZiAodHlwZW9mIHJ1bGUudmFsaWRhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcnVsZS52YWxpZGF0b3I7XG4gICAgfVxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocnVsZSk7XG4gICAgdmFyIG1lc3NhZ2VJbmRleCA9IGtleXMuaW5kZXhPZignbWVzc2FnZScpO1xuICAgIGlmIChtZXNzYWdlSW5kZXggIT09IC0xKSB7XG4gICAgICBrZXlzLnNwbGljZShtZXNzYWdlSW5kZXgsIDEpO1xuICAgIH1cbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDEgJiYga2V5c1swXSA9PT0gJ3JlcXVpcmVkJykge1xuICAgICAgcmV0dXJuIHZhbGlkYXRvcnMucmVxdWlyZWQ7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZGF0b3JzW3RoaXMuZ2V0VHlwZShydWxlKV0gfHwgZmFsc2U7XG4gIH1cbn07XG5cblNjaGVtYS5yZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyKHR5cGUsIHZhbGlkYXRvcikge1xuICBpZiAodHlwZW9mIHZhbGlkYXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlZ2lzdGVyIGEgdmFsaWRhdG9yIGJ5IHR5cGUsIHZhbGlkYXRvciBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9XG4gIHZhbGlkYXRvcnNbdHlwZV0gPSB2YWxpZGF0b3I7XG59O1xuXG5TY2hlbWEubWVzc2FnZXMgPSBkZWZhdWx0TWVzc2FnZXM7XG5cbmV4cG9ydCBkZWZhdWx0IFNjaGVtYTsiLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIHBhdGggY3JlYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlU2V0KG9iamVjdCwgcGF0aCwgdmFsdWUsIGN1c3RvbWl6ZXIpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMSxcbiAgICAgIG5lc3RlZCA9IG9iamVjdDtcblxuICB3aGlsZSAobmVzdGVkICE9IG51bGwgJiYgKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSB0b0tleShwYXRoW2luZGV4XSksXG4gICAgICAgIG5ld1ZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAoaW5kZXggIT0gbGFzdEluZGV4KSB7XG4gICAgICB2YXIgb2JqVmFsdWUgPSBuZXN0ZWRba2V5XTtcbiAgICAgIG5ld1ZhbHVlID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIob2JqVmFsdWUsIGtleSwgbmVzdGVkKSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaXNPYmplY3Qob2JqVmFsdWUpXG4gICAgICAgICAgPyBvYmpWYWx1ZVxuICAgICAgICAgIDogKGlzSW5kZXgocGF0aFtpbmRleCArIDFdKSA/IFtdIDoge30pO1xuICAgICAgfVxuICAgIH1cbiAgICBhc3NpZ25WYWx1ZShuZXN0ZWQsIGtleSwgbmV3VmFsdWUpO1xuICAgIG5lc3RlZCA9IG5lc3RlZFtrZXldO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNldDtcbiIsInZhciBiYXNlU2V0ID0gcmVxdWlyZSgnLi9fYmFzZVNldCcpO1xuXG4vKipcbiAqIFNldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgYSBwb3J0aW9uIG9mIGBwYXRoYCBkb2Vzbid0IGV4aXN0LFxuICogaXQncyBjcmVhdGVkLiBBcnJheXMgYXJlIGNyZWF0ZWQgZm9yIG1pc3NpbmcgaW5kZXggcHJvcGVydGllcyB3aGlsZSBvYmplY3RzXG4gKiBhcmUgY3JlYXRlZCBmb3IgYWxsIG90aGVyIG1pc3NpbmcgcHJvcGVydGllcy4gVXNlIGBfLnNldFdpdGhgIHRvIGN1c3RvbWl6ZVxuICogYHBhdGhgIGNyZWF0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLnNldChvYmplY3QsICdhWzBdLmIuYycsIDQpO1xuICogY29uc29sZS5sb2cob2JqZWN0LmFbMF0uYi5jKTtcbiAqIC8vID0+IDRcbiAqXG4gKiBfLnNldChvYmplY3QsIFsneCcsICcwJywgJ3knLCAneiddLCA1KTtcbiAqIGNvbnNvbGUubG9nKG9iamVjdC54WzBdLnkueik7XG4gKiAvLyA9PiA1XG4gKi9cbmZ1bmN0aW9uIHNldChvYmplY3QsIHBhdGgsIHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IG9iamVjdCA6IGJhc2VTZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIik7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG5leHBvcnRzLmlzRm9ybUZpZWxkID0gaXNGb3JtRmllbGQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZUZvcm1GaWVsZDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBGaWVsZCA9IGZ1bmN0aW9uIEZpZWxkKGZpZWxkcykge1xuICAoMCwgX2NsYXNzQ2FsbENoZWNrM1tcImRlZmF1bHRcIl0pKHRoaXMsIEZpZWxkKTtcblxuICAoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkodGhpcywgZmllbGRzKTtcbn07XG5cbmZ1bmN0aW9uIGlzRm9ybUZpZWxkKG9iaikge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRmllbGQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm1GaWVsZChmaWVsZCkge1xuICBpZiAoaXNGb3JtRmllbGQoZmllbGQpKSB7XG4gICAgcmV0dXJuIGZpZWxkO1xuICB9XG4gIHJldHVybiBuZXcgRmllbGQoZmllbGQpO1xufSIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC42XG4gKiByZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtcbnZhciBiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsYz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLGQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LGU9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsZj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxnPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LGg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksaz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLGw9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYXN5bmNfbW9kZVwiKTo2MDExMSxtPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxuPWI/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHA9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMscT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOlxuNjAxMTUscj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2O2Z1bmN0aW9uIHQoYSl7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSl7dmFyIHU9YS4kJHR5cGVvZjtzd2l0Y2godSl7Y2FzZSBjOnN3aXRjaChhPWEudHlwZSxhKXtjYXNlIGw6Y2FzZSBtOmNhc2UgZTpjYXNlIGc6Y2FzZSBmOmNhc2UgcDpyZXR1cm4gYTtkZWZhdWx0OnN3aXRjaChhPWEmJmEuJCR0eXBlb2YsYSl7Y2FzZSBrOmNhc2UgbjpjYXNlIGg6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm4gdX19Y2FzZSByOmNhc2UgcTpjYXNlIGQ6cmV0dXJuIHV9fX1mdW5jdGlvbiB2KGEpe3JldHVybiB0KGEpPT09bX1leHBvcnRzLnR5cGVPZj10O2V4cG9ydHMuQXN5bmNNb2RlPWw7ZXhwb3J0cy5Db25jdXJyZW50TW9kZT1tO2V4cG9ydHMuQ29udGV4dENvbnN1bWVyPWs7ZXhwb3J0cy5Db250ZXh0UHJvdmlkZXI9aDtleHBvcnRzLkVsZW1lbnQ9YztleHBvcnRzLkZvcndhcmRSZWY9bjtcbmV4cG9ydHMuRnJhZ21lbnQ9ZTtleHBvcnRzLkxhenk9cjtleHBvcnRzLk1lbW89cTtleHBvcnRzLlBvcnRhbD1kO2V4cG9ydHMuUHJvZmlsZXI9ZztleHBvcnRzLlN0cmljdE1vZGU9ZjtleHBvcnRzLlN1c3BlbnNlPXA7ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYXx8YT09PWV8fGE9PT1tfHxhPT09Z3x8YT09PWZ8fGE9PT1wfHxcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiYoYS4kJHR5cGVvZj09PXJ8fGEuJCR0eXBlb2Y9PT1xfHxhLiQkdHlwZW9mPT09aHx8YS4kJHR5cGVvZj09PWt8fGEuJCR0eXBlb2Y9PT1uKX07ZXhwb3J0cy5pc0FzeW5jTW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gdihhKXx8dChhKT09PWx9O2V4cG9ydHMuaXNDb25jdXJyZW50TW9kZT12O2V4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1rfTtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1ofTtleHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Y307ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1ufTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1lfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXJ9O2V4cG9ydHMuaXNNZW1vPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cX07ZXhwb3J0cy5pc1BvcnRhbD1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWR9O2V4cG9ydHMuaXNQcm9maWxlcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWd9O2V4cG9ydHMuaXNTdHJpY3RNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09Zn07XG5leHBvcnRzLmlzU3VzcGVuc2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1wfTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC42XG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTtcbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8XG4gIC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSk7XG59XG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5cbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xuXG4vLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlO1xuICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZXM6IHRydWUsXG4gICAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gICAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBjYWxsZWU6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgICAnJCR0eXBlb2YnOiB0cnVlLFxuICAgIHJlbmRlcjogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlXG59O1xuXG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAgICckJHR5cGVvZic6IHRydWUsXG4gICAgY29tcGFyZTogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlLFxuICAgIHR5cGU6IHRydWVcbn07XG5cbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tSZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgICBpZiAoUmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgICAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICAgIH1cbiAgICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcblxuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICAgIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuXG4gICAgICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgICAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG5leHBvcnRzLmFyZ3VtZW50Q29udGFpbmVyID0gYXJndW1lbnRDb250YWluZXI7XG5leHBvcnRzLmlkZW50aXR5ID0gaWRlbnRpdHk7XG5leHBvcnRzLmZsYXR0ZW5BcnJheSA9IGZsYXR0ZW5BcnJheTtcbmV4cG9ydHMudHJlZVRyYXZlcnNlID0gdHJlZVRyYXZlcnNlO1xuZXhwb3J0cy5mbGF0dGVuRmllbGRzID0gZmxhdHRlbkZpZWxkcztcbmV4cG9ydHMubm9ybWFsaXplVmFsaWRhdGVSdWxlcyA9IG5vcm1hbGl6ZVZhbGlkYXRlUnVsZXM7XG5leHBvcnRzLmdldFZhbGlkYXRlVHJpZ2dlcnMgPSBnZXRWYWxpZGF0ZVRyaWdnZXJzO1xuZXhwb3J0cy5nZXRWYWx1ZUZyb21FdmVudCA9IGdldFZhbHVlRnJvbUV2ZW50O1xuZXhwb3J0cy5nZXRFcnJvclN0cnMgPSBnZXRFcnJvclN0cnM7XG5leHBvcnRzLmdldFBhcmFtcyA9IGdldFBhcmFtcztcbmV4cG9ydHMuaXNFbXB0eU9iamVjdCA9IGlzRW1wdHlPYmplY3Q7XG5leHBvcnRzLmhhc1J1bGVzID0gaGFzUnVsZXM7XG5leHBvcnRzLnN0YXJ0c1dpdGggPSBzdGFydHNXaXRoO1xuXG52YXIgX2hvaXN0Tm9uUmVhY3RTdGF0aWNzID0gcmVxdWlyZSgnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnKTtcblxudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ob2lzdE5vblJlYWN0U3RhdGljcyk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdXcmFwcGVkQ29tcG9uZW50Jztcbn1cblxuZnVuY3Rpb24gYXJndW1lbnRDb250YWluZXIoQ29udGFpbmVyLCBXcmFwcGVkQ29tcG9uZW50KSB7XG4gIC8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowICovXG4gIENvbnRhaW5lci5kaXNwbGF5TmFtZSA9ICdGb3JtKCcgKyBnZXREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KSArICcpJztcbiAgQ29udGFpbmVyLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICByZXR1cm4gKDAsIF9ob2lzdE5vblJlYWN0U3RhdGljczJbJ2RlZmF1bHQnXSkoQ29udGFpbmVyLCBXcmFwcGVkQ29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHkob2JqKSB7XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFycik7XG59XG5cbmZ1bmN0aW9uIHRyZWVUcmF2ZXJzZSgpIHtcbiAgdmFyIHBhdGggPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICB2YXIgdHJlZSA9IGFyZ3VtZW50c1sxXTtcbiAgdmFyIGlzTGVhZk5vZGUgPSBhcmd1bWVudHNbMl07XG4gIHZhciBlcnJvck1lc3NhZ2UgPSBhcmd1bWVudHNbM107XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1s0XTtcblxuICBpZiAoaXNMZWFmTm9kZShwYXRoLCB0cmVlKSkge1xuICAgIGNhbGxiYWNrKHBhdGgsIHRyZWUpO1xuICB9IGVsc2UgaWYgKHRyZWUgPT09IHVuZGVmaW5lZCB8fCB0cmVlID09PSBudWxsKSB7XG4gICAgLy8gRG8gbm90aGluZ1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHJlZSkpIHtcbiAgICB0cmVlLmZvckVhY2goZnVuY3Rpb24gKHN1YlRyZWUsIGluZGV4KSB7XG4gICAgICByZXR1cm4gdHJlZVRyYXZlcnNlKHBhdGggKyAnWycgKyBpbmRleCArICddJywgc3ViVHJlZSwgaXNMZWFmTm9kZSwgZXJyb3JNZXNzYWdlLCBjYWxsYmFjayk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSXQncyBvYmplY3QgYW5kIG5vdCBhIGxlYWYgbm9kZVxuICAgIGlmICh0eXBlb2YgdHJlZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoZmFsc2UsIGVycm9yTWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHRyZWUpLmZvckVhY2goZnVuY3Rpb24gKHN1YlRyZWVLZXkpIHtcbiAgICAgIHZhciBzdWJUcmVlID0gdHJlZVtzdWJUcmVlS2V5XTtcbiAgICAgIHRyZWVUcmF2ZXJzZSgnJyArIHBhdGggKyAocGF0aCA/ICcuJyA6ICcnKSArIHN1YlRyZWVLZXksIHN1YlRyZWUsIGlzTGVhZk5vZGUsIGVycm9yTWVzc2FnZSwgY2FsbGJhY2spO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5GaWVsZHMobWF5YmVOZXN0ZWRGaWVsZHMsIGlzTGVhZk5vZGUsIGVycm9yTWVzc2FnZSkge1xuICB2YXIgZmllbGRzID0ge307XG4gIHRyZWVUcmF2ZXJzZSh1bmRlZmluZWQsIG1heWJlTmVzdGVkRmllbGRzLCBpc0xlYWZOb2RlLCBlcnJvck1lc3NhZ2UsIGZ1bmN0aW9uIChwYXRoLCBub2RlKSB7XG4gICAgZmllbGRzW3BhdGhdID0gbm9kZTtcbiAgfSk7XG4gIHJldHVybiBmaWVsZHM7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhbGlkYXRlUnVsZXModmFsaWRhdGUsIHJ1bGVzLCB2YWxpZGF0ZVRyaWdnZXIpIHtcbiAgdmFyIHZhbGlkYXRlUnVsZXMgPSB2YWxpZGF0ZS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgbmV3SXRlbSA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIGl0ZW0sIHtcbiAgICAgIHRyaWdnZXI6IGl0ZW0udHJpZ2dlciB8fCBbXVxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgbmV3SXRlbS50cmlnZ2VyID09PSAnc3RyaW5nJykge1xuICAgICAgbmV3SXRlbS50cmlnZ2VyID0gW25ld0l0ZW0udHJpZ2dlcl07XG4gICAgfVxuICAgIHJldHVybiBuZXdJdGVtO1xuICB9KTtcbiAgaWYgKHJ1bGVzKSB7XG4gICAgdmFsaWRhdGVSdWxlcy5wdXNoKHtcbiAgICAgIHRyaWdnZXI6IHZhbGlkYXRlVHJpZ2dlciA/IFtdLmNvbmNhdCh2YWxpZGF0ZVRyaWdnZXIpIDogW10sXG4gICAgICBydWxlczogcnVsZXNcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdmFsaWRhdGVSdWxlcztcbn1cblxuZnVuY3Rpb24gZ2V0VmFsaWRhdGVUcmlnZ2Vycyh2YWxpZGF0ZVJ1bGVzKSB7XG4gIHJldHVybiB2YWxpZGF0ZVJ1bGVzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiAhIWl0ZW0ucnVsZXMgJiYgaXRlbS5ydWxlcy5sZW5ndGg7XG4gIH0pLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLnRyaWdnZXI7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAocHJlLCBjdXJyKSB7XG4gICAgcmV0dXJuIHByZS5jb25jYXQoY3Vycik7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRXZlbnQoZSkge1xuICAvLyBUbyBzdXBwb3J0IGN1c3RvbSBlbGVtZW50XG4gIGlmICghZSB8fCAhZS50YXJnZXQpIHtcbiAgICByZXR1cm4gZTtcbiAgfVxuICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG5cbiAgcmV0dXJuIHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldEVycm9yU3RycyhlcnJvcnMpIHtcbiAgaWYgKGVycm9ycykge1xuICAgIHJldHVybiBlcnJvcnMubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZSAmJiBlLm1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGUubWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlcnJvcnM7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmFtcyhucywgb3B0LCBjYikge1xuICB2YXIgbmFtZXMgPSBucztcbiAgdmFyIG9wdGlvbnMgPSBvcHQ7XG4gIHZhciBjYWxsYmFjayA9IGNiO1xuICBpZiAoY2IgPT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgbmFtZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gbmFtZXM7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgICBuYW1lcyA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobmFtZXMpKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IG5hbWVzIHx8IHt9O1xuICAgICAgbmFtZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZXM6IG5hbWVzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlPYmplY3Qob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaGFzUnVsZXModmFsaWRhdGUpIHtcbiAgaWYgKHZhbGlkYXRlKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRlLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLnJ1bGVzICYmIGl0ZW0ucnVsZXMubGVuZ3RoO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc3RhcnRzV2l0aChzdHIsIHByZWZpeCkge1xuICByZXR1cm4gc3RyLmxhc3RJbmRleE9mKHByZWZpeCwgMCkgPT09IDA7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5Mik7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlRmllbGRzU3RvcmU7XG5cbnZhciBfc2V0ID0gcmVxdWlyZSgnbG9kYXNoL3NldCcpO1xuXG52YXIgX3NldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXQpO1xuXG52YXIgX2NyZWF0ZUZvcm1GaWVsZCA9IHJlcXVpcmUoJy4vY3JlYXRlRm9ybUZpZWxkJyk7XG5cbnZhciBfY3JlYXRlRm9ybUZpZWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUZvcm1GaWVsZCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gcGFydE9mKGEsIGIpIHtcbiAgcmV0dXJuIGIuaW5kZXhPZihhKSA9PT0gMCAmJiBbJy4nLCAnWyddLmluZGV4T2YoYlthLmxlbmd0aF0pICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxGbGF0dGVuRmllbGRzKGZpZWxkcykge1xuICByZXR1cm4gKDAsIF91dGlscy5mbGF0dGVuRmllbGRzKShmaWVsZHMsIGZ1bmN0aW9uIChfLCBub2RlKSB7XG4gICAgcmV0dXJuICgwLCBfY3JlYXRlRm9ybUZpZWxkLmlzRm9ybUZpZWxkKShub2RlKTtcbiAgfSwgJ1lvdSBtdXN0IHdyYXAgZmllbGQgZGF0YSB3aXRoIGBjcmVhdGVGb3JtRmllbGRgLicpO1xufVxuXG52YXIgRmllbGRzU3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEZpZWxkc1N0b3JlKGZpZWxkcykge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIEZpZWxkc1N0b3JlKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuZmllbGRzID0gaW50ZXJuYWxGbGF0dGVuRmllbGRzKGZpZWxkcyk7XG4gICAgdGhpcy5maWVsZHNNZXRhID0ge307XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzM1snZGVmYXVsdCddKShGaWVsZHNTdG9yZSwgW3tcbiAgICBrZXk6ICd1cGRhdGVGaWVsZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVGaWVsZHMoZmllbGRzKSB7XG4gICAgICB0aGlzLmZpZWxkcyA9IGludGVybmFsRmxhdHRlbkZpZWxkcyhmaWVsZHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZsYXR0ZW5SZWdpc3RlcmVkRmllbGRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmxhdHRlblJlZ2lzdGVyZWRGaWVsZHMoZmllbGRzKSB7XG4gICAgICB2YXIgdmFsaWRGaWVsZHNOYW1lID0gdGhpcy5nZXRBbGxGaWVsZHNOYW1lKCk7XG4gICAgICByZXR1cm4gKDAsIF91dGlscy5mbGF0dGVuRmllbGRzKShmaWVsZHMsIGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZEZpZWxkc05hbWUuaW5kZXhPZihwYXRoKSA+PSAwO1xuICAgICAgfSwgJ1lvdSBjYW5ub3Qgc2V0IGEgZm9ybSBmaWVsZCBiZWZvcmUgcmVuZGVyaW5nIGEgZmllbGQgYXNzb2NpYXRlZCB3aXRoIHRoZSB2YWx1ZS4nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRGaWVsZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGaWVsZHMoZmllbGRzKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZmllbGRzTWV0YSA9IHRoaXMuZmllbGRzTWV0YTtcbiAgICAgIHZhciBub3dGaWVsZHMgPSAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCB0aGlzLmZpZWxkcywgZmllbGRzKTtcbiAgICAgIHZhciBub3dWYWx1ZXMgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKGZpZWxkc01ldGEpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgbm93VmFsdWVzW2ZdID0gX3RoaXMuZ2V0VmFsdWVGcm9tRmllbGRzKGYsIG5vd0ZpZWxkcyk7XG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5rZXlzKG5vd1ZhbHVlcykuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgICB2YXIgdmFsdWUgPSBub3dWYWx1ZXNbZl07XG4gICAgICAgIHZhciBmaWVsZE1ldGEgPSBfdGhpcy5nZXRGaWVsZE1ldGEoZik7XG4gICAgICAgIGlmIChmaWVsZE1ldGEgJiYgZmllbGRNZXRhLm5vcm1hbGl6ZSkge1xuICAgICAgICAgIHZhciBub3dWYWx1ZSA9IGZpZWxkTWV0YS5ub3JtYWxpemUodmFsdWUsIF90aGlzLmdldFZhbHVlRnJvbUZpZWxkcyhmLCBfdGhpcy5maWVsZHMpLCBub3dWYWx1ZXMpO1xuICAgICAgICAgIGlmIChub3dWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG5vd0ZpZWxkc1tmXSA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIG5vd0ZpZWxkc1tmXSwge1xuICAgICAgICAgICAgICB2YWx1ZTogbm93VmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmZpZWxkcyA9IG5vd0ZpZWxkcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXNldEZpZWxkcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0RmllbGRzKG5zKSB7XG4gICAgICB2YXIgZmllbGRzID0gdGhpcy5maWVsZHM7XG5cbiAgICAgIHZhciBuYW1lcyA9IG5zID8gdGhpcy5nZXRWYWxpZEZpZWxkc0Z1bGxOYW1lKG5zKSA6IHRoaXMuZ2V0QWxsRmllbGRzTmFtZSgpO1xuICAgICAgcmV0dXJuIG5hbWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICAgIHZhciBmaWVsZCA9IGZpZWxkc1tuYW1lXTtcbiAgICAgICAgaWYgKGZpZWxkICYmICd2YWx1ZScgaW4gZmllbGQpIHtcbiAgICAgICAgICBhY2NbbmFtZV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldEZpZWxkTWV0YScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZpZWxkTWV0YShuYW1lLCBtZXRhKSB7XG4gICAgICB0aGlzLmZpZWxkc01ldGFbbmFtZV0gPSBtZXRhO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldEZpZWxkc0FzRGlydHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRGaWVsZHNBc0RpcnR5KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmllbGRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBmaWVsZCA9IF90aGlzMi5maWVsZHNbbmFtZV07XG4gICAgICAgIHZhciBmaWVsZE1ldGEgPSBfdGhpczIuZmllbGRzTWV0YVtuYW1lXTtcbiAgICAgICAgaWYgKGZpZWxkICYmIGZpZWxkTWV0YSAmJiAoMCwgX3V0aWxzLmhhc1J1bGVzKShmaWVsZE1ldGEudmFsaWRhdGUpKSB7XG4gICAgICAgICAgX3RoaXMyLmZpZWxkc1tuYW1lXSA9ICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIGZpZWxkLCB7XG4gICAgICAgICAgICBkaXJ0eTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRGaWVsZE1ldGEnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWVsZE1ldGEobmFtZSkge1xuICAgICAgdGhpcy5maWVsZHNNZXRhW25hbWVdID0gdGhpcy5maWVsZHNNZXRhW25hbWVdIHx8IHt9O1xuICAgICAgcmV0dXJuIHRoaXMuZmllbGRzTWV0YVtuYW1lXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWx1ZUZyb21GaWVsZHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZUZyb21GaWVsZHMobmFtZSwgZmllbGRzKSB7XG4gICAgICB2YXIgZmllbGQgPSBmaWVsZHNbbmFtZV07XG4gICAgICBpZiAoZmllbGQgJiYgJ3ZhbHVlJyBpbiBmaWVsZCkge1xuICAgICAgICByZXR1cm4gZmllbGQudmFsdWU7XG4gICAgICB9XG4gICAgICB2YXIgZmllbGRNZXRhID0gdGhpcy5nZXRGaWVsZE1ldGEobmFtZSk7XG4gICAgICByZXR1cm4gZmllbGRNZXRhICYmIGZpZWxkTWV0YS5pbml0aWFsVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsaWRGaWVsZHNOYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsaWRGaWVsZHNOYW1lKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBmaWVsZHNNZXRhID0gdGhpcy5maWVsZHNNZXRhO1xuXG4gICAgICByZXR1cm4gZmllbGRzTWV0YSA/IE9iamVjdC5rZXlzKGZpZWxkc01ldGEpLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gIV90aGlzMy5nZXRGaWVsZE1ldGEobmFtZSkuaGlkZGVuO1xuICAgICAgfSkgOiBbXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBbGxGaWVsZHNOYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsRmllbGRzTmFtZSgpIHtcbiAgICAgIHZhciBmaWVsZHNNZXRhID0gdGhpcy5maWVsZHNNZXRhO1xuXG4gICAgICByZXR1cm4gZmllbGRzTWV0YSA/IE9iamVjdC5rZXlzKGZpZWxkc01ldGEpIDogW107XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsaWRGaWVsZHNGdWxsTmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbGlkRmllbGRzRnVsbE5hbWUobWF5YmVQYXJ0aWFsTmFtZSkge1xuICAgICAgdmFyIG1heWJlUGFydGlhbE5hbWVzID0gQXJyYXkuaXNBcnJheShtYXliZVBhcnRpYWxOYW1lKSA/IG1heWJlUGFydGlhbE5hbWUgOiBbbWF5YmVQYXJ0aWFsTmFtZV07XG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZEZpZWxkc05hbWUoKS5maWx0ZXIoZnVuY3Rpb24gKGZ1bGxOYW1lKSB7XG4gICAgICAgIHJldHVybiBtYXliZVBhcnRpYWxOYW1lcy5zb21lKGZ1bmN0aW9uIChwYXJ0aWFsTmFtZSkge1xuICAgICAgICAgIHJldHVybiBmdWxsTmFtZSA9PT0gcGFydGlhbE5hbWUgfHwgKDAsIF91dGlscy5zdGFydHNXaXRoKShmdWxsTmFtZSwgcGFydGlhbE5hbWUpICYmIFsnLicsICdbJ10uaW5kZXhPZihmdWxsTmFtZVtwYXJ0aWFsTmFtZS5sZW5ndGhdKSA+PSAwO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEZpZWxkVmFsdWVQcm9wVmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWVsZFZhbHVlUHJvcFZhbHVlKGZpZWxkTWV0YSkge1xuICAgICAgdmFyIG5hbWUgPSBmaWVsZE1ldGEubmFtZSxcbiAgICAgICAgICBnZXRWYWx1ZVByb3BzID0gZmllbGRNZXRhLmdldFZhbHVlUHJvcHMsXG4gICAgICAgICAgdmFsdWVQcm9wTmFtZSA9IGZpZWxkTWV0YS52YWx1ZVByb3BOYW1lO1xuXG4gICAgICB2YXIgZmllbGQgPSB0aGlzLmdldEZpZWxkKG5hbWUpO1xuICAgICAgdmFyIGZpZWxkVmFsdWUgPSAndmFsdWUnIGluIGZpZWxkID8gZmllbGQudmFsdWUgOiBmaWVsZE1ldGEuaW5pdGlhbFZhbHVlO1xuICAgICAgaWYgKGdldFZhbHVlUHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGdldFZhbHVlUHJvcHMoZmllbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoe30sIHZhbHVlUHJvcE5hbWUsIGZpZWxkVmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEZpZWxkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RmllbGQobmFtZSkge1xuICAgICAgcmV0dXJuICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIHRoaXMuZmllbGRzW25hbWVdLCB7XG4gICAgICAgIG5hbWU6IG5hbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE5vdENvbGxlY3RlZEZpZWxkcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE5vdENvbGxlY3RlZEZpZWxkcygpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgZmllbGRzTmFtZSA9IHRoaXMuZ2V0VmFsaWRGaWVsZHNOYW1lKCk7XG4gICAgICByZXR1cm4gZmllbGRzTmFtZS5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICFfdGhpczQuZmllbGRzW25hbWVdO1xuICAgICAgfSkubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBkaXJ0eTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IF90aGlzNC5nZXRGaWVsZE1ldGEobmFtZSkuaW5pdGlhbFZhbHVlXG4gICAgICAgIH07XG4gICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZmllbGQpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfc2V0MlsnZGVmYXVsdCddKShhY2MsIGZpZWxkLm5hbWUsICgwLCBfY3JlYXRlRm9ybUZpZWxkMlsnZGVmYXVsdCddKShmaWVsZCkpO1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE5lc3RlZEFsbEZpZWxkcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE5lc3RlZEFsbEZpZWxkcygpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5maWVsZHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuYW1lKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3NldDJbJ2RlZmF1bHQnXSkoYWNjLCBuYW1lLCAoMCwgX2NyZWF0ZUZvcm1GaWVsZDJbJ2RlZmF1bHQnXSkoX3RoaXM1LmZpZWxkc1tuYW1lXSkpO1xuICAgICAgfSwgdGhpcy5nZXROb3RDb2xsZWN0ZWRGaWVsZHMoKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RmllbGRNZW1iZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWVsZE1lbWJlcihuYW1lLCBtZW1iZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEZpZWxkKG5hbWUpW21lbWJlcl07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TmVzdGVkRmllbGRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TmVzdGVkRmllbGRzKG5hbWVzLCBnZXR0ZXIpIHtcbiAgICAgIHZhciBmaWVsZHMgPSBuYW1lcyB8fCB0aGlzLmdldFZhbGlkRmllbGRzTmFtZSgpO1xuICAgICAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZikge1xuICAgICAgICByZXR1cm4gKDAsIF9zZXQyWydkZWZhdWx0J10pKGFjYywgZiwgZ2V0dGVyKGYpKTtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXROZXN0ZWRGaWVsZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE5lc3RlZEZpZWxkKG5hbWUsIGdldHRlcikge1xuICAgICAgdmFyIGZ1bGxOYW1lcyA9IHRoaXMuZ2V0VmFsaWRGaWVsZHNGdWxsTmFtZShuYW1lKTtcbiAgICAgIGlmIChmdWxsTmFtZXMubGVuZ3RoID09PSAwIHx8IC8vIE5vdCByZWdpc3RlcmVkXG4gICAgICBmdWxsTmFtZXMubGVuZ3RoID09PSAxICYmIGZ1bGxOYW1lc1swXSA9PT0gbmFtZSAvLyBOYW1lIGFscmVhZHkgaXMgZnVsbCBuYW1lLlxuICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGdldHRlcihuYW1lKTtcbiAgICAgICAgfVxuICAgICAgdmFyIGlzQXJyYXlWYWx1ZSA9IGZ1bGxOYW1lc1swXVtuYW1lLmxlbmd0aF0gPT09ICdbJztcbiAgICAgIHZhciBzdWZmaXhOYW1lU3RhcnRJbmRleCA9IGlzQXJyYXlWYWx1ZSA/IG5hbWUubGVuZ3RoIDogbmFtZS5sZW5ndGggKyAxO1xuICAgICAgcmV0dXJuIGZ1bGxOYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZnVsbE5hbWUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfc2V0MlsnZGVmYXVsdCddKShhY2MsIGZ1bGxOYW1lLnNsaWNlKHN1ZmZpeE5hbWVTdGFydEluZGV4KSwgZ2V0dGVyKGZ1bGxOYW1lKSk7XG4gICAgICB9LCBpc0FycmF5VmFsdWUgPyBbXSA6IHt9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc1ZhbGlkTmVzdGVkRmllbGROYW1lJyxcblxuXG4gICAgLy8gQHByaXZhdGVcbiAgICAvLyBCRzogYGFgIGFuZCBgYS5iYCBjYW5ub3QgYmUgdXNlIGluIHRoZSBzYW1lIGZvcm1cbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNWYWxpZE5lc3RlZEZpZWxkTmFtZShuYW1lKSB7XG4gICAgICB2YXIgbmFtZXMgPSB0aGlzLmdldEFsbEZpZWxkc05hbWUoKTtcbiAgICAgIHJldHVybiBuYW1lcy5ldmVyeShmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gIXBhcnRPZihuLCBuYW1lKSAmJiAhcGFydE9mKG5hbWUsIG4pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xlYXJGaWVsZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyRmllbGQobmFtZSkge1xuICAgICAgZGVsZXRlIHRoaXMuZmllbGRzW25hbWVdO1xuICAgICAgZGVsZXRlIHRoaXMuZmllbGRzTWV0YVtuYW1lXTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZpZWxkc1N0b3JlO1xufSgpO1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gIHRoaXMuc2V0RmllbGRzSW5pdGlhbFZhbHVlID0gZnVuY3Rpb24gKGluaXRpYWxWYWx1ZXMpIHtcbiAgICB2YXIgZmxhdHRlbmVkSW5pdGlhbFZhbHVlcyA9IF90aGlzNi5mbGF0dGVuUmVnaXN0ZXJlZEZpZWxkcyhpbml0aWFsVmFsdWVzKTtcbiAgICB2YXIgZmllbGRzTWV0YSA9IF90aGlzNi5maWVsZHNNZXRhO1xuICAgIE9iamVjdC5rZXlzKGZsYXR0ZW5lZEluaXRpYWxWYWx1ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGlmIChmaWVsZHNNZXRhW25hbWVdKSB7XG4gICAgICAgIF90aGlzNi5zZXRGaWVsZE1ldGEobmFtZSwgKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgX3RoaXM2LmdldEZpZWxkTWV0YShuYW1lKSwge1xuICAgICAgICAgIGluaXRpYWxWYWx1ZTogZmxhdHRlbmVkSW5pdGlhbFZhbHVlc1tuYW1lXVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5nZXRBbGxWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpZWxkc01ldGEgPSBfdGhpczYuZmllbGRzTWV0YSxcbiAgICAgICAgZmllbGRzID0gX3RoaXM2LmZpZWxkcztcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWVsZHNNZXRhKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbmFtZSkge1xuICAgICAgcmV0dXJuICgwLCBfc2V0MlsnZGVmYXVsdCddKShhY2MsIG5hbWUsIF90aGlzNi5nZXRWYWx1ZUZyb21GaWVsZHMobmFtZSwgZmllbGRzKSk7XG4gICAgfSwge30pO1xuICB9O1xuXG4gIHRoaXMuZ2V0RmllbGRzVmFsdWUgPSBmdW5jdGlvbiAobmFtZXMpIHtcbiAgICByZXR1cm4gX3RoaXM2LmdldE5lc3RlZEZpZWxkcyhuYW1lcywgX3RoaXM2LmdldEZpZWxkVmFsdWUpO1xuICB9O1xuXG4gIHRoaXMuZ2V0RmllbGRWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGZpZWxkcyA9IF90aGlzNi5maWVsZHM7XG5cbiAgICByZXR1cm4gX3RoaXM2LmdldE5lc3RlZEZpZWxkKG5hbWUsIGZ1bmN0aW9uIChmdWxsTmFtZSkge1xuICAgICAgcmV0dXJuIF90aGlzNi5nZXRWYWx1ZUZyb21GaWVsZHMoZnVsbE5hbWUsIGZpZWxkcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5nZXRGaWVsZHNFcnJvciA9IGZ1bmN0aW9uIChuYW1lcykge1xuICAgIHJldHVybiBfdGhpczYuZ2V0TmVzdGVkRmllbGRzKG5hbWVzLCBfdGhpczYuZ2V0RmllbGRFcnJvcik7XG4gIH07XG5cbiAgdGhpcy5nZXRGaWVsZEVycm9yID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gX3RoaXM2LmdldE5lc3RlZEZpZWxkKG5hbWUsIGZ1bmN0aW9uIChmdWxsTmFtZSkge1xuICAgICAgcmV0dXJuICgwLCBfdXRpbHMuZ2V0RXJyb3JTdHJzKShfdGhpczYuZ2V0RmllbGRNZW1iZXIoZnVsbE5hbWUsICdlcnJvcnMnKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdGhpcy5pc0ZpZWxkVmFsaWRhdGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIF90aGlzNi5nZXRGaWVsZE1lbWJlcihuYW1lLCAndmFsaWRhdGluZycpO1xuICB9O1xuXG4gIHRoaXMuaXNGaWVsZHNWYWxpZGF0aW5nID0gZnVuY3Rpb24gKG5zKSB7XG4gICAgdmFyIG5hbWVzID0gbnMgfHwgX3RoaXM2LmdldFZhbGlkRmllbGRzTmFtZSgpO1xuICAgIHJldHVybiBuYW1lcy5zb21lKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gX3RoaXM2LmlzRmllbGRWYWxpZGF0aW5nKG4pO1xuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuaXNGaWVsZFRvdWNoZWQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBfdGhpczYuZ2V0RmllbGRNZW1iZXIobmFtZSwgJ3RvdWNoZWQnKTtcbiAgfTtcblxuICB0aGlzLmlzRmllbGRzVG91Y2hlZCA9IGZ1bmN0aW9uIChucykge1xuICAgIHZhciBuYW1lcyA9IG5zIHx8IF90aGlzNi5nZXRWYWxpZEZpZWxkc05hbWUoKTtcbiAgICByZXR1cm4gbmFtZXMuc29tZShmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIF90aGlzNi5pc0ZpZWxkVG91Y2hlZChuKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpZWxkc1N0b3JlKGZpZWxkcykge1xuICByZXR1cm4gbmV3IEZpZWxkc1N0b3JlKGZpZWxkcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eTIpO1xuXG52YXIgX2V4dGVuZHM1ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzNiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHM1KTtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknKTtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b0NvbnN1bWFibGVBcnJheTIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY3JlYXRlUmVhY3RDbGFzcyA9IHJlcXVpcmUoJ2NyZWF0ZS1yZWFjdC1jbGFzcycpO1xuXG52YXIgX2NyZWF0ZVJlYWN0Q2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUmVhY3RDbGFzcyk7XG5cbnZhciBfYXN5bmNWYWxpZGF0b3IgPSByZXF1aXJlKCdhc3luYy12YWxpZGF0b3InKTtcblxudmFyIF9hc3luY1ZhbGlkYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3luY1ZhbGlkYXRvcik7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2dldCA9IHJlcXVpcmUoJ2xvZGFzaC9nZXQnKTtcblxudmFyIF9nZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0KTtcblxudmFyIF9zZXQgPSByZXF1aXJlKCdsb2Rhc2gvc2V0Jyk7XG5cbnZhciBfc2V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldCk7XG5cbnZhciBfZXEgPSByZXF1aXJlKCdsb2Rhc2gvZXEnKTtcblxudmFyIF9lcTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lcSk7XG5cbnZhciBfY3JlYXRlRmllbGRzU3RvcmUgPSByZXF1aXJlKCcuL2NyZWF0ZUZpZWxkc1N0b3JlJyk7XG5cbnZhciBfY3JlYXRlRmllbGRzU3RvcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRmllbGRzU3RvcmUpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBERUZBVUxUX1RSSUdHRVIgPSAnb25DaGFuZ2UnOyAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcmVmZXItZXM2LWNsYXNzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3JtKCkge1xuICB2YXIgb3B0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIG1peGlucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG4gIHZhciB2YWxpZGF0ZU1lc3NhZ2VzID0gb3B0aW9uLnZhbGlkYXRlTWVzc2FnZXMsXG4gICAgICBvbkZpZWxkc0NoYW5nZSA9IG9wdGlvbi5vbkZpZWxkc0NoYW5nZSxcbiAgICAgIG9uVmFsdWVzQ2hhbmdlID0gb3B0aW9uLm9uVmFsdWVzQ2hhbmdlLFxuICAgICAgX29wdGlvbiRtYXBQcm9wcyA9IG9wdGlvbi5tYXBQcm9wcyxcbiAgICAgIG1hcFByb3BzID0gX29wdGlvbiRtYXBQcm9wcyA9PT0gdW5kZWZpbmVkID8gX3V0aWxzLmlkZW50aXR5IDogX29wdGlvbiRtYXBQcm9wcyxcbiAgICAgIG1hcFByb3BzVG9GaWVsZHMgPSBvcHRpb24ubWFwUHJvcHNUb0ZpZWxkcyxcbiAgICAgIGZpZWxkTmFtZVByb3AgPSBvcHRpb24uZmllbGROYW1lUHJvcCxcbiAgICAgIGZpZWxkTWV0YVByb3AgPSBvcHRpb24uZmllbGRNZXRhUHJvcCxcbiAgICAgIGZpZWxkRGF0YVByb3AgPSBvcHRpb24uZmllbGREYXRhUHJvcCxcbiAgICAgIF9vcHRpb24kZm9ybVByb3BOYW1lID0gb3B0aW9uLmZvcm1Qcm9wTmFtZSxcbiAgICAgIGZvcm1Qcm9wTmFtZSA9IF9vcHRpb24kZm9ybVByb3BOYW1lID09PSB1bmRlZmluZWQgPyAnZm9ybScgOiBfb3B0aW9uJGZvcm1Qcm9wTmFtZSxcbiAgICAgIGZvcm1OYW1lID0gb3B0aW9uLm5hbWUsXG4gICAgICB3aXRoUmVmID0gb3B0aW9uLndpdGhSZWY7XG5cblxuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGUoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHZhciBGb3JtID0gKDAsIF9jcmVhdGVSZWFjdENsYXNzMlsnZGVmYXVsdCddKSh7XG4gICAgICBkaXNwbGF5TmFtZTogJ0Zvcm0nLFxuXG4gICAgICBtaXhpbnM6IG1peGlucyxcblxuICAgICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGZpZWxkcyA9IG1hcFByb3BzVG9GaWVsZHMgJiYgbWFwUHJvcHNUb0ZpZWxkcyh0aGlzLnByb3BzKTtcbiAgICAgICAgdGhpcy5maWVsZHNTdG9yZSA9ICgwLCBfY3JlYXRlRmllbGRzU3RvcmUyWydkZWZhdWx0J10pKGZpZWxkcyB8fCB7fSk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSB7fTtcbiAgICAgICAgdGhpcy5jYWNoZWRCaW5kID0ge307XG4gICAgICAgIHRoaXMuY2xlYXJlZEZpZWxkTWV0YUNhY2hlID0ge307XG5cbiAgICAgICAgdGhpcy5yZW5kZXJGaWVsZHMgPSB7fTtcbiAgICAgICAgdGhpcy5kb21GaWVsZHMgPSB7fTtcblxuICAgICAgICAvLyBIQUNLOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy82NDA2XG4gICAgICAgIFsnZ2V0RmllbGRzVmFsdWUnLCAnZ2V0RmllbGRWYWx1ZScsICdzZXRGaWVsZHNJbml0aWFsVmFsdWUnLCAnZ2V0RmllbGRzRXJyb3InLCAnZ2V0RmllbGRFcnJvcicsICdpc0ZpZWxkVmFsaWRhdGluZycsICdpc0ZpZWxkc1ZhbGlkYXRpbmcnLCAnaXNGaWVsZHNUb3VjaGVkJywgJ2lzRmllbGRUb3VjaGVkJ10uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgX3RoaXNba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfZmllbGRzU3RvcmU7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoZmFsc2UsICd5b3Ugc2hvdWxkIG5vdCB1c2UgYHJlZmAgb24gZW5oYW5jZWQgZm9ybSwgcGxlYXNlIHVzZSBgd3JhcHBlZENvbXBvbmVudFJlZmAuICcgKyAnU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L2Zvcm0jbm90ZS11c2Utd3JhcHBlZGNvbXBvbmVudHJlZi1pbnN0ZWFkLW9mLXdpdGhyZWYtYWZ0ZXItcmMtZm9ybTE0MCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChfZmllbGRzU3RvcmUgPSBfdGhpcy5maWVsZHNTdG9yZSlba2V5XS5hcHBseShfZmllbGRzU3RvcmUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwVXNlbGVzc0ZpZWxkcygpO1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChtYXBQcm9wc1RvRmllbGRzKSB7XG4gICAgICAgICAgdGhpcy5maWVsZHNTdG9yZS51cGRhdGVGaWVsZHMobWFwUHJvcHNUb0ZpZWxkcyhuZXh0UHJvcHMpKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBVc2VsZXNzRmllbGRzKCk7XG4gICAgICB9LFxuICAgICAgb25Db2xsZWN0Q29tbW9uOiBmdW5jdGlvbiBvbkNvbGxlY3RDb21tb24obmFtZSwgYWN0aW9uLCBhcmdzKSB7XG4gICAgICAgIHZhciBmaWVsZE1ldGEgPSB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkTWV0YShuYW1lKTtcbiAgICAgICAgaWYgKGZpZWxkTWV0YVthY3Rpb25dKSB7XG4gICAgICAgICAgZmllbGRNZXRhW2FjdGlvbl0uYXBwbHkoZmllbGRNZXRhLCAoMCwgX3RvQ29uc3VtYWJsZUFycmF5M1snZGVmYXVsdCddKShhcmdzKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGRNZXRhLm9yaWdpbmFsUHJvcHMgJiYgZmllbGRNZXRhLm9yaWdpbmFsUHJvcHNbYWN0aW9uXSkge1xuICAgICAgICAgIHZhciBfZmllbGRNZXRhJG9yaWdpbmFsUHI7XG5cbiAgICAgICAgICAoX2ZpZWxkTWV0YSRvcmlnaW5hbFByID0gZmllbGRNZXRhLm9yaWdpbmFsUHJvcHMpW2FjdGlvbl0uYXBwbHkoX2ZpZWxkTWV0YSRvcmlnaW5hbFByLCAoMCwgX3RvQ29uc3VtYWJsZUFycmF5M1snZGVmYXVsdCddKShhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gZmllbGRNZXRhLmdldFZhbHVlRnJvbUV2ZW50ID8gZmllbGRNZXRhLmdldFZhbHVlRnJvbUV2ZW50LmFwcGx5KGZpZWxkTWV0YSwgKDAsIF90b0NvbnN1bWFibGVBcnJheTNbJ2RlZmF1bHQnXSkoYXJncykpIDogX3V0aWxzLmdldFZhbHVlRnJvbUV2ZW50LmFwcGx5KHVuZGVmaW5lZCwgKDAsIF90b0NvbnN1bWFibGVBcnJheTNbJ2RlZmF1bHQnXSkoYXJncykpO1xuICAgICAgICBpZiAob25WYWx1ZXNDaGFuZ2UgJiYgdmFsdWUgIT09IHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRWYWx1ZShuYW1lKSkge1xuICAgICAgICAgIHZhciB2YWx1ZXNBbGwgPSB0aGlzLmZpZWxkc1N0b3JlLmdldEFsbFZhbHVlcygpO1xuICAgICAgICAgIHZhciB2YWx1ZXNBbGxTZXQgPSB7fTtcbiAgICAgICAgICB2YWx1ZXNBbGxbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZXNBbGwpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfc2V0MlsnZGVmYXVsdCddKSh2YWx1ZXNBbGxTZXQsIGtleSwgdmFsdWVzQWxsW2tleV0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG9uVmFsdWVzQ2hhbmdlKCgwLCBfZXh0ZW5kczZbJ2RlZmF1bHQnXSkoKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoe30sIGZvcm1Qcm9wTmFtZSwgdGhpcy5nZXRGb3JtKCkpLCB0aGlzLnByb3BzKSwgKDAsIF9zZXQyWydkZWZhdWx0J10pKHt9LCBuYW1lLCB2YWx1ZSksIHZhbHVlc0FsbFNldCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpZWxkID0gdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZChuYW1lKTtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogbmFtZSwgZmllbGQ6ICgwLCBfZXh0ZW5kczZbJ2RlZmF1bHQnXSkoe30sIGZpZWxkLCB7IHZhbHVlOiB2YWx1ZSwgdG91Y2hlZDogdHJ1ZSB9KSwgZmllbGRNZXRhOiBmaWVsZE1ldGEgfTtcbiAgICAgIH0sXG4gICAgICBvbkNvbGxlY3Q6IGZ1bmN0aW9uIG9uQ29sbGVjdChuYW1lXywgYWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9vbkNvbGxlY3RDb21tb24gPSB0aGlzLm9uQ29sbGVjdENvbW1vbihuYW1lXywgYWN0aW9uLCBhcmdzKSxcbiAgICAgICAgICAgIG5hbWUgPSBfb25Db2xsZWN0Q29tbW9uLm5hbWUsXG4gICAgICAgICAgICBmaWVsZCA9IF9vbkNvbGxlY3RDb21tb24uZmllbGQsXG4gICAgICAgICAgICBmaWVsZE1ldGEgPSBfb25Db2xsZWN0Q29tbW9uLmZpZWxkTWV0YTtcblxuICAgICAgICB2YXIgdmFsaWRhdGUgPSBmaWVsZE1ldGEudmFsaWRhdGU7XG5cblxuICAgICAgICB0aGlzLmZpZWxkc1N0b3JlLnNldEZpZWxkc0FzRGlydHkoKTtcblxuICAgICAgICB2YXIgbmV3RmllbGQgPSAoMCwgX2V4dGVuZHM2WydkZWZhdWx0J10pKHt9LCBmaWVsZCwge1xuICAgICAgICAgIGRpcnR5OiAoMCwgX3V0aWxzLmhhc1J1bGVzKSh2YWxpZGF0ZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RmllbGRzKCgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKHt9LCBuYW1lLCBuZXdGaWVsZCkpO1xuICAgICAgfSxcbiAgICAgIG9uQ29sbGVjdFZhbGlkYXRlOiBmdW5jdGlvbiBvbkNvbGxlY3RWYWxpZGF0ZShuYW1lXywgYWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9vbkNvbGxlY3RDb21tb24yID0gdGhpcy5vbkNvbGxlY3RDb21tb24obmFtZV8sIGFjdGlvbiwgYXJncyksXG4gICAgICAgICAgICBmaWVsZCA9IF9vbkNvbGxlY3RDb21tb24yLmZpZWxkLFxuICAgICAgICAgICAgZmllbGRNZXRhID0gX29uQ29sbGVjdENvbW1vbjIuZmllbGRNZXRhO1xuXG4gICAgICAgIHZhciBuZXdGaWVsZCA9ICgwLCBfZXh0ZW5kczZbJ2RlZmF1bHQnXSkoe30sIGZpZWxkLCB7XG4gICAgICAgICAgZGlydHk6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5maWVsZHNTdG9yZS5zZXRGaWVsZHNBc0RpcnR5KCk7XG5cbiAgICAgICAgdGhpcy52YWxpZGF0ZUZpZWxkc0ludGVybmFsKFtuZXdGaWVsZF0sIHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBmaXJzdEZpZWxkczogISFmaWVsZE1ldGEudmFsaWRhdGVGaXJzdFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0Q2FjaGVCaW5kOiBmdW5jdGlvbiBnZXRDYWNoZUJpbmQobmFtZSwgYWN0aW9uLCBmbikge1xuICAgICAgICBpZiAoIXRoaXMuY2FjaGVkQmluZFtuYW1lXSkge1xuICAgICAgICAgIHRoaXMuY2FjaGVkQmluZFtuYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGVkQmluZFtuYW1lXTtcbiAgICAgICAgaWYgKCFjYWNoZVthY3Rpb25dIHx8IGNhY2hlW2FjdGlvbl0ub3JpRm4gIT09IGZuKSB7XG4gICAgICAgICAgY2FjaGVbYWN0aW9uXSA9IHtcbiAgICAgICAgICAgIGZuOiBmbi5iaW5kKHRoaXMsIG5hbWUsIGFjdGlvbiksXG4gICAgICAgICAgICBvcmlGbjogZm5cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZVthY3Rpb25dLmZuO1xuICAgICAgfSxcbiAgICAgIGdldEZpZWxkRGVjb3JhdG9yOiBmdW5jdGlvbiBnZXRGaWVsZERlY29yYXRvcihuYW1lLCBmaWVsZE9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLmdldEZpZWxkUHJvcHMobmFtZSwgZmllbGRPcHRpb24pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpZWxkRWxlbSkge1xuICAgICAgICAgIC8vIFdlIHNob3VsZCBwdXQgZmllbGQgaW4gcmVjb3JkIGlmIGl0IGlzIHJlbmRlcmVkXG4gICAgICAgICAgX3RoaXMyLnJlbmRlckZpZWxkc1tuYW1lXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgZmllbGRNZXRhID0gX3RoaXMyLmZpZWxkc1N0b3JlLmdldEZpZWxkTWV0YShuYW1lKTtcbiAgICAgICAgICB2YXIgb3JpZ2luYWxQcm9wcyA9IGZpZWxkRWxlbS5wcm9wcztcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdmFyIHZhbHVlUHJvcE5hbWUgPSBmaWVsZE1ldGEudmFsdWVQcm9wTmFtZTtcbiAgICAgICAgICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoISh2YWx1ZVByb3BOYW1lIGluIG9yaWdpbmFsUHJvcHMpLCAnYGdldEZpZWxkRGVjb3JhdG9yYCB3aWxsIG92ZXJyaWRlIGAnICsgdmFsdWVQcm9wTmFtZSArICdgLCAnICsgKCdzbyBwbGVhc2UgZG9uXFwndCBzZXQgYCcgKyB2YWx1ZVByb3BOYW1lICsgJ2AgZGlyZWN0bHkgJykgKyAnYW5kIHVzZSBgc2V0RmllbGRzVmFsdWVgIHRvIHNldCBpdC4nKTtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWVQcm9wTmFtZSA9ICdkZWZhdWx0JyArIHZhbHVlUHJvcE5hbWVbMF0udG9VcHBlckNhc2UoKSArIHZhbHVlUHJvcE5hbWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKCEoZGVmYXVsdFZhbHVlUHJvcE5hbWUgaW4gb3JpZ2luYWxQcm9wcyksICdgJyArIGRlZmF1bHRWYWx1ZVByb3BOYW1lICsgJ2AgaXMgaW52YWxpZCAnICsgKCdmb3IgYGdldEZpZWxkRGVjb3JhdG9yYCB3aWxsIHNldCBgJyArIHZhbHVlUHJvcE5hbWUgKyAnYCwnKSArICcgcGxlYXNlIHVzZSBgb3B0aW9uLmluaXRpYWxWYWx1ZWAgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmllbGRNZXRhLm9yaWdpbmFsUHJvcHMgPSBvcmlnaW5hbFByb3BzO1xuICAgICAgICAgIGZpZWxkTWV0YS5yZWYgPSBmaWVsZEVsZW0ucmVmO1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY2xvbmVFbGVtZW50KGZpZWxkRWxlbSwgKDAsIF9leHRlbmRzNlsnZGVmYXVsdCddKSh7fSwgcHJvcHMsIF90aGlzMi5maWVsZHNTdG9yZS5nZXRGaWVsZFZhbHVlUHJvcFZhbHVlKGZpZWxkTWV0YSkpKTtcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBnZXRGaWVsZFByb3BzOiBmdW5jdGlvbiBnZXRGaWVsZFByb3BzKG5hbWUpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHVzZXJzRmllbGRPcHRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBjYWxsIGBnZXRGaWVsZFByb3BzYCB3aXRoIHZhbGlkIG5hbWUgc3RyaW5nIScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgKDAsIF93YXJuaW5nMlsnZGVmYXVsdCddKSh0aGlzLmZpZWxkc1N0b3JlLmlzVmFsaWROZXN0ZWRGaWVsZE5hbWUobmFtZSksICdPbmUgZmllbGQgbmFtZSBjYW5ub3QgYmUgcGFydCBvZiBhbm90aGVyLCBlLmcuIGBhYCBhbmQgYGEuYmAuIENoZWNrIGZpZWxkOiAnICsgbmFtZSk7XG4gICAgICAgICAgKDAsIF93YXJuaW5nMlsnZGVmYXVsdCddKSghKCdleGNsdXNpdmUnIGluIHVzZXJzRmllbGRPcHRpb24pLCAnYG9wdGlvbi5leGNsdXNpdmVgIG9mIGBnZXRGaWVsZFByb3BzYHxgZ2V0RmllbGREZWNvcmF0b3JgIGhhZCBiZWVuIHJlbW92ZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZVtuYW1lXTtcblxuICAgICAgICB2YXIgZmllbGRPcHRpb24gPSAoMCwgX2V4dGVuZHM2WydkZWZhdWx0J10pKHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHRyaWdnZXI6IERFRkFVTFRfVFJJR0dFUixcbiAgICAgICAgICB2YWx1ZVByb3BOYW1lOiAndmFsdWUnLFxuICAgICAgICAgIHZhbGlkYXRlOiBbXVxuICAgICAgICB9LCB1c2Vyc0ZpZWxkT3B0aW9uKTtcblxuICAgICAgICB2YXIgcnVsZXMgPSBmaWVsZE9wdGlvbi5ydWxlcyxcbiAgICAgICAgICAgIHRyaWdnZXIgPSBmaWVsZE9wdGlvbi50cmlnZ2VyLFxuICAgICAgICAgICAgX2ZpZWxkT3B0aW9uJHZhbGlkYXRlID0gZmllbGRPcHRpb24udmFsaWRhdGVUcmlnZ2VyLFxuICAgICAgICAgICAgdmFsaWRhdGVUcmlnZ2VyID0gX2ZpZWxkT3B0aW9uJHZhbGlkYXRlID09PSB1bmRlZmluZWQgPyB0cmlnZ2VyIDogX2ZpZWxkT3B0aW9uJHZhbGlkYXRlLFxuICAgICAgICAgICAgdmFsaWRhdGUgPSBmaWVsZE9wdGlvbi52YWxpZGF0ZTtcblxuXG4gICAgICAgIHZhciBmaWVsZE1ldGEgPSB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkTWV0YShuYW1lKTtcbiAgICAgICAgaWYgKCdpbml0aWFsVmFsdWUnIGluIGZpZWxkT3B0aW9uKSB7XG4gICAgICAgICAgZmllbGRNZXRhLmluaXRpYWxWYWx1ZSA9IGZpZWxkT3B0aW9uLmluaXRpYWxWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbnB1dFByb3BzID0gKDAsIF9leHRlbmRzNlsnZGVmYXVsdCddKSh7fSwgdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZFZhbHVlUHJvcFZhbHVlKGZpZWxkT3B0aW9uKSwge1xuICAgICAgICAgIHJlZjogdGhpcy5nZXRDYWNoZUJpbmQobmFtZSwgbmFtZSArICdfX3JlZicsIHRoaXMuc2F2ZVJlZilcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmaWVsZE5hbWVQcm9wKSB7XG4gICAgICAgICAgaW5wdXRQcm9wc1tmaWVsZE5hbWVQcm9wXSA9IGZvcm1OYW1lID8gZm9ybU5hbWUgKyAnXycgKyBuYW1lIDogbmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2YWxpZGF0ZVJ1bGVzID0gKDAsIF91dGlscy5ub3JtYWxpemVWYWxpZGF0ZVJ1bGVzKSh2YWxpZGF0ZSwgcnVsZXMsIHZhbGlkYXRlVHJpZ2dlcik7XG4gICAgICAgIHZhciB2YWxpZGF0ZVRyaWdnZXJzID0gKDAsIF91dGlscy5nZXRWYWxpZGF0ZVRyaWdnZXJzKSh2YWxpZGF0ZVJ1bGVzKTtcbiAgICAgICAgdmFsaWRhdGVUcmlnZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICBpZiAoaW5wdXRQcm9wc1thY3Rpb25dKSByZXR1cm47XG4gICAgICAgICAgaW5wdXRQcm9wc1thY3Rpb25dID0gX3RoaXMzLmdldENhY2hlQmluZChuYW1lLCBhY3Rpb24sIF90aGlzMy5vbkNvbGxlY3RWYWxpZGF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSB2YWx1ZSB3aWxsIGJlIGNvbGxlY3RcbiAgICAgICAgaWYgKHRyaWdnZXIgJiYgdmFsaWRhdGVUcmlnZ2Vycy5pbmRleE9mKHRyaWdnZXIpID09PSAtMSkge1xuICAgICAgICAgIGlucHV0UHJvcHNbdHJpZ2dlcl0gPSB0aGlzLmdldENhY2hlQmluZChuYW1lLCB0cmlnZ2VyLCB0aGlzLm9uQ29sbGVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWV0YSA9ICgwLCBfZXh0ZW5kczZbJ2RlZmF1bHQnXSkoe30sIGZpZWxkTWV0YSwgZmllbGRPcHRpb24sIHtcbiAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGVSdWxlc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maWVsZHNTdG9yZS5zZXRGaWVsZE1ldGEobmFtZSwgbWV0YSk7XG4gICAgICAgIGlmIChmaWVsZE1ldGFQcm9wKSB7XG4gICAgICAgICAgaW5wdXRQcm9wc1tmaWVsZE1ldGFQcm9wXSA9IG1ldGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGREYXRhUHJvcCkge1xuICAgICAgICAgIGlucHV0UHJvcHNbZmllbGREYXRhUHJvcF0gPSB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBmaWVsZCBpcyByZW5kZXJlZCwgcmVjb3JkIGl0XG4gICAgICAgIHRoaXMucmVuZGVyRmllbGRzW25hbWVdID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gaW5wdXRQcm9wcztcbiAgICAgIH0sXG4gICAgICBnZXRGaWVsZEluc3RhbmNlOiBmdW5jdGlvbiBnZXRGaWVsZEluc3RhbmNlKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW25hbWVdO1xuICAgICAgfSxcbiAgICAgIGdldFJ1bGVzOiBmdW5jdGlvbiBnZXRSdWxlcyhmaWVsZE1ldGEsIGFjdGlvbikge1xuICAgICAgICB2YXIgYWN0aW9uUnVsZXMgPSBmaWVsZE1ldGEudmFsaWRhdGUuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuICFhY3Rpb24gfHwgaXRlbS50cmlnZ2VyLmluZGV4T2YoYWN0aW9uKSA+PSAwO1xuICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbS5ydWxlcztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmZsYXR0ZW5BcnJheSkoYWN0aW9uUnVsZXMpO1xuICAgICAgfSxcbiAgICAgIHNldEZpZWxkczogZnVuY3Rpb24gc2V0RmllbGRzKG1heWJlTmVzdGVkRmllbGRzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICB2YXIgZmllbGRzID0gdGhpcy5maWVsZHNTdG9yZS5mbGF0dGVuUmVnaXN0ZXJlZEZpZWxkcyhtYXliZU5lc3RlZEZpZWxkcyk7XG4gICAgICAgIHRoaXMuZmllbGRzU3RvcmUuc2V0RmllbGRzKGZpZWxkcyk7XG4gICAgICAgIGlmIChvbkZpZWxkc0NoYW5nZSkge1xuICAgICAgICAgIHZhciBjaGFuZ2VkRmllbGRzID0gT2JqZWN0LmtleXMoZmllbGRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfc2V0MlsnZGVmYXVsdCddKShhY2MsIG5hbWUsIF90aGlzNC5maWVsZHNTdG9yZS5nZXRGaWVsZChuYW1lKSk7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICAgIG9uRmllbGRzQ2hhbmdlKCgwLCBfZXh0ZW5kczZbJ2RlZmF1bHQnXSkoKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoe30sIGZvcm1Qcm9wTmFtZSwgdGhpcy5nZXRGb3JtKCkpLCB0aGlzLnByb3BzKSwgY2hhbmdlZEZpZWxkcywgdGhpcy5maWVsZHNTdG9yZS5nZXROZXN0ZWRBbGxGaWVsZHMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZShjYWxsYmFjayk7XG4gICAgICB9LFxuICAgICAgc2V0RmllbGRzVmFsdWU6IGZ1bmN0aW9uIHNldEZpZWxkc1ZhbHVlKGNoYW5nZWRWYWx1ZXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBmaWVsZHNNZXRhID0gdGhpcy5maWVsZHNTdG9yZS5maWVsZHNNZXRhO1xuXG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLmZpZWxkc1N0b3JlLmZsYXR0ZW5SZWdpc3RlcmVkRmllbGRzKGNoYW5nZWRWYWx1ZXMpO1xuICAgICAgICB2YXIgbmV3RmllbGRzID0gT2JqZWN0LmtleXModmFsdWVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbmFtZSkge1xuICAgICAgICAgIHZhciBpc1JlZ2lzdGVyZWQgPSBmaWVsZHNNZXRhW25hbWVdO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKGlzUmVnaXN0ZXJlZCwgJ0Nhbm5vdCB1c2UgYHNldEZpZWxkc1ZhbHVlYCB1bnRpbCAnICsgJ3lvdSB1c2UgYGdldEZpZWxkRGVjb3JhdG9yYCBvciBgZ2V0RmllbGRQcm9wc2AgdG8gcmVnaXN0ZXIgaXQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc1JlZ2lzdGVyZWQpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1tuYW1lXTtcbiAgICAgICAgICAgIGFjY1tuYW1lXSA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIHRoaXMuc2V0RmllbGRzKG5ld0ZpZWxkcywgY2FsbGJhY2spO1xuICAgICAgICBpZiAob25WYWx1ZXNDaGFuZ2UpIHtcbiAgICAgICAgICB2YXIgYWxsVmFsdWVzID0gdGhpcy5maWVsZHNTdG9yZS5nZXRBbGxWYWx1ZXMoKTtcbiAgICAgICAgICBvblZhbHVlc0NoYW5nZSgoMCwgX2V4dGVuZHM2WydkZWZhdWx0J10pKCgwLCBfZGVmaW5lUHJvcGVydHkzWydkZWZhdWx0J10pKHt9LCBmb3JtUHJvcE5hbWUsIHRoaXMuZ2V0Rm9ybSgpKSwgdGhpcy5wcm9wcyksIGNoYW5nZWRWYWx1ZXMsIGFsbFZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzYXZlUmVmOiBmdW5jdGlvbiBzYXZlUmVmKG5hbWUsIF8sIGNvbXBvbmVudCkge1xuICAgICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICAgIHZhciBfZmllbGRNZXRhID0gdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZE1ldGEobmFtZSk7XG4gICAgICAgICAgaWYgKCFfZmllbGRNZXRhLnByZXNlcnZlKSB7XG4gICAgICAgICAgICAvLyBhZnRlciBkZXN0cm95LCBkZWxldGUgZGF0YVxuICAgICAgICAgICAgdGhpcy5jbGVhcmVkRmllbGRNZXRhQ2FjaGVbbmFtZV0gPSB7XG4gICAgICAgICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkKG5hbWUpLFxuICAgICAgICAgICAgICBtZXRhOiBfZmllbGRNZXRhXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jbGVhckZpZWxkKG5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGUgdGhpcy5kb21GaWVsZHNbbmFtZV07XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9tRmllbGRzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWNvdmVyQ2xlYXJlZEZpZWxkKG5hbWUpO1xuICAgICAgICB2YXIgZmllbGRNZXRhID0gdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZE1ldGEobmFtZSk7XG4gICAgICAgIGlmIChmaWVsZE1ldGEpIHtcbiAgICAgICAgICB2YXIgcmVmID0gZmllbGRNZXRhLnJlZjtcbiAgICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW4gbm90IHNldCByZWYgc3RyaW5nIGZvciAnICsgbmFtZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgcmVmKGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZWYsICdjdXJyZW50JykpIHtcbiAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5zdGFuY2VzW25hbWVdID0gY29tcG9uZW50O1xuICAgICAgfSxcbiAgICAgIGNsZWFuVXBVc2VsZXNzRmllbGRzOiBmdW5jdGlvbiBjbGVhblVwVXNlbGVzc0ZpZWxkcygpIHtcbiAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGZpZWxkTGlzdCA9IHRoaXMuZmllbGRzU3RvcmUuZ2V0QWxsRmllbGRzTmFtZSgpO1xuICAgICAgICB2YXIgcmVtb3ZlZExpc3QgPSBmaWVsZExpc3QuZmlsdGVyKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgIHZhciBmaWVsZE1ldGEgPSBfdGhpczUuZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKGZpZWxkKTtcbiAgICAgICAgICByZXR1cm4gIV90aGlzNS5yZW5kZXJGaWVsZHNbZmllbGRdICYmICFfdGhpczUuZG9tRmllbGRzW2ZpZWxkXSAmJiAhZmllbGRNZXRhLnByZXNlcnZlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlbW92ZWRMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHJlbW92ZWRMaXN0LmZvckVhY2godGhpcy5jbGVhckZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlckZpZWxkcyA9IHt9O1xuICAgICAgfSxcbiAgICAgIGNsZWFyRmllbGQ6IGZ1bmN0aW9uIGNsZWFyRmllbGQobmFtZSkge1xuICAgICAgICB0aGlzLmZpZWxkc1N0b3JlLmNsZWFyRmllbGQobmFtZSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmluc3RhbmNlc1tuYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY2FjaGVkQmluZFtuYW1lXTtcbiAgICAgIH0sXG4gICAgICByZXNldEZpZWxkczogZnVuY3Rpb24gcmVzZXRGaWVsZHMobnMpIHtcbiAgICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIG5ld0ZpZWxkcyA9IHRoaXMuZmllbGRzU3RvcmUucmVzZXRGaWVsZHMobnMpO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMobmV3RmllbGRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZHMobmV3RmllbGRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnMpIHtcbiAgICAgICAgICB2YXIgbmFtZXMgPSBBcnJheS5pc0FycmF5KG5zKSA/IG5zIDogW25zXTtcbiAgICAgICAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsZXRlIF90aGlzNi5jbGVhcmVkRmllbGRNZXRhQ2FjaGVbbmFtZV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbGVhcmVkRmllbGRNZXRhQ2FjaGUgPSB7fTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlY292ZXJDbGVhcmVkRmllbGQ6IGZ1bmN0aW9uIHJlY292ZXJDbGVhcmVkRmllbGQobmFtZSkge1xuICAgICAgICBpZiAodGhpcy5jbGVhcmVkRmllbGRNZXRhQ2FjaGVbbmFtZV0pIHtcbiAgICAgICAgICB0aGlzLmZpZWxkc1N0b3JlLnNldEZpZWxkcygoMCwgX2RlZmluZVByb3BlcnR5M1snZGVmYXVsdCddKSh7fSwgbmFtZSwgdGhpcy5jbGVhcmVkRmllbGRNZXRhQ2FjaGVbbmFtZV0uZmllbGQpKTtcbiAgICAgICAgICB0aGlzLmZpZWxkc1N0b3JlLnNldEZpZWxkTWV0YShuYW1lLCB0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZVtuYW1lXS5tZXRhKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5jbGVhcmVkRmllbGRNZXRhQ2FjaGVbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB2YWxpZGF0ZUZpZWxkc0ludGVybmFsOiBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkc0ludGVybmFsKGZpZWxkcywgX3JlZiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGZpZWxkTmFtZXMgPSBfcmVmLmZpZWxkTmFtZXMsXG4gICAgICAgICAgICBhY3Rpb24gPSBfcmVmLmFjdGlvbixcbiAgICAgICAgICAgIF9yZWYkb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmJG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/IHt9IDogX3JlZiRvcHRpb25zO1xuXG4gICAgICAgIHZhciBhbGxSdWxlcyA9IHt9O1xuICAgICAgICB2YXIgYWxsVmFsdWVzID0ge307XG4gICAgICAgIHZhciBhbGxGaWVsZHMgPSB7fTtcbiAgICAgICAgdmFyIGFscmVhZHlFcnJvcnMgPSB7fTtcbiAgICAgICAgZmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgdmFyIG5hbWUgPSBmaWVsZC5uYW1lO1xuICAgICAgICAgIGlmIChvcHRpb25zLmZvcmNlICE9PSB0cnVlICYmIGZpZWxkLmRpcnR5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKGZpZWxkLmVycm9ycykge1xuICAgICAgICAgICAgICAoMCwgX3NldDJbJ2RlZmF1bHQnXSkoYWxyZWFkeUVycm9ycywgbmFtZSwgeyBlcnJvcnM6IGZpZWxkLmVycm9ycyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGZpZWxkTWV0YSA9IF90aGlzNy5maWVsZHNTdG9yZS5nZXRGaWVsZE1ldGEobmFtZSk7XG4gICAgICAgICAgdmFyIG5ld0ZpZWxkID0gKDAsIF9leHRlbmRzNlsnZGVmYXVsdCddKSh7fSwgZmllbGQpO1xuICAgICAgICAgIG5ld0ZpZWxkLmVycm9ycyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXdGaWVsZC52YWxpZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICBuZXdGaWVsZC5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgYWxsUnVsZXNbbmFtZV0gPSBfdGhpczcuZ2V0UnVsZXMoZmllbGRNZXRhLCBhY3Rpb24pO1xuICAgICAgICAgIGFsbFZhbHVlc1tuYW1lXSA9IG5ld0ZpZWxkLnZhbHVlO1xuICAgICAgICAgIGFsbEZpZWxkc1tuYW1lXSA9IG5ld0ZpZWxkO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRGaWVsZHMoYWxsRmllbGRzKTtcbiAgICAgICAgLy8gaW4gY2FzZSBub3JtYWxpemVcbiAgICAgICAgT2JqZWN0LmtleXMoYWxsVmFsdWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgYWxsVmFsdWVzW2ZdID0gX3RoaXM3LmZpZWxkc1N0b3JlLmdldEZpZWxkVmFsdWUoZik7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgKDAsIF91dGlscy5pc0VtcHR5T2JqZWN0KShhbGxGaWVsZHMpKSB7XG4gICAgICAgICAgY2FsbGJhY2soKDAsIF91dGlscy5pc0VtcHR5T2JqZWN0KShhbHJlYWR5RXJyb3JzKSA/IG51bGwgOiBhbHJlYWR5RXJyb3JzLCB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkc1ZhbHVlKGZpZWxkTmFtZXMpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IG5ldyBfYXN5bmNWYWxpZGF0b3IyWydkZWZhdWx0J10oYWxsUnVsZXMpO1xuICAgICAgICBpZiAodmFsaWRhdGVNZXNzYWdlcykge1xuICAgICAgICAgIHZhbGlkYXRvci5tZXNzYWdlcyh2YWxpZGF0ZU1lc3NhZ2VzKTtcbiAgICAgICAgfVxuICAgICAgICB2YWxpZGF0b3IudmFsaWRhdGUoYWxsVmFsdWVzLCBvcHRpb25zLCBmdW5jdGlvbiAoZXJyb3JzKSB7XG4gICAgICAgICAgdmFyIGVycm9yc0dyb3VwID0gKDAsIF9leHRlbmRzNlsnZGVmYXVsdCddKSh7fSwgYWxyZWFkeUVycm9ycyk7XG4gICAgICAgICAgaWYgKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBlcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICB2YXIgZXJyb3JGaWVsZE5hbWUgPSBlLmZpZWxkO1xuICAgICAgICAgICAgICB2YXIgZmllbGROYW1lID0gZXJyb3JGaWVsZE5hbWU7XG5cbiAgICAgICAgICAgICAgLy8gSGFuZGxlIHVzaW5nIGFycmF5IHZhbGlkYXRpb24gcnVsZS5cbiAgICAgICAgICAgICAgLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNDI3NVxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhbGxSdWxlcykuc29tZShmdW5jdGlvbiAocnVsZUZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBydWxlcyA9IGFsbFJ1bGVzW3J1bGVGaWVsZE5hbWVdIHx8IFtdO1xuXG4gICAgICAgICAgICAgICAgLy8gRXhpc3QgaWYgbWF0Y2ggcnVsZVxuICAgICAgICAgICAgICAgIGlmIChydWxlRmllbGROYW1lID09PSBlcnJvckZpZWxkTmFtZSkge1xuICAgICAgICAgICAgICAgICAgZmllbGROYW1lID0gcnVsZUZpZWxkTmFtZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNraXAgaWYgbm90IG1hdGNoIGFycmF5IHR5cGVcbiAgICAgICAgICAgICAgICBpZiAocnVsZXMuZXZlcnkoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IF9yZWYyLnR5cGU7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZSAhPT0gJ2FycmF5JztcbiAgICAgICAgICAgICAgICB9KSAmJiBlcnJvckZpZWxkTmFtZS5pbmRleE9mKHJ1bGVGaWVsZE5hbWUpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRXhpc3QgaWYgbWF0Y2ggdGhlIGZpZWxkIG5hbWVcbiAgICAgICAgICAgICAgICB2YXIgcmVzdFBhdGggPSBlcnJvckZpZWxkTmFtZS5zbGljZShydWxlRmllbGROYW1lLmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgICAgIGlmICgvXFxkKy8udGVzdChyZXN0UGF0aCkpIHtcbiAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IHJ1bGVGaWVsZE5hbWU7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHZhciBmaWVsZCA9ICgwLCBfZ2V0MlsnZGVmYXVsdCddKShlcnJvcnNHcm91cCwgZmllbGROYW1lKTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZCAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShmaWVsZCkpIHtcbiAgICAgICAgICAgICAgICAoMCwgX3NldDJbJ2RlZmF1bHQnXSkoZXJyb3JzR3JvdXAsIGZpZWxkTmFtZSwgeyBlcnJvcnM6IFtdIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBmaWVsZEVycm9ycyA9ICgwLCBfZ2V0MlsnZGVmYXVsdCddKShlcnJvcnNHcm91cCwgZmllbGROYW1lLmNvbmNhdCgnLmVycm9ycycpKTtcbiAgICAgICAgICAgICAgZmllbGRFcnJvcnMucHVzaChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZXhwaXJlZCA9IFtdO1xuICAgICAgICAgIHZhciBub3dBbGxGaWVsZHMgPSB7fTtcbiAgICAgICAgICBPYmplY3Qua2V5cyhhbGxSdWxlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIGZpZWxkRXJyb3JzID0gKDAsIF9nZXQyWydkZWZhdWx0J10pKGVycm9yc0dyb3VwLCBuYW1lKTtcbiAgICAgICAgICAgIHZhciBub3dGaWVsZCA9IF90aGlzNy5maWVsZHNTdG9yZS5nZXRGaWVsZChuYW1lKTtcbiAgICAgICAgICAgIC8vIGF2b2lkIGNvbmN1cnJlbmN5IHByb2JsZW1zXG4gICAgICAgICAgICBpZiAoISgwLCBfZXEyWydkZWZhdWx0J10pKG5vd0ZpZWxkLnZhbHVlLCBhbGxWYWx1ZXNbbmFtZV0pKSB7XG4gICAgICAgICAgICAgIGV4cGlyZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vd0ZpZWxkLmVycm9ycyA9IGZpZWxkRXJyb3JzICYmIGZpZWxkRXJyb3JzLmVycm9ycztcbiAgICAgICAgICAgICAgbm93RmllbGQudmFsdWUgPSBhbGxWYWx1ZXNbbmFtZV07XG4gICAgICAgICAgICAgIG5vd0ZpZWxkLnZhbGlkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbm93RmllbGQuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbm93QWxsRmllbGRzW25hbWVdID0gbm93RmllbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgX3RoaXM3LnNldEZpZWxkcyhub3dBbGxGaWVsZHMpO1xuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKGV4cGlyZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGV4cGlyZWQuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgZmllbGRFcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbmFtZSArICcgbmVlZCB0byByZXZhbGlkYXRlJyxcbiAgICAgICAgICAgICAgICAgIGZpZWxkOiBuYW1lXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgKDAsIF9zZXQyWydkZWZhdWx0J10pKGVycm9yc0dyb3VwLCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgICBleHBpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgZXJyb3JzOiBmaWVsZEVycm9yc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2soKDAsIF91dGlscy5pc0VtcHR5T2JqZWN0KShlcnJvcnNHcm91cCkgPyBudWxsIDogZXJyb3JzR3JvdXAsIF90aGlzNy5maWVsZHNTdG9yZS5nZXRGaWVsZHNWYWx1ZShmaWVsZE5hbWVzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB2YWxpZGF0ZUZpZWxkczogZnVuY3Rpb24gdmFsaWRhdGVGaWVsZHMobnMsIG9wdCwgY2IpIHtcbiAgICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgdmFyIF9nZXRQYXJhbXMgPSAoMCwgX3V0aWxzLmdldFBhcmFtcykobnMsIG9wdCwgY2IpLFxuICAgICAgICAgICAgICBuYW1lcyA9IF9nZXRQYXJhbXMubmFtZXMsXG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBfZ2V0UGFyYW1zLm9wdGlvbnM7XG5cbiAgICAgICAgICB2YXIgX2dldFBhcmFtczIgPSAoMCwgX3V0aWxzLmdldFBhcmFtcykobnMsIG9wdCwgY2IpLFxuICAgICAgICAgICAgICBjYWxsYmFjayA9IF9nZXRQYXJhbXMyLmNhbGxiYWNrO1xuXG4gICAgICAgICAgaWYgKCFjYWxsYmFjayB8fCB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBvbGRDYiA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhlcnJvcnMsIHZhbHVlcykge1xuICAgICAgICAgICAgICBpZiAob2xkQ2IpIHtcbiAgICAgICAgICAgICAgICBvbGRDYihlcnJvcnMsIHZhbHVlcyk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHsgZXJyb3JzOiBlcnJvcnMsIHZhbHVlczogdmFsdWVzIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGZpZWxkTmFtZXMgPSBuYW1lcyA/IF90aGlzOC5maWVsZHNTdG9yZS5nZXRWYWxpZEZpZWxkc0Z1bGxOYW1lKG5hbWVzKSA6IF90aGlzOC5maWVsZHNTdG9yZS5nZXRWYWxpZEZpZWxkc05hbWUoKTtcbiAgICAgICAgICB2YXIgZmllbGRzID0gZmllbGROYW1lcy5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBmaWVsZE1ldGEgPSBfdGhpczguZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaGFzUnVsZXMpKGZpZWxkTWV0YS52YWxpZGF0ZSk7XG4gICAgICAgICAgfSkubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgZmllbGQgPSBfdGhpczguZmllbGRzU3RvcmUuZ2V0RmllbGQobmFtZSk7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZSA9IF90aGlzOC5maWVsZHNTdG9yZS5nZXRGaWVsZFZhbHVlKG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICghZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgX3RoaXM4LmZpZWxkc1N0b3JlLmdldEZpZWxkc1ZhbHVlKGZpZWxkTmFtZXMpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEoJ2ZpcnN0RmllbGRzJyBpbiBvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5maXJzdEZpZWxkcyA9IGZpZWxkTmFtZXMuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgIHZhciBmaWVsZE1ldGEgPSBfdGhpczguZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICAgICAgICAgICAgICByZXR1cm4gISFmaWVsZE1ldGEudmFsaWRhdGVGaXJzdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpczgudmFsaWRhdGVGaWVsZHNJbnRlcm5hbChmaWVsZHMsIHtcbiAgICAgICAgICAgIGZpZWxkTmFtZXM6IGZpZWxkTmFtZXMsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgcGVuZGluZ1snY2F0Y2gnXShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmIChjb25zb2xlLmVycm9yICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBlbmRpbmc7XG4gICAgICB9LFxuICAgICAgaXNTdWJtaXR0aW5nOiBmdW5jdGlvbiBpc1N1Ym1pdHRpbmcoKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgICAgICAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKGZhbHNlLCAnYGlzU3VibWl0dGluZ2AgaXMgZGVwcmVjYXRlZC4gJyArICdBY3R1YWxseSwgaXRcXCdzIG1vcmUgY29udmVuaWVudCB0byBoYW5kbGUgc3VibWl0dGluZyBzdGF0dXMgYnkgeW91cnNlbGYuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc3VibWl0dGluZztcbiAgICAgIH0sXG4gICAgICBzdWJtaXQ6IGZ1bmN0aW9uIHN1Ym1pdChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICAgICAgKDAsIF93YXJuaW5nMlsnZGVmYXVsdCddKShmYWxzZSwgJ2BzdWJtaXRgIGlzIGRlcHJlY2F0ZWQuICcgKyAnQWN0dWFsbHksIGl0XFwncyBtb3JlIGNvbnZlbmllbnQgdG8gaGFuZGxlIHN1Ym1pdHRpbmcgc3RhdHVzIGJ5IHlvdXJzZWxmLicpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uIGZuKCkge1xuICAgICAgICAgIF90aGlzOS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzdWJtaXR0aW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjYWxsYmFjayhmbik7XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgd3JhcHBlZENvbXBvbmVudFJlZiA9IF9wcm9wcy53cmFwcGVkQ29tcG9uZW50UmVmLFxuICAgICAgICAgICAgcmVzdFByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczNbJ2RlZmF1bHQnXSkoX3Byb3BzLCBbJ3dyYXBwZWRDb21wb25lbnRSZWYnXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgICAgICB2YXIgZm9ybVByb3BzID0gKDAsIF9kZWZpbmVQcm9wZXJ0eTNbJ2RlZmF1bHQnXSkoe30sIGZvcm1Qcm9wTmFtZSwgdGhpcy5nZXRGb3JtKCkpO1xuICAgICAgICBpZiAod2l0aFJlZikge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgICAgICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoZmFsc2UsICdgd2l0aFJlZmAgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgd3JhcHBlZENvbXBvbmVudFJlZmAgaW5zdGVhZC4gJyArICdTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvZm9ybSNub3RlLXVzZS13cmFwcGVkY29tcG9uZW50cmVmLWluc3RlYWQtb2Ytd2l0aHJlZi1hZnRlci1yYy1mb3JtMTQwJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1Qcm9wcy5yZWYgPSAnd3JhcHBlZENvbXBvbmVudCc7XG4gICAgICAgIH0gZWxzZSBpZiAod3JhcHBlZENvbXBvbmVudFJlZikge1xuICAgICAgICAgIGZvcm1Qcm9wcy5yZWYgPSB3cmFwcGVkQ29tcG9uZW50UmVmO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wcyA9IG1hcFByb3BzLmNhbGwodGhpcywgKDAsIF9leHRlbmRzNlsnZGVmYXVsdCddKSh7fSwgZm9ybVByb3BzLCByZXN0UHJvcHMpKTtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHByb3BzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoMCwgX3V0aWxzLmFyZ3VtZW50Q29udGFpbmVyKShGb3JtLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlQmFzZUZvcm07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1peGluID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUJhc2VGb3JtID0gcmVxdWlyZSgnLi9jcmVhdGVCYXNlRm9ybScpO1xuXG52YXIgX2NyZWF0ZUJhc2VGb3JtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJhc2VGb3JtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgbWl4aW4gPSBleHBvcnRzLm1peGluID0ge1xuICBnZXRGb3JtOiBmdW5jdGlvbiBnZXRGb3JtKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRGaWVsZHNWYWx1ZTogdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZHNWYWx1ZSxcbiAgICAgIGdldEZpZWxkVmFsdWU6IHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRWYWx1ZSxcbiAgICAgIGdldEZpZWxkSW5zdGFuY2U6IHRoaXMuZ2V0RmllbGRJbnN0YW5jZSxcbiAgICAgIHNldEZpZWxkc1ZhbHVlOiB0aGlzLnNldEZpZWxkc1ZhbHVlLFxuICAgICAgc2V0RmllbGRzOiB0aGlzLnNldEZpZWxkcyxcbiAgICAgIHNldEZpZWxkc0luaXRpYWxWYWx1ZTogdGhpcy5maWVsZHNTdG9yZS5zZXRGaWVsZHNJbml0aWFsVmFsdWUsXG4gICAgICBnZXRGaWVsZERlY29yYXRvcjogdGhpcy5nZXRGaWVsZERlY29yYXRvcixcbiAgICAgIGdldEZpZWxkUHJvcHM6IHRoaXMuZ2V0RmllbGRQcm9wcyxcbiAgICAgIGdldEZpZWxkc0Vycm9yOiB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkc0Vycm9yLFxuICAgICAgZ2V0RmllbGRFcnJvcjogdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZEVycm9yLFxuICAgICAgaXNGaWVsZFZhbGlkYXRpbmc6IHRoaXMuZmllbGRzU3RvcmUuaXNGaWVsZFZhbGlkYXRpbmcsXG4gICAgICBpc0ZpZWxkc1ZhbGlkYXRpbmc6IHRoaXMuZmllbGRzU3RvcmUuaXNGaWVsZHNWYWxpZGF0aW5nLFxuICAgICAgaXNGaWVsZHNUb3VjaGVkOiB0aGlzLmZpZWxkc1N0b3JlLmlzRmllbGRzVG91Y2hlZCxcbiAgICAgIGlzRmllbGRUb3VjaGVkOiB0aGlzLmZpZWxkc1N0b3JlLmlzRmllbGRUb3VjaGVkLFxuICAgICAgaXNTdWJtaXR0aW5nOiB0aGlzLmlzU3VibWl0dGluZyxcbiAgICAgIHN1Ym1pdDogdGhpcy5zdWJtaXQsXG4gICAgICB2YWxpZGF0ZUZpZWxkczogdGhpcy52YWxpZGF0ZUZpZWxkcyxcbiAgICAgIHJlc2V0RmllbGRzOiB0aGlzLnJlc2V0RmllbGRzXG4gICAgfTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlRm9ybShvcHRpb25zKSB7XG4gIHJldHVybiAoMCwgX2NyZWF0ZUJhc2VGb3JtMlsnZGVmYXVsdCddKShvcHRpb25zLCBbbWl4aW5dKTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlRm9ybTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2RvbVNjcm9sbEludG9WaWV3ID0gcmVxdWlyZSgnZG9tLXNjcm9sbC1pbnRvLXZpZXcnKTtcblxudmFyIF9kb21TY3JvbGxJbnRvVmlldzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kb21TY3JvbGxJbnRvVmlldyk7XG5cbnZhciBfaGFzID0gcmVxdWlyZSgnbG9kYXNoL2hhcycpO1xuXG52YXIgX2hhczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXMpO1xuXG52YXIgX2NyZWF0ZUJhc2VGb3JtID0gcmVxdWlyZSgnLi9jcmVhdGVCYXNlRm9ybScpO1xuXG52YXIgX2NyZWF0ZUJhc2VGb3JtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJhc2VGb3JtKTtcblxudmFyIF9jcmVhdGVGb3JtID0gcmVxdWlyZSgnLi9jcmVhdGVGb3JtJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gY29tcHV0ZWRTdHlsZShlbCwgcHJvcCkge1xuICB2YXIgZ2V0Q29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlO1xuICB2YXIgc3R5bGUgPVxuICAvLyBJZiB3ZSBoYXZlIGdldENvbXB1dGVkU3R5bGVcbiAgZ2V0Q29tcHV0ZWRTdHlsZSA/XG4gIC8vIFF1ZXJ5IGl0XG4gIC8vIFRPRE86IEZyb20gQ1NTLVF1ZXJ5IG5vdGVzLCB3ZSBtaWdodCBuZWVkIChub2RlLCBudWxsKSBmb3IgRkZcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbCkgOlxuXG4gIC8vIE90aGVyd2lzZSwgd2UgYXJlIGluIElFIGFuZCB1c2UgY3VycmVudFN0eWxlXG4gIGVsLmN1cnJlbnRTdHlsZTtcbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuIHN0eWxlW1xuICAgIC8vIFN3aXRjaCB0byBjYW1lbENhc2UgZm9yIENTU09NXG4gICAgLy8gREVWOiBHcmFiYmVkIGZyb20galF1ZXJ5XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvYmxvYi8xLjktc3RhYmxlL3NyYy9jc3MuanMjTDE5MS1MMTk0XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvYmxvYi8xLjktc3RhYmxlL3NyYy9jb3JlLmpzI0w1OTMtTDU5N1xuICAgIHByb3AucmVwbGFjZSgvLShcXHcpL2dpLCBmdW5jdGlvbiAod29yZCwgbGV0dGVyKSB7XG4gICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgfSldO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbGFibGVDb250YWluZXIobikge1xuICB2YXIgbm9kZSA9IG47XG4gIHZhciBub2RlTmFtZSA9IHZvaWQgMDtcbiAgLyogZXNsaW50IG5vLWNvbmQtYXNzaWduOjAgKi9cbiAgd2hpbGUgKChub2RlTmFtZSA9IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkgIT09ICdib2R5Jykge1xuICAgIHZhciBvdmVyZmxvd1kgPSBjb21wdXRlZFN0eWxlKG5vZGUsICdvdmVyZmxvd1knKTtcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzY5MDA0MDcvMzA0MDYwNVxuICAgIGlmIChub2RlICE9PSBuICYmIChvdmVyZmxvd1kgPT09ICdhdXRvJyB8fCBvdmVyZmxvd1kgPT09ICdzY3JvbGwnKSAmJiBub2RlLnNjcm9sbEhlaWdodCA+IG5vZGUuY2xpZW50SGVpZ2h0KSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gbm9kZU5hbWUgPT09ICdib2R5JyA/IG5vZGUub3duZXJEb2N1bWVudCA6IG5vZGU7XG59XG5cbnZhciBtaXhpbiA9IHtcbiAgZ2V0Rm9ybTogZnVuY3Rpb24gZ2V0Rm9ybSgpIHtcbiAgICByZXR1cm4gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgX2NyZWF0ZUZvcm0ubWl4aW4uZ2V0Rm9ybS5jYWxsKHRoaXMpLCB7XG4gICAgICB2YWxpZGF0ZUZpZWxkc0FuZFNjcm9sbDogdGhpcy52YWxpZGF0ZUZpZWxkc0FuZFNjcm9sbFxuICAgIH0pO1xuICB9LFxuICB2YWxpZGF0ZUZpZWxkc0FuZFNjcm9sbDogZnVuY3Rpb24gdmFsaWRhdGVGaWVsZHNBbmRTY3JvbGwobnMsIG9wdCwgY2IpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9nZXRQYXJhbXMgPSAoMCwgX3V0aWxzLmdldFBhcmFtcykobnMsIG9wdCwgY2IpLFxuICAgICAgICBuYW1lcyA9IF9nZXRQYXJhbXMubmFtZXMsXG4gICAgICAgIGNhbGxiYWNrID0gX2dldFBhcmFtcy5jYWxsYmFjayxcbiAgICAgICAgb3B0aW9ucyA9IF9nZXRQYXJhbXMub3B0aW9ucztcblxuICAgIHZhciBuZXdDYiA9IGZ1bmN0aW9uIG5ld0NiKGVycm9yLCB2YWx1ZXMpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB2YXIgdmFsaWROYW1lcyA9IF90aGlzLmZpZWxkc1N0b3JlLmdldFZhbGlkRmllbGRzTmFtZSgpO1xuICAgICAgICB2YXIgZmlyc3ROb2RlID0gdm9pZCAwO1xuICAgICAgICB2YXIgZmlyc3RUb3AgPSB2b2lkIDA7XG5cbiAgICAgICAgdmFsaWROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgaWYgKCgwLCBfaGFzMlsnZGVmYXVsdCddKShlcnJvciwgbmFtZSkpIHtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IF90aGlzLmdldEZpZWxkSW5zdGFuY2UobmFtZSk7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgdmFyIG5vZGUgPSBfcmVhY3REb20yWydkZWZhdWx0J10uZmluZERPTU5vZGUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgICB2YXIgdG9wID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgICAgICAgIGlmIChub2RlLnR5cGUgIT09ICdoaWRkZW4nICYmIChmaXJzdFRvcCA9PT0gdW5kZWZpbmVkIHx8IGZpcnN0VG9wID4gdG9wKSkge1xuICAgICAgICAgICAgICAgIGZpcnN0VG9wID0gdG9wO1xuICAgICAgICAgICAgICAgIGZpcnN0Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaXJzdE5vZGUpIHtcbiAgICAgICAgICB2YXIgYyA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGdldFNjcm9sbGFibGVDb250YWluZXIoZmlyc3ROb2RlKTtcbiAgICAgICAgICAoMCwgX2RvbVNjcm9sbEludG9WaWV3MlsnZGVmYXVsdCddKShmaXJzdE5vZGUsIGMsICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe1xuICAgICAgICAgICAgb25seVNjcm9sbElmTmVlZGVkOiB0cnVlXG4gICAgICAgICAgfSwgb3B0aW9ucy5zY3JvbGwpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCB2YWx1ZXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUZpZWxkcyhuYW1lcywgb3B0aW9ucywgbmV3Q2IpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVET01Gb3JtKG9wdGlvbikge1xuICByZXR1cm4gKDAsIF9jcmVhdGVCYXNlRm9ybTJbJ2RlZmF1bHQnXSkoKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgb3B0aW9uKSwgW21peGluXSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZURPTUZvcm07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRklFTERfREFUQV9QUk9QID0gZXhwb3J0cy5GSUVMRF9NRVRBX1BST1AgPSB2b2lkIDA7XG52YXIgRklFTERfTUVUQV9QUk9QID0gJ2RhdGEtX19tZXRhJztcbmV4cG9ydHMuRklFTERfTUVUQV9QUk9QID0gRklFTERfTUVUQV9QUk9QO1xudmFyIEZJRUxEX0RBVEFfUFJPUCA9ICdkYXRhLV9fZmllbGQnO1xuZXhwb3J0cy5GSUVMRF9EQVRBX1BST1AgPSBGSUVMRF9EQVRBX1BST1A7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkZvcm1Db250ZXh0ID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZVJlYWN0Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2NyZWF0ZS1yZWFjdC1jb250ZXh0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBGb3JtQ29udGV4dCA9ICgwLCBfY3JlYXRlUmVhY3RDb250ZXh0W1wiZGVmYXVsdFwiXSkoe1xuICBsYWJlbEFsaWduOiAncmlnaHQnLFxuICB2ZXJ0aWNhbDogZmFsc2Vcbn0pO1xuZXhwb3J0cy5Gb3JtQ29udGV4dCA9IEZvcm1Db250ZXh0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBSZWFjdERPTSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yY0FuaW1hdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1hbmltYXRlXCIpKTtcblxudmFyIF9yb3cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9ncmlkL3Jvd1wiKSk7XG5cbnZhciBfY29sID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vZ3JpZC9jb2xcIikpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhcm5pbmdcIikpO1xuXG52YXIgX3R5cGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvdHlwZVwiKTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5cbnZhciBfY29udGV4dCA9IHJlcXVpcmUoXCIuL2NvbnRleHRcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XG5cbnZhciBWYWxpZGF0ZVN0YXR1c2VzID0gKDAsIF90eXBlLnR1cGxlKSgnc3VjY2VzcycsICd3YXJuaW5nJywgJ2Vycm9yJywgJ3ZhbGlkYXRpbmcnLCAnJyk7XG5cbmZ1bmN0aW9uIGludGVyc3BlcnNlU3BhY2UobGlzdCkge1xuICByZXR1cm4gbGlzdC5yZWR1Y2UoZnVuY3Rpb24gKGN1cnJlbnQsIGl0ZW0pIHtcbiAgICByZXR1cm4gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjdXJyZW50KSwgWycgJywgaXRlbV0pO1xuICB9LCBbXSkuc2xpY2UoMSk7XG59XG5cbnZhciBGb3JtSXRlbSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRm9ybUl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZvcm1JdGVtKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JtSXRlbSk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihGb3JtSXRlbSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgX3RoaXMuaGVscFNob3cgPSBmYWxzZTtcblxuICAgIF90aGlzLm9uSGVscEFuaW1FbmQgPSBmdW5jdGlvbiAoX2tleSwgaGVscFNob3cpIHtcbiAgICAgIF90aGlzLmhlbHBTaG93ID0gaGVscFNob3c7XG5cbiAgICAgIGlmICghaGVscFNob3cpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe30pO1xuICAgICAgfVxuICAgIH07IC8vIFJlc29sdmUgZHVwbGljYXRlZCBpZHMgYnVnIGJldHdlZW4gZGlmZmVyZW50IGZvcm1zXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNzM1MVxuXG5cbiAgICBfdGhpcy5vbkxhYmVsQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaWQgPSBfdGhpcy5wcm9wcy5pZCB8fCBfdGhpcy5nZXRJZCgpO1xuXG4gICAgICBpZiAoIWlkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvcm1JdGVtTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICAgIHZhciBjb250cm9sID0gZm9ybUl0ZW1Ob2RlLnF1ZXJ5U2VsZWN0b3IoXCJbaWQ9XFxcIlwiLmNvbmNhdChpZCwgXCJcXFwiXVwiKSk7XG5cbiAgICAgIGlmIChjb250cm9sICYmIGNvbnRyb2wuZm9jdXMpIHtcbiAgICAgICAgY29udHJvbC5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJGb3JtSXRlbSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX2l0ZW1DbGFzc05hbWU7XG5cbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF90aGlzJHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzLnN0eWxlLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZTtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2Zvcm0nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuXG4gICAgICB2YXIgY2hpbGRyZW4gPSBfdGhpcy5yZW5kZXJDaGlsZHJlbihwcmVmaXhDbHMpO1xuXG4gICAgICB2YXIgaXRlbUNsYXNzTmFtZSA9IChfaXRlbUNsYXNzTmFtZSA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2l0ZW1DbGFzc05hbWUsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbVwiKSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfaXRlbUNsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLXdpdGgtaGVscFwiKSwgX3RoaXMuaGVscFNob3cpLCBfZGVmaW5lUHJvcGVydHkoX2l0ZW1DbGFzc05hbWUsIFwiXCIuY29uY2F0KGNsYXNzTmFtZSksICEhY2xhc3NOYW1lKSwgX2l0ZW1DbGFzc05hbWUpO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX3Jvd1tcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShpdGVtQ2xhc3NOYW1lKSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBrZXk6IFwicm93XCJcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZvcm1JdGVtLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIGhlbHAgPSBfdGhpcyRwcm9wczIuaGVscCxcbiAgICAgICAgICB2YWxpZGF0ZVN0YXR1cyA9IF90aGlzJHByb3BzMi52YWxpZGF0ZVN0YXR1cyxcbiAgICAgICAgICBpZCA9IF90aGlzJHByb3BzMi5pZDtcbiAgICAgICgwLCBfd2FybmluZ1tcImRlZmF1bHRcIl0pKHRoaXMuZ2V0Q29udHJvbHMoY2hpbGRyZW4sIHRydWUpLmxlbmd0aCA8PSAxIHx8IGhlbHAgIT09IHVuZGVmaW5lZCB8fCB2YWxpZGF0ZVN0YXR1cyAhPT0gdW5kZWZpbmVkLCAnRm9ybS5JdGVtJywgJ0Nhbm5vdCBnZW5lcmF0ZSBgdmFsaWRhdGVTdGF0dXNgIGFuZCBgaGVscGAgYXV0b21hdGljYWxseSwgJyArICd3aGlsZSB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZSBgZ2V0RmllbGREZWNvcmF0b3JgIGluIGl0LicpO1xuICAgICAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkoIWlkLCAnRm9ybS5JdGVtJywgJ2BpZGAgaXMgZGVwcmVjYXRlZCBmb3IgaXRzIGxhYmVsIGBodG1sRm9yYC4gUGxlYXNlIHVzZSBgaHRtbEZvcmAgZGlyZWN0bHkuJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEhlbHBNZXNzYWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEhlbHBNZXNzYWdlKCkge1xuICAgICAgdmFyIGhlbHAgPSB0aGlzLnByb3BzLmhlbHA7XG5cbiAgICAgIGlmIChoZWxwID09PSB1bmRlZmluZWQgJiYgdGhpcy5nZXRPbmx5Q29udHJvbCgpKSB7XG4gICAgICAgIHZhciBfdGhpcyRnZXRGaWVsZCA9IHRoaXMuZ2V0RmllbGQoKSxcbiAgICAgICAgICAgIGVycm9ycyA9IF90aGlzJGdldEZpZWxkLmVycm9ycztcblxuICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgcmV0dXJuIGludGVyc3BlcnNlU3BhY2UoZXJyb3JzLm1hcChmdW5jdGlvbiAoZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGUpKSB7XG4gICAgICAgICAgICAgIG5vZGUgPSBlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChlLm1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgIG5vZGUgPSBlLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlID8gUmVhY3QuY2xvbmVFbGVtZW50KG5vZGUsIHtcbiAgICAgICAgICAgICAga2V5OiBpbmRleFxuICAgICAgICAgICAgfSkgOiBlLm1lc3NhZ2U7XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGVscDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q29udHJvbHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udHJvbHMoY2hpbGRyZW4sIHJlY3Vyc2l2ZWx5KSB7XG4gICAgICB2YXIgY29udHJvbHMgPSBbXTtcbiAgICAgIHZhciBjaGlsZHJlbkFycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXJlY3Vyc2l2ZWx5ICYmIGNvbnRyb2xzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuQXJyYXlbaV07XG5cbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgJiYgKGNoaWxkLnR5cGUgPT09IEZvcm1JdGVtIHx8IGNoaWxkLnR5cGUuZGlzcGxheU5hbWUgPT09ICdGb3JtSXRlbScpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNoaWxkLnByb3BzKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2NvbnN0YW50cy5GSUVMRF9NRVRBX1BST1AgaW4gY2hpbGQucHJvcHMpIHtcbiAgICAgICAgICAvLyBBbmQgbWVhbnMgRklFTERfREFUQV9QUk9QIGluIGNoaWxkLnByb3BzLCB0b28uXG4gICAgICAgICAgY29udHJvbHMucHVzaChjaGlsZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGQucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgICBjb250cm9scyA9IGNvbnRyb2xzLmNvbmNhdCh0aGlzLmdldENvbnRyb2xzKGNoaWxkLnByb3BzLmNoaWxkcmVuLCByZWN1cnNpdmVseSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250cm9scztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0T25seUNvbnRyb2xcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0T25seUNvbnRyb2woKSB7XG4gICAgICB2YXIgY2hpbGQgPSB0aGlzLmdldENvbnRyb2xzKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZhbHNlKVswXTtcbiAgICAgIHJldHVybiBjaGlsZCAhPT0gdW5kZWZpbmVkID8gY2hpbGQgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDaGlsZFByb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRQcm9wKHByb3ApIHtcbiAgICAgIHZhciBjaGlsZCA9IHRoaXMuZ2V0T25seUNvbnRyb2woKTtcbiAgICAgIHJldHVybiBjaGlsZCAmJiBjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wc1twcm9wXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0SWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDaGlsZFByb3AoJ2lkJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldE1ldGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWV0YSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENoaWxkUHJvcChfY29uc3RhbnRzLkZJRUxEX01FVEFfUFJPUCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEZpZWxkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZpZWxkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hpbGRQcm9wKF9jb25zdGFudHMuRklFTERfREFUQV9QUk9QKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVySGVscFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJIZWxwKHByZWZpeENscykge1xuICAgICAgdmFyIGhlbHAgPSB0aGlzLmdldEhlbHBNZXNzYWdlKCk7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBoZWxwID8gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1leHBsYWluXCIpLFxuICAgICAgICBrZXk6IFwiaGVscFwiXG4gICAgICB9LCBoZWxwKSA6IG51bGw7XG5cbiAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICB0aGlzLmhlbHBTaG93ID0gISFjaGlsZHJlbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjQW5pbWF0ZVtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgdHJhbnNpdGlvbk5hbWU6IFwic2hvdy1oZWxwXCIsXG4gICAgICAgIGNvbXBvbmVudDogXCJcIixcbiAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogdHJ1ZSxcbiAgICAgICAga2V5OiBcImhlbHBcIixcbiAgICAgICAgb25FbmQ6IHRoaXMub25IZWxwQW5pbUVuZFxuICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJFeHRyYVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJFeHRyYShwcmVmaXhDbHMpIHtcbiAgICAgIHZhciBleHRyYSA9IHRoaXMucHJvcHMuZXh0cmE7XG4gICAgICByZXR1cm4gZXh0cmEgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWV4dHJhXCIpXG4gICAgICB9LCBleHRyYSkgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRWYWxpZGF0ZVN0YXR1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWxpZGF0ZVN0YXR1cygpIHtcbiAgICAgIHZhciBvbmx5Q29udHJvbCA9IHRoaXMuZ2V0T25seUNvbnRyb2woKTtcblxuICAgICAgaWYgKCFvbmx5Q29udHJvbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaWVsZCA9IHRoaXMuZ2V0RmllbGQoKTtcblxuICAgICAgaWYgKGZpZWxkLnZhbGlkYXRpbmcpIHtcbiAgICAgICAgcmV0dXJuICd2YWxpZGF0aW5nJztcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkLmVycm9ycykge1xuICAgICAgICByZXR1cm4gJ2Vycm9yJztcbiAgICAgIH1cblxuICAgICAgdmFyIGZpZWxkVmFsdWUgPSAndmFsdWUnIGluIGZpZWxkID8gZmllbGQudmFsdWUgOiB0aGlzLmdldE1ldGEoKS5pbml0aWFsVmFsdWU7XG5cbiAgICAgIGlmIChmaWVsZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgZmllbGRWYWx1ZSAhPT0gbnVsbCAmJiBmaWVsZFZhbHVlICE9PSAnJykge1xuICAgICAgICByZXR1cm4gJ3N1Y2Nlc3MnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclZhbGlkYXRlV3JhcHBlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJWYWxpZGF0ZVdyYXBwZXIocHJlZml4Q2xzLCBjMSwgYzIsIGMzKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIG9ubHlDb250cm9sID0gdGhpcy5nZXRPbmx5Q29udHJvbDtcbiAgICAgIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHByb3BzLnZhbGlkYXRlU3RhdHVzID09PSB1bmRlZmluZWQgJiYgb25seUNvbnRyb2wgPyB0aGlzLmdldFZhbGlkYXRlU3RhdHVzKCkgOiBwcm9wcy52YWxpZGF0ZVN0YXR1cztcbiAgICAgIHZhciBjbGFzc2VzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWNvbnRyb2xcIik7XG5cbiAgICAgIGlmICh2YWxpZGF0ZVN0YXR1cykge1xuICAgICAgICBjbGFzc2VzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWNvbnRyb2xcIiksIHtcbiAgICAgICAgICAnaGFzLWZlZWRiYWNrJzogcHJvcHMuaGFzRmVlZGJhY2sgfHwgdmFsaWRhdGVTdGF0dXMgPT09ICd2YWxpZGF0aW5nJyxcbiAgICAgICAgICAnaGFzLXN1Y2Nlc3MnOiB2YWxpZGF0ZVN0YXR1cyA9PT0gJ3N1Y2Nlc3MnLFxuICAgICAgICAgICdoYXMtd2FybmluZyc6IHZhbGlkYXRlU3RhdHVzID09PSAnd2FybmluZycsXG4gICAgICAgICAgJ2hhcy1lcnJvcic6IHZhbGlkYXRlU3RhdHVzID09PSAnZXJyb3InLFxuICAgICAgICAgICdpcy12YWxpZGF0aW5nJzogdmFsaWRhdGVTdGF0dXMgPT09ICd2YWxpZGF0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGljb25UeXBlID0gJyc7XG5cbiAgICAgIHN3aXRjaCAodmFsaWRhdGVTdGF0dXMpIHtcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgaWNvblR5cGUgPSAnY2hlY2stY2lyY2xlJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgICBpY29uVHlwZSA9ICdleGNsYW1hdGlvbi1jaXJjbGUnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICBpY29uVHlwZSA9ICdjbG9zZS1jaXJjbGUnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3ZhbGlkYXRpbmcnOlxuICAgICAgICAgIGljb25UeXBlID0gJ2xvYWRpbmcnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWNvblR5cGUgPSAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdmFyIGljb24gPSBwcm9wcy5oYXNGZWVkYmFjayAmJiBpY29uVHlwZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tY2hpbGRyZW4taWNvblwiKVxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChfaWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgdHlwZTogaWNvblR5cGUsXG4gICAgICAgIHRoZW1lOiBpY29uVHlwZSA9PT0gJ2xvYWRpbmcnID8gJ291dGxpbmVkJyA6ICdmaWxsZWQnXG4gICAgICB9KSkgOiBudWxsO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tY2hpbGRyZW5cIilcbiAgICAgIH0sIGMxLCBpY29uKSwgYzIsIGMzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyV3JhcHBlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJXcmFwcGVyKHByZWZpeENscywgY2hpbGRyZW4pIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dC5Gb3JtQ29udGV4dC5Db25zdW1lciwge1xuICAgICAgICBrZXk6IFwid3JhcHBlclwiXG4gICAgICB9LCBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIGNvbnRleHRXcmFwcGVyQ29sID0gX3JlZjIud3JhcHBlckNvbCxcbiAgICAgICAgICAgIHZlcnRpY2FsID0gX3JlZjIudmVydGljYWw7XG4gICAgICAgIHZhciB3cmFwcGVyQ29sID0gX3RoaXMyLnByb3BzLndyYXBwZXJDb2w7XG4gICAgICAgIHZhciBtZXJnZWRXcmFwcGVyQ29sID0gKCd3cmFwcGVyQ29sJyBpbiBfdGhpczIucHJvcHMgPyB3cmFwcGVyQ29sIDogY29udGV4dFdyYXBwZXJDb2wpIHx8IHt9O1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWNvbnRyb2wtd3JhcHBlclwiKSwgbWVyZ2VkV3JhcHBlckNvbC5jbGFzc05hbWUpOyAvLyBObyBwYXNzIEZvcm1Db250ZXh0IHNpbmNlIGl0J3MgdXNlbGVzc1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0LkZvcm1Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbFxuICAgICAgICAgIH1cbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChfY29sW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe30sIG1lcmdlZFdyYXBwZXJDb2wsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICB9KSwgY2hpbGRyZW4pKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1JlcXVpcmVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzUmVxdWlyZWQoKSB7XG4gICAgICB2YXIgcmVxdWlyZWQgPSB0aGlzLnByb3BzLnJlcXVpcmVkO1xuXG4gICAgICBpZiAocmVxdWlyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmdldE9ubHlDb250cm9sKCkpIHtcbiAgICAgICAgdmFyIG1ldGEgPSB0aGlzLmdldE1ldGEoKSB8fCB7fTtcbiAgICAgICAgdmFyIHZhbGlkYXRlID0gbWV0YS52YWxpZGF0ZSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiAhIWl0ZW0ucnVsZXM7XG4gICAgICAgIH0pLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbS5ydWxlcy5zb21lKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gcnVsZS5yZXF1aXJlZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyTGFiZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTGFiZWwocHJlZml4Q2xzKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbnRleHQuRm9ybUNvbnRleHQuQ29uc3VtZXIsIHtcbiAgICAgICAga2V5OiBcImxhYmVsXCJcbiAgICAgIH0sIGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgdmFyIHZlcnRpY2FsID0gX3JlZjMudmVydGljYWwsXG4gICAgICAgICAgICBjb250ZXh0TGFiZWxBbGlnbiA9IF9yZWYzLmxhYmVsQWxpZ24sXG4gICAgICAgICAgICBjb250ZXh0TGFiZWxDb2wgPSBfcmVmMy5sYWJlbENvbCxcbiAgICAgICAgICAgIGNvbnRleHRDb2xvbiA9IF9yZWYzLmNvbG9uO1xuICAgICAgICB2YXIgX3RoaXMzJHByb3BzID0gX3RoaXMzLnByb3BzLFxuICAgICAgICAgICAgbGFiZWwgPSBfdGhpczMkcHJvcHMubGFiZWwsXG4gICAgICAgICAgICBsYWJlbENvbCA9IF90aGlzMyRwcm9wcy5sYWJlbENvbCxcbiAgICAgICAgICAgIGxhYmVsQWxpZ24gPSBfdGhpczMkcHJvcHMubGFiZWxBbGlnbixcbiAgICAgICAgICAgIGNvbG9uID0gX3RoaXMzJHByb3BzLmNvbG9uLFxuICAgICAgICAgICAgaWQgPSBfdGhpczMkcHJvcHMuaWQsXG4gICAgICAgICAgICBodG1sRm9yID0gX3RoaXMzJHByb3BzLmh0bWxGb3I7XG5cbiAgICAgICAgdmFyIHJlcXVpcmVkID0gX3RoaXMzLmlzUmVxdWlyZWQoKTtcblxuICAgICAgICB2YXIgbWVyZ2VkTGFiZWxDb2wgPSAoJ2xhYmVsQ29sJyBpbiBfdGhpczMucHJvcHMgPyBsYWJlbENvbCA6IGNvbnRleHRMYWJlbENvbCkgfHwge307XG4gICAgICAgIHZhciBtZXJnZWRMYWJlbEFsaWduID0gJ2xhYmVsQWxpZ24nIGluIF90aGlzMy5wcm9wcyA/IGxhYmVsQWxpZ24gOiBjb250ZXh0TGFiZWxBbGlnbjtcbiAgICAgICAgdmFyIGxhYmVsQ2xzQmFzaWMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tbGFiZWxcIik7XG4gICAgICAgIHZhciBsYWJlbENvbENsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGxhYmVsQ2xzQmFzaWMsIG1lcmdlZExhYmVsQWxpZ24gPT09ICdsZWZ0JyAmJiBcIlwiLmNvbmNhdChsYWJlbENsc0Jhc2ljLCBcIi1sZWZ0XCIpLCBtZXJnZWRMYWJlbENvbC5jbGFzc05hbWUpO1xuICAgICAgICB2YXIgbGFiZWxDaGlsZHJlbiA9IGxhYmVsOyAvLyBLZWVwIGxhYmVsIGlzIG9yaWdpbmFsIHdoZXJlIHRoZXJlIHNob3VsZCBoYXZlIG5vIGNvbG9uXG5cbiAgICAgICAgdmFyIGNvbXB1dGVkQ29sb24gPSBjb2xvbiA9PT0gdHJ1ZSB8fCBjb250ZXh0Q29sb24gIT09IGZhbHNlICYmIGNvbG9uICE9PSBmYWxzZTtcbiAgICAgICAgdmFyIGhhdmVDb2xvbiA9IGNvbXB1dGVkQ29sb24gJiYgIXZlcnRpY2FsOyAvLyBSZW1vdmUgZHVwbGljYXRlZCB1c2VyIGlucHV0IGNvbG9uXG5cbiAgICAgICAgaWYgKGhhdmVDb2xvbiAmJiB0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnICYmIGxhYmVsLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICBsYWJlbENoaWxkcmVuID0gbGFiZWwucmVwbGFjZSgvW++8mnw6XVxccyokLywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxhYmVsQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLXJlcXVpcmVkXCIpLCByZXF1aXJlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLW5vLWNvbG9uXCIpLCAhY29tcHV0ZWRDb2xvbiksIF9jbGFzc05hbWVzKSk7XG4gICAgICAgIHJldHVybiBsYWJlbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCBtZXJnZWRMYWJlbENvbCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogbGFiZWxDb2xDbGFzc05hbWVcbiAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgaHRtbEZvcjogaHRtbEZvciB8fCBpZCB8fCBfdGhpczMuZ2V0SWQoKSxcbiAgICAgICAgICBjbGFzc05hbWU6IGxhYmVsQ2xhc3NOYW1lLFxuICAgICAgICAgIHRpdGxlOiB0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnID8gbGFiZWwgOiAnJyxcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpczMub25MYWJlbENsaWNrXG4gICAgICAgIH0sIGxhYmVsQ2hpbGRyZW4pKSA6IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyQ2hpbGRyZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2hpbGRyZW4ocHJlZml4Q2xzKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgcmV0dXJuIFt0aGlzLnJlbmRlckxhYmVsKHByZWZpeENscyksIHRoaXMucmVuZGVyV3JhcHBlcihwcmVmaXhDbHMsIHRoaXMucmVuZGVyVmFsaWRhdGVXcmFwcGVyKHByZWZpeENscywgY2hpbGRyZW4sIHRoaXMucmVuZGVySGVscChwcmVmaXhDbHMpLCB0aGlzLnJlbmRlckV4dHJhKHByZWZpeENscykpKV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyRm9ybUl0ZW0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGb3JtSXRlbTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBGb3JtSXRlbTtcbkZvcm1JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGFzRmVlZGJhY2s6IGZhbHNlXG59O1xuRm9ybUl0ZW0ucHJvcFR5cGVzID0ge1xuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuICBsYWJlbEFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbENvbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgaGVscDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5ib29sXSksXG4gIHZhbGlkYXRlU3RhdHVzOiBQcm9wVHlwZXMub25lT2YoVmFsaWRhdGVTdGF0dXNlcyksXG4gIGhhc0ZlZWRiYWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgd3JhcHBlckNvbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjb2xvbjogUHJvcFR5cGVzLmJvb2xcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfY3JlYXRlRE9NRm9ybSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLWZvcm0vbGliL2NyZWF0ZURPTUZvcm1cIikpO1xuXG52YXIgX2NyZWF0ZUZvcm1GaWVsZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLWZvcm0vbGliL2NyZWF0ZUZvcm1GaWVsZFwiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4uL191dGlsL3R5cGVcIik7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhcm5pbmdcIikpO1xuXG52YXIgX0Zvcm1JdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtSXRlbVwiKSk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuXG52YXIgX2NvbnRleHQgPSByZXF1aXJlKFwiLi9jb250ZXh0XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgRm9ybUxheW91dHMgPSAoMCwgX3R5cGUudHVwbGUpKCdob3Jpem9udGFsJywgJ2lubGluZScsICd2ZXJ0aWNhbCcpO1xuXG52YXIgRm9ybSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRm9ybSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRm9ybShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JtKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEZvcm0pLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnJlbmRlckZvcm0gPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgaGlkZVJlcXVpcmVkTWFyayA9IF90aGlzJHByb3BzLmhpZGVSZXF1aXJlZE1hcmssXG4gICAgICAgICAgX3RoaXMkcHJvcHMkY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gJycgOiBfdGhpcyRwcm9wcyRjbGFzc05hbWUsXG4gICAgICAgICAgbGF5b3V0ID0gX3RoaXMkcHJvcHMubGF5b3V0O1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZm9ybScsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgZm9ybUNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ob3Jpem9udGFsXCIpLCBsYXlvdXQgPT09ICdob3Jpem9udGFsJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi12ZXJ0aWNhbFwiKSwgbGF5b3V0ID09PSAndmVydGljYWwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlubGluZVwiKSwgbGF5b3V0ID09PSAnaW5saW5lJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oaWRlLXJlcXVpcmVkLW1hcmtcIiksIGhpZGVSZXF1aXJlZE1hcmspLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgICB2YXIgZm9ybVByb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkoX3RoaXMucHJvcHMsIFsncHJlZml4Q2xzJywgJ2NsYXNzTmFtZScsICdsYXlvdXQnLCAnZm9ybScsICdoaWRlUmVxdWlyZWRNYXJrJywgJ3dyYXBwZXJDb2wnLCAnbGFiZWxBbGlnbicsICdsYWJlbENvbCcsICdjb2xvbiddKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBfZXh0ZW5kcyh7fSwgZm9ybVByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZm9ybUNsYXNzTmFtZVxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICAoMCwgX3dhcm5pbmdbXCJkZWZhdWx0XCJdKSghcHJvcHMuZm9ybSwgJ0Zvcm0nLCAnSXQgaXMgdW5uZWNlc3NhcnkgdG8gcGFzcyBgZm9ybWAgdG8gYEZvcm1gIGFmdGVyIGFudGRAMS43LjAuJyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZvcm0sIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB3cmFwcGVyQ29sID0gX3RoaXMkcHJvcHMyLndyYXBwZXJDb2wsXG4gICAgICAgICAgbGFiZWxBbGlnbiA9IF90aGlzJHByb3BzMi5sYWJlbEFsaWduLFxuICAgICAgICAgIGxhYmVsQ29sID0gX3RoaXMkcHJvcHMyLmxhYmVsQ29sLFxuICAgICAgICAgIGxheW91dCA9IF90aGlzJHByb3BzMi5sYXlvdXQsXG4gICAgICAgICAgY29sb24gPSBfdGhpcyRwcm9wczIuY29sb247XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dC5Gb3JtQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIHdyYXBwZXJDb2w6IHdyYXBwZXJDb2wsXG4gICAgICAgICAgbGFiZWxBbGlnbjogbGFiZWxBbGlnbixcbiAgICAgICAgICBsYWJlbENvbDogbGFiZWxDb2wsXG4gICAgICAgICAgdmVydGljYWw6IGxheW91dCA9PT0gJ3ZlcnRpY2FsJyxcbiAgICAgICAgICBjb2xvbjogY29sb25cbiAgICAgICAgfVxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyRm9ybSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGb3JtO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZvcm07XG5Gb3JtLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29sb246IHRydWUsXG4gIGxheW91dDogJ2hvcml6b250YWwnLFxuICBoaWRlUmVxdWlyZWRNYXJrOiBmYWxzZSxcbiAgb25TdWJtaXQ6IGZ1bmN0aW9uIG9uU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn07XG5Gb3JtLnByb3BUeXBlcyA9IHtcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYXlvdXQ6IFByb3BUeXBlcy5vbmVPZihGb3JtTGF5b3V0cyksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gIGhpZGVSZXF1aXJlZE1hcms6IFByb3BUeXBlcy5ib29sLFxuICBjb2xvbjogUHJvcFR5cGVzLmJvb2xcbn07XG5Gb3JtLkl0ZW0gPSBfRm9ybUl0ZW1bXCJkZWZhdWx0XCJdO1xuRm9ybS5jcmVhdGVGb3JtRmllbGQgPSBfY3JlYXRlRm9ybUZpZWxkW1wiZGVmYXVsdFwiXTtcblxuRm9ybS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgcmV0dXJuICgwLCBfY3JlYXRlRE9NRm9ybVtcImRlZmF1bHRcIl0pKF9leHRlbmRzKHtcbiAgICBmaWVsZE5hbWVQcm9wOiAnaWQnXG4gIH0sIG9wdGlvbnMsIHtcbiAgICBmaWVsZE1ldGFQcm9wOiBfY29uc3RhbnRzLkZJRUxEX01FVEFfUFJPUCxcbiAgICBmaWVsZERhdGFQcm9wOiBfY29uc3RhbnRzLkZJRUxEX0RBVEFfUFJPUFxuICB9KSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfRm9ybSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9ybVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSBfRm9ybVtcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpLFxuICAgIGJhc2VTZXQgPSByZXF1aXJlKCcuL19iYXNlU2V0JyksXG4gICAgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mICBgXy5waWNrQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHBhdGhzIFRoZSBwcm9wZXJ0eSBwYXRocyB0byBwaWNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBwcm9wZXJ0eS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGJhc2VQaWNrQnkob2JqZWN0LCBwYXRocywgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aHMubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgcGF0aCA9IHBhdGhzW2luZGV4XSxcbiAgICAgICAgdmFsdWUgPSBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG5cbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBwYXRoKSkge1xuICAgICAgYmFzZVNldChyZXN1bHQsIGNhc3RQYXRoKHBhdGgsIG9iamVjdCksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUGlja0J5O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuIiwidmFyIGJhc2VIYXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VIYXNJbicpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBvciBpbmhlcml0ZWQgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNJbjtcbiIsInZhciBiYXNlUGlja0J5ID0gcmVxdWlyZSgnLi9fYmFzZVBpY2tCeScpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnBpY2tgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaW5kaXZpZHVhbFxuICogcHJvcGVydHkgaWRlbnRpZmllcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXRocyBUaGUgcHJvcGVydHkgcGF0aHMgdG8gcGljay5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGJhc2VQaWNrKG9iamVjdCwgcGF0aHMpIHtcbiAgcmV0dXJuIGJhc2VQaWNrQnkob2JqZWN0LCBwYXRocywgZnVuY3Rpb24odmFsdWUsIHBhdGgpIHtcbiAgICByZXR1cm4gaGFzSW4ob2JqZWN0LCBwYXRoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVBpY2s7XG4iLCJ2YXIgYmFzZVBpY2sgPSByZXF1aXJlKCcuL19iYXNlUGljaycpLFxuICAgIGZsYXRSZXN0ID0gcmVxdWlyZSgnLi9fZmxhdFJlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCBjb21wb3NlZCBvZiB0aGUgcGlja2VkIGBvYmplY3RgIHByb3BlcnRpZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uKHN0cmluZ3xzdHJpbmdbXSl9IFtwYXRoc10gVGhlIHByb3BlcnR5IHBhdGhzIHRvIHBpY2suXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogJzInLCAnYyc6IDMgfTtcbiAqXG4gKiBfLnBpY2sob2JqZWN0LCBbJ2EnLCAnYyddKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYyc6IDMgfVxuICovXG52YXIgcGljayA9IGZsYXRSZXN0KGZ1bmN0aW9uKG9iamVjdCwgcGF0aHMpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8ge30gOiBiYXNlUGljayhvYmplY3QsIHBhdGhzKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBpY2s7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC9waWNrJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vd2l0aFRoZW1lJ1xuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tICcuLi9DdXN0b21CdXR0b24nXG5cbi8qKlxuICogVGhlbWFibGUgRm9ybS5JdGVtXG4gKi9cbmNvbnN0IFNGb3JtSXRlbSA9IHdpdGhUaGVtZShGb3JtLkl0ZW0pXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVHZW5lcmljRm9ybUNvbXBvbmVudCA9IGNvbmZpZyA9PiB7XG4gIGNsYXNzIEdlbmVyaWNGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiB0cnVlIH0pXG4gICAgICB0aGlzLnByb3BzLmZvcm0udmFsaWRhdGVGaWVsZHNBbmRTY3JvbGwoKGVyciwgdmFsdWVzKSA9PiB7XG4gICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIHZhbHVlcyBvZiBmb3JtOiAnLCB2YWx1ZXMpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5ncm91cChlcnIpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXR0aW5nOiBmYWxzZSB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGZpZWxkcyxcbiAgICAgICAgZm9ybSxcbiAgICAgICAgc3VibWl0QnV0dG9uQ29udGVudCxcbiAgICAgICAgc3VibWl0QnV0dG9uUHJvcHNcbiAgICAgIH0gPSB0aGlzLnByb3BzXG4gICAgICBjb25zdCBzdWJtaXR0aW5nID0gZ2V0KHRoaXMuc3RhdGUsICdzdWJtaXR0aW5nJylcbiAgICAgIGNvbnN0IHsgZ2V0RmllbGREZWNvcmF0b3IgfSA9IHBpY2soZm9ybSwgWydnZXRGaWVsZERlY29yYXRvciddKVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybSBoaWRlUmVxdWlyZWRNYXJrIGxheW91dD1cInZlcnRpY2FsXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICB7ZmllbGRzLm1hcChcbiAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgY29tcG9uZW50UHJvcHMsXG4gICAgICAgICAgICAgIGZpZWxkQ29uZmlnLFxuICAgICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgZm9ybUl0ZW1Qcm9wc1xuICAgICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgICA8U0Zvcm1JdGVtXG4gICAgICAgICAgICAgICAga2V5PXtuYW1lfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICBodG1sRm9yPXtuYW1lfVxuICAgICAgICAgICAgICAgIG1iPXswfVxuICAgICAgICAgICAgICAgIHsuLi5mb3JtSXRlbVByb3BzfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKG5hbWUsIGZpZWxkQ29uZmlnKShcbiAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLmNvbXBvbmVudFByb3BzfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvU0Zvcm1JdGVtPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgICAgPEN1c3RvbUJ1dHRvblxuICAgICAgICAgICAgY29udGVudD17c3VibWl0QnV0dG9uQ29udGVudH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nfVxuICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgey4uLnN1Ym1pdEJ1dHRvblByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gRm9ybS5jcmVhdGUoY29uZmlnKShHZW5lcmljRm9ybSlcbn1cbiJdLCJuYW1lcyI6WyJyZXF1aXJlJCQwIiwiaGFzUGF0aCIsImJhc2VIYXMiLCJJVEVSQVRPUiIsInJlcXVpcmUkJDEiLCJjbGFzc29mIiwiZ2V0SXRlckZuIiwiaXNBcnJheUl0ZXIiLCJjcmVhdGVQcm9wZXJ0eSIsImNhbGwiLCJfZnJvbSIsImVtcHR5RnVuY3Rpb24iLCJ3YXJuaW5nIiwiX2ludmFyaWFudCIsImVtcHR5T2JqZWN0IiwiUmVhY3QiLCJmYWN0b3J5IiwiX3R5cGVvZiIsIl9leHRlbmRzIiwidXRpbC5pc0VtcHR5VmFsdWUiLCJ1dGlsLmZvcm1hdCIsInBhdHRlcm4iLCJlbnVtUnVsZSIsIkVOVU0iLCJlbnVtZXJhYmxlIiwicmVxdWlyZWQiLCJ0eXBlIiwiZmxvYXQiLCJlbnVtVmFsaWRhdG9yIiwiZGVmYXVsdE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJiYXNlU2V0IiwiX2V4dGVuZHMyIiwiX2NsYXNzQ2FsbENoZWNrMiIsIlJlYWN0SXMiLCJfaG9pc3ROb25SZWFjdFN0YXRpY3MiLCJfZGVmaW5lUHJvcGVydHkyIiwiX2NyZWF0ZUNsYXNzMiIsIl9zZXQiLCJfY3JlYXRlRm9ybUZpZWxkIiwiX3V0aWxzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiIsIl9leHRlbmRzNSIsIl90b0NvbnN1bWFibGVBcnJheTIiLCJfcmVhY3QiLCJfY3JlYXRlUmVhY3RDbGFzcyIsIl9hc3luY1ZhbGlkYXRvciIsIl9nZXQiLCJfY3JlYXRlRmllbGRzU3RvcmUiLCJfY3JlYXRlQmFzZUZvcm0iLCJfcmVhY3REb20iLCJfZG9tU2Nyb2xsSW50b1ZpZXciLCJfaGFzIiwiX2NyZWF0ZUZvcm0iLCJyZXF1aXJlJCQyIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDciLCJyZXF1aXJlJCQ4IiwiX2NvbnN0YW50cyIsIl9jb250ZXh0IiwicmVxdWlyZSQkNCIsInJlcXVpcmUkJDUiLCJyZXF1aXJlJCQ2IiwiYmFzZUhhc0luIiwiYmFzZVBpY2tCeSIsImhhc0luIiwiYmFzZVBpY2siLCJTRm9ybUl0ZW0iLCJ3aXRoVGhlbWUiLCJJdGVtIiwiY3JlYXRlR2VuZXJpY0Zvcm1Db21wb25lbnQiLCJjb25maWciLCJHZW5lcmljRm9ybSIsInN1Ym1pdHRpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInByb3BzIiwiZm9ybSIsInZhbGlkYXRlRmllbGRzQW5kU2Nyb2xsIiwiZXJyIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImdyb3VwIiwiZmllbGRzIiwic3VibWl0QnV0dG9uQ29udGVudCIsInN1Ym1pdEJ1dHRvblByb3BzIiwiZ2V0Iiwic3RhdGUiLCJwaWNrIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJoYW5kbGVTdWJtaXQiLCJtYXAiLCJDb21wb25lbnQiLCJjb21wb25lbnRQcm9wcyIsImZpZWxkQ29uZmlnIiwibGFiZWwiLCJuYW1lIiwiZm9ybUl0ZW1Qcm9wcyIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUs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QyxNQUFNLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztBQUNqZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMs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LENBQUMsQ0FBQzs7QUFFMUQsSUFBSSxJQUFJLEdBQUcsc0JBQXNCLENBQUMsVUFBc0IsQ0FBQyxDQUFDOztBQUUxRCxJQUFJLEtBQUssR0FBRyxzQkFBc0IsQ0FBQ0MsWUFBa0IsQ0FBQyxDQUFDOzs7O0FBSXZELElBQUksUUFBUSxHQUFHLHNCQUFzQixDQUFDQyxZQUEyQixDQUFDLENBQUM7Ozs7Ozs7O0FBUW5FLFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTs7QUFFakcsU0FBUyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUU7O0FBRTNkLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUUsRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFOztBQUUvVixTQUFTLFFBQVEsR0FBRyxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFB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QUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUU7O0FBRTNkLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUUsRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFOztBQUUvVixTQUFTLFFBQVEsR0FBRyxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUU7O0FBRTdULFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTs7QUFFak4sU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsRUFBRSxFQUFFOztBQUV6SixTQUFTLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxFQUFFOztBQUU3VCxTQUFTLFlBQVksQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksVUFBVSxFQUFFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLFdBQVcsQ0FBQyxFQUFFOztBQUV2TixTQUFTLDBCQUEwQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTs7QUFFakwsU0FBUyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sSUFBSSxjQUFjLENBQUMsMkRBQTJELENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRTs7QUFFdEssU0FBUyxlQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUUsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsR0FBRyxTQUFTLGVBQWUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztBQUU3TSxTQUFTLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQUUsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLElBQUksVUFBVSxLQUFLLElBQUksRUFBRSxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxlQUFlLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUU7O0FBRWpZLFNBQVMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxTQUFTLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FB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