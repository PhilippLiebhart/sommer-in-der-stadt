import React from "react"
import Layout from "../components/layout"
import EventCardSimple from "../components/eventCardSimple/eventCardSimple"

const EventsPage = props => {
  return (
    <Layout>
      <div className="attractionsWrapper">
        <h1>EVENTs page</h1>

        <EventCardSimple />
        <EventCardSimple />
        <EventCardSimple />
        <EventCardSimple />
        <EventCardSimple />
        <EventCardSimple />
      </div>
    </Layout>
  )
}

export default EventsPage
