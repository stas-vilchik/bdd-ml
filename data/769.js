{
  var a = {};
  var b = {
    foo: 123
  };
  extend(a, b);
  expect(a.foo).toEqual(b.foo);
}
