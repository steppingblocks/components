---
to: src/lib/<%=name%>/index.spec.js
---
import React from 'react'
import 'jest-dom/extend-expect'
import { render, fireEvent, cleanup } from '@testing-library/react'
import <%=name%> from './index'

afterEach(cleanup)

describe('<%=name%>', () => {
  it('should render', () => {
    expect(true).toBeTruthy() 
  })
})
