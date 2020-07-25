import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import EventCard from "../components/eventCard/eventCard"
import EventCardSimple from "../components/eventCardSimple/eventCardSimple"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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

  const sliderData = data.allContentfulEvent.edges.map(event => {
    console.log("HULAAAA", event.node.childContentfulEventInformationRichTextNode.json)
    const rich = event.node.childContentfulEventInformationRichTextNode.json;
    const riched = documentToReactComponents(rich)
    return (
      <EventCard
        key={event.node.id}
        detailsSlug={event.node.slug}
        eventTitle={event.node.name}
        eventDate={event.node.date}
        eventLength="to define"
        eventTypeName={event.node.eventType}
        eventLocation={event.node.locationName}
        eventInfo={riched}
        imgURL={event.node.imgUrl.fluid.src}
      />
    )
  })

  // ===========

  const eventList = data.allContentfulEvent.edges.map(event => {
    return (
      <EventCardSimple
        key={event.node.id}
        detailsSlug={event.node.slug}
        eventTitle={event.node.name}
        eventDate={event.node.date}
        eventLength="to define"
        eventTypeName={event.node.eventType}
        eventLocation={event.node.locationName}
        eventInfo={JSON.stringify(event.node.childContentfulEventInformationRichTextNode)}
        imgURL={event.node.imgUrl.fluid.src}
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
    allContentfulEvent {
      totalCount
      edges {
        node {
          childContentfulEventInformationRichTextNode {
            json
            content {
              content {
                value
              }
            }
          }
          eventType
          imgUrl {
            fluid {
              src
            }
          }
          id
          date(formatString: "")
          locationName
          name
          slug
          location {
            lat
            lon
          }
        }
      }
    }
  }
`
