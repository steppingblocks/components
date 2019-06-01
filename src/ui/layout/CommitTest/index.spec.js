import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import CommitTest from './index'

afterEach(cleanup)

describe('CommitTest', () => {
  it('should render', () => {
    expect(true).toBeTruthy()
  })
})
