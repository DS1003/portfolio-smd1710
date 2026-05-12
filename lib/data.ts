export interface Project {
  id: string
  title: string
  role: {
    en: string
    fr: string
  }
  client: string
  category: {
    en: string
    fr: string
  }
  description: {
    en: string
    fr: string
  }
  longDescription?: {
    en: string
    fr: string
  }
  date: string
  technologies: string[]
  image: string
  icon: string
  stats?: { label: { en: string; fr: string }; value: string }[]
  challenges?: {
    en: string[]
    fr: string[]
  }
  solutions?: {
    en: string[]
    fr: string[]
  }
  gallery?: string[]
}

export const projects: Project[] = [
  {
    id: 'yoni-africa',
    title: 'Yoni Africa',
    role: {
      en: 'Lead UI/UX Designer & DesignOps',
      fr: 'Lead UI/UX Designer & DesignOps'
    },
    client: 'Yoni Africa SAS',
    category: {
      en: 'Product Ecosystem',
      fr: 'Écosystème Produit'
    },
    description: {
      en: 'Designed the complete digital ecosystem — web backoffice, client mobile app, delivery app, business app, landing page, and an end-to-end design system unifying every touchpoint.',
      fr: 'Conception de l\'écosystème numérique complet — backoffice web, application mobile client, livreur, entreprise, landing page et un design system complet.'
    },
    longDescription: {
      en: 'Yoni Africa is a comprehensive logistics and commerce ecosystem designed to empower African businesses. The challenge was to create a unified design language that works across multiple platforms.',
      fr: 'Yoni Africa est un écosystème complet de logistique et de commerce conçu pour autonomiser les entreprises africaines. Le défi était de créer un langage de design unifié sur plusieurs plateformes.'
    },
    date: 'Mar 2024',
    technologies: ['Figma', 'DesignOps', 'Design System', 'React Native'],
    image: '/projects/yoni-africa.jpg',
    icon: 'Y',
    stats: [
      { label: { en: 'Users', fr: 'Utilisateurs' }, value: '10k+' },
      { label: { en: 'Delivery Time', fr: 'Temps de livraison' }, value: '-25%' },
      { label: { en: 'Components', fr: 'Composants' }, value: '200+' }
    ],
    challenges: {
      en: ['Maintaining consistency across platforms.', 'Scaling for a growing team.'],
      fr: ['Maintenir la cohérence entre les plateformes.', 'Passer à l\'échelle pour une équipe en croissance.']
    },
    solutions: {
      en: ['Created a multi-platform atomic design system.', 'Established DesignOps rituals.'],
      fr: ['Création d\'un design system atomique multi-plateforme.', 'Établissement de rituels DesignOps.']
    }
  },
  {
    id: 'sonatel-academy',
    title: 'Sonatel Academy',
    role: {
      en: 'Lead UI/UX & FullStack',
      fr: 'Lead UI/UX & FullStack'
    },
    client: 'Sonatel Group',
    category: {
      en: 'EdTech Platform',
      fr: 'Plateforme EdTech'
    },
    description: {
      en: 'End-to-end educational management platform driving sourcing, online assessments, learner management, and professional placement at national scale.',
      fr: 'Plateforme de gestion éducative de bout en bout pilotant le sourcing, les évaluations en ligne, la gestion des apprenants et le placement professionnel.'
    },
    longDescription: {
      en: 'Sonatel Academy is Senegal\'s premier coding school. The platform we built manages the entire student lifecycle.',
      fr: 'Sonatel Academy est la première école de codage du Sénégal. La plateforme que nous avons construite gère l\'ensemble du cycle de vie des étudiants.'
    },
    date: 'Aug 2024',
    technologies: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL'],
    image: '/projects/sonatel-academy.jpg',
    icon: 'S',
    stats: [
      { label: { en: 'Applicants', fr: 'Candidats' }, value: '15k/yr' },
      { label: { en: 'Placement Rate', fr: 'Taux de placement' }, value: '85%' }
    ]
  },
  {
    id: 'dmt-qhse',
    title: 'DMT QHSE Platform',
    role: {
      en: 'Lead UI/UX & Frontend Developer',
      fr: 'Lead UI/UX & Développeur Frontend'
    },
    client: 'Dakar Mobility & Transit',
    category: {
      en: 'Enterprise Solution',
      fr: 'Solution Entreprise'
    },
    description: {
      en: 'Redesigned and rebuilt internal enterprise platforms — including a full QHSE management suite — with modern interfaces and streamlined workflows.',
      fr: 'Refonte et reconstruction des plateformes internes de l\'entreprise — y compris une suite complète de gestion QHSE — avec des interfaces modernes.'
    },
    longDescription: {
      en: 'The Dakar Mobility & Transit (DMT) QHSE platform is a critical tool for managing Quality, Health, Safety, and Environment standards.',
      fr: 'La plateforme QHSE de Dakar Mobility & Transit (DMT) est un outil critique pour la gestion des normes Qualité, Hygiène, Sécurité et Environnement.'
    },
    date: 'Nov 2023',
    technologies: ['NuxtJS', 'Figma', 'Design System'],
    image: '/projects/dmt-qhse.jpg',
    icon: 'D',
  },
  {
    id: 'neosync',
    title: 'NeoSync',
    role: {
      en: 'FullStack Developer',
      fr: 'Développeur FullStack'
    },
    client: 'NeoSync SaaS',
    category: {
      en: 'SaaS Platform',
      fr: 'Plateforme SaaS'
    },
    description: {
      en: 'A WooCommerce synchronization platform enabling seamless data flow, automation, and inventory orchestration across multiple stores.',
      fr: 'Une plateforme de synchronisation WooCommerce permettant un flux de données fluide, l\'automatisation et l\'orchestration des stocks.'
    },
    longDescription: {
      en: 'NeoSync is a specialized SaaS tool for e-commerce owners. It solves the pain point of managing multiple WooCommerce stores.',
      fr: 'NeoSync est un outil SaaS spécialisé pour les propriétaires de e-commerce. Il résout le problème de la gestion de plusieurs boutiques WooCommerce.'
    },
    date: 'Jul 2023',
    technologies: ['Next.js', 'ExpressJS', 'Prisma', 'PostgreSQL'],
    image: '/projects/neosync.jpg',
    icon: 'N',
  },
  {
    id: 'ecole-221',
    title: 'École 221',
    role: {
      en: 'Lead UI/UX Designer',
      fr: 'Lead UI/UX Designer'
    },
    client: 'École 221',
    category: {
      en: 'EdTech Design',
      fr: 'Design EdTech'
    },
    description: {
      en: 'School management 360 platform — a comprehensive UX system covering enrollment, academics, administration and parent communication.',
      fr: 'Plateforme 360 de gestion scolaire — un système UX complet couvrant les inscriptions, les études, l\'administration et la communication.'
    },
    longDescription: {
      en: 'École 221 is a modern educational management system tailored for the African market.',
      fr: 'École 221 est un système moderne de gestion éducative adapté au marché africain.'
    },
    date: 'Feb 2023',
    technologies: ['Figma', 'UX Research', 'Prototyping'],
    image: '/projects/ecole-221.jpg',
    icon: 'É',
  },
]
