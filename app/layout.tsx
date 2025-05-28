import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import Head from "next/head";

const inter = localFont({
    src: [
        {
            path: "./GoogleSans.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./GoogleSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
});

export const metadata: Metadata = {
    title: "GDGC PRC - Google Developer Groups on Campus",
    description:
        "Official website of Google Developer Groups on Campus PRC. Join our community of developers, learn new technologies, and build amazing projects together.",
    keywords: [
        "GDSC",
        "GDGC",
        "Google Developer Groups on Campus",
        "PRC",
        "Developer Community",
        "Tech Events",
        "Programming",
        "Providence",
        "College",
        "Providence College of Engineering",
    ],
    authors: [{ name: "GDGC PRC Team" }],
    creator: "GDGC PRC",
    publisher: "GDGC PRC",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://gdsc-prc.vercel.app"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "GDGC PRC - Google Developer Groups on Campus",
        description:
            "Official website of Google Developer Groups on Campus at PRC. Join our community of developers, learn new technologies, and build amazing projects together.",
        url: "https://gdsc-prc.vercel.app",
        siteName: "GDGC PRC",
        images: [
            {
                url: "/gdsc-logo.png",
                width: 1200,
                height: 630,
                alt: "GDGC PRC",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "GDGC PRC - Google Developer Groups on Campus",
        description:
            "Official website of Google Developer Groups on Campus at PRC. Join our community of developers, learn new technologies, and build amazing projects together.",
        images: ["/gdsc-logo.png"],
        creator: "@gdgc_prc",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <link
                    rel="icon"
                    href="/icon.png"
                    type="image/png"
                    sizes="32x32"
                />
            </Head>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <FloatingNav />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
