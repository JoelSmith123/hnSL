import { suggestionsReducer } from './suggestionsReducer.js'

describe('suggestionsReducer', () => {
  it('should return the initial state', () => {
    const expected = {}

    const result = suggestionsReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with new suggestions', () => {
    const expected = [{song: 'umbrella', artist: 'Rihanna'}]
    const mockAction = {
      type: 'FETCH_DATA_SUCCESS',
      suggestions: [{song: 'umbrella', artist: 'Rihanna'}]
    }

    const result = suggestionsReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})