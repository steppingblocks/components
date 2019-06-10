function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * This file houses all custom charts which should be reusable molecules
 */
import React, { useState } from 'react';
import PT from 'prop-types';
import get from 'lodash/get';
import _get from 'lodash/fp/get';
import { AreaSeries, Crosshair, FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries, Highlight } from 'react-vis';
import { withTheme } from '../withTheme';
/**
 * ==================================================
 * Common props
 * ==================================================
 */

var LARGE = new Array(100).fill(0);
var SMALL = new Array(4).fill(0);
var large = LARGE.map(function (_, idx) {
  return idx;
});
var small = SMALL.map(function (_, idx) {
  return idx;
});
/**
 * ==================================================
 * Common PropTypes
 * Other reference PropTypes: http://uber.github.io/react-vis/documentation/api-reference/xy-plot
 * ==================================================
 */

var NumberOrStringPT = PT.oneOfType([PT.number, PT.string]);
var ScalePT = PT.oneOf(['category', 'linear', 'literal', 'log', 'ordinal', 'time-utc', 'time']);
var SeriesPT = PT.shape({
  x: NumberOrStringPT,
  y: NumberOrStringPT
});
/**
 * ==================================================
 * Common getters/utils
 * ==================================================
 */

var getTop = _get('top');

var getRight = _get('right');

var getBottom = _get('bottom');

var getLeft = _get('left');

var getXDomain = function getXDomain(location) {
  return location ? [getLeft(location), getRight(location)] : null;
};

var getYDomain = function getYDomain(location) {
  return location ? [getBottom(location), getTop(location)] : null;
};

var getRandomNumberInRange = function getRandomNumberInRange() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return Math.floor(Math.random() * max) + min;
};
/**
 * ==================================================
 * AreaChart
 * ==================================================
 */


export var generateFakeAreaChartData = function generateFakeAreaChartData() {
  return small.map(function (idx) {
    return {
      x: idx,
      y: getRandomNumberInRange(0, 10),
      key: idx
    };
  });
};
export var AreaChart = withTheme(function (_ref) {
  var data = _ref.data,
      rest = _objectWithoutProperties(_ref, ["data"]);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      lastDrawLocation = _useState2[0],
      setLastDrawLocation = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      crosshairValues = _useState4[0],
      setCrosshairValues = _useState4[1];

  var resetCrosshairValues = function resetCrosshairValues() {
    return setCrosshairValues([]);
  };

  var onNearestX = function onNearestX(_, _ref2) {
    var index = _ref2.index;

    var values = _get(index)(data);

    setCrosshairValues([values]);
  };

  return React.createElement(FlexibleXYPlot, _extends({
    animation: true,
    onMouseLeave: resetCrosshairValues,
    xDomain: getXDomain(lastDrawLocation),
    yDomain: getYDomain(lastDrawLocation)
  }, rest), React.createElement(HorizontalGridLines, null), React.createElement(VerticalGridLines, null), React.createElement(XAxis, null), React.createElement(YAxis, null), React.createElement(AreaSeries, {
    data: data,
    onNearestX: onNearestX
  }), React.createElement(Highlight, {
    drag: true,
    onBrushEnd: setLastDrawLocation,
    onDrag: function onDrag(_ref3) {
      var top = _ref3.top,
          right = _ref3.right,
          bottom = _ref3.bottom,
          left = _ref3.left;
      return setLastDrawLocation({
        bottom: getBottom(lastDrawLocation) + (top - bottom),
        left: getLeft(lastDrawLocation) - (right - left),
        right: getRight(lastDrawLocation) - (right - left),
        top: getTop(lastDrawLocation) + (top - bottom)
      });
    }
  }), React.createElement(Crosshair, {
    values: crosshairValues
  }));
});
AreaChart.propTypes = {
  className: PT.string,
  colorType: ScalePT,
  data: PT.arrayOf(PT.shape({
    key: NumberOrStringPT,
    x: NumberOrStringPT,
    y: NumberOrStringPT
  })).isRequired,
  height: NumberOrStringPT,
  width: NumberOrStringPT
};
AreaChart.defaultProps = {
  height: 400
  /**
   * ==================================================
   * MultiLineChart
   * ==================================================
   */

};
export var generateFakeMultiLineChartData = function generateFakeMultiLineChartData() {
  return small.reduce(function (acc, outerIdx) {
    var series = large.map(function (_, idx) {
      return {
        x: idx,
        y: (outerIdx / 10 + 1) * Math.sin(Math.PI * (outerIdx + idx) / 50)
      };
    });
    return acc.concat({
      animation: true,
      color: outerIdx,
      data: series,
      key: outerIdx,
      opacity: 0.8
    });
  }, []);
};
export var MultiLineChart = withTheme(function (_ref4) {
  var data = _ref4.data,
      rest = _objectWithoutProperties(_ref4, ["data"]);

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      lastDrawLocation = _useState6[0],
      setLastDrawLocation = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      crosshairValues = _useState8[0],
      setCrosshairValues = _useState8[1];

  var resetCrosshairValues = function resetCrosshairValues() {
    return setCrosshairValues([]);
  };

  var onNearestX = function onNearestX(_, _ref5) {
    var index = _ref5.index;
    var values = data.map(function (datum) {
      return get(datum, "data.".concat(index));
    });
    setCrosshairValues(values);
  };

  return React.createElement(FlexibleXYPlot, _extends({
    animation: true,
    onMouseLeave: resetCrosshairValues,
    xDomain: getXDomain(lastDrawLocation),
    yDomain: getYDomain(lastDrawLocation)
  }, rest), React.createElement(HorizontalGridLines, null), React.createElement(VerticalGridLines, null), React.createElement(XAxis, null), React.createElement(YAxis, null), data.map(function (props) {
    return React.createElement(LineSeries, _extends({}, props, {
      onNearestX: onNearestX
    }));
  }), React.createElement(Highlight, {
    drag: true,
    onBrushEnd: setLastDrawLocation,
    onDrag: function onDrag(_ref6) {
      var top = _ref6.top,
          right = _ref6.right,
          bottom = _ref6.bottom,
          left = _ref6.left;
      return setLastDrawLocation({
        bottom: getBottom(lastDrawLocation) + (top - bottom),
        left: getLeft(lastDrawLocation) - (right - left),
        right: getRight(lastDrawLocation) - (right - left),
        top: getTop(lastDrawLocation) + (top - bottom)
      });
    }
  }), React.createElement(Crosshair, {
    values: crosshairValues
  }));
});
MultiLineChart.propTypes = {
  className: PT.string,
  colorType: ScalePT,
  data: PT.arrayOf(PT.shape({
    color: NumberOrStringPT,
    key: NumberOrStringPT,
    data: SeriesPT
  })).isRequired,
  height: NumberOrStringPT,
  width: NumberOrStringPT
};
MultiLineChart.defaultProps = {
  height: 400
};