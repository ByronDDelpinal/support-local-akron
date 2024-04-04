/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import websiteLogo from '@/public/images/website-logo.png';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | Support Local Akron',
};

interface BusinessDetailProps {
  params: {
    slug: string;
  };
}

function ApproveButton({ businessId }: { businessId: string }) {
  return (
    <form method="post">
      <input type="hidden" name="businessId" value={businessId} />
      <button type="submit">Approve</button>
    </form>
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

  if (!business) notFound();

  return (
    <div className="inner-blog-post pad-40">
      <div className="container">
        <div className="row">
          <div className="post-content top-content">
            <div className="post-left-content">
              <ApproveButton businessId={business.id} />
              <h2 className="section-headline">{business.name}</h2>
              <p className="business-type">{business.type}</p>
            </div>
            <p className="business-type">
              <Link
                className="flex items-center text-green hover:text-green"
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="website-logo"
                  src={websiteLogo}
                  alt="laptop computer"
                />
                Our Website
              </Link>
            </p>
          </div>
          <div className="col-md-12">
            <div className="entry-media">
              <Image
                src={business.image}
                alt="business logo"
                width={730}
                height={500}
                style={{ maxHeight: '500px' }}
              />
            </div>
            <div className="post-content">
              <div className="business-content">
                <h3>Our Story</h3>
                {business.businessStoryShort}
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
