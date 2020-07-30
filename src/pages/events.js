import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Navigation from "../components/navigation/navigation"

import Moment from "react-moment"
import moment from "moment"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Card from "../components/card/card"

const months = {
  Juli: { start: "2020-07-01T00:01", end: "2020-07-31T00:00" },
  August: { start: "2020-08-01T00:01", end: "2020-08-31T00:00" },
  September: { start: "2020-09-01T00:01", end: "2020-09-31T00:00" },
  Oktober: { start: "2020-10-01T00:01", end: "2020-10-31T00:00" },
}

const eventTypes = [
  "Lesung",
  "Ausstellung",
  "Musik",
  "Konzert",
  "Theater",
  "Kino",
  "Kinder",
  "Führung",
  "Workshop",
  "Bürgersprechstunde",
]

const EventsPage = ({ data }) => {
  // const [state, setState] = useState({
  //   loadedEvents: data.allContentfulEvent.edges.sort(
  //     (a, b) => new Date(a.node.date) - new Date(b.node.date)
  //   ),
  //   startDate: "2020-07-01T20:00",
  //   endDate: "2020-12-21T20:00",
  //   month: null,
  //   type: null,
  //   eventCount: data.allContentfulEvent.totalCount,
  // })

  const today = moment()

  const allEvents = data.allContentfulEvent.edges
    .filter(event => 0 > today.diff(moment(event.node.date)))
    .sort((a, b) => new Date(a.node.date) - new Date(b.node.date))

  const [loadedEventList, setLoadedEventList] = useState({
    loadedEvents: allEvents.sort(
      (a, b) => new Date(a.node.date) - new Date(b.node.date)
    ),
    startDate: "2020-07-01T20:00",
    endDate: "2020-12-21T20:00",
    month: null,
    type: null,
    eventCount: data.allContentfulEvent.totalCount,
    allEvents: allEvents.sort(
      (a, b) => new Date(a.node.date) - new Date(b.node.date)
    ),
    // loadedEvents: allEvents.slice(0, 10),
    loadCount: 0,
  })

  // EVENTTYPE FILTER
  const filterByEventType = name => {
    const dataToFilter = data.allContentfulEvent.edges
    const filteredData = dataToFilter.filter(event => {
      return event.node.eventType.includes(name)
    })

    setLoadedEventList({
      ...loadedEventList,
      loadedEvents: filteredData,
      type: name,
      month: null,
    })
  }

  // MONTH FILTER
  const filterByMonth = (start, end, currMonth) => {
    const monthFilterData = data.allContentfulEvent.edges
    const filteredByMonth = monthFilterData.filter(event => {
      const startDate = start
      const endDate = end
      return event.node.date >= startDate && event.node.date <= endDate
    })

    setLoadedEventList({
      ...loadedEventList,
      loadedEvents: filteredByMonth,
      month: currMonth,
      type: null,
    })
  }

  //MONTH FILTERMENU
  const monthsFilterMenu = Object.keys(months).map((igKey, index) => {
    const countMonthEvents = data.allContentfulEvent.edges.filter(event => {
      return (
        new Date(event.node.date).getMonth() ===
        new Date(months[igKey].start).getMonth()
      )
    }).length

    let monthIsActive = loadedEventList.month
    if (loadedEventList.month === igKey) {
      monthIsActive = "tag is-white"
    } else {
      monthIsActive = "tag is-warning"
    }

    console.log(monthIsActive)
    return (
      <div
        key={igKey}
        onClick={() =>
          filterByMonth(months[igKey].start, months[igKey].end, igKey)
        }
        style={{ cursor: "pointer" }}
        className="is-inline-block"
      >
        <span className={monthIsActive}> {igKey}</span>
        <span className="tag is-dark mr-1">{countMonthEvents}</span>
      </div>
    )
  })

  // eventtypes menu
  const eventTypeFilterMenu = eventTypes.map((event, index) => {
    const countTypes = data.allContentfulEvent.edges.filter(event => {
      return event.node.eventType.includes(eventTypes[index])
    }).length

    let typeIsActive = loadedEventList.type
    if (loadedEventList.type === event) {
      typeIsActive = "tag is-white"
    } else {
      typeIsActive = "tag is-warning"
    }
    return (
      <div
        className="is-inline-block"
        key={index}
        onClick={() => filterByEventType(event)}
        style={{ cursor: "pointer" }}
      >
        <span className={typeIsActive}> {event}</span>
        <span className="tag is-dark mr-1">{countTypes}</span>
      </div>
    )
  })

  // EVENTS MAP START ----
  let eventList = loadedEventList.loadedEvents.map(event => {
    const richtextJSON =
      event.node.childContentfulEventInformationRichTextNode.json
    const richTextToHtml = documentToReactComponents(richtextJSON)
    const dateToFormat = event.node.date

    return (
      <div
        className="column column is-full-mobile is-half-desktop is-half-tablet is-one-quarter-widescreen is-one-quarter-fullhd"
        key={event.node.id}
      >
        <Card
          key={event.node.id}
          detailsSlug={event.node.slug}
          eventTitle={event.node.name}
          eventDate={<Moment date={dateToFormat} format="D.M.YY HH:mm [Uhr]" />}
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
      <div className="container mt-1">
        <section className="section">
          <h4 className="title is-6">Alle Veranstaltungen Eintritt frei</h4>
          <h4 className="subtitle is-7">
            Bei allen Veranstaltungen Abstand halten u. Mundschutz tragen.
          </h4>
          <h6 className="subtitle is-6 mx-0 my-2 px-0 py-0">Monate:</h6>
          <div className="field">
            <div className="control">
              <div className="tags has-addons">{monthsFilterMenu}</div>
            </div>
          </div>
          <h6 className="subtitle is-6 mx-0 my-2 px-0 py-0">
            {data.allContentfulEvent.totalCount} Veranstaltungen:
          </h6>
          <div className="field">
            <div className="control">
              <div className="tags has-addons">{eventTypeFilterMenu}</div>
            </div>
          </div>
          <div>
            {loadedEventList.month ? (
              <h2 className="mt-3">
                Events im {loadedEventList.month}(
                {loadedEventList.loadedEvents.length})
              </h2>
            ) : null}
            {loadedEventList.type ? (
              <h2 className="mt-3">
                {loadedEventList.type}({loadedEventList.loadedEvents.length})
              </h2>
            ) : null}
          </div>
          <div className="container">
            <div className="columns is-multiline is-vcentered is-mobile is-desktop is-tablet">
              {eventList}
            </div>
            {/* <div>
              <button
                className="button is-fullwidth is-warning"
                onClick={() => loadMoreHandler()}
              >
                mehr laden
              </button>
            </div> */}
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
