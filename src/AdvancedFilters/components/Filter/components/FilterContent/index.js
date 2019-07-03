import React from 'react'
import PT from 'prop-types'
import _fp from 'lodash/fp'
import styled from '@xstyled/styled-components'
import SingleLineTextInput from '../../../../../SingleLineTextInput'
import RadioGroupWithText from './components/RadioGroupWithText'
import { createGenericFormComponent } from '../../../../../GenericForm'

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

const getFormFields = props => [
  {
    Component: RadioGroupWithText,
    name: 'filter',
    componentProps: {
      autoFocus: true,
      ...props
    }
  }
]

const FilterContent = props => {
  const GenericImplementation = createGenericFormComponent({
    name: `form`
  })

  return (
    <GenericImplementation
      fields={getFormFields(props)}
      submitButtonContent="Apply"
      submitButtonProps={{ block: true, size: 'small' }}
      onSubmit={props.onChange}
    />
  )
}

FilterContent.propTypes = {
  filters: PT.array.isRequired
}

export const TextFilterContent = props => (
  <FilterContent filters={textFilters} {...props} />
)

export const SelectFilterContent = props => (
  <FilterContent filters={selectFilters} {...props} />
)
