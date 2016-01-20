<tags-app>
  <div class="tags-app">
    <div class="{ tags-filters-activator: true, is-hidden: this.shouldShowFilters() }">
      <button class="button" onclick={ this.showFilters }>
        filter results
      </button>
    </div>

    <div class="{ tags-filters-wrapper: true, is-collapsed: !this.shouldShowFilters() }">
      <div class="tags-filters-container">
        <div class="tags-filters-header">
          <p class="tags-section-title search-by" if={ this.getInactiveTags().length > 0 }>
            Narrow work by skill:
          </p>
        </div>
        <div class="tags-filters-buttons-wrapper">
          <div class="{ this.opts.tagsClass } tags tags-filters">
            <tag-button each={ this.getInactiveTags(); }
                config={ this }>
            </tag-button>
          </div>
        </div>
        <div class="hide-filters">
          <button class="x" onclick={ this.hideFilters }></button>
        </div>

        <div class="active-tags-container" if={ this.getActiveTags().length > 0 }>
          <div class="matching-toggle-container">
            <p class="tags-section-title"> Match </p>
            <div class="matching-any-all-toggle tags">
              <button class={ this.getMatchingClasses() }
                  onclick={ this.toggleMatching }>
                <div class="any-all-3d-wrap">
                  <div class="any-all-text">
                    <span class="matching-text cube-front all-text">all</span>
                    <span class="matching-text cube-bottom any-text">any</span>
                  </div>
                </div>
                <span class="filters-text">filters</span>
              </button>
            </div>
          </div>
          <div class="remove-search-tags-container">
            <p class="tags-section-title remove-search-tags">
              Remove active filters:
            </p>
            <div class="{ this.opts.tagsClass } tags tags-active">
              <tag-button each={ this.getActiveTags() }
                  config={ this }>
              </tag-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="{ this.opts.itemsWrapClass }">
      <div class="items-container">
          <div class="{ this.opts.itemsHoldClass }">
            <virtual each={ this.getActiveItems() }> 
              <tagged-item 
                title={ title }
                slate={ slate }
                venue={ venue }
                modal={ modal }
                url={ url }
                >
              </tagged-item>
            </virtual>

            <div if={ this.getActiveItems().length === 0 }
                class="no-items">
              <em>No results match this combination of tags.</em>
            </div>

            <div if={ this.showLimited() } class="over-limit-wrapper { this.opts.itemsClass }" >
              <div if={ this.doLimitDisplay } class="over-limit is-limiting"
                  onclick={ this.removeLimit }>
                <span class="over-limit-text">
                  Showing { this.itemLimit } items. Click to show all.
                </span>
              </div>
              <div if={ !this.doLimitDisplay } class="over-limit not-limiting"
                  onclick={ this.reLimit }>
                <span class="over-limit-text">
                  Showing all items. Click to show fewer.
                </span>
              </div>
            </div>
          </div>
      </div>
    </div>

  </div>

  <script>
    this.isLimited = !!this.opts.itemLimit;
    this.doLimitDisplay = true; // true by default
    this.itemLimit = this.opts.itemLimit;
    this.isOverLimit = undefined;

    var appConfig = this.opts.appConfig;
    this.disableFilters = appConfig.disableFilters;
    this.filtersHidden = (!this.disableFilters && appConfig.hideFilters);

    this.matchAll = true; // True by default;
    this.toggleMatching = function() { this.matchAll = !this.matchAll; this.update() };
    this.getMatchingClasses = function() {
      var classes = 'button any-all-toggle ';
      classes += this.matchAll ? 'selected-all' : 'selected-any';
      return classes;
    };

    // ---- ---- ---- ---- ----
    // Init
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


    // Filters
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


    // Limit
    this.showLimited = function() {
      return this.isLimited && this.isOverLimit;
    };
    this.removeLimit = function() {
      this.doLimitDisplay = false;
    };
    this.reLimit = function() {
      this.doLimitDisplay = true;

      // Now scroll to the top of this section
      var navbarSpacing = 118;
      var target = $('#'+this.opts.id);
      $('html,body').animate({
        scrollTop: target.offset().top - navbarSpacing
      }, 650);
    };


    // Items
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
    // TODO this seems to be broken in some strange way
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
  </script>
</tags-app>
