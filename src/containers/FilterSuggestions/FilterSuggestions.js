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
      inputs: {'input-0': ''}
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({ inputs: {...prevState.inputs, [name]: value} }))
  }

  handleSubmit = (e) => {
    this.state.inputs.forEach(input => {
      this.props.setFilter(input)
      const inputs = this.state.inputs.splice(input, 1) 
      this.setState({
        inputs
      })
    })
  }

  appendInput = () => {
    var newInput = `input-${Object.keys(this.state.inputs).length}`;
    this.setState(prevState => ({ inputs: {...prevState.inputs, [newInput]: ''} }));
  }

  render() {
    return (
      <div className='FilterSuggestions'>
        <h1 className='filter-title'>More filters</h1>
        <form>
          {
            Object.keys(this.state.inputs).map((input,index) => { 
              return <input key={input}
                            name={input}
                            value={this.state.inputs[input]}
                            className='filter-input'
                            onChange={this.handleChange}
                      >
                      </input>
            })
          }
        </form>
        <button onClick={() => this.appendInput()}>+</button>
        <NavLink to='/results'
                 onClick={ this.handleSubmit.bind(this) }
        >
          <button className='filter-btn'>
            Find suggestions
          </button>
        </NavLink>
      </div>
    )
  }
}
  
export const mapDispatchToProps = (dispatch) => ({
  setFilter: (filterInput1, filterInput2) => dispatch(setFilter(filterInput1, filterInput2))
})

export default connect(null, mapDispatchToProps)(FilterSuggestions)

