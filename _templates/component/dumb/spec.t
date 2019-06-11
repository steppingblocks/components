---
to: src/<%=name%>/index.spec.js
---
import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import <%=name%> from './index'

afterEach(cleanup)

describe('<%=name%>', () => {
  it('should render', () => {
    expect(true).toBeTruthy() 
  })
})

describe('<%=name%>', () => {
  it('should render', () => {
    const content = 'See me!'
    const spy = jest.fn()
    const testID = 'test'

    const { getByTestId } = render(
      <<%=name%> data-testid={testID}>{content}</<%=name%>>
    )

    const element = getByTestId(testID)
    expect(element.textContent).toBe(content)
  })
})