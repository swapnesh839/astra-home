import type { Metadata } from "next";
import { Inter, Metrophobic } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navbar/navigation";
import Head from "next/head"
import Footer from "@/components/footer/footer";
import { NextSeo } from "next-seo";

import ScrollToTopButton from "@/components/landing/scroll-to-top-button";
import { Suspense } from "react";
import Loading from "./loading";


const inter = Inter({ subsets: ["latin"] });
const metrophobic = Metrophobic({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'spectra.starllysolutions',
  description: 'Automate post sales workflows, processes',
  icons: {
    icon: '/spectra.ico', 
  },
  openGraph: {
    title: 'Starlly',
    description: 'Automate post sales workflows, processes',
    url: 'https://spectra.starllysolutions.com/',
    type: 'website',
    images: [
      {
        url: "/img/spectra.jpeg",
        width: 800,
        height: 600,
        alt: `spectra`,
      },
    ],
    siteName: 'spectra.starllysolutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starlly',
    description: 'Automate post sales workflows, processes',
    images: '/img/spectra.jpeg',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {true && <Head>
      <link rel="icon" href="/spectra.ico" />
        <NextSeo
          title="spectra.starllysolutions"
          description="Automate post sales workflows, processes"
          canonical="https://spectra.starllysolutions.com/"
          openGraph={{
            url: 'https://www.url.ie/a',
            title: 'Open Graph Title',
            description: 'Automate post sales workflows, processes',
            images: [
              {
                url: '/public/img/spectra.jpeg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
                type: 'image/jpeg',
              },
              {
                url: '/public/img/spectra.jpeg',
                width: 900,
                height: 800,
                alt: 'Og Image Alt Second',
                type: 'image/jpeg',
              },
              { url: '/public/img/spectra.jpeg' },
              { url: '/public/img/spectra.jpeg' },
            ],
            siteName: 'spectra.starllysolutions'
          }}
        />
        <meta property="og:image" content="/public/img/spectra.jpeg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Metrophobic&display=swap" rel="stylesheet" />

        

        <meta
          name="description"
          content="Automate post sales workflows and processes with Starlly."
        />
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Starlly" />
        <meta property="og:description" content="Automate post sales workflows, processes" />
        <meta property="og:image" content="/public/img/spectra.jpeg" />
        <meta property="og:url" content="https://spectra.starllysolutions.com/" />
        <meta property="og:type" content="website" />
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Starlly" />
        <meta name="twitter:description" content="Automate post sales workflows, processes" />
        <meta name="twitter:image" content="/public/img/spectra.jpeg" />

      </Head>}
      <body style={{ fontFamily: "Metrophobic" }} suppressHydrationWarning={true}>
        <Navigation />
        <main >
        <Suspense fallback={<Loading />}>
          {children}
          </Suspense>
        </main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
