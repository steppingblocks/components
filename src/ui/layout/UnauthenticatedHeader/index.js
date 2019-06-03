import _ from 'lodash'
import React from 'react'
import PT from 'prop-types'
import _fp from 'lodash/fp'
import { Layout, Row } from 'antd'
import styled from '@xstyled/styled-components'
import { withTheme } from '../../../hocs/withTheme'
import CustomButton from '../../touchables/CustomButton'

const { Header } = Layout

const SHeader = styled(Header)`
  background-color: background;
  border-bottom: 2;
  border-color: border;
`

const MenuItemsContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

const SRow = withTheme(Row)

const renderButtons = _fp.pipe(
  _fp.get('buttons'),
  _fp.map(({ buttonProps, content }) => (
    <CustomButton key={content} {...buttonProps} content={content} mx={2} />
  ))
)

const UnauthenticatedHeader = props => (
  <SHeader>
    <SRow type="flex" align="middle" justify="space-between" height="100%">
      {_.get(props, 'Logo', null)}
      <MenuItemsContainer>{renderButtons(props)}</MenuItemsContainer>
    </SRow>
  </SHeader>
)

const ButtonPT = PT.shape({
  buttonProps: PT.object,
  title: PT.string
})

UnauthenticatedHeader.propTypes = {
  buttons: PT.arrayOf(ButtonPT).isRequired,
  Logo: PT.element.isRequired
}

UnauthenticatedHeader.defaultProps = {
  buttons: [],
  Logo: null
}

export default withTheme(UnauthenticatedHeader)
