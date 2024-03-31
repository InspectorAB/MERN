import React from 'react'
import { useDispatch } from 'react-redux'
import { login,logout } from '../redux/reducers/AuthReducer';



export default function AuthAppDispatch() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(login())}>Login</button>
        <button onClick={() => dispatch(logout())}>Log Out</button>
    </div>
  )
}
