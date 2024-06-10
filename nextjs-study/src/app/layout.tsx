import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | yesol",
    default: "Next.JS 14 | yesol",
  },
  description: "Let's learn next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </body>
    </html>
  );
}
