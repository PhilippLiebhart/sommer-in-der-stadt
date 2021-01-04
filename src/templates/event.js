import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMapReact from "google-map-react"
import EventDetails from "../components/eventDetails/eventDetails"
import Marker from "../components/marker"
import Moment from "react-moment"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const EventTemplate = ({ data, pageContext, location }) => {
  const rich = pageContext.node.childContentfulEventInformationRichTextNode.json
  const riched = documentToReactComponents(rich)

  //   const richtextJSON =
  //   event.node.childContentfulEventInformationRichTextNode.json
  // const richTextToHtml = documentToReactComponents(richtextJSON)
  const dateToFormat = pageContext.node.date
  return (
    <section className="section">
      <Layout>
        <SEO title="Event" />
        <div className="container">
          <EventDetails
            key={pageContext.node.id}
            // detailsSlug={pageContext.node.slug}
            eventTitle={pageContext.node.name}
            eventDate={
              <Moment date={dateToFormat} format="D.M.YY HH:mm [Uhr]" />
            }
            eventTypeName={pageContext.node.eventType}
            eventLocation={pageContext.node.locationName}
            locationAdress={pageContext.node.locationAdress}
            eventInfo={riched}
            imgURL={pageContext.node.imgUrl.fluid.src}
          />
          <div style={{ height: "50vh", width: "100%", display: "block" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyCrFJ7AhxG30WBcTLrm10qLCcpByXjutxI",
              }}
              defaultCenter={{
                lat: pageContext.node.location.lat,
                lng: pageContext.node.location.lon,
              }}
              defaultZoom={16}
            >
              <Marker
                lat={pageContext.node.location.lat}
                lng={pageContext.node.location.lon}
                locName={pageContext.node.locationName}
              />
            </GoogleMapReact>
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default EventTemplate
