import React from 'react'
import { useDispatch } from 'react-redux'
import {increment,decrement} from '../redux/reducers/AppReducer';



export default function CounterDispatch() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(increment())}>Increment</button><br></br>
        <button onClick={() => dispatch(decrement())}>Decrement</button><br></br>
    </div>
  )
}
