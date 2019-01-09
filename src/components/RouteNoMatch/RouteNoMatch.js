import React from 'react'
import { Redirect } from 'react-router-dom'

export const RouteNoMatch = () => {
  return <Redirect to='/' />
}