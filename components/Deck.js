import React from 'react'
import Card from '../components/Card'
import styles from '../styles/Deck.module.css'

const Deck = () => {
    return (
        <div className={styles.grid}>
        
          <Card link='https://github.com/ralfguth' title='Repositório do GitHub' description='Meus projetos pessoais e estudos' />
          <Card link='https://www.linkedin.com/in/ralf-guth-7404a7161/' title='LinkedIn' description='Formação e experiência profissional' />
          <Card link='mailto:rsguth@gmail.com' title='E-mail' description='Entre em contato ;)' />

        </div>
    )
}

export default Deck
