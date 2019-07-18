import React from 'react'
import PT from 'prop-types'
import ReactEcharts from 'echarts-for-react'
import { withTheme } from '../withTheme'
import { NumberOrStringPT } from '../proptypes'

/**
 * ==================================================
 * StackedBarChart
 * ==================================================
 */
export const generateFakeStackedBarChartData = () => {
  return [
    ['Category', '2015', '2016', '2017', '2018', '2019'],
    ['Matcha Latte', 43.3, 85.8, 93.7, 32.4, 10.2],
    ['Milk Tea', 83.1, 73.4, 55.1, 23.4, 8.8],
    ['Cheese Cocoa', 86.4, 65.2, 82.5, 15.3, 15.2],
    ['Walnut Brownie', 72.4, 53.9, 39.1, 42.1, 13.3]
  ]
}

export const StackedBarChart = withTheme(({ data, height, ...rest }) => {
  const option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    dataset: {
      source: data
    },
    xAxis: { type: 'value' },
    yAxis: { type: 'category' },
    series:
      data &&
      data[0].map((_, index) => {
        if (index !== 0) {
          return {
            type: 'bar',
            stack: 'sample',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            }
          }
        }
      })
  }

  return (
    <ReactEcharts
      option={option}
      style={{ height: height ? height : '400px', width: '100%' }}
      {...rest}
    />
  )
})

StackedBarChart.propTypes = {
  className: PT.string,
  data: PT.array.isRequired,
  height: NumberOrStringPT
}

StackedBarChart.defaultProps = {
  height: 400
}

export default StackedBarChart
