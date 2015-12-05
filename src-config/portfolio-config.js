var imgBaseDir = './';
if (window.location.hostname === 'localhost') {
  imgBaseDir = '../local-design/'
} else {
  imgBaseDir = 'http://connorthomascleary.com/ctc2015/';
}
var portfolioItems = [
  {
    title: 'Segfault[0]: Mad Hatter',
    venue: 'Solo',
    slate: {
      url: imgBaseDir + 'slates/slate-segfault.jpg',
      position: 'center top'
    },
    primaryTags: [
      'writing',
      'game design'
    ],
    secondaryTags: [
      'branching narrative',
      'javascript',
      'css',
      'twine'
    ],
    modal: {
      title: 'Segfault[0]: Mad Hatter',
      hero: {
        height: 200,
        url: imgBaseDir + 'heroes/hero-segfault.jpg',
        position: '15% center'
      },
      description: ['.item-desc',
        ['p', 'As a hacker-for-hire, you\'ve stumbled into a system unlike any you\'ve ever encountered. Now you\'re a prisoner and a lab rat, but you have someone on the outside.'],
        ['p', 'What kind of a test subject will you be?'],
        ['p', 'This interactive fiction features branching storylines, stat tracking, and five-ish endings to unlock.'],
        ['p', ['em', 'Finalist entry in the one-month game writing jam, ', ['a', {href:'http://itch.io/jam/wag-challenge', target:'_blank'}, '2015 Write-A-Game Challenge'], ' (#WagChallenge), supported by the IGDA Game Writing SIG. The theme was “Down the Rabbit Hole.”']]
      ],
      info: ['a', 
        {
          href: 'http://connorcleary.itch.io/segfault-0-mad-hatter',
          target: '_blank'
        },
        'Play Segfault[0]'
      ]
    }
  },
  {
    title: 'Tarnhelm',
    venue: 'IMDb',
    slate: {
      url: imgBaseDir + 'slates/slate-tarnhelm.jpg',
      position: 'center center'
    },
    primaryTags: [
      'web',
      'javascript'
    ],
    secondaryTags: [
      'internal tools',
      'framework'
    ],
    skills: [
      'advanced javascript',
      'HTML5',
      'CSS3',
      'single page apps',
      'MVC',
      'UI',
      'UX',
      'riotjs'
    ],
    modal: {
      // title: 'Item Modal Title',
      hero: {
        url: imgBaseDir + 'heroes/hero-tarnhelm.jpg',
        position: '20% center'
      },
      description: ['.item-desc',
        ['p', 'Description goes here.']
      ],
      info: ['a', 
        { href: 'http://google.com' },
        'Play See Whatever'
      ]
    }
  },

  {
    title: 'Mad Max: Fury Road PTP',
    slate: {
      url: imgBaseDir + '/slates/slate_madmax1.jpg',
      position: 'center 25%'
    },
    venue: 'IMDb',
    primaryTags: [
      'web',
      'interactive',
      'motion'
    ],
    secondaryTags: [
    ],
    skills: [
      'javascript',
      'actionscript',
      'photoshop',
      'illustrator',
      'after effects',
      'flash'
    ],
    modal: {
      title: 'Mad Max: Fury Road - Premium Title Page (Flash & Non-Flash Rebuild)',
      hero: {
        url: imgBaseDir + '/heroes/ptp_madmax_hero.jpg',
        height: 320,
        position: '55% 30%'
      },
      description: ['.item-desc',
        ['p', 'This Premium Title Page (PTP) was an ambitious design when we were still using Flash to build these experiences at IMDb.'],
        ['p', 'As of Sep 1st 2015, we re-launched the PTP in pure JS/HTML/CSS using Tarnhelm.'],
        ['hr'],
        ['p.list-header', 'Javascript Rebuild'],
        ['ul', [
          ['li', 'Utilizes: ', 
            ['ul', [
              ['li', 'Tarnhelm Framework'],
              ['li', 'Alphalfa Player'],
              ['li', 'Reely Player']
            ]],
          ],
          ['li', 'This was considered the minimum bar of feature-parity with previous Flash builds for the Tarnhelm framework, and was the first PTP rebuilt using Tarnhelm.'],
        ]],

        ['p.list-header', 'Original Flash Build'],
        ['ul', [
          ['li', 'Created in Flash with creative oversight from Mad Max’s Advertising Firm and Marketing Team.'],
          ['li', 'Implemented pixel-perfect implementation of static design created by UX Designer Billy Thompson.'],
          ['li', 'Motion design (after initial static implementation) was a combined effort between myself and Billy.'],
          ['li', 'Billy responsible for all After Effects and Video Composition.'],
          ['li', 'Large amount of custom AS3 & JS code.'],
          ['li', 'Contributed to overall UX improvements.'],
          ['li', 'Significant Photoshop work to clean up certain assets and pull apart layers for better motion design.'],
          ['li', 'Complex optimization requirements for fast initial load, async loading for heavier k-weight assets, and design of failure-proof execution code in case of hiccups.'],
        ]]
      ],
      info: ['a', 
        { 
          href: 'http://www.imdb.com/title/tt1392190/',
          target: '_blank'
        },
        'See it live'
      ]
    }
  },

  {
    title: 'Roggy and the Beast',
    venue: 'Solo',
    slate: {
      url: imgBaseDir + 'slates/slate-roggy.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design'
    ],
    secondaryTags: [
      'javascript',
      'twine'
    ],
    modal: {
      hero: {
        url: imgBaseDir + 'heroes/hero-roggy.jpg',
        position: 'bottom right'
      },
      description: ['.item-desc',
        ['p', 'A Twine game written in screenplay format that takes places in the Borderlands universe.'],
        ['p', 'You find yourself dragging heavy feet across the Truxican desert. You\'re dying of thirst and there\'s no help to be found. But wait. There\'s a shack in the distance. You pray it\'s not home to some crazy guy. (Spoiler alert: It is.)']
      ],
      info: ['a', 
        { href: 'http://connorthomascleary.com/games/roggy-and-the-beast/Roggy_and_the_Beast_1.2.html' },
        'Play Roggy and the Beast'
      ]
    }
  },

  {
    title: 'Summoner: The Bescarfed (WIP)',
    venue: 'Solo',
    slate: {
      url: imgBaseDir + '/slates/slate-summoner.jpg',
      position: 'left center'
    },
    primaryTags: [
      'unity',
      'game design'
    ],
    skills: [
      'unity',
      'C#',
      'pixel art',
      'pixel animation',
      'flixel',
      'actionscript'
    ],
    modal: {
      // title: 'Summoner: The Bescarfed (WIP)',
      hero: {
        url: imgBaseDir + '/heroes/hero-summoner.jpg',
        height: 320,
        position: 'center bottom'
      },
      description: ['.item-desc',
        ['p', 'The epic tale of a humble youth, Young Hero, who must take up the Scarf of Strategically-Limited Power to protect his village from the oncoming hordes of admittedly absurd abominations.'],
        ['p', 'Forsooth, this mystical Scarf, bestowed upon our youth by the Village Elder, grants him the power to summon and command powerful demons through magicks ancient, arcane, and spelled with a "k."'],
        ['p&', 'However... said magicks are also slowly devouring Young Hero\'s pure soul! (Probably.) So there is a <strong>terrible price to pay!</strong> Bearing the weight of all those demons in the form of one fuzzy muffler can really take its toll on a guy. Luckily, our hero is just the right sort of selfless fellow to lay it all on the line for his beloved village.'],
        ['p', 'Go, now, Young Hero! Battle across the land. Gain priceless skill points. Dominate new demons. And inexplicably start over at Level 1 every time you enter a new region!'],
        ['p', 'Go, go! The Village Elder believes in you!'],
        ['p', 'The rest of the village is cautiously optimistic.'],
        ['hr'],
        ['h2', 'Project Details'],
        ['p', 'A solo project originally prototyped in Actionscript 3, using the Flixel library -- partly for fun, partly to solidify some Object Oriented Programming principles.'],
        ['p', 'Currently rebuilding the game from scratch in Unity using C#. Both enemies and friendly summons use an almost identical set of reusable Unity components, a decoupled MessageBus (Publish/Subscribe pattern), and a finite state machine AI system.'],
        ['p', 'I created all the sprites and animations as well.']
      ],
      info: ['div', [
        ['a', 
          { href: 'http://connorthomascleary.com/games/summoner-the-bescarfed-unity/BUILD.html' },
          'Play Unity Build'
        ],
        ['br'],
        ['a', 
          { href: 'http://connorthomascleary.com/games/summoner-the-bescarfed/' },
          'Play Flash Prototype'
        ]
      ]]
    }
  },

  {
    title: 'Skeleton Key',
    venue: 'Solo',
    slate: {
      url: imgBaseDir + '/slates/slate-skeletonkey.jpg',
      position: 'right center'
    },
    primaryTags: [
      'writing',
      'game design'
    ],
    secondaryTags: [
      'narrative design',
      'game mod'
    ],
    skills: [
      'game editor',
      'level design',
      'branching dialogue',
      'shadowrun returns editor'
    ],
    modal: {
      title: 'Skeleton Key: Panic Room - Shadowrun: Returns Quest',
      hero: {
        url: imgBaseDir + '/heroes/hero-skeletonkey.jpg',
        height: 320,
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', 'Mission created with the ', ['a', {href:'https://www.youtube.com/watch?v=qyRBqnxKe5M'}, 'Shadowrun Returns Editor'], '. All visual/audio assets copyright Harebrained Schemes, with the exception of the skull portrait shown above.'],
        ['p', ['a', { href: 'https://vimeo.com/142842311' }, 'Video playthrough'], ' is 9.5 minutes long. Actual playthrough takes 15-25 minutes. Link to playable Content Pack coming soon.'],
        ['p', 'Represents about 30-35 hours of work after first contact with the editor.']
      ],
      info: ['a', 
        { href: 'https://vimeo.com/142842311' },
        'Watch Playthrough Video'
      ]
    }
  },
  {
    title: 'Smiley Breaks Out',
    venue: 'Solo',
    slate: {
      url: imgBaseDir + '/slates/slate-smiley.jpg',
      position: 'center top'
    },
    primaryTags: [
      '3d'
    ],
    secondaryTags: [
      'motion'
    ],
    modal: {
      title: 'Smiley the Demon Breaks Out',
      hero: {
        url: imgBaseDir + '/heroes/hero-smiley.jpg',
        height: 320,
        position: 'center top'
      },
      description: ['.item-desc',
        ['p', 'Smiley the Demon breaks out of the classic "T-Pose."'],
        ['p', 'All content is original and created by hand using Blender 3D, including model, skeleton, rigging, and animation.']
      ],
      info: ['a', 
        { href: 'https://vimeo.com/146804306' },
        'Watch Video on Vimeo'
      ]
    }
  }
  
];
