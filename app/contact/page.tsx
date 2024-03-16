'use client';
import { ContactForm } from '@/components/ContactForm';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { createBusiness } from '../actions';

const initialState = {
  message: '',
};

function SuccessMessage({ message }: { message: string }) {
  return (
    <div className="container text-center">
      <div className="wrap-contact100 ">
        <h4 className="success-msg">{message}</h4>
        <div className="col-lg-12 text-center" style={{ marginTop: '20px' }}>
          <Link href="/" className="backtohome contact100-form-btn">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState<any, FormData>(
    createBusiness,
    initialState
  );
  return (
    <div className="contactImage">
      <div className="container-contact100">
        <section className="contact-us pad-70">
          {state.message ? (
            <SuccessMessage message={state.message} />
          ) : (
            <ContactForm formAction={formAction} pending={pending} />
          )}
        </section>
      </div>
    </div>
  );
}
