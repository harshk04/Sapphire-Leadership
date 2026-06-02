import type { Metadata } from 'next';
import { Hanken_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sapphire Leadership & Advisory',
  description:
    "School consulting and advisory for CBSE affiliation to international curriculum integration — strategic blueprint for the world's next premier schools.",
  metadataBase: new URL('https://example.com'),
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'Sapphire Leadership & Advisory',
    description:
      'School consulting & advisory for new institutions and transformations.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-sans [font-family:var(--font-inter)]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
