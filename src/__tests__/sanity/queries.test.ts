import { getPosts, getPostBySlug, getAllPostSlugs, getPostsByCategory } from '@/lib/sanity/queries'
import { sanityClient } from '@/lib/sanity/client'

jest.mock('@/lib/sanity/client', () => ({
  sanityClient: {
    fetch: jest.fn(),
  },
  urlFor: jest.fn(),
}))

const mockFetch = sanityClient.fetch as jest.MockedFunction<typeof sanityClient.fetch>

describe('Sanity Queries', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getPosts', () => {
    it('busca posts em portugues', async () => {
      const mockPosts = [
        { _id: '1', title: 'Post em PT', slug: 'post-pt', category: 'tutorial', excerpt: 'Resumo', publishedAt: '2026-01-01' },
      ]
      mockFetch.mockResolvedValue(mockPosts)

      const posts = await getPosts('pt')

      expect(mockFetch).toHaveBeenCalledTimes(1)
      const query = mockFetch.mock.calls[0][0] as string
      expect(query).toContain('title.pt')
      expect(query).toContain('excerpt.pt')
      expect(query).toContain('order(publishedAt desc)')
      expect(posts).toEqual(mockPosts)
    })

    it('busca posts em ingles', async () => {
      mockFetch.mockResolvedValue([])

      await getPosts('en')

      const query = mockFetch.mock.calls[0][0] as string
      expect(query).toContain('title.en')
      expect(query).toContain('excerpt.en')
    })
  })

  describe('getPostBySlug', () => {
    it('busca post individual por slug e locale', async () => {
      const mockPost = {
        _id: '1',
        title: 'Clean Code',
        slug: 'clean-code',
        category: 'fichamento',
        excerpt: 'Resumo',
        body: [{ _type: 'block', children: [{ text: 'Conteudo' }] }],
        publishedAt: '2026-01-01',
      }
      mockFetch.mockResolvedValue(mockPost)

      const post = await getPostBySlug('clean-code', 'pt')

      expect(mockFetch).toHaveBeenCalledTimes(1)
      const query = mockFetch.mock.calls[0][0] as string
      expect(query).toContain('slug.current == $slug')
      expect(query).toContain('body.pt')
      expect(mockFetch.mock.calls[0][1]).toEqual({ slug: 'clean-code' })
      expect(post).toEqual(mockPost)
    })

    it('retorna null quando post nao existe', async () => {
      mockFetch.mockResolvedValue(null)

      const post = await getPostBySlug('nao-existe', 'pt')

      expect(post).toBeNull()
    })
  })

  describe('getAllPostSlugs', () => {
    it('retorna array de slugs', async () => {
      mockFetch.mockResolvedValue([
        { slug: 'post-1' },
        { slug: 'post-2' },
      ])

      const slugs = await getAllPostSlugs()

      expect(slugs).toEqual(['post-1', 'post-2'])
    })

    it('retorna array vazio quando nao ha posts', async () => {
      mockFetch.mockResolvedValue([])

      const slugs = await getAllPostSlugs()

      expect(slugs).toEqual([])
    })
  })

  describe('getPostsByCategory', () => {
    it('filtra posts por categoria', async () => {
      mockFetch.mockResolvedValue([])

      await getPostsByCategory('fichamento', 'pt')

      const query = mockFetch.mock.calls[0][0] as string
      expect(query).toContain('category == $category')
      expect(mockFetch.mock.calls[0][1]).toEqual({ category: 'fichamento' })
    })
  })
})
