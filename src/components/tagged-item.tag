<tagged-item>
  <div class="cover" style={ this.getCoverStyle() }>
    <div class="item" > { title } </div>
  </div>

  <script>
    console.log("this.opts ::", this.opts);

    this.getCoverStyle = function() {
      var styles = '';
      if (this.slateUrl) {
        styles += 'background-image: url('+ this.slateUrl + '); ';
      }
      return styles;
    }
  </script>
</tagged-item>