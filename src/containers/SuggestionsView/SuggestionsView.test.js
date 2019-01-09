import React from 'react'
import { shallow } from 'enzyme'
import { dataBaseKey }  from '../../../src/constants.js'
import { SuggestionsView, mapStateToProps, mapDispatchToProps } from './SuggestionsView.js'
jest.mock('../../thunks/fetchSuggestions.js')

describe('SuggestionsView', () => {
  let mockFetch
  let mockFilters
  let wrapper

  beforeEach(() => {
    mockFetch = jest.fn()
    mockFilters = {'input-0': 'red hot chili peppers', 'input-1': 'pulp fiction'}
    wrapper = shallow(<SuggestionsView suggestions={[{movie: 'movie-one'}]} 
                                       fetchSuggestions={ mockFetch } 
                                       filters={ mockFilters } 
                                       category={'movies'}
                      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call fetchSuggestions on componentDidMount', async () => {
    const searchRequest = 'red+hot+chili+peppers+&2c+pulp+fiction'
    const category = 'movies'
    const url = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${searchRequest}&k=${dataBaseKey}&info=1&type=${category}`

    await wrapper.instance().componentDidMount()

    expect(mockFetch).toHaveBeenCalledWith(url)
  })
})

describe('mapStateToProps', () => {
  it('should return an object with expected values', () => {
    const mockState = {
      suggestions: [{movie: 'movie-one'}],
      filters: {filterOne: 'filter'},
      category: 'games',
      goodLuck: 'plenty'
    }
    const expected = {
      suggestions: [{movie: 'movie-one'}],
      filters: {filterOne: 'filter'},
      category: 'games'
    }

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})

describe.skip('mapDispatchToProps', () => {
  it.skip('calls dispatch with a fetchSuggestions action when fetchSuggestions is called', () => {
    const mockDispatch = jest.fn()
    const mockUrl = 'www.google.com'
    const actionToDispatch = fetchSuggestions(mockUrl)

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.fetchSuggestions(mockUrl)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})