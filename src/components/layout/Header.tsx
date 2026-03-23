import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from '@/styles/Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Sobre' },
  ]

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
          {links.map((link) => (
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
