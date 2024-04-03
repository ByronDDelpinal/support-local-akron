'use client';

import { KEY_CALLBACK_URL } from '@/auth';
import { signInAction } from '@/auth/actions';
import { useSearchParams } from 'next/navigation';
import { useFormState } from 'react-dom';

export function LoginForm() {
  const params = useSearchParams();
  const [response, action] = useFormState(signInAction, undefined);

  return (
    <form action={action}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />
      <input
        type="hidden"
        name={KEY_CALLBACK_URL}
        value={params.get(KEY_CALLBACK_URL) ?? ''}
      />
      <button type="submit">Sign In</button>
      <div>
        {response === 'CredentialsSignin' && (
          <p>Invalid username or password</p>
        )}
      </div>
    </form>
  );
}
