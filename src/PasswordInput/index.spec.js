import 'jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render, cleanup } from '@testing-library/react'
import PasswordInput from './index'

afterEach(cleanup)

describe('PasswordInput', () => {
  it('should render', () => {
    const onChangeSpy = jest.fn()
    const password = 'thisisthepassword'
    const testID = 'test'
    const props = {
      'data-testid': testID,
      onChange: onChangeSpy
    }

    const { getByTestId } = render(<PasswordInput {...props} />)

    fireEvent.change(getByTestId(testID), {
      target: { value: password }
    })

    expect(onChangeSpy).toHaveBeenCalledTimes(1)
  })
})
