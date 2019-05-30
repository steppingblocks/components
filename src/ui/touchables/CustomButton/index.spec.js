import 'jest-dom/extend-expect'
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import CustomButton from '.'

afterEach(cleanup)

describe('CustomButton', () => {
  it('should render', () => {
    const content = 'Click me'
    const { container } = render(<CustomButton content={content} />)
    expect(container).toMatchSnapshot()
  })

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
