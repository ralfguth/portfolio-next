import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ralf Guth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Eu sou <a href="https://ralfguth.dev">Ralf Guth!</a>
        </h1>

        <p className={styles.description}>
          Desenvolvedor Web
        </p>

        <div className={styles.grid}>

          <a href="mailto:rsguth@gmail.com" className={styles.card}>
            <h3>e-mail &rarr;</h3>
            <p>rsguth@gmail.com</p>
          </a>
          <a
            href="https://github.com/ralfguth"
            className={styles.card}
          >
            <h3>Github &rarr;</h3>
            <p>Repositório com meus trabalhos</p>
          </a>
          <a
            href="https://linklist.bio/ralfguth"
            className={styles.card}
          >
            <h3>Outros Contatos &rarr;</h3>
            <p>
              Whatsapp e mídias sociais
            </p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <img src="/ralf.svg" alt="Guth Sites" className={styles.logo} />
      </footer>
    </div>
  )
}
