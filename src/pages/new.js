import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import React from "react"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import LayoutDefault from "../components/layout/layout--default"
import Card from "../components/card/card"
import Slider from "react-slick"

const NewPage = ({ data }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
  }

  const sliderData = data.allContentfulEvent.edges
    .filter(event => !event.node.topEvent)
    .map(event => {
      const rich = event.node.childContentfulEventInformationRichTextNode.json
      const riched = documentToReactComponents(rich)
      console.log(event)
      return (
        <div>
          <Card key={event.node.id} />
        </div>
      )
    })

  return (
    <LayoutDefault>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title mt-6">Servus und Herzlich Willkommen!</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="columns">
          <div className="column">
            <Card />
          </div>
        </div>
      </div>
    </LayoutDefault>
  )
}

export default NewPage

export const query = graphql`
  query IndexPageQuery {
    allContentfulEvent {
      totalCount
      edges {
        node {
          topEvent
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
