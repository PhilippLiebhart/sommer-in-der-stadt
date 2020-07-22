import React from "react"
import "./eventCardSimple.css"

const EventCard = props => {
  return (
    <div className="simpleCard">
      <div className="card_top">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png"
          alt=""
        />
      </div>
      <div className="card_bottom">
        <h1 className="eventCardSimpleTitle">{props.eventTitle}</h1>
        <div className="card_bottom__details">
          <ul>
            <li>Art: {props.eventKind}</li>
            <li>Datum: {props.eventDate}</li>
            <li>Ort: {props.eventLocation}</li>
            <li>Dauer: {props.eventLength}</li>
          </ul>

          <div className="card_bottom__review">
            {/* <p>{props.eventInfo}</p> */}
          </div>
          <div className="card_bottom__button">
            <a
              href="https://www.youtube.com/watch?v=ot6C1ZKyiME"
              target="_blank"
              rel="noreferrer"
            >
              Go to event
            </a>
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
  eventKind: "Konzert",
  eventLocation: "Haidhausen Museum",
  eventInfo:
    "INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT ",
  imgUrl: "",
}

export default EventCard
