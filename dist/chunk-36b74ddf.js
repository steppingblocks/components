import React__default, { Component } from 'react';
import PropTypes__default from 'prop-types';
import { c as classnames } from './chunk-dbd356d3.js';
import { c as _extends$1, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, e as _createClass, d as _objectWithoutProperties } from './chunk-f94271b9.js';
import ReactDOM__default, { findDOMNode, createPortal } from 'react-dom';
import { a as addDOMEventListener, c as contains, C as ContainerRender, P as Portal } from './chunk-3c626a6d.js';
import { A as Animate } from './chunk-886bee81.js';

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = ReactDOM__default.unstable_batchedUpdates ? function run(e) {
    ReactDOM__default.unstable_batchedUpdates(cb, e);
  } : cb;
  return addDOMEventListener(target, eventType, callback, option);
}

function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _extends$1({}, baseAlign, align);
}

function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

function saveRef(name, component) {
  this[name] = component;
}

var vendorPrefix = void 0;

var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }
  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
}

function setTransitionProperty(node, value) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}

function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
  }
  return {
    x: 0,
    y: 0
  };
}

var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;

function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var arr = void 0;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, 'matrix(' + arr.join(',') + ')');
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
    }
  } else {
    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
  }
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

var getComputedStyleX = void 0;

// https://stackoverflow.com/a/3485654/3040605
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line
  elem.style.display = originalStyle;
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
      value = value + 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box = void 0;
  var x = void 0;
  var y = void 0;
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

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

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

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }
  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
}

// 设置 elem 相对 elem.ownerDocument 的坐标
function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }
  var originalTransition = '';
  var originalOffset = getOffset(elem);
  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }
  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = presetH + 'px';
  }
  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = presetV + 'px';
  }
  // force relayout
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  // force relayout
  forceRelayout(elem);
  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = { x: originalXY.x, y: originalXY.y };
  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }
  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }
  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);

    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
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
  var name = void 0;

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
  var prop = void 0;
  var j = void 0;
  var i = void 0;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === 'border') {
          cssProp = '' + prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
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
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
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
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val = void 0;
  var elem = args[0];
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

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;
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

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },

  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },

  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i = void 0;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },

  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    for (var i = 0; i < args.length; i++) {
      utils.mix(ret, args[i]);
    }
    return ret;
  },

  viewportWidth: 0,
  viewportHeight: 0
};

mix(utils, domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */

function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  }
  // ie 这个也不是完全可行
  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = void 0;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
  }

  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    positionStyle = utils.css(parent, 'position');
    if (positionStyle !== 'static') {
      return parent;
    }
  }
  return null;
}

function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;
  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    var positionStyle = utils.css(parent, 'position');
    if (positionStyle === 'fixed') {
      return true;
    }
  }
  return false;
}

/**
 * 获得元素的显示部分的区域
 */
function getVisibleRectForElement(element) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;

  // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.
  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
    // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el);
      // add border
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right,
      // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = getOffsetParent(el);
  }

  // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601
  var originalPosition = null;
  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');
    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;

  // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.
  var bodyStyle = window.getComputedStyle(body);
  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }
  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  }

  // Reset element position after calculate the visible area
  if (element.style) {
    element.style.position = originalPosition;
  }

  if (isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);

    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }

  // Left edge inside and right edge outside viewport, try to resize it.
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }

  // Right edge outside viewport, try to move it.
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }

  // Top edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }

  // Top edge inside and bottom edge outside viewport, try to resize it.
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }

  // Bottom edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset = void 0;
  var w = void 0;
  var h = void 0;
  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */

function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;

  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];

  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

// http://yiminghe.iteye.com/blog/1124720

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n = void 0;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}

/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  // 当前节点可以被放置的显示区域
  var visibleRect = getVisibleRectForElement(source);
  // 当前节点所占的区域, left/top/width/height
  var elRegion = getRegion(source);
  // 将 offset 转换成数值，支持百分比
  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion);
  // 当前节点将要被放置的位置
  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
  // 当前节点将要所处的区域
  var newElRegion = utils.merge(elRegion, elFuturePos);

  // 如果可视区域不能完全放置当前节点时允许调整
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/ig, {
          l: 'r',
          r: 'l'
        });
        // 偏移量也反下
        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/ig, {
          t: 'b',
          b: 't'
        });
        // 偏移量也反下
        var _newOffset = flipOffset(offset, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }

    // 如果失败，重新计算当前节点将要被放置的位置
    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数
    if (isStillFailX || isStillFailY) {
      points = align.points;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    }
    // 2. 只有指定了可以调整当前方向才调整
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;

    // 确实要调整，甚至可能会调整高度宽度
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }

  // need judge to in case set fixed with in css on height auto element
  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  }

  // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>
  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });

  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isOutOfVisibleRect(target) {
  var visibleRect = getVisibleRectForElement(target);
  var targetRegion = getRegion(target);

  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);

  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);

  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = getOffsetParent;

alignElement.__getVisibleRectForElement = getVisibleRectForElement;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX = void 0;
  var pageY = void 0;

  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };

  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;

  // Provide default target point
  var points = [align.points[0], 'cc'];

  return doAlign(el, tgtRegion, _extends({}, align, { points: points }), pointInView);
}

function buffer(fn, ms) {
  var timer = void 0;

  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function bufferFn() {
    clear();
    timer = setTimeout(fn, ms);
  }

  bufferFn.clear = clear;

  return bufferFn;
}

function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}

function isWindow$1(obj) {
  return obj && typeof obj === 'object' && obj.window === obj;
}

function isSimilarValue(val1, val2) {
  var int1 = Math.floor(val1);
  var int2 = Math.floor(val2);
  return Math.abs(int1 - int2) <= 1;
}

function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (activeElement !== document.activeElement && contains(container, activeElement)) {
    activeElement.focus();
  }
}

function getElement(func) {
  if (typeof func !== 'function' || !func) return null;
  return func();
}

function getPoint(point) {
  if (typeof point !== 'object' || !point) return null;
  return point;
}

var Align = function (_Component) {
  _inherits(Align, _Component);

  function Align() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Align);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Align.__proto__ || Object.getPrototypeOf(Align)).call.apply(_ref, [this].concat(args))), _this), _this.forceAlign = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          target = _this$props.target,
          align = _this$props.align,
          onAlign = _this$props.onAlign;

      if (!disabled && target) {
        var source = ReactDOM__default.findDOMNode(_this);

        var result = void 0;
        var element = getElement(target);
        var point = getPoint(target);

        // IE lose focus after element realign
        // We should record activeElement and restore later
        var activeElement = document.activeElement;

        if (element) {
          result = alignElement(source, element, align);
        } else if (point) {
          result = alignPoint(source, point, align);
        }

        restoreFocus(activeElement, source);

        if (onAlign) {
          onAlign(source, result);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Align, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var props = this.props;
      // if parent ref not attached .... use document.getElementById
      this.forceAlign();
      if (!props.disabled && props.monitorWindowResize) {
        this.startMonitorWindowResize();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var reAlign = false;
      var props = this.props;

      if (!props.disabled) {
        var source = ReactDOM__default.findDOMNode(this);
        var sourceRect = source ? source.getBoundingClientRect() : null;

        if (prevProps.disabled) {
          reAlign = true;
        } else {
          var lastElement = getElement(prevProps.target);
          var currentElement = getElement(props.target);
          var lastPoint = getPoint(prevProps.target);
          var currentPoint = getPoint(props.target);

          if (isWindow$1(lastElement) && isWindow$1(currentElement)) {
            // Skip if is window
            reAlign = false;
          } else if (lastElement !== currentElement || // Element change
          lastElement && !currentElement && currentPoint || // Change from element to point
          lastPoint && currentPoint && currentElement || // Change from point to element
          currentPoint && !isSamePoint(lastPoint, currentPoint)) {
            reAlign = true;
          }

          // If source element size changed
          var preRect = this.sourceRect || {};
          if (!reAlign && source && (!isSimilarValue(preRect.width, sourceRect.width) || !isSimilarValue(preRect.height, sourceRect.height))) {
            reAlign = true;
          }
        }

        this.sourceRect = sourceRect;
      }

      if (reAlign) {
        this.forceAlign();
      }

      if (props.monitorWindowResize && !props.disabled) {
        this.startMonitorWindowResize();
      } else {
        this.stopMonitorWindowResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopMonitorWindowResize();
    }
  }, {
    key: 'startMonitorWindowResize',
    value: function startMonitorWindowResize() {
      if (!this.resizeHandler) {
        this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
        this.resizeHandler = addEventListenerWrap(window, 'resize', this.bufferMonitor);
      }
    }
  }, {
    key: 'stopMonitorWindowResize',
    value: function stopMonitorWindowResize() {
      if (this.resizeHandler) {
        this.bufferMonitor.clear();
        this.resizeHandler.remove();
        this.resizeHandler = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          childrenProps = _props.childrenProps,
          children = _props.children;

      var child = React__default.Children.only(children);
      if (childrenProps) {
        var newProps = {};
        var propList = Object.keys(childrenProps);
        propList.forEach(function (prop) {
          newProps[prop] = _this2.props[childrenProps[prop]];
        });

        return React__default.cloneElement(child, newProps);
      }
      return child;
    }
  }]);

  return Align;
}(Component);

Align.propTypes = {
  childrenProps: PropTypes__default.object,
  align: PropTypes__default.object.isRequired,
  target: PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.shape({
    clientX: PropTypes__default.number,
    clientY: PropTypes__default.number,
    pageX: PropTypes__default.number,
    pageY: PropTypes__default.number
  })]),
  onAlign: PropTypes__default.func,
  monitorBufferTime: PropTypes__default.number,
  monitorWindowResize: PropTypes__default.bool,
  disabled: PropTypes__default.bool,
  children: PropTypes__default.any
};
Align.defaultProps = {
  target: function target() {
    return window;
  },
  monitorBufferTime: 50,
  monitorWindowResize: false,
  disabled: false
};

// export this package's api

var LazyRenderBox = function (_Component) {
  _inherits(LazyRenderBox, _Component);

  function LazyRenderBox() {
    _classCallCheck(this, LazyRenderBox);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = _objectWithoutProperties(_props, ['hiddenClassName', 'visible']);

    if (hiddenClassName || React__default.Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return React__default.createElement('div', props);
    }

    return React__default.Children.only(props.children);
  };

  return LazyRenderBox;
}(Component);

LazyRenderBox.propTypes = {
  children: PropTypes__default.any,
  className: PropTypes__default.string,
  visible: PropTypes__default.bool,
  hiddenClassName: PropTypes__default.string
};

var PopupInner = function (_Component) {
  _inherits(PopupInner, _Component);

  function PopupInner() {
    _classCallCheck(this, PopupInner);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  PopupInner.prototype.render = function render() {
    var props = this.props;
    var className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return React__default.createElement(
      'div',
      {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onMouseDown: props.onMouseDown,
        onTouchStart: props.onTouchStart,
        style: props.style
      },
      React__default.createElement(
        LazyRenderBox,
        { className: props.prefixCls + '-content', visible: props.visible },
        props.children
      )
    );
  };

  return PopupInner;
}(Component);

PopupInner.propTypes = {
  hiddenClassName: PropTypes__default.string,
  className: PropTypes__default.string,
  prefixCls: PropTypes__default.string,
  onMouseEnter: PropTypes__default.func,
  onMouseLeave: PropTypes__default.func,
  onMouseDown: PropTypes__default.func,
  onTouchStart: PropTypes__default.func,
  children: PropTypes__default.any
};

var Popup = function (_Component) {
  _inherits(Popup, _Component);

  function Popup(props) {
    _classCallCheck(this, Popup);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      // Used for stretch
      stretchChecked: false,
      targetWidth: undefined,
      targetHeight: undefined
    };

    _this.savePopupRef = saveRef.bind(_this, 'popupInstance');
    _this.saveAlignRef = saveRef.bind(_this, 'alignInstance');
    return _this;
  }

  Popup.prototype.componentDidMount = function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
    this.setStretchSize();
  };

  Popup.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setStretchSize();
  };

  // Record size if stretch needed


  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
    return ReactDOM__default.findDOMNode(this.popupInstance);
  };

  // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align


  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  };

  Popup.prototype.getTransitionName = function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  };

  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
  };

  Popup.prototype.getPopupElement = function getPopupElement() {
    var _this2 = this;

    var savePopupRef = this.savePopupRef;
    var _state = this.state,
        stretchChecked = _state.stretchChecked,
        targetHeight = _state.targetHeight,
        targetWidth = _state.targetWidth;
    var _props = this.props,
        align = _props.align,
        visible = _props.visible,
        prefixCls = _props.prefixCls,
        style = _props.style,
        getClassNameFromAlign = _props.getClassNameFromAlign,
        destroyPopupOnHide = _props.destroyPopupOnHide,
        stretch = _props.stretch,
        children = _props.children,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        onMouseDown = _props.onMouseDown,
        onTouchStart = _props.onTouchStart;

    var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';

    if (!visible) {
      this.currentAlignClassName = null;
    }

    var sizeStyle = {};
    if (stretch) {
      // Stretch with target
      if (stretch.indexOf('height') !== -1) {
        sizeStyle.height = targetHeight;
      } else if (stretch.indexOf('minHeight') !== -1) {
        sizeStyle.minHeight = targetHeight;
      }
      if (stretch.indexOf('width') !== -1) {
        sizeStyle.width = targetWidth;
      } else if (stretch.indexOf('minWidth') !== -1) {
        sizeStyle.minWidth = targetWidth;
      }

      // Delay force align to makes ui smooth
      if (!stretchChecked) {
        sizeStyle.visibility = 'hidden';
        setTimeout(function () {
          if (_this2.alignInstance) {
            _this2.alignInstance.forceAlign();
          }
        }, 0);
      }
    }

    var newStyle = _extends$1({}, sizeStyle, style, this.getZIndexStyle());

    var popupInnerProps = {
      className: className,
      prefixCls: prefixCls,
      ref: savePopupRef,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDown: onMouseDown,
      onTouchStart: onTouchStart,
      style: newStyle
    };
    if (destroyPopupOnHide) {
      return React__default.createElement(
        Animate,
        {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName()
        },
        visible ? React__default.createElement(
          Align,
          {
            target: this.getAlignTarget(),
            key: 'popup',
            ref: this.saveAlignRef,
            monitorWindowResize: true,
            align: align,
            onAlign: this.onAlign
          },
          React__default.createElement(
            PopupInner,
            _extends$1({
              visible: true
            }, popupInnerProps),
            children
          )
        ) : null
      );
    }

    return React__default.createElement(
      Animate,
      {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible'
      },
      React__default.createElement(
        Align,
        {
          target: this.getAlignTarget(),
          key: 'popup',
          ref: this.saveAlignRef,
          monitorWindowResize: true,
          xVisible: visible,
          childrenProps: { visible: 'xVisible' },
          disabled: !visible,
          align: align,
          onAlign: this.onAlign
        },
        React__default.createElement(
          PopupInner,
          _extends$1({
            hiddenClassName: hiddenClassName
          }, popupInnerProps),
          children
        )
      )
    );
  };

  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
    var style = {};
    var props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  };

  Popup.prototype.getMaskElement = function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;
    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = React__default.createElement(LazyRenderBox, {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });
      if (maskTransition) {
        maskElement = React__default.createElement(
          Animate,
          {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          },
          maskElement
        );
      }
    }
    return maskElement;
  };

  Popup.prototype.render = function render() {
    return React__default.createElement(
      'div',
      null,
      this.getMaskElement(),
      this.getPopupElement()
    );
  };

  return Popup;
}(Component);

Popup.propTypes = {
  visible: PropTypes__default.bool,
  style: PropTypes__default.object,
  getClassNameFromAlign: PropTypes__default.func,
  onAlign: PropTypes__default.func,
  getRootDomNode: PropTypes__default.func,
  align: PropTypes__default.any,
  destroyPopupOnHide: PropTypes__default.bool,
  className: PropTypes__default.string,
  prefixCls: PropTypes__default.string,
  onMouseEnter: PropTypes__default.func,
  onMouseLeave: PropTypes__default.func,
  onMouseDown: PropTypes__default.func,
  onTouchStart: PropTypes__default.func,
  stretch: PropTypes__default.string,
  children: PropTypes__default.node,
  point: PropTypes__default.shape({
    pageX: PropTypes__default.number,
    pageY: PropTypes__default.number
  })
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this3.props;
    var currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (_this3.currentAlignClassName !== currentAlignClassName) {
      _this3.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this3.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  this.setStretchSize = function () {
    var _props2 = _this3.props,
        stretch = _props2.stretch,
        getRootDomNode = _props2.getRootDomNode,
        visible = _props2.visible;
    var _state2 = _this3.state,
        stretchChecked = _state2.stretchChecked,
        targetHeight = _state2.targetHeight,
        targetWidth = _state2.targetWidth;


    if (!stretch || !visible) {
      if (stretchChecked) {
        _this3.setState({ stretchChecked: false });
      }
      return;
    }

    var $ele = getRootDomNode();
    if (!$ele) return;

    var height = $ele.offsetHeight;
    var width = $ele.offsetWidth;

    if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
      _this3.setState({
        stretchChecked: true,
        targetHeight: height,
        targetWidth: width
      });
    }
  };

  this.getTargetElement = function () {
    return _this3.props.getRootDomNode();
  };

  this.getAlignTarget = function () {
    var point = _this3.props.point;

    if (point) {
      return point;
    }
    return _this3.getTargetElement;
  };
};

function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

var IS_REACT_16 = !!createPortal;

var contextTypes = {
  rcTrigger: PropTypes__default.shape({
    onPopupMouseDown: PropTypes__default.func
  })
};

var Trigger = function (_React$Component) {
  _inherits(Trigger, _React$Component);

  function Trigger(props) {
    _classCallCheck(this, Trigger);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps$1.call(_this);

    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }

    _this.prevPopupVisible = popupVisible;

    _this.state = {
      popupVisible: popupVisible
    };
    return _this;
  }

  Trigger.prototype.getChildContext = function getChildContext() {
    return {
      rcTrigger: {
        onPopupMouseDown: this.onPopupMouseDown
      }
    };
  };

  Trigger.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    ALL_HANDLERS.forEach(function (h) {
      _this2['fire' + h] = function (e) {
        _this2.fireEvents(h, e);
      };
    });
  };

  Trigger.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  };

  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  };

  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    };
    if (!IS_REACT_16) {
      this.renderComponent(null, triggerAfterPopupVisibleChange);
    }

    this.prevPopupVisible = prevState.popupVisible;

    // We must listen to `mousedown` or `touchstart`, edge case:
    // https://github.com/ant-design/ant-design/issues/5804
    // https://github.com/react-component/calendar/issues/250
    // https://github.com/react-component/trigger/issues/50
    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = addEventListenerWrap(currentDocument, 'mousedown', this.onDocumentClick);
      }
      // always hide on mobile
      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = addEventListenerWrap(currentDocument, 'touchstart', this.onDocumentClick);
      }
      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
        currentDocument = currentDocument || props.getDocument();
        this.contextMenuOutsideHandler1 = addEventListenerWrap(currentDocument, 'scroll', this.onContextMenuClose);
      }
      // close popup when trigger type contains 'onContextMenu' and window is blur.
      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler2 = addEventListenerWrap(window, 'blur', this.onContextMenuClose);
      }
      return;
    }

    this.clearOutsideHandler();
  };

  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
  };

  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
    // for test
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  };

  Trigger.prototype.getPopupAlign = function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  };

  /**
   * @param popupVisible    Show or not the popup element
   * @param event           SyntheticEvent, used for `pointAlign`
   */
  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
    var alignPoint = this.props.alignPoint;


    this.clearDelayTimer();

    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({ popupVisible: popupVisible });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }

    // Always record the point position since mouseEnterDelay will delay the show
    if (alignPoint && event) {
      this.setPoint(event);
    }
  };

  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
    var _this3 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      var point = event ? { pageX: event.pageX, pageY: event.pageY } : null;
      this.delayTimer = setTimeout(function () {
        _this3.setPopupVisible(visible, point);
        _this3.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible, event);
    }
  };

  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  };

  Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.contextMenuOutsideHandler1) {
      this.contextMenuOutsideHandler1.remove();
      this.contextMenuOutsideHandler1 = null;
    }

    if (this.contextMenuOutsideHandler2) {
      this.contextMenuOutsideHandler2.remove();
      this.contextMenuOutsideHandler2 = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  };

  Trigger.prototype.createTwoChains = function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  };

  Trigger.prototype.isClickToShow = function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
    var _props2 = this.props,
        action = _props2.action,
        showAction = _props2.showAction;

    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
  };

  Trigger.prototype.isClickToHide = function isClickToHide() {
    var _props3 = this.props,
        action = _props3.action,
        hideAction = _props3.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
    var _props4 = this.props,
        action = _props4.action,
        showAction = _props4.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  };

  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
    var _props5 = this.props,
        action = _props5.action,
        hideAction = _props5.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  };

  Trigger.prototype.isFocusToShow = function isFocusToShow() {
    var _props6 = this.props,
        action = _props6.action,
        showAction = _props6.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  };

  Trigger.prototype.isBlurToHide = function isBlurToHide() {
    var _props7 = this.props,
        action = _props7.action,
        hideAction = _props7.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  };

  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  };

  Trigger.prototype.fireEvents = function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  };

  Trigger.prototype.close = function close() {
    this.setPopupVisible(false);
  };

  Trigger.prototype.render = function render() {
    var _this4 = this;

    var popupVisible = this.state.popupVisible;
    var _props8 = this.props,
        children = _props8.children,
        forceRender = _props8.forceRender,
        alignPoint = _props8.alignPoint,
        className = _props8.className;

    var child = React__default.Children.only(children);
    var newChildProps = { key: 'trigger' };

    if (this.isContextMenuToShow()) {
      newChildProps.onContextMenu = this.onContextMenu;
    } else {
      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
    }

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
      if (alignPoint) {
        newChildProps.onMouseMove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    var childrenClassName = classnames(child && child.props && child.props.className, className);
    if (childrenClassName) {
      newChildProps.className = childrenClassName;
    }
    var trigger = React__default.cloneElement(child, newChildProps);

    if (!IS_REACT_16) {
      return React__default.createElement(
        ContainerRender,
        {
          parent: this,
          visible: popupVisible,
          autoMount: false,
          forceRender: forceRender,
          getComponent: this.getComponent,
          getContainer: this.getContainer
        },
        function (_ref2) {
          var renderComponent = _ref2.renderComponent;

          _this4.renderComponent = renderComponent;
          return trigger;
        }
      );
    }

    var portal = void 0;
    // prevent unmounting after it's rendered
    if (popupVisible || this._component || forceRender) {
      portal = React__default.createElement(
        Portal,
        {
          key: 'portal',
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        },
        this.getComponent()
      );
    }

    return [trigger, portal];
  };

  return Trigger;
}(React__default.Component);

Trigger.propTypes = {
  children: PropTypes__default.any,
  action: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.arrayOf(PropTypes__default.string)]),
  showAction: PropTypes__default.any,
  hideAction: PropTypes__default.any,
  getPopupClassNameFromAlign: PropTypes__default.any,
  onPopupVisibleChange: PropTypes__default.func,
  afterPopupVisibleChange: PropTypes__default.func,
  popup: PropTypes__default.oneOfType([PropTypes__default.node, PropTypes__default.func]).isRequired,
  popupStyle: PropTypes__default.object,
  prefixCls: PropTypes__default.string,
  popupClassName: PropTypes__default.string,
  className: PropTypes__default.string,
  popupPlacement: PropTypes__default.string,
  builtinPlacements: PropTypes__default.object,
  popupTransitionName: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.object]),
  popupAnimation: PropTypes__default.any,
  mouseEnterDelay: PropTypes__default.number,
  mouseLeaveDelay: PropTypes__default.number,
  zIndex: PropTypes__default.number,
  focusDelay: PropTypes__default.number,
  blurDelay: PropTypes__default.number,
  getPopupContainer: PropTypes__default.func,
  getDocument: PropTypes__default.func,
  forceRender: PropTypes__default.bool,
  destroyPopupOnHide: PropTypes__default.bool,
  mask: PropTypes__default.bool,
  maskClosable: PropTypes__default.bool,
  onPopupAlign: PropTypes__default.func,
  popupAlign: PropTypes__default.object,
  popupVisible: PropTypes__default.bool,
  defaultPopupVisible: PropTypes__default.bool,
  maskTransitionName: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.object]),
  maskAnimation: PropTypes__default.string,
  stretch: PropTypes__default.string,
  alignPoint: PropTypes__default.bool // Maybe we can support user pass position in the future
};
Trigger.contextTypes = contextTypes;
Trigger.childContextTypes = contextTypes;
Trigger.defaultProps = {
  prefixCls: 'rc-trigger-popup',
  getPopupClassNameFromAlign: returnEmptyString,
  getDocument: returnDocument,
  onPopupVisibleChange: noop,
  afterPopupVisibleChange: noop,
  onPopupAlign: noop,
  popupClassName: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  focusDelay: 0,
  blurDelay: 0.15,
  popupStyle: {},
  destroyPopupOnHide: false,
  popupAlign: {},
  defaultPopupVisible: false,
  mask: false,
  maskClosable: true,
  action: [],
  showAction: [],
  hideAction: []
};

var _initialiseProps$1 = function _initialiseProps() {
  var _this5 = this;

  this.onMouseEnter = function (e) {
    var mouseEnterDelay = _this5.props.mouseEnterDelay;

    _this5.fireEvents('onMouseEnter', e);
    _this5.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
  };

  this.onMouseMove = function (e) {
    _this5.fireEvents('onMouseMove', e);
    _this5.setPoint(e);
  };

  this.onMouseLeave = function (e) {
    _this5.fireEvents('onMouseLeave', e);
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onPopupMouseEnter = function () {
    _this5.clearDelayTimer();
  };

  this.onPopupMouseLeave = function (e) {
    // https://github.com/react-component/trigger/pull/13
    // react bug?
    if (e.relatedTarget && !e.relatedTarget.setTimeout && _this5._component && _this5._component.getPopupDomNode && contains(_this5._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onFocus = function (e) {
    _this5.fireEvents('onFocus', e);
    // incase focusin and focusout
    _this5.clearDelayTimer();
    if (_this5.isFocusToShow()) {
      _this5.focusTime = Date.now();
      _this5.delaySetPopupVisible(true, _this5.props.focusDelay);
    }
  };

  this.onMouseDown = function (e) {
    _this5.fireEvents('onMouseDown', e);
    _this5.preClickTime = Date.now();
  };

  this.onTouchStart = function (e) {
    _this5.fireEvents('onTouchStart', e);
    _this5.preTouchTime = Date.now();
  };

  this.onBlur = function (e) {
    _this5.fireEvents('onBlur', e);
    _this5.clearDelayTimer();
    if (_this5.isBlurToHide()) {
      _this5.delaySetPopupVisible(false, _this5.props.blurDelay);
    }
  };

  this.onContextMenu = function (e) {
    e.preventDefault();
    _this5.fireEvents('onContextMenu', e);
    _this5.setPopupVisible(true, e);
  };

  this.onContextMenuClose = function () {
    if (_this5.isContextMenuToShow()) {
      _this5.close();
    }
  };

  this.onClick = function (event) {
    _this5.fireEvents('onClick', event);
    // focus will trigger click
    if (_this5.focusTime) {
      var preTime = void 0;
      if (_this5.preClickTime && _this5.preTouchTime) {
        preTime = Math.min(_this5.preClickTime, _this5.preTouchTime);
      } else if (_this5.preClickTime) {
        preTime = _this5.preClickTime;
      } else if (_this5.preTouchTime) {
        preTime = _this5.preTouchTime;
      }
      if (Math.abs(preTime - _this5.focusTime) < 20) {
        return;
      }
      _this5.focusTime = 0;
    }
    _this5.preClickTime = 0;
    _this5.preTouchTime = 0;
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    var nextVisible = !_this5.state.popupVisible;
    if (_this5.isClickToHide() && !nextVisible || nextVisible && _this5.isClickToShow()) {
      _this5.setPopupVisible(!_this5.state.popupVisible, event);
    }
  };

  this.onPopupMouseDown = function () {
    var _context$rcTrigger = _this5.context.rcTrigger,
        rcTrigger = _context$rcTrigger === undefined ? {} : _context$rcTrigger;

    _this5.hasPopupMouseDown = true;

    clearTimeout(_this5.mouseDownTimeout);
    _this5.mouseDownTimeout = setTimeout(function () {
      _this5.hasPopupMouseDown = false;
    }, 0);

    if (rcTrigger.onPopupMouseDown) {
      rcTrigger.onPopupMouseDown.apply(rcTrigger, arguments);
    }
  };

  this.onDocumentClick = function (event) {
    if (_this5.props.mask && !_this5.props.maskClosable) {
      return;
    }

    var target = event.target;
    var root = findDOMNode(_this5);
    if (!contains(root, target) && !_this5.hasPopupMouseDown) {
      _this5.close();
    }
  };

  this.getRootDomNode = function () {
    return findDOMNode(_this5);
  };

  this.getPopupClassNameFromAlign = function (align) {
    var className = [];
    var _props9 = _this5.props,
        popupPlacement = _props9.popupPlacement,
        builtinPlacements = _props9.builtinPlacements,
        prefixCls = _props9.prefixCls,
        alignPoint = _props9.alignPoint,
        getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;

    if (popupPlacement && builtinPlacements) {
      className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint));
    }
    if (getPopupClassNameFromAlign) {
      className.push(getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  };

  this.getComponent = function () {
    var _props10 = _this5.props,
        prefixCls = _props10.prefixCls,
        destroyPopupOnHide = _props10.destroyPopupOnHide,
        popupClassName = _props10.popupClassName,
        action = _props10.action,
        onPopupAlign = _props10.onPopupAlign,
        popupAnimation = _props10.popupAnimation,
        popupTransitionName = _props10.popupTransitionName,
        popupStyle = _props10.popupStyle,
        mask = _props10.mask,
        maskAnimation = _props10.maskAnimation,
        maskTransitionName = _props10.maskTransitionName,
        zIndex = _props10.zIndex,
        popup = _props10.popup,
        stretch = _props10.stretch,
        alignPoint = _props10.alignPoint;
    var _state = _this5.state,
        popupVisible = _state.popupVisible,
        point = _state.point;


    var align = _this5.getPopupAlign();

    var mouseProps = {};
    if (_this5.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = _this5.onPopupMouseEnter;
    }
    if (_this5.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = _this5.onPopupMouseLeave;
    }

    mouseProps.onMouseDown = _this5.onPopupMouseDown;
    mouseProps.onTouchStart = _this5.onPopupMouseDown;

    return React__default.createElement(
      Popup,
      _extends$1({
        prefixCls: prefixCls,
        destroyPopupOnHide: destroyPopupOnHide,
        visible: popupVisible,
        point: alignPoint && point,
        className: popupClassName,
        action: action,
        align: align,
        onAlign: onPopupAlign,
        animation: popupAnimation,
        getClassNameFromAlign: _this5.getPopupClassNameFromAlign
      }, mouseProps, {
        stretch: stretch,
        getRootDomNode: _this5.getRootDomNode,
        style: popupStyle,
        mask: mask,
        zIndex: zIndex,
        transitionName: popupTransitionName,
        maskAnimation: maskAnimation,
        maskTransitionName: maskTransitionName,
        ref: _this5.savePopup
      }),
      typeof popup === 'function' ? popup() : popup
    );
  };

  this.getContainer = function () {
    var props = _this5.props;

    var popupContainer = document.createElement('div');
    // Make sure default popup container will never cause scrollbar appearing
    // https://github.com/react-component/trigger/issues/41
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    var mountNode = props.getPopupContainer ? props.getPopupContainer(findDOMNode(_this5)) : props.getDocument().body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  };

  this.setPoint = function (point) {
    var alignPoint = _this5.props.alignPoint;

    if (!alignPoint || !point) return;

    _this5.setState({
      point: {
        pageX: point.pageX,
        pageY: point.pageY
      }
    });
  };

  this.handlePortalUpdate = function () {
    if (_this5.prevPopupVisible !== _this5.state.popupVisible) {
      _this5.props.afterPopupVisibleChange(_this5.state.popupVisible);
    }
  };

  this.savePopup = function (node) {
    _this5._component = node;
  };
};

export { Trigger as T };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmstMzZiNzRkZGYuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JjLXRyaWdnZXIvZXMvdXRpbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL3Byb3BlcnR5VXRpbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL3V0aWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RvbS1hbGlnbi9lcy9nZXRPZmZzZXRQYXJlbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL2lzQW5jZXN0b3JGaXhlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZXMvZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RvbS1hbGlnbi9lcy9hZGp1c3RGb3JWaWV3cG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZXMvZ2V0UmVnaW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RvbS1hbGlnbi9lcy9nZXRBbGlnbk9mZnNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZXMvZ2V0RWxGdXR1cmVQb3MuanMiLCIuLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL2FsaWduL2FsaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RvbS1hbGlnbi9lcy9hbGlnbi9hbGlnbkVsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL2FsaWduL2FsaWduUG9pbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmMtYWxpZ24vZXMvdXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYy1hbGlnbi9lcy9BbGlnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYy1hbGlnbi9lcy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL0xhenlSZW5kZXJCb3guanMiLCIuLi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9Qb3B1cElubmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JjLXRyaWdnZXIvZXMvUG9wdXAuanMiLCIuLi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkRE9NRXZlbnRMaXN0ZW5lciBmcm9tICdhZGQtZG9tLWV2ZW50LWxpc3RlbmVyJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV3JhcCh0YXJnZXQsIGV2ZW50VHlwZSwgY2IsIG9wdGlvbikge1xuICAvKiBlc2xpbnQgY2FtZWxjYXNlOiAyICovXG4gIHZhciBjYWxsYmFjayA9IFJlYWN0RE9NLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzID8gZnVuY3Rpb24gcnVuKGUpIHtcbiAgICBSZWFjdERPTS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyhjYiwgZSk7XG4gIH0gOiBjYjtcbiAgcmV0dXJuIGFkZERPTUV2ZW50TGlzdGVuZXIodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrLCBvcHRpb24pO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5mdW5jdGlvbiBpc1BvaW50c0VxKGExLCBhMiwgaXNBbGlnblBvaW50KSB7XG4gIGlmIChpc0FsaWduUG9pbnQpIHtcbiAgICByZXR1cm4gYTFbMF0gPT09IGEyWzBdO1xuICB9XG4gIHJldHVybiBhMVswXSA9PT0gYTJbMF0gJiYgYTFbMV0gPT09IGEyWzFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxpZ25Gcm9tUGxhY2VtZW50KGJ1aWx0aW5QbGFjZW1lbnRzLCBwbGFjZW1lbnRTdHIsIGFsaWduKSB7XG4gIHZhciBiYXNlQWxpZ24gPSBidWlsdGluUGxhY2VtZW50c1twbGFjZW1lbnRTdHJdIHx8IHt9O1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGJhc2VBbGlnbiwgYWxpZ24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxpZ25Qb3B1cENsYXNzTmFtZShidWlsdGluUGxhY2VtZW50cywgcHJlZml4Q2xzLCBhbGlnbiwgaXNBbGlnblBvaW50KSB7XG4gIHZhciBwb2ludHMgPSBhbGlnbi5wb2ludHM7XG4gIGZvciAodmFyIHBsYWNlbWVudCBpbiBidWlsdGluUGxhY2VtZW50cykge1xuICAgIGlmIChidWlsdGluUGxhY2VtZW50cy5oYXNPd25Qcm9wZXJ0eShwbGFjZW1lbnQpKSB7XG4gICAgICBpZiAoaXNQb2ludHNFcShidWlsdGluUGxhY2VtZW50c1twbGFjZW1lbnRdLnBvaW50cywgcG9pbnRzLCBpc0FsaWduUG9pbnQpKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXhDbHMgKyAnLXBsYWNlbWVudC0nICsgcGxhY2VtZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUmVmKG5hbWUsIGNvbXBvbmVudCkge1xuICB0aGlzW25hbWVdID0gY29tcG9uZW50O1xufSIsInZhciB2ZW5kb3JQcmVmaXggPSB2b2lkIDA7XG5cbnZhciBqc0Nzc01hcCA9IHtcbiAgV2Via2l0OiAnLXdlYmtpdC0nLFxuICBNb3o6ICctbW96LScsXG4gIC8vIElFIGRpZCBpdCB3cm9uZyBhZ2FpbiAuLi5cbiAgbXM6ICctbXMtJyxcbiAgTzogJy1vLSdcbn07XG5cbmZ1bmN0aW9uIGdldFZlbmRvclByZWZpeCgpIHtcbiAgaWYgKHZlbmRvclByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZlbmRvclByZWZpeDtcbiAgfVxuICB2ZW5kb3JQcmVmaXggPSAnJztcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlO1xuICB2YXIgdGVzdFByb3AgPSAnVHJhbnNmb3JtJztcbiAgZm9yICh2YXIga2V5IGluIGpzQ3NzTWFwKSB7XG4gICAgaWYgKGtleSArIHRlc3RQcm9wIGluIHN0eWxlKSB7XG4gICAgICB2ZW5kb3JQcmVmaXggPSBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2ZW5kb3JQcmVmaXg7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKCkge1xuICByZXR1cm4gZ2V0VmVuZG9yUHJlZml4KCkgPyBnZXRWZW5kb3JQcmVmaXgoKSArICdUcmFuc2l0aW9uUHJvcGVydHknIDogJ3RyYW5zaXRpb25Qcm9wZXJ0eSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2Zvcm1OYW1lKCkge1xuICByZXR1cm4gZ2V0VmVuZG9yUHJlZml4KCkgPyBnZXRWZW5kb3JQcmVmaXgoKSArICdUcmFuc2Zvcm0nIDogJ3RyYW5zZm9ybSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uUHJvcGVydHkobm9kZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWUgPSBnZXRUcmFuc2l0aW9uTmFtZSgpO1xuICBpZiAobmFtZSkge1xuICAgIG5vZGUuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICBpZiAobmFtZSAhPT0gJ3RyYW5zaXRpb25Qcm9wZXJ0eScpIHtcbiAgICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zZm9ybShub2RlLCB2YWx1ZSkge1xuICB2YXIgbmFtZSA9IGdldFRyYW5zZm9ybU5hbWUoKTtcbiAgaWYgKG5hbWUpIHtcbiAgICBub2RlLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgaWYgKG5hbWUgIT09ICd0cmFuc2Zvcm0nKSB7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNpdGlvblByb3BlcnR5KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5IHx8IG5vZGUuc3R5bGVbZ2V0VHJhbnNpdGlvbk5hbWUoKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2Zvcm1YWShub2RlKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICB2YXIgdHJhbnNmb3JtID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykgfHwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShnZXRUcmFuc2Zvcm1OYW1lKCkpO1xuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIG1hdHJpeCA9IHRyYW5zZm9ybS5yZXBsYWNlKC9bXjAtOVxcLS4sXS9nLCAnJykuc3BsaXQoJywnKTtcbiAgICByZXR1cm4geyB4OiBwYXJzZUZsb2F0KG1hdHJpeFsxMl0gfHwgbWF0cml4WzRdLCAwKSwgeTogcGFyc2VGbG9hdChtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSwgMCkgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xufVxuXG52YXIgbWF0cml4MmQgPSAvbWF0cml4XFwoKC4qKVxcKS87XG52YXIgbWF0cml4M2QgPSAvbWF0cml4M2RcXCgoLiopXFwpLztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRyYW5zZm9ybVhZKG5vZGUsIHh5KSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICB2YXIgdHJhbnNmb3JtID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykgfHwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShnZXRUcmFuc2Zvcm1OYW1lKCkpO1xuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIGFyciA9IHZvaWQgMDtcbiAgICB2YXIgbWF0Y2gyZCA9IHRyYW5zZm9ybS5tYXRjaChtYXRyaXgyZCk7XG4gICAgaWYgKG1hdGNoMmQpIHtcbiAgICAgIG1hdGNoMmQgPSBtYXRjaDJkWzFdO1xuICAgICAgYXJyID0gbWF0Y2gyZC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChpdGVtLCAxMCk7XG4gICAgICB9KTtcbiAgICAgIGFycls0XSA9IHh5Lng7XG4gICAgICBhcnJbNV0gPSB4eS55O1xuICAgICAgc2V0VHJhbnNmb3JtKG5vZGUsICdtYXRyaXgoJyArIGFyci5qb2luKCcsJykgKyAnKScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF0Y2gzZCA9IHRyYW5zZm9ybS5tYXRjaChtYXRyaXgzZClbMV07XG4gICAgICBhcnIgPSBtYXRjaDNkLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGl0ZW0sIDEwKTtcbiAgICAgIH0pO1xuICAgICAgYXJyWzEyXSA9IHh5Lng7XG4gICAgICBhcnJbMTNdID0geHkueTtcbiAgICAgIHNldFRyYW5zZm9ybShub2RlLCAnbWF0cml4M2QoJyArIGFyci5qb2luKCcsJykgKyAnKScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZXRUcmFuc2Zvcm0obm9kZSwgJ3RyYW5zbGF0ZVgoJyArIHh5LnggKyAncHgpIHRyYW5zbGF0ZVkoJyArIHh5LnkgKyAncHgpIHRyYW5zbGF0ZVooMCknKTtcbiAgfVxufSIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuaW1wb3J0IHsgc2V0VHJhbnNpdGlvblByb3BlcnR5LCBnZXRUcmFuc2l0aW9uUHJvcGVydHksIGdldFRyYW5zZm9ybVhZLCBzZXRUcmFuc2Zvcm1YWSwgZ2V0VHJhbnNmb3JtTmFtZSB9IGZyb20gJy4vcHJvcGVydHlVdGlscyc7XG5cbnZhciBSRV9OVU0gPSAvW1xcLStdPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdW1xcLStdP1xcZCt8KS8uc291cmNlO1xuXG52YXIgZ2V0Q29tcHV0ZWRTdHlsZVggPSB2b2lkIDA7XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNDg1NjU0LzMwNDA2MDVcbmZ1bmN0aW9uIGZvcmNlUmVsYXlvdXQoZWxlbSkge1xuICB2YXIgb3JpZ2luYWxTdHlsZSA9IGVsZW0uc3R5bGUuZGlzcGxheTtcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBlbGVtLm9mZnNldEhlaWdodDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBvcmlnaW5hbFN0eWxlO1xufVxuXG5mdW5jdGlvbiBjc3MoZWwsIG5hbWUsIHYpIHtcbiAgdmFyIHZhbHVlID0gdjtcbiAgaWYgKCh0eXBlb2YgbmFtZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobmFtZSkpID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIGkgaW4gbmFtZSkge1xuICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgY3NzKGVsLCBpLCBuYW1lW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlICsgJ3B4JztcbiAgICB9XG4gICAgZWwuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlWChlbCwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFBvc2l0aW9uKGVsZW0pIHtcbiAgdmFyIGJveCA9IHZvaWQgMDtcbiAgdmFyIHggPSB2b2lkIDA7XG4gIHZhciB5ID0gdm9pZCAwO1xuICB2YXIgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgZG9jRWxlbSA9IGRvYyAmJiBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAvLyDmoLnmja4gR0JTIOacgOaWsOaVsOaNru+8jEEtR3JhZGUgQnJvd3NlcnMg6YO95bey5pSv5oyBIGdldEJvdW5kaW5nQ2xpZW50UmVjdCDmlrnms5XvvIzkuI3nlKjlho3ogIPomZHkvKDnu5/nmoTlrp7njrDmlrnlvI9cbiAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAvLyDms6jvvJpqUXVlcnkg6L+Y6ICD6JmR5YeP5Y67IGRvY0VsZW0uY2xpZW50TGVmdC9jbGllbnRUb3BcbiAgLy8g5L2G5rWL6K+V5Y+R546w77yM6L+Z5qC35Y+N6ICM5Lya5a+86Ie05b2TIGh0bWwg5ZKMIGJvZHkg5pyJ6L656LedL+i+ueahhuagt+W8j+aXtu+8jOiOt+WPlueahOWAvOS4jeato+ehrlxuICAvLyDmraTlpJbvvIxpZTYg5Lya5b+955WlIGh0bWwg55qEIG1hcmdpbiDlgLzvvIzlubjov5DlnLDmmK/msqHmnInosIHkvJrljrvorr7nva4gaHRtbCDnmoQgbWFyZ2luXG5cbiAgeCA9IGJveC5sZWZ0O1xuICB5ID0gYm94LnRvcDtcblxuICAvLyBJbiBJRSwgbW9zdCBvZiB0aGUgdGltZSwgMiBleHRyYSBwaXhlbHMgYXJlIGFkZGVkIHRvIHRoZSB0b3AgYW5kIGxlZnRcbiAgLy8gZHVlIHRvIHRoZSBpbXBsaWNpdCAyLXBpeGVsIGluc2V0IGJvcmRlci4gIEluIElFNi83IHF1aXJrcyBtb2RlIGFuZFxuICAvLyBJRTYgc3RhbmRhcmRzIG1vZGUsIHRoaXMgYm9yZGVyIGNhbiBiZSBvdmVycmlkZGVuIGJ5IHNldHRpbmcgdGhlXG4gIC8vIGRvY3VtZW50IGVsZW1lbnQncyBib3JkZXIgdG8gemVybyAtLSB0aHVzLCB3ZSBjYW5ub3QgcmVseSBvbiB0aGVcbiAgLy8gb2Zmc2V0IGFsd2F5cyBiZWluZyAyIHBpeGVscy5cblxuICAvLyBJbiBxdWlya3MgbW9kZSwgdGhlIG9mZnNldCBjYW4gYmUgZGV0ZXJtaW5lZCBieSBxdWVyeWluZyB0aGUgYm9keSdzXG4gIC8vIGNsaWVudExlZnQvY2xpZW50VG9wLCBidXQgaW4gc3RhbmRhcmRzIG1vZGUsIGl0IGlzIGZvdW5kIGJ5IHF1ZXJ5aW5nXG4gIC8vIHRoZSBkb2N1bWVudCBlbGVtZW50J3MgY2xpZW50TGVmdC9jbGllbnRUb3AuICBTaW5jZSB3ZSBhbHJlYWR5IGNhbGxlZFxuICAvLyBnZXRDbGllbnRCb3VuZGluZ1JlY3Qgd2UgaGF2ZSBhbHJlYWR5IGZvcmNlZCBhIHJlZmxvdywgc28gaXQgaXMgbm90XG4gIC8vIHRvbyBleHBlbnNpdmUganVzdCB0byBxdWVyeSB0aGVtIGFsbC5cblxuICAvLyBpZSDkuIvlupTor6Xlh4/ljrvnqpflj6PnmoTovrnmoYblkKfvvIzmr5Xnq5/pu5jorqQgYWJzb2x1dGUg6YO95piv55u45a+556qX5Y+j5a6a5L2N55qEXG4gIC8vIOeql+WPo+i+ueahhuagh+WHhuaYr+iuviBkb2N1bWVudEVsZW1lbnQgLHF1aXJrcyDml7borr7nva4gYm9keVxuICAvLyDmnIDlpb3npoHmraLlnKggYm9keSDlkowgaHRtbCDkuIrovrnmoYYg77yM5L2GIGllIDwgOSBodG1sIOm7mOiupOaciSAycHgg77yM5YeP5Y67XG4gIC8vIOS9huaYr+mdniBpZSDkuI3lj6/og73orr7nva7nqpflj6PovrnmoYbvvIxib2R5IGh0bWwg5Lmf5LiN5piv56qX5Y+jICxpZSDlj6/ku6XpgJrov4cgaHRtbCxib2R5IOiuvue9rlxuICAvLyDmoIflh4YgaWUg5LiLIGRvY0VsZW0uY2xpZW50VG9wIOWwseaYryBib3JkZXItdG9wXG4gIC8vIGllNyBodG1sIOWNs+eql+WPo+i+ueahhuaUueWPmOS4jeS6huOAguawuOi/nOS4uiAyXG4gIC8vIOS9huagh+WHhiBmaXJlZm94L2Nocm9tZS9pZTkg5LiLIGRvY0VsZW0uY2xpZW50VG9wIOaYr+eql+WPo+i+ueahhu+8jOWNs+S9v+iuvuS6hiBib3JkZXItdG9wIOS5n+S4uiAwXG5cbiAgeCAtPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gIHkgLT0gZG9jRWxlbS5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IHgsXG4gICAgdG9wOiB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbCh3LCB0b3ApIHtcbiAgdmFyIHJldCA9IHdbJ3BhZ2UnICsgKHRvcCA/ICdZJyA6ICdYJykgKyAnT2Zmc2V0J107XG4gIHZhciBtZXRob2QgPSAnc2Nyb2xsJyArICh0b3AgPyAnVG9wJyA6ICdMZWZ0Jyk7XG4gIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgIHZhciBkID0gdy5kb2N1bWVudDtcbiAgICAvLyBpZTYsNyw4IHN0YW5kYXJkIG1vZGVcbiAgICByZXQgPSBkLmRvY3VtZW50RWxlbWVudFttZXRob2RdO1xuICAgIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgLy8gcXVpcmtzIG1vZGVcbiAgICAgIHJldCA9IGQuYm9keVttZXRob2RdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KHcpIHtcbiAgcmV0dXJuIGdldFNjcm9sbCh3KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKHcpIHtcbiAgcmV0dXJuIGdldFNjcm9sbCh3LCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gIHZhciBwb3MgPSBnZXRDbGllbnRQb3NpdGlvbihlbCk7XG4gIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuICB2YXIgdyA9IGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICBwb3MubGVmdCArPSBnZXRTY3JvbGxMZWZ0KHcpO1xuICBwb3MudG9wICs9IGdldFNjcm9sbFRvcCh3KTtcbiAgcmV0dXJuIHBvcztcbn1cblxuLyoqXG4gKiBBIGNydWRlIHdheSBvZiBkZXRlcm1pbmluZyBpZiBhbiBvYmplY3QgaXMgYSB3aW5kb3dcbiAqIEBtZW1iZXIgdXRpbFxuICovXG5mdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgLy8gbXVzdCB1c2UgPT0gZm9yIGllOFxuICAvKiBlc2xpbnQgZXFlcWVxOjAgKi9cbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogPT0gb2JqLndpbmRvdztcbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnQobm9kZSkge1xuICBpZiAoaXNXaW5kb3cobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZS5kb2N1bWVudDtcbiAgfVxuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG4gIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG5hbWUsIGNzKSB7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gY3M7XG4gIHZhciB2YWwgPSAnJztcbiAgdmFyIGQgPSBnZXREb2N1bWVudChlbGVtKTtcbiAgY29tcHV0ZWRTdHlsZSA9IGNvbXB1dGVkU3R5bGUgfHwgZC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpO1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzYxXG4gIGlmIChjb21wdXRlZFN0eWxlKSB7XG4gICAgdmFsID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpIHx8IGNvbXB1dGVkU3R5bGVbbmFtZV07XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgX1JFX05VTV9OT19QWCA9IG5ldyBSZWdFeHAoJ14oJyArIFJFX05VTSArICcpKD8hcHgpW2EteiVdKyQnLCAnaScpO1xudmFyIFJFX1BPUyA9IC9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkLztcbnZhciBDVVJSRU5UX1NUWUxFID0gJ2N1cnJlbnRTdHlsZSc7XG52YXIgUlVOVElNRV9TVFlMRSA9ICdydW50aW1lU3R5bGUnO1xudmFyIExFRlQgPSAnbGVmdCc7XG52YXIgUFggPSAncHgnO1xuXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZUlFKGVsZW0sIG5hbWUpIHtcbiAgLy8gY3VycmVudFN0eWxlIG1heWJlIG51bGxcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM1MjMxLmFzcHhcbiAgdmFyIHJldCA9IGVsZW1bQ1VSUkVOVF9TVFlMRV0gJiYgZWxlbVtDVVJSRU5UX1NUWUxFXVtuYW1lXTtcblxuICAvLyDlvZMgd2lkdGgvaGVpZ2h0IOiuvue9ruS4uueZvuWIhuavlOaXtu+8jOmAmui/hyBwaXhlbExlZnQg5pa55byP6L2s5o2i55qEIHdpZHRoL2hlaWdodCDlgLxcbiAgLy8g5LiA5byA5aeL5bCx5aSE55CG5LqGISBDVVNUT01fU1RZTEUuaGVpZ2h0LENVU1RPTV9TVFlMRS53aWR0aCAsY3NzSG9vayDop6PlhrNAMjAxMS0wOC0xOVxuICAvLyDlnKggaWUg5LiL5LiN5a+577yM6ZyA6KaB55u05o6l55SoIG9mZnNldCDmlrnlvI9cbiAgLy8gYm9yZGVyV2lkdGgg562J5YC85Lmf5pyJ6Zeu6aKY77yM5L2G6ICD6JmR5YiwIGJvcmRlcldpZHRoIOiuvuS4uueZvuWIhuavlOeahOamgueOh+W+iOWwj++8jOi/memHjOWwseS4jeiAg+iZkeS6hlxuXG4gIC8vIEZyb20gdGhlIGF3ZXNvbWUgaGFjayBieSBEZWFuIEVkd2FyZHNcbiAgLy8gaHR0cDovL2VyaWsuZWFlLm5ldC9hcmNoaXZlcy8yMDA3LzA3LzI3LzE4LjU0LjE1LyNjb21tZW50LTEwMjI5MVxuICAvLyBJZiB3ZSdyZSBub3QgZGVhbGluZyB3aXRoIGEgcmVndWxhciBwaXhlbCBudW1iZXJcbiAgLy8gYnV0IGEgbnVtYmVyIHRoYXQgaGFzIGEgd2VpcmQgZW5kaW5nLCB3ZSBuZWVkIHRvIGNvbnZlcnQgaXQgdG8gcGl4ZWxzXG4gIC8vIGV4Y2x1ZGUgbGVmdCByaWdodCBmb3IgcmVsYXRpdml0eVxuICBpZiAoX1JFX05VTV9OT19QWC50ZXN0KHJldCkgJiYgIVJFX1BPUy50ZXN0KG5hbWUpKSB7XG4gICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuICAgIHZhciBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgdmFyIGxlZnQgPSBzdHlsZVtMRUZUXTtcbiAgICB2YXIgcnNMZWZ0ID0gZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXTtcblxuICAgIC8vIHByZXZlbnQgZmxhc2hpbmcgb2YgY29udGVudFxuICAgIGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF0gPSBlbGVtW0NVUlJFTlRfU1RZTEVdW0xFRlRdO1xuXG4gICAgLy8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxuICAgIHN0eWxlW0xFRlRdID0gbmFtZSA9PT0gJ2ZvbnRTaXplJyA/ICcxZW0nIDogcmV0IHx8IDA7XG4gICAgcmV0ID0gc3R5bGUucGl4ZWxMZWZ0ICsgUFg7XG5cbiAgICAvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG4gICAgc3R5bGVbTEVGVF0gPSBsZWZ0O1xuXG4gICAgZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXSA9IHJzTGVmdDtcbiAgfVxuICByZXR1cm4gcmV0ID09PSAnJyA/ICdhdXRvJyA6IHJldDtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGdldENvbXB1dGVkU3R5bGVYID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyBfZ2V0Q29tcHV0ZWRTdHlsZSA6IF9nZXRDb21wdXRlZFN0eWxlSUU7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldERpcmVjdGlvbihkaXIsIG9wdGlvbikge1xuICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gb3B0aW9uLnVzZUNzc1JpZ2h0ID8gJ3JpZ2h0JyA6IGRpcjtcbiAgfVxuICByZXR1cm4gb3B0aW9uLnVzZUNzc0JvdHRvbSA/ICdib3R0b20nIDogZGlyO1xufVxuXG5mdW5jdGlvbiBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbihkaXIpIHtcbiAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgcmV0dXJuICdyaWdodCc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAncmlnaHQnKSB7XG4gICAgcmV0dXJuICdsZWZ0JztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICd0b3AnKSB7XG4gICAgcmV0dXJuICdib3R0b20nO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ2JvdHRvbScpIHtcbiAgICByZXR1cm4gJ3RvcCc7XG4gIH1cbn1cblxuLy8g6K6+572uIGVsZW0g55u45a+5IGVsZW0ub3duZXJEb2N1bWVudCDnmoTlnZDmoIdcbmZ1bmN0aW9uIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pIHtcbiAgLy8gc2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuICBpZiAoY3NzKGVsZW0sICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICB9XG4gIHZhciBwcmVzZXRIID0gLTk5OTtcbiAgdmFyIHByZXNldFYgPSAtOTk5O1xuICB2YXIgaG9yaXpvbnRhbFByb3BlcnR5ID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKCdsZWZ0Jywgb3B0aW9uKTtcbiAgdmFyIHZlcnRpY2FsUHJvcGVydHkgPSBnZXRPZmZzZXREaXJlY3Rpb24oJ3RvcCcsIG9wdGlvbik7XG4gIHZhciBvcHBvc2l0ZUhvcml6b250YWxQcm9wZXJ0eSA9IG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKGhvcml6b250YWxQcm9wZXJ0eSk7XG4gIHZhciBvcHBvc2l0ZVZlcnRpY2FsUHJvcGVydHkgPSBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbih2ZXJ0aWNhbFByb3BlcnR5KTtcblxuICBpZiAoaG9yaXpvbnRhbFByb3BlcnR5ICE9PSAnbGVmdCcpIHtcbiAgICBwcmVzZXRIID0gOTk5O1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsUHJvcGVydHkgIT09ICd0b3AnKSB7XG4gICAgcHJlc2V0ViA9IDk5OTtcbiAgfVxuICB2YXIgb3JpZ2luYWxUcmFuc2l0aW9uID0gJyc7XG4gIHZhciBvcmlnaW5hbE9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQgfHwgJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgb3JpZ2luYWxUcmFuc2l0aW9uID0gZ2V0VHJhbnNpdGlvblByb3BlcnR5KGVsZW0pIHx8ICcnO1xuICAgIHNldFRyYW5zaXRpb25Qcm9wZXJ0eShlbGVtLCAnbm9uZScpO1xuICB9XG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0KSB7XG4gICAgZWxlbS5zdHlsZVtvcHBvc2l0ZUhvcml6b250YWxQcm9wZXJ0eV0gPSAnJztcbiAgICBlbGVtLnN0eWxlW2hvcml6b250YWxQcm9wZXJ0eV0gPSBwcmVzZXRIICsgJ3B4JztcbiAgfVxuICBpZiAoJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgZWxlbS5zdHlsZVtvcHBvc2l0ZVZlcnRpY2FsUHJvcGVydHldID0gJyc7XG4gICAgZWxlbS5zdHlsZVt2ZXJ0aWNhbFByb3BlcnR5XSA9IHByZXNldFYgKyAncHgnO1xuICB9XG4gIC8vIGZvcmNlIHJlbGF5b3V0XG4gIGZvcmNlUmVsYXlvdXQoZWxlbSk7XG4gIHZhciBvbGQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciBvcmlnaW5hbFN0eWxlID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvZmZzZXQpIHtcbiAgICBpZiAob2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciBkaXIgPSBnZXRPZmZzZXREaXJlY3Rpb24oa2V5LCBvcHRpb24pO1xuICAgICAgdmFyIHByZXNldCA9IGtleSA9PT0gJ2xlZnQnID8gcHJlc2V0SCA6IHByZXNldFY7XG4gICAgICB2YXIgb2ZmID0gb3JpZ2luYWxPZmZzZXRba2V5XSAtIG9sZFtrZXldO1xuICAgICAgaWYgKGRpciA9PT0ga2V5KSB7XG4gICAgICAgIG9yaWdpbmFsU3R5bGVbZGlyXSA9IHByZXNldCArIG9mZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWdpbmFsU3R5bGVbZGlyXSA9IHByZXNldCAtIG9mZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY3NzKGVsZW0sIG9yaWdpbmFsU3R5bGUpO1xuICAvLyBmb3JjZSByZWxheW91dFxuICBmb3JjZVJlbGF5b3V0KGVsZW0pO1xuICBpZiAoJ2xlZnQnIGluIG9mZnNldCB8fCAndG9wJyBpbiBvZmZzZXQpIHtcbiAgICBzZXRUcmFuc2l0aW9uUHJvcGVydHkoZWxlbSwgb3JpZ2luYWxUcmFuc2l0aW9uKTtcbiAgfVxuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIF9rZXkgaW4gb2Zmc2V0KSB7XG4gICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgdmFyIF9kaXIgPSBnZXRPZmZzZXREaXJlY3Rpb24oX2tleSwgb3B0aW9uKTtcbiAgICAgIHZhciBfb2ZmID0gb2Zmc2V0W19rZXldIC0gb3JpZ2luYWxPZmZzZXRbX2tleV07XG4gICAgICBpZiAoX2tleSA9PT0gX2Rpcikge1xuICAgICAgICByZXRbX2Rpcl0gPSBvcmlnaW5hbFN0eWxlW19kaXJdICsgX29mZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldFtfZGlyXSA9IG9yaWdpbmFsU3R5bGVbX2Rpcl0gLSBfb2ZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjc3MoZWxlbSwgcmV0KTtcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKGVsZW0sIG9mZnNldCkge1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciBvcmlnaW5hbFhZID0gZ2V0VHJhbnNmb3JtWFkoZWxlbSk7XG4gIHZhciByZXN1bHRYWSA9IHsgeDogb3JpZ2luYWxYWS54LCB5OiBvcmlnaW5hbFhZLnkgfTtcbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQpIHtcbiAgICByZXN1bHRYWS54ID0gb3JpZ2luYWxYWS54ICsgb2Zmc2V0LmxlZnQgLSBvcmlnaW5hbE9mZnNldC5sZWZ0O1xuICB9XG4gIGlmICgndG9wJyBpbiBvZmZzZXQpIHtcbiAgICByZXN1bHRYWS55ID0gb3JpZ2luYWxYWS55ICsgb2Zmc2V0LnRvcCAtIG9yaWdpbmFsT2Zmc2V0LnRvcDtcbiAgfVxuICBzZXRUcmFuc2Zvcm1YWShlbGVtLCByZXN1bHRYWSk7XG59XG5cbmZ1bmN0aW9uIHNldE9mZnNldChlbGVtLCBvZmZzZXQsIG9wdGlvbikge1xuICBpZiAob3B0aW9uLmlnbm9yZVNoYWtlKSB7XG4gICAgdmFyIG9yaU9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcblxuICAgIHZhciBvTGVmdCA9IG9yaU9mZnNldC5sZWZ0LnRvRml4ZWQoMCk7XG4gICAgdmFyIG9Ub3AgPSBvcmlPZmZzZXQudG9wLnRvRml4ZWQoMCk7XG4gICAgdmFyIHRMZWZ0ID0gb2Zmc2V0LmxlZnQudG9GaXhlZCgwKTtcbiAgICB2YXIgdFRvcCA9IG9mZnNldC50b3AudG9GaXhlZCgwKTtcblxuICAgIGlmIChvTGVmdCA9PT0gdExlZnQgJiYgb1RvcCA9PT0gdFRvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRpb24udXNlQ3NzUmlnaHQgfHwgb3B0aW9uLnVzZUNzc0JvdHRvbSkge1xuICAgIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9IGVsc2UgaWYgKG9wdGlvbi51c2VDc3NUcmFuc2Zvcm0gJiYgZ2V0VHJhbnNmb3JtTmFtZSgpIGluIGRvY3VtZW50LmJvZHkuc3R5bGUpIHtcbiAgICBzZXRUcmFuc2Zvcm0oZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9IGVsc2Uge1xuICAgIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVhY2goYXJyLCBmbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGZuKGFycltpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNCb3JkZXJCb3hGbihlbGVtKSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlWChlbGVtLCAnYm94U2l6aW5nJykgPT09ICdib3JkZXItYm94Jztcbn1cblxudmFyIEJPWF9NT0RFTFMgPSBbJ21hcmdpbicsICdib3JkZXInLCAncGFkZGluZyddO1xudmFyIENPTlRFTlRfSU5ERVggPSAtMTtcbnZhciBQQURESU5HX0lOREVYID0gMjtcbnZhciBCT1JERVJfSU5ERVggPSAxO1xudmFyIE1BUkdJTl9JTkRFWCA9IDA7XG5cbmZ1bmN0aW9uIHN3YXAoZWxlbSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIG9sZCA9IHt9O1xuICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICB2YXIgbmFtZSA9IHZvaWQgMDtcblxuICAvLyBSZW1lbWJlciB0aGUgb2xkIHZhbHVlcywgYW5kIGluc2VydCB0aGUgbmV3IG9uZXNcbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgb2xkW25hbWVdID0gc3R5bGVbbmFtZV07XG4gICAgICBzdHlsZVtuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2suY2FsbChlbGVtKTtcblxuICAvLyBSZXZlcnQgdGhlIG9sZCB2YWx1ZXNcbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgc3R5bGVbbmFtZV0gPSBvbGRbbmFtZV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBCTVdpZHRoKGVsZW0sIHByb3BzLCB3aGljaCkge1xuICB2YXIgdmFsdWUgPSAwO1xuICB2YXIgcHJvcCA9IHZvaWQgMDtcbiAgdmFyIGogPSB2b2lkIDA7XG4gIHZhciBpID0gdm9pZCAwO1xuICBmb3IgKGogPSAwOyBqIDwgcHJvcHMubGVuZ3RoOyBqKyspIHtcbiAgICBwcm9wID0gcHJvcHNbal07XG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB3aGljaC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY3NzUHJvcCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKHByb3AgPT09ICdib3JkZXInKSB7XG4gICAgICAgICAgY3NzUHJvcCA9ICcnICsgcHJvcCArIHdoaWNoW2ldICsgJ1dpZHRoJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjc3NQcm9wID0gcHJvcCArIHdoaWNoW2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlICs9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgY3NzUHJvcCkpIHx8IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIGRvbVV0aWxzID0ge307XG5cbmVhY2goWydXaWR0aCcsICdIZWlnaHQnXSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgZG9tVXRpbHNbJ2RvYycgKyBuYW1lXSA9IGZ1bmN0aW9uIChyZWZXaW4pIHtcbiAgICB2YXIgZCA9IHJlZldpbi5kb2N1bWVudDtcbiAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgLy8gZmlyZWZveCBjaHJvbWUgZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDwgYm9keS5zY3JvbGxIZWlnaHRcbiAgICAvLyBpZSBzdGFuZGFyZCBtb2RlIDogZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodD4gYm9keS5zY3JvbGxIZWlnaHRcbiAgICBkLmRvY3VtZW50RWxlbWVudFsnc2Nyb2xsJyArIG5hbWVdLFxuICAgIC8vIHF1aXJrcyA6IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQg5pyA5aSn562J5LqO5Y+v6KeG56qX5Y+j5aSa5LiA54K577yfXG4gICAgZC5ib2R5WydzY3JvbGwnICsgbmFtZV0sIGRvbVV0aWxzWyd2aWV3cG9ydCcgKyBuYW1lXShkKSk7XG4gIH07XG5cbiAgZG9tVXRpbHNbJ3ZpZXdwb3J0JyArIG5hbWVdID0gZnVuY3Rpb24gKHdpbikge1xuICAgIC8vIHBjIGJyb3dzZXIgaW5jbHVkZXMgc2Nyb2xsYmFyIGluIHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdmFyIHByb3AgPSAnY2xpZW50JyArIG5hbWU7XG4gICAgdmFyIGRvYyA9IHdpbi5kb2N1bWVudDtcbiAgICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnRQcm9wID0gZG9jdW1lbnRFbGVtZW50W3Byb3BdO1xuICAgIC8vIOagh+WHhuaooeW8j+WPliBkb2N1bWVudEVsZW1lbnRcbiAgICAvLyBiYWNrY29tcGF0IOWPliBib2R5XG4gICAgcmV0dXJuIGRvYy5jb21wYXRNb2RlID09PSAnQ1NTMUNvbXBhdCcgJiYgZG9jdW1lbnRFbGVtZW50UHJvcCB8fCBib2R5ICYmIGJvZHlbcHJvcF0gfHwgZG9jdW1lbnRFbGVtZW50UHJvcDtcbiAgfTtcbn0pO1xuXG4vKlxuIOW+l+WIsOWFg+e0oOeahOWkp+Wwj+S/oeaBr1xuIEBwYXJhbSBlbGVtXG4gQHBhcmFtIG5hbWVcbiBAcGFyYW0ge1N0cmluZ30gW2V4dHJhXSAgJ3BhZGRpbmcnIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nXG4gJ2JvcmRlcicgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmcgKyBib3JkZXJcbiAnbWFyZ2luJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZyArIGJvcmRlciArIG1hcmdpblxuICovXG5mdW5jdGlvbiBnZXRXSChlbGVtLCBuYW1lLCBleCkge1xuICB2YXIgZXh0cmEgPSBleDtcbiAgaWYgKGlzV2luZG93KGVsZW0pKSB7XG4gICAgcmV0dXJuIG5hbWUgPT09ICd3aWR0aCcgPyBkb21VdGlscy52aWV3cG9ydFdpZHRoKGVsZW0pIDogZG9tVXRpbHMudmlld3BvcnRIZWlnaHQoZWxlbSk7XG4gIH0gZWxzZSBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMuZG9jV2lkdGgoZWxlbSkgOiBkb21VdGlscy5kb2NIZWlnaHQoZWxlbSk7XG4gIH1cbiAgdmFyIHdoaWNoID0gbmFtZSA9PT0gJ3dpZHRoJyA/IFsnTGVmdCcsICdSaWdodCddIDogWydUb3AnLCAnQm90dG9tJ107XG4gIHZhciBib3JkZXJCb3hWYWx1ZSA9IG5hbWUgPT09ICd3aWR0aCcgPyBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSk7XG4gIHZhciBpc0JvcmRlckJveCA9IGlzQm9yZGVyQm94Rm4oZWxlbSwgY29tcHV0ZWRTdHlsZSk7XG4gIHZhciBjc3NCb3hWYWx1ZSA9IDA7XG4gIGlmIChib3JkZXJCb3hWYWx1ZSA9PT0gbnVsbCB8fCBib3JkZXJCb3hWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGJvcmRlckJveFZhbHVlIDw9IDApIHtcbiAgICBib3JkZXJCb3hWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAvLyBGYWxsIGJhY2sgdG8gY29tcHV0ZWQgdGhlbiB1biBjb21wdXRlZCBjc3MgaWYgbmVjZXNzYXJ5XG4gICAgY3NzQm94VmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtLCBuYW1lKTtcbiAgICBpZiAoY3NzQm94VmFsdWUgPT09IG51bGwgfHwgY3NzQm94VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBOdW1iZXIoY3NzQm94VmFsdWUpIDwgMCkge1xuICAgICAgY3NzQm94VmFsdWUgPSBlbGVtLnN0eWxlW25hbWVdIHx8IDA7XG4gICAgfVxuICAgIC8vIE5vcm1hbGl6ZSAnJywgYXV0bywgYW5kIHByZXBhcmUgZm9yIGV4dHJhXG4gICAgY3NzQm94VmFsdWUgPSBwYXJzZUZsb2F0KGNzc0JveFZhbHVlKSB8fCAwO1xuICB9XG4gIGlmIChleHRyYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXh0cmEgPSBpc0JvcmRlckJveCA/IEJPUkRFUl9JTkRFWCA6IENPTlRFTlRfSU5ERVg7XG4gIH1cbiAgdmFyIGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCA9IGJvcmRlckJveFZhbHVlICE9PSB1bmRlZmluZWQgfHwgaXNCb3JkZXJCb3g7XG4gIHZhciB2YWwgPSBib3JkZXJCb3hWYWx1ZSB8fCBjc3NCb3hWYWx1ZTtcbiAgaWYgKGV4dHJhID09PSBDT05URU5UX0lOREVYKSB7XG4gICAgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgICAgcmV0dXJuIHZhbCAtIGdldFBCTVdpZHRoKGVsZW0sIFsnYm9yZGVyJywgJ3BhZGRpbmcnXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gY3NzQm94VmFsdWU7XG4gIH0gZWxzZSBpZiAoYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94KSB7XG4gICAgaWYgKGV4dHJhID09PSBCT1JERVJfSU5ERVgpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIHJldHVybiB2YWwgKyAoZXh0cmEgPT09IFBBRERJTkdfSU5ERVggPyAtZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpIDogZ2V0UEJNV2lkdGgoZWxlbSwgWydtYXJnaW4nXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpKTtcbiAgfVxuICByZXR1cm4gY3NzQm94VmFsdWUgKyBnZXRQQk1XaWR0aChlbGVtLCBCT1hfTU9ERUxTLnNsaWNlKGV4dHJhKSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xufVxuXG52YXIgY3NzU2hvdyA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICBkaXNwbGF5OiAnYmxvY2snXG59O1xuXG4vLyBmaXggIzExOSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzExOVxuZnVuY3Rpb24gZ2V0V0hJZ25vcmVEaXNwbGF5KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHZhciB2YWwgPSB2b2lkIDA7XG4gIHZhciBlbGVtID0gYXJnc1swXTtcbiAgLy8gaW4gY2FzZSBlbGVtIGlzIHdpbmRvd1xuICAvLyBlbGVtLm9mZnNldFdpZHRoID09PSB1bmRlZmluZWRcbiAgaWYgKGVsZW0ub2Zmc2V0V2lkdGggIT09IDApIHtcbiAgICB2YWwgPSBnZXRXSC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHN3YXAoZWxlbSwgY3NzU2hvdywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFsID0gZ2V0V0guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdmFsO1xufVxuXG5lYWNoKFsnd2lkdGgnLCAnaGVpZ2h0J10sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBmaXJzdCA9IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuICBkb21VdGlsc1snb3V0ZXInICsgZmlyc3RdID0gZnVuY3Rpb24gKGVsLCBpbmNsdWRlTWFyZ2luKSB7XG4gICAgcmV0dXJuIGVsICYmIGdldFdISWdub3JlRGlzcGxheShlbCwgbmFtZSwgaW5jbHVkZU1hcmdpbiA/IE1BUkdJTl9JTkRFWCA6IEJPUkRFUl9JTkRFWCk7XG4gIH07XG4gIHZhciB3aGljaCA9IG5hbWUgPT09ICd3aWR0aCcgPyBbJ0xlZnQnLCAnUmlnaHQnXSA6IFsnVG9wJywgJ0JvdHRvbSddO1xuXG4gIGRvbVV0aWxzW25hbWVdID0gZnVuY3Rpb24gKGVsZW0sIHYpIHtcbiAgICB2YXIgdmFsID0gdjtcbiAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSk7XG4gICAgICAgIHZhciBpc0JvcmRlckJveCA9IGlzQm9yZGVyQm94Rm4oZWxlbSk7XG4gICAgICAgIGlmIChpc0JvcmRlckJveCkge1xuICAgICAgICAgIHZhbCArPSBnZXRQQk1XaWR0aChlbGVtLCBbJ3BhZGRpbmcnLCAnYm9yZGVyJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3NzKGVsZW0sIG5hbWUsIHZhbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbSAmJiBnZXRXSElnbm9yZURpc3BsYXkoZWxlbSwgbmFtZSwgQ09OVEVOVF9JTkRFWCk7XG4gIH07XG59KTtcblxuZnVuY3Rpb24gbWl4KHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGkgaW4gZnJvbSkge1xuICAgIGlmIChmcm9tLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICB0b1tpXSA9IGZyb21baV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0bztcbn1cblxudmFyIHV0aWxzID0ge1xuICBnZXRXaW5kb3c6IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5kb2N1bWVudCAmJiBub2RlLnNldFRpbWVvdXQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICB2YXIgZG9jID0gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGU7XG4gICAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICB9LFxuXG4gIGdldERvY3VtZW50OiBnZXREb2N1bWVudCxcbiAgb2Zmc2V0OiBmdW5jdGlvbiBvZmZzZXQoZWwsIHZhbHVlLCBvcHRpb24pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2V0T2Zmc2V0KGVsLCB2YWx1ZSwgb3B0aW9uIHx8IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldE9mZnNldChlbCk7XG4gICAgfVxuICB9LFxuXG4gIGlzV2luZG93OiBpc1dpbmRvdyxcbiAgZWFjaDogZWFjaCxcbiAgY3NzOiBjc3MsXG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICB2YXIgaSA9IHZvaWQgMDtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgZm9yIChpIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICByZXRbaV0gPSBvYmpbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBvdmVyZmxvdyA9IG9iai5vdmVyZmxvdztcbiAgICBpZiAob3ZlcmZsb3cpIHtcbiAgICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIHJldC5vdmVyZmxvd1tpXSA9IG9iai5vdmVyZmxvd1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIG1peDogbWl4LFxuICBnZXRXaW5kb3dTY3JvbGxMZWZ0OiBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxMZWZ0KHcpIHtcbiAgICByZXR1cm4gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgfSxcbiAgZ2V0V2luZG93U2Nyb2xsVG9wOiBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxUb3Aodykge1xuICAgIHJldHVybiBnZXRTY3JvbGxUb3Aodyk7XG4gIH0sXG4gIG1lcmdlOiBmdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgcmV0ID0ge307XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMjsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgdXRpbHMubWl4KHJldCwgYXJnc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgdmlld3BvcnRXaWR0aDogMCxcbiAgdmlld3BvcnRIZWlnaHQ6IDBcbn07XG5cbm1peCh1dGlscywgZG9tVXRpbHMpO1xuXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICog5b6X5Yiw5Lya5a+86Ie05YWD57Sg5pi+56S65LiN5YWo55qE56WW5YWI5YWD57SgXG4gKi9cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKHV0aWxzLmlzV2luZG93KGVsZW1lbnQpIHx8IGVsZW1lbnQubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBpZSDov5nkuKrkuZ/kuI3mmK/lrozlhajlj6/ooYxcbiAgLypcbiAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNTBweDtoZWlnaHQ6IDEwMHB4O292ZXJmbG93OiBoaWRkZW5cIj5cbiAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNTBweDtoZWlnaHQ6IDEwMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtcIiBpZD1cImQ2XCI+XG4gICDlhYPntKAgNiDpq5ggMTAwcHgg5a69IDUwcHg8YnIvPlxuICAgPC9kaXY+XG4gICA8L2Rpdj5cbiAgICovXG4gIC8vIGVsZW1lbnQub2Zmc2V0UGFyZW50IGRvZXMgdGhlIHJpZ2h0IHRoaW5nIGluIGllNyBhbmQgYmVsb3cuIFJldHVybiBwYXJlbnQgd2l0aCBsYXlvdXQhXG4gIC8vICBJbiBvdGhlciBicm93c2VycyBpdCBvbmx5IGluY2x1ZGVzIGVsZW1lbnRzIHdpdGggcG9zaXRpb24gYWJzb2x1dGUsIHJlbGF0aXZlIG9yXG4gIC8vIGZpeGVkLCBub3QgZWxlbWVudHMgd2l0aCBvdmVyZmxvdyBzZXQgdG8gYXV0byBvciBzY3JvbGwuXG4gIC8vICAgICAgICBpZiAoVUEuaWUgJiYgaWVNb2RlIDwgOCkge1xuICAvLyAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgLy8gICAgICAgIH1cbiAgLy8g57uf5LiA55qEIG9mZnNldFBhcmVudCDmlrnms5VcbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgcGFyZW50ID0gdm9pZCAwO1xuICB2YXIgcG9zaXRpb25TdHlsZSA9IHV0aWxzLmNzcyhlbGVtZW50LCAncG9zaXRpb24nKTtcbiAgdmFyIHNraXBTdGF0aWMgPSBwb3NpdGlvblN0eWxlID09PSAnZml4ZWQnIHx8IHBvc2l0aW9uU3R5bGUgPT09ICdhYnNvbHV0ZSc7XG5cbiAgaWYgKCFza2lwU3RhdGljKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnID8gbnVsbCA6IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGZvciAocGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlOyBwYXJlbnQgJiYgcGFyZW50ICE9PSBib2R5OyBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZSkge1xuICAgIHBvc2l0aW9uU3R5bGUgPSB1dGlscy5jc3MocGFyZW50LCAncG9zaXRpb24nKTtcbiAgICBpZiAocG9zaXRpb25TdHlsZSAhPT0gJ3N0YXRpYycpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRPZmZzZXRQYXJlbnQ7IiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0FuY2VzdG9yRml4ZWQoZWxlbWVudCkge1xuICBpZiAodXRpbHMuaXNXaW5kb3coZWxlbWVudCkgfHwgZWxlbWVudC5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb2MgPSB1dGlscy5nZXREb2N1bWVudChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIHBhcmVudCA9IG51bGw7XG4gIGZvciAocGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlOyBwYXJlbnQgJiYgcGFyZW50ICE9PSBib2R5OyBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZSkge1xuICAgIHZhciBwb3NpdGlvblN0eWxlID0gdXRpbHMuY3NzKHBhcmVudCwgJ3Bvc2l0aW9uJyk7XG4gICAgaWYgKHBvc2l0aW9uU3R5bGUgPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuL2dldE9mZnNldFBhcmVudCc7XG5pbXBvcnQgaXNBbmNlc3RvckZpeGVkIGZyb20gJy4vaXNBbmNlc3RvckZpeGVkJztcblxuLyoqXG4gKiDojrflvpflhYPntKDnmoTmmL7npLrpg6jliIbnmoTljLrln59cbiAqL1xuZnVuY3Rpb24gZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgdmFyIHZpc2libGVSZWN0ID0ge1xuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IEluZmluaXR5LFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IEluZmluaXR5XG4gIH07XG4gIHZhciBlbCA9IGdldE9mZnNldFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8vIERldGVybWluZSB0aGUgc2l6ZSBvZiB0aGUgdmlzaWJsZSByZWN0IGJ5IGNsaW1iaW5nIHRoZSBkb20gYWNjb3VudGluZyBmb3JcbiAgLy8gYWxsIHNjcm9sbGFibGUgY29udGFpbmVycy5cbiAgd2hpbGUgKGVsKSB7XG4gICAgLy8gY2xpZW50V2lkdGggaXMgemVybyBmb3IgaW5saW5lIGJsb2NrIGVsZW1lbnRzIGluIGllLlxuICAgIGlmICgobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgPT09IC0xIHx8IGVsLmNsaWVudFdpZHRoICE9PSAwKSAmJlxuICAgIC8vIGJvZHkgbWF5IGhhdmUgb3ZlcmZsb3cgc2V0IG9uIGl0LCB5ZXQgd2Ugc3RpbGwgZ2V0IHRoZSBlbnRpcmVcbiAgICAvLyB2aWV3cG9ydC4gSW4gc29tZSBicm93c2VycywgZWwub2Zmc2V0UGFyZW50IG1heSBiZVxuICAgIC8vIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgc28gY2hlY2sgZm9yIHRoYXQgdG9vLlxuICAgIGVsICE9PSBib2R5ICYmIGVsICE9PSBkb2N1bWVudEVsZW1lbnQgJiYgdXRpbHMuY3NzKGVsLCAnb3ZlcmZsb3cnKSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICB2YXIgcG9zID0gdXRpbHMub2Zmc2V0KGVsKTtcbiAgICAgIC8vIGFkZCBib3JkZXJcbiAgICAgIHBvcy5sZWZ0ICs9IGVsLmNsaWVudExlZnQ7XG4gICAgICBwb3MudG9wICs9IGVsLmNsaWVudFRvcDtcbiAgICAgIHZpc2libGVSZWN0LnRvcCA9IE1hdGgubWF4KHZpc2libGVSZWN0LnRvcCwgcG9zLnRvcCk7XG4gICAgICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LFxuICAgICAgLy8gY29uc2lkZXIgYXJlYSB3aXRob3V0IHNjcm9sbEJhclxuICAgICAgcG9zLmxlZnQgKyBlbC5jbGllbnRXaWR0aCk7XG4gICAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIHBvcy50b3AgKyBlbC5jbGllbnRIZWlnaHQpO1xuICAgICAgdmlzaWJsZVJlY3QubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LmxlZnQsIHBvcy5sZWZ0KTtcbiAgICB9IGVsc2UgaWYgKGVsID09PSBib2R5IHx8IGVsID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBlbCA9IGdldE9mZnNldFBhcmVudChlbCk7XG4gIH1cblxuICAvLyBTZXQgZWxlbWVudCBwb3NpdGlvbiB0byBmaXhlZFxuICAvLyBtYWtlIHN1cmUgYWJzb2x1dGUgZWxlbWVudCBpdHNlbGYgZG9uJ3QgYWZmZWN0IGl0J3MgdmlzaWJsZSBhcmVhXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzc2MDFcbiAgdmFyIG9yaWdpbmFsUG9zaXRpb24gPSBudWxsO1xuICBpZiAoIXV0aWxzLmlzV2luZG93KGVsZW1lbnQpICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDkpIHtcbiAgICBvcmlnaW5hbFBvc2l0aW9uID0gZWxlbWVudC5zdHlsZS5wb3NpdGlvbjtcbiAgICB2YXIgcG9zaXRpb24gPSB1dGlscy5jc3MoZWxlbWVudCwgJ3Bvc2l0aW9uJyk7XG4gICAgaWYgKHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB9XG4gIH1cblxuICB2YXIgc2Nyb2xsWCA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbExlZnQod2luKTtcbiAgdmFyIHNjcm9sbFkgPSB1dGlscy5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKTtcbiAgdmFyIHZpZXdwb3J0V2lkdGggPSB1dGlscy52aWV3cG9ydFdpZHRoKHdpbik7XG4gIHZhciB2aWV3cG9ydEhlaWdodCA9IHV0aWxzLnZpZXdwb3J0SGVpZ2h0KHdpbik7XG4gIHZhciBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoO1xuICB2YXIgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXG4gIC8vIHNjcm9sbFhYWCBvbiBodG1sIGlzIHN5bmMgd2l0aCBib2R5IHdoaWNoIG1lYW5zIG92ZXJmbG93OiBoaWRkZW4gb24gYm9keSBnZXRzIHdyb25nIHNjcm9sbFhYWC5cbiAgLy8gV2Ugc2hvdWxkIGN1dCB0aGlzIG91cnNlbGYuXG4gIHZhciBib2R5U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib2R5KTtcbiAgaWYgKGJvZHlTdHlsZS5vdmVyZmxvd1ggPT09ICdoaWRkZW4nKSB7XG4gICAgZG9jdW1lbnRXaWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICB9XG4gIGlmIChib2R5U3R5bGUub3ZlcmZsb3dZID09PSAnaGlkZGVuJykge1xuICAgIGRvY3VtZW50SGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xuICB9XG5cbiAgLy8gUmVzZXQgZWxlbWVudCBwb3NpdGlvbiBhZnRlciBjYWxjdWxhdGUgdGhlIHZpc2libGUgYXJlYVxuICBpZiAoZWxlbWVudC5zdHlsZSkge1xuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBvcmlnaW5hbFBvc2l0aW9uO1xuICB9XG5cbiAgaWYgKGlzQW5jZXN0b3JGaXhlZChlbGVtZW50KSkge1xuICAgIC8vIENsaXAgYnkgdmlld3BvcnQncyBzaXplLlxuICAgIHZpc2libGVSZWN0LmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5sZWZ0LCBzY3JvbGxYKTtcbiAgICB2aXNpYmxlUmVjdC50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC50b3AsIHNjcm9sbFkpO1xuICAgIHZpc2libGVSZWN0LnJpZ2h0ID0gTWF0aC5taW4odmlzaWJsZVJlY3QucmlnaHQsIHNjcm9sbFggKyB2aWV3cG9ydFdpZHRoKTtcbiAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIHNjcm9sbFkgKyB2aWV3cG9ydEhlaWdodCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQ2xpcCBieSBkb2N1bWVudCdzIHNpemUuXG4gICAgdmFyIG1heFZpc2libGVXaWR0aCA9IE1hdGgubWF4KGRvY3VtZW50V2lkdGgsIHNjcm9sbFggKyB2aWV3cG9ydFdpZHRoKTtcbiAgICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LCBtYXhWaXNpYmxlV2lkdGgpO1xuXG4gICAgdmFyIG1heFZpc2libGVIZWlnaHQgPSBNYXRoLm1heChkb2N1bWVudEhlaWdodCwgc2Nyb2xsWSArIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIG1heFZpc2libGVIZWlnaHQpO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVSZWN0LnRvcCA+PSAwICYmIHZpc2libGVSZWN0LmxlZnQgPj0gMCAmJiB2aXNpYmxlUmVjdC5ib3R0b20gPiB2aXNpYmxlUmVjdC50b3AgJiYgdmlzaWJsZVJlY3QucmlnaHQgPiB2aXNpYmxlUmVjdC5sZWZ0ID8gdmlzaWJsZVJlY3QgOiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQ7IiwiaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5mdW5jdGlvbiBhZGp1c3RGb3JWaWV3cG9ydChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0LCBvdmVyZmxvdykge1xuICB2YXIgcG9zID0gdXRpbHMuY2xvbmUoZWxGdXR1cmVQb3MpO1xuICB2YXIgc2l6ZSA9IHtcbiAgICB3aWR0aDogZWxSZWdpb24ud2lkdGgsXG4gICAgaGVpZ2h0OiBlbFJlZ2lvbi5oZWlnaHRcbiAgfTtcblxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WCAmJiBwb3MubGVmdCA8IHZpc2libGVSZWN0LmxlZnQpIHtcbiAgICBwb3MubGVmdCA9IHZpc2libGVSZWN0LmxlZnQ7XG4gIH1cblxuICAvLyBMZWZ0IGVkZ2UgaW5zaWRlIGFuZCByaWdodCBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byByZXNpemUgaXQuXG4gIGlmIChvdmVyZmxvdy5yZXNpemVXaWR0aCAmJiBwb3MubGVmdCA+PSB2aXNpYmxlUmVjdC5sZWZ0ICYmIHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCA+IHZpc2libGVSZWN0LnJpZ2h0KSB7XG4gICAgc2l6ZS53aWR0aCAtPSBwb3MubGVmdCArIHNpemUud2lkdGggLSB2aXNpYmxlUmVjdC5yaWdodDtcbiAgfVxuXG4gIC8vIFJpZ2h0IGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RYICYmIHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCA+IHZpc2libGVSZWN0LnJpZ2h0KSB7XG4gICAgLy8g5L+d6K+B5bem6L6555WM5ZKM5Y+v6KeG5Yy65Z+f5bem6L6555WM5a+56b2QXG4gICAgcG9zLmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5yaWdodCAtIHNpemUud2lkdGgsIHZpc2libGVSZWN0LmxlZnQpO1xuICB9XG5cbiAgLy8gVG9wIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RZICYmIHBvcy50b3AgPCB2aXNpYmxlUmVjdC50b3ApIHtcbiAgICBwb3MudG9wID0gdmlzaWJsZVJlY3QudG9wO1xuICB9XG5cbiAgLy8gVG9wIGVkZ2UgaW5zaWRlIGFuZCBib3R0b20gZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gcmVzaXplIGl0LlxuICBpZiAob3ZlcmZsb3cucmVzaXplSGVpZ2h0ICYmIHBvcy50b3AgPj0gdmlzaWJsZVJlY3QudG9wICYmIHBvcy50b3AgKyBzaXplLmhlaWdodCA+IHZpc2libGVSZWN0LmJvdHRvbSkge1xuICAgIHNpemUuaGVpZ2h0IC09IHBvcy50b3AgKyBzaXplLmhlaWdodCAtIHZpc2libGVSZWN0LmJvdHRvbTtcbiAgfVxuXG4gIC8vIEJvdHRvbSBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byBtb3ZlIGl0LlxuICBpZiAob3ZlcmZsb3cuYWRqdXN0WSAmJiBwb3MudG9wICsgc2l6ZS5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b20pIHtcbiAgICAvLyDkv53or4HkuIrovrnnlYzlkozlj6/op4bljLrln5/kuIrovrnnlYzlr7npvZBcbiAgICBwb3MudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QuYm90dG9tIC0gc2l6ZS5oZWlnaHQsIHZpc2libGVSZWN0LnRvcCk7XG4gIH1cblxuICByZXR1cm4gdXRpbHMubWl4KHBvcywgc2l6ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkanVzdEZvclZpZXdwb3J0OyIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gZ2V0UmVnaW9uKG5vZGUpIHtcbiAgdmFyIG9mZnNldCA9IHZvaWQgMDtcbiAgdmFyIHcgPSB2b2lkIDA7XG4gIHZhciBoID0gdm9pZCAwO1xuICBpZiAoIXV0aWxzLmlzV2luZG93KG5vZGUpICYmIG5vZGUubm9kZVR5cGUgIT09IDkpIHtcbiAgICBvZmZzZXQgPSB1dGlscy5vZmZzZXQobm9kZSk7XG4gICAgdyA9IHV0aWxzLm91dGVyV2lkdGgobm9kZSk7XG4gICAgaCA9IHV0aWxzLm91dGVySGVpZ2h0KG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB3aW4gPSB1dGlscy5nZXRXaW5kb3cobm9kZSk7XG4gICAgb2Zmc2V0ID0ge1xuICAgICAgbGVmdDogdXRpbHMuZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pLFxuICAgICAgdG9wOiB1dGlscy5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKVxuICAgIH07XG4gICAgdyA9IHV0aWxzLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgICBoID0gdXRpbHMudmlld3BvcnRIZWlnaHQod2luKTtcbiAgfVxuICBvZmZzZXQud2lkdGggPSB3O1xuICBvZmZzZXQuaGVpZ2h0ID0gaDtcbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmVnaW9uOyIsIi8qKlxuICog6I635Y+WIG5vZGUg5LiK55qEIGFsaWduIOWvuem9kOeCuSDnm7jlr7nkuo7pobXpnaLnmoTlnZDmoIdcbiAqL1xuXG5mdW5jdGlvbiBnZXRBbGlnbk9mZnNldChyZWdpb24sIGFsaWduKSB7XG4gIHZhciBWID0gYWxpZ24uY2hhckF0KDApO1xuICB2YXIgSCA9IGFsaWduLmNoYXJBdCgxKTtcbiAgdmFyIHcgPSByZWdpb24ud2lkdGg7XG4gIHZhciBoID0gcmVnaW9uLmhlaWdodDtcblxuICB2YXIgeCA9IHJlZ2lvbi5sZWZ0O1xuICB2YXIgeSA9IHJlZ2lvbi50b3A7XG5cbiAgaWYgKFYgPT09ICdjJykge1xuICAgIHkgKz0gaCAvIDI7XG4gIH0gZWxzZSBpZiAoViA9PT0gJ2InKSB7XG4gICAgeSArPSBoO1xuICB9XG5cbiAgaWYgKEggPT09ICdjJykge1xuICAgIHggKz0gdyAvIDI7XG4gIH0gZWxzZSBpZiAoSCA9PT0gJ3InKSB7XG4gICAgeCArPSB3O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4LFxuICAgIHRvcDogeVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBbGlnbk9mZnNldDsiLCJpbXBvcnQgZ2V0QWxpZ25PZmZzZXQgZnJvbSAnLi9nZXRBbGlnbk9mZnNldCc7XG5cbmZ1bmN0aW9uIGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCByZWZOb2RlUmVnaW9uLCBwb2ludHMsIG9mZnNldCwgdGFyZ2V0T2Zmc2V0KSB7XG4gIHZhciBwMSA9IGdldEFsaWduT2Zmc2V0KHJlZk5vZGVSZWdpb24sIHBvaW50c1sxXSk7XG4gIHZhciBwMiA9IGdldEFsaWduT2Zmc2V0KGVsUmVnaW9uLCBwb2ludHNbMF0pO1xuICB2YXIgZGlmZiA9IFtwMi5sZWZ0IC0gcDEubGVmdCwgcDIudG9wIC0gcDEudG9wXTtcblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IE1hdGgucm91bmQoZWxSZWdpb24ubGVmdCAtIGRpZmZbMF0gKyBvZmZzZXRbMF0gLSB0YXJnZXRPZmZzZXRbMF0pLFxuICAgIHRvcDogTWF0aC5yb3VuZChlbFJlZ2lvbi50b3AgLSBkaWZmWzFdICsgb2Zmc2V0WzFdIC0gdGFyZ2V0T2Zmc2V0WzFdKVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRFbEZ1dHVyZVBvczsiLCIvKipcbiAqIGFsaWduIGRvbSBub2RlIGZsZXhpYmx5XG4gKiBAYXV0aG9yIHlpbWluZ2hlQGdtYWlsLmNvbVxuICovXG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50IGZyb20gJy4uL2dldFZpc2libGVSZWN0Rm9yRWxlbWVudCc7XG5pbXBvcnQgYWRqdXN0Rm9yVmlld3BvcnQgZnJvbSAnLi4vYWRqdXN0Rm9yVmlld3BvcnQnO1xuaW1wb3J0IGdldFJlZ2lvbiBmcm9tICcuLi9nZXRSZWdpb24nO1xuaW1wb3J0IGdldEVsRnV0dXJlUG9zIGZyb20gJy4uL2dldEVsRnV0dXJlUG9zJztcblxuLy8gaHR0cDovL3lpbWluZ2hlLml0ZXllLmNvbS9ibG9nLzExMjQ3MjBcblxuZnVuY3Rpb24gaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy5sZWZ0IDwgdmlzaWJsZVJlY3QubGVmdCB8fCBlbEZ1dHVyZVBvcy5sZWZ0ICsgZWxSZWdpb24ud2lkdGggPiB2aXNpYmxlUmVjdC5yaWdodDtcbn1cblxuZnVuY3Rpb24gaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy50b3AgPCB2aXNpYmxlUmVjdC50b3AgfHwgZWxGdXR1cmVQb3MudG9wICsgZWxSZWdpb24uaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tO1xufVxuXG5mdW5jdGlvbiBpc0NvbXBsZXRlRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MubGVmdCA+IHZpc2libGVSZWN0LnJpZ2h0IHx8IGVsRnV0dXJlUG9zLmxlZnQgKyBlbFJlZ2lvbi53aWR0aCA8IHZpc2libGVSZWN0LmxlZnQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcGxldGVGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy50b3AgPiB2aXNpYmxlUmVjdC5ib3R0b20gfHwgZWxGdXR1cmVQb3MudG9wICsgZWxSZWdpb24uaGVpZ2h0IDwgdmlzaWJsZVJlY3QudG9wO1xufVxuXG5mdW5jdGlvbiBmbGlwKHBvaW50cywgcmVnLCBtYXApIHtcbiAgdmFyIHJldCA9IFtdO1xuICB1dGlscy5lYWNoKHBvaW50cywgZnVuY3Rpb24gKHApIHtcbiAgICByZXQucHVzaChwLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG1hcFttXTtcbiAgICB9KSk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBmbGlwT2Zmc2V0KG9mZnNldCwgaW5kZXgpIHtcbiAgb2Zmc2V0W2luZGV4XSA9IC1vZmZzZXRbaW5kZXhdO1xuICByZXR1cm4gb2Zmc2V0O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0T2Zmc2V0KHN0ciwgb2Zmc2V0TGVuKSB7XG4gIHZhciBuID0gdm9pZCAwO1xuICBpZiAoLyUkLy50ZXN0KHN0cikpIHtcbiAgICBuID0gcGFyc2VJbnQoc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSksIDEwKSAvIDEwMCAqIG9mZnNldExlbjtcbiAgfSBlbHNlIHtcbiAgICBuID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIH1cbiAgcmV0dXJuIG4gfHwgMDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplT2Zmc2V0KG9mZnNldCwgZWwpIHtcbiAgb2Zmc2V0WzBdID0gY29udmVydE9mZnNldChvZmZzZXRbMF0sIGVsLndpZHRoKTtcbiAgb2Zmc2V0WzFdID0gY29udmVydE9mZnNldChvZmZzZXRbMV0sIGVsLmhlaWdodCk7XG59XG5cbi8qKlxuICogQHBhcmFtIGVsXG4gKiBAcGFyYW0gdGd0UmVnaW9uIOWPgueFp+iKgueCueaJgOWNoOeahOWMuuWfnzogeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfVxuICogQHBhcmFtIGFsaWduXG4gKi9cbmZ1bmN0aW9uIGRvQWxpZ24oZWwsIHRndFJlZ2lvbiwgYWxpZ24sIGlzVGd0UmVnaW9uVmlzaWJsZSkge1xuICB2YXIgcG9pbnRzID0gYWxpZ24ucG9pbnRzO1xuICB2YXIgb2Zmc2V0ID0gYWxpZ24ub2Zmc2V0IHx8IFswLCAwXTtcbiAgdmFyIHRhcmdldE9mZnNldCA9IGFsaWduLnRhcmdldE9mZnNldCB8fCBbMCwgMF07XG4gIHZhciBvdmVyZmxvdyA9IGFsaWduLm92ZXJmbG93O1xuICB2YXIgc291cmNlID0gYWxpZ24uc291cmNlIHx8IGVsO1xuICBvZmZzZXQgPSBbXS5jb25jYXQob2Zmc2V0KTtcbiAgdGFyZ2V0T2Zmc2V0ID0gW10uY29uY2F0KHRhcmdldE9mZnNldCk7XG4gIG92ZXJmbG93ID0gb3ZlcmZsb3cgfHwge307XG4gIHZhciBuZXdPdmVyZmxvd0NmZyA9IHt9O1xuICB2YXIgZmFpbCA9IDA7XG4gIC8vIOW9k+WJjeiKgueCueWPr+S7peiiq+aUvue9rueahOaYvuekuuWMuuWfn1xuICB2YXIgdmlzaWJsZVJlY3QgPSBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQoc291cmNlKTtcbiAgLy8g5b2T5YmN6IqC54K55omA5Y2g55qE5Yy65Z+fLCBsZWZ0L3RvcC93aWR0aC9oZWlnaHRcbiAgdmFyIGVsUmVnaW9uID0gZ2V0UmVnaW9uKHNvdXJjZSk7XG4gIC8vIOWwhiBvZmZzZXQg6L2s5o2i5oiQ5pWw5YC877yM5pSv5oyB55m+5YiG5q+UXG4gIG5vcm1hbGl6ZU9mZnNldChvZmZzZXQsIGVsUmVnaW9uKTtcbiAgbm9ybWFsaXplT2Zmc2V0KHRhcmdldE9mZnNldCwgdGd0UmVnaW9uKTtcbiAgLy8g5b2T5YmN6IqC54K55bCG6KaB6KKr5pS+572u55qE5L2N572uXG4gIHZhciBlbEZ1dHVyZVBvcyA9IGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCB0Z3RSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpO1xuICAvLyDlvZPliY3oioLngrnlsIbopoHmiYDlpITnmoTljLrln59cbiAgdmFyIG5ld0VsUmVnaW9uID0gdXRpbHMubWVyZ2UoZWxSZWdpb24sIGVsRnV0dXJlUG9zKTtcblxuICAvLyDlpoLmnpzlj6/op4bljLrln5/kuI3og73lrozlhajmlL7nva7lvZPliY3oioLngrnml7blhYHorrjosIPmlbRcbiAgaWYgKHZpc2libGVSZWN0ICYmIChvdmVyZmxvdy5hZGp1c3RYIHx8IG92ZXJmbG93LmFkanVzdFkpICYmIGlzVGd0UmVnaW9uVmlzaWJsZSkge1xuICAgIGlmIChvdmVyZmxvdy5hZGp1c3RYKSB7XG4gICAgICAvLyDlpoLmnpzmqKrlkJHkuI3og73mlL7kuItcbiAgICAgIGlmIChpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgIC8vIOWvuem9kOS9jee9ruWPjeS4i1xuICAgICAgICB2YXIgbmV3UG9pbnRzID0gZmxpcChwb2ludHMsIC9bbHJdL2lnLCB7XG4gICAgICAgICAgbDogJ3InLFxuICAgICAgICAgIHI6ICdsJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5YGP56e76YeP5Lmf5Y+N5LiLXG4gICAgICAgIHZhciBuZXdPZmZzZXQgPSBmbGlwT2Zmc2V0KG9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdUYXJnZXRPZmZzZXQgPSBmbGlwT2Zmc2V0KHRhcmdldE9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdFbEZ1dHVyZVBvcyA9IGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCB0Z3RSZWdpb24sIG5ld1BvaW50cywgbmV3T2Zmc2V0LCBuZXdUYXJnZXRPZmZzZXQpO1xuXG4gICAgICAgIGlmICghaXNDb21wbGV0ZUZhaWxYKG5ld0VsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgICAgZmFpbCA9IDE7XG4gICAgICAgICAgcG9pbnRzID0gbmV3UG9pbnRzO1xuICAgICAgICAgIG9mZnNldCA9IG5ld09mZnNldDtcbiAgICAgICAgICB0YXJnZXRPZmZzZXQgPSBuZXdUYXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3ZlcmZsb3cuYWRqdXN0WSkge1xuICAgICAgLy8g5aaC5p6c57q15ZCR5LiN6IO95pS+5LiLXG4gICAgICBpZiAoaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAvLyDlr7npvZDkvY3nva7lj43kuItcbiAgICAgICAgdmFyIF9uZXdQb2ludHMgPSBmbGlwKHBvaW50cywgL1t0Yl0vaWcsIHtcbiAgICAgICAgICB0OiAnYicsXG4gICAgICAgICAgYjogJ3QnXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDlgY/np7vph4/kuZ/lj43kuItcbiAgICAgICAgdmFyIF9uZXdPZmZzZXQgPSBmbGlwT2Zmc2V0KG9mZnNldCwgMSk7XG4gICAgICAgIHZhciBfbmV3VGFyZ2V0T2Zmc2V0ID0gZmxpcE9mZnNldCh0YXJnZXRPZmZzZXQsIDEpO1xuICAgICAgICB2YXIgX25ld0VsRnV0dXJlUG9zID0gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHRndFJlZ2lvbiwgX25ld1BvaW50cywgX25ld09mZnNldCwgX25ld1RhcmdldE9mZnNldCk7XG5cbiAgICAgICAgaWYgKCFpc0NvbXBsZXRlRmFpbFkoX25ld0VsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgICAgZmFpbCA9IDE7XG4gICAgICAgICAgcG9pbnRzID0gX25ld1BvaW50cztcbiAgICAgICAgICBvZmZzZXQgPSBfbmV3T2Zmc2V0O1xuICAgICAgICAgIHRhcmdldE9mZnNldCA9IF9uZXdUYXJnZXRPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlpoLmnpzlpLHotKXvvIzph43mlrDorqHnrpflvZPliY3oioLngrnlsIbopoHooqvmlL7nva7nmoTkvY3nva5cbiAgICBpZiAoZmFpbCkge1xuICAgICAgZWxGdXR1cmVQb3MgPSBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgdGd0UmVnaW9uLCBwb2ludHMsIG9mZnNldCwgdGFyZ2V0T2Zmc2V0KTtcbiAgICAgIHV0aWxzLm1peChuZXdFbFJlZ2lvbiwgZWxGdXR1cmVQb3MpO1xuICAgIH1cbiAgICB2YXIgaXNTdGlsbEZhaWxYID0gaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KTtcbiAgICB2YXIgaXNTdGlsbEZhaWxZID0gaXNGYWlsWShlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KTtcbiAgICAvLyDmo4Dmn6Xlj43kuIvlkI7nmoTkvY3nva7mmK/lkKblj6/ku6XmlL7kuIvkuobvvIzlpoLmnpzku43nhLbmlL7kuI3kuIvvvJpcbiAgICAvLyAxLiDlpI3ljp/kv67mlLnov4fnmoTlrprkvY3lj4LmlbBcbiAgICBpZiAoaXNTdGlsbEZhaWxYIHx8IGlzU3RpbGxGYWlsWSkge1xuICAgICAgcG9pbnRzID0gYWxpZ24ucG9pbnRzO1xuICAgICAgb2Zmc2V0ID0gYWxpZ24ub2Zmc2V0IHx8IFswLCAwXTtcbiAgICAgIHRhcmdldE9mZnNldCA9IGFsaWduLnRhcmdldE9mZnNldCB8fCBbMCwgMF07XG4gICAgfVxuICAgIC8vIDIuIOWPquacieaMh+WumuS6huWPr+S7peiwg+aVtOW9k+WJjeaWueWQkeaJjeiwg+aVtFxuICAgIG5ld092ZXJmbG93Q2ZnLmFkanVzdFggPSBvdmVyZmxvdy5hZGp1c3RYICYmIGlzU3RpbGxGYWlsWDtcbiAgICBuZXdPdmVyZmxvd0NmZy5hZGp1c3RZID0gb3ZlcmZsb3cuYWRqdXN0WSAmJiBpc1N0aWxsRmFpbFk7XG5cbiAgICAvLyDnoa7lrp7opoHosIPmlbTvvIznlJroh7Plj6/og73kvJrosIPmlbTpq5jluqblrr3luqZcbiAgICBpZiAobmV3T3ZlcmZsb3dDZmcuYWRqdXN0WCB8fCBuZXdPdmVyZmxvd0NmZy5hZGp1c3RZKSB7XG4gICAgICBuZXdFbFJlZ2lvbiA9IGFkanVzdEZvclZpZXdwb3J0KGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QsIG5ld092ZXJmbG93Q2ZnKTtcbiAgICB9XG4gIH1cblxuICAvLyBuZWVkIGp1ZGdlIHRvIGluIGNhc2Ugc2V0IGZpeGVkIHdpdGggaW4gY3NzIG9uIGhlaWdodCBhdXRvIGVsZW1lbnRcbiAgaWYgKG5ld0VsUmVnaW9uLndpZHRoICE9PSBlbFJlZ2lvbi53aWR0aCkge1xuICAgIHV0aWxzLmNzcyhzb3VyY2UsICd3aWR0aCcsIHV0aWxzLndpZHRoKHNvdXJjZSkgKyBuZXdFbFJlZ2lvbi53aWR0aCAtIGVsUmVnaW9uLndpZHRoKTtcbiAgfVxuXG4gIGlmIChuZXdFbFJlZ2lvbi5oZWlnaHQgIT09IGVsUmVnaW9uLmhlaWdodCkge1xuICAgIHV0aWxzLmNzcyhzb3VyY2UsICdoZWlnaHQnLCB1dGlscy5oZWlnaHQoc291cmNlKSArIG5ld0VsUmVnaW9uLmhlaWdodCAtIGVsUmVnaW9uLmhlaWdodCk7XG4gIH1cblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy8xOTBcbiAgLy8g55u45a+55LqO5bGP5bmV5L2N572u5rKh5Y+Y77yM6ICMIGxlZnQvdG9wIOWPmOS6hlxuICAvLyDkvovlpoIgPGRpdiAncmVsYXRpdmUnPjxlbCBhYnNvbHV0ZT48L2Rpdj5cbiAgdXRpbHMub2Zmc2V0KHNvdXJjZSwge1xuICAgIGxlZnQ6IG5ld0VsUmVnaW9uLmxlZnQsXG4gICAgdG9wOiBuZXdFbFJlZ2lvbi50b3BcbiAgfSwge1xuICAgIHVzZUNzc1JpZ2h0OiBhbGlnbi51c2VDc3NSaWdodCxcbiAgICB1c2VDc3NCb3R0b206IGFsaWduLnVzZUNzc0JvdHRvbSxcbiAgICB1c2VDc3NUcmFuc2Zvcm06IGFsaWduLnVzZUNzc1RyYW5zZm9ybSxcbiAgICBpZ25vcmVTaGFrZTogYWxpZ24uaWdub3JlU2hha2VcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwb2ludHM6IHBvaW50cyxcbiAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldCxcbiAgICBvdmVyZmxvdzogbmV3T3ZlcmZsb3dDZmdcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9BbGlnbjtcbi8qKlxuICogIDIwMTItMDQtMjYgeWltaW5naGVAZ21haWwuY29tXG4gKiAgIC0g5LyY5YyW5pm66IO95a+56b2Q566X5rOVXG4gKiAgIC0g5oWO55SoIHJlc2l6ZVhYXG4gKlxuICogIDIwMTEtMDctMTMgeWltaW5naGVAZ21haWwuY29tIG5vdGU6XG4gKiAgIC0g5aKe5Yqg5pm66IO95a+56b2Q77yM5Lul5Y+K5aSn5bCP6LCD5pW06YCJ6aG5XG4gKiovIiwiaW1wb3J0IGRvQWxpZ24gZnJvbSAnLi9hbGlnbic7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gJy4uL2dldE9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50IGZyb20gJy4uL2dldFZpc2libGVSZWN0Rm9yRWxlbWVudCc7XG5pbXBvcnQgZ2V0UmVnaW9uIGZyb20gJy4uL2dldFJlZ2lvbic7XG5cbmZ1bmN0aW9uIGlzT3V0T2ZWaXNpYmxlUmVjdCh0YXJnZXQpIHtcbiAgdmFyIHZpc2libGVSZWN0ID0gZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50KHRhcmdldCk7XG4gIHZhciB0YXJnZXRSZWdpb24gPSBnZXRSZWdpb24odGFyZ2V0KTtcblxuICByZXR1cm4gIXZpc2libGVSZWN0IHx8IHRhcmdldFJlZ2lvbi5sZWZ0ICsgdGFyZ2V0UmVnaW9uLndpZHRoIDw9IHZpc2libGVSZWN0LmxlZnQgfHwgdGFyZ2V0UmVnaW9uLnRvcCArIHRhcmdldFJlZ2lvbi5oZWlnaHQgPD0gdmlzaWJsZVJlY3QudG9wIHx8IHRhcmdldFJlZ2lvbi5sZWZ0ID49IHZpc2libGVSZWN0LnJpZ2h0IHx8IHRhcmdldFJlZ2lvbi50b3AgPj0gdmlzaWJsZVJlY3QuYm90dG9tO1xufVxuXG5mdW5jdGlvbiBhbGlnbkVsZW1lbnQoZWwsIHJlZk5vZGUsIGFsaWduKSB7XG4gIHZhciB0YXJnZXQgPSBhbGlnbi50YXJnZXQgfHwgcmVmTm9kZTtcbiAgdmFyIHJlZk5vZGVSZWdpb24gPSBnZXRSZWdpb24odGFyZ2V0KTtcblxuICB2YXIgaXNUYXJnZXROb3RPdXRPZlZpc2libGUgPSAhaXNPdXRPZlZpc2libGVSZWN0KHRhcmdldCk7XG5cbiAgcmV0dXJuIGRvQWxpZ24oZWwsIHJlZk5vZGVSZWdpb24sIGFsaWduLCBpc1RhcmdldE5vdE91dE9mVmlzaWJsZSk7XG59XG5cbmFsaWduRWxlbWVudC5fX2dldE9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudDtcblxuYWxpZ25FbGVtZW50Ll9fZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50ID0gZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50O1xuXG5leHBvcnQgZGVmYXVsdCBhbGlnbkVsZW1lbnQ7IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBkb0FsaWduIGZyb20gJy4vYWxpZ24nO1xuXG4vKipcbiAqIGB0Z3RQb2ludGA6IHsgcGFnZVgsIHBhZ2VZIH0gb3IgeyBjbGllbnRYLCBjbGllbnRZIH0uXG4gKiBJZiBjbGllbnQgcG9zaXRpb24gcHJvdmlkZWQsIHdpbGwgaW50ZXJuYWwgY29udmVydCB0byBwYWdlIHBvc2l0aW9uLlxuICovXG5cbmZ1bmN0aW9uIGFsaWduUG9pbnQoZWwsIHRndFBvaW50LCBhbGlnbikge1xuICB2YXIgcGFnZVggPSB2b2lkIDA7XG4gIHZhciBwYWdlWSA9IHZvaWQgMDtcblxuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWwpO1xuICB2YXIgd2luID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG5cbiAgdmFyIHNjcm9sbFggPSB1dGlscy5nZXRXaW5kb3dTY3JvbGxMZWZ0KHdpbik7XG4gIHZhciBzY3JvbGxZID0gdXRpbHMuZ2V0V2luZG93U2Nyb2xsVG9wKHdpbik7XG4gIHZhciB2aWV3cG9ydFdpZHRoID0gdXRpbHMudmlld3BvcnRXaWR0aCh3aW4pO1xuICB2YXIgdmlld3BvcnRIZWlnaHQgPSB1dGlscy52aWV3cG9ydEhlaWdodCh3aW4pO1xuXG4gIGlmICgncGFnZVgnIGluIHRndFBvaW50KSB7XG4gICAgcGFnZVggPSB0Z3RQb2ludC5wYWdlWDtcbiAgfSBlbHNlIHtcbiAgICBwYWdlWCA9IHNjcm9sbFggKyB0Z3RQb2ludC5jbGllbnRYO1xuICB9XG5cbiAgaWYgKCdwYWdlWScgaW4gdGd0UG9pbnQpIHtcbiAgICBwYWdlWSA9IHRndFBvaW50LnBhZ2VZO1xuICB9IGVsc2Uge1xuICAgIHBhZ2VZID0gc2Nyb2xsWSArIHRndFBvaW50LmNsaWVudFk7XG4gIH1cblxuICB2YXIgdGd0UmVnaW9uID0ge1xuICAgIGxlZnQ6IHBhZ2VYLFxuICAgIHRvcDogcGFnZVksXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwXG4gIH07XG5cbiAgdmFyIHBvaW50SW5WaWV3ID0gcGFnZVggPj0gMCAmJiBwYWdlWCA8PSBzY3JvbGxYICsgdmlld3BvcnRXaWR0aCAmJiBwYWdlWSA+PSAwICYmIHBhZ2VZIDw9IHNjcm9sbFkgKyB2aWV3cG9ydEhlaWdodDtcblxuICAvLyBQcm92aWRlIGRlZmF1bHQgdGFyZ2V0IHBvaW50XG4gIHZhciBwb2ludHMgPSBbYWxpZ24ucG9pbnRzWzBdLCAnY2MnXTtcblxuICByZXR1cm4gZG9BbGlnbihlbCwgdGd0UmVnaW9uLCBfZXh0ZW5kcyh7fSwgYWxpZ24sIHsgcG9pbnRzOiBwb2ludHMgfSksIHBvaW50SW5WaWV3KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWxpZ25Qb2ludDsiLCJpbXBvcnQgY29udGFpbnMgZnJvbSAncmMtdXRpbC9lcy9Eb20vY29udGFpbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVmZmVyKGZuLCBtcykge1xuICB2YXIgdGltZXIgPSB2b2lkIDA7XG5cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckZuKCkge1xuICAgIGNsZWFyKCk7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZuLCBtcyk7XG4gIH1cblxuICBidWZmZXJGbi5jbGVhciA9IGNsZWFyO1xuXG4gIHJldHVybiBidWZmZXJGbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVBvaW50KHByZXYsIG5leHQpIHtcbiAgaWYgKHByZXYgPT09IG5leHQpIHJldHVybiB0cnVlO1xuICBpZiAoIXByZXYgfHwgIW5leHQpIHJldHVybiBmYWxzZTtcblxuICBpZiAoJ3BhZ2VYJyBpbiBuZXh0ICYmICdwYWdlWScgaW4gbmV4dCkge1xuICAgIHJldHVybiBwcmV2LnBhZ2VYID09PSBuZXh0LnBhZ2VYICYmIHByZXYucGFnZVkgPT09IG5leHQucGFnZVk7XG4gIH1cblxuICBpZiAoJ2NsaWVudFgnIGluIG5leHQgJiYgJ2NsaWVudFknIGluIG5leHQpIHtcbiAgICByZXR1cm4gcHJldi5jbGllbnRYID09PSBuZXh0LmNsaWVudFggJiYgcHJldi5jbGllbnRZID09PSBuZXh0LmNsaWVudFk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmoud2luZG93ID09PSBvYmo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NpbWlsYXJWYWx1ZSh2YWwxLCB2YWwyKSB7XG4gIHZhciBpbnQxID0gTWF0aC5mbG9vcih2YWwxKTtcbiAgdmFyIGludDIgPSBNYXRoLmZsb29yKHZhbDIpO1xuICByZXR1cm4gTWF0aC5hYnMoaW50MSAtIGludDIpIDw9IDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlRm9jdXMoYWN0aXZlRWxlbWVudCwgY29udGFpbmVyKSB7XG4gIC8vIEZvY3VzIGJhY2sgaWYgaXMgaW4gdGhlIGNvbnRhaW5lclxuICBpZiAoYWN0aXZlRWxlbWVudCAhPT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBjb250YWlucyhjb250YWluZXIsIGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgYWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBhbGlnbkVsZW1lbnQsIGFsaWduUG9pbnQgfSBmcm9tICdkb20tYWxpZ24nO1xuaW1wb3J0IGFkZEV2ZW50TGlzdGVuZXIgZnJvbSAncmMtdXRpbC9lcy9Eb20vYWRkRXZlbnRMaXN0ZW5lcic7XG5cbmltcG9ydCB7IGlzV2luZG93LCBidWZmZXIsIGlzU2FtZVBvaW50LCBpc1NpbWlsYXJWYWx1ZSwgcmVzdG9yZUZvY3VzIH0gZnJvbSAnLi91dGlsJztcblxuZnVuY3Rpb24gZ2V0RWxlbWVudChmdW5jKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJyB8fCAhZnVuYykgcmV0dXJuIG51bGw7XG4gIHJldHVybiBmdW5jKCk7XG59XG5cbmZ1bmN0aW9uIGdldFBvaW50KHBvaW50KSB7XG4gIGlmICh0eXBlb2YgcG9pbnQgIT09ICdvYmplY3QnIHx8ICFwb2ludCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBwb2ludDtcbn1cblxudmFyIEFsaWduID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFsaWduLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBbGlnbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWxpZ24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IEFsaWduLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQWxpZ24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5mb3JjZUFsaWduID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICB0YXJnZXQgPSBfdGhpcyRwcm9wcy50YXJnZXQsXG4gICAgICAgICAgYWxpZ24gPSBfdGhpcyRwcm9wcy5hbGlnbixcbiAgICAgICAgICBvbkFsaWduID0gX3RoaXMkcHJvcHMub25BbGlnbjtcblxuICAgICAgaWYgKCFkaXNhYmxlZCAmJiB0YXJnZXQpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICB2YXIgZWxlbWVudCA9IGdldEVsZW1lbnQodGFyZ2V0KTtcbiAgICAgICAgdmFyIHBvaW50ID0gZ2V0UG9pbnQodGFyZ2V0KTtcblxuICAgICAgICAvLyBJRSBsb3NlIGZvY3VzIGFmdGVyIGVsZW1lbnQgcmVhbGlnblxuICAgICAgICAvLyBXZSBzaG91bGQgcmVjb3JkIGFjdGl2ZUVsZW1lbnQgYW5kIHJlc3RvcmUgbGF0ZXJcbiAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgcmVzdWx0ID0gYWxpZ25FbGVtZW50KHNvdXJjZSwgZWxlbWVudCwgYWxpZ24pO1xuICAgICAgICB9IGVsc2UgaWYgKHBvaW50KSB7XG4gICAgICAgICAgcmVzdWx0ID0gYWxpZ25Qb2ludChzb3VyY2UsIHBvaW50LCBhbGlnbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXN0b3JlRm9jdXMoYWN0aXZlRWxlbWVudCwgc291cmNlKTtcblxuICAgICAgICBpZiAob25BbGlnbikge1xuICAgICAgICAgIG9uQWxpZ24oc291cmNlLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQWxpZ24sIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAvLyBpZiBwYXJlbnQgcmVmIG5vdCBhdHRhY2hlZCAuLi4uIHVzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZFxuICAgICAgdGhpcy5mb3JjZUFsaWduKCk7XG4gICAgICBpZiAoIXByb3BzLmRpc2FibGVkICYmIHByb3BzLm1vbml0b3JXaW5kb3dSZXNpemUpIHtcbiAgICAgICAgdGhpcy5zdGFydE1vbml0b3JXaW5kb3dSZXNpemUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB2YXIgcmVBbGlnbiA9IGZhbHNlO1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgaWYgKCFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB2YXIgc291cmNlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgIHZhciBzb3VyY2VSZWN0ID0gc291cmNlID8gc291cmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcblxuICAgICAgICBpZiAocHJldlByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgcmVBbGlnbiA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGxhc3RFbGVtZW50ID0gZ2V0RWxlbWVudChwcmV2UHJvcHMudGFyZ2V0KTtcbiAgICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBnZXRFbGVtZW50KHByb3BzLnRhcmdldCk7XG4gICAgICAgICAgdmFyIGxhc3RQb2ludCA9IGdldFBvaW50KHByZXZQcm9wcy50YXJnZXQpO1xuICAgICAgICAgIHZhciBjdXJyZW50UG9pbnQgPSBnZXRQb2ludChwcm9wcy50YXJnZXQpO1xuXG4gICAgICAgICAgaWYgKGlzV2luZG93KGxhc3RFbGVtZW50KSAmJiBpc1dpbmRvdyhjdXJyZW50RWxlbWVudCkpIHtcbiAgICAgICAgICAgIC8vIFNraXAgaWYgaXMgd2luZG93XG4gICAgICAgICAgICByZUFsaWduID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIGlmIChsYXN0RWxlbWVudCAhPT0gY3VycmVudEVsZW1lbnQgfHwgLy8gRWxlbWVudCBjaGFuZ2VcbiAgICAgICAgICBsYXN0RWxlbWVudCAmJiAhY3VycmVudEVsZW1lbnQgJiYgY3VycmVudFBvaW50IHx8IC8vIENoYW5nZSBmcm9tIGVsZW1lbnQgdG8gcG9pbnRcbiAgICAgICAgICBsYXN0UG9pbnQgJiYgY3VycmVudFBvaW50ICYmIGN1cnJlbnRFbGVtZW50IHx8IC8vIENoYW5nZSBmcm9tIHBvaW50IHRvIGVsZW1lbnRcbiAgICAgICAgICBjdXJyZW50UG9pbnQgJiYgIWlzU2FtZVBvaW50KGxhc3RQb2ludCwgY3VycmVudFBvaW50KSkge1xuICAgICAgICAgICAgcmVBbGlnbiA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgc291cmNlIGVsZW1lbnQgc2l6ZSBjaGFuZ2VkXG4gICAgICAgICAgdmFyIHByZVJlY3QgPSB0aGlzLnNvdXJjZVJlY3QgfHwge307XG4gICAgICAgICAgaWYgKCFyZUFsaWduICYmIHNvdXJjZSAmJiAoIWlzU2ltaWxhclZhbHVlKHByZVJlY3Qud2lkdGgsIHNvdXJjZVJlY3Qud2lkdGgpIHx8ICFpc1NpbWlsYXJWYWx1ZShwcmVSZWN0LmhlaWdodCwgc291cmNlUmVjdC5oZWlnaHQpKSkge1xuICAgICAgICAgICAgcmVBbGlnbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zb3VyY2VSZWN0ID0gc291cmNlUmVjdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlQWxpZ24pIHtcbiAgICAgICAgdGhpcy5mb3JjZUFsaWduKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5tb25pdG9yV2luZG93UmVzaXplICYmICFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnN0YXJ0TW9uaXRvcldpbmRvd1Jlc2l6ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9wTW9uaXRvcldpbmRvd1Jlc2l6ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BNb25pdG9yV2luZG93UmVzaXplKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RhcnRNb25pdG9yV2luZG93UmVzaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRNb25pdG9yV2luZG93UmVzaXplKCkge1xuICAgICAgaWYgKCF0aGlzLnJlc2l6ZUhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5idWZmZXJNb25pdG9yID0gYnVmZmVyKHRoaXMuZm9yY2VBbGlnbiwgdGhpcy5wcm9wcy5tb25pdG9yQnVmZmVyVGltZSk7XG4gICAgICAgIHRoaXMucmVzaXplSGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdGhpcy5idWZmZXJNb25pdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdG9wTW9uaXRvcldpbmRvd1Jlc2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BNb25pdG9yV2luZG93UmVzaXplKCkge1xuICAgICAgaWYgKHRoaXMucmVzaXplSGFuZGxlcikge1xuICAgICAgICB0aGlzLmJ1ZmZlck1vbml0b3IuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZXNpemVIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlblByb3BzID0gX3Byb3BzLmNoaWxkcmVuUHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIHZhciBjaGlsZCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgaWYgKGNoaWxkcmVuUHJvcHMpIHtcbiAgICAgICAgdmFyIG5ld1Byb3BzID0ge307XG4gICAgICAgIHZhciBwcm9wTGlzdCA9IE9iamVjdC5rZXlzKGNoaWxkcmVuUHJvcHMpO1xuICAgICAgICBwcm9wTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgbmV3UHJvcHNbcHJvcF0gPSBfdGhpczIucHJvcHNbY2hpbGRyZW5Qcm9wc1twcm9wXV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld1Byb3BzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWxpZ247XG59KENvbXBvbmVudCk7XG5cbkFsaWduLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW5Qcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgYWxpZ246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGFyZ2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBjbGllbnRYOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNsaWVudFk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZVg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZVk6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKSxcbiAgb25BbGlnbjogUHJvcFR5cGVzLmZ1bmMsXG4gIG1vbml0b3JCdWZmZXJUaW1lOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtb25pdG9yV2luZG93UmVzaXplOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxufTtcbkFsaWduLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGFyZ2V0OiBmdW5jdGlvbiB0YXJnZXQoKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfSxcbiAgbW9uaXRvckJ1ZmZlclRpbWU6IDUwLFxuICBtb25pdG9yV2luZG93UmVzaXplOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFsaWduOyIsIi8vIGV4cG9ydCB0aGlzIHBhY2thZ2UncyBhcGlcbmltcG9ydCBBbGlnbiBmcm9tICcuL0FsaWduJztcblxuZXhwb3J0IGRlZmF1bHQgQWxpZ247IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG52YXIgTGF6eVJlbmRlckJveCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMYXp5UmVuZGVyQm94LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMYXp5UmVuZGVyQm94KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMYXp5UmVuZGVyQm94KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgTGF6eVJlbmRlckJveC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIHJldHVybiBuZXh0UHJvcHMuaGlkZGVuQ2xhc3NOYW1lIHx8IG5leHRQcm9wcy52aXNpYmxlO1xuICB9O1xuXG4gIExhenlSZW5kZXJCb3gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaGlkZGVuQ2xhc3NOYW1lID0gX3Byb3BzLmhpZGRlbkNsYXNzTmFtZSxcbiAgICAgICAgdmlzaWJsZSA9IF9wcm9wcy52aXNpYmxlLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnaGlkZGVuQ2xhc3NOYW1lJywgJ3Zpc2libGUnXSk7XG5cbiAgICBpZiAoaGlkZGVuQ2xhc3NOYW1lIHx8IFJlYWN0LkNoaWxkcmVuLmNvdW50KHByb3BzLmNoaWxkcmVuKSA+IDEpIHtcbiAgICAgIGlmICghdmlzaWJsZSAmJiBoaWRkZW5DbGFzc05hbWUpIHtcbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lICs9ICcgJyArIGhpZGRlbkNsYXNzTmFtZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkocHJvcHMuY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBMYXp5UmVuZGVyQm94O1xufShDb21wb25lbnQpO1xuXG5MYXp5UmVuZGVyQm94LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGRlbkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBMYXp5UmVuZGVyQm94OyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXp5UmVuZGVyQm94IGZyb20gJy4vTGF6eVJlbmRlckJveCc7XG5cbnZhciBQb3B1cElubmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcHVwSW5uZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcHVwSW5uZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcHVwSW5uZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQb3B1cElubmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICAgIGlmICghcHJvcHMudmlzaWJsZSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHByb3BzLmhpZGRlbkNsYXNzTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIG9uTW91c2VFbnRlcjogcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZURvd246IHByb3BzLm9uTW91c2VEb3duLFxuICAgICAgICBvblRvdWNoU3RhcnQ6IHByb3BzLm9uVG91Y2hTdGFydCxcbiAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlXG4gICAgICB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTGF6eVJlbmRlckJveCxcbiAgICAgICAgeyBjbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctY29udGVudCcsIHZpc2libGU6IHByb3BzLnZpc2libGUgfSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQb3B1cElubmVyO1xufShDb21wb25lbnQpO1xuXG5Qb3B1cElubmVyLnByb3BUeXBlcyA9IHtcbiAgaGlkZGVuQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvblRvdWNoU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cElubmVyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBbGlnbiBmcm9tICdyYy1hbGlnbic7XG5pbXBvcnQgQW5pbWF0ZSBmcm9tICdyYy1hbmltYXRlJztcbmltcG9ydCBQb3B1cElubmVyIGZyb20gJy4vUG9wdXBJbm5lcic7XG5pbXBvcnQgTGF6eVJlbmRlckJveCBmcm9tICcuL0xhenlSZW5kZXJCb3gnO1xuaW1wb3J0IHsgc2F2ZVJlZiB9IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgUG9wdXAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUG9wdXAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcHVwKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcHVwKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgLy8gVXNlZCBmb3Igc3RyZXRjaFxuICAgICAgc3RyZXRjaENoZWNrZWQ6IGZhbHNlLFxuICAgICAgdGFyZ2V0V2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgIHRhcmdldEhlaWdodDogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIF90aGlzLnNhdmVQb3B1cFJlZiA9IHNhdmVSZWYuYmluZChfdGhpcywgJ3BvcHVwSW5zdGFuY2UnKTtcbiAgICBfdGhpcy5zYXZlQWxpZ25SZWYgPSBzYXZlUmVmLmJpbmQoX3RoaXMsICdhbGlnbkluc3RhbmNlJyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUG9wdXAucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yb290Tm9kZSA9IHRoaXMuZ2V0UG9wdXBEb21Ob2RlKCk7XG4gICAgdGhpcy5zZXRTdHJldGNoU2l6ZSgpO1xuICB9O1xuXG4gIFBvcHVwLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5zZXRTdHJldGNoU2l6ZSgpO1xuICB9O1xuXG4gIC8vIFJlY29yZCBzaXplIGlmIHN0cmV0Y2ggbmVlZGVkXG5cblxuICBQb3B1cC5wcm90b3R5cGUuZ2V0UG9wdXBEb21Ob2RlID0gZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnBvcHVwSW5zdGFuY2UpO1xuICB9O1xuXG4gIC8vIGB0YXJnZXRgIG9uIGByYy1hbGlnbmAgY2FuIGFjY2VwdCBhcyBhIGZ1bmN0aW9uIHRvIGdldCB0aGUgYmluZCBlbGVtZW50IG9yIGEgcG9pbnQuXG4gIC8vIHJlZjogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmMtYWxpZ25cblxuXG4gIFBvcHVwLnByb3RvdHlwZS5nZXRNYXNrVHJhbnNpdGlvbk5hbWUgPSBmdW5jdGlvbiBnZXRNYXNrVHJhbnNpdGlvbk5hbWUoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5tYXNrVHJhbnNpdGlvbk5hbWU7XG4gICAgdmFyIGFuaW1hdGlvbiA9IHByb3BzLm1hc2tBbmltYXRpb247XG4gICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBhbmltYXRpb24pIHtcbiAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMucHJlZml4Q2xzICsgJy0nICsgYW5pbWF0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWU7XG4gIH07XG5cbiAgUG9wdXAucHJvdG90eXBlLmdldFRyYW5zaXRpb25OYW1lID0gZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbk5hbWUoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy50cmFuc2l0aW9uTmFtZTtcbiAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIHByb3BzLmFuaW1hdGlvbikge1xuICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5wcmVmaXhDbHMgKyAnLScgKyBwcm9wcy5hbmltYXRpb247XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgfTtcblxuICBQb3B1cC5wcm90b3R5cGUuZ2V0Q2xhc3NOYW1lID0gZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKGN1cnJlbnRBbGlnbkNsYXNzTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnByZWZpeENscyArICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lICsgJyAnICsgY3VycmVudEFsaWduQ2xhc3NOYW1lO1xuICB9O1xuXG4gIFBvcHVwLnByb3RvdHlwZS5nZXRQb3B1cEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRQb3B1cEVsZW1lbnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgc2F2ZVBvcHVwUmVmID0gdGhpcy5zYXZlUG9wdXBSZWY7XG4gICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIHN0cmV0Y2hDaGVja2VkID0gX3N0YXRlLnN0cmV0Y2hDaGVja2VkLFxuICAgICAgICB0YXJnZXRIZWlnaHQgPSBfc3RhdGUudGFyZ2V0SGVpZ2h0LFxuICAgICAgICB0YXJnZXRXaWR0aCA9IF9zdGF0ZS50YXJnZXRXaWR0aDtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWxpZ24gPSBfcHJvcHMuYWxpZ24sXG4gICAgICAgIHZpc2libGUgPSBfcHJvcHMudmlzaWJsZSxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgIGdldENsYXNzTmFtZUZyb21BbGlnbiA9IF9wcm9wcy5nZXRDbGFzc05hbWVGcm9tQWxpZ24sXG4gICAgICAgIGRlc3Ryb3lQb3B1cE9uSGlkZSA9IF9wcm9wcy5kZXN0cm95UG9wdXBPbkhpZGUsXG4gICAgICAgIHN0cmV0Y2ggPSBfcHJvcHMuc3RyZXRjaCxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIG9uTW91c2VFbnRlciA9IF9wcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZSA9IF9wcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgIG9uTW91c2VEb3duID0gX3Byb3BzLm9uTW91c2VEb3duLFxuICAgICAgICBvblRvdWNoU3RhcnQgPSBfcHJvcHMub25Ub3VjaFN0YXJ0O1xuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lKHRoaXMuY3VycmVudEFsaWduQ2xhc3NOYW1lIHx8IGdldENsYXNzTmFtZUZyb21BbGlnbihhbGlnbikpO1xuICAgIHZhciBoaWRkZW5DbGFzc05hbWUgPSBwcmVmaXhDbHMgKyAnLWhpZGRlbic7XG5cbiAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgIHRoaXMuY3VycmVudEFsaWduQ2xhc3NOYW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgc2l6ZVN0eWxlID0ge307XG4gICAgaWYgKHN0cmV0Y2gpIHtcbiAgICAgIC8vIFN0cmV0Y2ggd2l0aCB0YXJnZXRcbiAgICAgIGlmIChzdHJldGNoLmluZGV4T2YoJ2hlaWdodCcpICE9PSAtMSkge1xuICAgICAgICBzaXplU3R5bGUuaGVpZ2h0ID0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgfSBlbHNlIGlmIChzdHJldGNoLmluZGV4T2YoJ21pbkhlaWdodCcpICE9PSAtMSkge1xuICAgICAgICBzaXplU3R5bGUubWluSGVpZ2h0ID0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgfVxuICAgICAgaWYgKHN0cmV0Y2guaW5kZXhPZignd2lkdGgnKSAhPT0gLTEpIHtcbiAgICAgICAgc2l6ZVN0eWxlLndpZHRoID0gdGFyZ2V0V2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKHN0cmV0Y2guaW5kZXhPZignbWluV2lkdGgnKSAhPT0gLTEpIHtcbiAgICAgICAgc2l6ZVN0eWxlLm1pbldpZHRoID0gdGFyZ2V0V2lkdGg7XG4gICAgICB9XG5cbiAgICAgIC8vIERlbGF5IGZvcmNlIGFsaWduIHRvIG1ha2VzIHVpIHNtb290aFxuICAgICAgaWYgKCFzdHJldGNoQ2hlY2tlZCkge1xuICAgICAgICBzaXplU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMyLmFsaWduSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIF90aGlzMi5hbGlnbkluc3RhbmNlLmZvcmNlQWxpZ24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBuZXdTdHlsZSA9IF9leHRlbmRzKHt9LCBzaXplU3R5bGUsIHN0eWxlLCB0aGlzLmdldFpJbmRleFN0eWxlKCkpO1xuXG4gICAgdmFyIHBvcHVwSW5uZXJQcm9wcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICByZWY6IHNhdmVQb3B1cFJlZixcbiAgICAgIG9uTW91c2VFbnRlcjogb25Nb3VzZUVudGVyLFxuICAgICAgb25Nb3VzZUxlYXZlOiBvbk1vdXNlTGVhdmUsXG4gICAgICBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sXG4gICAgICBvblRvdWNoU3RhcnQ6IG9uVG91Y2hTdGFydCxcbiAgICAgIHN0eWxlOiBuZXdTdHlsZVxuICAgIH07XG4gICAgaWYgKGRlc3Ryb3lQb3B1cE9uSGlkZSkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEFuaW1hdGUsXG4gICAgICAgIHtcbiAgICAgICAgICBjb21wb25lbnQ6ICcnLFxuICAgICAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLFxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiB0aGlzLmdldFRyYW5zaXRpb25OYW1lKClcbiAgICAgICAgfSxcbiAgICAgICAgdmlzaWJsZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQWxpZ24sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmdldEFsaWduVGFyZ2V0KCksXG4gICAgICAgICAgICBrZXk6ICdwb3B1cCcsXG4gICAgICAgICAgICByZWY6IHRoaXMuc2F2ZUFsaWduUmVmLFxuICAgICAgICAgICAgbW9uaXRvcldpbmRvd1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFsaWduOiBhbGlnbixcbiAgICAgICAgICAgIG9uQWxpZ246IHRoaXMub25BbGlnblxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFBvcHVwSW5uZXIsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgICAgIH0sIHBvcHVwSW5uZXJQcm9wcyksXG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKSA6IG51bGxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBBbmltYXRlLFxuICAgICAge1xuICAgICAgICBjb21wb25lbnQ6ICcnLFxuICAgICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiB0aGlzLmdldFRyYW5zaXRpb25OYW1lKCksXG4gICAgICAgIHNob3dQcm9wOiAneFZpc2libGUnXG4gICAgICB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQWxpZ24sXG4gICAgICAgIHtcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMuZ2V0QWxpZ25UYXJnZXQoKSxcbiAgICAgICAgICBrZXk6ICdwb3B1cCcsXG4gICAgICAgICAgcmVmOiB0aGlzLnNhdmVBbGlnblJlZixcbiAgICAgICAgICBtb25pdG9yV2luZG93UmVzaXplOiB0cnVlLFxuICAgICAgICAgIHhWaXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICAgIGNoaWxkcmVuUHJvcHM6IHsgdmlzaWJsZTogJ3hWaXNpYmxlJyB9LFxuICAgICAgICAgIGRpc2FibGVkOiAhdmlzaWJsZSxcbiAgICAgICAgICBhbGlnbjogYWxpZ24sXG4gICAgICAgICAgb25BbGlnbjogdGhpcy5vbkFsaWduXG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgUG9wdXBJbm5lcixcbiAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBoaWRkZW5DbGFzc05hbWU6IGhpZGRlbkNsYXNzTmFtZVxuICAgICAgICAgIH0sIHBvcHVwSW5uZXJQcm9wcyksXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgUG9wdXAucHJvdG90eXBlLmdldFpJbmRleFN0eWxlID0gZnVuY3Rpb24gZ2V0WkluZGV4U3R5bGUoKSB7XG4gICAgdmFyIHN0eWxlID0ge307XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJvcHMuekluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0eWxlLnpJbmRleCA9IHByb3BzLnpJbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9O1xuXG4gIFBvcHVwLnByb3RvdHlwZS5nZXRNYXNrRWxlbWVudCA9IGZ1bmN0aW9uIGdldE1hc2tFbGVtZW50KCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG1hc2tFbGVtZW50ID0gdm9pZCAwO1xuICAgIGlmIChwcm9wcy5tYXNrKSB7XG4gICAgICB2YXIgbWFza1RyYW5zaXRpb24gPSB0aGlzLmdldE1hc2tUcmFuc2l0aW9uTmFtZSgpO1xuICAgICAgbWFza0VsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KExhenlSZW5kZXJCb3gsIHtcbiAgICAgICAgc3R5bGU6IHRoaXMuZ2V0WkluZGV4U3R5bGUoKSxcbiAgICAgICAga2V5OiAnbWFzaycsXG4gICAgICAgIGNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1tYXNrJyxcbiAgICAgICAgaGlkZGVuQ2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLW1hc2staGlkZGVuJyxcbiAgICAgICAgdmlzaWJsZTogcHJvcHMudmlzaWJsZVxuICAgICAgfSk7XG4gICAgICBpZiAobWFza1RyYW5zaXRpb24pIHtcbiAgICAgICAgbWFza0VsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEFuaW1hdGUsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnbWFzaycsXG4gICAgICAgICAgICBzaG93UHJvcDogJ3Zpc2libGUnLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbXBvbmVudDogJycsXG4gICAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogbWFza1RyYW5zaXRpb25cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1hc2tFbGVtZW50XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXNrRWxlbWVudDtcbiAgfTtcblxuICBQb3B1cC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5nZXRNYXNrRWxlbWVudCgpLFxuICAgICAgdGhpcy5nZXRQb3B1cEVsZW1lbnQoKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFBvcHVwO1xufShDb21wb25lbnQpO1xuXG5Qb3B1cC5wcm9wVHlwZXMgPSB7XG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZ2V0Q2xhc3NOYW1lRnJvbUFsaWduOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25BbGlnbjogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFJvb3REb21Ob2RlOiBQcm9wVHlwZXMuZnVuYyxcbiAgYWxpZ246IFByb3BUeXBlcy5hbnksXG4gIGRlc3Ryb3lQb3B1cE9uSGlkZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVG91Y2hTdGFydDogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0cmV0Y2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgcG9pbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGFnZVg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZVk6IFByb3BUeXBlcy5udW1iZXJcbiAgfSlcbn07XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgdGhpcy5vbkFsaWduID0gZnVuY3Rpb24gKHBvcHVwRG9tTm9kZSwgYWxpZ24pIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczMucHJvcHM7XG4gICAgdmFyIGN1cnJlbnRBbGlnbkNsYXNzTmFtZSA9IHByb3BzLmdldENsYXNzTmFtZUZyb21BbGlnbihhbGlnbik7XG4gICAgLy8gRklYOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RyaWdnZXIvaXNzdWVzLzU2XG4gICAgLy8gRklYOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3Rvb2x0aXAvaXNzdWVzLzc5XG4gICAgaWYgKF90aGlzMy5jdXJyZW50QWxpZ25DbGFzc05hbWUgIT09IGN1cnJlbnRBbGlnbkNsYXNzTmFtZSkge1xuICAgICAgX3RoaXMzLmN1cnJlbnRBbGlnbkNsYXNzTmFtZSA9IGN1cnJlbnRBbGlnbkNsYXNzTmFtZTtcbiAgICAgIHBvcHVwRG9tTm9kZS5jbGFzc05hbWUgPSBfdGhpczMuZ2V0Q2xhc3NOYW1lKGN1cnJlbnRBbGlnbkNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHByb3BzLm9uQWxpZ24ocG9wdXBEb21Ob2RlLCBhbGlnbik7XG4gIH07XG5cbiAgdGhpcy5zZXRTdHJldGNoU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IF90aGlzMy5wcm9wcyxcbiAgICAgICAgc3RyZXRjaCA9IF9wcm9wczIuc3RyZXRjaCxcbiAgICAgICAgZ2V0Um9vdERvbU5vZGUgPSBfcHJvcHMyLmdldFJvb3REb21Ob2RlLFxuICAgICAgICB2aXNpYmxlID0gX3Byb3BzMi52aXNpYmxlO1xuICAgIHZhciBfc3RhdGUyID0gX3RoaXMzLnN0YXRlLFxuICAgICAgICBzdHJldGNoQ2hlY2tlZCA9IF9zdGF0ZTIuc3RyZXRjaENoZWNrZWQsXG4gICAgICAgIHRhcmdldEhlaWdodCA9IF9zdGF0ZTIudGFyZ2V0SGVpZ2h0LFxuICAgICAgICB0YXJnZXRXaWR0aCA9IF9zdGF0ZTIudGFyZ2V0V2lkdGg7XG5cblxuICAgIGlmICghc3RyZXRjaCB8fCAhdmlzaWJsZSkge1xuICAgICAgaWYgKHN0cmV0Y2hDaGVja2VkKSB7XG4gICAgICAgIF90aGlzMy5zZXRTdGF0ZSh7IHN0cmV0Y2hDaGVja2VkOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgJGVsZSA9IGdldFJvb3REb21Ob2RlKCk7XG4gICAgaWYgKCEkZWxlKSByZXR1cm47XG5cbiAgICB2YXIgaGVpZ2h0ID0gJGVsZS5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gJGVsZS5vZmZzZXRXaWR0aDtcblxuICAgIGlmICh0YXJnZXRIZWlnaHQgIT09IGhlaWdodCB8fCB0YXJnZXRXaWR0aCAhPT0gd2lkdGggfHwgIXN0cmV0Y2hDaGVja2VkKSB7XG4gICAgICBfdGhpczMuc2V0U3RhdGUoe1xuICAgICAgICBzdHJldGNoQ2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgdGFyZ2V0SGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIHRhcmdldFdpZHRoOiB3aWR0aFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuZ2V0VGFyZ2V0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMzLnByb3BzLmdldFJvb3REb21Ob2RlKCk7XG4gIH07XG5cbiAgdGhpcy5nZXRBbGlnblRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9pbnQgPSBfdGhpczMucHJvcHMucG9pbnQ7XG5cbiAgICBpZiAocG9pbnQpIHtcbiAgICAgIHJldHVybiBwb2ludDtcbiAgICB9XG4gICAgcmV0dXJuIF90aGlzMy5nZXRUYXJnZXRFbGVtZW50O1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGZpbmRET01Ob2RlLCBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gJ3JjLXV0aWwvZXMvRG9tL2NvbnRhaW5zJztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gJ3JjLXV0aWwvZXMvRG9tL2FkZEV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IENvbnRhaW5lclJlbmRlciBmcm9tICdyYy11dGlsL2VzL0NvbnRhaW5lclJlbmRlcic7XG5pbXBvcnQgUG9ydGFsIGZyb20gJ3JjLXV0aWwvZXMvUG9ydGFsJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgeyBnZXRBbGlnbkZyb21QbGFjZW1lbnQsIGdldEFsaWduUG9wdXBDbGFzc05hbWUgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIHJldHVybkVtcHR5U3RyaW5nKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIHJldHVybkRvY3VtZW50KCkge1xuICByZXR1cm4gd2luZG93LmRvY3VtZW50O1xufVxuXG52YXIgQUxMX0hBTkRMRVJTID0gWydvbkNsaWNrJywgJ29uTW91c2VEb3duJywgJ29uVG91Y2hTdGFydCcsICdvbk1vdXNlRW50ZXInLCAnb25Nb3VzZUxlYXZlJywgJ29uRm9jdXMnLCAnb25CbHVyJywgJ29uQ29udGV4dE1lbnUnXTtcblxudmFyIElTX1JFQUNUXzE2ID0gISFjcmVhdGVQb3J0YWw7XG5cbnZhciBjb250ZXh0VHlwZXMgPSB7XG4gIHJjVHJpZ2dlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvblBvcHVwTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuY1xuICB9KVxufTtcblxudmFyIFRyaWdnZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJpZ2dlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJpZ2dlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmlnZ2VyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgIHZhciBwb3B1cFZpc2libGUgPSB2b2lkIDA7XG4gICAgaWYgKCdwb3B1cFZpc2libGUnIGluIHByb3BzKSB7XG4gICAgICBwb3B1cFZpc2libGUgPSAhIXByb3BzLnBvcHVwVmlzaWJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9wdXBWaXNpYmxlID0gISFwcm9wcy5kZWZhdWx0UG9wdXBWaXNpYmxlO1xuICAgIH1cblxuICAgIF90aGlzLnByZXZQb3B1cFZpc2libGUgPSBwb3B1cFZpc2libGU7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBvcHVwVmlzaWJsZTogcG9wdXBWaXNpYmxlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUcmlnZ2VyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJjVHJpZ2dlcjoge1xuICAgICAgICBvblBvcHVwTW91c2VEb3duOiB0aGlzLm9uUG9wdXBNb3VzZURvd25cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIEFMTF9IQU5ETEVSUy5mb3JFYWNoKGZ1bmN0aW9uIChoKSB7XG4gICAgICBfdGhpczJbJ2ZpcmUnICsgaF0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBfdGhpczIuZmlyZUV2ZW50cyhoLCBlKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSh7fSwge1xuICAgICAgcG9wdXBWaXNpYmxlOiB0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZVxuICAgIH0pO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKF9yZWYpIHtcbiAgICB2YXIgcG9wdXBWaXNpYmxlID0gX3JlZi5wb3B1cFZpc2libGU7XG5cbiAgICBpZiAocG9wdXBWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwb3B1cFZpc2libGU6IHBvcHVwVmlzaWJsZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShfLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIHRyaWdnZXJBZnRlclBvcHVwVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uIHRyaWdnZXJBZnRlclBvcHVwVmlzaWJsZUNoYW5nZSgpIHtcbiAgICAgIGlmIChwcmV2U3RhdGUucG9wdXBWaXNpYmxlICE9PSBzdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgICAgcHJvcHMuYWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2Uoc3RhdGUucG9wdXBWaXNpYmxlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmICghSVNfUkVBQ1RfMTYpIHtcbiAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KG51bGwsIHRyaWdnZXJBZnRlclBvcHVwVmlzaWJsZUNoYW5nZSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcmV2UG9wdXBWaXNpYmxlID0gcHJldlN0YXRlLnBvcHVwVmlzaWJsZTtcblxuICAgIC8vIFdlIG11c3QgbGlzdGVuIHRvIGBtb3VzZWRvd25gIG9yIGB0b3VjaHN0YXJ0YCwgZWRnZSBjYXNlOlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzU4MDRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L2NhbGVuZGFyL2lzc3Vlcy8yNTBcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RyaWdnZXIvaXNzdWVzLzUwXG4gICAgaWYgKHN0YXRlLnBvcHVwVmlzaWJsZSkge1xuICAgICAgdmFyIGN1cnJlbnREb2N1bWVudCA9IHZvaWQgMDtcbiAgICAgIGlmICghdGhpcy5jbGlja091dHNpZGVIYW5kbGVyICYmICh0aGlzLmlzQ2xpY2tUb0hpZGUoKSB8fCB0aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkpIHtcbiAgICAgICAgY3VycmVudERvY3VtZW50ID0gcHJvcHMuZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVIYW5kbGVyID0gYWRkRXZlbnRMaXN0ZW5lcihjdXJyZW50RG9jdW1lbnQsICdtb3VzZWRvd24nLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgICB9XG4gICAgICAvLyBhbHdheXMgaGlkZSBvbiBtb2JpbGVcbiAgICAgIGlmICghdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyKSB7XG4gICAgICAgIGN1cnJlbnREb2N1bWVudCA9IGN1cnJlbnREb2N1bWVudCB8fCBwcm9wcy5nZXREb2N1bWVudCgpO1xuICAgICAgICB0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIgPSBhZGRFdmVudExpc3RlbmVyKGN1cnJlbnREb2N1bWVudCwgJ3RvdWNoc3RhcnQnLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgICB9XG4gICAgICAvLyBjbG9zZSBwb3B1cCB3aGVuIHRyaWdnZXIgdHlwZSBjb250YWlucyAnb25Db250ZXh0TWVudScgYW5kIGRvY3VtZW50IGlzIHNjcm9sbGluZy5cbiAgICAgIGlmICghdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMSAmJiB0aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkge1xuICAgICAgICBjdXJyZW50RG9jdW1lbnQgPSBjdXJyZW50RG9jdW1lbnQgfHwgcHJvcHMuZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMSA9IGFkZEV2ZW50TGlzdGVuZXIoY3VycmVudERvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5vbkNvbnRleHRNZW51Q2xvc2UpO1xuICAgICAgfVxuICAgICAgLy8gY2xvc2UgcG9wdXAgd2hlbiB0cmlnZ2VyIHR5cGUgY29udGFpbnMgJ29uQ29udGV4dE1lbnUnIGFuZCB3aW5kb3cgaXMgYmx1ci5cbiAgICAgIGlmICghdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMiAmJiB0aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkge1xuICAgICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIyID0gYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdibHVyJywgdGhpcy5vbkNvbnRleHRNZW51Q2xvc2UpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2xlYXJPdXRzaWRlSGFuZGxlcigpO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICB0aGlzLmNsZWFyT3V0c2lkZUhhbmRsZXIoKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5tb3VzZURvd25UaW1lb3V0KTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5nZXRQb3B1cERvbU5vZGUgPSBmdW5jdGlvbiBnZXRQb3B1cERvbU5vZGUoKSB7XG4gICAgLy8gZm9yIHRlc3RcbiAgICBpZiAodGhpcy5fY29tcG9uZW50ICYmIHRoaXMuX2NvbXBvbmVudC5nZXRQb3B1cERvbU5vZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb21wb25lbnQuZ2V0UG9wdXBEb21Ob2RlKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmdldFBvcHVwQWxpZ24gPSBmdW5jdGlvbiBnZXRQb3B1cEFsaWduKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHBvcHVwUGxhY2VtZW50ID0gcHJvcHMucG9wdXBQbGFjZW1lbnQsXG4gICAgICAgIHBvcHVwQWxpZ24gPSBwcm9wcy5wb3B1cEFsaWduLFxuICAgICAgICBidWlsdGluUGxhY2VtZW50cyA9IHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzO1xuXG4gICAgaWYgKHBvcHVwUGxhY2VtZW50ICYmIGJ1aWx0aW5QbGFjZW1lbnRzKSB7XG4gICAgICByZXR1cm4gZ2V0QWxpZ25Gcm9tUGxhY2VtZW50KGJ1aWx0aW5QbGFjZW1lbnRzLCBwb3B1cFBsYWNlbWVudCwgcG9wdXBBbGlnbik7XG4gICAgfVxuICAgIHJldHVybiBwb3B1cEFsaWduO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gcG9wdXBWaXNpYmxlICAgIFNob3cgb3Igbm90IHRoZSBwb3B1cCBlbGVtZW50XG4gICAqIEBwYXJhbSBldmVudCAgICAgICAgICAgU3ludGhldGljRXZlbnQsIHVzZWQgZm9yIGBwb2ludEFsaWduYFxuICAgKi9cbiAgVHJpZ2dlci5wcm90b3R5cGUuc2V0UG9wdXBWaXNpYmxlID0gZnVuY3Rpb24gc2V0UG9wdXBWaXNpYmxlKHBvcHVwVmlzaWJsZSwgZXZlbnQpIHtcbiAgICB2YXIgYWxpZ25Qb2ludCA9IHRoaXMucHJvcHMuYWxpZ25Qb2ludDtcblxuXG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcblxuICAgIGlmICh0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSAhPT0gcG9wdXBWaXNpYmxlKSB7XG4gICAgICBpZiAoISgncG9wdXBWaXNpYmxlJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcG9wdXBWaXNpYmxlOiBwb3B1cFZpc2libGUgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm9uUG9wdXBWaXNpYmxlQ2hhbmdlKHBvcHVwVmlzaWJsZSk7XG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIHJlY29yZCB0aGUgcG9pbnQgcG9zaXRpb24gc2luY2UgbW91c2VFbnRlckRlbGF5IHdpbGwgZGVsYXkgdGhlIHNob3dcbiAgICBpZiAoYWxpZ25Qb2ludCAmJiBldmVudCkge1xuICAgICAgdGhpcy5zZXRQb2ludChldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmRlbGF5U2V0UG9wdXBWaXNpYmxlID0gZnVuY3Rpb24gZGVsYXlTZXRQb3B1cFZpc2libGUodmlzaWJsZSwgZGVsYXlTLCBldmVudCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGRlbGF5ID0gZGVsYXlTICogMTAwMDtcbiAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgIGlmIChkZWxheSkge1xuICAgICAgdmFyIHBvaW50ID0gZXZlbnQgPyB7IHBhZ2VYOiBldmVudC5wYWdlWCwgcGFnZVk6IGV2ZW50LnBhZ2VZIH0gOiBudWxsO1xuICAgICAgdGhpcy5kZWxheVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5zZXRQb3B1cFZpc2libGUodmlzaWJsZSwgcG9pbnQpO1xuICAgICAgICBfdGhpczMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuY2xlYXJEZWxheVRpbWVyID0gZnVuY3Rpb24gY2xlYXJEZWxheVRpbWVyKCkge1xuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xuICAgICAgdGhpcy5kZWxheVRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuY2xlYXJPdXRzaWRlSGFuZGxlciA9IGZ1bmN0aW9uIGNsZWFyT3V0c2lkZUhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlcikge1xuICAgICAgdGhpcy5jbGlja091dHNpZGVIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgdGhpcy5jbGlja091dHNpZGVIYW5kbGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMSkge1xuICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIyKSB7XG4gICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIyLnJlbW92ZSgpO1xuICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlcikge1xuICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuY3JlYXRlVHdvQ2hhaW5zID0gZnVuY3Rpb24gY3JlYXRlVHdvQ2hhaW5zKGV2ZW50KSB7XG4gICAgdmFyIGNoaWxkUHJvcyA9IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHM7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY2hpbGRQcm9zW2V2ZW50XSAmJiBwcm9wc1tldmVudF0pIHtcbiAgICAgIHJldHVybiB0aGlzWydmaXJlJyArIGV2ZW50XTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkUHJvc1tldmVudF0gfHwgcHJvcHNbZXZlbnRdO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmlzQ2xpY2tUb1Nob3cgPSBmdW5jdGlvbiBpc0NsaWNrVG9TaG93KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHMuYWN0aW9uLFxuICAgICAgICBzaG93QWN0aW9uID0gX3Byb3BzLnNob3dBY3Rpb247XG5cbiAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTE7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuaXNDb250ZXh0TWVudVRvU2hvdyA9IGZ1bmN0aW9uIGlzQ29udGV4dE1lbnVUb1Nob3coKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHMyLmFjdGlvbixcbiAgICAgICAgc2hvd0FjdGlvbiA9IF9wcm9wczIuc2hvd0FjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignY29udGV4dE1lbnUnKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdjb250ZXh0TWVudScpICE9PSAtMTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5pc0NsaWNrVG9IaWRlID0gZnVuY3Rpb24gaXNDbGlja1RvSGlkZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wczMuYWN0aW9uLFxuICAgICAgICBoaWRlQWN0aW9uID0gX3Byb3BzMy5oaWRlQWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmlzTW91c2VFbnRlclRvU2hvdyA9IGZ1bmN0aW9uIGlzTW91c2VFbnRlclRvU2hvdygpIHtcbiAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wczQuYWN0aW9uLFxuICAgICAgICBzaG93QWN0aW9uID0gX3Byb3BzNC5zaG93QWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdob3ZlcicpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ21vdXNlRW50ZXInKSAhPT0gLTE7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuaXNNb3VzZUxlYXZlVG9IaWRlID0gZnVuY3Rpb24gaXNNb3VzZUxlYXZlVG9IaWRlKCkge1xuICAgIHZhciBfcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aW9uID0gX3Byb3BzNS5hY3Rpb24sXG4gICAgICAgIGhpZGVBY3Rpb24gPSBfcHJvcHM1LmhpZGVBY3Rpb247XG5cbiAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xIHx8IGhpZGVBY3Rpb24uaW5kZXhPZignbW91c2VMZWF2ZScpICE9PSAtMTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5pc0ZvY3VzVG9TaG93ID0gZnVuY3Rpb24gaXNGb2N1c1RvU2hvdygpIHtcbiAgICB2YXIgX3Byb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wczYuYWN0aW9uLFxuICAgICAgICBzaG93QWN0aW9uID0gX3Byb3BzNi5zaG93QWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ2ZvY3VzJykgIT09IC0xO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmlzQmx1clRvSGlkZSA9IGZ1bmN0aW9uIGlzQmx1clRvSGlkZSgpIHtcbiAgICB2YXIgX3Byb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wczcuYWN0aW9uLFxuICAgICAgICBoaWRlQWN0aW9uID0gX3Byb3BzNy5oaWRlQWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ2JsdXInKSAhPT0gLTE7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuZm9yY2VQb3B1cEFsaWduID0gZnVuY3Rpb24gZm9yY2VQb3B1cEFsaWduKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZSAmJiB0aGlzLl9jb21wb25lbnQgJiYgdGhpcy5fY29tcG9uZW50LmFsaWduSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2NvbXBvbmVudC5hbGlnbkluc3RhbmNlLmZvcmNlQWxpZ24oKTtcbiAgICB9XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuZmlyZUV2ZW50cyA9IGZ1bmN0aW9uIGZpcmVFdmVudHModHlwZSwgZSkge1xuICAgIHZhciBjaGlsZENhbGxiYWNrID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wc1t0eXBlXTtcbiAgICBpZiAoY2hpbGRDYWxsYmFjaykge1xuICAgICAgY2hpbGRDYWxsYmFjayhlKTtcbiAgICB9XG4gICAgdmFyIGNhbGxiYWNrID0gdGhpcy5wcm9wc1t0eXBlXTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKGUpO1xuICAgIH1cbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0UG9wdXBWaXNpYmxlKGZhbHNlKTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgcG9wdXBWaXNpYmxlID0gdGhpcy5zdGF0ZS5wb3B1cFZpc2libGU7XG4gICAgdmFyIF9wcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczguY2hpbGRyZW4sXG4gICAgICAgIGZvcmNlUmVuZGVyID0gX3Byb3BzOC5mb3JjZVJlbmRlcixcbiAgICAgICAgYWxpZ25Qb2ludCA9IF9wcm9wczguYWxpZ25Qb2ludCxcbiAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzOC5jbGFzc05hbWU7XG5cbiAgICB2YXIgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB2YXIgbmV3Q2hpbGRQcm9wcyA9IHsga2V5OiAndHJpZ2dlcicgfTtcblxuICAgIGlmICh0aGlzLmlzQ29udGV4dE1lbnVUb1Nob3coKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNvbnRleHRNZW51ID0gdGhpcy5vbkNvbnRleHRNZW51O1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uQ29udGV4dE1lbnUgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Db250ZXh0TWVudScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ2xpY2tUb0hpZGUoKSB8fCB0aGlzLmlzQ2xpY2tUb1Nob3coKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd247XG4gICAgICBuZXdDaGlsZFByb3BzLm9uVG91Y2hTdGFydCA9IHRoaXMub25Ub3VjaFN0YXJ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uQ2xpY2sgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25DbGljaycpO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRG93biA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbk1vdXNlRG93bicpO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vblRvdWNoU3RhcnQgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Ub3VjaFN0YXJ0Jyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzTW91c2VFbnRlclRvU2hvdygpKSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IHRoaXMub25Nb3VzZUVudGVyO1xuICAgICAgaWYgKGFsaWduUG9pbnQpIHtcbiAgICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uTW91c2VFbnRlcicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc01vdXNlTGVhdmVUb0hpZGUoKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlTGVhdmUgPSB0aGlzLm9uTW91c2VMZWF2ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlTGVhdmUgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Nb3VzZUxlYXZlJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRm9jdXNUb1Nob3coKSB8fCB0aGlzLmlzQmx1clRvSGlkZSgpKSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXM7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uQmx1ciA9IHRoaXMub25CbHVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uRm9jdXMgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Gb2N1cycpO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkJsdXIgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25CbHVyJyk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhjaGlsZCAmJiBjaGlsZC5wcm9wcyAmJiBjaGlsZC5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSk7XG4gICAgaWYgKGNoaWxkcmVuQ2xhc3NOYW1lKSB7XG4gICAgICBuZXdDaGlsZFByb3BzLmNsYXNzTmFtZSA9IGNoaWxkcmVuQ2xhc3NOYW1lO1xuICAgIH1cbiAgICB2YXIgdHJpZ2dlciA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3Q2hpbGRQcm9wcyk7XG5cbiAgICBpZiAoIUlTX1JFQUNUXzE2KSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgQ29udGFpbmVyUmVuZGVyLFxuICAgICAgICB7XG4gICAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICAgIHZpc2libGU6IHBvcHVwVmlzaWJsZSxcbiAgICAgICAgICBhdXRvTW91bnQ6IGZhbHNlLFxuICAgICAgICAgIGZvcmNlUmVuZGVyOiBmb3JjZVJlbmRlcixcbiAgICAgICAgICBnZXRDb21wb25lbnQ6IHRoaXMuZ2V0Q29tcG9uZW50LFxuICAgICAgICAgIGdldENvbnRhaW5lcjogdGhpcy5nZXRDb250YWluZXJcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgdmFyIHJlbmRlckNvbXBvbmVudCA9IF9yZWYyLnJlbmRlckNvbXBvbmVudDtcblxuICAgICAgICAgIF90aGlzNC5yZW5kZXJDb21wb25lbnQgPSByZW5kZXJDb21wb25lbnQ7XG4gICAgICAgICAgcmV0dXJuIHRyaWdnZXI7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIHBvcnRhbCA9IHZvaWQgMDtcbiAgICAvLyBwcmV2ZW50IHVubW91bnRpbmcgYWZ0ZXIgaXQncyByZW5kZXJlZFxuICAgIGlmIChwb3B1cFZpc2libGUgfHwgdGhpcy5fY29tcG9uZW50IHx8IGZvcmNlUmVuZGVyKSB7XG4gICAgICBwb3J0YWwgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBQb3J0YWwsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdwb3J0YWwnLFxuICAgICAgICAgIGdldENvbnRhaW5lcjogdGhpcy5nZXRDb250YWluZXIsXG4gICAgICAgICAgZGlkVXBkYXRlOiB0aGlzLmhhbmRsZVBvcnRhbFVwZGF0ZVxuICAgICAgICB9LFxuICAgICAgICB0aGlzLmdldENvbXBvbmVudCgpXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBbdHJpZ2dlciwgcG9ydGFsXTtcbiAgfTtcblxuICByZXR1cm4gVHJpZ2dlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuVHJpZ2dlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBhY3Rpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXSksXG4gIHNob3dBY3Rpb246IFByb3BUeXBlcy5hbnksXG4gIGhpZGVBY3Rpb246IFByb3BUeXBlcy5hbnksXG4gIGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduOiBQcm9wVHlwZXMuYW55LFxuICBvblBvcHVwVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgcG9wdXA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG4gIHBvcHVwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgcG9wdXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcG9wdXBQbGFjZW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJ1aWx0aW5QbGFjZW1lbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwb3B1cFRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIHBvcHVwQW5pbWF0aW9uOiBQcm9wVHlwZXMuYW55LFxuICBtb3VzZUVudGVyRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1vdXNlTGVhdmVEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBmb2N1c0RlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBibHVyRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0RG9jdW1lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBmb3JjZVJlbmRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIGRlc3Ryb3lQb3B1cE9uSGlkZTogUHJvcFR5cGVzLmJvb2wsXG4gIG1hc2s6IFByb3BUeXBlcy5ib29sLFxuICBtYXNrQ2xvc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICBvblBvcHVwQWxpZ246IFByb3BUeXBlcy5mdW5jLFxuICBwb3B1cEFsaWduOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwb3B1cFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0UG9wdXBWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWFza1RyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIG1hc2tBbmltYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0cmV0Y2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFsaWduUG9pbnQ6IFByb3BUeXBlcy5ib29sIC8vIE1heWJlIHdlIGNhbiBzdXBwb3J0IHVzZXIgcGFzcyBwb3NpdGlvbiBpbiB0aGUgZnV0dXJlXG59O1xuVHJpZ2dlci5jb250ZXh0VHlwZXMgPSBjb250ZXh0VHlwZXM7XG5UcmlnZ2VyLmNoaWxkQ29udGV4dFR5cGVzID0gY29udGV4dFR5cGVzO1xuVHJpZ2dlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHByZWZpeENsczogJ3JjLXRyaWdnZXItcG9wdXAnLFxuICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbjogcmV0dXJuRW1wdHlTdHJpbmcsXG4gIGdldERvY3VtZW50OiByZXR1cm5Eb2N1bWVudCxcbiAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IG5vb3AsXG4gIGFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlOiBub29wLFxuICBvblBvcHVwQWxpZ246IG5vb3AsXG4gIHBvcHVwQ2xhc3NOYW1lOiAnJyxcbiAgbW91c2VFbnRlckRlbGF5OiAwLFxuICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgZm9jdXNEZWxheTogMCxcbiAgYmx1ckRlbGF5OiAwLjE1LFxuICBwb3B1cFN0eWxlOiB7fSxcbiAgZGVzdHJveVBvcHVwT25IaWRlOiBmYWxzZSxcbiAgcG9wdXBBbGlnbjoge30sXG4gIGRlZmF1bHRQb3B1cFZpc2libGU6IGZhbHNlLFxuICBtYXNrOiBmYWxzZSxcbiAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICBhY3Rpb246IFtdLFxuICBzaG93QWN0aW9uOiBbXSxcbiAgaGlkZUFjdGlvbjogW11cbn07XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgdGhpcy5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBtb3VzZUVudGVyRGVsYXkgPSBfdGhpczUucHJvcHMubW91c2VFbnRlckRlbGF5O1xuXG4gICAgX3RoaXM1LmZpcmVFdmVudHMoJ29uTW91c2VFbnRlcicsIGUpO1xuICAgIF90aGlzNS5kZWxheVNldFBvcHVwVmlzaWJsZSh0cnVlLCBtb3VzZUVudGVyRGVsYXksIG1vdXNlRW50ZXJEZWxheSA/IG51bGwgOiBlKTtcbiAgfTtcblxuICB0aGlzLm9uTW91c2VNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBfdGhpczUuZmlyZUV2ZW50cygnb25Nb3VzZU1vdmUnLCBlKTtcbiAgICBfdGhpczUuc2V0UG9pbnQoZSk7XG4gIH07XG5cbiAgdGhpcy5vbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvbk1vdXNlTGVhdmUnLCBlKTtcbiAgICBfdGhpczUuZGVsYXlTZXRQb3B1cFZpc2libGUoZmFsc2UsIF90aGlzNS5wcm9wcy5tb3VzZUxlYXZlRGVsYXkpO1xuICB9O1xuXG4gIHRoaXMub25Qb3B1cE1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXM1LmNsZWFyRGVsYXlUaW1lcigpO1xuICB9O1xuXG4gIHRoaXMub25Qb3B1cE1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdHJpZ2dlci9wdWxsLzEzXG4gICAgLy8gcmVhY3QgYnVnP1xuICAgIGlmIChlLnJlbGF0ZWRUYXJnZXQgJiYgIWUucmVsYXRlZFRhcmdldC5zZXRUaW1lb3V0ICYmIF90aGlzNS5fY29tcG9uZW50ICYmIF90aGlzNS5fY29tcG9uZW50LmdldFBvcHVwRG9tTm9kZSAmJiBjb250YWlucyhfdGhpczUuX2NvbXBvbmVudC5nZXRQb3B1cERvbU5vZGUoKSwgZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfdGhpczUuZGVsYXlTZXRQb3B1cFZpc2libGUoZmFsc2UsIF90aGlzNS5wcm9wcy5tb3VzZUxlYXZlRGVsYXkpO1xuICB9O1xuXG4gIHRoaXMub25Gb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgX3RoaXM1LmZpcmVFdmVudHMoJ29uRm9jdXMnLCBlKTtcbiAgICAvLyBpbmNhc2UgZm9jdXNpbiBhbmQgZm9jdXNvdXRcbiAgICBfdGhpczUuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgaWYgKF90aGlzNS5pc0ZvY3VzVG9TaG93KCkpIHtcbiAgICAgIF90aGlzNS5mb2N1c1RpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgX3RoaXM1LmRlbGF5U2V0UG9wdXBWaXNpYmxlKHRydWUsIF90aGlzNS5wcm9wcy5mb2N1c0RlbGF5KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgX3RoaXM1LmZpcmVFdmVudHMoJ29uTW91c2VEb3duJywgZSk7XG4gICAgX3RoaXM1LnByZUNsaWNrVGltZSA9IERhdGUubm93KCk7XG4gIH07XG5cbiAgdGhpcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvblRvdWNoU3RhcnQnLCBlKTtcbiAgICBfdGhpczUucHJlVG91Y2hUaW1lID0gRGF0ZS5ub3coKTtcbiAgfTtcblxuICB0aGlzLm9uQmx1ciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgX3RoaXM1LmZpcmVFdmVudHMoJ29uQmx1cicsIGUpO1xuICAgIF90aGlzNS5jbGVhckRlbGF5VGltZXIoKTtcbiAgICBpZiAoX3RoaXM1LmlzQmx1clRvSGlkZSgpKSB7XG4gICAgICBfdGhpczUuZGVsYXlTZXRQb3B1cFZpc2libGUoZmFsc2UsIF90aGlzNS5wcm9wcy5ibHVyRGVsYXkpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uQ29udGV4dE1lbnUgPSBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBfdGhpczUuZmlyZUV2ZW50cygnb25Db250ZXh0TWVudScsIGUpO1xuICAgIF90aGlzNS5zZXRQb3B1cFZpc2libGUodHJ1ZSwgZSk7XG4gIH07XG5cbiAgdGhpcy5vbkNvbnRleHRNZW51Q2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKF90aGlzNS5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgIF90aGlzNS5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBfdGhpczUuZmlyZUV2ZW50cygnb25DbGljaycsIGV2ZW50KTtcbiAgICAvLyBmb2N1cyB3aWxsIHRyaWdnZXIgY2xpY2tcbiAgICBpZiAoX3RoaXM1LmZvY3VzVGltZSkge1xuICAgICAgdmFyIHByZVRpbWUgPSB2b2lkIDA7XG4gICAgICBpZiAoX3RoaXM1LnByZUNsaWNrVGltZSAmJiBfdGhpczUucHJlVG91Y2hUaW1lKSB7XG4gICAgICAgIHByZVRpbWUgPSBNYXRoLm1pbihfdGhpczUucHJlQ2xpY2tUaW1lLCBfdGhpczUucHJlVG91Y2hUaW1lKTtcbiAgICAgIH0gZWxzZSBpZiAoX3RoaXM1LnByZUNsaWNrVGltZSkge1xuICAgICAgICBwcmVUaW1lID0gX3RoaXM1LnByZUNsaWNrVGltZTtcbiAgICAgIH0gZWxzZSBpZiAoX3RoaXM1LnByZVRvdWNoVGltZSkge1xuICAgICAgICBwcmVUaW1lID0gX3RoaXM1LnByZVRvdWNoVGltZTtcbiAgICAgIH1cbiAgICAgIGlmIChNYXRoLmFicyhwcmVUaW1lIC0gX3RoaXM1LmZvY3VzVGltZSkgPCAyMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpczUuZm9jdXNUaW1lID0gMDtcbiAgICB9XG4gICAgX3RoaXM1LnByZUNsaWNrVGltZSA9IDA7XG4gICAgX3RoaXM1LnByZVRvdWNoVGltZSA9IDA7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB2YXIgbmV4dFZpc2libGUgPSAhX3RoaXM1LnN0YXRlLnBvcHVwVmlzaWJsZTtcbiAgICBpZiAoX3RoaXM1LmlzQ2xpY2tUb0hpZGUoKSAmJiAhbmV4dFZpc2libGUgfHwgbmV4dFZpc2libGUgJiYgX3RoaXM1LmlzQ2xpY2tUb1Nob3coKSkge1xuICAgICAgX3RoaXM1LnNldFBvcHVwVmlzaWJsZSghX3RoaXM1LnN0YXRlLnBvcHVwVmlzaWJsZSwgZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uUG9wdXBNb3VzZURvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9jb250ZXh0JHJjVHJpZ2dlciA9IF90aGlzNS5jb250ZXh0LnJjVHJpZ2dlcixcbiAgICAgICAgcmNUcmlnZ2VyID0gX2NvbnRleHQkcmNUcmlnZ2VyID09PSB1bmRlZmluZWQgPyB7fSA6IF9jb250ZXh0JHJjVHJpZ2dlcjtcblxuICAgIF90aGlzNS5oYXNQb3B1cE1vdXNlRG93biA9IHRydWU7XG5cbiAgICBjbGVhclRpbWVvdXQoX3RoaXM1Lm1vdXNlRG93blRpbWVvdXQpO1xuICAgIF90aGlzNS5tb3VzZURvd25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczUuaGFzUG9wdXBNb3VzZURvd24gPSBmYWxzZTtcbiAgICB9LCAwKTtcblxuICAgIGlmIChyY1RyaWdnZXIub25Qb3B1cE1vdXNlRG93bikge1xuICAgICAgcmNUcmlnZ2VyLm9uUG9wdXBNb3VzZURvd24uYXBwbHkocmNUcmlnZ2VyLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uRG9jdW1lbnRDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChfdGhpczUucHJvcHMubWFzayAmJiAhX3RoaXM1LnByb3BzLm1hc2tDbG9zYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIHJvb3QgPSBmaW5kRE9NTm9kZShfdGhpczUpO1xuICAgIGlmICghY29udGFpbnMocm9vdCwgdGFyZ2V0KSAmJiAhX3RoaXM1Lmhhc1BvcHVwTW91c2VEb3duKSB7XG4gICAgICBfdGhpczUuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5nZXRSb290RG9tTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmluZERPTU5vZGUoX3RoaXM1KTtcbiAgfTtcblxuICB0aGlzLmdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduID0gZnVuY3Rpb24gKGFsaWduKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IFtdO1xuICAgIHZhciBfcHJvcHM5ID0gX3RoaXM1LnByb3BzLFxuICAgICAgICBwb3B1cFBsYWNlbWVudCA9IF9wcm9wczkucG9wdXBQbGFjZW1lbnQsXG4gICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzID0gX3Byb3BzOS5idWlsdGluUGxhY2VtZW50cyxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzOS5wcmVmaXhDbHMsXG4gICAgICAgIGFsaWduUG9pbnQgPSBfcHJvcHM5LmFsaWduUG9pbnQsXG4gICAgICAgIGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduID0gX3Byb3BzOS5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbjtcblxuICAgIGlmIChwb3B1cFBsYWNlbWVudCAmJiBidWlsdGluUGxhY2VtZW50cykge1xuICAgICAgY2xhc3NOYW1lLnB1c2goZ2V0QWxpZ25Qb3B1cENsYXNzTmFtZShidWlsdGluUGxhY2VtZW50cywgcHJlZml4Q2xzLCBhbGlnbiwgYWxpZ25Qb2ludCkpO1xuICAgIH1cbiAgICBpZiAoZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24pIHtcbiAgICAgIGNsYXNzTmFtZS5wdXNoKGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduKGFsaWduKSk7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc05hbWUuam9pbignICcpO1xuICB9O1xuXG4gIHRoaXMuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcHJvcHMxMCA9IF90aGlzNS5wcm9wcyxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzMTAucHJlZml4Q2xzLFxuICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGUgPSBfcHJvcHMxMC5kZXN0cm95UG9wdXBPbkhpZGUsXG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lID0gX3Byb3BzMTAucG9wdXBDbGFzc05hbWUsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wczEwLmFjdGlvbixcbiAgICAgICAgb25Qb3B1cEFsaWduID0gX3Byb3BzMTAub25Qb3B1cEFsaWduLFxuICAgICAgICBwb3B1cEFuaW1hdGlvbiA9IF9wcm9wczEwLnBvcHVwQW5pbWF0aW9uLFxuICAgICAgICBwb3B1cFRyYW5zaXRpb25OYW1lID0gX3Byb3BzMTAucG9wdXBUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgcG9wdXBTdHlsZSA9IF9wcm9wczEwLnBvcHVwU3R5bGUsXG4gICAgICAgIG1hc2sgPSBfcHJvcHMxMC5tYXNrLFxuICAgICAgICBtYXNrQW5pbWF0aW9uID0gX3Byb3BzMTAubWFza0FuaW1hdGlvbixcbiAgICAgICAgbWFza1RyYW5zaXRpb25OYW1lID0gX3Byb3BzMTAubWFza1RyYW5zaXRpb25OYW1lLFxuICAgICAgICB6SW5kZXggPSBfcHJvcHMxMC56SW5kZXgsXG4gICAgICAgIHBvcHVwID0gX3Byb3BzMTAucG9wdXAsXG4gICAgICAgIHN0cmV0Y2ggPSBfcHJvcHMxMC5zdHJldGNoLFxuICAgICAgICBhbGlnblBvaW50ID0gX3Byb3BzMTAuYWxpZ25Qb2ludDtcbiAgICB2YXIgX3N0YXRlID0gX3RoaXM1LnN0YXRlLFxuICAgICAgICBwb3B1cFZpc2libGUgPSBfc3RhdGUucG9wdXBWaXNpYmxlLFxuICAgICAgICBwb2ludCA9IF9zdGF0ZS5wb2ludDtcblxuXG4gICAgdmFyIGFsaWduID0gX3RoaXM1LmdldFBvcHVwQWxpZ24oKTtcblxuICAgIHZhciBtb3VzZVByb3BzID0ge307XG4gICAgaWYgKF90aGlzNS5pc01vdXNlRW50ZXJUb1Nob3coKSkge1xuICAgICAgbW91c2VQcm9wcy5vbk1vdXNlRW50ZXIgPSBfdGhpczUub25Qb3B1cE1vdXNlRW50ZXI7XG4gICAgfVxuICAgIGlmIChfdGhpczUuaXNNb3VzZUxlYXZlVG9IaWRlKCkpIHtcbiAgICAgIG1vdXNlUHJvcHMub25Nb3VzZUxlYXZlID0gX3RoaXM1Lm9uUG9wdXBNb3VzZUxlYXZlO1xuICAgIH1cblxuICAgIG1vdXNlUHJvcHMub25Nb3VzZURvd24gPSBfdGhpczUub25Qb3B1cE1vdXNlRG93bjtcbiAgICBtb3VzZVByb3BzLm9uVG91Y2hTdGFydCA9IF90aGlzNS5vblBvcHVwTW91c2VEb3duO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBQb3B1cCxcbiAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGRlc3Ryb3lQb3B1cE9uSGlkZTogZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgICB2aXNpYmxlOiBwb3B1cFZpc2libGUsXG4gICAgICAgIHBvaW50OiBhbGlnblBvaW50ICYmIHBvaW50LFxuICAgICAgICBjbGFzc05hbWU6IHBvcHVwQ2xhc3NOYW1lLFxuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgYWxpZ246IGFsaWduLFxuICAgICAgICBvbkFsaWduOiBvblBvcHVwQWxpZ24sXG4gICAgICAgIGFuaW1hdGlvbjogcG9wdXBBbmltYXRpb24sXG4gICAgICAgIGdldENsYXNzTmFtZUZyb21BbGlnbjogX3RoaXM1LmdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduXG4gICAgICB9LCBtb3VzZVByb3BzLCB7XG4gICAgICAgIHN0cmV0Y2g6IHN0cmV0Y2gsXG4gICAgICAgIGdldFJvb3REb21Ob2RlOiBfdGhpczUuZ2V0Um9vdERvbU5vZGUsXG4gICAgICAgIHN0eWxlOiBwb3B1cFN0eWxlLFxuICAgICAgICBtYXNrOiBtYXNrLFxuICAgICAgICB6SW5kZXg6IHpJbmRleCxcbiAgICAgICAgdHJhbnNpdGlvbk5hbWU6IHBvcHVwVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIG1hc2tBbmltYXRpb246IG1hc2tBbmltYXRpb24sXG4gICAgICAgIG1hc2tUcmFuc2l0aW9uTmFtZTogbWFza1RyYW5zaXRpb25OYW1lLFxuICAgICAgICByZWY6IF90aGlzNS5zYXZlUG9wdXBcbiAgICAgIH0pLFxuICAgICAgdHlwZW9mIHBvcHVwID09PSAnZnVuY3Rpb24nID8gcG9wdXAoKSA6IHBvcHVwXG4gICAgKTtcbiAgfTtcblxuICB0aGlzLmdldENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczUucHJvcHM7XG5cbiAgICB2YXIgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBNYWtlIHN1cmUgZGVmYXVsdCBwb3B1cCBjb250YWluZXIgd2lsbCBuZXZlciBjYXVzZSBzY3JvbGxiYXIgYXBwZWFyaW5nXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL2lzc3Vlcy80MVxuICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBwb3B1cENvbnRhaW5lci5zdHlsZS50b3AgPSAnMCc7XG4gICAgcG9wdXBDb250YWluZXIuc3R5bGUubGVmdCA9ICcwJztcbiAgICBwb3B1cENvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICB2YXIgbW91bnROb2RlID0gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIgPyBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcihmaW5kRE9NTm9kZShfdGhpczUpKSA6IHByb3BzLmdldERvY3VtZW50KCkuYm9keTtcbiAgICBtb3VudE5vZGUuYXBwZW5kQ2hpbGQocG9wdXBDb250YWluZXIpO1xuICAgIHJldHVybiBwb3B1cENvbnRhaW5lcjtcbiAgfTtcblxuICB0aGlzLnNldFBvaW50ID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgdmFyIGFsaWduUG9pbnQgPSBfdGhpczUucHJvcHMuYWxpZ25Qb2ludDtcblxuICAgIGlmICghYWxpZ25Qb2ludCB8fCAhcG9pbnQpIHJldHVybjtcblxuICAgIF90aGlzNS5zZXRTdGF0ZSh7XG4gICAgICBwb2ludDoge1xuICAgICAgICBwYWdlWDogcG9pbnQucGFnZVgsXG4gICAgICAgIHBhZ2VZOiBwb2ludC5wYWdlWVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuaGFuZGxlUG9ydGFsVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpczUucHJldlBvcHVwVmlzaWJsZSAhPT0gX3RoaXM1LnN0YXRlLnBvcHVwVmlzaWJsZSkge1xuICAgICAgX3RoaXM1LnByb3BzLmFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlKF90aGlzNS5zdGF0ZS5wb3B1cFZpc2libGUpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnNhdmVQb3B1cCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgX3RoaXM1Ll9jb21wb25lbnQgPSBub2RlO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJpZ2dlcjsiXSwibmFtZXMiOlsiUmVhY3RET00iLCJfZXh0ZW5kcyIsInNldFRyYW5zZm9ybSIsImlzV2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiX2luaXRpYWxpc2VQcm9wcyIsImNsYXNzTmFtZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR2UsU0FBUyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7O0VBRTFFLElBQUksUUFB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V0FBVyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7Q0FDckc7O0FBRUQsU0FBUyxPQUFPLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7RUFDbkQsT0FBTyxXQUFXLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7Q0FDcEc7O0FBRUQsU0FBUyxlQUFlLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7RUFDM0QsT0FBTyxXQUFXLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7Q0FDckc7O0FBRUQsU0FBUyxlQUFlLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7RUFDM0QsT0FBTyxXQUFXLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7Q0FDcEc7O0FBRUQsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7RUFDOUIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0VBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUU7SUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsRUFBRTtNQUNuQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNmLENBQUMsQ0FBQyxDQUFDO0dBQ0wsQ0FBQyxDQUFDO0VBQ0gsT0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFRCxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUUs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
