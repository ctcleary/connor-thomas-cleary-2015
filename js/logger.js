window.debug = {
  doDebug: true,
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
      var argsArray = Array.prototype.slice.call(arguments);
      console.warn.apply(console, argsArray);
    }
  },
  error: function() {
    if (this.doDebug) {
      var argsArray = Array.prototype.slice.call(arguments);
      console.error.apply(console, argsArray);
    }
  }
};