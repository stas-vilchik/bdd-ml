{
  var args = [],
    len = arguments.length;

  while (len--) args[len] = arguments[len];

  var handler = function() {
    args[0].apply(args, args.slice(2));
  };

  timer.setTimeout(handler, args[1]);
  return instance.document.taskCenter.callbackManager.lastCallbackId.toString();
}
