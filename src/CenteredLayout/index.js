import React from 'react'
import PT from 'prop-types'
import get from 'lodash/get'
import { Col, Row } from 'antd'
import { withTheme } from '../withTheme'
import { RowPT } from '../proptypes'

const SCol = withTheme(Col)
const SRow = withTheme(Row)

const CenteredLayout = props => (
  <SRow
    type="flex"
    align="middle"
    justify="center"
    gutter={16}
    {...get(props, 'rowProps')}
  >
    <SCol {...get(props, 'colProps')} xs={{ span: 20 }} md={{ span: 10 }}>
      {get(props, 'children')}
    </SCol>
  </SRow>
)

CenteredLayout.propTypes = {
  colProps: PT.object,
  rowProps: RowPT
}

export default CenteredLayout
