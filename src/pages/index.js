import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import Moment from "react-moment"
import moment from "moment"
// Moment.globalMoment = moment
import React, { useState } from "react"
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

  const today = moment()

  console.log(
    "HAHAHAHA",
    data.allContentfulEvent.edges.filter(
      event => 0 > today.diff(moment(event.node.date))
    )
  )

  const allEvents = data.allContentfulEvent.edges
    .filter(event => 0 > today.diff(moment(event.node.date)))
    .sort((a, b) => new Date(a.node.date) - new Date(b.node.date))

  console.log("BUUUU", allEvents)

  const [loadedEventList, setLoadedEventList] = useState({
    allEvents,
    loadedEvents: allEvents.slice(0, 8),
    loadCount: 0,
  })

  // const sortEvents = () => {
  //   let myArr = loadedEventList.allEvents
  //   let sortedEvents = myArr.sort(
  //     (a, b) => new Date(a.node.date) - new Date(b.node.date)
  //   )

  //   setLoadedEventList({ ...loadedEventList, loadedEvents: sortedEvents })
  // }

  const loadMoreHandler = () => {
    // const start = 0
    const end = loadedEventList.loadCount + 5
    const updatedLoadedEvents = loadedEventList.allEvents.slice(0, end)

    setLoadedEventList({
      ...loadedEventList,
      loadedEvents: updatedLoadedEvents,
      loadCount: end,
    })
  }

  const sliderData = loadedEventList.allEvents
    .sort((a, b) => new Date(a.node.date) - new Date(b.node.date))
    .filter(event => event.node.topEvent)
    .map(event => {
      const richtextJSON =
        event.node.childContentfulEventInformationRichTextNode.json
      const richTextToHtml = documentToReactComponents(richtextJSON)
      const dateToFormat = event.node.date
      return (
        <Card
          key={event.node.id}
          detailsSlug={event.node.slug}
          eventTitle={event.node.name}
          eventDate={<Moment date={dateToFormat} format="D.M.YY HH:mm [Uhr]" />}
          eventLength="to define"
          topEvent={event.node.topEvent}
          eventTypeName={event.node.eventType}
          eventLocation={event.node.locationName}
          eventInfo={richTextToHtml}
          imgURL={event.node.imgUrl.fluid.src}
        />
      )
    })

  // EVENTS MAP START ----
  let eventData = loadedEventList.loadedEvents.map(event => {
    const richtextJSON =
      event.node.childContentfulEventInformationRichTextNode.json
    const richTextToHtml = documentToReactComponents(richtextJSON)
    const dateToFormat = event.node.date

    return (
      <div
        className="column is-full-mobile is-half-desktop is-half-tablet is-one-quarter-widescreen is-one-quarter-fullhd"
        key={event.node.id}
      >
        <Card
          detailsSlug={event.node.slug}
          eventTitle={event.node.name}
          eventDate={<Moment date={dateToFormat} format="D.M.YY HH:mm [Uhr]" />}
          eventLength="to define"
          topEvent={event.node.topEvent}
          eventTypeName={event.node.eventType}
          eventLocation={event.node.locationName}
          eventInfo={richTextToHtml}
          imgURL={event.node.imgUrl.fluid.src}
        />
      </div>
    )
  })
  // ---- EVENTS MAP ENDE |||

  return (
    <Layout>
      {/* <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title mt-5">Servus und Herzlich Willkommen!</h1>
            </div>
          </div>
        </div>
      </section> */}
      <section className="section mt-6 mb-1 py-2">
        <div className="container">
          <div className="columns">
            <div className="column is-full">
              <h5 className="subtitle is-5">Die Highlights</h5>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <Slider {...settings}>{sliderData}</Slider>
      </div>
      <section className="section mt-6 mb-0 py-0">
        <div className="container">
          <div className="columns">
            <div className="column is-full">
              <h5 className="subtitle is-5">Kommende Wochen</h5>
            </div>
          </div>
          <div className="columns is-multiline is-vcentered is-mobile is-desktop is-tablet">
            {eventData}
            <div>
              <button
                className="button is-fullwidth is-warning"
                onClick={() => loadMoreHandler()}
              >
                mehr laden
              </button>
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
