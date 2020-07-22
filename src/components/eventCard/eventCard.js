import React from "react"
import { Link } from "gatsby"

import "./eventCard.css"

const EventCard = props => {
  const slug = "/" + props.detailsSlug

  return (
    <div className="card">
      <div className="card_left">
        <img src={`${props.imgURL}`} alt="" />
      </div>
      <div className="card_right">
        <h1>{props.eventTitle}</h1>
        <div className="card_right__details">
          <ul>
            <li>Art: {props.eventTypeName}</li>
            <li>Datum: {props.eventDate}</li>
          </ul>
          <ul>
            <li>Ort: {props.eventLocation}</li>
            <li>Dauer: {props.eventLength}</li>
          </ul>

          <div className="card_right__review">
            <p>{props.eventInfo}</p>
          </div>
          <div className="card_right__button">
            <Link to={slug}>Go to event</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

EventCard.defaultProps = {
  eventTitle: "Blumentopf",
  eventDate: "2020-08-10",
  eventLength: "3 Stunden",
  typeName: "Konzert",
  eventLocation: "Haidhausen Museum",
  eventInfo:
    "INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT ",
  imgUrl: "",
}

export default EventCard
