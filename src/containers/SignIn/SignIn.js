import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './SignIn.css'

export default class SignIn extends Component {
  render() {
    return (
      <div className='SignIn'>
        <h1 className='sign-in-title'>Please sign in</h1>
        <form className='sign-in-form'> 
          <input name='username' placeholder='Username'></input>
          <input name='password' placeholder='Password'></input>
          <NavLink to='/filter'><button className='login-btn'>login</button></NavLink>
          <h3 className='new-user-btn'>new user? make your account here!</h3>
        </form>
      </div>  
    )
  }
}
