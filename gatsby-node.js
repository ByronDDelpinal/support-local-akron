const path = require("path")
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
  {
    allContentfulBusinesses {
      nodes {
        id
        name
        image {
          file {
            url
          }
          fluid(maxWidth: 1800) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
        type
        urlName
      }
    }
  }
  `).then(result => {
    result.data.allContentfulBusinesses.nodes.forEach(business => {
      createPage({
        path: business.urlName,
        component: path.resolve(`./src/template/business-single.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          name: business.name,
          image: business.image,
          urlName: business.urlName,
          type: business.type
        },
      })
    })
  })
}
