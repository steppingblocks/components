import React from 'react'
import PT from 'prop-types'
import { withTheme } from '../withTheme'

/**
 * ==================================================
 * SimpleBar
 * ==================================================
 */
export const generateFakeSimpleBarData = () => {
  return {
    title: 'company1',
    children: [
      { title: 'AgglomerativeCluster', color: '#12939A', size: 100 },
      { title: 'CommunityStructure', color: '#12939A', size: 75 },
      { title: 'HierarchicalCluster', color: '#12939A', size: 20 },
      { title: 'MergeEdge', color: '#12939A', size: 10 },
      { title: 'BetweennessCentrality', color: '#12939A', size: 35 },
      { title: 'LinkDistance', color: '#12939A', size: 57 },
      { title: 'MaxFlowMinCut', color: '#12939A', size: 78 },
      { title: 'ShortestPaths', color: '#12939A', size: 59 },
      { title: 'SpanningTree', color: '#12939A', size: 16 }
    ]
  }
}

export const SimpleBarChart = withTheme(({ data }) => {
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
        <div style={{ margin: '10px' }}>
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

SimpleBarChart.propTypes = {
  data: PT.object.isRequired
}

export default SimpleBarChart
