import React from "react"
import Layout from "../components/layout"

import EventCardSimple from "../components/eventCardSimple/eventCardSimple"

import "./attractions.css"
import FerrisWheel from "../components/ferrisWheel/ferrisWheel"
import { graphql } from "gatsby"

const AttractionsPage = ({ data }) => {
  const attractions = data.allEventsJson.edges
    .filter(event => event.node.typeName === "attraction")
    .map(event => {

      return (
        <EventCardSimple
          key={event.node.id}
          detailsSlug={event.node.slug}
          eventTitle={event.node.name}
          eventDate={event.node.openingHours.day}
          eventLength="to define"
          eventTypeName={event.node.typeName}
          eventLocation={event.node.location.name}
          eventInfo={event.node.information}
          imgURL={event.node.imgURL}
        />
      )
    })
  console.log("BOOOOOOOOOO", attractions)

  return (
    <Layout>
      <div className="attractionsWrapper">
        <h1>Attraktionen und Stände</h1>

        <FerrisWheel />
        {attractions}
      </div>
    </Layout>
  )
}

export default AttractionsPage

export const query = graphql`
  query AttractionsQuery {
    allEventsJson {
      edges {
        node {
          imgURL
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
