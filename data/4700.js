{
  expect(
    getPath(
      {
        a: {
          b: {
            c: undefined
          }
        }
      },
      "a.b.c"
    )
  ).toEqual({
    hasEndProp: true,
    lastTraversedObject: {
      c: undefined
    },
    traversedPath: ["a", "b", "c"],
    value: undefined
  });
}
