import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiMenu, FiX } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/data/translations'
import { useActiveSection } from '@/hooks/useActiveSection'
import LanguageSwitch from './LanguageSwitch'
import ThemeToggle from './ThemeToggle'
import styles from '@/styles/Header.module.css'

interface NavItem {
  href: string
  label: string
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const { locale } = useLanguage()
  const labels = t(locale)
  const isHome = router.pathname === '/'

  const sectionIds = useMemo(
    () => ['stack', 'areas', 'experiencia', 'formacao'],
    []
  )
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sectionLinks: NavItem[] = [
    { href: '/#stack', label: labels.nav.stack },
    { href: '/#areas', label: labels.nav.areas },
    { href: '/#experiencia', label: labels.nav.experience },
    { href: '/#formacao', label: labels.nav.education },
  ]

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
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          ralf<span className={styles.logoDot}>.</span>guth
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
            const isActive = isHome && activeSection === sectionId
            return (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                onClick={(e) => handleSectionClick(e, sectionId)}
              >
                {link.label}
              </a>
            )
          })}

          <span className={styles.divider} />

          <Link
            href="/blog"
            className={`${styles.navLink} ${
              router.pathname.startsWith('/blog') ? styles.navLinkActive : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {labels.nav.blog}
          </Link>

          <Link
            href="/about"
            className={`${styles.navLink} ${
              router.pathname === '/about' ? styles.navLinkActive : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {labels.nav.about}
          </Link>

          <LanguageSwitch />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
