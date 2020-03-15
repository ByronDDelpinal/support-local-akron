import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class BusinessPreview extends Component {
  render() {
    const MAX_LENGTH_Title = 80
    const { business } = this.props

    const businessSupportSummary = {
      nodeType: "document",
      data: {},
      content: business.supportSummary ? business.supportSummary.json.content : []
    }

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
            {documentToReactComponents(businessSupportSummary)}
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
}

export default BusinessPreview
