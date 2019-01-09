import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Welcome.css'

export default class Welcome extends Component {
  render() {
    return (
      <div className='Welcome'>
        <h2 className='welcome-title' >hnSL suggests games, music, movies, TV shows, books, and authors based on the things you already like.</h2>
        <NavLink to='/filter'><button className='welcome-btn'>Try hnSL!</button></NavLink>
      </div>
    )
  }
}