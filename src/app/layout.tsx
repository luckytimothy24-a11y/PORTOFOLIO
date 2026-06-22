import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Lucky Timoty Nugroho",
    default: "Lucky Timoty Nugroho | Portfolio",
  },
  description:
    "Portfolio pribadi Lucky Timoty Nugroho - Mahasiswa Informatika, Web Developer, dan Cloud Enthusiast.",
  keywords: [
    "Lucky Timoty Nugroho",
    "Portfolio",
    "Web Developer",
    "Mahasiswa Informatika",
    "Cloud Computing",
    "AWS",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Lucky Timoty Nugroho" }],
  creator: "Lucky Timoty Nugroho",
  metadataBase: new URL("https://luckytimoty.vercel.app"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Lucky Timoty Nugroho",
    title: "Lucky Timoty Nugroho | Portfolio",
    description:
      "Portfolio pribadi Lucky Timoty Nugroho - Mahasiswa Informatika, Web Developer, dan Cloud Enthusiast.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
