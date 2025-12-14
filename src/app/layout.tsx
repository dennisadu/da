import type { Metadata } from 'next';
import { Antonio } from 'next/font/google';
import './global.css';
import { clsxm } from '@/utils/clsxm';
import Layout from '@/components/Layout/Layout';

const antonio = Antonio({
  variable: '--font-antonio',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dennis Adu',
  description: 'Musician, trumpet player, composer and bandleader',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsxm(antonio.variable)}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
