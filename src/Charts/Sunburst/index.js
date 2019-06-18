import React from 'react'
import PT from 'prop-types'
import ReactEcharts from 'echarts-for-react'
import { withTheme } from '../../withTheme'

/**
 * ==================================================
 * Common PropTypes
 * Other reference PropTypes: http://uber.github.io/react-vis/documentation/api-reference/xy-plot
 * ==================================================
 */
const NumberOrStringPT = PT.oneOfType([PT.number, PT.string])

/**
 * ==================================================
 * Common getters/utils
 * ==================================================
 */
const getRandomNumberInRange = (min = 0, max = 10) =>
  Math.floor(Math.random() * max) + min

/**
 * ==================================================
 * Utility functions for getting random color
 * ==================================================
 */
const colors = [
  '#30BC9D',
  '#FF9552',
  '#5099DE',
  '#EE6352',
  '#68CEB7',
  '#FFA871',
  '#7FB4E7',
  '#F28D81',
  '#338472',
  '#D17A44',
  '#33628E',
  '#A04438',
  '#30BC9D',
  '#FF9552',
  '#5099DE',
  '#EE6352',
  '#68CEB7',
  '#FFA871',
  '#7FB4E7',
  '#F28D81',
  '#338472',
  '#D17A44',
  '#33628E',
  '#A04438'
]
const popRandomColor = () => colors[Math.floor(Math.random() * colors.length)]

/**
 * ==================================================
 * Sunburst
 * ==================================================
 */
const createSunburstChildren = (root, level) => {
  const data = []
  const count = getRandomNumberInRange(1, 3)
  for (let i = 1; i < count; i++) {
    data.push({
      name: `Node${i}`,
      value: getRandomNumberInRange(1, 5),
      children:
        level === 0 ? [] : createSunburstChildren(`${root}.${i}`, level - 1),
      itemStyle: { color: popRandomColor() },
      label: { show: false }
    })
  }
  return data
}

export const generateFakeSunburstChartData = () => {
  const levels = getRandomNumberInRange(2, 4)
  const data = []

  for (let i = 1; i < levels; i++) {
    data.push({
      name: `Node${i}`,
      value: getRandomNumberInRange(1, 5),
      children: createSunburstChildren(i, levels),
      itemStyle: { color: popRandomColor() },
      label: { show: false }
    })
  }

  return data
}

export const SunburstChart = withTheme(({ data, height, ...rest }) => {
  const option = {
    series: {
      radius: ['15%', '80%'],
      type: 'sunburst',
      sort: null,
      highlightPolicy: 'ancestor',
      data: data,
      label: {
        rotate: 'radial'
      },
      levels: [],
      itemStyle: {
        color: '#ddd',
        borderWidth: 2
      }
    },
    tooltip: {
      formatter: function(info) {
        return [
          '<div class="tooltip-title">' +
            info.data.name +
            ' : ' +
            info.data.value +
            '</div>'
        ].join('')
      }
    }
  }

  return (
    <ReactEcharts
      option={option}
      style={{ height: height ? height : '400px', width: '100%' }}
      {...rest}
    />
  )
})

SunburstChart.propTypes = {
  className: PT.string,
  data: PT.array.isRequired,
  height: NumberOrStringPT,
  width: NumberOrStringPT
}

SunburstChart.defaultProps = {
  height: 400
}

export default SunburstChart
