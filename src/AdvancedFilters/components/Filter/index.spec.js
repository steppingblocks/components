import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Filter from './index'

afterEach(cleanup)

describe('Filter', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})

describe('Filter', () => {
  it('should render', () => {
    const content = 'See me!'
    const spy = jest.fn()
    const testID = 'test'

    const { getByTestId } = render(
      <Filter data-testid={testID}>{content}</Filter>
    )

    const element = getByTestId(testID)
    expect(element.textContent).toBe(content)
  })
})
