import prisma from '@/lib/prisma';
import { BusinessCard } from '@/components/BusinessCard';
import FilterBar from '@/components/FilterBar';

export default async function Businesses({ searchParams: { sortOrder } }: any) {
  let query: any = {};
  if (sortOrder) {
    query.orderBy = {
      name: sortOrder,
    };
  }

  const businesses = await prisma.business.findMany({
    ...query,
    where: {
      approved: true,
    },
  });

  return (
    <div className="business-index-page">
      <div className="container">
        <div className="pad-20 text-center">
          <h2 className="section-title">{businesses.length} Local Listings</h2>
        </div>
        <FilterBar categories={[]} />
        <ul className="article-list row">
          {businesses.map((business) => {
            return (
              <li key={business.slug} className="col-lg-6">
                <BusinessCard business={business} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
