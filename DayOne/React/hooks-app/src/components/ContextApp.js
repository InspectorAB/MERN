
import React from 'react'

function ContextApp(props) {
  return (
    <div><Employee/></div>
  )
}

function Employee(props) {
    return (
      <div>
        Employee
        <Salary/>
      </div>
    )
  }

  function Salary(props) {
    return (
      <div>Salary</div>
    )
  }
  