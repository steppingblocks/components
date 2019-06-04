import React from 'react'
import PT from 'prop-types'
import get from 'lodash/get'
import { Layout } from 'antd'
import { withTheme } from '../../../hocs/withTheme'

const { Content } = Layout

const SContent = withTheme(Content)
const SLayout = withTheme(Layout)

const UnauthenticatedLayout = props => (
  <SLayout minHeight="100vh" {...get(props, 'layoutProps')}>
    {get(props, 'Header')}
    <SContent
      backgroundColor="background"
      padding={30}
      {...get(props, 'contentProps')}
    >
      {get(props, 'children')}
    </SContent>
    {get(props, 'Footer')}
  </SLayout>
)

UnauthenticatedLayout.propTypes = {
  children: PT.element.isRequired,
  contentProps: PT.object,
  Footer: PT.element,
  Header: PT.element,
  layoutProps: PT.object
}

export default UnauthenticatedLayout
