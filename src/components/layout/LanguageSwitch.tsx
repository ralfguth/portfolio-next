import { useLanguage, Locale } from '@/contexts/LanguageContext'
import styles from '@/styles/LanguageSwitch.module.css'

const options: { locale: Locale; label: string }[] = [
  { locale: 'pt', label: 'PT' },
  { locale: 'en', label: 'EN' },
]

export default function LanguageSwitch() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className={styles.wrapper}>
      {options.map((opt) => (
        <button
          key={opt.locale}
          className={`${styles.button} ${
            locale === opt.locale ? styles.active : ''
          }`}
          onClick={() => setLocale(opt.locale)}
          aria-label={`Mudar idioma para ${opt.label}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
