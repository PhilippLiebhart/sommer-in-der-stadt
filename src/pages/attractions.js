import React from "react"
import Layout from "../components/layout"

const AttractionsPage = ({ data, pageContext, location }) => {
  console.log("page context", pageContext.name)
  return (
    <Layout>
      <div className="attractionsWrapper">
        <h1>Attractions page</h1>
        <p>Riesenrad, etc etc</p>
      </div>
    </Layout>
  )
}

export default AttractionsPage
