import React from 'react'
import CounterState from './CounterState'
import CounterDispatch from './CounterDispatch'

export default function CounterApp(props) {
  return (
    <div>
        <hr></hr>
        CounterApp
        <CounterState/>
        <CounterDispatch/>
    </div>
  )
}

//counterstate
//counter dispatch