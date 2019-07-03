import React, { useState } from 'react'
import PT from 'prop-types'
import _fp from 'lodash/fp'
import get from 'lodash/get'
import { Button, Popover } from 'antd'
import styled from '@xstyled/styled-components'
import { withTheme } from '../../../withTheme'
import CustomButton from '../../../CustomButton'
import {
  TextFilterContent,
  SelectFilterContent
} from './components/FilterContent'

const ButtonGroup = styled(Button.Group)`
  margin: 8px 12px 8px 0px;
`

/**
 * Gets the filter
 */
const getFilter = _fp.get('filter')

/**
 * Gets the filter label
 */
const getLabel = _fp.pipe(
  getFilter,
  _fp.get('label')
)

const getType = _fp.pipe(
  getFilter,
  _fp.get('type')
)

const PopoverContentMap = {
  text: TextFilterContent,
  select: SelectFilterContent
}

const Filter = withTheme(props => {
  const [visible, setVisible] = useState(true)

  const label = getLabel(props)
  const type = getType(props)

  const Content = PopoverContentMap[type]

  return (
    <ButtonGroup>
      <Popover
        title={label}
        trigger="click"
        visible={visible}
        placement="bottom"
        content={<Content />}
        onVisibleChange={setVisible}
      >
        <CustomButton content={label} />
      </Popover>
      <CustomButton
        icon="close"
        type="danger"
        onClick={get(props, 'onRemove')}
      />
    </ButtonGroup>
  )
})

Filter.propTypes = {
  onRemove: PT.func.isRequired
}

Filter.defaultProps = {}

Filter.displayName = Filter

export default Filter
