{
  expect(
    getPath(
      {
        a: {
          b: {}
        }
      },
      "a.b.c"
    )
  ).toEqual({
    hasEndProp: false,
    lastTraversedObject: {},
    traversedPath: ["a", "b"],
    value: undefined
  });
}
