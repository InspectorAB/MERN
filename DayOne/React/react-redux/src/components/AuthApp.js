import React from 'react'
import AuthAppDispatch from './AuthAppDispatch'
import AuthAppState from './AuthAppState'


export default function AuthApp(props) {

  return (
    <div>
        <hr></hr>
        Auth App
        <AuthAppDispatch/>
        <AuthAppState/>       
    </div>
  )
}
