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
          Eu sou <a href="https://ralfguth.vercel.app">Ralf Guth!</a>
        </h1>

        <p className={styles.description}>
             Professor de geografia e Programador autodidata
        </p>

        <div className={styles.grid}>
        <a
            href="https://allmylinks.com/rsguth"
            className={styles.card}
          >
            <h3>Contato &rarr;</h3>
            <p>
              Redes sociais e etc.
            </p>
          </a>
          <a
            href="https://github.com/ralfguth"
            className={styles.card}
          >
            <h3>Github &rarr;</h3>
            <p>Repositório com meus trabalhos</p>
          </a>

          <a href="https://ralfguth.vercel.app" className={styles.card}>
            <h3>Experiência &rarr;</h3>
            <p>em construção</p>
          </a>

          <a href="https://ralfguth.vercel.app" className={styles.card}>
            <h3>Sobre &rarr;</h3>
            <p>em construção</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/guth.sites"
          target="_blank"
          rel="noopener noreferrer"
        >
          Criado por {' '}
          <img src="/ralf.svg" alt="Guth Sites" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
