import React from "react"
import "./card.scss"
import { Link } from "gatsby"

const Card = props => {
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
    <Link to={slug}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={`${props.imgURL}`} alt="" />
          </figure>
        </div>
        <div className="card-content card-content--overlayed">
          <div className="content">
            <ul className="mx-0 my-0">{eventTypeList}</ul>
            <div>
              <h6 className="title is-6">{props.eventTitle}</h6>
            </div>

            <div>
              {props.eventDate}
              <div className="is-pulled-right">
                <button className="button is-small is-outlined">Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
