import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import UnauthenticatedHeader from './index'

afterEach(cleanup)

describe('UnauthenticatedHeader', () => {
  it('should render', () => {
    const content = 'Click me'
    const spy = jest.fn()
    const props = {
      buttons: [{ content, buttonProps: { onClick: spy } }],
      Logo: <p>Hi!</p>
    }
    const { getByText } = render(<UnauthenticatedHeader {...props} />)

    fireEvent.click(getByText(content))

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
