import React, { Component } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import BusinessPreview from "../components/business-preview"
import { graphql } from 'gatsby'

export class BusinessIndex extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const businesses = this.props.data.allContentfulBusinesses.nodes

    return (
      <div>
        <Helmet title={siteTitle} />
        <Layout>
        <div className="container">
          <div className="text-center pad-40">
            <h2 className="section-title">Local Businesses</h2>
          </div>
          <ul className="article-list row">
              {businesses.map(business => {
                return (
                  <li data-type={business.type} key={business.urlName} className="col-lg-6">
                    <BusinessPreview business={business} />
                  </li>
                )
              })}
            </ul>


        </div>
        </Layout>
      </div>
    )
  }
}

export default BusinessIndex

export const pageQuery = graphql`
  query LocalBusinessQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
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
`
