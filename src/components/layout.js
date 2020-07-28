import "normalize.css"
import PropTypes from "prop-types"
import React from "react"
import "./style.scss"
import Header from "./header"
import Footer from "./footer"

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
      <main>{children}</main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
