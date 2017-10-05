{
  expect(
    getPath(
      {
        a: {
          b: {
            c: {}
          }
        }
      },
      "a.b.c.d"
    )
  ).toEqual({
    hasEndProp: false,
    lastTraversedObject: {},
    traversedPath: ["a", "b", "c"]
  });
}
