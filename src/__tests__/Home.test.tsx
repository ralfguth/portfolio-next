import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
  }),
}))

describe('Home', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('exibe o nome do desenvolvedor', () => {
    expect(screen.getByText('Ralf Guth')).toBeInTheDocument()
  })

  it('exibe o titulo profissional', () => {
    expect(screen.getByText('Desenvolvedor de Software')).toBeInTheDocument()
  })

  it('exibe link para pagina sobre', () => {
    expect(screen.getByRole('link', { name: 'Sobre mim' })).toHaveAttribute(
      'href',
      '/about'
    )
  })

  it('exibe link de contato por email', () => {
    const contactLinks = screen.getAllByRole('link', { name: /e-mail/i })
    expect(contactLinks.length).toBeGreaterThan(0)
  })

  it('exibe secao de stack', () => {
    expect(screen.getByText('Stack e Tecnologias')).toBeInTheDocument()
  })

  it('exibe tecnologias principais', () => {
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
    expect(screen.getByText('Docker')).toBeInTheDocument()
  })

  it('exibe secao de areas de atuacao', () => {
    expect(screen.getByText('Áreas de Atuação')).toBeInTheDocument()
  })

  it('exibe secao de experiencia', () => {
    expect(screen.getByText('Experiência e Atuação')).toBeInTheDocument()
  })

  it('exibe links externos (GitHub, LinkedIn)', () => {
    const githubLinks = screen.getAllByRole('link', { name: /GitHub/i })
    expect(githubLinks.some((el) => el.getAttribute('href') === 'https://github.com/ralfguth')).toBe(true)
    const linkedinLinks = screen.getAllByRole('link', { name: /LinkedIn/i })
    expect(linkedinLinks.some((el) => el.getAttribute('href') === 'https://www.linkedin.com/in/ralf-guth-7404a7161/')).toBe(true)
  })
})
