import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import "./navigation.scss"

const Navigation = props => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "muenchner-kindl.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
<<<<<<< HEAD
    <nav>
      <div className="container">
        <input id="responsive-menu" type="checkbox" />
        <label htmlFor="responsive-menu">
          <span id="menu-icon" />
        </label>
        <div id="overlay" />
        <ul>
          <Link to="/">
            <li>HOME</li>
=======
    <nav
      className="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src={data.logoImage.childImageSharp.fluid.src}
            height={"100%"}
            alt="Logo"
          />
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
>>>>>>> b21465de34e22c2b1b1087e90dd892a5dd2f6f0f
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
