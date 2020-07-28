import "normalize.css"
import PropTypes from "prop-types"
import React from "react"
import Footer from "./footer"
import Header from "./header"
import "./style.scss"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query WebsiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
