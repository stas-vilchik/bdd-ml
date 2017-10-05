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
    factory(global.fooBAR, global.fooBAR, global.fizzBuzz);
    global.actual = mod.exports;
  }
}
