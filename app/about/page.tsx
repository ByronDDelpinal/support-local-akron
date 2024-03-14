/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import aboutImg from '../../public/images/about.jpg';
import Image from 'next/image';

export default function About() {
  return (
    <section className="about-us pad-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="image-container">
              <Image src={aboutImg} alt="about" style={{ height: 'auto' }} />
              <p className="photo-credit">
                Photo Credit:{' '}
                <Link href="https://www.shanewynn.com/">Shane Wynn</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <h4>Why'd We Do This?</h4>
            <p>
              As the impact of the COVID-19 (aka Coronavirus) pandemic continues
              to evolve and transform our everyday lives, we’ve seen our local
              artists, musicians, businesses, and entrepreneurs suffer. With the
              cancellation of many community events and the motions for social
              distancing, these organizations have seen a sudden decline in
              demand for their services. We’ve created this site to give our
              local Akron organizations a platform to showcase all the great
              products and services they still have to offer so that we can
              continue to support them in these uncertain times.
            </p>
            <p>
              For more information about COVID-19, check out these great
              resources:
            </p>
            <ul>
              <li>
                <Link
                  href="https://ohiochannel.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  The Ohio Channel
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  World Health Organization (WHO)
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Centers for Disease Control & Prevention (CDC)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
