import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import "./navigation.scss"
import muenchnerKindl from "../../images/muenchner-kindl.png" // Tell webpack this JS file uses this image

const Navigation = props => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  // const data = useStaticQuery(graphql`
  //   query {
  //     logoImage: file(relativePath: { eq: "muenchner-kindl.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300, quality: 90) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <nav
      className="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={muenchnerKindl} height={"100%"} alt="Logo" />
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
