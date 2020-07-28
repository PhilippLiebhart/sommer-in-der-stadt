import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Card from "../components/card/card"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <Layout>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title mt-6">Servus und Herzlich Willkommen!</h1>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h5 className="subtitle is-5">Die HIGHlights</h5>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-full">
              <h5 className="subtitle is-5">Kommende Wochen</h5>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Card />
            </div>
            <div className="column">
              <Card />
            </div>
            <div className="column">
              <Card />
            </div>
            <div className="column">
              <Card />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

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
