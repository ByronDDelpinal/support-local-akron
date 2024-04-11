'use server';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function approveBusiness(prevState: any, formData: FormData) {
  const businessId = formData.get('businessId') as string;

  await prisma.business.update({
    where: {
      id: businessId,
    },
    data: {
      approved: true,
    },
  });

  redirect('/admin');
}
