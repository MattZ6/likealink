import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = 'Like a Links'

export const metadata: Metadata = {
  title,
  applicationName: title,
  description: 'Coleção de links da banda Like a Tear',
  creator: 'Like a Tear Dev Team',
  alternates: {
    canonical: 'https://likeatear.com'
  },
  keywords: [
    'banda',
    'música',
    'links',
    'rock',
    'hardcore',
    'melódico',
    'hardcore melódico',
    'guarapuava',
    'paraná',
    'brasil',
  ],
  publisher: 'Like a Tear',
  generator: 'Like a Tear',
  metadataBase: 'https://links.likeatear.com',
  openGraph: {
    type: 'website',
    title: 'Like a Links',
    description: 'Coleção de links da banda Like a Tear',
    siteName: 'Like a Links',
    locale: 'pt-br',
    url: 'https://links.likeatear.com',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Analytics />
      </body>
    </html>
  );
}
