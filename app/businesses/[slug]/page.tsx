/* eslint-disable react/no-unescaped-entities */
import data from '@/data.json';
import Image from 'next/image';
import Link from 'next/link';
import websiteLogo from '@/public/images/website-logo.png';

export async function generateMetadata({ slug }: { slug: string }) {
  const business = data.businesses.find((b) => b.slug === slug);

  return {
    title: `Support ${business?.name}`,
  };
}

function RelatedBusinesses({ category, relatedBusinesses }: any) {
  return (
    <div className="col-md-4">
      <div className="sidebar-blk">
        <h4>Related Listings</h4>
        <p>
          While you're here, be sure to check out these other{' '}
          <span className="category">{category}</span> listings!
        </p>
        <ul className="related-business-list">
          {relatedBusinesses.map((relatedBusiness: any) => (
            <li key={relatedBusiness.id}>
              {/* <Link href={relatedBusiness.urlName}>
                <Image
                  className="related-image"
                  src={relatedBusiness.image.fluid}
                />
              </Link> */}
              <div className="related-information">
                <Link href={`/businesses/${relatedBusiness.slug}`}>
                  <span>{relatedBusiness.name}</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function BusinessDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const business = data.businesses.find((b) => b.slug === slug);

  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <div className="inner-blog-post pad-40">
      <div className="container">
        <div className="row">
          <div className="post-content top-content">
            <div className="post-left-content">
              <h2 className="section-headline"> {business.name} </h2>
              <p className="business-type">{business.type}</p>
            </div>
            <p className="business-type website">
              <Image
                className="website-logo"
                src={websiteLogo}
                alt="laptop computer"
              />
              <Link
                className="business-website"
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Website
              </Link>
            </p>
          </div>
          <div className="col-md-12">
            <div className="entry-media">
              {/* <Image
                src={business.image.fluid}
                objectFit="none"
              /> */}
            </div>
            <div className="post-content">
              <div className="business-content">
                <h3>Our Story</h3>
                {business.story}
              </div>
              <div className="business-content">
                <h3>How To Support Us</h3>
                {business.supportFull}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
