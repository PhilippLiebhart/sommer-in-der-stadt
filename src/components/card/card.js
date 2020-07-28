import React from "react"
import "./card.scss"
import { Link } from "gatsby"

const Card = props => {
  const eventTypeList = props.eventTypeName.map((event, index) => {
    return (
      <li
        style={{
          display: "inline",
          backgroundColor: "gray",
          padding: "0px 7px",
          fontSize: "12px",
          margin: "2px",
        }}
        key={index}
      >
        {event}
      </li>
    )
  })

  const slug = "/" + props.detailsSlug

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={`${props.imgURL}`} alt="" />
        </figure>
      </div>
      <div className="card-content card-content--overlayed">
        <div className="content">
          <ul>{eventTypeList}</ul>
          <br /> {props.eventTitle}
          <br />
          {props.eventDate}
          {/* <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
          <br />
          {props.detailsSlug ? <Link to={slug}>Go to event</Link> : null}
        </div>
      </div>
    </div>
  )
}

export default Card
