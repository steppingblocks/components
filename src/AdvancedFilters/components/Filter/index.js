import React, { useState } from 'react'
import PT from 'prop-types'
import get from 'lodash/get'
import omit from 'lodash/omit'
import { Button, Popover } from 'antd'
import styled from 'styled-components'
import withTheme from '../../../withTheme'
import CustomButton from '../../../CustomButton'
import {
  TextFilterContent,
  SelectFilterContent
} from './components/FilterContent'

const ButtonGroup = styled(Button.Group)`
  margin: 8px;
`

/**
 * Index into the PopoverContent
 */
const PopoverContentMap = {
  text: TextFilterContent,
  select: SelectFilterContent
}

/**
 * Creates the button popover label
 * @param {String} fieldName
 * @param {String} predicate
 * @param {String} value
 */
const createLabel = (fieldName, predicate = '', value = '') => (
  <React.Fragment>
    <strong>{fieldName}</strong>&nbsp;{predicate}&nbsp;<strong>{value}</strong>
  </React.Fragment>
)

/**
 * Gets popover content
 * @param {String} type
 * @param {Object} props
 */
const getPopoverContent = (type, props) => {
  const Component = PopoverContentMap[type]
  return <Component {...props} />
}

const Filter = withTheme(props => {
  const [popoverVisible, setPopoverVisible] = useState(true)

  const {
    fieldName,
    formValue,
    id,
    label,
    type,
    onChange,
    removeFilter
  } = props

  const onRemove = () => {
    removeFilter(id)
    onChange(omit(formValue, [id]))
  }

  const { predicate, ugValue } = get(formValue, id, {})

  const popoverContent = getPopoverContent(type, {
    fieldName,
    formValue,
    id,
    onChange
  })

  return (
    <ButtonGroup>
      <Popover
        title={label}
        trigger="click"
        visible={popoverVisible}
        placement="bottom"
        content={popoverContent}
        onVisibleChange={setPopoverVisible}
      >
        <CustomButton content={createLabel(label, predicate, ugValue)} />
      </Popover>
      <CustomButton icon="close" type="danger" onClick={onRemove} />
    </ButtonGroup>
  )
})

Filter.propTypes = {
  onChange: PT.func.isRequired,
  removeFilter: PT.func.isRequired
}

Filter.defaultProps = {}

Filter.displayName = Filter

export default Filter
