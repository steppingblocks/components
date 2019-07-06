import React, { useState } from 'react'
import PT from 'prop-types'
import _fp from 'lodash/fp'
import get from 'lodash/get'
import { Select } from 'antd'
import styled from '@xstyled/styled-components'
import { withTheme } from '../../../withTheme'

const SSelect = styled(Select)`
  margin: 8px;
  width: 200px !important;
`

/**
 * Lowercases a string
 */
const toLower = _fp.toLower

/**
 * Gets the known option as a searchable string
 */
const getKnownOption = _fp.pipe(
  _fp.get('props.children'),
  toLower
)

/**
 * Determines if a string includes another
 * @param {String} option
 * @param {String} value
 */
const includes = (option = '', value = '') => option.includes(value)

/**
 * Maps fields into the correct structure
 */
const getFields = _fp.pipe(
  _fp.get('fields'),
  _fp.entries,
  _fp.map(([key, obj]) => ({
    ...obj,
    key
  }))
)

const CreateFilterButton = withTheme(props => {
  const [searchValue, setSearchValue] = useState(undefined)
  const fields = getFields(props, 'fields')

  /**
   * onChange handler
   * @param {String} value
   */
  const onChange = key => {
    props.onSelect({
      ...get(props, `fields.${key}`),
      key
    })
    setSearchValue(undefined)
  }

  /**
   * Handles filtering
   * @param {String} input
   * @param {String} option
   */
  const filterOption = (input, option) =>
    includes(getKnownOption(option), toLower(input))

  return (
    <SSelect
      showSearch
      value={searchValue}
      placeholder="Add a New Filter"
      onSearch={setSearchValue}
      onChange={onChange}
      filterOption={filterOption}
    >
      {fields.map(field => (
        <Select.Option key={get(field, 'key')} value={get(field, 'key')}>
          {get(field, 'label')}
        </Select.Option>
      ))}
    </SSelect>
  )
})

CreateFilterButton.propTypes = {
  onSelect: PT.func.isRequired
}

CreateFilterButton.displayName = CreateFilterButton

export default CreateFilterButton
