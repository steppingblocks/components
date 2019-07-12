import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import ResetPasswordForm from './index'

const stories = storiesOf('ResetPasswordForm', module)

stories.add('default', () => {
  const props = {}

  return <ResetPasswordForm {...props} />
})

stories.addDecorator(withKnobs)
