var dotenv = require("dotenv")
dotenv.config()

const { spaceId, accessToken } = process.env
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
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
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
      options: { prefixes: [`/portfolio/*`] },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `sanket_patel_me`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-160723331-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
  ],
}
