{
  if (capture) {
    console.log("Weex do not support event in bubble phase.");
    return;
  }

  if (once) {
    var oldHandler = handler;
    var _target = target$1;

    handler = function(ev) {
      var res =
        arguments.length === 1
          ? oldHandler(ev)
          : oldHandler.apply(null, arguments);

      if (res !== null) {
        remove$2(event, null, null, _target);
      }
    };
  }

  target$1.addEvent(event, handler);
}
