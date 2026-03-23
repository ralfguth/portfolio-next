import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from '@/styles/Header.module.css'

interface NavItem {
  href: string
  label: string
}

const pageLinks: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Sobre' },
]

const sectionLinks: NavItem[] = [
  { href: '/#stack', label: 'Stack' },
  { href: '/#areas', label: 'Áreas' },
  { href: '/#experiencia', label: 'Experiência' },
  { href: '/#formacao', label: 'Formação' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const isHome = router.pathname === '/'

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (isHome) {
      e.preventDefault()
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          ralf.guth
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {sectionLinks.map((link) => {
            const sectionId = link.href.replace('/#', '')
            return (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={(e) => handleSectionClick(e, sectionId)}
              >
                {link.label}
              </a>
            )
          })}

          <span className={styles.divider} />

          {pageLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${
                  router.pathname === link.href ? styles.navLinkActive : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  )
}
