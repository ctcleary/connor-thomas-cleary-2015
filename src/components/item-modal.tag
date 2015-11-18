<item-modal>
  <article>
    <div class="item-modal-wrapper" style={ this.getTransitionStyle() } onclick={ this.dismissModal }>
      <div class="item-modal" riot-style={ this.getStyle() } onclick={ this.stopEvent }>
        <div class="item-modal-contents">
          
          <div class="item-modal-close" onclick={ this.dismissModal }> X </div>

          <h1 class="item-modal-headline"> { this.opts.title; } </h1>
          <div class="item-modal-description">

          </div>

        </div>
      </div>
    </div>
  </article>

  <script>
    this.transitionLengthS = 0.25;
    var modalConfig = this.opts.modal;

    this.getDescription = function() {
      return modalConfig.title;
    }

    this.getStyle = function() {
      return 'background: white;';
    };

    this.stopEvent = function(e) {
      e.stopPropagation();
    }


    this.dismissModal = function() {
      window.ctc.dismissModal();
    };

    this.dismiss = function() {
      this.hide();
      clearTimeout(this.unmountTimeout)
      this.unmountTimeout = setTimeout(this.unmount, 
          this.transitionLengthS+1000);
    };

    this.dismissOnEsc = function(e) {
      if (e.keyCode === 27) {
        this.dismissModal();
      }
    }

    this.getTransitionStyle = function() {
      return 'transition: opacity ' + this.transitionLengthS +'s cubic-bezier(0.445, 0.050, 0.550, 0.950)';
    }
    this.show = function() {
      // TODO, figure out why show opacity transition isn't happening.
      if (!this.wrapper) {
        console.log("danger will robinson");
      }
      this.wrapper.style.opacity = 1;
    }
    this.hide = function() {
      if (!this.wrapper) {
        console.log("danger will robinson");
      }
      this.wrapper.style.opacity = 0;
    }

    this.appendModalContents = function(descEl) {
      // Must be cloned to stop Shaven from modifying
      // the original data (passed by reference);
      var descClone = JSON.parse(
        JSON.stringify(modalConfig.description));
      var description = shaven(descClone);
      descEl.appendChild(description[0]);
    }

    this.on('mount', function() {
      var _this = this;
      _this.wrapper = this.root.getElementsByClassName('item-modal-wrapper')[0];

      var descEl = this.root.getElementsByClassName('item-modal-description')[0];
      this.appendModalContents(descEl);

      _this.boundKeyHandler = _this.dismissOnEsc.bind(_this);
      document.addEventListener('keydown', _this.boundKeyHandler);

      console.log("this.wrapper.style.opacity ::", this.wrapper.style.opacity);
      this.show();
    });

    this.on('before-unmount', function() {
      var _this = this;
      document.removeEventListener('keydown', _this.boundKeyHandler);

      if (!this.wrapper){
        console.log("danger will robinson");
      }

      var descEl = this.root.getElementsByClassName('item-modal-description')[0];
      descEl.innerHTML = '';
    });

  </script>
</item-modal>