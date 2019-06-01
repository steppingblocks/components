import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import CommitTest from './index'

const stories = storiesOf('Layout.CommitTest', module)

stories.add('default', () => {
  const props = {}

  return <CommitTest {...props} />
})

stories.addDecorator(withKnobs)
