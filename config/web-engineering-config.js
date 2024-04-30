var imgBaseDir  = (window.location.hostname === 'localhost') ? '/local-design/img/' : 'https://connorthomascleary.com/assets/img/';
var ifrmBaseDir = (window.location.hostname === 'localhost') ? '/local-design/ifrm/' : 'https://connorthomascleary.com/ifrm/';

var webEngineeringItems = [
  // NOTE: Slate type items can't handle headlines.
  
  // particle-blastr
  {
    shortcut: 'particle-blastr',

    title: 'Particle Blastr (WIP)',
    venue: 'Javascript Utility',
    slate: {
      ifrmUrl: ifrmBaseDir + 'particle-blastr/particle-blastr-slate.html',
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
      title: 'Particle Blastr (WIP)',
      hero: {
        ifrmUrl: ifrmBaseDir + 'particle-blastr/particle-blastr-hero.html',
        height: 800,
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', ['em', '(The above sample content is best viewed with a desktop browser.)']],
        ['p', 'A customizable particle effects generator created in pure javascript, utilizing HTML5 canvas drawing.'],
        ['p', ['strong', 'Customization options currently include:']],
        ['ul', [
          ['li', 'Shape selection: Circle, Square, Rectangle, and Rounded Rectangle -- or, alternatively, can be drawn based on an Image.'],
          ['li', 'Size customization, including randomized sizeVariance option.'],
          ['li', 'Distance traveled customization, including both maximum distance and optionally minimum distance.'],
          ['li', 'Gravity customization, including randomized gravityVariance option, supports both positive and negative gravity.'],
          ['li', 'Customization to only burst particles upward, or to send particles out in a full circle.'],
          ['li', 'Fill color customization: Either a single color, or an array of colors.'],
          ['li', 'Stroke color customization -- or renders with no strokes if not defined.'],
          ['li', 'Starting and Ending scale customization.'],
          ['li', 'Starting and Ending opacity customization.'],
          ['li', 'Blast length customization.'],
          ['li', 'Works on any sized canvas.'],
          ['li', 'Easily triggered by any event: click, mousemove, etc.'],
          ['li', 'Optimized to handle thousands of particles with no slowdown.'],
        ]],
        ['br'],
        ['p', 'There are still a variety of features I\'d like to implement, and some polish left to do on the presentation side, but it\'s already functional for a variety of purposes.'],
        ['p', ['a', { href: 'https://github.com/ctcleary/particle-blastr'}, 'Check out the code on Github!']]
      ],
      // info: ['p', 
      // ]
    }
  },

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


  // animaniac
  {
    shortcut: 'animaniac',

    title: 'Anim@niac Player',
    venue: 'IMDb/Amazon',
    slate: {
      ifrmUrl: ifrmBaseDir + 'animaniac/animaniac-slate.html',
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
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', ['em', '(The above sample content is best viewed with a desktop browser.)']],
        ['p', 'This is a javascript-driven animation utility for "spritesheet" style images. Spritesheets contain equally-sized animation cells which, when played in sequence, create animated images.'],
        ['p', 'Importantly, .png type images can support transparency, and are generally higher quality than an animated .gif will be. So this utility allows for higher quality animations.'],
        ['p', 'Since a .png spritesheet will have a lower k-weight than a video of the same size, this can be a load-time optimizer as well.']
      ],
      // info: ['p', 
      // ]
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
      'javascript',
      'web'
    ],
    secondaryTags: [
      'single page app'
    ],
    skills: [
      'javascript',
      'html/css'
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

    // tarnhelm
  {
    shortcut: 'tarnhelm',

    title: 'Tarnhelm Framework - Rich Media PTPs',
    venue: 'IMDb/Amazon',
    slate: {
      url: imgBaseDir + 'slates/slate-tarnhelm.jpg',
      position: 'center center'
    },
    primaryTags: [
      'javascript',
      'web'
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
      title: 'Tarnhelm Framework - Powers All IMDb Advertising',
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
      // url: imgBaseDir + 'slates/slate-alphalfa.jpg',
      // position: 'center 85%'
      ifrmUrl: ifrmBaseDir + 'alphalfa/alphalfa-slate.html',
    },
    primaryTags: [
      'javascript',
      'web'
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
        // height: 200,
        // url: imgBaseDir + 'heroes/hero-alphalfa.jpg',
        // position: 'center center'

        ifrmUrl: ifrmBaseDir + 'alphalfa/alphalfa-hero.html',
        height: 550
      },
      description: ['.item-desc',
        ['p', ['em', '(The above sample content is best viewed with a desktop browser.)']],
        ['p', 'With the death of Flash came the death of video with transparency on the internet. At IMDb, we relied heavily on transparent videos to achieve many of our coolest effects on the Premium Title Pages (PTPs). Seeing the writing on the wall re: Flash\'s imminent demise, I took it upon myself to create a Javascript module which would make transparent video playback possible.'],
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
      ifrmUrl: ifrmBaseDir + 'reely/reely-slate.html'
      // url: imgBaseDir + 'slates/slate-reely.jpg',
      // position: 'center center'
    },
    primaryTags: [
      'javascript',
      'web'
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
        height: 340,
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', 'The Reely Player is used in just about every custom ad execution on IMDb.'],
        ['p', 'When building the IMDb Premium Title Page (PTP) experiences, designers love customizing the video player controls to mesh with the surrounding color palette and reinforce the immersive nature of the experience.'],
        ['p', 'Since every browser has its own default video controls -- which are not customizable in any way -- creating a cross-browser HTML5 video player with a fully customizable skin is more difficult than it may sound. Using a vector spritesheet for easy designer customization, I created a fully functional HTML5 video player utilizing a decoupled, event-driven architecture (pub/sub pattern).'],
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
  }
  
];
