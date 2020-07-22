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
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/karte/">Karte</Link>
          </li>
          <li>
            {" "}
            <Link to="/events/">Events</Link>
          </li>
          <li>
            {" "}
            <Link to="/attractions/">Attraktionen</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
