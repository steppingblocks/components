import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { generateFakeSunburstChartData, SunburstChart } from './index'

const stories = storiesOf('SunburstChart', module)

stories.add('SunburstChart', () => {
  const props = {
    data: generateFakeSunburstChartData()
  }
  return <SunburstChart {...props} />
})

stories.addDecorator(withKnobs)
