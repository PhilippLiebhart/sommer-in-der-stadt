import React from "react"
import "./card.scss"
import { Link } from "gatsby"

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://picsum.photos/1280/960" alt="Lorem Picsum" />
        </figure>
      </div>
      <div className="card-content card-content--overlayed">
        <div className="content">
          EVENTTYPE
          <br /> Cassandra Steen
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          <br />
          <Link to="/">Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Card
