import React from 'react'
import Link from 'next/link'
import styles from '../styles/Title.module.css'

const Title = () => {
    return (
        <>
            <img src="/ralf.svg" alt="gweb" className={styles.logo} />
            <h1 className={styles.title}>
                Eu sou <Link href="/">Ralf Guth!</Link>
            </h1>
            <p className={styles.description}>
                Desenvolvedor Web
            </p>
        </>
    )
}

export default Title
