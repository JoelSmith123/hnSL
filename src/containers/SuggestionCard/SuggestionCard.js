import React, { Component } from 'react'
import { connect } from 'react-redux'
import './SuggestionCard.css'

export class SuggestionCard extends Component {
  render() {
    return (
      <div className='SuggestionCard'>
        <h1 className='suggestion-card-title'>{this.props.name}</h1>
        <iframe className='suggestion-card-youtube-embed'
                width="300" 
                height="200" 
                src={`https://www.youtube.com/embed/${this.props.youtubeID}`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
        >
        </iframe>
        <a className='suggestion-card-google-link' href={`http://www.google.com/search?q=${this.props.name}`} target="_blank">more results...</a>
        <div className='suggestion-card-description'>
          {this.props.description}
        </div>
        <a className='suggestion-card-wiki-link' href={this.props.wiki} target="_blank">wikipedia link</a>
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
