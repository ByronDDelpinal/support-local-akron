/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import Header from './header';
import Footer from './footer';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './layout.css';
import 'bootstrap/dist/css/bootstrap.css';
import shareImg from '../images/support-social-card.png';

const url = typeof window !== 'undefined' ? window.location.origin : '';;

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
              property: 'og:title',
              content: data.site.siteMetadata.title,
            },
            {
              property: 'og:description',
              content: data.site.siteMetadata.description,
            },
            {
              property: 'og:image',
              content: `${url}${shareImg}`,
            },
            {
              property: 'og:url',
              content: url,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              name: 'twitter:title',
              content: data.site.siteMetadata.title,
            },
            {
              name: 'twitter:image',
              content: `${url}${shareImg}`,
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
