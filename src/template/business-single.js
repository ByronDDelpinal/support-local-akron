import React, { Component } from "react"
import Layout from "../components/layout"
// import Sidebar from "../components/sidebar"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Img from "gatsby-image"
import Share from "../components/Share"
import { INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import websiteLogo from "../images/website-logo.png"

class BusinessTemplate extends Component {
  render() {
    const business = this.props.data.contentfulBusinesses;
    const siteurl = this.props.data.site.siteMetadata.url;
    const twitterhandle = this.props.data.site.siteMetadata.twitterHandle;

    const businessStory = {
      nodeType: "document",
      data: {},
      content: business.story ? business.story.json.content : []
    }

    const businessSupportFull = {
      nodeType: "document",
      data: {},
      content: business.supportFull ? business.supportFull.json.content : []
    }

    const businessSupportOptions = {
      renderNode: {
        [INLINES.HYPERLINK]: (node, children) => <OutboundLink href={node.data.uri} rel="noopener noreferrer" target="_blank">{children}</OutboundLink>,
      },
    };

    const socialConfigss = {
      site: {
        siteMetadata: { siteurl, twitterhandle },
      },

      title: business.name,
      slug: business.urlName,
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <Layout>
        <Helmet title={`${business.name}`} />
        <div className="inner-blog-post pad-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="post-content top-content">
                  <div class="post-left-content">
                    <h2 className="section-headline"> {business.name} </h2>
                    <p className="business-type">{business.type}</p>
                  </div>
                  <p className="business-type website">
                    <img
                        className="website-logo"
                        src={websiteLogo}
                        alt="image of laptop computer"
                      />
                    <OutboundLink className="business-website" href={business.website} target="_blank" rel="noopener noreferrer">Our Website</OutboundLink>
                  </p>
                </div>
                <div className="entry-media">
                  <Img fluid={business.image.fluid} backgroundColor={"#f4f8fb"} />
                </div>
                <div className="post-content">
                  <div className="business-content">
                    <h3>Our Story</h3>
                    {documentToReactComponents(businessStory, businessSupportOptions)}
                  </div>
                  <div className="business-content">
                    <h3>How To Support Us</h3>
                    {documentToReactComponents(businessSupportFull, businessSupportOptions)}
                  </div>
                </div>
              </div>
              {/* Sidebar Stuff Goes Here, need to change back to col-lg-7 col-md-7 */}
              {/* <div className="col-md-4 offset-md-1 ">
                <div className="sidebar-blk">
                  <ul className="">
                    <li>TESTING MORE</li>
                    <li>TESTING MORE</li>
                  </ul>
                </div>
              </div> */}
            </div>
            {/* <Share socialConfig={{config: { socialConfigss, }, }} /> */}

            {/* <Share
              socialConfig={{
                ...socialConfigss.site.siteMetadata.twitterhandletitle,
                config: {
                  url: `${siteurl}${socialConfigss.slug}`,
                  title: `${socialConfigss.title}`,
                },
              }}
            /> */}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BusinessTemplate

export const pageQuery = graphql`
  query businessQuery($urlName: String) {
    site {
      siteMetadata {
        url
        twitterHandle
      }
    }

    contentfulBusinesses(urlName: {eq: $urlName}) {
      id
      image {
        file {
          url
        }
        fluid(maxWidth: 1800) {
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      name
      story {
        json
      }
      supportFull {
        json
      }
      type
      urlName
      website
    }

    allContentfulBusinesses(limit: 5) {
      nodes {
        image {
          file {
            url
          }
          fluid(maxWidth: 1800) {
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
        name
        type
        urlName
        website
      }
    }
  }
`
