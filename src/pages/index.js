import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import EventCard from "../components/eventCard/eventCard"
import EventCardSimple from "../components/eventCardSimple/eventCardSimple"

// Import carousel files
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const IndexPage = ({ data }) => {
  console.log("DATA INDEX", data)

  var settings = {
    dots: true,
    centerMode: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 600,
    autoplay: false,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const sliderData = data.allEventsJson.edges.map(event => {
    console.log("HULAAAA", event.node.imgURL)
    return (
      <EventCard
        key={event.node.id}
        detailsSlug={event.node.slug}
        eventTitle={event.node.name}
        eventDate={event.node.openingHours.day}
        eventLength="to define"
        eventTypeName={event.node.typeName}
        eventLocation={event.node.location.name}
        eventInfo={event.node.information}
        imgURL={event.node.imgURL}
      />
    )
  })

  // ===========

  const eventList = data.allEventsJson.edges.map(event => {
    return (
      <EventCardSimple
        key={event.node.id}
        detailsSlug={event.node.slug}
        eventTitle={event.node.name}
        eventDate={event.node.openingHours.day}
        eventLength="to define"
        eventTypeName={event.node.typeName}
        eventLocation={event.node.location.name}
        eventInfo={event.node.information}
        imgURL={event.node.imgURL}
      />
    )
  })

  return (
    <Layout>
      <h1>Nächste Veranstaltungen:</h1>

      <Slider {...settings}>{sliderData}</Slider>

      <div className="eventListWrapper">{eventList}</div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query EventsQueryIndex {
    allEventsJson {
      edges {
        node {
          imgURL
          id
          name
          location {
            name
            latitude
            longitude
          }
          information
          openingHours {
            day
            end
            start
          }
          typeName
          slug
        }
      }
    }
  }
`
