import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import SingleLineTextInput from './index'

afterEach(cleanup)

describe('SingleLineTextInput', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})
