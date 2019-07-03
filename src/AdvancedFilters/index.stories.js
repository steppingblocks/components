import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import AdvancedFilters from './index'

const stories = storiesOf('AdvancedFilters', module)

stories.add('default', () => {
  const props = {}

  return <AdvancedFilters {...props} />
})

stories.addDecorator(withKnobs)
