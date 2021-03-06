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
    <section className="section">
      <div className="container">
        <div className="column is-full-mobile is-full-desktop is-half-tablet is-one-quarter-widescreen is-one-quarter-fullhd">
          <div className="detailsImg">
            <img src={`${props.imgURL}`} alt="" />
          </div>
          <div>
            <h1 className="title is-5 mb-0 mt-3">{props.eventTitle}</h1>
            {eventTypeList}
          </div>
          <div>
            <h6 className="title is-6 mb-1 mt-5">Wann?</h6>
            <div className="box is-inline-block px-3 py-1">
              <h5 className="subtitle is-6 mx-0 my-0 px-0 py-0">
                {props.eventDate}
              </h5>
            </div>

            <h6 className="title is-6 mb-1">Wo?</h6>
            <div className="box is-inline-block px-3 py-1 mb-5">
              <h5 className="subtitle is-6 mx-0 my-0 px-0 py-0">
                {" "}
                {props.eventLocation}, {props.locationAdress}
              </h5>
            </div>
          </div>

          <div>
            <h2 className="title is-5 mb-2">Info:</h2>
            {props.eventInfo}
          </div>
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
