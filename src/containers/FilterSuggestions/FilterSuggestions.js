import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setFilter } from '../../actions/index.js'
import './FilterSuggestions.css'

export class FilterSuggestions extends Component {
  constructor() {
    super()
    this.state = {
      inputs: {'input-0': ''}
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({ inputs: {...prevState.inputs, [name]: value} }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.setFilter(this.state.inputs)
    this.setState({inputs: {}})
  }

  appendInput = (e) => {
    e.preventDefault()
    var newInput = `input-${Object.keys(this.state.inputs).length}`;
    this.setState(prevState => ({ inputs: {...prevState.inputs, [newInput]: ''} }));
  }

  render() {
    if (Object.keys(this.state.inputs)[0] === undefined) {
      return <Redirect to='/results' />
    }

    return (
      <div className='FilterSuggestions'>
        <h1 className='filter-title'>Filters</h1>
        <div className='filter-input-categories-container'>
          <div className='filter-input-form-container'>
            <form className='filter-input-form'>
              <h3 className={Object.keys(this.state.inputs).length === 1 ? 'filter-name-input-title-bool' : 'filter-name-input-title'}>Enter a game, movie, band, or song</h3>
              {
                Object.keys(this.state.inputs).map((input,index) => { 
                  return <input key={input}
                                name={input}
                                value={this.state.inputs[input]}
                                className='filter-input'
                                placeholder=''
                                onChange={this.handleChange}
                          >
                          </input>
                })
              }
            </form>
            <button className='add-input-btn input-btn' disabled={Object.keys(this.state.inputs).length >= 4} onClick={(e) => this.appendInput(e)}>+</button>
          </div>
          <div className='filter-input-form-container'>
            <form className='input-categories-form'>
              <h3 className='filter-name-input-title filter-categories-input-title'>Enter a game, movie, band, or song</h3>
              <button className='category-btn input-btn'>games</button>
              <button className='category-btn input-btn'>music</button>
              <button className='category-btn input-btn'>authors</button>
              <button className='category-btn input-btn'>movies</button>
              <button className='category-btn input-btn'>shows</button>
              <button className='category-btn input-btn'>books</button>
            </form>
          </div>
        </div>
        <button className='filter-btn' onClick={(e) => this.handleSubmit(e)}>Find suggestions</button>
      </div>
    )
  }
}
  
export const mapDispatchToProps = (dispatch) => ({
  setFilter: (filterInputs) => dispatch(setFilter(filterInputs))
})

export default connect(null, mapDispatchToProps)(FilterSuggestions)

