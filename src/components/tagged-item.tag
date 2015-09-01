<tagged-item>
  <div class="cover" style={ this.getCoverStyle() }>
    <div class="item" > { title } 
    <p each={ t, i in tags }
        class="temp"
        style="color:red;">
      { t }
    </p>
    </div>
  </div>

  <script>
    this.getCoverStyle = function() {
      var styles = '';
      if (this.slateUrl) {
        styles += 'background-image: url('+ this.slateUrl + '); ';
      }
      return styles;
    }
  </script>
</tagged-item>
