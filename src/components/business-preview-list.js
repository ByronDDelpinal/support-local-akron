import React, { useState } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import BusinessPreview from "./business-preview"

function BusinessPreviewList(props) {
  return (
    <ul className="article-list row">
      {props.businesses.map(business => {
        return (
          <li
            data-type={business.type}
            key={business.urlName}
            className="col-lg-6"
          >
            <BusinessPreview business={business} />
          </li>
        )
      })}
    </ul>
  )
}

export default BusinessPreviewList
