import "../styles/globals.css";
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'

// Initialize the font
const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GA_ID);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Eszter Ozsvald | Tech, Motion, & Nutrition</title>
        <meta name="description" content="Entrepreneur, product designer, and engineer working on AI, wearables, movement tracking, and future food innovations." />
        <meta name="keywords" content="AI, wearables, movement, biomechanics, sports technology, nutrition, future food, robotics, smart textiles" />
        <meta name="author" content="Eszter Ozsvald" />
        <meta property="og:title" content="Eszter Ozsvald | Tech, Motion, & Nutrition" />
        <meta property="og:description" content="Exploring AI, wearables, biomechanics, and future food innovations." />
        <meta property="og:image" content="https://iameszter.com/images/profile.jpg" />
        <meta property="og:url" content="https://iameszter.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;