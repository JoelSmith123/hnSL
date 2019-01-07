import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { filterReducer } from '../../reducers/filterReducer.js'
import { setFilter } from '../../actions/index.js'
import './FilterSuggestions.css'

export class FilterSuggestions extends Component {
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
    console.log('woooot!!!')
    e.preventDefault()
    const { filterInput1, filterInput2 } = this.state

    this.props.setFilter(filterInput1, filterInput2)

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
        <form>
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
          <NavLink to='/results'>
            <button className='filter-btn' 
                    onClick={ (e)=> this.handleSubmit(e) }
            >
              Find suggestions
            </button>
            </NavLink>
        </form>
      </div>
    )
  }
}
  
export const mapDispatchToProps = (dispatch) => ({
  setFilter: (filterInput1, filterInput2) => dispatch(setFilter(filterInput1, filterInput2))
})

export default connect(null, mapDispatchToProps)(FilterSuggestions)

