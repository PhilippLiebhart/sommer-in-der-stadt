import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMapReact from "google-map-react"
import Marker from "../components/marker"
import Footer from "../components/footer"
import Navigation from "../components/navigation/navigation"
import moment from "moment"

const KartePage = ({ data }) => {
  // const [location, setLocation] = useState()

  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(position => {
  //       setLocation(position)
  //     })
  //   }
  // }, [])

  const marker = []

  console.log(data.allContentfulEvent.edges)

  const today = moment()
  const allEvents = data.allContentfulEvent.edges
    .filter(event => 0 > today.diff(moment(event.node.date)))
    .sort((a, b) => new Date(a.node.date) - new Date(b.node.date))
    .forEach(event => {
      marker.push(
        <Marker
          key={event.node.id}
          markerWidth={"20px"}
          lat={event.node.location.lat}
          lng={event.node.location.lon}
          locName={event.node.locationName}
        />
      )
    })

  return (
    <>
      <SEO title="Karte" />
      <header className="header">
        <Navigation />
      </header>
      <main>
        <div className="container-fluid">
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyCrFJ7AhxG30WBcTLrm10qLCcpByXjutxI",
              }}
              defaultCenter={{
                lat: 48.1322963,
                lng: 11.5941888,
              }}
              defaultZoom={16}
            >
              {marker}
            </GoogleMapReact>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default KartePage

export const query = graphql`
  query KartePageQuery {
    allContentfulEvent {
      totalCount
      edges {
        node {
          id
          topEvent
          eventType
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
