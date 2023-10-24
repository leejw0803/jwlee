import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/_views/style/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Jungwoo's blog`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-grey200`}>{children}</body>
    </html>
  );
}
