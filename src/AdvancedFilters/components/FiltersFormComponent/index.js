import React from 'react'
import styled from '@xstyled/styled-components'
import CreateFilterButton from '../CreateFilterButton'
import Filter from '../Filter'

const Container = styled.div`
  width: 100%;
`

const FiltersFormComponent = props => {
  const {
    activeFilters,
    addActiveFilter,
    fields,
    onChange,
    removeFilter,
    value
  } = props

  return (
    <Container>
      {activeFilters.map(filter => (
        <Filter
          {...filter}
          key={filter.id}
          onChange={onChange}
          formValue={value}
          removeFilter={removeFilter}
        />
      ))}
      <CreateFilterButton fields={fields} onSelect={addActiveFilter} />
    </Container>
  )
}

export default FiltersFormComponent
