import type { TranslationSchema } from './fr'

export const en: TranslationSchema = {
  app: {
    loading: 'Loading the Archive...',
  },
  common: {
    fileCountOne: '{count} file',
    fileCountMany: '{count} files',
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
      bento: {
        featuredLabel: 'Featured',
        mainFallbackDescription: 'The latest version, optimized for narrative immersion.',
        sideFallbackDescription: 'All available maps to navigate the A/Normal universe.',
        playerSheetAlt: 'Player sheet preview',
      },
      characterGenerator: {
        title: 'Character Generator',
        description: 'Randomly roll gender, age, known anomaly, and unknown anomaly for your character.',
      },
      randomizer: {
        title: 'Character roll helper',
        rolling: 'Rolling...',
        roll: 'Roll',
        genderLabel: 'Gender',
        ageLabel: 'Age',
        yearsSuffix: 'years',
        male: 'Male',
        female: 'Female',
        knownAnomalyLabel: 'Known anomaly',
        unknownAnomalyLabel: 'Unknown anomaly',
        pointsSuffix: 'pts',
      },
      community: {
        title: 'Community Resources',
        description: 'Find hundreds of sheets created by the community on our Discord.',
        cta: 'Join Discord',
      },
    },
    gm: {
      badge: 'Contains spoilers',
      title: 'Game Master Area',
      titlePrefix: 'Game Master',
      titleAccent: 'Area',
      description:
        'Confidential archives for the architects of the strange. Access narrative structures, occult maps and NPC files to run your sessions.',
      backToPlayers: "I am a player - Players area",
      gate: {
        title: 'Game Master Area',
        spoilerBadge: 'Contains spoilers',
        warningTitle: 'Warning!',
        warningBody: 'This section contains spoilers intended only for the Game Master.',
        warningPlayers:
          'If you are a player, go back to the Players area to preserve your game experience.',
        confirmCta: 'I am the GM - access content',
        backCta: 'I am a player, go back',
      },
    },
    legal: {
      title: 'Legal notice',
      description:
        'Information related to the A/Normal website, available resources, and terms of use for downloadable files.',
      featured: {
        eyebrow: 'Use of resources',
        title: 'Resources included with the official booklet',
        paragraph1:
          'The resources available on this website are provided to support the purchase and use of the official A/Normal book. They may be downloaded, printed, and used for private or community tabletop sessions of the A/Normal role-playing game.',
        paragraph2:
          'Any reproduction, redistribution, modification, or reuse of these resources for sale, integration into a commercial offer, or commercialization in any form is strictly prohibited without prior written authorization from the author.',
      },
      sections: {
        publisher: {
          eyebrow: 'Website publisher',
          title: 'A/NORMAL',
          paragraph1:
            'The A/NORMAL website is published by Aurore Darcissac, author and creator of the A/NORMAL universe.',
          paragraph2: 'Publishing director: Aurore Darcissac.',
        },
        copyright: {
          eyebrow: 'Intellectual property',
          title: 'Copyright',
          paragraph1:
            'Texts, characters, resources, sheets, maps, illustrations, names, and elements of the A/Normal universe shown on this website are protected by copyright, unless explicitly stated otherwise.',
          paragraph2:
            'No transfer of rights is granted by downloading files. Access to documents authorizes personal use only within the game context.',
        },
        liability: {
          eyebrow: 'Liability',
          title: 'Website content',
          paragraph1:
            'Information and files are provided to support playing A/Normal. The publisher strives to keep resources accessible and up to date, without guaranteeing the permanent absence of errors, interruptions, or unavailability.',
        },
        externalLinks: {
          eyebrow: 'External links',
          title: 'Third-party websites',
          paragraph1:
            'The website may contain links to external services, including Discord, Buy Me a Coffee, or sales platforms. These websites have their own terms of use and privacy policies.',
        },
        personalData: {
          eyebrow: 'Personal data',
          title: 'Data collection',
          paragraph1:
            'A/Normal does not provide user accounts and does not directly collect personal data through forms on this website.',
          paragraph2:
            'External services accessible from this website may process data according to their own policies.',
        },
        hosting: {
          eyebrow: 'Hosting',
          title: 'Technical provider',
          paragraph1:
            'The website is hosted via GitHub Pages, a service provided by GitHub, Inc., 88 Colin P. Kelly Jr Street, San Francisco, CA 94107, United States.',
        },
      },
    },
  },
}
