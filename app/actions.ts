'use server';
import prisma from '@/lib/prisma';
import { put } from '@vercel/blob';

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
    imageSizeError: string;
  },
  formData: FormData
) => {
  const image = formData.get('image') as File;
  // server upload limit is 4.5MB
  if (image.size > 4.5 * 1024 * 1024) {
    return {
      imageSizeError: 'Image is too large. Please upload an image under 4.5MB.',
    };
  }

  const blob = await put(image.name, image, { access: 'public' });

  const data = {
    name: formData.get('name') as string,
    website: formData.get('website') as string,
    addressLine1: formData.get('addressLine1') as string,
    addressLine2: formData.get('addressLine2') as string,
    city: formData.get('city') as string,
    state: formData.get('state') as string,
    zip: formData.get('zip') as string,
    phone: formData.get('phone') as string,
    openingDate: formData.get('openingDate') ? new Date(formData.get('openingDate') as string) : undefined,
    type: formData.get('type') as string,
    image: blob.url,
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
