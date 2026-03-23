import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Header from '@/components/layout/Header'

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
  }),
}))

function renderWithProviders() {
  render(
    <LanguageProvider>
      <Header />
    </LanguageProvider>
  )
}

describe('Header', () => {
  beforeEach(() => {
    renderWithProviders()
  })

  it('exibe o logo com link para home', () => {
    const logo = screen.getByText('ralf.guth')
    expect(logo.closest('a')).toHaveAttribute('href', '/')
  })

  it('exibe links de secao', () => {
    expect(screen.getByText('Stack')).toBeInTheDocument()
    expect(screen.getByText('Áreas')).toBeInTheDocument()
    expect(screen.getByText('Experiência')).toBeInTheDocument()
    expect(screen.getByText('Formação')).toBeInTheDocument()
  })

  it('exibe link para pagina sobre', () => {
    expect(screen.getByText('Sobre')).toBeInTheDocument()
  })

  it('exibe botoes de idioma', () => {
    expect(screen.getByText('PT')).toBeInTheDocument()
    expect(screen.getByText('EN')).toBeInTheDocument()
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
  })
})
