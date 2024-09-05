"use client"; // Ensure the layout is marked as a client component if using client-side hooks

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Style/mainpage.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  console.log("Children is ", children);

  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname !== "/about/aboutclient" && (
          <div className="navbar">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
            <Link href="/contact">Contact</Link>
          </div>
        )}
        {children} 
      </body>
    </html>
  );
}
