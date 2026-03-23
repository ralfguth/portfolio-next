import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/test-utils'
import About from '@/pages/about'

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/about',
  }),
}))

describe('About', () => {
  beforeEach(() => {
    renderWithProviders(<About />)
  })

  it('exibe o titulo da pagina', () => {
    expect(screen.getByText('Sobre mim')).toBeInTheDocument()
  })

  it('exibe o nome', () => {
    expect(screen.getByText('Ralf Guth')).toBeInTheDocument()
  })

  it('exibe a secao de trajetoria', () => {
    expect(screen.getByText('Trajetória')).toBeInTheDocument()
  })

  it('exibe a secao de foco tecnico', () => {
    expect(screen.getByText('Foco Técnico')).toBeInTheDocument()
  })

  it('exibe a secao de principios', () => {
    expect(screen.getByText('Princípios de Trabalho')).toBeInTheDocument()
  })

  it('exibe os principios de trabalho', () => {
    expect(
      screen.getByText(/Código simples e legível/)
    ).toBeInTheDocument()
  })

  it('exibe links de contato', () => {
    const githubLinks = screen.getAllByRole('link', { name: /GitHub/ })
    expect(githubLinks.length).toBeGreaterThanOrEqual(1)
    const linkedinLinks = screen.getAllByRole('link', { name: /LinkedIn/ })
    expect(linkedinLinks.length).toBeGreaterThanOrEqual(1)
  })
})
