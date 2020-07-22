import React from "react"
import Layout from "../components/layout"

import EventCardSimple from "../components/eventCardSimple/eventCardSimple"

import "./attractions.css"
import FerrisWheel from "../components/ferrisWheel/ferrisWheel"
import { graphql } from "gatsby"

const AttractionsPage = ({ data }) => {
  console.log("PAGE CONTEXT", data)
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

export const query = graphql`
  query EventsQuery {
    allEventsJson {
      edges {
        node {
          id
          name
          location {
            name
            latitude
            longitude
          }
          information
          openingHours {
            day
            end
            start
          }
          typeName
          slug
        }
      }
    }
  }
`
