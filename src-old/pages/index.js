import { graphql, Link } from 'gatsby';
import React from 'react';

import BusinessPreview from '../../components/business-preview';
import Layout from '../../components/layout';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Share from '../../components/Share';
import shareImg from '../images/support-social-card.png';

class IndexPage extends React.Component {
  render() {
    const businesses = this.props.data.allContentfulBusinesses.nodes;

    return (
      <Layout>
        <div className="herosection">

          <div className="indexpage">
            <div className="right-section blog-post pad-70">
              <div className="container">
                <div className="pad-70">
                  <h2 className="portfolio-title text-center  section-title">
                    Just A Few Of Many Awesome Local Listings
                  </h2>
                  <div className="col-md-10 offset-md-1 ">
                    <div className="row">
                      {businesses.map(business => {
                        return (
                          <div key={business.id} className="col-md-6">
                            <BusinessPreview business={business} />
                          </div>
                        );
                      })}
                      <div className="see-all-wrapper">
                        <Link
                          to="/business"
                          className="see-all contact100-clear-btn"
                        >
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
                    <p>
                      We're all in this together. Please share this site with
                      anyone you know.{' '}
                      <b>
                        Encourage local artists, musicians, and business owners
                        to join
                      </b>{' '}
                      and tell us how we can support them.{' '}
                      <b>Encourage your friends to browse </b> and find new
                      things they'll love and new local things to support!
                    </p>
                    <div className="row social-share-row">
                      <Share
                        socialConfig={{
                          config: {
                            url: 'https://supportlocalakron.com',
                            quote:
                              "Don't distance yourself from Akron! Join me in continuing to support our local artists, musicians, and businesses.",
                            hashtag: 'SupportLocalAkron',
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
                <p className="photo-credit">
                  Header Photo Credit:{' '}
                  <OutboundLink href="http://northsidemarketplace.com/">
                    Northside Marketplace
                  </OutboundLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

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
`;
