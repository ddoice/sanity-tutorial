import { ReactNode } from 'react';
import type { Metadata } from 'next';
import '../styles/globals.css'; // Import Tailwind CSS
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A blog built with Next.js and Sanity',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        <main className="max-w-7xl mx-auto py-12 flex gap-4 flex-col sm:px-4">
          <header>
            <Link href="/" className='bg-gradient-to-r from-orange-300 to-purple-400 bg-clip-text text-transparent font-bold pb-16'>Home</Link>
          </header>
          {children}
          </main>
      </body>
    </html>
  );
}
