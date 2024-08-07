import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import NavBar from '/Users/abhimanyurana/Desktop/coding/Aradhana/Aradhana-s-Portfolio-Website/src/components/NavBar.js';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '_-font-mont',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <NavBar/>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
