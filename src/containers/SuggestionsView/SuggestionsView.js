import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dataBaseKey }  from '../../../src/constants.js'
import { fetchSuggestions } from '../../thunks/fetchSuggestions.js'
import './SuggestionsView.css'

export class SuggestionsView extends Component {
  async componentDidMount() {
    let apiKey = dataBaseKey
    let searchRequest = 'red+hot+chili+peppers%2C+pulp+fiction'
    const url = `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${searchRequest}&k=${dataBaseKey}`
    console.log(this.props.fetchSuggestions(url))
  }

  render() {
    return (
      <div className='SuggestionsView'>
        <h1 className='suggestions-view-title'>This is SuggestionsView</h1>
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    filterInput1: state.filterInput1,
    filterInput2: state.filterInput2
  }
}
  
export const mapDispatchToProps = (dispatch) => ({
  fetchSuggestions: (url) => dispatch(fetchSuggestions(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionsView)
