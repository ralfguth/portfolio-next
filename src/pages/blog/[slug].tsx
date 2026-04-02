import Link from 'next/link'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { PortableText } from '@portabletext/react'
import Layout from '@/components/layout/Layout'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/data/translations'
import { getPostBySlug, getAllPostSlugs } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/client'
import type { Post } from '@/types/blog'
import styles from '@/styles/BlogPost.module.css'

interface BlogPostPageProps {
  post: {
    pt: Post | null
    en: Post | null
  }
}

function formatDate(dateString: string, locale: string): string {
  return new Date(dateString).toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const { locale } = useLanguage()
  const labels = t(locale)
  const localizedPost = post[locale]

  if (!localizedPost) {
    return (
      <Layout>
        <div className={styles.container}>
          <p>{labels.blog.noPosts}</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title={`${localizedPost.title} — Ralf Guth`} description={localizedPost.excerpt}>
      <article className={styles.container}>
        <Link href="/blog" className={styles.backLink}>
          ← {labels.blog.backToList}
        </Link>

        <div className={styles.meta}>
          <span className={styles.category}>
            {labels.blog.categories[localizedPost.category]}
          </span>
          <span className={styles.date}>
            {formatDate(localizedPost.publishedAt, locale)}
          </span>
        </div>

        <h1 className={styles.title}>{localizedPost.title}</h1>

        {localizedPost.coverImage && (
          <img
            src={urlFor(localizedPost.coverImage).width(1200).url()}
            alt={localizedPost.title}
            className={styles.coverImage}
          />
        )}

        <div className={styles.body}>
          <PortableText value={localizedPost.body} />
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllPostSlugs()

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const slug = params?.slug as string
  const [ptPost, enPost] = await Promise.all([
    getPostBySlug(slug, 'pt'),
    getPostBySlug(slug, 'en'),
  ])

  if (!ptPost && !enPost) {
    return { notFound: true }
  }

  return {
    props: {
      post: {
        pt: ptPost,
        en: enPost,
      },
    },
    revalidate: 60,
  }
}
