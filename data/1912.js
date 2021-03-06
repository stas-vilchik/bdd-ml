{
  if (typeof define === "function" && define.amd) {
    define("my custom module name", ["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.foo = global.foo || {};
    global.foo.bar = global.foo.bar || {};
    global.foo.bar.baz = global.foo.bar.baz || {};
    global.foo.bar.baz.qux = mod.exports;
  }
}
