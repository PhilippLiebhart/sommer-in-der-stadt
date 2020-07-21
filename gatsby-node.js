const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const eventTemplate = path.resolve(`src/templates/event.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query EventsQuery {
        allEventsJson {
          edges {
            node {
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
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allEventsJson.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.slug}`,
        component: eventTemplate,
        context: {
          node: edge.node,
        },
      })
    })
  })
}
