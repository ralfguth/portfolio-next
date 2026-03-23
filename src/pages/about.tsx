import Layout from '@/components/layout/Layout'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile, aboutContent } from '@/data/profile'
import { stackGroups } from '@/data/stack'
import styles from '@/styles/About.module.css'

export default function About() {
  return (
    <Layout
      title="Sobre — Ralf Guth"
      description="Desenvolvedor backend com foco em Java, microsserviços e arquitetura de software."
    >
      <div className={styles.page}>
        <div className={`${styles.header} animate-fade-in-up`}>
          <h1 className={styles.pageTitle}>Sobre mim</h1>
          <p className={styles.pageSubtitle}>{profile.title}</p>
        </div>

        <div className={styles.block} style={{ animationDelay: '0.1s' }}>
          <p className={styles.text}>{aboutContent.intro}</p>
        </div>

        <div className={styles.block} style={{ animationDelay: '0.2s' }}>
          <h2 className={styles.blockTitle}>Trajetória</h2>
          <p className={styles.text}>{aboutContent.trajectory}</p>
        </div>

        <div className={styles.block} style={{ animationDelay: '0.3s' }}>
          <h2 className={styles.blockTitle}>Foco Técnico</h2>
          <p className={styles.text}>{aboutContent.focus}</p>
        </div>

        <div className={styles.block} style={{ animationDelay: '0.4s' }}>
          <h2 className={styles.blockTitle}>Principais Tecnologias</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {stackGroups.slice(0, 3).flatMap((group) =>
              group.items.slice(0, 4).map((tech) => (
                <span
                  key={tech.name}
                  style={{
                    padding: '0.4rem 0.8rem',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {tech.name}
                </span>
              ))
            )}
          </div>
        </div>

        <div className={styles.block} style={{ animationDelay: '0.5s' }}>
          <h2 className={styles.blockTitle}>Princípios de Trabalho</h2>
          <ul className={styles.principles}>
            {aboutContent.principles.map((principle) => (
              <li key={principle} className={styles.principle}>
                {principle}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.block} style={{ animationDelay: '0.6s' }}>
          <h2 className={styles.blockTitle}>Contato</h2>
          <div className={styles.contactLinks}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={styles.contactLink}
            >
              <FiMail /> {profile.email}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
