import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import EventCardSimple from "../components/eventCardSimple/eventCardSimple"
import Navigation from "../components/navigation/navigation"

import Moment from "react-moment"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const EventsPage = ({ data }) => {
  const [state, setState] = useState({
    eventData: data.allContentfulEvent.edges,
    startDate: "2020-07-01T20:00",
    endDate: "2020-12-21T20:00",
    month: null,
  })

  // FILTER BY eventType
  const filterHandler = (name, data) => {
    const dataToFilter = data.allContentfulEvent.edges
    const filteredData = dataToFilter.filter(event => {
      console.log("FILTER RUNNING", event.node.eventType)
      return event.node.eventType === name
    })
    console.log("!!!!!!!!!!!!!filteredData", filteredData)
    setState({ ...state, eventData: filteredData })
  }

  // Filter by Month
  const filterByMonth = (start, end, currMonth) => {
    const monthFilterData = data.allContentfulEvent.edges
    const filteredByMonth = monthFilterData.filter(event => {
      const startDate = start
      const endDate = end
      return event.node.date >= startDate && event.node.date <= endDate
    })

    setState({ ...state, eventData: filteredByMonth, month: currMonth })
  }

  console.log(
    "%c MY STATE",
    "background: green; color: white; display: block;",
    filterByMonth
  )

  // EVENTS MAP START ----
  let eventList = state.eventData.map(event => {
    const richtextJSON =
      event.node.childContentfulEventInformationRichTextNode.json
    const richTextToHtml = documentToReactComponents(richtextJSON)
    const dateToFormat = event.node.date

    return (
      <EventCardSimple
        key={event.node.id}
        detailsSlug={event.node.slug}
        eventTitle={event.node.name}
        eventDate={<Moment date={dateToFormat} format="D MMM YYYY HH:mm" />}
        eventLength="to define"
        topEvent={event.node.topEvent}
        eventTypeName={event.node.eventType}
        eventLocation={event.node.locationName}
        eventInfo={richTextToHtml}
        imgURL={event.node.imgUrl.fluid.src}
      />
    )
  })
  // ---- EVENTS MAP ENDE |||

  return (
    <Layout>
      <Navigation />
      <div className="attractionsWrapper">
        <h1>Filter:</h1>
        <div onClick={() => filterHandler("Musik", data)}>Musik --</div>
        <div onClick={() => filterHandler("Konzert", data)}>Konzert--</div>
        <div onClick={() => filterHandler("sonstiges", data)}>Sonstiges--</div>

        <div
          onClick={() =>
            filterByMonth("2020-07-01T00:01", "2020-07-31T23:59", "Juli")
          }
        >
          -----Juli
        </div>
        <div
          onClick={() =>
            filterByMonth("2020-08-01T00:01", "2020-08-31T23:59", "August")
          }
        >
          -----August
        </div>
        <div
          onClick={() =>
            filterByMonth("2020-09-01T00:01", "2020-09-31T23:59", "September")
          }
        >
          -----September
        </div>
        <div
          onClick={() =>
            filterByMonth("2020-10-01T00:01", "2020-10-31T23:59", "Oktober")
          }
        >
          -----Oktober
        </div>
        <div
          onClick={() =>
            filterByMonth("2020-11-01T00:01", "2020-11-31T23:59", "November")
          }
        >
          -----November
        </div>

        {state.month ? <h2>Events im {state.month}</h2> : <h2>Alle Events</h2>}
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
          topEvent
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
