import React from 'react'
import { increment,decrement,resetCounter } from '../redux/actions/counterAction'
import { useDispatch } from 'react-redux'



export default function CounterDispatch() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(increment())}>Increment</button><br></br>
        <button onClick={() => dispatch(decrement())}>Decrement</button><br></br>
        <button onClick={() => dispatch(resetCounter())}>Reset Counter</button>
    </div>
  )
}
