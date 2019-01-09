import React from 'react'
import { shallow } from 'enzyme'
import { RouteNoMatch } from './RouteNoMatch.js'
import { Redirect } from 'react-router-dom'

describe('NoMatch', () => {
  it('should return a Redirect', () => {
    const wrapper = shallow(<RouteNoMatch />)

    expect(wrapper.find(Redirect).length).toBe(1)
  })
})