import { isLoadingReducer } from './isLoadingReducer.js'

describe('isLoadingReducer', () => {
  it('should return the initial state', () => {
    const expected = false

    const result = isLoadingReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with updated isLoading', () => {
    const expected = true
    const mockAction = {
      type: 'IS_LOADING', 
      isLoading: true
    }

    const result = isLoadingReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})