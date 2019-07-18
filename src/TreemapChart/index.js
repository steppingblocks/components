import React from 'react'
import PT from 'prop-types'
import ReactEcharts from 'echarts-for-react'
import { withTheme } from '../withTheme'
import { NumberOrStringPT } from '../proptypes'
import { getRandomNumberInRange, modifyDataForChart } from '../utils'

/**
 * ==================================================
 * Treemap
 * ==================================================
 */
const createChildren = (root, level) => {
  const data = []
  const count = getRandomNumberInRange(2, 6)
  for (let i = 1; i < count; i++) {
    data.push({
      name: `Node${root}.${i}`,
      value: getRandomNumberInRange(5, 20),
      children: level === 0 ? [] : createChildren(`${root}.${i}`, level - 1)
    })
  }
  return data
}

export const generateFakeTreemapChartData = () => {
  const levels = getRandomNumberInRange(2, 6)
  const data = []

  for (let i = 1; i < levels; i++) {
    data.push({
      name: `Node${i}`,
      value: getRandomNumberInRange(5, 20),
      children: createChildren(i, levels)
    })
  }

  return data
}

export const TreemapChart = withTheme(({ data, name, height, ...rest }) => {
  const getLevelOption = () => {
    return [
      {
        itemStyle: {
          normal: {
            borderColor: '#777',
            borderWidth: 0,
            gapWidth: 1
          }
        },
        upperLabel: {
          normal: {
            show: true
          }
        }
      },
      {
        itemStyle: {
          normal: {
            borderColor: '#555',
            borderWidth: 5,
            gapWidth: 1
          },
          emphasis: {
            borderColor: '#ddd'
          }
        }
      },
      {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          normal: {
            borderWidth: 5,
            gapWidth: 1,
            borderColorSaturation: 0.6
          }
        }
      }
    ]
  }
  const option = {
    tooltip: {
      formatter: function(info) {
        const value = info.value
        const treePathInfo = info.treePathInfo
        const treePath = []

        for (let i = 1; i < treePathInfo.length; i++) {
          treePath.push(treePathInfo[i].name)
        }

        return [
          '<div class="tooltip-title">' + treePath.join('/') + '</div>',
          value
        ].join('')
      }
    },
    series: [
      {
        name,
        type: 'treemap',
        visibleMin: 300,
        label: {
          show: true,
          formatter: '{b}'
        },
        upperLabel: {
          normal: {
            show: true,
            height: 30
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#fff'
          }
        },
        levels: getLevelOption(),
        data: modifyDataForChart(data, false),
        roam: 'move'
      }
    ]
  }

  return (
    <ReactEcharts
      option={option}
      style={{ height: height ? height : '400px', width: '100%' }}
      {...rest}
    />
  )
})

TreemapChart.propTypes = {
  className: PT.string,
  data: PT.array.isRequired,
  height: NumberOrStringPT,
  name: PT.string.isRequired,
  width: NumberOrStringPT
}

TreemapChart.defaultProps = {
  height: 400
}

export default TreemapChart
