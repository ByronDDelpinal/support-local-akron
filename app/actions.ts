'use server';
import prisma from '@/lib/prisma';

const slugify = (text: string) =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');

export const createBusiness = async (
  prevState: {
    message: string;
  },
  formData: FormData
) => {
  const data = {
    name: formData.get('name') as string,
    website: formData.get('website') as string,
    addressLine1: formData.get('addressLine1') as string,
    addressLine2: formData.get('addressLine2') as string,
    city: formData.get('city') as string,
    state: formData.get('state') as string,
    zip: formData.get('zip') as string,
    phone: formData.get('phone') as string,
    openingDate: new Date(formData.get('openingDate') as string),
    type: formData.get('type') as string,
    image: 'https://utfs.io/f/68361dfc-7ee2-4ae8-b6d6-2ef41c8a38e6-2b90cy.jpg',
    supportSummary: formData.get('supportSummary') as string,
    supportFull: formData.get('supportFull') as string,
    businessStoryShort: formData.get('businessStoryShort') as string,
    businessStoryFull: formData.get('businessStoryFull') as string,
  };

  const business = await prisma.business.create({
    data: {
      ...data,
      slug: slugify(data.name),
    },
  });

  return {
    message: `
      Thank you! Seriously...We love our local artists, musicians, and
      businesses and we want to see them all succeed. Please, forward this
      form to everyone you know that should be listed here!
    `,
  };
};
