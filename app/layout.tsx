import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";
import localFont from 'next/font/local'

const inter = localFont({
  src: [
    {
      path: './GoogleSans.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './GoogleSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "GDGC PRC",
  description: "Official website of GDGC PRC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <FloatingNav/>
            {children}
            <Footer/>
          </ThemeProvider></body>
    </html>
  );
}
