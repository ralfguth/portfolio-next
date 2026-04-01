import type { Locale } from '@/contexts/LanguageContext'
import type { Post, PostSummary } from '@/types/blog'
import { sanityClient } from './client'

export async function getPosts(locale: Locale): Promise<PostSummary[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    "title": title.${locale},
    "slug": slug.current,
    category,
    "excerpt": excerpt.${locale},
    coverImage,
    publishedAt
  }`
  return sanityClient.fetch(query)
}

export async function getPostBySlug(slug: string, locale: Locale): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    "title": title.${locale},
    "slug": slug.current,
    category,
    "excerpt": excerpt.${locale},
    "body": body.${locale},
    coverImage,
    publishedAt
  }`
  return sanityClient.fetch(query, { slug })
}

export async function getAllPostSlugs(): Promise<string[]> {
  const query = `*[_type == "post"] { "slug": slug.current }`
  const results = await sanityClient.fetch<{ slug: string }[]>(query)
  return results.map((r) => r.slug)
}

export async function getPostsByCategory(category: string, locale: Locale): Promise<PostSummary[]> {
  const query = `*[_type == "post" && category == $category] | order(publishedAt desc) {
    _id,
    "title": title.${locale},
    "slug": slug.current,
    category,
    "excerpt": excerpt.${locale},
    coverImage,
    publishedAt
  }`
  return sanityClient.fetch(query, { category })
}
