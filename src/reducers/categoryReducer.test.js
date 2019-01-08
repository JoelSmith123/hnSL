import { categoryReducer } from './categoryReducer.js'

describe('categoryReducer', () => {
  it('should return the initial state', () => {
    const expected = ''

    const result = categoryReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with a new category', () => {
    const expected = 'games'
    const mockAction = {
      type: 'SET_CATEGORY',
      category: 'games'
    }

    const result = categoryReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})