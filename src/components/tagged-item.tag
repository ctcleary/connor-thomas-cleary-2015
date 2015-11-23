<tagged-item class="{ parent.opts.itemsClass } { w-modal: this.hasModal } { w-url: this.hasUrl }">
    <div class="cover" style="{ this.getCoverStyle() }" onclick={ this.getClickAction() }>
      <div class="item">
        <div class="item-title">{ this.opts.title }</div>
        <div class="item-venue">{ this.opts.venue }</div>
        <div class="item-tags">
          <span class="item-tag" each={ t, i in tags }>{ t }</span>
        </div>
      </div>
    </div>
    <div class="item-icon"></div>

  <script>
    this.hasModal = !!this.opts.modal;
    this.hasUrl   = !!this.opts.url;


    this.initModal = function() {
      window.ctc.initModal(this);
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

    this.getCoverStyle = function() {
      var styles = '';
      if (this.opts.slate) {
        styles += 'background-image: url('+ this.opts.slate.url + '); ';
        styles += 'background-position: ' + (this.opts.slate.position || 'center center') + '; ';
      } else {
        styles += 'background-image: none; ';
      }
      return styles;
    };

  </script>
</tagged-item>
