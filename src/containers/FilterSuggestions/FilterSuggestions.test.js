import { FilterSuggestions, mapDispatchToProps } from './FilterSuggestions.js'
import { setFilter, setCategory } from '../../actions/index.js'
import React from 'react'
import { shallow } from 'enzyme'

describe('FilterSuggestions', () => {
  const wrapper = shallow(<FilterSuggestions setFilter={jest.fn()} setCategory={jest.fn()}/>)

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('handleChange', () => {
    it('should update local state with input values', () => {
      const mockEvent = { target: {name: 'input-0',  value: 'underoath'} }
      const mockState = { inputs: {'input-0': 'underoath'} }

      wrapper.instance().handleChange(mockEvent)

      expect(wrapper.state().inputs).toEqual(mockState.inputs)
    })      
  })

  describe('handleSubmit', () => {
    it('should call setFilter on form submit', () => {
      const mockEvent = { target: {}, preventDefault: () => {} }

      wrapper.instance().handleSubmit(mockEvent)

      expect(wrapper.instance().props.setFilter).toHaveBeenCalled()
    })

    it('should call setCategory on form submit', () => {
      const mockEvent = { target: {}, preventDefault: () => {} }

      wrapper.instance().handleSubmit(mockEvent)

      expect(wrapper.instance().props.setCategory).toHaveBeenCalled()
    })

    it('should update local state on form submit', () => {
      const mockEvent = { target: {}, preventDefault: () => {} }

      wrapper.instance().handleSubmit(mockEvent)

      expect(wrapper.state()).toEqual({activeBtn: '', category: '', inputs: {}})
    })    
  })

  describe('handleClick', () => {
    it('should update local state on category button click', () => {
      const mockEvent = { target: {name: 'games'}, preventDefault: () => {} }

      wrapper.instance().handleClick(mockEvent)

      expect(wrapper.state()).toEqual({category: 'games', activeBtn: 'games', inputs: {}})
    })
  })

  describe('appendInput', () => {
    it('should update state with new inputs', () => {
      const mockEvent = { target: {}, preventDefault: () => {} }
      
      wrapper.setState({inputs: {'input-0': ''}})

      wrapper.instance().appendInput(mockEvent)

      expect(wrapper.state().inputs).toEqual({'input-0': '', 'input-1': ''})
    })
  })

})

describe('mapDispatchToProps', () => {
  it('calls dispatch with a setFilter action when setFilter is called', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = setFilter({'input-0': ''})

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setFilter({'input-0': ''})

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('calls dispatch with a setCategory action when setCategory is called', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = setCategory('games')

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setCategory('games')

    expect(mockDispatch).toBeCalledWith(actionToDispatch)
  })
})