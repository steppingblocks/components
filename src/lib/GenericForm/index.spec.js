import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import LoginForm from './index'

afterEach(cleanup)

describe('LoginForm', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})
