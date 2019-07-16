import React, { useState } from 'react'
import PT from 'prop-types'
import uuid from 'uuid/v4'
import _ from 'lodash'
import styled from 'styled-components'
import withTheme from '../withTheme'
import GenericForm from '../GenericForm'
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
    inputProps: props,
    name: 'filter'
  }
]

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

  const formFields = getFormFields({
    ..._.pick(props, ['fields', 'onChange', 'value']),
    activeFilters,
    addActiveFilter,
    removeFilter: removeActiveFilter
  })

  return (
    <Container>
      <GenericForm
        fields={formFields}
        formProps={{ onSubmit: props.onSubmit }}
        submitButtonHidden={_.isEqual(activeFilters.length, 0)}
        submitButtonContent="Apply"
        submitButtonProps={{ style: { marginLeft: '8px' } }}
      />
    </Container>
  )
})

AdvancedFilters.propTypes = {
  fields: PT.object.isRequired,
  onSubmit: PT.func.isRequired
}

AdvancedFilters.defaultProps = {
  onSubmit: console.log
}

AdvancedFilters.displayName = AdvancedFilters

export default AdvancedFilters

export const FilterTypes = {
  SELECT: 'select',
  TEXT: 'text'
}
