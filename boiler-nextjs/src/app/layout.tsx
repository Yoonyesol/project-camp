import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Sucoding",
    default: "Next.JS 14 | Sucoding",
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
      <h1>Root Header</h1>
      <body className={inter.className}>
        <div className="flex flex-col text-[blue]">
          <Link href="/login">로그인</Link>
          <Link href="/register">회원가입</Link>
          <Link href="/password">비밀번호</Link>
          <Link href="/blog">블로그</Link>
          <Link href="/blog/1">블로그1</Link>
          <Link href="/blog/2">블로그2</Link>
          <Link href="/blog/read">읽기</Link>
        </div>
        {children}
      </body>
      <h2>Root Footer</h2>
    </html>
  );
}
