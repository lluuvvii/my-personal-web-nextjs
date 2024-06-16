"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red, blue, yellow } from '@mui/material/colors';
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./components/navbar/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[700],
      dark: blue[900],
    },
    secondary: {
      light: yellow[300],
      main: yellow[500],
      dark: yellow[700],
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
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
        <Navbar />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ mt: 14 }}>
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
