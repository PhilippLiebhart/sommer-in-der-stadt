import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation/navigation"

const Header = ({ siteTitle }) => {
  const logoImg = require("../images/logo_header_v2.png")
  return (
    <header id="header">
      <div className="headerImg">
        <img src={logoImg} alt="" />
      </div>
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
