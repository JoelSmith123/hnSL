import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './FilterSuggestions.css'

export default class FilterSuggestions extends Component {
  constructor() {
    super()
    this.state = {
      filterInput1: '', 
      filterInput2: '', 
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { filterInput1, filterInput2 } = this.state
    

    this.setState({
      filterInput1: '',
      filterInput2: ''
    })
  }

  render() {
    const {filterInput1, filterInput2} = this.state
    return (
      <div className='FilterSuggestions'>
        <h1 className='filter-title'>More filters</h1>
        <form onSubmit={ this.handleSubmit }>
          <input name='filterInput1' 
                 value={filterInput1} 
                 className='filter-input-1' 
                 placeholder='Enter title...'
                 onChange={ this.handleChange }
                 >
          </input>
          <input name='filterInput2' 
                 value={filterInput2} 
                 className='filter-input-2' 
                 placeholder='Enter title...'
                 onChange={ this.handleChange }
                 >
          </input>
          <NavLink to='/results'><button className='filter-btn'>Find suggestions</button></NavLink>
        </form>
      </div>
    )
  }
}

