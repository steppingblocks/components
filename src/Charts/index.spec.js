import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import MultiLineChart from './index'

afterEach(cleanup)

describe('MultiLineChart', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})
