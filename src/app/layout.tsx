import type { Metadata } from 'next';
import './globals.css';

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
        {children}
      </body>
    </html>
  );
}
