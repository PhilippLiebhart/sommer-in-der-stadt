import React from "react"
import "./hero.scss"

const Hero = () => {
  const headerBackgroundImg = require("../../images/header.jpg")
  const logoImg = require("../../images/logo_header_v2.png")
  return (
    <div className="hero is-primary has-background">
      <img
        alt="Header Background"
        className="hero-background"
        src={headerBackgroundImg}
      />
      <div className="hero-body">
        <div className="hero-banderole">Sommer in der Stadt</div>
        <img
          alt="Logo Kulturtage AU Haishausen"
          className="logo"
          src={logoImg}
        />
      </div>
    </div>
  )
}

export default Hero
