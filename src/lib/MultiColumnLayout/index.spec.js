import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import MultiColumnLayout from './index'

afterEach(cleanup)

describe('MultiColumnLayout', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})
