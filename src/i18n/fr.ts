export const fr = {
  app: {
    loading: "Chargement de l'Archive...",
  },
  nav: {
    home: 'Accueil',
    gm: 'Meneur de Jeu',
    players: 'Joueurs',
    about: 'A propos',
    support: 'Soutenir',
    languageLabel: 'Langue',
    languageFr: 'Francais',
    languageEn: 'English',
    homeAriaLabel: 'Accueil',
    diceAlt: 'de',
  },
  footer: {
    brand: 'A/Normal Archive',
    copyrightTemplate: '{year} Aurore Darcissac - Tous droits reserves.',
    legal: 'Mentions legales',
    support: 'Soutenir',
    tagline: "Ces documents sont offerts avec l'achat du livret officiel.",
  },
  home: {
    hero: {
      eyebrow: 'Ressources officielles',
      title: 'A NORMAL :',
      subtitle: "L'Archive des Ressources Officielles",
      body:
        "Plongez dans les strates d'un monde onirique et brutal. Les archives du jeu de role d'Aurore Darcissac - fiches, plans, scenarios et outils pour enrichir chaque session.",
      ctaGm: 'Espace Meneur de Jeu',
      ctaPlayers: 'Espace Joueurs',
      countdownBefore: 'Lancement Amazon dans',
      countdownAfter: 'Livre en ligne depuis',
      units: {
        days: 'jours',
        hours: 'heures',
        minutes: 'minutes',
        seconds: 'secondes',
      },
    },
    cards: {
      sectionLabel: 'Navigation',
      sectionTitle: 'Choisissez votre role',
      gm: {
        eyebrow: 'Confidentiel',
        title: 'Espace Meneur de Jeu',
        body:
          "Archives confidentielles reservees aux architectes de l'etrange. Fiches de PNJ, scenarios et ressources destinees au Meneur.",
        spoilerWarning: 'Contient des spoilers.',
        cta: "Acceder a l'espace MJ",
      },
      players: {
        eyebrow: 'Ressources libres',
        title: 'Espace Joueurs',
        body:
          "Fiches de personnage vierges, plans et generateur de personnage aleatoire. Tout ce qu'il vous faut pour creer votre personnage et jouer.",
        cta: "Acceder a l'espace Joueurs",
      },
    },
  },
  pages: {
    players: {
      title: 'Espace Joueurs',
      description:
        "Preparez votre prochaine session avec notre archive d'outils essentiels. Tout le necessaire pour donner vie a votre personnage et naviguer dans l'obscurite.",
      bento: {
        featuredLabel: 'Essentiel',
        mainFallbackDescription: "La version la plus recente, optimisee pour l'immersion narrative.",
        sideFallbackDescription: "Tous les plans disponibles pour naviguer dans l'univers de A/Normal.",
        playerSheetAlt: 'Apercu de la fiche joueur',
      },
      characterGenerator: {
        title: 'Generateur de personnage',
        description:
          'Tirez aleatoirement genre, age, anormalites connue et inconnue pour votre personnage.',
      },
      randomizer: {
        title: 'Aide au tirage de personnage',
        rolling: 'Tirage...',
        roll: 'Tirer',
        genderLabel: 'Genre',
        ageLabel: 'Age',
        yearsSuffix: 'ans',
        male: 'Homme',
        female: 'Femme',
        knownAnomalyLabel: 'Anormalite connue',
        unknownAnomalyLabel: 'Anormalite inconnue',
        pointsSuffix: 'pts',
      },
      community: {
        title: 'Ressources communautaires',
        description: 'Retrouvez des centaines de fiches creees par la communaute sur notre Discord.',
        cta: 'Rejoindre le Discord',
      },
    },
    gm: {
      badge: 'Contient des spoilers',
      title: 'Espace Meneur de Jeu',
      description:
        "Archives confidentielles reservees aux architectes de l'etrange. Accedez aux structures narratives, cartographies occultes et dossiers de PNJ pour orchestrer vos sessions.",
      backToPlayers: 'Je suis un joueur - espace Joueurs',
    },
    legal: {
      title: 'Mentions legales',
      description:
        "Informations relatives au site A/Normal, aux ressources mises a disposition et aux conditions d'utilisation des fichiers telechargeables.",
    },
  },
} as const

export type TranslationSchema = typeof fr
