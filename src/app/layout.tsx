import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <title>Luvi Portfolio</title>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
