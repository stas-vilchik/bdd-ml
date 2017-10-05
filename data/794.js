{
  var a = {
    foo: 123
  };
  var b = {
    bar: 456
  };
  var c = {
    foo: 789
  };
  var d = merge(a, b, c);
  expect(d.foo).toEqual(789);
  expect(d.bar).toEqual(456);
}
