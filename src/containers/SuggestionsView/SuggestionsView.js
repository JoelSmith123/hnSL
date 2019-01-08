import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { dataBaseKey }  from '../../../src/constants.js'
import { fetchSuggestions } from '../../thunks/fetchSuggestions.js'
import SuggestionCard from '../SuggestionCard/SuggestionCard.js'
import './SuggestionsView.css'

export class SuggestionsView extends Component {

  async componentDidMount() {
    let searchRequest = Object.values(this.props.filters.filterInputs).map(query => {
      query = query.split(/[ ]+/).join('+')
      return query
    }).join('+&2c+')
    const url = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${searchRequest}&k=${dataBaseKey}&info=1`
    await this.props.fetchSuggestions(url)
  }

  render() {
    return (
      <div className='SuggestionsView'>
        <div className='suggestion-cards-container'>
          {
            this.props.suggestions ? 
              this.props.suggestions.Similar.Results.map(suggestion => {
                return <SuggestionCard {...suggestion} key={uuid()} />
              })
            : null
          }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions.suggestions,
    filters: state.filters
  }
}
  
export const mapDispatchToProps = (dispatch) => ({
  fetchSuggestions: (url) => dispatch(fetchSuggestions(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionsView)
