{
  var a = {};
  var b = {
    getFoo: function getFoo() {
      return this.foo;
    }
  };
  var thisArg = {
    foo: "barbaz"
  };
  extend(a, b, thisArg);
  expect(typeof a.getFoo).toEqual("function");
  expect(a.getFoo()).toEqual(thisArg.foo);
}
