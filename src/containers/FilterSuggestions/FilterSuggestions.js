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

  appendInput = () => {
    var newInput = `input-${Object.keys(this.state.inputs).length}`;
    this.setState(prevState => ({ inputs: {...prevState.inputs, [newInput]: ''} }));
  }

  render() {
    if (Object.keys(this.state.inputs)[0] === undefined) {
      return <Redirect to='/results' />
    }

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
        <button onClick={(e) => this.handleSubmit(e)} className='filter-btn'>Find suggestions</button>
      </div>
    )
  }
}
  
export const mapDispatchToProps = (dispatch) => ({
  setFilter: (filterInputs) => dispatch(setFilter(filterInputs))
})

export default connect(null, mapDispatchToProps)(FilterSuggestions)

