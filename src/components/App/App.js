import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Welcome from '../Welcome/Welcome.js'
import Header from '../Header/Header.js'
import FilterSuggestions from '../../containers/FilterSuggestions/FilterSuggestions.js'
import SuggestionsView from '../../containers/SuggestionsView/SuggestionsView.js'



export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"  component={ Welcome }/>}/>
          <Route exact path='/filter' component={ FilterSuggestions }/>
          <Route exact path='/results' component={ SuggestionsView }/>
        </Switch>
      </div>
    );
  }
}

