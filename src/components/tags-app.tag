<tags-app>
  <div class="tags-app">
    <p class="search-by" if={ this.getInactiveTags().length > 0 }>
      { this.opts.searchPhrase }
    </p>
    <div class="{ this.opts.tagsClass } tags">
      <tag-button each={ this.getInactiveTags(); }
          config={ this }>
      </tag-button>
    </div>

    <p class="remove-search-tags" if={ this.getActiveTags().length > 0 }>
      Remove active search tags:
    </p>
    <div class="{ this.opts.tagsClass } tags tags-active">
      <tag-button each={ this.getActiveTags() }
          config={ this }>
      </tag-button>
    </div>
    <!-- <span> Active tags </span> -->

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

    this.allTags = this.getAllTags(this.opts.tagsItems);

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
      var thisItemTags = item.tags;
      var activeTagNames = this.getActiveTagNames();
      return _.intersection(item.tags, activeTagNames).length === activeTags.length;
    };
    this.hasAnyActiveTag = function(item, activeTags) {
      var thisItemTags = item.tags;
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
