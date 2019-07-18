import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { generateFakeTreemapChartData, TreemapChart } from './index'

const stories = storiesOf('TreemapChart', module)

stories.add('TreemapChart', () => {
  const props = {
    data: generateFakeTreemapChartData()
  }
  return <TreemapChart {...props} />
})

stories.addDecorator(withKnobs)
