{
  test("property exists", () => {
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
  });
  test("property doesnt exist", () => {
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
  });
  test("property exist but undefined", () => {
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
  });
  test("path breaks", () => {
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
  });
  test("empry object at the end", () => {
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
  });
}
