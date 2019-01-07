import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { dataBaseKey }  from '../../../src/constants.js'
import SuggestionsSidebar from '../../containers/SuggestionsSidebar/SuggestionsSidebar.js'
import SignIn from '../../containers/SignIn/SignIn.js'
import Header from '../../containers/Header/Header.js'
import FilterSuggestions from '../../containers/FilterSuggestions/FilterSuggestions.js'


export default class App extends Component {

  async componentDidMount() {
    let apiKey = dataBaseKey
    let searchRequest = 'red+hot+chili+peppers%2C+pulp+fiction'
    const url = `https://tastedive.com/api/similar?q=${searchRequest}&k=${dataBaseKey}`
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SuggestionsSidebar />
        <Switch>
          <Route exact path="/"  />}/>
          <Route exact path='/login' component={ SignIn }/>
          <Route exact path='/filter' component={ FilterSuggestions }/>
        </Switch>
      </div>
    );
  }
}

