{
  var a = {
    foo: 123,
    bar: 456
  };
  var b = {
    bar: 789
  };
  a = extend(a, b);
  expect(a.foo).toEqual(123);
  expect(a.bar).toEqual(789);
}
