import React from "react"
import { Link } from "gatsby"

import "./eventCardSimple.css"

const EventCard = props => {
  const slug = "/" + props.detailsSlug

  return (
    <div className="simpleCard">
      <div className="card_top">
        <img src={`${props.imgURL}`} alt="" />
      </div>
      <div className="card_bottom">
        <h1 className="eventCardSimpleTitle">{props.eventTitle}</h1>
        <div className="card_bottom__details">
          <div><ul>
            <li><span>Was? </span>{props.eventTypeName}</li>
            <li><span>Wann? </span>{props.eventDate}</li>
            <li><span>Wo? </span>{props.eventLocation}</li>
            <li><span>Dauer: </span>{props.eventLength}</li>
          </ul></div>


          <div className="card_bottom__review">
            <h6>Info: </h6>
            <p>{props.eventInfo}</p>
          </div>
          <div className="card_bottom__button">
            {props.detailsSlug ? <Link to={slug}>Go to event</Link> : null}
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
  eventTypeName: "Konzert",
  eventLocation: "Haidhausen Museum",
  eventInfo:
    "INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT ",
  imgUrl: "",
}

export default EventCard
