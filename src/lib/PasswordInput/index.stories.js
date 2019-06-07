import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import PasswordInput from './index'

const stories = storiesOf('PasswordInput', module)

stories.add('default', () => {
  const props = {
    size: select('size', ['default', 'small', 'large'])
  }

  return <PasswordInput {...props} />
})

stories.addDecorator(withKnobs)
