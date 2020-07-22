import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import EventCard from "../components/eventCard/eventCard"
import EventCardSimple from "../components/eventCardSimple/eventCardSimple"

const IndexPage = ({ data }) => {
  console.log("DATA INDEX", data)

  const eventList = data.allEventsJson.edges.map(event => {
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
        imgUrl=""
      />
    )
  })

  return (
    <Layout>
      <h1>Nächste Veranstaltungen:</h1>

      <EventCard />
      {eventList}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query EventsQueryIndex {
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
