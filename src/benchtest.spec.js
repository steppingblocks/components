import { cleanup } from 'react-testing-library'

afterEach(cleanup)

describe('passer', () => {
  it('this test will always pass as a benchtest', () => {
    expect(true).toBeTruthy()
  })
})
