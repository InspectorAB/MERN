import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterState() {
    const count = useSelector(state => state.counter.counter)
  return (
    <div>
        <p>The count is : {count}</p>
    </div>
  )
}
