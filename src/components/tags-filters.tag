<tags-filters>
  <div class="{ tags-filters-activator: true, is-hidden: this.shouldShowFilters() }">
    <button class="button" onclick={ this.showFilters }>
      add filters
    </button>
  </div>

  <div class="{ tags-filters-wrapper: true, is-collapsed: !this.shouldShowFilters() }">
    <div class="tags-filters-container">
      <div class="tags-filters-header">
        <p class="tags-section-title search-by">
          Narrow work by skill:
        </p>
      </div>
      <div class="tags-filters-buttons-wrapper">
        <div class="{ this.opts.tagsClass } tags tags-filters">
          <tag-button each={ this.getAllTags() }
              config={ this }>
          </tag-button>
        </div>
      </div>

      <div class="hide-filters">
        <button class="x" onclick={ this.hideFilters }></button>
      </div>

    </div>
  </div>


  <script>
    // riot.observable(this);
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

    // // Init

    // this.setupInitialTags = function(taggedItems) {
    //   var allTagNames = [];
    //   _.each(taggedItems, function(tagsItem) {
    //     allTagNames = _.union(allTagNames, tagsItem.primaryTags);
    //   });
      
    //   var allTags = _.map(allTagNames, function(tagName) {
    //     return {
    //       name: tagName,
    //       active: false
    //     };
    //   });

    //   return allTags;
    // };

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


    // Active Tags and Toggling
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

  </script>

</tags-filters>