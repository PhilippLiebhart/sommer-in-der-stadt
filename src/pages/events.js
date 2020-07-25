import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import EventCardSimple from "../components/eventCardSimple/eventCardSimple"

const EventsPage = ({ data }) => {
  const eventList = data.allContentfulEvent.edges.map(event => {
    return (
      <EventCardSimple
        key={event.node.id}
        detailsSlug={event.node.slug}
        eventTitle={event.node.name}
        eventDate={event.node.date}
        eventLength="to define"
        eventTypeName={event.node.eventType}
        eventLocation={event.node.locationName}
        eventInfo={JSON.stringify(event.node.childContentfulEventInformationRichTextNode)}
        imgURL={event.node.imgUrl.fluid.src}
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
    allContentfulEvent {
      totalCount
      edges {
        node {
          childContentfulEventInformationRichTextNode {
            json
            content {
              content {
                value
              }
            }
          }
          eventType
          imgUrl {
            fluid {
              src
            }
          }
          id
          date(formatString: "")
          locationName
          name
          slug
          location {
            lat
            lon
          }
        }
      }
    }
  }
`
