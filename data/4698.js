{
  expect(
    getPath(
      {
        a: {
          b: {
            c: 5
          }
        }
      },
      "a.b.c"
    )
  ).toEqual({
    hasEndProp: true,
    lastTraversedObject: {
      c: 5
    },
    traversedPath: ["a", "b", "c"],
    value: 5
  });
  expect(
    getPath(
      {
        a: {
          b: {
            c: {
              d: 1
            }
          }
        }
      },
      "a.b.c.d"
    )
  ).toEqual({
    hasEndProp: true,
    lastTraversedObject: {
      d: 1
    },
    traversedPath: ["a", "b", "c", "d"],
    value: 1
  });
}
