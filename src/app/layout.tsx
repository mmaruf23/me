import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layouts/Navbar';
import ContactInfo from '@/components/layouts/ContactInfo';

export const metadata: Metadata = {
  title: 'Me',
  description: 'My Portofolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased relative h-svh flex flex-col bg-gray-800`}>
        <div className="flex-1 overflow-y-scroll scrollbar-hide">
          <Navbar />
          <ContactInfo />
          {children}
        </div>
      </body>
    </html>
  );
}
