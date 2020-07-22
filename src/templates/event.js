import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMapReact from "google-map-react"
import EventCard from "../components/eventCard/eventCard"
import Marker from "../components/marker"

const EventTemplate = ({ data, pageContext, location }) => {
  return (
    <Layout>
      <SEO title="Event" />
      <h1>{pageContext.node.name}</h1>
      <h4>@{pageContext.node.location.name}</h4>
      <h5>Information: {pageContext.node.information}</h5>
      <EventCard />
      <div style={{ height: "70vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCrFJ7AhxG30WBcTLrm10qLCcpByXjutxI",
          }}
          defaultCenter={{
            lat: pageContext.node.location.latitude,
            lng: pageContext.node.location.longitude,
          }}
          defaultZoom={17}
        >
          <Marker
            lat={pageContext.node.location.latitude}
            lng={pageContext.node.location.longitude}
          />
        </GoogleMapReact>
      </div>
    </Layout>
  )
}

export default EventTemplate
