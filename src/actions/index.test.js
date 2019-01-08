import * as actions from '../actions'

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const isLoading = true
    const mockAction = {
      type: 'IS_LOADING',
      isLoading: true
    }
    
    const result = actions.isLoading(isLoading)

    expect(result).toEqual(mockAction)
  })

})