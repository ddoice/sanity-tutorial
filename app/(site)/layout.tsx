import { ReactNode } from 'react';
import type { Metadata } from 'next';
import '../../styles/globals.css'; // Import Tailwind CSS
import Link from 'next/link';
import { getPages } from '@/sanity/sanity-utils';

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A blog built with Next.js and Sanity',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pages = await getPages();
  console.log('pages', pages);
  return (
    <html lang="en">
      <body>
        
        <main className="max-w-7xl mx-auto py-12 flex gap-4 flex-col sm:px-4">
          <header className='flex justify-between items-center'>
              <Link href="/" className='bg-gradient-to-r from-orange-300 to-purple-400 bg-clip-text text-transparent font-bold pb-16'>Home</Link>
            <div className='flex items-center gap-3 text-sm text-gray-200'>
              {pages.map((page) => (
                <Link key={page._id} href={`/${page.slug}`} className='hover:underline'>{page.title}</Link>
              ))}
            </div>
          </header>
          {children}
          </main>
      </body>
    </html>
  );
}
