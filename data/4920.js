{
  const a = {};
  a.a = a;
  expect(stringify(a)).toBe('{"a": [Circular]}');
}
