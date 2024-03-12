/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import ContactImg from '@/public/images/img-01.png';
import Link from 'next/link';
import { TextField } from '@/components/TextField';

export default function Contact() {
  return (
    <div className="contactImage">
      <div className="container-contact100">
        <section className="contact-us pad-70">
          <div className="container">
            <div className="col-lg-12">
              <div className="wrap-contact100">
                <div className="contact100-pic">
                  <Image src={ContactImg} alt="IMG" />
                </div>
                <form
                  name="contact"
                  method="post"
                  className="contact-form"
                  action="/success"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <h5>List Your Local Organization</h5>
                    <p>
                      If you're a local artist, musician, or business, let us
                      know! We're hoping to expand the site to allow folks to
                      list themselves, but until then, this form will have to
                      do. Please fill out the information below, we'll get your
                      business added ASAP. No local business is too small,
                      large, obscure, or unique to be listed here. Every thing
                      and every one matters. If the form doesn't work, or you'd
                      prefer to answer these questions via email, please do so
                      with{' '}
                      <a href="mailto:kirsten@creativeeye.design?cc=byronddelpinal@gmail.com">
                        this link
                      </a>
                      .
                    </p>
                  </div>
                  <TextField label="Organization Name" id="name" required />
                  <TextField label="Organization Email" id="email" required />
                  <TextField
                    label="Organization Website (Include http://)"
                    id="website"
                    required
                  />
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
                    <span className="focus-input100"></span>
                  </div>
                  <TextField
                    label="What Type Of Organization Are You?"
                    id="type"
                    required
                  />
                  <TextField
                    label="What's Your Story?"
                    id="story"
                    type="textarea"
                    required
                  />
                  <TextField
                    label={
                      'How Can The Community Support You During This Time (140 Characters)?'
                    }
                    id="support-summary"
                    required
                  />
                  <TextField
                    label={
                      'How Can The Community Support You During This Time (Unabridged)?'
                    }
                    id="support-full"
                    type="textarea"
                    required
                  />
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
                  <Link href="https://www.shanewynn.com/">Shane Wynn</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
