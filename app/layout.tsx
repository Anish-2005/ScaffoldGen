import React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import LoadingOverlay from "./components/LoadingOverlay"
import "./globals.css"

/* Satoshi Font (public/fonts, no semibold) */
const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ScaffoldGen - Powerful CLI for Modern Development",
  description:
    "A powerful command-line interface that connects interface builders and empowers you to create seamless workflows and boost your productivity.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className="font-sans antialiased bg-black text-white">
        <LoadingOverlay />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
