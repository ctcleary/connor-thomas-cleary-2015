<featured-app>
  <div id="featured-app">
    <h1 class="featured-title">{ this.opts.appConfig.title }</h1>
    <p class="featured-subtitle" if={ !!this.opts.appConfig.subtitle }>{ this.opts.appConfig.subtitle }</p>
    <div class="app-contents">
      <div class="gallery">
        <div class="slides-container">
          <virtual each={ this.getGalleryConfig() }>
            <div class="slide-container">
              <div class="slide">
                <img class="slide-image" src={ url } />
                <p class="slide-caption">
                  { caption }
                </p>
              </div>
            </div>
          </virtual>
        </div>
        <div class="controls">
          <button class="gallery-nav go-left">
            <img src="assets/img/gallery-left-1.png" />
           </button>
          <button class="gallery-nav go-right">
            <img src="assets/img/gallery-right-1.png" />
           </button>
        </div>
      </div>
      <div class="blurb">
        <p> { this.getBlurb() } </p>
      </div>
    </div>
  </div>

  <script> 
    this.galleryConfig = this.opts.appConfig.gallery;
    this.blurbConfig = this.opts.appConfig.blurb;

    this.getGalleryConfig = function() {
      console.log('this.galleryConfig', this.galleryConfig);
      return this.galleryConfig;
    }

    this.getBlurb = function() {
      return this.blurbConfig.blurb;
    }


  </script>
</featured-app>
