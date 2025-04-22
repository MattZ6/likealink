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

export const metadata: Metadata = {

  title: "Like a Links",
  description: "Coleção de links da banda Like a Tear",
  applicationName: 'Like a Links',
  authors: [{ name: 'Like a Tear', url: 'https://' }],
  creator: 'Like a Tear',
  keywords: ['banda', 'hardcore', 'melodico', 'guarapuava', 'parana', 'autoral', 'musica', 'links', 'like', 'tear', 'like a tear'],
  publisher: 'Like a Tear',
  generator: 'Like a Tear',
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
      </body>
    </html>
  );
}
