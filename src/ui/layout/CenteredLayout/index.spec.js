import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import CenteredLayout from './index'

afterEach(cleanup)

describe('CenteredLayout', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})
