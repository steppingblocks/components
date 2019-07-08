import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import AdvancedFilters, { FilterTypes } from './index'

const stories = storiesOf('AdvancedFilters', module)

stories.add('default', () => {
  const props = {
    fields: {
      category: {
        label: 'Category',
        type: FilterTypes.SELECT
      },
      subcategory: {
        label: 'Subcategory',
        type: FilterTypes.SELECT
      },
      title: {
        label: 'Title',
        type: FilterTypes.TEXT
      },
      company: {
        label: 'Company',
        type: FilterTypes.TEXT
      },
      industry: {
        label: 'Industry',
        type: FilterTypes.SELECT
      }
    },
    onSubmit: console.log
  }

  return <AdvancedFilters {...props} />
})

stories.addDecorator(withKnobs)
