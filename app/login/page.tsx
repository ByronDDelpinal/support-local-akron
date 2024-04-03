import { auth } from '@/auth';
import { PATH_ADMIN } from '@/auth/paths';
import { LoginForm } from '@/components/LoginForm';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    redirect(PATH_ADMIN);
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
}
