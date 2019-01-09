import React from 'react'
import Welcome from './Welcome.js'

describe('Welcome', () => {
  const wrapper = <Welcome />

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})