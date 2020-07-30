import React from "react"
import { Link } from "gatsby"

import "./eventDetails.scss"

const EventCard = props => {
  const eventTypeList = props.eventTypeName.map((event, index) => {
    return (
      <li
        style={{
          display: "inline",
          backgroundColor: "orange",
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
    <section class="section">
      <div className="content">
        <div>
          <img src={`${props.imgURL}`} alt="" />
        </div>
        <div>
          <h1 className="title is-5 my-0">{props.eventTitle}</h1>
          {eventTypeList}
        </div>
        <div>
          <h6 className="title is-6 mb-1 mt-5">Wann?</h6>
          <div className="box is-inline-block px-3 py-1">
            <h5 className="subtitle is-5 mx-0 my-0 px-0 py-0">
              {props.eventDate}
            </h5>
          </div>

          <h6 className="title is-6 mb-1">Wo?</h6>
          <div className="box is-inline-block px-3 py-1 mb-5">
            <h5 className="subtitle is-5 mx-0 my-0 px-0 py-0">
              {" "}
              {props.eventLocation}
            </h5>
          </div>
        </div>

        <div>
          <h2 className="title is-5 mb-2">Info:</h2>
          {props.eventInfo}
        </div>
      </div>
    </section>
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
