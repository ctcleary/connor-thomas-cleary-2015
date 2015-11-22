var portfolioItems = [
  {
    title: 'Segfault[0]: Mad Hatter',
    venue: 'Solo',
    slate: {
      url: '../local-design/slates/slate_segfault1.gif',
      position: 'center bottom'
    },
    tags: [
      'writing',
      'interactive',
      'javascript',
      'game',
      'twine'
    ],
    modal: {
      title: 'Segfault[0]: Mad Hatter',
      hero: {
        height: 300,
        url: '../local-design/heroes/hero_todo.jpg',
        position: 'center 90%'
      },
      description: ['.item-desc',
        ['p', 'As a hacker-for-hire, you\'ve stumbled into a system unlike any you\'ve ever encountered. Now you\'re a prisoner and a lab rat, but you have someone on the outside.'],
        ['p', 'What kind of a test subject will you be?'],
        ['p', 'This interactive fiction features branching storylines, stat tracking, and five-ish endings to unlock.'],
        ['p', ['em', 'Written in a month for the ', ['a', {href:'http://itch.io/jam/wag-challenge', target:'_blank'}, '2015 Write-A-Game Challenge'], ' (#WagChallenge) supported by the IGDA Game Writing SIG. The theme was “Down the Rabbit Hole.”']]
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
    title: 'Mad Max: Fury Road PTP',
    slate: {
      url: '../local-design/slates/slate_madmax1.jpg',
      position: 'center 25%'
    },
    venue: 'IMDb',
    tags: [
      'web',
      'flash',
      'actionscript',
      'javascript',
      'interactive',
      'motion'
    ],
    modal: {
      title: 'Mad Max: Fury Road - Premium Title Page (Flash & Non-Flash Rebuild)',
      hero: {
        url: '../local-design/heroes/ptp_madmax_hero.jpg',
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
      url: '../local-design/slates/slate_todo.jpg',
      position: 'center center'
    },
    tags: [
      'writing',
      'interactive',
      'game'
    ]
  },
  {
    title: 'Summoner: The Bescarfed (WIP)',
    venue: 'Solo',
    slate: {
      url: '../local-design/slates/slate_todo.jpg',
      position: 'center center'
    },
    tags: [
      'actionscript',
      'interactive',
      'flixel',
      'game'
    ]
  },
  {
    title: 'Skeleton Key',
    venue: 'Solo',
    slate: {
      url: '../local-design/slates/slate_todo.jpg',
      position: 'center center'
    },
    tags: [
      'actionscript',
      'interactive',
      'flixel',
      'game'
    ],
    modal: {
      title: 'Skeleton Key - Shadowrun: Returns Quest'
    }
  }
];
