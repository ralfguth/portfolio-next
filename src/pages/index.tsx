import Layout from '@/components/layout/Layout'
import Hero from '@/components/home/Hero'
import Areas from '@/components/home/Areas'
import Stack from '@/components/home/Stack'
import Experience from '@/components/home/Experience'
import Education from '@/components/home/Education'
import ExternalLinks from '@/components/home/ExternalLinks'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Stack />
      <Areas />
      <Experience />
      <Education />
      <ExternalLinks />
    </Layout>
  )
}
