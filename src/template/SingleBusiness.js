import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { Component } from 'react';

import { INLINES } from '@contentful/rich-text-types';
import layout from '../components/layout';
// import Sidebar from "../components/sidebar"
import websiteLogo from '../images/website-logo.png';

class BusinessTemplate extends Component {
  render() {
    const business = this.props.data.contentfulBusinesses;

    // Creates a document from a Contenful Rich Text Field
    const businessStory = {
      nodeType: 'document',
      data: {},
      content: business.story ? business.story.json.content : [],
    };

    // Creates a document from a Contenful Rich Text Field
    const businessSupportFull = {
      nodeType: 'document',
      data: {},
      content: business.supportFull ? business.supportFull.json.content : [],
    };

    // Overrides the way we handle the inline hypertext item in a document. This
    // adds outbound linking so we can track if traffic is actually going to
    // the businesses signing up
    const businessSupportOptions = {
      renderNode: {
        [INLINES.HYPERLINK]: (node, children) => (
          <OutboundLink
            href={node.data.uri}
            rel="noopener noreferrer"
            target="_blank"
          >
            {children}
          </OutboundLink>
        ),
      },
    };

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
                      alt="laptop computer"
                    />
                    <OutboundLink
                      className="business-website"
                      href={business.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Our Website
                    </OutboundLink>
                  </p>
                </div>
                <div className="entry-media">
                  <Img
                    fluid={business.image.fluid}
                    backgroundColor={'#f4f8fb'}
                  />
                </div>
                <div className="post-content">
                  <div className="business-content">
                    <h3>Our Story</h3>
                    {documentToReactComponents(
                      businessStory,
                      businessSupportOptions
                    )}
                  </div>
                  <div className="business-content">
                    <h3>How To Support Us</h3>
                    {documentToReactComponents(
                      businessSupportFull,
                      businessSupportOptions
                    )}
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
          </div>
        </div>
      </Layout>
    );
  }
}

export default BusinessTemplate;

export const pageQuery = graphql`
  query businessQuery($urlName: String) {
    contentfulBusinesses(urlName: { eq: $urlName }) {
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
`;
