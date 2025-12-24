import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Khurram Jiwani | Technical Product Manager',
  description:
    'Technical Product Manager with 7+ years of experience leading cross-functional teams to deliver impactful products. Expertise in B2B SaaS, platform engineering, and DevOps.',
  keywords: [
    'Product Manager',
    'Technical Product Manager',
    'B2B SaaS',
    'Platform Engineering',
    'DevOps',
    'Khurram Jiwani',
  ],
  authors: [{ name: 'Khurram Jiwani' }],
  openGraph: {
    title: 'Khurram Jiwani | Technical Product Manager',
    description:
      'Technical Product Manager with 7+ years of experience leading cross-functional teams to deliver impactful products.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
