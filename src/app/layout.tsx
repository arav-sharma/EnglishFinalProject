import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ArticleBody from "@/components/article";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "arav-sharma.com",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header/>
          <Hero/>
          <ArticleBody/>
          {children}
        </div>
        </body>
    </html>
  );
}
