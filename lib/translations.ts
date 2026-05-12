export type Language = 'en' | 'fr'

export const translations = {
  en: {
    nav: {
      work: 'Work',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
      available: 'Available',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      availability: 'available in',
      slots: 'SLOTS',
      role: 'FullStack Developer',
      line1: 'crafting modern',
      line2: 'digital products',
      description: 'Beautifully designed, performant interfaces for startups, SaaS platforms and ambitious brands. Based in Dakar — working worldwide.',
      ctaTalk: "Let's Talk",
      ctaEmail: 'Email Me',
      scroll: 'Scroll',
    },
    work: {
      badge: 'Projects',
      title: 'A curated selection of',
      subtitle: 'products built with care',
      viewDetails: 'View Details',
      allProjects: 'All Projects',
      category: 'Category',
      client: 'Client',
      date: 'Date',
      next: 'Next Project',
      back: 'Back to projects',
      role: 'Role',
      year: 'Year',
      challenge: 'The Challenge',
      solution: 'The Solution',
      ctaSimilar: 'Have a similar project?',
      ctaStart: 'Start a Conversation',
    },
    about: {
      badge: 'About Me',
      title: 'Designing with Purpose,',
      subtitle: 'Coding with Precision',
      description1: "I am a creative developer and designer based in Dakar, specializing in building premium digital experiences that balance aesthetics with performance.",
      description2: "With over 4 years of experience, I've helped startups and established brands transform their ideas into functional, beautiful products. I believe that great design is not just how it looks, but how it works and solves problems.",
      stats: [
        { label: 'Years Experience', value: '04+' },
        { label: 'Projects Completed', value: '20+' },
        { label: 'Happy Clients', value: '15+' },
      ]
    },
    experience: {
      badge: 'History',
      title: 'Experience',
      items: [
        {
          role: 'Lead UI/UX Designer & FullStack Developer',
          company: 'Yoni Africa',
          period: '2023 — Present',
          description: 'Leading the design and development of a comprehensive logistics ecosystem. Established the company-wide design system and DesignOps rituals.'
        },
        {
          role: 'UI/UX Designer',
          company: 'Sonatel Academy',
          period: '2022 — 2023',
          description: 'Designed internal tools and educational platforms for Senegal\'s premier coding school, focusing on accessibility and user retention.'
        },
        {
          role: 'Freelance Product Designer',
          company: 'Various Startups',
          period: '2020 — 2022',
          description: 'Collaborated with international clients to deliver high-fidelity prototypes, brand identities, and responsive web applications.'
        }
      ]
    },
    skills: {
      badge: 'Capabilities',
      title: 'Expertise',
      categories: {
        design: 'Design',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools'
      }
    },
    contact: {
      badge: 'Get In Touch',
      title: "Let's Build The",
      titleGradient: 'Digital Future',
      description: 'Have a project in mind or just want to chat? I&apos;m always excited to discuss new opportunities and creative collaborations.',
      cta: 'Start a Conversation',
      subtitle: 'Connect',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        placeholderName: 'John Doe',
        placeholderEmail: 'john@example.com',
        placeholderSubject: 'Project Inquiry',
        placeholderMessage: 'Tell me about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        successTitle: 'Message Sent!',
        successMessage: "Thank you for reaching out. I'll get back to you within 24 hours.",
        sendAnother: 'Send another message',
      },
      whatsappTitle: 'Chat on WhatsApp',
      whatsappDescription: 'Need a quick response? Message me directly on WhatsApp for real-time consultation.',
      whatsappCta: 'Message me now',
      whatsappDefaultMessage: 'Hello Seydina, I am contacting you from your portfolio regarding a project.',
      location: 'Location',
    },
    footer: {
      brand: 'Building modern digital experiences for startups, SaaS platforms and ambitious brands.',
      rights: 'All rights reserved.',
      builtWith: 'Designed & Built with',
    }
  },
  fr: {
    nav: {
      work: 'Projets',
      about: 'À propos',
      experience: 'Expérience',
      skills: 'Compétences',
      contact: 'Contact',
      available: 'Disponible',
      menu: 'Menu',
      close: 'Fermer',
    },
    hero: {
      availability: 'disponible en',
      slots: 'PLACES',
      role: 'Développeur FullStack',
      line1: 'créant des produits',
      line2: 'numériques modernes',
      description: 'Interfaces performantes et design soigné pour startups, plateformes SaaS et marques ambitieuses. Basé à Dakar — travaillant partout dans le monde.',
      ctaTalk: 'Discutons',
      ctaEmail: 'M\'écrire',
      scroll: 'Défiler',
    },
    work: {
      badge: 'Projets',
      title: 'Une sélection de',
      subtitle: 'produits conçus avec soin',
      viewDetails: 'Détails',
      allProjects: 'Tous les projets',
      category: 'Catégorie',
      client: 'Client',
      date: 'Date',
      next: 'Projet Suivant',
      back: 'Retour aux projets',
      role: 'Rôle',
      year: 'Année',
      challenge: 'Le Défi',
      solution: 'La Solution',
      ctaSimilar: 'Un projet similaire ?',
      ctaStart: 'Démarrer une discussion',
    },
    about: {
      badge: 'À Propos',
      title: 'Concevoir avec Sens,',
      subtitle: 'Coder avec Précision',
      description1: "Je suis un développeur créatif et designer basé à Dakar, spécialisé dans la création d'expériences numériques premium qui équilibrent esthétique et performance.",
      description2: "Avec plus de 4 ans d'expérience, j'ai aidé des startups et des marques établies à transformer leurs idées en produits fonctionnels et beaux. Je crois qu'un bon design n'est pas seulement son apparence, mais la façon dont il fonctionne et résout les problèmes.",
      stats: [
        { label: "Années d'expérience", value: '04+' },
        { label: 'Projets terminés', value: '20+' },
        { label: 'Clients satisfaits', value: '15+' },
      ]
    },
    experience: {
      badge: 'Parcours',
      title: 'Expérience',
      items: [
        {
          role: 'Lead UI/UX Designer & Développeur FullStack',
          company: 'Yoni Africa',
          period: '2023 — Présent',
          description: 'Direction du design et du développement d\'un écosystème logistique complet. Mise en place du design system et des rituels DesignOps.'
        },
        {
          role: 'UI/UX Designer',
          company: 'Sonatel Academy',
          period: '2022 — 2023',
          description: 'Design d\'outils internes et de plateformes éducatives pour la première école de code du Sénégal, focus sur l\'accessibilité.'
        },
        {
          role: 'Product Designer Freelance',
          company: 'Startups Variées',
          period: '2020 — 2022',
          description: 'Collaboration avec des clients internationaux pour livrer des prototypes haute fidélité et des applications web responsives.'
        }
      ]
    },
    skills: {
      badge: 'Capacités',
      title: 'Expertise',
      categories: {
        design: 'Design',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Outils'
      }
    },
    contact: {
      badge: 'Me Contacter',
      title: 'Bâtissons le',
      titleGradient: 'Futur Numérique',
      description: 'Un projet en tête ou juste envie de discuter ? Je suis toujours ravi de parler de nouvelles opportunités et de collaborations créatives.',
      cta: 'Démarrer une discussion',
      subtitle: 'Connexion',
      form: {
        name: 'Nom',
        email: 'Email',
        subject: 'Objet',
        message: 'Message',
        placeholderName: 'Jean Dupont',
        placeholderEmail: 'jean@example.com',
        placeholderSubject: 'Demande de projet',
        placeholderMessage: 'Parlez-moi de votre projet...',
        send: 'Envoyer',
        sending: 'Envoi...',
        successTitle: 'Message envoyé !',
        successMessage: 'Merci de m\'avoir contacté. Je vous reviendrai d\'ici 24 heures.',
        sendAnother: 'Envoyer un autre message',
      },
      whatsappTitle: 'Discuter sur WhatsApp',
      whatsappDescription: 'Besoin d\'une réponse rapide ? Contactez-moi directement sur WhatsApp pour une consultation en temps réel.',
      whatsappCta: 'M\'écrire maintenant',
      whatsappDefaultMessage: 'Bonjour Seydina, je vous contacte depuis votre portfolio pour un projet.',
      location: 'Localisation',
    },
    footer: {
      brand: 'Créer des expériences numériques modernes pour les startups, plateformes SaaS et marques ambitieuses.',
      rights: 'Tous droits réservés.',
      builtWith: 'Conçu et construit avec',
    }
  }
}
