/**
 * This file houses all custom charts which should be reusable molecules
 */
import React from 'react'
import PT from 'prop-types'
import ReactEcharts from 'echarts-for-react'
import withTheme from '../withTheme'

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
let colorIndex = 0

const modifyDataForChart = (data, addColor) => {
  if (data && !!data.length) {
    const modifiedData = data.map(obj => {
      if (addColor) {
        obj.itemStyle = { color: colors[colorIndex++] }
        if (colorIndex >= colors.length) colorIndex = 0
      }
      if (obj.title) {
        obj.name = obj.title
        delete obj.title
      }
      if (obj.children && !!obj.children.length) {
        obj.children = modifyDataForChart(obj.children, addColor)
      }
      return obj
    })

    return modifiedData
  } else {
    return data
  }
}

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

export const SunburstChart = withTheme(({ data, name, height, ...rest }) => {
  const option = {
    series: {
      name,
      radius: ['15%', '80%'],
      type: 'sunburst',
      sort: null,
      highlightPolicy: 'ancestor',
      data: modifyDataForChart(data, true),
      label: {
        show: false
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
      style={{ height: height || '400px', width: '100%' }}
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
      style={{ height: height || '400px', width: '100%' }}
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

/**
 * ==================================================
 * SimpleBar
 * ==================================================
 */
export const generateFakeSimpleBarData = () => {
  return {
    title: 'company1',
    children: [
      { name: 'Agglomerative Cluster', color: '#12939A', value: 100 },
      { name: 'Community Structure', color: '#12939A', value: 75 },
      { name: 'Hierarchical Cluster', color: '#12939A', value: 20 },
      { name: 'Merge Edge', color: '#12939A', value: 10 },
      { name: 'Betweenness Centrality', color: '#12939A', value: 35 },
      { name: 'Link Distance', color: '#12939A', value: 57 },
      { name: 'MaxFlowMinCut', color: '#12939A', value: 78 },
      { name: 'Shortest Paths', color: '#12939A', value: 59 },
      { name: 'SpanningTree', color: '#12939A', value: 16 }
    ]
  }
}

export const SimpleBar = withTheme(({ data }) => {
  return (
    <div
      style={{
        maxWidth: 300,
        maxHeight: 300,
        overflow: 'auto',
        margin: '0 auto'
      }}
    >
      {data.children.map(child => (
        <div style={{ margin: '10px', whiteSpace: 'nowrap' }}>
          <div
            style={{
              width: `${child.value}%`,
              background:
                'linear-gradient(56deg, rgba(80,153,222,0.73) 0%, rgba(80,153,222,0.37) 57%, rgba(80,153,222,0.11) 100%)',
              padding: '3px 5px'
            }}
          >
            {child.name}
          </div>
        </div>
      ))}
    </div>
  )
})

SimpleBar.propTypes = {
  data: PT.object.isRequired
}

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
      style={{ height: height || '400px', width: '100%' }}
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

export default {
  StackedBarChart,
  SimpleBar
}
