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
        <tagged-item each={ this.getActiveItems() }
            class="{ parent.opts.itemsClass }">
        </tagged-item>
      </div>
    </div>
  </div>

  <script> 
    // Init
    this.getAllTags = function(taggedItems) {
      var allTagNames = [];
      _.each(taggedItems, function(tagsItem) {
        allTagNames = _.union(allTagNames, tagsItem.tags);
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
      console.log("tag ::", tag);
      console.log("this.allTags ::", this.allTags);
      tag.active = !tag.active;
      this.update();
    };


    // Items
    this.getItems = function() {
      return this.opts.tagsItems;
    };

    this.getActiveItems = function() {
      var activeTags = this.getActiveTags();
      var taggedItems = this.getItems();
      if (activeTags.length === 0) {
        return taggedItems;
      }

      return _.filter(taggedItems, function(item) {
        return this.hasAllActiveTags(item, activeTags);
      }, this);
    };
    this.hasTag = function(item, testTag) {
      return (_.indexOf(testTag, item.tags) !== -1);
    };
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
