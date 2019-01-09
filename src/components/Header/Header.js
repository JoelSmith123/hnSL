import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'


export default class Header extends Component {
  render() {
    return (
      <header className='Header'>
        <NavLink to='/'><h2 className='header-title'>Welcome to hnSL!</h2></NavLink>
      </header>
    )
  }
}