{
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1;

    handler = function(ev) {
      var res =
        arguments.length === 1
          ? oldHandler(ev)
          : oldHandler.apply(null, arguments);

      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }

  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? {
          capture: capture,
          passive: passive
        }
      : capture
  );
}
