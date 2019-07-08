import React, { useEffect } from 'react'
import PT from 'prop-types'
import _fp from 'lodash/fp'
import get from 'lodash/get'
import { Radio } from 'antd'
import isEqual from 'lodash/isEqual'
import styled from '@xstyled/styled-components'
import SingleLineTextInput from '../../../../../SingleLineTextInput'

const FilterContainer = styled.div`
  margin: 4px 0px 4px 0px;
`

const ComponentContainer = styled.div`
  margin: 12px 0px 12px 0px;
`

/** Prop getters */
const getEventValue = _fp.get('target.value')

const FilterContent = props => {
  const {
    fieldName,
    filters,
    formValue,
    id,
    InputComponent,
    inputComponentProps,
    onChange
  } = props

  const predicate = get(formValue, `${id}.predicate`)
  const ugValue = get(formValue, `${id}.ugValue`)

  /**
   * Change handler
   * @param {Object} updates
   */
  const onChangeFormValue = (updates = {}) => {
    onChange({
      ...formValue,
      [id]: Object.assign(get(formValue, id, {}), updates)
    })
  }

  /**
   * Changes filter predicate
   * @param {HTMLEvent} event
   */
  const onChangePredicate = event => {
    const predicate = getEventValue(event)
    onChangeFormValue({ predicate })
  }

  /**
   * Changes filter user-generated input
   * @param {HTMLEvent} event
   */
  const onChangeUserGeneratedInputValue = event => {
    const ugValue = getEventValue(event)
    onChangeFormValue({ ugValue })
  }

  useEffect(() => {
    onChangeFormValue({ fieldName, predicate: get(filters, `0.value`) })
  }, [])

  return (
    <Radio.Group onChange={onChangePredicate} value={predicate}>
      {filters.map(({ label, value }) => {
        return (
          <FilterContainer key={value}>
            <Radio value={value}>{label}</Radio>
            {isEqual(predicate, value) && (
              <ComponentContainer>
                <InputComponent
                  {...inputComponentProps}
                  onChange={onChangeUserGeneratedInputValue}
                  value={ugValue}
                />
              </ComponentContainer>
            )}
          </FilterContainer>
        )
      })}
    </Radio.Group>
  )
}

FilterContent.propTypes = {
  filters: PT.array.isRequired
}

const Placeholder = () => <h1>Hi</h1>

export const TextFilterContent = props => (
  <FilterContent
    InputComponent={SingleLineTextInput}
    inputComponentProps={{ autoFocus: true }}
    filters={[
      {
        label: 'Equals',
        value: '$eq'
      },
      {
        label: 'Not Equals',
        value: '$ne'
      },
      {
        label: 'Includes',
        value: '$contains'
      },
      {
        label: 'Starts With',
        value: '$startsWith'
      },
      {
        label: 'Ends With',
        value: '$endsWith'
      }
    ]}
    {...props}
  />
)

export const SelectFilterContent = props => (
  <FilterContent
    InputComponent={Placeholder}
    inputComponentProps={{}}
    filters={[
      {
        label: 'Equals',
        value: '$eq'
      },
      {
        label: 'Not Equals',
        value: '$ne'
      }
    ]}
    {...props}
  />
)
