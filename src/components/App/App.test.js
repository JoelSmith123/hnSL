import React from 'react';
import App from './App';

describe('App', () => {
  const wrapper = <App />

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

