import prisma from '@/lib/prisma';
import { BusinessCard } from '@/components/BusinessCard';

export default async function Businesses() {
  const businesses = await prisma.business.findMany();

  return (
    <div className="business-index-page">
      <div className="container">
        <div className="pad-20 text-center">
          <h2 className="section-title">{businesses.length} Local Listings</h2>
        </div>
        <ul className="article-list row">
          {businesses.map((business) => {
            return (
              <li
                data-type={business.type}
                key={business.slug}
                className="col-lg-6"
              >
                <BusinessCard business={business} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
