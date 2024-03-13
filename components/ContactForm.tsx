/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import ContactImg from '@/public/images/img-01.png';
import { TextField } from '@/components/TextField';

interface ContactFormProps {
  formAction: (payload: FormData) => void;
  pending: boolean;
}

export function ContactForm({ formAction, pending }: ContactFormProps) {
  return (
    <div className="container">
      <div className="col-lg-12">
        <div className="wrap-contact100">
          <div className="contact100-pic">
            <Image src={ContactImg} alt="IMG" />
          </div>
          <form className="contact-form" action={formAction}>
            <div>
              <h5>List Your Local Organization</h5>
              <p>
                If you're a local artist, musician, or business, let us know!
                We're hoping to expand the site to allow folks to list
                themselves, but until then, this form will have to do. Please
                fill out the information below, we'll get your business added
                ASAP. No local business is too small, large, obscure, or unique
                to be listed here. Every thing and every one matters. If the
                form doesn't work, or you'd prefer to answer these questions via
                email, please do so with{' '}
                <a href="mailto:kirsten@creativeeye.design?cc=byronddelpinal@gmail.com">
                  this link
                </a>
                .
              </p>
            </div>
            <TextField label="Organization Name" id="name" required />
            <TextField
              label="Organization Website (Include http://)"
              id="website"
              type="url"
              required
            />
            <div className="field half">
              <label htmlFor="image">Organization Photo</label>
              <input
                type="file"
                name="image"
                id="image"
                className="input100"
                required
              />
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
              id="supportSummary"
              limit={140}
              required
            />
            <TextField
              label={
                'How Can The Community Support You During This Time (Unabridged)?'
              }
              id="supportFull"
              type="textarea"
              required
            />
            <div className="actions">
              <input
                type="submit"
                value="Send"
                className="contact100-form-btn special"
                disabled={pending}
              />
              <input type="reset" value="Clear" className="btn-outline" />
            </div>
          </form>
          <p className="photo-credit">
            Background Photo Credit:{' '}
            <Link href="https://www.shanewynn.com/">Shane Wynn</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
