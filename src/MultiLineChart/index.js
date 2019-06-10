import React from 'react'
import PT from 'prop-types'
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis'
import { withTheme } from '../withTheme'

/**
 * Generates fake data for a multi-line chart
 */
export const generateFakeData = () => {
  const data = []

  for (let i = 0; i < 20; i++) {
    const series = []
    for (let j = 0; j < 100; j++) {
      series.push({
        x: j,
        y: (i / 10 + 1) * Math.sin((Math.PI * (i + j)) / 50)
      })
    }
    data.push({ color: i, key: i, data: series, opacity: 0.8 })
  }
  return data
}

const MultiLineChart = ({ data, ...rest }) => {
  return (
    <FlexibleXYPlot
      colorDomain={[0, 9]}
      colorRange={['yellow', 'orange']}
      {...rest}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      {data.map(props => (
        <LineSeries {...props} />
      ))}
    </FlexibleXYPlot>
  )
}

/**
 * Other reference PropTypes: http://uber.github.io/react-vis/documentation/api-reference/xy-plot
 */
MultiLineChart.propTypes = {
  className: PT.string,
  colorType: PT.oneOf(['category', 'linear', 'literal']),
  data: PT.array.isRequired,
  height: PT.oneOfType([PT.number, PT.string]),
  width: PT.oneOfType([PT.number, PT.string])
}

MultiLineChart.defaultProps = {
  height: 400,
  colorType: 'linear'
}

export default withTheme(MultiLineChart)
