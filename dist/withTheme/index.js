import React__default from 'react';
import { c as createCommonjsModule } from '../chunk-5732a1e2.js';
import { ThemeProvider } from 'styled-components';
import { f as fp } from '../chunk-69193f69.js';

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
var isBuffer_1 = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
};

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

var kindOf = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer_1(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};

var renameKeys = createCommonjsModule(function (module) {
(function() {

  function rename(obj, fn) {
    if (typeof fn !== 'function') {
      return obj;
    }

    var res = {};
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        res[fn(key, obj[key]) || key] = obj[key];
      }
    }
    return res;
  }

  if (module.exports) {
    module.exports = rename;
  } else {
    {
      window.rename = rename;
    }
  }
})();
});

/**
 * Expose `renameDeep`
 */

var deepRenameKeys = function renameDeep(obj, cb) {
  var type = kindOf(obj);

  if (type !== 'object' && type !== 'array') {
    throw new Error('expected an object');
  }

  var res = [];
  if (type === 'object') {
    obj = renameKeys(obj, cb);
    res = {};
  }

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var val = obj[key];
      if (kindOf(val) === 'object' || kindOf(val) === 'array') {
        res[key] = renameDeep(val, cb);
      } else {
        res[key] = val;
      }
    }
  }
  return res;
};

var modifyVars = fp.pipe(fp.get('antdOverrides'), function (obj) {
  return deepRenameKeys(obj, fp.kebabCase);
});

var antdTheme = {
  primaryColor: '#DC2E48',
  linkColor: '#1890ff',
  successColor: '#52c41a',
  warningColor: '#faad14',
  errorColor: '#f5222d',
  fontSizeBase: '14px',
  headingColor: 'rgba(0, 0, 0, 0,8)',
  headingColorSecondary: 'rgba(0, 0, 0, 0,5)',
  disabledColor: 'rgba(0, 0, 0, 0.25)',
  borderRadiusBase: '4px',
  borderColorBase: '#d9d9d9',
  boxShadowBase: '0 2px 8px rgba(0, 0, 0, 0.15)'
  /**
   * Theme
   */

};

var getTheme = function getTheme() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$antdOverrides = _ref.antdOverrides,
      antdOverrides = _ref$antdOverrides === void 0 ? {} : _ref$antdOverrides;

  return {
    antdOverrides: Object.assign(antdTheme, antdOverrides)
  };
};

var getTheme_1 = getTheme;

var getModifedVars = function getModifedVars() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$antdOverrides = _ref2.antdOverrides,
      antdOverrides = _ref2$antdOverrides === void 0 ? {} : _ref2$antdOverrides;

  return modifyVars(getTheme({
    antdOverrides: antdOverrides
  }));
};

var getModifiedVars = getModifedVars;

var theme = {
	getTheme: getTheme_1,
	getModifiedVars: getModifiedVars
};

var lightTheme = theme.getTheme();

var withTheme = function withTheme(BaseComponent) {
  return function (props) {
    return React__default.createElement(ThemeProvider, {
      theme: lightTheme
    }, React__default.createElement(BaseComponent, props));
  };
};

export default withTheme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZGVlcC1yZW5hbWUta2V5cy9ub2RlX21vZHVsZXMva2luZC1vZi9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZW5hbWUta2V5cy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9kZWVwLXJlbmFtZS1rZXlzL2luZGV4LmpzIiwiLi4vLi4vdGhlbWUuanMiLCIuLi8uLi9zcmMvd2l0aFRoZW1lL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuIiwidmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIEdldCB0aGUgbmF0aXZlIGB0eXBlb2ZgIGEgdmFsdWUuXG4gKlxuICogQHBhcmFtICB7Kn0gYHZhbGBcbiAqIEByZXR1cm4geyp9IE5hdGl2ZSBqYXZhc2NyaXB0IHR5cGVcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGtpbmRPZih2YWwpIHtcbiAgLy8gcHJpbWl0aXZpZXNcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG4gIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmICh2YWwgPT09IHRydWUgfHwgdmFsID09PSBmYWxzZSB8fCB2YWwgaW5zdGFuY2VvZiBCb29sZWFuKSB7XG4gICAgcmV0dXJuICdib29sZWFuJztcbiAgfVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdmFsIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fCB2YWwgaW5zdGFuY2VvZiBOdW1iZXIpIHtcbiAgICByZXR1cm4gJ251bWJlcic7XG4gIH1cblxuICAvLyBmdW5jdGlvbnNcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicgfHwgdmFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIC8vIGFycmF5XG4gIGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH1cblxuICAvLyBjaGVjayBmb3IgaW5zdGFuY2VzIG9mIFJlZ0V4cCBhbmQgRGF0ZSBiZWZvcmUgY2FsbGluZyBgdG9TdHJpbmdgXG4gIGlmICh2YWwgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gIH1cbiAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gJ2RhdGUnO1xuICB9XG5cbiAgLy8gb3RoZXIgb2JqZWN0c1xuICB2YXIgdHlwZSA9IHRvU3RyaW5nLmNhbGwodmFsKTtcblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcbiAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIHJldHVybiAnZGF0ZSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nKSB7XG4gICAgcmV0dXJuICdhcmd1bWVudHMnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBFcnJvcl0nKSB7XG4gICAgcmV0dXJuICdlcnJvcic7XG4gIH1cblxuICAvLyBidWZmZXJcbiAgaWYgKGlzQnVmZmVyKHZhbCkpIHtcbiAgICByZXR1cm4gJ2J1ZmZlcic7XG4gIH1cblxuICAvLyBlczY6IE1hcCwgV2Vha01hcCwgU2V0LCBXZWFrU2V0XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBTZXRdJykge1xuICAgIHJldHVybiAnc2V0JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgV2Vha1NldF0nKSB7XG4gICAgcmV0dXJuICd3ZWFrc2V0JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgTWFwXScpIHtcbiAgICByZXR1cm4gJ21hcCc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFdlYWtNYXBdJykge1xuICAgIHJldHVybiAnd2Vha21hcCc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7XG4gICAgcmV0dXJuICdzeW1ib2wnO1xuICB9XG5cbiAgLy8gdHlwZWQgYXJyYXlzXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBJbnQ4QXJyYXldJykge1xuICAgIHJldHVybiAnaW50OGFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDhBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50OGFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJykge1xuICAgIHJldHVybiAndWludDhjbGFtcGVkYXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBJbnQxNkFycmF5XScpIHtcbiAgICByZXR1cm4gJ2ludDE2YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50MTZBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50MTZhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEludDMyQXJyYXldJykge1xuICAgIHJldHVybiAnaW50MzJhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFVpbnQzMkFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQzMmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScpIHtcbiAgICByZXR1cm4gJ2Zsb2F0MzJhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nKSB7XG4gICAgcmV0dXJuICdmbG9hdDY0YXJyYXknO1xuICB9XG5cbiAgLy8gbXVzdCBiZSBhIHBsYWluIG9iamVjdFxuICByZXR1cm4gJ29iamVjdCc7XG59O1xuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gcmVuYW1lKG9iaiwgZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHZhciByZXMgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICByZXNbZm4oa2V5LCBvYmpba2V5XSkgfHwga2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSByZW5hbWU7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJlbmFtZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cucmVuYW1lID0gcmVuYW1lO1xuICAgIH1cbiAgfVxufSkoKTtcbiIsIi8qIVxuICogZGVlcC1yZW5hbWUta2V5cyA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvZGVlcC1yZW5hbWUta2V5cz5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgSm9uIFNjaGxpbmtlcnQsIGNvbnRyaWJ1dG9ycy5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciB0eXBlT2YgPSByZXF1aXJlKCdraW5kLW9mJyk7XG52YXIgcmVuYW1lID0gcmVxdWlyZSgncmVuYW1lLWtleXMnKTtcblxuLyoqXG4gKiBFeHBvc2UgYHJlbmFtZURlZXBgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZW5hbWVEZWVwKG9iaiwgY2IpIHtcbiAgdmFyIHR5cGUgPSB0eXBlT2Yob2JqKTtcblxuICBpZiAodHlwZSAhPT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gJ2FycmF5Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICB2YXIgcmVzID0gW107XG4gIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIG9iaiA9IHJlbmFtZShvYmosIGNiKTtcbiAgICByZXMgPSB7fTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICAgIGlmICh0eXBlT2YodmFsKSA9PT0gJ29iamVjdCcgfHwgdHlwZU9mKHZhbCkgPT09ICdhcnJheScpIHtcbiAgICAgICAgcmVzW2tleV0gPSByZW5hbWVEZWVwKHZhbCwgY2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzW2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59O1xuIiwiY29uc3QgX2ZwID0gcmVxdWlyZSgnbG9kYXNoL2ZwJylcbmNvbnN0IGRlZXBSZW5hbWUgPSByZXF1aXJlKCdkZWVwLXJlbmFtZS1rZXlzJylcblxuY29uc3QgbW9kaWZ5VmFycyA9IF9mcC5waXBlKFxuICBfZnAuZ2V0KCdhbnRkT3ZlcnJpZGVzJyksXG4gIG9iaiA9PiBkZWVwUmVuYW1lKG9iaiwgX2ZwLmtlYmFiQ2FzZSlcbilcblxuY29uc3QgYW50ZFRoZW1lID0ge1xuICBwcmltYXJ5Q29sb3I6ICcjREMyRTQ4JyxcbiAgbGlua0NvbG9yOiAnIzE4OTBmZicsXG4gIHN1Y2Nlc3NDb2xvcjogJyM1MmM0MWEnLFxuICB3YXJuaW5nQ29sb3I6ICcjZmFhZDE0JyxcbiAgZXJyb3JDb2xvcjogJyNmNTIyMmQnLFxuICBmb250U2l6ZUJhc2U6ICcxNHB4JyxcbiAgaGVhZGluZ0NvbG9yOiAncmdiYSgwLCAwLCAwLCAwLDgpJyxcbiAgaGVhZGluZ0NvbG9yU2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLDUpJyxcbiAgZGlzYWJsZWRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4yNSknLFxuICBib3JkZXJSYWRpdXNCYXNlOiAnNHB4JyxcbiAgYm9yZGVyQ29sb3JCYXNlOiAnI2Q5ZDlkOScsXG4gIGJveFNoYWRvd0Jhc2U6ICcwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KSdcbn1cblxuLyoqXG4gKiBUaGVtZVxuICovXG5jb25zdCBnZXRUaGVtZSA9ICh7IGFudGRPdmVycmlkZXMgPSB7fSB9ID0ge30pID0+ICh7XG4gIGFudGRPdmVycmlkZXM6IE9iamVjdC5hc3NpZ24oYW50ZFRoZW1lLCBhbnRkT3ZlcnJpZGVzKVxufSlcbmV4cG9ydHMuZ2V0VGhlbWUgPSBnZXRUaGVtZVxuXG5jb25zdCBnZXRNb2RpZmVkVmFycyA9ICh7IGFudGRPdmVycmlkZXMgPSB7fSB9ID0ge30pID0+XG4gIG1vZGlmeVZhcnMoZ2V0VGhlbWUoeyBhbnRkT3ZlcnJpZGVzIH0pKVxuZXhwb3J0cy5nZXRNb2RpZmllZFZhcnMgPSBnZXRNb2RpZmVkVmFyc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBsaWdodFRoZW1lID0gdGhlbWUuZ2V0VGhlbWUoKVxuXG5jb25zdCB3aXRoVGhlbWUgPSBCYXNlQ29tcG9uZW50ID0+IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17bGlnaHRUaGVtZX0+XG4gICAgICA8QmFzZUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZVxuIl0sIm5hbWVzIjpbImlzQnVmZmVyIiwidHlwZU9mIiwicmVuYW1lIiwibW9kaWZ5VmFycyIsIl9mcCIsInBpcGUiLCJnZXQiLCJvYmoiLCJkZWVwUmVuYW1lIiwia2ViYWJDYXNlIiwiYW50ZFRoZW1lIiwicHJpbWFyeUNvbG9yIiwibGlua0NvbG9yIiwic3VjY2Vzc0NvbG9yIiwid2FybmluZ0NvbG9yIiwiZXJyb3JDb2xvciIsImZvbnRTaXplQmFzZSIsImhlYWRpbmdDb2xvciIsImhlYWRpbmdDb2xvclNlY29uZGFyeSIsImRpc2FibGVkQ29sb3IiLCJib3JkZXJSYWRpdXNCYXNlIiwiYm9yZGVyQ29sb3JCYXNlIiwiYm94U2hhZG93QmFzZSIsImdldFRoZW1lIiwiYW50ZE92ZXJyaWRlcyIsIk9iamVjdCIsImFzc2lnbiIsImV4cG9ydHMiLCJnZXRNb2RpZmVkVmFycyIsImxpZ2h0VGhlbWUiLCJ0aGVtZSIsIndpdGhUaGVtZSIsIkJhc2VDb21wb25lbnQiLCJwcm9wcyIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7QUFTQSxjQUFjLEdBQUcsVUFBVSxHQUFHLEVBQUU7RUFDOUIsT0FBTyxHQUFHLElBQUksSUFBSSxLQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDOUU7O0FBRUQsU0FBUyxRQUFRLEVBQUUsR0FBRyxFQUFFO0VBQ3RCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsS0FBSyxVQUFVLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO0NBQzVHOzs7QUFHRCxTQUFTLFlBQVksRUFBRSxHQUFHLEVBQUU7RUFDMUIsT0FBTyxPQUFPLEdBQUcsQ0FBQyxXQUFXLEtBQUssVUFBVSxJQUFJLE9BQU8sR0FBRyxDQUFDLEtBQUssS0FBSyxVQUFVLElBQUksUUFB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
