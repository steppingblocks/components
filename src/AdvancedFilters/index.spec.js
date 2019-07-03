import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import AdvancedFilters from './index'

afterEach(cleanup)

describe('AdvancedFilters', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})

describe('AdvancedFilters', () => {
  it('should render', () => {
    const content = 'See me!'
    const spy = jest.fn()
    const testID = 'test'

    const { getByTestId } = render(
      <AdvancedFilters data-testid={testID}>{content}</AdvancedFilters>
    )

    const element = getByTestId(testID)
    expect(element.textContent).toBe(content)
  })
})
