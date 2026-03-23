import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '@/styles/Layout.module.css'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({
  children,
  title = 'Ralf Guth — Desenvolvedor de Software',
  description = 'Desenvolvedor backend com foco em Java, microsserviços, APIs e arquitetura de software.',
}: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
