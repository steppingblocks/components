import 'jest-dom/extend-expect'
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import CustomButton from './index'

afterEach(cleanup)

describe('CustomButton', () => {
  it('should respond to onClick events', () => {
    const content = 'Click me'
    const spy = jest.fn()
    const { getByText } = render(
      <CustomButton content={content} onClick={spy} />
    )

    fireEvent.click(getByText(content))

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
