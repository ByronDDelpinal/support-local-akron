import React, { Component } from "react"
import Layout from "../components/layout"
// import Sidebar from "../components/sidebar"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { DiscussionEmbed } from "disqus-react"
import Share from "../components/Share"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class BusinessTemplate extends Component {
  render() {
    const business = this.props.data.contentfulBusinesses;
    const siteurl = this.props.data.site.siteMetadata.url;
    const twitterhandle = this.props.data.site.siteMetadata.twitterHandle;
    const Imageurl = business.image;
    const post = this.props.data.allContentfulBusinesses.nodes;

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
                <div className="entry-media">
                  <Img fluid={business.image.fluid} backgroundColor={"#f4f8fb"} />
                </div>
                <div className="post-content">
                  <h2 className="section-headline"> {business.name} </h2>
                  <div className="business-content">
                    <h3>Our Story</h3>
                    {documentToReactComponents(businessStory)}
                  </div>
                  <div className="business-content">
                    <h3>How To Support Us</h3>
                    {documentToReactComponents(businessSupportFull)}
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
      name
      story {
        json
      }
      supportFull {
        json
      }
      type
      urlName
    }

    allContentfulBusinesses(limit: 5) {
      nodes {
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
        name
        type
        urlName
      }
    }
  }
`

/* NAHHHH */
// childContentfulPortfolioBlogDescriptionTextNode{
//   childMarkdownRemark{
//     html
//   }
// }
