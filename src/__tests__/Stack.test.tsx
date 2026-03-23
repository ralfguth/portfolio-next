import { render, screen } from '@testing-library/react'
import Stack from '@/components/home/Stack'

describe('Stack', () => {
  beforeEach(() => {
    render(<Stack />)
  })

  it('exibe o titulo da secao', () => {
    expect(screen.getByText('Stack e Tecnologias')).toBeInTheDocument()
  })

  it('exibe os grupos de tecnologia', () => {
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('Banco de Dados')).toBeInTheDocument()
    expect(screen.getByText('Mensageria')).toBeInTheDocument()
    expect(screen.getByText('DevOps / Cloud')).toBeInTheDocument()
    expect(screen.getByText('Frontend / Web')).toBeInTheDocument()
  })

  it('exibe tecnologias individuais', () => {
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('Quarkus')).toBeInTheDocument()
    expect(screen.getByText('Spring Framework')).toBeInTheDocument()
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
    expect(screen.getByText('RabbitMQ')).toBeInTheDocument()
    expect(screen.getByText('Docker')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
  })
})
