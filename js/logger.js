// A little utility to allow development debug logs, that also
// allows us to centrally mute all debug logging when we go into production.
window.debug = {
  doDebug: false,

  argsToArray: function(argsObj) {
    return Array.prototype.slice.call(argsObj);
  },

  log: function() {
    if (this.doDebug) {
      var argsArray = this.argsToArray(arguments);
      console.log.apply(console, argsArray);
    }
  },
  warn: function() {
    if (this.doDebug) {
      var argsArray = this.argsToArray(arguments);
      console.warn.apply(console, argsArray);
    }
  },
  error: function() {
    if (this.doDebug) {
      var argsArray = this.argsToArray(arguments);
      console.error.apply(console, argsArray);
    }
  }
};