import React from "react"
import { Link } from "gatsby"

import "./navigation.css"

const Navigation = props => {
  return (
    <div className="navWrapper">
      <nav>
        <ul className="navItems">
          <li>
            {" "}
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/karte/" activeClassName="active">
              Karte
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/events/" activeClassName="active">
              Events
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/attractions/" activeClassName="active">
              Attraktionen
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
