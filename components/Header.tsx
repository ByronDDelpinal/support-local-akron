import Link from 'next/link';
import logoImg from '../public/images/support-akron-logo.png';
import Image from 'next/image';

export default function Header() {
  return (
    <section className="header-wrapper">
      <div className="container">
        <div className="flex gap-[90px]">
          <div className="w-full lg:w-1/4">
            <Link href="/" className="brand-logo">
              <Image
                src={logoImg}
                alt="brand logo"
                style={{ height: 'auto' }}
              />
            </Link>
          </div>
          <div className="w-full lg:w-3/4">
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
