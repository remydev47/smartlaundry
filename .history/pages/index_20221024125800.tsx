import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Smart Laundry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />

    
    </div>
  )
}

export default Home
