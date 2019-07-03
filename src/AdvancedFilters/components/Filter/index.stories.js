import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import Filter from './index'

const stories = storiesOf('AdvancedFilters.Filter', module)

stories.add('default', () => {
  const props = {}

  return <Filter {...props} />
})

stories.addDecorator(withKnobs)
