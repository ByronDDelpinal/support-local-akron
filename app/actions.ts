'use server';
import data from '@/data.json';

export const createBusiness = async (
  prevState: {
    message: string;
  },
  formData: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  console.log('formData', formData);

  data.businesses.push({
    id: Math.random().toString(36).substring(7),
    category: formData.get('category') as string,
    name: formData.get('name') as string,
    image: '/images/contact-bg.jpg',
    supportSummary: formData.get('supportSummary') as string,
    supportFull: formData.get('supportFull') as string,
    type: formData.get('type') as string,
    slug: formData.get('slug') as string,
    website: formData.get('website') as string,
    story: formData.get('story') as string,
  });

  return {
    message: `
      Thank you! Seriously...We love our local artists, musicians, and
      businesses and we want to see them all succeed. Please, forward this
      form to everyone you know that should be listed here!
    `,
  };
};
