import React from 'react'
import Card from '../components/Card'
import styles from '../styles/Deck.module.css'

const Deck = () => {
    return (
        <div className={styles.grid}>
          <Card link='https://github.com/ralfguth' title='Repositório do GitHub' description='meus projetos pessoais e estudos' />
          <Card link='https://www.linkedin.com/in/ralf-guth-7404a7161/' title='Linkedin' description='Experiencias e skills profissionais' />
          <Card link='https://www.instagram.com/ralfguth_/' title='Instagram' description='aquele gostinho de fotolog' />
          <Card link='https://twitter.com/rsguth' title='Twitter' description='128 caracteres e tal' />
        </div>
    )
}

export default Deck
