import React from 'react'
import Link from 'next/link'
import styles from '../styles/Card.module.css'

const Card = ({link,title,description}) => {
    return (
        <Link href={link}>
            <a className={styles.card}>
            <h3>{title} &rarr;</h3>
            <p>{description}</p>
          </a>
        </Link>
    )
}

export default Card
