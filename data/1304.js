{
  var _class, _temp;

  return (
    (_temp = _class = class Bar {
      constructor() {
        var _this3 = this;

        Object.defineProperty(this, "fn", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function() {
            return console.log(_this3);
          }
        });
      }
    }),
    Object.defineProperty(_class, "fn", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function() {
        return console.log(_this);
      }
    }),
    _temp
  );
}
