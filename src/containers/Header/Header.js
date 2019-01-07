import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'


export default class Header extends Component {
  render() {
    return (
      <header className='Header'>
        <h2 className='header-title'>Welcome to hnSL!</h2>
        <NavLink to='/login'><button className='header-sign-in-btn'>Sign In</button></NavLink>
      </header>
    )
  }
}