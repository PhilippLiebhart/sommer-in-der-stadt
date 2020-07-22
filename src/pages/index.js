import React from "react"

import Layout from "../components/layout"
import EventCard from "../components/eventCard/eventCard"
import EventCardSimple from "../components/eventCardSimple/eventCardSimple"

const IndexPage = () => (
  <Layout>
    <h1>Nächste Veranstaltungen:</h1>

    <EventCard />
    <EventCardSimple />
    <EventCardSimple />
    <EventCardSimple />
    <EventCardSimple />
  </Layout>
)

export default IndexPage
