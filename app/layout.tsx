import "@/styles/globals.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"

import Footer from "@/components/main/nav/Footer"
import Navbar from "@/components/main/nav/Navbar"
import { ModalProvider } from "@/components/modal-provider"
import { ThemeProvider } from "@/components/theme-provider"
import ToastProvider from "@/components/toast-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
