<tagged-item class="{ parent.opts.itemsClass } { w-modal: this.hasModal } { w-url: this.hasUrl }">
  <!-- <div class="tagged-item"> -->
    <div class="cover" style="{ this.getCoverStyle() }" onclick={ this.hasModal ? this.initModal : null; }>
      <!-- article? -->
      <div class="item">
        <div class="item-title">{ this.opts.title }</div>
        <div class="item-venue">{ this.opts.venue }</div>
        <div class="item-tags">
          <span class="item-tag" each={ t, i in tags }>{ t }</span>
        </div>
      </div>
    </div>
  <!-- </div> -->

  <script>
    console.log("this.opts ::", this.opts);
    this.hasModal = !!this.opts.modal;
    this.hasUrl   = !!this.opts.url;


    this.getCoverStyle = function() {
      var styles = '';
      if (this.opts.slate) {
        styles += 'background-image: url('+ this.opts.slate.url + '); ';
        styles += 'background-position: ' + (this.opts.slate.position || 'center center') + '; ';
      } else {
        styles += 'background-image: none; ';
      }
      if (this.hasModal) {
        styles += 'cursor: pointer; ';
      }
      return styles;
    };

    this.initModal = function() {
      window.ctc.initModal(this);
    };
  </script>
</tagged-item>
