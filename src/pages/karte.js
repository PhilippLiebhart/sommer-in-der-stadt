import { graphql } from "gatsby"
import GoogleMapReact from "google-map-react"
import moment from "moment"
import React from "react"
import Footer from "../components/footer"
import Marker from "../components/marker"
import Navigation from "../components/navigation/navigation"
import SEO from "../components/seo"

const KartePage = ({ data }) => {
  // const groupBy = (array, key) => {
  //   return array.reduce((result, currentValue) => {
  //     ;(result[currentValue[key]] = result[currentValue[key]] || []).push(
  //       currentValue
  //     )

  //     return result
  //   }, {})
  // }

  // console.log(data.allContentfulEvent.nodes)
  // console.log(groupBy(data.allContentfulEvent.nodes, "locationName"))

  const marker = []

  const today = moment()

  data.allContentfulEvent.nodes
    .filter(event => 0 > today.diff(moment(event.date)))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach(event => {
      marker.push(
        <Marker
          key={event.id}
          markerWidth={"20px"}
          lat={event.location.lat}
          lng={event.location.lon}
          locName={event.locationName}
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
          <div className="google-map-react-wrapper">
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

      nodes {
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
`
