import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import {
  AreaChart,
  generateFakeAreaChartData,
  generateFakeMultiLineChartData,
  MultiLineChart
} from './index'

const stories = storiesOf('Charts', module)

stories.add('MultiLineChart', () => {
  const props = {
    data: generateFakeMultiLineChartData()
  }

  return <MultiLineChart {...props} />
})
stories.add('AreaChart', () => {
  const props = {
    data: generateFakeAreaChartData()
  }

  return <AreaChart {...props} />
})

stories.addDecorator(withKnobs)
