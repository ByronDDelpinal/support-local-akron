var dotenv = require("dotenv")
dotenv.config()

const { accessToken, spaceId, trackingId } = process.env

module.exports = {
  siteMetadata: {
    title: `Support Local Akron - Show Your Love ❤️`,
    description: `A place to find out how to help our local artists, musicians, and businesses.`,
    author: `Byron & Kirsten Delpinal`,
    twitterHandle: "@ByronDelpinal / @CreativeEyeDesigns",
    url: `https://supportlocalakron.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/support-akron-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId,
        accessToken,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/business/*`] },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId,
        head: true,
      },
    },
  ],
}
