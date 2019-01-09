import { fetchSuggestions } from './fetchSuggestions'
import { isLoading, hasErrored, fetchDataSuccess } from '../actions/index.js'

describe('fetchSuggestions', () => {
  let mockUrl
  let mockDispatch 

  beforeEach(() => {
    mockUrl = 'www.google.com'
    mockDispatch = jest.fn()
  })

  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchSuggestions(mockUrl)

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))

    const thunk = fetchSuggestions(mockUrl)

    await thunk(mockDispatch)
  
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true))
  })

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    
    const thunk = fetchSuggestions(mockUrl)
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch fetchDataSuccess', async () => {
    const mockSuggestions = [{game: 'great game'}]
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockSuggestions)
    }))

    const thunk = fetchSuggestions(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(fetchDataSuccess(mockSuggestions))
  })
})




