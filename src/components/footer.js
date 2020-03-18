import { Link } from "gatsby"
import React, { Component } from "react"

import logoImg from "../images/support-akron-logo.png"

export class Footer extends Component {
  render() {
    return (
      <section className="footer-wrapper pad-20 bg-lightblue style-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 widget text-center">
              <Link to="/" className="brand-logo">
                <img src={logoImg} alt="brand logo" />
              </Link>
              <p className="copyright">
                <a href="mailto:kirsten@creativeeye.design">
                  Built With{" "}
                  <span aria-label="heart" role="img">
                    ❤️
                  </span>{" "}
                  By <b>Byron + Kirsten Delpinal</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Footer
