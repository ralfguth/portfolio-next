import Head from 'next/head'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Deck from '../components/Deck'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ralf Guth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Title />
        <Deck />
      </main>
    </div>
  )
}
