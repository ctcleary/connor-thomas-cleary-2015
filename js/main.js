// Quick video loop control with jQ
(function() {
  var heroVid = $('.hero-vid')[0];
  var maxLoops = 1;
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
})();


// Sticky menu with jQ
(function() {
  var mainNavWrap  = $('.main-nav-wrapper');
  var mainNav  = mainNavWrap.children('.main-nav');
  var isSticky = 'is-sticky';
  var stickyThreshold = $(mainNav).height()*2;

  var heroHeight =  $('.hero').height();
  var heroVid = $('.hero-vid')[0];

  $(window).scroll(function() {
    if( $(this).scrollTop() > stickyThreshold ) {
      mainNavWrap.addClass(isSticky);
      mainNav.addClass(isSticky);
    } else {
      mainNavWrap.removeClass(isSticky);
      mainNav.removeClass(isSticky);
    }
  });
})();


// Lazy copypasta smooth scroll on anchor clicks.
$(function() {
  var navbarSpacing = 48;

  var shortcutTest = /^(#|)shortcut\:/;
  function isShortcutHash(currHash) {
    return shortcutTest.test(currHash);
  }

  $('a[href*=#]:not([href=#])').click(function() {
    if (isShortcutHash(this.hash)) {
      return;
    }
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - navbarSpacing
        }, 1000);
        return false;
      }
    }
  });
});


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



var portfolioItems = portfolioItems;
var fictionPublicationItems = fictionPublicationItems;
var journoPublicationItems = journoPublicationItems;

var QueryO = QueryO; // from js/queryo.js
var hashCatcher = (function(window, portfolioItems) {
  var listenKeys = [];
  portfolioItems.forEach(function(item) {
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
    var item = _.findWhere(portfolioItems, {shortcut: shortcut});
    return item.hashKey;
  }

  function handleHashChange(e) {
    var currHash = document.location.hash.substr(1);
    var isItem = isItemHash(currHash);
    var isShortcut = isShortcutHash(currHash);
    if (!isItem && !isShortcut) {
      // No item, no shortcut.
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
      var modalItem = _.findWhere(portfolioItems, {hashKey: hashKey});
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

}) (window, portfolioItems);


var appsConfig = {
  disableFilters: QueryO.get('disableFilters', {as: 'boolean'}),
  hideFilters: QueryO.get('hideFilters', {as: 'boolean'})
};
var presetFilters = {
  portfolio: QueryO.get('portFilters', {as: 'array', of: 'string'}),
  publications: QueryO.get('pubFilters', {as: 'array', of: 'string'}),
  journalism: QueryO.get('journoFilters', {as: 'array', of: 'string'})
};

try {
  var portfolio = riot.mount(
    '#portfolio-app',
    'tags-app',
    {
      // itemLimit: 3, // TODO this looks ugly as sin for slate type items.
      appConfig: appsConfig,
      presetFilters: presetFilters.portfolio,
      searchPhrase: 'Filter portfolio by skill:',
      tagsClass: 'skill-tags',
      itemsWrapClass: 'slates-wrapper',
      itemsHoldClass: 'slates-holder',
      itemsClass: 'slate-item',
      tagsItems: portfolioItems
    }
  );

  // Hide by default on publications sections.
  appsConfig.hideFilters = true;

  var publications = riot.mount(
    '#publications-app',
    'tags-app',
    {
      appConfig: appsConfig,
      presetFilters: presetFilters.publications,
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
      presetFilters: presetFilters.journalism,
      searchPhrase: 'Filter articles by tag:',
      itemLimit: 10,
      tagsClass: 'skill-tags',
      itemsWrapClass: 'pubs-wrapper',
      itemsHoldClass: 'pub-item-holder',
      itemsClass: 'pub-item',
      tagsItems: journoPublicationItems
    }
  );

} catch (e) {
  window.debug.error("Error mounting app, e ::", e, e.stack);
}

(function() {
  var typist = new Typist({
    el: $('.js-hero-type-text')[0],
    preText: 'I ',
    clearAfterComplete: false,
    emptyWait: 145,
    messageWait: 700,
    stages: [
      {
        text: 'write ',
      },
      {
        text: 'code ',
      },
      {
        text: 'design ',
      },
      {
        text: 'create experiences.',
        writeSpeed: 15,
        emptyWait: 700
      }
    ]
  });
})();