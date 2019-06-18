import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import {
  generateFakeSimpleBarData,
  generateFakeStackedBarChartData,
  generateFakeSunburstChartData,
  generateFakeTreemapChartData,
  SimpleBar,
  StackedBarChart,
  TreemapChart
} from './index'
import SunburstChart from './Sunburst'

const stories = storiesOf('Charts', module)

stories.add('SimpleBar', () => {
  const props = {
    data: generateFakeSimpleBarData()
  }
  return <SimpleBar {...props} />
})

stories.add('StackedBarChart', () => {
  const props = {
    data: generateFakeStackedBarChartData()
  }
  return <StackedBarChart {...props} />
})

stories.add('Sunburst', () => {
  const props = {
    data: generateFakeSunburstChartData()
  }

  return <SunburstChart {...props} />
})

stories.add('Treemap', () => {
  const props = {
    data: generateFakeTreemapChartData(),
    name: 'Sample'
  }

  return <TreemapChart {...props} />
})

stories.addDecorator(withKnobs)
