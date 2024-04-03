import { signOutAction } from '@/auth/actions';
import prisma from '@/lib/prisma';

export default async function Admin() {

  const businesses = await prisma.business.findMany({
    where: {
      approved: false,
    },
  });

  return (
    <div className="container py-3">
      <h1 className="text-center">Admin Panel</h1>
      <h2 className="text-center">
        Businesses awaiting approval: {businesses.length}
      </h2>

      <form action={signOutAction}>
        <button type="submit">Sign Out</button>
      </form>

      <ul>
        {businesses.map((business) => {
          return <li key={business.id}>{business.name}</li>;
        })}
      </ul>
    </div>
  );
}
