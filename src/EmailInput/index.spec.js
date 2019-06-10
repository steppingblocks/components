import 'jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render, cleanup } from '@testing-library/react'
import EmailInput from './index'

afterEach(cleanup)

describe('EmailInput', () => {
  it('should render', () => {
    const onChangeSpy = jest.fn()
    const placeholder = 'tom.jones@email.com'
    const email = 'email@domain.com'
    const props = {
      onChange: onChangeSpy,
      placeholder
    }

    const { getByPlaceholderText } = render(<EmailInput {...props} />)

    fireEvent.change(getByPlaceholderText(placeholder), {
      target: { value: email }
    })

    expect(onChangeSpy).toHaveBeenCalledTimes(1)
  })
})
