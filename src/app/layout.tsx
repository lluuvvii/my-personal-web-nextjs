'use client'

import "./globals.css"
import React, { Suspense } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { red, blue, yellow } from '@mui/material/colors'
import { CssBaseline } from "@mui/material"

const theme = createTheme({
  typography: {
    fontFamily:
      'Times New Roman, Times, sans-serif',
  },
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
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Luvi Portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Oswald:wght@200..700&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Suspense>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
