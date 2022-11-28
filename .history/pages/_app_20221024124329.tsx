import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Logo from '../components/Logo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Logo />
     <Header />
     <Component {...pageProps} />
    </>
  )
}

export default MyApp
