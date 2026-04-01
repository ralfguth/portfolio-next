import type { PortableTextBlock } from '@portabletext/react'

export type BlogCategory = 'fichamento' | 'resenha' | 'tutorial'

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Post {
  _id: string
  title: string
  slug: string
  category: BlogCategory
  excerpt: string
  body: PortableTextBlock[]
  coverImage?: SanityImage
  publishedAt: string
}

export interface PostSummary {
  _id: string
  title: string
  slug: string
  category: BlogCategory
  excerpt: string
  coverImage?: SanityImage
  publishedAt: string
}
