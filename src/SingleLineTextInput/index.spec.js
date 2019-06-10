import 'jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render, cleanup } from '@testing-library/react'
import SingleLineTextInput from './index'

afterEach(cleanup)

describe('SingleLineTextInput', () => {
  it('should render', () => {
    const onChangeSpy = jest.fn()
    const testID = 'test'
    const props = {
      'data-testid': testID,
      onChange: onChangeSpy
    }

    const { getByTestId } = render(<SingleLineTextInput {...props} />)

    fireEvent.change(getByTestId(testID), {
      target: { value: 'this is some arbitrary value' }
    })

    expect(onChangeSpy).toHaveBeenCalledTimes(1)
  })
})
