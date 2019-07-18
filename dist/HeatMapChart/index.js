import { _ as _slicedToArray$1, c as _extends$1 } from '../chunk-c69f4c9d.js';
import React__default, { createElement, PureComponent, createContext, createRef, useState, useRef } from 'react';
import PropTypes__default from 'prop-types';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

// Prepare a map style object for diffing
// If immutable - convert to plain object
// Work around some issues in the styles that would fail Mapbox's diffing
function normalizeStyle(style) {
  if (!style) {
    return null;
  }

  if (typeof style === 'string') {
    return style;
  }

  if (style.toJS) {
    style = style.toJS();
  }

  var layerIndex = style.layers.reduce(function (accum, current) {
    return Object.assign(accum, _defineProperty({}, current.id, current));
  }, {});
  style.layers = style.layers.map(function (layer) {
    layer = Object.assign({}, layer); // Breaks style diffing :(

    delete layer.interactive;
    var layerRef = layerIndex[layer.ref]; // Style diffing doesn't work with refs so expand them out manually before diffing.

    if (layerRef) {
      delete layer.ref;

      if (layerRef.type !== undefined) {
        layer.type = layerRef.type;
      }

      if (layerRef.source !== undefined) {
        layer.source = layerRef.source;
      }

      if (layerRef['source-layer'] !== undefined) {
        layer['source-layer'] = layerRef['source-layer'];
      }

      if (layerRef.minzoom !== undefined) {
        layer.minzoom = layerRef.minzoom;
      }

      if (layerRef.maxzoom !== undefined) {
        layer.maxzoom = layerRef.maxzoom;
      }

      if (layerRef.filter !== undefined) {
        layer.filter = layerRef.filter;
      }

      if (layerRef.layout !== undefined) {
        layer.layout = layer.layout || {};
        layer.layout = Object.assign({}, layer.layout, layerRef.layout);
      }
    }

    return layer;
  });
  return style;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var degree = Math.PI / 180;

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
  var out = new ARRAY_TYPE(4);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

function createMat4() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
function transformVector(matrix, vector) {
  var result = transformMat4([], vector, matrix);
  scale(result, result, 1 / result[3]);
  return result;
}
function mod(value, divisor) {
  var modulus = value % divisor;
  return modulus < 0 ? divisor + modulus : modulus;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale$1(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create$1() {
  var out = new ARRAY_TYPE(2);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach$1 = function () {
  var vec = create$1();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create$2() {
  var out = new ARRAY_TYPE(3);

  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */

function negate$1(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach$2 = function () {
  var vec = create$2();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'viewport-mercator-project: assertion failed.');
  }
}

var PI = Math.PI;
var PI_4 = PI / 4;
var DEGREES_TO_RADIANS = PI / 180;
var RADIANS_TO_DEGREES = 180 / PI;
var TILE_SIZE = 512;
var EARTH_CIRCUMFERENCE = 40.03e6;
var DEFAULT_ALTITUDE = 1.5;
function zoomToScale(zoom) {
  return Math.pow(2, zoom);
}
function lngLatToWorld(_ref, scale) {
  var _ref2 = _slicedToArray(_ref, 2),
      lng = _ref2[0],
      lat = _ref2[1];

  assert(Number.isFinite(lng) && Number.isFinite(scale));
  assert(Number.isFinite(lat) && lat >= -90 && lat <= 90, 'invalid latitude');
  scale *= TILE_SIZE;
  var lambda2 = lng * DEGREES_TO_RADIANS;
  var phi2 = lat * DEGREES_TO_RADIANS;
  var x = scale * (lambda2 + PI) / (2 * PI);
  var y = scale * (PI - Math.log(Math.tan(PI_4 + phi2 * 0.5))) / (2 * PI);
  return [x, y];
}
function worldToLngLat(_ref3, scale) {
  var _ref4 = _slicedToArray(_ref3, 2),
      x = _ref4[0],
      y = _ref4[1];

  scale *= TILE_SIZE;
  var lambda2 = x / scale * (2 * PI) - PI;
  var phi2 = 2 * (Math.atan(Math.exp(PI - y / scale * (2 * PI))) - PI_4);
  return [lambda2 * RADIANS_TO_DEGREES, phi2 * RADIANS_TO_DEGREES];
}
function getDistanceScales(_ref6) {
  var latitude = _ref6.latitude,
      longitude = _ref6.longitude,
      zoom = _ref6.zoom,
      scale = _ref6.scale,
      _ref6$highPrecision = _ref6.highPrecision,
      highPrecision = _ref6$highPrecision === void 0 ? false : _ref6$highPrecision;
  scale = scale !== undefined ? scale : zoomToScale(zoom);
  assert(Number.isFinite(latitude) && Number.isFinite(longitude) && Number.isFinite(scale));
  var result = {};
  var worldSize = TILE_SIZE * scale;
  var latCosine = Math.cos(latitude * DEGREES_TO_RADIANS);
  var pixelsPerDegreeX = worldSize / 360;
  var pixelsPerDegreeY = pixelsPerDegreeX / latCosine;
  var altPixelsPerMeter = worldSize / EARTH_CIRCUMFERENCE / latCosine;
  result.pixelsPerMeter = [altPixelsPerMeter, -altPixelsPerMeter, altPixelsPerMeter];
  result.metersPerPixel = [1 / altPixelsPerMeter, -1 / altPixelsPerMeter, 1 / altPixelsPerMeter];
  result.pixelsPerDegree = [pixelsPerDegreeX, -pixelsPerDegreeY, altPixelsPerMeter];
  result.degreesPerPixel = [1 / pixelsPerDegreeX, -1 / pixelsPerDegreeY, 1 / altPixelsPerMeter];

  if (highPrecision) {
    var latCosine2 = DEGREES_TO_RADIANS * Math.tan(latitude * DEGREES_TO_RADIANS) / latCosine;
    var pixelsPerDegreeY2 = pixelsPerDegreeX * latCosine2 / 2;
    var altPixelsPerDegree2 = worldSize / EARTH_CIRCUMFERENCE * latCosine2;
    var altPixelsPerMeter2 = altPixelsPerDegree2 / pixelsPerDegreeY * altPixelsPerMeter;
    result.pixelsPerDegree2 = [0, -pixelsPerDegreeY2, altPixelsPerDegree2];
    result.pixelsPerMeter2 = [altPixelsPerMeter2, 0, altPixelsPerMeter2];
  }

  return result;
}
function getViewMatrix(_ref7) {
  var height = _ref7.height,
      pitch = _ref7.pitch,
      bearing = _ref7.bearing,
      altitude = _ref7.altitude,
      _ref7$center = _ref7.center,
      center = _ref7$center === void 0 ? null : _ref7$center,
      _ref7$flipY = _ref7.flipY,
      flipY = _ref7$flipY === void 0 ? false : _ref7$flipY;
  var vm = createMat4();
  translate(vm, vm, [0, 0, -altitude]);
  scale$1(vm, vm, [1, 1, 1 / height]);
  rotateX(vm, vm, -pitch * DEGREES_TO_RADIANS);
  rotateZ(vm, vm, bearing * DEGREES_TO_RADIANS);

  if (flipY) {
    scale$1(vm, vm, [1, -1, 1]);
  }

  if (center) {
    translate(vm, vm, negate$1([], center));
  }

  return vm;
}
function getProjectionParameters(_ref8) {
  var width = _ref8.width,
      height = _ref8.height,
      _ref8$altitude = _ref8.altitude,
      altitude = _ref8$altitude === void 0 ? DEFAULT_ALTITUDE : _ref8$altitude,
      _ref8$pitch = _ref8.pitch,
      pitch = _ref8$pitch === void 0 ? 0 : _ref8$pitch,
      _ref8$nearZMultiplier = _ref8.nearZMultiplier,
      nearZMultiplier = _ref8$nearZMultiplier === void 0 ? 1 : _ref8$nearZMultiplier,
      _ref8$farZMultiplier = _ref8.farZMultiplier,
      farZMultiplier = _ref8$farZMultiplier === void 0 ? 1 : _ref8$farZMultiplier;
  var pitchRadians = pitch * DEGREES_TO_RADIANS;
  var halfFov = Math.atan(0.5 / altitude);
  var topHalfSurfaceDistance = Math.sin(halfFov) * altitude / Math.sin(Math.PI / 2 - pitchRadians - halfFov);
  var farZ = Math.cos(Math.PI / 2 - pitchRadians) * topHalfSurfaceDistance + altitude;
  return {
    fov: 2 * Math.atan(height / 2 / altitude),
    aspect: width / height,
    focalDistance: altitude,
    near: nearZMultiplier,
    far: farZ * farZMultiplier
  };
}
function getProjectionMatrix(_ref9) {
  var width = _ref9.width,
      height = _ref9.height,
      pitch = _ref9.pitch,
      altitude = _ref9.altitude,
      nearZMultiplier = _ref9.nearZMultiplier,
      farZMultiplier = _ref9.farZMultiplier;

  var _getProjectionParamet = getProjectionParameters({
    width: width,
    height: height,
    altitude: altitude,
    pitch: pitch,
    nearZMultiplier: nearZMultiplier,
    farZMultiplier: farZMultiplier
  }),
      fov = _getProjectionParamet.fov,
      aspect = _getProjectionParamet.aspect,
      near = _getProjectionParamet.near,
      far = _getProjectionParamet.far;

  var projectionMatrix = perspective([], fov, aspect, near, far);
  return projectionMatrix;
}
function worldToPixels(xyz, pixelProjectionMatrix) {
  var _xyz2 = _slicedToArray(xyz, 3),
      x = _xyz2[0],
      y = _xyz2[1],
      _xyz2$ = _xyz2[2],
      z = _xyz2$ === void 0 ? 0 : _xyz2$;

  assert(Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z));
  return transformVector(pixelProjectionMatrix, [x, y, z, 1]);
}
function pixelsToWorld(xyz, pixelUnprojectionMatrix) {
  var targetZ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var _xyz3 = _slicedToArray(xyz, 3),
      x = _xyz3[0],
      y = _xyz3[1],
      z = _xyz3[2];

  assert(Number.isFinite(x) && Number.isFinite(y), 'invalid pixel coordinate');

  if (Number.isFinite(z)) {
    var coord = transformVector(pixelUnprojectionMatrix, [x, y, z, 1]);
    return coord;
  }

  var coord0 = transformVector(pixelUnprojectionMatrix, [x, y, 0, 1]);
  var coord1 = transformVector(pixelUnprojectionMatrix, [x, y, 1, 1]);
  var z0 = coord0[2];
  var z1 = coord1[2];
  var t = z0 === z1 ? 0 : ((targetZ || 0) - z0) / (z1 - z0);
  return lerp([], coord0, coord1, t);
}

var IDENTITY = createMat4();

var Viewport = function () {
  function Viewport() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        width = _ref.width,
        height = _ref.height,
        _ref$viewMatrix = _ref.viewMatrix,
        viewMatrix = _ref$viewMatrix === void 0 ? IDENTITY : _ref$viewMatrix,
        _ref$projectionMatrix = _ref.projectionMatrix,
        projectionMatrix = _ref$projectionMatrix === void 0 ? IDENTITY : _ref$projectionMatrix;

    _classCallCheck(this, Viewport);

    this.width = width || 1;
    this.height = height || 1;
    this.scale = 1;
    this.pixelsPerMeter = 1;
    this.viewMatrix = viewMatrix;
    this.projectionMatrix = projectionMatrix;
    var vpm = createMat4();
    multiply(vpm, vpm, this.projectionMatrix);
    multiply(vpm, vpm, this.viewMatrix);
    this.viewProjectionMatrix = vpm;
    var m = createMat4();
    scale$1(m, m, [this.width / 2, -this.height / 2, 1]);
    translate(m, m, [1, -1, 0]);
    multiply(m, m, this.viewProjectionMatrix);
    var mInverse = invert(createMat4(), m);

    if (!mInverse) {
      throw new Error('Pixel project matrix not invertible');
    }

    this.pixelProjectionMatrix = m;
    this.pixelUnprojectionMatrix = mInverse;
    this.equals = this.equals.bind(this);
    this.project = this.project.bind(this);
    this.unproject = this.unproject.bind(this);
    this.projectPosition = this.projectPosition.bind(this);
    this.unprojectPosition = this.unprojectPosition.bind(this);
    this.projectFlat = this.projectFlat.bind(this);
    this.unprojectFlat = this.unprojectFlat.bind(this);
  }

  _createClass(Viewport, [{
    key: "equals",
    value: function equals$1(viewport) {
      if (!(viewport instanceof Viewport)) {
        return false;
      }

      return viewport.width === this.width && viewport.height === this.height && equals(viewport.projectionMatrix, this.projectionMatrix) && equals(viewport.viewMatrix, this.viewMatrix);
    }
  }, {
    key: "project",
    value: function project(xyz) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$topLeft = _ref2.topLeft,
          topLeft = _ref2$topLeft === void 0 ? true : _ref2$topLeft;

      var worldPosition = this.projectPosition(xyz);
      var coord = worldToPixels(worldPosition, this.pixelProjectionMatrix);

      var _coord = _slicedToArray(coord, 2),
          x = _coord[0],
          y = _coord[1];

      var y2 = topLeft ? y : this.height - y;
      return xyz.length === 2 ? [x, y2] : [x, y2, coord[2]];
    }
  }, {
    key: "unproject",
    value: function unproject(xyz) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$topLeft = _ref3.topLeft,
          topLeft = _ref3$topLeft === void 0 ? true : _ref3$topLeft,
          targetZ = _ref3.targetZ;

      var _xyz = _slicedToArray(xyz, 3),
          x = _xyz[0],
          y = _xyz[1],
          z = _xyz[2];

      var y2 = topLeft ? y : this.height - y;
      var targetZWorld = targetZ && targetZ * this.pixelsPerMeter;
      var coord = pixelsToWorld([x, y2, z], this.pixelUnprojectionMatrix, targetZWorld);

      var _this$unprojectPositi = this.unprojectPosition(coord),
          _this$unprojectPositi2 = _slicedToArray(_this$unprojectPositi, 3),
          X = _this$unprojectPositi2[0],
          Y = _this$unprojectPositi2[1],
          Z = _this$unprojectPositi2[2];

      if (Number.isFinite(z)) {
        return [X, Y, Z];
      }

      return Number.isFinite(targetZ) ? [X, Y, targetZ] : [X, Y];
    }
  }, {
    key: "projectPosition",
    value: function projectPosition(xyz) {
      var _this$projectFlat = this.projectFlat(xyz),
          _this$projectFlat2 = _slicedToArray(_this$projectFlat, 2),
          X = _this$projectFlat2[0],
          Y = _this$projectFlat2[1];

      var Z = (xyz[2] || 0) * this.pixelsPerMeter;
      return [X, Y, Z];
    }
  }, {
    key: "unprojectPosition",
    value: function unprojectPosition(xyz) {
      var _this$unprojectFlat = this.unprojectFlat(xyz),
          _this$unprojectFlat2 = _slicedToArray(_this$unprojectFlat, 2),
          X = _this$unprojectFlat2[0],
          Y = _this$unprojectFlat2[1];

      var Z = (xyz[2] || 0) / this.pixelsPerMeter;
      return [X, Y, Z];
    }
  }, {
    key: "projectFlat",
    value: function projectFlat(xyz) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;
      return xyz;
    }
  }, {
    key: "unprojectFlat",
    value: function unprojectFlat(xyz) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;
      return xyz;
    }
  }]);

  return Viewport;
}();

function fitBounds(_ref) {
  var width = _ref.width,
      height = _ref.height,
      bounds = _ref.bounds,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 0 : _ref$padding,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? [0, 0] : _ref$offset;

  var _bounds = _slicedToArray(bounds, 2),
      _bounds$ = _slicedToArray(_bounds[0], 2),
      west = _bounds$[0],
      south = _bounds$[1],
      _bounds$2 = _slicedToArray(_bounds[1], 2),
      east = _bounds$2[0],
      north = _bounds$2[1];

  if (Number.isFinite(padding)) {
    var p = padding;
    padding = {
      top: p,
      bottom: p,
      left: p,
      right: p
    };
  } else {
    assert(Number.isFinite(padding.top) && Number.isFinite(padding.bottom) && Number.isFinite(padding.left) && Number.isFinite(padding.right));
  }

  var viewport = new WebMercatorViewport({
    width: width,
    height: height,
    longitude: 0,
    latitude: 0,
    zoom: 0
  });
  var nw = viewport.project([west, north]);
  var se = viewport.project([east, south]);
  var size = [Math.abs(se[0] - nw[0]), Math.abs(se[1] - nw[1])];
  var targetSize = [width - padding.left - padding.right - Math.abs(offset[0]) * 2, height - padding.top - padding.bottom - Math.abs(offset[1]) * 2];
  assert(targetSize[0] > 0 && targetSize[1] > 0);
  var scaleX = targetSize[0] / size[0];
  var scaleY = targetSize[1] / size[1];
  var offsetX = (padding.right - padding.left) / 2 / scaleX;
  var offsetY = (padding.bottom - padding.top) / 2 / scaleY;
  var center = [(se[0] + nw[0]) / 2 + offsetX, (se[1] + nw[1]) / 2 + offsetY];
  var centerLngLat = viewport.unproject(center);
  var zoom = viewport.zoom + Math.log2(Math.abs(Math.min(scaleX, scaleY)));
  return {
    longitude: centerLngLat[0],
    latitude: centerLngLat[1],
    zoom: zoom
  };
}

var WebMercatorViewport = function (_Viewport) {
  _inherits(WebMercatorViewport, _Viewport);

  function WebMercatorViewport() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        width = _ref.width,
        height = _ref.height,
        _ref$latitude = _ref.latitude,
        latitude = _ref$latitude === void 0 ? 0 : _ref$latitude,
        _ref$longitude = _ref.longitude,
        longitude = _ref$longitude === void 0 ? 0 : _ref$longitude,
        _ref$zoom = _ref.zoom,
        zoom = _ref$zoom === void 0 ? 0 : _ref$zoom,
        _ref$pitch = _ref.pitch,
        pitch = _ref$pitch === void 0 ? 0 : _ref$pitch,
        _ref$bearing = _ref.bearing,
        bearing = _ref$bearing === void 0 ? 0 : _ref$bearing,
        _ref$altitude = _ref.altitude,
        altitude = _ref$altitude === void 0 ? 1.5 : _ref$altitude,
        nearZMultiplier = _ref.nearZMultiplier,
        farZMultiplier = _ref.farZMultiplier;

    _classCallCheck(this, WebMercatorViewport);

    width = width || 1;
    height = height || 1;
    var scale = zoomToScale(zoom);
    altitude = Math.max(0.75, altitude);
    var center = lngLatToWorld([longitude, latitude], scale);
    center[2] = 0;
    var projectionMatrix = getProjectionMatrix({
      width: width,
      height: height,
      pitch: pitch,
      bearing: bearing,
      altitude: altitude,
      nearZMultiplier: nearZMultiplier || 1 / height,
      farZMultiplier: farZMultiplier || 1.01
    });
    var viewMatrix = getViewMatrix({
      height: height,
      center: center,
      pitch: pitch,
      bearing: bearing,
      altitude: altitude,
      flipY: true
    });
    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebMercatorViewport).call(this, {
      width: width,
      height: height,
      viewMatrix: viewMatrix,
      projectionMatrix: projectionMatrix
    }));
    _this.latitude = latitude;
    _this.longitude = longitude;
    _this.zoom = zoom;
    _this.pitch = pitch;
    _this.bearing = bearing;
    _this.altitude = altitude;
    _this.scale = scale;
    _this.center = center;
    _this.pixelsPerMeter = getDistanceScales(_assertThisInitialized(_assertThisInitialized(_this))).pixelsPerMeter[2];
    Object.freeze(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(WebMercatorViewport, [{
    key: "projectFlat",
    value: function projectFlat(lngLat) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;
      return lngLatToWorld(lngLat, scale);
    }
  }, {
    key: "unprojectFlat",
    value: function unprojectFlat(xy) {
      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scale;
      return worldToLngLat(xy, scale);
    }
  }, {
    key: "getMapCenterByLngLatPosition",
    value: function getMapCenterByLngLatPosition(_ref2) {
      var lngLat = _ref2.lngLat,
          pos = _ref2.pos;
      var fromLocation = pixelsToWorld(pos, this.pixelUnprojectionMatrix);
      var toLocation = lngLatToWorld(lngLat, this.scale);
      var translate = add([], toLocation, negate([], fromLocation));
      var newCenter = add([], this.center, translate);
      return worldToLngLat(newCenter, this.scale);
    }
  }, {
    key: "getLocationAtPoint",
    value: function getLocationAtPoint(_ref3) {
      var lngLat = _ref3.lngLat,
          pos = _ref3.pos;
      return this.getMapCenterByLngLatPosition({
        lngLat: lngLat,
        pos: pos
      });
    }
  }, {
    key: "fitBounds",
    value: function fitBounds$1(bounds) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var width = this.width,
          height = this.height;

      var _fitBounds2 = fitBounds(Object.assign({
        width: width,
        height: height,
        bounds: bounds
      }, options)),
          longitude = _fitBounds2.longitude,
          latitude = _fitBounds2.latitude,
          zoom = _fitBounds2.zoom;

      return new WebMercatorViewport({
        width: width,
        height: height,
        longitude: longitude,
        latitude: latitude,
        zoom: zoom
      });
    }
  }]);

  return WebMercatorViewport;
}(Viewport);

var MAX_LATITUDE = 85.05113;
var MIN_LATITUDE = -85.05113;
function normalizeViewportProps(_ref) {
  var width = _ref.width,
      height = _ref.height,
      longitude = _ref.longitude,
      latitude = _ref.latitude,
      zoom = _ref.zoom,
      _ref$pitch = _ref.pitch,
      pitch = _ref$pitch === void 0 ? 0 : _ref$pitch,
      _ref$bearing = _ref.bearing,
      bearing = _ref$bearing === void 0 ? 0 : _ref$bearing;

  if (longitude < -180 || longitude > 180) {
    longitude = mod(longitude + 180, 360) - 180;
  }

  if (bearing < -180 || bearing > 180) {
    bearing = mod(bearing + 180, 360) - 180;
  }

  var flatViewport = new WebMercatorViewport({
    width: width,
    height: height,
    longitude: longitude,
    latitude: latitude,
    zoom: zoom
  });
  var topY = flatViewport.project([longitude, MAX_LATITUDE])[1];
  var bottomY = flatViewport.project([longitude, MIN_LATITUDE])[1];
  var shiftY = 0;

  if (bottomY - topY < height) {
    zoom += Math.log2(height / (bottomY - topY));
    flatViewport = new WebMercatorViewport({
      width: width,
      height: height,
      longitude: longitude,
      latitude: latitude,
      zoom: zoom
    });
    topY = flatViewport.project([longitude, MAX_LATITUDE])[1];
    bottomY = flatViewport.project([longitude, MIN_LATITUDE])[1];
  }

  if (topY > 0) {
    shiftY = topY;
  } else if (bottomY < height) {
    shiftY = bottomY - height;
  }

  if (shiftY) {
    latitude = flatViewport.unproject([width / 2, height / 2 + shiftY])[1];
  }

  return {
    width: width,
    height: height,
    longitude: longitude,
    latitude: latitude,
    zoom: zoom,
    pitch: pitch,
    bearing: bearing
  };
}

/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 **/

function createDetectElementResize(nonce) {
  // Check `document` and `window` in case of server-side rendering
  var _window;
  if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = global;
  }

  var attachEvent = typeof document !== 'undefined' && document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };
      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };

    /* Detect CSS Animations support to detect element display/re-attach */
    var animation = false,
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = document.createElement('fakeelement');
      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }

    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles(doc) {
    if (!doc.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = doc.head || doc.getElementsByTagName('head')[0],
          style = doc.createElement('style');

      style.id = 'detectElementResize';
      style.type = 'text/css';

      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent('onresize', fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;
        var elementStyle = _window.getComputedStyle(element);
        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
        element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);

        /* Listen for a css animation to detect element display/re-attach */
        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent('onresize', fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
          // Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var AutoSizer = function (_React$PureComponent) {
  inherits(AutoSizer, _React$PureComponent);

  function AutoSizer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, AutoSizer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AutoSizer.__proto__ || Object.getPrototypeOf(AutoSizer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    }, _this._onResize = function () {
      var _this$props = _this.props,
          disableHeight = _this$props.disableHeight,
          disableWidth = _this$props.disableWidth,
          onResize = _this$props.onResize;


      if (_this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.

        var _height = _this._parentNode.offsetHeight || 0;
        var _width = _this._parentNode.offsetWidth || 0;

        var _style = window.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(_style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(_style.paddingRight, 10) || 0;
        var paddingTop = parseInt(_style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(_style.paddingBottom, 10) || 0;

        var newHeight = _height - paddingTop - paddingBottom;
        var newWidth = _width - paddingLeft - paddingRight;

        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: _height - paddingTop - paddingBottom,
            width: _width - paddingLeft - paddingRight
          });

          onResize({ height: _height, width: _width });
        }
      }
    }, _this._setRef = function (autoSizer) {
      _this._autoSizer = autoSizer;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(AutoSizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode;

        // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41
        this._detectElementResize = createDetectElementResize(nonce);
        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

        this._onResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disableHeight = _props.disableHeight,
          disableWidth = _props.disableWidth,
          style = _props.style;
      var _state = this.state,
          height = _state.height,
          width = _state.width;

      // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = { overflow: 'visible' };
      var childParams = {};

      // Avoid rendering children before the initial measurements have been collected.
      // At best this would just be wasting cycles.
      var bailoutOnChildren = false;

      if (!disableHeight) {
        if (height === 0) {
          bailoutOnChildren = true;
        }
        outerStyle.height = 0;
        childParams.height = height;
      }

      if (!disableWidth) {
        if (width === 0) {
          bailoutOnChildren = true;
        }
        outerStyle.width = 0;
        childParams.width = width;
      }

      return createElement(
        'div',
        {
          className: className,
          ref: this._setRef,
          style: _extends({}, outerStyle, style) },
        !bailoutOnChildren && children(childParams)
      );
    }
  }]);
  return AutoSizer;
}(PureComponent);

AutoSizer.defaultProps = {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false,
  style: {}
};

/* global window, global, document */
var document_ = typeof document !== 'undefined' ? document : {};

function noop() {}

var propTypes = {
  // Creation parameters
  container: PropTypes__default.object,

  /** The container to have the map. */
  gl: PropTypes__default.object,

  /** External WebGLContext to use */
  mapboxApiAccessToken: PropTypes__default.string,

  /** Mapbox API access token for Mapbox tiles/styles. */
  attributionControl: PropTypes__default.bool,

  /** Show attribution control or not. */
  preserveDrawingBuffer: PropTypes__default.bool,

  /** Useful when you want to export the canvas as a PNG. */
  reuseMaps: PropTypes__default.bool,
  transformRequest: PropTypes__default.func,

  /** The transformRequest callback for the map */
  mapOptions: PropTypes__default.object,

  /** Extra options to pass to Mapbox constructor. See #545. **/
  mapStyle: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.object]),

  /** The Mapbox style. A string url to a MapboxGL style */
  visible: PropTypes__default.bool,

  /** Whether the map is visible */
  onLoad: PropTypes__default.func,

  /** The onLoad callback for the map */
  onError: PropTypes__default.func,

  /** The onError callback for the map */
  // Map view state
  width: PropTypes__default.number,

  /** The width of the map. */
  height: PropTypes__default.number,

  /** The height of the map. */
  viewState: PropTypes__default.object,

  /** object containing lng/lat/zoom/bearing/pitch */
  longitude: PropTypes__default.number,

  /** The longitude of the center of the map. */
  latitude: PropTypes__default.number,

  /** The latitude of the center of the map. */
  zoom: PropTypes__default.number,

  /** The tile zoom level of the map. */
  bearing: PropTypes__default.number,

  /** Specify the bearing of the viewport */
  pitch: PropTypes__default.number,

  /** Specify the pitch of the viewport */
  // Note: Non-public API, see https://github.com/mapbox/mapbox-gl-js/issues/1137
  altitude: PropTypes__default.number
  /** Altitude of the viewport camera. Default 1.5 "screen heights" */

};
var defaultProps = {
  container: document_.body,
  mapboxApiAccessToken: getAccessToken(),
  preserveDrawingBuffer: false,
  attributionControl: true,
  reuseMaps: false,
  mapOptions: {},
  mapStyle: 'mapbox://styles/mapbox/light-v8',
  visible: true,
  onLoad: noop,
  onError: noop,
  width: 0,
  height: 0,
  longitude: 0,
  latitude: 0,
  zoom: 0,
  bearing: 0,
  pitch: 0
};
// Try to get access token from URL, env, local storage or config
function getAccessToken() {
  var accessToken = null;

  if (typeof window !== 'undefined' && window.location) {
    var match = window.location.search.match(/access_token=([^&\/]*)/);
    accessToken = match && match[1];
  }

  if (!accessToken && typeof process !== 'undefined') {
    // Note: This depends on bundler plugins (e.g. webpack) importing environment correctly
    accessToken = accessToken || process.env.MapboxAccessToken || process.env.REACT_APP_MAPBOX_ACCESS_TOKEN; // eslint-disable-line
  } // Prevents mapbox from throwing


  return accessToken || 'no-token';
} // Helper function to merge defaultProps and check prop types

function checkPropTypes(props) {
  var component = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'component';

  // TODO - check for production (unless done by prop types package?)
  if (props.debug) {
    PropTypes__default.checkPropTypes(propTypes, props, 'prop', component);
  }
} // A small wrapper class for mapbox-gl
// - Provides a prop style interface (that can be trivially used by a React wrapper)
// - Makes sure mapbox doesn't crash under Node
// - Handles map reuse (to work around Mapbox resource leak issues)
// - Provides support for specifying tokens during development


var Mapbox =
/*#__PURE__*/
function () {
  function Mapbox(props) {
    _classCallCheck(this, Mapbox);

    _defineProperty(this, "mapboxgl", void 0);

    _defineProperty(this, "props", defaultProps);

    _defineProperty(this, "_map", null);

    _defineProperty(this, "width", 0);

    _defineProperty(this, "height", 0);

    if (!props.mapboxgl) {
      throw new Error('Mapbox not available');
    }

    this.mapboxgl = props.mapboxgl;

    if (!Mapbox.initialized && console.debug) {
      // eslint-disable-line
      Mapbox.initialized = true; // Version detection using babel plugin

      /* global __VERSION__ */
      // $FlowFixMe

      var VERSION = "4.0.0";
      console.debug("react-map-gl: ".concat(VERSION, " using mapbox-gl v").concat(this.mapboxgl.version)); // eslint-disable-line

      this._checkStyleSheet(this.mapboxgl.version);
    }

    this._initialize(props);
  }

  _createClass(Mapbox, [{
    key: "finalize",
    value: function finalize() {
      this._destroy();

      return this;
    }
  }, {
    key: "setProps",
    value: function setProps(props) {
      this._update(this.props, props);

      return this;
    } // Mapbox's map.resize() reads size from DOM, so DOM element must already be resized
    // In a system like React we must wait to read size until after render
    // (e.g. until "componentDidUpdate")

  }, {
    key: "resize",
    value: function resize() {
      this._map.resize(); // map render will throw error if style is not loaded


      if (this._map.isStyleLoaded()) {
        this._map._render();
      }

      return this;
    } // External apps can access map this way

  }, {
    key: "getMap",
    value: function getMap() {
      return this._map;
    } // PRIVATE API

  }, {
    key: "_create",
    value: function _create(props) {
      // Reuse a saved map, if available
      if (props.reuseMaps && Mapbox.savedMap) {
        this._map = Mapbox.savedMap; // When reusing the saved map, we need to reparent the map(canvas) and other child nodes
        // intoto the new container from the props.
        // Step1: reparenting child nodes from old container to new container

        var oldContainer = this._map.getContainer();

        var newContainer = props.container;
        newContainer.classList.add('mapboxgl-map');

        while (oldContainer.childNodes.length > 0) {
          newContainer.appendChild(oldContainer.childNodes[0]);
        } // Step2: replace the internal container with new container from the react component


        this._map._container = newContainer;
        Mapbox.savedMap = null; // Update style

        if (props.mapStyle) {
          this._map.setStyle(props.mapStyle);
        } // TODO - need to call onload again, need to track with Promise?


        props.onLoad();
      } else {
        if (props.gl) {
          var getContext = HTMLCanvasElement.prototype.getContext; // Hijack canvas.getContext to return our own WebGLContext
          // This will be called inside the mapboxgl.Map constructor
          // $FlowFixMe

          HTMLCanvasElement.prototype.getContext = function () {
            // Unhijack immediately
            // $FlowFixMe
            HTMLCanvasElement.prototype.getContext = getContext;
            return props.gl;
          };
        }

        var mapOptions = {
          container: props.container,
          center: [0, 0],
          zoom: 8,
          pitch: 0,
          bearing: 0,
          style: props.mapStyle,
          interactive: false,
          trackResize: false,
          attributionControl: props.attributionControl,
          preserveDrawingBuffer: props.preserveDrawingBuffer
        }; // We don't want to pass a null or no-op transformRequest function.

        if (props.transformRequest) {
          mapOptions.transformRequest = props.transformRequest;
        }

        this._map = new this.mapboxgl.Map(Object.assign({}, mapOptions, props.mapOptions)); // Attach optional onLoad function

        this._map.once('load', props.onLoad);

        this._map.on('error', props.onError);
      }

      return this;
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      if (!this._map) {
        return;
      }

      if (!Mapbox.savedMap) {
        Mapbox.savedMap = this._map;
      } else {
        this._map.remove();
      }

      this._map = null;
    }
  }, {
    key: "_initialize",
    value: function _initialize(props) {
      var _this = this;

      props = Object.assign({}, defaultProps, props);
      checkPropTypes(props, 'Mapbox'); // Creation only props

      this.mapboxgl.accessToken = props.mapboxApiAccessToken || defaultProps.mapboxApiAccessToken;

      this._create(props); // Hijack dimension properties
      // This eliminates the timing issue between calling resize() and DOM update

      /* eslint-disable accessor-pairs */


      var _props = props,
          container = _props.container; // $FlowFixMe

      Object.defineProperty(container, 'offsetWidth', {
        get: function get() {
          return _this.width;
        }
      }); // $FlowFixMe

      Object.defineProperty(container, 'clientWidth', {
        get: function get() {
          return _this.width;
        }
      }); // $FlowFixMe

      Object.defineProperty(container, 'offsetHeight', {
        get: function get() {
          return _this.height;
        }
      }); // $FlowFixMe

      Object.defineProperty(container, 'clientHeight', {
        get: function get() {
          return _this.height;
        }
      }); // Disable outline style

      var canvas = this._map.getCanvas();

      if (canvas) {
        canvas.style.outline = 'none';
      }

      this._updateMapViewport({}, props);

      this._updateMapSize({}, props);

      this.props = props;
    }
  }, {
    key: "_update",
    value: function _update(oldProps, newProps) {
      if (!this._map) {
        return;
      }

      newProps = Object.assign({}, this.props, newProps);
      checkPropTypes(newProps, 'Mapbox');

      this._updateMapViewport(oldProps, newProps);

      this._updateMapSize(oldProps, newProps);

      this.props = newProps;
    } // Note: needs to be called after render (e.g. in componentDidUpdate)

  }, {
    key: "_updateMapSize",
    value: function _updateMapSize(oldProps, newProps) {
      var sizeChanged = oldProps.width !== newProps.width || oldProps.height !== newProps.height;

      if (sizeChanged) {
        this.width = newProps.width;
        this.height = newProps.height;
        this.resize();
      }
    }
  }, {
    key: "_updateMapViewport",
    value: function _updateMapViewport(oldProps, newProps) {
      var oldViewState = this._getViewState(oldProps);

      var newViewState = this._getViewState(newProps);

      var viewportChanged = newViewState.latitude !== oldViewState.latitude || newViewState.longitude !== oldViewState.longitude || newViewState.zoom !== oldViewState.zoom || newViewState.pitch !== oldViewState.pitch || newViewState.bearing !== oldViewState.bearing || newViewState.altitude !== oldViewState.altitude;

      if (viewportChanged) {
        this._map.jumpTo(this._getMapboxViewStateProps(newProps)); // TODO - jumpTo doesn't handle altitude


        if (newViewState.altitude !== oldViewState.altitude) {
          this._map.transform.altitude = newViewState.altitude;
        }
      }
    }
  }, {
    key: "_getViewState",
    value: function _getViewState(props) {
      var _ref = props.viewState || props,
          longitude = _ref.longitude,
          latitude = _ref.latitude,
          zoom = _ref.zoom,
          pitch = _ref.pitch,
          bearing = _ref.bearing,
          _ref$altitude = _ref.altitude,
          altitude = _ref$altitude === void 0 ? 1.5 : _ref$altitude;

      return {
        longitude: longitude,
        latitude: latitude,
        zoom: zoom,
        pitch: pitch,
        bearing: bearing,
        altitude: altitude
      };
    }
  }, {
    key: "_checkStyleSheet",
    value: function _checkStyleSheet() {
      var mapboxVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.47.0';

      if (typeof document_ === 'undefined') {
        return;
      } // check mapbox styles


      try {
        var testElement = document_.createElement('div');
        testElement.className = 'mapboxgl-map';
        testElement.style.display = 'none';
        document_.body.append(testElement);
        var isCssLoaded = window.getComputedStyle(testElement).position !== 'static';

        if (!isCssLoaded) {
          // attempt to insert mapbox stylesheet
          var link = document_.createElement('link');
          link.setAttribute('rel', 'stylesheet');
          link.setAttribute('type', 'text/css');
          link.setAttribute('href', "https://api.tiles.mapbox.com/mapbox-gl-js/v".concat(mapboxVersion, "/mapbox-gl.css"));
          document_.head.append(link);
        }
      } catch (error) {// do nothing
      }
    }
  }, {
    key: "_getMapboxViewStateProps",
    value: function _getMapboxViewStateProps(props) {
      var viewState = this._getViewState(props);

      return {
        center: [viewState.longitude, viewState.latitude],
        zoom: viewState.zoom,
        bearing: viewState.bearing,
        pitch: viewState.pitch
      };
    }
  }]);

  return Mapbox;
}();

_defineProperty(Mapbox, "initialized", false);

_defineProperty(Mapbox, "propTypes", propTypes);

_defineProperty(Mapbox, "defaultProps", defaultProps);

_defineProperty(Mapbox, "savedMap", null);

var mapboxgl = null;

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

var config = {};
config.EPSILON = 1e-12;
config.debug = true;
config.precision = 4;
config.printTypes = false;
config.printDegrees = false;
config.printRowMajor = true;
function checkNumber(value) {
  if (!Number.isFinite(value)) {
    throw new Error("Invalid number ".concat(value));
  }

  return value;
}

function round(value) {
  return Math.round(value / config.EPSILON) * config.EPSILON;
}

function formatValue(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$precision = _ref.precision,
      precision = _ref$precision === void 0 ? config.precision || 4 : _ref$precision;

  value = round(value);
  return parseFloat(value.toPrecision(precision));
}
function isArray(value) {
  return Array.isArray(value) || ArrayBuffer.isView(value) && value.length !== undefined;
}
function clone(array) {
  return array.clone ? array.clone() : new Array(array);
}

function map(value, func) {
  if (isArray(value)) {
    var result = clone(value);

    for (var i = 0; i < result.length; ++i) {
      result[i] = func(result[i], i, result);
    }

    return result;
  }

  return func(value);
}

function radians(degrees) {
  return map(degrees, function (degrees) {
    return degrees / 180 * Math.PI;
  });
}
function degrees(radians) {
  return map(radians, function (radians) {
    return radians * 180 / Math.PI;
  });
}
function clamp(value, min, max) {
  return map(value, function (value) {
    return Math.max(min, Math.min(max, value));
  });
}
function lerp$1(a, b, t) {
  if (isArray(a)) {
    return a.map(function (ai, i) {
      return lerp$1(ai, b[i], t);
    });
  }

  return t * b + (1 - t) * a;
}
function equals$1(a, b) {
  if (isArray(a) && isArray(b)) {
    if (a === b) {
      return true;
    }

    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length; ++i) {
      if (!equals$1(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  return Math.abs(a - b) <= config.EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}

var MathArray = function (_Array) {
  _inherits(MathArray, _Array);

  function MathArray() {
    _classCallCheck(this, MathArray);

    return _possibleConstructorReturn(this, _getPrototypeOf(MathArray).apply(this, arguments));
  }

  _createClass(MathArray, [{
    key: "clone",
    value: function clone() {
      return new this.constructor().copy(this).check();
    }
  }, {
    key: "copy",
    value: function copy(array) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = array[i];
      }

      return this.check();
    }
  }, {
    key: "set",
    value: function set() {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = (i < 0 || arguments.length <= i ? undefined : arguments[i]) || 0;
      }

      return this.check();
    }
  }, {
    key: "fromArray",
    value: function fromArray(array) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = array[i + offset];
      }

      return this.check();
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.formatString(config);
    }
  }, {
    key: "formatString",
    value: function formatString(opts) {
      var string = '';

      for (var i = 0; i < this.ELEMENTS; ++i) {
        string += (i > 0 ? ', ' : '') + formatValue(this[i], opts);
      }

      return "".concat(opts.printTypes ? this.constructor.name : '', "[").concat(string, "]");
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        array[offset + i] = this[i];
      }

      return array;
    }
  }, {
    key: "toFloat32Array",
    value: function toFloat32Array() {
      return new Float32Array(this);
    }
  }, {
    key: "equals",
    value: function equals(array) {
      if (!array || this.length !== array.length) {
        return false;
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        if (!equals$1(this[i], array[i])) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "exactEquals",
    value: function exactEquals(array) {
      if (!array || this.length !== array.length) {
        return false;
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        if (this[i] !== array[i]) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "negate",
    value: function negate() {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = -this[i];
      }

      return this.check();
    }
  }, {
    key: "inverse",
    value: function inverse() {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = 1 / this[i];
      }

      return this.check();
    }
  }, {
    key: "lerp",
    value: function lerp(a, b, t) {
      if (t === undefined) {
        t = b;
        b = a;
        a = this;
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        var ai = a[i];
        this[i] = ai + t * (b[i] - ai);
      }

      return this.check();
    }
  }, {
    key: "min",
    value: function min(vector) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.min(vector[i], this[i]);
      }

      return this.check();
    }
  }, {
    key: "max",
    value: function max(vector) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.max(vector[i], this[i]);
      }

      return this.check();
    }
  }, {
    key: "clamp",
    value: function clamp(minVector, maxVector) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.min(Math.max(this[i], minVector[i]), maxVector[i]);
      }

      return this.check();
    }
  }, {
    key: "validate",
    value: function validate() {
      var valid = this.length === this.ELEMENTS;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        valid = valid && Number.isFinite(this[i]);
      }

      return valid;
    }
  }, {
    key: "check",
    value: function check() {
      if (config.debug && !this.validate(this)) {
        throw new Error("math.gl: ".concat(this.constructor.name, " some fields set to invalid numbers'"));
      }

      return this;
    }
  }, {
    key: "sub",
    value: function sub(a) {
      return this.subtract(a);
    }
  }, {
    key: "setScalar",
    value: function setScalar(a) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = a;
      }

      return this.check();
    }
  }, {
    key: "addScalar",
    value: function addScalar(a) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] += a;
      }

      return this.check();
    }
  }, {
    key: "subScalar",
    value: function subScalar(a) {
      return this.addScalar(-a);
    }
  }, {
    key: "multiplyScalar",
    value: function multiplyScalar(a) {
      return this.scale(a);
    }
  }, {
    key: "divideScalar",
    value: function divideScalar(a) {
      return this.scale(1 / a);
    }
  }, {
    key: "clampScalar",
    value: function clampScalar(min, max) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.min(Math.max(this[i], min), max);
      }

      return this.check();
    }
  }]);

  return MathArray;
}(_wrapNativeSuper(Array));

var assert$1 = function assert(x, m) {
  if (!x) {
    throw new Error(m);
  }
};

var Vector = function (_MathArray) {
  _inherits(Vector, _MathArray);

  function Vector() {
    _classCallCheck(this, Vector);

    return _possibleConstructorReturn(this, _getPrototypeOf(Vector).apply(this, arguments));
  }

  _createClass(Vector, [{
    key: "len",
    value: function len() {
      return Math.sqrt(this.lengthSquared());
    }
  }, {
    key: "magnitude",
    value: function magnitude() {
      return Math.sqrt(this.lengthSquared());
    }
  }, {
    key: "lengthSquared",
    value: function lengthSquared() {
      var length = 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        length += this[i] * this[i];
      }

      return length;
    }
  }, {
    key: "distance",
    value: function distance(mathArray) {
      return Math.sqrt(this.distanceSquared(mathArray));
    }
  }, {
    key: "distanceSquared",
    value: function distanceSquared(mathArray) {
      var length = 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        var dist = this[i] - mathArray[i];
        length += dist * dist;
      }

      return checkNumber(length);
    }
  }, {
    key: "dot",
    value: function dot(mathArray) {
      var product = 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        product += this[i] * mathArray[i];
      }

      return checkNumber(product);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var length = this.magnitude();

      if (length !== 0) {
        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] /= length;
        }
      }

      return this.check();
    }
  }, {
    key: "add",
    value: function add() {
      for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
        vectors[_key] = arguments[_key];
      }

      for (var _i = 0; _i < vectors.length; _i++) {
        var vector = vectors[_i];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] += vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "subtract",
    value: function subtract() {
      for (var _len2 = arguments.length, vectors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        vectors[_key2] = arguments[_key2];
      }

      for (var _i2 = 0; _i2 < vectors.length; _i2++) {
        var vector = vectors[_i2];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] -= vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "multiply",
    value: function multiply() {
      for (var _len3 = arguments.length, vectors = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        vectors[_key3] = arguments[_key3];
      }

      for (var _i3 = 0; _i3 < vectors.length; _i3++) {
        var vector = vectors[_i3];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] *= vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "divide",
    value: function divide() {
      for (var _len4 = arguments.length, vectors = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        vectors[_key4] = arguments[_key4];
      }

      for (var _i4 = 0; _i4 < vectors.length; _i4++) {
        var vector = vectors[_i4];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] /= vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(_scale) {
      if (Array.isArray(_scale)) {
        return this.multiply(_scale);
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] *= _scale;
      }

      return this.check();
    }
  }, {
    key: "scaleAndAdd",
    value: function scaleAndAdd(vector, scale) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = this[i] * scale + vector[i];
      }

      return this.check();
    }
  }, {
    key: "lengthSq",
    value: function lengthSq() {
      return this.lengthSquared();
    }
  }, {
    key: "distanceTo",
    value: function distanceTo(vector) {
      return this.distance(vector);
    }
  }, {
    key: "distanceToSquared",
    value: function distanceToSquared(vector) {
      return this.distanceSquared(vector);
    }
  }, {
    key: "getComponent",
    value: function getComponent(i) {
      assert$1(i >= 0 && i < this.ELEMENTS, 'index is out of range');
      return checkNumber(this[i]);
    }
  }, {
    key: "setComponent",
    value: function setComponent(i, value) {
      assert$1(i >= 0 && i < this.ELEMENTS, 'index is out of range');
      this[i] = value;
      return this.check();
    }
  }, {
    key: "addVectors",
    value: function addVectors(a, b) {
      return this.copy(a).add(b);
    }
  }, {
    key: "subVectors",
    value: function subVectors(a, b) {
      return this.copy(a).subtract(b);
    }
  }, {
    key: "multiplyVectors",
    value: function multiplyVectors(a, b) {
      return this.copy(a).multiply(b);
    }
  }, {
    key: "addScaledVector",
    value: function addScaledVector(a, b) {
      return this.add(new this.constructor(a).multiplyScalar(b));
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = checkNumber(value);
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = checkNumber(value);
    }
  }]);

  return Vector;
}(MathArray);

/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON$1 = 0.000001;
var ARRAY_TYPE$1 = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var degree$1 = Math.PI / 180;

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create$3() {
  var out = new ARRAY_TYPE$1(2);

  if (ARRAY_TYPE$1 != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4$1(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach$3 = function () {
  var vec = create$3();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

var Vector2 = function (_Vector) {
  _inherits(Vector2, _Vector);

  function Vector2() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector2);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Vector2).call(this, 2));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y);
    }

    return _this;
  }

  _createClass(Vector2, [{
    key: "cross",
    value: function cross$1(vector) {
      cross(this, this, vector);
      return this.check();
    }
  }, {
    key: "horizontalAngle",
    value: function horizontalAngle() {
      return Math.atan2(this.y, this.x);
    }
  }, {
    key: "verticalAngle",
    value: function verticalAngle() {
      return Math.atan2(this.x, this.y);
    }
  }, {
    key: "operation",
    value: function operation(_operation) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _operation.apply(void 0, [this, this].concat(args));

      return this.check();
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 2;
    }
  }]);

  return Vector2;
}(Vector);

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create$4() {
  var out = new ARRAY_TYPE$1(3);

  if (ARRAY_TYPE$1 != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new ARRAY_TYPE$1(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function cross$1(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4$2(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3$1(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateX$1(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateY(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateZ$1(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var tempA = fromValues(a[0], a[1], a[2]);
  var tempB = fromValues(b[0], b[1], b[2]);
  normalize(tempA, tempA);
  normalize(tempB, tempB);
  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach$4 = function () {
  var vec = create$4();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

var ORIGIN = [0, 0, 0];

var Vector3 = function (_Vector) {
  _inherits(Vector3, _Vector);

  function Vector3() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Vector3);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Vector3).call(this, 3));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y, z);
    }

    return _this;
  }

  _createClass(Vector3, [{
    key: "angle",
    value: function angle$1(vector) {
      return angle(this, vector);
    }
  }, {
    key: "cross",
    value: function cross(vector) {
      cross$1(this, this, vector);
      return this.check();
    }
  }, {
    key: "rotateX",
    value: function rotateX(_ref) {
      var radians = _ref.radians,
          _ref$origin = _ref.origin,
          origin = _ref$origin === void 0 ? ORIGIN : _ref$origin;
      rotateX$1(this, this, origin, radians);
      return this.check();
    }
  }, {
    key: "rotateY",
    value: function rotateY$1(_ref2) {
      var radians = _ref2.radians,
          _ref2$origin = _ref2.origin,
          origin = _ref2$origin === void 0 ? ORIGIN : _ref2$origin;
      rotateY(this, this, origin, radians);
      return this.check();
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(_ref3) {
      var radians = _ref3.radians,
          _ref3$origin = _ref3.origin,
          origin = _ref3$origin === void 0 ? ORIGIN : _ref3$origin;
      rotateZ$1(this, this, origin, radians);
      return this.check();
    }
  }, {
    key: "operation",
    value: function operation(_operation) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _operation.apply(void 0, [this, this].concat(args));

      return this.check();
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 3;
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = checkNumber(value);
    }
  }]);

  return Vector3;
}(Vector);

var Vector4 = function (_Vector) {
  _inherits(Vector4, _Vector);

  function Vector4() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Vector4);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Vector4).call(this, 4));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y, z, w);
    }

    return _this;
  }

  _createClass(Vector4, [{
    key: "applyMatrix4",
    value: function applyMatrix4(m) {
      m.transformVector(this, this);
      return this;
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 4;
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = checkNumber(value);
    }
  }, {
    key: "w",
    get: function get() {
      return this[3];
    },
    set: function set(value) {
      return this[3] = checkNumber(value);
    }
  }]);

  return Vector4;
}(Vector);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function validateVector(v, length) {
  if (v.length !== length) {
    return false;
  }

  return v.every(Number.isFinite);
}

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create$5() {
  var out = new ARRAY_TYPE$1(9);

  if (ARRAY_TYPE$1 != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function invert$1(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function multiply$1(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */

function translate$1(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale$2(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}

var IDENTITY$1 = [1, 0, 0, 0, 1, 0, 0, 0, 1];

var Matrix3 = function (_MathArray) {
  _inherits(Matrix3, _MathArray);

  function Matrix3() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Matrix3);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Matrix3).call(this, 9));

    if (Array.isArray(args[0]) && arguments.length === 1) {
      _this.copy(args[0]);
    } else {
      _this.identity();
    }

    return _this;
  }

  _createClass(Matrix3, [{
    key: "setRowMajor",
    value: function setRowMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m10 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m11 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var m12 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var m20 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m21 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m22 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m01;
      this[4] = m11;
      this[5] = m21;
      this[6] = m02;
      this[7] = m12;
      this[8] = m22;
      return this.check();
    }
  }, {
    key: "setColumnMajor",
    value: function setColumnMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m20 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m01 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m11 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var m21 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var m02 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m12 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m22 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m01;
      this[4] = m11;
      this[5] = m21;
      this[6] = m02;
      this[7] = m12;
      this[8] = m22;
      return this.check();
    }
  }, {
    key: "copy",
    value: function copy(array) {
      return this.setColumnMajor.apply(this, _toConsumableArray(array));
    }
  }, {
    key: "set",
    value: function set() {
      return this.setColumnMajor.apply(this, arguments);
    }
  }, {
    key: "getElement",
    value: function getElement(i, j) {
      var columnMajor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return columnMajor ? this[i * 3 + j] : this[j * 3 + i];
    }
  }, {
    key: "setElement",
    value: function setElement(i, j, value) {
      var columnMajor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (columnMajor) {
        this[i * 3 + j] = checkNumber(value);
      } else {
        this[j * 3 + i] = checkNumber(value);
      }

      return this;
    }
  }, {
    key: "determinant",
    value: function determinant$1() {
      return determinant(this);
    }
  }, {
    key: "identity",
    value: function identity() {
      for (var i = 0; i < IDENTITY$1.length; ++i) {
        this[i] = IDENTITY$1[i];
      }

      return this.check();
    }
  }, {
    key: "fromQuaternion",
    value: function fromQuaternion(q) {
      fromQuat(this, q);
      return this.check();
    }
  }, {
    key: "transpose",
    value: function transpose$1() {
      transpose(this, this);
      return this.check();
    }
  }, {
    key: "invert",
    value: function invert() {
      invert$1(this, this);
      return this.check();
    }
  }, {
    key: "multiplyLeft",
    value: function multiplyLeft(a) {
      multiply$1(this, a, this);
      return this.check();
    }
  }, {
    key: "multiplyRight",
    value: function multiplyRight(a) {
      multiply$1(this, this, a);
      return this.check();
    }
  }, {
    key: "rotate",
    value: function rotate$1(radians) {
      rotate(this, this, radians);
      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(factor) {
      if (Array.isArray(factor)) {
        scale$2(this, this, factor);
      } else {
        scale$2(this, this, [factor, factor, factor]);
      }

      return this.check();
    }
  }, {
    key: "translate",
    value: function translate(vec) {
      translate$1(this, this, vec);
      return this.check();
    }
  }, {
    key: "transformVector2",
    value: function transformVector2(vector, out) {
      out = out || new Vector2();
      transformMat3(out, vector, this);
      validateVector(out, 2);
      return out;
    }
  }, {
    key: "transformVector3",
    value: function transformVector3(vector, out) {
      out = out || new Vector3();
      transformMat3$1(out, vector, this);
      validateVector(out, 3);
      return out;
    }
  }, {
    key: "transformVector",
    value: function transformVector(vector, out) {
      switch (vector.length) {
        case 2:
          return this.transformVector2(vector, out);

        case 3:
          return this.transformVector3(vector, out);

        default:
          throw new Error('Illegal vector');
      }
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 9;
    }
  }]);

  return Matrix3;
}(MathArray);

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function transpose$1(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function invert$2(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant$1(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function multiply$2(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */

function translate$2(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale$3(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate$1(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < EPSILON$1) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX$2(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY$1(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ$2(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat$1(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective$1(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < EPSILON$1 && Math.abs(eyey - centery) < EPSILON$1 && Math.abs(eyez - centerz) < EPSILON$1) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create$6() {
  var out = new ARRAY_TYPE$1(4);

  if (ARRAY_TYPE$1 != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function add$1(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale$4(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length$1(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize$1(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot$1(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp$2(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4$3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach$5 = function () {
  var vec = create$6();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

var IDENTITY$2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

var Matrix4 = function (_MathArray) {
  _inherits(Matrix4, _MathArray);

  function Matrix4() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Matrix4);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Matrix4).call(this, 16));

    if (Array.isArray(args[0]) && arguments.length === 1) {
      _this.copy(args[0]);
    } else {
      _this.identity();
    }

    return _this;
  }

  _createClass(Matrix4, [{
    key: "setRowMajor",
    value: function setRowMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m10 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var m11 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var m12 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m13 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m20 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var m21 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      var m22 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
      var m23 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
      var m30 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
      var m31 = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
      var m32 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
      var m33 = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m30;
      this[4] = m01;
      this[5] = m11;
      this[6] = m21;
      this[7] = m31;
      this[8] = m02;
      this[9] = m12;
      this[10] = m22;
      this[11] = m32;
      this[12] = m03;
      this[13] = m13;
      this[14] = m23;
      this[15] = m33;
      return this.check();
    }
  }, {
    key: "setColumnMajor",
    value: function setColumnMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m20 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m30 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m01 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var m11 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var m21 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m31 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m02 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var m12 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      var m22 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
      var m32 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
      var m03 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
      var m13 = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
      var m23 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
      var m33 = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m30;
      this[4] = m01;
      this[5] = m11;
      this[6] = m21;
      this[7] = m31;
      this[8] = m02;
      this[9] = m12;
      this[10] = m22;
      this[11] = m32;
      this[12] = m03;
      this[13] = m13;
      this[14] = m23;
      this[15] = m33;
      return this.check();
    }
  }, {
    key: "set",
    value: function set() {
      return this.setColumnMajor.apply(this, arguments);
    }
  }, {
    key: "getElement",
    value: function getElement(i, j) {
      var columnMajor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return columnMajor ? this[i][j] : this[j][i];
    }
  }, {
    key: "setElement",
    value: function setElement(i, j, value) {
      var columnMajor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (columnMajor) {
        this[i][j] = checkNumber(value);
      } else {
        this[j][i] = checkNumber(value);
      }

      return this;
    }
  }, {
    key: "determinant",
    value: function determinant() {
      return determinant$1(this);
    }
  }, {
    key: "identity",
    value: function identity() {
      return this.copy(IDENTITY$2);
    }
  }, {
    key: "fromQuaternion",
    value: function fromQuaternion(q) {
      fromQuat$1(this, q);
      return this.check();
    }
  }, {
    key: "frustum",
    value: function frustum$1(_ref) {
      var left = _ref.left,
          right = _ref.right,
          bottom = _ref.bottom,
          top = _ref.top,
          near = _ref.near,
          far = _ref.far;
      frustum(this, left, right, bottom, top, near, far);
      return this.check();
    }
  }, {
    key: "lookAt",
    value: function lookAt$1(_ref2) {
      var eye = _ref2.eye,
          _ref2$center = _ref2.center,
          center = _ref2$center === void 0 ? [0, 0, 0] : _ref2$center,
          _ref2$up = _ref2.up,
          up = _ref2$up === void 0 ? [0, 1, 0] : _ref2$up;
      lookAt(this, eye, center, up);
      return this.check();
    }
  }, {
    key: "ortho",
    value: function ortho$1(_ref3) {
      var left = _ref3.left,
          right = _ref3.right,
          bottom = _ref3.bottom,
          top = _ref3.top,
          _ref3$near = _ref3.near,
          near = _ref3$near === void 0 ? 0.1 : _ref3$near,
          _ref3$far = _ref3.far,
          far = _ref3$far === void 0 ? 500 : _ref3$far;
      ortho(this, left, right, bottom, top, near, far);
      return this.check();
    }
  }, {
    key: "orthographic",
    value: function orthographic(_ref4) {
      var _ref4$fovy = _ref4.fovy,
          fovy = _ref4$fovy === void 0 ? 45 * Math.PI / 180 : _ref4$fovy,
          _ref4$aspect = _ref4.aspect,
          aspect = _ref4$aspect === void 0 ? 1 : _ref4$aspect,
          _ref4$focalDistance = _ref4.focalDistance,
          focalDistance = _ref4$focalDistance === void 0 ? 1 : _ref4$focalDistance,
          _ref4$near = _ref4.near,
          near = _ref4$near === void 0 ? 0.1 : _ref4$near,
          _ref4$far = _ref4.far,
          far = _ref4$far === void 0 ? 500 : _ref4$far;

      if (fovy > Math.PI * 2) {
        throw Error('radians');
      }

      var halfY = fovy / 2;
      var top = focalDistance * Math.tan(halfY);
      var right = top * aspect;
      return new Matrix4().ortho({
        left: -right,
        right: right,
        bottom: -top,
        top: top,
        near: near,
        far: far
      });
    }
  }, {
    key: "perspective",
    value: function perspective() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          fovy = _ref5.fovy,
          _ref5$fov = _ref5.fov,
          fov = _ref5$fov === void 0 ? 45 * Math.PI / 180 : _ref5$fov,
          _ref5$aspect = _ref5.aspect,
          aspect = _ref5$aspect === void 0 ? 1 : _ref5$aspect,
          _ref5$near = _ref5.near,
          near = _ref5$near === void 0 ? 0.1 : _ref5$near,
          _ref5$far = _ref5.far,
          far = _ref5$far === void 0 ? 500 : _ref5$far;

      fovy = fovy || fov;

      if (fovy > Math.PI * 2) {
        throw Error('radians');
      }

      perspective$1(this, fovy, aspect, near, far);
      return this.check();
    }
  }, {
    key: "transpose",
    value: function transpose() {
      transpose$1(this, this);
      return this.check();
    }
  }, {
    key: "invert",
    value: function invert() {
      invert$2(this, this);
      return this.check();
    }
  }, {
    key: "multiplyLeft",
    value: function multiplyLeft(a) {
      multiply$2(this, a, this);
      return this.check();
    }
  }, {
    key: "multiplyRight",
    value: function multiplyRight(a) {
      multiply$2(this, this, a);
      return this.check();
    }
  }, {
    key: "rotateX",
    value: function rotateX(radians) {
      rotateX$2(this, this, radians);
      return this.check();
    }
  }, {
    key: "rotateY",
    value: function rotateY(radians) {
      rotateY$1(this, this, radians);
      return this.check();
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(radians) {
      rotateZ$2(this, this, radians);
      return this.check();
    }
  }, {
    key: "rotateXYZ",
    value: function rotateXYZ(_ref6) {
      var _ref7 = _slicedToArray(_ref6, 3),
          rx = _ref7[0],
          ry = _ref7[1],
          rz = _ref7[2];

      return this.rotateX(rx).rotateY(ry).rotateZ(rz);
    }
  }, {
    key: "rotateAxis",
    value: function rotateAxis(radians, axis) {
      rotate$1(this, this, radians, axis);
      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(factor) {
      if (Array.isArray(factor)) {
        scale$3(this, this, factor);
      } else {
        scale$3(this, this, [factor, factor, factor]);
      }

      return this.check();
    }
  }, {
    key: "translate",
    value: function translate(vec) {
      translate$2(this, this, vec);
      return this.check();
    }
  }, {
    key: "transformVector2",
    value: function transformVector2(vector, out) {
      out = out || new Vector2();
      transformMat4$1(out, vector, this);
      validateVector(out, 2);
      return out;
    }
  }, {
    key: "transformVector3",
    value: function transformVector3(vector, out) {
      out = out || new Vector3();
      transformMat4$2(out, vector, this);
      validateVector(out, 3);
      return out;
    }
  }, {
    key: "transformVector4",
    value: function transformVector4(vector, out) {
      out = out || new Vector4();
      transformMat4$3(out, vector, this);
      validateVector(out, 4);
      return out.check();
    }
  }, {
    key: "transformVector",
    value: function transformVector(vector, out) {
      switch (vector.length) {
        case 2:
          return this.transformVector2(vector, out);

        case 3:
          return this.transformVector3(vector, out);

        case 4:
          return this.transformVector4(vector, out);

        default:
          throw new Error('Illegal vector');
      }
    }
  }, {
    key: "transformDirection",
    value: function transformDirection(vector, out) {
      return this._transformVector(vector, out, 0);
    }
  }, {
    key: "transformPoint",
    value: function transformPoint(vector, out) {
      return this._transformVector(vector, out, 1);
    }
  }, {
    key: "_transformVector",
    value: function _transformVector(vector, out, w) {
      switch (vector.length) {
        case 2:
          out = out || new Vector2();
          transformMat4$3(out, [vector[0], vector[1], 0, w], this);
          out.length = 2;
          validateVector(out, 2);
          break;

        case 3:
          out = out || new Vector3();
          transformMat4$3(out, [vector[0], vector[1], vector[2], w], this);
          out.length = 3;
          validateVector(out, 3);
          break;

        case 4:
          if (Boolean(w) !== Boolean(vector[3])) {
            throw new Error('math.gl: Matrix4.transformPoint - invalid vector');
          }

          out = out || new Vector4();
          transformMat4$3(out, vector, this);
          validateVector(out, 4);
          break;

        default:
          throw new Error('Illegal vector');
      }

      return out;
    }
  }, {
    key: "makeRotationX",
    value: function makeRotationX(radians) {
      return this.identity().rotateX(radians);
    }
  }, {
    key: "makeTranslation",
    value: function makeTranslation(x, y, z) {
      return this.identity().translate([x, y, z]);
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 16;
    }
  }]);

  return Matrix4;
}(MathArray);

/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create$7() {
  var out = new ARRAY_TYPE$1(4);

  if (ARRAY_TYPE$1 != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity$1(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */

function multiply$3(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX$3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY$2(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ$3(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > EPSILON$1) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert$3(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set$1 = set;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */

var add$2 = add$1;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale$5 = scale$4;
/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot$2 = dot$1;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp$3 = lerp$2;
/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length$2 = length$1;
/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength$1 = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize$2 = normalize$1;
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = create$4();
  var xUnitVec3 = fromValues(1, 0, 0);
  var yUnitVec3 = fromValues(0, 1, 0);
  return function (out, a, b) {
    var dot$1 = dot(a, b);

    if (dot$1 < -0.999999) {
      cross$1(tmpvec3, xUnitVec3, a);
      if (len(tmpvec3) < 0.000001) cross$1(tmpvec3, yUnitVec3, a);
      normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot$1 > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      cross$1(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot$1;
      return normalize$2(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create$7();
  var temp2 = create$7();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = create$5();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize$2(out, fromMat3(out, matr));
  };
}();

var IDENTITY_QUATERNION = [0, 0, 0, 1];

var Quaternion = function (_MathArray) {
  _inherits(Quaternion, _MathArray);

  function Quaternion() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _classCallCheck(this, Quaternion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Quaternion).call(this, 4));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y, z, w);
    }

    return _this;
  }

  _createClass(Quaternion, [{
    key: "fromMatrix3",
    value: function fromMatrix3(m) {
      fromMat3(this, m);
      return this.check();
    }
  }, {
    key: "fromValues",
    value: function fromValues(x, y, z, w) {
      return this.set(x, y, z, w);
    }
  }, {
    key: "identity",
    value: function identity() {
      identity$1(this);
      return this.check();
    }
  }, {
    key: "length",
    value: function length() {
      return length$2(this);
    }
  }, {
    key: "squaredLength",
    value: function squaredLength(a) {
      return squaredLength$1(this);
    }
  }, {
    key: "dot",
    value: function dot(a, b) {
      if (b !== undefined) {
        throw new Error('Quaternion.dot only takes one argument');
      }

      return dot$2(this, a);
    }
  }, {
    key: "rotationTo",
    value: function rotationTo$1(vectorA, vectorB) {
      rotationTo(this, vectorA, vectorB);
      return this.check();
    }
  }, {
    key: "add",
    value: function add(a, b) {
      if (b !== undefined) {
        throw new Error('Quaternion.add only takes one argument');
      }

      add$2(this, a);
      return this.check();
    }
  }, {
    key: "calculateW",
    value: function calculateW$1() {
      calculateW(this, this);
      return this.check();
    }
  }, {
    key: "conjugate",
    value: function conjugate$1() {
      conjugate(this, this);
      return this.check();
    }
  }, {
    key: "invert",
    value: function invert() {
      invert$3(this, this);
      return this.check();
    }
  }, {
    key: "lerp",
    value: function lerp(a, b, t) {
      lerp$3(this, a, b, t);
      return this.check();
    }
  }, {
    key: "multiply",
    value: function multiply(a, b) {
      if (b !== undefined) {
        throw new Error('Quaternion.multiply only takes one argument');
      }

      multiply$3(this, this, a);
      return this.check();
    }
  }, {
    key: "normalize",
    value: function normalize() {
      normalize$2(this, this);
      return this.check();
    }
  }, {
    key: "rotateX",
    value: function rotateX(rad) {
      rotateX$3(this, this, rad);
      return this.check();
    }
  }, {
    key: "rotateY",
    value: function rotateY(rad) {
      rotateY$2(this, this, rad);
      return this.check();
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(rad) {
      rotateZ$3(this, this, rad);
      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(b) {
      scale$5(this, this, b);
      return this.check();
    }
  }, {
    key: "set",
    value: function set(i, j, k, l) {
      set$1(this, i, j, k, l);
      return this.check();
    }
  }, {
    key: "setAxisAngle",
    value: function setAxisAngle$1(axis, rad) {
      setAxisAngle(this, axis, rad);
      return this.check();
    }
  }, {
    key: "slerp",
    value: function slerp$1(_ref) {
      var _ref$start = _ref.start,
          start = _ref$start === void 0 ? IDENTITY_QUATERNION : _ref$start,
          target = _ref.target,
          ratio = _ref.ratio;
      slerp(this, start, target, ratio);
      return this.check();
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 4;
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = checkNumber(value);
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = checkNumber(value);
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = checkNumber(value);
    }
  }, {
    key: "w",
    get: function get() {
      return this[3];
    },
    set: function set(value) {
      return this[3] = checkNumber(value);
    }
  }]);

  return Quaternion;
}(MathArray);

var EPSILON$2 = 0.000001;
var EARTH_RADIUS_METERS = 6.371e6;

var SphericalCoordinates = function () {
  function SphericalCoordinates() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        phi = _ref.phi,
        theta = _ref.theta,
        radius = _ref.radius,
        bearing = _ref.bearing,
        pitch = _ref.pitch,
        altitude = _ref.altitude,
        _ref$radiusScale = _ref.radiusScale,
        radiusScale = _ref$radiusScale === void 0 ? EARTH_RADIUS_METERS : _ref$radiusScale;

    _classCallCheck(this, SphericalCoordinates);

    if (arguments.length === 0) {
      this.phi = 0;
      this.theta = 0;
      this.radius = 1;
    } else if (Number.isFinite(phi) || Number.isFinite(theta)) {
      this.phi = phi || 0;
      this.theta = theta || 0;
    } else if (Number.isFinite(bearing) || Number.isFinite(pitch)) {
      this.bearing = bearing || 0;
      this.pitch = pitch || 0;
    }

    this.radius = radius || 1;
    this.radiusScale = radiusScale || 1;
    this.check();
  }

  _createClass(SphericalCoordinates, [{
    key: "toString",
    value: function toString() {
      return this.formatString(config);
    }
  }, {
    key: "formatString",
    value: function formatString(_ref2) {
      var printTypes = _ref2.printTypes,
          printDegrees = _ref2.printDegrees;
      var f = formatValue;
      return "".concat(printTypes ? 'Spherical' : '', "[rho:").concat(f(this.radius), ",theta:").concat(f(this.theta), ",phi:").concat(f(this.phi), "]");
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return equals$1(this.radius, other.radius) && equals$1(this.theta, other.theta) && equals$1(this.phi, other.phi);
    }
  }, {
    key: "exactEquals",
    value: function exactEquals(other) {
      return this.radius === other.radius && this.theta === other.theta && this.phi === other.phi;
    }
  }, {
    key: "set",
    value: function set(radius, phi, theta) {
      this.radius = radius;
      this.phi = phi;
      this.theta = theta;
      return this.check();
    }
  }, {
    key: "clone",
    value: function clone() {
      return new this.constructor().copy(this);
    }
  }, {
    key: "copy",
    value: function copy(other) {
      this.radius = other.radius;
      this.phi = other.phi;
      this.theta = other.theta;
      return this.check();
    }
  }, {
    key: "fromLngLatZ",
    value: function fromLngLatZ(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 3),
          lng = _ref4[0],
          lat = _ref4[1],
          z = _ref4[2];

      this.radius = 1 + z / this.radiusScale;
      this.phi = radians(lat);
      this.theta = radians(lng);
    }
  }, {
    key: "fromVector3",
    value: function fromVector3(v) {
      this.radius = length(v);

      if (this.radius === 0) {
        this.theta = 0;
        this.phi = 0;
      } else {
        this.theta = Math.atan2(v[0], v[1]);
        this.phi = Math.acos(clamp(v[2] / this.radius, -1, 1));
      }

      return this.check();
    }
  }, {
    key: "toVector3",
    value: function toVector3() {
      return new Vector3(0, 0, this.radius).rotateX({
        radians: this.theta
      }).rotateZ({
        radians: this.phi
      });
    }
  }, {
    key: "makeSafe",
    value: function makeSafe() {
      this.phi = Math.max(EPSILON$2, Math.min(Math.PI - EPSILON$2, this.phi));
    }
  }, {
    key: "check",
    value: function check() {
      if (!Number.isFinite(this.phi) || !Number.isFinite(this.theta) || !(this.radius > 0)) {
        throw new Error('SphericalCoordinates: some fields set to invalid numbers');
      }

      return this;
    }
  }, {
    key: "bearing",
    get: function get() {
      return 180 - degrees(this.phi);
    },
    set: function set(v) {
      this.phi = Math.PI - radians(v);
    }
  }, {
    key: "pitch",
    get: function get() {
      return degrees(this.theta);
    },
    set: function set(v) {
      this.theta = radians(v);
    }
  }, {
    key: "longitude",
    get: function get() {
      return degrees(this.phi);
    }
  }, {
    key: "latitude",
    get: function get() {
      return degrees(this.theta);
    }
  }, {
    key: "lng",
    get: function get() {
      return degrees(this.phi);
    }
  }, {
    key: "lat",
    get: function get() {
      return degrees(this.theta);
    }
  }, {
    key: "z",
    get: function get() {
      return (this.radius - 1) * this.radiusScale;
    }
  }]);

  return SphericalCoordinates;
}();

var ERR_UNKNOWN_ORDER = 'Unknown Euler angle order';
var ALMOST_ONE = 0.99999;

function validateOrder(value) {
  return value >= 0 && value < 6;
}

function checkOrder(value) {
  if (value < 0 && value >= 6) {
    throw new Error(ERR_UNKNOWN_ORDER);
  }

  return value;
}

var Euler = function (_MathArray) {
  _inherits(Euler, _MathArray);

  _createClass(Euler, [{
    key: "ELEMENTS",
    get: function get() {
      return 4;
    }
  }], [{
    key: "rotationOrder",
    value: function rotationOrder(order) {
      return Euler.RotationOrders[order];
    }
  }, {
    key: "ZYX",
    get: function get() {
      return 0;
    }
  }, {
    key: "YXZ",
    get: function get() {
      return 1;
    }
  }, {
    key: "XZY",
    get: function get() {
      return 2;
    }
  }, {
    key: "ZXY",
    get: function get() {
      return 3;
    }
  }, {
    key: "YZX",
    get: function get() {
      return 4;
    }
  }, {
    key: "XYZ",
    get: function get() {
      return 5;
    }
  }, {
    key: "RollPitchYaw",
    get: function get() {
      return 0;
    }
  }, {
    key: "DefaultOrder",
    get: function get() {
      return Euler.ZYX;
    }
  }, {
    key: "RotationOrders",
    get: function get() {
      return ['ZYX', 'YXZ', 'XZY', 'ZXY', 'YZX', 'XYZ'];
    }
  }]);

  function Euler() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Euler.DefaultOrder;

    _classCallCheck(this, Euler);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Euler).call(this, 4));

    if (arguments.length > 0 && Array.isArray(arguments[0])) {
      var _this2;

      (_this2 = _this).fromVector3.apply(_this2, arguments);
    } else {
      _this.set(x, y, z, order);
    }

    return _this;
  }

  _createClass(Euler, [{
    key: "fromQuaternion",
    value: function fromQuaternion(quaternion) {
      var _quaternion = _slicedToArray(quaternion, 4),
          x = _quaternion[0],
          y = _quaternion[1],
          z = _quaternion[2],
          w = _quaternion[3];

      var ysqr = y * y;
      var t0 = -2.0 * (ysqr + z * z) + 1.0;
      var t1 = +2.0 * (x * y + w * z);
      var t2 = -2.0 * (x * z - w * y);
      var t3 = +2.0 * (y * z + w * x);
      var t4 = -2.0 * (x * x + ysqr) + 1.0;
      t2 = t2 > 1.0 ? 1.0 : t2;
      t2 = t2 < -1.0 ? -1.0 : t2;
      var roll = Math.atan2(t3, t4);
      var pitch = Math.asin(t2);
      var yaw = Math.atan2(t1, t0);
      return new Euler(roll, pitch, yaw, Euler.RollPitchYaw);
    }
  }, {
    key: "copy",
    value: function copy(array) {
      for (var i = 0; i < 3; ++i) {
        this[i] = array[i];
      }

      this[3] = Number.isFinite(array[3]) || this.order;
      return this.check();
    }
  }, {
    key: "set",
    value: function set() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var order = arguments.length > 3 ? arguments[3] : undefined;
      this[0] = x;
      this[1] = y;
      this[2] = z;
      this[3] = Number.isFinite(order) ? order : this[3];
      return this.check();
    }
  }, {
    key: "validate",
    value: function validate() {
      return validateOrder(this[3]) && Number.isFinite(this[0]) && Number.isFinite(this[1]) && Number.isFinite(this[2]);
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      array[offset] = this[0];
      array[offset + 1] = this[1];
      array[offset + 2] = this[2];
      return array;
    }
  }, {
    key: "toArray4",
    value: function toArray4() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      array[offset] = this[0];
      array[offset + 1] = this[1];
      array[offset + 2] = this[2];
      array[offset + 3] = this[3];
      return array;
    }
  }, {
    key: "toVector3",
    value: function toVector3(optionalResult) {
      if (optionalResult) {
        return optionalResult.set(this[0], this[1], this[2]);
      }

      return new Vector3(this[0], this[1], this[2]);
    }
  }, {
    key: "fromVector3",
    value: function fromVector3(v, order) {
      return this.set(v[0], v[1], v[2], Number.isFinite(order) ? order : this[3]);
    }
  }, {
    key: "fromArray",
    value: function fromArray(array) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this[0] = array[0 + offset];
      this[1] = array[1 + offset];
      this[2] = array[2 + offset];

      if (array[3] !== undefined) {
        this[3] = array[3];
      }

      return this.check();
    }
  }, {
    key: "fromRollPitchYaw",
    value: function fromRollPitchYaw(roll, pitch, yaw) {
      return this.set(roll, pitch, yaw, Euler.ZYX);
    }
  }, {
    key: "fromRotationMatrix",
    value: function fromRotationMatrix(m) {
      var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Euler.DefaultOrder;

      this._fromRotationMatrix(m, order);

      return this.check();
    }
  }, {
    key: "getRotationMatrix",
    value: function getRotationMatrix() {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Matrix4();

      this._getRotationMatrix(m);

      return m;
    }
  }, {
    key: "getQuaternion",
    value: function getQuaternion() {
      var q = new Quaternion();

      switch (this[4]) {
        case Euler.XYZ:
          return q.rotateX(this[0]).rotateY(this[1]).rotateZ(this[2]);

        case Euler.YXZ:
          return q.rotateY(this[0]).rotateX(this[1]).rotateZ(this[2]);

        case Euler.ZXY:
          return q.rotateZ(this[0]).rotateX(this[1]).rotateY(this[2]);

        case Euler.ZYX:
          return q.rotateZ(this[0]).rotateY(this[1]).rotateX(this[2]);

        case Euler.YZX:
          return q.rotateY(this[0]).rotateZ(this[1]).rotateX(this[2]);

        case Euler.XZY:
          return q.rotateX(this[0]).rotateZ(this[1]).rotateY(this[2]);

        default:
          throw new Error(ERR_UNKNOWN_ORDER);
      }
    }
  }, {
    key: "_fromRotationMatrix",
    value: function _fromRotationMatrix(m) {
      var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Euler.DefaultOrder;
      var te = m.elements;
      var m11 = te[0],
          m12 = te[4],
          m13 = te[8];
      var m21 = te[1],
          m22 = te[5],
          m23 = te[9];
      var m31 = te[2],
          m32 = te[6],
          m33 = te[10];
      order = order || this[3];

      switch (order) {
        case Euler.XYZ:
          this[1] = Math.asin(clamp(m13, -1, 1));

          if (Math.abs(m13) < ALMOST_ONE) {
            this[0] = Math.atan2(-m23, m33);
            this[2] = Math.atan2(-m12, m11);
          } else {
            this[0] = Math.atan2(m32, m22);
            this[2] = 0;
          }

          break;

        case Euler.YXZ:
          this[0] = Math.asin(-clamp(m23, -1, 1));

          if (Math.abs(m23) < ALMOST_ONE) {
            this[1] = Math.atan2(m13, m33);
            this[2] = Math.atan2(m21, m22);
          } else {
            this[1] = Math.atan2(-m31, m11);
            this[2] = 0;
          }

          break;

        case Euler.ZXY:
          this[0] = Math.asin(clamp(m32, -1, 1));

          if (Math.abs(m32) < ALMOST_ONE) {
            this[1] = Math.atan2(-m31, m33);
            this[2] = Math.atan2(-m12, m22);
          } else {
            this[1] = 0;
            this[2] = Math.atan2(m21, m11);
          }

          break;

        case Euler.ZYX:
          this[1] = Math.asin(-clamp(m31, -1, 1));

          if (Math.abs(m31) < ALMOST_ONE) {
            this[0] = Math.atan2(m32, m33);
            this[2] = Math.atan2(m21, m11);
          } else {
            this[0] = 0;
            this[2] = Math.atan2(-m12, m22);
          }

          break;

        case Euler.YZX:
          this[2] = Math.asin(clamp(m21, -1, 1));

          if (Math.abs(m21) < ALMOST_ONE) {
            this[0] = Math.atan2(-m23, m22);
            this[1] = Math.atan2(-m31, m11);
          } else {
            this[0] = 0;
            this[1] = Math.atan2(m13, m33);
          }

          break;

        case Euler.XZY:
          this[2] = Math.asin(-clamp(m12, -1, 1));

          if (Math.abs(m12) < ALMOST_ONE) {
            this[0] = Math.atan2(m32, m22);
            this[1] = Math.atan2(m13, m11);
          } else {
            this[0] = Math.atan2(-m23, m33);
            this[1] = 0;
          }

          break;

        default:
          throw new Error(ERR_UNKNOWN_ORDER);
      }

      this[3] = order;
      return this;
    }
  }, {
    key: "_getRotationMatrix",
    value: function _getRotationMatrix() {
      var te = new Matrix4();
      var x = this.x,
          y = this.y,
          z = this.z;
      var a = Math.cos(x);
      var c = Math.cos(y);
      var e = Math.cos(z);
      var b = Math.sin(x);
      var d = Math.sin(y);
      var f = Math.sin(z);

      switch (this[3]) {
        case Euler.XYZ:
          {
            var ae = a * e,
                af = a * f,
                be = b * e,
                bf = b * f;
            te[0] = c * e;
            te[4] = -c * f;
            te[8] = d;
            te[1] = af + be * d;
            te[5] = ae - bf * d;
            te[9] = -b * c;
            te[2] = bf - ae * d;
            te[6] = be + af * d;
            te[10] = a * c;
            break;
          }

        case Euler.YXZ:
          {
            var ce = c * e,
                cf = c * f,
                de = d * e,
                df = d * f;
            te[0] = ce + df * b;
            te[4] = de * b - cf;
            te[8] = a * d;
            te[1] = a * f;
            te[5] = a * e;
            te[9] = -b;
            te[2] = cf * b - de;
            te[6] = df + ce * b;
            te[10] = a * c;
            break;
          }

        case Euler.ZXY:
          {
            var _ce = c * e,
                _cf = c * f,
                _de = d * e,
                _df = d * f;

            te[0] = _ce - _df * b;
            te[4] = -a * f;
            te[8] = _de + _cf * b;
            te[1] = _cf + _de * b;
            te[5] = a * e;
            te[9] = _df - _ce * b;
            te[2] = -a * d;
            te[6] = b;
            te[10] = a * c;
            break;
          }

        case Euler.ZYX:
          {
            var _ae = a * e,
                _af = a * f,
                _be = b * e,
                _bf = b * f;

            te[0] = c * e;
            te[4] = _be * d - _af;
            te[8] = _ae * d + _bf;
            te[1] = c * f;
            te[5] = _bf * d + _ae;
            te[9] = _af * d - _be;
            te[2] = -d;
            te[6] = b * c;
            te[10] = a * c;
            break;
          }

        case Euler.YZX:
          {
            var ac = a * c,
                ad = a * d,
                bc = b * c,
                bd = b * d;
            te[0] = c * e;
            te[4] = bd - ac * f;
            te[8] = bc * f + ad;
            te[1] = f;
            te[5] = a * e;
            te[9] = -b * e;
            te[2] = -d * e;
            te[6] = ad * f + bc;
            te[10] = ac - bd * f;
            break;
          }

        case Euler.XZY:
          {
            var _ac = a * c,
                _ad = a * d,
                _bc = b * c,
                _bd = b * d;

            te[0] = c * e;
            te[4] = -f;
            te[8] = d * e;
            te[1] = _ac * f + _bd;
            te[5] = a * e;
            te[9] = _ad * f - _bc;
            te[2] = _bc * f - _ad;
            te[6] = b * e;
            te[10] = _bd * f + _ac;
            break;
          }

        default:
          throw new Error(ERR_UNKNOWN_ORDER);
      }

      te[3] = 0;
      te[7] = 0;
      te[11] = 0;
      te[12] = 0;
      te[13] = 0;
      te[14] = 0;
      te[15] = 1;
      return this;
    }
  }, {
    key: "toQuaternion",
    value: function toQuaternion() {
      var cy = Math.cos(this.yaw * 0.5);
      var sy = Math.sin(this.yaw * 0.5);
      var cr = Math.cos(this.roll * 0.5);
      var sr = Math.sin(this.roll * 0.5);
      var cp = Math.cos(this.pitch * 0.5);
      var sp = Math.sin(this.pitch * 0.5);
      var w = cy * cr * cp + sy * sr * sp;
      var x = cy * sr * cp - sy * cr * sp;
      var y = cy * cr * sp + sy * sr * cp;
      var z = sy * cr * cp - cy * sr * sp;
      return new Quaternion(x, y, z, w);
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = checkNumber(value);
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = checkNumber(value);
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = checkNumber(value);
    }
  }, {
    key: "alpha",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = checkNumber(value);
    }
  }, {
    key: "beta",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = checkNumber(value);
    }
  }, {
    key: "gamma",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = checkNumber(value);
    }
  }, {
    key: "phi",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = checkNumber(value);
    }
  }, {
    key: "theta",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = checkNumber(value);
    }
  }, {
    key: "psi",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = checkNumber(value);
    }
  }, {
    key: "roll",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = checkNumber(value);
    }
  }, {
    key: "pitch",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = checkNumber(value);
    }
  }, {
    key: "yaw",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = checkNumber(value);
    }
  }, {
    key: "order",
    get: function get() {
      return this[3];
    },
    set: function set(value) {
      return this[3] = checkOrder(value);
    }
  }]);

  return Euler;
}(MathArray);

var Pose = function () {
  function Pose(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$z = _ref.z,
        z = _ref$z === void 0 ? 0 : _ref$z,
        _ref$roll = _ref.roll,
        roll = _ref$roll === void 0 ? 0 : _ref$roll,
        _ref$pitch = _ref.pitch,
        pitch = _ref$pitch === void 0 ? 0 : _ref$pitch,
        _ref$yaw = _ref.yaw,
        yaw = _ref$yaw === void 0 ? 0 : _ref$yaw,
        position = _ref.position,
        orientation = _ref.orientation;

    _classCallCheck(this, Pose);

    if (Array.isArray(position) && position.length === 3) {
      this.position = new Vector3(position);
    } else {
      this.position = new Vector3(x, y, z);
    }

    if (Array.isArray(orientation) && orientation.length === 4) {
      this.orientation = new Euler(orientation, orientation[3]);
    } else {
      this.orientation = new Euler(roll, pitch, yaw, Euler.RollPitchYaw);
    }
  }

  _createClass(Pose, [{
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "getOrientation",
    value: function getOrientation() {
      return this.orientation;
    }
  }, {
    key: "equals",
    value: function equals(pose) {
      if (!pose) {
        return false;
      }

      return this.position.equals(pose.position) && this.orientation.equals(pose.orientation);
    }
  }, {
    key: "exactEquals",
    value: function exactEquals(pose) {
      if (!pose) {
        return false;
      }

      return this.position.exactEquals(pose.position) && this.orientation.exactEquals(pose.orientation);
    }
  }, {
    key: "getTransformationMatrix",
    value: function getTransformationMatrix() {
      var sr = Math.sin(this.roll);
      var sp = Math.sin(this.pitch);
      var sw = Math.sin(this.yaw);
      var cr = Math.cos(this.roll);
      var cp = Math.cos(this.pitch);
      var cw = Math.cos(this.yaw);
      var matrix = new Matrix4().setRowMajor(cw * cp, -sw * cr + cw * sp * sr, sw * sr + cw * sp * cr, this.x, sw * cp, cw * cr + sw * sp * sr, -cw * sr + sw * sp * cr, this.y, -sp, cp * sr, cp * cr, this.z, 0, 0, 0, 1);
      return matrix;
    }
  }, {
    key: "getTransformationMatrixFromPose",
    value: function getTransformationMatrixFromPose(pose) {
      return new Matrix4().multiplyRight(this.getTransformationMatrix()).multiplyRight(pose.getTransformationMatrix().invert());
    }
  }, {
    key: "getTransformationMatrixToPose",
    value: function getTransformationMatrixToPose(pose) {
      return new Matrix4().multiplyRight(pose.getTransformationMatrix()).multiplyRight(this.getTransformationMatrix().invert());
    }
  }, {
    key: "x",
    get: function get() {
      return this.position.x;
    },
    set: function set(value) {
      return this.position.x = value;
    }
  }, {
    key: "y",
    get: function get() {
      return this.position.y;
    },
    set: function set(value) {
      return this.position.y = value;
    }
  }, {
    key: "z",
    get: function get() {
      return this.position.z;
    },
    set: function set(value) {
      return this.position.z = value;
    }
  }, {
    key: "roll",
    get: function get() {
      return this.orientation.roll;
    },
    set: function set(value) {
      return this.orientation.roll = value;
    }
  }, {
    key: "pitch",
    get: function get() {
      return this.orientation.pitch;
    },
    set: function set(value) {
      return this.orientation.pitch = value;
    }
  }, {
    key: "yaw",
    get: function get() {
      return this.orientation.yaw;
    },
    set: function set(value) {
      return this.orientation.yaw = value;
    }
  }]);

  return Pose;
}();

var Polygon = function () {
  function Polygon(points) {
    _classCallCheck(this, Polygon);

    this.points = points;
    this.isClosed = equals$1(this.points[this.points.length - 1], this.points[0]);
    Object.freeze(this);
  }

  _createClass(Polygon, [{
    key: "getSignedArea",
    value: function getSignedArea() {
      var area = 0;
      this.forEachSegment(function (p1, p2) {
        area += (p1[0] + p2[0]) * (p1[1] - p2[1]);
      });
      return area / 2;
    }
  }, {
    key: "getArea",
    value: function getArea() {
      return Math.abs(this.getSignedArea());
    }
  }, {
    key: "getWindingDirection",
    value: function getWindingDirection() {
      return Math.sign(this.getSignedArea());
    }
  }, {
    key: "forEachSegment",
    value: function forEachSegment(visitor) {
      var length = this.points.length;

      for (var i = 0; i < length - 1; i++) {
        visitor(this.points[i], this.points[i + 1], i, i + 1);
      }

      if (this.isPolygon && !this.isClosed()) {
        visitor(this.points[length - 1], this.points[0], length - 1, 0);
      }
    }
  }]);

  return Polygon;
}();

// Replacement for the external assert method to reduce bundle size
// Note: We don't use the second "message" argument in calling code,
// so no need to support it here
function assert$2(condition, message) {
  if (!condition) {
    throw new Error(message || 'react-map-gl: assertion failed.');
  }
}

var TransitionInterpolator =
/*#__PURE__*/
function () {
  function TransitionInterpolator() {
    _classCallCheck(this, TransitionInterpolator);

    _defineProperty(this, "propNames", []);
  }

  _createClass(TransitionInterpolator, [{
    key: "arePropsEqual",

    /**
     * Checks if two sets of props need transition in between
     * @param currentProps {object} - a list of viewport props
     * @param nextProps {object} - a list of viewport props
     * @returns {bool} - true if two props are equivalent
     */
    value: function arePropsEqual(currentProps, nextProps) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (this.propNames || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          if (!equals$1(currentProps[key], nextProps[key])) {
            return false;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return true;
    }
    /**
     * Called before transition starts to validate/pre-process start and end props
     * @param startProps {object} - a list of starting viewport props
     * @param endProps {object} - a list of target viewport props
     * @returns {Object} {start, end} - start and end props to be passed
     *   to `interpolateProps`
     */

  }, {
    key: "initializeProps",
    value: function initializeProps(startProps, endProps) {
      return {
        start: startProps,
        end: endProps
      };
    }
    /**
     * Returns viewport props in transition
     * @param startProps {object} - a list of starting viewport props
     * @param endProps {object} - a list of target viewport props
     * @param t {number} - a time factor between [0, 1]
     * @returns {object} - a list of interpolated viewport props
     */

  }, {
    key: "interpolateProps",
    value: function interpolateProps(startProps, endProps, t) {
      assert$2(false, 'interpolateProps is not implemented');
    }
  }]);

  return TransitionInterpolator;
}();

var WRAPPED_ANGULAR_PROPS = {
  longitude: 1,
  bearing: 1
};
function isValid(prop) {
  return Number.isFinite(prop) || Array.isArray(prop);
}

function isWrappedAngularProp(propName) {
  return propName in WRAPPED_ANGULAR_PROPS;
}

function getEndValueByShortestPath(propName, startValue, endValue) {
  if (isWrappedAngularProp(propName) && Math.abs(endValue - startValue) > 180) {
    endValue = endValue < 0 ? endValue + 360 : endValue - 360;
  }

  return endValue;
}

var VIEWPORT_TRANSITION_PROPS = ['longitude', 'latitude', 'zoom', 'bearing', 'pitch'];

/**
 * Performs linear interpolation of two viewports.
*/
var LinearInterpolator =
/*#__PURE__*/
function (_TransitionInterpolat) {
  _inherits(LinearInterpolator, _TransitionInterpolat);

  /**
   * @param opts {Object}
   *  - opts.transitionProps {Array}] - list of props to apply linear transition to.
   *  - opts.around {Array} - a screen point to zoom/rotate around
   */
  function LinearInterpolator() {
    var _this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, LinearInterpolator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LinearInterpolator).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "around", void 0);

    if (Array.isArray(opts)) {
      // backward compatibility
      opts = {
        transitionProps: opts
      };
    }

    _this.propNames = opts.transitionProps || VIEWPORT_TRANSITION_PROPS;

    if (opts.around) {
      _this.around = opts.around;
    }

    return _this;
  }

  _createClass(LinearInterpolator, [{
    key: "initializeProps",
    value: function initializeProps(startProps, endProps) {
      var startViewportProps = {};
      var endViewportProps = {};

      if (this.around) {
        // anchor point in origin screen coordinates
        startViewportProps.around = this.around; // anchor point in spherical coordinates

        var aroundLngLat = new WebMercatorViewport(startProps).unproject(this.around);
        Object.assign(endViewportProps, endProps, {
          // anchor point in destination screen coordinates
          around: new WebMercatorViewport(endProps).project(aroundLngLat),
          aroundLngLat: aroundLngLat
        });
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.propNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;
          var startValue = startProps[key];
          var endValue = endProps[key];
          assert$2(isValid(startValue) && isValid(endValue), "".concat(key, " must be supplied for transition"));
          startViewportProps[key] = startValue;
          endViewportProps[key] = getEndValueByShortestPath(key, startValue, endValue);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return {
        start: startViewportProps,
        end: endViewportProps
      };
    }
  }, {
    key: "interpolateProps",
    value: function interpolateProps(startProps, endProps, t) {
      var viewport = {};
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.propNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;
          viewport[key] = lerp$1(startProps[key], endProps[key], t);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (endProps.around) {
        // zoom around provided point
        var _getMapCenterByLngLat = new WebMercatorViewport(Object.assign({}, endProps, viewport)).getMapCenterByLngLatPosition({
          lngLat: endProps.aroundLngLat,
          // anchor point in current screen coordinates
          pos: lerp$1(startProps.around, endProps.around, t)
        }),
            _getMapCenterByLngLat2 = _slicedToArray(_getMapCenterByLngLat, 2),
            longitude = _getMapCenterByLngLat2[0],
            latitude = _getMapCenterByLngLat2[1];

        viewport.longitude = longitude;
        viewport.latitude = latitude;
      }

      return viewport;
    }
  }]);

  return LinearInterpolator;
}(TransitionInterpolator);

var MAPBOX_LIMITS = {
  minZoom: 0,
  maxZoom: 20,
  minPitch: 0,
  maxPitch: 60
};
var DEFAULT_STATE = {
  pitch: 0,
  bearing: 0,
  altitude: 1.5
};

var MapState =
/*#__PURE__*/
function () {
  function MapState(_ref) {
    var width = _ref.width,
        height = _ref.height,
        latitude = _ref.latitude,
        longitude = _ref.longitude,
        zoom = _ref.zoom,
        _ref$bearing = _ref.bearing,
        bearing = _ref$bearing === void 0 ? DEFAULT_STATE.bearing : _ref$bearing,
        _ref$pitch = _ref.pitch,
        pitch = _ref$pitch === void 0 ? DEFAULT_STATE.pitch : _ref$pitch,
        _ref$altitude = _ref.altitude,
        altitude = _ref$altitude === void 0 ? DEFAULT_STATE.altitude : _ref$altitude,
        _ref$maxZoom = _ref.maxZoom,
        maxZoom = _ref$maxZoom === void 0 ? MAPBOX_LIMITS.maxZoom : _ref$maxZoom,
        _ref$minZoom = _ref.minZoom,
        minZoom = _ref$minZoom === void 0 ? MAPBOX_LIMITS.minZoom : _ref$minZoom,
        _ref$maxPitch = _ref.maxPitch,
        maxPitch = _ref$maxPitch === void 0 ? MAPBOX_LIMITS.maxPitch : _ref$maxPitch,
        _ref$minPitch = _ref.minPitch,
        minPitch = _ref$minPitch === void 0 ? MAPBOX_LIMITS.minPitch : _ref$minPitch,
        transitionDuration = _ref.transitionDuration,
        transitionEasing = _ref.transitionEasing,
        transitionInterpolator = _ref.transitionInterpolator,
        transitionInterruption = _ref.transitionInterruption,
        startPanLngLat = _ref.startPanLngLat,
        startZoomLngLat = _ref.startZoomLngLat,
        startBearing = _ref.startBearing,
        startPitch = _ref.startPitch,
        startZoom = _ref.startZoom;

    _classCallCheck(this, MapState);

    _defineProperty(this, "_viewportProps", void 0);

    _defineProperty(this, "_interactiveState", void 0);

    assert$2(Number.isFinite(width), '`width` must be supplied');
    assert$2(Number.isFinite(height), '`height` must be supplied');
    assert$2(Number.isFinite(longitude), '`longitude` must be supplied');
    assert$2(Number.isFinite(latitude), '`latitude` must be supplied');
    assert$2(Number.isFinite(zoom), '`zoom` must be supplied');
    this._viewportProps = this._applyConstraints({
      width: width,
      height: height,
      latitude: latitude,
      longitude: longitude,
      zoom: zoom,
      bearing: bearing,
      pitch: pitch,
      altitude: altitude,
      maxZoom: maxZoom,
      minZoom: minZoom,
      maxPitch: maxPitch,
      minPitch: minPitch,
      transitionDuration: transitionDuration,
      transitionEasing: transitionEasing,
      transitionInterpolator: transitionInterpolator,
      transitionInterruption: transitionInterruption
    });
    this._interactiveState = {
      startPanLngLat: startPanLngLat,
      startZoomLngLat: startZoomLngLat,
      startBearing: startBearing,
      startPitch: startPitch,
      startZoom: startZoom
    };
  }

  _createClass(MapState, [{
    key: "getViewportProps",

    /* Public API */
    value: function getViewportProps() {
      return this._viewportProps;
    }
  }, {
    key: "getInteractiveState",
    value: function getInteractiveState() {
      return this._interactiveState;
    }
    /**
     * Start panning
     * @param {[Number, Number]} pos - position on screen where the pointer grabs
     */

  }, {
    key: "panStart",
    value: function panStart(_ref2) {
      var pos = _ref2.pos;
      return this._getUpdatedMapState({
        startPanLngLat: this._unproject(pos)
      });
    }
    /**
     * Pan
     * @param {[Number, Number]} pos - position on screen where the pointer is
     * @param {[Number, Number], optional} startPos - where the pointer grabbed at
     *   the start of the operation. Must be supplied of `panStart()` was not called
     */

  }, {
    key: "pan",
    value: function pan(_ref3) {
      var pos = _ref3.pos,
          startPos = _ref3.startPos;

      var startPanLngLat = this._interactiveState.startPanLngLat || this._unproject(startPos);

      if (!startPanLngLat) {
        return this;
      }

      var _this$_calculateNewLn = this._calculateNewLngLat({
        startPanLngLat: startPanLngLat,
        pos: pos
      }),
          _this$_calculateNewLn2 = _slicedToArray(_this$_calculateNewLn, 2),
          longitude = _this$_calculateNewLn2[0],
          latitude = _this$_calculateNewLn2[1];

      return this._getUpdatedMapState({
        longitude: longitude,
        latitude: latitude
      });
    }
    /**
     * End panning
     * Must call if `panStart()` was called
     */

  }, {
    key: "panEnd",
    value: function panEnd() {
      return this._getUpdatedMapState({
        startPanLngLat: null
      });
    }
    /**
     * Start rotating
     * @param {[Number, Number]} pos - position on screen where the center is
     */

  }, {
    key: "rotateStart",
    value: function rotateStart(_ref4) {
      var pos = _ref4.pos;
      return this._getUpdatedMapState({
        startBearing: this._viewportProps.bearing,
        startPitch: this._viewportProps.pitch
      });
    }
    /**
     * Rotate
     * @param {Number} deltaScaleX - a number between [-1, 1] specifying the
     *   change to bearing.
     * @param {Number} deltaScaleY - a number between [-1, 1] specifying the
     *   change to pitch. -1 sets to minPitch and 1 sets to maxPitch.
     */

  }, {
    key: "rotate",
    value: function rotate(_ref5) {
      var _ref5$deltaScaleX = _ref5.deltaScaleX,
          deltaScaleX = _ref5$deltaScaleX === void 0 ? 0 : _ref5$deltaScaleX,
          _ref5$deltaScaleY = _ref5.deltaScaleY,
          deltaScaleY = _ref5$deltaScaleY === void 0 ? 0 : _ref5$deltaScaleY;
      var _this$_interactiveSta = this._interactiveState,
          startBearing = _this$_interactiveSta.startBearing,
          startPitch = _this$_interactiveSta.startPitch;

      if (!Number.isFinite(startBearing) || !Number.isFinite(startPitch)) {
        return this;
      }

      var _this$_calculateNewPi = this._calculateNewPitchAndBearing({
        deltaScaleX: deltaScaleX,
        deltaScaleY: deltaScaleY,
        startBearing: startBearing || 0,
        startPitch: startPitch || 0
      }),
          pitch = _this$_calculateNewPi.pitch,
          bearing = _this$_calculateNewPi.bearing;

      return this._getUpdatedMapState({
        bearing: bearing,
        pitch: pitch
      });
    }
    /**
     * End rotating
     * Must call if `rotateStart()` was called
     */

  }, {
    key: "rotateEnd",
    value: function rotateEnd() {
      return this._getUpdatedMapState({
        startBearing: null,
        startPitch: null
      });
    }
    /**
     * Start zooming
     * @param {[Number, Number]} pos - position on screen where the center is
     */

  }, {
    key: "zoomStart",
    value: function zoomStart(_ref6) {
      var pos = _ref6.pos;
      return this._getUpdatedMapState({
        startZoomLngLat: this._unproject(pos),
        startZoom: this._viewportProps.zoom
      });
    }
    /**
     * Zoom
     * @param {[Number, Number]} pos - position on screen where the current center is
     * @param {[Number, Number]} startPos - the center position at
     *   the start of the operation. Must be supplied of `zoomStart()` was not called
     * @param {Number} scale - a number between [0, 1] specifying the accumulated
     *   relative scale.
     */

  }, {
    key: "zoom",
    value: function zoom(_ref7) {
      var pos = _ref7.pos,
          startPos = _ref7.startPos,
          scale = _ref7.scale;
      assert$2(scale > 0, '`scale` must be a positive number'); // Make sure we zoom around the current mouse position rather than map center

      var _this$_interactiveSta2 = this._interactiveState,
          startZoom = _this$_interactiveSta2.startZoom,
          startZoomLngLat = _this$_interactiveSta2.startZoomLngLat;

      if (!Number.isFinite(startZoom)) {
        // We have two modes of zoom:
        // scroll zoom that are discrete events (transform from the current zoom level),
        // and pinch zoom that are continuous events (transform from the zoom level when
        // pinch started).
        // If startZoom state is defined, then use the startZoom state;
        // otherwise assume discrete zooming
        startZoom = this._viewportProps.zoom;
        startZoomLngLat = this._unproject(startPos) || this._unproject(pos);
      } // take the start lnglat and put it where the mouse is down.


      assert$2(startZoomLngLat, '`startZoomLngLat` prop is required ' + 'for zoom behavior to calculate where to position the map.');

      var zoom = this._calculateNewZoom({
        scale: scale,
        startZoom: startZoom || 0
      });

      var zoomedViewport = new WebMercatorViewport(Object.assign({}, this._viewportProps, {
        zoom: zoom
      })); // $FlowFixMe

      var _zoomedViewport$getMa = zoomedViewport.getMapCenterByLngLatPosition({
        lngLat: startZoomLngLat,
        pos: pos
      }),
          _zoomedViewport$getMa2 = _slicedToArray(_zoomedViewport$getMa, 2),
          longitude = _zoomedViewport$getMa2[0],
          latitude = _zoomedViewport$getMa2[1];

      return this._getUpdatedMapState({
        zoom: zoom,
        longitude: longitude,
        latitude: latitude
      });
    }
    /**
     * End zooming
     * Must call if `zoomStart()` was called
     */

  }, {
    key: "zoomEnd",
    value: function zoomEnd() {
      return this._getUpdatedMapState({
        startZoomLngLat: null,
        startZoom: null
      });
    }
    /* Private methods */

  }, {
    key: "_getUpdatedMapState",
    value: function _getUpdatedMapState(newProps) {
      // Update _viewportProps
      return new MapState(Object.assign({}, this._viewportProps, this._interactiveState, newProps));
    } // Apply any constraints (mathematical or defined by _viewportProps) to map state

  }, {
    key: "_applyConstraints",
    value: function _applyConstraints(props) {
      // Ensure zoom is within specified range
      var maxZoom = props.maxZoom,
          minZoom = props.minZoom,
          zoom = props.zoom;
      props.zoom = clamp(zoom, minZoom, maxZoom); // Ensure pitch is within specified range

      var maxPitch = props.maxPitch,
          minPitch = props.minPitch,
          pitch = props.pitch;
      props.pitch = clamp(pitch, minPitch, maxPitch);
      Object.assign(props, normalizeViewportProps(props));
      return props;
    }
  }, {
    key: "_unproject",
    value: function _unproject(pos) {
      var viewport = new WebMercatorViewport(this._viewportProps);
      return pos && viewport.unproject(pos);
    } // Calculate a new lnglat based on pixel dragging position

  }, {
    key: "_calculateNewLngLat",
    value: function _calculateNewLngLat(_ref8) {
      var startPanLngLat = _ref8.startPanLngLat,
          pos = _ref8.pos;
      var viewport = new WebMercatorViewport(this._viewportProps);
      return viewport.getMapCenterByLngLatPosition({
        lngLat: startPanLngLat,
        pos: pos
      });
    } // Calculates new zoom

  }, {
    key: "_calculateNewZoom",
    value: function _calculateNewZoom(_ref9) {
      var scale = _ref9.scale,
          startZoom = _ref9.startZoom;
      var _this$_viewportProps = this._viewportProps,
          maxZoom = _this$_viewportProps.maxZoom,
          minZoom = _this$_viewportProps.minZoom;
      var zoom = startZoom + Math.log2(scale);
      return clamp(zoom, minZoom, maxZoom);
    } // Calculates a new pitch and bearing from a position (coming from an event)

  }, {
    key: "_calculateNewPitchAndBearing",
    value: function _calculateNewPitchAndBearing(_ref10) {
      var deltaScaleX = _ref10.deltaScaleX,
          deltaScaleY = _ref10.deltaScaleY,
          startBearing = _ref10.startBearing,
          startPitch = _ref10.startPitch;
      // clamp deltaScaleY to [-1, 1] so that rotation is constrained between minPitch and maxPitch.
      // deltaScaleX does not need to be clamped as bearing does not have constraints.
      deltaScaleY = clamp(deltaScaleY, -1, 1);
      var _this$_viewportProps2 = this._viewportProps,
          minPitch = _this$_viewportProps2.minPitch,
          maxPitch = _this$_viewportProps2.maxPitch;
      var bearing = startBearing + 180 * deltaScaleX;
      var pitch = startPitch;

      if (deltaScaleY > 0) {
        // Gradually increase pitch
        pitch = startPitch + deltaScaleY * (maxPitch - startPitch);
      } else if (deltaScaleY < 0) {
        // Gradually decrease pitch
        pitch = startPitch - deltaScaleY * (minPitch - startPitch);
      }

      return {
        pitch: pitch,
        bearing: bearing
      };
    }
  }]);

  return MapState;
}();

function decapitalize(s) {
  return s[0].toLowerCase() + s.slice(1);
} // Checks a visibilityConstraints object to see if the map should be displayed
// Returns true if props are within the constraints


function checkVisibilityConstraints(props) {
  var constraints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAPBOX_LIMITS;

  for (var constraintName in constraints) {
    // in the format of min* or max*
    var type = constraintName.slice(0, 3);
    var propName = decapitalize(constraintName.slice(3));

    if (type === 'min' && props[propName] < constraints[constraintName]) {
      return false;
    }

    if (type === 'max' && props[propName] > constraints[constraintName]) {
      return false;
    }
  }

  return true;
}

/* eslint-disable max-len */
var TOKEN_DOC_URL = 'https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens';
var NO_TOKEN_WARNING = 'A valid API access token is required to use Mapbox data';
/* eslint-disable max-len */

var StaticContext = createContext({
  viewport: null,
  map: null
});

function noop$1() {}

var UNAUTHORIZED_ERROR_CODE = 401;
var CONTAINER_STYLE = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  overflow: 'hidden'
};
var propTypes$1 = Object.assign({}, Mapbox.propTypes, {
  /** The dimensions of the map **/
  width: PropTypes__default.oneOfType([PropTypes__default.number, PropTypes__default.string]),
  height: PropTypes__default.oneOfType([PropTypes__default.number, PropTypes__default.string]),

  /** Callback when map size changes **/
  onResize: PropTypes__default.func,

  /** There are known issues with style diffing. As stopgap, add option to prevent style diffing. */
  preventStyleDiffing: PropTypes__default.bool,

  /** Hide invalid token warning even if request fails */
  disableTokenWarning: PropTypes__default.bool,

  /** Whether the map is visible */
  visible: PropTypes__default.bool,

  /** Custom class name for the map */
  className: PropTypes__default.string,

  /** Custom CSS for the container */
  style: PropTypes__default.object,

  /** Advanced features */
  // Contraints for displaying the map. If not met, then the map is hidden.
  // Experimental! May be changed in minor version updates.
  visibilityConstraints: PropTypes__default.object
});
var defaultProps$1 = Object.assign({}, Mapbox.defaultProps, {
  preventStyleDiffing: false,
  disableTokenWarning: false,
  visible: true,
  onResize: noop$1,
  className: '',
  style: null,
  visibilityConstraints: MAPBOX_LIMITS
});

var StaticMap =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(StaticMap, _PureComponent);

  function StaticMap() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StaticMap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StaticMap)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      accessTokenInvalid: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_mapbox", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_map", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_mapboxMapRef", createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_queryParams", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_width", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_height", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMap", function () {
      return _this._map;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "queryRenderedFeatures", function (geometry) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _this._map.queryRenderedFeatures(geometry, options);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_mapboxMapError", function (evt) {
      var statusCode = evt.error && evt.error.status || evt.status;

      if (statusCode === UNAUTHORIZED_ERROR_CODE && !_this.state.accessTokenInvalid) {
        // Mapbox throws unauthorized error - invalid token
        console.error(NO_TOKEN_WARNING); // eslint-disable-line

        _this.setState({
          accessTokenInvalid: true
        });
      }

      _this.props.onError(evt);
    });

    return _this;
  }

  _createClass(StaticMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!StaticMap.supported()) {
        return;
      }

      var mapStyle = this.props.mapStyle; // $FlowFixMe

      this._mapbox = new Mapbox(Object.assign({}, this.props, {
        mapboxgl: mapboxgl,
        // Handle to mapbox-gl library
        width: this._width,
        height: this._height,
        container: this._mapboxMapRef.current,
        onError: this._mapboxMapError,
        mapStyle: normalizeStyle(mapStyle)
      }));
      this._map = this._mapbox.getMap();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this._mapbox) {
        this._updateMapStyle(prevProps, this.props);

        this._updateMapProps(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._mapbox) {
        this._mapbox.finalize();

        this._mapbox = null;
        this._map = null;
      }
    }
  }, {
    key: "_updateMapSize",
    // Note: needs to be called after render (e.g. in componentDidUpdate)
    value: function _updateMapSize(width, height) {
      if (this._width !== width || this._height !== height) {
        this._width = width;
        this._height = height;

        this._updateMapProps(this.props);
      }
    }
  }, {
    key: "_updateMapStyle",
    value: function _updateMapStyle(oldProps, newProps) {
      var mapStyle = newProps.mapStyle;
      var oldMapStyle = oldProps.mapStyle;

      if (mapStyle !== oldMapStyle) {
        this._map.setStyle(normalizeStyle(mapStyle), {
          diff: !this.props.preventStyleDiffing
        });
      }
    }
  }, {
    key: "_updateMapProps",
    value: function _updateMapProps(props) {
      if (!this._mapbox) {
        return;
      }

      this._mapbox.setProps(Object.assign({}, props, {
        width: this._width,
        height: this._height
      }));
    } // Handle map error

  }, {
    key: "_renderNoTokenWarning",
    value: function _renderNoTokenWarning() {
      if (this.state.accessTokenInvalid && !this.props.disableTokenWarning) {
        var style = {
          position: 'absolute',
          left: 0,
          top: 0
        };
        return createElement('div', {
          key: 'warning',
          id: 'no-token-warning',
          style: style
        }, [createElement('h3', {
          key: 'header'
        }, NO_TOKEN_WARNING), createElement('div', {
          key: 'text'
        }, 'For information on setting up your basemap, read'), createElement('a', {
          key: 'link',
          href: TOKEN_DOC_URL
        }, 'Note on Map Tokens')]);
      }

      return null;
    }
  }, {
    key: "_renderOverlays",
    value: function _renderOverlays(dimensions) {
      var _dimensions$width = dimensions.width,
          width = _dimensions$width === void 0 ? Number(this.props.width) : _dimensions$width,
          _dimensions$height = dimensions.height,
          height = _dimensions$height === void 0 ? Number(this.props.height) : _dimensions$height;

      this._updateMapSize(width, height);

      var staticContext = {
        // $FlowFixMe
        viewport: new WebMercatorViewport(Object.assign({}, this.props, this.props.viewState, {
          width: width,
          height: height
        })),
        map: this._map
      };
      return createElement(StaticContext.Provider, {
        value: staticContext
      }, createElement('div', {
        key: 'map-overlays',
        className: 'overlays',
        style: CONTAINER_STYLE,
        children: this.props.children
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          width = _this$props.width,
          height = _this$props.height,
          style = _this$props.style,
          visibilityConstraints = _this$props.visibilityConstraints;
      var mapContainerStyle = Object.assign({
        position: 'relative'
      }, style, {
        width: width,
        height: height
      });
      var visible = this.props.visible && checkVisibilityConstraints(this.props.viewState || this.props, visibilityConstraints);
      var mapStyle = Object.assign({}, CONTAINER_STYLE, {
        visibility: visible ? 'inherit' : 'hidden'
      });
      return createElement('div', {
        key: 'map-container',
        style: mapContainerStyle,
        children: [createElement('div', {
          key: 'map-mapbox',
          ref: this._mapboxMapRef,
          style: mapStyle,
          className: className
        }), // AutoSizer is a pure component and does not rerender when map props change
        // rebind the callback so that it's triggered every render pass
        createElement(AutoSizer, {
          key: 'autosizer',
          disableWidth: Number.isFinite(width),
          disableHeight: Number.isFinite(height),
          onResize: this.props.onResize
        }, this._renderOverlays.bind(this)), this._renderNoTokenWarning()]
      });
    }
  }], [{
    key: "supported",
    value: function supported() {
      return mapboxgl && mapboxgl.supported();
    }
  }]);

  return StaticMap;
}(PureComponent);

_defineProperty(StaticMap, "propTypes", propTypes$1);

_defineProperty(StaticMap, "defaultProps", defaultProps$1);

var noop$2 = function noop() {}; // crops the old easing function from x0 to 1 where x0 is the interruption point
// returns a new easing function with domain [0, 1] and range [0, 1]


function cropEasingFunction(easing, x0) {
  var y0 = easing(x0);
  return function (t) {
    return 1 / (1 - y0) * (easing(t * (1 - x0) + x0) - y0);
  };
}
var TRANSITION_EVENTS = {
  BREAK: 1,
  SNAP_TO_END: 2,
  IGNORE: 3,
  UPDATE: 4
};
var DEFAULT_PROPS = {
  transitionDuration: 0,
  transitionEasing: function transitionEasing(t) {
    return t;
  },
  transitionInterpolator: new LinearInterpolator(),
  transitionInterruption: TRANSITION_EVENTS.BREAK,
  onTransitionStart: noop$2,
  onTransitionInterrupt: noop$2,
  onTransitionEnd: noop$2,
  onViewportChange: noop$2,
  onStateChange: noop$2
};

var TransitionManager =
/*#__PURE__*/
function () {
  function TransitionManager(props) {
    var _this = this;

    _classCallCheck(this, TransitionManager);

    _defineProperty(this, "props", void 0);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "_animationFrame", null);

    _defineProperty(this, "_onTransitionFrame", function () {
      // _updateViewport() may cancel the animation
      _this._animationFrame = requestAnimationFrame(_this._onTransitionFrame);

      _this._updateViewport();
    });

    if (props) {
      this.props = props;
    }
  }

  _createClass(TransitionManager, [{
    key: "getViewportInTransition",
    // Returns current transitioned viewport.
    value: function getViewportInTransition() {
      return this._animationFrame ? this.state.propsInTransition : null;
    } // Process the viewport change, either ignore or trigger a new transiton.
    // Return true if a new transition is triggered, false otherwise.

  }, {
    key: "processViewportChange",
    value: function processViewportChange(nextProps) {
      var currentProps = this.props; // Set this.props here as '_triggerTransition' calls '_updateViewport' that uses this.props.

      this.props = nextProps; // NOTE: Be cautious re-ordering statements in this function.

      if (this._shouldIgnoreViewportChange(currentProps, nextProps)) {
        return false;
      }

      if (this._isTransitionEnabled(nextProps)) {
        var startProps = Object.assign({}, currentProps);
        var endProps = Object.assign({}, nextProps);

        if (this._isTransitionInProgress()) {
          currentProps.onTransitionInterrupt();

          if (this.state.interruption === TRANSITION_EVENTS.SNAP_TO_END) {
            Object.assign(startProps, this.state.endProps);
          } else {
            Object.assign(startProps, this.state.propsInTransition);
          }

          if (this.state.interruption === TRANSITION_EVENTS.UPDATE) {
            var currentTime = Date.now();
            var x0 = (currentTime - this.state.startTime) / this.state.duration;
            endProps.transitionDuration = this.state.duration - (currentTime - this.state.startTime);
            endProps.transitionEasing = cropEasingFunction(this.state.easing, x0);
            endProps.transitionInterpolator = startProps.transitionInterpolator;
          }
        }

        endProps.onTransitionStart();

        this._triggerTransition(startProps, endProps);

        return true;
      }

      if (this._isTransitionInProgress()) {
        currentProps.onTransitionInterrupt();

        this._endTransition();
      }

      return false;
    } // Helper methods

  }, {
    key: "_isTransitionInProgress",
    value: function _isTransitionInProgress() {
      return Boolean(this._animationFrame);
    }
  }, {
    key: "_isTransitionEnabled",
    value: function _isTransitionEnabled(props) {
      return props.transitionDuration > 0 && Boolean(props.transitionInterpolator);
    }
  }, {
    key: "_isUpdateDueToCurrentTransition",
    value: function _isUpdateDueToCurrentTransition(props) {
      if (this.state.propsInTransition) {
        return this.state.interpolator.arePropsEqual(props, this.state.propsInTransition);
      }

      return false;
    }
  }, {
    key: "_shouldIgnoreViewportChange",
    value: function _shouldIgnoreViewportChange(currentProps, nextProps) {
      if (!currentProps) {
        return true;
      }

      if (this._isTransitionInProgress()) {
        // Ignore update if it is requested to be ignored
        return this.state.interruption === TRANSITION_EVENTS.IGNORE || // Ignore update if it is due to current active transition.
        this._isUpdateDueToCurrentTransition(nextProps);
      }

      if (this._isTransitionEnabled(nextProps)) {
        // Ignore if none of the viewport props changed.
        return nextProps.transitionInterpolator.arePropsEqual(currentProps, nextProps);
      }

      return true;
    }
  }, {
    key: "_triggerTransition",
    value: function _triggerTransition(startProps, endProps) {
      assert$2(this._isTransitionEnabled(endProps), 'Transition is not enabled');

      if (this._animationFrame) {
        cancelAnimationFrame(this._animationFrame);
      }

      var initialProps = endProps.transitionInterpolator.initializeProps(startProps, endProps);
      var interactionState = {
        inTransition: true,
        isZooming: startProps.zoom !== endProps.zoom,
        isPanning: startProps.longitude !== endProps.longitude || startProps.latitude !== endProps.latitude,
        isRotating: startProps.bearing !== endProps.bearing || startProps.pitch !== endProps.pitch
      };
      this.state = {
        // Save current transition props
        duration: endProps.transitionDuration,
        easing: endProps.transitionEasing,
        interpolator: endProps.transitionInterpolator,
        interruption: endProps.transitionInterruption,
        startTime: Date.now(),
        startProps: initialProps.start,
        endProps: initialProps.end,
        animation: null,
        propsInTransition: {},
        interactionState: interactionState
      };

      this._onTransitionFrame();

      this.props.onStateChange(interactionState);
    }
  }, {
    key: "_endTransition",
    value: function _endTransition() {
      if (this._animationFrame) {
        cancelAnimationFrame(this._animationFrame);
        this._animationFrame = null;
      }

      this.props.onStateChange({
        inTransition: false,
        isZooming: false,
        isPanning: false,
        isRotating: false
      });
    }
  }, {
    key: "_updateViewport",
    value: function _updateViewport() {
      // NOTE: Be cautious re-ordering statements in this function.
      var currentTime = Date.now();
      var _this$state = this.state,
          startTime = _this$state.startTime,
          duration = _this$state.duration,
          easing = _this$state.easing,
          interpolator = _this$state.interpolator,
          startProps = _this$state.startProps,
          endProps = _this$state.endProps;
      var shouldEnd = false;
      var t = (currentTime - startTime) / duration;

      if (t >= 1) {
        t = 1;
        shouldEnd = true;
      }

      t = easing(t);
      var viewport = interpolator.interpolateProps(startProps, endProps, t); // Normalize viewport props

      var mapState = new MapState(Object.assign({}, this.props, viewport));
      this.state.propsInTransition = mapState.getViewportProps();
      this.props.onViewportChange(this.state.propsInTransition, this.state.interactionState, this.props);

      if (shouldEnd) {
        this._endTransition();

        this.props.onTransitionEnd();
      }
    }
  }]);

  return TransitionManager;
}();

_defineProperty(TransitionManager, "defaultProps", DEFAULT_PROPS);

// Copyright (c) 2017 Uber Technologies, Inc.

// Hammer.Manager mock for use in environments without `document` / `window`.
function HammerManagerMock(m) {
  var instance = {};

  var chainedNoop = function chainedNoop() {
    return instance;
  };

  instance.get = function () {
    return null;
  };

  instance.set = chainedNoop;
  instance.on = chainedNoop;
  instance.off = chainedNoop;
  instance.destroy = chainedNoop;
  instance.emit = chainedNoop;
  return instance;
}

// Copyright (c) 2017 Uber Technologies, Inc.
// due to `window`/`document` references downstream.

var RECOGNIZERS = null; // Recognize the following gestures even if a given recognizer succeeds

var RECOGNIZER_COMPATIBLE_MAP = {
  rotate: ['pinch'],
  pan: ['press', 'doubletap', 'anytap', 'tap'],
  doubletap: ['anytap'],
  anytap: ['tap']
}; // Recognize the folling gestures only if a given recognizer fails

var RECOGNIZER_FALLBACK_MAP = {
  doubletap: ['tap']
};
/**
 * Only one set of basic input events will be fired by Hammer.js:
 * either pointer, touch, or mouse, depending on system support.
 * In order to enable an application to be agnostic of system support,
 * alias basic input events into "classes" of events: down, move, and up.
 * See `_onBasicInput()` for usage of these aliases.
 */

var BASIC_EVENT_ALIASES = {
  pointerdown: 'pointerdown',
  pointermove: 'pointermove',
  pointerup: 'pointerup',
  touchstart: 'pointerdown',
  touchmove: 'pointermove',
  touchend: 'pointerup',
  mousedown: 'pointerdown',
  mousemove: 'pointermove',
  mouseup: 'pointerup'
};
var INPUT_EVENT_TYPES = {
  KEY_EVENTS: ['keydown', 'keyup'],
  MOUSE_EVENTS: ['mousedown', 'mousemove', 'mouseup', 'mouseover', 'mouseout', 'mouseleave'],
  WHEEL_EVENTS: [// Chrome, Safari
  'wheel', // IE
  'mousewheel', // legacy Firefox
  'DOMMouseScroll']
};
/**
 * "Gestural" events are those that have semantic meaning beyond the basic input event,
 * e.g. a click or tap is a sequence of `down` and `up` events with no `move` event in between.
 * Hammer.js handles these with its Recognizer system;
 * this block maps event names to the Recognizers required to detect the events.
 */

var EVENT_RECOGNIZER_MAP = {
  tap: 'tap',
  anytap: 'anytap',
  doubletap: 'doubletap',
  press: 'press',
  pinch: 'pinch',
  pinchin: 'pinch',
  pinchout: 'pinch',
  pinchstart: 'pinch',
  pinchmove: 'pinch',
  pinchend: 'pinch',
  pinchcancel: 'pinch',
  rotate: 'rotate',
  rotatestart: 'rotate',
  rotatemove: 'rotate',
  rotateend: 'rotate',
  rotatecancel: 'rotate',
  pan: 'pan',
  panstart: 'pan',
  panmove: 'pan',
  panup: 'pan',
  pandown: 'pan',
  panleft: 'pan',
  panright: 'pan',
  panend: 'pan',
  pancancel: 'pan',
  swipe: 'swipe',
  swipeleft: 'swipe',
  swiperight: 'swipe',
  swipeup: 'swipe',
  swipedown: 'swipe'
};
/**
 * Map gestural events typically provided by browsers
 * that are not reported in 'hammer.input' events
 * to corresponding Hammer.js gestures.
 */

var GESTURE_EVENT_ALIASES = {
  click: 'tap',
  anyclick: 'anytap',
  dblclick: 'doubletap',
  mousedown: 'pointerdown',
  mousemove: 'pointermove',
  mouseup: 'pointerup',
  mouseover: 'pointerover',
  mouseout: 'pointerout',
  mouseleave: 'pointerleave'
};

// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// Purpose: include this in your module to avoids adding dependencies on
// micro modules like 'global'

/* global window, global, document, navigator */
var userAgent = typeof navigator !== 'undefined' && navigator.userAgent ? navigator.userAgent.toLowerCase() : '';
var window_ = typeof window !== 'undefined' ? window : global;
/*
 * Detect whether passive option is supported by the current browser.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   #Safely_detecting_option_support
 */

var passiveSupported = false;
/* eslint-disable accessor-pairs, no-empty */

try {
  var options = {
    // This function will be called when the browser
    // attempts to access the passive property.
    get passive() {
      passiveSupported = true;
    }

  };
  window_.addEventListener('test', options, options);
  window_.removeEventListener('test', options, options);
} catch (err) {}

var firefox = userAgent.indexOf('firefox') !== -1;
var WHEEL_EVENTS = INPUT_EVENT_TYPES.WHEEL_EVENTS;
var EVENT_TYPE = 'wheel'; // Constants for normalizing input delta

var WHEEL_DELTA_MAGIC_SCALER = 4.000244140625;
var WHEEL_DELTA_PER_LINE = 40; // Slow down zoom if shift key is held for more precise zooming

var SHIFT_MULTIPLIER = 0.25;

var WheelInput =
/*#__PURE__*/
function () {
  function WheelInput(element, callback) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, WheelInput);

    this.element = element;
    this.callback = callback;
    this.options = Object.assign({
      enable: true
    }, options);
    this.events = WHEEL_EVENTS.concat(options.events || []);
    this.handleEvent = this.handleEvent.bind(this);
    this.events.forEach(function (event) {
      return element.addEventListener(event, _this.handleEvent, passiveSupported ? {
        passive: false
      } : false);
    });
  }

  _createClass(WheelInput, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      this.events.forEach(function (event) {
        return _this2.element.removeEventListener(event, _this2.handleEvent);
      });
    }
    /**
     * Enable this input (begin processing events)
     * if the specified event type is among those handled by this input.
     */

  }, {
    key: "enableEventType",
    value: function enableEventType(eventType, enabled) {
      if (eventType === EVENT_TYPE) {
        this.options.enable = enabled;
      }
    }
    /* eslint-disable complexity, max-statements */

  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (!this.options.enable) {
        return;
      }

      var value = event.deltaY;

      if (window_.WheelEvent) {
        // Firefox doubles the values on retina screens...
        if (firefox && event.deltaMode === window_.WheelEvent.DOM_DELTA_PIXEL) {
          value /= window_.devicePixelRatio;
        }

        if (event.deltaMode === window_.WheelEvent.DOM_DELTA_LINE) {
          value *= WHEEL_DELTA_PER_LINE;
        }
      }

      var wheelPosition = {
        x: event.clientX,
        y: event.clientY
      };

      if (value !== 0 && value % WHEEL_DELTA_MAGIC_SCALER === 0) {
        // This one is definitely a mouse wheel event.
        // Normalize this value to match trackpad.
        value = Math.floor(value / WHEEL_DELTA_MAGIC_SCALER);
      }

      if (event.shiftKey && value) {
        value = value * SHIFT_MULTIPLIER;
      }

      this._onWheel(event, -value, wheelPosition);
    }
  }, {
    key: "_onWheel",
    value: function _onWheel(srcEvent, delta, position) {
      this.callback({
        type: EVENT_TYPE,
        center: position,
        delta: delta,
        srcEvent: srcEvent,
        pointerType: 'mouse',
        target: srcEvent.target
      });
    }
  }]);

  return WheelInput;
}();

var MOUSE_EVENTS = INPUT_EVENT_TYPES.MOUSE_EVENTS;
var MOVE_EVENT_TYPE = 'pointermove';
var OVER_EVENT_TYPE = 'pointerover';
var OUT_EVENT_TYPE = 'pointerout';
var LEAVE_EVENT_TYPE = 'pointerleave';
/**
 * Hammer.js swallows 'move' events (for pointer/touch/mouse)
 * when the pointer is not down. This class sets up a handler
 * specifically for these events to work around this limitation.
 * Note that this could be extended to more intelligently handle
 * move events across input types, e.g. storing multiple simultaneous
 * pointer/touch events, calculating speed/direction, etc.
 */

var MoveInput =
/*#__PURE__*/
function () {
  function MoveInput(element, callback) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, MoveInput);

    this.element = element;
    this.callback = callback;
    this.pressed = false;
    this.options = Object.assign({
      enable: true
    }, options);
    this.enableMoveEvent = this.options.enable;
    this.enableLeaveEvent = this.options.enable;
    this.enableOutEvent = this.options.enable;
    this.enableOverEvent = this.options.enable;
    this.events = MOUSE_EVENTS.concat(options.events || []);
    this.handleEvent = this.handleEvent.bind(this);
    this.events.forEach(function (event) {
      return element.addEventListener(event, _this.handleEvent);
    });
  }

  _createClass(MoveInput, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      this.events.forEach(function (event) {
        return _this2.element.removeEventListener(event, _this2.handleEvent);
      });
    }
    /**
     * Enable this input (begin processing events)
     * if the specified event type is among those handled by this input.
     */

  }, {
    key: "enableEventType",
    value: function enableEventType(eventType, enabled) {
      if (eventType === MOVE_EVENT_TYPE) {
        this.enableMoveEvent = enabled;
      }

      if (eventType === OVER_EVENT_TYPE) {
        this.enableOverEvent = enabled;
      }

      if (eventType === OUT_EVENT_TYPE) {
        this.enableOutEvent = enabled;
      }

      if (eventType === LEAVE_EVENT_TYPE) {
        this.enableLeaveEvent = enabled;
      }
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      this.handleOverEvent(event);
      this.handleOutEvent(event);
      this.handleLeaveEvent(event);
      this.handleMoveEvent(event);
    }
  }, {
    key: "handleOverEvent",
    value: function handleOverEvent(event) {
      if (this.enableOverEvent) {
        if (event.type === 'mouseover') {
          this.callback({
            type: OVER_EVENT_TYPE,
            srcEvent: event,
            pointerType: 'mouse',
            target: event.target
          });
        }
      }
    }
  }, {
    key: "handleOutEvent",
    value: function handleOutEvent(event) {
      if (this.enableOutEvent) {
        if (event.type === 'mouseout') {
          this.callback({
            type: OUT_EVENT_TYPE,
            srcEvent: event,
            pointerType: 'mouse',
            target: event.target
          });
        }
      }
    }
  }, {
    key: "handleLeaveEvent",
    value: function handleLeaveEvent(event) {
      if (this.enableLeaveEvent) {
        if (event.type === 'mouseleave') {
          this.callback({
            type: LEAVE_EVENT_TYPE,
            srcEvent: event,
            pointerType: 'mouse',
            target: event.target
          });
        }
      }
    }
  }, {
    key: "handleMoveEvent",
    value: function handleMoveEvent(event) {
      if (this.enableMoveEvent) {
        switch (event.type) {
          case 'mousedown':
            if (event.button >= 0) {
              // Button is down
              this.pressed = true;
            }

            break;

          case 'mousemove':
            // Move events use `which` to track the button being pressed
            if (event.which === 0) {
              // Button is not down
              this.pressed = false;
            }

            if (!this.pressed) {
              // Drag events are emitted by hammer already
              // we just need to emit the move event on hover
              this.callback({
                type: MOVE_EVENT_TYPE,
                srcEvent: event,
                pointerType: 'mouse',
                target: event.target
              });
            }

            break;

          case 'mouseup':
            this.pressed = false;
            break;

          default:
        }
      }
    }
  }]);

  return MoveInput;
}();

var KEY_EVENTS = INPUT_EVENT_TYPES.KEY_EVENTS;
var DOWN_EVENT_TYPE = 'keydown';
var UP_EVENT_TYPE = 'keyup';

var KeyInput =
/*#__PURE__*/
function () {
  function KeyInput(element, callback) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, KeyInput);

    this.element = element;
    this.callback = callback;
    this.options = Object.assign({
      enable: true
    }, options);
    this.enableDownEvent = this.options.enable;
    this.enableUpEvent = this.options.enable;
    this.events = KEY_EVENTS.concat(options.events || []);
    this.handleEvent = this.handleEvent.bind(this);
    element.tabIndex = 1;
    element.style.outline = 'none';
    this.events.forEach(function (event) {
      return element.addEventListener(event, _this.handleEvent);
    });
  }

  _createClass(KeyInput, [{
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      this.events.forEach(function (event) {
        return _this2.element.removeEventListener(event, _this2.handleEvent);
      });
    }
    /**
     * Enable this input (begin processing events)
     * if the specified event type is among those handled by this input.
     */

  }, {
    key: "enableEventType",
    value: function enableEventType(eventType, enabled) {
      if (eventType === DOWN_EVENT_TYPE) {
        this.enableDownEvent = enabled;
      }

      if (eventType === UP_EVENT_TYPE) {
        this.enableUpEvent = enabled;
      }
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      // Ignore if focused on text input
      var targetElement = event.target || event.srcElement;

      if (targetElement.tagName === 'INPUT' && targetElement.type === 'text' || targetElement.tagName === 'TEXTAREA') {
        return;
      }

      if (this.enableDownEvent && event.type === 'keydown') {
        this.callback({
          type: DOWN_EVENT_TYPE,
          srcEvent: event,
          key: event.key,
          target: event.target
        });
      }

      if (this.enableUpEvent && event.type === 'keyup') {
        this.callback({
          type: UP_EVENT_TYPE,
          srcEvent: event,
          key: event.key,
          target: event.target
        });
      }
    }
  }]);

  return KeyInput;
}();

// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var EVENT_TYPE$1 = 'contextmenu';

var ContextmenuInput =
/*#__PURE__*/
function () {
  function ContextmenuInput(element, callback) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, ContextmenuInput);

    this.element = element;
    this.callback = callback;
    this.options = Object.assign({
      enable: true
    }, options);
    this.handleEvent = this.handleEvent.bind(this);
    element.addEventListener('contextmenu', this.handleEvent);
  }

  _createClass(ContextmenuInput, [{
    key: "destroy",
    value: function destroy() {
      this.element.removeEventListener('contextmenu', this.handleEvent);
    }
    /**
     * Enable this input (begin processing events)
     * if the specified event type is among those handled by this input.
     */

  }, {
    key: "enableEventType",
    value: function enableEventType(eventType, enabled) {
      if (eventType === EVENT_TYPE$1) {
        this.options.enable = enabled;
      }
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (!this.options.enable) {
        return;
      }

      this.callback({
        type: EVENT_TYPE$1,
        center: {
          x: event.clientX,
          y: event.clientY
        },
        srcEvent: event,
        pointerType: 'mouse',
        target: event.target
      });
    }
  }]);

  return ContextmenuInput;
}();

/* Constants */
var DOWN_EVENT = 1;
var MOVE_EVENT = 2;
var UP_EVENT = 4;
var MOUSE_EVENTS$1 = {
  pointerdown: DOWN_EVENT,
  pointermove: MOVE_EVENT,
  pointerup: UP_EVENT,
  mousedown: DOWN_EVENT,
  mousemove: MOVE_EVENT,
  mouseup: UP_EVENT
}; // MouseEvent.which https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/which

var MOUSE_EVENT_WHICH_LEFT = 1;
var MOUSE_EVENT_WHICH_MIDDLE = 2;
var MOUSE_EVENT_WHICH_RIGHT = 3; // MouseEvent.button https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button

var MOUSE_EVENT_BUTTON_LEFT = 0;
var MOUSE_EVENT_BUTTON_MIDDLE = 1;
var MOUSE_EVENT_BUTTON_RIGHT = 2; // MouseEvent.buttons https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons

var MOUSE_EVENT_BUTTONS_LEFT_MASK = 1;
var MOUSE_EVENT_BUTTONS_RIGHT_MASK = 2;
var MOUSE_EVENT_BUTTONS_MIDDLE_MASK = 4;
/**
 * Extract the involved mouse button
 */

function whichButtons(event) {
  var eventType = MOUSE_EVENTS$1[event.srcEvent.type];

  if (!eventType) {
    // Not a mouse evet
    return null;
  }

  var _event$srcEvent = event.srcEvent,
      buttons = _event$srcEvent.buttons,
      button = _event$srcEvent.button,
      which = _event$srcEvent.which;
  var leftButton = false;
  var middleButton = false;
  var rightButton = false;

  if ( // button is up, need to find out which one was pressed before
  eventType === UP_EVENT || // moving but does not support `buttons` API
  eventType === MOVE_EVENT && !Number.isFinite(buttons)) {
    leftButton = which === MOUSE_EVENT_WHICH_LEFT;
    middleButton = which === MOUSE_EVENT_WHICH_MIDDLE;
    rightButton = which === MOUSE_EVENT_WHICH_RIGHT;
  } else if (eventType === MOVE_EVENT) {
    leftButton = Boolean(buttons & MOUSE_EVENT_BUTTONS_LEFT_MASK);
    middleButton = Boolean(buttons & MOUSE_EVENT_BUTTONS_MIDDLE_MASK);
    rightButton = Boolean(buttons & MOUSE_EVENT_BUTTONS_RIGHT_MASK);
  } else if (eventType === DOWN_EVENT) {
    leftButton = button === MOUSE_EVENT_BUTTON_LEFT;
    middleButton = button === MOUSE_EVENT_BUTTON_MIDDLE;
    rightButton = button === MOUSE_EVENT_BUTTON_RIGHT;
  }

  return {
    leftButton: leftButton,
    middleButton: middleButton,
    rightButton: rightButton
  };
}
/**
 * Calculate event position relative to the root element
 */

function getOffsetPosition(event, rootElement) {
  var srcEvent = event.srcEvent; // `center` is a hammer.js event property

  if (!event.center && !Number.isFinite(srcEvent.clientX)) {
    // Not a gestural event
    return null;
  }

  var center = event.center || {
    x: srcEvent.clientX,
    y: srcEvent.clientY
  };
  var rect = rootElement.getBoundingClientRect(); // Fix scale for map affected by a CSS transform.
  // See https://stackoverflow.com/a/26893663/3528533

  var scaleX = rect.width / rootElement.offsetWidth;
  var scaleY = rect.height / rootElement.offsetHeight; // Calculate center relative to the root element

  var offsetCenter = {
    x: (center.x - rect.left - rootElement.clientLeft) / scaleX,
    y: (center.y - rect.top - rootElement.clientTop) / scaleY
  };
  return {
    center: center,
    offsetCenter: offsetCenter
  };
}

var EventRegistrar =
/*#__PURE__*/
function () {
  function EventRegistrar(eventManager) {
    _classCallCheck(this, EventRegistrar);

    this.eventManager = eventManager;
    this.handlers = []; // Element -> handler map

    this.handlersByElement = new Map();
    this.handleEvent = this.handleEvent.bind(this);
  }

  _createClass(EventRegistrar, [{
    key: "isEmpty",
    value: function isEmpty() {
      return this.handlers.length === 0;
    }
  }, {
    key: "add",
    value: function add(type, handler) {
      var srcElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'root';
      var handlers = this.handlers,
          handlersByElement = this.handlersByElement;

      if (!handlersByElement.has(srcElement)) {
        handlersByElement.set(srcElement, []);
      }

      var entry = {
        type: type,
        handler: handler,
        srcElement: srcElement
      };
      handlers.push(entry);
      handlersByElement.get(srcElement).push(entry);
    }
  }, {
    key: "remove",
    value: function remove(type, handler) {
      var handlers = this.handlers,
          handlersByElement = this.handlersByElement;

      for (var i = handlers.length - 1; i >= 0; i--) {
        var entry = handlers[i];

        if (entry.type === type && entry.handler === handler) {
          handlers.splice(i, 1);
          var entries = handlersByElement.get(entry.srcElement);
          entries.splice(entries.indexOf(entry), 1);

          if (entries.length === 0) {
            handlersByElement.delete(entry.srcElement);
          }
        }
      }
    }
    /**
     * Handles hammerjs event
     */

  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (this.isEmpty()) {
        return;
      }

      var mjolnirEvent = this._normalizeEvent(event);

      var target = event.srcEvent.target;

      while (target && target !== mjolnirEvent.rootElement) {
        this._emit(mjolnirEvent, target);

        if (mjolnirEvent.handled) {
          return;
        }

        target = target.parentNode;
      }

      this._emit(mjolnirEvent, 'root');
    }
    /**
     * Invoke handlers on a particular element
     */

  }, {
    key: "_emit",
    value: function _emit(event, srcElement) {
      var entries = this.handlersByElement.get(srcElement);

      if (entries) {
        var immediatePropagationStopped = false; // Prevents the current event from bubbling up

        var stopPropagation = function stopPropagation() {
          event.handled = true;
        }; // Prevent any remaining listeners from being called


        var stopImmediatePropagation = function stopImmediatePropagation() {
          event.handled = true;
          immediatePropagationStopped = true;
        };

        for (var i = 0; i < entries.length; i++) {
          var _entries$i = entries[i],
              type = _entries$i.type,
              handler = _entries$i.handler;
          handler(Object.assign({}, event, {
            type: type,
            stopPropagation: stopPropagation,
            stopImmediatePropagation: stopImmediatePropagation
          }));

          if (immediatePropagationStopped) {
            break;
          }
        }
      }
    }
    /**
     * Normalizes hammerjs and custom events to have predictable fields.
     */

  }, {
    key: "_normalizeEvent",
    value: function _normalizeEvent(event) {
      var rootElement = this.eventManager.element;
      return Object.assign({}, event, whichButtons(event), getOffsetPosition(event, rootElement), {
        handled: false,
        rootElement: rootElement
      });
    }
  }]);

  return EventRegistrar;
}();

var DEFAULT_OPTIONS = {
  // event handlers
  events: null,
  // custom recognizers
  recognizers: null,
  recognizerOptions: {},
  // Manager class
  Manager: HammerManagerMock,
  // allow browser default touch action
  // https://github.com/uber/react-map-gl/issues/506
  touchAction: 'none'
}; // Unified API for subscribing to events about both
// basic input events (e.g. 'mousemove', 'touchstart', 'wheel')
// and gestural input (e.g. 'click', 'tap', 'panstart').
// Delegates gesture related event registration and handling to Hammer.js.

var EventManager =
/*#__PURE__*/
function () {
  function EventManager() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, EventManager);

    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    this.events = new Map();
    this._onBasicInput = this._onBasicInput.bind(this);
    this._onOtherEvent = this._onOtherEvent.bind(this);
    this.setElement(element); // Register all passed events.

    var events = options.events;

    if (events) {
      this.on(events);
    }
  }

  _createClass(EventManager, [{
    key: "setElement",
    value: function setElement(element) {
      var _this = this;

      if (this.element) {
        // unregister all events
        this.destroy();
      }

      this.element = element;

      if (!element) {
        return;
      }

      var options = this.options;
      var ManagerClass = options.Manager;
      this.manager = new ManagerClass(element, {
        touchAction: options.touchAction,
        recognizers: options.recognizers || RECOGNIZERS
      }).on('hammer.input', this._onBasicInput);

      if (!options.recognizers) {
        // Set default recognize withs
        // http://hammerjs.github.io/recognize-with/
        Object.keys(RECOGNIZER_COMPATIBLE_MAP).forEach(function (name) {
          var recognizer = _this.manager.get(name);

          if (recognizer) {
            RECOGNIZER_COMPATIBLE_MAP[name].forEach(function (otherName) {
              recognizer.recognizeWith(otherName);
            });
          }
        });
      } // Set recognizer options


      for (var recognizerName in options.recognizerOptions) {
        var recognizer = this.manager.get(recognizerName);

        if (recognizer) {
          var recognizerOption = options.recognizerOptions[recognizerName]; // `enable` is managed by the event registrations

          delete recognizerOption.enable;
          recognizer.set(recognizerOption);
        }
      } // Handle events not handled by Hammer.js:
      // - mouse wheel
      // - pointer/touch/mouse move


      this.wheelInput = new WheelInput(element, this._onOtherEvent, {
        enable: false
      });
      this.moveInput = new MoveInput(element, this._onOtherEvent, {
        enable: false
      });
      this.keyInput = new KeyInput(element, this._onOtherEvent, {
        enable: false
      });
      this.contextmenuInput = new ContextmenuInput(element, this._onOtherEvent, {
        enable: false
      }); // Register all existing events

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              eventAlias = _step$value[0],
              eventRegistrar = _step$value[1];

          if (!eventRegistrar.isEmpty()) {
            // Enable recognizer for this event.
            this._toggleRecognizer(eventRegistrar.recognizerName, true);

            this.manager.on(eventAlias, eventRegistrar.handleEvent);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } // Tear down internal event management implementations.

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.element) {
        // wheelInput etc. are created in setElement() and therefore
        // cannot exist if there is no element
        this.wheelInput.destroy();
        this.moveInput.destroy();
        this.keyInput.destroy();
        this.contextmenuInput.destroy();
        this.manager.destroy();
        this.wheelInput = null;
        this.moveInput = null;
        this.keyInput = null;
        this.contextmenuInput = null;
        this.manager = null;
        this.element = null;
      }
    } // Register an event handler function to be called on `event`.

  }, {
    key: "on",
    value: function on(event, handler, srcElement) {
      if (typeof event === 'string') {
        this._addEventHandler(event, handler, srcElement);
      } else {
        srcElement = handler; // If `event` is a map, call `on()` for each entry.

        for (var eventName in event) {
          this._addEventHandler(eventName, event[eventName], srcElement);
        }
      }
    }
    /**
     * Deregister a previously-registered event handler.
     * @param {string|Object} event   An event name (String) or map of event names to handlers
     * @param {Function} [handler]    The function to be called on `event`.
     */

  }, {
    key: "off",
    value: function off(event, handler) {
      if (typeof event === 'string') {
        this._removeEventHandler(event, handler);
      } else {
        // If `event` is a map, call `off()` for each entry.
        for (var eventName in event) {
          this._removeEventHandler(eventName, event[eventName]);
        }
      }
    }
    /*
     * Enable/disable recognizer for the given event
     */

  }, {
    key: "_toggleRecognizer",
    value: function _toggleRecognizer(name, enabled) {
      var manager = this.manager;

      if (!manager) {
        return;
      }

      var recognizer = manager.get(name);

      if (recognizer && recognizer.options.enable !== enabled) {
        recognizer.set({
          enable: enabled
        });
        var fallbackRecognizers = RECOGNIZER_FALLBACK_MAP[name];

        if (fallbackRecognizers && !this.options.recognizers) {
          // Set default require failures
          // http://hammerjs.github.io/require-failure/
          fallbackRecognizers.forEach(function (otherName) {
            var otherRecognizer = manager.get(otherName);

            if (enabled) {
              // Wait for this recognizer to fail
              otherRecognizer.requireFailure(name);
              /**
               * This seems to be a bug in hammerjs:
               * requireFailure() adds both ways
               * dropRequireFailure() only drops one way
               * https://github.com/hammerjs/hammer.js/blob/master/src/recognizerjs/
                 recognizer-constructor.js#L136
               */

              recognizer.dropRequireFailure(otherName);
            } else {
              // Do not wait for this recognizer to fail
              otherRecognizer.dropRequireFailure(name);
            }
          });
        }
      }

      this.wheelInput.enableEventType(name, enabled);
      this.moveInput.enableEventType(name, enabled);
      this.keyInput.enableEventType(name, enabled);
      this.contextmenuInput.enableEventType(name, enabled);
    }
    /**
     * Process the event registration for a single event + handler.
     */

  }, {
    key: "_addEventHandler",
    value: function _addEventHandler(event, handler, srcElement) {
      var manager = this.manager,
          events = this.events; // Alias to a recognized gesture as necessary.

      var eventAlias = GESTURE_EVENT_ALIASES[event] || event;
      var eventRegistrar = events.get(eventAlias);

      if (!eventRegistrar) {
        eventRegistrar = new EventRegistrar(this);
        events.set(eventAlias, eventRegistrar); // Enable recognizer for this event.

        eventRegistrar.recognizerName = EVENT_RECOGNIZER_MAP[eventAlias] || eventAlias; // Listen to the event

        if (manager) {
          manager.on(eventAlias, eventRegistrar.handleEvent);
        }
      }

      this._toggleRecognizer(eventRegistrar.recognizerName, true);

      eventRegistrar.add(event, handler, srcElement);
    }
    /**
     * Process the event deregistration for a single event + handler.
     */

  }, {
    key: "_removeEventHandler",
    value: function _removeEventHandler(event, handler) {
      var events = this.events; // Alias to a recognized gesture as necessary.

      var eventAlias = GESTURE_EVENT_ALIASES[event] || event;
      var eventRegistrar = events.get(eventAlias);

      if (!eventRegistrar) {
        return;
      }

      eventRegistrar.remove(event, handler);

      if (eventRegistrar.isEmpty()) {
        var recognizerName = eventRegistrar.recognizerName; // Disable recognizer if no more handlers are attached to its events

        var isRecognizerUsed = false;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = events.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var eh = _step2.value;

            if (eh.recognizerName === recognizerName && !eh.isEmpty()) {
              isRecognizerUsed = true;
              break;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (!isRecognizerUsed) {
          this._toggleRecognizer(recognizerName, false);
        }
      }
    }
    /**
     * Handle basic events using the 'hammer.input' Hammer.js API:
     * Before running Recognizers, Hammer emits a 'hammer.input' event
     * with the basic event info. This function emits all basic events
     * aliased to the "class" of event received.
     * See constants.BASIC_EVENT_CLASSES basic event class definitions.
     */

  }, {
    key: "_onBasicInput",
    value: function _onBasicInput(event) {
      var srcEvent = event.srcEvent;
      var alias = BASIC_EVENT_ALIASES[srcEvent.type];

      if (alias) {
        // fire all events aliased to srcEvent.type
        this.manager.emit(alias, event);
      }
    }
    /**
     * Handle events not supported by Hammer.js,
     * and pipe back out through same (Hammer) channel used by other events.
     */

  }, {
    key: "_onOtherEvent",
    value: function _onOtherEvent(event) {
      // console.log('onotherevent', event.type, event)
      this.manager.emit(event.type, event);
    }
  }]);

  return EventManager;
}();

// Copyright (c) 2017 Uber Technologies, Inc.

var NO_TRANSITION_PROPS = {
  transitionDuration: 0
};
var LINEAR_TRANSITION_PROPS = {
  transitionDuration: 300,
  transitionEasing: function transitionEasing(t) {
    return t;
  },
  transitionInterpolator: new LinearInterpolator(),
  transitionInterruption: TRANSITION_EVENTS.BREAK
}; // EVENT HANDLING PARAMETERS

var PITCH_MOUSE_THRESHOLD = 5;
var PITCH_ACCEL = 1.2;
var ZOOM_ACCEL = 0.01;
var EVENT_TYPES = {
  WHEEL: ['wheel'],
  PAN: ['panstart', 'panmove', 'panend'],
  PINCH: ['pinchstart', 'pinchmove', 'pinchend'],
  DOUBLE_TAP: ['doubletap'],
  KEYBOARD: ['keydown']
};
/**
 * @classdesc
 * A class that handles events and updates mercator style viewport parameters
 */

var MapController =
/*#__PURE__*/
function () {
  function MapController() {
    var _this = this;

    _classCallCheck(this, MapController);

    _defineProperty(this, "events", []);

    _defineProperty(this, "mapState", void 0);

    _defineProperty(this, "onViewportChange", void 0);

    _defineProperty(this, "onStateChange", void 0);

    _defineProperty(this, "mapStateProps", void 0);

    _defineProperty(this, "eventManager", void 0);

    _defineProperty(this, "scrollZoom", true);

    _defineProperty(this, "dragPan", true);

    _defineProperty(this, "dragRotate", true);

    _defineProperty(this, "doubleClickZoom", true);

    _defineProperty(this, "touchZoom", true);

    _defineProperty(this, "touchRotate", false);

    _defineProperty(this, "keyboard", true);

    _defineProperty(this, "_state", {
      isDragging: false
    });

    _defineProperty(this, "_events", {});

    _defineProperty(this, "_transitionManager", new TransitionManager());

    _defineProperty(this, "handleEvent", function (event) {
      _this.mapState = _this.getMapState();

      switch (event.type) {
        case 'panstart':
          return _this._onPanStart(event);

        case 'panmove':
          return _this._onPan(event);

        case 'panend':
          return _this._onPanEnd(event);

        case 'pinchstart':
          return _this._onPinchStart(event);

        case 'pinchmove':
          return _this._onPinch(event);

        case 'pinchend':
          return _this._onPinchEnd(event);

        case 'doubletap':
          return _this._onDoubleTap(event);

        case 'wheel':
          return _this._onWheel(event);

        case 'keydown':
          return _this._onKeyDown(event);

        default:
          return false;
      }
    });

    _defineProperty(this, "setState", function (newState) {
      Object.assign(_this._state, newState);

      if (_this.onStateChange) {
        _this.onStateChange(_this._state);
      }
    });
  }

  _createClass(MapController, [{
    key: "getCenter",

    /* Event utils */
    // Event object: http://hammerjs.github.io/api/#event-object
    value: function getCenter(event) {
      var _event$offsetCenter = event.offsetCenter,
          x = _event$offsetCenter.x,
          y = _event$offsetCenter.y;
      return [x, y];
    }
  }, {
    key: "isFunctionKeyPressed",
    value: function isFunctionKeyPressed(event) {
      var srcEvent = event.srcEvent;
      return Boolean(srcEvent.metaKey || srcEvent.altKey || srcEvent.ctrlKey || srcEvent.shiftKey);
    }
  }, {
    key: "updateViewport",

    /* Callback util */
    // formats map state and invokes callback function
    value: function updateViewport(newMapState) {
      var extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var extraState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var oldViewport = this.mapState ? this.mapState.getViewportProps() : {};
      var newViewport = Object.assign({}, newMapState.getViewportProps(), extraProps);
      var viewStateChanged = Object.keys(newViewport).some(function (key) {
        return oldViewport[key] !== newViewport[key];
      }); // viewState has changed

      if (viewStateChanged) {
        this.onViewportChange(newViewport, extraState, oldViewport);
      }

      this.setState(Object.assign({}, newMapState.getInteractiveState(), extraState));
    }
  }, {
    key: "getMapState",
    value: function getMapState(overrides) {
      return new MapState(Object.assign({}, this.mapStateProps, this._state, overrides));
    }
    /**
     * Extract interactivity options
     */

  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var onViewportChange = options.onViewportChange,
          onStateChange = options.onStateChange,
          _options$eventManager = options.eventManager,
          eventManager = _options$eventManager === void 0 ? this.eventManager : _options$eventManager,
          _options$isInteractiv = options.isInteractive,
          isInteractive = _options$isInteractiv === void 0 ? true : _options$isInteractiv,
          _options$scrollZoom = options.scrollZoom,
          scrollZoom = _options$scrollZoom === void 0 ? this.scrollZoom : _options$scrollZoom,
          _options$dragPan = options.dragPan,
          dragPan = _options$dragPan === void 0 ? this.dragPan : _options$dragPan,
          _options$dragRotate = options.dragRotate,
          dragRotate = _options$dragRotate === void 0 ? this.dragRotate : _options$dragRotate,
          _options$doubleClickZ = options.doubleClickZoom,
          doubleClickZoom = _options$doubleClickZ === void 0 ? this.doubleClickZoom : _options$doubleClickZ,
          _options$touchZoom = options.touchZoom,
          touchZoom = _options$touchZoom === void 0 ? this.touchZoom : _options$touchZoom,
          _options$touchRotate = options.touchRotate,
          touchRotate = _options$touchRotate === void 0 ? this.touchRotate : _options$touchRotate,
          _options$keyboard = options.keyboard,
          keyboard = _options$keyboard === void 0 ? this.keyboard : _options$keyboard;
      this.onViewportChange = onViewportChange;
      this.onStateChange = onStateChange;

      if (!this.mapStateProps || this.mapStateProps.height !== options.height) {
        // Dimensions changed, normalize the props
        this.updateViewport(new MapState(options));
      }

      this.mapStateProps = options; // Update transition

      this._transitionManager.processViewportChange(Object.assign({}, options, {
        onStateChange: this.setState
      }));

      if (this.eventManager !== eventManager) {
        // EventManager has changed
        this.eventManager = eventManager;
        this._events = {};
        this.toggleEvents(this.events, true);
      } // Register/unregister events


      this.toggleEvents(EVENT_TYPES.WHEEL, isInteractive && scrollZoom);
      this.toggleEvents(EVENT_TYPES.PAN, isInteractive && (dragPan || dragRotate));
      this.toggleEvents(EVENT_TYPES.PINCH, isInteractive && (touchZoom || touchRotate));
      this.toggleEvents(EVENT_TYPES.DOUBLE_TAP, isInteractive && doubleClickZoom);
      this.toggleEvents(EVENT_TYPES.KEYBOARD, isInteractive && keyboard); // Interaction toggles

      this.scrollZoom = scrollZoom;
      this.dragPan = dragPan;
      this.dragRotate = dragRotate;
      this.doubleClickZoom = doubleClickZoom;
      this.touchZoom = touchZoom;
      this.touchRotate = touchRotate;
      this.keyboard = keyboard;
    }
  }, {
    key: "toggleEvents",
    value: function toggleEvents(eventNames, enabled) {
      var _this2 = this;

      if (this.eventManager) {
        eventNames.forEach(function (eventName) {
          if (_this2._events[eventName] !== enabled) {
            _this2._events[eventName] = enabled;

            if (enabled) {
              _this2.eventManager.on(eventName, _this2.handleEvent);
            } else {
              _this2.eventManager.off(eventName, _this2.handleEvent);
            }
          }
        });
      }
    }
    /* Event handlers */
    // Default handler for the `panstart` event.

  }, {
    key: "_onPanStart",
    value: function _onPanStart(event) {
      var pos = this.getCenter(event);
      var newMapState = this.mapState.panStart({
        pos: pos
      }).rotateStart({
        pos: pos
      });
      this.updateViewport(newMapState, NO_TRANSITION_PROPS, {
        isDragging: true
      });
      return true;
    } // Default handler for the `panmove` event.

  }, {
    key: "_onPan",
    value: function _onPan(event) {
      return this.isFunctionKeyPressed(event) || event.rightButton ? this._onPanRotate(event) : this._onPanMove(event);
    } // Default handler for the `panend` event.

  }, {
    key: "_onPanEnd",
    value: function _onPanEnd(event) {
      var newMapState = this.mapState.panEnd().rotateEnd();
      this.updateViewport(newMapState, null, {
        isDragging: false,
        isPanning: false,
        isRotating: false
      });
      return true;
    } // Default handler for panning to move.
    // Called by `_onPan` when panning without function key pressed.

  }, {
    key: "_onPanMove",
    value: function _onPanMove(event) {
      if (!this.dragPan) {
        return false;
      }

      var pos = this.getCenter(event);
      var newMapState = this.mapState.pan({
        pos: pos
      });
      this.updateViewport(newMapState, NO_TRANSITION_PROPS, {
        isPanning: true
      });
      return true;
    } // Default handler for panning to rotate.
    // Called by `_onPan` when panning with function key pressed.

  }, {
    key: "_onPanRotate",
    value: function _onPanRotate(event) {
      if (!this.dragRotate) {
        return false;
      }

      var deltaX = event.deltaX,
          deltaY = event.deltaY;

      var _this$getCenter = this.getCenter(event),
          _this$getCenter2 = _slicedToArray(_this$getCenter, 2),
          centerY = _this$getCenter2[1];

      var startY = centerY - deltaY;

      var _this$mapState$getVie = this.mapState.getViewportProps(),
          width = _this$mapState$getVie.width,
          height = _this$mapState$getVie.height;

      var deltaScaleX = deltaX / width;
      var deltaScaleY = 0;

      if (deltaY > 0) {
        if (Math.abs(height - startY) > PITCH_MOUSE_THRESHOLD) {
          // Move from 0 to -1 as we drag upwards
          deltaScaleY = deltaY / (startY - height) * PITCH_ACCEL;
        }
      } else if (deltaY < 0) {
        if (startY > PITCH_MOUSE_THRESHOLD) {
          // Move from 0 to 1 as we drag upwards
          deltaScaleY = 1 - centerY / startY;
        }
      }

      deltaScaleY = Math.min(1, Math.max(-1, deltaScaleY));
      var newMapState = this.mapState.rotate({
        deltaScaleX: deltaScaleX,
        deltaScaleY: deltaScaleY
      });
      this.updateViewport(newMapState, NO_TRANSITION_PROPS, {
        isRotating: true
      });
      return true;
    } // Default handler for the `wheel` event.

  }, {
    key: "_onWheel",
    value: function _onWheel(event) {
      if (!this.scrollZoom) {
        return false;
      }

      event.preventDefault();
      var pos = this.getCenter(event);
      var delta = event.delta; // Map wheel delta to relative scale

      var scale = 2 / (1 + Math.exp(-Math.abs(delta * ZOOM_ACCEL)));

      if (delta < 0 && scale !== 0) {
        scale = 1 / scale;
      }

      var newMapState = this.mapState.zoom({
        pos: pos,
        scale: scale
      });
      this.updateViewport(newMapState, NO_TRANSITION_PROPS, {
        isZooming: true
      }); // This is a one-off event, state should not persist

      this.setState({
        isZooming: false
      });
      return true;
    } // Default handler for the `pinchstart` event.

  }, {
    key: "_onPinchStart",
    value: function _onPinchStart(event) {
      var pos = this.getCenter(event);
      var newMapState = this.mapState.zoomStart({
        pos: pos
      }).rotateStart({
        pos: pos
      }); // hack - hammer's `rotation` field doesn't seem to produce the correct angle

      this._state.startPinchRotation = event.rotation;
      this.updateViewport(newMapState, NO_TRANSITION_PROPS, {
        isDragging: true
      });
      return true;
    } // Default handler for the `pinch` event.

  }, {
    key: "_onPinch",
    value: function _onPinch(event) {
      if (!this.touchZoom && !this.touchRotate) {
        return false;
      }

      var newMapState = this.mapState;

      if (this.touchZoom) {
        var scale = event.scale;
        var pos = this.getCenter(event);
        newMapState = newMapState.zoom({
          pos: pos,
          scale: scale
        });
      }

      if (this.touchRotate) {
        var rotation = event.rotation;
        var startPinchRotation = this._state.startPinchRotation;
        newMapState = newMapState.rotate({
          deltaScaleX: -(rotation - startPinchRotation) / 180
        });
      }

      this.updateViewport(newMapState, NO_TRANSITION_PROPS, {
        isDragging: true,
        isPanning: this.touchZoom,
        isZooming: this.touchZoom,
        isRotating: this.touchRotate
      });
      return true;
    } // Default handler for the `pinchend` event.

  }, {
    key: "_onPinchEnd",
    value: function _onPinchEnd(event) {
      var newMapState = this.mapState.zoomEnd().rotateEnd();
      this._state.startPinchRotation = 0;
      this.updateViewport(newMapState, null, {
        isDragging: false,
        isPanning: false,
        isZooming: false,
        isRotating: false
      });
      return true;
    } // Default handler for the `doubletap` event.

  }, {
    key: "_onDoubleTap",
    value: function _onDoubleTap(event) {
      if (!this.doubleClickZoom) {
        return false;
      }

      var pos = this.getCenter(event);
      var isZoomOut = this.isFunctionKeyPressed(event);
      var newMapState = this.mapState.zoom({
        pos: pos,
        scale: isZoomOut ? 0.5 : 2
      });
      this.updateViewport(newMapState, Object.assign({}, LINEAR_TRANSITION_PROPS, {
        transitionInterpolator: new LinearInterpolator({
          around: pos
        })
      }));
      return true;
    }
    /* eslint-disable complexity */
    // Default handler for the `keydown` event

  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(event) {
      if (!this.keyboard) {
        return false;
      }

      var funcKey = this.isFunctionKeyPressed(event);
      var mapStateProps = this.mapStateProps;
      var newMapState;

      switch (event.srcEvent.keyCode) {
        case 189:
          // -
          if (funcKey) {
            newMapState = this.getMapState({
              zoom: mapStateProps.zoom - 2
            });
          } else {
            newMapState = this.getMapState({
              zoom: mapStateProps.zoom - 1
            });
          }

          break;

        case 187:
          // +
          if (funcKey) {
            newMapState = this.getMapState({
              zoom: mapStateProps.zoom + 2
            });
          } else {
            newMapState = this.getMapState({
              zoom: mapStateProps.zoom + 1
            });
          }

          break;

        case 37:
          // left
          if (funcKey) {
            newMapState = this.getMapState({
              bearing: mapStateProps.bearing - 15
            });
          } else {
            newMapState = this.mapState.pan({
              pos: [100, 0],
              startPos: [0, 0]
            });
          }

          break;

        case 39:
          // right
          if (funcKey) {
            newMapState = this.getMapState({
              bearing: mapStateProps.bearing + 15
            });
          } else {
            newMapState = this.mapState.pan({
              pos: [-100, 0],
              startPos: [0, 0]
            });
          }

          break;

        case 38:
          // up
          if (funcKey) {
            newMapState = this.getMapState({
              pitch: mapStateProps.pitch + 10
            });
          } else {
            newMapState = this.mapState.pan({
              pos: [0, 100],
              startPos: [0, 0]
            });
          }

          break;

        case 40:
          // down
          if (funcKey) {
            newMapState = this.getMapState({
              pitch: mapStateProps.pitch - 10
            });
          } else {
            newMapState = this.mapState.pan({
              pos: [0, -100],
              startPos: [0, 0]
            });
          }

          break;

        default:
          return false;
      }

      return this.updateViewport(newMapState, LINEAR_TRANSITION_PROPS);
    }
    /* eslint-enable complexity */

  }]);

  return MapController;
}();

// 'new' is optional
var DEPRECATED_PROPS = [{
  old: 'onChangeViewport',
  new: 'onViewportChange'
}, {
  old: 'perspectiveEnabled',
  new: 'dragRotate'
}, {
  old: 'onHoverFeatures',
  new: 'onHover'
}, {
  old: 'onClickFeatures',
  new: 'onClick'
}, {
  old: 'touchZoomRotate',
  new: 'touchZoom, touchRotate'
}, {
  old: 'mapControls',
  new: 'controller'
}];

function getDeprecatedText(name) {
  return "react-map-gl: `".concat(name, "` is removed.");
}

function getNewText(name) {
  return "Use `".concat(name, "` instead.");
}
/**
 * Checks props object for any prop that is deprecated and insert a console
 * warning to the user. This will also print out the recommended new prop/API
 * if one exists.
 */


function checkDeprecatedProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /* eslint-disable no-console, no-undef */
  DEPRECATED_PROPS.forEach(function (depProp) {
    if (props.hasOwnProperty(depProp.old)) {
      var warnMessage = getDeprecatedText(depProp.old);

      if (depProp.new) {
        warnMessage = "".concat(warnMessage, " ").concat(getNewText(depProp.new));
      }

      console.warn(warnMessage);
    }
  });
}

var InteractiveContext = createContext({
  eventManager: null,
  isDragging: false
});
var propTypes$2 = Object.assign({}, StaticMap.propTypes, {
  // Additional props on top of StaticMap

  /** Viewport constraints */
  // Max zoom level
  maxZoom: PropTypes__default.number,
  // Min zoom level
  minZoom: PropTypes__default.number,
  // Max pitch in degrees
  maxPitch: PropTypes__default.number,
  // Min pitch in degrees
  minPitch: PropTypes__default.number,
  // Callbacks fired when the user interacted with the map. The object passed to the callbacks
  // contains viewport properties such as `longitude`, `latitude`, `zoom` etc.
  onViewStateChange: PropTypes__default.func,
  onViewportChange: PropTypes__default.func,
  onInteractionStateChange: PropTypes__default.func,

  /** Viewport transition **/
  // transition duration for viewport change
  transitionDuration: PropTypes__default.number,
  // TransitionInterpolator instance, can be used to perform custom transitions.
  transitionInterpolator: PropTypes__default.object,
  // type of interruption of current transition on update.
  transitionInterruption: PropTypes__default.number,
  // easing function
  transitionEasing: PropTypes__default.func,
  // transition status update functions
  onTransitionStart: PropTypes__default.func,
  onTransitionInterrupt: PropTypes__default.func,
  onTransitionEnd: PropTypes__default.func,

  /** Enables control event handling */
  // Scroll to zoom
  scrollZoom: PropTypes__default.bool,
  // Drag to pan
  dragPan: PropTypes__default.bool,
  // Drag to rotate
  dragRotate: PropTypes__default.bool,
  // Double click to zoom
  doubleClickZoom: PropTypes__default.bool,
  // Multitouch zoom
  touchZoom: PropTypes__default.bool,
  // Multitouch rotate
  touchRotate: PropTypes__default.bool,
  // Keyboard
  keyboard: PropTypes__default.bool,

  /** Event callbacks */
  onHover: PropTypes__default.func,
  onClick: PropTypes__default.func,
  onDblClick: PropTypes__default.func,
  onContextMenu: PropTypes__default.func,
  onMouseDown: PropTypes__default.func,
  onMouseMove: PropTypes__default.func,
  onMouseUp: PropTypes__default.func,
  onTouchStart: PropTypes__default.func,
  onTouchMove: PropTypes__default.func,
  onTouchEnd: PropTypes__default.func,
  onMouseEnter: PropTypes__default.func,
  onMouseLeave: PropTypes__default.func,
  onMouseOut: PropTypes__default.func,
  onWheel: PropTypes__default.func,

  /** Custom touch-action CSS for the event canvas. Defaults to 'none' */
  touchAction: PropTypes__default.string,

  /** Radius to detect features around a clicked point. Defaults to 0. */
  clickRadius: PropTypes__default.number,

  /** List of layers that are interactive */
  interactiveLayerIds: PropTypes__default.array,

  /** Accessor that returns a cursor style to show interactive state */
  getCursor: PropTypes__default.func,
  // A map control instance to replace the default map controller
  // The object must expose a method: `setOptions(opts)`
  controller: PropTypes__default.instanceOf(MapController)
});

var getDefaultCursor = function getDefaultCursor(_ref) {
  var isDragging = _ref.isDragging,
      isHovering = _ref.isHovering;
  return isDragging ? 'grabbing' : isHovering ? 'pointer' : 'grab';
};

var defaultProps$2 = Object.assign({}, StaticMap.defaultProps, MAPBOX_LIMITS, TransitionManager.defaultProps, {
  onViewStateChange: null,
  onViewportChange: null,
  onClick: null,
  onHover: null,
  onContextMenu: function onContextMenu(event) {
    return event.preventDefault();
  },
  scrollZoom: true,
  dragPan: true,
  dragRotate: true,
  doubleClickZoom: true,
  touchZoom: true,
  touchRotate: false,
  keyboard: true,
  touchAction: 'none',
  clickRadius: 0,
  getCursor: getDefaultCursor
});

var InteractiveMap =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(InteractiveMap, _PureComponent);

  _createClass(InteractiveMap, null, [{
    key: "supported",
    value: function supported() {
      return StaticMap.supported();
    }
  }]);

  function InteractiveMap(props) {
    var _this;

    _classCallCheck(this, InteractiveMap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InteractiveMap).call(this, props)); // Check for deprecated props

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      // Whether the cursor is down
      isDragging: false,
      // Whether the cursor is over a clickable feature
      isHovering: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_controller", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_eventManager", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_width", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_height", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_eventCanvasRef", createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_staticMapRef", createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getMap", function () {
      return _this._staticMapRef.current ? _this._staticMapRef.current.getMap() : null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "queryRenderedFeatures", function (geometry) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var map = _this.getMap();

      return map && map.queryRenderedFeatures(geometry, options);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onInteractionStateChange", function (interactionState) {
      var _interactionState$isD = interactionState.isDragging,
          isDragging = _interactionState$isD === void 0 ? false : _interactionState$isD;

      if (isDragging !== _this.state.isDragging) {
        _this.setState({
          isDragging: isDragging
        });
      }

      var onInteractionStateChange = _this.props.onInteractionStateChange;

      if (onInteractionStateChange) {
        onInteractionStateChange(interactionState);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onResize", function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      _this._width = width;
      _this._height = height;

      _this._setControllerProps(_this.props);

      _this.props.onResize({
        width: width,
        height: height
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onViewportChange", function (viewState, interactionState, oldViewState) {
      var _this$props = _this.props,
          onViewStateChange = _this$props.onViewStateChange,
          onViewportChange = _this$props.onViewportChange;

      if (onViewStateChange) {
        onViewStateChange({
          viewState: viewState,
          interactionState: interactionState,
          oldViewState: oldViewState
        });
      }

      if (onViewportChange) {
        onViewportChange(viewState, interactionState, oldViewState);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onEvent", function (callbackName, event) {
      var func = _this.props[callbackName];

      if (func) {
        func(_this._normalizeEvent(event));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onPointerDown", function (event) {
      switch (event.pointerType) {
        case 'touch':
          _this._onEvent('onTouchStart', event);

          break;

        default:
          _this._onEvent('onMouseDown', event);

      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onPointerUp", function (event) {
      switch (event.pointerType) {
        case 'touch':
          _this._onEvent('onTouchEnd', event);

          break;

        default:
          _this._onEvent('onMouseUp', event);

      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onPointerMove", function (event) {
      switch (event.pointerType) {
        case 'touch':
          _this._onEvent('onTouchMove', event);

          break;

        default:
          _this._onEvent('onMouseMove', event);

      }

      if (!_this.state.isDragging) {
        var _this$props2 = _this.props,
            onHover = _this$props2.onHover,
            interactiveLayerIds = _this$props2.interactiveLayerIds;
        var features;

        if (interactiveLayerIds || onHover) {
          event = _this._normalizeEvent(event);
          features = _this._getFeatures({
            pos: event.point,
            radius: _this.props.clickRadius
          });
        }

        if (onHover) {
          // backward compatibility: v3 `onHover` interface
          event.features = features;
          onHover(event);
        }

        var isHovering = Boolean(interactiveLayerIds && features && features.length > 0);
        var isEntering = isHovering && !_this.state.isHovering;
        var isExiting = !isHovering && _this.state.isHovering;

        if (isEntering) {
          _this._onEvent('onMouseEnter', event);
        }

        if (isExiting) {
          _this._onEvent('onMouseLeave', event);
        }

        if (isEntering || isExiting) {
          _this.setState({
            isHovering: isHovering
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onClick", function (event) {
      if (_this.props.onClick) {
        event = _this._normalizeEvent(event); // backward compatibility: v3 `onClick` interface

        event.features = _this._getFeatures({
          pos: event.point,
          radius: _this.props.clickRadius
        });

        _this.props.onClick(event);
      }
    });

    checkDeprecatedProps(props); // If props.controller is not provided, fallback to default MapController instance
    // Cannot use defaultProps here because it needs to be per map instance

    _this._controller = props.controller || new MapController();
    _this._eventManager = new EventManager(null, {
      touchAction: props.touchAction
    });
    return _this;
  }

  _createClass(InteractiveMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var eventManager = this._eventManager;
      eventManager.setElement(this._eventCanvasRef.current); // Register additional event handlers for click and hover

      eventManager.on({
        pointerdown: this._onPointerDown,
        pointermove: this._onPointerMove,
        pointerup: this._onPointerUp,
        pointerleave: this._onEvent.bind(this, 'onMouseOut'),
        click: this._onClick,
        dblclick: this._onEvent.bind(this, 'onDblClick'),
        wheel: this._onEvent.bind(this, 'onWheel'),
        contextmenu: this._onEvent.bind(this, 'onContextMenu')
      });

      this._setControllerProps(this.props);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      this._setControllerProps(nextProps);
    }
  }, {
    key: "_setControllerProps",
    value: function _setControllerProps(props) {
      props = Object.assign({}, props, props.viewState, {
        isInteractive: Boolean(props.onViewStateChange || props.onViewportChange),
        onViewportChange: this._onViewportChange,
        onStateChange: this._onInteractionStateChange,
        eventManager: this._eventManager,
        width: this._width,
        height: this._height
      });

      this._controller.setOptions(props);
    }
  }, {
    key: "_getFeatures",
    value: function _getFeatures(_ref3) {
      var pos = _ref3.pos,
          radius = _ref3.radius;
      var features;
      var queryParams = {};
      var map = this.getMap();

      if (this.props.interactiveLayerIds) {
        queryParams.layers = this.props.interactiveLayerIds;
      }

      if (radius) {
        // Radius enables point features, like marker symbols, to be clicked.
        var size = radius;
        var bbox = [[pos[0] - size, pos[1] + size], [pos[0] + size, pos[1] - size]];
        features = map && map.queryRenderedFeatures(bbox, queryParams);
      } else {
        features = map && map.queryRenderedFeatures(pos, queryParams);
      }

      return features;
    }
  }, {
    key: "_normalizeEvent",

    /* Generic event handling */
    value: function _normalizeEvent(event) {
      if (event.lngLat) {
        // Already unprojected
        return event;
      }

      var _event$offsetCenter = event.offsetCenter,
          x = _event$offsetCenter.x,
          y = _event$offsetCenter.y;
      var pos = [x, y]; // $FlowFixMe

      var viewport = new WebMercatorViewport(Object.assign({}, this.props, {
        width: this._width,
        height: this._height
      }));
      event.point = pos;
      event.lngLat = viewport.unproject(pos);
      return event;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          width = _this$props3.width,
          height = _this$props3.height,
          style = _this$props3.style,
          getCursor = _this$props3.getCursor;
      var eventCanvasStyle = Object.assign({
        position: 'relative'
      }, style, {
        width: width,
        height: height,
        cursor: getCursor(this.state)
      });
      var interactiveContext = {
        isDragging: this.state.isDragging,
        eventManager: this._eventManager
      };
      return createElement(InteractiveContext.Provider, {
        value: interactiveContext
      }, createElement('div', {
        key: 'event-canvas',
        ref: this._eventCanvasRef,
        style: eventCanvasStyle
      }, createElement(StaticMap, Object.assign({}, this.props, {
        width: '100%',
        height: '100%',
        style: null,
        onResize: this._onResize,
        ref: this._staticMapRef,
        children: this.props.children
      }))));
    }
  }]);

  return InteractiveMap;
}(PureComponent);

_defineProperty(InteractiveMap, "propTypes", propTypes$2);

_defineProperty(InteractiveMap, "defaultProps", defaultProps$2);

var propTypes$3 = {
  /** Event handling */
  captureScroll: PropTypes__default.bool,
  // Stop map pan & rotate
  captureDrag: PropTypes__default.bool,
  // Stop map click
  captureClick: PropTypes__default.bool,
  // Stop map double click
  captureDoubleClick: PropTypes__default.bool
};
var defaultProps$3 = {
  captureScroll: false,
  captureDrag: true,
  captureClick: true,
  captureDoubleClick: true
};

/*
 * PureComponent doesn't update when context changes.
 * The only way is to implement our own shouldComponentUpdate here. Considering
 * the parent component (StaticMap or InteractiveMap) is pure, and map re-render
 * is almost always triggered by a viewport change, we almost definitely need to
 * recalculate the marker's position when the parent re-renders.
 */
var BaseControl =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(BaseControl, _PureComponent);

  function BaseControl() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseControl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_context", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_events", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_containerRef", createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onScroll", function (evt) {
      if (_this.props.captureScroll) {
        evt.stopPropagation();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onDragStart", function (evt) {
      if (_this.props.captureDrag) {
        evt.stopPropagation();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onPointerUp", function (evt) {
      if (_this.props.captureDoubleClick) {
        var eventManager = _this._context.eventManager;

        var _eventManager$manager = eventManager.manager.get('doubletap'),
            enable = _eventManager$manager.options.enable; // Temporarily disable doubletap


        if (enable) {
          eventManager._toggleRecognizer('doubletap', false);
          /* global setTimeout */


          setTimeout(function () {
            eventManager._toggleRecognizer('doubletap', true);
          }, 0);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onClick", function (evt) {
      if (_this.props.captureClick) {
        evt.stopPropagation();
      }
    });

    return _this;
  }

  _createClass(BaseControl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var ref = this._containerRef.current;

      if (!ref) {
        return;
      }

      var eventManager = this._context.eventManager; // Return early if no eventManager is found

      if (eventManager) {
        this._events = {
          wheel: this._onScroll,
          panstart: this._onDragStart,
          click: this._onClick,
          pointerup: this._onPointerUp
        };
        eventManager.on(this._events, ref);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var eventManager = this._context.eventManager;

      if (eventManager && this._events) {
        eventManager.off(this._events);
      }
    }
  }, {
    key: "_render",
    value: function _render() {
      throw new Error('_render() not implemented');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return createElement(InteractiveContext.Consumer, null, function (interactiveContext) {
        // Save event manager
        return createElement(StaticContext.Consumer, null, function (staticContext) {
          _this2._context = Object.assign({}, interactiveContext, staticContext);
          return _this2._render();
        });
      });
    }
  }]);

  return BaseControl;
}(PureComponent);

_defineProperty(BaseControl, "propTypes", propTypes$3);

_defineProperty(BaseControl, "defaultProps", defaultProps$3);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var propTypes$4 = Object.assign({}, BaseControl.propTypes, {
  draggable: PropTypes__default.bool,
  onDrag: PropTypes__default.func,
  onDragEnd: PropTypes__default.func,
  onDragStart: PropTypes__default.func
});
var defaultProps$4 = Object.assign({}, BaseControl.defaultProps, {
  draggable: false
});

var DraggableControl =
/*#__PURE__*/
function (_BaseControl) {
  _inherits(DraggableControl, _BaseControl);

  function DraggableControl(props) {
    var _this;

    _classCallCheck(this, DraggableControl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DraggableControl).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onDragStart", function (event) {
      var _this$props = _this.props,
          draggable = _this$props.draggable,
          captureDrag = _this$props.captureDrag;

      if (draggable || captureDrag) {
        event.stopPropagation();
      }

      if (!draggable) {
        return;
      }

      var dragPos = _this._getDragEventPosition(event);

      var dragOffset = _this._getDragEventOffset(event);

      _this.setState({
        dragPos: dragPos,
        dragOffset: dragOffset
      });

      _this._setupDragEvents();

      if (_this.props.onDragStart) {
        event.lngLat = _this._getDragLngLat(dragPos, dragOffset);

        _this.props.onDragStart(event);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onDrag", function (event) {
      event.stopPropagation();

      var dragPos = _this._getDragEventPosition(event);

      _this.setState({
        dragPos: dragPos
      });

      if (_this.props.onDrag) {
        event.lngLat = _this._getDragLngLat(dragPos, _this.state.dragOffset);

        _this.props.onDrag(event);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onDragEnd", function (event) {
      var _this$state = _this.state,
          dragPos = _this$state.dragPos,
          dragOffset = _this$state.dragOffset;
      event.stopPropagation();

      _this.setState({
        dragPos: null,
        dragOffset: null
      });

      _this._removeDragEvents();

      if (_this.props.onDragEnd) {
        event.lngLat = _this._getDragLngLat(dragPos, dragOffset);

        _this.props.onDragEnd(event);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onDragCancel", function (event) {
      event.stopPropagation();

      _this.setState({
        dragPos: null,
        dragOffset: null
      });

      _this._removeDragEvents();
    });

    _this.state = {
      dragPos: null,
      dragOffset: null
    };
    return _this;
  }

  _createClass(DraggableControl, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _get(_getPrototypeOf(DraggableControl.prototype), "componentWillUnmount", this).call(this);

      this._removeDragEvents();
    }
  }, {
    key: "_setupDragEvents",
    value: function _setupDragEvents() {
      var eventManager = this._context.eventManager;

      if (!eventManager) {
        return;
      } // panstart is already attached by parent class BaseControl,
      // here we just add listeners for subsequent drag events


      this._dragEvents = {
        panmove: this._onDrag,
        panend: this._onDragEnd,
        pancancel: this._onDragCancel
      };
      eventManager.on(this._dragEvents);
    }
  }, {
    key: "_removeDragEvents",
    value: function _removeDragEvents() {
      var eventManager = this._context.eventManager;

      if (!eventManager || !this._dragEvents) {
        return;
      }

      eventManager.off(this._dragEvents);
      this._dragEvents = null;
    }
  }, {
    key: "_getDragEventPosition",
    value: function _getDragEventPosition(event) {
      var _event$offsetCenter = event.offsetCenter,
          x = _event$offsetCenter.x,
          y = _event$offsetCenter.y;
      return [x, y];
    }
    /**
     * Returns offset of top-left of marker from drag start event
     * (used for positioning marker relative to next mouse coordinates)
     */

  }, {
    key: "_getDragEventOffset",
    value: function _getDragEventOffset(event) {
      var _event$center = event.center,
          x = _event$center.x,
          y = _event$center.y;

      var rect = this._containerRef.current.getBoundingClientRect();

      return [rect.left - x, rect.top - y];
    }
  }, {
    key: "_getDraggedPosition",
    value: function _getDraggedPosition(dragPos, dragOffset) {
      return [dragPos[0] + dragOffset[0], dragPos[1] + dragOffset[1]];
    }
  }, {
    key: "_getDragLngLat",
    value: function _getDragLngLat(dragPos, dragOffset) {
      return this._context.viewport.unproject(this._getDraggedPosition(dragPos, dragOffset));
    }
  }]);

  return DraggableControl;
}(BaseControl);

_defineProperty(DraggableControl, "propTypes", propTypes$4);

_defineProperty(DraggableControl, "defaultProps", defaultProps$4);

var propTypes$5 = Object.assign({}, DraggableControl.propTypes, {
  // Custom className
  className: PropTypes__default.string,
  // Longitude of the anchor point
  longitude: PropTypes__default.number.isRequired,
  // Latitude of the anchor point
  latitude: PropTypes__default.number.isRequired,
  // Offset from the left
  offsetLeft: PropTypes__default.number,
  // Offset from the top
  offsetTop: PropTypes__default.number,
  // Drag and Drop props
  draggable: PropTypes__default.bool,
  onDrag: PropTypes__default.func,
  onDragEnd: PropTypes__default.func,
  onDragStart: PropTypes__default.func
});
var defaultProps$5 = Object.assign({}, DraggableControl.defaultProps, {
  className: '',
  offsetLeft: 0,
  offsetTop: 0
});
/*
 * PureComponent doesn't update when context changes.
 * The only way is to implement our own shouldComponentUpdate here. Considering
 * the parent component (StaticMap or InteractiveMap) is pure, and map re-render
 * is almost always triggered by a viewport change, we almost definitely need to
 * recalculate the marker's position when the parent re-renders.
 */

var Marker =
/*#__PURE__*/
function (_DraggableControl) {
  _inherits(Marker, _DraggableControl);

  function Marker() {
    _classCallCheck(this, Marker);

    return _possibleConstructorReturn(this, _getPrototypeOf(Marker).apply(this, arguments));
  }

  _createClass(Marker, [{
    key: "_render",
    value: function _render() {
      var _this$props = this.props,
          className = _this$props.className,
          longitude = _this$props.longitude,
          latitude = _this$props.latitude,
          offsetLeft = _this$props.offsetLeft,
          offsetTop = _this$props.offsetTop;
      var _this$state = this.state,
          dragPos = _this$state.dragPos,
          dragOffset = _this$state.dragOffset;

      var _ref = dragPos ? this._getDraggedPosition(dragPos, dragOffset) : this._context.viewport.project([longitude, latitude]),
          _ref2 = _slicedToArray(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];

      var containerStyle = {
        position: 'absolute',
        left: x + offsetLeft,
        top: y + offsetTop
      };
      return createElement('div', {
        className: "mapboxgl-marker ".concat(className),
        ref: this._containerRef,
        style: containerStyle,
        children: this.props.children
      });
    }
  }]);

  return Marker;
}(DraggableControl);

_defineProperty(Marker, "propTypes", propTypes$5);

_defineProperty(Marker, "defaultProps", defaultProps$5);

var ANCHOR_POSITION = {
  top: {
    x: 0.5,
    y: 0
  },
  'top-left': {
    x: 0,
    y: 0
  },
  'top-right': {
    x: 1,
    y: 0
  },
  bottom: {
    x: 0.5,
    y: 1
  },
  'bottom-left': {
    x: 0,
    y: 1
  },
  'bottom-right': {
    x: 1,
    y: 1
  },
  left: {
    x: 0,
    y: 0.5
  },
  right: {
    x: 1,
    y: 0.5
  }
};
var ANCHOR_TYPES = Object.keys(ANCHOR_POSITION);
/**
 * Calculate the dynamic position for a popup to fit in a container.
 * @param {Number} x - x position of the anchor on screen
 * @param {Number} y - y position of the anchor on screen
 * @param {Number} width - width of the container
 * @param {Number} height - height of the container
 * @param {Number} padding - extra space from the edge in pixels
 * @param {Number} selfWidth - width of the popup
 * @param {Number} selfHeight - height of the popup
 * @param {String} anchor - type of the anchor, one of 'top', 'bottom',
    'left', 'right', 'top-left', 'top-right', 'bottom-left' , and  'bottom-right'
 * @returns {String} position - one of 'top', 'bottom',
    'left', 'right', 'top-left', 'top-right', 'bottom-left' , and  'bottom-right'
 */

function getDynamicPosition(_ref) {
  var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      selfWidth = _ref.selfWidth,
      selfHeight = _ref.selfHeight,
      anchor = _ref.anchor,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 0 : _ref$padding;
  var _ANCHOR_POSITION$anch = ANCHOR_POSITION[anchor],
      anchorX = _ANCHOR_POSITION$anch.x,
      anchorY = _ANCHOR_POSITION$anch.y; // anchorY: top - 0, center - 0.5, bottom - 1

  var top = y - anchorY * selfHeight;
  var bottom = top + selfHeight; // If needed, adjust anchorY at 0.5 step between [0, 1]

  var yStep = 0.5;

  if (top < padding) {
    // Top edge is outside, try move down
    while (top < padding && anchorY >= yStep) {
      anchorY -= yStep;
      top += yStep * selfHeight;
    }
  } else if (bottom > height - padding) {
    // bottom edge is outside, try move up
    while (bottom > height - padding && anchorY <= 1 - yStep) {
      anchorY += yStep;
      bottom -= yStep * selfHeight;
    }
  } // anchorX: left - 0, center - 0.5, right - 1


  var left = x - anchorX * selfWidth;
  var right = left + selfWidth; // If needed, adjust anchorX at 0.5 step between [0, 1]

  var xStep = 0.5;

  if (anchorY === 0.5) {
    // If y is centered, then x cannot also be centered
    anchorX = Math.floor(anchorX);
    xStep = 1;
  }

  if (left < padding) {
    // Left edge is outside, try move right
    while (left < padding && anchorX >= xStep) {
      anchorX -= xStep;
      left += xStep * selfWidth;
    }
  } else if (right > width - padding) {
    // Right edge is outside, try move left
    while (right > width - padding && anchorX <= 1 - xStep) {
      anchorX += xStep;
      right -= xStep * selfWidth;
    }
  } // Find the name of the new anchor position


  return ANCHOR_TYPES.find(function (positionType) {
    var anchorPosition = ANCHOR_POSITION[positionType];
    return anchorPosition.x === anchorX && anchorPosition.y === anchorY;
  }) || anchor;
}

var propTypes$6 = Object.assign({}, BaseControl.propTypes, {
  // Custom className
  className: PropTypes__default.string,
  // Longitude of the anchor point
  longitude: PropTypes__default.number.isRequired,
  // Latitude of the anchor point
  latitude: PropTypes__default.number.isRequired,
  // Altitude of the anchor point
  altitude: PropTypes__default.number,
  // Offset from the left
  offsetLeft: PropTypes__default.number,
  // Offset from the top
  offsetTop: PropTypes__default.number,
  // Size of the tip
  tipSize: PropTypes__default.number,
  // Whether to show close button
  closeButton: PropTypes__default.bool,
  // Whether to close on click
  closeOnClick: PropTypes__default.bool,
  // The popup's location relative to the coordinate
  anchor: PropTypes__default.oneOf(Object.keys(ANCHOR_POSITION)),
  // Whether the popup anchor should be auto-adjusted to fit within the container
  dynamicPosition: PropTypes__default.bool,
  // Whether popups should be sorted by depth. Useful when using multiple popups with tilted map.
  sortByDepth: PropTypes__default.bool,
  // Callback when component is closed
  onClose: PropTypes__default.func
});
var defaultProps$6 = Object.assign({}, BaseControl.defaultProps, {
  className: '',
  altitude: 0,
  offsetLeft: 0,
  offsetTop: 0,
  tipSize: 10,
  anchor: 'bottom',
  dynamicPosition: true,
  sortByDepth: false,
  closeButton: true,
  closeOnClick: true,
  onClose: function onClose() {}
});
/*
 * PureComponent doesn't update when context changes.
 * The only way is to implement our own shouldComponentUpdate here. Considering
 * the parent component (StaticMap or InteractiveMap) is pure, and map re-render
 * is almost always triggered by a viewport change, we almost definitely need to
 * recalculate the popup's position when the parent re-renders.
 */

var Popup =
/*#__PURE__*/
function (_BaseControl) {
  _inherits(Popup, _BaseControl);

  function Popup(props) {
    var _this;

    _classCallCheck(this, Popup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popup).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onClick", function (evt) {
      if (_this.props.captureClick) {
        evt.stopPropagation();
      }

      if (_this.props.closeOnClick || _this._closeOnClick) {
        _this.props.onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onClose", function () {
      _this._closeOnClick = true;
    });

    _this._closeOnClick = false;
    _this._contentRef = createRef();
    return _this;
  }

  _createClass(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(Popup.prototype), "componentDidMount", this).call(this); // Container just got a size, re-calculate position


      this.forceUpdate();
    }
  }, {
    key: "_getPosition",
    value: function _getPosition(x, y) {
      var viewport = this._context.viewport;
      var _this$props = this.props,
          anchor = _this$props.anchor,
          dynamicPosition = _this$props.dynamicPosition,
          tipSize = _this$props.tipSize;
      var content = this._contentRef.current;

      if (content) {
        return dynamicPosition ? getDynamicPosition({
          x: x,
          y: y,
          anchor: anchor,
          padding: tipSize,
          width: viewport.width,
          height: viewport.height,
          selfWidth: content.clientWidth,
          selfHeight: content.clientHeight
        }) : anchor;
      }

      return anchor;
    }
  }, {
    key: "_getContainerStyle",
    value: function _getContainerStyle(x, y, z, positionType) {
      var viewport = this._context.viewport;
      var _this$props2 = this.props,
          offsetLeft = _this$props2.offsetLeft,
          offsetTop = _this$props2.offsetTop,
          sortByDepth = _this$props2.sortByDepth;
      var anchorPosition = ANCHOR_POSITION[positionType];
      var style = {
        position: 'absolute',
        left: x + offsetLeft,
        top: y + offsetTop,
        transform: "translate(".concat(-anchorPosition.x * 100, "%, ").concat(-anchorPosition.y * 100, "%)")
      };

      if (!sortByDepth) {
        return style;
      }

      if (z > 1 || z < -1 || x < 0 || x > viewport.width || y < 0 || y > viewport.height) {
        // clipped
        style.display = 'none';
      } else {
        // use z-index to rearrange components
        style.zIndex = Math.floor((1 - z) / 2 * 100000);
      }

      return style;
    }
    /*
     * Hack -
     * React's `onClick` is called before mjolnir.js' `click` event (aka `tap` from hammer.js)
     * which has a configurable delay.
     * If we close the popup on the React event, by the time `click` fires, this component will
     * have been unmounted, thus `captureClick` will not work.
     * Instead, we flag the popup as closed on the React event, and actually close it on the hammer.js
     * event.
     */

  }, {
    key: "_renderTip",
    value: function _renderTip(positionType) {
      var tipSize = this.props.tipSize;
      return createElement('div', {
        key: 'tip',
        className: 'mapboxgl-popup-tip',
        style: {
          borderWidth: tipSize
        }
      });
    }
  }, {
    key: "_renderContent",
    value: function _renderContent() {
      var _this$props3 = this.props,
          closeButton = _this$props3.closeButton,
          children = _this$props3.children;
      return createElement('div', {
        key: 'content',
        ref: this._contentRef,
        className: 'mapboxgl-popup-content'
      }, [closeButton && createElement('button', {
        key: 'close-button',
        className: 'mapboxgl-popup-close-button',
        type: 'button',
        onClick: this._onClose
      }, '×'), children]);
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this$props4 = this.props,
          className = _this$props4.className,
          longitude = _this$props4.longitude,
          latitude = _this$props4.latitude,
          altitude = _this$props4.altitude;

      var _this$_context$viewpo = this._context.viewport.project([longitude, latitude, altitude]),
          _this$_context$viewpo2 = _slicedToArray(_this$_context$viewpo, 3),
          x = _this$_context$viewpo2[0],
          y = _this$_context$viewpo2[1],
          z = _this$_context$viewpo2[2];

      var positionType = this._getPosition(x, y);

      var containerStyle = this._getContainerStyle(x, y, z, positionType);

      return createElement('div', {
        className: "mapboxgl-popup mapboxgl-popup-anchor-".concat(positionType, " ").concat(className),
        style: containerStyle,
        ref: this._containerRef
      }, [this._renderTip(positionType), this._renderContent()]);
    }
  }]);

  return Popup;
}(BaseControl);

_defineProperty(Popup, "propTypes", propTypes$6);

_defineProperty(Popup, "defaultProps", defaultProps$6);

var LINEAR_TRANSITION_PROPS$1 = Object.assign({}, TransitionManager.defaultProps, {
  transitionDuration: 300
});
var propTypes$7 = Object.assign({}, BaseControl.propTypes, {
  // Custom className
  className: PropTypes__default.string,
  // Callbacks fired when the user interacted with the map. The object passed to the callbacks
  // contains viewport properties such as `longitude`, `latitude`, `zoom` etc.
  onViewStateChange: PropTypes__default.func,
  onViewportChange: PropTypes__default.func,
  // Show/hide compass button
  showCompass: PropTypes__default.bool,
  // Show/hide zoom buttons
  showZoom: PropTypes__default.bool
});
var defaultProps$7 = Object.assign({}, BaseControl.defaultProps, {
  className: '',
  onViewStateChange: function onViewStateChange() {},
  onViewportChange: function onViewportChange() {},
  showCompass: true,
  showZoom: true
});
/*
 * PureComponent doesn't update when context changes, so
 * implementing our own shouldComponentUpdate here.
 */

var NavigationControl =
/*#__PURE__*/
function (_BaseControl) {
  _inherits(NavigationControl, _BaseControl);

  function NavigationControl(props) {
    var _this;

    _classCallCheck(this, NavigationControl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavigationControl).call(this, props)); // Check for deprecated props

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onZoomIn", function () {
      _this._updateViewport({
        zoom: _this._context.viewport.zoom + 1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onZoomOut", function () {
      _this._updateViewport({
        zoom: _this._context.viewport.zoom - 1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_onResetNorth", function () {
      _this._updateViewport({
        bearing: 0,
        pitch: 0
      });
    });

    checkDeprecatedProps(props);
    return _this;
  }

  _createClass(NavigationControl, [{
    key: "_updateViewport",
    value: function _updateViewport(opts) {
      var viewport = this._context.viewport;
      var mapState = new MapState(Object.assign({}, viewport, opts));
      var viewState = Object.assign({}, mapState.getViewportProps(), LINEAR_TRANSITION_PROPS$1); // Call new style callback

      this.props.onViewStateChange({
        viewState: viewState
      }); // Call old style callback

      this.props.onViewportChange(viewState);
    }
  }, {
    key: "_renderCompass",
    value: function _renderCompass() {
      var bearing = this._context.viewport.bearing;
      return createElement('span', {
        className: 'mapboxgl-ctrl-compass-arrow',
        style: {
          transform: "rotate(".concat(bearing, "deg)")
        }
      });
    }
  }, {
    key: "_renderButton",
    value: function _renderButton(type, label, callback, children) {
      return createElement('button', {
        key: type,
        className: "mapboxgl-ctrl-icon mapboxgl-ctrl-".concat(type),
        type: 'button',
        title: label,
        onClick: callback,
        children: children
      });
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this$props = this.props,
          className = _this$props.className,
          showCompass = _this$props.showCompass,
          showZoom = _this$props.showZoom;
      return createElement('div', {
        className: "mapboxgl-ctrl mapboxgl-ctrl-group ".concat(className),
        ref: this._containerRef
      }, [showZoom && this._renderButton('zoom-in', 'Zoom In', this._onZoomIn), showZoom && this._renderButton('zoom-out', 'Zoom Out', this._onZoomOut), showCompass && this._renderButton('compass', 'Reset North', this._onResetNorth, this._renderCompass())]);
    }
  }]);

  return NavigationControl;
}(BaseControl);

_defineProperty(NavigationControl, "propTypes", propTypes$7);

_defineProperty(NavigationControl, "defaultProps", defaultProps$7);

var propTypes$8 = Object.assign({}, BaseControl.propTypes, {
  redraw: PropTypes__default.func.isRequired
});

var propTypes$9 = Object.assign({}, BaseControl.propTypes, {
  redraw: PropTypes__default.func.isRequired,
  style: PropTypes__default.object
});

var propTypes$a = Object.assign({}, BaseControl.propTypes, {
  redraw: PropTypes__default.func.isRequired,
  style: PropTypes__default.object
});

// Copyright (c) 2015 Uber Technologies, Inc.

var HEATMAP_SOURCE_ID = 'locations-source';
var HeatMapChart = function HeatMapChart(_ref) {
  var data = _ref.data,
      height = _ref.height,
      mapboxApiAccessToken = _ref.mapboxApiAccessToken,
      width = _ref.width;

  var _useState = useState({
    width: width,
    height: height,
    latitude: 37.785164,
    longitude: -100,
    zoom: 2.7,
    bearing: 0,
    pitch: 0
  }),
      _useState2 = _slicedToArray$1(_useState, 2),
      viewport = _useState2[0],
      updateViewport = _useState2[1];

  var heatMapRef = useRef(null);

  var handleMapLoaded = function handleMapLoaded() {
    var map = heatMapRef.current.getMap();
    console.log(map);
    map.addSource(HEATMAP_SOURCE_ID, {
      type: 'geojson',
      data: data
    });
    map.addLayer(mkHeatmapLayer('heatmap-layer', HEATMAP_SOURCE_ID));
  };

  var mkHeatmapLayer = function mkHeatmapLayer(id, source) {
    var MAX_ZOOM_LEVEL = 23;
    return {
      id: id,
      source: source,
      maxzoom: MAX_ZOOM_LEVEL,
      type: 'heatmap',
      paint: {
        // Increase the heatmap weight based on frequency and property magnitude
        'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 1, 1],
        // Increase the heatmap color weight weight by zoom level
        // heatmap-intensity is a multiplier on top of heatmap-weight
        'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, MAX_ZOOM_LEVEL, 3],
        // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
        // Begin color ramp at 0-stop with a 0-transparancy color
        // to create a blur-like effect.
        'heatmap-color': ['interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(239,243,255,0)', 0.2, 'rgb(198,219,239)', 0.4, 'rgb(158,202,225)', 0.6, 'rgb(107,174,214)', 0.8, 'rgb(49,130,189)', 0.9, 'rgb(8,81,156)'],
        // Adjust the heatmap radius by zoom level
        'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, MAX_ZOOM_LEVEL, 6],
        // Transition from heatmap to circle layer by zoom level
        'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, MAX_ZOOM_LEVEL, 1]
      }
    };
  };

  return React__default.createElement("div", null, React__default.createElement(InteractiveMap, _extends$1({}, viewport, {
    onLoad: handleMapLoaded,
    onViewportChange: updateViewport,
    mapStyle: "mapbox://styles/mapbox/dark-v9",
    mapboxApiAccessToken: mapboxApiAccessToken,
    ref: heatMapRef
  }), React__default.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '10px'
    }
  }, React__default.createElement(NavigationControl, {
    showCompass: false,
    onViewportChange: updateViewport
  }))));
};
HeatMapChart.propTypes = {
  className: PropTypes__default.string,
  data: PropTypes__default.array.isRequired,
  height: PropTypes__default.array.isRequired,
  width: PropTypes__default.array.isRequired
};
HeatMapChart.defaultProps = {
  height: 600
};

export { HeatMapChart };