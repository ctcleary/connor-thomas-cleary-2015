<item-modal>
  <article>
    <div class="item-modal-viewport" style={ this.getTransitionStyle() }>
      <div class="item-modal-lightbox" onclick={ this.dismissModal }></div>
      <div class="item-modal-wrapper">
        <div class="item-modal-close" onclick={ this.dismissModal }> </div>

        <div class="item-modal" style={ this.getModalStyle() }>

          <div class="item-modal-header">

            <h1 class="item-modal-headline"> { this.modalTitle } </h1>
            <div class="item-modal-hero" style={ this.getHeroStyle() }></div>

          </div> <!-- end item-modal-header -->

          <!-- <div class="item-modal-contents-flex"> -->
          <div class="item-modal-contents">
            <div class="item-modal-description">
              <h2> Description </h2>
            </div>

            <div class="item-modal-sidebar">

              <div if={ this.hasInfo }
                  class="item-modal-info item-modal-sidebar-section">
                <h2> Info </h2>
              </div>

              <div if={ this.hasSkills }
                  class="item-modal-skills item-modal-sidebar-section">
                <h2> Skills </h2>
              </div>

              <div if={ this.hasTags }
                  class="item-modal-tags item-modal-sidebar-sections">
                <h2> Tagged </h2>
              </div>

            </div>

          </div> <!-- end item-modal-contents -->
          <!-- </div> end item-modal-contents-flex -->
        </div> <!-- end .item-modal -->

      </div>
    </div>
  </article>

  <script>
    var modalConfig = this.opts.modal;
    this.transitionLengthS = 0.25;
    this.modalTitle = modalConfig.title || this.opts.title;

    this.isCustom  = !!modalConfig.custom;
    this.hasInfo   = !!modalConfig.info;
    this.hasSkills = !!this.opts.skills;
    this.hasTags   = !!this.opts.tags;

    // STYLES
    this.getTransitionStyle = function() {
      return 'transition: opacity ' + this.transitionLengthS +'s cubic-bezier(0.445, 0.050, 0.550, 0.950);';
    }
    this.getModalStyle = function() {
      return 'background: white;';
    };
    this.getHeroStyle = function() {
      return ['background: url(' + modalConfig.hero.url + ');',
        'background-size: cover;',
        'background-position: ' + (modalConfig.hero.position || 'center center') + ';',
        ''].join(' ');
    }

    // UTILITIES
    this._dismiss = function() {
      this.hide();
      this.root.parentNode.removeChild(this.root);
    };
    this.dismissModal = function(e) {
      e.stopPropagation();
      this._dismiss();
      window.ctc.dismissModal();
    };
    this.dismissOnEsc = function(e) {
      console.log("e.keyCode ::", e.keyCode);
      if (e.keyCode === 27) {
        this.dismissModal();
      }
    };

    this.show = function() {
      // TODO, figure out why show opacity transition isn't happening.
      if (!this.viewport) {
        console.log("modal show :: danger, will robinson");
      }
      this.viewport.style.opacity = 1;
    }
    this.hide = function() {
      if (!this.viewport) {
        console.log("modal hide :: danger, will robinson");
      }
      this.viewport.style.opacity = 0;
    }


    this.getDeepClone = function (obj) {
      return JSON.parse(JSON.stringify(obj));
    }

    this.appendShaven = function(shavenConfig, elClass) {
      // shaven alters the object passed to it, so we must clone.
      var clone = this.getDeepClone(shavenConfig);
      var shavenObj = shaven(clone);

      var el = this.root.getElementsByClassName(elClass)[0];
      el.appendChild(shavenObj[0]);
    }

    this.appendDescription = function() {
      this.appendShaven(modalConfig.description, 'item-modal-description');
    }
    this.appendInfo = function() {
      if (this.hasInfo) {
        this.appendShaven(modalConfig.info, 'item-modal-info');
      }
    }
    this.appendSkills = function() {
      if (this.hasSkills) {
        this.appendShaven(modalConfig.skills, 'item-modal-skills');
      }
    }
    this.appendTags = function() {
      if (this.hasTags) {
        var tags = this.opts.tags;
        var tagsShaven = ['ul', []];
        for (var i = 0; i < tags.length; i++) {
          tagsShaven[1].push(['li', tags[i]]);
        }
        this.appendShaven(tagsShaven, 'item-modal-tags');
      }
    }

    this.appendModalContents = function() {
      try {
        this.appendDescription();
        this.appendInfo();
        this.appendSkills();
        this.appendTags();
      } catch(e) {
        console.log("e ::", e);
      }
    }

    this.on('mount', function() {
      this.viewport = this.root.getElementsByClassName('item-modal-viewport')[0];
      this.appendModalContents.call(this);

      this.boundKeyHandler = this.dismissOnEsc.bind(this);
      document.addEventListener('keydown', this.boundKeyHandler);

      this.show();
    });

    this.on('before-unmount', function() {
      document.removeEventListener('keydown', this.boundKeyHandler);

      if (!this.viewport) {
        console.log("no wrapper ref at unmount danger will robinson");
      }
    });

  </script>
</item-modal>