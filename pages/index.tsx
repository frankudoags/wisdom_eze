import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { AboutMe, Articles, BuyBook, Footer, HomeSlider, Navbar, Podcast, Suscribe } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Wisdom Ezekiel | Home</title>
        <meta name="description" content="Wisdom Ezekiel is a multi-award winning speaker, passionate entrepreneur, business advisor, early stage investor, and philanthropist with over two decades of experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <HomeSlider />
        <AboutMe />
        <Articles />
        <Podcast />
        <Suscribe />
        <BuyBook />
      </main>
    </>
  )
}
