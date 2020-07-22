import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import EventCardSimple from "../components/eventCardSimple/eventCardSimple"

const EventsPage = ({ data }) => {
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
        imgURL={event.node.imgURL}
      />
    )
  })

  return (
    <Layout>
      <div className="attractionsWrapper">
        <h1>EVENTs page</h1>

        {eventList}
      </div>
    </Layout>
  )
}

export default EventsPage

export const query = graphql`
  query EventsQuery {
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
