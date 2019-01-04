import React, { Component } from 'react'
import './App.css'
import SuggestionsSidebar from '../../containers/SuggestionsSidebar/SuggestionsSidebar.js'
import SignIn from '../../containers/SignIn/SignIn.js'
import Header from '../../containers/Header/Header.js'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SuggestionsSidebar />
        <SignIn />
      </div>
    );
  }
}

