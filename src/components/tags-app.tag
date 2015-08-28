<tags-app>
  <p> Search portfolio by skills used: </p>
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
      <tagged-item each={ this.allTags }
          class="{ parent.opts.itemsClass }">
      </tagged-item>
    </div>
  </div>

  <script>
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
    }

    this.getItems = function() {
      return this.opts.tagsItems;
    };

    this.getItemsClass = function() {
      return this.opts.itemsClass;
    };

    var _this = this;
    this.toggleTag = function(e) {
      var tag = e.item;
      tag.active = !tag.active;
      // console.log("this.getInactiveTags() ::", this.getInactiveTags());
    };
  </script>
</tags-app>
