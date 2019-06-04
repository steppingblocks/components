import React from 'react'
import { Typography } from 'antd'
import { storiesOf } from '@storybook/react'
import UnauthenticatedLayout from './index'
import UnauthenticatedHeader from '../UnauthenticatedHeader'
import { withTheme } from '../../../hocs/withTheme'
import CenteredLayout from '../CenteredLayout'
import MultiColumnLayout from '../MultiColumnLayout'

const Title = withTheme(Typography.Title)

const stories = storiesOf('Layout.UnauthenticatedLayout', module)

const baseProps = {
  Header: (
    <UnauthenticatedHeader
      Logo={
        <Title level={4} mb={0}>
          This is the title
        </Title>
      }
    />
  )
}

const children = (
  <Title textAlign="center" mb={0}>
    This is the children
  </Title>
)

stories
  .add('default', () => {
    const props = baseProps

    return <UnauthenticatedLayout {...props}>{children}</UnauthenticatedLayout>
  })
  .add('centered layout', () => {
    const props = baseProps

    return (
      <UnauthenticatedLayout {...props}>
        <CenteredLayout rowProps={{ mt: '10vh' }}>{children}</CenteredLayout>
      </UnauthenticatedLayout>
    )
  })
  .add('multi-column layout', () => {
    const props = baseProps

    const columns = [
      {
        colProps: { xs: { span: 24 }, md: { span: 8 } },
        component: children
      },
      {
        colProps: { xs: { span: 0 }, md: { span: 10 } },
        component: children
      },
      {
        colProps: { xs: { span: 0 }, md: { span: 4 } },
        component: children
      }
    ]

    return (
      <UnauthenticatedLayout {...props}>
        <MultiColumnLayout columns={columns} />
      </UnauthenticatedLayout>
    )
  })
