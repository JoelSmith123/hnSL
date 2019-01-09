import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setFilter, setCategory } from '../../actions/index.js'
import './FilterSuggestions.css'

export class FilterSuggestions extends Component {
  constructor() {
    super()
    this.state = {
      inputs: {'input-0': ''},
      category: '',
      activeBtn: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({ inputs: {...prevState.inputs, [name]: value} }))
  }

  handleSubmit = (e) => {
    console.log('ran!!')
    e.preventDefault()
    console.log(this.state.category[0])
    this.props.setFilter(this.state.inputs)
    this.props.setCategory(this.state.category)
    this.setState({activeBtn: '', category: '', inputs: {}})
  }

  handleClick = (e) => {
    e.preventDefault()
    const { name } = e.target
    this.setState({category: name, activeBtn: name})
  }

  handleFormClick = (e) => {
    e.preventDefault()
    if (e.target !== e.currentTarget) {
      Object.values(e.currentTarget.children).forEach(child => {
        if (child.name !== e.target.name && child.classList.contains('category-btn')) {  
          child.classList.remove('input-btn')
          child.classList.add('input-btn-unactive')
          e.target.classList.add('input-btn')
          e.target.classList.remove('input-btn-unactive')
        }
      })      
    }
  }

  appendInput = (e) => {
    e.preventDefault()
    var newInput = `input-${Object.keys(this.state.inputs).length}`;
    this.setState(prevState => ({ inputs: {...prevState.inputs, [newInput]: ''} }));
  }

  enterPressed = (e) => {
    var code = e.keyCode || e.which;
    if(code === 13) { 
      this.handleSubmit(e)
    } 
  }

  render() {
    if (Object.keys(this.state.inputs)[0] === undefined) {
      return <Redirect to='/results' />
    }

    return (
      <div className='FilterSuggestions' onKeyPress={this.enterPressed.bind(this)}>
        <h1 className='filter-title'>Filters</h1>
        <div className='filter-input-categories-container'>
          <div className='filter-input-form-container'>
            <form className='filter-input-form'>
              <h3 className={Object.keys(this.state.inputs).length === 1 ?
                               'filter-name-input-title-bool' : 
                               'filter-name-input-title'}>
                  Enter a game, movie, band, or song
              </h3>
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
            <button className='add-input-btn input-btn' 
                    type='button'
                    disabled={Object.keys(this.state.inputs).length >= 4} 
                    onClick={(e) => this.appendInput(e)}>
              +
            </button>
          </div>
          <div className='filter-input-form-container'>
            <form className='input-categories-form' onClick={(e) => this.handleFormClick(e)}>
              <h3 className='filter-name-input-title filter-categories-input-title'>Enter a game, movie, band, or song</h3>
              <button type='button' className='category-btn input-btn' name='games' onClick={(e) => this.handleClick(e)}>games</button>
              <button type='button' className='category-btn input-btn' name='music' onClick={(e) => this.handleClick(e)}>music</button>
              <button type='button' className='category-btn input-btn' name='authors' onClick={(e) => this.handleClick(e)}>authors</button>
              <button type='button' className='category-btn input-btn' name='movies' onClick={(e) => this.handleClick(e)}>movies</button>
              <button type='button' className='category-btn input-btn' name='shows' onClick={(e) => this.handleClick(e)}>shows</button>
              <button type='button' className='category-btn input-btn' name='books' onClick={(e) => this.handleClick(e)}>books</button>
            </form>
          </div>
        </div>
        <button className='filter-btn' type='submit' onClick={(e) => this.handleSubmit(e)}>Find suggestions</button>
      </div>
    )
  }
}
  
export const mapDispatchToProps = (dispatch) => ({
  setFilter: (filterInputs) => dispatch(setFilter(filterInputs)),
  setCategory: (category) => dispatch(setCategory(category))
})

export default connect(null, mapDispatchToProps)(FilterSuggestions)

