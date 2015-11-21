<tagged-item class="{ parent.opts.itemsClass }">
  <!-- <div class="tagged-item"> -->
    <div class={ this.hasModal ? "cover w-modal" : "cover" } style="{ this.getCoverStyle() }" onclick={ this.hasModal ? this.initModal : null; }>
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
    this.hasModal = !!this.opts.modal;

    this.getCoverStyle = function() {
      var styles = '';
      console.log("this.opts ::", this.opts);
      // console.log("this.opts.slate ::", this.opts.slate);
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
