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
      if (this.slateUrl) {
        styles += 'background-image: url('+ this.slateUrl + '); ';
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
