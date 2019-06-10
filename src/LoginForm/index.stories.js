import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import LoginForm from './index'

const stories = storiesOf('LoginForm', module)

stories.add('default', () => {
  const props = {}

  return <LoginForm {...props} />
})

stories.addDecorator(withKnobs)
