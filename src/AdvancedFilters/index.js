import React, { useState } from 'react'
import PT from 'prop-types'
import uuid from 'uuid/v4'
import _ from 'lodash'
import styled from '@xstyled/styled-components'
import { withTheme } from '../withTheme'
import CreateFilterButton from './components/CreateFilterButton'
import { createGenericFormComponent } from '../GenericForm'
import FiltersFormComponent from './components/FiltersFormComponent'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 12px;
`

const getFormFields = props => [
  {
    Component: FiltersFormComponent,
    name: 'filter',
    componentProps: {
      ...props
    }
  }
]

const GenericImplementation = createGenericFormComponent({
  name: `advanced_filters_form`
})

const AdvancedFilters = withTheme(props => {
  const [activeFilters, setActiveFilters] = useState([])

  const addActiveFilter = filter =>
    setActiveFilters(
      activeFilters.concat({
        id: uuid(),
        ...filter
      })
    )

  const removeActiveFilter = removalId => {
    const newActiveFilters = activeFilters.filter(({ id }) => removalId !== id)
    setActiveFilters(newActiveFilters)
  }

  return (
    <Container>
      <GenericImplementation
        fields={getFormFields({
          ..._.pick(props, ['onChange', 'value']),
          activeFilters,
          removeFilter: removeActiveFilter
        })}
        submitButtonContent="Apply"
        submitButtonProps={{ block: true, size: 'small' }}
        onSubmit={console.log}
      />
      <CreateFilterButton fields={props.fields} onSelect={addActiveFilter} />
    </Container>
  )
})

AdvancedFilters.propTypes = {
  fields: PT.object.isRequired
}

AdvancedFilters.defaultProps = {}

AdvancedFilters.displayName = AdvancedFilters

export default AdvancedFilters
