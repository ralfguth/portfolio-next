import React from 'react'
import Card from '../components/Card'
import styles from '../styles/Deck.module.css'

const Deck = () => {
    return (
        <div className={styles.grid}>
          <Card link='https://github.com/ralfguth' title='Repositório do GitHub' description='meus projetos pessoais e estudos' />
          <Card link='https://www.linkedin.com/in/ralf-guth-7404a7161/' title='Linkedin' description='Experiencias e skills profissionais' />
        </div>
    )
}

export default Deck
