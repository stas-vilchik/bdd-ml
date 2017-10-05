{
  expect(
    getPath(
      {
        a: {}
      },
      "a.b.c"
    )
  ).toEqual({
    hasEndProp: false,
    lastTraversedObject: {},
    traversedPath: ["a"],
    value: undefined
  });
}
