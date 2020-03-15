import React, { Component } from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image"


// export default ({ business}) => (

//     <article className="blog-listing" key={business.slug}>
//     <div className="entry-meta-content">
//     <div className="entry-media">
//       <Img
//         fluid={business.blogImage.fluid}
//         backgroundColor={"#f4f8fb"}
//       />
//     </div>
//       <h2 className="entry-title">
//         <Link to={business.slug}>{business.blogTitle}</Link>
//       </h2>
//       <div className="entry-content">
//         <p>{business.blogShortDesc}</p>
//       </div>
//     </div>

//     <div className="entry-content-bottom">
//       <Link to={business.slug} className="entry-read-more">
//         <span />
//         Read More
//       </Link>
//     </div>
//   </article>
// )







class BusinessPreview extends Component {
    render(){
         const MAX_LENGTH = 100;
         const MAX_LENGTH_Title = 80;
         const { business } = this.props

        return(
            <article className="blog-listing" key={business.urlName}>
                <div className="entry-meta-content">
                <div className="entry-media">
                  <Img
                    fluid={business.image.fluid}
                    backgroundColor={"#f4f8fb"}
                  />
                </div>
                  <h2 className="entry-title">
                    <Link to={business.urlName}> {
                      business.name > MAX_LENGTH ? ( business.name) : ( business.name.substring(0, MAX_LENGTH_Title))
                    }   </Link>
                  </h2>
                  <div className="entry-content">
                    {
                      business.type > MAX_LENGTH ? ( business.type) : ( business.type.substring(0,MAX_LENGTH)+ '...')
                    }

                  </div>
                </div>

                <div className="entry-content-bottom">
                  <Link to={business.urlName} className="entry-read-more">
                    <span />
                    Read More
                  </Link>
                </div>
              </article>

        )
    }

}

export default BusinessPreview


