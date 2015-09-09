<tags-app>
  <p> { this.opts.searchPhrase } </p>
  <div class="{ this.opts.tagsClass } tags">
    <tag-button each={ this.getInactiveTags() }
        config={ this }>
    </tag-button>
  </div>

  <p if={ this.getActiveTags().length > 0 }>
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

  <script> 
    // Init
    var _this = this;

    this.allTags = (function() {
      var allTagNames = [];
      _.each(_this.opts.tagsItems, function(tagsItem) {
        allTagNames = _.union(allTagNames, tagsItem.tags);
      });
      
      var allTags = _.map(allTagNames, function(tagName) {
        return {
          name: tagName,
          active: false
        };
      });

      return allTags;
    })();
    

    // Tags
    this.getAllTags = function() {
      return this.allTags;
    };    
    this.getActiveTags = function() {
      var active = _.where(this.allTags, { active: true });
      return active;
    };
    this.getInactiveTags = function() {
      var active = _.where(this.allTags, { active: false });
      return active;
    };
    this.toggleTag = function(e) {
      var tag = e.item;
      tag.active = !tag.active;
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

      var scopedHasAnyActiveTags = this.hasAnyActiveTag;
      return _.filter(taggedItems, function(item) {
        return scopedHasAnyActiveTags(item, activeTags);
      });
    };
    this.hasTag = function(item, testTag) {
      return (_.indexOf(testTag, item.tags) !== -1);
    };
    this.hasAnyActiveTag = function(item, activeTags) {
      var itemsTags = item.tags;
      for (var i = 0; i < activeTags.length; i++) {
        if (_.indexOf(itemsTags, activeTags[i].name) !== -1) {
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
