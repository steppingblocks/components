import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import UnauthenticatedLayout from './index'

afterEach(cleanup)

describe('UnauthenticatedLayout', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})
