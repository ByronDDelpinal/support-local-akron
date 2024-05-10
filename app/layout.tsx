import type { Metadata } from 'next';
import './layout.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Josefin_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Support Local Akron - Show Your Love ❤️',
  description:
    'A place to find out how to help our local artists, musicians, and businesses.',
};

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${josefin.variable}`}>
      <body>
        <Header />
        <div className="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
