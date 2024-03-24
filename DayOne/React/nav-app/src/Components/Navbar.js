import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
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
      </ul>
    </div>
  );
}
