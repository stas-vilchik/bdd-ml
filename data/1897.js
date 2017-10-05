{
  if (typeof define === "function" && define.amd) {
    define(["foo-bar", "./mylib/foo-bar", "fizzbuzz"], factory);
  } else if (typeof exports !== "undefined") {
    factory(
      require("foo-bar"),
      require("./mylib/foo-bar"),
      require("fizzbuzz")
    );
  } else {
    var mod = {
      exports: {}
    };
    factory(global.fooBar, global.fooBar, global.fizzbuzz);
    global.actual = mod.exports;
  }
}
