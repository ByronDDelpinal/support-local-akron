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

class BusinessTemplate extends Component {
  render() {
    console.log(this.props.data)
    const business = this.props.data.business
    const siteurl = this.props.data.site.siteMetadata.url
    const twitterhandle = this.props.data.site.siteMetadata.twitterHandle
    const Imageurl = this.props.data.contentfulPortfolio.image
    const post = this.props.data.contentfulBusinesses.edges
    const disqusShortname = "myclicks-1"
    const disqusConfig = {
      identifier: business.id,
      title: business.name,
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
    let SliderImage

    if (!Imageurl) {
      SliderImage = (
        <Img fluid={business.image.fluid} backgroundColor={"#f4f8fb"} />
      )
    } else {
      SliderImage = (
        <Slider {...settings}>
          {Imageurl.map(({ file }, index) => {
            return (
              <div>
                <img src={file.url} alt="modhera-sun-temple" />
              </div>
            )
          })}
        </Slider>
      )
    }
    return (
      <Layout>
        <Helmet title={`${business.name}`} />
        <div className="inner-blog-post pad-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7">
                <div className="entry-media">{SliderImage}</div>
                <div className="post-content">
                  <h2 className="section-headline"> {business.name} </h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: "TESTING",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-4 offset-md-1 ">
                <div className="sidebar-blk">
                  <ul className="">
                    <li>TESTING MORE</li>
                    <li>TESTING MORE</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <Share socialConfig={{config: { socialConfigss, }, }} /> */}

            <Share
              socialConfig={{
                ...socialConfigss.site.siteMetadata.twitterhandletitle,
                config: {
                  url: `${siteurl}${socialConfigss.slug}`,
                  title: `${socialConfigss.title}`,
                },
              }}
            />
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
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
        id
      }
      name
      type
      urlName
    }

    allContentfulBusinesses(limit: 5) {
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

/* NAHHHH */
// childContentfulPortfolioBlogDescriptionTextNode{
//   childMarkdownRemark{
//     html
//   }
// }
