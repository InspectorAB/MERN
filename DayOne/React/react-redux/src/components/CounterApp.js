import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,resetCounter } from '../redux/actions/counterAction'

export default function CounterApp(props) {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch();
  return (
    <div>
        <hr></hr>
        CounterApp
        <p>The count is : {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button><br></br>
        <button onClick={() => dispatch(decrement())}>Decrement</button><br></br>
        <button onClick={() => dispatch(resetCounter())}>Reset Counter</button>
    </div>
  )
}
