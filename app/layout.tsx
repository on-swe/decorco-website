import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import Footer  from "@/components/layout/footer"
import localFont from 'next/font/local';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Decorco | Interior Design Company",
  description:
    "Decorco is a leading interior design company that provides a wide range of services to clients.",
  generator: "Raqeem - رَقيم ",
  icons: {
    icon: "/images/logo/icon.png",
  },
};

const wegato = localFont({
  src: '../public/fonts/wegato/wegato.ttf',
  variable: '--font-wegato',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${wegato.variable} font-wegato`} suppressHydrationWarning>
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
