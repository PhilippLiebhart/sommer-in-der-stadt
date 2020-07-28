import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation/navigation"
import Hero from "./hero/hero"

const Header = ({ siteTitle }) => {
  return (
    <header className="header">
      <Navigation />
      <Hero />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
