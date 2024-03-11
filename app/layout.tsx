import type { Metadata } from "next";
import './layout.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Support Local Akron - Show Your Love ❤️',
  description: 'A place to find out how to help our local artists, musicians, and businesses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
