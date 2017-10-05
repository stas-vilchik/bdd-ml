{
  const sym = Symbol("foo2");
  const obj1 = {
    foo: 2,
    [sym]: "one"
  };
  const obj2 = {
    foo: 2,
    [sym]: "two"
  };
  const obj3 = {
    foo: 2,
    [sym]: "one"
  };
  expect(obj1).toEqual(obj3);
  expect(obj1).not.toEqual(obj2);
}
