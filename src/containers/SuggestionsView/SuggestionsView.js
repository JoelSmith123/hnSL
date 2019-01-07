import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dataBaseKey }  from '../../../src/constants.js'
import { fetchSuggestions } from '../../thunks/fetchSuggestions.js'
import SuggestionCard from '../SuggestionCard/SuggestionCard.js'
import './SuggestionsView.css'

export class SuggestionsView extends Component {

  async componentDidMount() {
    let apiKey = dataBaseKey
    let searchRequest = 'red+hot+chili+peppers%2C+pulp+fiction'
    const url = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${searchRequest}&k=${dataBaseKey}&info=1`
    await this.props.fetchSuggestions(url)
  }

  render() {
    return (
      <div className='SuggestionsView'>
        <h1 className='suggestions-view-title'>This is SuggestionsView</h1>
        <div className='suggestion-cards-container'>
          {
            this.props.suggestions ? 
              this.props.suggestions.Similar.Results.map(suggestion => {
                return <SuggestionCard {...suggestion} />
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
    suggestions: state.suggestions.suggestions
  }
}
  
export const mapDispatchToProps = (dispatch) => ({
  fetchSuggestions: (url) => dispatch(fetchSuggestions(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionsView)
