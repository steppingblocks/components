import React, { useState } from 'react'
import PT from 'prop-types'
import uuid from 'uuid/v4'
import _ from 'lodash'
import styled from '@xstyled/styled-components'
import { withTheme } from '../withTheme'
import { createGenericFormComponent } from '../GenericForm'
import FiltersFormComponent from './components/FiltersFormComponent'

const Container = styled.div`
  padding: 12px;
`

/**
 * Gets form fields
 * @param {Object} props
 */
const getFormFields = props => [
  {
    Component: FiltersFormComponent,
    name: 'filter',
    componentProps: props
  }
]

/**
 * Create form implementation
 */
const GenericImplementation = createGenericFormComponent({
  name: `advanced_filters_form`
})

const AdvancedFilters = withTheme(props => {
  const [activeFilters, setActiveFilters] = useState([])

  /**
   * Add new filter
   * @param {Object} filter
   */
  const addActiveFilter = filter =>
    setActiveFilters(
      activeFilters.concat({
        id: uuid(),
        ...filter
      })
    )

  /**
   * Removes filter
   * @param {UUID} removalId
   */
  const removeActiveFilter = removalId => {
    const newActiveFilters = _.remove(
      activeFilters,
      ({ id }) => id !== removalId
    )
    setActiveFilters(newActiveFilters)
  }

  return (
    <Container>
      <GenericImplementation
        fields={getFormFields({
          ..._.pick(props, ['fields', 'onChange', 'value']),
          addActiveFilter,
          activeFilters,
          removeFilter: removeActiveFilter
        })}
        submitButtonHidden={_.isEqual(activeFilters.length, 0)}
        submitButtonContent="Apply"
        submitButtonProps={{ ml: '8px' }}
        onSubmit={console.log}
      />
    </Container>
  )
})

AdvancedFilters.propTypes = {
  fields: PT.object.isRequired
}

AdvancedFilters.defaultProps = {}

AdvancedFilters.displayName = AdvancedFilters

export default AdvancedFilters
