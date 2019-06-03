import React from 'react'
import { Typography } from 'antd'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withTheme } from '../../../hocs/withTheme'
import UnauthenticatedHeader from './index'

const stories = storiesOf('Layout.UnauthenticatedHeader', module)

const Title = withTheme(Typography.Title)

stories.add('default', () => {
  const props = {
    buttons: [
      { content: 'Log in', buttonProps: { onClick: action('onClickLogIn') } },
      {
        content: 'Sign up',
        buttonProps: { type: 'primary', onClick: action('onClickSignUp') }
      }
    ],
    Logo: (
      <Title level={4} mb={0}>
        This is the title
      </Title>
    )
  }

  return <UnauthenticatedHeader {...props} />
})
