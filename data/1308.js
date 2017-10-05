{
  class Baz {
    constructor(force) {
      _initialiseProps.call(this);
    }
  }

  Object.defineProperty(Baz, "fn", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function() {
      return console.log(_this);
    }
  });

  var _initialiseProps = function() {
    var _this4 = this;

    Object.defineProperty(this, "fn", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function() {
        return console.log(_this4);
      }
    });
    Object.defineProperty(this, "force", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: force
    });
  };
}
