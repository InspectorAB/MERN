import {React,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Navbar() {
  const Navigate = useNavigate();
  const isLogin = localStorage.getItem("IsLogin");
  console.log('====================================');
  console.log(isLogin);
  console.log('====================================');
// check when logged in , useeffect
  return (
    <div>
      {isLogin ? (
        <ul className="nav nav-tabs">
         <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="#">
             <Link to=""> Login</Link>
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#">
             <Link to="Registration"> Registration</Link>
           </a>
         </li>
       </ul>
        
      ) : (
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="Portfolio"> Portfolio</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            <Link to="HomePage"> HomePage</Link>
          </a>
        </li>
              </ul>)}
    </div>
  );
}
