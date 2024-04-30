riot.tag('item-modal', '<article><div class="item-modal-viewport" riot-style="{this.getTransitionStyle()}"><div class="item-modal-lightbox" onclick="{this.dismissModal}"></div><div class="item-modal-wrapper"><div class="item-modal-container"><div class="item-modal-close" onclick="{this.dismissModal}"></div><div class="item-modal" riot-style="{this.getModalStyle()}"><div class="item-modal-header"><h1 class="item-modal-headline"> {this.modalTitle} </h1><div class="item-hero-container"><div class="item-modal-hero" if="{!this.isCustomHero && !this.isVimeoHero && !this.isYoutubeHero && !this.isIfrmHero}" riot-style="{this.getHeroStyle()}" ></div><div class="item-modal-custom-hero" if="{this.isCustomHero}" riot-style="{this.getHeroStyle()}" ></div><div class="item-modal-vimeo-hero" if="{this.isVimeoHero}" riot-style="{this.getHeroStyle()}" ></div><div class="item-modal-youtube-hero" if="{this.isYoutubeHero}" riot-style="{this.getHeroStyle()}" ></div><div class="item-modal-ifrm-hero" if="{this.isIfrmHero}" riot-style="{this.getHeroStyle()}" ></div></div></div>  <div class="item-modal-contents"><div class="item-modal-description"><h2> Description </h2></div><div class="item-modal-sidebar"><div if="{this.hasCTA}" class="item-modal-cta item-modal-sidebar-section"></div><div if="{this.hasInfo}" class="item-modal-info item-modal-sidebar-section"><h2> Info </h2></div><div if="{this.hasTags}" class="item-modal-tags item-modal-sidebar-section"><h2> Tagged </h2></div><div if="{this.hasSkills}" class="item-modal-skills item-modal-sidebar-section"><h2> Skills </h2></div></div></div>  </div>  </div></div></div></article>', function(opts) {
    var modalConfig = this.opts.modal;
    this.transitionLengthS = 0.25;
    this.modalTitle = modalConfig.title || this.opts.title;

    this.isCustomHero  = !!modalConfig.hero.custom;
    this.isVimeoHero   = !!modalConfig.hero.vimeo;
    this.isYoutubeHero = !!modalConfig.hero.youtube;
    this.isIfrmHero    = !!modalConfig.hero.ifrmUrl;

    this.isCustom  = !!modalConfig.custom;
    this.hasCTA    = !!modalConfig.cta;
    this.hasInfo   = !!modalConfig.info;
    this.hasSkills = !!this.opts.skills;
    this.hasTags   = !!this.opts.primaryTags;

    this.getTransitionStyle = function() {
      return [
          'opacity: 0;',
          'transition: opacity ' + this.transitionLengthS +'s cubic-bezier(0.445, 0.050, 0.550, 0.950);'
        ].join('');
    };

    this.getModalStyle = function() {
      return 'background: white;';
    };


    this.getHeroStyle = function() {
      if (!modalConfig.hero.url && !modalConfig.hero.ifrmUrl) {
        return 'background-color: black';
      }
      var heroStyles = []
      if (modalConfig.hero.url) {
        heroStyles = ['background: url(' + modalConfig.hero.url + ');',
          'background-size: cover;',
          'background-position: ' + (modalConfig.hero.position || 'center center') + ';',
          ''];

      } else {
        heroStyles = ['background-color: black;'];
        
      }
      
      if (modalConfig.hero.height != null) {
        heroStyles.push('height: '+ modalConfig.hero.height +'px;'); 
      }

      return heroStyles.join(' ');
    };

    this.dismissModal = function(e) {
      window.history.go(-1);
    };

    this.dismissOnEsc = function(e) {
      if (e.keyCode === 27) {
        this.dismissModal();

      }
    };

    this.show = function() {
      if (!this.viewport) {
        window.debug.warn('Something went wrong with the Modal Viewport.');
      }

      var v = this.viewport;
      setTimeout(function() {
        v.style.opacity = 1;
      }, 0);
    };

    this.appendShaven = function(shavenConfig, elClass) {

      var clone = window.util.obj.deepClone(shavenConfig);
      var shavenObj = shaven(clone);

      var el = this.root.getElementsByClassName(elClass)[0];
      el.appendChild(shavenObj[0]);
    };


    this.appendDescription = function() {
      this.appendShaven(modalConfig.description, 'item-modal-description');
    };

    this.appendCTA = function() {
      if (this.hasCTA) {
        var cta = ['a',
          {
            href: modalConfig.cta.href,
            target: modalConfig.cta.target || ''
          },
          modalConfig.cta.text,
        ];

        this.appendShaven(cta, 'item-modal-cta');
      }
    };

    this.appendInfo = function() {
      if (this.hasInfo) {
        this.appendShaven(modalConfig.info, 'item-modal-info');
      }
    };

    this.makeShavenList = function(arr) {
        var shavenList = ['ul'];
        var listItems = [];
        for (var i = 0; i < arr.length; i++) {
          listItems.push(['li', arr[i]]);
        }
        shavenList.push(listItems);
        return shavenList;
    };

    this.appendSkills = function() {
      if (this.hasSkills) {
        var skillsShaven = this.makeShavenList(this.opts.skills);
        this.appendShaven(skillsShaven, 'item-modal-skills');
      }
    };

    this.appendTags = function() {
      if (this.hasTags) {
        var tags = this.opts.primaryTags;
        tags = tags.concat(this.opts.secondaryTags);

        var tagsShaven = this.makeShavenList(tags);
        this.appendShaven(tagsShaven, 'item-modal-tags');
      }
    };


    this.appendCustomHero = function() {
      this.appendShaven(modalConfig.hero.custom, 'item-modal-custom-hero');
    };

    this.appendVimeoHero = function() {
      var vimeoId = modalConfig.hero.vimeo;
      var src = 'https://player.vimeo.com/video/' + vimeoId + '?title=0&byline=0&portrait=0';
      this.appendShaven(
        ['div',
          ['iframe', {
              src: src,
              frameborder: '0',
              webkitAllowFullScreen: '',
              mozallowfullscreen: '',
              allowFullScreen: ''
          }]
        ],
        'item-modal-vimeo-hero');
    };

    this.appendYoutubeHero = function() {
      var youtubeId = modalConfig.hero.youtube;
      var src = 'https://www.youtube.com/embed/' + youtubeId + '?rel=0';
      this.appendShaven(
        ['div',
          ['iframe', {
              src: src,
              height: '315',
              width: '560',
              frameborder: '0',
              webkitAllowFullScreen: '',
              mozallowfullscreen: '',
              allowFullScreen: ''
          }]
        ],
        'item-modal-youtube-hero');
    };

    this.appendIfrmHero = function() {
      var src = modalConfig.hero.ifrmUrl;
      this.appendShaven(
        ['div',
          ['iframe', {
              src: src,
              height: modalConfig.hero.height || '400',
              width: '980',
              frameborder: '0'
          }]
        ],
        'item-modal-ifrm-hero');
    };
    

    this.appendModalContents = function() {
      try {
        if (this.isVimeoHero) {
          this.appendVimeoHero();
        } else if (this.isYoutubeHero) {
          this.appendYoutubeHero();
        } else if (this.isCustomHero) {
          this.appendCustomHero();
        } else if (this.isIfrmHero) {
          this.appendIfrmHero();
        }

        this.appendDescription();
        this.appendCTA();
        this.appendInfo();
        this.appendSkills();
        this.appendTags();
      } catch(e) {
        window.debug.error("e ::", e, e.stack);
      }
    }

    this.on('mount', function() {
      document.body.classList.add('modal-open');

      this.viewport = this.root.getElementsByClassName('item-modal-viewport')[0];
      this.appendModalContents.call(this);

      this.boundKeyHandler = this.dismissOnEsc.bind(this);
      document.addEventListener('keydown', this.boundKeyHandler);

      this.show();
    });

    this.on('before-unmount', function() {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', this.boundKeyHandler);

      if (!this.viewport) {
        window.debug.warn("No wrapper reference at modal unmount!");
      }
    });
    
  
});
riot.tag('tag-button', '<button class="{getClasses()}" onclick="{parent.toggleTag}"> {this.opts.config.name} </button>', function(opts) {
    this.getClasses = function() {
      var classes = 'button tag-button';
      var isActive = this.opts.config.active;
      classes += (isActive) ? ' tag-button-active' : ' tag-button-inactive';
      return classes;
    }
  
});

riot.tag('tagged-item-content', '<div class="info"><div class="item"><div class="item-title"> {this.opts.title} </div><div class="item-venue" if="{this.opts.venue}"> {this.opts.venue} </div><div class="item-tags"><span class="item-tag" each="{t, i in primaryTags}">{t}</span></div></div><div class="item-pull-quote" if="{this.hasPullQuote}"><p class="pull-quote"> {this.opts.pullquote} </p></div></div>', function(opts) {
    this.hasPullQuote = !!this.opts.pullquote;
  
});
riot.tag('tagged-item', '<button if="{this.hasModal}" class="modal-button" onclick="{this.getClickAction()}" ><div class="tagged-item-flavor"><img if="{this.opts.slate.url}" riot-src="{this.opts.slate.url}" class="item-image"><iframe if="{this.opts.slate.ifrmUrl}" riot-src="{this.opts.slate.ifrmUrl}" class="item-ifrm" scrolling="no"></iframe></div><div if="{this.opts.slate.ifrmUrl}" class="ifrm-cover"></div><tagged-item-content if="{!this.hasUrl}" title="{this.opts.title}" venue="{this.opts.venue}" ></tagged-item-content></button><a if="{!this.hasModal}" href="{this.opts.url}" ><tagged-item-content title="{this.opts.title}" venue="{this.opts.venue}" pullquote="{this.opts.pullquote}" ></tagged-item-content></a>', 'class="{ parent.opts.itemsClass } { w-modal: this.hasModal } { w-url: this.hasUrl } { w-ifrm: this.hasIfrm }"', function(opts) {
    this.hasModal   = !!this.opts.modal;
    this.hasUrl     = !!this.opts.url;
    this.hasIfrm    = !!this.opts.slate && !!this.opts.slate.ifrmUrl;
    
    if (this.hasModal && this.hasUrl || !this.hasModal && !this.hasUrl ) {
      window.debug.warn("WARNING: Bad config. An item should have either modal or url.");
    }

    this.initModal = function() {
      console.log("initModal");
      window.location.hash = window.util.str.makeHashKey(this.opts.title);
    };

    this.getClickAction = function() {
      if (this.hasModal) {
        return this.initModal;
      }

      return null;
    };
  
});

riot.tag('tags-app', '<div class="tags-app"><tags-filters if="{!this.opts.removeFilters}" app-config="{this.appConfig}" action-handler="{this.actionHandler}" all-tags="{this.allTags}" tags-class="{this.opts.tagsClass}" preset-filters="{this.opts.presetFilters}" ></tags-filters><div if="{this.opts.removeFilters}" class="remove-filters-spacer"></div><div class="{this.opts.itemsWrapClass}"><div class="items-container"><div class="{this.opts.itemsHoldClass}"><virtual each="{this.getActiveItems()}"><h2 if="{headline}" class="items-headline">{headline}</h2><tagged-item if="{!headline}" title="{title}" slate="{slate}" venue="{venue}" modal="{modal}" url="{url}" pullQuote ="{pullQuote}" target="{target}" youtubeUrl = {youtubeUrl} ></tagged-item></virtual><div if="{this.getActiveItems().length === 0}" class="no-items"><em>No results match this combination of tags.</em></div><div if="{this.showLimited()}" class="over-limit-wrapper {this.opts.itemsClass}" ><div if="{this.doLimitDisplay}" class="over-limit is-limiting" onclick="{this.removeLimit}"><span class="over-limit-text"> Showing {this.itemLimit} items. Click to show all {this.getItems().length}. </span></div><div if="{!this.doLimitDisplay}" class="over-limit not-limiting" onclick="{this.reLimit}"><span class="over-limit-text"> Showing all items. Click to show fewer. </span></div></div></div></div></div></div>', function(opts) {
    this.actionHandler = riot.observable();
    this.filtersComponent = this.tags['tags-filters'];

    var _this = this;
    this.actionHandler.on('filters-change', function() {
      _this.update();
    });

    this.isLimited = !!this.opts.itemLimit;
    this.doLimitDisplay = true; // true by default

    this.itemLimit = this.opts.itemLimit;
    this.isOverLimit = undefined;

    this.appConfig = this.opts.appConfig;

    this.setupInitialTags = function(taggedItems) {
      var allTagNames = [];
      _.each(taggedItems, function(tagsItem) {
        allTagNames = _.union(allTagNames, tagsItem.primaryTags);
      });
      
      var allTags = _.map(allTagNames, function(tagName) {
        return {
          name: tagName,
          active: false
        };
      });

      return allTags;
    };
    this.allTags = this.setupInitialTags(this.opts.tagsItems);

    this.showLimited = function() {
      return this.isLimited && this.isOverLimit;
    };
    this.removeLimit = function() {
      this.doLimitDisplay = false;
    };
    this.reLimit = function() {
      this.doLimitDisplay = true;

      var navbarSpacing = 118;
      var target = $('#'+this.opts.id);
      $('html,body').animate({
        scrollTop: target.offset().top - navbarSpacing
      }, 650);
    };

    this.getItems = function() {
      return this.opts.tagsItems;
    };

    this.getActiveItems = function() {
      var result = [];
      var activeTagNames = this.filtersComponent.getActiveTagNames();
      var taggedItems = this.getItems();

      var filterFunc = ( this.filtersComponent.getMatchAll() ) ?
              this.itemHasAllActiveTags :
              this.itemHasAnyActiveTags;

      if (activeTagNames.length === 0) {
        result = taggedItems;
      } else {
        result = _.filter(taggedItems, function(item) {
          return filterFunc.call(this, item, activeTagNames);
        }, this);
      }

      this.isOverLimit = (this.isLimited && result.length > this.itemLimit);
      if (this.isOverLimit && this.doLimitDisplay) {
        return result.slice(0, this.itemLimit);
      } else {
        return result;
      }
    };



    this.hasTag = function(item, testTag) {
      return (_.indexOf(testTag, item.tags) !== -1);
    };

    this.itemHasAllActiveTags = function(item, activeTagNames) {
      var thisItemTags = [].concat(item.primaryTags).concat(item.secondaryTags);
      return _.intersection(item.primaryTags, activeTagNames).length === activeTagNames.length;
    };
    this.itemHasAnyActiveTags = function(item, activeTagNames) {
      var thisItemTags = [].concat(item.primaryTags).concat(item.secondaryTags);
      for (var i = 0; i < activeTagNames.length; i++) {
        if (_.indexOf(thisItemTags, activeTagNames[i]) !== -1) {
          return true;
        }
      }
      return false;
    };

    this.getItemsClass = function() {
      return this.opts.itemsClass;
    };

  
});

riot.tag('tags-filters', '<div class="{tags-filters-activator: true, is-hidden: this.shouldShowFilters()}"><button class="button" onclick="{this.showFilters}"> add filters </button></div><div if="{!this.removeFilters}" class="{tags-filters-wrapper: true, is-collapsed: !this.shouldShowFilters(), is-removed: this.removeFilters}"><div class="tags-filters-container"><div class="tags-filters-header"><p class="tags-section-title search-by"> Narrow work by skill </p><div class="{filter-type-container: true, is-hidden: !this.anyTagsActivated()}"><button class="{filter-type:true, filter-exclusive:true, active-filter-type: this.matchAll}" onclick="{this.toggleMatching}"> match-all </button><button class="{filter-type:true, filter-inclusive:true, active-filter-type: !this.matchAll}" onclick="{this.toggleMatching}"> match-any </button></div></div><div class="tags-filters-buttons-wrapper"><div class="{this.opts.tagsClass} tags tags-filters"><tag-button each="{this.getAllTags()}" config="{this}"></tag-button></div></div><div class="hide-filters"><button class="x" onclick="{this.hideFilters}" title="close filters"><img class="x-img" src="assets/img/lg-x.png"></button></div></div></div>', function(opts) {
    var CHANGE_EVENT = 'filters-change';

    this.on('update', function() {
      this.actionHandler.trigger( CHANGE_EVENT );
    });

    this.allTags = this.opts.allTags;

    this.getAllTags = function() {
      return this.allTags;
    }

    var appConfig = this.opts && this.opts.appConfig || {};
    this.disableFilters = appConfig.disableFilters;
    this.hideFilters = appConfig.hideFilters;
    this.removeFilters = !!this.removeFilters;

    this.filtersHidden = (!this.disableFilters && appConfig.hideFilters);

    this.actionHandler = this.opts.actionHandler;

    this.matchAll = false;
    this.toggleMatching = function() {
      this.matchAll = !this.matchAll;
      this.update();
    };
    this.getMatchAll = function() {
      return this.matchAll;
    }

    this.setPresetFilters = function(allTags, presetFilters) {
      var setTags = allTags;
      if (presetFilters) {
        if (presetFilters[0] === 'all' || presetFilters[0] === 'any') {
          this.matchAll = (presetFilters[0] === 'all');
          presetFilters.shift();
        }
        _.each(setTags, function(tagObj, index, i) {
          if (_.find(presetFilters, function(filterName) {
                  return filterName === tagObj.name;
                })) {
            tagObj.active = true;
          }
        })
      }
      return setTags;
    };

    this.resetAllFilters = function() {
      _.each(this.allTags, function(tag) {
        tag.active = false;
      });
    }

    this.getActiveTags = function() {
      var active = _.where(this.allTags, { active: true });
      return active;
    };
    this.anyTagsActivated = function() {
      return this.getActiveTags().length > 0;
    };
    this.getActiveTagNames = function() {
      return _.pluck(this.getActiveTags(), 'name');
    };
    this.getInactiveTags = function() {
      var active = _.where(this.allTags, { active: false });
      return active;
    };
    this.toggleTag = function(e) {
      var tagName = e.item.name;
      var tag = _.findWhere(this.allTags, {name: tagName});
      tag.active = !tag.active;
      this.update();
    };

    this.hideFilters = function() {
      this.filtersHidden = true;
      this.resetAllFilters();
    }
    this.showFilters = function() {
      this.filtersHidden = false;
    }
    this.shouldShowFilters = function() {
      if (this.disableFilters) {
        return false;
      }
      return !this.filtersHidden;
    }
    this.showFiltersTrigger = function() {
      if (this.disableFilters) {
        return false;
      }
      return this.filtersHidden;
    }

    this.setPresetFilters(this.allTags, this.opts.presetFilters);

  
});
