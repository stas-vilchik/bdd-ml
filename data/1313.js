{
  var _this6 = this;

  class Qux {
    constructor() {
      var _this5 = this;

      Object.defineProperty(this, "fn", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function() {
          return console.log(_this5);
        }
      });
    }
  }

  Object.defineProperty(Qux, "fn", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function() {
      return console.log(_this6);
    }
  });
}
