import type { TranslationSchema } from './fr'

export const en: TranslationSchema = {
  app: {
    loading: 'Loading the Archive...',
  },
  nav: {
    home: 'Home',
    gm: 'Game Master',
    players: 'Players',
    about: 'About',
    support: 'Support',
    languageLabel: 'Language',
    languageFr: 'Francais',
    languageEn: 'English',
    homeAriaLabel: 'Home',
    diceAlt: 'die',
  },
  footer: {
    brand: 'A/Normal Archive',
    copyrightTemplate: '{year} Aurore Darcissac - All rights reserved.',
    legal: 'Legal notice',
    support: 'Support',
    tagline: 'These documents are included with the official booklet purchase.',
  },
  home: {
    hero: {
      eyebrow: 'Official resources',
      title: 'A NORMAL :',
      subtitle: 'The Official Resource Archive',
      body:
        "Dive into the layers of a dreamlike and brutal world. The Aurore Darcissac role-playing game archive - sheets, maps, scenarios and tools to enrich every session.",
      ctaGm: 'Game Master Area',
      ctaPlayers: 'Players Area',
      countdownBefore: 'Amazon launch in',
      countdownAfter: 'Book online for',
      units: {
        days: 'days',
        hours: 'hours',
        minutes: 'minutes',
        seconds: 'seconds',
      },
    },
    cards: {
      sectionLabel: 'Navigation',
      sectionTitle: 'Choose your role',
      gm: {
        eyebrow: 'Confidential',
        title: 'Game Master Area',
        body:
          'Confidential archives for the architects of the strange. NPC sheets, scenarios and resources dedicated to the Game Master.',
        spoilerWarning: 'Contains spoilers.',
        cta: 'Go to GM area',
      },
      players: {
        eyebrow: 'Free resources',
        title: 'Players Area',
        body:
          'Blank character sheets, maps and a random character generator. Everything you need to create your character and play.',
        cta: 'Go to Players area',
      },
    },
  },
  pages: {
    players: {
      title: 'Players Area',
      description:
        'Prepare your next session with our archive of essential tools. Everything you need to bring your character to life and navigate the darkness.',
    },
    gm: {
      badge: 'Contains spoilers',
      title: 'Game Master Area',
      description:
        'Confidential archives for the architects of the strange. Access narrative structures, occult maps and NPC files to run your sessions.',
      backToPlayers: "I am a player - Players area",
    },
    legal: {
      title: 'Legal notice',
      description:
        'Information related to the A/Normal website, available resources, and terms of use for downloadable files.',
    },
  },
}
