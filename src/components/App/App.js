import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import SuggestionsSidebar from '../../containers/SuggestionsSidebar/SuggestionsSidebar.js'
import SignIn from '../../containers/SignIn/SignIn.js'
import Header from '../../containers/Header/Header.js'
import FilterSuggestions from '../../containers/FilterSuggestions/FilterSuggestions.js'
import SuggestionsView from '../../containers/SuggestionsView/SuggestionsView.js'



export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <SuggestionsSidebar />
        <Switch>
          <Route exact path="/"  />}/>
          <Route exact path='/login' component={ SignIn }/>
          <Route exact path='/filter' component={ FilterSuggestions }/>
          <Route exact path='/results' component={ SuggestionsView }/>
        </Switch>
      </div>
    );
  }
}

