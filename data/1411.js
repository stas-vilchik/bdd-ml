{
  var _this = this;

  if (true) {
    var _loop = function(k) {
      function foo() {
        return this;
      }

      function bar() {
        return foo.call(this);
      }

      console.log(_this, k);
    };

    for (var k in kv) {
      _loop(k);
    }
  }
}
