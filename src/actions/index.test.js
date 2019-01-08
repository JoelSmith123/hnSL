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

  it('should have a type of FETCH_DATA_SUCCESS', () => {
    const suggestions = [{song: 'umbrella', artist: 'Rihanna'}]
    const mockAction = {
      type: 'FETCH_DATA_SUCCESS',
      suggestions: [{song: 'umbrella', artist: 'Rihanna'}]
    }

    const result = actions.fetchDataSuccess(suggestions)

    expect(result).toEqual(mockAction)
  })

  it('should have a type of SET_FILTER', () => {
    const filterInputs = {'input-0':'green day', 'input-1':'foo fighters'}
    const mockAction = {
      type: 'SET_FILTER',
      filterInputs: {'input-0':'green day', 'input-1':'foo fighters'}
    }

    const result = actions.setFilter(filterInputs)

    expect(result).toEqual(mockAction)
  })
})