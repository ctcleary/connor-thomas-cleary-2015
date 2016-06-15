/**
 * Typist.js
 * Author: Connor Thomas Cleary - github/ctcleary
 * Version: v1.1
 *
 * # Summary:
 *
 * A simple utility for creating animations simulating a human typing text into a DOM Element.
 *
 *
 * # Constructor With Options Hash:
 *
 * new Typist({
 *   el: (DOM) Element,  // (Required) Text will be typed directly into this el. (Style your text via CSS on this el.)  
 *   preText: String,    // (Optional) Text to show in the el before the animation starts, will not be
 *                                     deleted, and all stage text will appear after preText.
 *
 *   clearAfterComplete: Boolean, // (Optional. Default: false) Should Typist clear the last stage?
 *
 *   emptyWait:   Number, // (Optional. Default: 125) How long to idle on empty before typing the next stage in ms.
 *   messageWait: Number, // (Optional. Default: 700) How long to idle on full text before deleting current stage in ms.
 *
 *   writeSpeed: Number,  // (Optional. Default: 60) How quickly each new character is typed in ms.
 *   clearSpeed: Number,  // (Optional. Default: 60) How quickly characters are deleted in ms.
 *                        // Note: both the Speed variables are randomized a bit to feel more organic.
 *
 *   stages: Array<Object>> // An array of plain objects using the "Stage" schema (below).  
 * })
 *
 *
 * # "Stage" Object Schema:
 *
 * {
 *   text: String, // Text to type during this stage.
 *
 *   // All these are customizable on a per-stage basis.
 *   writeSpeed: Number, // (Optional)
 *   clearSpeed: Number, // (Optional)
 *   emptyWait: Number,   // (Optional) // Increase the amount of time Typist stays empty BEFORE this stage types.
 *   messageWait: Number, // (Optional)
 * }
 *
 *
 * # Example Usage:
 *
 * var typist = new Typist({
 *   el: document.getElementById('typistEl'),
 *   stages: [
 *     { text: 'Help!', },
 *     { text: 'I\'m stuck', },
 *     { text: 'in a computer!', },
 *     {
 *       text: 'GET ME OUT OF HERE!.',
 *       writeSpeed: 150,
 *       emptyWait: 800
 *     }
 *   ]
 * });
 *
 */

var Typist = function(options) {
  if (options.el == null) {
    console.warn('Required parameter not found. Aborting Typist initialization.');
    return;
  }

  this.el = options.el;
  this.preText = options.preText || '';

  this.stages = options.stages;
  this.stageIndex = 0;

  this.writeSpeed = options.writeSpeed || 60;
  this.clearSpeed = options.clearSpeed || 60;

  this.emptyWait    = options.emptyWait   || 125;
  this.messageWait  = options.messageWait || 700;

  this.clearAfterComplete = options.clearAfterComplete || false;

  this.init();
};

Typist.prototype = {
  init: function() {
    this.el.innerText = this.preText;
    this.curTextIndex = 0;

    var stage = this.stages[ this.stageIndex ];
    var wait = stage.delay || this.emptyWait;
    this.setTypeCharTimeout(wait);
  },

  rand: function(limit) {
    return Math.round(Math.random()*limit);
  },

  getCurrentStage: function() {
    return this.stages[ this.stageIndex ];
  },

  typeChar: function() {
    var curText = this.stages[ this.stageIndex ].text;
    var nextChar = curText[ this.curTextIndex ];
    this.el.textContent = this.el.textContent + nextChar;

    if (this.curTextIndex < curText.length-1) {
      this.curTextIndex++;
      var timeoutMod = this.rand(80);
      var upcomingChar = curText[ this.curTextIndex ];
      // Add more delay to spaces.
      if ( upcomingChar === ' ' ) {
        timeoutMod += this.rand(30);
      }
      this.setTypeCharTimeout( timeoutMod );
    } else {
      this.handleMessageComplete();
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
      this.handleMessageEmpty();
    }
  },

  setTypeCharTimeout: function(add) {
    var stage = this.getCurrentStage();
    var func = this.typeChar;
    var ms = stage.writeSpeed || this.writeSpeed;
    if (add != null) {
      ms += add;
    }
    this.setNextTimeout(ms, func);
  },

  setClearCharTimeout: function(add) {
    var stage = this.getCurrentStage();
    var func = this.clearChar;
    var ms = stage.clearSpeed || this.clearSpeed;
    if (add != null) {
      ms += add;
    }
    this.setNextTimeout(ms, func);
  },

  setNextTimeout: function(ms, func) {
    clearTimeout( this.charTimeout );
    this.charTimeout = setTimeout(
      func.bind( this ),
      ms );
  },

  handleMessageComplete: function() {
      var stage = this.getCurrentStage();
      var doClear = !this.isLastStage() || this.clearAfterComplete;
      if (doClear) {
        var messageWait = stage.messageWait || this.messageWait;
        this.setClearCharTimeout( messageWait );
      }
  },

  handleMessageEmpty: function() {
      var stage = this.getCurrentStage();
      if (!this.isLastStage()) {
        this.stageIndex++;
        stage = this.getCurrentStage();
        var emptyWait = stage.emptyWait || this.emptyWait;
        this.setTypeCharTimeout(emptyWait);
      }

  },

  isLastStage: function() {
    return this.stageIndex >= this.stages.length-1;
  }
};
