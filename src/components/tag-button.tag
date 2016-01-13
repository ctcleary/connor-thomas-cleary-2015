<tag-button>
  <button class={getClasses()} onclick="{ parent.toggleTag }">
    { this.opts.config.name }
  </button>
  
  <script>
    this.getClasses = function() {
      var classes = 'button tag-button';
      var isActive = this.opts.config.active;
      classes += (isActive) ? ' tag-button-active' : ' tag-button-inactive';
      return classes;
    }
  </script>
</tag-button>
