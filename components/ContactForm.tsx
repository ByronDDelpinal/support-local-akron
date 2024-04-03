/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import ContactImg from '@/public/images/img-01.png';
import { StateDropdown, TextField } from '@/components/InputFields';

interface ContactFormProps {
  formAction: (payload: FormData) => void;
  pending: boolean;
  state: any;
}

export function ContactForm({ formAction, pending, state }: ContactFormProps) {
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
            <TextField label="Address line 1" id="addressLine1" />
            <TextField label="Address line 2" id="addressLine2" />
            <TextField label="City" id="city" />
            <StateDropdown id="state" />
            <TextField label="Zip Code" id="zip" />
            <TextField label="Phone Number" id="phone" type="tel" />
            <TextField label="Opening Date" id="openingDate" type="date" />
            <div className="field half">
              <label htmlFor="image">Organization Photo (Max 4.5MB)*</label>
              <input
                type="file"
                name="image"
                id="image"
                className="input100"
                accept=".png, .jpg, .jpeg"
                required
              />
              {state.imageSizeError && (
                <span className="text-red-500">{state.imageSizeError}</span>
              )}
              <span className="focus-input100"></span>
            </div>
            <TextField
              label="What Type Of Organization Are You?"
              id="type"
              required
            />
            <TextField
              label="What's Your Story? (140 Characters)"
              id="businessStoryShort"
              limit={140}
              required
            />
            <TextField
              label="What's Your Story? (Unabridged)"
              id="businessStoryFull"
              type="textarea"
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
