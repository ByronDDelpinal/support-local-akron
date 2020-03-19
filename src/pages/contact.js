import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import ContactImg from '../images/img-01.png';
import layout from '../components/layout';

// The form on this page works because it's deployed to Netlify and they
// do some magic around it that makes it work. If you're not deploying there,
// you may need to handle the form submit on your own.
export class Contact extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div className="contactImage">
        <div className="container-contact100">
          <Helmet title={siteTitle} />
          <Layout>
            <section className="contact-us pad-70">
              <div className="container">
                <div className="col-lg-12">
                  <div className="wrap-contact100">
                    <div class="contact100-pic">
                      <img src={ContactImg} alt="IMG" />
                    </div>
                    <form
                      name="contact"
                      method="post"
                      content-type="multipart/form-data"
                      data-netlify="true"
                      className="contact-form"
                      data-netlify-honeypot="bot-field"
                      action="/success"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <input type="hidden" name="bot-field" />
                      <div>
                        <h5>List Your Local Organization</h5>
                        <p>
                          If you're a local artist, musician, or business, let
                          us know! We're hoping to expand the site to allow
                          folks to list themselves, but until then, this form
                          will have to do. Please fill out the information
                          below, we'll get your business added ASAP. No local
                          business is too small, large, obscure, or unique to be
                          listed here. Every thing and every one matters. If the
                          form doesn't work, or you'd prefer to answer these
                          questions via email, please do so with{' '}
                          <a href="mailto:kirsten@creativeeye.design?cc=byronddelpinal@gmail.com">
                            this link
                          </a>
                          .
                        </p>
                      </div>
                      <div className="field half">
                        <label htmlFor="name">Organization Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="input100"
                          required
                        />
                        <span class="focus-input100"></span>
                      </div>
                      <div className="field half">
                        <label htmlFor="email">Organization Email</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="input100"
                          required
                        />
                        <span class="focus-input100"></span>
                      </div>
                      <div className="field half">
                        <label htmlFor="website">
                          Organization Website (Include http://)
                        </label>
                        <input
                          type="text"
                          name="website"
                          id="website"
                          className="input100"
                          required
                        />
                        <span class="focus-input100"></span>
                      </div>
                      <div className="field half">
                        <label htmlFor="image">Organization Photo</label>
                        <p>
                          Our image uploader broke{' '}
                          <span aria-label="frowning face" role="img">
                            🙁
                          </span>
                          . I'm working on it, I promise! For now, either{' '}
                          <a href="mailto:kirsten@creativeeye.design?cc=byronddelpinal@gmail.com">
                            email it
                          </a>{' '}
                          to us or we'll take our best guess at it.
                        </p>
                        <span class="focus-input100"></span>
                      </div>
                      <div className="field half">
                        <label htmlFor="type">
                          What Type Of Organization Are You?
                        </label>
                        <input
                          type="text"
                          name="type"
                          id="type"
                          className="input100"
                          required
                        />
                        <span class="focus-input100"></span>
                      </div>
                      <div className="field">
                        <label htmlFor="story">What's Your Story?</label>
                        <textarea name="story" id="story" required></textarea>
                      </div>
                      <div className="field half">
                        <label htmlFor="support-summary">
                          How Can The Community Support You During This Time
                          (140 Characters)?
                        </label>
                        <input
                          type="text"
                          name="support-summary"
                          id="support-summary"
                          className="input100"
                          required
                        />
                        <span class="focus-input100"></span>
                      </div>
                      <div className="field">
                        <label htmlFor="support-full">
                          How Can The Community Support You During This Time
                          (Unabridged)?
                        </label>
                        <textarea
                          name="support-full"
                          id="support-full"
                          required
                        ></textarea>
                      </div>
                      <ul className="actions">
                        <li>
                          <input
                            type="submit"
                            value="Send"
                            className="contact100-form-btn special"
                          />
                        </li>
                        <li>
                          <input
                            type="reset"
                            value="Clear"
                            className="contact100-clear-btn"
                          />
                        </li>
                      </ul>
                    </form>
                    <p className="photo-credit">
                      Background Photo Credit:{' '}
                      <OutboundLink href="https://www.shanewynn.com/">
                        Shane Wynn
                      </OutboundLink>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
        </div>
      </div>
    );
  }
}

export default Contact;

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
