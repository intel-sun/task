import React from "react"
import { BrowserRouter as Link } from "react-router-dom"
import './index.css'

const Navigate =() => {
    return (
      <div className="AppBar">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>Intel-Sun</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" id='nav' to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " id='nav' to={"/sign-up"}>Sign up</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" id='nav' to={"/home"}>Home</Link>
              </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>

        )
        }
 export default Navigate;