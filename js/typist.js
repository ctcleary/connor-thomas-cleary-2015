var Typist = function(options) {
  this.el = options.el;
  this.preText = options.preText || '';

  this.stages = options.stages;
  this.stageIndex = 0;

  this.defaultWriteSpeed = options.writeSpeed || 60;
  this.clearSpeed = options.clearSpeed || 60;

  this.init();
};

Typist.prototype = {
  init: function() {
    this.el.innerText = this.preText;
    this.curTextIndex = 0;

    var stage = this.stages[ this.stageIndex ];
    this.setTypeCharTimeout(stage.delay || 0);
  },

  rand: function(limit) {
    return Math.round(Math.random()*limit);
  },

  typeChar: function() {
    var curText = this.stages[ this.stageIndex ].text;
    var nextChar = curText[ this.curTextIndex ];
    this.el.textContent = this.el.textContent + nextChar;

    if (this.curTextIndex < curText.length-1) {
      this.curTextIndex++;
      var timeoutMod = this.rand(80);
      var upcomingChar = curText[ this.curTextIndex ];
      if ( upcomingChar === ' ' ) {
        timeoutMod += this.rand(30);
      }
      this.setTypeCharTimeout( timeoutMod );
    } else {
      this.completeStage();
    }
  },

  clearChar: function() {
    var curText = this.stages[ this.stageIndex ].text;
    var substringEnd = this.preText.length + this.curTextIndex;
    this.el.textContent = this.el.textContent.substr(0, substringEnd);

    if (this.curTextIndex > 0) {
      this.curTextIndex--;
      this.setClearCharTimeout( this.rand(50) );
    } else if ( this.stageIndex < this.stages.length-1 ) {
      this.stageIndex++;
      var stage = this.stages[ this.stageIndex ];
      this.setTypeCharTimeout(stage.delay || 0);
    } else {
      console.log("donezo");
    }
  },

  setTypeCharTimeout: function(add) {
    var timeMod = add || 0;
    var stage = this.stages[ this.stageIndex ];
    var writeSpeed = stage.writeSpeed || this.defaultWriteSpeed;
    clearTimeout( this.typeCharTimeout );
    this.typeCharTimeout = setTimeout(
      this.typeChar.bind( this ),
      writeSpeed + timeMod );
  },

  setClearCharTimeout: function(add) {
    var timeMod = add || 0;
    clearTimeout( this.clearCharTimeout );
    this.clearCharTimeout = setTimeout(
      this.clearChar.bind( this ),
      this.clearSpeed + timeMod );
  },

  completeStage: function() {
      console.log("donesies.");
      var stage = this.stages[this.stageIndex];
      if ( stage.clearAfterComplete ) {
        var clearDelay = stage.clearDelay;
        this.setClearCharTimeout( clearDelay );
      }
  }
};
