<tagged-item>
  <div class="cover" style="{ this.getCoverStyle() }">
    <!-- article? -->
    <div class="item">
      <div class="item-title">
        { title }
      </div>
      <div class="item-venue">
        { venue }
      </div>
<!--     <p each={ t, i in tags }
        class="temp"
        style="color:white;">
      { t }
    </p> -->
    </div>
  </div>

  <script>
    this.getCoverStyle = function() {
      var styles = '';
      if (this.slateUrl) {
        styles += 'background-image: url('+ this.slateUrl + '); ';
      } else {
        styles = 'background-image: none;';
      }
      return styles;
    };
  </script>
</tagged-item>
