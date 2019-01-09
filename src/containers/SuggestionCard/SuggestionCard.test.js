import React from 'react'
import { SuggestionCard, mapStateToProps } from './SuggestionCard.js'

describe('SuggestionCard', () => {
  const wrapper = <SuggestionCard />
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mapStateToProps', () => {
  it('should return props', () => {
    const mockProps = {
      Name: 'Dumbledore',
      Type: 'wizard',
      wTeaser: 'he likes cheese',
      wUrl: 'www.hogwarts.com',
      yUrl: 'www.MuggleTube.com',
      yID: '123456'
    }
    const mockState = {
      name: 'props.Name',
      type: 'props.Type',
      description: 'props.wTeaser',
      wiki: 'props.wUrl',
      youtube: 'props.yUrl',
      youtubeID: 'props.yID',
      extraLuck: 'yes please'
    }
    const expected = {
      name: 'Dumbledore',
      type: 'wizard',
      description: 'he likes cheese',
      wiki: 'www.hogwarts.com',
      youtube: 'www.MuggleTube.com',
      youtubeID: '123456'
    }

    const mappedProps = mapStateToProps(mockState, mockProps)

    expect(mappedProps).toEqual(expected)
  })
})