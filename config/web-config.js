var imgBaseDir  = (window.location.hostname === 'localhost') ? '/local-design/img/' : 'https://connorthomascleary.com/assets/img/';
var ifrmBaseDir = (window.location.hostname === 'localhost') ? '/local-design/ifrm/' : 'https://connorthomascleary.com/ifrm/';

var webItems = [
  // NOTE: Slate type items can't handle headlines.
  
  // gamepad interface
  {
    shortcut: 'gamepadinterface',

    title: 'Gamepad Interface (WIP)',
    slate: {
      url: imgBaseDir + 'slates/slate-web-gamepadinterface.jpg'//,
      // position: 'center 25%'
    },
    venue: 'Javascript Utility',
    primaryTags: [
      'front-end',
      'javascript',
      'web',
      'utility'
    ],
    skills: [
      'javascript',
      'html/css'
    ],
    modal: {
      title: 'Configurable Javascript Gamepad Interface (WIP)',
      hero: {
        height: 332,
        url: imgBaseDir + 'heroes/hero-web-gamepadinterface.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', 'A configurable interface for browser-based javascript applications to hook into the browser\'s gamepad functionality.'],
        ['p', 'NOTE: In order to fully experience the demo page, you will need to have an Xbox controller connected to your computer.'],
        ['p', ['a', {href:'https://github.com/ctcleary/gamepad-Interface'}, 'Check out the code on Github!']]
      ],
      cta: {
        href: 'https://www.connorthomascleary.com/websamples/gamepadinterface/index.html',
        text: 'See it live',
        target: '_blank'
      }
    }
  },

  // colorejs
  {
    shortcut: 'colorejs',

    title: 'Colore.js',
    slate: {
      url: imgBaseDir + 'slates/slate-web-colorejs.jpg'//,
      // position: 'center 25%'
    },
    venue: 'Javascript Utility',
    primaryTags: [
      'front-end',
      'javascript',
      'react',
      'web'
    ],
    secondaryTags: [
      'single page app'
    ],
    skills: [
      'javascript',
      'html/css',
      'illustrator'
    ],
    modal: {
      title: 'Colore.js - Color Adjustment Utility',
      hero: {
        height: 420,
        url: imgBaseDir + 'heroes/hero-web-colorejs.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', 'A simple color adjustment javascript utility.'],
        ['p', ['a', {href:'https://github.com/ctcleary/colore-js'}, 'Check out the code on Github!']]
      ],
      cta: {
        href: 'https://www.connorthomascleary.com/websamples/colorejs/index.html',
        text: 'See it live',
        target: '_blank'
      }
    }
  },


  // animaniac
  {
    shortcut: 'animaniac',

    title: 'Anim@niac Player',
    venue: 'IMDb/Amazon',
    slate: {
      ifrmUrl: ifrmBaseDir + 'animaniac/animaniac-slate.html',
      // url: imgBaseDir + 'slates/slate-alphalfa.jpg',
      position: 'center center'
    },
    primaryTags: [
      'javascript',
      'web',
    ],
    secondaryTags: [],
    skills: [
      'advanced javascript',
      'HTML5',
      'CSS3',
    ],
    modal: {
      title: 'Anim@niac - Spritesheet Animation Utility',
      hero: {
        ifrmUrl: ifrmBaseDir + 'animaniac/animaniac-hero.html',
        height: 400,
        // url: imgBaseDir + 'heroes/hero-alphalfa.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', 'This is a javascript-driven animation utility for "spritesheet" style images. Spritesheets contain equally-sized animation cells which, when played in sequence, create animated images.'],
        ['p', 'Importantly, .png type images can support transparency, and are generally higher quality than an animated .gif will be. So this utility allows for higher quality animations.'],
        ['p', 'Since a .png spritesheet will have a lower k-weight than a video of the same size, this can be a load-time optimizer as well.']
      ],
      // info: ['p', 
      // ]
    }
  },


  // garden starter
  {
    shortcut: 'gardenstarter',

    title: 'Garden Starter',
    slate: {
      url: imgBaseDir + 'slates/slate-web-gardenstarter.jpg'//,
      // position: 'center 25%'
    },
    venue: 'React Single Page App',
    primaryTags: [
      'front-end',
      'javascript',
      'react',
      'web'
    ],
    secondaryTags: [
      'single page app'
    ],
    skills: [
      'javascript',
      'html/css',
      'illustrator'
    ],
    modal: {
      title: 'Garden Starter - React Single Page App',
      hero: {
        height: 430,
        url: imgBaseDir + 'heroes/hero-web-gardenstarter.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', 'Just a simple React Single Page app with PLACEHOLDER data.'],
        ['p', ['a', {href:'https://github.com/ctcleary/gardenStarter'}, 'Check out the code on Github!']]
      ],
      cta: {
        href: 'https://www.connorthomascleary.com/websamples/gardenstarter/index.html',
        text: 'See it live',
        target: '_blank'
      }
    }
  },


  // dynamic menu
  {
    shortcut: 'dynamicmenu',

    title: 'Dynamic Menu Exercise',
    slate: {
      url: imgBaseDir + 'slates/slate-web-dynamicmenu.jpg',
      position: 'center top'
    },
    venue: 'Javascript Utility',
    primaryTags: [
      'front-end',
      'javascript',
      'web'
    ],
    secondaryTags: [
    ],
    skills: [
      'javascript',
      'html/css',
      'json'
    ],
    modal: {
      title: 'Dynamic Menu Exercise',
      hero: {
        height: 473,
        url: imgBaseDir + 'heroes/hero-web-dynamicmenu.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', 'A simple dynamic menu builder, takes a customized JSON object and creates a multi-level html/css menu of links.'],
        ['p', ['a', {href:'https://github.com/ctcleary/dynamic-menu-exercise'}, 'Check out the code on Github!']]
      ],
      cta: {
        href: 'http://ctcleary.github.io/dynamic-menu-exercise',
        text: 'See it live',
        target: '_blank'
      }
    }
  },


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
      'front-end',
      // 'web',
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
      'front-end',
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
      'front-end',
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
      'front-end',
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
      'front-end',
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
      'front-end',
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
      'front-end',
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
      'front-end',
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

  // jurassic world
  // {
  //   shortcut: 'ptp-jurassicworld',

  //   title: 'Jurassic World PTP',
  //   slate: {
  //     url: imgBaseDir + 'slates/slate-ptp-jurassicworld.jpg',
  //     position: 'center 85%'
  //   },
  //   venue: 'IMDb/Amazon',
  //   primaryTags: [
  //     'front-end',
  //     // 'web',
  //     'motion'
  //   ],
  //   secondaryTags: [
  //     'interactive'
  //   ],
  //   skills: [
  //     'javascript',
  //     'actionscript',
  //     'photoshop',
  //     'illustrator',
  //     'after effects',
  //     'flash'
  //   ],
  //   modal: {
  //     title: 'Jurassic World - Premium Title Page',
  //     hero: {
  //       url: imgBaseDir + 'heroes/hero-ptp-jurassicworld.jpg',
  //       height: 320,
  //       position: 'center bottom'
  //     },
  //     description: ['.item-desc',
  //       ['p', 'Another PTP with some fun interaction easter eggs.'],
  //       ['p', 'As of Sep 1st 2015, we had to rebuild all PTPs using Tarnhelm.'],

  //       ['p.list-header', 'Javascript Rebuild'],
  //       ['ul', [
  //         ['li', 'Utilizes: ', 
  //           ['ul', [
  //             ['li', ['a', {href:'#shortcut:tarnhelm'}, 'Tarnhelm Framework']],
  //             ['li', ['a', {href:'#shortcut:alphalfa'}, 'Alphalfa Player']],
  //             ['li', ['a', {href:'#shortcut:reely'}, 'Reely Player']]
  //             //,
  //             // ['li', ['a', {href:'#shortcut:zoolander'}, 'Zoolander Style Injector']]
  //           ]],
  //         ],
  //       ]],

  //       ['p.list-header', 'Original Flash Build'],
  //       ['ul', [
  //         ['li', 'Created in Flash by implementeing static design from UX Designer Billy Thompson.'],
  //         ['li', 'Interaction effects designed by me.'],
  //         ['li', 'Motion design of logo interaction collaboration between myself and Billy. Concept and implementation by me.'],
  //         ['li', 'Video transition assets created by Billy, implemented (with custom AS3.0 code) by me.'],
  //         ['li', 'Wrap and CSS Swapping implemented by me. (Utilizes my Zoolander CSS Injection module.)'],

  //         ['li', 'Custom AS3.0 code'],
  //         ['li', 'Significant Photoshop work to clean up certain assets and pull apart layers for better motion/interaction design.'],
  //         ['li', 'Complex optimization requirements for fast initial load, async loading for heavier k-weight assets, and design of failure-proof execution code in case of hiccups.'],
  //       ]]
  //     ],
  //     info: ['span',
  //       '(No longer live on site.)'
  //     ]
  //   }
  // },

  // tarnhelm
  {
    shortcut: 'tarnhelm',

    title: 'Tarnhelm Framework',
    venue: 'IMDb/Amazon',
    slate: {
      url: imgBaseDir + 'slates/slate-tarnhelm.jpg',
      position: 'center center'
    },
    primaryTags: [
      'javascript',
      // 'web'
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
        ['p', 'It was an ambitious project under an extraordinary tight deadline, with only three web development engineers, including myself. By September 1st, we had just over a month to develop, test, and deliver a framework robust enough to power the media-rich Mad Max: Fury Road PTP, and scalable enough to also power a simple sidebar rectangle.'],
        ['p', 'Tarnhelm also makes extensive use of my Alphalfa Player.'],

        ['h2', 'Technical Stuff'],
        ['p', 'Ads are configured with a JSON object and built on a component-based system (graphics, panels, video players, etc). Eventually, the same technology that powers the executions will help power a robust WYSIWYG-style internal tool for non-technical ad designers.'],
        ['p', 'Due to the nature of internet advertising, these ads are loaded into an iframe, in which the ads exist as a sort of single-page-app micro-site.'],

        ['h2', 'History'],
        ['p', 'In July 2015, Google announced a new feature that spelled the death of Flash for internet advertisers. Across Amazon, the action plan was simply to run simpler ads. At IMDb, our unique rich media executions set us apart, and helped made IMDb a "must-buy" for movies and tv shows.'],
        ['p', 'I was silly enough to say, "We can build a library to do this. We can replace Flash."'],
      ],
      info: ['p', ['strong', 'PTPs Powered by Tarnhelm:'],
        ['ul',
          ['li', 'Star Wars: TFA'],
          ['li', 'Inside Out'],
          ['li', 'Mad Max: Fury Road'],
          ['li', 'The Good Dinosaur'],
          ['li', 'Jurassic World'],
          ['li', 'Furious 7'],
          ['li', 'Ant Man'],
          ['li', 'Goosebumps'],
          ['li', 'Aladdin'],
          ['li', 'Avengers'],
          ['li', ['small', 'and many others']]
        ]
      ]
    }
  },

  // alphalfa
  {
    shortcut: 'alphalfa',

    title: 'Alphalfa Player',
    venue: 'IMDb/Amazon',
    slate: {
      url: imgBaseDir + 'slates/slate-alphalfa.jpg',
      position: 'center 85%'
    },
    primaryTags: [
      'javascript',
      // 'web'
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
        url: imgBaseDir + 'heroes/hero-alphalfa.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', 'With the death of Flash came the death of video with transparency on the internet. At IMDb, we relied heavily on transparent videos to achieve many of our coolest effects on the Premium Title Pages (PTPs). Seeing the writing on the wall re: Flash\'s imminent deminse, I took it upon myself to create a Javascript module which would make transparent video playback possible.'],
        ['p', 'There was already ', ['a',{href:'http://www.sciencelifeny.com/transparency/transparency.html',target:'_blank'},'one solution out there'], ' but it was only the kernel of the idea. It was neither robust nor optimized enough for our needs. I ran with the initial concept, and created both a highly optimized 2D Canvas method, as well as a more advanced WebGL renderer which offloads the heavy duty workload to the user\'s graphics processor when supported. There are now four separate Alphalfa render methods with varying features and optimizations to ensure the most performant experience possible for end users, without sacrificing the quality of the rich media ads.'],
        ['p', 'Alphalfa was, and continues to be, a significant factor in the success of the Tarnhelm Project.'],
        ['p', 'I cannot go into any other technical specifics, they are protected under NDA.']
      ],
      info: ['p', ['strong', 'PTPs Powered by Alphalfa:'],
        ['ul',
          ['li', 'Star Wars: TFA'],
          ['li', 'Inside Out'],
          ['li', 'Mad Max: Fury Road'],
          ['li', 'The Good Dinosaur'],
          ['li', 'Jurassic World'],
          ['li', ['small', 'and many others']]
        ]
      ]
    }
  },


  // reely
  {
    shortcut: 'reely',

    title: 'Reely Player',
    venue: 'IMDb/Amazon',
    slate: {
      url: imgBaseDir + 'slates/slate-reely.jpg',
      position: 'center center'
    },
    primaryTags: [
      'javascript',
      // 'web'
    ],
    secondaryTags: [
    ],
    skills: [
      'advanced javascript',
      'web video',
      'HTML5',
      'CSS3'
    ],
    modal: {
      title: 'Reely - Customizable HTML5 Video Player',
      hero: {
        url: imgBaseDir + 'heroes/hero-reely.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', 'The Reely Player is used in just about every custom ad execution on IMDb.'],
        ['p', 'When building the IMDb Premium Title Page (PTP) experiences, designers love customizing the video player controls to mesh with the surrounding color palette and reinforce the immersive nature of the experience.'],
        ['p', 'Since every browser has its own default video controls &mdash; which are not customizable in any way &mdash; creating a cross-browser HTML5 video player with a fully customizable skin is more difficult than it may sound. Using a vector spritesheet for easy designer customization, I created a fully functional HTML5 video player utilizing a decoupled, event-driven architecture (pub/sub pattern).'],
      ],
      info: ['p', ['strong', 'PTP Videos Powered by Reely:'],
        ['ul',
          ['li', 'Star Wars: TFA'],
          ['li', 'Inside Out'],
          ['li', 'Mad Max: Fury Road'],
          ['li', 'The Good Dinosaur'],
          ['li', 'Jurassic World'],
          ['li', 'Furious 7'],
          ['li', 'Ant Man'],
          ['li', 'Goosebumps'],
          ['li', 'Aladdin'],
          ['li', 'Avengers'],
          ['li', ['small', 'and many others']]
        ]
      ]
    }
  },


/*
  // REMOVE THIS STUFF
  
  // Zoolander
  {
    shortcut: 'zoolander',

    title: 'Zoolander Style Injector',
    venue: 'IMDb',
    slate: {
      url: imgBaseDir + 'slates/slate-zoolander.jpg',
      position: 'center center'
    },
    primaryTags: [
      'javascript',
      'web'
    ],
    secondaryTags: [],
    skills: [
      'advanced javascript',
      'HTML5',
      'CSS3'
    ],
    modal: {
      title: 'Zoolander Style Injector - CSS Injection Module',
      hero: {
        height: 200,
        url: imgBaseDir + 'heroes/hero-zoolander.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', 'When we built the Inside Out PTP, we had a new requirement: Change the CSS on the page dynamically. But ads render in iframes, which added some complexity to that request. Zoolander gives sourceless iframes the ability to inject stylesheets into the parent document, as well as injecting complex CSS rules at javascript runtime. This creates the opportunity to inject configurable transitions, animations, hover states, pseudo elements, etc, which would not be possible with inline styles.'],
      ],
      info: ['p', 'Utilizes Zoolander:',
        ['ul',
          ['li', ['a', { href: 'http://www.imdb.com/title/tt2096673/', target:'_blank' }, 'Inside Out']],
          ['li', ['a', { href: 'http://www.imdb.com/title/tt0369610/', target:'_blank' }, 'Jurassic World']],
          ['li', ['a', {href:'#shortcut:tarnhelm'}, 'Tarnhelm Framework']],
          ['li', ['a', {href:'#shortcut:reely'}, 'Reely Player']],
          ['li', 'Countdowner Module']
        ]
      ]
    }
  },





  // snapengage homepage
  {
    title: 'SnapEngage Website',
    slate: {
      url: imgBaseDir + 'slates/slate-snapengage.jpg',
      position: 'center top'
    },
    venue: 'SnapEngage',
    primaryTags: [
      'web'
    ],
    secondaryTags: [
    ],
    skills: [
      'wordpress',
      'javascript',
      'html',
      'css',
      'localization'
    ],
    modal: {
      title: 'SnapEngage Home Page',
      hero: {
        url: imgBaseDir + 'heroes/hero-snapengage.jpg',
        height: 700,
        position: 'center top'
      },
      description: ['.item-desc',
        ['p', 'Among several other hats I wore while working at SnapEngage, I built a fully custom Wordpress theme based on a home page design from a contracted designer. We were provided with the home page design, I implemented it to pixel perfection, including javascript animations. The rest of the pages had to be extrapolated from the initial home page design.'],
      ],
      cta: {
        href: 'https://snapengage.com/',
        text: 'See it live.',
        target: '_blank'
      },
    }
  },
  */
  
];
