import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { ConvexClientProvider } from '@/components/ConvexClientProvider';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import SyncUserWithConvex from '@/components/SyncUserWithConvex';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ticket Platform',
  description: 'Buy ticket from this Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <ConvexClientProvider>
          <ClerkProvider>
            <ThemeProvider
              themes={['light', 'dark']}
              attribute='class'
              // defaultTheme='light'
              // enableSystem
              disableTransitionOnChange
            >
              <Header />
              <SyncUserWithConvex />
              {children}
            </ThemeProvider>
          </ClerkProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
