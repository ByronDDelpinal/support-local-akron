import React, { Component } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import aboutImg from "../images/about.jpg"

export class About extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    return (
      <div>
        <Helmet title={siteTitle} />
        <Layout>
          <section className="about-us pad-70">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="image-container">
                    <img src={aboutImg} alt="about" />
                    <p className="photo-credit">
                      Photo Credit:{" "}
                      <OutboundLink href="https://www.shanewynn.com/">
                        Shane Wynn
                      </OutboundLink>
                    </p>
                  </div>
                </div>
                <div className="col-lg-8">
                  <h4>Why'd We Do This?</h4>
                  <p>
                    As the impact of the COVID-19 (aka Coronavirus) pandemic
                    continues to evolve and transform our everyday lives, we’ve
                    seen our local artists, musicians, businesses, and
                    entrepreneurs suffer. With the cancellation of many
                    community events and the motions for social distancing,
                    these organizations have seen a sudden decline in demand for
                    their services. We’ve created this site to give our local
                    Akron organizations a platform to showcase all the great
                    products and services they still have to offer so that we
                    can continue to support them in these uncertain times.
                  </p>
                  <p>
                    For more information about COVID-19, check out these great
                    resources:
                  </p>
                  <ul>
                    <li>
                      <OutboundLink
                        href="https://ohiochannel.org/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        The Ohio Channel
                      </OutboundLink>
                    </li>
                    <li>
                      <OutboundLink
                        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        World Health Organization (WHO)
                      </OutboundLink>
                    </li>
                    <li>
                      <OutboundLink
                        href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Centers for Disease Control & Prevention (CDC)
                      </OutboundLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    )
  }
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
