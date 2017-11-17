<tags-app>
  <div class="tags-app">
    <tags-filters
      if={ !this.opts.removeFilters }
      app-config={ this.appConfig }
      action-handler={ this.actionHandler }
      all-tags={ this.allTags }
      tags-class={ this.opts.tagsClass }
      preset-filters={ this.opts.presetFilters }
      >
    </tags-filters>
    <div
      if={ this.opts.removeFilters }
      class="remove-filters-spacer">
    </div>

    <div class="{ this.opts.itemsWrapClass }">
      <div class="items-container">
          <div class="{ this.opts.itemsHoldClass }">
            <virtual each={ this.getActiveItems() }>
              <h2 class="items-headline" if={ headline }>{ headline }</h2>
              <tagged-item 
                if={ !headline }
                title={ title }
                slate={ slate }
                venue={ venue }
                modal={ modal }
                url={ url }
                target={ target }
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
                  Showing { this.itemLimit } items. Click to show all { this.getItems().length }.
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


    // Init
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

    // TODO this seems to be broken in some strange way
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

  </script>
</tags-app>
