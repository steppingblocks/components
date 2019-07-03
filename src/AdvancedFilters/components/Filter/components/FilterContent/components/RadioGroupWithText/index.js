import React, { useState } from 'react'
import PT from 'prop-types'
import _fp from 'lodash/fp'
import get from 'lodash/get'
import { Radio } from 'antd'
import isEqual from 'lodash/isEqual'
import styled from '@xstyled/styled-components'

const FilterContainer = styled.div`
  margin: 4px 0px 4px 0px;
`

const ComponentContainer = styled.div`
  margin: 12px 0px 12px 0px;
`

/** Prop getters */
const getEventValue = _fp.get('target.value')
const getFilters = _fp.get('filters')
const getInputValue = _fp.get('value.value')

const RadioGroupWithText = props => {
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0)
  const filters = getFilters(props)

  /**
   * On Text change
   * @param {Event} event
   */
  const onChangeInput = event => {
    props.onChange({
      predicate: get(filters, `${selectedFilterIndex}.value`),
      value: getEventValue(event)
    })
  }

  /**
   * Reset input value
   */
  const resetValue = () => props.onChange(null)

  /**
   * Changes filter index
   * @param {Event} event
   */
  const onChangeFilterIndex = event => {
    const value = getEventValue(event)
    setSelectedFilterIndex(value)
    resetValue()
  }

  return (
    <Radio.Group onChange={onChangeFilterIndex} value={selectedFilterIndex}>
      {filters.map(({ component, label }, idx) => {
        return (
          <FilterContainer key={idx}>
            <Radio value={idx} tabIndex={idx}>
              {label}
            </Radio>
            {isEqual(selectedFilterIndex, idx) && (
              <ComponentContainer>
                {component({
                  ...props,
                  onChange: onChangeInput,
                  value: getInputValue(props)
                })}
              </ComponentContainer>
            )}
          </FilterContainer>
        )
      })}
    </Radio.Group>
  )
}

export default RadioGroupWithText
