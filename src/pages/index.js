import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Share from "../components/Share"
import shareImg from "../images/support-social-card.png"

// import SEO from "../components/seo"
import Img from "gatsby-image"
import BusinessPreview from "../components/business-preview"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons"

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const businesses = this.props.data.allContentfulBusinesses.nodes
    // const instaimg = this.props.data.allInstaNode.edges
    const coverphoto = this.props.data.coverImg
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };
    return (
      <Layout>
        <Helmet title={siteTitle} />
        <div className="herosection">
          <div id="#top" className="cover animated">
            <Img
              title="Cover image"
              alt="Air Balloon in Nature"
              fluid={coverphoto.childImageSharp.fluid}
              style={{
                position: "relative",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <div className="overlay">
              <div className="center">
                <h1 className="name">
                  <b>SUPPORT LOCAL AKRON</b>
                </h1>
                <h5 className="greetings">
                  Show your love to our amazing local businesses
                </h5>
              </div>
            </div>
          </div>

          <div className="indexpage">
            <div className="right-section blog-post pad-70">
              <div className="container">
                <div className="pad-70">
                  <h2 className="portfolio-title text-center  section-title">
                    Just A Few Of Many Awesome Local Businesses
                  </h2>
                  <div className="col-md-10 offset-md-1 ">
                    <div className="row">
                      {businesses.map(business => {
                        return (
                          <div key={business.id} className="col-md-6">
                            <BusinessPreview business={business} />
                          </div>
                        )
                      })}
                      <div className="see-all-wrapper">
                        <Link to="/business" className="see-all contact100-clear-btn">
                          <span />
                          See All
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pad-70">
                  <h2 className="portfolio-title text-center  section-title">
                    Help Spread The Word!
                  </h2>
                  <div className="col-md-10 offset-md-1 ">
                    <div className="row social-share-row">
                      <Share
                        socialConfig={{
                          config: {
                            url: "https://supportlocalakron.com",
                            quote: "Don't distance yourself from Akron! Join me in continuing to support our local businesses. #SupportLocalAkron",
                            hashtag: "SupportLocalAkron",
                            title: this.props.data.site.siteMetadata.title,
                          },
                        }}
                      />
                      <img
                        className="social-share-image"
                        src={shareImg}
                        alt="card with logo that encourages sharing the message"
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="pad-70">
                  <h2 className="portfolio-title text-center  section-title">
                    Instagram Feed
                  </h2>
                  <div className="col-md-10 offset-md-1 ">
                    <ul className="row insta-blk">
                      {instaimg.map(({ node }) => {
                        return (
                          <li key={node.id} className="insta-img-cnt">
                            <Img fixed={node.localFile.childImageSharp.fixed} />
                            <p className="insta-likes-comm">
                              {" "}
                              <span className="insta-like">
                                {" "}
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  className="icon"
                                />
                                {node.likes}
                              </span>{" "}
                              <span className="insta-comment">
                                <FontAwesomeIcon
                                  className="icon"
                                  icon={faComment}
                                />
                                {node.comments}
                              </span>
                            </p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query siteIndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    coverImg: file(relativePath: { eq: "northside-akron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulBusinesses(limit: 4) {
      nodes {
        id
        name
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
        supportSummary {
          json
        }
        type
        urlName
        website
      }
    }
  }
`
/* NAHHHH */
// allInstaNode(limit: 8) {
//   edges {
//     node {
//       id
//       likes
//       comments
//       mediaType
//       preview
//       original
//       timestamp
//       caption
//       localFile {
//         childImageSharp {
//           fixed(width: 200, height: 200) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     }
//   }
// }
