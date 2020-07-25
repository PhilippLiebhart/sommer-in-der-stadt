import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation/navigation"

const Header = ({ siteTitle }) => {
  const logoImg = require("../images/logo_header.png")
  return (
    <header id="header">
      <div className="headerImg">
        <img src={logoImg} alt="" />
      </div>
      <Navigation />
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
