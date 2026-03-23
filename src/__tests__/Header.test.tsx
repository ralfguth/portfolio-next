import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/layout/Header'

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
  }),
}))

describe('Header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('exibe o logo com link para home', () => {
    const logo = screen.getByText('ralf.guth')
    expect(logo.closest('a')).toHaveAttribute('href', '/')
  })

  it('exibe links de navegacao', () => {
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Sobre')).toBeInTheDocument()
  })

  it('exibe botao de menu mobile', () => {
    const menuButton = screen.getByRole('button', { name: /menu/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('alterna menu ao clicar no botao', () => {
    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    expect(screen.getByRole('button', { name: /fechar/i })).toBeInTheDocument()
  })
})
