<item-modal>
  <article>
    <div class="item-modal-wrapper" onclick={ this.dismissModal }>
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
    var modalConfig = this.opts;
    // console.log("this ::", this);

    this.getDescription = function() {
      return modalConfig.title;
    }

    this.getStyle = function() {
      return "background: white;";
    };

    this.stopEvent = function(e) {
      e.stopPropagation();
    }


    this.dismissModal = function() {
      window.ctc.dismissModal();
    };

    this.dismiss = function() {
      this.hide();
      this.unmount();
    };

    this.dismissOnEsc = function(e) {
      if (e.keyCode === 27) {
        this.dismissModal();
      }
    }

    this.show = function() {
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

    this.on('mount', function() {
      var _this = this;
      _this.wrapper = this.root.getElementsByClassName('item-modal-wrapper')[0];

      var descEl = this.root.getElementsByClassName('item-modal-description')[0];

      console.log("modalConfig ::", modalConfig);
      var descClone = JSON.parse(JSON.stringify(modalConfig));
      var description = shaven(descClone);
      descEl.appendChild(description[0]);

      _this.boundKeyHandler = _this.dismissOnEsc.bind(_this);
      document.addEventListener('keydown', _this.boundKeyHandler);

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