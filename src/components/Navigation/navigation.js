import React from "react"
import { Link } from "gatsby"

import "./navigation.css"

const Navigation = props => {
  return (
    <nav>
      <div className="container">
        <input id="responsive-menu" type="checkbox" />
        <label htmlFor="responsive-menu">
          <span id="menu-icon" />
        </label>
        <div id="overlay" />
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/karte/" activeClassName="active">
            <li>Karte</li>
          </Link>
          <Link to="/karte/" activeClassName="active">
            <li>Events</li>
          </Link>
          <Link to="/attractions/" activeClassName="active">
            <li>Attraktionen</li>
          </Link>
        </ul>
        {/* <ul id="social-media">
          <li>
            <a href="https://dribbble.com/erinesullivan">
              <i className="fab fa-dribbble" />
              <span className="screen-reader-text">Dribbble</span>
            </a>
          </li>
          <li>
            <a href="http://codepen.io/erinesullivan/">
              <i className="fab fa-codepen" />
              <span className="screen-reader-text">CodePen</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/erin_e_sullivan">
              <i className="fab fa-twitter" />
              <span className="screen-reader-text">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/erinesullivan1">
              <i className="fab fa-linkedin" />
              <span className="screen-reader-text">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/erin_e_sullivan/">
              <i className="fab fa-instagram" />
              <span className="screen-reader-text">Instagram</span>
            </a>
          </li>
        </ul> */}
      </div>
    </nav>

    // <nav role="navigation" className="menuWrapper">
    //   <div id="menuToggle">
    //     <input type="checkbox" />

    //     <span />
    //     <span />
    //     <span />

    //     <ul id="menu">
    //       <Link to="/">
    //         <li>Home</li>
    //       </Link>
    //       <Link to="/karte/" activeClassName="active">
    //         <li>Karte</li>
    //       </Link>
    //       <Link to="/karte/" activeClassName="active">
    //         <li>Events</li>
    //       </Link>
    //       <Link to="/karte/" activeClassName="active">
    //         <li>Attraktionen</li>
    //       </Link>
    //     </ul>
    //   </div>
    // </nav>
  )
}

export default Navigation
