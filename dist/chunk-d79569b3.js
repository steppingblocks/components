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

export { lib as l, lib as s };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmstZDc5NTY5YjMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9kb20tc2Nyb2xsLWludG8tdmlldy9saWIvdXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kb20tc2Nyb2xsLWludG8tdmlldy9saWIvZG9tLXNjcm9sbC1pbnRvLXZpZXcuanMiLCIuLi9ub2RlX21vZHVsZXMvZG9tLXNjcm9sbC1pbnRvLXZpZXcvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBSRV9OVU0gPSAvW1xcLStdPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdW1xcLStdP1xcZCt8KS8uc291cmNlO1xuXG5mdW5jdGlvbiBnZXRDbGllbnRQb3NpdGlvbihlbGVtKSB7XG4gIHZhciBib3ggPSB1bmRlZmluZWQ7XG4gIHZhciB4ID0gdW5kZWZpbmVkO1xuICB2YXIgeSA9IHVuZGVmaW5lZDtcbiAgdmFyIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIGRvY0VsZW0gPSBkb2MgJiYgZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgLy8g5qC55o2uIEdCUyDmnIDmlrDmlbDmja7vvIxBLUdyYWRlIEJyb3dzZXJzIOmDveW3suaUr+aMgSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qg5pa55rOV77yM5LiN55So5YaN6ICD6JmR5Lyg57uf55qE5a6e546w5pa55byPXG4gIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgLy8g5rOo77yaalF1ZXJ5IOi/mOiAg+iZkeWHj+WOuyBkb2NFbGVtLmNsaWVudExlZnQvY2xpZW50VG9wXG4gIC8vIOS9hua1i+ivleWPkeeOsO+8jOi/meagt+WPjeiAjOS8muWvvOiHtOW9kyBodG1sIOWSjCBib2R5IOaciei+uei3nS/ovrnmoYbmoLflvI/ml7bvvIzojrflj5bnmoTlgLzkuI3mraPnoa5cbiAgLy8g5q2k5aSW77yMaWU2IOS8muW/veeVpSBodG1sIOeahCBtYXJnaW4g5YC877yM5bm46L+Q5Zyw5piv5rKh5pyJ6LCB5Lya5Y676K6+572uIGh0bWwg55qEIG1hcmdpblxuXG4gIHggPSBib3gubGVmdDtcbiAgeSA9IGJveC50b3A7XG5cbiAgLy8gSW4gSUUsIG1vc3Qgb2YgdGhlIHRpbWUsIDIgZXh0cmEgcGl4ZWxzIGFyZSBhZGRlZCB0byB0aGUgdG9wIGFuZCBsZWZ0XG4gIC8vIGR1ZSB0byB0aGUgaW1wbGljaXQgMi1waXhlbCBpbnNldCBib3JkZXIuICBJbiBJRTYvNyBxdWlya3MgbW9kZSBhbmRcbiAgLy8gSUU2IHN0YW5kYXJkcyBtb2RlLCB0aGlzIGJvcmRlciBjYW4gYmUgb3ZlcnJpZGRlbiBieSBzZXR0aW5nIHRoZVxuICAvLyBkb2N1bWVudCBlbGVtZW50J3MgYm9yZGVyIHRvIHplcm8gLS0gdGh1cywgd2UgY2Fubm90IHJlbHkgb24gdGhlXG4gIC8vIG9mZnNldCBhbHdheXMgYmVpbmcgMiBwaXhlbHMuXG5cbiAgLy8gSW4gcXVpcmtzIG1vZGUsIHRoZSBvZmZzZXQgY2FuIGJlIGRldGVybWluZWQgYnkgcXVlcnlpbmcgdGhlIGJvZHknc1xuICAvLyBjbGllbnRMZWZ0L2NsaWVudFRvcCwgYnV0IGluIHN0YW5kYXJkcyBtb2RlLCBpdCBpcyBmb3VuZCBieSBxdWVyeWluZ1xuICAvLyB0aGUgZG9jdW1lbnQgZWxlbWVudCdzIGNsaWVudExlZnQvY2xpZW50VG9wLiAgU2luY2Ugd2UgYWxyZWFkeSBjYWxsZWRcbiAgLy8gZ2V0Q2xpZW50Qm91bmRpbmdSZWN0IHdlIGhhdmUgYWxyZWFkeSBmb3JjZWQgYSByZWZsb3csIHNvIGl0IGlzIG5vdFxuICAvLyB0b28gZXhwZW5zaXZlIGp1c3QgdG8gcXVlcnkgdGhlbSBhbGwuXG5cbiAgLy8gaWUg5LiL5bqU6K+l5YeP5Y6756qX5Y+j55qE6L655qGG5ZCn77yM5q+V56uf6buY6K6kIGFic29sdXRlIOmDveaYr+ebuOWvueeql+WPo+WumuS9jeeahFxuICAvLyDnqpflj6PovrnmoYbmoIflh4bmmK/orr4gZG9jdW1lbnRFbGVtZW50ICxxdWlya3Mg5pe26K6+572uIGJvZHlcbiAgLy8g5pyA5aW956aB5q2i5ZyoIGJvZHkg5ZKMIGh0bWwg5LiK6L655qGGIO+8jOS9hiBpZSA8IDkgaHRtbCDpu5jorqTmnIkgMnB4IO+8jOWHj+WOu1xuICAvLyDkvYbmmK/pnZ4gaWUg5LiN5Y+v6IO96K6+572u56qX5Y+j6L655qGG77yMYm9keSBodG1sIOS5n+S4jeaYr+eql+WPoyAsaWUg5Y+v5Lul6YCa6L+HIGh0bWwsYm9keSDorr7nva5cbiAgLy8g5qCH5YeGIGllIOS4iyBkb2NFbGVtLmNsaWVudFRvcCDlsLHmmK8gYm9yZGVyLXRvcFxuICAvLyBpZTcgaHRtbCDljbPnqpflj6PovrnmoYbmlLnlj5jkuI3kuobjgILmsLjov5zkuLogMlxuICAvLyDkvYbmoIflh4YgZmlyZWZveC9jaHJvbWUvaWU5IOS4iyBkb2NFbGVtLmNsaWVudFRvcCDmmK/nqpflj6PovrnmoYbvvIzljbPkvb/orr7kuoYgYm9yZGVyLXRvcCDkuZ/kuLogMFxuXG4gIHggLT0gZG9jRWxlbS5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICB5IC09IGRvY0VsZW0uY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4LFxuICAgIHRvcDogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGwodywgdG9wKSB7XG4gIHZhciByZXQgPSB3WydwYWdlJyArICh0b3AgPyAnWScgOiAnWCcpICsgJ09mZnNldCddO1xuICB2YXIgbWV0aG9kID0gJ3Njcm9sbCcgKyAodG9wID8gJ1RvcCcgOiAnTGVmdCcpO1xuICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICB2YXIgZCA9IHcuZG9jdW1lbnQ7XG4gICAgLy8gaWU2LDcsOCBzdGFuZGFyZCBtb2RlXG4gICAgcmV0ID0gZC5kb2N1bWVudEVsZW1lbnRbbWV0aG9kXTtcbiAgICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICAgIC8vIHF1aXJrcyBtb2RlXG4gICAgICByZXQgPSBkLmJvZHlbbWV0aG9kXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodyk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCh3KSB7XG4gIHJldHVybiBnZXRTY3JvbGwodywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICB2YXIgcG9zID0gZ2V0Q2xpZW50UG9zaXRpb24oZWwpO1xuICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcbiAgdmFyIHcgPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgcG9zLmxlZnQgKz0gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgcG9zLnRvcCArPSBnZXRTY3JvbGxUb3Aodyk7XG4gIHJldHVybiBwb3M7XG59XG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBuYW1lLCBjb21wdXRlZFN0eWxlXykge1xuICB2YXIgdmFsID0gJyc7XG4gIHZhciBkID0gZWxlbS5vd25lckRvY3VtZW50O1xuICB2YXIgY29tcHV0ZWRTdHlsZSA9IGNvbXB1dGVkU3R5bGVfIHx8IGQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKTtcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20va2lzc3l0ZWFtL2tpc3N5L2lzc3Vlcy82MVxuICBpZiAoY29tcHV0ZWRTdHlsZSkge1xuICAgIHZhbCA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSB8fCBjb21wdXRlZFN0eWxlW25hbWVdO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIF9SRV9OVU1fTk9fUFggPSBuZXcgUmVnRXhwKCdeKCcgKyBSRV9OVU0gKyAnKSg/IXB4KVthLXolXSskJywgJ2knKTtcbnZhciBSRV9QT1MgPSAvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC87XG52YXIgQ1VSUkVOVF9TVFlMRSA9ICdjdXJyZW50U3R5bGUnO1xudmFyIFJVTlRJTUVfU1RZTEUgPSAncnVudGltZVN0eWxlJztcbnZhciBMRUZUID0gJ2xlZnQnO1xudmFyIFBYID0gJ3B4JztcblxuZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGVJRShlbGVtLCBuYW1lKSB7XG4gIC8vIGN1cnJlbnRTdHlsZSBtYXliZSBudWxsXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNTIzMS5hc3B4XG4gIHZhciByZXQgPSBlbGVtW0NVUlJFTlRfU1RZTEVdICYmIGVsZW1bQ1VSUkVOVF9TVFlMRV1bbmFtZV07XG5cbiAgLy8g5b2TIHdpZHRoL2hlaWdodCDorr7nva7kuLrnmb7liIbmr5Tml7bvvIzpgJrov4cgcGl4ZWxMZWZ0IOaWueW8j+i9rOaNoueahCB3aWR0aC9oZWlnaHQg5YC8XG4gIC8vIOS4gOW8gOWni+WwseWkhOeQhuS6hiEgQ1VTVE9NX1NUWUxFLmhlaWdodCxDVVNUT01fU1RZTEUud2lkdGggLGNzc0hvb2sg6Kej5YazQDIwMTEtMDgtMTlcbiAgLy8g5ZyoIGllIOS4i+S4jeWvue+8jOmcgOimgeebtOaOpeeUqCBvZmZzZXQg5pa55byPXG4gIC8vIGJvcmRlcldpZHRoIOetieWAvOS5n+aciemXrumimO+8jOS9huiAg+iZkeWIsCBib3JkZXJXaWR0aCDorr7kuLrnmb7liIbmr5TnmoTmpoLnjoflvojlsI/vvIzov5nph4zlsLHkuI3ogIPomZHkuoZcblxuICAvLyBGcm9tIHRoZSBhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXG4gIC8vIGh0dHA6Ly9lcmlrLmVhZS5uZXQvYXJjaGl2ZXMvMjAwNy8wNy8yNy8xOC41NC4xNS8jY29tbWVudC0xMDIyOTFcbiAgLy8gSWYgd2UncmUgbm90IGRlYWxpbmcgd2l0aCBhIHJlZ3VsYXIgcGl4ZWwgbnVtYmVyXG4gIC8vIGJ1dCBhIG51bWJlciB0aGF0IGhhcyBhIHdlaXJkIGVuZGluZywgd2UgbmVlZCB0byBjb252ZXJ0IGl0IHRvIHBpeGVsc1xuICAvLyBleGNsdWRlIGxlZnQgcmlnaHQgZm9yIHJlbGF0aXZpdHlcbiAgaWYgKF9SRV9OVU1fTk9fUFgudGVzdChyZXQpICYmICFSRV9QT1MudGVzdChuYW1lKSkge1xuICAgIC8vIFJlbWVtYmVyIHRoZSBvcmlnaW5hbCB2YWx1ZXNcbiAgICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICAgIHZhciBsZWZ0ID0gc3R5bGVbTEVGVF07XG4gICAgdmFyIHJzTGVmdCA9IGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF07XG5cbiAgICAvLyBwcmV2ZW50IGZsYXNoaW5nIG9mIGNvbnRlbnRcbiAgICBlbGVtW1JVTlRJTUVfU1RZTEVdW0xFRlRdID0gZWxlbVtDVVJSRU5UX1NUWUxFXVtMRUZUXTtcblxuICAgIC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcbiAgICBzdHlsZVtMRUZUXSA9IG5hbWUgPT09ICdmb250U2l6ZScgPyAnMWVtJyA6IHJldCB8fCAwO1xuICAgIHJldCA9IHN0eWxlLnBpeGVsTGVmdCArIFBYO1xuXG4gICAgLy8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuICAgIHN0eWxlW0xFRlRdID0gbGVmdDtcblxuICAgIGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF0gPSByc0xlZnQ7XG4gIH1cbiAgcmV0dXJuIHJldCA9PT0gJycgPyAnYXV0bycgOiByZXQ7XG59XG5cbnZhciBnZXRDb21wdXRlZFN0eWxlWCA9IHVuZGVmaW5lZDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBnZXRDb21wdXRlZFN0eWxlWCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gX2dldENvbXB1dGVkU3R5bGUgOiBfZ2V0Q29tcHV0ZWRTdHlsZUlFO1xufVxuXG5mdW5jdGlvbiBlYWNoKGFyciwgZm4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBmbihhcnJbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQm9yZGVyQm94Rm4oZWxlbSkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgJ2JveFNpemluZycpID09PSAnYm9yZGVyLWJveCc7XG59XG5cbnZhciBCT1hfTU9ERUxTID0gWydtYXJnaW4nLCAnYm9yZGVyJywgJ3BhZGRpbmcnXTtcbnZhciBDT05URU5UX0lOREVYID0gLTE7XG52YXIgUEFERElOR19JTkRFWCA9IDI7XG52YXIgQk9SREVSX0lOREVYID0gMTtcbnZhciBNQVJHSU5fSU5ERVggPSAwO1xuXG5mdW5jdGlvbiBzd2FwKGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBvbGQgPSB7fTtcbiAgdmFyIHN0eWxlID0gZWxlbS5zdHlsZTtcbiAgdmFyIG5hbWUgPSB1bmRlZmluZWQ7XG5cbiAgLy8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIG9sZFtuYW1lXSA9IHN0eWxlW25hbWVdO1xuICAgICAgc3R5bGVbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxiYWNrLmNhbGwoZWxlbSk7XG5cbiAgLy8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXG4gIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHN0eWxlW25hbWVdID0gb2xkW25hbWVdO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQQk1XaWR0aChlbGVtLCBwcm9wcywgd2hpY2gpIHtcbiAgdmFyIHZhbHVlID0gMDtcbiAgdmFyIHByb3AgPSB1bmRlZmluZWQ7XG4gIHZhciBqID0gdW5kZWZpbmVkO1xuICB2YXIgaSA9IHVuZGVmaW5lZDtcbiAgZm9yIChqID0gMDsgaiA8IHByb3BzLmxlbmd0aDsgaisrKSB7XG4gICAgcHJvcCA9IHByb3BzW2pdO1xuICAgIGlmIChwcm9wKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgd2hpY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNzc1Byb3AgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChwcm9wID09PSAnYm9yZGVyJykge1xuICAgICAgICAgIGNzc1Byb3AgPSBwcm9wICsgd2hpY2hbaV0gKyAnV2lkdGgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNzc1Byb3AgPSBwcm9wICsgd2hpY2hbaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKz0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlWChlbGVtLCBjc3NQcm9wKSkgfHwgMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIEEgY3J1ZGUgd2F5IG9mIGRldGVybWluaW5nIGlmIGFuIG9iamVjdCBpcyBhIHdpbmRvd1xuICogQG1lbWJlciB1dGlsXG4gKi9cbmZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAvLyBtdXN0IHVzZSA9PSBmb3IgaWU4XG4gIC8qIGVzbGludCBlcWVxZXE6MCAqL1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqID09IG9iai53aW5kb3c7XG59XG5cbnZhciBkb21VdGlscyA9IHt9O1xuXG5lYWNoKFsnV2lkdGgnLCAnSGVpZ2h0J10sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRvbVV0aWxzWydkb2MnICsgbmFtZV0gPSBmdW5jdGlvbiAocmVmV2luKSB7XG4gICAgdmFyIGQgPSByZWZXaW4uZG9jdW1lbnQ7XG4gICAgcmV0dXJuIE1hdGgubWF4KFxuICAgIC8vIGZpcmVmb3ggY2hyb21lIGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ8IGJvZHkuc2Nyb2xsSGVpZ2h0XG4gICAgLy8gaWUgc3RhbmRhcmQgbW9kZSA6IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ+IGJvZHkuc2Nyb2xsSGVpZ2h0XG4gICAgZC5kb2N1bWVudEVsZW1lbnRbJ3Njcm9sbCcgKyBuYW1lXSxcbiAgICAvLyBxdWlya3MgOiBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IOacgOWkp+etieS6juWPr+inhueql+WPo+WkmuS4gOeCue+8n1xuICAgIGQuYm9keVsnc2Nyb2xsJyArIG5hbWVdLCBkb21VdGlsc1sndmlld3BvcnQnICsgbmFtZV0oZCkpO1xuICB9O1xuXG4gIGRvbVV0aWxzWyd2aWV3cG9ydCcgKyBuYW1lXSA9IGZ1bmN0aW9uICh3aW4pIHtcbiAgICAvLyBwYyBicm93c2VyIGluY2x1ZGVzIHNjcm9sbGJhciBpbiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHZhciBwcm9wID0gJ2NsaWVudCcgKyBuYW1lO1xuICAgIHZhciBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gICAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50UHJvcCA9IGRvY3VtZW50RWxlbWVudFtwcm9wXTtcbiAgICAvLyDmoIflh4bmqKHlvI/lj5YgZG9jdW1lbnRFbGVtZW50XG4gICAgLy8gYmFja2NvbXBhdCDlj5YgYm9keVxuICAgIHJldHVybiBkb2MuY29tcGF0TW9kZSA9PT0gJ0NTUzFDb21wYXQnICYmIGRvY3VtZW50RWxlbWVudFByb3AgfHwgYm9keSAmJiBib2R5W3Byb3BdIHx8IGRvY3VtZW50RWxlbWVudFByb3A7XG4gIH07XG59KTtcblxuLypcbiDlvpfliLDlhYPntKDnmoTlpKflsI/kv6Hmga9cbiBAcGFyYW0gZWxlbVxuIEBwYXJhbSBuYW1lXG4gQHBhcmFtIHtTdHJpbmd9IFtleHRyYV0gICdwYWRkaW5nJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZ1xuICdib3JkZXInIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nICsgYm9yZGVyXG4gJ21hcmdpbicgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmcgKyBib3JkZXIgKyBtYXJnaW5cbiAqL1xuZnVuY3Rpb24gZ2V0V0goZWxlbSwgbmFtZSwgZXh0cmEpIHtcbiAgaWYgKGlzV2luZG93KGVsZW0pKSB7XG4gICAgcmV0dXJuIG5hbWUgPT09ICd3aWR0aCcgPyBkb21VdGlscy52aWV3cG9ydFdpZHRoKGVsZW0pIDogZG9tVXRpbHMudmlld3BvcnRIZWlnaHQoZWxlbSk7XG4gIH0gZWxzZSBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMuZG9jV2lkdGgoZWxlbSkgOiBkb21VdGlscy5kb2NIZWlnaHQoZWxlbSk7XG4gIH1cbiAgdmFyIHdoaWNoID0gbmFtZSA9PT0gJ3dpZHRoJyA/IFsnTGVmdCcsICdSaWdodCddIDogWydUb3AnLCAnQm90dG9tJ107XG4gIHZhciBib3JkZXJCb3hWYWx1ZSA9IG5hbWUgPT09ICd3aWR0aCcgPyBlbGVtLm9mZnNldFdpZHRoIDogZWxlbS5vZmZzZXRIZWlnaHQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSk7XG4gIHZhciBpc0JvcmRlckJveCA9IGlzQm9yZGVyQm94Rm4oZWxlbSwgY29tcHV0ZWRTdHlsZSk7XG4gIHZhciBjc3NCb3hWYWx1ZSA9IDA7XG4gIGlmIChib3JkZXJCb3hWYWx1ZSA9PSBudWxsIHx8IGJvcmRlckJveFZhbHVlIDw9IDApIHtcbiAgICBib3JkZXJCb3hWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAvLyBGYWxsIGJhY2sgdG8gY29tcHV0ZWQgdGhlbiB1biBjb21wdXRlZCBjc3MgaWYgbmVjZXNzYXJ5XG4gICAgY3NzQm94VmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtLCBuYW1lKTtcbiAgICBpZiAoY3NzQm94VmFsdWUgPT0gbnVsbCB8fCBOdW1iZXIoY3NzQm94VmFsdWUpIDwgMCkge1xuICAgICAgY3NzQm94VmFsdWUgPSBlbGVtLnN0eWxlW25hbWVdIHx8IDA7XG4gICAgfVxuICAgIC8vIE5vcm1hbGl6ZSAnJywgYXV0bywgYW5kIHByZXBhcmUgZm9yIGV4dHJhXG4gICAgY3NzQm94VmFsdWUgPSBwYXJzZUZsb2F0KGNzc0JveFZhbHVlKSB8fCAwO1xuICB9XG4gIGlmIChleHRyYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXh0cmEgPSBpc0JvcmRlckJveCA/IEJPUkRFUl9JTkRFWCA6IENPTlRFTlRfSU5ERVg7XG4gIH1cbiAgdmFyIGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCA9IGJvcmRlckJveFZhbHVlICE9PSB1bmRlZmluZWQgfHwgaXNCb3JkZXJCb3g7XG4gIHZhciB2YWwgPSBib3JkZXJCb3hWYWx1ZSB8fCBjc3NCb3hWYWx1ZTtcbiAgaWYgKGV4dHJhID09PSBDT05URU5UX0lOREVYKSB7XG4gICAgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgICAgcmV0dXJuIHZhbCAtIGdldFBCTVdpZHRoKGVsZW0sIFsnYm9yZGVyJywgJ3BhZGRpbmcnXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gY3NzQm94VmFsdWU7XG4gIH1cbiAgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgIHZhciBwYWRkaW5nID0gZXh0cmEgPT09IFBBRERJTkdfSU5ERVggPyAtZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpIDogZ2V0UEJNV2lkdGgoZWxlbSwgWydtYXJnaW4nXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xuICAgIHJldHVybiB2YWwgKyAoZXh0cmEgPT09IEJPUkRFUl9JTkRFWCA/IDAgOiBwYWRkaW5nKTtcbiAgfVxuICByZXR1cm4gY3NzQm94VmFsdWUgKyBnZXRQQk1XaWR0aChlbGVtLCBCT1hfTU9ERUxTLnNsaWNlKGV4dHJhKSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xufVxuXG52YXIgY3NzU2hvdyA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICBkaXNwbGF5OiAnYmxvY2snXG59O1xuXG4vLyBmaXggIzExOSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzExOVxuZnVuY3Rpb24gZ2V0V0hJZ25vcmVEaXNwbGF5KGVsZW0pIHtcbiAgdmFyIHZhbCA9IHVuZGVmaW5lZDtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIC8vIGluIGNhc2UgZWxlbSBpcyB3aW5kb3dcbiAgLy8gZWxlbS5vZmZzZXRXaWR0aCA9PT0gdW5kZWZpbmVkXG4gIGlmIChlbGVtLm9mZnNldFdpZHRoICE9PSAwKSB7XG4gICAgdmFsID0gZ2V0V0guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBzd2FwKGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhbCA9IGdldFdILmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gY3NzKGVsLCBuYW1lLCB2KSB7XG4gIHZhciB2YWx1ZSA9IHY7XG4gIGlmICgodHlwZW9mIG5hbWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5hbWUpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBpIGluIG5hbWUpIHtcbiAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIGNzcyhlbCwgaSwgbmFtZVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgKz0gJ3B4JztcbiAgICB9XG4gICAgZWwuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlWChlbCwgbmFtZSk7XG59XG5cbmVhY2goWyd3aWR0aCcsICdoZWlnaHQnXSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIGZpcnN0ID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gIGRvbVV0aWxzWydvdXRlcicgKyBmaXJzdF0gPSBmdW5jdGlvbiAoZWwsIGluY2x1ZGVNYXJnaW4pIHtcbiAgICByZXR1cm4gZWwgJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsLCBuYW1lLCBpbmNsdWRlTWFyZ2luID8gTUFSR0lOX0lOREVYIDogQk9SREVSX0lOREVYKTtcbiAgfTtcbiAgdmFyIHdoaWNoID0gbmFtZSA9PT0gJ3dpZHRoJyA/IFsnTGVmdCcsICdSaWdodCddIDogWydUb3AnLCAnQm90dG9tJ107XG5cbiAgZG9tVXRpbHNbbmFtZV0gPSBmdW5jdGlvbiAoZWxlbSwgdmFsKSB7XG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0pO1xuICAgICAgICB2YXIgaXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveEZuKGVsZW0pO1xuICAgICAgICBpZiAoaXNCb3JkZXJCb3gpIHtcbiAgICAgICAgICB2YWwgKz0gZ2V0UEJNV2lkdGgoZWxlbSwgWydwYWRkaW5nJywgJ2JvcmRlciddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNzcyhlbGVtLCBuYW1lLCB2YWwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0gJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsZW0sIG5hbWUsIENPTlRFTlRfSU5ERVgpO1xuICB9O1xufSk7XG5cbi8vIOiuvue9riBlbGVtIOebuOWvuSBlbGVtLm93bmVyRG9jdW1lbnQg55qE5Z2Q5qCHXG5mdW5jdGlvbiBzZXRPZmZzZXQoZWxlbSwgb2Zmc2V0KSB7XG4gIC8vIHNldCBwb3NpdGlvbiBmaXJzdCwgaW4tY2FzZSB0b3AvbGVmdCBhcmUgc2V0IGV2ZW4gb24gc3RhdGljIGVsZW1cbiAgaWYgKGNzcyhlbGVtLCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICBlbGVtLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgfVxuXG4gIHZhciBvbGQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciByZXQgPSB7fTtcbiAgdmFyIGN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIHZhciBrZXkgPSB1bmRlZmluZWQ7XG5cbiAgZm9yIChrZXkgaW4gb2Zmc2V0KSB7XG4gICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjdXJyZW50ID0gcGFyc2VGbG9hdChjc3MoZWxlbSwga2V5KSkgfHwgMDtcbiAgICAgIHJldFtrZXldID0gY3VycmVudCArIG9mZnNldFtrZXldIC0gb2xkW2tleV07XG4gICAgfVxuICB9XG4gIGNzcyhlbGVtLCByZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzKHtcbiAgZ2V0V2luZG93OiBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICAgIHZhciBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZTtcbiAgICByZXR1cm4gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIH0sXG4gIG9mZnNldDogZnVuY3Rpb24gb2Zmc2V0KGVsLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzZXRPZmZzZXQoZWwsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldE9mZnNldChlbCk7XG4gICAgfVxuICB9LFxuXG4gIGlzV2luZG93OiBpc1dpbmRvdyxcbiAgZWFjaDogZWFjaCxcbiAgY3NzOiBjc3MsXG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgcmV0W2ldID0gb2JqW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgb3ZlcmZsb3cgPSBvYmoub3ZlcmZsb3c7XG4gICAgaWYgKG92ZXJmbG93KSB7XG4gICAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgcmV0Lm92ZXJmbG93W2ldID0gb2JqLm92ZXJmbG93W2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIHNjcm9sbExlZnQ6IGZ1bmN0aW9uIHNjcm9sbExlZnQodywgdikge1xuICAgIGlmIChpc1dpbmRvdyh3KSkge1xuICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh2LCBnZXRTY3JvbGxUb3AodykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB3LnNjcm9sbExlZnQ7XG4gICAgICB9XG4gICAgICB3LnNjcm9sbExlZnQgPSB2O1xuICAgIH1cbiAgfSxcbiAgc2Nyb2xsVG9wOiBmdW5jdGlvbiBzY3JvbGxUb3Aodywgdikge1xuICAgIGlmIChpc1dpbmRvdyh3KSkge1xuICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZ2V0U2Nyb2xsVG9wKHcpO1xuICAgICAgfVxuICAgICAgd2luZG93LnNjcm9sbFRvKGdldFNjcm9sbExlZnQodyksIHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB3LnNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICAgIHcuc2Nyb2xsVG9wID0gdjtcbiAgICB9XG4gIH0sXG5cbiAgdmlld3BvcnRXaWR0aDogMCxcbiAgdmlld3BvcnRIZWlnaHQ6IDBcbn0sIGRvbVV0aWxzKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbmZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KGVsZW0sIGNvbnRhaW5lciwgY29uZmlnKSB7XG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgLy8gZG9jdW1lbnQg5b2S5LiA5YyW5YiwIHdpbmRvd1xuICBpZiAoY29udGFpbmVyLm5vZGVUeXBlID09PSA5KSB7XG4gICAgY29udGFpbmVyID0gdXRpbC5nZXRXaW5kb3coY29udGFpbmVyKTtcbiAgfVxuXG4gIHZhciBhbGxvd0hvcml6b250YWxTY3JvbGwgPSBjb25maWcuYWxsb3dIb3Jpem9udGFsU2Nyb2xsO1xuICB2YXIgb25seVNjcm9sbElmTmVlZGVkID0gY29uZmlnLm9ubHlTY3JvbGxJZk5lZWRlZDtcbiAgdmFyIGFsaWduV2l0aFRvcCA9IGNvbmZpZy5hbGlnbldpdGhUb3A7XG4gIHZhciBhbGlnbldpdGhMZWZ0ID0gY29uZmlnLmFsaWduV2l0aExlZnQ7XG4gIHZhciBvZmZzZXRUb3AgPSBjb25maWcub2Zmc2V0VG9wIHx8IDA7XG4gIHZhciBvZmZzZXRMZWZ0ID0gY29uZmlnLm9mZnNldExlZnQgfHwgMDtcbiAgdmFyIG9mZnNldEJvdHRvbSA9IGNvbmZpZy5vZmZzZXRCb3R0b20gfHwgMDtcbiAgdmFyIG9mZnNldFJpZ2h0ID0gY29uZmlnLm9mZnNldFJpZ2h0IHx8IDA7XG5cbiAgYWxsb3dIb3Jpem9udGFsU2Nyb2xsID0gYWxsb3dIb3Jpem9udGFsU2Nyb2xsID09PSB1bmRlZmluZWQgPyB0cnVlIDogYWxsb3dIb3Jpem9udGFsU2Nyb2xsO1xuXG4gIHZhciBpc1dpbiA9IHV0aWwuaXNXaW5kb3coY29udGFpbmVyKTtcbiAgdmFyIGVsZW1PZmZzZXQgPSB1dGlsLm9mZnNldChlbGVtKTtcbiAgdmFyIGVoID0gdXRpbC5vdXRlckhlaWdodChlbGVtKTtcbiAgdmFyIGV3ID0gdXRpbC5vdXRlcldpZHRoKGVsZW0pO1xuICB2YXIgY29udGFpbmVyT2Zmc2V0ID0gdW5kZWZpbmVkO1xuICB2YXIgY2ggPSB1bmRlZmluZWQ7XG4gIHZhciBjdyA9IHVuZGVmaW5lZDtcbiAgdmFyIGNvbnRhaW5lclNjcm9sbCA9IHVuZGVmaW5lZDtcbiAgdmFyIGRpZmZUb3AgPSB1bmRlZmluZWQ7XG4gIHZhciBkaWZmQm90dG9tID0gdW5kZWZpbmVkO1xuICB2YXIgd2luID0gdW5kZWZpbmVkO1xuICB2YXIgd2luU2Nyb2xsID0gdW5kZWZpbmVkO1xuICB2YXIgd3cgPSB1bmRlZmluZWQ7XG4gIHZhciB3aCA9IHVuZGVmaW5lZDtcblxuICBpZiAoaXNXaW4pIHtcbiAgICB3aW4gPSBjb250YWluZXI7XG4gICAgd2ggPSB1dGlsLmhlaWdodCh3aW4pO1xuICAgIHd3ID0gdXRpbC53aWR0aCh3aW4pO1xuICAgIHdpblNjcm9sbCA9IHtcbiAgICAgIGxlZnQ6IHV0aWwuc2Nyb2xsTGVmdCh3aW4pLFxuICAgICAgdG9wOiB1dGlsLnNjcm9sbFRvcCh3aW4pXG4gICAgfTtcbiAgICAvLyBlbGVtIOebuOWvuSBjb250YWluZXIg5Y+v6KeG6KeG56qX55qE6Led56a7XG4gICAgZGlmZlRvcCA9IHtcbiAgICAgIGxlZnQ6IGVsZW1PZmZzZXQubGVmdCAtIHdpblNjcm9sbC5sZWZ0IC0gb2Zmc2V0TGVmdCxcbiAgICAgIHRvcDogZWxlbU9mZnNldC50b3AgLSB3aW5TY3JvbGwudG9wIC0gb2Zmc2V0VG9wXG4gICAgfTtcbiAgICBkaWZmQm90dG9tID0ge1xuICAgICAgbGVmdDogZWxlbU9mZnNldC5sZWZ0ICsgZXcgLSAod2luU2Nyb2xsLmxlZnQgKyB3dykgKyBvZmZzZXRSaWdodCxcbiAgICAgIHRvcDogZWxlbU9mZnNldC50b3AgKyBlaCAtICh3aW5TY3JvbGwudG9wICsgd2gpICsgb2Zmc2V0Qm90dG9tXG4gICAgfTtcbiAgICBjb250YWluZXJTY3JvbGwgPSB3aW5TY3JvbGw7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyT2Zmc2V0ID0gdXRpbC5vZmZzZXQoY29udGFpbmVyKTtcbiAgICBjaCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgY3cgPSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgY29udGFpbmVyU2Nyb2xsID0ge1xuICAgICAgbGVmdDogY29udGFpbmVyLnNjcm9sbExlZnQsXG4gICAgICB0b3A6IGNvbnRhaW5lci5zY3JvbGxUb3BcbiAgICB9O1xuICAgIC8vIGVsZW0g55u45a+5IGNvbnRhaW5lciDlj6/op4bop4bnqpfnmoTot53nprtcbiAgICAvLyDms6jmhI/ovrnmoYYsIG9mZnNldCDmmK/ovrnmoYbliLDmoLnoioLngrlcbiAgICBkaWZmVG9wID0ge1xuICAgICAgbGVmdDogZWxlbU9mZnNldC5sZWZ0IC0gKGNvbnRhaW5lck9mZnNldC5sZWZ0ICsgKHBhcnNlRmxvYXQodXRpbC5jc3MoY29udGFpbmVyLCAnYm9yZGVyTGVmdFdpZHRoJykpIHx8IDApKSAtIG9mZnNldExlZnQsXG4gICAgICB0b3A6IGVsZW1PZmZzZXQudG9wIC0gKGNvbnRhaW5lck9mZnNldC50b3AgKyAocGFyc2VGbG9hdCh1dGlsLmNzcyhjb250YWluZXIsICdib3JkZXJUb3BXaWR0aCcpKSB8fCAwKSkgLSBvZmZzZXRUb3BcbiAgICB9O1xuICAgIGRpZmZCb3R0b20gPSB7XG4gICAgICBsZWZ0OiBlbGVtT2Zmc2V0LmxlZnQgKyBldyAtIChjb250YWluZXJPZmZzZXQubGVmdCArIGN3ICsgKHBhcnNlRmxvYXQodXRpbC5jc3MoY29udGFpbmVyLCAnYm9yZGVyUmlnaHRXaWR0aCcpKSB8fCAwKSkgKyBvZmZzZXRSaWdodCxcbiAgICAgIHRvcDogZWxlbU9mZnNldC50b3AgKyBlaCAtIChjb250YWluZXJPZmZzZXQudG9wICsgY2ggKyAocGFyc2VGbG9hdCh1dGlsLmNzcyhjb250YWluZXIsICdib3JkZXJCb3R0b21XaWR0aCcpKSB8fCAwKSkgKyBvZmZzZXRCb3R0b21cbiAgICB9O1xuICB9XG5cbiAgaWYgKGRpZmZUb3AudG9wIDwgMCB8fCBkaWZmQm90dG9tLnRvcCA+IDApIHtcbiAgICAvLyDlvLrliLblkJHkuIpcbiAgICBpZiAoYWxpZ25XaXRoVG9wID09PSB0cnVlKSB7XG4gICAgICB1dGlsLnNjcm9sbFRvcChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC50b3AgKyBkaWZmVG9wLnRvcCk7XG4gICAgfSBlbHNlIGlmIChhbGlnbldpdGhUb3AgPT09IGZhbHNlKSB7XG4gICAgICB1dGlsLnNjcm9sbFRvcChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC50b3AgKyBkaWZmQm90dG9tLnRvcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOiHquWKqOiwg+aVtFxuICAgICAgaWYgKGRpZmZUb3AudG9wIDwgMCkge1xuICAgICAgICB1dGlsLnNjcm9sbFRvcChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC50b3AgKyBkaWZmVG9wLnRvcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1dGlsLnNjcm9sbFRvcChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC50b3AgKyBkaWZmQm90dG9tLnRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICghb25seVNjcm9sbElmTmVlZGVkKSB7XG4gICAgICBhbGlnbldpdGhUb3AgPSBhbGlnbldpdGhUb3AgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWFsaWduV2l0aFRvcDtcbiAgICAgIGlmIChhbGlnbldpdGhUb3ApIHtcbiAgICAgICAgdXRpbC5zY3JvbGxUb3AoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwudG9wICsgZGlmZlRvcC50b3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXRpbC5zY3JvbGxUb3AoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwudG9wICsgZGlmZkJvdHRvbS50b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhbGxvd0hvcml6b250YWxTY3JvbGwpIHtcbiAgICBpZiAoZGlmZlRvcC5sZWZ0IDwgMCB8fCBkaWZmQm90dG9tLmxlZnQgPiAwKSB7XG4gICAgICAvLyDlvLrliLblkJHkuIpcbiAgICAgIGlmIChhbGlnbldpdGhMZWZ0ID09PSB0cnVlKSB7XG4gICAgICAgIHV0aWwuc2Nyb2xsTGVmdChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC5sZWZ0ICsgZGlmZlRvcC5sZWZ0KTtcbiAgICAgIH0gZWxzZSBpZiAoYWxpZ25XaXRoTGVmdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdXRpbC5zY3JvbGxMZWZ0KGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLmxlZnQgKyBkaWZmQm90dG9tLmxlZnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6Ieq5Yqo6LCD5pW0XG4gICAgICAgIGlmIChkaWZmVG9wLmxlZnQgPCAwKSB7XG4gICAgICAgICAgdXRpbC5zY3JvbGxMZWZ0KGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLmxlZnQgKyBkaWZmVG9wLmxlZnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHV0aWwuc2Nyb2xsTGVmdChjb250YWluZXIsIGNvbnRhaW5lclNjcm9sbC5sZWZ0ICsgZGlmZkJvdHRvbS5sZWZ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIW9ubHlTY3JvbGxJZk5lZWRlZCkge1xuICAgICAgICBhbGlnbldpdGhMZWZ0ID0gYWxpZ25XaXRoTGVmdCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhYWxpZ25XaXRoTGVmdDtcbiAgICAgICAgaWYgKGFsaWduV2l0aExlZnQpIHtcbiAgICAgICAgICB1dGlsLnNjcm9sbExlZnQoY29udGFpbmVyLCBjb250YWluZXJTY3JvbGwubGVmdCArIGRpZmZUb3AubGVmdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXRpbC5zY3JvbGxMZWZ0KGNvbnRhaW5lciwgY29udGFpbmVyU2Nyb2xsLmxlZnQgKyBkaWZmQm90dG9tLmxlZnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2Nyb2xsSW50b1ZpZXc7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZG9tLXNjcm9sbC1pbnRvLXZpZXcnKTsiXSwibmFtZXMiOlsicmVxdWlyZSQkMCJdLCJtYXBwaW5ncyI6IkFBRUEsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDOztBQUVqUSxJQUFJLE9BQU8sR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRSxFQUFFLE9BQU8sT0FBTyxHQUFHLENBQUMsRUFBRSxHQUFHLFVBQVUsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssTUFBTSxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUM7O0FBRWpQLElBQUksTUFBTSxHQUFHLHVDQUF1QyxDQUFDLE1BQU0sQ0FBQzs7QUFFNUQsU0FBUyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUU7RUFDL0IsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDO0VBQ3BCLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztFQUNsQixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7RUFDbEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztFQUM3QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0VBQ3BCLElBQUksT0FBTyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDOztFQUV6QyxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Ozs7OztFQU1uQyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztFQUNiLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBc0JaLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO0VBQ2hELENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDOztFQUU5QyxPQUFPO0lBQ0wsSUFBSSxFQUFFLENBQUM7SUFDUCxHQUFHLEVBQUUsQ0FBQztHQUNQLENBQUM7Q0FDSDs7QUFFRCxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFO0VBQ3pCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztFQUNuRCxJQUFJLE1BQU0sR0FBRyxRQUFRLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQztFQUMvQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtJQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDOztJQUVuQixHQUFHLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTs7TUFFM0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDdEI7R0FDRjtFQUNELE9BQU8sR0FBRyxDQUFDO0NBQ1o7O0FBRUQsU0FBUyxhQUFhLENBQUMsQ0FBQyxFQUFFO0VBQ3hCLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3JCOztBQUVELFNBQVMsWUFBWSxDQUFDLENBQUMsRUFBRTtFQUN2QixPQUFPLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDM0I7O0FBRUQsU0FBUyxTQUFTLENBQUMsRUFBRSxFQUFFO0VBQ3JCLElBQUksR0FBRyxHQUFHLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ2hDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7RUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDO0VBQzVDLEdBQUcsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzdCLEdBQUcsQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzNCLE9BQU8sR0FBRyxDQUFDO0NBQ1o7QUFDRCxTQUFTLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFO0VBQ3JELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztFQUNiLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7RUFDM0IsSUFBSSxhQUFhLEdBQUcsY0FBYyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7RUFHakYsSUFBSSxhQUFhLEVBQUU7SUFDakIsR0FBRyxHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDbkU7O0VBRUQsT0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFRCxJQUFJLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZFLElBQUksTUFBTSxHQUFHLDJCQUEyQixDQUFDO0FBQ3pDLElBQUksYUFBYSxHQUFHLGNBQWMsQ0FBQztBQUNuQyxJQUFJLGFBQWEsR0FBRyxjQUFjLENBQUM7QUFDbkMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ2xCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQzs7QUFFZCxTQUFTLG1CQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7OztFQUd2QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7RUFZM0QsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTs7SUFFakQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN2QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7SUFHdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7O0lBR3RELEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssVUFBVSxHQUFHLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JELEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7O0lBRzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7O0lBRW5CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7R0FDcEM7RUFDRCxPQUFPLEdBQUcsS0FBSyxFQUFFLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQztDQUNsQzs7QUFFRCxJQUFJLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztBQUNsQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtFQUNqQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsaUJBQWlCLEdBQUcsbUJBQW1CLENBQUM7Q0FDdkY7O0FBRUQsU0FBUyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRTtFQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNuQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDWjtDQUNGOztBQUVELFNBQVMsYUFBYSxDQUFDLElBQUksRUFBRTtFQUMzQixPQUFPLGlCQUFpQixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsS0FBSyxZQUFZLENBQUM7Q0FDOUQ7O0FBRUQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2pELElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN0QixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDckIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDOztBQUVyQixTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTtFQUNyQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7RUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0VBQ3ZCLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQzs7O0VBR3JCLEtBQUssSUFBSSxJQUFJLE9BQU8sRUFBRTtJQUNwQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7O0VBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7O0VBR3BCLEtBQUssSUFBSSxJQUFJLE9BQU8sRUFBRTtJQUNwQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6QjtHQUNGO0NBQ0Y7O0FBRUQsU0FBUyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7RUFDdkMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBQ2QsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO0VBQ3JCLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztFQUNsQixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7RUFDbEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2pDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsSUFBSSxJQUFJLEVBQUU7TUFDUixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtVQUNyQixPQUFPLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDckMsTUFBTTtVQUNMLE9BQU8sR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsS0FBSyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDNUQ7S0FDRjtHQUNGO0VBQ0QsT0FBTyxLQUFLLENBQUM7Q0FDZDs7Ozs7O0FBTUQsU0FBUyxRQUFRLENBQUMsR0FBRyxFQUFFOzs7RUFHckIsT0FBTyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDO0NBQ3pDOztBQUVELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQzs7QUFFbEIsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFLFVBQVUsSUFBSSxFQUFFO0VBQ3hDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsVUFBVSxNQUFNLEVBQUU7SUFDekMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN4QixPQUFPLElBQUksQ0FBQyxHQUFHOzs7SUFHZixDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O0lBRWxDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUMxRCxDQUFDOztFQUVGLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsVUFBVSxHQUFHLEVBQUU7O0lBRTNDLElBQUksSUFBSSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDM0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN2QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3BCLElBQUksZUFBZSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFDMUMsSUFBSSxtQkFBbUIsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7OztJQUdoRCxPQUFPLEdBQUcsQ0FBQyxVQUFVLEtBQUssWUFBWSxJQUFJLG1CQUFtQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQW1CLENBQUM7R0FDNUcsQ0FBQztDQUNILENBQUMsQ0FBQzs7Ozs7Ozs7OztBQVVILFNBQVMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ2hDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ2xCLE9BQU8sSUFBSSxLQUFLLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDeEYsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO0lBQzlCLE9BQU8sSUFBSSxLQUFLLE9BQU8sR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDOUU7RUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssT0FBTyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0VBQ3JFLElBQUksY0FBYyxHQUFHLElBQUksS0FBSyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0VBQzdFLElBQUksYUFBYSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzVDLElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEFBQWUsQ0FBQyxDQUFDO0VBQ3JELElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztFQUNwQixJQUFJLGNBQWMsSUFBSSxJQUFJLElBQUksY0FBYyxJQUFJLENBQUMsRUFBRTtJQUNqRCxjQUFjLEdBQUcsU0FBUyxDQUFDOztJQUUzQixXQUFXLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLElBQUksV0FBVyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFO01BQ2xELFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQzs7SUFFRCxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM1QztFQUNELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtJQUN2QixLQUFLLEdBQUcsV0FBVyxHQUFHLFlBQVksR0FBRyxhQUFhLENBQUM7R0FDcEQ7RUFDRCxJQUFJLDJCQUEyQixHQUFHLGNBQWMsS0FBSyxTQUFTLElBQUksV0FBVyxDQUFDO0VBQzlFLElBQUksR0FBRyxHQUFHLGNBQWMsSUFBSSxXQUFXLENBQUM7RUFDeEMsSUFBSSxLQUFLLEtBQUssYUFBYSxFQUFFO0lBQzNCLElBQUksMkJBQTJCLEVBQUU7TUFDL0IsT0FBTyxHQUFHLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLEFBQWUsQ0FBQyxDQUFDO0tBQzdFO0lBQ0QsT0FBTyxXQUFXLENBQUM7R0FDcEI7RUFDRCxJQUFJLDJCQUEyQixFQUFFO0lBQy9CLElBQUksT0FBTyxHQUFHLEtBQUssS0FBSyxhQUFhLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxBQUFlLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxBQUFlLENBQUMsQ0FBQztJQUNuSixPQUFPLEdBQUcsSUFBSSxLQUFLLEtBQUssWUFBWSxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztHQUNyRDtFQUNELE9BQU8sV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEFBQWUsQ0FBQyxDQUFDO0NBQ3ZGOztBQUVELElBQUksT0FBTyxHQUFHO0VBQ1osUUFBUSxFQUFFLFVBQVU7RUFDcEIsVUFBVSxFQUFFLFFBQVE7RUFDcEIsT0FBTyxFQUFFLE9BQU87Q0FDakIsQ0FBQzs7O0FBR0YsU0FBUyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7RUFDaEMsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDO0VBQ3BCLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQzs7O0VBR3JCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLEVBQUU7SUFDMUIsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ3BDLE1BQU07SUFDTCxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZO01BQzlCLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNwQyxDQUFDLENBQUM7R0FDSjtFQUNELE9BQU8sR0FBRyxDQUFDO0NBQ1o7O0FBRUQsU0FBUyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7RUFDeEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0VBQ2QsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLFdBQVcsR0FBRyxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLFFBQVEsRUFBRTtJQUM1RSxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtNQUNsQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDMUIsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDckI7S0FDRjtJQUNELE9BQU8sU0FBUyxDQUFDO0dBQ2xCO0VBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7SUFDaEMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7TUFDN0IsS0FBSyxJQUFJLElBQUksQ0FBQztLQUNmO0lBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDdkIsT0FBTyxTQUFTLENBQUM7R0FDbEI7RUFDRCxPQUFPLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUNwQzs7QUFFRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUUsVUFBVSxJQUFJLEVBQUU7RUFDeEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3pELFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsVUFBVSxFQUFFLEVBQUUsYUFBYSxFQUFFO0lBQ3ZELE9BQU8sRUFBRSxJQUFJLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQztHQUN4RixDQUFDO0VBQ0YsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLE9BQU8sR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQzs7RUFFckUsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNwQyxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7TUFDckIsSUFBSSxJQUFJLEVBQUU7UUFDUixJQUFJLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxXQUFXLEVBQUU7VUFDZixHQUFHLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsRUFBRSxLQUFLLEFBQWUsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztPQUM3QjtNQUNELE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxJQUFJLElBQUksa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztHQUM5RCxDQUFDO0NBQ0gsQ0FBQyxDQUFDOzs7QUFHSCxTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFOztFQUUvQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEtBQUssUUFBUSxFQUFFO0lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztHQUNsQzs7RUFFRCxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDMUIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0VBQ2IsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDO0VBQ3hCLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQzs7RUFFcEIsS0FBSyxHQUFHLElBQUksTUFBTSxFQUFFO0lBQ2xCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtNQUM5QixPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDMUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzdDO0dBQ0Y7RUFDRCxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQ2hCOztBQUVELFFBQWMsR0FBRyxRQUFRLENBQUM7RUFDeEIsU0FBUyxFQUFFLFNBQVMsU0FBUyxDQUFDLElBQUksRUFBRTtJQUNsQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQztJQUNyQyxPQUFPLEdBQUcsQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQztHQUM1QztFQUNELE1BQU0sRUFBRSxTQUFTLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO0lBQ2pDLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO01BQ2hDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDdEIsTUFBTTtNQUNMLE9BQU8sU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3RCO0dBQ0Y7O0VBRUQsUUFBUSxFQUFFLFFBQVE7RUFDbEIsSUFBSSxFQUFFLElBQUk7RUFDVixHQUFHLEVBQUUsR0FBRztFQUNSLEtBQUssRUFBRSxTQUFTLEtBQUssQ0FBQyxHQUFHLEVBQUU7SUFDekIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2IsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7TUFDakIsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3pCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDakI7S0FDRjtJQUNELElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDNUIsSUFBSSxRQUFRLEVBQUU7TUFDWixLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtRQUNqQixJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDekIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25DO09BQ0Y7S0FDRjtJQUNELE9BQU8sR0FBRyxDQUFDO0dBQ1o7RUFDRCxVQUFVLEVBQUUsU0FBUyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNwQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNmLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUNuQixPQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUN6QjtNQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JDLE1BQU07TUFDTCxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7UUFDbkIsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDO09BQ3JCO01BQ0QsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7S0FDbEI7R0FDRjtFQUNELFNBQVMsRUFBRSxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ2xDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2YsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFO1FBQ25CLE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ3hCO01BQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdEMsTUFBTTtNQUNMLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUNuQixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUM7T0FDcEI7TUFDRCxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztLQUNqQjtHQUNGOztFQUVELGFBQWEsRUFBRSxDQUFDO0VBQ2hCLGNBQWMsRUFBRSxDQUFDO0NBQ2xCLEVBQUUsUUFBUSxDQUFDOztBQ2xiWixTQUFTLGNBQWMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtFQUMvQyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQzs7RUFFdEIsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtJQUM1QixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztHQUN2Qzs7RUFFRCxJQUFJLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztFQUN6RCxJQUFJLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztFQUNuRCxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO0VBQ3ZDLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7RUFDekMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7RUFDdEMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7RUFDeEMsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7RUFDNUMsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7O0VBRTFDLHFCQUFxQixHQUFHLHFCQUFxQixLQUFLLFNBQVMsR0FBRyxJQUFJLEdBQUcscUJBQXFCLENBQUM7O0VBRTNGLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDckMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNuQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2hDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDL0IsSUFBSSxlQUFlLEdBQUcsU0FBUyxDQUFDO0VBQ2hDLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQztFQUNuQixJQUFJLEVBQUUsR0FBRyxTQUFTLENBQUM7RUFDbkIsSUFBSSxlQUFlLEdBQUcsU0FBUyxDQUFDO0VBQ2hDLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQztFQUN4QixJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUM7RUFDM0IsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDO0VBQ3BCLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQztFQUMxQixJQUFJLEVBQUUsR0FBRyxTQUFTLENBQUM7RUFDbkIsSUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDOztFQUVuQixJQUFJLEtBQUssRUFBRTtJQUNULEdBQUcsR0FBRyxTQUFTLENBQUM7SUFDaEIsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsU0FBUyxHQUFHO01BQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO01BQzFCLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztLQUN6QixDQUFDOztJQUVGLE9BQU8sR0FBRztNQUNSLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVTtNQUNuRCxHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxHQUFHLFNBQVM7S0FDaEQsQ0FBQztJQUNGLFVBQVUsR0FBRztNQUNYLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxTQUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLFdBQVc7TUFDaEUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLFNBQVMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsWUFBWTtLQUMvRCxDQUFDO0lBQ0YsZUFBZSxHQUFHLFNBQVMsQ0FBQztHQUM3QixNQUFNO0lBQ0wsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7SUFDNUIsRUFBRSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFDM0IsZUFBZSxHQUFHO01BQ2hCLElBQUksRUFBRSxTQUFTLENBQUMsVUFBVTtNQUMxQixHQUFHLEVBQUUsU0FBUyxDQUFDLFNBQVM7S0FDekIsQ0FBQzs7O0lBR0YsT0FBTyxHQUFHO01BQ1IsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLElBQUksZUFBZSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVTtNQUN2SCxHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsSUFBSSxlQUFlLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTO0tBQ25ILENBQUM7SUFDRixVQUFVLEdBQUc7TUFDWCxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksZUFBZSxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVc7TUFDbkksR0FBRyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLGVBQWUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZO0tBQ25JLENBQUM7R0FDSDs7RUFFRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFOztJQUV6QyxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7TUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDOUQsTUFBTSxJQUFJLFlBQVksS0FBSyxLQUFLLEVBQUU7TUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakUsTUFBTTs7TUFFTCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQzlELE1BQU07UUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUNqRTtLQUNGO0dBQ0YsTUFBTTtJQUNMLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtNQUN2QixZQUFZLEdBQUcsWUFBWSxLQUFLLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztNQUNsRSxJQUFJLFlBQVksRUFBRTtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5RCxNQUFNO1FBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7T0FDakU7S0FDRjtHQUNGOztFQUVELElBQUkscUJBQXFCLEVBQUU7SUFDekIsSUFBSSxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTs7TUFFM0MsSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO09BQ2pFLE1BQU0sSUFBSSxhQUFhLEtBQUssS0FBSyxFQUFFO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQ3BFLE1BQU07O1FBRUwsSUFBSSxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtVQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqRSxNQUFNO1VBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEU7T0FDRjtLQUNGLE1BQU07TUFDTCxJQUFJLENBQUMsa0JBQWtCLEVBQUU7UUFDdkIsYUFBYSxHQUFHLGFBQWEsS0FBSyxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDckUsSUFBSSxhQUFhLEVBQUU7VUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakUsTUFBTTtVQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BFO09BQ0Y7S0FDRjtHQUNGO0NBQ0Y7O0FBRUQscUJBQWMsR0FBRyxjQUFjOztPQzlIakIsR0FBR0E7Ozs7In0=
