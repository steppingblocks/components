import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import PasswordInput from './index'

afterEach(cleanup)

describe('PasswordInput', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})
