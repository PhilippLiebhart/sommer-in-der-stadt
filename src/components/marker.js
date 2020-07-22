import React from "react"
import marker from "../images/marker.png"

const Marker = () => {
  return (
    <>
      <img style={{ width: "50px" }} src={marker} alt="Marker" />
      <div
        style={{
          width: "100px",
          padding: "15px",
          backgroundColor: "gray",
          color: "white",
        }}
      >
        Du bist hier!
      </div>
    </>
  )
}

export default Marker
