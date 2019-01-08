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

  it('should have a type of HAS_ERRORED', () => {
    const hasErrored = true
    const mockAction = {
      type: 'HAS_ERRORED',
      hasErrored: true
    }

    const result = actions.hasErrored(hasErrored)

    expect(result).toEqual(mockAction)
  })
})