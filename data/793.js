{
  var a = {};
  var b = {
    foo: 123
  };
  var c = {
    bar: 456
  };
  merge(a, b, c);
  expect(typeof a.foo).toEqual("undefined");
  expect(typeof a.bar).toEqual("undefined");
  expect(typeof b.bar).toEqual("undefined");
  expect(typeof c.foo).toEqual("undefined");
}
