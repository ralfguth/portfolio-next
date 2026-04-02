import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from '@/test-utils'
import Header from '@/components/layout/Header'

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
  }),
}))

describe('Header', () => {
  beforeEach(() => {
    renderWithProviders(<Header />)
  })

  it('exibe o logo com link para home', () => {
    const logo = screen.getByText((content, element) => {
      return element?.tagName === 'A' && element?.textContent === 'ralf.guth'
    })
    expect(logo).toHaveAttribute('href', '/')
  })

  it('exibe links de secao', () => {
    expect(screen.getByText('Tecnologias')).toBeInTheDocument()
    expect(screen.getByText('Áreas')).toBeInTheDocument()
    expect(screen.getByText('Experiência')).toBeInTheDocument()
    expect(screen.getByText('Formação')).toBeInTheDocument()
  })

  it('exibe link para pagina sobre', () => {
    expect(screen.getByText('Sobre')).toBeInTheDocument()
  })

  it('exibe link para o blog', () => {
    const blogLink = screen.getByText('Blog')
    expect(blogLink).toBeInTheDocument()
    expect(blogLink.closest('a')).toHaveAttribute('href', '/blog')
  })

  it('exibe botoes de idioma', () => {
    expect(screen.getByText('PT')).toBeInTheDocument()
    expect(screen.getByText('EN')).toBeInTheDocument()
  })

  it('exibe botao de tema', () => {
    expect(screen.getByRole('button', { name: /tema/i })).toBeInTheDocument()
  })

  it('alterna menu ao clicar no botao', () => {
    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    expect(screen.getByRole('button', { name: /fechar/i })).toBeInTheDocument()
  })

  it('troca idioma ao clicar em EN', () => {
    fireEvent.click(screen.getByText('EN'))
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })
})
