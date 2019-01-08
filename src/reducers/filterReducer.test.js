import { filterReducer } from './filterReducer.js'

describe('filterReducer', () => {
  it('should return the initial state', () => {
    const expected = {}

    const result = filterReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with new filterInputs', () => {
    const expected = {'input-0': 'green day', 'input-1': 'foo fighters'}
    const mockAction = {
      type: 'SET_FILTER',
      filterInputs: {'input-0': 'green day', 'input-1': 'foo fighters'}
    }

    const result = filterReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})