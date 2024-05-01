<tagged-item class="{ parent.opts.itemsClass } { w-modal: this.hasModal } { w-url: this.hasUrl } { w-ifrm: this.hasIfrm }">
    
    <button if={ this.hasModal }
      class="modal-button"
      onclick={ this.getClickAction() }
    >

      <div class="tagged-item-flavor">
        <img    if={ this.opts.slate.url }     src={ this.opts.slate.url }     class="item-image" />
        <iframe if={ this.opts.slate.ifrmUrl } src={ this.opts.slate.ifrmUrl } class="item-ifrm" scrolling="no" />
      </div>
      <div if={ this.opts.slate.ifrmUrl } class="ifrm-cover"></div>
      <tagged-item-content if={ !this.hasUrl }
          title={ this.opts.title }
          venue={ this.opts.venue }
      >
      </tagged-item-content>
    </button>
    <a if={ !this.hasModal }
      href={ this.opts.url } 
    >
      <tagged-item-content 
        title={ this.opts.title }
        venue={ this.opts.venue }
        pullquote={ this.opts.pullquote }
      >
      </tagged-item-content>
    </a>


  <script>
    this.hasModal    = !!this.opts.modal;
    this.hasUrl      = !!this.opts.url;
    this.hasIfrm     = !!this.opts.slate && !!this.opts.slate.ifrmUrl;
    this.hasHeadline = !!this.opts.headline;
    
    if (this.hasModal && this.hasUrl || !this.hasModal && !this.hasUrl && !this.hasHeadline ) {
      window.debug.warn("WARNING: Bad config. An item should have either modal or url, unless it is a headline.");
    }

    this.initModal = function() {
      console.log("initModal");
      window.location.hash = window.util.str.makeHashKey(this.opts.title);
    };

    this.getClickAction = function() {
      if (this.hasModal) {
        return this.initModal;
      }

      return null;
    };
  </script>
</tagged-item>
