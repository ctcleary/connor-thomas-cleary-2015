riot.tag('item-modal', '<article><div class="item-modal-viewport" riot-style="{this.getTransitionStyle()}"><div class="item-modal-lightbox" onclick="{this.dismissModal}"></div><div class="item-modal-wrapper"><div class="item-modal-close" onclick="{this.dismissModal}"></div><div class="item-modal" riot-style="{this.getModalStyle()}"><div class="item-modal-header"><h1 class="item-modal-headline"> {this.modalTitle} </h1><div class="item-modal-hero" riot-style="{this.getHeroStyle()}"><div class="item-modal-custom-hero" if="{this.isCustomHero}"></div></div></div>  <div class="item-modal-contents"><div class="item-modal-description"><h2> Description </h2></div><div class="item-modal-sidebar"><div if="{this.hasInfo}" class="item-modal-info item-modal-sidebar-section"><h2> Info </h2></div><div if="{this.hasTags}" class="item-modal-tags item-modal-sidebar-section"><h2> Tagged </h2></div><div if="{this.hasSkills}" class="item-modal-skills item-modal-sidebar-section"><h2> Skills </h2></div></div></div>  </div>  </div></div></article>', function(opts) {
    var modalConfig = this.opts.modal;
    this.transitionLengthS = 0.25;
    this.modalTitle = modalConfig.title || this.opts.title;

    this.isCustomHero = !!modalConfig.hero.custom;

    this.isCustom  = !!modalConfig.custom;
    this.hasInfo   = !!modalConfig.info;
    this.hasSkills = !!this.opts.skills;
    this.hasTags   = !!this.opts.tags;

    this.getTransitionStyle = function() {
      return 'transition: opacity ' + this.transitionLengthS +'s cubic-bezier(0.445, 0.050, 0.550, 0.950);';
    }
    this.getModalStyle = function() {
      return 'background: white;';
    };
    this.getHeroStyle = function() {
      var heroStyles = ['background: url(' + modalConfig.hero.url + ');',
        'background-size: cover;',
        'background-position: ' + (modalConfig.hero.position || 'center center') + ';',
        ''];

      if (modalConfig.hero.height != null) {
        heroStyles.push('height: '+ modalConfig.hero.height +'px;'); 
      }

      return heroStyles.join(' ');
    }

    this._dismiss = function() {

      this.root.parentNode.removeChild(this.root);
    };
    this.dismissModal = function(e) {


      window.modalControl.dismissModal();
    };
    this.dismissOnEsc = function(e) {
      if (e.keyCode === 27) {
        this.dismissModal();
      }
    };















    this.getDeepClone = function (obj) {
      return JSON.parse(JSON.stringify(obj));
    }

    this.appendShaven = function(shavenConfig, elClass) {

      var clone = this.getDeepClone(shavenConfig);
      var shavenObj = shaven(clone);

      var el = this.root.getElementsByClassName(elClass)[0];
      el.appendChild(shavenObj[0]);
    }

    this.appendCustomHero = function() {
      this.appendShaven(modalConfig.hero.custom, 'item-modal-custom-hero');
    }

    this.appendDescription = function() {
      this.appendShaven(modalConfig.description, 'item-modal-description');
    }
    this.appendInfo = function() {
      if (this.hasInfo) {
        this.appendShaven(modalConfig.info, 'item-modal-info');
      }
    }
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
    }
    this.appendTags = function() {
      if (this.hasTags) {
        var tags = this.opts.primaryTags;
        tags = tags.concat(this.opts.secondaryTags);

        var tagsShaven = this.makeShavenList(tags);
        this.appendShaven(tagsShaven, 'item-modal-tags');
      }
    }

    this.appendModalContents = function() {
      try {
        if (this.isCustomHero) {
          this.appendCustomHero();
        }

        this.appendDescription();
        this.appendInfo();
        this.appendSkills();
        this.appendTags();
      } catch(e) {
        window.debug.errpr("e ::", e, e.stack);
      }
    }

    this.on('mount', function() {
      document.body.classList.add('modal-open');

      this.viewport = this.root.getElementsByClassName('item-modal-viewport')[0];
      this.appendModalContents.call(this);

      this.boundKeyHandler = this.dismissOnEsc.bind(this);
      document.addEventListener('keydown', this.boundKeyHandler);

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

riot.tag('tagged-item', '<img class="item-image" if="{this.opts.slate.url}" riot-src="{this.opts.slate.url}">  <div class="cover" onclick="{this.getClickAction()}"><div class="item"><div class="item-title"> {this.opts.title} </div><div class="item-venue"> {this.opts.venue} </div><div class="item-tags"><span class="item-tag" each="{t, i in primaryTags}">{t}</span></div></div></div><div class="item-icon"></div>', 'class="{ parent.opts.itemsClass } { w-modal: this.hasModal } { w-url: this.hasUrl }"', function(opts) {
    console.log("tagged-item mount");
    this.hasModal = !!this.opts.modal;
    this.hasUrl   = !!this.opts.url;

    if (this.hasModal && this.hasUrl) {
      console.log("WARNING: Bad config. An item should have either modal or url.");
    }

    this.initModal = function() {
      window.modalControl.initModal(this);
    };
    this.openLink = function() {
      window.open(this.opts.url, '_blank');
    };

    this.getClickAction = function() {
      if (this.hasModal) {
        return this.initModal;
      } else if (this.hasUrl) {
        return this.openLink;
      }

      return null;
    };











  
});

riot.tag('tags-app', '<div class="tags-app">   <tags-filters app-config="{this.appConfig}" action-handler="{this.actionHandler}" all-tags="{this.allTags}" tags-class="{this.opts.tagsClass}" preset-filters="{this.presetFilters}" ></tags-filters><div class="{this.opts.itemsWrapClass}"><div class="items-container"><div class="{this.opts.itemsHoldClass}"><virtual each="{this.getActiveItems()}"><tagged-item title="{title}" slate="{slate}" venue="{venue}" modal="{modal}" url="{url}" ></tagged-item></virtual><div if="{this.getActiveItems().length === 0}" class="no-items"><em>No results match this combination of tags.</em></div><div if="{this.showLimited()}" class="over-limit-wrapper {this.opts.itemsClass}" ><div if="{this.doLimitDisplay}" class="over-limit is-limiting" onclick="{this.removeLimit}"><span class="over-limit-text"> Showing {this.itemLimit} items. Click to show all. </span></div><div if="{!this.doLimitDisplay}" class="over-limit not-limiting" onclick="{this.reLimit}"><span class="over-limit-text"> Showing all items. Click to show fewer. </span></div></div></div></div></div></div>', function(opts) {

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
      console.log("getActiveItems");
      var result = [];
      var activeTagNames = this.filtersComponent.getActiveTagNames();
      var taggedItems = this.getItems();

      var filterFunc = (this.filtersComponent.matchAll) ? this.hasAllActiveTags : this.hasAnyActiveTags;

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

    this.hasAllActiveTags = function(item, activeTagNames) {
      var thisItemTags = item.primaryTags;
      return _.intersection(item.primaryTags, activeTagNames).length === activeTagNames.length;
    };
    this.hasAnyActiveTags = function(item, activeTagNames) {
      var thisItemTags = item.primaryTags;
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

riot.tag('tags-filters', '<div class="{tags-filters-activator: true, is-hidden: this.shouldShowFilters()}"><button class="button" onclick="{this.showFilters}"> add filters </button></div><div class="{tags-filters-wrapper: true, is-collapsed: !this.shouldShowFilters()}"><div class="tags-filters-container"><div class="tags-filters-header"><p class="tags-section-title search-by"> Narrow work by skill: </p><div class="filter-type-container"><button class="{filter-type:true, filter-exclusive:true, active-filter-type: this.matchAll}"> exclusive </button><button class="{filter-type:true, filter-inclusive:true, active-filter-type: !this.matchAll}"> inclusive </button></div></div><div class="tags-filters-buttons-wrapper"><div class="{this.opts.tagsClass} tags tags-filters"><tag-button each="{this.getAllTags()}" config="{this}"></tag-button></div></div><div class="hide-filters"><button class="x" onclick="{this.hideFilters}"></button></div></div></div>', function(opts) {
    var CHANGE_EVENT = 'filters-change';

    this.allTags = this.opts.allTags;

    this.getAllTags = function() {
      return this.allTags;
    }

    var appConfig = this.opts && this.opts.appConfig || {};
    this.disableFilters = appConfig.disableFilters;
    this.hideFilters = appConfig.hideFilters;
    this.filtersHidden = (!this.disableFilters && appConfig.hideFilters);

    this.actionHandler = this.opts.actionHandler;

    this.matchAll = true; // True by default;
    this.toggleMatching = function() {
      this.matchAll = !this.matchAll;
      this.update();
    };
    this.getMatchingClasses = function() {
      var classes = 'button any-all-toggle ';
      classes += this.matchAll ? 'selected-all' : 'selected-any';
      return classes;
    };

    this.setPresetFilters = function(allTags, presetFilters) {
      var setTags = allTags;
      if (presetFilters) {
        if (presetFilters[0] === 'all' || presetFilters[0] === 'any') {
          this.matchAll = (presetFilters === 'all');
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

    this.getActiveTags = function() {
      var active = _.where(this.allTags, { active: true });
      return active;
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
      this.actionHandler.trigger( CHANGE_EVENT );
    };

    this.hideFilters = function() {
      this.filtersHidden = true;
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

  
});
