riot.tag('item-modal', '<article><div class="item-modal-viewport" riot-style="{this.getTransitionStyle()}"><div class="item-modal-lightbox" onclick="{this.dismissModal}"></div><div class="item-modal-wrapper"><div class="item-modal-close" onclick="{this.dismissModal}"></div><div class="item-modal" riot-style="{this.getModalStyle()}"><div class="item-modal-header"><h1 class="item-modal-headline"> {this.modalTitle} </h1><div class="item-modal-hero" riot-style="{this.getHeroStyle()}"></div></div>  <div class="item-modal-contents"><div class="item-modal-description"><h2> Description </h2></div><div class="item-modal-sidebar"><div if="{this.hasInfo}" class="item-modal-info item-modal-sidebar-section"><h2> Info </h2></div><div if="{this.hasTags}" class="item-modal-tags item-modal-sidebar-section"><h2> Tagged </h2></div><div if="{this.hasSkills}" class="item-modal-skills item-modal-sidebar-section"><h2> Skills </h2></div></div></div>  </div>  </div></div></article>', function(opts) {
    var modalConfig = this.opts.modal;
    this.transitionLengthS = 0.25;
    this.modalTitle = modalConfig.title || this.opts.title;

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
        console.log("skillsShaven ::", skillsShaven);
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
riot.tag('tag-button', '<button class="button tag-button" onclick="{parent.toggleTag}"> {this.opts.config.name} </button>', function(opts) {
  
});

riot.tag('tagged-item', '<div class="cover" riot-style="{this.getCoverStyle()}" onclick="{this.getClickAction()}"><div class="item"><div class="item-title">{this.opts.title}</div><div class="item-venue">{this.opts.venue}</div><div class="item-tags"><span class="item-tag" each="{t, i in primaryTags}">{t}</span></div></div></div><div class="item-icon"></div>', 'class="{ parent.opts.itemsClass } { w-modal: this.hasModal } { w-url: this.hasUrl }"', function(opts) {
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

    this.getCoverStyle = function() {
      var styles = '';
      if (this.opts.slate) {
        styles += 'background-image: url('+ this.opts.slate.url + '); ';
        styles += 'background-position: ' + (this.opts.slate.position || 'center center') + '; ';
      } else {
        styles += 'background-image: none; ';
      }
      return styles;
    };

  
});

riot.tag('tags-app', '<div class="tags-app"><div class="tags-filters-activator tags" if="{this.showFiltersTrigger()}"><button class="button" onclick="{this.showFilters}"> filter results </button></div><div class="tags-filters-container" if="{this.shouldShowFilters()}"><div class="tags-filters-header"><p class="tags-section-title search-by" if="{this.getInactiveTags().length > 0}"> {this.opts.searchPhrase} </p><div class="hide-filters" onclick="{this.hideFilters}"> hide filters [<span class="x">+</span>] </div></div><div class="{this.opts.tagsClass} tags"><tag-button each="{this.getInactiveTags()}" config="{this}"></tag-button></div><div class="active-tags-container" if="{this.getActiveTags().length > 0}"><div class="matching-toggle-container"><p class="tags-section-title"> Match </p><div class="matching-any-all-toggle tags"><button class="{this.matchAll ? "button any-all-toggle selected-all" : "button any-all-toggle selected-any"}" onclick="{this.toggleMatching}"><div class="any-all-3d-wrap"><div class="any-all-text"><span class="matching-text cube-front all-text">all</span><span class="matching-text cube-bottom any-text">any</span></div></div><span class="filters-text">filters</span></button></div></div><div class="remove-search-tags-container"><p class="tags-section-title remove-search-tags"> Remove active filters: </p><div class="{this.opts.tagsClass} tags tags-active"><tag-button each="{this.getActiveTags()}" config="{this}"></tag-button></div></div></div></div><div class="{this.opts.itemsWrapClass}"><div class="{this.opts.itemsHoldClass}"><virtual each="{this.getActiveItems()}"><tagged-item title="{title}" slate="{slate}" venue="{venue}" modal="{modal}" url="{url}" ></tagged-item></virtual><div if="{this.getActiveItems().length === 0}" class="no-items"><em>No results match this combination of tags.</em></div><div if="{this.showLimited()}" class="over-limit-wrapper {this.opts.itemsClass}" ><div if="{this.doLimitDisplay}" class="over-limit is-limiting" onclick="{this.removeLimit}"><span class="over-limit-text"> Showing {this.itemLimit} items. Click to show all. </span></div><div if="{!this.doLimitDisplay}" class="over-limit not-limiting" onclick="{this.reLimit}"><span class="over-limit-text"> Showing all items. Click to show fewer. </span></div></div></div></div></div>', function(opts) {
    this.isLimited = !!this.opts.itemLimit;
    this.doLimitDisplay = true; // true by default
    this.itemLimit = this.opts.itemLimit;
    this.isOverLimit = undefined;

    var appConfig = this.opts.appConfig;
    this.disableFilters = appConfig.disableFilters;
    this.filtersHidden = (!this.disableFilters && appConfig.hideFilters);

    this.matchAll = true; // True by default;
    this.toggleMatching = function() { this.matchAll = !this.matchAll; this.update() };


    this.getAllTags = function(taggedItems) {
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

    this.setPresetFilters = function(allTags, presetFilters) {
      var setTags = allTags;
      if (presetFilters) {
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

    this.allTags = this.getAllTags(this.opts.tagsItems);
    if (this.opts.presetFilters) {
      this.allTags = this.setPresetFilters(this.allTags, this.opts.presetFilters);
    }

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
      this.update();
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
      var activeTags = this.getActiveTags();
      var taggedItems = this.getItems();

      var filterFunc = (this.matchAll) ? this.hasAllActiveTags : this.hasAnyActiveTags;

      if (activeTags.length === 0) {
        result = taggedItems;
      } else {
        result = _.filter(taggedItems, function(item) {
          return filterFunc.call(this, item, activeTags);
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

    this.hasAllActiveTags = function(item, activeTags) {
      var thisItemTags = item.primaryTags;
      var activeTagNames = this.getActiveTagNames();
      return _.intersection(item.primaryTags, activeTagNames).length === activeTags.length;
    };
    this.hasAnyActiveTags = function(item, activeTags) {
      var thisItemTags = item.primaryTags;
      for (var i = 0; i < activeTags.length; i++) {
        if (_.indexOf(thisItemTags, activeTags[i].name) !== -1) {
          return true;
        }
      }
      return false;
    };

    this.getItemsClass = function() {
      return this.opts.itemsClass;
    };
  
});
