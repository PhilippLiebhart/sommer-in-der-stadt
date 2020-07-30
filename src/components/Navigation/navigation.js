import React, { useState } from "react"
import "./navigation.scss"
import { Link } from "gatsby"

const Navigation = props => {
  const logoImg = require("../../images/muenchner-kindl.png")
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <nav
      className="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logoImg} height={"100%"} alt="Logo" />
        </Link>
        <a
          role="button"
          className={"navbar-burger burger " + (menuIsOpen ? "is-active" : "")}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => toggleMenu()}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={"navbar-menu " + (menuIsOpen ? "is-active" : "")}
      >
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Start
          </Link>

          <Link to="/events" className="navbar-item">
            Veranstaltungen
          </Link>

          <Link to="/karte" className="navbar-item">
            Karte
          </Link>

          <Link to="/impressum" className="navbar-item">
            Impressum
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
