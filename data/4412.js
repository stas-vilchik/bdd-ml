{
  [
    objectContaining({}).asymmetricMatch("jest"),
    objectContaining({
      foo: "foo"
    }).asymmetricMatch({
      foo: "foo",
      jest: "jest"
    }),
    objectContaining({
      foo: undefined
    }).asymmetricMatch({
      foo: undefined
    }),
    objectContaining({
      first: objectContaining({
        second: {}
      })
    }).asymmetricMatch({
      first: {
        second: {}
      }
    })
  ].forEach(test => {
    jestExpect(test).toEqual(true);
  });
}
