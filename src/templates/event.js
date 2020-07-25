import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMapReact from "google-map-react"
import EventCard from "../components/eventCard/eventCard"
import Marker from "../components/marker"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


const EventTemplate = ({ data, pageContext, location }) => {
  console.log("[[PAGE CONTECT IN EVENT TEMPLATE]]", pageContext)
  const rich = pageContext.node.childContentfulEventInformationRichTextNode.json;
  const riched = documentToReactComponents(rich)
  return (
    <Layout>
      <SEO title="Event" />
      <h1>{pageContext.node.name}</h1>
      <h4>@{pageContext.node.locationName}</h4>
      <h5>Information: {pageContext.node.information}</h5>
      <EventCard
        key={pageContext.node.id}
        detailsSlug={pageContext.node.slug}
        eventTitle={pageContext.node.name}
        eventDate={pageContext.node.date}
        eventLength="to define"
        eventTypeName={pageContext.node.eventType}
        eventLocation={pageContext.node.locationName}
        eventInfo={riched}
        imgURL={pageContext.node.imgUrl.fluid.src}
      />
      <div style={{ height: "70vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCrFJ7AhxG30WBcTLrm10qLCcpByXjutxI",
          }}
          defaultCenter={{
            lat: pageContext.node.location.lat,
            lng: pageContext.node.location.lon,
          }}
          defaultZoom={17}
        >
          <Marker
            lat={pageContext.node.location.lat}
            lng={pageContext.node.location.lon}
          />
        </GoogleMapReact>
      </div>
    </Layout>
  )
}

export default EventTemplate
