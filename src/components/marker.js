import React from "react"
import marker from "../images/marker.png"
import { checkPropTypes } from "prop-types"

const Marker = props => {
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
        {props.locName}
      </div>
    </>
  )
}

export default Marker
