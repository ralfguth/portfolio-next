import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from '@/test-utils'
import BlogPage from '@/pages/blog/index'

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/blog',
  }),
}))

jest.mock('@/lib/sanity/client', () => ({
  sanityClient: { fetch: jest.fn() },
  urlFor: jest.fn(() => ({
    width: jest.fn(() => ({
      height: jest.fn(() => ({
        url: () => 'https://cdn.sanity.io/images/test.jpg',
      })),
      url: () => 'https://cdn.sanity.io/images/test.jpg',
    })),
  })),
}))

const mockPosts = {
  pt: [
    {
      _id: '1',
      title: 'Clean Code - Fichamento',
      slug: 'clean-code',
      category: 'fichamento' as const,
      excerpt: 'Resumo do livro Clean Code de Robert C. Martin',
      publishedAt: '2026-03-15T00:00:00Z',
    },
    {
      _id: '2',
      title: 'Spring Boot Tutorial',
      slug: 'spring-boot-tutorial',
      category: 'tutorial' as const,
      excerpt: 'Como criar uma API REST com Spring Boot',
      publishedAt: '2026-03-10T00:00:00Z',
    },
    {
      _id: '3',
      title: 'Domain-Driven Design - Resenha',
      slug: 'ddd-resenha',
      category: 'resenha' as const,
      excerpt: 'Resenha do livro DDD de Eric Evans',
      publishedAt: '2026-03-05T00:00:00Z',
    },
  ],
  en: [
    {
      _id: '1',
      title: 'Clean Code - Book Summary',
      slug: 'clean-code',
      category: 'fichamento' as const,
      excerpt: 'Summary of Clean Code by Robert C. Martin',
      publishedAt: '2026-03-15T00:00:00Z',
    },
    {
      _id: '2',
      title: 'Spring Boot Tutorial',
      slug: 'spring-boot-tutorial',
      category: 'tutorial' as const,
      excerpt: 'How to create a REST API with Spring Boot',
      publishedAt: '2026-03-10T00:00:00Z',
    },
    {
      _id: '3',
      title: 'Domain-Driven Design - Review',
      slug: 'ddd-resenha',
      category: 'resenha' as const,
      excerpt: 'Review of DDD by Eric Evans',
      publishedAt: '2026-03-05T00:00:00Z',
    },
  ],
}

describe('Blog Page', () => {
  beforeEach(() => {
    renderWithProviders(<BlogPage posts={mockPosts} />)
  })

  it('exibe o titulo do blog', () => {
    expect(screen.getByRole('heading', { name: 'Blog' })).toBeInTheDocument()
  })

  it('exibe a descricao do blog', () => {
    expect(
      screen.getByText('Fichamentos, resenhas e tutoriais sobre desenvolvimento de software.')
    ).toBeInTheDocument()
  })

  it('exibe botoes de filtro de categoria', () => {
    expect(screen.getByRole('button', { name: 'Todos' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Fichamento' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Resenha' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Tutorial' })).toBeInTheDocument()
  })

  it('exibe todos os posts por padrao', () => {
    expect(screen.getByText('Clean Code - Fichamento')).toBeInTheDocument()
    expect(screen.getByText('Spring Boot Tutorial')).toBeInTheDocument()
    expect(screen.getByText('Domain-Driven Design - Resenha')).toBeInTheDocument()
  })

  it('exibe excerpts dos posts', () => {
    expect(screen.getByText('Resumo do livro Clean Code de Robert C. Martin')).toBeInTheDocument()
  })

  it('filtra posts ao clicar em uma categoria', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Tutorial' }))

    expect(screen.getByText('Spring Boot Tutorial')).toBeInTheDocument()
    expect(screen.queryByText('Clean Code - Fichamento')).not.toBeInTheDocument()
    expect(screen.queryByText('Domain-Driven Design - Resenha')).not.toBeInTheDocument()
  })

  it('exibe todos os posts ao clicar em Todos apos filtrar', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Fichamento' }))
    expect(screen.queryByText('Spring Boot Tutorial')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Todos' }))
    expect(screen.getByText('Spring Boot Tutorial')).toBeInTheDocument()
    expect(screen.getByText('Clean Code - Fichamento')).toBeInTheDocument()
  })

  it('exibe links para os posts individuais', () => {
    const links = screen.getAllByRole('link')
    const postLinks = links.filter((link) => link.getAttribute('href')?.startsWith('/blog/'))
    expect(postLinks).toHaveLength(3)
    expect(postLinks[0]).toHaveAttribute('href', '/blog/clean-code')
  })

  it('exibe data formatada dos posts', () => {
    const dates = screen.getAllByText(/de 2026/)
    expect(dates.length).toBe(3)
  })

  it('exibe label da categoria em cada card', () => {
    const categoryLabels = screen.getAllByText('Fichamento')
    expect(categoryLabels.length).toBeGreaterThanOrEqual(1)
  })
})

describe('Blog Page - sem posts', () => {
  it('exibe mensagem quando nao ha posts', () => {
    renderWithProviders(<BlogPage posts={{ pt: [], en: [] }} />)
    expect(screen.getByText('Nenhum post publicado ainda.')).toBeInTheDocument()
  })
})

describe('Blog Page - idioma ingles', () => {
  it('exibe conteudo em ingles ao trocar idioma', () => {
    renderWithProviders(<BlogPage posts={mockPosts} />)

    fireEvent.click(screen.getByText('EN'))

    expect(screen.getByText('Clean Code - Book Summary')).toBeInTheDocument()
    expect(screen.getByText('Summary of Clean Code by Robert C. Martin')).toBeInTheDocument()
  })
})
