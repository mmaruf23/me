import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layouts/Navbar';

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
      <body className={`antialiased relative min-h-svh flex flex-col`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
