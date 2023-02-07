import Head from 'next/head'
import { AboutMe, Articles, BuyBook, HomeSlider, Podcast, Suscribe, Testimonials } from '@/components'


export default function Home() {
  return (
    <>
      <Head>
        <title>Wisdom Ezekiel | Home</title>
        <meta
          name="description"
          content="Wisdom Ezekiel is a multi-award winning speaker, passionate entrepreneur, business advisor, early stage investor, and philanthropist with over two decades of experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeSlider />
        <AboutMe />
        <Articles />
        <Podcast />
        <Testimonials />
        <BuyBook />
        <Suscribe />
      </main>
    </>
  );
}
