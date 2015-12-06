var imgBaseDir = '';
if (window.location.hostname === 'localhost') {
  imgBaseDir = '/local-design/'
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
      'CSS',
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
      title: 'Tarnhelm Framework',
      hero: {
        url: imgBaseDir + 'heroes/hero-tarnhelm.jpg',
        position: '20% 45%'
      },
      description: ['.item-desc',
        ['p','Tarnhelm is a Flash replacement Javascript framework currently powering all first-party ads on IMDb, from simple billboards to the immersive "Premium Title Page" (PTP) experiences.'],
        ['p', 'The success of this project saved over $48 million in at-risk revenue for IMDb. (Over $18.9 million in 2015, and an estimated $29.5 million for 2016.)'],
        ['p', 'It was an ambitious project under an extraordinary tight deadline,with only three web development engineers, including myself. By September 1st, we had just over a month to develop, test, and deliver a framework robust enough to power the media-rich Mad Max: Fury Road PTP, and scalable enough to also power a simple sidebar rectangle.'],
        ['p', 'Tarnhelm also makes extensive use of my Alphalfa Player.'],

        ['h2', 'Technical Stuff'],
        ['p', 'Ads are configured with a JSON object and built on a component-based system (graphics, panels, video players, etc). Eventually, the same technology that powers the executions will help power a robust WYSIWYG-style internal tool for non-technical ad designers.'],
        ['p', 'Due to the nature of internet advertising, these ads are loaded into an iframe, in which the ads exist as a sort of single-page-app micro-site.'],

        ['h2', 'History'],
        ['p', 'In July 2015, Google announced a new feature that spelled the death of Flash for internet advertisers. Across Amazon, the action plan aws simply to run simpler ads. At IMDb, our unique rich media executions set us apart, and helped made IMDb a "must-buy" for movies and tv shows.'],
        ['p', 'I was silly enough to say, "We can build a library to do this. We can replace Flash."'],
      ],
      info: ['p', 'Powered by Tarnhelm:',
        ['ul',
          ['li', ['a', { href: 'http://www.imdb.com/title/tt2096673/', target:'_blank' }, 'Inside Out']],
          ['li', ['a', { href: 'http://www.imdb.com/title/tt1392190/', target:'_blank' }, 'Mad Max: Fury Road']],
          ['li', ['a', { href: 'http://www.imdb.com/title/tt1979388/', target:'_blank' }, 'The Good Dinosaur']],
          ['li', ['a', { href: 'http://www.imdb.com/title/tt0369610/', target:'_blank' }, 'Jurassic World']],
          ['li', ['a', { href: 'http://www.imdb.com/title/tt2820852/', target:'_blank' }, 'Furious 7']],
          ['li', ['a', { href: 'http://www.imdb.com/title/tt0478970/', target:'_blank' }, 'Ant Man']],
          ['li', ['a', { href: 'http://www.imdb.com/title/tt1051904/', target:'_blank' }, 'Goosebumps']],
          ['li', ['a', { href: 'http://www.imdb.com/title/tt0103639/', target:'_blank' }, 'Aladdin']],
          ['li', ['a', { href: 'http://www.imdb.com/title/tt2395427/', target:'_blank' }, 'Avengers']],
          ['li', ['small', 'and many others']]
        ]
      ]
    }
  },
  {
    title: 'Alphalfa Player',
    venue: 'IMDb',
    slate: {
      url: '../local-design/slates/slate-alphalfa.jpg',
      position: 'center 45%'
    },
    primaryTags: [
      'web',
      'javascript'
    ],
    secondaryTags: [],
    skills: [
      'advanced javascript',
      'WebGL',
      'HTML5',
      'CSS3',
    ],
    modal: {
      title: 'Alphalfa Player - HTML5 Transparent Video Player',
      hero: {
        height: 200,
        url: '../local-design/heroes/hero-alphalfa.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', 'With the death of Flash came the death of video with transparency on the internet. At IMDb, we relied heavily on transparent videos to achieve many of our coolest effects on the Premium Title Pages (PTPs). Seeing the writing on the wall re: Flash\'s imminent deminse, I took it upon myself to create a Javascript module which would make transparent video playback possible.'],
        ['p', 'There was already ', ['a',{href:'http://www.sciencelifeny.com/transparency/transparency.html',target:'_blank'},'one solution out there'], ' but it was only the kernel of the idea. It was neither robust nor optimized enough for our needs. I ran with the initial concept, and created both a highly optimized 2D Canvas method, as well as a more advanced WebGL renderer which offloads the heavy duty workload to the user\'s graphics processor when supported. There are now four separate Alphalfa render methods with varying features and optimizations to ensure the most performant experience possible for end users, without sacrificing the quality of the rich media ads.'],
        ['p', 'Alphalfa was, and continues to be, a significant factor in the success of the Tarnhelm Project.'],
        ['p', 'I cannot go into any other technical specifics, they are protected under NDA.']
      ],
      info: ['p', 'Powered by Alphalfa:',
        ['ul',
          ['li', ['a', { href: 'http://www.imdb.com/title/tt2096673/', target:'_blank' }, 'Inside Out']],
          ['li', ['a', { href: 'http://www.imdb.com/title/tt1392190/', target:'_blank' }, 'Mad Max: Fury Road']],
          ['li', ['a', { href: 'http://www.imdb.com/title/tt1979388/', target:'_blank' }, 'The Good Dinosaur']],
          ['li', ['a', { href: 'http://www.imdb.com/title/tt0369610/', target:'_blank' }, 'Jurassic World']],
          ['li', ['small', 'and many others']]
        ]
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
      '3D'
    ],
    secondaryTags: [
      'animation',
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
