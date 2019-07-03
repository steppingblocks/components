import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import CreateFilterButton from './index'

afterEach(cleanup)

describe('CreateFilterButton', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})

describe('CreateFilterButton', () => {
  it('should render', () => {
    const content = 'See me!'
    const spy = jest.fn()
    const testID = 'test'

    const { getByTestId } = render(
      <CreateFilterButton data-testid={testID}>{content}</CreateFilterButton>
    )

    const element = getByTestId(testID)
    expect(element.textContent).toBe(content)
  })
})
