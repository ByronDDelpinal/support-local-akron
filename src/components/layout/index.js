/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import shareImg from '../images/support-social-card.png';

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
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content:
                'local business, shop local, akron, ohio, small business, entrepreneur',
            },
            {
              name: 'og:title',
              property: 'og:title',
              content: data.site.siteMetadata.title,
            },
            {
              name: 'og:description',
              property: 'og:description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'og:image',
              property: 'og:image',
              content: shareImg,
            },
            {
              name: 'og:url',
              property: 'og:url',
              content: 'https://supportlocalakron.com',
            },
            {
              name: 'twitter:title',
              property: 'twitter:title',
              content: data.site.siteMetadata.title,
            },
            {
              name: 'twitter:description',
              property: 'twitter:description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'twitter:image',
              property: 'twitter:image',
              content: shareImg,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <div className="main-content">{children}</div>

        <Footer />
      </>
    )}
  />
);

export default Template;
