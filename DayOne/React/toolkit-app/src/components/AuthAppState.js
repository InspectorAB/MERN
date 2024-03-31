import React from 'react'
import {  useSelector } from 'react-redux'


export default function AuthAppState() {
  const auth = useSelector(state => state.auth.auth)
  return (
    <div> 
    { auth ? (
        <p>You are now logged in!</p>
    ):
    (
        <p>You are now logged out!</p>
    )}
    <hr></hr>
    </div>
  )
}
