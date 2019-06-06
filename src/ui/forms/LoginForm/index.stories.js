import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import LoginForm from './index'

const stories = storiesOf('Forms.LoginForm', module)

stories.add('default', () => {
  const props = {}

  return <LoginForm {...props} />
})

stories.addDecorator(withKnobs)
