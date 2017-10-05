{
  [
    objectContaining({
      foo: "foo"
    }).asymmetricMatch({
      bar: "bar"
    }),
    objectContaining({
      foo: "foo"
    }).asymmetricMatch({
      foo: "foox"
    }),
    objectContaining({
      foo: undefined
    }).asymmetricMatch({})
  ].forEach(test => {
    jestExpect(test).toEqual(false);
  });
}
