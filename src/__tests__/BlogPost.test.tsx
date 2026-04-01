import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/test-utils'
import BlogPostPage from '@/pages/blog/[slug]'

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/blog/clean-code',
  }),
}))

jest.mock('@portabletext/react', () => ({
  PortableText: ({ value }: { value: Array<{ children?: Array<{ text: string }> }> }) => {
    const texts = value
      ?.map((block) => block.children?.map((child) => child.text).join(''))
      .join('')
    return <p>{texts}</p>
  },
}))

jest.mock('@/lib/sanity/client', () => ({
  sanityClient: { fetch: jest.fn() },
  urlFor: jest.fn(() => ({
    width: jest.fn(() => ({
      url: () => 'https://cdn.sanity.io/images/test.jpg',
    })),
  })),
}))

const mockPost = {
  pt: {
    _id: '1',
    title: 'Clean Code - Fichamento',
    slug: 'clean-code',
    category: 'fichamento' as const,
    excerpt: 'Resumo do livro Clean Code',
    body: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          { _type: 'span', _key: 'span1', text: 'O livro aborda boas praticas de programacao.' },
        ],
        markDefs: [],
      },
    ],
    publishedAt: '2026-03-15T00:00:00Z',
  },
  en: {
    _id: '1',
    title: 'Clean Code - Book Summary',
    slug: 'clean-code',
    category: 'fichamento' as const,
    excerpt: 'Summary of Clean Code',
    body: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          { _type: 'span', _key: 'span1', text: 'The book covers good programming practices.' },
        ],
        markDefs: [],
      },
    ],
    publishedAt: '2026-03-15T00:00:00Z',
  },
}

describe('BlogPost Page', () => {
  beforeEach(() => {
    renderWithProviders(<BlogPostPage post={mockPost} />)
  })

  it('exibe o titulo do post', () => {
    expect(screen.getByRole('heading', { name: 'Clean Code - Fichamento' })).toBeInTheDocument()
  })

  it('exibe a categoria do post', () => {
    expect(screen.getByText('Fichamento')).toBeInTheDocument()
  })

  it('exibe a data do post', () => {
    expect(screen.getByText(/março de 2026/)).toBeInTheDocument()
  })

  it('exibe o conteudo do post via Portable Text', () => {
    expect(screen.getByText('O livro aborda boas praticas de programacao.')).toBeInTheDocument()
  })

  it('exibe link de voltar para o blog', () => {
    const backLink = screen.getByRole('link', { name: /voltar para o blog/i })
    expect(backLink).toHaveAttribute('href', '/blog')
  })
})

describe('BlogPost Page - post nao encontrado', () => {
  it('exibe mensagem quando post nao existe', () => {
    renderWithProviders(<BlogPostPage post={{ pt: null, en: null }} />)
    expect(screen.getByText('Nenhum post publicado ainda.')).toBeInTheDocument()
  })
})
