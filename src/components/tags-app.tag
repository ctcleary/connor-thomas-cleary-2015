<tags-app>
  <div class="tags-app">
    <div class="tags-filters-activator tags" if={ this.showFiltersTrigger() }
        onclick={ this.showFilters }>
        <button>
          Click to filter results
        </button>
    </div>

    <div class="tags-filters-container" if={ this.shouldShowFilters() }>
      <div class="tags-filters-header">
        <p class="tags-section-title search-by" if={ this.getInactiveTags().length > 0 }>
          { this.opts.searchPhrase }
        </p>
        <div class="hide-filters" onclick={ this.hideFilters }>
          hide filters [<span class="x">+</span>]
        </div>
      </div>
      <div class="{ this.opts.tagsClass } tags">
        <tag-button each={ this.getInactiveTags(); }
            config={ this }>
        </tag-button>
      </div>

      <div class="active-tags-container">
        <div class="matching-toggle-container">
          <p class="tags-section-title"> Match </p>
          <div class="matching-any-all-toggle tags">
            <button class={ this.matchAll ? "any-all-toggle selected-all" : "any-all-toggle selected-any" }
                onclick={ this.toggleMatching }>
              <div class="any-all-3d-wrap">
                <div class="any-all-text">
                  <span class="matching-text cube-front all-text">all</span>
                  <span class="matching-text cube-bottom any-text">any</span>

<!--                   <span class="matching-text cube-front" >fr</span>
                  <span class="matching-text cube-bottom">bot</span>
                  <span class="matching-text cube-top"   >top</span>
                  <span class="matching-text cube-right" >rgt</span>
                  <span class="matching-text cube-left"  >lft</span>
                  <span class="matching-text cube-back"  >bck</span> -->
                </div>
              </div>
              <span class="filters-text">filters</span>
            </button>
          </div>
        </div>
        <div class="remove-search-tags-container">
          <p class="tags-section-title remove-search-tags" if={ this.getActiveTags().length > 0 }>
            Remove active filter tags:
          </p>
          <div class="{ this.opts.tagsClass } tags tags-active">
            <tag-button each={ this.getActiveTags() }
                config={ this }>
            </tag-button>
          </div>
        </div>
      </div>
    </div>

    <div class="{ this.opts.itemsWrapClass }">
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

        <div if={ this.showLimited() } onclick={ this.removeLimit }
            class="over-limit-wrapper { this.opts.itemsClass }" >
          <div class="over-limit">
            Showing { this.itemLimit } items. Click to show all.
          </div>
        </div>
      </div>
    </div>

  </div>

  <script>
    this.isLimited = !!this.opts.itemLimit;
    this.itemLimit = this.opts.itemLimit;
    this.isOverLimit = undefined;

    var appConfig = this.opts.appConfig;
    this.disableFilters = appConfig.disableFilters;
    this.filtersHidden = (!this.disableFilters && appConfig.hideFilters);

    this.matchAll = true; // True by default;
    this.toggleMatching = function() { this.matchAll = !this.matchAll; this.update() };

    this.hideFilters = function() {
      this.filtersHidden = true;
      this.update();
    }
    this.showFilters = function() {
      this.filtersHidden = false;
      this.update();
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


    // Limit
    this.showLimited = function() {
      return this.isLimited && this.isOverLimit;
    };
    this.removeLimit = function() {
      this.isLimited = false;
      // this.update();
    };


    // Items
    this.getItems = function() {
      return this.opts.tagsItems;
    };

    this.getActiveItems = function() {
      var result = [];
      var activeTags = this.getActiveTags();
      var taggedItems = this.getItems();
      if (activeTags.length === 0) {
        result = taggedItems;
      } else {
        result = _.filter(taggedItems, function(item) {
          return this.hasAllActiveTags(item, activeTags);
        }, this);
      }

      this.isOverLimit = (this.isLimited && result.length > this.itemLimit);
      if (this.isOverLimit) {
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
    this.hasAnyActiveTag = function(item, activeTags) {
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
