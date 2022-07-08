import Head from "next/head";

import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cottonhue-Cottony social site</title>
        <meta name="cottonhue" content="social e-commerce site for all cotton dresses" />
        <link rel="icon" href="/cottonhueIcon.svg" />
        
      </Head>
      <Hero />
      <Footer />
    </div>
  );
}
