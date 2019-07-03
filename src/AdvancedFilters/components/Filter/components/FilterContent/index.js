import React, { useState } from 'react'
import PT from 'prop-types'
import { Radio, Form } from 'antd'
import _fp from 'lodash/fp'
import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
import debounce from 'lodash/debounce'
import styled from '@xstyled/styled-components'
import SingleLineTextInput from '../../../../../SingleLineTextInput'

const Container = styled(Form)``

const FilterContainer = styled.div`
  margin: 4px 0px 4px 0px;
`

const ComponentContainer = styled.div`
  margin: 12px 0px 12px 0px;
`

/**
 * Text filters
 */
const textFilters = [
  {
    label: 'Equals',
    value: 'eq',
    component: options => <SingleLineTextInput {...options} />
  },
  {
    label: 'Not Equals',
    value: 'ne',
    component: options => <SingleLineTextInput {...options} />
  },
  {
    label: 'Includes',
    value: 'contains',
    component: options => <SingleLineTextInput {...options} />
  },
  {
    label: 'Starts With',
    value: 'startsWith',
    component: options => <SingleLineTextInput {...options} />
  }
]

/**
 * Select filters
 */
const selectFilters = [
  {
    label: 'Equals',
    value: 'eq',
    component: options => <h1 {...options}>Equals</h1>
  },
  {
    label: 'Not Equals',
    value: 'ne',
    component: options => <h1 {...options}>Not Equals</h1>
  }
]

/**
 * Get event value
 */
const getValueFromEvent = _fp.get('target.value')

const FilterContent = props => {
  const [selected, setSelected] = useState(0)
  const [value, setValue] = useState(null)

  /**
   * Changes filter value
   * @param {Event} event
   */
  const onChange = event => {
    setSelected(getValueFromEvent(event))
    setValue(null)
  }

  /**
   * Handle text change
   * @param {Event} event
   */
  const _onChangeText = event => {
    setValue(getValueFromEvent(event))
  }

  const debouncedOnChange = debounce(_onChangeText, 1000)

  return (
    <Container>
      <Radio.Group onChange={onChange} value={selected}>
        {get(props, 'filters').map(({ component, label }, idx) => {
          return (
            <FilterContainer key={idx}>
              <Radio value={idx} tabIndex={idx}>
                {label}
              </Radio>
              {isEqual(selected, idx) && (
                <ComponentContainer>
                  {component({
                    autoFocus: true,
                    placeholder: 'Filter text...',
                    onChange: event => {
                      event.persist()
                      debouncedOnChange(event)
                    }
                  })}
                </ComponentContainer>
              )}
            </FilterContainer>
          )
        })}
      </Radio.Group>
    </Container>
  )
}

FilterContent.propTypes = {
  filters: PT.array.isRequired
}

export const TextFilterContent = () => <FilterContent filters={textFilters} />

export const SelectFilterContent = () => (
  <FilterContent filters={selectFilters} />
)
