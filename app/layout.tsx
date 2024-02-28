import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokedex07',
  description: 'All Pokemons with their stats, types, and more',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Navbar />
        <div className='relative'>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
