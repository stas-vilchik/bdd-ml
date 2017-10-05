{
  var _resolve;

  callbacks.push(function() {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, "nextTick");
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  }

  if (!cb && typeof Promise !== "undefined") {
    return new Promise(function(resolve, reject) {
      _resolve = resolve;
    });
  }
}
