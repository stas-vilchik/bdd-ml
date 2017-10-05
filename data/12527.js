{
  var instance = instances[instanceId];
  var timer = moduleGetter("timer");
  var timerAPIs = {
    setTimeout: function() {
      var args = [],
        len = arguments.length;

      while (len--) args[len] = arguments[len];

      var handler = function() {
        args[0].apply(args, args.slice(2));
      };

      timer.setTimeout(handler, args[1]);
      return instance.document.taskCenter.callbackManager.lastCallbackId.toString();
    },
    setInterval: function() {
      var args = [],
        len = arguments.length;

      while (len--) args[len] = arguments[len];

      var handler = function() {
        args[0].apply(args, args.slice(2));
      };

      timer.setInterval(handler, args[1]);
      return instance.document.taskCenter.callbackManager.lastCallbackId.toString();
    },
    clearTimeout: function(n) {
      timer.clearTimeout(n);
    },
    clearInterval: function(n) {
      timer.clearInterval(n);
    }
  };
  return timerAPIs;
}
