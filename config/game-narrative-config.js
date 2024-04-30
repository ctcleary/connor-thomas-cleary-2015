var imgBaseDir = (window.location.hostname === 'localhost') ? '/local-design/img/' : 'https://connorthomascleary.com/assets/img/';

/* -- Size Reference --
Slate: 400 x 260
Hero: width = 980 - 1200


 -- Grunt reference --
 Open Git Bash in </projects/connor-thomas-cleary-2015/> folder
 use command:
 grunt static-build

 open </projects/connor-thomas-cleary-2015/static-build
 copy anything updated into filezilla, sometimes that will only be this file.
 it should have the same file structure as the one on the website
*/
var gameNarrativeItems = [

  // clockwork-revolution
  {
    shortcut: 'clockwork',

    title: 'Clockwork Revolution',
    venue: 'inXile Entertainment',
    slate: {
      url: imgBaseDir + 'slates/slate-clockwork.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design'
    ],
    secondaryTags: [
    ],
    modal: {
      title: 'Clockwork Revolution',
      hero: {
        height: 503,
        url: imgBaseDir + 'heroes/hero-clockwork.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['ul',
          ['li', 'Large scale, high impact story and narrative design work and leadership'],
          ['li', 'Working closely with senior leadership to pitch, design, define, write, and refine narrative content'],
          ['li', 'Writing & designing branching dialogue conversations, including game mechanics and reactivity'],
          ['li', 'Directing Voice Over recording sessions, consulting on VO and casting pipelines'],
          ['li', 'Close collaboration with quest- and level-design, including pitching process improvements'],
          ['li', 'Representing narrative in meetings with senior leadership and collaborators '],
          ['li', 'Representing narrative with the internal tools group, pushing for improved tools and solutions'],
          ['li', 'Cinematics writing and storyboarding; ambient NPC chatter, vignettes, and barks']
        ]
      ],
      info: ['div', [
        ['a', 
          { href: 'https://inxile.net/games/clockwork-revolution/', target: '_blank'},
          'Official Site'
        ],
      ]]
    }
  },

  // gbx wonderlands
  {
    shortcut: 'gbx-wonderlands',

    title: 'Tiny Tina\'s Wonderlands',
    venue: 'Gearbox Software',
    slate: {
      url: imgBaseDir + 'slates/slate-gearbox-wonderlands.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design'
    ],
    secondaryTags: [
    ],
    modal: {
      title: 'Tiny Tina\'s Wonderlands',
      hero: {
        height: 503,
        url: imgBaseDir + 'heroes/hero-gearbox-wonderlands.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['ul',
          ['li', 'Side Mission Lead Writer on Tiny Tina\'s Wonderlands'],
          ['li', 'Managed a team of five writers to create over 650 pages of side mission scripts'],
          ['li', 'Worked in close collaboration with mission designers and various leads to create and/or write fun side quests with memorable characters, most often in a comedic tone'],
          ['li', 'Found creative solutions for various code / design / technical limitations'],
          ['li', 'Battle dialogue / combat barks'],
          ['li', 'Story and mission pitches'],
          ['li', 'Various secondary and tertiary writing tasks: audio log scripts, marketing materials, etc']
        ]
      ],
      info: ['div', [
        ['a', 
          { href: 'https://playwonderlands.2k.com/', target: '_blank'},
          'Official Site'
        ],
      ]]
    }
  },

  // gbx borderlands 3
  {
    shortcut: 'gbx-bl3',

    title: 'Borderlands 3',
    venue: 'Gearbox Software',
    slate: {
      url: imgBaseDir + 'slates/slate-gearbox-borderlands3.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design'
    ],
    secondaryTags: [
    ],
    modal: {
      title: 'Borderlands 3',
      hero: {
        height: 675,
        url: imgBaseDir + 'heroes/hero-gearbox-borderlands3.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['ul',
          ['li', 'Writer on Borderlands 3, primarily focused on side missions, while also consulting on main campaign story'],
          ['li', 'Worked in close collaboration with mission designers and various leads to create and/or write fun side quests with memorable characters, most often in a comedic tone'],
          ['li', 'Regularly attended and contributed to narrative meetings with project leads and executives'],
          ['li', 'Found creative solutions for various code / design / technical limitations'],
          ['li', 'Tens of thousands of lines of battle dialogue / combat barks / NPC chatter'],
          ['li', 'Various secondary and tertiary writing tasks: audio log scripts, item naming, marketing materials, etc'],
          ['li', 'VO actor for various characters: Mouthpiece, Psycho Tink, Chadd, Rakkman, Walla'],
          ['li', 'Story and mission pitches']
        ]
      ],
      info: ['div', [
        ['a', 
          { href: 'https://borderlands.com/en-US/', target: '_blank'},
          'Official Site'
        ],
      ]]
    }
  },

    // gbx psycho krieg
  {
    shortcut: 'gbx-psycho-krieg',

    title: 'Psycho Krieg and the Fantastic Fustercluck',
    venue: 'Gearbox Software',
    slate: {
      url: imgBaseDir + 'slates/slate-gearbox-bl3-dlc-psycho-krieg.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design'
    ],
    secondaryTags: [
    ],
    modal: {
      title: 'Borderlands 3: Psycho Krieg and the Fantastic Fustercluck',
      hero: {
        height: 675,
        url: imgBaseDir + 'heroes/hero-gearbox-bl3-dlc-psycho-krieg.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['ul',
          ['li', 'Lead Writer on the fourth DLC for Borderlands 3'],
          ['li', 'Primary writer on main plot'],
          ['li', 'Oversaw and contributed to the writing of side missions'],
          ['li', 'Collaborated closely with mission design and creative leads'],
          ['li', 'Secondary and tertiary writing tasks, including marketing materials and sketch writing'],
        ]
      ],
      info: ['div', [
        ['a', 
          { href: 'https://borderlands.com/en-US/psychokrieg/', target: '_blank'},
          'Official Site'
        ],
      ]]
    }
  },

  // gbx bounty of blood
  {
    shortcut: 'gbx-bounty-of-blood',

    title: 'Bounty of Blood',
    venue: 'Gearbox Software',
    slate: {
      url: imgBaseDir + 'slates/slate-gearbox-bl3-dlc-bounty-of-blood.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design'
    ],
    secondaryTags: [
    ],
    modal: {
      title: 'Borderlands 3: Bounty of Blood',
      hero: {
        height: 675,
        url: imgBaseDir + 'heroes/hero-gearbox-bl3-dlc-bounty-of-blood.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['ul',
          ['li', 'Co-Lead Writer on the third DLC for Borderlands 3'],
          ['li', 'Took over as sole Lead writer about halfway through development'],
          ['li', 'Contributor to main plot writing and design, including original characters'],
          ['li', 'Oversaw and contributed to the writing of side missions'],
          ['li', 'Collaborated closely with mission design and creative leads'],
          ['li', 'Wrote many, many combat barks'],
        ]
      ],
      info: ['div', [
        ['a', 
          { href: 'https://borderlands.com/en-US/bountyofblood/', target: '_blank'},
          'Official Site'
        ],
      ]]
    }
  },

  // gbx guns love and tentacles
  {
    shortcut: 'gbx-guns-love-tentacles',

    title: 'Guns, Love, and Tentacles',
    venue: 'Gearbox Software',
    slate: {
      url: imgBaseDir + 'slates/slate-gearbox-bl3-dlc-guns-love-tentacles.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design'
    ],
    secondaryTags: [
    ],
    modal: {
      title: 'Borderlands 3: Guns, Love, and Tentacles',
      hero: {
        height: 675,
        url: imgBaseDir + 'heroes/hero-gearbox-bl3-dlc-guns-love-tentacles.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['ul',
          ['li', 'Writer on the second DLC for Borderlands 3'],
          ['li', 'Contributor to main plot writing and design, including original characters'],
          ['li', 'Oversaw and contributed to the writing of side missions'],
          ['li', 'Collaborated closely with mission design and creative leads'],
          ['li', 'Pitched initial concepts for multiple shipped missions'],
          ['li', 'Wrote many, many combat barks'],
        ]
      ],
      info: ['div', [
        ['a', 
          { href: 'https://borderlands.com/en-US/gunslovetentacles/', target: '_blank'},
          'Official Site'
        ],
      ]]
    }
  },

  // gbx moxxis heist
  {
    shortcut: 'gbx-moxxis-heist',

    title: 'Moxxi\'s Heist of the Handsome Jackpot',
    venue: 'Gearbox Software',
    slate: {
      url: imgBaseDir + 'slates/slate-gearbox-bl3-dlc-moxxis-heist.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design'
    ],
    secondaryTags: [
    ],
    modal: {
      title: 'Borderlands 3: Moxxi\'s Heist of the Handsome Jackpot',
      hero: {
        height: 675,
        url: imgBaseDir + 'heroes/hero-gearbox-bl3-dlc-moxxis-heist.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['ul',
          ['li', 'Writer on the first DLC for Borderlands 3'],
          ['li', 'Contributor to main plot writing and design, including original characters'],
          ['li', 'Contributor to side mission writing and design'],
          ['li', 'Collaborated closely with mission design and creative leads'],
          ['li', 'Pitched initial concepts for multiple shipped missions'],
          ['li', 'VO actor for multiple roles, including: Casino Bouncer Bot, Radio Advertisement Guy, Steel Dragon of Eternal Pain, Walla'],
          ['li', 'Wrote hundreds (maybe thousands) of combat barks'],
        ]
      ],
      info: ['div', [
        ['a', 
          { href: 'https://borderlands.com/en-US/handsomejackpot/', target: '_blank'},
          'Official Site'
        ],
      ]]
    }
  },

  // gbx commander lilith
  {
    shortcut: 'gbx-commander-lilith',

    title: 'Commander Lilith and the Fight For Sanctuary',
    venue: 'Gearbox Software',
    slate: {
      url: imgBaseDir + 'slates/slate-gearbox-commander-lilith.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design'
    ],
    secondaryTags: [
    ],
    modal: {
      title: 'Commander Lilith and the Fight For Sanctuary',
      hero: {
        height: 675,
        url: imgBaseDir + 'heroes/hero-gearbox-commander-lilith.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['ul',
          ['li', 'Co-Lead Writer on the fifth DLC for Borderlands 2'],
          ['li', 'Helped ideate and create a new Borderlands 2 DLC, seven years after the game\'s initial launch'],
          ['li', 'Contributor to main plot writing and design'],
          ['li', 'Side mission writing lead'],
          ['li', 'Collaborated closely with mission design and creative leads'],
          ['li', 'Pitched initial concepts for multiple shipped missions'],
          ['li', 'Extensive writing on an existing IP with well-established and much-beloved characters']
        ]
      ],
      info: ['div', [
        ['a', 
          { href: 'https://borderlands.com/en-US/shop/borderlands-2-commander-lilith-and-the-fight-for-sanctuary/', target: '_blank'},
          'Official Site'
        ],
      ]]
    }
  },

  // gbx ntftb
  {
    shortcut: 'gbx-ntftb',

    title: 'New Tales From the Borderlands',
    venue: 'Gearbox Software',
    slate: {
      url: imgBaseDir + 'slates/slate-gearbox-ntftb.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design'
    ],
    secondaryTags: [
    ],
    modal: {
      title: 'New Tales From the Borderlands',
      hero: {
        height: 503,
        url: imgBaseDir + 'heroes/hero-gearbox-ntftb.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['ul',
          ['li', 'Writer and story consultant on an early draft of New Tales From the Borderlands'],
          ['li', 'Worked with the Lead Writer of the project to completely re-outline the entire story and episode structure from scratch.'],
          ['li', 'Wrote a few scenes featuring Telltale-style branching dialouge before being reassigned to another project.']
        ]
      ],
      info: ['div', [
        ['a', 
          { href: 'https://newtalesborderlands.2k.com/', target: '_blank'},
          'Official Site'
        ],
      ]]
    }
  },

  // ttg-gog
  {
    shortcut: 'ttg-gog',

    title: 'Guardians of the Galaxy',
    venue: 'Telltale Games',
    slate: {
      url: imgBaseDir + 'slates/slate-ttg-gog.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design',
      'level design'
    ],
    secondaryTags: [
      'narrative design',
      'puzzle design'
    ],
    modal: {
      title: 'Telltale\'s Guardians of the Galaxy',
      hero: {
        youtube: 'HlnEKaIkiEg',
      },
      description: ['.item-desc',
        ['p', 'I worked on Telltale\'s Guardians of the Galaxy, Episodes 102 and 104 -- contributing Narrative Design, Story Collaboration, Puzzle Design, and Level Design for Telltale\'s unique brand of narrative-driven games.'],
        ['p', 'I was honored to collaborate with so many incredibly talented and funny people on this project.']
      ],
      info: ['div', [
        ['a', 
          { href: 'https://telltale.com/series/guardiansofthegalaxy/', target: '_blank'},
          'Official Site'
        ],
      ]]
    }
  },

  // ttg-bat
  {
    shortcut: 'ttg-bat',

    title: 'Batman: The Enemy Within',
    venue: 'Telltale Games',
    slate: {
      url: imgBaseDir + 'slates/slate-ttg-bat.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design',
      'level design'
    ],
    secondaryTags: [
      'narrative design',
      'puzzle design'
    ],
    modal: {
      title: 'Telltale\'s Batman: The Enemy Within',
      hero: {
        youtube: 'cXdUBq30gP4',
      },
      description: ['.item-desc',
        ['p', 'I worked on Batman: The Enemy Within, Episodes 203 and 204 -- contributing Narrative Design, Story Collaboration, Puzzle Design, and Level Design for Telltale\'s unique brand of narrative-driven games.'],
        ['p', 'I was honored to collaborate with so many incredibly talented and funny people on this project.']
      ],
      info: ['div', [
        ['a', 
          { href: 'https://telltale.com/series/batman-season-2/', target: '_blank'},
          'Official Site'
        ],
      ]]
    }
  }


];
