import React from 'react'
import Link from 'next/link'
import styles from '../styles/Card.module.css'

const Card = ({ link, title, description }) => {
    return (
        <Link href={link}>
            <a className={styles.card}>
                <div className={styles.container}>
                    <h3>{title} &rarr;</h3>
                    <p>{description}</p>
                </div>
            </a>
        </Link>
    )
}

export default Card
