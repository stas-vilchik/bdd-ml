{
  class Foo {
    constructor() {
      var _this2 = this;

      Object.defineProperty(this, "fn", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function() {
          return console.log(_this2);
        }
      });
    }
  }

  Object.defineProperty(Foo, "fn", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function() {
      return console.log(_this);
    }
  });
}
