{
  const sym = Symbol("foo");
  const sym2 = Symbol("foo");
  const obj1 = {
    [sym]: "one"
  };
  const obj2 = {
    [sym2]: "one"
  };
  const obj3 = {
    [sym]: "one"
  };
  expect(obj1).toEqual(obj3);
  expect(obj1).not.toEqual(obj2);
}
