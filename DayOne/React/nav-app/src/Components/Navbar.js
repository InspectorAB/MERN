import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
      <Link to="Login"> Login</Link> <br></br>
      <Link to="Registration"> Registration</Link> <br></br>
      {/* <Link to="UserDetails"> User Details</Link> <br></br>  */}
      <Link to="Portfolio"> Portfolio</Link> <br></br>
   
    </div>
  )
}
