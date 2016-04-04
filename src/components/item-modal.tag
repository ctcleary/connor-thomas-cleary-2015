<item-modal>
  <article>
    <div class="item-modal-viewport" style={ this.getTransitionStyle() }>
      <div class="item-modal-lightbox" onclick={ this.dismissModal }></div>
      <div class="item-modal-wrapper">
        <div class="item-modal-container">
          <div class="item-modal-close" onclick={ this.dismissModal }> </div>

          <div class="item-modal" style={ this.getModalStyle() }>

            <div class="item-modal-header">

              <h1 class="item-modal-headline"> { this.modalTitle } </h1>

              <div class="item-hero-container">
                <div class="item-modal-hero"
                  if={ !this.isCustomHero && !this.isVimeoHero }
                  style={ this.getHeroStyle() }
                  >
                </div>
                <div class="item-modal-custom-hero"
                  if={ this.isCustomHero }
                  style={ this.getHeroStyle() }
                  >
                </div>
                <div class="item-modal-vimeo-hero"
                  if={ this.isVimeoHero }
                  style={ this.getHeroStyle() }
                  >
                </div>
              </div>

            </div> <!-- end item-modal-header -->

            <div class="item-modal-contents">
              
              <div class="item-modal-description">
                <h2> Description </h2>
              </div>

              <div class="item-modal-sidebar">
                
                <div if={ this.hasCTA }
                    class="item-modal-cta item-modal-sidebar-section">
                </div>

                <div if={ this.hasInfo }
                    class="item-modal-info item-modal-sidebar-section">
                  <h2> Info </h2>
                </div>

                <div if={ this.hasTags }
                    class="item-modal-tags item-modal-sidebar-section">
                  <h2> Tagged </h2>
                </div>

                <div if={ this.hasSkills }
                    class="item-modal-skills item-modal-sidebar-section">
                  <h2> Skills </h2>
                </div>

              </div>

            </div> <!-- end item-modal-contents -->
          </div> <!-- end .item-modal -->

        </div>
      </div>
    </div>
  </article>

  <script>
    var modalConfig = this.opts.modal;
    this.transitionLengthS = 0.25;
    this.modalTitle = modalConfig.title || this.opts.title;

    this.isCustomHero = !!modalConfig.hero.custom;
    this.isVimeoHero = !!modalConfig.hero.vimeo;

    this.isCustom  = !!modalConfig.custom;
    this.hasCTA    = !!modalConfig.cta;
    this.hasInfo   = !!modalConfig.info;
    this.hasSkills = !!this.opts.skills;
    this.hasTags   = !!this.opts.primaryTags;

    // STYLES
    this.getTransitionStyle = function() {
      return [
          'opacity: 0;',
          'transition: opacity ' + this.transitionLengthS +'s cubic-bezier(0.445, 0.050, 0.550, 0.950);'
        ].join('');
    }

    this.getModalStyle = function() {
      return 'background: white;';
    }

    this.getHeroStyle = function() {
      if (!modalConfig.hero.url) {
        return 'background-color: black';
      }
      var heroStyles = []
      if (modalConfig.hero.url) {
        heroStyles = ['background: url(' + modalConfig.hero.url + ');',
          'background-size: cover;',
          'background-position: ' + (modalConfig.hero.position || 'center center') + ';',
          ''];

      } else {
        heroStyles = ['background-color: black'];
        
      }

      if (modalConfig.hero.height != null) {
        heroStyles.push('height: '+ modalConfig.hero.height +'px;'); 
      }

      return heroStyles.join(' ');
    }


    // UTILITIES
    this.dismissModal = function(e) {
      window.history.back();
    };
    this.dismissOnEsc = function(e) {
      if (e.keyCode === 27) {
        this.dismissModal();
        // window.location.hash = '';
      }
    };
    this.show = function() {
      if (!this.viewport) {
        window.debug.warn('Something went wrong with the Modal Viewport.');
      }
     
      // this.viewport.style.opacity = 1;
      var v = this.viewport;
      setTimeout(function() {
        v.style.opacity = 1;
      }, 0);
    }


    // Appending Shaven Content 
    this.appendShaven = function(shavenConfig, elClass) {
      // shaven alters the object passed to it, so we must clone.
      var clone = window.util.obj.deepClone(shavenConfig);
      var shavenObj = shaven(clone);

      var el = this.root.getElementsByClassName(elClass)[0];
      el.appendChild(shavenObj[0]);
    }


    this.appendDescription = function() {
      this.appendShaven(modalConfig.description, 'item-modal-description');
    }
    this.appendCTA = function() {
      if (this.hasCTA) {
        var cta = ['a',
          {
            href: modalConfig.cta.href,
            target: modalConfig.cta.target || ''
          },
          modalConfig.cta.text,
        ];

        this.appendShaven(cta, 'item-modal-cta');
      }
    }
    this.appendInfo = function() {
      if (this.hasInfo) {
        this.appendShaven(modalConfig.info, 'item-modal-info');
      }
    }
    this.makeShavenList = function(arr) {
        var shavenList = ['ul'];
        var listItems = [];
        for (var i = 0; i < arr.length; i++) {
          listItems.push(['li', arr[i]]);
        }
        shavenList.push(listItems);
        return shavenList;
    };
    this.appendSkills = function() {
      if (this.hasSkills) {
        var skillsShaven = this.makeShavenList(this.opts.skills);
        this.appendShaven(skillsShaven, 'item-modal-skills');
      }
    }
    this.appendTags = function() {
      if (this.hasTags) {
        var tags = this.opts.primaryTags;
        tags = tags.concat(this.opts.secondaryTags);

        var tagsShaven = this.makeShavenList(tags);
        this.appendShaven(tagsShaven, 'item-modal-tags');
      }
    }


    this.appendCustomHero = function() {
      this.appendShaven(modalConfig.hero.custom, 'item-modal-custom-hero');
    }
    this.appendVimeoHero = function() {
      var vimeoId = modalConfig.hero.vimeo;
      var src = 'https://player.vimeo.com/video/' + vimeoId + '?title=0&byline=0&portrait=0'
      this.appendShaven(
        ['div',
          ['iframe', {
              src: src,
              frameborder: '0',
              webkitAllowFullScreen: '',
              mozallowfullscreen: '',
              allowFullScreen: ''
          }]
        ],
        'item-modal-vimeo-hero');
   
    }
    

    this.appendModalContents = function() {
      try {
        if (this.isVimeoHero) {
          this.appendVimeoHero();
        } else 
        if (this.isCustomHero) {
          this.appendCustomHero();
        }

        this.appendDescription();
        this.appendCTA();
        this.appendInfo();
        this.appendSkills();
        this.appendTags();
      } catch(e) {
        window.debug.errpr("e ::", e, e.stack);
      }
    }

    this.on('mount', function() {
      document.body.classList.add('modal-open');

      this.viewport = this.root.getElementsByClassName('item-modal-viewport')[0];
      this.appendModalContents.call(this);

      this.boundKeyHandler = this.dismissOnEsc.bind(this);
      document.addEventListener('keydown', this.boundKeyHandler);

      this.show();
    });

    this.on('before-unmount', function() {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', this.boundKeyHandler);

      if (!this.viewport) {
        window.debug.warn("No wrapper reference at modal unmount!");
      }
    });

  </script>
</item-modal>