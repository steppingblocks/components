import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import EmailInput from './index'

const stories = storiesOf('Forms.EmailInput', module)

stories.add('default', () => {
  const props = {
    size: select('size', ['default', 'small', 'large'])
  }

  return <EmailInput {...props} />
})

stories.addDecorator(withKnobs)
