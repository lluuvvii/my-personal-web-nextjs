"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: pink,
  },
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
