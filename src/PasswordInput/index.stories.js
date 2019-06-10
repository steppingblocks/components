import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, withKnobs } from '@storybook/addon-knobs'
import PasswordInput from './index'

const stories = storiesOf('PasswordInput', module)

stories.add('default', () => {
  const props = {
    size: select('size', ['default', 'small', 'large'])
  }

  return <PasswordInput {...props} />
})

stories.addDecorator(withKnobs)
