<tags-filters>
  <div class="{ tags-filters-activator: true, is-hidden: this.shouldShowFilters() }">
    <button class="button" onclick={ this.showFilters }>
      add filters
    </button>
  </div>

  <div if="{ !this.removeFilters }" class="{ tags-filters-wrapper: true, is-collapsed: !this.shouldShowFilters(), is-removed: this.removeFilters }">
    <div class="tags-filters-container">
      <div class="tags-filters-header">
        <p class="tags-section-title search-by">
          Narrow work by skill
        </p>
        <div
          class="{ filter-type-container: true, is-hidden: !this.anyTagsActivated() }">
          <button
            class="{ filter-type:true, filter-exclusive:true, active-filter-type: this.matchAll }"
            onclick={ this.toggleMatching }>
            match-all
          </button>
          <button
            class="{ filter-type:true, filter-inclusive:true, active-filter-type: !this.matchAll }"
            onclick={ this.toggleMatching }>
            match-any
          </button>
        </div>
      </div>
      <div class="tags-filters-buttons-wrapper">
        <div class="{ this.opts.tagsClass } tags tags-filters">
          <tag-button each={ this.getAllTags() }
              config={ this }>
          </tag-button>
        </div>
      </div>

      <div class="hide-filters">
        <button class="x" onclick={ this.hideFilters } title="close filters">
          <img class="x-img" src="assets/img/lg-x.png"/>
        </button>
      </div>

    </div>
  </div>


  <script>
    // riot.observable(this);
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
    // debugger;
    this.filtersHidden = (!this.disableFilters && appConfig.hideFilters);

    this.actionHandler = this.opts.actionHandler;

    // this.matchAll = true;
    this.matchAll = false;
    this.toggleMatching = function() {
      this.matchAll = !this.matchAll;
      this.update();
    };
    this.getMatchAll = function() {
      return this.matchAll;
    }

    // Init
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


    // Active Tags and Toggling
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


    // Filters
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

  </script>

</tags-filters>