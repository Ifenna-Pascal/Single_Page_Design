import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ife.eth</title>
        <meta name="description" content="Monanu Ifenna a Fullstack Software & Blockchain  Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <Hero />
      </main>
    </div>
  )
}
