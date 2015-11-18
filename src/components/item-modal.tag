<item-modal>
  <article>
    <div class="item-modal-wrapper" onclick={ this.dismissModal }>
      <div class="item-modal" riot-style={ this.getStyle() }>
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
    var modalConfig = this.opts.modal;
    // console.log("this ::", this);

    this.getDescription = function() {
      return modalConfig.title;
    }

    this.getStyle = function() {
      return "background: white;";
    };

    this.dismissModal = function() {
      window.ctc.dismissModal();
    };

    this.dismiss = function() {
      this.hide();
      this.unmount();
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

      var closeEl = this.root.getElementsByClassName('item-modal-close')[0];
      closeEl.addEventListener('click', function() {
        _this.dismissModal.call(_this);
      });

      var descEl = this.root.getElementsByClassName('item-modal-description')[0];

      if (modalConfig && modalConfig.description) {
        // console.log("descEl.children.length ::", descEl.children.length);
        // console.log("modalConfig ::", modalConfig);
        // console.log("shaven ::", shaven);
        // console.log("description ::", description);
        var description = shaven(modalConfig.description);
        // console.log("description ::", description);
        descEl.appendChild(description[0]);
      } else {
        var tempDesc = document.createElement('div');
        tempDesc.innerHTML = 'this is a temporary description div';
        descEl.appendChild(tempDesc);
      }

      this.show();
    });

    this.on('before-unmount', function() {
      var _this = this;

      if (!this.wrapper){
        console.log("danger will robinson");
      }

      var descEl = this.root.getElementsByClassName('item-modal-description')[0];
      descEl.innerHTML = '';
    });

  </script>
</item-modal>