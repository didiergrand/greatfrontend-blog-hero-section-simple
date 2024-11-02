import type { Metadata } from "next";
import { Noto_Sans } from 'next/font/google';
import "./globals.css";
import Footer from '@/components/Footer';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Hero Section | GreatFrontEnd Projects",
  description: "A modern hero banner showcase built with Next.js and Tailwind CSS",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${notoSans.className} antialiased bg-white min-h-full`}>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
