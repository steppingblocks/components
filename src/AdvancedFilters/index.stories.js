import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import AdvancedFilters from './index'

const stories = storiesOf('AdvancedFilters', module)

stories.add('default', () => {
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

  const props = {}

  return <AdvancedFilters fields={FIELDS} {...props} />
})

stories.addDecorator(withKnobs)
