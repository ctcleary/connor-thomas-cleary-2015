<tagged-item class="{ parent.opts.itemsClass } { w-modal: this.hasModal } { w-url: this.hasUrl }">
    <img class="item-image" if={ this.opts.slate.url } src={ this.opts.slate.url } />
    <div class="cover" onclick={ this.getClickAction() }>
      <div class="item">
        <div class="item-title"> { this.opts.title } </div>
        <div class="item-venue"> { this.opts.venue } </div>
        <div class="item-tags">
          <span class="item-tag" each={ t, i in primaryTags }>{ t }</span>
        </div>
      </div>
    </div>

  <script>
    this.hasModal = !!this.opts.modal;
    this.hasUrl   = !!this.opts.url;

    if (this.hasModal && this.hasUrl) {
      window.debug.warn("WARNING: Bad config. An item should have either modal or url.");
    }

    this.initModal = function() {
      window.location.hash = window.util.str.makeHashKey(this.opts.title);
    };
    this.openLink = function() {
      window.open(this.opts.url, '_blank');
    };

    this.getClickAction = function() {
      if (this.hasModal) {
        return this.initModal;
      } else if (this.hasUrl) {
        return this.openLink;
      }

      return null;
    };
  </script>
</tagged-item>
