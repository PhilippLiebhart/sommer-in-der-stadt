import React from "react"
import "./eventCard.css"

const EventCard = props => {
  return (
    <div className="card">
      <div className="card_left">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png"
          alt=""
        />
      </div>
      <div className="card_right">
        <h1>{props.eventTitle}</h1>
        <div className="card_right__details">
          <ul>
            <li>Art: {props.typeName}</li>
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
  typeName: "Konzert",
  eventLocation: "Haidhausen Museum",
  eventInfo:
    "INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT INFO TEXT ",
  imgUrl: "",
}

export default EventCard
