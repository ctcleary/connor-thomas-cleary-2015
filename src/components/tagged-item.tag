<tagged-item>
  <div class="cover" style={ this.getCoverStyle() }>
    <div class="item" > { title } </div>
  </div>

  <script>
    this.getCoverStyle = function() {
      console.log("this.opts ::", this.opts);
      var styles = '';
      if (this.slateUrl) {
        styles += 'background-image: url('+ this.slateUrl + '); ';
      }
      return styles;
    }
  </script>
</tagged-item>
