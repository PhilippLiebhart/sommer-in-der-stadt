import React from "react"
import "./card.scss"
import { Link } from "gatsby"

const CardButtonLink = ({ slug, isSliderCard }) => {
  console.log(slug)

  let elem = null

  if (isSliderCard) {
    elem = (
      <Link to={slug}>
        <span className="tag is-light">Details</span>
      </Link>
    )
  } else {
    elem = <span className="tag is-light">Details</span>
  }

  return elem
}

const CardLinkHoc = props => {
  const slug = "/" + props.detailsSlug
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

  let elem = (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={`${props.imgURL}`} alt="" />
        </figure>
      </div>
      <div className="card-content card-content--overlayed">
        <div className="content">
          <ul className="mx-0 my-0">{eventTypeList}</ul>
          <div className="">
            <h6 className="title is-6 mx-0 mb-1 px-0 py-0">
              {props.eventTitle}
            </h6>
          </div>
          <div className="">
            {props.eventDate}
            <div className="is-pulled-right">
              <CardButtonLink isSliderCard={props.isSliderCard} slug={slug} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  if (!props.isSliderCard) {
    return <Link to={slug}>{elem}</Link>
  } else {
    return elem
  }
}

const Card = props => {
  return <CardLinkHoc {...props} />
}

export default Card
