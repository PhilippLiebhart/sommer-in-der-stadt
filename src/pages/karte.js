import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMapReact from "google-map-react"
import Marker from "../components/marker"

const KartePage = () => {
  const [location, setLocation] = useState()

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        setLocation(position)
      })
    }
  }, [])

  return (
    <Layout>
      <SEO title="Karte" />
      <h4>
        Wenn du mir erlaubst, sag ich dir so ganz grob ungefähr wo du stehst ;).
      </h4>
      {location && location.coords && (
        <p>
          Latitude is: {location.coords.latitude} <br />
          Longitude is: {location.coords.longitude}
        </p>
      )}
      {location && location.coords && (
        <div style={{ height: "70vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCrFJ7AhxG30WBcTLrm10qLCcpByXjutxI",
            }}
            defaultZoom={17}
          >
            <Marker
              lat={location.coords.latitude}
              lng={location.coords.longitude}
              text="Du bist hier"
            />
          </GoogleMapReact>
        </div>
      )}
    </Layout>
  )
}

export default KartePage
