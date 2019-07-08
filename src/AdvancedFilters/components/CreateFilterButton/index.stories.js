import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import CreateFilterButton from './index'

const stories = storiesOf('AdvancedFilters.CreateFilterButton', module)

stories.add('default', () => {
  const props = {}

  return <CreateFilterButton {...props} />
})

stories.addDecorator(withKnobs)
