{
  var _this2 = this;

  console.log("async wrapper:", this === "foo");

  (function() {
    console.log("nested arrow:", _this2 === "foo");
  })();
}
