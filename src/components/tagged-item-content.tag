<tagged-item-content>
  <div class="info">
    <div class="item">
      <div class="item-title"> { this.opts.title } </div>
      <div class="item-venue" if={ this.opts.venue }> { this.opts.venue } </div>
      <div class="item-tags">
        <span class="item-tag" each={ t, i in primaryTags }>{ t }</span>
      </div>
    </div>

    <div class="item-pull-quote" if={ this.hasPullQuote }>
      <p class="pull-quote"> { this.opts.pullquote } </p>
    </div>
  </div>


  <script>
    this.hasPullQuote = !!this.opts.pullquote;
  </script>
</tagged-item-content>