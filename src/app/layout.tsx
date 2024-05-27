"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: red,
  },
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <title>Luvi Portfolio</title>
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
