
import type { Metadata } from "next";
import { lusitana } from '@/app/ui/fonts';
import "./globals.css";
import Link from "next/link";
import MenuContextProvider from "@/context/MenuContext"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lusitana.className}`}>
        <ul>
          <li><Link href="/">Main</Link></li>
          <li><Link href="/Admin">admin</Link></li>
          <li><Link href="/Customer">customer</Link></li>
        </ul>

        <MenuContextProvider chidren={children}></MenuContextProvider>

        <footer>hddhdh</footer>

      </body>

    </html>
  );
}
