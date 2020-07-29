import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import EventCardSimple from "../components/eventCardSimple/eventCardSimple"
import Navigation from "../components/navigation/navigation"

import Moment from "react-moment"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Card from "../components/card/card"

const months = {
  Juli: { start: "2020-07-01T00:01", end: "2020-07-31T00:00" },
  August: { start: "2020-08-01T00:01", end: "2020-08-31T00:00" },
  September: { start: "2020-09-01T00:01", end: "2020-09-31T00:00" },
  Oktober: { start: "2020-10-01T00:01", end: "2020-10-31T00:00" },
}

const eventTypes = ["Musik", "Konzert", "Lesung", "Kino", "sonstiges"]

const EventsPage = ({ data }) => {
  const [state, setState] = useState({
    eventData: data.allContentfulEvent.edges,
    startDate: "2020-07-01T20:00",
    endDate: "2020-12-21T20:00",
    month: null,
    eventCount: data.allContentfulEvent.totalCount,
  })

  // FILTER BY eventType
  const filterByEventType = name => {
    const dataToFilter = data.allContentfulEvent.edges
    const filteredData = dataToFilter.filter(event => {
      return event.node.eventType.includes(name)
    })

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

  //MONTH FILTERMENU
  const monthsFilterMenu = Object.keys(months).map(igKey => {
    return (
      <li
        style={{
          display: "inline",
          backgroundColor: "gray",
          margin: "4px",
          padding: "4px",
        }}
        key={igKey}
        onClick={() =>
          filterByMonth(months[igKey].start, months[igKey].end, igKey)
        }
      >
        {igKey}
      </li>
    )
  })

  // eventtypes menu
  const eventTypeMenu = eventTypes.map((event, index) => {
    console.log("HULA HULA", event)
    return (
      <li
        style={{
          display: "inline",
          backgroundColor: "gray",
          margin: "4px",
          padding: "4px",
        }}
        key={index}
        onClick={() => filterByEventType(event)}
      >
        {event}
      </li>
    )
  })

  // EVENTS MAP START ----
  let eventList = state.eventData.map(event => {
    const richtextJSON =
      event.node.childContentfulEventInformationRichTextNode.json
    const richTextToHtml = documentToReactComponents(richtextJSON)
    const dateToFormat = event.node.date

    return (
      <div className="column" key={event.node.id}>
        <Card
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
      </div>
    )
  })
  // ---- EVENTS MAP ENDE |||

  return (
    <Layout>
      <Navigation />
      <div className="container mt-6">
        <section className="section">
          <h1>Filter by Month:</h1>
          <ul style={{ margin: "10px auto" }}>{monthsFilterMenu}</ul>
          <ul>{eventTypeMenu}</ul>
          <p className="mt-5">Events insgesamt: {state.eventData.length}</p>

          {state.month ? (
            <h2 className="mt-3">Events im {state.month}</h2>
          ) : (
            <h2 className="mt-3">Alle Events</h2>
          )}
          <div className="container">
            <div className="columns">{eventList}</div>
          </div>
        </section>{" "}
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
