{
  try {
    var r = require;
    var vertx = r("vertx");
    lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return lib$es6$promise$asap$$useVertxTimer();
  } catch (e) {
    return lib$es6$promise$asap$$useSetTimeout();
  }
}
