<tags-filters>
  <div class="tags-filters">
    <div class="{ tags-filters-wrapper: true, is-collapsed: !parent.shouldShowFilters() }">
      <div class="tags-filters-container">
        <div class="tags-filters-header">
          <p class="tags-section-title search-by" if={ this.getInactiveTags().length > 0 }>
            Narrow work by skill:
          </p>
        </div>
        <div class="tags-filters-buttons-wrapper">
          <div class="{ this.opts.tagsClass } tags tags-filters">
            <tag-button each={ this.getInactiveTags(); }
                config={ this }>
            </tag-button>
          </div>
        </div>
        <div class="hide-filters">
          <button class="x" onclick={ this.hideFilters }></button>
        </div>

        <div class="active-tags-container" if={ this.getActiveTags().length > 0 }>
          <div class="matching-toggle-container">
            <p class="tags-section-title"> Match </p>
            <div class="matching-any-all-toggle tags">
              <button class={ this.getMatchingClasses() }
                  onclick={ this.toggleMatching }>
                <div class="any-all-3d-wrap">
                  <div class="any-all-text">
                    <span class="matching-text cube-front all-text">all</span>
                    <span class="matching-text cube-bottom any-text">any</span>
                  </div>
                </div>
                <span class="filters-text">filters</span>
              </button>
            </div>
          </div>
          <div class="remove-search-tags-container">
            <p class="tags-section-title remove-search-tags">
              Remove active filters:
            </p>
            <div class="{ this.opts.tagsClass } tags tags-active">
              <tag-button each={ this.getActiveTags() }
                  config={ this }>
              </tag-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>

  </script>
</tags-filters>