import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import MultiLineChart, { generateFakeData } from './index'

const stories = storiesOf('MultiLineChart', module)

stories.add('default', () => {
  const props = {
    data: generateFakeData()
  }

  return <MultiLineChart {...props} />
})

stories.addDecorator(withKnobs)
