import React from "react"
import marker from "../images/marker.png"
import { checkPropTypes } from "prop-types"
import PropTypes from "prop-types"

const Marker = props => {
  const greatPlaceStyle = {
    position: "absolute",
    transform: "translate(-50%, -50%)",
  }
  return (
    <div style={greatPlaceStyle}>
      <img style={{ width: props.markerWidth }} src={marker} alt="Marker" />
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
    </div>
  )
}

Marker.defaultProps = {
  marker: "",
  locName: "",
  markerWidth: "50px",
}

Marker.propTypes = {
  marker: PropTypes.string,
  locName: PropTypes.string,
  markerWidth: PropTypes.string,
}

export default Marker
