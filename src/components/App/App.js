import React, { Component } from 'react'
import './App.css'
import SuggestionsSidebar from '../../containers/SuggestionsSidebar/SuggestionsSidebar.js'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SuggestionsSidebar />
      </div>
    );
  }
}

