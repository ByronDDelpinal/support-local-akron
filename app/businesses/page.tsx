import data from '@/data.json';
import { BusinessCard } from '@/components/BusinessCard';

export default function Businesses() {
  return (
    <div className="business-index-page">
      <div className="container">
        <div className="text-center pad-20">
          <h2 className="section-title">{data.businesses.length} Local Listings</h2>
        </div>
        <ul className="article-list row">
          {data.businesses.map(business => {
            return (
              <li
                data-type={business.type}
                key={business.urlName}
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