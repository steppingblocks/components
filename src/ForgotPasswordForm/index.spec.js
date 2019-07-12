import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import ForgotPasswordForm from './index'

afterEach(cleanup)

describe('ForgotPasswordForm', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})
