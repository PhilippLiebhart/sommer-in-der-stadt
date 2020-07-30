import React from "react"
import { Link } from "gatsby"

import "./eventCard.scss"

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
          <div>
            <ul>
              <li>
                <span>Was? </span>
                {props.eventTypeName}
              </li>
              <li>
                <span>Wann? </span>
                {props.eventDate}
              </li>
            </ul>
            <ul>
              <li>
                <span>Wo? </span>
                {props.eventLocation}
              </li>
              <li>
                <span>Dauer: </span>
                {props.eventLength}
              </li>
            </ul>
          </div>

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
