import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import ConfirmModal from './index'

const stories = storiesOf('ConfirmModal', module)

stories.add('default', () => {
  const props = {
    afterClose: action('afterClose'),
    cancelText: 'Cancel',
    centered: true,
    closable: true,
    confirmLoading: boolean('confirmLoading', false),
    mask: true,
    maskClosable: true,
    okText: 'Yes, I understand',
    okType: 'primary',
    onCancel: action('onCancel'),
    onOk: action('onOk'),
    title: text('title', 'Are you sure you want to do that?'),
    visible: boolean('visible', false)
  }
  return <ConfirmModal {...props} />
})

stories.addDecorator(withKnobs)
