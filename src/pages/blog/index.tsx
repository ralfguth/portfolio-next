import { useState } from 'react'
import Link from 'next/link'
import type { GetStaticProps } from 'next'
import Layout from '@/components/layout/Layout'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/data/translations'
import { getPosts } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/client'
import type { PostSummary, BlogCategory } from '@/types/blog'
import styles from '@/styles/Blog.module.css'

interface BlogPageProps {
  posts: {
    pt: PostSummary[]
    en: PostSummary[]
  }
}

const CATEGORIES: (BlogCategory | 'all')[] = ['all', 'fichamento', 'resenha', 'tutorial']

function formatDate(dateString: string, locale: string): string {
  return new Date(dateString).toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage({ posts }: BlogPageProps) {
  const { locale } = useLanguage()
  const labels = t(locale)
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all')

  const localizedPosts = posts[locale]
  const filteredPosts =
    activeCategory === 'all'
      ? localizedPosts
      : localizedPosts.filter((post) => post.category === activeCategory)

  return (
    <Layout title={labels.meta.blogTitle} description={labels.meta.blogDescription}>
      <div className={styles.container}>
        <h1 className={styles.title}>{labels.blog.title}</h1>
        <p className={styles.description}>{labels.blog.description}</p>

        <div className={styles.filters}>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                activeCategory === category ? styles.filterButtonActive : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {labels.blog.categories[category]}
            </button>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <p className={styles.noPosts}>{labels.blog.noPosts}</p>
        ) : (
          <div className={styles.grid}>
            {filteredPosts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug}`} className={styles.card}>
                {post.coverImage && (
                  <img
                    src={urlFor(post.coverImage).width(640).height(360).url()}
                    alt={post.title}
                    className={styles.cardImage}
                  />
                )}
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCategory}>
                      {labels.blog.categories[post.category]}
                    </span>
                    <span className={styles.cardDate}>
                      {formatDate(post.publishedAt, locale)}
                    </span>
                  </div>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <span className={styles.readMore}>{labels.blog.readMore} →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const [ptPosts, enPosts] = await Promise.all([getPosts('pt'), getPosts('en')])

  return {
    props: {
      posts: {
        pt: ptPosts,
        en: enPosts,
      },
    },
    revalidate: 60,
  }
}
