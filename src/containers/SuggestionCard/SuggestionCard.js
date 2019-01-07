import React, { Component } from 'react'
import { connect } from 'react-redux'
import './SuggestionCard.css'

export class SuggestionCard extends Component {
  render() {
    console.log(this.props.youtubeID)
    const src = `https://www.youtube.com/embed/${this.props.youtubeID}`

    return (
      <div className='SuggestionCard'>
        <h1>{this.props.name}</h1>
        <iframe width="200" 
                height="100" 
                src={src} 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
        >
        </iframe>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  name: props.Name,
  type: props.Type,
  description: props.wTeaser,
  wiki: props.wUrl,
  youtube: props.yUrl,
  youtubeID: props.yID
})

export default connect(mapStateToProps)(SuggestionCard)
