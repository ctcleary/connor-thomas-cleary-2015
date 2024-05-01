// var imgBaseDir  = (window.location.hostname === 'localhost') ? '/local-design/img/' : 'https://connorthomascleary.com/assets/img/';
// var ifrmBaseDir = (window.location.hostname === 'localhost') ? '/local-design/ifrm/' : 'https://connorthomascleary.com/ifrm/';

var imgBaseDir = './assets/img/';
var ifrmBaseDir = './assets/ifrm/';

var webRichMediaItems = [
  // mad max
  {
    shortcut: 'ptp-madmax',

    title: 'Premium Title Page - Mad Max: Fury Road',
    slate: {
      url: imgBaseDir + 'slates/slate-ptp-madmax.jpg',
      position: 'center 25%'
    },
    venue: 'IMDb/Amazon',
    primaryTags: [
      'web',
      'motion'
    ],
    secondaryTags: [
      'interactive'
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
      title: 'Premium Title Page - Mad Max: Fury Road',
      hero: {
        vimeo: 157086532
        // url: imgBaseDir + 'heroes/hero-ptp-madmax.jpg',
        // height: 320,
        // position: '55% 30%'
      },
      description: ['.item-desc',
        ['p', 'This Premium Title Page (PTP) was an ambitious design when we were still using Flash to build these experiences at IMDb.'],
        ['p', 'As of Sep 1st 2015, we re-launched the PTP in pure JS/HTML/CSS using Tarnhelm.'],
        ['hr'],
        ['p.list-header', 'Javascript Rebuild'],
        ['ul', [
          ['li', 'Utilizes: ', 
            ['ul', [
              ['li', ['a', {href:'#shortcut:tarnhelm'}, 'Tarnhelm Framework']],
              ['li', ['a', {href:'#shortcut:alphalfa'}, 'Alphalfa Player']],
              ['li', ['a', {href:'#shortcut:reely'}, 'Reely Player']]
            ]],
          ],
          ['li', 'This was considered the minimum bar of feature-parity with previous Flash builds for the Tarnhelm Framework, and was the first PTP rebuilt using Tarnhelm.'],
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
      info: ['span',
        '(No longer live on site.)'
      ]
      // cta: {
      //   href: 'http://www.imdb.com/title/tt1392190/',
      //   text: 'See it live',
      //   target: '_blank'
      // }
    }
  },

  // inside out
  {
    shortcut: 'ptp-insideout',

    title: 'Premium Title Page - Inside Out',
    slate: {
      url: imgBaseDir + 'slates/slate-ptp-insideout.jpg',
      position: 'center 85%'
    },
    venue: 'IMDb/Amazon',
    primaryTags: [
      'web',
      'motion'
    ],
    secondaryTags: [
      'interactive'
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
      title: 'Premium Title Page - Inside Out',
      hero: {
        vimeo: 860468357
        // url: imgBaseDir + 'heroes/hero-ptp-insideout.jpg',
        // height: 320,
        // position: 'center bottom'
      },
      description: ['.item-desc',
        ['p', 'This Premium Title Page (PTP) was extremely difficult to build even when were still using Flash for these experiences at IMDb. The Flash build prompted the creation of my CSS injection module, Zoolander.'],
        ['p', ['strong', 'Huge kudos:'], ' After seeing this PTP, Disney asked if our team could build all their movies\' official microsites.'],
        ['p', 'As of Sep 1st 2015, we had to rebuild all PTPs using Tarnhelm.'],
        ['hr'],
        ['p.list-header', 'Javascript Rebuild'],
        ['ul', [
          ['li', 'Utilizes: ', 
            ['ul', [
              ['li', ['a', {href:'#shortcut:tarnhelm'}, 'Tarnhelm Framework']],
              ['li', ['a', {href:'#shortcut:alphalfa'}, 'Alphalfa Player']],
              ['li', ['a', {href:'#shortcut:reely'}, 'Reely Player']]
            ]],
          ],
          ['li', 'This PTP was considered the high bar for considering Tarnhelm feature-complete. I had to develop a few new features for Tarnhelm to power the characters\' idle and rollover videos. I also built several new optimizations and performance improvements into the Alphalfa player to prevent memory overuse.'],
        ]],

        ['p.list-header', 'Original Flash Build'],
        ['ul', [
          ['li', 'Created in Flash by implementeing static design from UX Designer Billy Thompson.'],
          ['li', 'Animation, motion design, and interaction designed was a collaboration between myself and Billy, Billy executed all the After Effects video asset design/editing, I handled the rest of the motion design.'],
          ['li', 'Implemented the CSS and background swapping (performed by a reusable JS utility written by me).'],
          ['li', 'Required a massive amount of custom AS3 and some custom JS code, which was designed to be re-usable in future projects.'],
          ['li', 'Required close attention to detail for pixel perfect execution of design.'],
          ['li', 'Very complex optimization requirements for fast initial load, async loading for heavier k-weight assets, and design of failure-proof execution code/graceful degradation in case of hiccups.']
        ]]
      ],
      info: ['span',
        '(No longer live on site.)'
      ]
      // cta: {
      //   href: 'http://www.imdb.com/title/tt2096673/',
      //   text: 'See it live',
      //   target: '_blank'
      // }
    }
  },

  // star wars tfa
  {
    shortcut: 'ptp-starwarstfa',

    title: 'Premium Title Page - Star Wars: The Force Awakens',
    slate: {
      url: imgBaseDir + 'slates/slate-ptp-starwarstfa.jpg',
      position: 'center center'
    },
    venue: 'IMDb/Amazon',
    primaryTags: [
      'web',
      'motion'
    ],
    secondaryTags: [
      'interactive'
    ],
    skills: [
      'javascript',
      'photoshop',
      'illustrator',
      'after effects',
      'flash'
    ],
    modal: {
      title: 'Premium Title Page - Star Wars: The Force Awakens',
      hero: {
        vimeo: 860468375
      },
      description: ['.item-desc',
        ['p', 'This Premium Title Page (PTP) was built using rich media features included with Tarnhelm.'],
        ['hr'],
        ['p.list-header', 'Build utilizes:'],
        ['ul', [
              ['li', ['a', {href:'#shortcut:tarnhelm'}, 'Tarnhelm Framework']],
              ['li', ['a', {href:'#shortcut:alphalfa'}, 'Alphalfa Player']],
              ['li', ['a', {href:'#shortcut:reely'}, 'Reely Player']]
        ]]
      ],
      info: ['span',
        '(No longer live on site.)'
      ]
    }
  },


  // avengers age of ultron
  {
    shortcut: 'ptp-avengersaou',

    title: 'Premium Title Page - Avengers: Age of Ultron',
    slate: {
      url: imgBaseDir + 'slates/slate-ptp-avengersaou.jpg',
      position: 'center center'
    },
    venue: 'IMDb/Amazon',
    primaryTags: [
      'web',
      'motion'
    ],
    secondaryTags: [
      'interactive'
    ],
    skills: [
      'javascript',
      'photoshop',
      'illustrator',
      'after effects',
      'flash'
    ],
    modal: {
      title: 'Premium Title Page - Avengers: Age of Ultron',
      hero: {
        vimeo: 860468332
      },
      description: ['.item-desc',
        ['p', 'This Premium Title Page (PTP) was built using rich media features included with Tarnhelm.'],
        ['hr'],
        ['p.list-header', 'Build utilizes:'],
        ['ul', [
              ['li', ['a', {href:'#shortcut:tarnhelm'}, 'Tarnhelm Framework']],
              ['li', ['a', {href:'#shortcut:alphalfa'}, 'Alphalfa Player']],
              ['li', ['a', {href:'#shortcut:reely'}, 'Reely Player']]
        ]]
      ],
      info: ['span',
        '(No longer live on site.)'
      ]
    }
  },

  // the good dinosaur
  {
    shortcut: 'ptp-gooddinosaur',

    title: 'Premium Title Page - The Good Dinosaur',
    slate: {
      url: imgBaseDir + 'slates/slate-ptp-gooddinosaur.jpg',
      position: 'center center'
    },
    venue: 'IMDb/Amazon',
    primaryTags: [
      'web',
      'motion'
    ],
    secondaryTags: [
      'interactive'
    ],
    skills: [
      'javascript',
      'photoshop',
      'illustrator',
      'after effects',
      'flash'
    ],
    modal: {
      title: 'Premium Title Page - The Good Dinosaur',
      hero: {
        vimeo: 860468384
      },
      description: ['.item-desc',
        ['p', 'This Premium Title Page (PTP) was built using rich media features included with Tarnhelm.'],
        ['hr'],
        ['p.list-header', 'Build utilizes:'],
        ['ul', [
              ['li', ['a', {href:'#shortcut:tarnhelm'}, 'Tarnhelm Framework']],
              ['li', ['a', {href:'#shortcut:alphalfa'}, 'Alphalfa Player']],
              ['li', ['a', {href:'#shortcut:reely'}, 'Reely Player']]
        ]]
      ],
      info: ['span',
        '(No longer live on site.)'
      ]
    }
  },


  // san andreas
  {
    shortcut: 'ptp-sanandreas',

    title: 'Premium Title Page - San Andreas',
    slate: {
      url: imgBaseDir + 'slates/slate-ptp-sanandreas.jpg',
      position: 'center center'
    },
    venue: 'IMDb/Amazon',
    primaryTags: [
      'web',
      'motion'
    ],
    secondaryTags: [
      'interactive'
    ],
    skills: [
      'javascript',
      'photoshop',
      'illustrator',
      'after effects',
      'flash'
    ],
    modal: {
      title: 'Premium Title Page - San Andreas',
      hero: {
        vimeo: 860468362
      },
      description: ['.item-desc',
        ['p', 'This Premium Title Page (PTP) was built using rich media features included with Tarnhelm.'],
        ['hr'],
        ['p.list-header', 'Build utilizes:'],
        ['ul', [
              ['li', ['a', {href:'#shortcut:tarnhelm'}, 'Tarnhelm Framework']],
              ['li', ['a', {href:'#shortcut:alphalfa'}, 'Alphalfa Player']],
              ['li', ['a', {href:'#shortcut:reely'}, 'Reely Player']]
        ]]
      ],
      info: ['span',
        '(No longer live on site.)'
      ]
    }
  },


  // furious 7
  {
    shortcut: 'ptp-furious7',

    title: 'Premium Title Page - Furious 7',
    slate: {
      url: imgBaseDir + 'slates/slate-ptp-furious7.jpg',
      position: 'center center'
    },
    venue: 'IMDb/Amazon',
    primaryTags: [
      'web',
      'motion'
    ],
    secondaryTags: [
      'interactive'
    ],
    skills: [
      'javascript',
      'photoshop',
      'illustrator',
      'after effects',
      'flash'
    ],
    modal: {
      title: 'Premium Title Page - Furious 7',
      hero: {
        vimeo: 860468343
      },
      description: ['.item-desc',
        ['p', 'This Premium Title Page (PTP) was built using rich media features included with Tarnhelm.'],
        ['hr'],
        ['p.list-header', 'Build utilizes:'],
        ['ul', [
              ['li', ['a', {href:'#shortcut:tarnhelm'}, 'Tarnhelm Framework']],
              ['li', ['a', {href:'#shortcut:alphalfa'}, 'Alphalfa Player']],
              ['li', ['a', {href:'#shortcut:reely'}, 'Reely Player']]
        ]]
      ],
      info: ['span',
        '(No longer live on site.)'
      ]
    }
  },



  // furious 7
  {
    shortcut: 'ptp-aladdin',

    title: 'Premium Title Page - Aladdin Re-release',
    slate: {
      url: imgBaseDir + 'slates/slate-ptp-aladdin.jpg',
      position: 'center center'
    },
    venue: 'IMDb/Amazon',
    primaryTags: [
      'web',
      'motion'
    ],
    secondaryTags: [
      'interactive'
    ],
    skills: [
      'javascript',
      'photoshop',
      'illustrator',
      'after effects',
      'flash'
    ],
    modal: {
      title: 'Premium Title Page - Aladdin Re-release',
      hero: {
        vimeo: 860468320
      },
      description: ['.item-desc',
        ['p', 'This Premium Title Page (PTP) was built using rich media features included with Tarnhelm.'],
        ['hr'],
        ['p.list-header', 'Build utilizes:'],
        ['ul', [
              ['li', ['a', {href:'#shortcut:tarnhelm'}, 'Tarnhelm Framework']],
              ['li', ['a', {href:'#shortcut:alphalfa'}, 'Alphalfa Player']],
              ['li', ['a', {href:'#shortcut:reely'}, 'Reely Player']]
        ]]
      ],
      info: ['span',
        '(No longer live on site.)'
      ]
    }
  },
  
];
