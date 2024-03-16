import prisma from '../lib/prisma';
import data from '../data.json';

async function main() {
  for (const business of data.businesses) {
    await prisma.business.upsert({
      where: { slug: business.slug },
      update: {},
      create: business,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
