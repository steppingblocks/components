import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import RegisterForm from './index'

const stories = storiesOf('RegisterForm', module)

stories.add('default', () => {
  const props = {}

  return <RegisterForm {...props} />
})

stories.addDecorator(withKnobs)
