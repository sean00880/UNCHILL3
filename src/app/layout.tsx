"use client";

import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import DocumentationLayout from "../components/DocumentationLayout";
import DocumentationLayout2 from "../components/DocumentationLayout2";
import { ReactNode } from "react";
import Cookies from "js-cookie";
import LandingLayout from "@components/LandingLayout";

// Define local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


// Define the posts array for blog/documentation pages
const posts = [
  { title: "How MemeLinked Integrates DeFi and Social Networking", href: "/blog/defi-social-networking" },
  { title: "GameFi’s Role in the MemeLinked Ecosystem", href: "/blog/gamefi-role" },
  { title: "The Future of Meme-Driven Finance", href: "/blog/meme-finance-future" },
];

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const isDocumentationPage = pathname.startsWith("/docs");
  const isBlogPage = pathname.startsWith("/blog");

  // Extract cookies using js-cookie
  const walletCookie = Cookies.get("walletAddress");
  const accountCookie = Cookies.get("accountIdentifier");

  
  const parsedCookies = {
    walletAddress: walletCookie && walletCookie.startsWith("0x") ? walletCookie : null,
    accountIdentifier: accountCookie && accountCookie.startsWith("user-") ? accountCookie : null,
  };
  

  // Log cookies for debugging
  console.log("Parsed Cookies:", parsedCookies);

  return (

            <html lang="en">
              <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
              >
                {isLandingPage ? (
                  children
                ) : isDocumentationPage ? (
                  <DocumentationLayout2 posts={posts}>{children}</DocumentationLayout2>
                ) : isBlogPage ? (
                  <DocumentationLayout posts={posts}>{children}</DocumentationLayout>
                ) : (
                  <LandingLayout>{children}</LandingLayout>
                )}
              </body>
            </html>
  );
}
