<tagged-item class="{ parent.opts.itemsClass } { w-modal: this.hasModal } { w-url: this.hasUrl } { w-ifrm: this.hasIfrm }">
    <img    if={ this.opts.slate.url }     src={ this.opts.slate.url }     class="item-image" />
    <iframe if={ this.opts.slate.ifrmUrl } src={ this.opts.slate.ifrmUrl } class="item-ifrm" scrolling="no" />

    <a if={ this.hasUrl }
      href={ this.opts.url } 
    >
      <tagged-item-content 
        title={ this.opts.title }
        venue={ this.opts.venue }
        pullquote={ this.opts.pullquote }
      >
      </tagged-item-content>
    </a>
    <tagged-item-content if={ !this.hasUrl }
        onclick={ this.getClickAction() }
        title={ this.opts.title }
        venue={ this.opts.venue }
    >
    </tagged-item-content>


  <script>
    this.hasModal   = !!this.opts.modal;
    this.hasUrl     = !!this.opts.url;
    this.hasIfrm    = !!this.opts.slate && !!this.opts.slate.ifrmUrl;
    
    if (this.hasModal && this.hasUrl || !this.hasModal && !this.hasUrl ) {
      window.debug.warn("WARNING: Bad config. An item should have either modal or url.");
    }

    this.initModal = function() {
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
