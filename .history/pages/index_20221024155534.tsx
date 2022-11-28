import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Commercial, Hero, Services, Steps } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Smart Laundry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
      <Steps />
      <Commercial />
    
    </div>
  )
}

export default Home
