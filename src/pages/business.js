import React, { Component } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import BusinessPreview from "../components/business-preview"
import { graphql } from 'gatsby'

export class BusinessIndex extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const post = this.props.data.contentfulBusinesses.edges

    return (
      <div>
        <Helmet title={siteTitle} />
        <Layout>
        <div className="container">
          <div className="text-center pad-40">
            <h2 className="section-title">Local Businesses</h2>
          </div>
          <ul className="article-list row">
              {post.map(business => {
                return (
                  <li key={business.slug} className="col-lg-6">
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
        image {
          id
        }
        name
        type
        urlName
      }
    }
  }
`
