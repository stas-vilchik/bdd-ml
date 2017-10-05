{
  if (typeof define === "function" && define.amd) {
    define(
      "umd/module-name-with-overridden-global/expected",
      ["exports"],
      factory
    );
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.baz = mod.exports;
  }
}
