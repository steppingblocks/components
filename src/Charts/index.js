/**
 * This file houses all custom charts which should be reusable molecules
 */
import React, { useState } from 'react'
import PT from 'prop-types'
import get from 'lodash/get'
import _get from 'lodash/fp/get'
import {
  AreaSeries,
  Crosshair,
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  Highlight
} from 'react-vis'
import { withTheme } from '../withTheme'

/**
 * ==================================================
 * Common props
 * ==================================================
 */
const LARGE = new Array(100).fill(0)
const SMALL = new Array(4).fill(0)

const large = LARGE.map((_, idx) => idx)
const small = SMALL.map((_, idx) => idx)

/**
 * ==================================================
 * Common PropTypes
 * Other reference PropTypes: http://uber.github.io/react-vis/documentation/api-reference/xy-plot
 * ==================================================
 */
const NumberOrStringPT = PT.oneOfType([PT.number, PT.string])
const ScalePT = PT.oneOf([
  'category',
  'linear',
  'literal',
  'log',
  'ordinal',
  'time-utc',
  'time'
])
const SeriesPT = PT.shape({
  x: NumberOrStringPT,
  y: NumberOrStringPT
})

/**
 * ==================================================
 * Common getters/utils
 * ==================================================
 */
const getTop = _get('top')
const getRight = _get('right')
const getBottom = _get('bottom')
const getLeft = _get('left')

const getXDomain = location =>
  location ? [getLeft(location), getRight(location)] : null

const getYDomain = location =>
  location ? [getBottom(location), getTop(location)] : null

const getRandomNumberInRange = (min = 0, max = 10) =>
  Math.floor(Math.random() * max) + min

/**
 * ==================================================
 * AreaChart
 * ==================================================
 */
export const generateFakeAreaChartData = () =>
  small.map(idx => ({ x: idx, y: getRandomNumberInRange(0, 10), key: idx }))

export const AreaChart = withTheme(({ data, ...rest }) => {
  const [lastDrawLocation, setLastDrawLocation] = useState(null)
  const [crosshairValues, setCrosshairValues] = useState([])

  const resetCrosshairValues = () => setCrosshairValues([])

  const onNearestX = (_, { index }) => {
    const values = _get(index)(data)
    setCrosshairValues([values])
  }

  return (
    <FlexibleXYPlot
      animation
      onMouseLeave={resetCrosshairValues}
      xDomain={getXDomain(lastDrawLocation)}
      yDomain={getYDomain(lastDrawLocation)}
      {...rest}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      <AreaSeries data={data} onNearestX={onNearestX} />
      <Highlight
        drag
        onBrushEnd={setLastDrawLocation}
        onDrag={({ top, right, bottom, left }) =>
          setLastDrawLocation({
            bottom: getBottom(lastDrawLocation) + (top - bottom),
            left: getLeft(lastDrawLocation) - (right - left),
            right: getRight(lastDrawLocation) - (right - left),
            top: getTop(lastDrawLocation) + (top - bottom)
          })
        }
      />
      <Crosshair values={crosshairValues} />
    </FlexibleXYPlot>
  )
})

AreaChart.propTypes = {
  className: PT.string,
  colorType: ScalePT,
  data: PT.arrayOf(
    PT.shape({
      key: NumberOrStringPT,
      x: NumberOrStringPT,
      y: NumberOrStringPT
    })
  ).isRequired,
  height: NumberOrStringPT,
  width: NumberOrStringPT
}

AreaChart.defaultProps = {
  height: 400
}

/**
 * ==================================================
 * MultiLineChart
 * ==================================================
 */
export const generateFakeMultiLineChartData = () =>
  small.reduce((acc, outerIdx) => {
    const series = large.map((_, idx) => ({
      x: idx,
      y: (outerIdx / 10 + 1) * Math.sin((Math.PI * (outerIdx + idx)) / 50)
    }))
    return acc.concat({
      animation: true,
      color: outerIdx,
      data: series,
      key: outerIdx,
      opacity: 0.8
    })
  }, [])

export const MultiLineChart = withTheme(({ data, ...rest }) => {
  const [lastDrawLocation, setLastDrawLocation] = useState(null)
  const [crosshairValues, setCrosshairValues] = useState([])

  const resetCrosshairValues = () => setCrosshairValues([])

  const onNearestX = (_, { index }) => {
    const values = data.map(datum => get(datum, `data.${index}`))
    setCrosshairValues(values)
  }

  return (
    <FlexibleXYPlot
      animation
      onMouseLeave={resetCrosshairValues}
      xDomain={getXDomain(lastDrawLocation)}
      yDomain={getYDomain(lastDrawLocation)}
      {...rest}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      {data.map(props => (
        <LineSeries {...props} onNearestX={onNearestX} />
      ))}
      <Highlight
        drag
        onBrushEnd={setLastDrawLocation}
        onDrag={({ top, right, bottom, left }) =>
          setLastDrawLocation({
            bottom: getBottom(lastDrawLocation) + (top - bottom),
            left: getLeft(lastDrawLocation) - (right - left),
            right: getRight(lastDrawLocation) - (right - left),
            top: getTop(lastDrawLocation) + (top - bottom)
          })
        }
      />
      <Crosshair values={crosshairValues} />
    </FlexibleXYPlot>
  )
})

MultiLineChart.propTypes = {
  className: PT.string,
  colorType: ScalePT,
  data: PT.arrayOf(
    PT.shape({
      color: NumberOrStringPT,
      key: NumberOrStringPT,
      data: SeriesPT
    })
  ).isRequired,
  height: NumberOrStringPT,
  width: NumberOrStringPT
}

MultiLineChart.defaultProps = {
  height: 400
}
