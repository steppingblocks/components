import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { generateFakeStackedBarChartData, StackedBarChart } from './index'

const stories = storiesOf('StackedBarChart', module)

stories.add('StackedBarChart', () => {
  const props = {
    data: generateFakeStackedBarChartData()
  }
  return <StackedBarChart {...props} />
})

stories.addDecorator(withKnobs)
