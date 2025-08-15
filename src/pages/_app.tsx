import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { getBrandConfig } from '../config/brand';

export default function App({ Component, pageProps }: AppProps) {
  const brand = getBrandConfig();

  return (
    <>
      <Head>
        <title>{brand.name} - Documentation Platform</title>
        <meta name="description" content={`${brand.name} - Your comprehensive documentation platform for APIs, tutorials, and insights.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css" as="style" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}