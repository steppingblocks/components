import 'jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render, cleanup } from '@testing-library/react'
import ConfirmModal from './index'

afterEach(cleanup)

describe('ConfirmModal', () => {
  it('should render', () => {
    const onOkSpy = jest.fn()
    const onCancelSpy = jest.fn()
    const cancelText = 'Cancel'
    const okText = 'Yes'

    const props = {
      cancelText,
      centered: true,
      closable: true,
      okText,
      okType: 'primary',
      onCancel: onCancelSpy,
      onOk: onOkSpy,
      title: 'Are you sure?',
      visible: true
    }

    const { getByText } = render(<ConfirmModal {...props} />)

    fireEvent.click(getByText(okText))
    fireEvent.click(getByText(okText))
    fireEvent.click(getByText(cancelText))

    expect(onOkSpy).toHaveBeenCalledTimes(2)
    expect(onCancelSpy).toHaveBeenCalledTimes(1)
  })
})
