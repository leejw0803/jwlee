import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Component, Provider } from './_shared';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '이정우 | jwlee.in',
  description: '프론트엔드 개발자 이정우의 포트폴리오 사이트',
  metadataBase: new URL('https://jwlee.in'),
  openGraph: {
    title: '이정우 | jwlee.in',
    description: '프론트엔드 개발자 이정우의 포트폴리오와 작업 공간',
    url: 'https://jwlee.in',
    siteName: 'jwlee.in',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // public 폴더 안의 대표 이미지
        width: 1200,
        height: 630,
        alt: '이정우 포트폴리오 - jwlee.in',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '이정우 | jwlee.in',
    description: '프론트엔드 개발자 이정우의 포트폴리오',
    images: ['/og-image.png'],
  },
  authors: [{ name: '이정우', url: 'https://jwlee.in' }],
  creator: '이정우',
  publisher: 'jwlee.in',
  keywords: [
    '이정우',
    'jwlee.in',
    '프론트엔드 개발자',
    '포트폴리오',
    '웹 개발',
    'React',
    'Next.js',
  ],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Provider.ThemeProvider disableTransitionOnChange>
          <Component.Module.Header />
          <main className="flex-1 bg-background/60">{children}</main>
        </Provider.ThemeProvider>
      </body>
    </html>
  );
}
