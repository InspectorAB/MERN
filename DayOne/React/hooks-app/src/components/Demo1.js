import React, { useState } from 'react'
import Demo2 from './Demo2';

function Demo1() {
    // initialize the state
    const [count,setCount] = useState('');

    const inc = () => {
        setCount(count+1)
        localStorage.setItem("count",count);
    }
    const dec = () => {
        setCount(count-1)
        localStorage.setItem('count',count);
    }



  return (
    <div>
        <p value={count}>The count: {count}</p>
        <button onClick={inc}>Hello World</button>
        <button onClick={dec}>Hello Borld</button>
        <hr></hr>
        <Demo2/>
    </div>
  )
}

export default Demo1