import React from 'react'
import PT from 'prop-types'
import get from 'lodash/get'
import { Col, Row } from 'antd'
import { withTheme } from '../withTheme'

const SCol = withTheme(Col)
const SRow = withTheme(Row)

const MultiColumnLayout = props => (
  <SRow
    type="flex"
    align="middle"
    justify="space-between"
    gutter={8}
    {...get(props, 'rowProps')}
  >
    {get(props, 'columns').map((column, index) => (
      <SCol key={index} {...get(column, 'colProps')}>
        {get(column, 'component')}
      </SCol>
    ))}
  </SRow>
)

const ColumnPT = PT.shape({
  colProps: PT.object,
  component: PT.element
})

MultiColumnLayout.propTypes = {
  colProps: PT.object,
  columns: PT.arrayOf(ColumnPT),
  rowProps: PT.object
}

export default MultiColumnLayout
