/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import websiteLogo from '@/public/images/website-logo.png';
import prisma from '@/lib/prisma';

interface BusinessDetailProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: BusinessDetailProps) {
  const business = await prisma.business.findUnique({
    where: {
      slug,
    },
    select: {
      name: true,
    },
  });

  return {
    title: `Support ${business?.name}`,
  };
}

function RelatedBusinesses({ category, relatedBusinesses }: any) {
  return (
    <div className="col-md-4">
      <div className="sidebar-blk">
        <h4 className="font-bold uppercase">Related Listings</h4>
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

function BusinessContact({ business }: any) {
  const { addressLine1, addressLine2, city, state, zip, phone } = business;
  return (
    <div className="col-md-4">
      <div className="sidebar-blk">
        <h4 className="font-bold uppercase">Contact Us</h4>
        <div>
          {addressLine1 && <p>{addressLine1}</p>}
          {addressLine2 && <p>{addressLine2}</p>}
          {city && (
            <p>
              {city}, {state} {zip}
            </p>
          )}
        </div>
        {phone && (
          <p>
            <strong>Phone:</strong> {phone}
          </p>
        )}
      </div>
    </div>
  );
}

export default async function BusinessDetail({
  params: { slug },
}: BusinessDetailProps) {
  const business = await prisma.business.findUnique({
    where: {
      slug,
    },
  });

  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <div className="business-detail pad-40">
      <div className="container">
        <div className="row">
          <div className="top-content">
            <div>
              <h2 className="business-name">{business.name}</h2>
              <p className="business-type">{business.type}</p>
            </div>
            <p>
              <Link
                className="flex items-center text-green hover:text-green"
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="mr-1.5 w-[50px]"
                  src={websiteLogo}
                  alt="laptop computer"
                />
                Our Website
              </Link>
            </p>
          </div>
          <div className="col-md-8">
            <Image
              src={business.image}
              alt="business logo"
              width={730}
              height={500}
              style={{ maxHeight: '500px' }}
            />
            <div>
              <div className="business-content">
                <h3 className="font-bold uppercase">Our Story</h3>
                {business.businessStoryShort}
              </div>
              <div className="business-content">
                <h3 className="font-bold uppercase">How To Support Us</h3>
                {business.supportFull}
              </div>
            </div>
          </div>
          <BusinessContact business={business} />
        </div>
      </div>
    </div>
  );
}
