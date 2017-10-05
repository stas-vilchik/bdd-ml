{
  [
    1,
    "string",
    0.1,
    null,
    NaN,
    Infinity,
    true,
    false,
    [1],
    {},
    () => {}
  ].forEach(val => {
    it(`throws if '${val}:${typeof val}' is returned`, () => {
      return val;
    });
  });
}
