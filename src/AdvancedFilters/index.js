import React, { useState } from 'react'
import PT from 'prop-types'
import isEqual from 'lodash/isEqual'
import styled from '@xstyled/styled-components'
import { withTheme } from '../withTheme'
import Filter from './components/Filter'
import CreateFilterButton from './components/CreateFilterButton'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 12px;
`

const FIELDS = {
  category: {
    label: 'Category',
    type: 'select'
  },
  subcategory: {
    label: 'Subcategory',
    type: 'select'
  },
  title: {
    label: 'Title',
    type: 'text'
  },
  company: {
    label: 'Company',
    type: 'text'
  },
  industry: {
    label: 'Industry',
    type: 'select'
  }
}

const AdvancedFilters = withTheme(props => {
  const [activeFilters, setActiveFilters] = useState([])

  const addFilter = filter => setActiveFilters(activeFilters.concat(filter))

  const removeFilter = idx => {
    setActiveFilters(
      activeFilters.filter((_item, index) => !isEqual(index, idx))
    )
  }

  return (
    <Container>
      {activeFilters.map((filter, idx) => (
        <Filter
          key={idx}
          index={idx}
          filter={filter}
          onRemove={() => removeFilter(idx)}
          onChange={value => {
            console.log('ON CHANGE')
            console.log(idx)
            console.log(value)
          }}
        />
      ))}
      <CreateFilterButton fields={FIELDS} onSelect={addFilter} />
    </Container>
  )
})

AdvancedFilters.propTypes = {}

AdvancedFilters.defaultProps = {}

AdvancedFilters.displayName = AdvancedFilters

export default AdvancedFilters
