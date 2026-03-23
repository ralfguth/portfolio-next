import { Locale } from '@/contexts/LanguageContext'

export const profile = {
  name: 'Ralf Guth',
  subtitle: 'Java · Quarkus · Spring · PostgreSQL',
  github: 'https://github.com/ralfguth',
  linkedin: 'https://www.linkedin.com/in/ralfguth',
  email: 'rsguth@gmail.com',
  location: 'Florianópolis, SC',
}

const content = {
  pt: {
    title: 'Desenvolvedor Back-End',
    summary:
      'Desenvolvedor de software especializado em backend, com experiência em microsserviços, mensageria e integração de sistemas no setor financeiro. Atualmente focado na operação do PIX com alta performance e escalabilidade.',
    areas: [
      {
        title: 'Backend e APIs',
        description:
          'Desenvolvimento de APIs REST, microsserviços e sistemas distribuídos com Java, Quarkus e Spring Framework.',
      },
      {
        title: 'Pagamentos e PIX',
        description:
          'Desenvolvimento e sustentação de microsserviços que suportam a operação do PIX em ambientes de alta performance e escalabilidade.',
      },
      {
        title: 'Mensageria e Integração',
        description:
          'Integração entre sistemas com RabbitMQ, ActiveMQ/Artemis e Azure Service Bus. Arquiteturas orientadas a eventos.',
      },
      {
        title: 'Banco de Dados',
        description:
          'Modelagem e otimização com PostgreSQL, cache distribuído com Redis e persistência com JPA/Hibernate.',
      },
      {
        title: 'Arquitetura de Software',
        description:
          'Aplicação de padrões como DDD, Clean Architecture e Hexagonal. Pós-graduação em Arquitetura de Software pela FIAP.',
      },
      {
        title: 'Qualidade e Observabilidade',
        description:
          'Revisão de código, documentação técnica, testes automatizados e observabilidade como parte do fluxo de trabalho.',
      },
    ],
    experience: [
      {
        role: 'Desenvolvedor de Software',
        company: 'Cresol Cooperativa',
        period: 'jun/2022 — presente',
        description:
          'Desenvolvimento de microsserviços para operação do PIX, com foco em escalabilidade, resiliência e alta performance. Java, Quarkus, PostgreSQL, Redis, RabbitMQ, ActiveMQ/Artemis, Azure Service Bus, Docker e Kubernetes.',
      },
      {
        role: 'Desenvolvedor de Software',
        company: 'FEESC — Fundação de Ensino e Engenharia de SC',
        period: 'fev/2021 — jun/2022',
        description:
          'Desenvolvimento do Sistema de Acompanhamento e Avaliação de Cursos. Java EE, Hibernate, JSF e PostgreSQL.',
      },
      {
        role: 'Desenvolvedor de Software',
        company: 'Freelance',
        period: 'jan/2020 — fev/2021',
        description:
          'Desenvolvimento de landing pages e sites institucionais com WordPress.',
      },
      {
        role: 'Professor',
        company: 'Prefeitura Municipal de Florianópolis',
        period: 'mar/2016 — dez/2019',
        description: '',
      },
      {
        role: 'Técnico de SIG',
        company: 'Universidade Federal de Santa Catarina',
        period: 'jun/2012 — set/2015',
        description:
          'Desenvolvimento de geometrias e apoio técnico de pesquisa no Laboratório Cidade e Sociedade (CFH/UFSC).',
      },
    ],
    education: [
      {
        degree: 'Pós-graduação em Software Architecture',
        institution: 'FIAP',
        period: '2025 — 2026',
        status: 'em andamento',
      },
      {
        degree: 'Tecnólogo em Gestão da Tecnologia da Informação',
        institution: 'IFSC — Instituto Federal de Santa Catarina',
        period: '',
      },
      {
        degree: 'Bacharelado e Licenciatura em Geografia',
        institution: 'Universidade Federal de Santa Catarina',
        period: '',
      },
    ],
    about: {
      intro:
        'Sou desenvolvedor de software especializado em backend, trabalhando com Java e seu ecossistema. Já atuei nos setores de educação, pesquisa, geoprocessamento, gestão pública e instituições financeiras.',
      trajectory:
        'Comecei minha carreira na área de geoprocessamento e sistemas de informação geográfica na UFSC. Passei pela docência, desenvolvimento freelance e atuação em projetos de pesquisa e educação na FEESC. Atualmente, trabalho na Cresol Cooperativa, desenvolvendo microsserviços que sustentam a operação do PIX, com foco em escalabilidade, resiliência e alta performance.',
      focus:
        'Meu foco técnico está em microsserviços com Java e Quarkus, banco de dados PostgreSQL, cache distribuído com Redis e plataformas de mensageria como RabbitMQ, ActiveMQ/Artemis e Azure Service Bus. Utilizo Docker e Kubernetes para conteinerização e estou cursando pós-graduação em Arquitetura de Software pela FIAP.',
      principles: [
        'Código orientado ao domínio do negócio, com linguagem ubíqua e entrega de valor',
        'Testes automatizados como parte do processo, não como etapa extra',
        'Documentação técnica que resolve dúvidas reais',
        'Revisão de código como ferramenta de qualidade',
        'Aprendizado constante, com foco em profundidade',
      ],
    },
  },
  en: {
    title: 'Back-End Developer',
    summary:
      'Software developer specialized in backend, with experience in microservices, messaging and system integration in the financial sector. Currently focused on PIX payment operations with high performance and scalability.',
    areas: [
      {
        title: 'Backend & APIs',
        description:
          'Development of REST APIs, microservices and distributed systems with Java, Quarkus and Spring Framework.',
      },
      {
        title: 'Payments & PIX',
        description:
          'Development and maintenance of microservices supporting PIX payment operations in high-performance and scalable environments.',
      },
      {
        title: 'Messaging & Integration',
        description:
          'System integration with RabbitMQ, ActiveMQ/Artemis and Azure Service Bus. Event-driven architectures.',
      },
      {
        title: 'Databases',
        description:
          'Modeling and optimization with PostgreSQL, distributed caching with Redis and persistence with JPA/Hibernate.',
      },
      {
        title: 'Software Architecture',
        description:
          'Application of patterns such as DDD, Clean Architecture and Hexagonal. Postgraduate in Software Architecture at FIAP.',
      },
      {
        title: 'Quality & Observability',
        description:
          'Code review, technical documentation, automated testing and observability as part of the workflow.',
      },
    ],
    experience: [
      {
        role: 'Software Developer',
        company: 'Cresol Cooperativa',
        period: 'Jun/2022 — present',
        description:
          'Development of microservices for PIX payment operations, focused on scalability, resilience and high performance. Java, Quarkus, PostgreSQL, Redis, RabbitMQ, ActiveMQ/Artemis, Azure Service Bus, Docker and Kubernetes.',
      },
      {
        role: 'Software Developer',
        company: 'FEESC — Santa Catarina Teaching and Engineering Foundation',
        period: 'Feb/2021 — Jun/2022',
        description:
          'Development of the Course Monitoring and Evaluation System. Java EE, Hibernate, JSF and PostgreSQL.',
      },
      {
        role: 'Software Developer',
        company: 'Freelance',
        period: 'Jan/2020 — Feb/2021',
        description:
          'Development of landing pages and institutional websites with WordPress.',
      },
      {
        role: 'Teacher',
        company: 'City of Florianópolis',
        period: 'Mar/2016 — Dec/2019',
        description: '',
      },
      {
        role: 'GIS Technician',
        company: 'Federal University of Santa Catarina',
        period: 'Jun/2012 — Sep/2015',
        description:
          'Geometry development and technical research support at the City and Society Laboratory (CFH/UFSC).',
      },
    ],
    education: [
      {
        degree: 'Postgraduate in Software Architecture',
        institution: 'FIAP',
        period: '2025 — 2026',
        status: 'in progress',
      },
      {
        degree: 'IT Management Technologist',
        institution: 'IFSC — Federal Institute of Santa Catarina',
        period: '',
      },
      {
        degree: 'Bachelor and Licentiate in Geography',
        institution: 'Federal University of Santa Catarina',
        period: '',
      },
    ],
    about: {
      intro:
        'I am a software developer specialized in backend, working with Java and its ecosystem. I have worked in education, research, geoprocessing, public administration and financial institutions.',
      trajectory:
        'I started my career in geoprocessing and geographic information systems at UFSC. I went through teaching, freelance development and worked on research and education projects at FEESC. Currently, I work at Cresol Cooperativa, developing microservices that support PIX payment operations, focused on scalability, resilience and high performance.',
      focus:
        'My technical focus is on microservices with Java and Quarkus, PostgreSQL databases, distributed caching with Redis and messaging platforms such as RabbitMQ, ActiveMQ/Artemis and Azure Service Bus. I use Docker and Kubernetes for containerization and I am pursuing a postgraduate degree in Software Architecture at FIAP.',
      principles: [
        'Domain-driven code with ubiquitous language and a focus on delivering business value',
        'Automated testing as part of the process, not an extra step',
        'Technical documentation that solves real questions',
        'Code review as a quality tool',
        'Continuous learning with a focus on depth',
      ],
    },
  },
}

export function getContent(locale: Locale) {
  return content[locale]
}

export function getTitle(locale: Locale) {
  return content[locale].title
}

export function getAreas(locale: Locale) {
  return content[locale].areas
}

export function getExperience(locale: Locale) {
  return content[locale].experience
}

export function getEducation(locale: Locale) {
  return content[locale].education
}

export function getAbout(locale: Locale) {
  return content[locale].about
}
