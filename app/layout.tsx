import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ConditionalNavigation from "@/components/conditional-navigation";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://asiyakinebrew.com"),
  title: "Art With Asiya - Art Educator & Artist",
  description:
    "Inspiring creativity through art and education. Explore student artwork from elementary to high school levels.",
  keywords: [
    "art educator",
    "art teacher",
    "art tutor",
    "art lessons",
    "art instruction",
    "art education",
    "visual arts",
    "elementary art",
    "middle school art",
    "high school art",
    "art portfolio",
    "creative education",
    "student artwork",
    "art curriculum",
    "art workshops",
    "Philadelphia art educator",
    "art teaching",
    "arts education",
  ],
  generator: "Emmanuel Foeh",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: {
      url: "/favicon/apple-touch-icon.png",
      type: "image/png",
    },
    shortcut: [{ url: "/favicon.ico" }],
    other: [
      {
        rel: "icon",
        url: "/favicon/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      { rel: "manifest", url: "/favicon/site.webmanifest" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Art With Asiya - Art Educator & Artist",
    description:
      "Inspiring creativity through art and education. Explore student artwork from elementary to high school levels.",
    url: "https://asiyakinebrew.com",
    siteName: "Art With Asiya",
    images: [
      {
        url: "/images/Asiya-profile.png",
        width: 800,
        height: 600,
        alt: "Art With Asiya",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConditionalNavigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
