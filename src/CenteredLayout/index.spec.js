import 'jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import CenteredLayout from './index'

afterEach(cleanup)

describe('CenteredLayout', () => {
  it('should render', () => {
    const content = 'Click me'
    const testID = 'test'
    const { getByTestId } = render(
      <CenteredLayout>
        <p data-testid={testID}>{content}</p>
      </CenteredLayout>
    )

    const element = getByTestId(testID)
    expect(element.textContent).toBe(content)
  })
})
