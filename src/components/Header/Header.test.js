import React from 'react'
import Header from './Header.js'

describe('Header', () => {
  const wrapper = <Header />
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})