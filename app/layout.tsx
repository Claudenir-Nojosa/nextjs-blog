import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/shared/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Nextjs 13",
  description: "A NextJS 13 blog application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextUIProvider>
        <NavBar />
        <body className={inter.className}>{children}</body>
      </NextUIProvider>
    </html>
  );
}
