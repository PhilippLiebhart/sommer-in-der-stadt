const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://kulturtage.muenchen-gschichtn.de`,
    title: `Kulturtage Au/Haidhausen`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kulturtage AU/Haidhausen`,
        short_name: `Kulturtage`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fav.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/events/`],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `egg5a20ipss7`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
