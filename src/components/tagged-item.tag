<tagged-item class="{ parent.opts.itemsClass }">
  <!-- <div class="tagged-item"> -->
    <div class={ this.hasModal ? "cover w-modal" : "cover" } style="{ this.getCoverStyle() }" onclick={ this.hasModal ? this.initModal : null; }>
      <!-- article? -->
      <div class="item">
        <div class="item-title">{ title }</div>
        <div class="item-venue">{ venue }</div>
        <div class="item-tags">
          <span class="item-tag" each={ t, i in tags }>{ t }</span>
        </div>
      </div>
    </div>
  <!-- </div> -->

  <script>
    this.hasModal = !!this.modal;

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
      window.ctc.initModal(this.modal);
    };
  </script>
</tagged-item>
