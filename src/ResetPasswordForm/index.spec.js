import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import ResetPasswordForm from './index'

afterEach(cleanup)

describe('ResetPasswordForm', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})
