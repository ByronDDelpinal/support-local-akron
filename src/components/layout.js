/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
import 'bootstrap/dist/css/bootstrap.css';
import logoImg from "../images/support-akron-logo.png"



const Template = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description

          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description,
            },
            {
              name: "keywords",
              content: "local business, shop local, akron, ohio, small business, entrepreneur"
            },
            {
              name: "og:title",
              content: data.site.siteMetadata.title
            },
            {
              name: "og:description",
              content: data.site.siteMetadata.description
            },
            {
              name: "og:image",
              content: logoImg
            },
            {
              name: "og:url",
              content: "https://supportlocalakron.com"
            },
            {
              name: "twitter:title",
              content: data.site.siteMetadata.title
            },
            {
              name: "twitter:description",
              content: data.site.siteMetadata.description
            },
            {
              name: "twitter:image",
              content: logoImg
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <div className="main-content">
        {children}
        </div>

        <Footer />
      </>
    )}
  />
)

export default Template