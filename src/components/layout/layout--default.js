import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "normalize.css"
import "../style.scss"
import "./layout.scss"
import Navigation from "../navigation/navigation"
import Header from "./header"

const LayoutDefault = ({ children }) => {
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

      <footer className="footer mt-6">
        <div className="content has-text-centered">
          <p>
            &copy; {new Date().getFullYear()} - Built with &#10084; by BarPhi in
            Munich
          </p>
        </div>
      </footer>
    </>
  )
}

LayoutDefault.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutDefault
