<tags-app>
  <span> Tags available </span>
  <div class="{ this.opts.tagsClass } tags">
    <tag-button each={ name, i in this.allTags }></tag-button>
  </div>
  <!-- <span> Active tags </span> -->

  <div class="{ this.opts.itemsWrapClass }">
    <div class="{ this.opts.itemsHoldClass }">
      <tagged-item each={ this.opts.tagsItems }
          class="{ parent.opts.itemsClass }" config={ this }>
      </tagged-item>
    </div>
  </div>

  <script>
    var _this = this;

    this.allTags = (function() {
      var allTags = [];
      _.each(_this.opts.tagsItems, function(tagsItem) {
        allTags = _.union(allTags, tagsItem.tags);
      });
      
      return allTags;
    })();
    console.log("this.allTags ::", this.allTags);
    
    this.getAllTags = function() {
      return this.allTags;
    };

    this.getItems = function() {
      return this.opts.tagsItems;
    }

    this.getItemsClass = function() {
      return this.opts.itemsClass;
    }
  </script>
</tags-app>
