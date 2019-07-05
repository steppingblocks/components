import React, { useState } from 'react'
import PT from 'prop-types'
import _fp from 'lodash/fp'
import styled from '@xstyled/styled-components'
import Filter from '../Filter'

const FiltersFormComponent = props => {
  const { activeFilters, onChange, removeFilter, value } = props

  return activeFilters.map(filter => (
    <Filter
      {...filter}
      onChange={onChange}
      formValue={value}
      removeFilter={removeFilter}
    />
  ))

  return null
}

export default FiltersFormComponent
