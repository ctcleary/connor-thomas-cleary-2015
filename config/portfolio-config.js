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
var portfolioItems = [

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
  },

  // potions
  /*
  {
    shortcut: 'potions',
    title: 'Potions: A Curious Tale',
    venue: 'Stumbling Cat',
    slate: {
      url: imgBaseDir + 'slates/slate-potions.jpg',
      position: 'center center'
    },
    primaryTags: [
      'writing',
      'game design',
      'level design'
    ],
    secondaryTags: [
      'narrative design',
      'unity'
    ],
    modal: {
      title: 'Potions: A Curious Tale',
      hero: {
        height: 288,
        url: imgBaseDir + 'heroes/hero-potions.jpg',
        position: 'center center'
      },
      description: ['.item-desc',
        ['p', 'I\'m honored to be working as the Narrative Lead on this promising indie title developed by Stumbling Cat with Creative Director Renee Gittins at the helm.'],
        ['p', 'Working in close collaboration with Renee Gittins, I\'ve designed a compelling overarching plot for Potions: A Curious Tale. It\'s designed to be flexible enough to incorporate a number fairy tale, folklore, and mythological characters and storylines from all over the world, while maintaining a focus on the thematic elements and character motivations the team is passionate about exploring.'],
        ['p', 'I am also very happy to be contributing to the game design side of things, and using my experience as a web developer to help inform our UI design and decisions.'],
        ['p', 'Finally, I\'ve also taken on programming tasks from time to time, like rebuilding our dialogue system to support imported <pre>.csv</pre> scripts to increase the efficiency of the writing, editing, and iteration process.']
      ],
      cta: {
        href: 'https://stumblingcat.com',
        text: 'Potions Website',
        target: '_blank'
      }
    }
  },
  */
  
  
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

  // loveshorn
  {
    shortcut: 'loveshorn',

    title: 'Loveshorn in Glenrock',
    venue: 'Solo',
    slate: {
      url: imgBaseDir + 'slates/slate-loveshorn.jpg',
      position: 'center top'
    },
    primaryTags: [
      'writing',
      'game design',
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
      },
      info: [
        'a', {
          href: 'http://connorthomascleary.com/assets/docs/LoveshornInGlenrock_QuestDesign.pdf',
          target: '_blank'
        },
        'Quest Design Flow Chart'
      ]
    }
  },

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
  
  // summoner
  {
    shortcut: 'summoner',

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
      cta: {
        //href: 'http://connorthomascleary.com/games/summoner-the-bescarfed-unity/index.html',
        href: 'http://connorthomascleary.com/games/summoner-the-bescarfed-unity/Summoner-the-Bescarfed.zip',
        text: 'Play Unity Build (Windows Only)',
        target: '_blank'
      },
      info: ['a', 
        { href: 'http://connorthomascleary.com/games/summoner-the-bescarfed/' },
        'Play Flash Prototype'
      ]
    }
  },


  // skeleton key
  {
    shortcut: 'skeletonkey',

    title: 'Skeleton Key',
    venue: 'Solo',
    slate: {
      url: imgBaseDir + '/slates/slate-skeletonkey.jpg',
      position: 'right center'
    },
    primaryTags: [
      'writing',
      'game design',
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

  // smiley breaks out
  {
    shortcut: 'smiley',

    title: 'Smiley Breaks Out',
    venue: 'Solo',
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
