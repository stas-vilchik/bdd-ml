{
  if (typeof define === "function" && define.amd) {
    define(["exports", "./evens"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./evens"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.evens);
    global.actual = mod.exports;
  }
}
