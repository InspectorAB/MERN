import React, { useState } from 'react'
import { Component } from "react";

function Demo1() {
    // initialize the state
    const [count,setCount] = useState(10);

    const componentDidMount = () => {
        console.log("during launch");
        const json = localStorage.getItem('count')
        count = localStorage.getItem('count')
        const userData = JSON.parse(json)
        if(userData){
            this.setState(() =>{
                return{
                     count:count
                }
            })
        }
    }
    const componentDidUpdate = () => {
        const json = JSON.stringify(count);
        localStorage.setItem('count',json);
        console.log("update");
    }

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
        <p>The count: {count}</p>
        <button onClick={inc}>Hello World</button>
        <button onClick={dec}>Hello Borld</button>

    </div>
  )
}

export default Demo1