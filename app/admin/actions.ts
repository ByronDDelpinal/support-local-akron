'use server';
import prisma from '@/lib/prisma';

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

  return {
    redirect: {
      destination: '/admin',
    },
  };
}
