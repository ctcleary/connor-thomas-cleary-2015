<tagged-item class="{ parent.opts.itemsClass }">
  <!-- <div class="tagged-item"> -->
    <div class="cover" style="{ this.getCoverStyle() }" onclick={ this.initModal }>
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
    // console.log("this.opts ::", this.opts);
    // console.log("this ::", this);
    console.log("this ::", this);
    console.log("this.opts.data ::", this.opts.data);
    this.getCoverStyle = function() {
      var styles = '';
      if (this.slateUrl) {
        styles += 'background-image: url('+ this.slateUrl + '); ';
      } else {
        styles += 'background-image: none; ';
      }
      if (this.description) {
        styles += 'cursor:pointer; ';
      }
      return styles;
    };

    this.initModal = function() {
      window.ctc.initModal(this);
    };
  </script>
</tagged-item>
