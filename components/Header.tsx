import Link from 'next/link';
import logoImg from '../public/images/support-akron-logo.png';
import Image from 'next/image';

export default function Header() {
  return (
    <section className="header-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 text-left">
            <Link href="/" className="brand-logo">
              <Image
                src={logoImg}
                alt="brand logo"
                style={{ height: 'auto' }}
              />
            </Link>
          </div>
          <div className="col-lg-9 col-md-12 text-right">
            <nav id="main-menu" className="text-right">
              <ul>
                <li>
                  <Link href="/about/">Purpose</Link>
                </li>
                <li>
                  <Link href="/business/">Local Listings</Link>
                </li>
                <li>
                  <Link href="/contact/">Get Listed</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
