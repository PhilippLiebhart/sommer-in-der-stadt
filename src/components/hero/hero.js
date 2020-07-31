import React from "react"
import "./hero.scss"
import { graphql, useStaticQuery } from "gatsby"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoImage: file(relativePath: { eq: "logo_header_v2.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="hero is-primary has-background">
      <img
        alt="Header Background"
        className="hero-background"
        src={data.headerImage.childImageSharp.fluid.src}
      />
      <div className="hero-body">
        <div className="hero-banderole">Sommer in der Stadt</div>
        <img
          alt="Logo Kulturtage AU Haishausen"
          className="logo"
          src={data.logoImage.childImageSharp.fluid.src}
        />
      </div>
    </div>
  )
}

export default Hero
