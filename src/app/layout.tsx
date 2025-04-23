import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "At Home Autumn Falls",
  description: "I be at home in autumn falls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
