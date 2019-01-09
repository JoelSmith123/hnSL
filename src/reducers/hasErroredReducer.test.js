import { hasErroredReducer } from './hasErroredReducer.js'

describe('hasErroredReducer', () => {
  it('should return the initial state', () => {
    const expected = false

    const result = hasErroredReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with updated hasErrored', () => {
    const expected = true
    const mockAction = {
      type: 'HAS_ERRORED',
      hasErrored: true
    }

    const result = hasErroredReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})