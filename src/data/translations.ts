import { Locale } from '@/contexts/LanguageContext'

const translations = {
  pt: {
    nav: {
      stack: 'Stack',
      areas: 'Áreas',
      experience: 'Experiência',
      education: 'Formação',
      about: 'Sobre',
    },
    hero: {
      aboutMe: 'Sobre mim',
      contact: 'Contato',
    },
    sections: {
      stack: 'Stack e Tecnologias',
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
    meta: {
      homeTitle: 'Ralf Guth — Desenvolvedor de Software',
      homeDescription:
        'Desenvolvedor backend com foco em Java, microsserviços, APIs e arquitetura de software.',
      aboutTitle: 'Sobre — Ralf Guth',
      aboutDescription:
        'Desenvolvedor backend com foco em Java, microsserviços e arquitetura de software.',
    },
  },
  en: {
    nav: {
      stack: 'Stack',
      areas: 'Areas',
      experience: 'Experience',
      education: 'Education',
      about: 'About',
    },
    hero: {
      aboutMe: 'About me',
      contact: 'Contact',
    },
    sections: {
      stack: 'Stack & Technologies',
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
    meta: {
      homeTitle: 'Ralf Guth — Software Developer',
      homeDescription:
        'Backend developer focused on Java, microservices, APIs and software architecture.',
      aboutTitle: 'About — Ralf Guth',
      aboutDescription:
        'Backend developer focused on Java, microservices and software architecture.',
    },
  },
}

export function t(locale: Locale) {
  return translations[locale]
}
