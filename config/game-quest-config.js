// var imgBaseDir = (window.location.hostname === 'localhost') ? '/local-design/img/' : 'https://connorthomascleary.com/assets/img/';
var imgBaseDir = './assets/img/';

var gameQuestItems = [

  // loveshorn
  {
    shortcut: 'summoner',

    title: 'Summoner: The Bescarfed (2024)',
    venue: 'Indie Dev',
    slate: {
      url: imgBaseDir + 'slates/slate-summonerjs.jpg',
      position: 'center top'
    },
    primaryTags: [
      'writing',
      'game design',
      'coding',
      'pixel art',
      'animation',
    ],
    secondaryTags: [
      'javascript',
    ],
    modal: {
      title: 'Summoner: The Bescarfed (2024)',
      hero: {
        vimeo: 981816079,
        // url: imgBaseDir + '/heroes/hero-summonerjs.jpg',
        // height: 567,
        // position: 'center center'
      },
      description: ['.item-desc', 
        [
          ['p', 'The epic tale of a young hero named Yung Hyro who ventures forth from the humble village of Hombel with a fire in his heart, a wand in each hand, and a magickal Scarf of Strategically-Limited Power around his neck. For the forces of Evil are roiling down from the Blackfire Steelmountain of Shadowdarkness, threatening all good things in their path - especially the good lives of the good villagers of Hombel! - and it\'s up to the youth in green and his muffler of blue to stand against the senseless tide of destruction…'],
          ['p', 'In this pixel-style, side-scrolling 2D action-adventure game, summon monsters and wield magicks mighty, mysterious, and spelled with a k. Master these powerks and save the village! The Village Elder believes in you and the rest of the village is cautiously optimistic!'],
          ['p', ['strong', '*** Requires a device with a physical keyboard at present. ***']],
          ['p', 'The project:'],
          ['p', 'This game is 100% programmed in Javascript using VS Code and Chrome Dev Tools; everything here was created by me with the big exception of the (excellent) free-to-use PhaserJS game framework; placeholder sound effects created with the free-to-use Bfxr; and all art/animation assets created with the (also excellent) pixel art software Aseprite.'],
          ['p', 'This game is in EARLY PRE-ALPHA and is NOT-A-REAL-BOY, and RIDDLED WITH BUGS probably, but I\'ll try to keep a stable build on the main page. This is only intended as a demo and a proof-of-concept, feel free to send any thoughts or feedback to dev@bescarfed.com or DM me here!'],  
        ],
      ],
      cta: {
        href: 'https://bescarfed.com',
        text: 'Play it now!',
        target: '_blank'
      }
    }
  },

  // loveshorn
  {
    shortcut: 'loveshorn',

    title: 'Loveshorn in Glenrock',
    venue: 'Mod Tools',
    slate: {
      url: imgBaseDir + 'slates/slate-loveshorn.jpg',
      position: 'center top'
    },
    primaryTags: [
      'writing',
      'quest design',
      'mod tools',
      'level design'
    ],
    secondaryTags: [
      'narrative design',
      'game mod',
      'design test'
    ],
    modal: {
      title: 'Loveshorn in Glenrock (Divinity: Original Sin)',
      hero: {
        vimeo: '163503889',
      },
      description: ['.item-desc',
        ['p',
          ['a', { href: 'https://connorthomascleary.com/assets/docs/LoveshornInGlenrock_QuestDesign.pdf', target: '_blank'}, 'View the Quest Design Flowchart']
        ],
        ['p', 'A short narrative-focused level where you are asked to intervene in the social drama of a small town called Glenrock. Will you be vindictive or forgiving? Will you run people out of town for their sins, or help them put their lives back together?'],
        ['p', 'There are over 13 different end states, and countless paths through the complex social fabric of Glenrock. Resolve the problems however you see fit!'],
        ['hr'],
        ['p&', 'Created with Larian Studios\' <em>Divinity Engine</em>. Powered by over 2,800 lines of the proprietary scripting language, Divinity Script. Features hundreds of lines of dialog. Gracefully handles unusual Player sequences and dead NPCs. Also there\s a talking fish.'],
        ['p', 'Credits:'],
        ['ul', [
          ['li', 'All writing, scripting, and level decoration created/implemented by Connor Thomas Cleary.'],
          ['li', 'Original bare-bones town layout provided by Larian Studios.'],
          ['li', 'Original quest premise provided by Larian Studios.'],
          ['li&', 'Intro music: <em>Hammerfall - Templars of Steel</em>.'],
        ]]
      ],
      cta: {
        href: 'http://steamcommunity.com/sharedfiles/filedetails/?id=654487484',
        text: 'Play it on Steam!',
        target: '_blank'
      }
    }
  },

  // skeleton key
  {
    shortcut: 'skeletonkey',

    title: 'Skeleton Key',
    venue: 'Mod Tools',
    slate: {
      url: imgBaseDir + '/slates/slate-skeletonkey.jpg',
      position: 'right center'
    },
    primaryTags: [
      'writing',
      'quest design',
      'mod tools',
      'level design'
    ],
    secondaryTags: [
      'narrative design',
      'level design',
      'game mod'
    ],
    skills: [
      'game editor',
      'level design',
      'branching dialogue',
      'shadowrun returns editor'
    ],
    modal: {
      title: 'Skeleton Key (Shadowrun: Returns Quest)',
      hero: {
        vimeo: '142842311'
      },
      description: ['.item-desc',
        ['p', 'Despite being a fairly short mission, and mostly a prologue to a much larger story, this mission module is one of the Top 3 most popular Steam Workshop items for <em>Shadowrun Returns: Dragonfall</em> under the tag <em>Story</em> in the past year.'],

        ['p', 'Mission created with the ', ['a', {href:'https://www.youtube.com/watch?v=qyRBqnxKe5M'}, 'Shadowrun Returns Editor'], '. All visual/audio assets copyright Harebrained Schemes, with the exception of the skull portrait shown above.'],
        ['p', 'Many branching dialogues with NPCs and Player choices for approaching various situations. Several enemy encounters with strategically interesting cover options.'],
        ['p', ['a', { href: 'https://vimeo.com/142842311' }, 'Video playthrough'], ' is 9.5 minutes long. Actual playthrough takes 15-25 minutes. Link to playable Content Pack coming soon.'],
        ['p', 'Represents about 30-35 hours of work after first contact with the editor.']
      ],
      cta: {
        href: 'http://steamcommunity.com/sharedfiles/filedetails/?id=669539459',
        text: 'Play it on Steam!',
        target: '_blank'
      }
    }
  },
  
  /*
  // asgardrun
  {
    shortcut: 'asgardrun',

    title: 'Asgard Run',
    venue: 'Amused Sloth',
    slate: {
      url: imgBaseDir + 'slates/slate-asgardrun.jpg',
      position: 'center top'
    },
    primaryTags: [
      'writing'
    ],
    secondaryTags: [
      'scriptwriting',
      'contract'
    ],
    modal: {
      title: 'Asgard Run - Opening Cinematic',
      hero: {
        vimeo: '160117609',
      },
      description: ['.item-desc',
        ['p', 'Contracted to write the script for Asgard Run\'s opening cinematic. After some discussion with the client, we decided to go with a style reminiscent of old Scandinavian poetry.']
      ],
      info: ['div', [
        ['a', 
          { href: 'http://www.amusedsloth.com/games/asgardrun/', target: '_blank'},
          'Asgard Run'
        ],
        ['br'],
        ['a', 
          { href: 'http://www.amusedsloth.com/', target: '_blank'},
          'Amused Sloth'
        ]
      ]]
    }
  },
  */
/*
  // segfault
  {
    shortcut: 'segfault0',

    title: 'Segfault[0]: Mad Hatter',
    venue: 'Solo',
    slate: {
      url: imgBaseDir + 'slates/slate-segfault.jpg',
      position: 'center top'
    },
    primaryTags: [
      'writing',
      'game design',
      'twine'
    ],
    secondaryTags: [
      'branching narrative',
      'javascript',
      'CSS'
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
        ['p', 'What kind of test subject will you be?'],
        ['p', 'This interactive fiction features branching storylines, stat tracking, and five-ish endings to unlock.'],
        ['p', ['em', 'Finalist entry in the one-month game writing jam, ', ['a', {href:'http://itch.io/jam/wag-challenge', target:'_blank'}, '2015 Write-A-Game Challenge'], ' (#WagChallenge), supported by the IGDA Game Writing SIG. The theme was \"Down the Rabbit Hole.\"']]
      ],
      cta: {
        href: 'http://connorthomascleary.com/games/segfault-0/Segfault-0-Mad-Hatter_v1.1.html',
        text: 'Play Segfault[0]',
        target: '_blank'
      },
      info: [
        'a', {
          href: imgBaseDir + 'twinecomp-segfault.jpg'
        },
        'Game Flow Preview'
      ]
    }
  },

  // roggy
  {
    shortcut: 'roggy',

    title: 'Roggy and the Beast',
    venue: 'Solo',
    slate: {
      url: imgBaseDir + 'slates/slate-roggy.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design',
      'twine'
    ],
    secondaryTags: [
      'branching narrative',
      'javascript',
      'CSS'
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
      cta: {
        href: 'http://connorthomascleary.com/games/roggy-and-the-beast/Roggy_and_the_Beast_1.5.html',
        text: 'Play Roggy and the Beast',
        target: '_blank'
      },
      info: [
        'a', {
          href: imgBaseDir + 'twinecomp-roggy.jpg'
        },
        'Game Flow Preview'
      ]
    }
  },
  
*/

  // summoner
  {
    shortcut: 'summoner',

    title: 'Summoner Prototype (Unity)',
    venue: 'Indie Dev',
    slate: {
      url: imgBaseDir + '/slates/slate-summoner.jpg',
      position: 'left center'
    },
    primaryTags: [
      'unity',
      'game design',
      'C#'
    ],
    skills: [
      'unity',
      'pixel art',
      'pixel animation',
      'flixel',
      'actionscript'
    ],
    modal: {
      hero: {
        url: imgBaseDir + '/heroes/hero-summoner.jpg',
        height: 320,
        position: 'center bottom'
      },
      description: ['.item-desc',
        ['p',
          ['a', { href: 'https://connorthomascleary.com/wrt/ClearyConnor_DesignDoc_SummonerTheBescarfed.pdf', target: '_blank'}, 'View the Design Doc']
        ],
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
      cta: {
        //href: 'http://connorthomascleary.com/games/summoner-the-bescarfed-unity/index.html',
        href: 'https://connorthomascleary.com/games/summoner-the-bescarfed-unity/Summoner-the-Bescarfed.zip',
        text: 'Download Unity Build (Windows Only) - Right Click => Save link as...'
      },
      info: ['a', 
        { href: 'http://connorthomascleary.com/wrt/ClearyConnor_DesignDoc_SummonerTheBescarfed.pdf' },
        'View Design Doc'
      ]
    }
  },

  // smiley breaks out
  {
    shortcut: 'smiley',

    title: 'Smiley Breaks Out',
    venue: 'Hobby',
    slate: {
      url: imgBaseDir + '/slates/slate-smiley.jpg',
      position: 'center top'
    },
    primaryTags: [
      '3D',
      'animation'
    ],
    secondaryTags: [
      'rigging'
    ],
    modal: {
      title: 'Smiley the Demon Breaks Out',
      hero: {
        vimeo: '146804306',
        // url: imgBaseDir + '/heroes/hero-smiley.jpg',
        // position: 'center top'
      },
      description: ['.item-desc',
        ['p', 'Smiley the Demon breaks out of the classic "T-Pose."'],
        ['p', 'All content is original and created by hand using Blender 3D, including model, skeleton, rigging, and animation.']
      ]
    }
  }
  
];