import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { generateFakeSimpleBarData, SimpleBarChart } from './index'

const stories = storiesOf('SimpleBarChart', module)

stories.add('SimpleBarChart', () => {
  const props = {
    data: generateFakeSimpleBarData()
  }
  return <SimpleBarChart {...props} />
})

stories.addDecorator(withKnobs)
