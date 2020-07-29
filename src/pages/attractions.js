import React from "react"
import Layout from "../components/layout"

import "./attractions.css"
import FerrisWheel from "../components/ferrisWheel/ferrisWheel"
import { graphql } from "gatsby"

const AttractionsPage = ({ data }) => {
  return (
    <Layout>
      <div className="attractionsWrapper">
        <h1>Attraktionen und Stände</h1>

        <FerrisWheel />
      </div>
    </Layout>
  )
}

export default AttractionsPage

// export const query = graphql`
//   query AttractionsQuery {
//     allContentfulEvent {
//       totalCount
//       edges {
//         node {
//           childContentfulEventInformationRichTextNode {
//             json
//             content {
//               content {
//                 value
//               }
//             }
//           }
//           eventType
//           imgUrl {
//             fluid {
//               src
//             }
//           }
//           id
//           date(formatString: "")
//           locationName
//           name
//           slug
//           location {
//             lat
//             lon
//           }
//         }
//       }
//     }
//   }
// `
