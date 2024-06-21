import type { Metadata } from "next";
import { Inter, Metrophobic } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navbar/navigation";
import Head from "next/head"
import Footer from "@/components/footer/footer";
import { NextSeo } from "next-seo";
import ScrollToTopButton from "@/components/landing/scroll-to-top-button";


const inter = Inter({ subsets: ["latin"] });
const metrophobic = Metrophobic({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "spectra.starllysolutions",
  description: "Automate post sales workflows, processes",
  icons: "/public/img/spectra.jpeg",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <NextSeo
      title="spectra.starllysolutions"
      description="Automate post sales workflows, processes"
      canonical="https://spectra.starllysolutions.com/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
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
        siteName: 'spectra.starllysolutions',
      }}
    />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Metrophobic&display=swap" rel="stylesheet" />
        <link rel="icon" href="/spectra.ico" />
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

      </Head>
      <body style={{ fontFamily: "Metrophobic" }} suppressHydrationWarning={true}>
        <Navigation />
        <main >
          {children}
        </main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
