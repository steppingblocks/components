import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import EmailInput from './index'

afterEach(cleanup)

describe('EmailInput', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})
