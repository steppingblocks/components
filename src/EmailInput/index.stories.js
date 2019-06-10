import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, withKnobs } from '@storybook/addon-knobs'
import EmailInput from './index'

const stories = storiesOf('EmailInput', module)

stories.add('default', () => {
  const props = {
    size: select('size', ['default', 'small', 'large'])
  }

  return <EmailInput {...props} />
})

stories.addDecorator(withKnobs)
