import React, { Component } from 'react'
import './FilterSuggestions.css'

export default class FilterSuggestions extends Component {
  render() {
    return (
      <div className='FilterSuggestions'>
        <h1 className='filter-title'>More filters</h1>
        <form>
          <input className='filter-input-1' placeholder='Enter title...'></input>
          <input className='filter-input-2' placeholder='Enter title...'></input>
          <button className='filter-btn'>Find suggestions</button>
        </form>
      </div>
    )
  }
}