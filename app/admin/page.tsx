import { signOutAction } from '@/auth/actions';
import prisma from '@/lib/prisma';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const metadata: Metadata = {
  title: 'Admin | Support Local Akron',
};

export default async function Admin() {
  const businesses = await prisma.business.findMany({
    orderBy: {
      createdAt: 'asc',
    },
    where: {
      approved: false,
    },
  });

  return (
    <div className="container py-3">
      <div className="flex justify-between">
        <div>
          <h1>Admin Panel</h1>
          <h2>Businesses awaiting approval: {businesses.length}</h2>
        </div>
        <form action={signOutAction}>
          <button
            type="submit"
            className="rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700"
          >
            Sign Out
          </button>
        </form>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {businesses.map((business) => {
            return (
              <TableRow key={business.id}>
                <TableCell>
                  <Link href={`/admin/businesses/${business.slug}`}>
                    {business.name}
                  </Link>
                </TableCell>
                <TableCell>{business.type}</TableCell>
                <TableCell>
                  {new Date(business.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <button className="rounded bg-green px-4 py-2 text-sm font-bold text-white">
                    Approve
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
