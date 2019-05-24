import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, withKnobs } from '@storybook/addon-knobs'
import ImportantStatistic from './index'

const stories = storiesOf('Typography.ImportantStatistic', module)

stories.add('default', () => {
  const props = {
    title: text('title', 'Daily Active Users'),
    value: text('value', '1234567'),
    valueStyle: object('valueStyle', { fontWeight: 800 })
  }
  return <ImportantStatistic {...props} />
})

stories.addDecorator(withKnobs)
