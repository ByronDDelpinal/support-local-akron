import React, { Component } from "react"
import { Link } from "gatsby"
import { INLINES } from '@contentful/rich-text-types';
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function BusinessPreview(props) {
  const MAX_LENGTH_Title = 80
  const { business } = props

  const businessSupportSummary = {
    nodeType: "document",
    data: {},
    content: business.supportSummary ? business.supportSummary.json.content : []
  }

  const businessSupportSummaryOptions = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => <OutboundLink href={node.data.uri} rel="noopener noreferrer" target="_blank">{children}</OutboundLink>,
    },
  };

  return (
    <article className="blog-listing" key={business.urlName}>
      <div className="entry-meta-content">
        <div className="entry-media">
          <Img fluid={business.image.fluid} backgroundColor={"#f4f8fb"} />
        </div>
        <h2 className="entry-title">
          <Link to={business.urlName}>
            {" "}
            {business.name > MAX_LENGTH_Title
              ? business.name
              : business.name.substring(0, MAX_LENGTH_Title)}{" "}
          </Link>
        </h2>
        <p className="business-type">{business.type}</p>
        <div className="entry-content">
          {documentToReactComponents(businessSupportSummary, businessSupportSummaryOptions)}
        </div>
      </div>

      <div className="entry-content-bottom">
        <Link to={business.urlName} className="entry-read-more">
          <span />
          Support
        </Link>
      </div>
    </article>
  )
}

export default BusinessPreview
