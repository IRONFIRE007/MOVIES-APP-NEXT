import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Movies App</title>
        <meta name="Mivoes App" content="Movies App description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
             <h1>Hello World</h1>
      </div>
  )
}

export default HomePage
