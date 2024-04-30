// Quick video loop control with jQ
(function() {
  var heroVid = $('.hero-vid')[0];
  var maxLoops = 3;
  var heroVidPlayed = 0;

  function onEnded() {
    heroVidPlayed++;
    if (heroVidPlayed < maxLoops) {
      heroVid.play();
    } else {
      heroVid.removeEventListener('ended', onEnded);
    }
  }

  heroVid.addEventListener('ended', onEnded);

  if (heroVidPlayed == 0) {
    heroVid.play();
  }
})();


// Sticky menu with jQ
// (function() {
//   var mainNavWrap  = $('.main-nav-wrapper');
//   var mainNav  = mainNavWrap.children('.main-nav');
//   var isSticky = 'is-sticky';
//   var stickyThreshold = $(mainNav).height()*2;

//   var heroHeight =  $('.hero').height();
//   var heroVid = $('.hero-vid')[0];

//   $(window).scroll(function() {
//     if( $(this).scrollTop() > stickyThreshold ) {
//       mainNavWrap.addClass(isSticky);
//       mainNav.addClass(isSticky);
//     } else {
//       mainNavWrap.removeClass(isSticky);
//       mainNav.removeClass(isSticky);
//     }
//   });
// })();


// Lazy copypasta smooth scroll on anchor clicks.
// $(function() {
//   var navbarSpacing = 62;

//   var shortcutTest = /^(#|)shortcut\:/;
//   function isShortcutHash(currHash) {
//     return shortcutTest.test(currHash);
//   }

//   $('a[href*=#]:not([href=#])').click(function() {
//     if (isShortcutHash(this.hash)) {
//       return;
//     }
//     if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         // Hacky solution. Inconsistent. TODO figure this out.
//         var targetScrollPoint = target.offset().top - navbarSpacing;
//         // var nav = $(".main-nav-wrapper")[0];
//         // var navHeight = (nav) ? nav.clientHeight : 0;
//         // navHeight = navHeight + 20; 
//         //console.log("navHeight ::", navHeight);
//         // console.log("targetScrollPoint ::", targetScrollPoint);
//         $('html,body').animate({
//           scrollTop: targetScrollPoint
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

// Mobile nav menu
const mobileNav = () => {
  const hamburgerBtn = document.getElementById('mobile-nav-hamburger-container');
  const mobileMenu = document.getElementById('mobile-nav-container');
  const mobileMenuLinks = $('#mobile-nav-container a');

  const mobileCloseBtn = document.getElementById('mobile-nav-close');

  const toggleMenu = () => {
    hamburgerBtn.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
  }

  const closeMenu = () => {
    console.log("closeMenu");
    hamburgerBtn.classList.remove('hidden');
    mobileMenu.classList.add('hidden');
  }

  hamburgerBtn.addEventListener('click', toggleMenu);
  // mobileMenu.addEventListener('click', toggleMenu);
  mobileMenuLinks.on('click', toggleMenu);

  mobileCloseBtn.addEventListener('click', closeMenu);
}

document.addEventListener('DOMContentLoaded', mobileNav);


// Riot app, etc.

var util = window.util || {};
var str = window.util.str = {
  slugify: function(str) {
    return str.toLowerCase().replace(/[\s:_-]/g, '-');
  },
  makeHashKey: function(name) {
    return 'item:' + str.slugify(name);
  }
};
var obj = window.util.obj = {
  deepClone: function(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

window.modalControl = (function() {
  var modalEl = document.getElementById('modal-container');
  var modalTag;

  // HISTORY CONTROL -- hitting "back" should dismiss modal.

  var oldPopStateHandler = window.onpopstate || function(){};
  window.onpopstate = function(event) {
    if (event.state == null || event.state.modalState == null) {
      window.modalControl.dismissModal();
    }
    oldPopStateHandler();
  }

  return {
    initModal: function(modalData, riotTag) {
      // console.log("initModal", modalData, riotTag);
      modalTag = riot.mount(modalEl, 'item-modal', modalData)[0];
      var name = modalData.title;
    },
    dismissModal: function() {
      if (modalTag) {
        modalTag.unmount(true);
      }
    }
  };
})();

// SLATE KIND ITEMS -- src: config/*-config.js

var gameNarrativeItems = gameNarrativeItems || [];
var gameQuestItems = gameQuestItems || [];

var webEngineeringItems = webEngineeringItems || [];
var webRichMediaItems = webRichMediaItems || [];
var videoSamplesItems = videoSamplesItems || [];
var gameOtherItems = gameOtherItems || [];
var allSlateItems = [].concat(gameNarrativeItems)
                      .concat(gameQuestItems)
                      .concat(gameOtherItems)
                      .concat(webEngineeringItems)
                      .concat(webRichMediaItems)
                      .concat(videoSamplesItems);

// TEXT KIND ITEMS
var writingSampleItems = writingSampleItems;
var criticalReceptionItems = criticalReceptionItems;
var fictionPublicationItems = fictionPublicationItems;
var journoPublicationItems = journoPublicationItems;

// VIDEO KIND ITEMS

var QueryO = window.QueryO; // from js/queryo.js
var hashCatcher = (function(window, allSlateItems) {
  var listenKeys = [];

  allSlateItems.forEach(function(item) {
    // Add a 'hashKey' to each item
    item.hashKey = str.makeHashKey(item.title);
    listenKeys.push(item.hashKey);
  });

  var itemTest = /^item\:/;
  function isItemHash(currHash) {
    return itemTest.test(currHash);
  }
  
  var shortcutTest = /^(#|)shortcut\:/;
  function isShortcutHash(currHash) {
    return shortcutTest.test(currHash);
  }
  function getKeyFromShortcut(currHash) {
    var shortcut = currHash.split(':')[1];
    var item = _.findWhere(allSlateItems, {shortcut: shortcut});
    return item.hashKey;
  }

  function handleHashChange(e) {
    // console.log("handleHashChange", e);
    var currHash = document.location.hash.substr(1);
    var isItem = isItemHash(currHash);
    var isShortcut = isShortcutHash(currHash);
    if (!isItem && !isShortcut) {
      // No item, no shortcut.
      // Likely initial function call for setup purposes.
      // console.warn('Bad configuration. Modals must have item or shortcut hash.')
      return;
    }

    var hashKey = '';
    if (isShortcut) {
      hashKey = getKeyFromShortcut(currHash);
    } else  {
      hashKey = currHash;
    }

    var isListenKey = listenKeys.indexOf(hashKey) !== -1;
    if (isListenKey) {
      var modalItem = _.findWhere(allSlateItems, {hashKey: hashKey});
      if (!modalItem) {
        window.debug.warn('Failed to find modalItem for :: ', hashKey);
        return;
      }

      if (window.history.length === 1) {
        handleInitialHash(modalItem);
      }
      window.modalControl.initModal(modalItem)
    }
  }

  function handleInitialHash(modalItem) {
    // If visitor came to a direct-to-modal link
    // modify the browser history so they can go 'back'
    var hashURL = window.location.href;
    var noHasHURL = window.location.href.split('#')[0];
    window.history.replaceState({ modalState: null }, document.title, noHasHURL);
    var title = modalItem.modal.title || modalItem.title;
    window.history.pushState({ modalState: title }, document.title, hashURL);
  }

  // Add to hashchange event
  window.addEventListener('hashchange', handleHashChange);

  // call on init 
  handleHashChange();

}) (window, allSlateItems); //, portfolioItems, webItems);


var appsConfig = {
  disableFilters: QueryO.get('disableFilters', {as: 'boolean'}),
  hideFilters: QueryO.get('hideFilters', {as: 'boolean'})
};
var presetFilters = {
  portfolio: QueryO.get('portFilters', {as: 'array', of: 'string'}),
  web: QueryO.get('webFilters', {as: 'array', of: 'string'}),
  publications: QueryO.get('pubFilters', {as: 'array', of: 'string'}),
  journalism: QueryO.get('journoFilters', {as: 'array', of: 'string'}),
  video: QueryO.get('videoFilters', {as: 'array', of: 'string'})
};

  // Hide filters by default
  appsConfig.hideFilters = true;

try {
  var gameNarrative = riot.mount(
    '#game-narrative-app',
    'tags-app',
    {
      // itemLimit: 3, // TODO this looks ugly as sin for slate type items.
      appConfig: appsConfig,
      // presetFilters: presetFilters.portfolio,
      removeFilters: true,
      searchPhrase: 'Filter narrative work by skill:',
      tagsClass: 'skill-tags',
      itemsWrapClass: 'slates-wrapper',
      itemsHoldClass: 'slates-holder',
      itemsClass: 'slate-item',
      tagsItems: gameNarrativeItems
    }
  );

  var gameQuest = riot.mount(
    '#game-quest-app',
    'tags-app',
    {
      // itemLimit: 3, // TODO this looks ugly as sin for slate type items.
      appConfig: appsConfig,
      // presetFilters: presetFilters.portfolio,
      removeFilters: true,
      searchPhrase: 'Filter quest and design work by skill:',
      tagsClass: 'skill-tags',
      itemsWrapClass: 'slates-wrapper',
      itemsHoldClass: 'slates-holder',
      itemsClass: 'slate-item',
      tagsItems: gameQuestItems
    }
  );

  var videoSamples = riot.mount(
    '#video-samples-app',
    'tags-app',
    {
      appConfig: appsConfig,
      // presetFilters: presetFilters.video,
      removeFilters: true,
      searchPhrase: 'Filter videos by tag:',
      tagsClass: 'skill-tags',
      itemsWrapClass: 'slates-wrapper',
      itemsHoldClass: 'slates-holder',
      itemsClass: 'slate-item',
      tagsItems: videoSamplesItems
    }
  );
  
  var writingSamples = riot.mount(
    '#writing-samples-app',
    'tags-app',
    {
      // itemLimit: 3, // TODO this looks ugly as sin for slate type items.
      appConfig: appsConfig,
      // presetFilters: presetFilters.publications,
      removeFilters: true,
      searchPhrase: 'Filter samples by tag:',
      tagsClass: 'skill-tags',
      itemsWrapClass: 'pubs-wrapper',
      itemsHoldClass: 'pub-item-holder',
      itemsClass: 'pub-item',
      tagsItems: writingSampleItems
    }
  );

  var criticalReception = riot.mount(
    '#critical-reception-app',
    'tags-app',
    {
      // itemLimit: 3, // TODO this looks ugly as sin for slate type items.
      appConfig: appsConfig,
      // presetFilters: presetFilters.publications,
      removeFilters: true,
      searchPhrase: 'Filter samples by tag:',
      tagsClass: 'skill-tags',
      itemsWrapClass: 'pubs-wrapper',
      itemsHoldClass: 'pub-item-holder',
      itemsClass: 'pub-item',
      tagsItems: criticalReceptionItems
    }
  );

  var gameOther = riot.mount(
    '#game-other-app',
    'tags-app',
    {
      appConfig: appsConfig,
      // presetFilters: presetFilters.publications,
      removeFilters: true,
      searchPhrase: 'Filter samples by tag:',
      tagsClass: 'skill-tags',
      itemsWrapClass: 'slates-wrapper',
      itemsHoldClass: 'slates-holder',
      itemsClass: 'slate-item',
      tagsItems: gameOtherItems
    }
  );
  
   var webEngineering = riot.mount(
    '#web-engineering-app',
    'tags-app',
    {
      // itemLimit: 3, // TODO this looks ugly as sin for slate type items.
      appConfig: appsConfig,
      // presetFilters: presetFilters.web,
      removeFilters: true,
      searchPhrase: 'Filter web work by skill:',
      tagsClass: 'skill-tags',
      itemsWrapClass: 'slates-wrapper',
      itemsHoldClass: 'slates-holder',
      itemsClass: 'slate-item',
      tagsItems: webEngineeringItems
    }
  );

  var webRichMedia = riot.mount(
    '#web-rich-media-app',
    'tags-app',
    {
      // itemLimit: 3, // TODO this looks ugly as sin for slate type items.
      appConfig: appsConfig,
      // presetFilters: presetFilters.web,
      removeFilters: true,
      searchPhrase: 'Filter rich media work by skill:',
      tagsClass: 'skill-tags',
      itemsWrapClass: 'slates-wrapper',
      itemsHoldClass: 'slates-holder',
      itemsClass: 'slate-item',
      tagsItems: webRichMediaItems
    }
  );

  var publications = riot.mount(
    '#publications-app',
    'tags-app',
    {
      appConfig: appsConfig,
      // presetFilters: presetFilters.publications,
      removeFilters: true,
      searchPhrase: 'Filter publications by type:',
      tagsClass: 'skill-tags',
      itemsWrapClass: 'pubs-wrapper',
      itemsHoldClass: 'pub-item-holder',
      itemsClass: 'pub-item',
      tagsItems: fictionPublicationItems
    }
  );

  var journalism = riot.mount(
    '#journalism-app',
    'tags-app',
    {
      appConfig: appsConfig,
      // presetFilters: presetFilters.journalism,
      searchPhrase: 'Filter articles by tag:',
      itemLimit: 10,
      tagsClass: 'skill-tags',
      itemsWrapClass: 'pubs-wrapper',
      itemsHoldClass: 'pub-item-holder',
      itemsClass: 'pub-item',
      tagsItems: journoPublicationItems
    }
  );

  /* var vo = riot.mount(
    '#vo-app',
    'tags-app',
    {
      appConfig: appsConfig,
      // presetFilters: presetFilters.journalism,
      searchPhrase: 'Filter articles by tag:',
      itemLimit: 10,
      tagsClass: 'skill-tags',
      itemsWrapClass: 'pubs-wrapper',
      itemsHoldClass: 'pub-item-holder',
      itemsClass: 'pub-item',
      tagsItems: voItems
    }
  ); */


} catch (e) {
  window.debug.error("Error mounting app, e ::", e, e.stack);
}

/*
(function() {
  var typist = new Typist({
    el: $('.js-hero-type-text')[0],
    preText: 'I ',
    clearAfterComplete: false,
    emptyWait: 145,
    messageWait: 1500,
    stages: [
      {
        text: 'write ',
      },
      {
        text: 'design ',
      },
      {
        text: 'code ',
      },
      {
        text: 'create experiences.',
        writeSpeed: 15,
        emptyWait: 700
      }
    ]
  });
})();
*/