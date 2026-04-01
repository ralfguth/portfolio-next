import { Locale } from '@/contexts/LanguageContext'

const translations = {
  pt: {
    nav: {
      stack: 'Tecnologias',
      areas: 'Áreas',
      experience: 'Experiência',
      education: 'Formação',
      about: 'Sobre',
      blog: 'Blog',
    },
    hero: {
      aboutMe: 'Sobre mim',
      contact: 'Contato',
    },
    sections: {
      stack: 'Tecnologias',
      areas: 'Áreas de Atuação',
      experience: 'Experiência Profissional',
      education: 'Formação Acadêmica',
    },
    about: {
      pageTitle: 'Sobre mim',
      trajectory: 'Trajetória',
      focus: 'Foco Técnico',
      technologies: 'Principais Tecnologias',
      principles: 'Princípios de Trabalho',
      contact: 'Contato',
    },
    blog: {
      title: 'Blog',
      description: 'Fichamentos, resenhas e tutoriais sobre desenvolvimento de software.',
      noPosts: 'Nenhum post publicado ainda.',
      readMore: 'Ler mais',
      backToList: 'Voltar para o blog',
      categories: {
        all: 'Todos',
        fichamento: 'Fichamento',
        resenha: 'Resenha',
        tutorial: 'Tutorial',
      },
    },
    meta: {
      homeTitle: 'Ralf Guth — Desenvolvedor de Software',
      homeDescription:
        'Desenvolvedor backend com foco em Java, microsserviços, APIs e arquitetura de software.',
      aboutTitle: 'Sobre — Ralf Guth',
      aboutDescription:
        'Desenvolvedor backend com foco em Java, microsserviços e arquitetura de software.',
      blogTitle: 'Blog — Ralf Guth',
      blogDescription:
        'Fichamentos, resenhas e tutoriais sobre desenvolvimento de software.',
    },
  },
  en: {
    nav: {
      stack: 'Technologies',
      areas: 'Areas',
      experience: 'Experience',
      education: 'Education',
      about: 'About',
      blog: 'Blog',
    },
    hero: {
      aboutMe: 'About me',
      contact: 'Contact',
    },
    sections: {
      stack: 'Technologies',
      areas: 'Areas of Expertise',
      experience: 'Professional Experience',
      education: 'Education',
    },
    about: {
      pageTitle: 'About me',
      trajectory: 'Trajectory',
      focus: 'Technical Focus',
      technologies: 'Main Technologies',
      principles: 'Work Principles',
      contact: 'Contact',
    },
    blog: {
      title: 'Blog',
      description: 'Book summaries, reviews and tutorials on software development.',
      noPosts: 'No posts published yet.',
      readMore: 'Read more',
      backToList: 'Back to blog',
      categories: {
        all: 'All',
        fichamento: 'Book Summary',
        resenha: 'Review',
        tutorial: 'Tutorial',
      },
    },
    meta: {
      homeTitle: 'Ralf Guth — Software Developer',
      homeDescription:
        'Backend developer focused on Java, microservices, APIs and software architecture.',
      aboutTitle: 'About — Ralf Guth',
      aboutDescription:
        'Backend developer focused on Java, microservices and software architecture.',
      blogTitle: 'Blog — Ralf Guth',
      blogDescription:
        'Book summaries, reviews and tutorials on software development.',
    },
  },
}

export function t(locale: Locale) {
  return translations[locale]
}
