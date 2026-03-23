import Layout from '@/components/layout/Layout'
import Hero from '@/components/home/Hero'
import Areas from '@/components/home/Areas'
import Stack from '@/components/home/Stack'
import Experience from '@/components/home/Experience'
import Education from '@/components/home/Education'
import ExternalLinks from '@/components/home/ExternalLinks'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/data/translations'

export default function Home() {
  const { locale } = useLanguage()
  const labels = t(locale)

  return (
    <Layout title={labels.meta.homeTitle} description={labels.meta.homeDescription}>
      <Hero />
      <Stack />
      <Areas />
      <Experience />
      <Education />
      <ExternalLinks />
    </Layout>
  )
}
