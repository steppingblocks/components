import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs'
import CustomButton from './index'

const stories = storiesOf('CustomButton', module)

stories.add('default', () => {
  const props = {
    block: boolean('block', false),
    content: text('content', 'This is some text'),
    disabled: boolean('disabled', false),
    loading: boolean('loading', false),
    onClick: action('onClick'),
    type: select('type', [
      null,
      'primary',
      'ghost',
      'dashed',
      'danger',
      'link'
    ]),
    shape: select('shape', [null, 'circle', 'round']),
    size: select('size', [null, 'small', 'large'])
  }
  return <CustomButton {...props} />
})

stories.addDecorator(withKnobs)
