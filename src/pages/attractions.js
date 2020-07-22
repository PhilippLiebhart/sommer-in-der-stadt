import React from "react"
import Layout from "../components/layout"

import EventCardSimple from "../components/eventCardSimple/eventCardSimple"

import "./attractions.css"
import FerrisWheel from "../components/ferrisWheel/ferrisWheel"

const AttractionsPage = ({ pageContext }) => {
  return (
    <Layout>
      <div className="attractionsWrapper">
        <h1>Attractions page</h1>
        <p>Riesenrad, etc etc</p>
        <FerrisWheel />
        <EventCardSimple />
      </div>
    </Layout>
  )
}

export default AttractionsPage
